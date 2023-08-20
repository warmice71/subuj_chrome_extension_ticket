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
            const tags = document.querySelectorAll(".ticket-assets.mobile-only");
            var text = '';
            tags.forEach(t => {
                try {
                    const atag = t.querySelector('a');
                    const p = atag.getAttribute('onclick');
                    var s = p.slice(p.indexOf('link for ') + 9);
                    const section = s.slice(0, s.indexOf("'"));
                    s = s.slice(s.indexOf('save') + 26);
                    const key = s.slice(0, s.indexOf('.'));
                    const a = JSON.parse(atob(key)).payload.eventTicketObjects[0].id;
                    const barcode = a.slice(a.indexOf('ARCHTICS') + 9).slice(0, 12)
                    text = text + `<p>${section} ${barcode}</p>`
                } catch (error) {
                    console.log(error);
                    const htmlContext = document.querySelector('html').textContent;
                    const sub = htmlContext.slice(htmlContext.indexOf('token') + 8);
                    const d = JSON.parse(atob(sub.substring(0, sub.indexOf("==") + 2)));
                    const barcode = d.b;
                    text = text + `<p>${barcode}</p>`
                }

            });
            var div = document.createElement('div');
            div.style = "position: absolute; bottom: 100px;";
            div.innerHTML = text;
            document.querySelector('body').append(div);
        }, 2000);

    } catch (error) {
        console.log(error);

    }
}