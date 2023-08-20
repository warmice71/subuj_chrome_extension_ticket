var axsPriceData;
var axsSectionData;
var axsEventData;
var shTicketData;
var shTicketSvgUrl;
var shEventInfoData;
var shLinkData;
var vgTicketData;

if(location.href.includes(".axs.") || location.href.includes(".stubhub.") || location.href.includes(".viagogo.")) {
  let scriptEle = document.createElement("script");
  scriptEle.src = chrome.runtime.getURL("assets/js/content-script/xhr.js")
  scriptEle.async = false;
  document.documentElement.appendChild(scriptEle)
}

window.addEventListener("message", function(event) {
  switch (event.data.type) {
    case "axsPriceInfo":
      axsPriceData = JSON.parse(event.data.text)
      break;
    case "axsSectionInfo":
      axsSectionData = JSON.parse(event.data.text)
      break;
    case "axsEventInfo":
      axsEventData = JSON.parse(event.data.text)
      axsEventData = axsEventData[0]
      break;
    case "shTicketInfo":
      shTicketData = JSON.parse(event.data.text)
      shTicketSvgUrl = event.data.url
      break;
    case "shLinkData":
      shLinkData = event.data.text;
      break;
    case "vgTicketInfo":
      vgTicketData = JSON.parse(event.data.text);
      break;
  }
});
