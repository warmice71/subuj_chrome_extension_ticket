(async () => {
    console.log("Hello Skybox");
    if (window.location.href.includes('https://skybox.vividseats.com')) {
        const keyCheck = await checkKey();
        if (keyCheck.status && keyCheck.a == 1) {
            pageMonitoring();
        }
    }
})();


async function pageMonitoring() {
    var monitor = setInterval(() => {
        let btn = ocument.querySelectorAll("#hide-seat-numbers-toogle label");
        if(btn && btn.length > 1) {
            document.querySelectorAll("#hide-seat-numbers-toogle label")[0].click()
            clearInterval(monitor);
        }
    }, 1000);
}

var api_key = null;
async function checkKey() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['eagle_extensionkey'], async function (result) {
            if (result && result.eagle_extensionkey) {
                api_key = result.eagle_extensionkey;
                const key_result = await postRequest('https://eagleanalytix.com/api/extension2/checkKey', { key: api_key });
                resolve(key_result);
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