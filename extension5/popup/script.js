function getInfo(json) {
  var obj_json = JSON.parse(json);
  for (var j = 0; j < obj_json.length; j++) {
    var obj = obj_json[j];
    var no = obj[0];
    var section = obj[1];
    var price = obj[2];
    var qty = obj[3];
    var str = "<tr><td>"+no+"</td><td>"+section+"</td><td>"+price+"</td><td>"+qty+"</td></tr>";
    document.getElementById("res_tbody").innerHTML += str;
  }

  if (j === 0) {
      document.getElementById("res_tbody").innerHTML = "No result";
    }
}

// once the DOM is ready
window.addEventListener("DOMContentLoaded", function () {
  // query for the active tab
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: "popup", subject: "getInfo" },
        getInfo
      );
    }
  );
});
