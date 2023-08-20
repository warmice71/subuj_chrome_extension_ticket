(async function () {
    let url = window.location.href;
    if (url.includes("?")) url = url.split("?")[0];
    const pId = url.split("/").slice(-1);
    const pDetailEndpoint = `https://cart.ticketomaha.com/api/syos/GetPerformanceDetails?performanceId=${pId}`;
    const pDetail = await getData(pDetailEndpoint);
    const screensEndpoint = `https://cart.ticketomaha.com/api/syos/GetScreens?performanceId=${pId}`;
    const screens = await getData(screensEndpoint);
    if (pDetail.status && screens.status) {
        let availableSeatsList = [], pricesList = [];
        const fId = pDetail.data.facility_no.toString();
        const screensData = screens.data;
        for (let i = 0; i < screensData.length; i++) {
            if (screensData[i].Available) {
                let sId = screensData[i].screen_no.toString();
                let seatsEndpoint = `https://cart.ticketomaha.com/api/syos/GetSeatList?performanceId=${pId}&facilityId=${fId}&screenId=${sId}`;
                let seats = await getData(seatsEndpoint);
                let seatsData = seats.data.seats;
                let sectionsData = seats.data.sections;
                let pricesData = seats.data.AvailablePrices;
                pricesList = pricesList.concat(pricesData);
                for (let j = 0; j < seatsData.length; j++) {
                    let availableSeats = {
                        section: "",
                        row: "",
                        num: "",
                        price: 0
                    }
                    if (seatsData[j].seat_status_desc === "Available") {
                        availableSeats.row = seatsData[j].seat_row.trim();
                        availableSeats.num = seatsData[j].seat_num.trim();
                        let matchedSection = sectionsData.find(e => e.section == seatsData[j].section);
                        if (matchedSection == undefined) availableSeats.section = "Undefined Section";
                        else availableSeats.section = matchedSection.section_desc;
                        let matchedPrice = pricesData.find(e => e.ZoneNo == seatsData[j].zone_no);
                        if (matchedPrice == undefined) availableSeats.price = 0;
                        else availableSeats.price = matchedPrice.Price;
                        availableSeatsList.push(availableSeats);
                    }
                }
            }
        }
        let resultData = getResultData(availableSeatsList, pricesList);
        chrome.runtime.sendMessage({ status: true, data: resultData, type: "omaha" });
    } else {
        chrome.runtime.sendMessage({ status: false, type: "omaha" });
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
                        resolve({ status: false, });
                    } else {
                        resolve({ status: true, data: JSON.parse(xhr.responseText), });
                    }
                } catch (e) {
                    resolve({ status: false, });
                }
            }
        });

        xhr.open("GET", endpoint);
        xhr.setRequestHeader("Accept", "application/json, text/javascript,");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    });
}

function getResultData(seats, prices) {
    let result = {
        total: seats.length,
        minPrice: 0,
        maxPrice: 0,
        seats: seats
    }
    if (prices.length > 0) {
        let min = prices[0].Price;
        let max = prices[0].Price;
        for (let i = 0; i < prices.length; i++) {
            if (min > prices[i].Price) min = prices[i].Price;
            if (max < prices[i].Price) max = prices[i].Price;
        }
        result.minPrice = min;
        result.maxPrice = max;
    }
    return result;
}