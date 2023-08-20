(async function () {
    const eventUrl = window.location.href;
    const pageSourceByServer = await getData(eventUrl);
    const pageSource = pageSourceByServer.data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(pageSource, 'text/html');
    const scriptElement = doc.querySelector('script#__NEXT_DATA__');
    const jsonData = scriptElement.textContent;
    const parsedData = JSON.parse(jsonData);
    const shopData = parsedData.props.pageProps.shop;
    const ticketData = getTicketsData(shopData);
    chrome.runtime.sendMessage({ status: true, data: ticketData, type: "gostanford" });
})();

function getData(endpoint) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                try {
                    if (this.status == 404) {
                        resolve({ status: false, });
                    } else {
                        resolve({ status: true, data: xhr.responseText, });
                    }
                } catch (e) {
                    resolve({ status: false, });
                }
            }
        });

        xhr.open("GET", endpoint);
        xhr.send();
    });
}

function getTicketsData(shopData) {
    let result = {
        total: 0,
        minPrice: 0,
        maxPrice: 0,
        maxAmountPerOrder: shopData.maxAmountPerOrder,
        seats: []
    }
    let tickets = shopData.tickets;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].active) {
            result.total += tickets[i].amount;
            result.seats.push({ section: tickets[i].name, price: tickets[i].price, count: tickets[i].amount });
        }
    }
    if (result.seats.length > 0) {
        let min = result.seats[0].price;
        let max = result.seats[0].price;
        for (let k = 0; k < result.seats.length; k++) {
            if (min > result.seats[k].price) min = result.seats[k].price;
            if (max < result.seats[k].price) max = result.seats[k].price;
        }
        result.minPrice = min;
        result.maxPrice = max;
    }
    return result;
}