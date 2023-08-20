!(function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
      i = Object.getPrototypeOf,
      r = n.slice,
      o = n.flat
        ? function (t) {
            return n.flat.call(t);
          }
        : function (t) {
            return n.concat.apply([], t);
          },
      a = n.push,
      s = n.indexOf,
      l = {},
      u = l.toString,
      c = l.hasOwnProperty,
      d = c.toString,
      h = d.call(Object),
      f = {},
      p = function (t) {
        return (
          "function" == typeof t &&
          "number" != typeof t.nodeType &&
          "function" != typeof t.item
        );
      },
      g = function (t) {
        return null != t && t === t.window;
      },
      m = t.document,
      v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(t, e, n) {
      var i,
        r,
        o = (n = n || m).createElement("script");
      if (((o.text = t), e))
        for (i in v)
          (r = e[i] || (e.getAttribute && e.getAttribute(i))) &&
            o.setAttribute(i, r);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function y(t) {
      return null == t
        ? t + ""
        : "object" == typeof t || "function" == typeof t
        ? l[u.call(t)] || "object"
        : typeof t;
    }
    var x = "3.6.0",
      w = function (t, e) {
        return new w.fn.init(t, e);
      };
    function k(t) {
      var e = !!t && "length" in t && t.length,
        n = y(t);
      return (
        !p(t) &&
        !g(t) &&
        ("array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    (w.fn = w.prototype =
      {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function () {
          return r.call(this);
        },
        get: function (t) {
          return null == t
            ? r.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = w.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return w.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            w.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(r.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            w.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            w.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
      }),
      (w.extend = w.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            r,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || p(a) || (a = {}),
              s === l && ((a = this), s--);
            s < l;
            s++
          )
            if (null != (t = arguments[s]))
              for (e in t)
                (i = t[e]),
                  "__proto__" !== e &&
                    a !== i &&
                    (u && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                      ? ((n = a[e]),
                        (o =
                          r && !Array.isArray(n)
                            ? []
                            : r || w.isPlainObject(n)
                            ? n
                            : {}),
                        (r = !1),
                        (a[e] = w.extend(u, o, i)))
                      : void 0 !== i && (a[e] = i));
          return a;
        }),
      w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isPlainObject: function (t) {
          var e, n;
          return (
            !(!t || "[object Object]" !== u.call(t)) &&
            (!(e = i(t)) ||
              ("function" ==
                typeof (n = c.call(e, "constructor") && e.constructor) &&
                d.call(n) === h))
          );
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        globalEval: function (t, e, n) {
          b(t, { nonce: e && e.nonce }, n);
        },
        each: function (t, e) {
          var n,
            i = 0;
          if (k(t))
            for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
          else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
          return t;
        },
        makeArray: function (t, e) {
          var n = e || [];
          return (
            null != t &&
              (k(Object(t))
                ? w.merge(n, "string" == typeof t ? [t] : t)
                : a.call(n, t)),
            n
          );
        },
        inArray: function (t, e, n) {
          return null == e ? -1 : s.call(e, t, n);
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
          return (t.length = r), t;
        },
        grep: function (t, e, n) {
          for (var i = [], r = 0, o = t.length, a = !n; r < o; r++)
            !e(t[r], r) !== a && i.push(t[r]);
          return i;
        },
        map: function (t, e, n) {
          var i,
            r,
            a = 0,
            s = [];
          if (k(t))
            for (i = t.length; a < i; a++)
              null != (r = e(t[a], a, n)) && s.push(r);
          else for (a in t) null != (r = e(t[a], a, n)) && s.push(r);
          return o(s);
        },
        guid: 1,
        support: f,
      }),
      "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
      w.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (t, e) {
          l["[object " + e + "]"] = e.toLowerCase();
        }
      );