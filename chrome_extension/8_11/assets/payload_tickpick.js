console.log("-----------Hello Tickpick-------------");
(async function () {
    const url = window.location.href;
    const splits = url.split("\/");
    var eventID = '';
    for (let i = 0; i < splits.length; i++) {
        let a = splits[i];
        if (a.length == 7 && isNaN(a) == false) {
            eventID = a;
            break;
        }
    }
    if (eventID) {
        const ticketResponse = await getTicketsData(eventID);
        if (ticketResponse.status) {
            const data = ticketResponse.data;
            const ticketinfo = filterListings(data);
            console.log(ticketinfo);
            chrome.runtime.sendMessage({ status: true, data: ticketinfo, type: 'tickpick' });
        } else {
            chrome.runtime.sendMessage({ status: false, type: 'tickpick' });
        }
    } else {

    }


})();

function getTicketsData(eventID) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
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

        xhr.open("GET", `https://api.tickpick.com/1.0/listings/internal/event/${eventID}?trackView=true&mid=${eventID}`);
        xhr.setRequestHeader("content-type", "application/json");
        // xhr.setRequestHeader("forter-token-cookie", "3b5deaf55b944e3f9c8fd6bb371fd403_1681226005411__UDF43-mnf-a4_15ck");
        xhr.send();
    })

}

function filterListings(data) {
    var total = 0, min = 0, max = 0, average = 0; listings = [];
    var total_qty = 0, total_price = 0;
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        total += item.q;
        if (i == 0) {
            min = item.p;
            max = item.p;
        } else {
            if (max < item.p) max = item.p;
            if (min > item.p) min = item.p;
        }
        listings.push({
            section: item.sid,
            row: item.r,
            quantity: item.q,
            price: item.p
        })
        total_price += item.p * item.q;
        total_qty += item.q;
    }
    return {
        total: total,
        min: min,
        max: max,
        average: Math.floor(total_price / total_qty * 100) / 100,
        seats: listings
    }
}