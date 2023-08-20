if (location.href.includes("tix.axs.com")) {
  const fetchRes = window.fetch;
  window.fetch = function() {
    return new Promise((t, s) => {
      fetchRes.apply(this, arguments).then(modifiedRes => {
        modifiedRes.url.indexOf("/veritix/inventory/") > -1 && (resp = modifiedRes.clone(), resp.text().then(resData => {

          if (resData.includes('{"offerPrices":')) {
            var completeObj = {
              type: "axsPriceInfo",
              text: resData
            };
            window.postMessage(completeObj, "*")
          } else if (resData.includes('":{"sectionLabel":"')) {
            var completeObj = {
              type: "axsSectionInfo",
              text: resData
            };
            window.postMessage(completeObj, "*")
          }
        })), t(modifiedRes)

          modifiedRes.url.indexOf("axs/events?") > -1 && (resp = modifiedRes.clone(), resp.text().then(resData => {
            if (resData.includes('eventID')) {
              var completeObj = {
                type: "axsEventInfo",
                text: resData
              };
              window.postMessage(completeObj, "*")
            }
          })), t(modifiedRes)
      }

      ).catch(error => {
        s(error)
      })
    })
  }
} else if(location.href.includes("stubhub.com") ) {
  const fetchRes = window.fetch;
  window.fetch = function () {
    return new Promise((t, s) => {
      fetchRes.apply(this, arguments).then(modifiedRes => {
          modifiedRes.url.indexOf("GetSvgDataSh/") > -1 && (resp = modifiedRes.clone(), resp.text().then(resData => {
            if (resData.includes('{"VenueMapConfiguration":')) {
              let completeObj = {
                type: "shTicketInfo",
                text: resData,
                url: modifiedRes.url
              };
              window.postMessage(completeObj, "*")
              let allHeadLinks = document.head.getElementsByTagName('link');
              for(let link in allHeadLinks){
                if(allHeadLinks.hasOwnProperty(link)){
                  let l = allHeadLinks[link];
                  if(l.rel === 'canonical'){
                    console.log(l.href);
                    let linkObj = {
                      type: "shLinkData",
                      text: l.href
                    };
                    window.postMessage(linkObj, "*")
                  }
                }
              }
            }
          })), t(modifiedRes)
        }
      ).catch(error => {
        s(error)
      })
    })
  }
}else if(location.href.includes("viagogo") ) {
  const fetchRes = window.fetch;
  window.fetch = function () {
    return new Promise((t, s) => {
      fetchRes.apply(this, arguments).then(modifiedRes => {
          modifiedRes.url.indexOf("GetSvgData/") > -1 && (resp = modifiedRes.clone(), resp.text().then(resData => {
            if (resData.includes('{"VenueMapConfiguration":')) {
              let completeObj = {
                type: "vgTicketInfo",
                text: resData
              };
              window.postMessage(completeObj, "*")
            }
          })), t(modifiedRes)
        }
      ).catch(error => {
        s(error)
      })
    })
  }
}
