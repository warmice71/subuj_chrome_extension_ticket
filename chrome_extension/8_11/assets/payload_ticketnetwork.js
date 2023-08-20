console.log("-----------Hello Ticketnetwork-------------");
// https://mapwidget3.seatics.com/Api/TicketsByEvent?callback=Seatics.Coordinator.gotTicketsCallback&eventId=4965832&websiteConfigId=3551
// https://www.tn-apis.com/catalog/v2/events/4965832?consumerKey=N6sOqXNfVs0gyPrkemvrWWwe9kca&websiteConfigId=3551&format=json
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
        const result = await getEventData(eventID);
        const eventData = filterEventData(result.data);
        console.log(eventData);
        chrome.runtime.sendMessage({ status: true, data: eventData, type: 'ticketnetwork' });
    } else {
        chrome.runtime.sendMessage({ status: false, type: 'ticketnetwork' });
    }


})();



function getEventData(eventID) {
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

        xhr.open("GET", `https://www.tn-apis.com/catalog/v2/events/${eventID}?consumerKey=N6sOqXNfVs0gyPrkemvrWWwe9kca&websiteConfigId=3551&format=json`);
        // xhr.setRequestHeader("content-type", "application/json");
        xhr.send();
    })

}
function filterEventData(eventData) {
    return {
        eventID: eventData.id,
        name: eventData.text.name,
        date: eventData.date.datetime,
        venue: {
            name: eventData.venue.text.name,
            city: eventData.city.text.name,
            state: eventData.stateProvince.text.abbr,
            country: eventData.country.alphaCode
        },
        performer: eventData.performers[0].name,
        ticketInfo: {
            ticketCount: eventData._metadata.ticketCount,
            lowPrice: eventData.pricingInfo.lowPrice.value,
            averagePrice: eventData.pricingInfo.averagePrice.value,
            highPrice: eventData.pricingInfo.highPrice.value
        }
    }
}

// function getTicketData(eventID) {
//     return new Promise((resolve) => {
//         var xhr = new XMLHttpRequest();
//         xhr.withCredentials = true;
//         xhr.addEventListener("readystatechange", function () {
//             if (this.readyState === 4) {
//                 try {
//                     if (this.status == 404) {
//                         resolve({
//                             status: false
//                         })
//                     } else {
//                         resolve({
//                             status: true,
//                             data: xhr.responseText
//                         })
//                     }
//                 } catch (e) {
//                     resolve({
//                         status: false
//                     })
//                 }

//             }
//         });
//         xhr.open("GET", `https://mapwidget3.seatics.com/Api/TicketsByEvent?callback=Seatics.Coordinator.gotTicketsCallback&eventId=${eventID}&websiteConfigId=3551`);
//         xhr.setRequestHeader("Access-Control-Allow-Origin", '*');
//         // xhr.setRequestHeader("Sec-Fetch-Mode", 'no-cors');
//         xhr.send();
//     })

// }