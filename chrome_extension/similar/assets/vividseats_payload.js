console.log("-----------Hello Vivid-------------");
(async function () {
    const url = window.location.href;
    let eventID = url.split("production/")[1];
    eventID = eventID.includes("?")? eventID.split("?")[0]: eventID;

    const ticketResponse = await getTicketsData(eventID);
    const info = document.querySelector("[data-testid='hero-title']").innerText.split('\n');
    if (ticketResponse.status) {
        const data = ticketResponse.data;
        const result = {
            eventID: eventID,
            listingCount: data.global[0].listingCount,
            ticketCount: data.global[0].ticketCount,
            min: data.global[0].lp,
            max: data.global[0].hp,
            seats: data.tickets,
            headerInfo: {
                imgUrl: data.global[0].eventMobileHeroImage,
                eventTitle: info[0],
                eventInfo: info[1],
                eventID
            }

        }
        chrome.runtime.sendMessage({ status: true, data: result, type: 'vividseats' });
    } else {
        chrome.runtime.sendMessage({ status: false, type: 'vividseats' });
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

        xhr.open("GET", `https://www.vividseats.com/rest/v2/web/listings/${eventID}`);
        xhr.send();
    })

}
