(() => {
  "use strict";
  var e,
    d = {},
    _ = {};
  function n(e) {
    var a = _[e];
    if (void 0 !== a) return a.exports;
    var r = (_[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports;
  }
  (n.m = d),
    (n.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (n.amdO = {}),
    (e = []),
    (n.O = (a, r, f, s) => {
      if (!r) {
        var o = 1 / 0;
        for (t = 0; t < e.length; t++) {
          for (var [r, f, s] = e[t], u = !0, c = 0; c < r.length; c++)
            (!1 & s || o >= s) && Object.keys(n.O).every((v) => n.O[v](r[c]))
              ? r.splice(c--, 1)
              : ((u = !1), s < o && (o = s));
          if (u) {
            e.splice(t--, 1);
            var l = f();
            void 0 !== l && (a = l);
          }
        }
        return a;
      }
      s = s || 0;
      for (var t = e.length; t > 0 && e[t - 1][2] > s; t--) e[t] = e[t - 1];
      e[t] = [r, f, s];
    }),
    (n.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return n.d(a, { a }), a;
    }),
    (n.d = (e, a) => {
      for (var r in a)
        n.o(a, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: a[r] });
    }),
    (n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = { 666: 0 };
      n.O.j = (f) => 0 === e[f];
      var a = (f, s) => {
          var c,
            l,
            [t, o, u] = s,
            i = 0;
          for (c in o) n.o(o, c) && (n.m[c] = o[c]);
          if (u) var h = u(n);
          for (f && f(s); i < t.length; i++)
            n.o(e, (l = t[i])) && e[l] && e[l][0](), (e[t[i]] = 0);
          return n.O(h);
        },
        r = (self.webpackChunksos_chrome_extension =
          self.webpackChunksos_chrome_extension || []);
      r.forEach(a.bind(null, 0)), (r.push = a.bind(null, r.push.bind(r)));
    })();
})();
