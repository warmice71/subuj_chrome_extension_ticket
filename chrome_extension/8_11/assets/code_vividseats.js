(async () => {
    if (await checkKey()) {
        showShData();
    }
})();

var api_key = null;
async function checkKey() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['eagle_extensionkey'], async function (result) {
            if (result && result.eagle_extensionkey) {
                api_key = result.eagle_extensionkey;
                const eventID = getVsEventID();
                const result_key = await postRequest('https://eagleanalytix.com/api/extension2/checkKey', { key: api_key, eventID: eventID, source: 'vs' });
                resolve(result_key && result_key.status ? true : false);
            } else {
                resolve(false);
            }
        })
    })
}

async function getVsEventID() {
    const url = window.location.href;
    const splits = url.split("\/");
    const text = splits[splits.length - 1];
    const t_sp = text.split("?");
    const eventID = t_sp[0];
    return eventID;
}

async function showShData() {
    const eventID = getVsEventID();
    const ticketResponse = await getTicketsData(eventID);
    try {
        const globalData = ticketResponse.data.global[0];
        const text = `<span id='eagle-header' style="font-size:12px; line-height:1; margin-left: 30px;margin-top: auto; margin-bottom: 20px;">TotalListings: 
            ${globalData.listingCount}, TotalTickets: ${globalData.ticketCount}, Min: ${globalData.lp}, Median: ${globalData.mp}, Max: ${globalData.hp}</span>`;
        const headerSection = document.querySelector('#content > header > div');
        if (headerSection) {
            headerSection.innerHTML = headerSection.innerHTML + text;
        }
    } catch (error) {
        console.log('error22313123', error);
    }
}

function postRequest(url, params) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                try {
                    if (this.status == 404) {
                        resolve(null)
                    } else {
                        resolve(JSON.parse(xhr.responseText))
                    }
                } catch (e) {
                    console.log('error111111111', e);
                    resolve(null)
                }

            }
        });
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(params));
    })
}

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
        // xhr.setRequestHeader("fansight-tab", sessionStorage.getItem('FanSight-Tab'));
        xhr.send();
    })

}