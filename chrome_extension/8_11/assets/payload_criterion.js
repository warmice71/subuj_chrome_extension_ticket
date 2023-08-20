console.log("Hello Criterionticketing");
(async function () {
    console.log("Starting....");
    var seatData = await getSeatData();
    if (seatData.status) {
        try {
            var ticketinfo = {
                total: 0,
                minPrice: 0,
                maxPrice: 0,
                seats: []
            }
            var data = seatData.data;
            data = data.filter(v => v.status == 'available');
            ticketinfo.total = data.length;
            var min = data[0].price, max = data[0].price;
            data.forEach(d => {
                if (min > d.price) min = d.price;
                if (max < d.price) max = d.price;
            });
            ticketinfo.minPrice = min;
            ticketinfo.maxPrice = max;
            ticketinfo.seats = data;
            console.log(ticketinfo);
            chrome.runtime.sendMessage({ status: true, data: ticketinfo, type: 'criterion' });
        } catch (error) {
            console.log(error);
            chrome.runtime.sendMessage({ status: false, type: 'criterion' });    
        }

    } else {
        chrome.runtime.sendMessage({ status: false, type: 'criterion' });
    }
})();

function getSeatData() {
    var url = window.location.href;
    const sp = url.replace('https://', '').split('/');
    var endpoint = `https://criterionticketing.com/api/performances/${sp[1]}/${sp[2]}/seats`;
    console.log(endpoint);
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

        xhr.open("GET", endpoint);
        xhr.send();
    })
}