console.log("-------> Hello Ticketera");
(async function () {
  console.log("Starting....");
  var url = window.location.href;
  var spUrl = url.split("?");
  var sp = spUrl[0].split("-");
  var eventID = sp[sp.length - 1];
  var priceData = await getPriceData(eventID);
  if (priceData.status) {
    try {
      var ticketinfo = {
        total: 0,
        minPrice: 0,
        maxPrice: 0,
        seats: [],
      };
      var pData = priceData.data;
      var mapGASections = pData.MapGASections;
      var mapSeats = pData.MapSeats;
      var priceMaps = pData.PriceMaps;

      var sectName = "";
      var sectList = [];
      mapSeats.map((seat) => {
        if (sectName !== seat.Key.split("-")[0]) {
          sectName = seat.Key.split("-")[0];
          sectList.push({ Section: sectName, Seats: [] });
        }
      });
      sectList.map((sect) => {
        var sameSeats = mapSeats.filter(
          (seat) =>
            seat.Key.includes(sect.Section + "-") &&
            seat.Key.split("-")[0].length === sect.Section.length
        );
        sameSeats.map((seat) => {
          var seatPrice = priceMaps.find((m) => m.PriceKey === seat.PriceKey);
          var price,
            fees,
            totalPrice,
            totalFee = 0;
          if (seatPrice) {
            price = seatPrice.Price;
            fees = Object.values(seatPrice.FeeNameValues);
            fees.map((fee) => (totalFee += fee));
            totalPrice = Number((price + totalFee).toFixed(2));
          } else {
            price = "NaN";
            totalPrice = "NaN";
          }
          sect.Seats.push({
            Seat: seat.Key,
            Price: price,
            TotalPrice: totalPrice,
          });
          sect.Price = sect.Seats[0].Price;
          sect.TotalPrice = sect.Seats[0].TotalPrice;
          sect.Count = sect.Seats.length;
        });
      });
      var newSectList = [];
      sectList.map((sect) => {
        var price = 0;
        sect.Seats.map((seat) => {
          if (price !== seat.Price) {
            price = seat.Price;
            newSectList.push({
              Section: sect.Section,
              Seats: [],
              Price: seat.Price,
              TotalPrice: seat.TotalPrice,
            });
          }
        });
      });

      newSectList.map((ele) => {
        sameSection = sectList.filter((sect) => sect.Section === ele.Section);

        samePriceSection = sameSection[0].Seats.filter(
          (seat) => seat.Price === ele.Price
        );

        ele.Seats = samePriceSection;
        ele.Count = samePriceSection.length;
      });
      if (mapGASections) {
        var gaSectionsCount = 0;

        mapGASections.map((seat) => {
          gaSectionsCount += seat.MaxAvailable;
          var seatPrice = priceMaps.find((m) => m.PriceKey === seat.PriceKey);
          var price,
            fees,
            totalPrice,
            totalFee = 0;
          if (seatPrice) {
            price = seatPrice.Price;
            fees = Object.values(seatPrice.FeeNameValues);
            fees.map((fee) => (totalFee += fee));
            totalPrice = Number((price + totalFee).toFixed(2));
          } else {
            price = "NaN";
            totalPrice = "NaN";
          }
          newSectList.push({
            Section: seat.Key.split("-")[0],
            Seats: [
              {
                Seat: seat.Key.split("-")[0],
                Price: price,
                TotalPrice: totalPrice,
              },
            ],
            Price: price,
            TotalPrice: totalPrice,
            Count: seat.MaxAvailable,
          });
        });
        ticketinfo.total = mapSeats.length + gaSectionsCount;
      } else {
        ticketinfo.total = mapSeats.length;
      }
      var min = priceMaps[0].Price,
        max = priceMaps[0].Price;
      priceMaps.map((pm) => {
        if (min > pm.Price) min = pm.Price;
        if (max < pm.Price) max = pm.Price;
      });
      ticketinfo.maxPrice = max;
      ticketinfo.minPrice = min;
      ticketinfo.seats = newSectList;
      console.log(ticketinfo);
      chrome.runtime.sendMessage({
        status: true,
        data: ticketinfo,
        type: "ticketera",
      });
    } catch (error) {
      console.log(error);
      chrome.runtime.sendMessage({ status: false, type: "ticketera" });
    }
  } else {
    chrome.runtime.sendMessage({ status: false, type: "ticketera" });
  }
})();

function getPriceData(eventID) {
  var endpoint = `https://pr.ticketerapr.com/api/eventinventory/${eventID}?includeOpens=true&salesChannel=Web`;
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
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
