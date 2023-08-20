(async function () {
    console.log('Hello Telecharge');
    try {
        const url = window.location.href;
        const url_sp = url.split('?');
        const sp2 = url_sp[0].split('/');
        const sp3 = sp2[sp2.length - 1].split('-');
        const eventID = sp3[sp3.length - 1];
        if (eventID.length == 6) {
            console.log('eventID', eventID);
            const ticketData = await getTicketsData(eventID);
            const data = filterTickets(ticketData.data);
            chrome.runtime.sendMessage({ status: true, data: data, type: 'telecharge' });
        } else {
            chrome.runtime.sendMessage({ status: false, type: 'telecharge' });
        }
    } catch (error) {
        chrome.runtime.sendMessage({ status: false, type: 'telecharge' });
    }


})();

function getTicketsData(eventID) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                try {
                    if (this.status == 404) {
                        resolve({
                            status: false
                        })
                    } else {
                        resolve({
                            status: true,
                            data: JSON.parse(xhr.responseText)
                        })
                    }
                } catch (e) {
                    resolve({
                        status: false
                    })
                }

            }
        });

        xhr.open("GET", `https://tickets.telecharge.com/api/eventinventory/${eventID}?includeOpens=true&salesChannel=Web`);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send();
    })

}

function filterTickets(data) {
    const priceData = data.PriceMaps;
    const mapData = data.MapSeats;
    let sdata = [];
    var min = 0, max = 0, total = 0;
    for (let i = 0; i < mapData.length; i++) {
        let sectionKey = mapData[i].Key;
        let price = getPrice(mapData[i].PriceKey, priceData);
        let sp = sectionKey.split('-');
        sdata.push({
            section: sp[0],
            row: sp[1],
            seat:sp[2],
            price: price
        });
        if(i == 0) {
            min = price;
            max = price;
        } else {
            if(min > price) min = price;
            if(max < price) max = price;
        }
    }

    return {
        min: min,
        max: max,
        total: sdata.length,
        seats: sdata
    };
}

function getPrice(key, priceData) {
    for (let i = 0; i < priceData.length; i++) {
        if(priceData[i].PriceKey == key) {
            return priceData[i].Price;
        }
    }
    return 0;
}