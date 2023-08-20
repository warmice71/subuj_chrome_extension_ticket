(async function () {
    let sectionResponse = await getSectionData();
    console.log(sectionResponse);
    if (sectionResponse.status) {
        try {
            let sectionData = sectionResponse.data.sectionRange;
            let seatsData = [];
            let total = 0;
            for (let i = 0; i < sectionData.length; i++) {
                total += sectionData[i]['SECTION_SEAT_COUNT'];
                seatsData.push({
                    section: sectionData[i]['LEVELSECTIONCD'],
                    max: sectionData[i]['MAX_PRICE'] / 100,
                    min: sectionData[i]['MIN_PRICE'] / 100,
                    count: sectionData[i]['SECTION_SEAT_COUNT'],
                })

            }
            let result = {
                total: total,
                seats: seatsData
            }
            console.log(result);
            chrome.runtime.sendMessage({ status: true, data: result, type: 'evenue' });
        } catch (error) {
            console.log(error);
            chrome.runtime.sendMessage({ status: false, type: 'evenue' });
        }

    } else {
        chrome.runtime.sendMessage({ status: false, type: 'evenue' });
    }

})();


function getSectionData() {
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    let dataAccountId = parseInt(params.get('dataAccId'));
    // if (!dataAccountId) dataAccountId = retrieveWindowVariables('dataAccId');
    if (!dataAccountId) dataAccountId = catchupDataAccId();
    let ticketCode = params.get('ticketCode');
    let spCodes = ticketCode.split(':');
    let headerdata = { "distributorId": spCodes[1], "dataAccountId": dataAccountId, "daylightSavingsTime": true }
    console.log('header data: ', headerdata);
    let originUrl = document.location.origin;
    let endpoint = `${originUrl}/pac-api/catalog/sectionranges/price/${spCodes[2]}/${spCodes[3]}?_=${Date.now()}`;
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
        xhr.setRequestHeader("pac-context-data", JSON.stringify(headerdata));
        xhr.send();
    })

}

function retrieveWindowVariables(currVariable) {
    var ret = '';

    var scriptContent = "";
    scriptContent += "if (typeof " + currVariable + " !== 'undefined') document.querySelector('body').setAttribute('tmp_" + currVariable + "', " + currVariable + ");\n"

    var script = document.createElement('script');
    script.id = 'tmpScript';
    script.appendChild(document.createTextNode(scriptContent));
    (document.body || document.head || document.documentElement).appendChild(script);

    ret = document.querySelector('body').getAttribute("tmp_" + currVariable);
    document.querySelector('body').removeAttribute("tmp_" + currVariable);
    document.querySelector('#tmpScript').remove();

    return ret;
}

function catchupDataAccId() {
    var html = document.querySelector('html').textContent;
    var startIndex = html.indexOf("var dataAccId = ");
    var dataAccId = html.slice(startIndex + 17, startIndex + 20);
    return dataAccId;
}