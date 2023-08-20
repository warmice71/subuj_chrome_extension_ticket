(async function () {
    console.log('Hello Stubhub');
    //show ticket data in the header
    chrome.runtime.onMessage.addListener(function (response) {
        if (response.type == 'add-ticketdetail-header') {
            if (document.querySelector('#eagle-header')) {
                document.querySelector('#eagle-header').remove();
            }
            var globalData = response.data;
            const text = `<span id='eagle-header' style="font-size:12px; color: red; line-height:1; margin-left: 20px;">TotalListings: 
                        ${globalData.totalListings}, TotalTickets: ${globalData.totalTickets}, Min: ${globalData.pricingSummary.min}, Median: ${globalData.pricingSummary.median}, Average: ${globalData.pricingSummary.average}, Max: ${globalData.pricingSummary.max}</span>`;
            const headerSection = document.querySelector("#app").firstChild.firstChild.lastChild;
            if (headerSection) {
                headerSection.innerHTML = headerSection.innerHTML + text;
                headerSection.setAttribute('id', 'eagle-header');
            }

        } else if (response.type == 'othersites') {
            var data = response.data;
            var html = ``;
            let html_tm = '';
            let html_vs = '';
            if (data.tmEventID && !document.querySelector('#eagle-tmlink')) {
                html_tm = `<tr>
                            <td>
                                <a href="https://www.ticketmaster.com/event/${data.tmEventID}" target="_blank" id="eagle-tmlink">
                                    <img src="https://tickets-images.s3.us-east-2.amazonaws.com/ticketmaster_logo2.png" title="Visit Ticketmaster" style="width: 15px; height: 15px;">
                                </a>
                            </td>
                            <td>TM: &nbsp;
                                Primary: ${data.tmTicketData.primary},</td><td>
                                Resale: ${data.tmTicketData.resale},</td><td>
                                Platinum: ${data.tmTicketData.others},</td><td>
                                Min: ${data.tmTicketData.primary_minPrice}</td>
                        </tr>`;
            }
            if (data.vsEventID && !document.querySelector('#eagle-vslink')) {
                html_vs = `<tr>
                                <td>
                                    <a href="https://www.vividseats.com/production/${data.vsEventID}" target="_blank" id="eagle-vslink">
                                        <img src="https://tickets-images.s3.us-east-2.amazonaws.com/vs-logo.png" title="Visit Vividseats" style="width: 15px; height: 15px;">
                                    </a>
                                </td>
                                <td>VS: &nbsp;
                                    Total: ${data.vsTicketData.ticketCount},</td><td>
                                    Min: ${data.vsTicketData.minPrice},</td><td>
                                    Median: ${data.vsTicketData.medianPrice}
                                </td><td></td>
                            </tr>`;
            }
            html += `<table style="
                            display: inline;
                            line-height: 1;
                            margin-left: 10px;
                            font-size: 14px;
                        "> ${html_tm} ${html_vs}                               
                        </table>`;
            const headerSection = document.querySelector("#app").firstChild.firstChild.lastChild;
            if (headerSection) {
                headerSection.innerHTML = headerSection.innerHTML + html;
            }

        }
    })
})();

function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}