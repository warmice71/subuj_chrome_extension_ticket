console.log("-----------Hello-------------");
(async function () {
    var url = window.location.href;
    var sp = url.split('?');
    url = sp[0];
    var listings = [];
    for(let qty = 1; qty <= 5; qty++) {
        let page = 1;
        const result = await getTicketData(url, page, qty);
        if(result.status) {
            listings = combineListings(listings, result.data.Items);
            if(result.data.NumPages > 1) {
                for(let p = 2; p <= result.data.NumPages; p++) {
                    const result2 = await getTicketData(url, page, qty);
                    listings = combineListings(listings, result2.data.Items);
                }
            }
        }
    }
    var total = 0, min = 0, max = 0;
    for(let i = 0; i < listings.length; i++) {
        if(i == 0) {
            min = listings[i].price;
            max = listings[i].price;
        } else {
            if(min > listings[i].price) min = listings[i].price;
            if(max < listings[i].price) max = listings[i].price;
        }
        total = total + listings[i].qty;
    }
    var data = {
        total: total,
        min: min,
        max: max,
        seats: listings
    }
    chrome.runtime.sendMessage({ status: true, data: data, type: 'viagogo' });
})();

function getTicketData(url, page, qty) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `${url}?wku=0`);
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
                    console.log(e);
                    resolve({
                        status: false
                    })
                }

            }
        });
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            "CurrentPage": page,
            "sortBy": "NEWPRICE",
            "Quantity": qty,
            "sortDirection": 0,
            "Sections": "",
            "TicketClasses": null,
            "IsSeatedTogetherChecked": false,
            "PageVisitId": "",
            "PriceRange": "0-NaN",
            "TicketTypeSelection": 0,
            "ShowAllTickets": true,
            "Section": [],
            "TicketClass": []
        }));
    })

}

function combineListings(list, items) {
    for(let i = 0; i < items.length; i++) {
        let f = true;
        for(let j = 0; j < list.length; j++) {
            if(items[i].Id == list[j].id) {
                f = false;
                break;
            }
        }
        if(f) {
            list.push({
                id: items[i].Id,
                section: items[i].Section,
                row: items[i].Row,
                price: items[i].RawPrice,
                qty: items[i].MaxQuantity
            })
        }
    }
    return list;
}