(async function () {
    const url = window.location.href;
    const spUrl = url.split("?p=")[1];
    let pId = '';
    if (spUrl.includes("&")) pId = spUrl.split("&")[0];
    else pId = spUrl;
    let seatmapEndpoint = `https://tickets.seattlethunderbirds.com/include/modules/SeatingChart/Request/getPerformanceSeatmap.asp?p=${pId}`;
    let seatmapResp = await getData(seatmapEndpoint);
    if (seatmapResp.status) {
        let soldSeatsList = [], allSeatsList = [];
        let seatmap = seatmapResp.data;
        let sections = seatmap.sections;
        let prices = seatmap.prices;
        let allSeatsEndpoint = `https://tickets.seattlethunderbirds.com/include/modules/SeatingChart/request/getPerformanceSeats.asp?p=${pId}`;
        let seatsResp = await getData(allSeatsEndpoint);
        if (seatsResp.status) allSeatsList = seatsResp.data;
        let allSeats = parseAllSeats(allSeatsList);
        let soldSeatsEndpoint = `https://tickets.seattlethunderbirds.com/include/modules/SeatingChart/request/getPerformanceAvailability.asp?p=${pId}`
        let soldSeatsResp = await getData(soldSeatsEndpoint);
        if (soldSeatsResp.status) soldSeatsList = soldSeatsResp.data;
        let soldSeatsIds = parseSoldSeats(soldSeatsList);
        let availableSeats = getAvailableSeats(allSeats, soldSeatsIds, prices, sections);
        let resultData = getResultData(availableSeats, prices);
        chrome.runtime.sendMessage({ status: true, data: resultData, type: "seattle" });
    } else {
        chrome.runtime.sendMessage({ status: false, type: "seattle" });
    }

})();

function getData(endpoint) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                try {
                    if (this.status == 404) {
                        resolve({
                            status: false,
                        });
                    } else {
                        resolve({
                            status: true,
                            data: JSON.parse(xhr.responseText),
                        });
                    }
                } catch (e) {
                    resolve({
                        status: false,
                    });
                }
            }
        });

        xhr.open("GET", endpoint);
        xhr.send();
    });
}

function parseAllSeats(seats) {
    let seatsList = [];
    for (let i = 0; i < seats.length; i++) {
        try {
            let seat = {};
            let seatData = seats[i].split("|");
            seat.seatID = parseInt(seatData[0]);
            seat.sectionID = parseInt(seatData[3]);
            seat.seatCategory = parseInt(seatData[4]);
            seat.row = seatData[5];
            seat.seatNo = seatData[6];
            seatsList.push(seat);
        } catch (error) {
            console.log(error);
        }

    }
    return seatsList;
}

function parseSoldSeats(seats) {
    let soldSeatsIdList = [];
    for (let i = 0; i < seats.length; i++) {
        let soldSeatId = parseInt(seats[i].split("|")[0]);
        soldSeatsIdList.push(soldSeatId);
    }
    return soldSeatsIdList;
}

function getAvailableSeats(allSeats, soldSeats, prices, sections) {
    let availableSeats = [];
    for (let i = 0; i < allSeats.length; i++) {
        let seatId = allSeats[i].seatID;
        const found = soldSeats.find(e => e == seatId);
        if (found == undefined) {
            let matchedSeat = prices.find(e => e.seatCategory == allSeats[i].seatCategory);
            if (matchedSeat == undefined) allSeats[i].price = 0;
            else allSeats[i].price = matchedSeat.price;
            let matchedSection = sections.find(e => e.sectionID == allSeats[i].sectionID);
            if (matchedSection == undefined) allSeats[i].sectionName = "Undefined Section";
            else allSeats[i].sectionName = matchedSection.name;
            if (allSeats[i].price != 0 && allSeats[i].sectionName != "Undefined Section") {
                availableSeats.push(allSeats[i]);
            }
        }
    }
    return availableSeats;
}

function getResultData(seats, prices) {
    let result = {
        total: seats.length,
        minPrice: 0,
        maxPrice: 0,
        seats: seats
    }
    if (prices.length > 0) {
        let min = prices[0].price;
        prices.forEach(p => {
            if (min > p.price) min = p.price;
        })
        result.minPrice = min;
    }
    if (seats.length > 0) {
        let max = seats[0].price;
        seats.forEach(s => {
            if (max < s.price) max = s.price;
        })
        result.maxPrice = max;
    }
    return result;
}
