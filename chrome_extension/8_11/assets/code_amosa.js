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
        var sp = window.location.href.split('?')[1]
        const params = new URLSearchParams('?' + sp)
        const token = params.get('token');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://tm.amosa.app/securetoken', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            clientToken: token,

        }));
        xhr.onload = function () {
            var data = JSON.parse(this.responseText);
            if (data && data.securetoken) {
                const securetoken = data.securetoken;
                const barcode = JSON.parse(atob(securetoken)).b;
                var div = document.createElement('div');
                div.style = "position: absolute; bottom: 100px;";
                div.innerText = 'Barcode: ' + barcode;
                document.querySelector('body').append(div)
            }
        };
    } catch (error) {
        console.log(error);
    }

}
