console.log("-----------Hello Seatgeek-------------");
(async function () {
    const url = window.location.href;
    const splits = url.split("\/");
    var eventID = '';
    for (let i = 0; i < splits.length; i++) {
        let a = splits[i];
        if (a.length == 7 && isNaN(a) == false) {
            eventID = a;
            break;
        }
    }
    if (eventID) {
        const ticketResponse = await getTicketsData(eventID);
        if (ticketResponse.status) {
            const data = ticketResponse.data;
            const ticketinfo = filterSgTicketInfo(data);
            const seats = filterSgListings(data.listings);
            const ticketData = { globalInfo: ticketinfo, seats: seats };
            chrome.runtime.sendMessage({ status: true, ticketData: ticketData, type: 'seatgeek' });
        } else {
            chrome.runtime.sendMessage({ status: false, type: 'seatgeek' });
        }
    } else {

    }


})();



function getTicketsData(eventID) {
    const cookie = document.cookie;
    var sp = cookie.split(';');
    var sixpack_client_id = '';
    var page_view_id = '';
    sp.forEach(element => {
        if (element.includes('sixpack_client_id')) {
            sixpack_client_id = element.split('=')[1].trim();
        }
        if (element.includes('sg-event-page-view-id')) {
            page_view_id = element.split('=')[1].trim();
        }
    });
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

        xhr.open("GET", `https://seatgeek.com/api/event_listings_v2?_include_seats=1&client_id=MTY2MnwxMzgzMzIwMTU4&event_page_view_id=${page_view_id}&id=${eventID}&sixpack_client_id=${sixpack_client_id}`);
        xhr.send();
    })

}

function filterSgTicketInfo(ticketsData) {
    let globalInfo = {
        totalListing: ticketsData.tracking.num_listings,
        totalCount: 0,
        primaryListing: ticketsData.tracking.markets.open ? ticketsData.tracking.markets.open : 0,
        primaryCount: 0,
        secondaryListing: ticketsData.tracking.markets.open
            ? ticketsData.tracking.num_listings - ticketsData.tracking.markets.open
            : ticketsData.tracking.num_listings,
        secondaryCount: 0,
        primary_min: 0,
        secondary_min: 0,
    };
    let listings = filterSgListings(ticketsData.listings);
    let primary_min = 100000,
        secondary_min = 100000;
    for (let i = 0; i < listings.length; i++) {
        let listing = listings[i];
        if (listing.type == "open") {
            if (listing.price < primary_min) primary_min = listing.price;
            globalInfo.primaryCount = globalInfo.primaryCount + listing.quantity;
        } else {
            if (listing.price < secondary_min) secondary_min = listing.price;
            globalInfo.secondaryCount = globalInfo.secondaryCount + listing.quantity;
        }
        globalInfo.totalCount = globalInfo.totalCount + listing.quantity;
    }
    if (primary_min == 100000) primary_min = 0;
    if (secondary_min == 100000) secondary_min = 0;
    globalInfo.primary_min = primary_min;
    globalInfo.secondary_min = secondary_min;
    return globalInfo;
}

function filterSgListings(listings) {
    let nListings = [];
    for (let i = 0; i < listings.length; i++) {
        nListings.push({
            type: listings[i].m,
            section: listings[i].s,
            row: listings[i].r,
            quantity: listings[i].q,
            seats: listings[i].ss,
            price: listings[i].p,
        });
    }
    return nListings;
}