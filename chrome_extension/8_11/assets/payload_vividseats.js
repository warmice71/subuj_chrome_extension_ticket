console.log("-----------Hello Vivid-------------");
(async function () {
    const url = window.location.href;
    const splits = url.split("\/");
    const text = splits[splits.length - 1];
    const t_sp = text.split("?");
    const eventID = t_sp[0];
    const ticketResponse = await getTicketsData(eventID);
    if (ticketResponse.status) {
        const data = ticketResponse.data;
        const result = {
            eventId: eventID,
            id: data.global[0].eventId,
            venueId: data.global[0].venueId,
            listingCount: data.global[0].listingCount,
            ticketCount: data.global[0].ticketCount,
            minPrice: data.global[0].lp,
            maxPrice: data.global[0].hp,
            medianPrice: data.global[0].mp,
            seats: data.tickets
        }
        console.log(result);
        chrome.runtime.sendMessage({ status: true, data: result, type: 'vividseats' });
    } else {
        chrome.runtime.sendMessage({ status: false, type: 'vividseats' });
    }


    //show ticket data in the header
    chrome.runtime.onMessage.addListener(function (response) {
        if (response.type == 'add-ticketdetail-header') {
            if (!document.querySelector('#eagle-header')) {
                var globalData = response.data;
                const text = `<span id='eagle-header' style="font-size:12px; line-height:1; margin-left: 30px;color: red;">TotalListings: 
                    ${globalData.listingCount}, TotalTickets: ${globalData.ticketCount}, Min: ${globalData.minPrice}, Median: ${globalData.medianPrice}, Max: ${globalData.maxPrice}</span>`;
                const headerSection = document.querySelector('#content > header > div');
                if (headerSection) {
                    headerSection.innerHTML = headerSection.innerHTML + text;
                    headerSection.setAttribute('id', 'eagle-header');
                }
            }

        } else if (response.type == 'othersites') {
            var data = response.data;
            var html = ``;
            let html_tm = '';
            let html_sh = '';
            if (data.tmEventID && !document.querySelector('#eagle-tmlink')) {
                html_tm = `<tr>
                    <td> 
                        <a href="https://www.ticketmaster.com/event/${data.tmEventID}" target="_blank" id="eagle-tmlink">
                            <img src="https://tickets-images.s3.us-east-2.amazonaws.com/ticketmaster_logo2.png" title="Visit Ticketmaster" style="width: 15px; height: 15px;">
                        </a>
                        TM: &nbsp;
                        Primary: ${data.tmTicketData.primary}, Resale: ${data.tmTicketData.resale}, Platinum: ${data.tmTicketData.others},</td><td>&nbsp;
                        Min: ${data.tmTicketData.primary_minPrice},</td><td>&nbsp;
                    </td>
                </tr>`;
            }
            if (data.shEventID && !document.querySelector('#eagle-shlink')) {
                html_sh = `<tr>
                    <td>
                        <a href="https://www.stubhub.com/event/${data.shEventID}" target="_blank" id="eagle-shlink">
                            <img src="https://tickets-images.s3.us-east-2.amazonaws.com/stubhub_logo.png" title="Visit Stubhub" style="width: 15px; height: 15px;">
                        </a> 
                        SH: &nbsp;
                        Total: ${data.shTicketData.totalTickets},</td><td>&nbsp;
                        Min: ${data.shTicketData.pricingSummary.min},</td><td>&nbsp;
                        Median: ${data.shTicketData.pricingSummary.median}</td><td>&nbsp;
                        / Sales Since: ${data.shTicketData.shSalesData.trackingFrom},</td><td>&nbsp;
                        Total: ${data.shTicketData.shSalesData.totalSales} / $${data.shTicketData.shSalesData.totalSalesVolumn},</td><td>&nbsp;
                        Last 3 days: ${data.shTicketData.shSalesData.last3daySales} / $${data.shTicketData.shSalesData.last3daySalesVolumn}
                    </td>
                </tr>`;
            }
            html += `<table style="
                            display: inline;
                            line-height: 1;
                            margin-left: 10px;
                            font-size: 14px;
                        "> ${html_sh} ${html_tm}                              
                        </table>`;
            const headerSection = document.querySelector('#content > header > div');
            if (headerSection) {
                headerSection.innerHTML = headerSection.innerHTML + html;
            }

        }
    })

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

        xhr.open("GET", `https://www.vividseats.com/rest/v2/web/listings/${eventID}`);
        // xhr.setRequestHeader("fansight-tab", sessionStorage.getItem('FanSight-Tab'));
        xhr.send();
    })

}