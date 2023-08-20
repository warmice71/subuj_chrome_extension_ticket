var interval = setInterval(() => {
    var btn = document.querySelector('#restritions-btn');
    if (btn) {
        clearInterval(interval);
        btn.addEventListener("click", function (e) {
            const code = document.querySelector('.validated-form--text').value;
            let url = window.location.href;
            var splits = url.split("/");
            const onsaleID = splits[3];
            chrome.runtime.sendMessage({
                name: 'save-axs-code',
                onsaleID: onsaleID,
                code: code
            }, (response) => {
                console.log(response);
            });
        }, false);
    }
}, 1000);