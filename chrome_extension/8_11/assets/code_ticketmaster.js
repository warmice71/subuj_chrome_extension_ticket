var platform = 'ticketmaster';
var user = 0;
if (window.location.href.includes('livenation')) platform = 'livenation';
(async () => {
    setTimeout(async () => {
        if (await checkKey()) {
            showTmData();
            //show unlock code when it has unlock in page
            if (document.querySelector('#edp-offer-code-button')) {
                showUnlockCode();
            }
        }
    }, 4000);
})();

var api_key = null;

async function checkKey() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(["eagle_extensionkey"], async function (result) {
            if (result && result.eagle_extensionkey) {
                api_key = result.eagle_extensionkey;
                const eventID = getTmEventID();
                const result_key = await postRequest(
                    "https://eagleanalytix.com/api/extension2/checkKey",
                    { key: api_key, eventID: eventID, source: "tm" }
                );
                user = result_key.a;
                resolve(result_key && result_key.status ? true : false);
            } else {
                resolve(false);
            }
        });
    });
}

async function showUnlockCode() {
    const eventID = getTmEventID();
    const result = await postRequest(
        "https://eagleanalytix.com/api/extension2/getTmUnlockCode",
        { key: api_key, eventID: eventID }
    );
    if (result) {
        var unlockCode = result.code.join();
        unlockCode = unlockCode.replace(',', ' , ');
        var unlockCode2 = result.code2.join();
        unlockCode2 = unlockCode2.replace(',', ' , ');
        console.log("------------unlock codes-------------");
        console.log(unlockCode);
        if (unlockCode || unlockCode2) {
            var codes = unlockCode;
            if (unlockCode2) codes = codes + ' , ' + unlockCode2;
            document.querySelector('.bba-event-header__details__main').append('Unlock Codes: ' + codes);
        }
    }
}

async function showTmData() {
    const eventID = getTmEventID();
    if (eventID) {
        try {
            const res = await getTmTicketData(eventID);
            const ticketData = await filterTmTickets(eventID, res.data, true);
            console.log(ticketData);
            if (user.a == 1 && ticketData && ticketData.primary) {
                chrome.runtime.sendMessage({
                    name: 'background-refresh-check',
                    count: ticketData.primary,
                    eventID: eventID
                }, (response) => {
                    if (response.status == true) {
                        const email = localStorage.getItem('alertEmail');
                        const eventName = document.querySelector(".event-header__event-name-text").innerText;
                        if (email) {
                            postRequest(
                                "https://eagleanalytix.com/api/extension2/sendAlertRefresh",
                                { key: api_key, eventID: eventID, message: response.msg, email: email, eventName: eventName }
                            );
                        }

                    }
                })
            }
            const lowest3Lists = getLowsest3Lists(ticketData);
            var text = `&nbsp;&nbsp;&nbsp;Primary: ${ticketData.primary}, Resale: ${ticketData.resale}, Platinum: ${ticketData.others}`;
            lowest3Lists.forEach((ele, index) => {
                text += `,  L${index + 1}: $${ele.price}-${ele.count}(${ele.primary}/${ele.resale
                    }/${ele.platinum})`;
            });
            if (document.querySelector(".split-content__primary")) {
                document.querySelector(".split-content__primary").innerHTML = text; //+ document.querySelector('.split-content__primary').innerHTML;
                document
                    .querySelector(".split-content__primary")
                    .setAttribute("id", "eagle-header-temp");
            }
        } catch (error) { }
    }
}

function getTmEventID() {
    const url = window.location.href;
    const sp = url.split("/");
    const eventID = sp[sp.length - 1].split("?")[0];

    if (eventID.length == 16) {
        return eventID;
    } else {
        return null;
    }
}

function postRequest(url, params) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                try {
                    if (this.status == 404) {
                        resolve(null);
                    } else {
                        resolve(JSON.parse(xhr.responseText));
                    }
                } catch (e) {
                    console.log("error111111111", e);
                    resolve(null);
                }
            }
        });
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(params));
    });
}

function getLowsest3Lists(ticketData) {
    // price section
    let countsByPrice = [];

    for (let i = 0; i < ticketData.seats.length; i++) {
        let seat = ticketData.seats[i];

        let counts = countsByPrice.find((ele) => ele.price == seat.min);
        if (!counts) {
            countsByPrice.push({
                price: seat.min,
                count: seat.count,
                primary: seat.ticketType == "primary" ? seat.count : 0,
                resale: seat.ticketType == "resale" ? seat.count : 0,
                platinum:
                    seat.ticketType != "primary" && seat.ticketType != "resale"
                        ? seat.count
                        : 0,
            });
        } else {
            counts.count += seat.count;
            if (seat.ticketType == "primary") {
                counts.primary = counts.primary + seat.count;
            } else if (seat.ticketType == "resale") {
                counts.resale = counts.resale + seat.count;
            } else {
                counts.platinum = counts.platinum + seat.count;
            }
        }
    }

    countsByPrice = countsByPrice.sort((a, b) => {
        if (b.price < a.price) return 1;
        if (b.price > a.price) return -1;
        return 0;
    });
    if (countsByPrice.length > 3) countsByPrice = countsByPrice.slice(0, 3);
    return countsByPrice;
}


function getTmTicketData(eventID) {
    const url = `https://services.${platform}.com/api/ismds/event/${eventID}/facets?show=count+row+listpricerange+places+maxQuantity+sections+shape&q=available&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse&resaleChannelId=internal.ecommerce.consumer.desktop.web.browser.ticketmaster.us`;
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

        xhr.open("GET", url);
        xhr.setRequestHeader("TMPS-Correlation-Id", uuidv4());
        xhr.send();
    })

}

function getTicketTypes(eventID) {
    const url = `https://services.${platform}.com/api/ismds/host/${eventID}/tickettypes?apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse`;
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

        xhr.open("GET", url);
        xhr.setRequestHeader("TMPS-Correlation-Id", uuidv4());
        xhr.send();
    })

}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


async function filterTmTickets(eventID, tickets, placeMode = false) {
    let return_data = {};
    let primary_count = 0, resale_count = 0, others_count = 0, total_count = 0, primary_minPrice = 10000000, primary_maxPrice = 0, resale_minPrice = 10000000, resale_maxPrice = 0;
    var seats = [];
    var ticketTypes = null;
    try {
        const ticketTypesResult = await getTicketTypes(eventID);
        ticketTypes = ticketTypesResult.data;
    } catch (error) {

    }

    if (tickets.facets) {
        for (let j = 0; j < tickets.facets.length; j++) {
            try {
                let ticket = tickets.facets[j];
                if (ticket.available == false) continue;
                if (ticket.accessibility.length && ticket.accessibility[0] == 'wheelchair') continue;
                var ticketTypeData = null;
                try {
                    if (ticketTypes) ticketTypeData = checkTmTicketType(ticketTypes, ticket.ticketTypes[0]);
                } catch (error) {

                }
                var ticketType = '';
                if (ticketTypeData && (ticketTypeData.includes('platinum') || ticketTypeData.includes('handicap'))) {
                    ticketType = ticketTypeData;
                    others_count = others_count + ticket.count;
                } else if (ticket.inventoryTypes[0] == 'primary') {
                    primary_count = primary_count + ticket.count;
                    ticketType = 'primary';
                    try {
                        if (primary_minPrice > ticket.listPriceRange[0].min) primary_minPrice = ticket.listPriceRange[0].min;
                    } catch (error) {
                    }
                    try {
                        if (primary_maxPrice < ticket.listPriceRange[0].max) primary_maxPrice = ticket.listPriceRange[0].max;
                    } catch (error) {

                    }

                } else {
                    resale_count = resale_count + ticket.count;
                    ticketType = 'resale';
                    try {
                        if (resale_minPrice > ticket.listPriceRange[0].min) resale_minPrice = ticket.listPriceRange[0].min;
                    } catch (error) {

                    }
                    try {
                        if (resale_maxPrice < ticket.listPriceRange[0].max) resale_maxPrice = ticket.listPriceRange[0].max;
                    } catch (error) {

                    }
                }
                let seat = {
                    ticketType: ticketType,
                    section: ticket.section,
                    inventoryType: ticket.inventoryTypes[0],
                    offerType: ticket.offerTypes[0],
                    count: ticket.count,
                    min: (ticket.listPriceRange && ticket.listPriceRange.length) ? ticket.listPriceRange[0].min : 0,
                    max: (ticket.listPriceRange && ticket.listPriceRange.length) ? ticket.listPriceRange[0].max : 0,
                    currency: (ticket.listPriceRange && ticket.listPriceRange.length) ? ticket.listPriceRange[0].currency : ''
                };
                if (placeMode) seat.places = parsePlaces(ticket.places[0]);
                seats.push(seat);
            } catch (error) {
                console.log(error);
            }


        };
    }

    total_count = primary_count + resale_count + others_count;

    if (primary_minPrice == 10000000) primary_minPrice = 0
    if (resale_minPrice == 10000000) resale_minPrice = 0

    return_data.eventID = eventID;
    return_data.timestamp = Date.now();
    return_data.primary = primary_count;
    return_data.resale = resale_count;
    return_data.others = others_count;
    return_data.total = total_count;
    return_data.primary_minPrice = primary_minPrice
    return_data.primary_maxPrice = primary_maxPrice
    return_data.resale_minPrice = resale_minPrice
    return_data.resale_maxPrice = resale_maxPrice
    return_data.seats = seats
    return return_data

    function checkTmTicketType(ticketTypes, typeID) {
        try {
            for (let i = 0; i < ticketTypes._embedded.item.length; i++) {
                let item = ticketTypes._embedded.item[i];
                if (item.ticketTypeId == typeID) return item.name.toLowerCase();
            }
        } catch (error) {
            return '';
        }
        return '';
    }
}

function parsePlaces(places) {
    // var places = "GE5D[EOR[R[G[4,A,E,I,M,Q,U,Y],H[A,E]],S[G[4,A,E,I,M,Q,U,Y],H[A,E]],T[,G[4,A,E,I,M,Q,U,Y],HA],U,V,W,X,Y,Z],GOR[R,S]]";    
    try {
        while (true) {
            const f = places.indexOf(']');
            if (f < 0) break;
            let s = -1;
            for (let i = f - 1; i >= 0; i--) {
                if (places[i] == '[') {
                    s = i;
                    break;
                }
            }
            let sub_s = places.substring(s + 1, f);
            let sub_s_arr = sub_s.split(',');
            let p = -1;
            for (let i = s - 1; i >= 0; i--) {
                if (places[i] == '[' || places[i] == ',') {
                    p = i;
                    break;
                }
            }
            const front_str = places.substring(p + 1, s);
            for (let i = 0; i < sub_s_arr.length; i++) sub_s_arr[i] = front_str + sub_s_arr[i];
            let n_places = '';
            for (let i = 0; i <= p; i++) n_places = n_places + places[i];
            n_places = n_places + sub_s_arr.join();
            for (let i = f + 1; i < places.length; i++) n_places = n_places + places[i];
            places = n_places;
        }
        if (places) return places.split(','); else return [];
    } catch (error) {
        console.log(error);
        return [];
    }


}