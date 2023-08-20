(async function () {
  let eventID;

  const urlParams = new URLSearchParams(new URL(window.location.href).search);
  eventID = urlParams.get("pid");
  const ticketData = await getTicketsData(eventID);
  if (ticketData.status) {
    let xmlData = parseXml(ticketData.data);
    chrome.runtime.sendMessage({
      data: xmlData,
      type: "mlbTickets",
      status: true,
    });
  } else {
    chrome.runtime.sendMessage({
      data: null,
      type: "mlbTickets",
      status: false,
    });
  }
})();

function parseEventData(xmlDoc) {
  const eventData = xmlDoc.getElementsByTagName("event");
  const venueData = xmlDoc.getElementsByTagName("venue");
  const venueConfig = xmlDoc.getElementsByTagName("venue_config");
  let eventName;
  let eventDateTime;
  let eventImg;
  const venueName = venueData[0].getAttribute("name");
  const venueCapacity = parseInt(venueConfig[0].getAttribute("capacity"));
  for (const ev of eventData) {
    eventName = ev.getAttribute("public_desc");
    eventDateTime = ev.getAttribute("event_date_time");
    eventImg = ev.getAttribute("public_prerendered_image");
  }
  return { eventName, venueName, venueCapacity, eventImg, eventDateTime };
}

function getMinMaxAverage(numbers) {
  if (numbers.length === 0) {
    return { min: undefined, max: undefined, average: undefined };
  }
  // Calculate the minimum and maximum using Math.min() and Math.max() functions
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);

  // Calculate the average using Array.reduce()
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  return { min: minNumber, max: maxNumber, average: average.toFixed(2) };
}

// Example usage:

function parseSectionPrices(xmlDoc, priceScaleParent) {
  const sectionPricesParent = xmlDoc.getElementsByTagName("pricescale");

  if (sectionPricesParent.length > 0) {
    let pricesArr = [];
    for (const sectionPrices of sectionPricesParent) {
      const priceScaleId = sectionPrices.getAttribute("id");
      for (const pParent of priceScaleParent) {
        const priceScales = pParent.getElementsByTagName("pricescale");
        for (const priceSale of priceScales) {
          if (priceSale.getAttribute("id") == priceScaleId) {
            const prices = priceSale.getElementsByTagName("buyer_type");
            for (const price of prices) {
              pricesArr.push(parseFloat(price.getAttribute("price")));
            }
          }
        }
      }
    }

    return getMinMaxAverage(pricesArr);
  } else {
    return [];
  }
}

function parseSectionData(xmlDoc) {
  const sectionData = xmlDoc.getElementsByTagName("section_config");
  const sectionInventory = xmlDoc.getElementsByTagName("section_inventory");
  const priceScaleParent = xmlDoc.getElementsByTagName("price_structure");
  let sectionArr = [];
  for (const sectionParent of sectionData) {
    const sections = sectionParent.getElementsByTagName("section");
    for (const section of sections) {
      tmpObj = {};
      tmpObj.code = section.getAttribute("code");
      tmpObj.desc = section.getAttribute("desc");
      var sectionId = section.getAttribute("id");
      tmpObj.id = sectionId;
      for (const sInvParent of sectionInventory) {
        const sectionInventory = sInvParent.getElementsByTagName("section");
        for (const inv of sectionInventory) {
          var invId = inv.getAttribute("id");
          if (invId == sectionId) {
            let currentInventory = inv.getAttribute("available");
            let capacity = inv.getAttribute("capacity");
            tmpObj.inventory = parseInt(currentInventory);
            tmpObj.capacity = parseInt(capacity);
            const prices = parseSectionPrices(inv, priceScaleParent);
            tmpObj.minPrice = prices.min;
            tmpObj.maxPrice = prices.max;
            tmpObj.avgPrice = prices.average;
          }
        }
      }
      if (tmpObj.capacity > 0) sectionArr.push(tmpObj);
    }
  }

  return sectionArr;
}

function parseXml(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const eventData = parseEventData(xmlDoc);
  const sectionData = parseSectionData(xmlDoc);
  return { eventData, sectionData };
}

function getTicketsData(eventID) {
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
              data: xhr.responseText,
            });
          }
        } catch (e) {
          resolve({
            status: false,
          });
        }
      }
    });

    xhr.open(
      "GET",
      `https://mlb.tickets.com/api/pvodc/v1/events/navmap/availability/?pid=${eventID}&agency=MLB_MPV&orgId=9&supportsVoucherRedemption=true`
    );
    xhr.send();
  });
}
