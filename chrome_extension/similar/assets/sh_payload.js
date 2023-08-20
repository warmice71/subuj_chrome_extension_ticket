(async function () {
  let eventID;
  const splits = window.location.href.split("\/");
  for (let i = 0; i < splits.length; i++) {
    let a = splits[i];
    if (a.length > 7 && a.length < 10 && isNaN(a) == false) {
      eventID = a;
      break;
    }
  }
  let shEventInfoExtracted = document.querySelector('script[type="application/ld+json"]').innerHTML
  let shEventInfoExtractedJSON = JSON.parse(shEventInfoExtracted)
  const eventTitle = shEventInfoExtractedJSON.name;
  const eventVenueName = shEventInfoExtractedJSON.location.name;
  const eventVenueCity = shEventInfoExtractedJSON.location.address.addressLocality;
  const eventVenueState = shEventInfoExtractedJSON.location.address.addressRegion;
  const eventStartDate = new Date(shEventInfoExtractedJSON.startDate).toDateString() + ' ' +  new Date(shEventInfoExtractedJSON.startDate).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  const imgUrl = shEventInfoExtractedJSON.image;

  const headerInfo = {
    imgUrl, eventTitle, eventVenueName, eventVenueState, eventVenueCity,eventStartDate, eventID
  }

  let allShActiveListings;
  try{
    allShActiveListings = await getCurrentListings(window.location.href)

  }catch (e){
    allShActiveListings = false;

  }
  let relLink;
  try{
    if (shTicketSvgUrl){
      relLink = shTicketSvgUrl;
      relLink = String(relLink).split("GetSvgDataSh/")[1]
      if(relLink.includes("?")){
        relLink = relLink.split("?")[0]
      }
    } else {
      relLink = eventID
    }

  } catch (e) {
    relLink = eventID
  }

  let indexData;
  try{
    // get script tag from with new one
    indexData = String(document.body.innerHTML).split("<script id=\"index-data\" type=\"application/json\">")[1]
    indexData = JSON.parse(indexData.split("</script>")[0])

  } catch (e) {
    try{

      indexData = await getEventData()
      indexData = String(indexData.data).split("<script id=\"app-context\" type=\"application/json\">")[1]
      indexData = indexData.split("</script>")[0]
      if(indexData.includes("</script>")){
        indexData = JSON.parse(indexData.split("</script>")[0])
      } else{
        indexData = JSON.parse(indexData)
      }

    } catch (e) {
    }
  }

  // if/else with new function and old  venue map in shticketdata, result beforehand
  let result = {}
  try{
    if ('VenueMapConfiguration' in shTicketData) {
      result = {
        shTicketData: shTicketData,
        allShActiveListings: JSON.parse(allShActiveListings.data),
        relLink:`E-${relLink}`,
        headerInfo: headerInfo
      }
    }

  } catch (e) {
    try{
      let venueMapData = await getVenueMap(eventID, indexData.categoryId)
      result = {
        shTicketData: JSON.parse(venueMapData.data),
        allShActiveListings: JSON.parse(allShActiveListings.data),
        relLink:`E-${relLink}`,
        headerInfo: headerInfo
      }
    } catch (e) {
      result = {
        shTicketData: false,
        allShActiveListings: JSON.parse(allShActiveListings.data),
        relLink:`E-${relLink}`,
        headerInfo: headerInfo
      }
    }

  }

  chrome.runtime.sendMessage({ data: result,  type: 'stubhub', status: true });
  chrome.runtime.sendMessage({data:{eventInfo: shEventInfoExtractedJSON, listingData: JSON.parse(allShActiveListings.data), relLink, eventId:eventID, indexData}, type: 'stubhubSave', status: true})
})();
async function getEventData() {

  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();
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

    xhr.open("GET", window.location.href);
    xhr.setRequestHeader("accept", "application/json");
    xhr.send();
  })

}

async function getVenueMap(eventID, categoryID) {
  let requestUrl = `https://www.stubhub.com/Browse/VenueMap/GetSvgData/${eventID}?categoryId=${categoryID}`

  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();
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

    xhr.open("POST", requestUrl);
    xhr.setRequestHeader("accept", "application/json");
    xhr.send();
  })

}

// copy function and use for end point

async function getCurrentListings(pageUrl) {
  let requestUrl = pageUrl;
  if(requestUrl.includes("/?")){
    requestUrl = requestUrl.split("?")[0]
  }
  if(requestUrl.length <20){
    requestUrl = `https://www.viagogo.com/event/${requestUrl}`
  }else if(requestUrl.charAt(requestUrl.length-1) !== "/"){
    requestUrl = requestUrl+"/"
  }
  requestUrl = requestUrl+`?ShowAllTickets=true&HideDuplicateTicketsV2=false&Quantity=0&PageVisitId=${visitId()}&PageSize=99999&CurrentPage=1&SortBy=ROW&Sections=&TicketClasses=&ListingNotes=&TicketTypeGroups=&PriceRange=0,100&InstantDelivery=false&EstimatedFees=false&Method=IndexSh`

  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();
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

    xhr.open("POST", requestUrl);
    xhr.setRequestHeader("accept", "application/json");
    xhr.send();
  })

}
function visitId() {
  return ('92fd80e1422144a180c6f318ad4a74ed').replace(/[01892fdea74]/g, c =>
    // @ts-ignore
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
