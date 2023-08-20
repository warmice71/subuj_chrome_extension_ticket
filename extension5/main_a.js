// console.log(document.location.href);
// const currentURL = document.location.href;

// const URLs = [
//   "https://www.ticketmaster.com/",
//   "https://concerts.livenation.com/*",
//   "https://www.ticketmaster.ca/*",
//   "https://concerts.livenation.ca/*",
//   "https://www.ticketmaster.com.mx/*",
//   "https://concerts.livenation.com.mx/*",
// ];

// if (URLs === ["https://www.ticketmaster.com/"]) {
// initialize sections variable
var sections = [];

// send message to background script
chrome.runtime.sendMessage({
  from: "content",
  subject: "showPageAction",
});

// listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // first, validate the message's structure
  if (msg.from === "popup" && msg.subject === "getInfo") {
    // get needed info from webpage content

    section_id_relation();

    var info = new Array();
    info[0] = getInfoItems("priceRangeByShape");
    info[1] = getInfoItems("eventLevelAvailability");
    var info_json = JSON.stringify(info);
    //console.log(info);
    // directly respond to the sender (popup)
    response(info_json);
  }
});

function getInfoItems(chart_type) {
  var info = new Array();
  var page = document.getElementsByTagName("html")[0];
  var page_html = page.innerHTML;
  var page_content = get_val(chart_type, "}]}]}", page_html);
  var parts = page_content.split('"inventoryTypes":[');
  var output, min, max, count, section, section_id;
  for (var index = 0; index < parts.length; ++index) {
    var temp = parts[index];
    var parts2 = temp.split('"priceRange":');
    if (parts2[0].indexOf('"count":') !== -1) {
      output = parts2[0].trim();
      output = output.replace(',"priceRange":[{"currency":"USD"', "");
      min = get_val('min":', ",", output);
      max = get_val('max":', "}]", output);
      count = get_val('"count":', ",", output);
      if (chart_type == "priceRangeByShape") {
        if (parts2[0].indexOf('shapes":["') !== -1) {
          section_id = get_val('shapes":["', '"', output);
          section = sections[section_id];
        } else {
          section = "GA";
        }
      } else {
        section = get_val('"', '"', output);
      }

      var value_to_push = new Array();
      value_to_push[0] = min;
      value_to_push[1] = max;
      value_to_push[2] = count;
      value_to_push[3] = section;
      info.push(value_to_push);
    }
  }

  return info;
}

function get_val(sep1, sep2, string) {
  var parts1, parts2;
  string = string.toString();
  parts1 = string.split(sep1);
  parts2 = parts1[1].split(sep2);
  return parts2[0].toString();
}
function section_id_relation() {
  
  var paths = document.getElementsByTagName("path");
  
    for (var i = 0; i < paths.length; i++) {
      var id = paths[i].getAttribute("id");
      var name = paths[i].getAttribute("data-seat-name");

      if (id !== null && id) {
        sections[id] = "sss";
      }
    }
  
}
