(async function () {
    console.log("----> Hi, Non US ticketmaster...");
    const url = window.location.href;
    const eventID = url.split("/event/")[1];
    console.log(eventID);
    const ticketData = getTicketsData(eventID);
    if (ticketData.status) {
        console.log(ticketData);
    }
})();

async function getTicketsData(eventID) {

    const ticketsEndpoint = `https://ismds-intl.tmol.io/api/ismds/event/${eventID}/facets?show=count+row+listpricerange+places+maxQuantity+sections+shape&q=available&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse`;
    const ticketTypeEndpoint = `https://ismds-intl.tmol.io/api/ismds/host/${eventID}/tickettypes?apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse`;
    const ticketsResponse = await getXHRResponse(ticketsEndpoint);
    const tickets = ticketsResponse.data;
    const ticketTypesResponse = await getXHRResponse(ticketTypeEndpoint);
    const ticketTypes = ticketTypesResponse.data;
    const filteredTicketsData = await filterTickets(eventID, tickets, ticketTypes);
    if (filteredTicketsData) {
        chrome.runtime.sendMessage({ status: true, ticketData: filteredTicketsData, type: 'tm_non_us' });
    } else {
        chrome.runtime.sendMessage({ status: false, ticketData: {}, type: 'tm_non_us' });
    }
}

function getXHRResponse(endpoint) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
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

async function filterTickets(eventID, tickets, ticketTypes) {
    let return_data = {};
    let primary_count = 0,
        resale_count = 0,
        others_count = 0,
        total_count = 0,
        primary_minPrice = 10000000,
        primary_maxPrice = 0,
        resale_minPrice = 10000000,
        resale_maxPrice = 0,
        average = 0,
        median = 0,
        p_average = 0,
        p_median = 0,
        r_average = 0,
        r_median = 0,
        min2pack = 10000000,
        min3pack = 10000000,
        min4pack = 10000000,
        min6pack = 10000000,
        r_min2pack = 10000000,
        r_min3pack = 10000000,
        r_min4pack = 10000000,
        r_min6pack = 10000000;
    let seats = [];
    if (tickets.facets) {
        for (let j = 0; j < tickets.facets.length; j++) {
            let ticket = tickets.facets[j];
            if (ticket.available == false) continue;
            if (ticket.accessibility && ticket.accessibility.length && ticket.accessibility[0] == 'wheelchair') continue;
            if (ticket.accessibility && ticket.accessibility.length && ticket.accessibility[0] == 'mobility') continue;
            const ticketTypeData = checkTmTicketType(ticketTypes, ticket.ticketTypes[0]);
            let ticketType = "";
            if (
                ticketTypeData.includes("platinum") ||
                ticketTypeData.includes("handicap") ||
                ticketTypeData.includes("soundcheck") ||
                ticketTypeData.includes("experience") ||
                (ticketTypeData.includes("package") && !ticketTypeData.includes("day package"))
            ) {
                ticketType = ticketTypeData;
                others_count = others_count + ticket.count;
            } else if (ticket.inventoryTypes[0] == "primary") {
                primary_count = primary_count + ticket.count;
                ticketType = "primary";
                try {
                    if (primary_minPrice > ticket.listPriceRange[0].min)
                        primary_minPrice = ticket.listPriceRange[0].min;
                } catch (error) { }
                try {
                    if (primary_maxPrice < ticket.listPriceRange[0].max)
                        primary_maxPrice = ticket.listPriceRange[0].max;
                } catch (error) { }
            } else {
                resale_count = resale_count + ticket.count;
                ticketType = "resale";
                try {
                    if (resale_minPrice > ticket.listPriceRange[0].min) resale_minPrice = ticket.listPriceRange[0].min;
                } catch (error) { }
                try {
                    if (resale_maxPrice < ticket.listPriceRange[0].max) resale_maxPrice = ticket.listPriceRange[0].max;
                } catch (error) { }
            }
            let currency = "";
            if (ticket.listPriceRange && ticket.listPriceRange.length) {
                if (ticket.listPriceRange[0].currency == "GBP") currency = "£";
                else if (ticket.listPriceRange[0].currency == "EUR") currency = "€";
                else currency = ticket.listPriceRange[0].currency;
            }
            let seat = {
                ticketType: ticketType,
                section: ticket.section,
                inventoryType: ticket.inventoryTypes[0],
                offerType: ticket.offerTypes[0],
                count: ticket.count,
                min: ticket.listPriceRange && ticket.listPriceRange.length ? ticket.listPriceRange[0].min : 0,
                max: ticket.listPriceRange && ticket.listPriceRange.length ? ticket.listPriceRange[0].max : 0,
                currency: currency,
            };
            try {
                if (seat.count >= 2) {
                    if (ticketType == 'primary') {
                        if (ticket.listPriceRange[0].min < min2pack) min2pack = ticket.listPriceRange[0].min;
                    } else if (ticketType == 'resale') {
                        if (ticket.listPriceRange[0].min < r_min2pack) r_min2pack = ticket.listPriceRange[0].min;
                    }
                }
                if (seat.count >= 3) {
                    if (ticketType == 'primary') {
                        if (ticket.listPriceRange[0].min < min3pack) min3pack = ticket.listPriceRange[0].min;
                    } else if (ticketType == 'resale') {
                        if (ticket.listPriceRange[0].min < r_min3pack) r_min3pack = ticket.listPriceRange[0].min;
                    }
                }
                if (seat.count >= 4) {
                    if (ticketType == 'primary') {
                        if (ticket.listPriceRange[0].min < min4pack) min4pack = ticket.listPriceRange[0].min;
                    } else if (ticketType == 'resale') {
                        if (ticket.listPriceRange[0].min < r_min4pack) r_min4pack = ticket.listPriceRange[0].min;
                    }
                }
                if (seat.count >= 6) {
                    if (ticketType == 'primary') {
                        if (ticket.listPriceRange[0].min < min6pack) min6pack = ticket.listPriceRange[0].min;
                    } else if (ticketType == 'resale') {
                        if (ticket.listPriceRange[0].min < r_min6pack) r_min6pack = ticket.listPriceRange[0].min;
                    }
                }
            } catch (error) {

            }
            seats.push(seat);
            average += seat.count * seat.min;
            if (ticketType == 'primary') {
                p_average += seat.count * seat.min;
            } else if (ticketType == 'resale') {
                r_average += seat.count * seat.min;
            }
        }
    }

    total_count = primary_count + resale_count + others_count;
    if (total_count > 0) {
        average = (average / total_count).toFixed(1);
        p_average = (p_average / primary_count).toFixed(1);
        r_average = (r_average / resale_count).toFixed(1);
        seats = seats.sort((a, b) => a.min - b.min);
        let idx = Math.floor(seats.length / 2 + 1);
        if (idx >= seats.length) idx = seats.length - 1;
        try {
            median = seats[idx].min;
        } catch (err) { }
        //primary
        var p_seats = seats.filter(v => v.ticketType == 'primary');
        p_seats = p_seats.sort((a, b) => a.min - b.min);
        idx = Math.floor(p_seats.length / 2 + 1);
        if (idx >= p_seats.length) idx = p_seats.length - 1;
        try {
            p_median = p_seats[idx].min;
        } catch (err) { }
        //resale
        var r_seats = seats.filter(v => v.ticketType == 'resale');
        r_seats = r_seats.sort((a, b) => a.min - b.min);
        idx = Math.floor(r_seats.length / 2 + 1);
        if (idx >= r_seats.length) idx = r_seats.length - 1;
        try {
            r_median = r_seats[idx].min;
        } catch (err) { }
    }

    if (primary_minPrice == 10000000) primary_minPrice = 0;
    if (resale_minPrice == 10000000) resale_minPrice = 0;

    return_data.eventID = eventID;
    return_data.timestamp = Date.now();
    return_data.primary = primary_count;
    return_data.resale = resale_count;
    return_data.others = others_count;
    return_data.total = total_count;
    return_data.average = average;
    return_data.median = median;
    return_data.p_average = p_average;
    return_data.p_median = p_median;
    return_data.r_average = r_average;
    return_data.r_median = r_median;
    return_data.primary_minPrice = primary_minPrice;
    return_data.primary_maxPrice = primary_maxPrice;
    return_data.resale_minPrice = resale_minPrice;
    return_data.resale_maxPrice = resale_maxPrice;
    return_data.min2pack = min2pack == 10000000 ? 0 : min2pack;
    return_data.min3pack = min3pack == 10000000 ? 0 : min3pack;
    return_data.min4pack = min4pack == 10000000 ? 0 : min4pack;
    return_data.min6pack = min6pack == 10000000 ? 0 : min6pack;
    return_data.r_min2pack = r_min2pack == 10000000 ? 0 : r_min2pack;
    return_data.r_min3pack = r_min3pack == 10000000 ? 0 : r_min3pack;
    return_data.r_min4pack = r_min4pack == 10000000 ? 0 : r_min4pack;
    return_data.r_min6pack = r_min6pack == 10000000 ? 0 : r_min6pack;
    return_data.seats = seats;
    return return_data;

    function checkTmTicketType(ticketTypes, typeID) {
        try {
            for (let i = 0; i < ticketTypes._embedded.item.length; i++) {
                let item = ticketTypes._embedded.item[i];
                if (item.ticketTypeId == typeID) return item.name.toLowerCase();
            }
        } catch (error) {
            return "";
        }
        return "";
    }
}