(async function () {
    // https://www.smartfinancialcentre.net/events/peso-pluma-night-two/tickets/EA716CB8-7B8D-434B-9624-B67A492E9BD6/?%7Ets_1685466288%7Ece_true%7Eq_6c5d42b2-4e4a-4034-9d2e-2c741c0c2941%7Ert_queue%7Eh_17867368154b3ed9febf2d7cb7d82cceb8faf3ea368639e3c34b9000df8982af=
    const url = window.location.href;
    const eventName = url.split("/tickets/")[0].split("/events/")[1];
    const eventID = url.split("/tickets/")[1].split("/")[0];
    const endpoint = `https://boltapi-us-central.atgtickets.com/admissions/${eventName}/smart-financial-centre/${eventID}`;
    console.log(endpoint);
    let seatsDataResponse = await getSeatsData(endpoint);
    if (seatsDataResponse.status) {
        let ticketData = filterSeatsData(seatsDataResponse.data);
        // console.log(ticketData);
        chrome.runtime.sendMessage({ status: true, data: ticketData, type: "sfc" });
    } else {
        chrome.runtime.sendMessage({ status: false, type: "sfc" });
    }
})();

function getSeatsData(endpoint) {
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
        xhr.send();
    });
}

function filterSeatsData(seatsData) {
    let ticketData = {
        total: 0,
        minPrice: 0,
        maxPrice: 0,
        seats: [],
        indivisualSeats: []
    };
    let dataKeys = Object.keys(seatsData);
    if (dataKeys.includes("generalAdmission")) {
        let sections = seatsData.generalAdmission.sections;
        for (const [key, value] of Object.entries(sections)) {
            let zones = value.zones;
            let zoneValues = Object.values(zones);
            if (zoneValues.length != 0) {
                zoneValues.forEach((item) => {
                    let seatData = {
                        price: 0,
                        section: "",
                        count: 0
                    }
                    seatData.price = Number(Object.values(item.tickets)[0].total);
                    seatData.section = value.name;
                    seatData.count = Number(item.seatCount.available);

                    ticketData.total += Number(item.seatCount.available);
                    ticketData.seats.push(seatData);
                })
            }
        }
        if (ticketData.seats.length > 0) {
            let min = ticketData.seats[0].price;
            let max = ticketData.seats[0].price;
            ticketData.seats.forEach(s => {
                if (min > s.price) min = s.price;
                if (max < s.price) max = s.price;
            })
            ticketData.minPrice = min;
            ticketData.maxPrice = max;
        }

    }
    if (dataKeys.includes("seats") && dataKeys.includes("sections") && dataKeys.includes("zones")) {
        let seats = seatsData.seats;
        seats = seats.filter(s => s.available == true);
        if (seats.length > 0) {
            let totalSeats = seats.length;
            ticketData.total += totalSeats;
            let sections = seatsData.sections;
            let zones = seatsData.zones;
            seats.forEach((seat) => {
                let indivisualSeatData = {
                    price: 0,
                    section: "",
                    row: "",
                    number: ""
                }
                indivisualSeatData.row = seat.row;
                indivisualSeatData.number = seat.number;
                let sectionId = seat.section;
                let matchedSection = sections.find(s => s.id == sectionId)
                indivisualSeatData.section = matchedSection.name;
                let zoneId = seat.zone;
                for (const [key, value] of Object.entries(zones)) {
                    if (key === zoneId) {
                        indivisualSeatData.price = Number(Object.values(value.tickets)[0].total);
                    }
                }
                ticketData.indivisualSeats.push(indivisualSeatData);
            })
            if (ticketData.indivisualSeats.length > 0) {
                let min = ticketData.indivisualSeats[0].price;
                let max = ticketData.indivisualSeats[0].price;
                ticketData.indivisualSeats.forEach(s => {
                    if (min > s.price) min = s.price;
                    if (max < s.price) max = s.price;
                })
                ticketData.minPrice = min;
                ticketData.maxPrice = max;
            }
        }
    }
    return ticketData;
}