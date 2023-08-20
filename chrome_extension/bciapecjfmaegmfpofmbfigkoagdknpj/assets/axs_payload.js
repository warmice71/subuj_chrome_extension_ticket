console.log("-----------Hello AXS -------------");
(async function () {
    let url = window.location.href;
    var splits = url.split("\/");
    let onsaleID = splits[3];
    const eventDate = document.querySelector('.event-header-date').innerText;
    const eventName = document.querySelector('.event-summary-headline__event').innerText;
    const eventSubTitle = document.querySelector('.event-summary-headline__bottom-title') ? document.querySelector('.event-summary-headline__bottom-title').innerText : ''
    const venue = document.querySelector('.event-summary-headline__desc .venue').innerText;
    const imgContainer = document.querySelector('.series-header__image.event-summary-headline__image img');
    let imgUrl;
    if (imgContainer) {
        imgUrl = document.querySelector('.series-header__image.event-summary-headline__image img').getAttribute('src')
    }

    let headerInfo = {
            imgUrl,
            eventDate,
            eventName,
            eventSubTitle,
            venue
        }
    //chrome.runtime.sendMessage("dnacamdclkkokfkbfahfaegemncofgip",{ status: true, onsaleID: onsaleID, headerInfo: headerInfo, cookie: allCookies, sectionData:sectionData, fansight: sessionStorage.getItem('FanSight-Tab'), type: 'getAxsPriceData' });
  await transmitAxsData(onsaleID, headerInfo)

})();


function getSectionData(onsaleID) {
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

    xhr.open("GET", "https://unifiedapicommerce.us-prod0.axs.com/veritix/inventory/V2/" + onsaleID + "/sections");
    xhr.setRequestHeader("fansight-tab", sessionStorage.getItem('FanSight-Tab'));
    xhr.send();
  })

}

async function transmitAxsData(onsaleID, headerInfo){
  let sectionResponse,priceResponse, testRes;
  try{
    if(axsSectionData){
      sectionResponse = axsSectionData;
    } else {
      let sectionData = await getSectionData(onsaleID);
      sectionData = sectionData.data
      sectionResponse = sectionData;
    }
  } catch (e) {
    console.log(`axs section error - ${e}`)
  }
  try {
    priceResponse = axsPriceData
  } catch (e) {
    console.log(`axs price error - ${e}`)
  }


  if (priceResponse) {
    let eventInfo = axsEventData;
    imgUrl = eventInfo.imageURL
  } else {
    console.log("No price response from AXS - bg");
  }

  if (sectionResponse) {
    let pricesData = priceResponse;
    let primary = 0, resale = 0;
    let seatsData = [];
    let type;
    for (let [key, value] of Object.entries(sectionResponse)) {
      // console.log("value: " )
      // console.log(value)
      for (let x = 0; x < value.availability.prices.length; x++){
        if (value.seatTypes[0] == 'STANDARD') primary += value.availability.prices[x].amount; else resale += value.availability.prices[x].amount;
      }
      if(value.seatTypes.indexOf("FLASHSEATS") > -1 && value.seatTypes.length > 1){
        type = "Primary & Resale";
      } else if(value.seatTypes.indexOf("FLASHSEATS") > -1 && value.seatTypes.length === 1){
        type = "Resale";
      } else {
        type = "Primary";
      }
      let count = 0
      for (let x = 0; x < value.availability.prices.length; x++){
        count += value.availability.prices[x].amount
      }
      let item = {
        type: type,
        count: count,
        section: value.sectionLabel,
        price: '',
      }
      if (value.availability.prices.length > 0) {
        // console.log("avail lenght: ")
        // console.log(value.availability.prices.length)
        let priceID = value.availability.prices[0].priceLevel;
        let price = '';
        if (pricesData && pricesData.offerPrices) {
          for (let k = 0; k < pricesData.offerPrices.length; k++) {
            for (let z = 0; z < pricesData.offerPrices[k].zonePrices.length; z++) {
              for (let p = 0; p < pricesData.offerPrices[k].zonePrices[z].priceLevels.length; p++) {
                let priceItem = pricesData.offerPrices[k].zonePrices[z].priceLevels[p];
                if (priceItem.priceLevelID == priceID) {
                  price = priceItem.prices[0].base / 100
                }
              }
            }
          }
          item.price = price;
        }
      }
      seatsData.push(item);
    }

    let result = {
      total: primary + resale,
      primary: primary,
      resale: resale,
      seats: seatsData,
      priceResponse,
      headerInfo: headerInfo
    }
    chrome.runtime.sendMessage({ status: true, data: result, type: 'axs' });
  } else {
    chrome.runtime.sendMessage({ status: false, type: 'axs' });
  }

}
