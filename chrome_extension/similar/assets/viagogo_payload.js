(async function () {
    let eventID;

    let eventIdFromUrl = window.location.href
    eventIdFromUrl = eventIdFromUrl.split('Tickets/');
    eventIdFromUrl = eventIdFromUrl[eventIdFromUrl.length-1]
    eventIdFromUrl = eventIdFromUrl.includes('/')?eventIdFromUrl.split('/')[0]:eventIdFromUrl
    eventID = eventIdFromUrl.includes('?')?eventIdFromUrl.split('?')[0]:eventIdFromUrl

    let vgEventInfoExtracted = document.querySelector('script[type="application/ld+json"]').innerHTML
    let vgEventInfoExtractedJSON = JSON.parse(vgEventInfoExtracted)

    const eventTitle = vgEventInfoExtractedJSON.name;
    const eventVenueName = vgEventInfoExtractedJSON.location.name;
    const eventVenueCity = vgEventInfoExtractedJSON.location.address.addressLocality;
    const eventVenueState = vgEventInfoExtractedJSON.location.address.addressRegion;
    const eventStartDate = new Date(vgEventInfoExtractedJSON.startDate).toDateString() + ' ' +  new Date(vgEventInfoExtractedJSON.startDate).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    const imgUrl = vgEventInfoExtractedJSON.image;

    const headerInfo = {
      imgUrl, eventTitle, eventVenueName, eventVenueState, eventVenueCity,eventStartDate, eventID
    }

    let allVgActiveListings;
    let categoryId;
    let svgEventId;
    let vgSectionInfo;
    try{
      allVgActiveListings = await getCurrentListings(window.location.href)
      categoryId = String(allVgActiveListings.data).split("CategoryId=")[1]
      categoryId = categoryId.split("&")[0];
      categoryId = categoryId.split("\",")[0];
      svgEventId = eventID.split("E-")[1]
      vgSectionInfo = await getSectionTickets(svgEventId,categoryId)

    }catch (e){
      allVgActiveListings = false;
    }
  // let relLink;
  //   try{
  //     relLink = shLinkData;
  //     if(String(relLink).includes('stubhub')){
  //       relLink = String(relLink);
  //       relLink = relLink.split("//")[2]
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }

    let result = {
      vgTicketData: JSON.parse(vgSectionInfo.data),
      allVgActiveListings: JSON.parse(allVgActiveListings.data),
      //relLink:relLink,
      headerInfo: headerInfo
    }

    chrome.runtime.sendMessage({ data: result,  type: 'viagogo', status: true });
    chrome.runtime.sendMessage({eventInfo: vgEventInfoExtractedJSON, listingData: JSON.parse(allVgActiveListings.data), eventId:eventID, type: 'stubhubSave', status: true})
})();


async function getCurrentListings(pageUrl) {
  let requestUrl = pageUrl;
  if(requestUrl.includes("/?")){
    requestUrl = requestUrl.split("?")[0]
  }
  if(requestUrl.length <20){
    requestUrl = `https://www.viagogo.com/event/${requestUrl}`
  }else if(requestUrl.charAt(requestUrl.length-1) === "/"){
    requestUrl = requestUrl.splice(requestUrl.length-1)
  }
  requestUrl = requestUrl+`?ShowAllTickets=true&Quantity=0&PageVisitId=${visitId()}&PageSize=99999&CurrentPage=1&SortBy=ROW&PriceRange=0-NaN`

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
async function getSectionTickets(svgEventId, catId) {
  requestUrl = `https://www.viagogo.com/Browse/VenueMap/GetSvgData/${svgEventId}?categoryId=${catId}`
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
