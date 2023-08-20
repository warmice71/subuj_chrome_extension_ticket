console.log("Hello Hollywood");
(async function () {
  console.log("Starting....");
  const url = window.location.href;
  var spUrl = url.replace("https://my.hollywoodbowl.com/", "");
  var performanceId = "";
  if (url.includes("?")) {
    performanceId = spUrl.split("?")[0].split("/")[3];
  } else {
    performanceId = spUrl.split("/")[3];
  }
  var sessionData = await getSessionKey();
  var sessionKey = sessionData.data.SessionKey;
  //   console.log("SessionKey: ", sessionKey);
  var paramsData = await getParams(sessionKey);
  //   console.log("ParamsData: ", paramsData);
  var modeOfSaleId = paramsData.data.ModeOfSaleId;
  var sourceId = paramsData.data.SourceId;
  console.log(performanceId);
  var zoneData = await getZoneData(performanceId);
  //   console.log("ZoneData: ", zoneData);
  var priceData = await getPriceData(modeOfSaleId, sourceId, performanceId);
  //   console.log("PriceData: ", priceData);
  if (zoneData.status && priceData.status) {
    try {
      var ticketinfo = {
        total: 0,
        minPrice: 0,
        maxPrice: 0,
        seats: [],
      };
      var zData = zoneData.data;
      var pData = priceData.data;
      var min = pData[0].MinPrice,
        max = pData[0].Price;
      pData.forEach((d) => {
        if (min > d.MinPrice) min = d.MinPrice;
        if (max < d.Price) max = d.Price;
      });
      ticketinfo.minPrice = min;
      ticketinfo.maxPrice = max;

      zData.forEach((d) => {
        var sectioninfo = {
          zoneDesc: "",
          zoneLegend: "",
          minPrice: 0,
          price: 0,
          availableCount: 0,
        };
        sectioninfo.zoneDesc = d.Zone.Description;
        sectioninfo.zoneLegend = d.Zone.ZoneLegend;
        var zPriceData = pData.filter((p) => p.ZoneId == d.Zone.Id);
        sectioninfo.minPrice = zPriceData[0].MinPrice;
        sectioninfo.price = zPriceData[0].Price;
        sectioninfo.availableCount = d.AvailableCount;

        ticketinfo.total += d.AvailableCount;
        ticketinfo.seats.push(sectioninfo);
      });

      //   console.log(ticketinfo);
      chrome.runtime.sendMessage({
        status: true,
        data: ticketinfo,
        type: "hollywood",
      });
    } catch (error) {
      console.log(error);
      chrome.runtime.sendMessage({ status: false, type: "hollywood" });
    }
  } else {
    chrome.runtime.sendMessage({ status: false, type: "hollywood" });
  }
})();

function getSessionKey() {
  var endpoint = `https://my.hollywoodbowl.com/en/rest-proxy/Web/Session`;
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

    xhr.open("POST", endpoint);
    xhr.send();
  });
}

function getParams(sk) {
  var endpoint = `https://my.hollywoodbowl.com/en/rest-proxy/Web/Session/${sk}`;
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
    xhr.send();
  });
}

function getZoneData(pId) {
  var endpoint = `https://my.hollywoodbowl.com/en/rest-proxy/TXN/Performances/ZoneAvailabilities?performanceIds=${pId}`;
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
    xhr.send();
  });
}

function getPriceData(saleId, sourceId, pId) {
  var endpoint = `https://my.hollywoodbowl.com/en/rest-proxy/TXN/Performances/Prices?expandPerformancePriceType=&includeOnlyBasePrice=&modeOfSaleId=${saleId}&performanceIds=${pId}&priceTypeId=&sourceId=${sourceId}`;
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
    xhr.send();
  });
}
