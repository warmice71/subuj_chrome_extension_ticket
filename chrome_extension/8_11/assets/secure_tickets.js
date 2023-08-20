(async () => {
    if (await checkKey()) {
        showCode();
    }
})();

var api_key = null;
async function checkKey() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['eagle_extensionkey'], async function (result) {
            if (result && result.eagle_extensionkey) {
                api_key = result.eagle_extensionkey;
                const result_key = await postRequest('https://eagleanalytix.com/api/extension2/checkKey', { key: api_key });
                resolve(result_key && result_key.status ? true : false);
            } else {
                resolve(false);
            }
        })
    })
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

function showCode() {
    try {
        setTimeout(() => {
            const url = window.location.href;
            const sp = url.split("/");
            const key = sp[sp.length - 1];
            var xhr = new XMLHttpRequest();
            xhr.open("GET", 'https://api.secure.tickets/wallet/' + key, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send();
            xhr.onload = function () {
                var r = JSON.parse(this.responseText);
                var text = '';
                r.data.tickets.forEach(e => {
                    try {
                        if (e.status == "available") {
                            const gpayToken = e.ticket.gpayToken;
                            const key = gpayToken.split('.')[1];
                            const s = JSON.parse(atob(key)).payload.eventTicketObjects[0].id.split('.');
                            var b = s[4];
                            if (b == 'ARCHTICS') b = s[5];
                            text = text + `<p>${e.ticket.section}-${e.ticket.row}-${e.ticket.seat} ${b}</p>`
                        } else {
                            text = text + `<p>${e.ticket.section}-${e.ticket.row}-${e.ticket.seat} Shared</p>`
                        }

                    } catch (error) {
                        try {
                            if (e.status == "available") {
                                text = text + `<p>${e.ticket.section}-${e.ticket.row}-${e.ticket.seat} ${e.ticket.barcode}</p>`
                            } else {
                                text = text + `<p>${e.ticket.section}-${e.ticket.row}-${e.ticket.seat} Shared</p>`
                            }
                        } catch (error) {

                        }
                    }


                });
                var div = document.createElement('div');
                div.style = "position: absolute; bottom: 100px;";
                div.innerHTML = text;
                document.querySelector('body').append(div);
            };
        }, 2000);

    } catch (error) {
        console.log(error);
    }
};