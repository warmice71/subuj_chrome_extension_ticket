console.log(promocode);
getAvailableTickets(promocode);
async function getAvailableTickets(promocode) {
  console.log("Hi axs events !");
  let url = window.location.href;
  var splits = url.split("/");
  const onsaleID = splits[3];
  const sessionData = await getSessionData(onsaleID);
  const sessionID = sessionData.data.referenceNumber;
  if (sessionData.status) {
    let eventData = await getEventData(onsaleID);
    const eventID = eventData.data.onsaleInformation.events[0].eventID;
    const eventInfo = filterEventInfo(
      url,
      onsaleID,
      eventData.data.onsaleInformation
    );
    let restrictionStatus = await checkRestrictions(onsaleID, promocode);
    if (restrictionStatus.status) {
      let offerData = await getOfferData(onsaleID, sessionID, eventID);
      if (offerData.status) {
        let offers = offerData.data.offers;
        let priceData = await getPriceData(onsaleID);
        let offerPrices = priceData.data.offerPrices;

        let primary = 0, resale = 0, platinum = 0;
        let seatsData = [];

        for (let i = 0; i < offers.length; i++) {
          let offerID = offers[i].offerID;
          let items = offers[i].items;
          for (let j = 0; j < items.length; j++) {
            if ("originalPrice" in items[j]) {
              if ("rowLabel" in items[j]) {
                seatsData.push({ seatType: items[j].seatType, sectionLabel: items[j].sectionLabel, rowLabel: items[j].rowLabel, number: items[j].number, price: items[j].originalPrice });
              } else {
                seatsData.push({ seatType: items[j].seatType, sectionLabel: items[j].sectionLabel, rowLabel: "", number: items[j].number, price: items[j].originalPrice });
              }

            } else {
              let pricesPerSection = [];
              let priceLevelID = items[j].priceLevelID;
              let matchedOfferPrice = offerPrices.find(p => p.offerID == offerID);
              let zonePrices = matchedOfferPrice.zonePrices;
              for (let k = 0; k < zonePrices.length; k++) {
                let priceLevels = zonePrices[k].priceLevels;
                for (let p = 0; p < priceLevels.length; p++) {
                  let priceItem = priceLevels[p];
                  if (priceItem.priceLevelID == priceLevelID) {
                    let priceTypes = zonePrices[k].priceTypes;
                    for (let m = 0; m < priceTypes.length; m++) {
                      if (priceTypes[m].priceTypeID == priceItem.prices[0].priceTypeID) {
                        if (priceTypes[m].pricingMode == "Dynamic") {
                          let rawDynamicPriceRanges = zonePrices[k].rawDynamicPriceRanges;
                          let keys = Object.keys(rawDynamicPriceRanges);
                          if (keys.length > 0) {
                            for (let yy = 0; yy < keys.length; yy++) {
                              if (keys[yy].includes(priceItem.priceLevelID) && keys[yy].includes(priceItem.prices[0].priceTypeID)) {
                                pricesPerSection.push(rawDynamicPriceRanges[keys[yy]].min / 100);
                              }
                            }
                          }
                        } else {
                          pricesPerSection.push(priceItem.prices[0].base / 100);
                        }
                      }
                    }
                  }
                }
              }
              let price = Math.min(...pricesPerSection);
              if ("rowLabel" in items[j]) {
                seatsData.push({ seatType: items[j].seatType, sectionLabel: items[j].sectionLabel, rowLabel: items[j].rowLabel, number: items[j].number, price: price });
              } else {
                seatsData.push({ seatType: items[j].seatType, sectionLabel: items[j].sectionLabel, rowLabel: "", number: items[j].number, price: price });
              }

            }
          }
        }
        let total = seatsData.length;
        for (let ss = 0; ss < seatsData.length; ss++) {
          if (seatsData[ss].seatType == "FLASHSEATS") {
            resale += 1;
          } else if (seatsData[ss].seatType == "PREMIUM") {
            platinum += 1;
          } else {
            primary += 1;
          }
        }

        let result = {
          total: total,
          primary: primary,
          resale: resale,
          platinum: platinum,
          seats: seatsData,
        };
        chrome.runtime.sendMessage({
          status: true,
          data: result,
          eventInfo: eventInfo,
          type: "axs",
          message: "success"
        });
      } else {
        if (offerData.data == "Session Expired") {
          chrome.runtime.sendMessage({ status: false, type: "axs", message: "expired" });
        } else if (offerData.data == "Unauthorized") {
          chrome.runtime.sendMessage({ status: false, type: "axs", message: "unauthorized" });
        }
      }
    } else {
      if (restrictionStatus.data == "Session Expired") {
        chrome.runtime.sendMessage({ status: false, type: "axs", message: "expired" });
      } else if (restrictionStatus.data == "Unauthorized") {
        chrome.runtime.sendMessage({ status: false, type: "axs", message: "unauthorized" });
      }
    }
  } else {
    chrome.runtime.sendMessage({ status: false, type: "axs", message: "expired" });
  }
};

function getSessionData(onsaleID) {
  let endpoint = `https://unifiedapicommerce.us-prod0.axs.com/veritix/pre-flow/v2/${onsaleID}/phase?reservation=false&iu=false&makePayment=false&locale=en-US`;
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        try {
          if (this.status == 404) {
            resolve({
              status: false,
            });
          } else {
            resolve({
              status: true,
              data: JSON.parse(xhr.responseText),
            });
          }
        } catch (e) {
          resolve({
            status: false,
          });
        }
      }
    });
    xhr.open("GET", endpoint);
    xhr.setRequestHeader("fansight-tab", sessionStorage.getItem("FanSight-Tab"));
    xhr.send();
  });
}

function checkRestrictions(onsaleID, promocode) {
  let endpoint = `https://unifiedapicommerce.us-prod0.axs.com/veritix/onsale/v2/${onsaleID}/check-restrictions`;
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        try {
          if (this.status == 404) {
            resolve({
              status: false,
            });
          } else {
            resolve({
              status: true,
              data: JSON.parse(xhr.responseText),
            });
          }
        } catch (e) {
          resolve({
            status: false,
            data: xhr.responseText,
          });
        }
      }
    });
    xhr.open("POST", endpoint);
    xhr.setRequestHeader("fansight-tab", sessionStorage.getItem("FanSight-Tab"));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
      "email": null,
      "passcode": null,
      "promocode": promocode,
      "referer": "https://shop.axs.com/",
      "zip": null
    }));
  });
}

function getOfferData(onsaleID, sessionID, eventID) {
  let replacedSID = sessionID.replace(":", "%3A");
  let endpoint = `https://unifiedapicommerce.us-prod0.axs.com/veritix/inventory/V2/${onsaleID}/offer/search?sessionID=${replacedSID}&utm_cid=${Date.now()}`;
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        try {
          if (this.status == 404) {
            resolve({
              status: false,
            });
          } else {
            resolve({
              status: true,
              data: JSON.parse(xhr.responseText),
            });
          }
        } catch (e) {
          resolve({
            status: false,
            data: xhr.responseText,
          });
        }
      }
    });
    xhr.open("POST", endpoint);
    xhr.setRequestHeader("fansight-tab", sessionStorage.getItem("FanSight-Tab"));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
      "category": "SEAT",
      "eventID": eventID,
      "locale": "en-US"
    }));
  });
}

function getPriceData(onsaleID) {
  let endpoint = `https://unifiedapicommerce.us-prod0.axs.com/veritix/inventory/v2/${onsaleID}/price?locale=en-US&getSections=true&grouped=true&includeSoldOuts=false&includeDynamicPrice=true&utm_cid=${Date.now()}`;
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        try {
          if (this.status == 404) {
            resolve({
              status: false,
            });
          } else {
            resolve({
              status: true,
              data: JSON.parse(xhr.responseText),
            });
          }
        } catch (e) {
          resolve({
            status: false,
          });
        }
      }
    });
    xhr.open("GET", endpoint);
    xhr.setRequestHeader("fansight-tab", sessionStorage.getItem("FanSight-Tab"));
    xhr.send();
  });
}

function getEventData(onsaleID) {
  let endpoint = `https://unifiedapicommerce.us-prod0.axs.com/veritix/onsale/v2/${onsaleID}?locale=en-US`;
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        try {
          if (this.status == 404) {
            resolve({
              status: false,
            });
          } else {
            resolve({
              status: true,
              data: JSON.parse(xhr.responseText),
            });
          }
        } catch (e) {
          resolve({
            status: false,
          });
        }
      }
    });

    xhr.open("GET", endpoint);
    xhr.setRequestHeader("fansight-tab", sessionStorage.getItem("FanSight-Tab"));
    xhr.send();
  });
}

function filterEventInfo(eventUrl, onsaleID, salesInformation) {
  try {
    let eventInfo = {
      url: eventUrl,
      onsaleID: onsaleID,
      eventID: salesInformation.events[0].eventID,
      name: salesInformation.title,
      sale: {
        startDate: salesInformation.startDate,
        endDate: salesInformation.endDate,
      },
      date: salesInformation.events[0].date,
      venue: salesInformation.venues[0],
      // mapImage: salesInformation.groups[0].venueMapImage
    };
    return eventInfo;
  } catch (e) {
    return null;
  }
}
