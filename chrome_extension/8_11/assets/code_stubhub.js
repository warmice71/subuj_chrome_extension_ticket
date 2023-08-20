(async () => {
    setTimeout(async () => {
        if (await checkKey()) {
            showShData();
        }
    }, 4000);
})();

var api_key = null;
async function checkKey() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['eagle_extensionkey'], async function (result) {
            if (result && result.eagle_extensionkey) {
                api_key = result.eagle_extensionkey;
                const eventID = getShEventID();
                const result_key = await postRequest('https://eagleanalytix.com/api/extension2/checkKey', { key: api_key, eventID: eventID, source: 'sh' });
                resolve(result_key && result_key.status ? true : false);
            } else {
                resolve(false);
            }
        })
    })
}

async function showShData() {
    const eventID = getShEventID();
    if (eventID) {
        try {
            if (!document.querySelector('#eagle-header')) {
                const globalData = await getShTicketData(eventID, api_key, window.location.href);
                const text = `<span id='eagle-header' style="font-size:12px; color: red; line-height:1; margin-left: 30px;">TotalListings: 
                ${globalData.totalListings}, TotalTickets: ${globalData.totalTickets}, Min: ${globalData.pricingSummary.min}, Median: ${globalData.pricingSummary.median}, Average: ${globalData.pricingSummary.average}, Max: ${globalData.pricingSummary.max}</span>`;
                var p = document.createElement('p');
                p.innerHTML = text;
                if (document.querySelector("#app")) {
                    var header = document.querySelector("#app").firstChild;
                    header.insertBefore(p, header.firstChild);
                }
            }

        } catch (error) {
            console.log('error22313123', error);
        }
    }
}

function getShEventID() {
    try {
        var u = window.location.href;
        let sp = u.split('?');
        u = sp[0];
        sp = u.split('/');
        for (let i = 0; i < sp.length; i++) {
            let a = sp[i];
            if (a.length > 7 && a.length < 10 && isNaN(a) == false) {
                return a;
            }
        }
    } catch (error) {
        return null;
    }
    return null;
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

async function getShTicketData(eventID, key, url) {

    let response = await postRequest('https://eagleanalytix.com/api/extension2/getShTickets', { eventID, url, key });
    return response ? response.globalData : null;

}
