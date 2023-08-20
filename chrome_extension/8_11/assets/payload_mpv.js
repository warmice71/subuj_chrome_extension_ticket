console.log("--------------------------Hello MPV----------------------------");

// creates object instantce of XMLtoJSON
var xml2json = new XMLtoJSON();

(async function () {
  let response = await getSectionData();
  if (response.status) {
    try {
      var data = xml2json.fromStr(response.data, "string");
      const tickets = filterTicketInfo(data);
      const eventInfo = filterEventInfo(data);
      const global_data = filterGlobalTickets(tickets);
      const result = {
        global_data: global_data,
        seats: tickets,
        eventInfo: eventInfo,
      };
      chrome.runtime.sendMessage({ status: true, data: result, type: "mpv" });
    } catch (error) {
      console.log(error);
      chrome.runtime.sendMessage({ status: false, type: "mpv" });
    }
  } else {
    chrome.runtime.sendMessage({ status: false, type: "mpv" });
  }
})();

function getSectionData() {
  const orgid = getParameterByName("orgid");
  const orgId = getParameterByName("orgId");
  const agency = getParameterByName("agency");
  const pid = getParameterByName("pid");
  const eventId = getParameterByName("eventId");
  const eventid = getParameterByName("eventid");
  const salesGroupId = getParameterByName("salesGroupId");
  const packageId = getParameterByName("packageId");
  const packageListId = getParameterByName("packageListId");
  var endpoint = `${window.location.origin}/api/pvodc/v1/events/navmap/availability/`;
  if (pid) endpoint = endpoint + `?pid=${pid}`;
  if (agency) endpoint = endpoint + `&agency=${agency}`;
  if (orgid || orgId) {
    const m_id = orgid ? orgid : orgId;
    endpoint = endpoint + `&orgId=${m_id}&orgid=${m_id}`;
    // endpoint = endpoint + `&orgId=${m_id}`;
  }
  if (eventid || eventId) {
    const e_id = eventid ? eventid : eventId;
    endpoint = endpoint + `&eventId=${e_id}&eventid=${e_id}`;
  }
  if (salesGroupId) endpoint = endpoint + `&salesGroupId=${salesGroupId}`;
  if (packageId) endpoint = endpoint + `&packageId=${packageId}`;
  if (packageListId) endpoint = endpoint + `&packageListId=${packageListId}`;
  endpoint = endpoint + "&supportsVoucherRedemption=true";
  if (endpoint.includes("?") == false) endpoint = endpoint.replace("&", "?");
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

    xhr.open("GET", endpoint);
    xhr.setRequestHeader("x-referer", null);
    xhr.send();
  });
}

function getParameterByName(name) {
  const url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Converts XML to JSON
// from: https://coursesweb.net/javascript/convert-xml-json-javascript_s2
function XMLtoJSON() {
  var me = this; // stores the object instantce

  // gets the content of an xml file and returns it in
  me.fromFile = function (xml, rstr) {
    // Cretes a instantce of XMLHttpRequest object
    var xhttp = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    // sets and sends the request for calling "xml"
    xhttp.open("GET", xml, false);
    xhttp.send(null);

    // gets the JSON string
    var json_str = jsontoStr(setJsonObj(xhttp.responseXML));

    // sets and returns the JSON object, if "rstr" undefined (not passed), else, returns JSON string
    return typeof rstr == "undefined" ? JSON.parse(json_str) : json_str;
  };

  // returns XML DOM from string with xml content
  me.fromStr = function (xml, rstr) {
    // for non IE browsers
    if (window.DOMParser) {
      var getxml = new DOMParser();
      var xmlDoc = getxml.parseFromString(xml, "text/xml");
    } else {
      // for Internet Explorer
      var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
    }

    // gets the JSON string
    var json_str = jsontoStr(setJsonObj(xmlDoc));

    // sets and returns the JSON object, if "rstr" undefined (not passed), else, returns JSON string
    return typeof rstr == "undefined" ? JSON.parse(json_str) : json_str;
  };

  // receives XML DOM object, returns converted JSON object
  var setJsonObj = function (xml) {
    var js_obj = {};
    if (xml.nodeType == 1) {
      if (xml.attributes.length > 0) {
        js_obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          js_obj["@attributes"][attribute.nodeName] = attribute.value;
        }
      }
    } else if (xml.nodeType == 3) {
      js_obj = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof js_obj[nodeName] == "undefined") {
          js_obj[nodeName] = setJsonObj(item);
        } else {
          if (typeof js_obj[nodeName].push == "undefined") {
            var old = js_obj[nodeName];
            js_obj[nodeName] = [];
            js_obj[nodeName].push(old);
          }
          js_obj[nodeName].push(setJsonObj(item));
        }
      }
    }
    return js_obj;
  };

  // converts JSON object to string (human readablle).
  // Removes '\t\r\n', rows with multiples '""', multiple empty rows, '  "",', and "  ",; replace empty [] with ""
  var jsontoStr = function (js_obj) {
    var rejsn = JSON.stringify(js_obj, undefined, 2)
      .replace(/(\\t|\\r|\\n)/g, "")
      .replace(/"",[\n\t\r\s]+""[,]*/g, "")
      .replace(/(\n[\t\s\r]*\n)/g, "")
      .replace(/[\s\t]{2,}""[,]{0,1}/g, "")
      .replace(/"[\s\t]{1,}"[,]{0,1}/g, "")
      .replace(/\[[\t\s]*\]/g, '""');
    return rejsn.indexOf('"parsererror": {') == -1
      ? rejsn
      : "Invalid XML format";
  };
}

function filterTicketInfo(data) {
  let sections = [];
  try {
    data = JSON.parse(data);
    let invSecData = [];
    const invData = data.map_response.master_config.section_inventory.section;
    if (!Array.isArray(invData)) invSecData.push(invData);
    else invSecData = invData;
    for (let i = 0; i < invSecData.length; i++) {
      let sdata = invSecData[i];
      if (sdata["@attributes"]["available"] > 0) {
        const qty = sdata["@attributes"]["available"];
        if (!sdata["@attributes"]) console.log("----------------", i);
        const section_id = sdata["@attributes"]["id"];
        var description = "";
        var price_id = "";
        if (Array.isArray(sdata["pricescale"])) {
          price_id = sdata["pricescale"][0]["@attributes"]["id"];
        } else {
          price_id = sdata["pricescale"]["@attributes"]["id"];
        }
        var section = "";
        let confSecData = [];
        let confData = data.map_response.master_config.section_config.section;
        if (!Array.isArray(confData)) confSecData.push(confData);
        else confSecData = confData;
        for (let k = 0; k < confSecData.length; k++) {
          let d = confSecData[k];
          if (d["@attributes"]["id"] == section_id) {
            section = d["@attributes"]["desc"];
            description = d["@attributes"]["public_desc"];
            break;
          }
        }
        let price = 0;
        let structPriceData = [];
        let structPrice = data.map_response.price_structure.pricescale;
        if (!Array.isArray(structPrice)) structPriceData.push(structPrice);
        else structPriceData = structPrice;
        for (k = 0; k < structPriceData.length; k++) {
          let p = structPriceData[k];
          if (p["@attributes"]["id"] == price_id) {
            price = p["@attributes"]["ref_price"];
            break;
          }
        }
        sections.push({
          count: parseInt(qty),
          price: parseFloat(price),
          section: section,
          description: description,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }

  return sections;
}

function filterGlobalTickets(tickets) {
  let min = 1000000,
    max = 0,
    total = 0,
    listing = 0;
  for (let i = 0; i < tickets.length; i++) {
    let ticket = tickets[i];
    if (min > ticket.price) min = ticket.price;
    if (max < ticket.price) max = ticket.price;
    total += ticket.count;
    listing++;
  }
  if (min == 1000000) min = 0;
  return {
    max: max,
    min: min,
    total: total,
    totalListing: listing,
  };
}

function filterEventInfo(data) {
  data = JSON.parse(data);
  return {
    name: data["map_response"]["event"]["@attributes"]["public_desc"],
    date: data["map_response"]["event"]["@attributes"]["event_date_time"],
    venue: {
      name: data["map_response"]["venue"]["@attributes"]["name"],
      city: data["map_response"]["venue"]["address"]["@attributes"]["city"],
    },
  };
}
