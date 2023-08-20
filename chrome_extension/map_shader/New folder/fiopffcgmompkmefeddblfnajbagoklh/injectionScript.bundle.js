window.addEventListener("message", function (e) {
  try {
    if (
      e.data &&
      ("RETURN_FACETS_DATA" === e.data.action ||
        "RETURN_FACETS_DATA_AGAIN" === e.data.action)
    ) {
      var t = function (e) {
          for (
            var t = e + "=",
              a = decodeURIComponent(document.cookie).split(";"),
              r = 0;
            r < a.length;
            r++
          ) {
            for (var s = a[r]; " " == s.charAt(0); ) s = s.substring(1);
            if (0 == s.indexOf(t)) return s.substring(t.length, s.length);
          }
          return "";
        },
        a = e.data.msgObject.eventId,
        r = "";
      if ("" != t("unlockedOffers")) {
        var s = JSON.parse(t("unlockedOffers"));
        r = s[0] && s[0].token[0] ? s[0].token[0] : "";
      }
      var n =
          "https://services.livenation.com/api/ismds/event/" +
          a +
          "/facets?show=count+row+listpricerange+places+maxQuantity+sections+shape&q=available&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse&resaleChannelId=internal.ecommerce.consumer.desktop.web.browser.ticketmaster.us&unlock=" +
          r,
        o = {
          method: "GET",
          headers: {
            "TMPS-Correlation-Id": "00-0-0-0-000".replace(/0/g, function () {
              return Math.random().toString(16).substr(2, 4);
            }),
            "c-reese84": t("reese84"),
          },
        };
      fetch(n, o)
        .then(function (e) {
          return e.json();
        })
        .then(function (t) {
          t.code && t.code.toLowerCase().indexOf("error") >= 0
            ? chrome.runtime.sendMessage(e.data.id, {
                action: "SEND_ERROR_INFO_TO_TAB_ID",
                errorMessgae:
                  "Could not get facets Data, please refresh the page",
              })
            : null != _storeUtils
            ? chrome.runtime.sendMessage(e.data.id, {
                action:
                  "RETURN_FACETS_DATA" === e.data.action
                    ? "SEND_FACET_DATA_TO_TAB_ID"
                    : "SEND_FACET_DATA_TO_TAB_ID_AGAIN",
                facetData: t,
                _storeUtils,
                _ticketTypesGroupedByName:
                  e.data.msgObject._ticketTypesGroupedByName,
                fromNonHiddenRefreshBtn:
                  e.data.msgObject.fromNonHiddenRefreshBtn,
              })
            : chrome.runtime.sendMessage(e.data.id, {
                action: "SEND_ERROR_INFO_TO_TAB_ID",
                errorMessgae:
                  "No store object available, please refresh the page",
              });
        })
        .catch(function (t) {
          chrome.runtime.sendMessage(e.data.id, {
            action: "SEND_ERROR_INFO_TO_TAB_ID",
            errorMessgae: "Could not get facets Data, please refresh the page",
          });
        });
    }
  } catch (e) {
    console.error(e);
  }
});
