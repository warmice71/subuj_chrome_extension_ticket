console.log("-----------Hello ticketmaster-------------");
(async function () {
    //check artist page
    try {
        if (window.location.href.includes('https://www.ticketmaster.com/artist/')) {
            console.log('Artist Page!');
            const artistName = document.querySelector('header h1 span').innerText.trim();
            if (artistName) {
                window.open('https://eagleanalytix.com/#/tm/searchevent?keyword=' + artistName, '_blank');
            }
        }
    } catch (error) {

    }
    try {
        const eventName = document.querySelector('.event-header__event-name-text').textContent.trim()
        const eventData = {
            eventName: eventName
        }
        chrome.runtime.sendMessage({ status: true, eventData: eventData, type: 'ticketmaster' });
    } catch (error) {
        console.log(error);
        try {
            const eventName = document.querySelector('h1.Basestyles__Base-sc-1tnb9cm-0').textContent.trim()
            const eventData = {
                eventName: eventName
            }
            chrome.runtime.sendMessage({ status: true, eventData: eventData, type: 'ticketmaster' });
        } catch (error) {
            chrome.runtime.sendMessage({ status: true, eventData: null, type: 'ticketmaster' });
        }

    }

    if (!document.querySelector('#eagle-header')) {

        //show ticket data in the header
        chrome.runtime.onMessage.addListener(async function (response) {
            if (response.type == 'add-ticketdetail-header') {
                // if (!document.querySelector('#eagle-header')) {
                //     if(document.querySelector('#eagle-header-temp'))
                //         document.querySelector('#eagle-header-temp').innerHTML = '';
                //     var globalData = response.data;
                //     var text = `&nbsp;&nbsp;&nbsp;Primary: ${globalData.primary}, Resale: ${globalData.resale}, Platinum: ${globalData.platinum}`;
                //     if (document.querySelector('.split-content__primary')) {
                //         document.querySelector('.split-content__primary').innerHTML = text + document.querySelector('.split-content__primary').innerHTML;
                //         document.querySelector('.split-content__primary').setAttribute('id', 'eagle-header');
                //     }
                // }

            } else if (response.type == 'othersites') {
                var data = response.data;
                var html = ``;
                let html_sh = '';
                let html_vs = '';
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
                if (data.vsEventID && !document.querySelector('#eagle-vslink')) {
                    html_vs = `<tr>
                                    <td> 
                                        <a href="https://www.vividseats.com/production/${data.vsEventID}" target="_blank" id="eagle-vslink">
                                            <img src="https://tickets-images.s3.us-east-2.amazonaws.com/vs-logo.png" title="Visit Vividseats" style="width: 15px; height: 15px;">
                                        </a>
                                        VS: &nbsp;
                                        Total: ${data.vsTicketData.ticketCount},</td><td>&nbsp;
                                        Min: ${data.vsTicketData.minPrice},</td><td>&nbsp;
                                        Median: ${data.vsTicketData.medianPrice}
                                    </td>
                                </tr>`;
                }
                html += `<table style="
                            display: inline;
                            line-height: 1;
                            margin-left: 10px;
                            font-size: 14px;
                        "> ${html_sh} ${html_vs}                               
                        </table>`;
                if (document.querySelector('.split-content__primary')) {
                    document.querySelector('.split-content__primary').innerHTML = document.querySelector('.split-content__primary').innerHTML + html;
                }

            } else if (response.type == 'getUnlockToken') {
                const result = await getUnlockToken(response.data.eventID, response.data.unlockCode);
                const exclusive = getParameterByName('did');
                chrome.runtime.sendMessage({ type: 'sendUnlockToken', data: { ...result, exclusive } });

            }
        })

    }

    if (document.querySelector('#edp-offer-code-button')
        || document.querySelector('body').innerText.includes('Join the Queue')
        || document.querySelector('body').innerText.includes('Waiting Room')
    ) {
        chrome.runtime.sendMessage({ status: true, type: 'unlock_status' });
    }

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

function getUnlockToken(eventID, unlockCode) {
    console.log('getUnlockToken2');
    const url = `https://www.ticketmaster.com/ipa/v2/offercode/validate?eventId=${eventID}&code=${unlockCode}`;
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
                            token: JSON.parse(xhr.responseText).token
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
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
        }
        uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}