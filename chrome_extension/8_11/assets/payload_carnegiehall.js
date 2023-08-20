
(async function () {
    console.log("Starting Carnegiehall....");
    const url = window.location.href;
    const eventId = Number(url.split("=")[1].split("#")[0]);
    const levelCounts = document.querySelectorAll(".venue-level-list-item").length;
    let seats = [];
    for (let level = 0; level < levelCounts; level++) {
        let seatsPerLevel = await getSeatsData(eventId, level);
        if (seatsPerLevel.status) {
            let levelSeats = seatsPerLevel.data.levelSeats;
            levelSeats.forEach(seat => {
                if (seat.tessituraSeat.isAvailable) {
                    let zoneId = Number(seat.tessituraSeat.zoneId);
                    let seatPriceData = seatsPerLevel.data.allSeatPricing.find(p => p.zoneId == zoneId);
                    let seatPrice = seatPriceData.prices[0].defaultPrice + seatPriceData.prices[0].feeAmount;
                    let availableSeat = {
                        isAvailable: seat.tessituraSeat.seatStatusText,
                        section: seat.tessituraSeat.sectionDescription,
                        row: seat.tessituraSeat.rowText,
                        number: seat.tessituraSeat.numberText,
                        price: seatPrice
                    };
                    seats.push(availableSeat);
                }
            });
        }
        sleep(300);
    }
    let min = 0, max = 0;
    for (let i = 0; i < seats.length; i++) {
        if (i == 0) {
            min = seats[i].price;
            max = seats[i].price;
        } else {
            if (min > seats[i].price) min = seats[i].price;
            if (max < seats[i].price) max = seats[i].price;
        }
    }
    var availableSeatsData = {
        total: seats.length,
        min: min,
        max: max,
        seats: seats
    }
    // console.log(availableSeatsData);
    chrome.runtime.sendMessage({ status: true, data: availableSeatsData, type: 'carnegiehall' });
})();

function getSeatsData(itemId, level) {
    var endpoint = `https://www.carnegiehall.org/api/seating/GetSeatmap`;
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

        xhr.open("POST", endpoint);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "itemId": itemId,
            "venueLevels": [level]
        }));
    });
}

function sleep(milliseconds) {
    const start = Date.now();
    let current = null;
    do {
        current = Date.now();
    } while (current - start < milliseconds);
}