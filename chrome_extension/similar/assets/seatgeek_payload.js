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
            const ticketinfo = filterTicketInfo(data)
            const listings = filterListings(data.listings);
            const result = {
                globalInfo: ticketinfo,
                listings: listings,
                eventID: eventID,
                //cookie:document.cookie
            }
            // console.log(result);
            // console.log(document.cookie);
            chrome.runtime.sendMessage({ status: true, data: result, type: 'seatgeek' });
        } else {
            chrome.runtime.sendMessage({ status: false, type: 'seatgeek' });
        }
    } else {

    }


})();


function getTicketsData(eventID) {
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


        xhr.open("GET", `https://seatgeek.com/api/event_listings_v2?_include_seats=1&client_id=MTY2MnwxMzgzMzIwMTU4&event_page_view_id=fa73e943-b604-4603-a577-c155512ac160&id=${eventID}&sixpack_client_id=2839dac0-7147-4630-a88f-51e226fe3d23`);
     //   xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0");
      //  xhr.setRequestHeader("Cookie", dataString); //
        xhr.send();
    })

}

function filterTicketInfo(ticketsData) {
    let globalInfo = {
        totalListing: ticketsData.tracking.num_listings,
        totalCount: 0,
        primaryListing: (ticketsData.tracking.markets.open) ? ticketsData.tracking.markets.open : 0,
        primaryCount: 0,
        secondaryListing: (ticketsData.tracking.markets.open) ? ticketsData.tracking.num_listings - ticketsData.tracking.markets.open : ticketsData.tracking.num_listings,
        secondaryCount: 0,
        primary_min: 0,
        secondary_min: 0
    }
    let listings = filterListings(ticketsData.listings);
    let primary_min = 100000, secondary_min = 100000;
    for (let i = 0; i < listings.length; i++) {
        let listing = listings[i];
        if (listing.type == 'open') {
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

function filterListings(listings) {
    let nListings = [];
    for (let i = 0; i < listings.length; i++) {
        nListings.push({
            type: listings[i].m,
            section: listings[i].s,
            row: listings[i].r,
            quantity: listings[i].q,
            seats: Array.isArray(listings[i].ss) ? listings[i].ss.join() : '',
            price: listings[i].p
        })
    }
    return nListings;
}


function filterEventInfo(eventinfo) {
    let filtered_eventinfo = {
        name: eventinfo.title,
        eventID: eventinfo.id,
        eventDateUTC: eventinfo.datetime_utc,
        eventDateLocal: eventinfo.datetime_local,
        url: eventinfo.url,
        image: eventinfo.performers[0].image,
        venue: {
            state: eventinfo.venue.state,
            name: eventinfo.venue.name,
            postalCode: eventinfo.venue.postal_code,
            address: eventinfo.venue.address,
            city: eventinfo.venue.city
        },
        artist: eventinfo.performers[0].name
    }
    return filtered_eventinfo;
}
