
(async function () {
    console.log('Hello Ticketmaster');
    let url = window.location.href;
    let eventId;
    let inQueue = false;
    if (url.includes('//queue.')){
      inQueue = true;
      eventId = url.split('event%2F')[1];
      eventId = eventId.split('&')[0];
    } else {
      let splits = url.split("\/");
      let sp = splits[splits.length - 1].split("?")
      eventId = sp[0];
    }

    let siteOrigin = 'ticketmaster.com'
  if(url.includes('livenation.com')){
    siteOrigin = 'livenation.com'
  } else if(url.includes('ticketmaster.ca')){
    siteOrigin = 'ticketmaster.ca'
  } else if (url.includes('livenation.ca')){
    siteOrigin = 'livenation.ca'
  }

    let imgUrl, eventName, eventDate, venue;

    try {
        imgUrl = document.querySelector('[data-bdd="event-info-image"] img').getAttribute('src');
        eventName = document.querySelector('[data-bdd="event-header-title"] span').innerHTML.trim();
        eventDate = document.querySelector('[data-bdd="event-header-datetime"]').innerHTML.trim();
        venue = document.querySelector('[data-bdd="event-venue-info"]').innerText;
    } catch (error) {
      try{
        eventName = document.querySelector('[data-bdd="event-header-title"] span').innerHTML.trim();
        eventDate = document.querySelector('[data-bdd="event-header-datetime"]').innerHTML.trim();
        venue = document.querySelector('[data-bdd="event-venue-info"] span').innerText;
      } catch (error){
        try{
          eventName = document.querySelector('[data-bdd="bba-event-header-title"] span').innerHTML.trim();
          eventDate = document.querySelector('[data-bdd="bba-event-header-date"]').innerHTML.trim();
          venue = document.querySelector('[data-bdd="bba-event-header-venue"]').innerText;
        } catch (e) {
          console.log(e)
        }

      }
    }
    var headerInfo = {
        imgUrl, eventName, eventDate, venue
    }
    let tmRequestUrl = `https://services.${siteOrigin}/api/ismds/event/${eventId}/facets?q=available&show=count+row+listpricerange+places+maxQuantity+sections+shape&embed=area&embed=offer&embed=description&resaleChannelId=internal.ecommerce.consumer.desktop.web.browser.ticketmaster.us&compress=places&unlock=&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse`

    let tmResData = await getData(tmRequestUrl,headerInfo, eventId);

    let venueCapUrl = `https://mapsapi.tmol.io/maps/geometry/3/event/${eventId}/placeDetailNoKeys?useHostGrids=true&app=CCP&sectionLevel=true&systemId=HOST`

  // var tmSectionData= {data: {eventId:eventId, requestUrl: tmRequestUrl, requestData: tmData}, status: true};
  // var allCookies = document.cookie;

    tmResData.data.headerInfo = headerInfo
    tmResData.data.eventId = eventId
    chrome.runtime.sendMessage({ data: tmResData.data, headerInfo, type: 'ticketmaster', status: tmResData.status, eventId });

    let venueResData = await getVenueCap(venueCapUrl)
    let venueCapData = JSON.parse(venueResData.data)

    chrome.runtime.sendMessage({ venueCap: venueCapData, status: venueResData.status, type: 'venue capacity'});

  // if (tmSectionData.status) {
  //     tmSectionData.data.headerInfo = headerInfo
  //     chrome.runtime.sendMessage({type: "getTmFacets", data: tmSectionData.data, cookie: allCookies, inQueue}, function(response) {
  //   });
  //
  //
  // } else {
  //     chrome.runtime.sendMessage({ type: 'ticketmaster', status: false });
  //   return { type: 'ticketmaster', status: false }
  // }

})();

async function getVenueCap(url) {

  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();
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
              data: xhr.responseText
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
    xhr.setRequestHeader("accept", "application/json");
    xhr.send();
  })

}

async function getData(url, headerInfo, eventId) {
  try{
    let data = await fetch(url, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "ot-tracer-sampled": "true",
        "ot-tracer-spanid": "2aed306b1bd47cc5",
        "ot-tracer-traceid": "4c6f770f508d1bde",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "tmps-correlation-id": "2447e143-68e7-48b6-9b7b-bc1d3051bdb9"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    });

    data= await data.json()
    return ({status: true, data})

  } catch (e) {
    console.log(e)
    console.log('An error occurred fetching Ticketmaster data from users browser. Fetching this data from TT API instead.')
    return({status: false, data:{ headerInfo, eventId}})
  }

}
