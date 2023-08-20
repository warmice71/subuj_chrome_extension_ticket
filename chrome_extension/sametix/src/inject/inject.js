let e;
(apiBaseUrl = "https://app.sametix.com"),
  (function t() {
    (e = chrome.runtime.connect({ name: "foo" })),
      e.onDisconnect.addListener(t),
      e.onMessage.addListener((e) => {});
  })();
var t =
    (location.href.includes(".ticketmaster.") ||
      location.href.includes(".livenation.") ||
      location.href.includes("/ticketmaster.") ||
      location.href.includes("/livenation.")) &&
    location.href.includes("/event/"),
  n =
    (location.href.includes(".stubhub.") ||
      location.href.includes("/stubuhb.")) &&
    location.href.includes("/event/");
if (t || n) {
  var s = {},
    a = {},
    r = { TM: null, SH: null, TP: null, VS: null },
    l = null,
    c = null,
    d = !1,
    m = null,
    u = null,
    p = {},
    f = null,
    h = null,
    v = !1,
    g = null;
  chrome.storage.local.get("SAMETIXUUID", function (e) {
    e.SAMETIXUUID && (g = e.SAMETIXUUID);
  });
  var S = document.createElement("script");
  (S.src = chrome.runtime.getURL("/src/inject/xhr.js")),
    (S.async = !1),
    (document.head || document.documentElement).appendChild(S);
  var E = document.createElement("link");
  (E.href = "https://fonts.googleapis.com/css?family=Poppins"),
    (E.rel = "stylesheet"),
    (document.head || document.documentElement).appendChild(E),
    window.addEventListener(
      "load",
      function e(i) {
        window.removeEventListener("load", e, !1),
          null != m && I(m),
          (h = (function () {
            const e = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            if (((data = {}), t))
              (dateTime = m.eventJSONData.formattedDate.split(" • ")),
                (date = dateTime[1]),
                (time = dateTime[2]),
                (loc =
                  m.eventJSONData.venue.name +
                  ", " +
                  m.eventJSONData.venue.city +
                  ", " +
                  m.eventJSONData.venue.state),
                (data = {
                  src: "TM",
                  fullDateTime: m.eventJSONData.eventdate.value,
                  timeZone: m.eventJSONData.venue.location.timeZone,
                  city: m.eventJSONData.venue.location.address.city,
                  state: m.eventJSONData.venue.location.address.region.abbrev,
                  country:
                    m.eventJSONData.venue.location.address.country.abbrev,
                  date: date,
                  time: time,
                  location: loc,
                  eventId: m.eventJSONData.id,
                  eventName: m.eventJSONData.name,
                  venueId: m.eventJSONData.venue.id,
                  venueName: m.eventJSONData.venue.name,
                });
            else if (
              n &&
              ((scr = document.querySelectorAll(
                '[type="application/ld+json"]'
              )),
              scr.length >= 0)
            ) {
              for (E in ((eventInfo = JSON.parse(scr[0].innerText)),
              (eventId = eventInfo.url.split("/").at(-2)),
              (venueId = 0),
              (links = document.getElementsByTagName("a")),
              links))
                if (null != links[E].href && links[E].href.includes("/_V-")) {
                  venueId = links[E].href.split("/_V-")[1];
                  break;
                }
              (date = e[new Date(eventInfo.startDate).getMonth()]),
                (time = new Date(eventInfo.startDate).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: !0,
                })),
                (loc =
                  eventInfo.location.name +
                  ", " +
                  eventInfo.location.address.addressLocality +
                  ", " +
                  eventInfo.location.address.addressRegion +
                  ", " +
                  eventInfo.location.address.addressCountry),
                (data = {
                  src: "SH",
                  fullDateTime: eventInfo.startDate,
                  city: eventInfo.location.address.addressLocality,
                  state: eventInfo.location.address.addressRegion,
                  country: eventInfo.location.address.addressCountry,
                  date: date,
                  time: time,
                  location: loc,
                  eventId: eventId,
                  eventName: eventInfo.name,
                  venueId: venueId,
                  venueName: eventInfo.location.name,
                  url: eventInfo.url,
                });
            }
            return data;
          })()),
          chrome.runtime.sendMessage(
            { type: "getMappedEvents", data: h },
            null,
            function (e) {
              if (e)
                if ("OK" == e.status) {
                  if (
                    ((r = e.events),
                    t
                      ? chrome.runtime.sendMessage({
                          type: "trkTmEventVisit",
                          data: {
                            tmEvent: h,
                            shEvent: r.SH,
                            tpEvent: r.TP,
                            vsEvent: r.VS,
                          },
                        })
                      : n &&
                        chrome.runtime.sendMessage({
                          type: "trkShEventVisit",
                          data: {
                            tmEvent: r.TM,
                            shEvent: r.SH,
                            tpEvent: r.TP,
                            vsEvent: r.VS,
                          },
                        }),
                    (soldOut = n
                      ? document.querySelectorAll(
                          '[aria-label="Notify me when tickets are available"]'
                        )
                      : t
                      ? document.getElementsByClassName(
                          "canceled-event__header-text"
                        )
                      : []),
                    (isSoldOut =
                      (n && soldOut.length > 0) ||
                      (t &&
                        soldOut.length > 0 &&
                        (soldOut[0].innerText.includes("sold out") ||
                          soldOut[0].innerText.includes(
                            "not currently available"
                          )))),
                    (nextSale = document.querySelectorAll(
                      '[data-bdd="canceled-event-header-title"]'
                    )),
                    (isNoActiveSale =
                      t &&
                      nextSale.length > 0 &&
                      (nextSale[0].innerText.includes(
                        "The Next Sale Will Begin"
                      ) ||
                        nextSale[0].innerText.includes(" starts on "))),
                    isSoldOut || isNoActiveSale)
                  )
                    for (E in ((url = ""),
                    t
                      ? isSoldOut
                        ? chrome.runtime.sendMessage({
                            type: "trkTmSoldOut",
                            data: {
                              tmEvent: r.TM,
                              shEvent: r.SH,
                              tpEvent: e.events.TP,
                              vsEvent: r.VS,
                            },
                          })
                        : isNoActiveSale &&
                          chrome.runtime.sendMessage({
                            type: "trkTmNoActiveSale",
                            data: {
                              tmEvent: r.TM,
                              shEvent: r.SH,
                              tpEvent: e.events.TP,
                              vsEvent: r.VS,
                            },
                          })
                      : n &&
                        chrome.runtime.sendMessage({
                          type: "trkShSoldOut",
                          data: {
                            tmEvent: r.TM,
                            shEvent: r.SH,
                            tpEvent: e.events.TP,
                            vsEvent: r.VS,
                          },
                        }),
                    e.events.TP && e.events.TP.url
                      ? (url =
                          "https://tickpick.dgrk2e.net/c/4395935/656088/10353?subId1=" +
                          escape(g) +
                          "&u=" +
                          escape("https://www.tickpick.com" + e.events.TP.url))
                      : !n && e.events.SH && e.events.SH.url
                      ? (url =
                          "https://stubhub.prf.hn/click/camref:1100lACyc/pubref:" +
                          escape(g) +
                          "/destination:" +
                          escape("https://www.stubhub.com" + e.events.SH.url))
                      : e.events.VS &&
                        e.events.VS.url &&
                        (url =
                          "https://vivid-seats.pxf.io/c/4395935/952533/12730?subId1=" +
                          escape(g) +
                          "&u=" +
                          escape("https://www.vividseats.com" + r.VS.url)),
                    (url = apiBaseUrl + "/redir?u=" + escape(url)),
                    (soldOutHTML =
                      "<br><img src='" +
                      chrome.runtime.getURL("/icons/icon32.png") +
                      "' style='margin-right:5px;' class='sametixlogo animated'>&nbsp;<a class='sameTixLink' target='_blank' href='" +
                      url +
                      "'>Click here to see if tickets are available elsewhere!</a><style>.sametixlogo {}@-webkit-keyframes spin {from {transform:rotate(0deg);}to {transform:rotate(2520deg);}}.sametixlogo.animated {-webkit-animation-name: spin;-webkit-animation-duration: 2800ms;-webkit-animation-iteration-count: 1;-webkit-animation-timing-function: ease;}</style>"),
                    t
                      ? isSoldOut
                        ? (soldOut[0].firstChild.innerHTML += soldOutHTML)
                        : isNoActiveSale &&
                          (soldOut[0].innerHTML += soldOutHTML)
                      : n &&
                        (soldOut[0].parentElement.childNodes[1].firstChild.innerHTML +=
                          soldOutHTML),
                    (links = document.getElementsByClassName("sameTixLink")),
                    links))
                      links[E].onclick = function () {
                        t
                          ? isSoldOut
                            ? chrome.runtime.sendMessage({
                                type: "trkTmSoldOutClicked",
                                data: {
                                  tmEvent: r.TM,
                                  shEvent: r.SH,
                                  tpEvent: r.TP,
                                  vsEvent: r.VS,
                                },
                              })
                            : isNoActiveSale &&
                              chrome.runtime.sendMessage({
                                type: "trkTmNoActiveSaleClicked",
                                data: {
                                  tmEvent: r.TM,
                                  shEvent: r.SH,
                                  tpEvent: e.events.TP,
                                  vsEvent: r.VS,
                                },
                              })
                          : n &&
                            chrome.runtime.sendMessage({
                              type: "trkShSoldOutClicked",
                              data: {
                                tmEvent: r.TM,
                                shEvent: r.SH,
                                tpEvent: r.TP,
                                vsEvent: r.VS,
                              },
                            });
                      };
                } else
                  t
                    ? chrome.runtime.sendMessage({
                        type: "trkTmEventVisit",
                        data: {
                          tmEvent: h,
                          shEvent: { id: "N/A" },
                          tpEvent: { id: "N/A" },
                          vsEvent: { id: "N/A" },
                        },
                      })
                    : n &&
                      chrome.runtime.sendMessage({
                        type: "trkShEventVisit",
                        data: {
                          tmEvent: { id: "N/A" },
                          shEvent: h,
                          tpEvent: { id: "N/A" },
                          vsEvent: { id: "N/A" },
                        },
                      });
            }
          ),
          t
            ? (window.setTimeout(P, 100), window.setTimeout(T, 100))
            : n && window.setTimeout(H, 100);
      },
      !1
    ),
    window.addEventListener("message", function (e) {
      if (e.source == window)
        switch (e.data.type) {
          case "STORE":
            I((m = e.data.text));
            break;
          case "SEATMAP":
            (map = JSON.parse(e.data.text)),
              (function (e) {
                for (section in e)
                  if (e[section].isGA)
                    (seatInfo = {
                      id: e[section].id,
                      offerId: k(e[section].offerIds),
                      section: e[section].name,
                      row: "GA",
                      seat: "GA",
                      type: "general-seating",
                    }),
                      (p[e[section].id] = seatInfo);
                  else
                    for (block in e[section].seatBlocks)
                      for (row in e[section].seatBlocks[block].rows)
                        for (S in e[section].seatBlocks[block].rows[row].seats)
                          (seat =
                            e[section].seatBlocks[block].rows[row].seats[S]),
                            seat.available &&
                              seat.offerIds &&
                              seat.offerIds.length >= 1 &&
                              ((seatInfo = {
                                id: seat.id,
                                offerId: k(seat.offerIds),
                                section: seat.section,
                                row: seat.row,
                                seat: seat.seat,
                                type: e[section].isGA
                                  ? "general-seating"
                                  : "seat",
                              }),
                              (p[seat.id] = seatInfo));
              })(map);
            break;
          case "FROM_PAGE1":
            (qp = JSON.parse(e.data.text)),
              (function (e) {
                if (!e._embedded) return;
                I(e),
                  "picks" in e &&
                    e.picks.length > 0 &&
                    ((qpIndex = e.offset),
                    e.picks.forEach(function (e) {
                      (a["qp-" + qpIndex] = e), qpIndex++;
                    }));
              })(qp);
            break;
          case "FROM_PAGE2":
            (facets = JSON.parse(e.data.text)), I(facets);
        }
    }),
    chrome.runtime.onMessage.addListener(function (e, t, i) {
      return e.type, i(), !0;
    });
}
function T() {
  if (
    ((seatCircles = document.getElementsByClassName("seat is-available")),
    seatCircles.length > 0)
  )
    for (var e = 0; e < seatCircles.length; e++)
      seatCircles[e].getAttribute("sametix") ||
        (seatCircles[e].addEventListener("click", function () {
          for (e in ((sElems = document.getElementsByClassName("sameTixClass")),
          sElems))
            sElems[e] &&
              sElems[e].parentElement &&
              sElems[e].parentElement.parentElement &&
              sElems[e].parentElement.parentElement.parentElement &&
              sElems[e].parentElement.parentElement.parentElement
                .parentElement &&
              sElems[
                e
              ].parentElement.parentElement.parentElement.parentElement.classList.contains(
                "map-tooltip__content"
              ) &&
              sElems[e].remove();
          b(this, !1, "click");
        }),
        seatCircles[e].addEventListener("mouseover", function () {
          b(this, !1, "hover");
        }),
        seatCircles[e].setAttribute("sametix", !0));
  if (
    ((seatBlocks = document.getElementsByClassName("block is-ga is-available")),
    seatBlocks.length > 0)
  )
    for (e = 0; e < seatBlocks.length; e++)
      seatBlocks[e].getAttribute("sametix") ||
        (seatBlocks[e].addEventListener("click", function () {
          null != f && f.remove(), b(this, !0, "click");
        }),
        seatBlocks[e].setAttribute("sametix", !0));
  if (
    ((tooltip = document.getElementsByClassName("sim-map-tooltip")),
    tooltip.length > 0)
  )
    for (e = 0; e < tooltip.length; e++) tooltip[0].style.maxWidth = "100%";
  if (
    ((tooltip = document.getElementsByClassName("sim-map-tooltip is-anchored")),
    tooltip.length > 0)
  )
    for (e = 0; e < tooltip.length; e++)
      (tooltip[0].style.maxWidth = "100%"), (tooltip[0].style.width = "380px");
  window.setTimeout(T, 100);
}
function b(e, t = !1, i) {
  (seatId = t ? e.getAttribute("data-section-id") : e.id),
    seatId in p &&
      (p[seatId].offerId in s
        ? (((u = p[seatId]).offer = s[u.offerId]),
          (seatInfo = {
            id: u.id,
            offerId: u.offerId,
            row: u.row,
            seat: u.seat,
            section: u.section,
            type: u.type,
            totalPrice: u.offer.totalPrice,
            offerName: u.offer.name,
            listPrice: u.offer.listPrice,
          }),
          (u.track = seatInfo),
          chrome.runtime.sendMessage({
            type: "trkTmSeatView",
            data: { tmEvent: r.TM, seat: seatInfo, viewType: i },
          }))
        : window.setTimeout(function () {
            b(e, t, i);
          }, 100));
}
function k(e) {
  if (1 == e.length) return e[0];
  for (o in ((allOfferIds = Object.keys(s)),
  (offerId = null),
  (minPrice = 9999999),
  e))
    allOfferIds.includes(e[o]) &&
      s[e[o]].totalPrice > 0 &&
      s[e[o]].totalPrice < minPrice &&
      ((offerId = e[o]), (minPrice = s[e[o]].totalPrice));
  return offerId;
}
function I(e) {
  (offerJson = null),
    e.eventOfferJSON
      ? (offerJson = e.eventOfferJSON)
      : e._embedded && e._embedded.offer && (offerJson = e._embedded.offer),
    null != offerJson &&
      offerJson.forEach(function (e) {
        s[e.offerId] = e;
      });
}
function P() {
  (notes = document.getElementsByClassName("offer-card__block")),
    (qpSelected = document.getElementsByClassName(
      "quick-picks__list-item delimited-list__item--selected"
    )),
    (sameTixNotes = document.getElementById("sameTixNotes")),
    notes.length > 0 &&
      qpSelected.length > 0 &&
      null == sameTixNotes &&
      ((qp = null),
      (offer = null),
      (qpIndex = qpSelected[0].getAttribute("data-index")),
      qpIndex in a && (qp = a[qpIndex]),
      null != qp &&
        ((offerId = null),
        qp.offerGroups
          ? (offerId = k(qp.offerGroups[0].offers))
          : qp.offers && (offerId = k(qp.offers)),
        (offer = s[offerId])),
      null != offer &&
        ((searching = A("sameTixNotes", offer, qp)),
        chrome.runtime.sendMessage({
          type: "trkTmQuickPickView",
          data: {
            tmEvent: r.TM,
            shEvent: r.SH,
            tpEvent: r.TP,
            vsEvent: r.VS,
            seat: searching.sametix,
          },
        }),
        N(searching),
        notes[0].parentElement.insertBefore(searching, notes[0].nextSibling))),
    (bag = document.getElementsByClassName("ticket-bag--exposed")),
    (bubble = document.getElementsByClassName("tooltip__content"));
  for (i = 0; i < bubble.length; i++)
    "ticket-stub-seat-info" == bubble[i].getAttribute("data-bdd") &&
      null == bubble[i].firstChild.nextSibling &&
      (0 != bag.length && bag[0].contains(bubble[i])
        ? ((section = bubble[i].firstChild.children[0].children[1].innerText),
          (row = bubble[i].firstChild.children[1].children[1].innerText),
          (seat = bubble[i].firstChild.children[2].children[1].innerText),
          (seatData = x(section, row, seat)),
          null != seatData &&
            ((searching = A(
              "sameTixBubble" + i + "x" + i,
              seatData.offer,
              seatData
            )),
            bubble[i].insertBefore(searching, bubble[i].firstChild.nextSibling),
            N(searching)))
        : null != u &&
          null != u.offer &&
          ((searching = A("sameTixBubble" + i, u.offer, u)),
          (u = null),
          bubble[i].insertBefore(searching, bubble[i].firstChild.nextSibling),
          N(searching),
          (f = searching)));
  window.setTimeout(P, 100);
}
function x(e, t, i) {
  for (seatId in p)
    if ((S = p[seatId]).section == e && S.row == t && S.seat == i)
      return (
        (S.offer = s[S.offerId]),
        (seatInfo = {
          id: S.id,
          offerId: S.offerId,
          row: S.row,
          seat: S.seat,
          section: S.section,
          type: S.type,
          totalPrice: S.offer.totalPrice,
          offerName: S.offer.name,
          listPrice: S.offer.listPrice,
        }),
        (S.track = seatInfo),
        S
      );
  return null;
}
function N(e, i = 0) {
  null != r.TM || null != r.SH || null != r.TP
    ? d
      ? i < 50 &&
        window.setTimeout(function () {
          N(e, i + 1);
        }, 1e3)
      : null == l
      ? ((d = !0),
        t
          ? chrome.runtime.sendMessage(
              { type: "getShEventsInventory", data: r.SH },
              null,
              function (t) {
                chrome.runtime.sendMessage(
                  { type: "getTpEventsInventory", data: r.TP },
                  null,
                  function (i) {
                    chrome.runtime.sendMessage(
                      { type: "getVsEventsInventory", data: r.VS },
                      null,
                      function (n) {
                        chrome.runtime.sendMessage(
                          { type: "getTpVenueConfig", data: r.TP },
                          null,
                          function (s) {
                            (d = !1),
                              null == (l = t) &&
                                (((l = {}).SH = []), (l.TP = []), (l.VS = [])),
                              null != i && (l.TP = i.TP),
                              null != n && (l.VS = n.VS.tickets),
                              null != s &&
                                (v =
                                  null != s.stage_type &&
                                  "NONE" != s.stage_type),
                              y(e);
                          }
                        );
                      }
                    );
                  }
                );
              }
            )
          : n &&
            chrome.runtime.sendMessage(
              { type: "getTpEventsInventory", data: r.TP },
              null,
              function (t) {
                chrome.runtime.sendMessage(
                  { type: "getTpVenueConfig", data: r.TP },
                  null,
                  function (i) {
                    (d = !1),
                      (l = t),
                      null != i &&
                        (v = null != i.stage_type && "NONE" != i.stage_type),
                      y(e);
                  }
                );
              }
            ))
      : y(e)
    : i < 50
    ? window.setTimeout(function () {
        N(e, i + 1);
      }, 300)
    : C(e);
}
function y(e) {
  if (
    ((minPrice = e.sametix.totalPrice),
    (itemFound = null),
    "GENERAL ADMISSION" == e.sametix.section)
  ) {
    if (t)
      for (i in l.SH)
        ("GA" == l.SH[i].section.toUpperCase() ||
          l.SH[i].section.toUpperCase().startsWith("GA ") ||
          l.SH[i].section.toUpperCase().endsWith(" GA") ||
          "GENERAL ADMISSION" == l.SH[i].section.toUpperCase() ||
          l.SH[i].section.toUpperCase().startsWith("GENERAL ADMISSION ") ||
          l.SH[i].section.toUpperCase().endsWith(" GENERAL ADMISSION") ||
          "LAWN" == l.SH[i].section.toUpperCase() ||
          l.SH[i].section.toUpperCase().startsWith("LAWN ") ||
          l.SH[i].section.toUpperCase().endsWith(" LAWN") ||
          "GENADMIN" == l.SH[i].section.toUpperCase() ||
          l.SH[i].section.toUpperCase().startsWith("GENADMIN ") ||
          l.SH[i].section.toUpperCase().endsWith(" GENADMIN")) &&
          ((curPrice = w(l.SH[i].priceWithFees.slice(1))),
          curPrice < minPrice &&
            ((minPrice = curPrice),
            (itemFound = {
              id: l.SH[i].id,
              price: w(l.SH[i].priceWithFees.replace("$", ""), "float").toFixed(
                2
              ),
              market: "SH",
            })));
    for (i in l.TP)
      ("GA" == l.TP[i].sid.toUpperCase() ||
        l.TP[i].sid.toUpperCase().startsWith("GA ") ||
        l.TP[i].sid.toUpperCase().endsWith(" GA") ||
        "GENERAL ADMISSION" == l.TP[i].sid.toUpperCase() ||
        l.TP[i].sid.toUpperCase().startsWith("GENERAL ADMISSION ") ||
        l.TP[i].sid.toUpperCase().endsWith(" GENERAL ADMISSION") ||
        "LAWN" == l.TP[i].sid.toUpperCase() ||
        l.TP[i].sid.toUpperCase().startsWith("LAWN ") ||
        l.TP[i].sid.toUpperCase().endsWith(" LAWN") ||
        "GENADMIN" == l.TP[i].sid.toUpperCase() ||
        l.TP[i].sid.toUpperCase().startsWith("GENADMIN ") ||
        l.TP[i].sid.toUpperCase().endsWith(" GENADMIN")) &&
        ((curPrice = l.TP[i].p),
        curPrice < minPrice &&
          ((minPrice = curPrice),
          (itemFound = {
            id: l.TP[i].id,
            price: curPrice,
            ltype: l.TP[i].t,
            section: l.TP[i].sid,
            quantity: Math.min.apply(null, l.TP[i].sp),
            market: "TP",
          })));
    for (i in l.VS)
      ("GA" == l.VS[i].s.toUpperCase() ||
        l.VS[i].s.toUpperCase().startsWith("GA ") ||
        l.VS[i].s.toUpperCase().endsWith(" GA") ||
        "GENERAL ADMISSION" == l.VS[i].s.toUpperCase() ||
        l.VS[i].s.toUpperCase().startsWith("GENERAL ADMISSION ") ||
        l.VS[i].s.toUpperCase().endsWith(" GENERAL ADMISSION") ||
        "LAWN" == l.VS[i].s.toUpperCase() ||
        l.VS[i].s.toUpperCase().startsWith("LAWN ") ||
        l.VS[i].s.toUpperCase().endsWith(" LAWN") ||
        "GENADMIN" == l.VS[i].s.toUpperCase() ||
        l.VS[i].s.toUpperCase().startsWith("GENADMIN ") ||
        l.VS[i].s.toUpperCase().endsWith(" GENADMIN")) &&
        ((curPrice = 1.35 * parseFloat(l.VS[i].p) + 2.5),
        curPrice < minPrice &&
          ((minPrice = curPrice),
          (itemFound = {
            id: l.VS[i].i,
            price: curPrice.toFixed(2),
            market: "VS",
          })));
  } else {
    for (i in l.SH)
      l.SH[i].section == e.sametix.section &&
        l.SH[i].row == e.sametix.row &&
        ((curPrice = w(l.SH[i].priceWithFees.slice(1))),
        curPrice < minPrice &&
          ((minPrice = curPrice),
          (itemFound = {
            id: l.SH[i].id,
            price: w(l.SH[i].priceWithFees.replace("$", ""), "float").toFixed(
              2
            ),
            market: "SH",
          })));
    for (i in l.TP)
      l.TP[i].sid == e.sametix.section &&
        l.TP[i].r == e.sametix.row &&
        ((curPrice = l.TP[i].p),
        curPrice < minPrice &&
          ((minPrice = curPrice),
          (itemFound = {
            id: l.TP[i].id,
            price: curPrice,
            ltype: l.TP[i].t,
            section: l.TP[i].sid,
            quantity: Math.min.apply(null, l.TP[i].sp),
            market: "TP",
          })));
    for (i in l.VS)
      (l.VS[i].s != e.sametix.section &&
        l.VS[i].d != e.sametix.section.replace(/\D/g, "")) ||
        l.VS[i].r != e.sametix.row ||
        ((charge = parseFloat(l.VS[i].dsc)),
        isNaN(charge)
          ? (curPrice = 1.35 * parseFloat(l.VS[i].p) + 2.5)
          : (curPrice = parseFloat(l.VS[i].p) + charge),
        curPrice < minPrice &&
          ((minPrice = curPrice),
          (itemFound = {
            id: l.VS[i].i,
            price: curPrice.toFixed(2),
            market: "VS",
          })));
  }
  if (null == itemFound) C(e);
  else {
    for (E in ((e.sametix.saving = (
      e.sametix.totalPrice - itemFound.price
    ).toFixed(2)),
    (e.sametix.market = itemFound.market),
    t
      ? chrome.runtime.sendMessage({
          type: "trkTmDealFound",
          data: {
            tmEvent: r.TM,
            shEvent: r.SH,
            tpEvent: r.TP,
            vsEvent: r.VS,
            dealInfo: e.sametix,
          },
        })
      : n &&
        chrome.runtime.sendMessage({
          type: "trkShDealFound",
          data: {
            tmEvent: r.TM,
            shEvent: r.SH,
            tpEvent: r.TP,
            vsEvent: r.VS,
            dealInfo: e.sametix,
          },
        }),
    (url =
      "SH" == itemFound.market
        ? "https://stubhub.prf.hn/click/camref:1100lACyc/pubref:" +
          escape(g) +
          "/destination:" +
          escape(
            "https://www.stubhub.com" +
              r.SH.url +
              "?listingId=" +
              itemFound.id +
              "&estimatedFees=true"
          )
        : "TP" == itemFound.market
        ? "https://tickpick.dgrk2e.net/c/4395935/656088/10353?subId1=" +
          escape(g) +
          "&u=" +
          escape(
            "https://www.tickpick.com/buy-tickets/" +
              r.TP.id +
              "/" +
              (v
                ? "?sections=stars:any%7Cinclude:" +
                  escape(itemFound.section) +
                  "%7Cexclude:all&price=" +
                  escape(itemFound.price)
                : "")
          )
        : "VS" == itemFound.market
        ? "https://vivid-seats.pxf.io/c/4395935/952533/12730?subId1=" +
          escape(g) +
          "&u=" +
          escape(
            "https://www.vividseats.com" +
              r.VS.url +
              "?showDetails=" +
              escape(itemFound.id)
          )
        : "#"),
    "#" != url && (url = apiBaseUrl + "/redir?u=" + escape(url)),
    (e.firstChild.firstChild.nextSibling.nextSibling.innerHTML =
      "<div style='margin-top:10px;margin-bottom:10px'>It's $" +
      e.sametix.totalPrice.toFixed(2) +
      " per ticket with fees. <br /><span style='color:#09B1CB;'></span><br /><a class='sameTixLink' style='letter-spacing: 1px;padding:8px;background-color:#09B1CB;border-radius: 8px;color:white' target='_blank' href='" +
      url +
      "'>Click to save $" +
      e.sametix.saving +
      " per ticket</a></div>"),
    (links = document.getElementsByClassName("sameTixLink")),
    links))
      links[E].onclick = function () {
        t
          ? chrome.runtime.sendMessage({
              type: "trkTmDealClicked",
              data: {
                tmEvent: r.TM,
                shEvent: r.SH,
                tpEvent: r.TP,
                vsEvent: r.VS,
                dealInfo: e.sametix,
              },
            })
          : n &&
            chrome.runtime.sendMessage({
              type: "trkShDealClicked",
              data: {
                tmEvent: r.TM,
                shEvent: r.SH,
                tpEvent: r.TP,
                vsEvent: r.VS,
                dealInfo: e.sametix,
              },
            });
      };
    e.firstChild.firstChild.classList.remove("sametixlogo"),
      window.setTimeout(function () {
        e.firstChild.firstChild.classList.add("sametixlogodone");
      }, 3);
  }
}
function w(e, t = navigator.languages, i = "int") {
  const n = Intl.NumberFormat(t).format("1.1"),
    s = new RegExp(`[^-+0-9${n.charAt(1)}]`, "g"),
    a = e.replace(s, "").replace(n.charAt(1), ".");
  return "int" == i ? parseInt(a) : (i = "float") ? parseFloat(a) : parseInt(a);
}
function C(e) {
  (e.firstChild.firstChild.nextSibling.nextSibling.innerHTML =
    "This is the best price for these seats.<br />It's $" +
    e.sametix.totalPrice.toFixed(2) +
    " per ticket with fees."),
    e.firstChild.firstChild.classList.remove("sametixlogo"),
    window.setTimeout(function () {
      e.firstChild.firstChild.classList.add("sametixlogodone");
    }, 3);
}
function A(e, t, i) {
  return (
    (searching = document.createElement("div")),
    (searching.id = e),
    (searching.style =
      "margin-top:10px;margin-bottom:10px;background-color:#EEEEEE;"),
    (searching.className = "sameTixClass"),
    (totalPrice = null),
    (totalHTML = ""),
    null != t &&
      ((totalPrice = t.listPrice),
      null != t.charges &&
        t.charges.forEach(function (e) {
          totalPrice += e.amount;
        }),
      (totalHTML = "$" + totalPrice.toFixed(2) + " (incl. fees)")),
    (searching.innerHTML =
      "<div style='display: flex;align-items: center;padding:5px; color:black; ccolor:#09B1CB;font-family: \"Poppins\"; font-size:14px'><img src='" +
      chrome.runtime.getURL("/icons/icon32.png") +
      "' style='margin-right:5px;' class='sametixlogo animated'> <b>Searching for similar tickets, but cheaper.<br />" +
      totalHTML +
      " or less.</b></div><style>.sametixlogo {}@-webkit-keyframes spin {from {transform:rotate(0deg);}to {transform:rotate(720deg);}}.sametixlogo.animated {-webkit-animation-name: spin;-webkit-animation-duration: 500ms;-webkit-animation-iteration-count: 500;-webkit-animation-timing-function: linear;}.sametixlogodone {}.sametixlogodone.animated {-webkit-animation-name: spin;-webkit-animation-duration: 1000ms;-webkit-animation-iteration-count: 1;-webkit-animation-timing-function: ease;}</style>"),
    (searching.sametix = {}),
    (searching.sametix.totalPrice = totalPrice),
    (searching.sametix.section =
      "seat" == i.type
        ? i.section
        : "general-seating" == i.type
        ? "GENERAL ADMISSION"
        : ""),
    (searching.sametix.row = i.row),
    searching
  );
}
var M = !1;
function H() {
  if (M) window.setTimeout(H, 100);
  else if (((notes = document.getElementById("sameTixNotes")), null == notes)) {
    qSelect = document.getElementsByName("quantity-select");
    var e = new URLSearchParams(window.location.search).get("listingId");
    if (qSelect.length > 0 && null != e && "" != e)
      if (null == c)
        null != r.SH &&
          ((M = !0),
          chrome.runtime.sendMessage(
            { type: "getShEventsInventory", data: r.SH },
            null,
            function (e) {
              (M = !1), (c = e.SH);
            }
          ));
      else {
        for (i in ((item = null), c))
          if (c[i].id == e) {
            item = c[i];
            break;
          }
        null != item &&
          ((seat = { section: item.section, row: item.row, type: "seat" }),
          (offer = {
            listPrice: parseInt(item.priceWithFees.replace(/\D/g, "")),
          }),
          (searching = A("sameTixNotes", offer, seat)),
          (searching.style.width = "100%"),
          (searching.style.lineHeight = "normal"),
          N(searching),
          (notes =
            qSelect[0].parentElement.parentElement.parentElement.parentElement
              .parentElement),
          notes.parentElement.insertBefore(searching, notes.previousSibling),
          chrome.runtime.sendMessage({
            type: "trkShSeatView",
            data: {
              tmEvent: r.TM,
              shEvent: r.SH,
              tpEvent: r.TP,
              vsEvent: r.VS,
              seat: searching.sametix,
            },
          }));
      }
    window.setTimeout(H, 100);
  } else window.setTimeout(H, 100);
}
