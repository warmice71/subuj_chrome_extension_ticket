/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat ? function (t) {
            return n.flat.call(t)
        } : function (t) {
            return n.concat.apply([], t)
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
            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
        },
        g = function (t) {
            return null != t && t === t.window
        },
        m = t.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(t, e, n) {
        var i, r, o = (n = n || m).createElement("script");
        if (o.text = t, e)
            for (i in v)(r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function y(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[u.call(t)] || "object" : typeof t
    }
    var x = "3.6.0",
        w = function (t, e) {
            return new w.fn.init(t, e)
        };

    function k(t) {
        var e = !!t && "length" in t && t.length,
            n = y(t);
        return !p(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function () {
            return r.call(this)
        },
        get: function (t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = w.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return w.each(this, t)
        },
        map: function (t) {
            return this.pushStack(w.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(w.grep(this, function (t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(w.grep(this, function (t, e) {
                return e % 2
            }))
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var t, e, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (t = arguments[s]))
                for (e in t) i = t[e], "__proto__" !== e && a !== i && (u && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[e], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, a[e] = w.extend(u, o, i)) : void 0 !== i && (a[e] = i));
        return a
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== u.call(t)) && (!(e = i(t)) || "function" == typeof (n = c.call(e, "constructor") && e.constructor) && d.call(n) === h)
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function (t, e, n) {
            b(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function (t, e) {
            var n, i = 0;
            if (k(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (k(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : s.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
            return i
        },
        map: function (t, e, n) {
            var i, r, a = 0,
                s = [];
            if (k(t))
                for (i = t.length; a < i; a++) null != (r = e(t[a], a, n)) && s.push(r);
            else
                for (a in t) null != (r = e(t[a], a, n)) && s.push(r);
            return o(s)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var _ =
        /*!
         * Sizzle CSS Selector Engine v2.3.6
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2021-02-16
         */
        function (t) {
            var e, n, i, r, o, a, s, l, u, c, d, h, f, p, g, m, v, b, y, x = "sizzle" + 1 * new Date,
                w = t.document,
                k = 0,
                _ = 0,
                C = lt(),
                M = lt(),
                S = lt(),
                T = lt(),
                A = function (t, e) {
                    return t === e && (d = !0), 0
                },
                D = {}.hasOwnProperty,
                P = [],
                I = P.pop,
                L = P.push,
                N = P.push,
                O = P.slice,
                E = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                z = "\\[[\\x20\\t\\r\\n\\f]*(" + j + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + R + "*\\]",
                B = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                W = new RegExp(R + "+", "g"),
                H = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                V = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                q = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                U = new RegExp(R + "|>"),
                Y = new RegExp(B),
                $ = new RegExp("^" + j + "$"),
                X = {
                    ID: new RegExp("^#(" + j + ")"),
                    CLASS: new RegExp("^\\.(" + j + ")"),
                    TAG: new RegExp("^(" + j + "|[*])"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                    bool: new RegExp("^(?:" + F + ")$", "i"),
                    needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                },
                G = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                nt = function (t, e) {
                    var n = "0x" + t.slice(1) - 65536;
                    return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                rt = function (t, e) {
                    return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                ot = function () {
                    h()
                },
                at = xt(function (t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                N.apply(P = O.call(w.childNodes), w.childNodes), P[w.childNodes.length].nodeType
            } catch (t) {
                N = {
                    apply: P.length ? function (t, e) {
                        L.apply(t, O.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }

            function st(t, e, i, r) {
                var o, s, u, c, d, p, v, b = e && e.ownerDocument,
                    w = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;
                if (!r && (h(e), e = e || f, g)) {
                    if (11 !== w && (d = J.exec(t)))
                        if (o = d[1]) {
                            if (9 === w) {
                                if (!(u = e.getElementById(o))) return i;
                                if (u.id === o) return i.push(u), i
                            } else if (b && (u = b.getElementById(o)) && y(e, u) && u.id === o) return i.push(u), i
                        } else {
                            if (d[2]) return N.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return N.apply(i, e.getElementsByClassName(o)), i
                        } if (n.qsa && !T[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t, b = e, 1 === w && (U.test(t) || q.test(t))) {
                            for ((b = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(it, rt) : e.setAttribute("id", c = x)), s = (p = a(t)).length; s--;) p[s] = (c ? "#" + c : ":scope") + " " + yt(p[s]);
                            v = p.join(",")
                        }
                        try {
                            return N.apply(i, b.querySelectorAll(v)), i
                        } catch (e) {
                            T(t, !0)
                        } finally {
                            c === x && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(H, "$1"), e, i, r)
            }

            function lt() {
                var t = [];
                return function e(n, r) {
                    return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
            }

            function ut(t) {
                return t[x] = !0, t
            }

            function ct(t) {
                var e = f.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function dt(t, e) {
                for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
            }

            function ht(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function ft(t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function pt(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function gt(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function mt(t) {
                return ut(function (e) {
                    return e = +e, ut(function (n, i) {
                        for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function vt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in n = st.support = {}, o = st.isXML = function (t) {
                    var e = t && t.namespaceURI,
                        n = t && (t.ownerDocument || t).documentElement;
                    return !G.test(e || n && n.nodeName || "HTML")
                }, h = st.setDocument = function (t) {
                    var e, r, a = t ? t.ownerDocument || t : w;
                    return a != f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, g = !o(f), w != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.scope = ct(function (t) {
                        return p.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    }), n.attributes = ct(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), n.getElementsByTagName = ct(function (t) {
                        return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = ct(function (t) {
                        return p.appendChild(t).id = x, !f.getElementsByName || !f.getElementsByName(x).length
                    }), n.getById ? (i.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, i.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, i.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n, i, r, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                    }, v = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (ct(function (t) {
                        var e;
                        p.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + F + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                    }), ct(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = f.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (n.matchesSelector = Z.test(b = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct(function (t) {
                        n.disconnectedMatch = b.call(t, "*"), b.call(t, "[s!='']:x"), v.push("!=", B)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(p.compareDocumentPosition), y = e || Z.test(p.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, A = e ? function (t, e) {
                        if (t === e) return d = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == f || t.ownerDocument == w && y(w, t) ? -1 : e == f || e.ownerDocument == w && y(w, e) ? 1 : c ? E(c, t) - E(c, e) : 0 : 4 & i ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return d = !0, 0;
                        var n, i = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            s = [e];
                        if (!r || !o) return t == f ? -1 : e == f ? 1 : r ? -1 : o ? 1 : c ? E(c, t) - E(c, e) : 0;
                        if (r === o) return ht(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? ht(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0
                    }, f) : f
                }, st.matches = function (t, e) {
                    return st(t, null, null, e)
                }, st.matchesSelector = function (t, e) {
                    if (h(t), n.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                        var i = b.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                        T(e, !0)
                    }
                    return st(e, f, null, [t]).length > 0
                }, st.contains = function (t, e) {
                    return (t.ownerDocument || t) != f && h(t), y(t, e)
                }, st.attr = function (t, e) {
                    (t.ownerDocument || t) != f && h(t);
                    var r = i.attrHandle[e.toLowerCase()],
                        o = r && D.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, st.escape = function (t) {
                    return (t + "").replace(it, rt)
                }, st.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, st.uniqueSort = function (t) {
                    var e, i = [],
                        r = 0,
                        o = 0;
                    if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(A), d) {
                        for (; e = t[o++];) e === t[o] && (r = i.push(o));
                        for (; r--;) t.splice(i[r], 1)
                    }
                    return c = null, t
                }, r = st.getText = function (t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += r(e);
                    return n
                }, i = st.selectors = {
                    cacheLength: 50,
                    createPseudo: ut,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                        },
                        PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(et, nt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function (t) {
                            var e = C[t + " "];
                            return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + R + "|$)")) && C(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (t, e, n) {
                            return function (i) {
                                var r = st.attr(i, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function (t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                s = "of-type" === e;
                            return 1 === i && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var u, c, d, h, f, p, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = s && e.nodeName.toLowerCase(),
                                    b = !l && !s,
                                    y = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (h = e; h = h[g];)
                                                if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? m.firstChild : m.lastChild], a && b) {
                                        for (y = (f = (u = (c = (d = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === k && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (y = f = 0) || p.pop();)
                                            if (1 === h.nodeType && ++y && h === e) {
                                                c[t] = [k, f, y];
                                                break
                                            }
                                    } else if (b && (y = f = (u = (c = (d = (h = e)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === k && u[1]), !1 === y)
                                        for (;
                                            (h = ++f && h && h[g] || (y = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (b && ((c = (d = h[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [k, y]), h !== e)););
                                    return (y -= r) === i || y % i == 0 && y / i >= 0
                                }
                            }
                        },
                        PSEUDO: function (t, e) {
                            var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                            return r[x] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ut(function (t, n) {
                                for (var i, o = r(t, e), a = o.length; a--;) t[i = E(t, o[a])] = !(n[i] = o[a])
                            }) : function (t) {
                                return r(t, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: ut(function (t) {
                            var e = [],
                                n = [],
                                i = s(t.replace(H, "$1"));
                            return i[x] ? ut(function (t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function (t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: ut(function (t) {
                            return function (e) {
                                return st(t, e).length > 0
                            }
                        }),
                        contains: ut(function (t) {
                            return t = t.replace(et, nt),
                                function (e) {
                                    return (e.textContent || r(e)).indexOf(t) > -1
                                }
                        }),
                        lang: ut(function (t) {
                            return $.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                function (e) {
                                    var n;
                                    do {
                                        if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function (t) {
                            return t === p
                        },
                        focus: function (t) {
                            return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: gt(!1),
                        disabled: gt(!0),
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) {
                            return !i.pseudos.empty(t)
                        },
                        header: function (t) {
                            return Q.test(t.nodeName)
                        },
                        input: function (t) {
                            return K.test(t.nodeName)
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: mt(function () {
                            return [0]
                        }),
                        last: mt(function (t, e) {
                            return [e - 1]
                        }),
                        eq: mt(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: mt(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: mt(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: mt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: mt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, i.pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[e] = ft(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[e] = pt(e);

            function bt() {}

            function yt(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function xt(t, e, n) {
                var i = e.dir,
                    r = e.next,
                    o = r || i,
                    a = n && "parentNode" === o,
                    s = _++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || a) return t(e, n, r);
                    return !1
                } : function (e, n, l) {
                    var u, c, d, h = [k, s];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || a) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || a)
                                if (c = (d = e[x] || (e[x] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((u = c[o]) && u[0] === k && u[1] === s) return h[2] = u[2];
                                    if (c[o] = h, h[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function wt(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function kt(t, e, n, i, r) {
                for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), u && e.push(s)));
                return a
            }

            function _t(t, e, n, i, r, o) {
                return i && !i[x] && (i = _t(i)), r && !r[x] && (r = _t(r, o)), ut(function (o, a, s, l) {
                    var u, c, d, h = [],
                        f = [],
                        p = a.length,
                        g = o || function (t, e, n) {
                            for (var i = 0, r = e.length; i < r; i++) st(t, e[i], n);
                            return n
                        }(e || "*", s.nodeType ? [s] : s, []),
                        m = !t || !o && e ? g : kt(g, h, t, s, l),
                        v = n ? r || (o ? t : p || i) ? [] : a : m;
                    if (n && n(m, v, s, l), i)
                        for (u = kt(v, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                                r(null, v = [], u, l)
                            }
                            for (c = v.length; c--;)(d = v[c]) && (u = r ? E(o, d) : h[c]) > -1 && (o[u] = !(a[u] = d))
                        }
                    } else v = kt(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : N.apply(a, v)
                })
            }

            function Ct(t) {
                for (var e, n, r, o = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = xt(function (t) {
                        return t === e
                    }, s, !0), d = xt(function (t) {
                        return E(e, t) > -1
                    }, s, !0), h = [function (t, n, i) {
                        var r = !a && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
                        return e = null, r
                    }]; l < o; l++)
                    if (n = i.relative[t[l].type]) h = [xt(wt(h), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                            for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                            return _t(l > 1 && wt(h), l > 1 && yt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(H, "$1"), n, l < r && Ct(t.slice(l, r)), r < o && Ct(t = t.slice(r)), r < o && yt(t))
                        }
                        h.push(n)
                    } return wt(h)
            }
            return bt.prototype = i.filters = i.pseudos, i.setFilters = new bt, a = st.tokenize = function (t, e) {
                var n, r, o, a, s, l, u, c = M[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (s = t, l = [], u = i.preFilter; s;) {
                    for (a in n && !(r = V.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = q.exec(s)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(H, " ")
                        }), s = s.slice(n.length)), i.filter) !(r = X[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return e ? s.length : s ? st.error(t) : M(t, l).slice(0)
            }, s = st.compile = function (t, e) {
                var n, r = [],
                    o = [],
                    s = S[t + " "];
                if (!s) {
                    for (e || (e = a(t)), n = e.length; n--;)(s = Ct(e[n]))[x] ? r.push(s) : o.push(s);
                    s = S(t, function (t, e) {
                        var n = e.length > 0,
                            r = t.length > 0,
                            o = function (o, a, s, l, c) {
                                var d, p, m, v = 0,
                                    b = "0",
                                    y = o && [],
                                    x = [],
                                    w = u,
                                    _ = o || r && i.find.TAG("*", c),
                                    C = k += null == w ? 1 : Math.random() || .1,
                                    M = _.length;
                                for (c && (u = a == f || a || c); b !== M && null != (d = _[b]); b++) {
                                    if (r && d) {
                                        for (p = 0, a || d.ownerDocument == f || (h(d), s = !g); m = t[p++];)
                                            if (m(d, a || f, s)) {
                                                l.push(d);
                                                break
                                            } c && (k = C)
                                    }
                                    n && ((d = !m && d) && v--, o && y.push(d))
                                }
                                if (v += b, n && b !== v) {
                                    for (p = 0; m = e[p++];) m(y, x, a, s);
                                    if (o) {
                                        if (v > 0)
                                            for (; b--;) y[b] || x[b] || (x[b] = I.call(l));
                                        x = kt(x)
                                    }
                                    N.apply(l, x), c && !o && x.length > 0 && v + e.length > 1 && st.uniqueSort(l)
                                }
                                return c && (k = C, u = w), y
                            };
                        return n ? ut(o) : o
                    }(o, r)), s.selector = t
                }
                return s
            }, l = st.select = function (t, e, n, r) {
                var o, l, u, c, d, h = "function" == typeof t && t,
                    f = !r && a(t = h.selector || t);
                if (n = n || [], 1 === f.length) {
                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                        h && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (o = X.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                        if ((d = i.find[c]) && (r = d(u.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(o, 1), !(t = r.length && yt(l))) return N.apply(n, r), n;
                            break
                        }
                }
                return (h || s(t, f))(r, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
            }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!d, h(), n.sortDetached = ct(function (t) {
                return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
            }), ct(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || dt("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), n.attributes && ct(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || dt("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), ct(function (t) {
                return null == t.getAttribute("disabled")
            }) || dt(F, function (t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), st
        }(t);
    w.find = _, w.expr = _.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = _.uniqueSort, w.text = _.getText, w.isXMLDoc = _.isXML, w.contains = _.contains, w.escapeSelector = _.escape;
    var C = function (t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && w(t).is(n)) break;
                    i.push(t)
                } return i
        },
        M = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        S = w.expr.match.needsContext;

    function T(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(t, e, n) {
        return p(e) ? w.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? w.grep(t, function (t) {
            return t === e !== n
        }) : "string" != typeof e ? w.grep(t, function (t) {
            return s.call(e, t) > -1 !== n
        }) : w.filter(e, t, n)
    }
    w.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, w.fn.extend({
        find: function (t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(w(t).filter(function () {
                for (e = 0; e < i; e++)
                    if (w.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, r[e], n);
            return i > 1 ? w.uniqueSort(n) : n
        },
        filter: function (t) {
            return this.pushStack(D(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(D(this, t || [], !0))
        },
        is: function (t) {
            return !!D(this, "string" == typeof t && S.test(t) ? w(t) : t || [], !1).length
        }
    });
    var P, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || P, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), A.test(i[1]) && w.isPlainObject(e))
                    for (i in e) p(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (r = m.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : p(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
    }).prototype = w.fn, P = w(m);
    var L = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    w.fn.extend({
        has: function (t) {
            var e = w(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (w.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof t && w(t);
            if (!S.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? s.call(w(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), w.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return C(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return C(t, "parentNode", n)
        },
        next: function (t) {
            return O(t, "nextSibling")
        },
        prev: function (t) {
            return O(t, "previousSibling")
        },
        nextAll: function (t) {
            return C(t, "nextSibling")
        },
        prevAll: function (t) {
            return C(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return C(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return C(t, "previousSibling", n)
        },
        siblings: function (t) {
            return M((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return M(t.firstChild)
        },
        contents: function (t) {
            return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (T(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
        }
    }, function (t, e) {
        w.fn[t] = function (n, i) {
            var r = w.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (N[t] || w.uniqueSort(r), L.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var E = /[^\x20\t\r\n\f]+/g;

    function F(t) {
        return t
    }

    function R(t) {
        throw t
    }

    function j(t, e, n, i) {
        var r;
        try {
            t && p(r = t.promise) ? r.call(t).done(e).fail(n) : t && p(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    w.Callbacks = function (t) {
        t = "string" == typeof t ? function (t) {
            var e = {};
            return w.each(t.match(E) || [], function (t, n) {
                e[n] = !0
            }), e
        }(t) : w.extend({}, t);
        var e, n, i, r, o = [],
            a = [],
            s = -1,
            l = function () {
                for (r = r || t.once, i = e = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
                t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function () {
                    return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                        w.each(n, function (n, i) {
                            p(i) ? t.unique && u.has(i) || o.push(i) : i && i.length && "string" !== y(i) && e(i)
                        })
                    }(arguments), n && !e && l()), this
                },
                remove: function () {
                    return w.each(arguments, function (t, e) {
                        for (var n;
                            (n = w.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (t) {
                    return t ? w.inArray(t, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return r = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = a = [], n || e || (o = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (t, n) {
                    return r || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || l()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    }, w.extend({
        Deferred: function (e) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return r.then(null, t)
                    },
                    pipe: function () {
                        var t = arguments;
                        return w.Deferred(function (e) {
                            w.each(n, function (n, i) {
                                var r = p(t[i[4]]) && t[i[4]];
                                o[i[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && p(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (e, i, r) {
                        var o = 0;

                        function a(e, n, i, r) {
                            return function () {
                                var s = this,
                                    l = arguments,
                                    u = function () {
                                        var t, u;
                                        if (!(e < o)) {
                                            if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = t && ("object" == typeof t || "function" == typeof t) && t.then, p(u) ? r ? u.call(t, a(o, n, F, r), a(o, n, R, r)) : (o++, u.call(t, a(o, n, F, r), a(o, n, R, r), a(o, n, F, n.notifyWith))) : (i !== F && (s = void 0, l = [t]), (r || n.resolveWith)(s, l))
                                        }
                                    },
                                    c = r ? u : function () {
                                        try {
                                            u()
                                        } catch (t) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (i !== R && (s = void 0, l = [t]), n.rejectWith(s, l))
                                        }
                                    };
                                e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (t) {
                            n[0][3].add(a(0, t, p(r) ? r : F, t.notifyWith)), n[1][3].add(a(0, t, p(e) ? e : F)), n[2][3].add(a(0, t, p(i) ? i : R))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? w.extend(t, r) : r
                    }
                },
                o = {};
            return w.each(n, function (t, e) {
                var a = e[2],
                    s = e[5];
                r[e[1]] = a.add, s && a.add(function () {
                    i = s
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), a.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function (t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                o = r.call(arguments),
                a = w.Deferred(),
                s = function (t) {
                    return function (n) {
                        i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || a.resolveWith(i, o)
                    }
                };
            if (e <= 1 && (j(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();
            for (; n--;) j(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && z.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, w.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var B = w.Deferred();

    function W() {
        m.removeEventListener("DOMContentLoaded", W), t.removeEventListener("load", W), w.ready()
    }
    w.fn.ready = function (t) {
        return B.then(t).catch(function (t) {
            w.readyException(t)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== t && --w.readyWait > 0 || B.resolveWith(m, [w]))
        }
    }), w.ready.then = B.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", W), t.addEventListener("load", W));
    var H = function (t, e, n, i, r, o, a) {
            var s = 0,
                l = t.length,
                u = null == n;
            if ("object" === y(n))
                for (s in r = !0, n) H(t, e, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, p(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                    return u.call(w(t), n)
                })), e))
                for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        V = /^-ms-/,
        q = /-([a-z])/g;

    function U(t, e) {
        return e.toUpperCase()
    }

    function Y(t) {
        return t.replace(V, "ms-").replace(q, U)
    }
    var $ = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function X() {
        this.expando = w.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[Y(e)] = n;
            else
                for (i in e) r[Y(i)] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
        },
        access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(E) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !w.isEmptyObject(e)
        }
    };
    var G = new X,
        K = new X,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function J(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = function (t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Q.test(t) ? JSON.parse(t) : t)
                    }(n)
                } catch (t) {}
                K.set(t, e, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (t) {
            return K.hasData(t) || G.hasData(t)
        },
        data: function (t, e, n) {
            return K.access(t, e, n)
        },
        removeData: function (t, e) {
            K.remove(t, e)
        },
        _data: function (t, e, n) {
            return G.access(t, e, n)
        },
        _removeData: function (t, e) {
            G.remove(t, e)
        }
    }), w.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = K.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Y(i.slice(5)), J(o, i, r[i]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                K.set(this, t)
            }) : H(this, function (e) {
                var n;
                if (o && void 0 === e) return void 0 !== (n = K.get(o, t)) || void 0 !== (n = J(o, t)) ? n : void 0;
                this.each(function () {
                    K.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                K.remove(this, t)
            })
        }
    }), w.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = G.get(t, e), n && (!i || Array.isArray(n) ? i = G.access(t, e, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = w.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = w._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                w.dequeue(t, e)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return G.get(t, n) || G.access(t, n, {
                empty: w.Callbacks("once memory").add(function () {
                    G.remove(t, [e + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = w.queue(this, t, e);
                w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                w.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = G.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = m.documentElement,
        rt = function (t) {
            return w.contains(t.ownerDocument, t)
        },
        ot = {
            composed: !0
        };
    it.getRootNode && (rt = function (t) {
        return w.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
    });
    var at = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === w.css(t, "display")
    };

    function st(t, e, n, i) {
        var r, o, a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return w.css(t, e, "")
            },
            l = s(),
            u = n && n[3] || (w.cssNumber[e] ? "" : "px"),
            c = t.nodeType && (w.cssNumber[e] || "px" !== u && +l) && et.exec(w.css(t, e));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) w.style(t, e, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(t, e, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var lt = {};

    function ut(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            r = lt[i];
        return r || (e = n.body.appendChild(n.createElement(i)), r = w.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), lt[i] = r, r)
    }

    function ct(t, e) {
        for (var n, i, r = [], o = 0, a = t.length; o < a; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = G.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && at(i) && (r[o] = ut(i))) : "none" !== n && (r[o] = "none", G.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
        return t
    }
    w.fn.extend({
        show: function () {
            return ct(this, !0)
        },
        hide: function () {
            return ct(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                at(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var dt, ht, ft = /^(?:checkbox|radio)$/i,
        pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        gt = /^$|^module$|\/(?:java|ecma)script/i;
    dt = m.createDocumentFragment().appendChild(m.createElement("div")), (ht = m.createElement("input")).setAttribute("type", "radio"), ht.setAttribute("checked", "checked"), ht.setAttribute("name", "t"), dt.appendChild(ht), f.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue, dt.innerHTML = "<option></option>", f.option = !!dt.lastChild;
    var mt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function vt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && T(t, e) ? w.merge([t], n) : n
    }

    function bt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"))
    }
    mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td, f.option || (mt.optgroup = mt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;

    function xt(t, e, n, i, r) {
        for (var o, a, s, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
            if ((o = t[f]) || 0 === o)
                if ("object" === y(o)) w.merge(h, o.nodeType ? [o] : o);
                else if (yt.test(o)) {
            for (a = a || d.appendChild(e.createElement("div")), s = (pt.exec(o) || ["", ""])[1].toLowerCase(), l = mt[s] || mt._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            w.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
        } else h.push(e.createTextNode(o));
        for (d.textContent = "", f = 0; o = h[f++];)
            if (i && w.inArray(o, i) > -1) r && r.push(o);
            else if (u = rt(o), a = vt(d.appendChild(o), "script"), u && bt(a), n)
            for (c = 0; o = a[c++];) gt.test(o.type || "") && n.push(o);
        return d
    }
    var wt = /^([^.]*)(?:\.(.+)|)/;

    function kt() {
        return !0
    }

    function _t() {
        return !1
    }

    function Ct(t, e) {
        return t === function () {
            try {
                return m.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }

    function Mt(t, e, n, i, r, o) {
        var a, s;
        if ("object" == typeof e) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), e) Mt(t, s, n, i, e[s], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = _t;
        else if (!r) return t;
        return 1 === o && (a = r, r = function (t) {
            return w().off(t), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = w.guid++)), t.each(function () {
            w.event.add(this, e, r, i, n)
        })
    }

    function St(t, e, n) {
        n ? (G.set(t, e, !1), w.event.add(t, e, {
            namespace: !1,
            handler: function (t) {
                var i, o, a = G.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (a.length)(w.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (a = r.call(arguments), G.set(this, e, a), i = n(this, e), this[e](), a !== (o = G.get(this, e)) || i ? G.set(this, e, !1) : o = {}, a !== o) return t.stopImmediatePropagation(), t.preventDefault(), o && o.value
                } else a.length && (G.set(this, e, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === G.get(t, e) && w.event.add(t, e, kt)
    }
    w.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, g, m = G.get(t);
            if ($(t))
                for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(it, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function (e) {
                        return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(E) || [""]).length; u--;) f = g = (s = wt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, c = w.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && w.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(f, a)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), w.event.global[f] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, g, m = G.hasData(t) && G.get(t);
            if (m && (l = m.events)) {
                for (u = (e = (e || "").match(E) || [""]).length; u--;)
                    if (f = g = (s = wt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                        for (d = w.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
                        a && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || w.removeEvent(t, f, m.handle), delete l[f])
                    } else
                        for (f in l) w.event.remove(t, f + e[u], n, i, !0);
                w.isEmptyObject(l) && G.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, r, o, a, s = new Array(arguments.length),
                l = w.event.fix(t),
                u = (G.get(this, "events") || Object.create(null))[l.type] || [],
                c = w.event.special[l.type] || {};
            for (s[0] = l, e = 1; e < arguments.length; e++) s[e] = arguments[e];
            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = w.event.handlers.call(this, l, u), e = 0;
                    (r = a[e++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, a, s = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = e[n]).selector + " "] && (a[r] = i.needsContext ? w(r, this).index(u) > -1 : w.find(r, this, null, [u]).length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < e.length && s.push({
                elem: u,
                handlers: e.slice(l)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: p(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[w.expando] ? t : new w.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (t) {
                    var e = this || t;
                    return ft.test(e.type) && e.click && T(e, "input") && St(e, "click", kt), !1
                },
                trigger: function (t) {
                    var e = this || t;
                    return ft.test(e.type) && e.click && T(e, "input") && St(e, "click"), !0
                },
                _default: function (t) {
                    var e = t.target;
                    return ft.test(e.type) && e.click && T(e, "input") && G.get(e, "click") || T(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, w.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, w.Event = function (t, e) {
        if (!(this instanceof w.Event)) return new w.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? kt : _t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: _t,
        isPropagationStopped: _t,
        isImmediatePropagationStopped: _t,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = kt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = kt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = kt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        w.event.special[t] = {
            setup: function () {
                return St(this, t, Ct), !1
            },
            trigger: function () {
                return St(this, t), !0
            },
            _default: function () {
                return !0
            },
            delegateType: e
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        w.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return r && (r === i || w.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), w.fn.extend({
        on: function (t, e, n, i) {
            return Mt(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return Mt(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = _t), this.each(function () {
                w.event.remove(this, t, n, e)
            })
        }
    });
    var Tt = /<script|<style|<link/i,
        At = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Pt(t, e) {
        return T(t, "table") && T(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }

    function It(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Lt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Nt(t, e) {
        var n, i, r, o, a, s;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (s = G.get(t).events))
                for (r in G.remove(e, "handle events"), s)
                    for (n = 0, i = s[r].length; n < i; n++) w.event.add(e, r, s[r][n]);
            K.hasData(t) && (o = K.access(t), a = w.extend({}, o), K.set(e, a))
        }
    }

    function Ot(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ft.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function Et(t, e, n, i) {
        e = o(e);
        var r, a, s, l, u, c, d = 0,
            h = t.length,
            g = h - 1,
            m = e[0],
            v = p(m);
        if (v || h > 1 && "string" == typeof m && !f.checkClone && At.test(m)) return t.each(function (r) {
            var o = t.eq(r);
            v && (e[0] = m.call(this, r, o.html())), Et(o, e, n, i)
        });
        if (h && (a = (r = xt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
            for (l = (s = w.map(vt(r, "script"), It)).length; d < h; d++) u = r, d !== g && (u = w.clone(u, !0, !0), l && w.merge(s, vt(u, "script"))), n.call(t[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Lt), d = 0; d < l; d++) u = s[d], gt.test(u.type || "") && !G.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, c) : b(u.textContent.replace(Dt, ""), u, c))
        }
        return t
    }

    function Ft(t, e, n) {
        for (var i, r = e ? w.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(vt(i)), i.parentNode && (n && rt(i) && bt(vt(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    w.extend({
        htmlPrefilter: function (t) {
            return t
        },
        clone: function (t, e, n) {
            var i, r, o, a, s = t.cloneNode(!0),
                l = rt(t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                for (a = vt(s), i = 0, r = (o = vt(t)).length; i < r; i++) Ot(o[i], a[i]);
            if (e)
                if (n)
                    for (o = o || vt(t), a = a || vt(s), i = 0, r = o.length; i < r; i++) Nt(o[i], a[i]);
                else Nt(t, s);
            return (a = vt(s, "script")).length > 0 && bt(a, !l && vt(t, "script")), s
        },
        cleanData: function (t) {
            for (var e, n, i, r = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if ($(n)) {
                    if (e = n[G.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                        n[G.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (t) {
            return Ft(this, t, !0)
        },
        remove: function (t) {
            return Ft(this, t)
        },
        text: function (t) {
            return H(this, function (t) {
                return void 0 === t ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return Et(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pt(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return Et(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Pt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return Et(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return Et(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(vt(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return w.clone(this, t, e)
            })
        },
        html: function (t) {
            return H(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Tt.test(t) && !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = w.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(vt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return Et(this, arguments, function (e) {
                var n = this.parentNode;
                w.inArray(this, t) < 0 && (w.cleanData(vt(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        w.fn[t] = function (t) {
            for (var n, i = [], r = w(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(r[s])[e](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Rt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        jt = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        zt = function (t, e, n) {
            var i, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            for (r in i = n.call(t), e) t.style[r] = o[r];
            return i
        },
        Bt = new RegExp(nt.join("|"), "i");

    function Wt(t, e, n) {
        var i, r, o, a, s = t.style;
        return (n = n || jt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || rt(t) || (a = w.style(t, e)), !f.pixelBoxStyles() && Rt.test(a) && Bt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ht(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(u).appendChild(c);
                var e = t.getComputedStyle(c);
                i = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), r = 36 === n(e.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), it.removeChild(u), c = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var i, r, o, a, s, l, u = m.createElement("div"),
            c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(f, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), a
            },
            pixelPosition: function () {
                return e(), i
            },
            reliableMarginLeft: function () {
                return e(), l
            },
            scrollboxSize: function () {
                return e(), o
            },
            reliableTrDimensions: function () {
                var e, n, i, r;
                return null == s && (e = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", it.appendChild(e).appendChild(n).appendChild(i), r = t.getComputedStyle(n), s = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, it.removeChild(e)), s
            }
        }))
    }();
    var Vt = ["Webkit", "Moz", "ms"],
        qt = m.createElement("div").style,
        Ut = {};

    function Yt(t) {
        var e = w.cssProps[t] || Ut[t];
        return e || (t in qt ? t : Ut[t] = function (t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--;)
                if ((t = Vt[n] + e) in qt) return t
        }(t) || t)
    }
    var $t = /^(none|table(?!-c[ea]).+)/,
        Xt = /^--/,
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Qt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Zt(t, e, n, i, r, o) {
        var a = "width" === e ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += w.css(t, n + nt[a], !0, r)), i ? ("content" === n && (l -= w.css(t, "padding" + nt[a], !0, r)), "margin" !== n && (l -= w.css(t, "border" + nt[a] + "Width", !0, r))) : (l += w.css(t, "padding" + nt[a], !0, r), "padding" !== n ? l += w.css(t, "border" + nt[a] + "Width", !0, r) : s += w.css(t, "border" + nt[a] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - .5)) || 0), l
    }

    function Jt(t, e, n) {
        var i = jt(t),
            r = (!f.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
            o = r,
            a = Wt(t, e, i),
            s = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Rt.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!f.boxSizingReliable() && r || !f.reliableTrDimensions() && T(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === w.css(t, "boxSizing", !1, i), (o = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + Zt(t, e, n || (r ? "border" : "content"), o, i, a) + "px"
    }

    function te(t, e, n, i, r) {
        return new te.prototype.init(t, e, n, i, r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Wt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, s = Y(e),
                    l = Xt.test(e),
                    u = t.style;
                if (l || (e = Yt(s)), a = w.cssHooks[e] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : u[e];
                "string" === (o = typeof n) && (r = et.exec(n)) && r[1] && (n = st(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var r, o, a, s = Y(e);
            return Xt.test(e) || (e = Yt(s)), (a = w.cssHooks[e] || w.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = Wt(t, e, i)), "normal" === r && e in Kt && (r = Kt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), w.each(["height", "width"], function (t, e) {
        w.cssHooks[e] = {
            get: function (t, n, i) {
                if (n) return !$t.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Jt(t, e, i) : zt(t, Gt, function () {
                    return Jt(t, e, i)
                })
            },
            set: function (t, n, i) {
                var r, o = jt(t),
                    a = !f.scrollboxSize() && "absolute" === o.position,
                    s = (a || i) && "border-box" === w.css(t, "boxSizing", !1, o),
                    l = i ? Zt(t, e, i, s, o) : 0;
                return s && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Zt(t, e, "border", !1, o) - .5)), l && (r = et.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Qt(0, n, l)
            }
        }
    }), w.cssHooks.marginLeft = Ht(f.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - zt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        w.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + nt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== t && (w.cssHooks[t + e].set = Qt)
    }), w.fn.extend({
        css: function (t, e) {
            return H(this, function (t, e, n) {
                var i, r, o = {},
                    a = 0;
                if (Array.isArray(e)) {
                    for (i = jt(t), r = e.length; a < r; a++) o[e[a]] = w.css(t, e[a], !1, i);
                    return o
                }
                return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), w.Tween = te, te.prototype = {
        constructor: te,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = te.propHooks[this.prop];
            return t && t.get ? t.get(this) : te.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = te.propHooks[this.prop];
            return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : te.propHooks._default.set(this), this
        }
    }, te.prototype.init.prototype = te.prototype, te.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, te.propHooks.scrollTop = te.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, w.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = te.prototype.init, w.fx.step = {};
    var ee, ne, ie = /^(?:toggle|show|hide)$/,
        re = /queueHooks$/;

    function oe() {
        ne && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(oe) : t.setTimeout(oe, w.fx.interval), w.fx.tick())
    }

    function ae() {
        return t.setTimeout(function () {
            ee = void 0
        }), ee = Date.now()
    }

    function se(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function le(t, e, n) {
        for (var i, r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function ue(t, e, n) {
        var i, r, o = 0,
            a = ue.prefilters.length,
            s = w.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var e = ee || ae(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
                return s.notifyWith(t, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u]), !1)
            },
            u = s.promise({
                elem: t,
                props: w.extend({}, e),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ee || ae(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = w.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (! function (t, e) {
                var n, i, r, o, a;
                for (n in t)
                    if (r = e[i = Y(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = w.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                    else e[i] = r
            }(c, u.opts.specialEasing); o < a; o++)
            if (i = ue.prefilters[o].call(u, t, c, u.opts)) return p(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(c, le, u), p(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    w.Animation = w.extend(ue, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return st(n.elem, t, et.exec(e), n), n
                }]
            },
            tweener: function (t, e) {
                p(t) ? (e = t, t = ["*"]) : t = t.match(E);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e)
            },
            prefilters: [function (t, e, n) {
                var i, r, o, a, s, l, u, c, d = "width" in e || "height" in e,
                    h = this,
                    f = {},
                    p = t.style,
                    g = t.nodeType && at(t),
                    m = G.get(t, "fxshow");
                for (i in n.queue || (null == (a = w._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || s()
                    }), a.unqueued++, h.always(function () {
                        h.always(function () {
                            a.unqueued--, w.queue(t, "fx").length || a.empty.fire()
                        })
                    })), e)
                    if (r = e[i], ie.test(r)) {
                        if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        f[i] = m && m[i] || w.style(t, i)
                    } if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(f))
                    for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = G.get(t, "display")), "none" === (c = w.css(t, "display")) && (u ? c = u : (ct([t], !0), u = t.style.display || u, c = w.css(t, "display"), ct([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(t, "float") && (l || (h.done(function () {
                            p.display = u
                        }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(t, "fxshow", {
                        display: u
                    }), o && (m.hidden = !g), g && ct([t], !0), h.done(function () {
                        for (i in g || ct([t]), G.remove(t, "fxshow"), f) w.style(t, i, f[i])
                    })), l = le(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function (t, e) {
                e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
            }
        }), w.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? w.extend({}, t) : {
                complete: n || !n && e || p(t) && t,
                duration: t,
                easing: n && e || e && !p(e) && e
            };
            return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
            }, i
        }, w.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(at).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (t, e, n, i) {
                var r = w.isEmptyObject(t),
                    o = w.speed(e, n, i),
                    a = function () {
                        var e = ue(this, w.extend({}, t), o);
                        (r || G.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = w.timers,
                        a = G.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && re.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || w.dequeue(this, t)
                })
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, n = G.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = w.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, w.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function (t, e) {
            var n = w.fn[e];
            w.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(se(e, !0), t, i, r)
            }
        }), w.each({
            slideDown: se("show"),
            slideUp: se("hide"),
            slideToggle: se("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            w.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), w.timers = [], w.fx.tick = function () {
            var t, e = 0,
                n = w.timers;
            for (ee = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || w.fx.stop(), ee = void 0
        }, w.fx.timer = function (t) {
            w.timers.push(t), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function () {
            ne || (ne = !0, oe())
        }, w.fx.stop = function () {
            ne = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function (e, n) {
            return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function () {
                    t.clearTimeout(r)
                }
            })
        },
        function () {
            var t = m.createElement("input"),
                e = m.createElement("select").appendChild(m.createElement("option"));
            t.type = "checkbox", f.checkOn = "" !== t.value, f.optSelected = e.selected, (t = m.createElement("input")).value = "t", t.type = "radio", f.radioValue = "t" === t.value
        }();
    var ce, de = w.expr.attrHandle;
    w.fn.extend({
        attr: function (t, e) {
            return H(this, w.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                w.removeAttr(this, t)
            })
        }
    }), w.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (r = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ce : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!f.radioValue && "radio" === e && T(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i = 0,
                r = e && e.match(E);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), ce = {
        set: function (t, e, n) {
            return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = de[e] || w.find.attr;
        de[e] = function (t, e, i) {
            var r, o, a = e.toLowerCase();
            return i || (o = de[a], de[a] = r, r = null != n(t, e, i) ? a : null, de[a] = o), r
        }
    });
    var he = /^(?:input|select|textarea|button)$/i,
        fe = /^(?:a|area)$/i;

    function pe(t) {
        return (t.match(E) || []).join(" ")
    }

    function ge(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function me(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(E) || []
    }
    w.fn.extend({
        prop: function (t, e) {
            return H(this, w.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[w.propFix[t] || t]
            })
        }
    }), w.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, r = w.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = w.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (w.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (p(t)) return this.each(function (e) {
                w(this).addClass(t.call(this, e, ge(this)))
            });
            if ((e = me(t)).length)
                for (; n = this[l++];)
                    if (r = ge(n), i = 1 === n.nodeType && " " + pe(r) + " ") {
                        for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = pe(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (p(t)) return this.each(function (e) {
                w(this).removeClass(t.call(this, e, ge(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = me(t)).length)
                for (; n = this[l++];)
                    if (r = ge(n), i = 1 === n.nodeType && " " + pe(r) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (s = pe(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (t, e) {
            var n = typeof t,
                i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : p(t) ? this.each(function (n) {
                w(this).toggleClass(t.call(this, n, ge(this), e), e)
            }) : this.each(function () {
                var e, r, o, a;
                if (i)
                    for (r = 0, o = w(this), a = me(t); e = a[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = ge(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + pe(ge(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var ve = /\r/g;
    w.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = p(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, w(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ve, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = w.find.attr(t, "value");
                    return null != e ? e : pe(w.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, n, i, r = t.options,
                        o = t.selectedIndex,
                        a = "select-one" === t.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
                            if (e = w(n).val(), a) return e;
                            s.push(e)
                        } return s
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = w.makeArray(e), a = r.length; a--;)((i = r[a]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = w.inArray(w(t).val(), e) > -1
            }
        }, f.checkOn || (w.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), f.focusin = "onfocusin" in t;
    var be = /^(?:focusinfocus|focusoutblur)$/,
        ye = function (t) {
            t.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (e, n, i, r) {
            var o, a, s, l, u, d, h, f, v = [i || m],
                b = c.call(e, "type") ? e.type : e,
                y = c.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = f = s = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !be.test(b + w.event.triggered) && (b.indexOf(".") > -1 && (y = b.split("."), b = y.shift(), y.sort()), u = b.indexOf(":") < 0 && "on" + b, (e = e[w.expando] ? e : new w.Event(b, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : w.makeArray(n, [e]), h = w.event.special[b] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!r && !h.noBubble && !g(i)) {
                    for (l = h.delegateType || b, be.test(l + b) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (i.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || t)
                }
                for (o = 0;
                    (a = v[o++]) && !e.isPropagationStopped();) f = a, e.type = o > 1 ? l : h.bindType || b, (d = (G.get(a, "events") || Object.create(null))[e.type] && G.get(a, "handle")) && d.apply(a, n), (d = u && a[u]) && d.apply && $(a) && (e.result = d.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = b, r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !$(i) || u && p(i[b]) && !g(i) && ((s = i[u]) && (i[u] = null), w.event.triggered = b, e.isPropagationStopped() && f.addEventListener(b, ye), i[b](), e.isPropagationStopped() && f.removeEventListener(b, ye), w.event.triggered = void 0, s && (i[u] = s)), e.result
            }
        },
        simulate: function (t, e, n) {
            var i = w.extend(new w.Event, n, {
                type: t,
                isSimulated: !0
            });
            w.event.trigger(i, null, e)
        }
    }), w.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                w.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return w.event.trigger(t, e, n, !0)
        }
    }), f.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            w.event.simulate(e, t.target, w.event.fix(t))
        };
        w.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this,
                    r = G.access(i, e);
                r || i.addEventListener(t, n, !0), G.access(i, e, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this.document || this,
                    r = G.access(i, e) - 1;
                r ? G.access(i, e, r) : (i.removeEventListener(t, n, !0), G.remove(i, e))
            }
        }
    });
    var xe = t.location,
        we = {
            guid: Date.now()
        },
        ke = /\?/;
    w.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || w.error("Invalid XML: " + (i ? w.map(i.childNodes, function (t) {
            return t.textContent
        }).join("\n") : e)), n
    };
    var _e = /\[\]$/,
        Ce = /\r?\n/g,
        Me = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;

    function Te(t, e, n, i) {
        var r;
        if (Array.isArray(e)) w.each(e, function (e, r) {
            n || _e.test(t) ? i(t, r) : Te(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== y(e)) i(t, e);
        else
            for (r in e) Te(t + "[" + r + "]", e[r], n, i)
    }
    w.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                var n = p(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) Te(n, t[n], e, r);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = w.prop(this, "elements");
                return t ? w.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !w(this).is(":disabled") && Se.test(this.nodeName) && !Me.test(t) && (this.checked || !ft.test(t))
            }).map(function (t, e) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Ce, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ce, "\r\n")
                }
            }).get()
        }
    });
    var Ae = /%20/g,
        De = /#.*$/,
        Pe = /([?&])_=[^&]*/,
        Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Le = /^(?:GET|HEAD)$/,
        Ne = /^\/\//,
        Oe = {},
        Ee = {},
        Fe = "*/".concat("*"),
        Re = m.createElement("a");

    function je(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(E) || [];
            if (p(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function ze(t, e, n, i) {
        var r = {},
            o = t === Ee;

        function a(s) {
            var l;
            return r[s] = !0, w.each(t[s] || [], function (t, s) {
                var u = s(e, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1)
            }), l
        }
        return a(e.dataTypes[0]) || !r["*"] && a("*")
    }

    function Be(t, e) {
        var n, i, r = w.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && w.extend(!0, t, i), t
    }
    Re.href = xe.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Fe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? Be(Be(t, w.ajaxSettings), e) : Be(w.ajaxSettings, t)
        },
        ajaxPrefilter: je(Oe),
        ajaxTransport: je(Ee),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, r, o, a, s, l, u, c, d, h, f = w.ajaxSetup({}, n),
                p = f.context || f,
                g = f.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                v = w.Deferred(),
                b = w.Callbacks("once memory"),
                y = f.statusCode || {},
                x = {},
                k = {},
                _ = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Ie.exec(o);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = a[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return u ? o : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == u && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == u && (f.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (u) C.always(t[C.status]);
                            else
                                for (e in t) y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || _;
                        return i && i.abort(e), M(0, e), this
                    }
                };
            if (v.promise(C), f.url = ((e || f.url || xe.href) + "").replace(Ne, xe.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(E) || [""], null == f.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = Re.protocol + "//" + Re.host != l.protocol + "//" + l.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), ze(Oe, f, n, C), u) return C;
            for (d in (c = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Le.test(f.type), r = f.url.replace(De, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ae, "+")) : (h = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (ke.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Pe, "$1"), h = (ke.test(r) ? "&" : "?") + "_=" + we.guid++ + h), f.url = r + h), f.ifModified && (w.lastModified[r] && C.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && C.setRequestHeader("If-None-Match", w.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || u)) return C.abort();
            if (_ = "abort", b.add(f.complete), C.done(f.success), C.fail(f.error), i = ze(Ee, f, n, C)) {
                if (C.readyState = 1, c && g.trigger("ajaxSend", [C, f]), u) return C;
                f.async && f.timeout > 0 && (s = t.setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, i.send(x, M)
                } catch (t) {
                    if (u) throw t;
                    M(-1, t)
                }
            } else M(-1, "No Transport");

            function M(e, n, a, l) {
                var d, h, m, x, k, _ = n;
                u || (u = !0, s && t.clearTimeout(s), i = void 0, o = l || "", C.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (x = function (t, e, n) {
                    for (var i, r, o, a, s = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(f, C, a)), !d && w.inArray("script", f.dataTypes) > -1 && w.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}), x = function (t, e, n, i) {
                    var r, o, a, s, l, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                    for (o = c.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && t.throws) e = a(e);
                            else try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, x, C, d), d ? (f.ifModified && ((k = C.getResponseHeader("Last-Modified")) && (w.lastModified[r] = k), (k = C.getResponseHeader("etag")) && (w.etag[r] = k)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, h = x.data, d = !(m = x.error))) : (m = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || _) + "", d ? v.resolveWith(p, [h, _, C]) : v.rejectWith(p, [C, _, m]), C.statusCode(y), y = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? h : m]), b.fireWith(p, [C, _]), c && (g.trigger("ajaxComplete", [C, f]), --w.active || w.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function (t, e, n) {
            return w.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return w.get(t, void 0, e, "script")
        }
    }), w.each(["get", "post"], function (t, e) {
        w[e] = function (t, n, i, r) {
            return p(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, w.isPlainObject(t) && t))
        }
    }), w.ajaxPrefilter(function (t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }), w._evalUrl = function (t, e, n) {
        return w.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (t) {
                w.globalEval(t, e, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (p(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (t) {
            return p(t) ? this.each(function (e) {
                w(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = w(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = p(t);
            return this.each(function (n) {
                w(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (t) {
        return !w.expr.pseudos.visible(t)
    }, w.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var We = {
            0: 200,
            1223: 204
        },
        He = w.ajaxSettings.xhr();
    f.cors = !!He && "withCredentials" in He, f.ajax = He = !!He, w.ajaxTransport(function (e) {
        var n, i;
        if (f.cors || He && !e.crossDomain) return {
            send: function (r, o) {
                var a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                n = function (t) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(We[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return w.globalEval(t), t
            }
        }
    }), w.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), w.ajaxTransport("script", function (t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function (i, r) {
                e = w("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function (t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), m.head.appendChild(e[0])
            },
            abort: function () {
                n && n()
            }
        }
    });
    var Ve, qe = [],
        Ue = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = qe.pop() || w.expando + "_" + we.guid++;
            return this[t] = !0, t
        }
    }), w.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, a, s = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ue, "$1" + r) : !1 !== e.jsonp && (e.url += (ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return a || w.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === o ? w(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, qe.push(r)), a && p(o) && o(a[0]), a = o = void 0
        }), "script"
    }), f.createHTMLDocument = ((Ve = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ve.childNodes.length), w.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((i = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(i)) : e = m), o = !n && [], (r = A.exec(t)) ? [e.createElement(r[1])] : (r = xt([t], e, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
        var i, r, o
    }, w.fn.load = function (t, e, n) {
        var i, r, o, a = this,
            s = t.indexOf(" ");
        return s > -1 && (i = pe(t.slice(s)), t = t.slice(0, s)), p(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && w.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, a.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            a.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, w.expr.pseudos.animated = function (t) {
        return w.grep(w.timers, function (e) {
            return t === e.elem
        }).length
    }, w.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, a, s, l, u = w.css(t, "position"),
                c = w(t),
                d = {};
            "static" === u && (t.style.position = "relative"), s = c.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), p(e) && (e = e.call(t, n, w.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
        }
    }, w.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                w.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = w(t).offset()).top += w.css(t, "borderTopWidth", !0), r.left += w.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - w.css(i, "marginTop", !0),
                    left: e.left - r.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                return t || it
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = "pageYOffset" === e;
        w.fn[t] = function (i) {
            return H(this, function (t, i, r) {
                var o;
                if (g(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
            }, t, i, arguments.length)
        }
    }), w.each(["top", "left"], function (t, e) {
        w.cssHooks[e] = Ht(f.pixelPosition, function (t, n) {
            if (n) return n = Wt(t, e), Rt.test(n) ? w(t).position()[e] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        w.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            w.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return H(this, function (e, n, r) {
                    var o;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? w.css(e, n, s) : w.style(e, n, r, s)
                }, e, a ? r : void 0, a)
            }
        })
    }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        w.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), w.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        w.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    });
    var Ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), p(t)) return i = r.call(arguments, 2), o = function () {
            return t.apply(e || this, i.concat(r.call(arguments)))
        }, o.guid = t.guid = t.guid || w.guid++, o
    }, w.holdReady = function (t) {
        t ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = T, w.isFunction = p, w.isWindow = g, w.camelCase = Y, w.type = y, w.now = Date.now, w.isNumeric = function (t) {
        var e = w.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, w.trim = function (t) {
        return null == t ? "" : (t + "").replace(Ye, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var $e = t.jQuery,
        Xe = t.$;
    return w.noConflict = function (e) {
        return t.$ === w && (t.$ = Xe), e && t.jQuery === w && (t.jQuery = $e), w
    }, void 0 === e && (t.jQuery = t.$ = w), w
}),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function () {
        try {
            return require("moment")
        } catch (t) {}
    }()) : "function" == typeof define && define.amd ? define(["require"], function (t) {
        return e(function () {
            try {
                return t("moment")
            } catch (t) {}
        }())
    }) : (t = t || self).Chart = e(t.moment)
}(this, function (t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        n = function (t, e) {
            return t(e = {
                exports: {}
            }), e.exports
        }(function (t) {
            var n = {};
            for (var i in e) e.hasOwnProperty(i) && (n[e[i]] = i);
            var r = t.exports = {
                rgb: {
                    channels: 3,
                    labels: "rgb"
                },
                hsl: {
                    channels: 3,
                    labels: "hsl"
                },
                hsv: {
                    channels: 3,
                    labels: "hsv"
                },
                hwb: {
                    channels: 3,
                    labels: "hwb"
                },
                cmyk: {
                    channels: 4,
                    labels: "cmyk"
                },
                xyz: {
                    channels: 3,
                    labels: "xyz"
                },
                lab: {
                    channels: 3,
                    labels: "lab"
                },
                lch: {
                    channels: 3,
                    labels: "lch"
                },
                hex: {
                    channels: 1,
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            for (var o in r)
                if (r.hasOwnProperty(o)) {
                    if (!("channels" in r[o])) throw new Error("missing channels property: " + o);
                    if (!("labels" in r[o])) throw new Error("missing channel labels property: " + o);
                    if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
                    var a = r[o].channels,
                        s = r[o].labels;
                    delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", {
                        value: a
                    }), Object.defineProperty(r[o], "labels", {
                        value: s
                    })
                } r.rgb.hsl = function (t) {
                var e, n, i = t[0] / 255,
                    r = t[1] / 255,
                    o = t[2] / 255,
                    a = Math.min(i, r, o),
                    s = Math.max(i, r, o),
                    l = s - a;
                return s === a ? e = 0 : i === s ? e = (r - o) / l : r === s ? e = 2 + (o - i) / l : o === s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s === a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
            }, r.rgb.hsv = function (t) {
                var e, n, i, r, o, a = t[0] / 255,
                    s = t[1] / 255,
                    l = t[2] / 255,
                    u = Math.max(a, s, l),
                    c = u - Math.min(a, s, l),
                    d = function (t) {
                        return (u - t) / 6 / c + .5
                    };
                return 0 === c ? r = o = 0 : (o = c / u, e = d(a), n = d(s), i = d(l), a === u ? r = i - n : s === u ? r = 1 / 3 + e - i : l === u && (r = 2 / 3 + n - e), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * o, 100 * u]
            }, r.rgb.hwb = function (t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return [r.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, i)) * 100, 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))]
            }, r.rgb.cmyk = function (t) {
                var e, n = t[0] / 255,
                    i = t[1] / 255,
                    r = t[2] / 255;
                return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
            }, r.rgb.keyword = function (t) {
                var i = n[t];
                if (i) return i;
                var r, o, a, s = 1 / 0;
                for (var l in e)
                    if (e.hasOwnProperty(l)) {
                        var u = (o = t, a = e[l], Math.pow(o[0] - a[0], 2) + Math.pow(o[1] - a[1], 2) + Math.pow(o[2] - a[2], 2));
                        u < s && (s = u, r = l)
                    } return r
            }, r.keyword.rgb = function (t) {
                return e[t]
            }, r.rgb.xyz = function (t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    i = t[2] / 255;
                return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
            }, r.rgb.lab = function (t) {
                var e = r.rgb.xyz(t),
                    n = e[0],
                    i = e[1],
                    o = e[2];
                return i /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
            }, r.hsl.rgb = function (t) {
                var e, n, i, r, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 === s) return [o = 255 * l, o, o];
                e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
                for (var u = 0; u < 3; u++)(i = a + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, r[u] = 255 * o;
                return r
            }, r.hsl.hsv = function (t) {
                var e = t[0],
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = n,
                    o = Math.max(i, .01);
                return n *= (i *= 2) <= 1 ? i : 2 - i, r *= o <= 1 ? o : 2 - o, [e, 100 * (0 === i ? 2 * r / (o + r) : 2 * n / (i + n)), (i + n) / 2 * 100]
            }, r.hsv.rgb = function (t) {
                var e = t[0] / 60,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    a = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * o),
                    l = 255 * i * (1 - n * (1 - o));
                switch (i *= 255, r) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }, r.hsv.hsl = function (t) {
                var e, n, i, r = t[0],
                    o = t[1] / 100,
                    a = t[2] / 100,
                    s = Math.max(a, .01);
                return i = (2 - o) * a, n = o * s, [r, 100 * (n = (n /= (e = (2 - o) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)]
            }, r.hwb.rgb = function (t) {
                var e, n, i, r, o, a, s, l = t[0] / 360,
                    u = t[1] / 100,
                    c = t[2] / 100,
                    d = u + c;
                switch (d > 1 && (u /= d, c /= d), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), r = u + i * ((n = 1 - c) - u), e) {
                    default:
                    case 6:
                    case 0:
                        o = n, a = r, s = u;
                        break;
                    case 1:
                        o = r, a = n, s = u;
                        break;
                    case 2:
                        o = u, a = n, s = r;
                        break;
                    case 3:
                        o = u, a = r, s = n;
                        break;
                    case 4:
                        o = r, a = u, s = n;
                        break;
                    case 5:
                        o = n, a = u, s = r
                }
                return [255 * o, 255 * a, 255 * s]
            }, r.cmyk.rgb = function (t) {
                var e = t[0] / 100,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
            }, r.xyz.rgb = function (t) {
                var e, n, i, r = t[0] / 100,
                    o = t[1] / 100,
                    a = t[2] / 100;
                return n = -.9689 * r + 1.8758 * o + .0415 * a, i = .0557 * r + -.204 * o + 1.057 * a, e = (e = 3.2406 * r + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }, r.xyz.lab = function (t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }, r.lab.xyz = function (t) {
                var e, n, i, r = t[0];
                e = t[1] / 500 + (n = (r + 16) / 116), i = n - t[2] / 200;
                var o = Math.pow(n, 3),
                    a = Math.pow(e, 3),
                    s = Math.pow(i, 3);
                return n = o > .008856 ? o : (n - 16 / 116) / 7.787, e = a > .008856 ? a : (e - 16 / 116) / 7.787, i = s > .008856 ? s : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883]
            }, r.lab.lch = function (t) {
                var e, n = t[0],
                    i = t[1],
                    r = t[2];
                return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]
            }, r.lch.lab = function (t) {
                var e, n = t[0],
                    i = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
            }, r.rgb.ansi16 = function (t) {
                var e = t[0],
                    n = t[1],
                    i = t[2],
                    o = 1 in arguments ? arguments[1] : r.rgb.hsv(t)[2];
                if (0 === (o = Math.round(o / 50))) return 30;
                var a = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
                return 2 === o && (a += 60), a
            }, r.hsv.ansi16 = function (t) {
                return r.rgb.ansi16(r.hsv.rgb(t), t[2])
            }, r.rgb.ansi256 = function (t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5)
            }, r.ansi16.rgb = function (t) {
                var e = t % 10;
                if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
                var n = .5 * (1 + ~~(t > 50));
                return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
            }, r.ansi256.rgb = function (t) {
                if (t >= 232) {
                    var e = 10 * (t - 232) + 8;
                    return [e, e, e]
                }
                var n;
                return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
            }, r.rgb.hex = function (t) {
                var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
                return "000000".substring(e.length) + e
            }, r.hex.rgb = function (t) {
                var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!e) return [0, 0, 0];
                var n = e[0];
                3 === e[0].length && (n = n.split("").map(function (t) {
                    return t + t
                }).join(""));
                var i = parseInt(n, 16);
                return [i >> 16 & 255, i >> 8 & 255, 255 & i]
            }, r.rgb.hcg = function (t) {
                var e, n = t[0] / 255,
                    i = t[1] / 255,
                    r = t[2] / 255,
                    o = Math.max(Math.max(n, i), r),
                    a = Math.min(Math.min(n, i), r),
                    s = o - a;
                return e = s <= 0 ? 0 : o === n ? (i - r) / s % 6 : o === i ? 2 + (r - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? a / (1 - s) : 0)]
            }, r.hsl.hcg = function (t) {
                var e, n = t[1] / 100,
                    i = t[2] / 100,
                    r = 0;
                return (e = i < .5 ? 2 * n * i : 2 * n * (1 - i)) < 1 && (r = (i - .5 * e) / (1 - e)), [t[0], 100 * e, 100 * r]
            }, r.hsv.hcg = function (t) {
                var e = t[1] / 100,
                    n = t[2] / 100,
                    i = e * n,
                    r = 0;
                return i < 1 && (r = (n - i) / (1 - i)), [t[0], 100 * i, 100 * r]
            }, r.hcg.rgb = function (t) {
                var e = t[0] / 360,
                    n = t[1] / 100,
                    i = t[2] / 100;
                if (0 === n) return [255 * i, 255 * i, 255 * i];
                var r, o = [0, 0, 0],
                    a = e % 1 * 6,
                    s = a % 1,
                    l = 1 - s;
                switch (Math.floor(a)) {
                    case 0:
                        o[0] = 1, o[1] = s, o[2] = 0;
                        break;
                    case 1:
                        o[0] = l, o[1] = 1, o[2] = 0;
                        break;
                    case 2:
                        o[0] = 0, o[1] = 1, o[2] = s;
                        break;
                    case 3:
                        o[0] = 0, o[1] = l, o[2] = 1;
                        break;
                    case 4:
                        o[0] = s, o[1] = 0, o[2] = 1;
                        break;
                    default:
                        o[0] = 1, o[1] = 0, o[2] = l
                }
                return r = (1 - n) * i, [255 * (n * o[0] + r), 255 * (n * o[1] + r), 255 * (n * o[2] + r)]
            }, r.hcg.hsv = function (t) {
                var e = t[1] / 100,
                    n = e + t[2] / 100 * (1 - e),
                    i = 0;
                return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n]
            }, r.hcg.hsl = function (t) {
                var e = t[1] / 100,
                    n = t[2] / 100 * (1 - e) + .5 * e,
                    i = 0;
                return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n]
            }, r.hcg.hwb = function (t) {
                var e = t[1] / 100,
                    n = e + t[2] / 100 * (1 - e);
                return [t[0], 100 * (n - e), 100 * (1 - n)]
            }, r.hwb.hcg = function (t) {
                var e = t[1] / 100,
                    n = 1 - t[2] / 100,
                    i = n - e,
                    r = 0;
                return i < 1 && (r = (n - i) / (1 - i)), [t[0], 100 * i, 100 * r]
            }, r.apple.rgb = function (t) {
                return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
            }, r.rgb.apple = function (t) {
                return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
            }, r.gray.rgb = function (t) {
                return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
            }, r.gray.hsl = r.gray.hsv = function (t) {
                return [0, 0, t[0]]
            }, r.gray.hwb = function (t) {
                return [0, 100, t[0]]
            }, r.gray.cmyk = function (t) {
                return [0, 0, 0, t[0]]
            }, r.gray.lab = function (t) {
                return [t[0], 0, 0]
            }, r.gray.hex = function (t) {
                var e = 255 & Math.round(t[0] / 100 * 255),
                    n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                return "000000".substring(n.length) + n
            }, r.rgb.gray = function (t) {
                return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
            }
        });

    function i(t) {
        var e = function () {
                for (var t = {}, e = Object.keys(n), i = e.length, r = 0; r < i; r++) t[e[r]] = {
                    distance: -1,
                    parent: null
                };
                return t
            }(),
            i = [t];
        for (e[t].distance = 0; i.length;)
            for (var r = i.pop(), o = Object.keys(n[r]), a = o.length, s = 0; s < a; s++) {
                var l = o[s],
                    u = e[l]; - 1 === u.distance && (u.distance = e[r].distance + 1, u.parent = r, i.unshift(l))
            }
        return e
    }

    function r(t, e) {
        return function (n) {
            return e(t(n))
        }
    }

    function o(t, e) {
        for (var i = [e[t].parent, t], o = n[e[t].parent][t], a = e[t].parent; e[a].parent;) i.unshift(e[a].parent), o = r(n[e[a].parent][a], o), a = e[a].parent;
        return o.conversion = i, o
    }
    n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;
    var a = {};
    Object.keys(n).forEach(function (t) {
        a[t] = {}, Object.defineProperty(a[t], "channels", {
            value: n[t].channels
        }), Object.defineProperty(a[t], "labels", {
            value: n[t].labels
        });
        var e = function (t) {
            for (var e = i(t), n = {}, r = Object.keys(e), a = r.length, s = 0; s < a; s++) {
                var l = r[s];
                null !== e[l].parent && (n[l] = o(l, e))
            }
            return n
        }(t);
        Object.keys(e).forEach(function (n) {
            var i = e[n];
            a[t][n] = function (t) {
                var e = function (e) {
                    if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" == typeof n)
                        for (var i = n.length, r = 0; r < i; r++) n[r] = Math.round(n[r]);
                    return n
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(i), a[t][n].raw = function (t) {
                var e = function (e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(i)
        })
    });
    var s = a,
        l = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        u = {
            getRgba: c,
            getHsla: d,
            getRgb: function (t) {
                var e = c(t);
                return e && e.slice(0, 3)
            },
            getHsl: function (t) {
                var e = d(t);
                return e && e.slice(0, 3)
            },
            getHwb: h,
            getAlpha: function (t) {
                var e = c(t);
                return e || (e = d(t)) || (e = h(t)) ? e[3] : void 0
            },
            hexString: function (t, e) {
                return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + v(t[0]) + v(t[1]) + v(t[2]) + (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "")
            },
            rgbString: function (t, e) {
                return e < 1 || t[3] && t[3] < 1 ? f(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            rgbaString: f,
            percentString: function (t, e) {
                return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            },
            percentaString: p,
            hslString: function (t, e) {
                return e < 1 || t[3] && t[3] < 1 ? g(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            },
            hslaString: g,
            hwbString: function (t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            },
            keyword: function (t) {
                return b[t.slice(0, 3)]
            }
        };

    function c(t) {
        if (t) {
            var e = [0, 0, 0],
                n = 1,
                i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                r = "";
            if (i) {
                r = (i = i[1])[3];
                for (var o = 0; o < e.length; o++) e[o] = parseInt(i[o] + i[o], 16);
                r && (n = Math.round(parseInt(r + r, 16) / 255 * 100) / 100)
            } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                for (r = i[2], i = i[1], o = 0; o < e.length; o++) e[o] = parseInt(i.slice(2 * o, 2 * o + 2), 16);
                r && (n = Math.round(parseInt(r, 16) / 255 * 100) / 100)
            } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (o = 0; o < e.length; o++) e[o] = parseInt(i[o + 1]);
                n = parseFloat(i[4])
            } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(i[o + 1]));
                n = parseFloat(i[4])
            } else if (i = t.match(/(\w+)/)) {
                if ("transparent" == i[1]) return [0, 0, 0, 0];
                if (!(e = l[i[1]])) return
            }
            for (o = 0; o < e.length; o++) e[o] = m(e[o], 0, 255);
            return n = n || 0 == n ? m(n, 0, 1) : 1, e[3] = n, e
        }
    }

    function d(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function h(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function f(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function p(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function g(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function m(t, e, n) {
        return Math.min(Math.max(e, t), n)
    }

    function v(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var b = {};
    for (var y in l) b[l[y]] = y;
    var x = function (t) {
        return t instanceof x ? t : this instanceof x ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void("string" == typeof t ? (e = u.getRgba(t)) ? this.setValues("rgb", e) : (e = u.getHsla(t)) ? this.setValues("hsl", e) : (e = u.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new x(t);
        var e
    };
    x.prototype = {
        isValid: function () {
            return this.valid
        },
        rgb: function () {
            return this.setSpace("rgb", arguments)
        },
        hsl: function () {
            return this.setSpace("hsl", arguments)
        },
        hsv: function () {
            return this.setSpace("hsv", arguments)
        },
        hwb: function () {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function () {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function () {
            return this.values.rgb
        },
        hslArray: function () {
            return this.values.hsl
        },
        hsvArray: function () {
            return this.values.hsv
        },
        hwbArray: function () {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function () {
            return this.values.cmyk
        },
        rgbaArray: function () {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function () {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function (t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function (t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function (t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function (t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function (t) {
            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function (t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function (t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function (t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function (t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function (t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function (t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function (t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function (t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function (t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function (t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function () {
            return u.hexString(this.values.rgb)
        },
        rgbString: function () {
            return u.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function () {
            return u.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function () {
            return u.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function () {
            return u.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function () {
            return u.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function () {
            return u.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function () {
            return u.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function () {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function () {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                var i = t[n] / 255;
                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function (t) {
            var e = this.luminosity(),
                n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
        },
        level: function (t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function () {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function () {
            return !this.dark()
        },
        negate: function () {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function (t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function (t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function (t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function (t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function (t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function (t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function () {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function (t) {
            var e = this.values.hsl,
                n = (e[0] + t) % 360;
            return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
        },
        mix: function (t, e) {
            var n = t,
                i = void 0 === e ? .5 : e,
                r = 2 * i - 1,
                o = this.alpha() - n.alpha(),
                a = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
                s = 1 - a;
            return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
        },
        toJSON: function () {
            return this.rgb()
        },
        clone: function () {
            var t, e, n = new x,
                i = this.values,
                r = n.values;
            for (var o in i) i.hasOwnProperty(o) && (t = i[o], "[object Array]" === (e = {}.toString.call(t)) ? r[o] = t.slice(0) : "[object Number]" === e ? r[o] = t : console.error("unexpected color value:", t));
            return n
        }
    }, x.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, x.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, x.prototype.getValues = function (t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
        return 1 !== e.alpha && (n.a = e.alpha), n
    }, x.prototype.setValues = function (t, e) {
        var n, i, r = this.values,
            o = this.spaces,
            a = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;
        else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) r[t][n] = e[t.charAt(n)];
            l = e.a
        } else if (void 0 !== e[o[t][0]]) {
            var u = o[t];
            for (n = 0; n < t.length; n++) r[t][n] = e[u[n]];
            l = e.alpha
        }
        if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;
        for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(a[t][n], r[t][n])), r[t][n] = Math.round(i);
        for (var c in o) c !== t && (r[c] = s[t][c](r[t]));
        return !0
    }, x.prototype.setSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
    }, x.prototype.setChannel = function (t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : (n === i[e] || (i[e] = n, this.setValues(t, i)), this)
    }, "undefined" != typeof window && (window.Color = x);
    var w = x;

    function k(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
    }
    var _, C = {
            noop: function () {},
            uid: (_ = 0, function () {
                return _++
            }),
            isNullOrUndef: function (t) {
                return null == t
            },
            isArray: function (t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            },
            isObject: function (t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            },
            isFinite: function (t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(t)
            },
            valueOrDefault: function (t, e) {
                return void 0 === t ? e : t
            },
            valueAtIndexOrDefault: function (t, e, n) {
                return C.valueOrDefault(C.isArray(t) ? t[e] : t, n)
            },
            callback: function (t, e, n) {
                if (t && "function" == typeof t.call) return t.apply(n, e)
            },
            each: function (t, e, n, i) {
                var r, o, a;
                if (C.isArray(t))
                    if (o = t.length, i)
                        for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
                    else
                        for (r = 0; r < o; r++) e.call(n, t[r], r);
                else if (C.isObject(t))
                    for (o = (a = Object.keys(t)).length, r = 0; r < o; r++) e.call(n, t[a[r]], a[r])
            },
            arrayEquals: function (t, e) {
                var n, i, r, o;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, i = t.length; n < i; ++n)
                    if (r = t[n], o = e[n], r instanceof Array && o instanceof Array) {
                        if (!C.arrayEquals(r, o)) return !1
                    } else if (r !== o) return !1;
                return !0
            },
            clone: function (t) {
                if (C.isArray(t)) return t.map(C.clone);
                if (C.isObject(t)) {
                    for (var e = Object.create(t), n = Object.keys(t), i = n.length, r = 0; r < i; ++r) e[n[r]] = C.clone(t[n[r]]);
                    return e
                }
                return t
            },
            _merger: function (t, e, n, i) {
                if (k(t)) {
                    var r = e[t],
                        o = n[t];
                    C.isObject(r) && C.isObject(o) ? C.merge(r, o, i) : e[t] = C.clone(o)
                }
            },
            _mergerIf: function (t, e, n) {
                if (k(t)) {
                    var i = e[t],
                        r = n[t];
                    C.isObject(i) && C.isObject(r) ? C.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = C.clone(r))
                }
            },
            merge: function (t, e, n) {
                var i, r, o, a, s, l = C.isArray(e) ? e : [e],
                    u = l.length;
                if (!C.isObject(t)) return t;
                for (i = (n = n || {}).merger || C._merger, r = 0; r < u; ++r)
                    if (e = l[r], C.isObject(e))
                        for (s = 0, a = (o = Object.keys(e)).length; s < a; ++s) i(o[s], t, e, n);
                return t
            },
            mergeIf: function (t, e) {
                return C.merge(t, e, {
                    merger: C._mergerIf
                })
            },
            extend: Object.assign || function (t) {
                return C.merge(t, [].slice.call(arguments, 1), {
                    merger: function (t, e, n) {
                        e[t] = n[t]
                    }
                })
            },
            inherits: function (t) {
                var e = this,
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                        return e.apply(this, arguments)
                    },
                    i = function () {
                        this.constructor = n
                    };
                return i.prototype = e.prototype, n.prototype = new i, n.extend = C.inherits, t && C.extend(n.prototype, t), n.__super__ = e.prototype, n
            },
            _deprecated: function (t, e, n, i) {
                void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead')
            }
        },
        M = C;
    C.callCallback = C.callback, C.indexOf = function (t, e, n) {
        return Array.prototype.indexOf.call(t, e, n)
    }, C.getValueOrDefault = C.valueOrDefault, C.getValueAtIndexOrDefault = C.valueAtIndexOrDefault;
    var S = {
            linear: function (t) {
                return t
            },
            easeInQuad: function (t) {
                return t * t
            },
            easeOutQuad: function (t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function (t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function (t) {
                return t * t * t
            },
            easeOutCubic: function (t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function (t) {
                return t * t * t * t
            },
            easeOutQuart: function (t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function (t) {
                return t * t * t * t * t
            },
            easeOutQuint: function (t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function (t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function (t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function (t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function (t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function (t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            easeOutElastic: function (t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function (t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            easeInBack: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function (t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function (t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function (t) {
                return 1 - S.easeOutBounce(1 - t)
            },
            easeOutBounce: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function (t) {
                return t < .5 ? .5 * S.easeInBounce(2 * t) : .5 * S.easeOutBounce(2 * t - 1) + .5
            }
        },
        T = {
            effects: S
        };
    M.easingEffects = S;
    var A = Math.PI,
        D = A / 180,
        P = 2 * A,
        I = A / 2,
        L = A / 4,
        N = 2 * A / 3,
        O = {
            clear: function (t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function (t, e, n, i, r, o) {
                if (o) {
                    var a = Math.min(o, r / 2, i / 2),
                        s = e + a,
                        l = n + a,
                        u = e + i - a,
                        c = n + r - a;
                    t.moveTo(e, l), s < u && l < c ? (t.arc(s, l, a, -A, -I), t.arc(u, l, a, -I, 0), t.arc(u, c, a, 0, I), t.arc(s, c, a, I, A)) : s < u ? (t.moveTo(s, n), t.arc(u, l, a, -I, I), t.arc(s, l, a, I, A + I)) : l < c ? (t.arc(s, l, a, -A, 0), t.arc(s, c, a, 0, A)) : t.arc(s, l, a, -A, A), t.closePath(), t.moveTo(e, n)
                } else t.rect(e, n, i, r)
            },
            drawPoint: function (t, e, n, i, r, o) {
                var a, s, l, u, c, d = (o || 0) * D;
                if (e && "object" == typeof e && ("[object HTMLImageElement]" === (a = e.toString()) || "[object HTMLCanvasElement]" === a)) return t.save(), t.translate(i, r), t.rotate(d), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                if (!(isNaN(n) || n <= 0)) {
                    switch (t.beginPath(), e) {
                        default:
                            t.arc(i, r, n, 0, P), t.closePath();
                            break;
                        case "triangle":
                            t.moveTo(i + Math.sin(d) * n, r - Math.cos(d) * n), d += N, t.lineTo(i + Math.sin(d) * n, r - Math.cos(d) * n), d += N, t.lineTo(i + Math.sin(d) * n, r - Math.cos(d) * n), t.closePath();
                            break;
                        case "rectRounded":
                            u = n - (c = .516 * n), s = Math.cos(d + L) * u, l = Math.sin(d + L) * u, t.arc(i - s, r - l, c, d - A, d - I), t.arc(i + l, r - s, c, d - I, d), t.arc(i + s, r + l, c, d, d + I), t.arc(i - l, r + s, c, d + I, d + A), t.closePath();
                            break;
                        case "rect":
                            if (!o) {
                                u = Math.SQRT1_2 * n, t.rect(i - u, r - u, 2 * u, 2 * u);
                                break
                            }
                            d += L;
                        case "rectRot":
                            s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(i - s, r - l), t.lineTo(i + l, r - s), t.lineTo(i + s, r + l), t.lineTo(i - l, r + s), t.closePath();
                            break;
                        case "crossRot":
                            d += L;
                        case "cross":
                            s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
                            break;
                        case "star":
                            s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s), d += L, s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
                            break;
                        case "line":
                            s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l);
                            break;
                        case "dash":
                            t.moveTo(i, r), t.lineTo(i + Math.cos(d) * n, r + Math.sin(d) * n)
                    }
                    t.fill(), t.stroke()
                }
            },
            _isPointInArea: function (t, e) {
                return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
            },
            clipArea: function (t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            },
            unclipArea: function (t) {
                t.restore()
            },
            lineTo: function (t, e, n, i) {
                var r = n.steppedLine;
                if (r) {
                    if ("middle" === r) {
                        var o = (e.x + n.x) / 2;
                        t.lineTo(o, i ? n.y : e.y), t.lineTo(o, i ? e.y : n.y)
                    } else "after" === r && !i || "after" !== r && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                    t.lineTo(n.x, n.y)
                } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
            }
        },
        E = O;
    M.clear = O.clear, M.drawRoundedRectangle = function (t) {
        t.beginPath(), O.roundedRect.apply(O, arguments)
    };
    var F = {
        _set: function (t, e) {
            return M.merge(this[t] || (this[t] = {}), e)
        }
    };
    F._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var R = F,
        j = M.valueOrDefault,
        z = {
            toLineHeight: function (t, e) {
                var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!n || "normal" === n[1]) return 1.2 * e;
                switch (t = +n[2], n[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            },
            toPadding: function (t) {
                var e, n, i, r;
                return M.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, r = +t.left || 0) : e = n = i = r = +t || 0, {
                    top: e,
                    right: n,
                    bottom: i,
                    left: r,
                    height: e + i,
                    width: r + n
                }
            },
            _parseFont: function (t) {
                var e = R.global,
                    n = j(t.fontSize, e.defaultFontSize),
                    i = {
                        family: j(t.fontFamily, e.defaultFontFamily),
                        lineHeight: M.options.toLineHeight(j(t.lineHeight, e.defaultLineHeight), n),
                        size: n,
                        style: j(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                return i.string = function (t) {
                    return !t || M.isNullOrUndef(t.size) || M.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(i), i
            },
            resolve: function (t, e, n, i) {
                var r, o, a, s = !0;
                for (r = 0, o = t.length; r < o; ++r)
                    if (void 0 !== (a = t[r]) && (void 0 !== e && "function" == typeof a && (a = a(e), s = !1), void 0 !== n && M.isArray(a) && (a = a[n], s = !1), void 0 !== a)) return i && !s && (i.cacheable = !1), a
            }
        },
        B = {
            _factorize: function (t) {
                var e, n = [],
                    i = Math.sqrt(t);
                for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
                return i === (0 | i) && n.push(i), n.sort(function (t, e) {
                    return t - e
                }).pop(), n
            },
            log10: Math.log10 || function (t) {
                var e = Math.log(t) * Math.LOG10E,
                    n = Math.round(e);
                return t === Math.pow(10, n) ? n : e
            }
        },
        W = B;
    M.log10 = B.log10;
    var H = M,
        V = T,
        q = E,
        U = z,
        Y = W;
    H.easing = V, H.canvas = q, H.options = U, H.math = Y, H.rtl = {
        getRtlAdapter: function (t, e, n) {
            return t ? function (t, e) {
                return {
                    x: function (n) {
                        return t + t + e - n
                    },
                    setWidth: function (t) {
                        e = t
                    },
                    textAlign: function (t) {
                        return "center" === t ? t : "right" === t ? "left" : "right"
                    },
                    xPlus: function (t, e) {
                        return t - e
                    },
                    leftForLtr: function (t, e) {
                        return t - e
                    }
                }
            }(e, n) : {
                x: function (t) {
                    return t
                },
                setWidth: function (t) {},
                textAlign: function (t) {
                    return t
                },
                xPlus: function (t, e) {
                    return t + e
                },
                leftForLtr: function (t, e) {
                    return t
                }
            }
        },
        overrideTextDirection: function (t, e) {
            var n, i;
            "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i)
        },
        restoreTextDirection: function (t) {
            var e = t.prevTextDirection;
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
        }
    };
    var $ = function (t) {
        H.extend(this, t), this.initialize.apply(this, arguments)
    };
    H.extend($.prototype, {
        _type: void 0,
        initialize: function () {
            this.hidden = !1
        },
        pivot: function () {
            var t = this;
            return t._view || (t._view = H.extend({}, t._model)), t._start = {}, t
        },
        transition: function (t) {
            var e = this,
                n = e._model,
                i = e._start,
                r = e._view;
            return n && 1 !== t ? (r || (r = e._view = {}), i || (i = e._start = {}), function (t, e, n, i) {
                var r, o, a, s, l, u, c, d, h, f = Object.keys(n);
                for (r = 0, o = f.length; r < o; ++r)
                    if (u = n[a = f[r]], e.hasOwnProperty(a) || (e[a] = u), (s = e[a]) !== u && "_" !== a[0]) {
                        if (t.hasOwnProperty(a) || (t[a] = s), (c = typeof u) == typeof (l = t[a]))
                            if ("string" === c) {
                                if ((d = w(l)).valid && (h = w(u)).valid) {
                                    e[a] = h.mix(d, i).rgbString();
                                    continue
                                }
                            } else if (H.isFinite(l) && H.isFinite(u)) {
                            e[a] = l + (u - l) * i;
                            continue
                        }
                        e[a] = u
                    }
            }(i, r, n, t), e) : (e._view = H.extend({}, n), e._start = null, e)
        },
        tooltipPosition: function () {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function () {
            return H.isNumber(this._model.x) && H.isNumber(this._model.y)
        }
    }), $.extend = H.inherits;
    var X = $,
        G = X.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }),
        K = G;
    Object.defineProperty(G.prototype, "animationObject", {
        get: function () {
            return this
        }
    }), Object.defineProperty(G.prototype, "chartInstance", {
        get: function () {
            return this.chart
        },
        set: function (t) {
            this.chart = t
        }
    }), R._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: H.noop,
            onComplete: H.noop
        }
    });
    var Q = {
            animations: [],
            request: null,
            addAnimation: function (t, e, n, i) {
                var r, o, a = this.animations;
                for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), r = 0, o = a.length; r < o; ++r)
                    if (a[r].chart === t) return void(a[r] = e);
                a.push(e), 1 === a.length && this.requestAnimationFrame()
            },
            cancelAnimation: function (t) {
                var e = H.findIndex(this.animations, function (e) {
                    return e.chart === t
                }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
            },
            requestAnimationFrame: function () {
                var t = this;
                null === t.request && (t.request = H.requestAnimFrame.call(window, function () {
                    t.request = null, t.startDigest()
                }))
            },
            startDigest: function () {
                this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
            },
            advance: function () {
                for (var t, e, n, i, r = this.animations, o = 0; o < r.length;) e = (t = r[o]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), H.callback(t.render, [e, t], e), H.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (H.callback(t.onAnimationComplete, [t], e), e.animating = !1, r.splice(o, 1)) : ++o
            }
        },
        Z = H.options.resolve,
        J = ["push", "pop", "shift", "splice", "unshift"];

    function tt(t, e) {
        var n = t._chartjs;
        if (n) {
            var i = n.listeners,
                r = i.indexOf(e); - 1 !== r && i.splice(r, 1), i.length > 0 || (J.forEach(function (e) {
                delete t[e]
            }), delete t._chartjs)
        }
    }
    var et = function (t, e) {
        this.initialize(t, e)
    };
    H.extend(et.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
        initialize: function (t, e) {
            var n = this;
            n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type
        },
        updateIndex: function (t) {
            this.index = t
        },
        linkScales: function () {
            var t = this.getMeta(),
                e = this.chart,
                n = e.scales,
                i = this.getDataset(),
                r = e.options.scales;
            null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || r.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || r.yAxes[0].id)
        },
        getDataset: function () {
            return this.chart.data.datasets[this.index]
        },
        getMeta: function () {
            return this.chart.getDatasetMeta(this.index)
        },
        getScaleForId: function (t) {
            return this.chart.scales[t]
        },
        _getValueScaleId: function () {
            return this.getMeta().yAxisID
        },
        _getIndexScaleId: function () {
            return this.getMeta().xAxisID
        },
        _getValueScale: function () {
            return this.getScaleForId(this._getValueScaleId())
        },
        _getIndexScale: function () {
            return this.getScaleForId(this._getIndexScaleId())
        },
        reset: function () {
            this._update(!0)
        },
        destroy: function () {
            this._data && tt(this._data, this)
        },
        createMetaDataset: function () {
            var t = this.datasetElementType;
            return t && new t({
                _chart: this.chart,
                _datasetIndex: this.index
            })
        },
        createMetaData: function (t) {
            var e = this.dataElementType;
            return e && new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t
            })
        },
        addElements: function () {
            var t, e, n = this.getMeta(),
                i = this.getDataset().data || [],
                r = n.data;
            for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
            n.dataset = n.dataset || this.createMetaDataset()
        },
        addElementAndReset: function (t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function () {
            var t, e, n = this,
                i = n.getDataset(),
                r = i.data || (i.data = []);
            n._data !== r && (n._data && tt(n._data, n), r && Object.isExtensible(r) && (e = n, (t = r)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [e]
                }
            }), J.forEach(function (e) {
                var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                    i = t[e];
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: function () {
                        var e = Array.prototype.slice.call(arguments),
                            r = i.apply(this, e);
                        return H.each(t._chartjs.listeners, function (t) {
                            "function" == typeof t[n] && t[n].apply(t, e)
                        }), r
                    }
                })
            }))), n._data = r), n.resyncElements()
        },
        _configure: function () {
            this._config = H.merge(Object.create(null), [this.chart.options.datasets[this._type], this.getDataset()], {
                merger: function (t, e, n) {
                    "_meta" !== t && "data" !== t && H._merger(t, e, n)
                }
            })
        },
        _update: function (t) {
            this._configure(), this._cachedDataOpts = null, this.update(t)
        },
        update: H.noop,
        transition: function (t) {
            for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function () {
            var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0;
            for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
        },
        getStyle: function (t) {
            var e, n = this.getMeta(),
                i = n.dataset;
            return this._configure(), i && void 0 === t ? e = this._resolveDatasetElementOptions(i || {}) : (t = t || 0, e = this._resolveDataElementOptions(n.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
        },
        _resolveDatasetElementOptions: function (t, e) {
            var n, i, r, o, a = this,
                s = a.chart,
                l = a._config,
                u = t.custom || {},
                c = s.options.elements[a.datasetElementType.prototype._type] || {},
                d = a._datasetElementOptions,
                h = {},
                f = {
                    chart: s,
                    dataset: a.getDataset(),
                    datasetIndex: a.index,
                    hover: e
                };
            for (n = 0, i = d.length; n < i; ++n) r = d[n], o = e ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, h[r] = Z([u[o], l[o], c[o]], f);
            return h
        },
        _resolveDataElementOptions: function (t, e) {
            var n = this,
                i = t && t.custom,
                r = n._cachedDataOpts;
            if (r && !i) return r;
            var o, a, s, l, u = n.chart,
                c = n._config,
                d = u.options.elements[n.dataElementType.prototype._type] || {},
                h = n._dataElementOptions,
                f = {},
                p = {
                    chart: u,
                    dataIndex: e,
                    dataset: n.getDataset(),
                    datasetIndex: n.index
                },
                g = {
                    cacheable: !i
                };
            if (i = i || {}, H.isArray(h))
                for (a = 0, s = h.length; a < s; ++a) f[l = h[a]] = Z([i[l], c[l], d[l]], p, e, g);
            else
                for (a = 0, s = (o = Object.keys(h)).length; a < s; ++a) f[l = o[a]] = Z([i[l], c[h[l]], c[l], d[l]], p, e, g);
            return g.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
        },
        removeHoverStyle: function (t) {
            H.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function (t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                r = t._model,
                o = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: r.backgroundColor,
                borderColor: r.borderColor,
                borderWidth: r.borderWidth
            }, r.backgroundColor = Z([i.hoverBackgroundColor, e.hoverBackgroundColor, o(r.backgroundColor)], void 0, n), r.borderColor = Z([i.hoverBorderColor, e.hoverBorderColor, o(r.borderColor)], void 0, n), r.borderWidth = Z([i.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, n)
        },
        _removeDatasetHoverStyle: function () {
            var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t)
        },
        _setDatasetHoverStyle: function () {
            var t, e, n, i, r, o, a = this.getMeta().dataset,
                s = {};
            if (a) {
                for (o = a._model, r = this._resolveDatasetElementOptions(a, !0), t = 0, e = (i = Object.keys(r)).length; t < e; ++t) s[n = i[t]] = o[n], o[n] = r[n];
                a.$previousStyle = s
            }
        },
        resyncElements: function () {
            var t = this.getMeta(),
                e = this.getDataset().data,
                n = t.data.length,
                i = e.length;
            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
        },
        insertElements: function (t, e) {
            for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
        },
        onDataPush: function () {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t)
        },
        onDataPop: function () {
            this.getMeta().data.pop()
        },
        onDataShift: function () {
            this.getMeta().data.shift()
        },
        onDataSplice: function (t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
        },
        onDataUnshift: function () {
            this.insertElements(0, arguments.length)
        }
    }), et.extend = H.inherits;
    var nt = et,
        it = 2 * Math.PI;

    function rt(t, e) {
        var n = e.startAngle,
            i = e.endAngle,
            r = e.pixelMargin,
            o = r / e.outerRadius,
            a = e.x,
            s = e.y;
        t.beginPath(), t.arc(a, s, e.outerRadius, n - o, i + o), e.innerRadius > r ? (o = r / e.innerRadius, t.arc(a, s, e.innerRadius - r, i + o, n - o, !0)) : t.arc(a, s, r, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip()
    }
    R._set("global", {
        elements: {
            arc: {
                backgroundColor: R.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var ot = X.extend({
            _type: "arc",
            inLabelRange: function (t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function (t, e) {
                var n = this._view;
                if (n) {
                    for (var i = H.getAngleFromPoint(n, {
                            x: t,
                            y: e
                        }), r = i.angle, o = i.distance, a = n.startAngle, s = n.endAngle; s < a;) s += it;
                    for (; r > s;) r -= it;
                    for (; r < a;) r += it;
                    var l = r >= a && r <= s,
                        u = o >= n.innerRadius && o <= n.outerRadius;
                    return l && u
                }
                return !1
            },
            getCenterPoint: function () {
                var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    n = (t.innerRadius + t.outerRadius) / 2;
                return {
                    x: t.x + Math.cos(e) * n,
                    y: t.y + Math.sin(e) * n
                }
            },
            getArea: function () {
                var t = this._view;
                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function () {
                var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return {
                    x: t.x + Math.cos(e) * n,
                    y: t.y + Math.sin(e) * n
                }
            },
            draw: function () {
                var t, e = this._chart.ctx,
                    n = this._view,
                    i = "inner" === n.borderAlign ? .33 : 0,
                    r = {
                        x: n.x,
                        y: n.y,
                        innerRadius: n.innerRadius,
                        outerRadius: Math.max(n.outerRadius - i, 0),
                        pixelMargin: i,
                        startAngle: n.startAngle,
                        endAngle: n.endAngle,
                        fullCircles: Math.floor(n.circumference / it)
                    };
                if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, r.fullCircles) {
                    for (r.endAngle = r.startAngle + it, e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), t = 0; t < r.fullCircles; ++t) e.fill();
                    r.endAngle = r.startAngle + n.circumference % it
                }
                e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && function (t, e, n) {
                    var i = "inner" === e.borderAlign;
                    i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function (t, e, n, i) {
                        var r, o = n.endAngle;
                        for (i && (n.endAngle = n.startAngle + it, rt(t, n), n.endAngle = o, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += it, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + it, n.startAngle, !0), r = 0; r < n.fullCircles; ++r) t.stroke();
                        for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + it), r = 0; r < n.fullCircles; ++r) t.stroke()
                    }(t, e, n, i), i && rt(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke()
                }(e, n, r), e.restore()
            }
        }),
        at = H.valueOrDefault,
        st = R.global.defaultColor;
    R._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: st,
                borderWidth: 3,
                borderColor: st,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var lt = X.extend({
            _type: "line",
            draw: function () {
                var t, e, n, i = this,
                    r = i._view,
                    o = i._chart.ctx,
                    a = r.spanGaps,
                    s = i._children.slice(),
                    l = R.global,
                    u = l.elements.line,
                    c = -1,
                    d = i._loop;
                if (s.length) {
                    if (i._loop) {
                        for (t = 0; t < s.length; ++t)
                            if (e = H.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                                s = s.slice(t).concat(s.slice(0, t)), d = a;
                                break
                            } d && s.push(s[0])
                    }
                    for (o.save(), o.lineCap = r.borderCapStyle || u.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || u.borderDash), o.lineDashOffset = at(r.borderDashOffset, u.borderDashOffset), o.lineJoin = r.borderJoinStyle || u.borderJoinStyle, o.lineWidth = at(r.borderWidth, u.borderWidth), o.strokeStyle = r.borderColor || l.defaultColor, o.beginPath(), (n = s[0]._view).skip || (o.moveTo(n.x, n.y), c = 0), t = 1; t < s.length; ++t) n = s[t]._view, e = -1 === c ? H.previousItem(s, t) : s[c], n.skip || (c !== t - 1 && !a || -1 === c ? o.moveTo(n.x, n.y) : H.canvas.lineTo(o, e._view, n), c = t);
                    d && o.closePath(), o.stroke(), o.restore()
                }
            }
        }),
        ut = H.valueOrDefault,
        ct = R.global.defaultColor;

    function dt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }
    R._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: ct,
                borderColor: ct,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var ht = X.extend({
            _type: "point",
            inRange: function (t, e) {
                var n = this._view;
                return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
            },
            inLabelRange: dt,
            inXRange: dt,
            inYRange: function (t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            },
            getCenterPoint: function () {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            },
            getArea: function () {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function () {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y,
                    padding: t.radius + t.borderWidth
                }
            },
            draw: function (t) {
                var e = this._view,
                    n = this._chart.ctx,
                    i = e.pointStyle,
                    r = e.rotation,
                    o = e.radius,
                    a = e.x,
                    s = e.y,
                    l = R.global,
                    u = l.defaultColor;
                e.skip || (void 0 === t || H.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = ut(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, H.canvas.drawPoint(n, i, o, a, s, r))
            }
        }),
        ft = R.global.defaultColor;

    function pt(t) {
        return t && void 0 !== t.width
    }

    function gt(t) {
        var e, n, i, r, o;
        return pt(t) ? (o = t.width / 2, e = t.x - o, n = t.x + o, i = Math.min(t.y, t.base), r = Math.max(t.y, t.base)) : (o = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - o, r = t.y + o), {
            left: e,
            top: i,
            right: n,
            bottom: r
        }
    }

    function mt(t, e, n) {
        return t === e ? n : t === n ? e : t
    }

    function vt(t, e, n) {
        var i = null === e,
            r = null === n,
            o = !(!t || i && r) && gt(t);
        return o && (i || e >= o.left && e <= o.right) && (r || n >= o.top && n <= o.bottom)
    }
    R._set("global", {
        elements: {
            rectangle: {
                backgroundColor: ft,
                borderColor: ft,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var bt = X.extend({
            _type: "rectangle",
            draw: function () {
                var t = this._chart.ctx,
                    e = this._view,
                    n = function (t) {
                        var e = gt(t),
                            n = e.right - e.left,
                            i = e.bottom - e.top,
                            r = function (t, e, n) {
                                var i, r, o, a, s = t.borderWidth,
                                    l = function (t) {
                                        var e = t.borderSkipped,
                                            n = {};
                                        return e ? (t.horizontal ? t.base > t.x && (e = mt(e, "left", "right")) : t.base < t.y && (e = mt(e, "bottom", "top")), n[e] = !0, n) : n
                                    }(t);
                                return H.isObject(s) ? (i = +s.top || 0, r = +s.right || 0, o = +s.bottom || 0, a = +s.left || 0) : i = r = o = a = +s || 0, {
                                    t: l.top || i < 0 ? 0 : i > n ? n : i,
                                    r: l.right || r < 0 ? 0 : r > e ? e : r,
                                    b: l.bottom || o < 0 ? 0 : o > n ? n : o,
                                    l: l.left || a < 0 ? 0 : a > e ? e : a
                                }
                            }(t, n / 2, i / 2);
                        return {
                            outer: {
                                x: e.left,
                                y: e.top,
                                w: n,
                                h: i
                            },
                            inner: {
                                x: e.left + r.l,
                                y: e.top + r.t,
                                w: n - r.l - r.r,
                                h: i - r.t - r.b
                            }
                        }
                    }(e),
                    i = n.outer,
                    r = n.inner;
                t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === r.w && i.h === r.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(r.x, r.y, r.w, r.h), t.fill("evenodd"), t.restore())
            },
            height: function () {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function (t, e) {
                return vt(this._view, t, e)
            },
            inLabelRange: function (t, e) {
                var n = this._view;
                return pt(n) ? vt(n, t, null) : vt(n, null, e)
            },
            inXRange: function (t) {
                return vt(this._view, t, null)
            },
            inYRange: function (t) {
                return vt(this._view, null, t)
            },
            getCenterPoint: function () {
                var t, e, n = this._view;
                return pt(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                    x: t,
                    y: e
                }
            },
            getArea: function () {
                var t = this._view;
                return pt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
            },
            tooltipPosition: function () {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            }
        }),
        yt = {},
        xt = ot,
        wt = lt,
        kt = ht,
        _t = bt;
    yt.Arc = xt, yt.Line = wt, yt.Point = kt, yt.Rectangle = _t;
    var Ct = H._deprecated,
        Mt = H.valueOrDefault;
    R._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    }), R._set("global", {
        datasets: {
            bar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var St = nt.extend({
            dataElementType: yt.Rectangle,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
            initialize: function () {
                var t, e, n = this;
                nt.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, Ct("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Ct("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Ct("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Ct("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Ct("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
            },
            update: function (t) {
                var e, n, i = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
            },
            updateElement: function (t, e, n) {
                var i = this,
                    r = i.getMeta(),
                    o = i.getDataset(),
                    a = i._resolveDataElementOptions(t, e);
                t._xScale = i.getScaleForId(r.xAxisID), t._yScale = i.getScaleForId(r.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                    backgroundColor: a.backgroundColor,
                    borderColor: a.borderColor,
                    borderSkipped: a.borderSkipped,
                    borderWidth: a.borderWidth,
                    datasetLabel: o.label,
                    label: i.chart.data.labels[e]
                }, H.isArray(o.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, a), t.pivot()
            },
            _updateElementGeometry: function (t, e, n, i) {
                var r = this,
                    o = t._model,
                    a = r._getValueScale(),
                    s = a.getBasePixel(),
                    l = a.isHorizontal(),
                    u = r._ruler || r.getRuler(),
                    c = r.calculateBarValuePixels(r.index, e, i),
                    d = r.calculateBarIndexPixels(r.index, e, u, i);
                o.horizontal = l, o.base = n ? s : c.base, o.x = l ? n ? s : c.head : d.center, o.y = l ? d.center : n ? s : c.head, o.height = l ? d.size : void 0, o.width = l ? void 0 : d.size
            },
            _getStacks: function (t) {
                var e, n, i = this._getIndexScale(),
                    r = i._getMatchingVisibleMetas(this._type),
                    o = i.options.stacked,
                    a = r.length,
                    s = [];
                for (e = 0; e < a && (n = r[e], (!1 === o || -1 === s.indexOf(n.stack) || void 0 === o && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e);
                return s
            },
            getStackCount: function () {
                return this._getStacks().length
            },
            getStackIndex: function (t, e) {
                var n = this._getStacks(t),
                    i = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === i ? n.length - 1 : i
            },
            getRuler: function () {
                var t, e, n = this._getIndexScale(),
                    i = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t) i.push(n.getPixelForValue(null, t, this.index));
                return {
                    pixels: i,
                    start: n._startPixel,
                    end: n._endPixel,
                    stackCount: this.getStackCount(),
                    scale: n
                }
            },
            calculateBarValuePixels: function (t, e, n) {
                var i, r, o, a, s, l, u, c = this.chart,
                    d = this._getValueScale(),
                    h = d.isHorizontal(),
                    f = c.data.datasets,
                    p = d._getMatchingVisibleMetas(this._type),
                    g = d._parseValue(f[t].data[e]),
                    m = n.minBarLength,
                    v = d.options.stacked,
                    b = this.getMeta().stack,
                    y = void 0 === g.start ? 0 : g.max >= 0 && g.min >= 0 ? g.min : g.max,
                    x = void 0 === g.start ? g.end : g.max >= 0 && g.min >= 0 ? g.max - g.min : g.min - g.max,
                    w = p.length;
                if (v || void 0 === v && void 0 !== b)
                    for (i = 0; i < w && (r = p[i]).index !== t; ++i) r.stack === b && (o = void 0 === (u = d._parseValue(f[r.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (g.min < 0 && o < 0 || g.max >= 0 && o > 0) && (y += o));
                return a = d.getPixelForValue(y), l = (s = d.getPixelForValue(y + x)) - a, void 0 !== m && Math.abs(l) < m && (l = m, s = x >= 0 && !h || x < 0 && h ? a - m : a + m), {
                    size: l,
                    base: a,
                    head: s,
                    center: s + l / 2
                }
            },
            calculateBarIndexPixels: function (t, e, n, i) {
                var r = "flex" === i.barThickness ? function (t, e, n) {
                        var i, r = e.pixels,
                            o = r[t],
                            a = t > 0 ? r[t - 1] : null,
                            s = t < r.length - 1 ? r[t + 1] : null,
                            l = n.categoryPercentage;
                        return null === a && (a = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - a), i = o - (o - Math.min(a, s)) / 2 * l, {
                            chunk: Math.abs(s - a) / 2 * l / e.stackCount,
                            ratio: n.barPercentage,
                            start: i
                        }
                    }(e, n, i) : function (t, e, n) {
                        var i, r, o = n.barThickness,
                            a = e.stackCount,
                            s = e.pixels[t],
                            l = H.isNullOrUndef(o) ? function (t, e) {
                                var n, i, r, o, a = t._length;
                                for (r = 1, o = e.length; r < o; ++r) a = Math.min(a, Math.abs(e[r] - e[r - 1]));
                                for (r = 0, o = t.getTicks().length; r < o; ++r) i = t.getPixelForTick(r), a = r > 0 ? Math.min(a, Math.abs(i - n)) : a, n = i;
                                return a
                            }(e.scale, e.pixels) : -1;
                        return H.isNullOrUndef(o) ? (i = l * n.categoryPercentage, r = n.barPercentage) : (i = o * a, r = 1), {
                            chunk: i / a,
                            ratio: r,
                            start: s - i / 2
                        }
                    }(e, n, i),
                    o = this.getStackIndex(t, this.getMeta().stack),
                    a = r.start + r.chunk * o + r.chunk / 2,
                    s = Math.min(Mt(i.maxBarThickness, 1 / 0), r.chunk * r.ratio);
                return {
                    base: a - s / 2,
                    head: a + s / 2,
                    center: a,
                    size: s
                }
            },
            draw: function () {
                var t = this.chart,
                    e = this._getValueScale(),
                    n = this.getMeta().data,
                    i = this.getDataset(),
                    r = n.length,
                    o = 0;
                for (H.canvas.clipArea(t.ctx, t.chartArea); o < r; ++o) {
                    var a = e._parseValue(i.data[o]);
                    isNaN(a.min) || isNaN(a.max) || n[o].draw()
                }
                H.canvas.unclipArea(t.ctx)
            },
            _resolveDataElementOptions: function () {
                var t = this,
                    e = H.extend({}, nt.prototype._resolveDataElementOptions.apply(t, arguments)),
                    n = t._getIndexScale().options,
                    i = t._getValueScale().options;
                return e.barPercentage = Mt(n.barPercentage, e.barPercentage), e.barThickness = Mt(n.barThickness, e.barThickness), e.categoryPercentage = Mt(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = Mt(n.maxBarThickness, e.maxBarThickness), e.minBarLength = Mt(i.minBarLength, e.minBarLength), e
            }
        }),
        Tt = H.valueOrDefault,
        At = H.options.resolve;
    R._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function () {
                    return ""
                },
                label: function (t, e) {
                    var n = e.datasets[t.datasetIndex].label || "",
                        i = e.datasets[t.datasetIndex].data[t.index];
                    return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                }
            }
        }
    });
    var Dt = nt.extend({
            dataElementType: yt.Point,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
            update: function (t) {
                var e = this,
                    n = e.getMeta().data;
                H.each(n, function (n, i) {
                    e.updateElement(n, i, t)
                })
            },
            updateElement: function (t, e, n) {
                var i = this,
                    r = i.getMeta(),
                    o = t.custom || {},
                    a = i.getScaleForId(r.xAxisID),
                    s = i.getScaleForId(r.yAxisID),
                    l = i._resolveDataElementOptions(t, e),
                    u = i.getDataset().data[e],
                    c = i.index,
                    d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, e, c),
                    h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    borderWidth: l.borderWidth,
                    hitRadius: l.hitRadius,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    radius: n ? 0 : l.radius,
                    skip: o.skip || isNaN(d) || isNaN(h),
                    x: d,
                    y: h
                }, t.pivot()
            },
            setHoverStyle: function (t) {
                var e = t._model,
                    n = t._options,
                    i = H.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Tt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Tt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Tt(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
            },
            _resolveDataElementOptions: function (t, e) {
                var n = this,
                    i = n.chart,
                    r = n.getDataset(),
                    o = t.custom || {},
                    a = r.data[e] || {},
                    s = nt.prototype._resolveDataElementOptions.apply(n, arguments),
                    l = {
                        chart: i,
                        dataIndex: e,
                        dataset: r,
                        datasetIndex: n.index
                    };
                return n._cachedDataOpts === s && (s = H.extend({}, s)), s.radius = At([o.radius, a.r, n._config.radius, i.options.elements.point.radius], l, e), s
            }
        }),
        Pt = H.valueOrDefault,
        It = Math.PI,
        Lt = 2 * It,
        Nt = It / 2;
    R._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function (t) {
            var e, n, i, r = document.createElement("ul"),
                o = t.data,
                a = o.datasets,
                s = o.labels;
            if (r.setAttribute("class", t.id + "-legend"), a.length)
                for (e = 0, n = a[0].data.length; e < n; ++e)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return r.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function (t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                        var r = t.getDatasetMeta(0),
                            o = r.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: o.backgroundColor,
                            strokeStyle: o.borderColor,
                            lineWidth: o.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden,
                            index: i
                        }
                    }) : []
                }
            },
            onClick: function (t, e) {
                var n, i, r, o = e.index,
                    a = this.chart;
                for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
                a.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -Nt,
        circumference: Lt,
        tooltips: {
            callbacks: {
                title: function () {
                    return ""
                },
                label: function (t, e) {
                    var n = e.labels[t.index],
                        i = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return H.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                }
            }
        }
    });
    var Ot = nt.extend({
        dataElementType: yt.Arc,
        linkScales: H.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        getRingIndex: function (t) {
            for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
            return e
        },
        update: function (t) {
            var e, n, i, r, o = this,
                a = o.chart,
                s = a.chartArea,
                l = a.options,
                u = 1,
                c = 1,
                d = 0,
                h = 0,
                f = o.getMeta(),
                p = f.data,
                g = l.cutoutPercentage / 100 || 0,
                m = l.circumference,
                v = o._getRingWeight(o.index);
            if (m < Lt) {
                var b = l.rotation % Lt,
                    y = (b += b >= It ? -Lt : b < -It ? Lt : 0) + m,
                    x = Math.cos(b),
                    w = Math.sin(b),
                    k = Math.cos(y),
                    _ = Math.sin(y),
                    C = b <= 0 && y >= 0 || y >= Lt,
                    M = b <= Nt && y >= Nt || y >= Lt + Nt,
                    S = b <= -Nt && y >= -Nt || y >= It + Nt,
                    T = b === -It || y >= It ? -1 : Math.min(x, x * g, k, k * g),
                    A = S ? -1 : Math.min(w, w * g, _, _ * g),
                    D = C ? 1 : Math.max(x, x * g, k, k * g),
                    P = M ? 1 : Math.max(w, w * g, _, _ * g);
                u = (D - T) / 2, c = (P - A) / 2, d = -(D + T) / 2, h = -(P + A) / 2
            }
            for (i = 0, r = p.length; i < r; ++i) p[i]._options = o._resolveDataElementOptions(p[i], i);
            for (a.borderWidth = o.getMaxBorderWidth(), e = (s.right - s.left - a.borderWidth) / u, n = (s.bottom - s.top - a.borderWidth) / c, a.outerRadius = Math.max(Math.min(e, n) / 2, 0), a.innerRadius = Math.max(a.outerRadius * g, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (o._getVisibleDatasetWeightTotal() || 1), a.offsetX = d * a.outerRadius, a.offsetY = h * a.outerRadius, f.total = o.calculateTotal(), o.outerRadius = a.outerRadius - a.radiusLength * o._getRingWeightOffset(o.index), o.innerRadius = Math.max(o.outerRadius - a.radiusLength * v, 0), i = 0, r = p.length; i < r; ++i) o.updateElement(p[i], i, t)
        },
        updateElement: function (t, e, n) {
            var i = this,
                r = i.chart,
                o = r.chartArea,
                a = r.options,
                s = a.animation,
                l = (o.left + o.right) / 2,
                u = (o.top + o.bottom) / 2,
                c = a.rotation,
                d = a.rotation,
                h = i.getDataset(),
                f = n && s.animateRotate || t.hidden ? 0 : i.calculateCircumference(h.data[e]) * (a.circumference / Lt),
                p = n && s.animateScale ? 0 : i.innerRadius,
                g = n && s.animateScale ? 0 : i.outerRadius,
                m = t._options || {};
            H.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _model: {
                    backgroundColor: m.backgroundColor,
                    borderColor: m.borderColor,
                    borderWidth: m.borderWidth,
                    borderAlign: m.borderAlign,
                    x: l + r.offsetX,
                    y: u + r.offsetY,
                    startAngle: c,
                    endAngle: d,
                    circumference: f,
                    outerRadius: g,
                    innerRadius: p,
                    label: H.valueAtIndexOrDefault(h.label, e, r.data.labels[e])
                }
            });
            var v = t._model;
            n && s.animateRotate || (v.startAngle = 0 === e ? a.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
        },
        calculateTotal: function () {
            var t, e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return H.each(n.data, function (n, r) {
                t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t))
            }), i
        },
        calculateCircumference: function (t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? Lt * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function (t) {
            var e, n, i, r, o, a, s, l, u = 0,
                c = this.chart;
            if (!t)
                for (e = 0, n = c.data.datasets.length; e < n; ++e)
                    if (c.isDatasetVisible(e)) {
                        t = (i = c.getDatasetMeta(e)).data, e !== this.index && (o = i.controller);
                        break
                    } if (!t) return 0;
            for (e = 0, n = t.length; e < n; ++e) r = t[e], o ? (o._configure(), a = o._resolveDataElementOptions(r, e)) : a = r._options, "inner" !== a.borderAlign && (s = a.borderWidth, u = (l = a.hoverBorderWidth) > (u = s > u ? s : u) ? l : u);
            return u
        },
        setHoverStyle: function (t) {
            var e = t._model,
                n = t._options,
                i = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = Pt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Pt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Pt(n.hoverBorderWidth, n.borderWidth)
        },
        _getRingWeightOffset: function (t) {
            for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e
        },
        _getRingWeight: function (t) {
            return Math.max(Pt(this.chart.data.datasets[t].weight, 1), 0)
        },
        _getVisibleDatasetWeightTotal: function () {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
        }
    });
    R._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    }), R._set("global", {
        datasets: {
            horizontalBar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var Et = St.extend({
            _getValueScaleId: function () {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function () {
                return this.getMeta().yAxisID
            }
        }),
        Ft = H.valueOrDefault,
        Rt = H.options.resolve,
        jt = H.canvas._isPointInArea;

    function zt(t, e) {
        var n = t && t.options.ticks || {},
            i = n.reverse,
            r = void 0 === n.min ? e : 0,
            o = void 0 === n.max ? e : 0;
        return {
            start: i ? o : r,
            end: i ? r : o
        }
    }

    function Bt(t, e, n) {
        var i = n / 2,
            r = zt(t, i),
            o = zt(e, i);
        return {
            top: o.end,
            right: r.end,
            bottom: o.start,
            left: r.start
        }
    }

    function Wt(t) {
        var e, n, i, r;
        return H.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, r = t.left) : e = n = i = r = t, {
            top: e,
            right: n,
            bottom: i,
            left: r
        }
    }
    R._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    });
    var Ht = nt.extend({
            datasetElementType: yt.Line,
            dataElementType: yt.Point,
            _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
            _dataElementOptions: {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation"
            },
            update: function (t) {
                var e, n, i = this,
                    r = i.getMeta(),
                    o = r.dataset,
                    a = r.data || [],
                    s = i.chart.options,
                    l = i._config,
                    u = i._showLine = Ft(l.showLine, s.showLines);
                for (i._xScale = i.getScaleForId(r.xAxisID), i._yScale = i.getScaleForId(r.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = i._yScale, o._datasetIndex = i.index, o._children = a, o._model = i._resolveDatasetElementOptions(o), o.pivot()), e = 0, n = a.length; e < n; ++e) i.updateElement(a[e], e, t);
                for (u && 0 !== o._model.tension && i.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot()
            },
            updateElement: function (t, e, n) {
                var i, r, o = this,
                    a = o.getMeta(),
                    s = t.custom || {},
                    l = o.getDataset(),
                    u = o.index,
                    c = l.data[e],
                    d = o._xScale,
                    h = o._yScale,
                    f = a.dataset._model,
                    p = o._resolveDataElementOptions(t, e);
                i = d.getPixelForValue("object" == typeof c ? c : NaN, e, u), r = n ? h.getBasePixel() : o.calculatePointY(c, e, u), t._xScale = d, t._yScale = h, t._options = p, t._datasetIndex = u, t._index = e, t._model = {
                    x: i,
                    y: r,
                    skip: s.skip || isNaN(i) || isNaN(r),
                    radius: p.radius,
                    pointStyle: p.pointStyle,
                    rotation: p.rotation,
                    backgroundColor: p.backgroundColor,
                    borderColor: p.borderColor,
                    borderWidth: p.borderWidth,
                    tension: Ft(s.tension, f ? f.tension : 0),
                    steppedLine: !!f && f.steppedLine,
                    hitRadius: p.hitRadius
                }
            },
            _resolveDatasetElementOptions: function (t) {
                var e = this,
                    n = e._config,
                    i = t.custom || {},
                    r = e.chart.options,
                    o = r.elements.line,
                    a = nt.prototype._resolveDatasetElementOptions.apply(e, arguments);
                return a.spanGaps = Ft(n.spanGaps, r.spanGaps), a.tension = Ft(n.lineTension, o.tension), a.steppedLine = Rt([i.steppedLine, n.steppedLine, o.stepped]), a.clip = Wt(Ft(n.clip, Bt(e._xScale, e._yScale, a.borderWidth))), a
            },
            calculatePointY: function (t, e, n) {
                var i, r, o, a, s, l, u, c = this.chart,
                    d = this._yScale,
                    h = 0,
                    f = 0;
                if (d.options.stacked) {
                    for (s = +d.getRightValue(t), u = (l = c._getSortedVisibleDatasetMetas()).length, i = 0; i < u && (o = l[i]).index !== n; ++i) r = c.data.datasets[o.index], "line" === o.type && o.yAxisID === d.id && ((a = +d.getRightValue(r.data[e])) < 0 ? f += a || 0 : h += a || 0);
                    return s < 0 ? d.getPixelForValue(f + s) : d.getPixelForValue(h + s)
                }
                return d.getPixelForValue(t)
            },
            updateBezierControlPoints: function () {
                var t, e, n, i, r = this.chart,
                    o = this.getMeta(),
                    a = o.dataset._model,
                    s = r.chartArea,
                    l = o.data || [];

                function u(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
                if (a.spanGaps && (l = l.filter(function (t) {
                        return !t._model.skip
                    })), "monotone" === a.cubicInterpolationMode) H.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, i = H.splineCurve(H.previousItem(l, t)._model, n, H.nextItem(l, t)._model, a.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                if (r.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, jt(n, s) && (t > 0 && jt(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && jt(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)))
            },
            draw: function () {
                var t, e = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    r = e.chartArea,
                    o = e.canvas,
                    a = 0,
                    s = i.length;
                for (this._showLine && (t = n.dataset._model.clip, H.canvas.clipArea(e.ctx, {
                        left: !1 === t.left ? 0 : r.left - t.left,
                        right: !1 === t.right ? o.width : r.right + t.right,
                        top: !1 === t.top ? 0 : r.top - t.top,
                        bottom: !1 === t.bottom ? o.height : r.bottom + t.bottom
                    }), n.dataset.draw(), H.canvas.unclipArea(e.ctx)); a < s; ++a) i[a].draw(r)
            },
            setHoverStyle: function (t) {
                var e = t._model,
                    n = t._options,
                    i = H.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Ft(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ft(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ft(n.hoverBorderWidth, n.borderWidth), e.radius = Ft(n.hoverRadius, n.radius)
            }
        }),
        Vt = H.options.resolve;
    R._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function (t) {
            var e, n, i, r = document.createElement("ul"),
                o = t.data,
                a = o.datasets,
                s = o.labels;
            if (r.setAttribute("class", t.id + "-legend"), a.length)
                for (e = 0, n = a[0].data.length; e < n; ++e)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return r.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function (t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                        var r = t.getDatasetMeta(0),
                            o = r.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: o.backgroundColor,
                            strokeStyle: o.borderColor,
                            lineWidth: o.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden,
                            index: i
                        }
                    }) : []
                }
            },
            onClick: function (t, e) {
                var n, i, r, o = e.index,
                    a = this.chart;
                for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o].hidden = !r.data[o].hidden;
                a.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function () {
                    return ""
                },
                label: function (t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    });
    var qt = nt.extend({
        dataElementType: yt.Arc,
        linkScales: H.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        _getIndexScaleId: function () {
            return this.chart.scale.id
        },
        _getValueScaleId: function () {
            return this.chart.scale.id
        },
        update: function (t) {
            var e, n, i, r = this,
                o = r.getDataset(),
                a = r.getMeta(),
                s = r.chart.options.startAngle || 0,
                l = r._starts = [],
                u = r._angles = [],
                c = a.data;
            for (r._updateRadius(), a.count = r.countVisibleElements(), e = 0, n = o.data.length; e < n; e++) l[e] = s, i = r._computeAngle(e), u[e] = i, s += i;
            for (e = 0, n = c.length; e < n; ++e) c[e]._options = r._resolveDataElementOptions(c[e], e), r.updateElement(c[e], e, t)
        },
        _updateRadius: function () {
            var t = this,
                e = t.chart,
                n = e.chartArea,
                i = e.options,
                r = Math.min(n.right - n.left, n.bottom - n.top);
            e.outerRadius = Math.max(r / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
        },
        updateElement: function (t, e, n) {
            var i = this,
                r = i.chart,
                o = i.getDataset(),
                a = r.options,
                s = a.animation,
                l = r.scale,
                u = r.data.labels,
                c = l.xCenter,
                d = l.yCenter,
                h = a.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                p = i._starts[e],
                g = p + (t.hidden ? 0 : i._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                v = t._options || {};
            H.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _scale: l,
                _model: {
                    backgroundColor: v.backgroundColor,
                    borderColor: v.borderColor,
                    borderWidth: v.borderWidth,
                    borderAlign: v.borderAlign,
                    x: c,
                    y: d,
                    innerRadius: 0,
                    outerRadius: n ? m : f,
                    startAngle: n && s.animateRotate ? h : p,
                    endAngle: n && s.animateRotate ? h : g,
                    label: H.valueAtIndexOrDefault(u, e, u[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function () {
            var t = this.getDataset(),
                e = this.getMeta(),
                n = 0;
            return H.each(e.data, function (e, i) {
                isNaN(t.data[i]) || e.hidden || n++
            }), n
        },
        setHoverStyle: function (t) {
            var e = t._model,
                n = t._options,
                i = H.getHoverColor,
                r = H.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = r(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = r(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = r(n.hoverBorderWidth, n.borderWidth)
        },
        _computeAngle: function (t) {
            var e = this,
                n = this.getMeta().count,
                i = e.getDataset(),
                r = e.getMeta();
            if (isNaN(i.data[t]) || r.data[t].hidden) return 0;
            var o = {
                chart: e.chart,
                dataIndex: t,
                dataset: i,
                datasetIndex: e.index
            };
            return Vt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], o, t)
        }
    });
    R._set("pie", H.clone(R.doughnut)), R._set("pie", {
        cutoutPercentage: 0
    });
    var Ut = Ot,
        Yt = H.valueOrDefault;
    R._set("radar", {
        spanGaps: !1,
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                fill: "start",
                tension: 0
            }
        }
    });
    var $t = nt.extend({
        datasetElementType: yt.Line,
        dataElementType: yt.Point,
        linkScales: H.noop,
        _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        _getIndexScaleId: function () {
            return this.chart.scale.id
        },
        _getValueScaleId: function () {
            return this.chart.scale.id
        },
        update: function (t) {
            var e, n, i = this,
                r = i.getMeta(),
                o = r.dataset,
                a = r.data || [],
                s = i.chart.scale,
                l = i._config;
            for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = i.index, o._children = a, o._loop = !0, o._model = i._resolveDatasetElementOptions(o), o.pivot(), e = 0, n = a.length; e < n; ++e) i.updateElement(a[e], e, t);
            for (i.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot()
        },
        updateElement: function (t, e, n) {
            var i = this,
                r = t.custom || {},
                o = i.getDataset(),
                a = i.chart.scale,
                s = a.getPointPositionForValue(e, o.data[e]),
                l = i._resolveDataElementOptions(t, e),
                u = i.getMeta().dataset._model,
                c = n ? a.xCenter : s.x,
                d = n ? a.yCenter : s.y;
            t._scale = a, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = {
                x: c,
                y: d,
                skip: r.skip || isNaN(c) || isNaN(d),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: Yt(r.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius
            }
        },
        _resolveDatasetElementOptions: function () {
            var t = this,
                e = t._config,
                n = t.chart.options,
                i = nt.prototype._resolveDatasetElementOptions.apply(t, arguments);
            return i.spanGaps = Yt(e.spanGaps, n.spanGaps), i.tension = Yt(e.lineTension, n.elements.line.tension), i
        },
        updateBezierControlPoints: function () {
            var t, e, n, i, r = this.getMeta(),
                o = this.chart.chartArea,
                a = r.data || [];

            function s(t, e, n) {
                return Math.max(Math.min(t, n), e)
            }
            for (r.dataset._model.spanGaps && (a = a.filter(function (t) {
                    return !t._model.skip
                })), t = 0, e = a.length; t < e; ++t) n = a[t]._model, i = H.splineCurve(H.previousItem(a, t, !0)._model, n, H.nextItem(a, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, o.left, o.right), n.controlPointPreviousY = s(i.previous.y, o.top, o.bottom), n.controlPointNextX = s(i.next.x, o.left, o.right), n.controlPointNextY = s(i.next.y, o.top, o.bottom)
        },
        setHoverStyle: function (t) {
            var e = t._model,
                n = t._options,
                i = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = Yt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Yt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Yt(n.hoverBorderWidth, n.borderWidth), e.radius = Yt(n.hoverRadius, n.radius)
        }
    });
    R._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        tooltips: {
            callbacks: {
                title: function () {
                    return ""
                },
                label: function (t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    }), R._set("global", {
        datasets: {
            scatter: {
                showLine: !1
            }
        }
    });
    var Xt = {
        bar: St,
        bubble: Dt,
        doughnut: Ot,
        horizontalBar: Et,
        line: Ht,
        polarArea: qt,
        pie: Ut,
        radar: $t,
        scatter: Ht
    };

    function Gt(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : H.getRelativePosition(t, e)
    }

    function Kt(t, e) {
        var n, i, r, o, a, s, l = t._getSortedVisibleDatasetMetas();
        for (i = 0, o = l.length; i < o; ++i)
            for (r = 0, a = (n = l[i].data).length; r < a; ++r)(s = n[r])._view.skip || e(s)
    }

    function Qt(t, e) {
        var n = [];
        return Kt(t, function (t) {
            t.inRange(e.x, e.y) && n.push(t)
        }), n
    }

    function Zt(t, e, n, i) {
        var r = Number.POSITIVE_INFINITY,
            o = [];
        return Kt(t, function (t) {
            if (!n || t.inRange(e.x, e.y)) {
                var a = t.getCenterPoint(),
                    s = i(e, a);
                s < r ? (o = [t], r = s) : s === r && o.push(t)
            }
        }), o
    }

    function Jt(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function (t, i) {
            var r = e ? Math.abs(t.x - i.x) : 0,
                o = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
        }
    }

    function te(t, e, n) {
        var i = Gt(e, t);
        n.axis = n.axis || "x";
        var r = Jt(n.axis),
            o = n.intersect ? Qt(t, i) : Zt(t, i, !1, r),
            a = [];
        return o.length ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
            var e = t.data[o[0]._index];
            e && !e._view.skip && a.push(e)
        }), a) : []
    }
    var ee = {
            modes: {
                single: function (t, e) {
                    var n = Gt(e, t),
                        i = [];
                    return Kt(t, function (t) {
                        if (t.inRange(n.x, n.y)) return i.push(t), i
                    }), i.slice(0, 1)
                },
                label: te,
                index: te,
                dataset: function (t, e, n) {
                    var i = Gt(e, t);
                    n.axis = n.axis || "xy";
                    var r = Jt(n.axis),
                        o = n.intersect ? Qt(t, i) : Zt(t, i, !1, r);
                    return o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o
                },
                "x-axis": function (t, e) {
                    return te(t, e, {
                        intersect: !1
                    })
                },
                point: function (t, e) {
                    return Qt(t, Gt(e, t))
                },
                nearest: function (t, e, n) {
                    var i = Gt(e, t);
                    n.axis = n.axis || "xy";
                    var r = Jt(n.axis);
                    return Zt(t, i, n.intersect, r)
                },
                x: function (t, e, n) {
                    var i = Gt(e, t),
                        r = [],
                        o = !1;
                    return Kt(t, function (t) {
                        t.inXRange(i.x) && r.push(t), t.inRange(i.x, i.y) && (o = !0)
                    }), n.intersect && !o && (r = []), r
                },
                y: function (t, e, n) {
                    var i = Gt(e, t),
                        r = [],
                        o = !1;
                    return Kt(t, function (t) {
                        t.inYRange(i.y) && r.push(t), t.inRange(i.x, i.y) && (o = !0)
                    }), n.intersect && !o && (r = []), r
                }
            }
        },
        ne = H.extend;

    function ie(t, e) {
        return H.where(t, function (t) {
            return t.pos === e
        })
    }

    function re(t, e) {
        return t.sort(function (t, n) {
            var i = e ? n : t,
                r = e ? t : n;
            return i.weight === r.weight ? i.index - r.index : i.weight - r.weight
        })
    }

    function oe(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
    }

    function ae(t, e, n) {
        var i, r, o = n.box,
            a = t.maxPadding;
        if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? o.height : o.width, t[n.pos] += n.size, o.getPadding) {
            var s = o.getPadding();
            a.top = Math.max(a.top, s.top), a.left = Math.max(a.left, s.left), a.bottom = Math.max(a.bottom, s.bottom), a.right = Math.max(a.right, s.right)
        }
        if (i = e.outerWidth - oe(a, t, "left", "right"), r = e.outerHeight - oe(a, t, "top", "bottom"), i !== t.w || r !== t.h) {
            t.w = i, t.h = r;
            var l = n.horizontal ? [i, t.w] : [r, t.h];
            return !(l[0] === l[1] || isNaN(l[0]) && isNaN(l[1]))
        }
    }

    function se(t, e) {
        var n = e.maxPadding;
        return function (t) {
            var i = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t.forEach(function (t) {
                i[t] = Math.max(e[t], n[t])
            }), i
        }(t ? ["left", "right"] : ["top", "bottom"])
    }

    function le(t, e, n) {
        var i, r, o, a, s, l, u = [];
        for (i = 0, r = t.length; i < r; ++i)(a = (o = t[i]).box).update(o.width || e.w, o.height || e.h, se(o.horizontal, e)), ae(e, n, o) && (l = !0, u.length && (s = !0)), a.fullWidth || u.push(o);
        return s && le(u, e, n) || l
    }

    function ue(t, e, n) {
        var i, r, o, a, s = n.padding,
            l = e.x,
            u = e.y;
        for (i = 0, r = t.length; i < r; ++i) a = (o = t[i]).box, o.horizontal ? (a.left = a.fullWidth ? s.left : e.left, a.right = a.fullWidth ? n.outerWidth - s.right : e.left + e.w, a.top = u, a.bottom = u + a.height, a.width = a.right - a.left, u = a.bottom) : (a.left = l, a.right = l + a.width, a.top = e.top, a.bottom = e.top + e.h, a.height = a.bottom - a.top, l = a.right);
        e.x = l, e.y = u
    }
    R._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var ce, de = {
            defaults: {},
            addBox: function (t, e) {
                t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
                    return [{
                        z: 0,
                        draw: function () {
                            e.draw.apply(e, arguments)
                        }
                    }]
                }, t.boxes.push(e)
            },
            removeBox: function (t, e) {
                var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
            },
            configure: function (t, e, n) {
                for (var i, r = ["fullWidth", "position", "weight"], o = r.length, a = 0; a < o; ++a) i = r[a], n.hasOwnProperty(i) && (e[i] = n[i])
            },
            update: function (t, e, n) {
                if (t) {
                    var i = t.options.layout || {},
                        r = H.options.toPadding(i.padding),
                        o = e - r.width,
                        a = n - r.height,
                        s = function (t) {
                            var e = function (t) {
                                    var e, n, i, r = [];
                                    for (e = 0, n = (t || []).length; e < n; ++e) i = t[e], r.push({
                                        index: e,
                                        box: i,
                                        pos: i.position,
                                        horizontal: i.isHorizontal(),
                                        weight: i.weight
                                    });
                                    return r
                                }(t),
                                n = re(ie(e, "left"), !0),
                                i = re(ie(e, "right")),
                                r = re(ie(e, "top"), !0),
                                o = re(ie(e, "bottom"));
                            return {
                                leftAndTop: n.concat(r),
                                rightAndBottom: i.concat(o),
                                chartArea: ie(e, "chartArea"),
                                vertical: n.concat(i),
                                horizontal: r.concat(o)
                            }
                        }(t.boxes),
                        l = s.vertical,
                        u = s.horizontal,
                        c = Object.freeze({
                            outerWidth: e,
                            outerHeight: n,
                            padding: r,
                            availableWidth: o,
                            vBoxMaxWidth: o / 2 / l.length,
                            hBoxMaxHeight: a / 2
                        }),
                        d = ne({
                            maxPadding: ne({}, r),
                            w: o,
                            h: a,
                            x: r.left,
                            y: r.top
                        }, r);
                    ! function (t, e) {
                        var n, i, r;
                        for (n = 0, i = t.length; n < i; ++n)(r = t[n]).width = r.horizontal ? r.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, r.height = r.horizontal && e.hBoxMaxHeight
                    }(l.concat(u), c), le(l, d, c), le(u, d, c) && le(l, d, c),
                        function (t) {
                            var e = t.maxPadding;

                            function n(n) {
                                var i = Math.max(e[n] - t[n], 0);
                                return t[n] += i, i
                            }
                            t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
                        }(d), ue(s.leftAndTop, d, c), d.x += d.w, d.y += d.h, ue(s.rightAndBottom, d, c), t.chartArea = {
                            left: d.left,
                            top: d.top,
                            right: d.left + d.w,
                            bottom: d.top + d.h
                        }, H.each(s.chartArea, function (e) {
                            var n = e.box;
                            ne(n, t.chartArea), n.update(d.w, d.h)
                        })
                }
            }
        },
        he = (ce = Object.freeze({
            __proto__: null,
            default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
        })) && ce.default || ce,
        fe = "$chartjs",
        pe = "chartjs-size-monitor",
        ge = "chartjs-render-monitor",
        me = ["animationstart", "webkitAnimationStart"],
        ve = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function be(t, e) {
        var n = H.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0
    }
    var ye = !! function () {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function () {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (t) {}
        return t
    }() && {
        passive: !0
    };

    function xe(t, e, n) {
        t.addEventListener(e, n, ye)
    }

    function we(t, e, n) {
        t.removeEventListener(e, n, ye)
    }

    function ke(t, e, n, i, r) {
        return {
            type: t,
            chart: e,
            native: r || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null
        }
    }

    function _e(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }
    var Ce = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function (t) {
            if (!this.disableCSSInjection) {
                var e = t.getRootNode ? t.getRootNode() : document;
                ! function (t, e) {
                    var n = t[fe] || (t[fe] = {});
                    if (!n.containsStyles) {
                        n.containsStyles = !0, e = "/* Chart.js */\n" + e;
                        var i = document.createElement("style");
                        i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i)
                    }
                }(e.host ? e : document.head, he)
            }
        },
        acquireContext: function (t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ? (this._ensureLoaded(t), function (t, e) {
                var n = t.style,
                    i = t.getAttribute("height"),
                    r = t.getAttribute("width");
                if (t[fe] = {
                        initial: {
                            height: i,
                            width: r,
                            style: {
                                display: n.display,
                                height: n.height,
                                width: n.width
                            }
                        }
                    }, n.display = n.display || "block", null === r || "" === r) {
                    var o = be(t, "width");
                    void 0 !== o && (t.width = o)
                }
                if (null === i || "" === i)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var a = be(t, "height");
                        void 0 !== o && (t.height = a)
                    }
            }(t, e), n) : null
        },
        releaseContext: function (t) {
            var e = t.canvas;
            if (e[fe]) {
                var n = e[fe].initial;
                ["height", "width"].forEach(function (t) {
                    var i = n[t];
                    H.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                }), H.each(n.style || {}, function (t, n) {
                    e.style[n] = t
                }), e.width = e.width, delete e[fe]
            }
        },
        addEventListener: function (t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var r = n[fe] || (n[fe] = {});
                xe(i, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (e) {
                    n(function (t, e) {
                        var n = ve[t.type] || t.type,
                            i = H.getRelativePosition(t, e);
                        return ke(n, e, i.x, i.y, t)
                    }(e, t))
                })
            } else ! function (t, e, n) {
                var i, r, o, a, s = t[fe] || (t[fe] = {}),
                    l = s.resizer = function (t) {
                        var e = _e(pe),
                            n = _e(pe + "-expand"),
                            i = _e(pe + "-shrink");
                        n.appendChild(_e()), i.appendChild(_e()), e.appendChild(n), e.appendChild(i), e._reset = function () {
                            n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6
                        };
                        var r = function () {
                            e._reset(), t()
                        };
                        return xe(n, "scroll", r.bind(n, "expand")), xe(i, "scroll", r.bind(i, "shrink")), e
                    }((i = function () {
                        if (s.resizer) {
                            var i = n.options.maintainAspectRatio && t.parentNode,
                                r = i ? i.clientWidth : 0;
                            e(ke("resize", n)), i && i.clientWidth < r && n.canvas && e(ke("resize", n))
                        }
                    }, o = !1, a = [], function () {
                        a = Array.prototype.slice.call(arguments), r = r || this, o || (o = !0, H.requestAnimFrame.call(window, function () {
                            o = !1, i.apply(r, a)
                        }))
                    }));
                ! function (t, e) {
                    var n = t[fe] || (t[fe] = {}),
                        i = n.renderProxy = function (t) {
                            "chartjs-render-animation" === t.animationName && e()
                        };
                    H.each(me, function (e) {
                        xe(t, e, i)
                    }), n.reflow = !!t.offsetParent, t.classList.add(ge)
                }(t, function () {
                    if (s.resizer) {
                        var e = t.parentNode;
                        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
                    }
                })
            }(i, n, t)
        },
        removeEventListener: function (t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var r = ((n[fe] || {}).proxies || {})[t.id + "_" + e];
                r && we(i, e, r)
            } else ! function (t) {
                var e = t[fe] || {},
                    n = e.resizer;
                delete e.resizer,
                    function (t) {
                        var e = t[fe] || {},
                            n = e.renderProxy;
                        n && (H.each(me, function (e) {
                            we(t, e, n)
                        }), delete e.renderProxy), t.classList.remove(ge)
                    }(t), n && n.parentNode && n.parentNode.removeChild(n)
            }(i)
        }
    };
    H.addEvent = xe, H.removeEvent = we;
    var Me = Ce._enabled ? Ce : {
            acquireContext: function (t) {
                return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
            }
        },
        Se = H.extend({
            initialize: function () {},
            acquireContext: function () {},
            releaseContext: function () {},
            addEventListener: function () {},
            removeEventListener: function () {}
        }, Me);
    R._set("global", {
        plugins: {}
    });
    var Te = {
            _plugins: [],
            _cacheId: 0,
            register: function (t) {
                var e = this._plugins;
                [].concat(t).forEach(function (t) {
                    -1 === e.indexOf(t) && e.push(t)
                }), this._cacheId++
            },
            unregister: function (t) {
                var e = this._plugins;
                [].concat(t).forEach(function (t) {
                    var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                }), this._cacheId++
            },
            clear: function () {
                this._plugins = [], this._cacheId++
            },
            count: function () {
                return this._plugins.length
            },
            getAll: function () {
                return this._plugins
            },
            notify: function (t, e, n) {
                var i, r, o, a, s, l = this.descriptors(t),
                    u = l.length;
                for (i = 0; i < u; ++i)
                    if ("function" == typeof (s = (o = (r = l[i]).plugin)[e]) && ((a = [t].concat(n || [])).push(r.options), !1 === s.apply(o, a))) return !1;
                return !0
            },
            descriptors: function (t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var n = [],
                    i = [],
                    r = t && t.config || {},
                    o = r.options && r.options.plugins || {};
                return this._plugins.concat(r.plugins || []).forEach(function (t) {
                    if (-1 === n.indexOf(t)) {
                        var e = t.id,
                            r = o[e];
                        !1 !== r && (!0 === r && (r = H.clone(R.global.plugins[e])), n.push(t), i.push({
                            plugin: t,
                            options: r || {}
                        }))
                    }
                }), e.descriptors = i, e.id = this._cacheId, i
            },
            _invalidate: function (t) {
                delete t.$plugins
            }
        },
        Ae = {
            constructors: {},
            defaults: {},
            registerScaleType: function (t, e, n) {
                this.constructors[t] = e, this.defaults[t] = H.clone(n)
            },
            getScaleConstructor: function (t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function (t) {
                return this.defaults.hasOwnProperty(t) ? H.merge(Object.create(null), [R.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function (t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = H.extend(this.defaults[t], e))
            },
            addScalesToLayout: function (t) {
                H.each(t.scales, function (e) {
                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, de.addBox(t, e)
                })
            }
        },
        De = H.valueOrDefault,
        Pe = H.rtl.getRtlAdapter;
    R._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: H.noop,
                title: function (t, e) {
                    var n = "",
                        i = e.labels,
                        r = i ? i.length : 0;
                    if (t.length > 0) {
                        var o = t[0];
                        o.label ? n = o.label : o.xLabel ? n = o.xLabel : r > 0 && o.index < r && (n = i[o.index])
                    }
                    return n
                },
                afterTitle: H.noop,
                beforeBody: H.noop,
                beforeLabel: H.noop,
                label: function (t, e) {
                    var n = e.datasets[t.datasetIndex].label || "";
                    return n && (n += ": "), H.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n
                },
                labelColor: function (t, e) {
                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: n.borderColor,
                        backgroundColor: n.backgroundColor
                    }
                },
                labelTextColor: function () {
                    return this._options.bodyFontColor
                },
                afterLabel: H.noop,
                afterBody: H.noop,
                beforeFooter: H.noop,
                footer: H.noop,
                afterFooter: H.noop
            }
        }
    });
    var Ie = {
        average: function (t) {
            if (!t.length) return !1;
            var e, n, i = 0,
                r = 0,
                o = 0;
            for (e = 0, n = t.length; e < n; ++e) {
                var a = t[e];
                if (a && a.hasValue()) {
                    var s = a.tooltipPosition();
                    i += s.x, r += s.y, ++o
                }
            }
            return {
                x: i / o,
                y: r / o
            }
        },
        nearest: function (t, e) {
            var n, i, r, o = e.x,
                a = e.y,
                s = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
                var l = t[n];
                if (l && l.hasValue()) {
                    var u = l.getCenterPoint(),
                        c = H.distanceBetweenPoints(e, u);
                    c < s && (s = c, r = l)
                }
            }
            if (r) {
                var d = r.tooltipPosition();
                o = d.x, a = d.y
            }
            return {
                x: o,
                y: a
            }
        }
    };

    function Le(t, e) {
        return e && (H.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function Ne(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function Oe(t) {
        var e = R.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: De(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: De(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: De(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: De(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: De(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: De(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: De(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: De(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: De(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        }
    }

    function Ee(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function Fe(t) {
        return Le([], Ne(t))
    }
    var Re = X.extend({
            initialize: function () {
                this._model = Oe(this._options), this._lastActive = []
            },
            getTitle: function () {
                var t = this,
                    e = t._options,
                    n = e.callbacks,
                    i = n.beforeTitle.apply(t, arguments),
                    r = n.title.apply(t, arguments),
                    o = n.afterTitle.apply(t, arguments),
                    a = [];
                return a = Le(a, Ne(i)), a = Le(a, Ne(r)), Le(a, Ne(o))
            },
            getBeforeBody: function () {
                return Fe(this._options.callbacks.beforeBody.apply(this, arguments))
            },
            getBody: function (t, e) {
                var n = this,
                    i = n._options.callbacks,
                    r = [];
                return H.each(t, function (t) {
                    var o = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    Le(o.before, Ne(i.beforeLabel.call(n, t, e))), Le(o.lines, i.label.call(n, t, e)), Le(o.after, Ne(i.afterLabel.call(n, t, e))), r.push(o)
                }), r
            },
            getAfterBody: function () {
                return Fe(this._options.callbacks.afterBody.apply(this, arguments))
            },
            getFooter: function () {
                var t = this,
                    e = t._options.callbacks,
                    n = e.beforeFooter.apply(t, arguments),
                    i = e.footer.apply(t, arguments),
                    r = e.afterFooter.apply(t, arguments),
                    o = [];
                return o = Le(o, Ne(n)), o = Le(o, Ne(i)), Le(o, Ne(r))
            },
            update: function (t) {
                var e, n, i, r, o, a, s, l, u, c, d = this,
                    h = d._options,
                    f = d._model,
                    p = d._model = Oe(h),
                    g = d._active,
                    m = d._data,
                    v = {
                        xAlign: f.xAlign,
                        yAlign: f.yAlign
                    },
                    b = {
                        x: f.x,
                        y: f.y
                    },
                    y = {
                        width: f.width,
                        height: f.height
                    },
                    x = {
                        x: f.caretX,
                        y: f.caretY
                    };
                if (g.length) {
                    p.opacity = 1;
                    var w = [],
                        k = [];
                    x = Ie[h.position].call(d, g, d._eventPosition);
                    var _ = [];
                    for (e = 0, n = g.length; e < n; ++e) _.push((r = void 0, o = void 0, void 0, void 0, l = void 0, u = void 0, c = void 0, r = (i = g[e])._xScale, o = i._yScale || i._scale, a = i._index, s = i._datasetIndex, u = (l = i._chart.getDatasetMeta(s).controller)._getIndexScale(), c = l._getValueScale(), {
                        xLabel: r ? r.getLabelForIndex(a, s) : "",
                        yLabel: o ? o.getLabelForIndex(a, s) : "",
                        label: u ? "" + u.getLabelForIndex(a, s) : "",
                        value: c ? "" + c.getLabelForIndex(a, s) : "",
                        index: a,
                        datasetIndex: s,
                        x: i._model.x,
                        y: i._model.y
                    }));
                    h.filter && (_ = _.filter(function (t) {
                        return h.filter(t, m)
                    })), h.itemSort && (_ = _.sort(function (t, e) {
                        return h.itemSort(t, e, m)
                    })), H.each(_, function (t) {
                        w.push(h.callbacks.labelColor.call(d, t, d._chart)), k.push(h.callbacks.labelTextColor.call(d, t, d._chart))
                    }), p.title = d.getTitle(_, m), p.beforeBody = d.getBeforeBody(_, m), p.body = d.getBody(_, m), p.afterBody = d.getAfterBody(_, m), p.footer = d.getFooter(_, m), p.x = x.x, p.y = x.y, p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = _, y = function (t, e) {
                        var n = t._chart.ctx,
                            i = 2 * e.yPadding,
                            r = 0,
                            o = e.body,
                            a = o.reduce(function (t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }, 0);
                        a += e.beforeBody.length + e.afterBody.length;
                        var s = e.title.length,
                            l = e.footer.length,
                            u = e.titleFontSize,
                            c = e.bodyFontSize,
                            d = e.footerFontSize;
                        i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += a * c, i += a ? (a - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * d, i += l ? (l - 1) * e.footerSpacing : 0;
                        var h = 0,
                            f = function (t) {
                                r = Math.max(r, n.measureText(t).width + h)
                            };
                        return n.font = H.fontString(u, e._titleFontStyle, e._titleFontFamily), H.each(e.title, f), n.font = H.fontString(c, e._bodyFontStyle, e._bodyFontFamily), H.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? c + 2 : 0, H.each(o, function (t) {
                            H.each(t.before, f), H.each(t.lines, f), H.each(t.after, f)
                        }), h = 0, n.font = H.fontString(d, e._footerFontStyle, e._footerFontFamily), H.each(e.footer, f), {
                            width: r += 2 * e.xPadding,
                            height: i
                        }
                    }(this, p), b = function (t, e, n, i) {
                        var r = t.x,
                            o = t.y,
                            a = t.caretSize,
                            s = t.caretPadding,
                            l = t.cornerRadius,
                            u = n.xAlign,
                            c = n.yAlign,
                            d = a + s,
                            h = l + s;
                        return "right" === u ? r -= e.width : "center" === u && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === c ? o += d : o -= "bottom" === c ? e.height + d : e.height / 2, "center" === c ? "left" === u ? r += d : "right" === u && (r -= d) : "left" === u ? r -= h : "right" === u && (r += h), {
                            x: r,
                            y: o
                        }
                    }(p, y, v = function (t, e) {
                        var n, i, r, o, a, s = t._model,
                            l = t._chart,
                            u = t._chart.chartArea,
                            c = "center",
                            d = "center";
                        s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
                        var h = (u.left + u.right) / 2,
                            f = (u.top + u.bottom) / 2;
                        "center" === d ? (n = function (t) {
                            return t <= h
                        }, i = function (t) {
                            return t > h
                        }) : (n = function (t) {
                            return t <= e.width / 2
                        }, i = function (t) {
                            return t >= l.width - e.width / 2
                        }), r = function (t) {
                            return t + e.width + s.caretSize + s.caretPadding > l.width
                        }, o = function (t) {
                            return t - e.width - s.caretSize - s.caretPadding < 0
                        }, a = function (t) {
                            return t <= f ? "top" : "bottom"
                        }, n(s.x) ? (c = "left", r(s.x) && (c = "center", d = a(s.y))) : i(s.x) && (c = "right", o(s.x) && (c = "center", d = a(s.y)));
                        var p = t._options;
                        return {
                            xAlign: p.xAlign ? p.xAlign : c,
                            yAlign: p.yAlign ? p.yAlign : d
                        }
                    }(this, y), d._chart)
                } else p.opacity = 0;
                return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = b.x, p.y = b.y, p.width = y.width, p.height = y.height, p.caretX = x.x, p.caretY = x.y, d._model = p, t && h.custom && h.custom.call(d, p), d
            },
            drawCaret: function (t, e) {
                var n = this._chart.ctx,
                    i = this._view,
                    r = this.getCaretPosition(t, e, i);
                n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
            },
            getCaretPosition: function (t, e, n) {
                var i, r, o, a, s, l, u = n.caretSize,
                    c = n.cornerRadius,
                    d = n.xAlign,
                    h = n.yAlign,
                    f = t.x,
                    p = t.y,
                    g = e.width,
                    m = e.height;
                if ("center" === h) s = p + m / 2, "left" === d ? (r = (i = f) - u, o = i, a = s + u, l = s - u) : (r = (i = f + g) + u, o = i, a = s - u, l = s + u);
                else if ("left" === d ? (i = (r = f + c + u) - u, o = r + u) : "right" === d ? (i = (r = f + g - c - u) - u, o = r + u) : (i = (r = n.caretX) - u, o = r + u), "top" === h) s = (a = p) - u, l = a;
                else {
                    s = (a = p + m) + u, l = a;
                    var v = o;
                    o = i, i = v
                }
                return {
                    x1: i,
                    x2: r,
                    x3: o,
                    y1: a,
                    y2: s,
                    y3: l
                }
            },
            drawTitle: function (t, e, n) {
                var i, r, o, a = e.title,
                    s = a.length;
                if (s) {
                    var l = Pe(e.rtl, e.x, e.width);
                    for (t.x = Ee(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, r = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = H.fontString(i, e._titleFontStyle, e._titleFontFamily), o = 0; o < s; ++o) n.fillText(a[o], l.x(t.x), t.y + i / 2), t.y += i + r, o + 1 === s && (t.y += e.titleMarginBottom - r)
                }
            },
            drawBody: function (t, e, n) {
                var i, r, o, a, s, l, u, c, d = e.bodyFontSize,
                    h = e.bodySpacing,
                    f = e._bodyAlign,
                    p = e.body,
                    g = e.displayColors,
                    m = 0,
                    v = g ? Ee(e, "left") : 0,
                    b = Pe(e.rtl, e.x, e.width),
                    y = function (e) {
                        n.fillText(e, b.x(t.x + m), t.y + d / 2), t.y += d + h
                    },
                    x = b.textAlign(f);
                for (n.textAlign = f, n.textBaseline = "middle", n.font = H.fontString(d, e._bodyFontStyle, e._bodyFontFamily), t.x = Ee(e, x), n.fillStyle = e.bodyFontColor, H.each(e.beforeBody, y), m = g && "right" !== x ? "center" === f ? d / 2 + 1 : d + 2 : 0, s = 0, u = p.length; s < u; ++s) {
                    for (i = p[s], r = e.labelTextColors[s], o = e.labelColors[s], n.fillStyle = r, H.each(i.before, y), l = 0, c = (a = i.lines).length; l < c; ++l) {
                        if (g) {
                            var w = b.x(v);
                            n.fillStyle = e.legendColorBackground, n.fillRect(b.leftForLtr(w, d), t.y, d, d), n.lineWidth = 1, n.strokeStyle = o.borderColor, n.strokeRect(b.leftForLtr(w, d), t.y, d, d), n.fillStyle = o.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(w, 1), d - 2), t.y + 1, d - 2, d - 2), n.fillStyle = r
                        }
                        y(a[l])
                    }
                    H.each(i.after, y)
                }
                m = 0, H.each(e.afterBody, y), t.y -= h
            },
            drawFooter: function (t, e, n) {
                var i, r, o = e.footer,
                    a = o.length;
                if (a) {
                    var s = Pe(e.rtl, e.x, e.width);
                    for (t.x = Ee(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = H.fontString(i, e._footerFontStyle, e._footerFontFamily), r = 0; r < a; ++r) n.fillText(o[r], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing
                }
            },
            drawBackground: function (t, e, n, i) {
                n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
                var r = e.xAlign,
                    o = e.yAlign,
                    a = t.x,
                    s = t.y,
                    l = i.width,
                    u = i.height,
                    c = e.cornerRadius;
                n.beginPath(), n.moveTo(a + c, s), "top" === o && this.drawCaret(t, i), n.lineTo(a + l - c, s), n.quadraticCurveTo(a + l, s, a + l, s + c), "center" === o && "right" === r && this.drawCaret(t, i), n.lineTo(a + l, s + u - c), n.quadraticCurveTo(a + l, s + u, a + l - c, s + u), "bottom" === o && this.drawCaret(t, i), n.lineTo(a + c, s + u), n.quadraticCurveTo(a, s + u, a, s + u - c), "center" === o && "left" === r && this.drawCaret(t, i), n.lineTo(a, s + c), n.quadraticCurveTo(a, s, a + c, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
            },
            draw: function () {
                var t = this._chart.ctx,
                    e = this._view;
                if (0 !== e.opacity) {
                    var n = {
                            width: e.width,
                            height: e.height
                        },
                        i = {
                            x: e.x,
                            y: e.y
                        },
                        r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && o && (t.save(), t.globalAlpha = r, this.drawBackground(i, e, t, n), i.y += e.yPadding, H.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), H.rtl.restoreTextDirection(t, e.textDirection), t.restore())
                }
            },
            handleEvent: function (t) {
                var e, n = this,
                    i = n._options;
                return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !H.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                    x: t.x,
                    y: t.y
                }, n.update(!0), n.pivot())), e
            }
        }),
        je = Ie,
        ze = Re;
    ze.positioners = je;
    var Be = H.valueOrDefault;

    function We() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function (t, e, n, i) {
                if ("xAxes" === t || "yAxes" === t) {
                    var r, o, a, s = n[t].length;
                    for (e[t] || (e[t] = []), r = 0; r < s; ++r) a = n[t][r], o = Be(a.type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), !e[t][r].type || a.type && a.type !== e[t][r].type ? H.merge(e[t][r], [Ae.getScaleDefaults(o), a]) : H.merge(e[t][r], a)
                } else H._merger(t, e, n, i)
            }
        })
    }

    function He() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function (t, e, n, i) {
                var r = e[t] || Object.create(null),
                    o = n[t];
                "scales" === t ? e[t] = We(r, o) : "scale" === t ? e[t] = H.merge(r, [Ae.getScaleDefaults(o.type), o]) : H._merger(t, e, n, i)
            }
        })
    }

    function Ve(t) {
        var e = t.options;
        H.each(t.scales, function (e) {
            de.removeBox(t, e)
        }), e = He(R.global, R[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
    }

    function qe(t, e, n) {
        var i, r = function (t) {
            return t.id === i
        };
        do {
            i = e + n++
        } while (H.findIndex(t, r) >= 0);
        return i
    }

    function Ue(t) {
        return "top" === t || "bottom" === t
    }

    function Ye(t, e) {
        return function (n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
        }
    }
    R._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });
    var $e = function (t, e) {
        return this.construct(t, e), this
    };
    H.extend($e.prototype, {
        construct: function (t, e) {
            var n = this;
            e = function (t) {
                var e = (t = t || Object.create(null)).data = t.data || {};
                return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = He(R.global, R[t.type], t.options || {}), t
            }(e);
            var i = Se.acquireContext(t, e),
                r = i && i.canvas,
                o = r && r.height,
                a = r && r.width;
            n.id = H.uid(), n.ctx = i, n.canvas = r, n.config = e, n.width = a, n.height = o, n.aspectRatio = o ? a / o : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, $e.instances[n.id] = n, Object.defineProperty(n, "data", {
                get: function () {
                    return n.config.data
                },
                set: function (t) {
                    n.config.data = t
                }
            }), i && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        },
        initialize: function () {
            var t = this;
            return Te.notify(t, "beforeInit"), H.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Te.notify(t, "afterInit"), t
        },
        clear: function () {
            return H.canvas.clear(this), this
        },
        stop: function () {
            return Q.cancelAnimation(this), this
        },
        resize: function (t) {
            var e = this,
                n = e.options,
                i = e.canvas,
                r = n.maintainAspectRatio && e.aspectRatio || null,
                o = Math.max(0, Math.floor(H.getMaximumWidth(i))),
                a = Math.max(0, Math.floor(r ? o / r : H.getMaximumHeight(i)));
            if ((e.width !== o || e.height !== a) && (i.width = e.width = o, i.height = e.height = a, i.style.width = o + "px", i.style.height = a + "px", H.retinaScale(e, n.devicePixelRatio), !t)) {
                var s = {
                    width: o,
                    height: a
                };
                Te.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({
                    duration: n.responsiveAnimationDuration
                })
            }
        },
        ensureScalesHaveIDs: function () {
            var t = this.options,
                e = t.scales || {},
                n = t.scale;
            H.each(e.xAxes, function (t, n) {
                t.id || (t.id = qe(e.xAxes, "x-axis-", n))
            }), H.each(e.yAxes, function (t, n) {
                t.id || (t.id = qe(e.yAxes, "y-axis-", n))
            }), n && (n.id = n.id || "scale")
        },
        buildOrUpdateScales: function () {
            var t = this,
                e = t.options,
                n = t.scales || {},
                i = [],
                r = Object.keys(n).reduce(function (t, e) {
                    return t[e] = !1, t
                }, {});
            e.scales && (i = i.concat((e.scales.xAxes || []).map(function (t) {
                return {
                    options: t,
                    dtype: "category",
                    dposition: "bottom"
                }
            }), (e.scales.yAxes || []).map(function (t) {
                return {
                    options: t,
                    dtype: "linear",
                    dposition: "left"
                }
            }))), e.scale && i.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), H.each(i, function (e) {
                var i = e.options,
                    o = i.id,
                    a = Be(i.type, e.dtype);
                Ue(i.position) !== Ue(e.dposition) && (i.position = e.dposition), r[o] = !0;
                var s = null;
                if (o in n && n[o].type === a)(s = n[o]).options = i, s.ctx = t.ctx, s.chart = t;
                else {
                    var l = Ae.getScaleConstructor(a);
                    if (!l) return;
                    s = new l({
                        id: o,
                        type: a,
                        options: i,
                        ctx: t.ctx,
                        chart: t
                    }), n[s.id] = s
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s)
            }), H.each(r, function (t, e) {
                t || delete n[e]
            }), t.scales = n, Ae.addScalesToLayout(this)
        },
        buildOrUpdateControllers: function () {
            var t, e, n = this,
                i = [],
                r = n.data.datasets;
            for (t = 0, e = r.length; t < e; t++) {
                var o = r[t],
                    a = n.getDatasetMeta(t),
                    s = o.type || n.config.type;
                if (a.type && a.type !== s && (n.destroyDatasetMeta(t), a = n.getDatasetMeta(t)), a.type = s, a.order = o.order || 0, a.index = t, a.controller) a.controller.updateIndex(t), a.controller.linkScales();
                else {
                    var l = Xt[a.type];
                    if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                    a.controller = new l(n, t), i.push(a.controller)
                }
            }
            return i
        },
        resetElements: function () {
            var t = this;
            H.each(t.data.datasets, function (e, n) {
                t.getDatasetMeta(n).controller.reset()
            }, t)
        },
        reset: function () {
            this.resetElements(), this.tooltip.initialize()
        },
        update: function (t) {
            var e, n, i = this;
            if (t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                }), Ve(i), Te._invalidate(i), !1 !== Te.notify(i, "beforeUpdate")) {
                i.tooltip._data = i.data;
                var r = i.buildOrUpdateControllers();
                for (e = 0, n = i.data.datasets.length; e < n; e++) i.getDatasetMeta(e).controller.buildOrUpdateElements();
                i.updateLayout(), i.options.animation && i.options.animation.duration && H.each(r, function (t) {
                    t.reset()
                }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Te.notify(i, "afterUpdate"), i._layers.sort(Ye("z", "_idx")), i._bufferedRender ? i._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : i.render(t)
            }
        },
        updateLayout: function () {
            var t = this;
            !1 !== Te.notify(t, "beforeLayout") && (de.update(this, this.width, this.height), t._layers = [], H.each(t.boxes, function (e) {
                e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
            }, t), t._layers.forEach(function (t, e) {
                t._idx = e
            }), Te.notify(t, "afterScaleUpdate"), Te.notify(t, "afterLayout"))
        },
        updateDatasets: function () {
            if (!1 !== Te.notify(this, "beforeDatasetsUpdate")) {
                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                Te.notify(this, "afterDatasetsUpdate")
            }
        },
        updateDataset: function (t) {
            var e = this.getDatasetMeta(t),
                n = {
                    meta: e,
                    index: t
                };
            !1 !== Te.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), Te.notify(this, "afterDatasetUpdate", [n]))
        },
        render: function (t) {
            var e = this;
            t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
            });
            var n = e.options.animation,
                i = Be(t.duration, n && n.duration),
                r = t.lazy;
            if (!1 !== Te.notify(e, "beforeRender")) {
                var o = function (t) {
                    Te.notify(e, "afterRender"), H.callback(n && n.onComplete, [t], e)
                };
                if (n && i) {
                    var a = new K({
                        numSteps: i / 16.66,
                        easing: t.easing || n.easing,
                        render: function (t, e) {
                            var n = H.easing.effects[e.easing],
                                i = e.currentStep,
                                r = i / e.numSteps;
                            t.draw(n(r), r, i)
                        },
                        onAnimationProgress: n.onProgress,
                        onAnimationComplete: o
                    });
                    Q.addAnimation(e, a, i, r)
                } else e.draw(), o(new K({
                    numSteps: 0,
                    chart: e
                }));
                return e
            }
        },
        draw: function (t) {
            var e, n, i = this;
            if (i.clear(), H.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== Te.notify(i, "beforeDraw", [t])) {
                for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(i.chartArea);
                for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
                i._drawTooltip(t), Te.notify(i, "afterDraw", [t])
            }
        },
        transition: function (t) {
            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
        },
        _getSortedDatasetMetas: function (t) {
            var e, n, i = [];
            for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e));
            return i.sort(Ye("order", "index")), i
        },
        _getSortedVisibleDatasetMetas: function () {
            return this._getSortedDatasetMetas(!0)
        },
        drawDatasets: function (t) {
            var e, n;
            if (!1 !== Te.notify(this, "beforeDatasetsDraw", [t])) {
                for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(e[n], t);
                Te.notify(this, "afterDatasetsDraw", [t])
            }
        },
        drawDataset: function (t, e) {
            var n = {
                meta: t,
                index: t.index,
                easingValue: e
            };
            !1 !== Te.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), Te.notify(this, "afterDatasetDraw", [n]))
        },
        _drawTooltip: function (t) {
            var e = this.tooltip,
                n = {
                    tooltip: e,
                    easingValue: t
                };
            !1 !== Te.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), Te.notify(this, "afterTooltipDraw", [n]))
        },
        getElementAtEvent: function (t) {
            return ee.modes.single(this, t)
        },
        getElementsAtEvent: function (t) {
            return ee.modes.label(this, t, {
                intersect: !0
            })
        },
        getElementsAtXAxis: function (t) {
            return ee.modes["x-axis"](this, t, {
                intersect: !0
            })
        },
        getElementsAtEventForMode: function (t, e, n) {
            var i = ee.modes[e];
            return "function" == typeof i ? i(this, t, n) : []
        },
        getDatasetAtEvent: function (t) {
            return ee.modes.dataset(this, t, {
                intersect: !0
            })
        },
        getDatasetMeta: function (t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var n = e._meta[this.id];
            return n || (n = e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e.order || 0,
                index: t
            }), n
        },
        getVisibleDatasetCount: function () {
            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
            return t
        },
        isDatasetVisible: function (t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
        },
        generateLegend: function () {
            return this.options.legendCallback(this)
        },
        destroyDatasetMeta: function (t) {
            var e = this.id,
                n = this.data.datasets[t],
                i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e])
        },
        destroy: function () {
            var t, e, n = this,
                i = n.canvas;
            for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
            i && (n.unbindEvents(), H.canvas.clear(n), Se.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Te.notify(n, "destroy"), delete $e.instances[n.id]
        },
        toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        },
        initToolTip: function () {
            var t = this;
            t.tooltip = new ze({
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips
            }, t)
        },
        bindEvents: function () {
            var t = this,
                e = t._listeners = {},
                n = function () {
                    t.eventHandler.apply(t, arguments)
                };
            H.each(t.options.events, function (i) {
                Se.addEventListener(t, i, n), e[i] = n
            }), t.options.responsive && (n = function () {
                t.resize()
            }, Se.addEventListener(t, "resize", n), e.resize = n)
        },
        unbindEvents: function () {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, H.each(e, function (e, n) {
                Se.removeEventListener(t, n, e)
            }))
        },
        updateHoverStyle: function (t, e, n) {
            var i, r, o, a = n ? "set" : "remove";
            for (r = 0, o = t.length; r < o; ++r)(i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[a + "HoverStyle"](i);
            "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + a + "DatasetHoverStyle"]()
        },
        eventHandler: function (t) {
            var e = this,
                n = e.tooltip;
            if (!1 !== Te.notify(e, "beforeEvent", [t])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var i = e.handleEvent(t);
                n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), Te.notify(e, "afterEvent", [t]);
                var r = e._bufferedRequest;
                return r ? e.render(r) : i && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        },
        handleEvent: function (t) {
            var e, n = this,
                i = n.options || {},
                r = i.hover;
            return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, r.mode, r), H.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), e = !H.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
        }
    }), $e.instances = {};
    var Xe = $e;

    function Ge() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function Ke(t) {
        this.options = t || {}
    }
    $e.Controller = $e, $e.types = {}, H.configMerge = He, H.scaleMerge = We, H.extend(Ke.prototype, {
        formats: Ge,
        parse: Ge,
        format: Ge,
        add: Ge,
        diff: Ge,
        startOf: Ge,
        endOf: Ge,
        _create: function (t) {
            return t
        }
    }), Ke.override = function (t) {
        H.extend(Ke.prototype, t)
    };
    var Qe = {
            _date: Ke
        },
        Ze = {
            formatters: {
                values: function (t) {
                    return H.isArray(t) ? t : "" + t
                },
                linear: function (t, e, n) {
                    var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                    Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                    var r = H.log10(Math.abs(i)),
                        o = "";
                    if (0 !== t)
                        if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                            var a = H.log10(Math.abs(t)),
                                s = Math.floor(a) - Math.floor(r);
                            s = Math.max(Math.min(s, 20), 0), o = t.toExponential(s)
                        } else {
                            var l = -1 * Math.floor(r);
                            l = Math.max(Math.min(l, 20), 0), o = t.toFixed(l)
                        }
                    else o = "0";
                    return o
                },
                logarithmic: function (t, e, n) {
                    var i = t / Math.pow(10, Math.floor(H.log10(t)));
                    return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                }
            }
        },
        Je = H.isArray,
        tn = H.isNullOrUndef,
        en = H.valueOrDefault,
        nn = H.valueAtIndexOrDefault;

    function rn(t, e, n) {
        var i, r = t.getTicks().length,
            o = Math.min(e, r - 1),
            a = t.getPixelForTick(o),
            s = t._startPixel,
            l = t._endPixel;
        if (!(n && (i = 1 === r ? Math.max(a - s, l - a) : 0 === e ? (t.getPixelForTick(1) - a) / 2 : (a - t.getPixelForTick(o - 1)) / 2, (a += o < e ? i : -i) < s - 1e-6 || a > l + 1e-6))) return a
    }

    function on(t) {
        return t.drawTicks ? t.tickMarkLength : 0
    }

    function an(t) {
        var e, n;
        return t.display ? (e = H.options._parseFont(t), n = H.options.toPadding(t.padding), e.lineHeight + n.height) : 0
    }

    function sn(t, e) {
        return H.extend(H.options._parseFont({
            fontFamily: en(e.fontFamily, t.fontFamily),
            fontSize: en(e.fontSize, t.fontSize),
            fontStyle: en(e.fontStyle, t.fontStyle),
            lineHeight: en(e.lineHeight, t.lineHeight)
        }), {
            color: H.options.resolve([e.fontColor, t.fontColor, R.global.defaultFontColor])
        })
    }

    function ln(t) {
        var e = sn(t, t.minor);
        return {
            minor: e,
            major: t.major.enabled ? sn(t, t.major) : e
        }
    }

    function un(t) {
        var e, n, i, r = [];
        for (n = 0, i = t.length; n < i; ++n) void 0 !== (e = t[n])._index && r.push(e);
        return r
    }

    function cn(t, e, n, i) {
        var r, o, a, s, l = en(n, 0),
            u = Math.min(en(i, t.length), t.length),
            c = 0;
        for (e = Math.ceil(e), i && (e = (r = i - n) / Math.floor(r / e)), s = l; s < 0;) c++, s = Math.round(l + c * e);
        for (o = Math.max(l, 0); o < u; o++) a = t[o], o === s ? (a._index = o, c++, s = Math.round(l + c * e)) : delete a.label
    }
    R._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: Ze.formatters.values,
            minor: {},
            major: {}
        }
    });
    var dn = X.extend({
        zeroLineIndex: 0,
        getPadding: function () {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        },
        getTicks: function () {
            return this._ticks
        },
        _getLabels: function () {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        },
        mergeTicksOptions: function () {},
        beforeUpdate: function () {
            H.callback(this.options.beforeUpdate, [this])
        },
        update: function (t, e, n) {
            var i, r, o, a, s, l = this,
                u = l.options.ticks,
                c = u.sampleSize;
            if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = H.extend({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), a = l.buildTicks() || [], (!(a = l.afterBuildTicks(a) || a) || !a.length) && l.ticks)
                for (a = [], i = 0, r = l.ticks.length; i < r; ++i) a.push({
                    value: l.ticks[i],
                    major: !1
                });
            return l._ticks = a, s = c < a.length, o = l._convertTicksToLabels(s ? function (t, e) {
                for (var n = [], i = t.length / e, r = 0, o = t.length; r < o; r += i) n.push(t[Math.floor(r)]);
                return n
            }(a, c) : a), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(a) : a, s && (o = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = o, l.afterUpdate(), l.minSize
        },
        _configure: function () {
            var t, e, n = this,
                i = n.options.ticks.reverse;
            n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t
        },
        afterUpdate: function () {
            H.callback(this.options.afterUpdate, [this])
        },
        beforeSetDimensions: function () {
            H.callback(this.options.beforeSetDimensions, [this])
        },
        setDimensions: function () {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
        },
        afterSetDimensions: function () {
            H.callback(this.options.afterSetDimensions, [this])
        },
        beforeDataLimits: function () {
            H.callback(this.options.beforeDataLimits, [this])
        },
        determineDataLimits: H.noop,
        afterDataLimits: function () {
            H.callback(this.options.afterDataLimits, [this])
        },
        beforeBuildTicks: function () {
            H.callback(this.options.beforeBuildTicks, [this])
        },
        buildTicks: H.noop,
        afterBuildTicks: function (t) {
            var e = this;
            return Je(t) && t.length ? H.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = H.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
        },
        beforeTickToLabelConversion: function () {
            H.callback(this.options.beforeTickToLabelConversion, [this])
        },
        convertTicksToLabels: function () {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
        },
        afterTickToLabelConversion: function () {
            H.callback(this.options.afterTickToLabelConversion, [this])
        },
        beforeCalculateTickRotation: function () {
            H.callback(this.options.beforeCalculateTickRotation, [this])
        },
        calculateTickRotation: function () {
            var t, e, n, i, r, o, a, s = this,
                l = s.options,
                u = l.ticks,
                c = s.getTicks().length,
                d = u.minRotation || 0,
                h = u.maxRotation,
                f = d;
            !s._isVisible() || !u.display || d >= h || c <= 1 || !s.isHorizontal() ? s.labelRotation = d : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (r = l.offset ? s.maxWidth / c : i / (c - 1)) && (r = i / (c - (l.offset ? .5 : 1)), o = s.maxHeight - on(l.gridLines) - u.padding - an(l.scaleLabel), a = Math.sqrt(e * e + n * n), f = H.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / r, 1)), Math.asin(Math.min(o / a, 1)) - Math.asin(n / a))), f = Math.max(d, Math.min(h, f))), s.labelRotation = f)
        },
        afterCalculateTickRotation: function () {
            H.callback(this.options.afterCalculateTickRotation, [this])
        },
        beforeFit: function () {
            H.callback(this.options.beforeFit, [this])
        },
        fit: function () {
            var t = this,
                e = t.minSize = {
                    width: 0,
                    height: 0
                },
                n = t.chart,
                i = t.options,
                r = i.ticks,
                o = i.scaleLabel,
                a = i.gridLines,
                s = t._isVisible(),
                l = "bottom" === i.position,
                u = t.isHorizontal();
            if (u ? e.width = t.maxWidth : s && (e.width = on(a) + an(o)), u ? s && (e.height = on(a) + an(o)) : e.height = t.maxHeight, r.display && s) {
                var c = ln(r),
                    d = t._getLabelSizes(),
                    h = d.first,
                    f = d.last,
                    p = d.widest,
                    g = d.highest,
                    m = .4 * c.minor.lineHeight,
                    v = r.padding;
                if (u) {
                    var b = 0 !== t.labelRotation,
                        y = H.toRadians(t.labelRotation),
                        x = Math.cos(y),
                        w = Math.sin(y),
                        k = w * p.width + x * (g.height - (b ? g.offset : 0)) + (b ? 0 : m);
                    e.height = Math.min(t.maxHeight, e.height + k + v);
                    var _, C, M = t.getPixelForTick(0) - t.left,
                        S = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    b ? (_ = l ? x * h.width + w * h.offset : w * (h.height - h.offset), C = l ? w * (f.height - f.offset) : x * f.width + w * f.offset) : (_ = h.width / 2, C = f.width / 2), t.paddingLeft = Math.max((_ - M) * t.width / (t.width - M), 0) + 3, t.paddingRight = Math.max((C - S) * t.width / (t.width - S), 0) + 3
                } else {
                    var T = r.mirror ? 0 : p.width + v + m;
                    e.width = Math.min(t.maxWidth, e.width + T), t.paddingTop = h.height / 2, t.paddingBottom = f.height / 2
                }
            }
            t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom)
        },
        handleMargins: function () {
            var t = this;
            t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
        },
        afterFit: function () {
            H.callback(this.options.afterFit, [this])
        },
        isHorizontal: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        isFullWidth: function () {
            return this.options.fullWidth
        },
        getRightValue: function (t) {
            if (tn(t)) return NaN;
            if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
            if (t)
                if (this.isHorizontal()) {
                    if (void 0 !== t.x) return this.getRightValue(t.x)
                } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t
        },
        _convertTicksToLabels: function (t) {
            var e, n, i, r = this;
            for (r.ticks = t.map(function (t) {
                    return t.value
                }), r.beforeTickToLabelConversion(), e = r.convertTicksToLabels(t) || r.ticks, r.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n) t[n].label = e[n];
            return e
        },
        _getLabelSizes: function () {
            var t = this,
                e = t._labelSizes;
            return e || (t._labelSizes = e = function (t, e, n, i) {
                var r, o, a, s, l, u, c, d, h, f, p, g, m, v = n.length,
                    b = [],
                    y = [],
                    x = [],
                    w = 0,
                    k = 0;
                for (r = 0; r < v; ++r) {
                    if (s = n[r].label, l = n[r].major ? e.major : e.minor, t.font = u = l.string, c = i[u] = i[u] || {
                            data: {},
                            gc: []
                        }, d = l.lineHeight, h = f = 0, tn(s) || Je(s)) {
                        if (Je(s))
                            for (o = 0, a = s.length; o < a; ++o) p = s[o], tn(p) || Je(p) || (h = H.measureText(t, c.data, c.gc, h, p), f += d)
                    } else h = H.measureText(t, c.data, c.gc, h, s), f = d;
                    b.push(h), y.push(f), x.push(d / 2), w = Math.max(h, w), k = Math.max(f, k)
                }

                function _(t) {
                    return {
                        width: b[t] || 0,
                        height: y[t] || 0,
                        offset: x[t] || 0
                    }
                }
                return function (t, e) {
                    H.each(t, function (t) {
                        var n, i = t.gc,
                            r = i.length / 2;
                        if (r > e) {
                            for (n = 0; n < r; ++n) delete t.data[i[n]];
                            i.splice(0, r)
                        }
                    })
                }(i, v), g = b.indexOf(w), m = y.indexOf(k), {
                    first: _(0),
                    last: _(v - 1),
                    widest: _(g),
                    highest: _(m)
                }
            }(t.ctx, ln(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
        },
        _parseValue: function (t) {
            var e, n, i, r;
            return Je(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), r = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, r = t), {
                min: i,
                max: r,
                start: e,
                end: n
            }
        },
        _getScaleLabel: function (t) {
            var e = this._parseValue(t);
            return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
        },
        getLabelForIndex: H.noop,
        getPixelForValue: H.noop,
        getValueForPixel: H.noop,
        getPixelForTick: function (t) {
            var e = this.options.offset,
                n = this._ticks.length,
                i = 1 / Math.max(n - (e ? 0 : 1), 1);
            return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0))
        },
        getPixelForDecimal: function (t) {
            return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
        },
        getDecimalForPixel: function (t) {
            var e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        },
        getBasePixel: function () {
            return this.getPixelForValue(this.getBaseValue())
        },
        getBaseValue: function () {
            var t = this.min,
                e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        },
        _autoSkip: function (t) {
            var e, n, i, r, o = this.options.ticks,
                a = this._length,
                s = o.maxTicksLimit || a / this._tickSize() + 1,
                l = o.major.enabled ? function (t) {
                    var e, n, i = [];
                    for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
                    return i
                }(t) : [],
                u = l.length,
                c = l[0],
                d = l[u - 1];
            if (u > s) return function (t, e, n) {
                var i, r, o = 0,
                    a = e[0];
                for (n = Math.ceil(n), i = 0; i < t.length; i++) r = t[i], i === a ? (r._index = i, a = e[++o * n]) : delete r.label
            }(t, l, u / s), un(t);
            if (i = function (t, e, n, i) {
                    var r, o, a, s, l = function (t) {
                            var e, n, i = t.length;
                            if (i < 2) return !1;
                            for (n = t[0], e = 1; e < i; ++e)
                                if (t[e] - t[e - 1] !== n) return !1;
                            return n
                        }(t),
                        u = (e.length - 1) / i;
                    if (!l) return Math.max(u, 1);
                    for (a = 0, s = (r = H.math._factorize(l)).length - 1; a < s; a++)
                        if ((o = r[a]) > u) return o;
                    return Math.max(u, 1)
                }(l, t, 0, s), u > 0) {
                for (e = 0, n = u - 1; e < n; e++) cn(t, i, l[e], l[e + 1]);
                return r = u > 1 ? (d - c) / (u - 1) : null, cn(t, i, H.isNullOrUndef(r) ? 0 : c - r, c), cn(t, i, d, H.isNullOrUndef(r) ? t.length : d + r), un(t)
            }
            return cn(t, i), un(t)
        },
        _tickSize: function () {
            var t = this.options.ticks,
                e = H.toRadians(this.labelRotation),
                n = Math.abs(Math.cos(e)),
                i = Math.abs(Math.sin(e)),
                r = this._getLabelSizes(),
                o = t.autoSkipPadding || 0,
                a = r ? r.widest.width + o : 0,
                s = r ? r.highest.height + o : 0;
            return this.isHorizontal() ? s * n > a * i ? a / n : s / i : s * i < a * n ? s / n : a / i
        },
        _isVisible: function () {
            var t, e, n, i = this.chart,
                r = this.options.display;
            if ("auto" !== r) return !!r;
            for (t = 0, e = i.data.datasets.length; t < e; ++t)
                if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
            return !1
        },
        _computeGridLineItems: function (t) {
            var e, n, i, r, o, a, s, l, u, c, d, h, f, p, g, m, v, b = this,
                y = b.chart,
                x = b.options,
                w = x.gridLines,
                k = x.position,
                _ = w.offsetGridLines,
                C = b.isHorizontal(),
                M = b._ticksToDraw,
                S = M.length + (_ ? 1 : 0),
                T = on(w),
                A = [],
                D = w.drawBorder ? nn(w.lineWidth, 0, 0) : 0,
                P = D / 2,
                I = H._alignPixel,
                L = function (t) {
                    return I(y, t, D)
                };
            for ("top" === k ? (e = L(b.bottom), s = b.bottom - T, u = e - P, d = L(t.top) + P, f = t.bottom) : "bottom" === k ? (e = L(b.top), d = t.top, f = L(t.bottom) - P, s = e + P, u = b.top + T) : "left" === k ? (e = L(b.right), a = b.right - T, l = e - P, c = L(t.left) + P, h = t.right) : (e = L(b.left), c = t.left, h = L(t.right) - P, a = e + P, l = b.left + T), n = 0; n < S; ++n) i = M[n] || {}, tn(i.label) && n < M.length || (n === b.zeroLineIndex && x.offset === _ ? (p = w.zeroLineWidth, g = w.zeroLineColor, m = w.zeroLineBorderDash || [], v = w.zeroLineBorderDashOffset || 0) : (p = nn(w.lineWidth, n, 1), g = nn(w.color, n, "rgba(0,0,0,0.1)"), m = w.borderDash || [], v = w.borderDashOffset || 0), void 0 !== (r = rn(b, i._index || n, _)) && (o = I(y, r, p), C ? a = l = c = h = o : s = u = d = f = o, A.push({
                tx1: a,
                ty1: s,
                tx2: l,
                ty2: u,
                x1: c,
                y1: d,
                x2: h,
                y2: f,
                width: p,
                color: g,
                borderDash: m,
                borderDashOffset: v
            })));
            return A.ticksLength = S, A.borderValue = e, A
        },
        _computeLabelItems: function () {
            var t, e, n, i, r, o, a, s, l, u, c, d, h = this,
                f = h.options,
                p = f.ticks,
                g = f.position,
                m = p.mirror,
                v = h.isHorizontal(),
                b = h._ticksToDraw,
                y = ln(p),
                x = p.padding,
                w = on(f.gridLines),
                k = -H.toRadians(h.labelRotation),
                _ = [];
            for ("top" === g ? (o = h.bottom - w - x, a = k ? "left" : "center") : "bottom" === g ? (o = h.top + w + x, a = k ? "right" : "center") : "left" === g ? (r = h.right - (m ? 0 : w) - x, a = m ? "left" : "right") : (r = h.left + (m ? 0 : w) + x, a = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t) i = (n = b[t]).label, tn(i) || (s = h.getPixelForTick(n._index || t) + p.labelOffset, u = (l = n.major ? y.major : y.minor).lineHeight, c = Je(i) ? i.length : 1, v ? (r = s, d = "top" === g ? ((k ? 1 : .5) - c) * u : (k ? 0 : .5) * u) : (o = s, d = (1 - c) * u / 2), _.push({
                x: r,
                y: o,
                rotation: k,
                label: i,
                font: l,
                textOffset: d,
                textAlign: a
            }));
            return _
        },
        _drawGrid: function (t) {
            var e = this,
                n = e.options.gridLines;
            if (n.display) {
                var i, r, o, a, s, l = e.ctx,
                    u = e.chart,
                    c = H._alignPixel,
                    d = n.drawBorder ? nn(n.lineWidth, 0, 0) : 0,
                    h = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                for (o = 0, a = h.length; o < a; ++o) i = (s = h[o]).width, r = s.color, i && r && (l.save(), l.lineWidth = i, l.strokeStyle = r, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
                if (d) {
                    var f, p, g, m, v = d,
                        b = nn(n.lineWidth, h.ticksLength - 1, 1),
                        y = h.borderValue;
                    e.isHorizontal() ? (f = c(u, e.left, v) - v / 2, p = c(u, e.right, b) + b / 2, g = m = y) : (g = c(u, e.top, v) - v / 2, m = c(u, e.bottom, b) + b / 2, f = p = y), l.lineWidth = d, l.strokeStyle = nn(n.color, 0), l.beginPath(), l.moveTo(f, g), l.lineTo(p, m), l.stroke()
                }
            }
        },
        _drawLabels: function () {
            var t = this;
            if (t.options.ticks.display) {
                var e, n, i, r, o, a, s, l, u = t.ctx,
                    c = t._labelItems || (t._labelItems = t._computeLabelItems());
                for (e = 0, i = c.length; e < i; ++e) {
                    if (a = (o = c[e]).font, u.save(), u.translate(o.x, o.y), u.rotate(o.rotation), u.font = a.string, u.fillStyle = a.color, u.textBaseline = "middle", u.textAlign = o.textAlign, s = o.label, l = o.textOffset, Je(s))
                        for (n = 0, r = s.length; n < r; ++n) u.fillText("" + s[n], 0, l), l += a.lineHeight;
                    else u.fillText(s, 0, l);
                    u.restore()
                }
            }
        },
        _drawTitle: function () {
            var t = this,
                e = t.ctx,
                n = t.options,
                i = n.scaleLabel;
            if (i.display) {
                var r, o, a = en(i.fontColor, R.global.defaultFontColor),
                    s = H.options._parseFont(i),
                    l = H.options.toPadding(i.padding),
                    u = s.lineHeight / 2,
                    c = n.position,
                    d = 0;
                if (t.isHorizontal()) r = t.left + t.width / 2, o = "bottom" === c ? t.bottom - u - l.bottom : t.top + u + l.top;
                else {
                    var h = "left" === c;
                    r = h ? t.left + u + l.top : t.right - u - l.top, o = t.top + t.height / 2, d = h ? -.5 * Math.PI : .5 * Math.PI
                }
                e.save(), e.translate(r, o), e.rotate(d), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = a, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore()
            }
        },
        draw: function (t) {
            this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
        },
        _layers: function () {
            var t = this,
                e = t.options,
                n = e.ticks && e.ticks.z || 0,
                i = e.gridLines && e.gridLines.z || 0;
            return t._isVisible() && n !== i && t.draw === t._draw ? [{
                z: i,
                draw: function () {
                    t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                }
            }, {
                z: n,
                draw: function () {
                    t._drawLabels.apply(t, arguments)
                }
            }] : [{
                z: n,
                draw: function () {
                    t.draw.apply(t, arguments)
                }
            }]
        },
        _getMatchingVisibleMetas: function (t) {
            var e = this,
                n = e.isHorizontal();
            return e.chart._getSortedVisibleDatasetMetas().filter(function (i) {
                return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id)
            })
        }
    });
    dn.prototype._draw = dn.prototype.draw;
    var hn = dn,
        fn = H.isNullOrUndef,
        pn = hn.extend({
            determineDataLimits: function () {
                var t, e = this,
                    n = e._getLabels(),
                    i = e.options.ticks,
                    r = i.min,
                    o = i.max,
                    a = 0,
                    s = n.length - 1;
                void 0 !== r && (t = n.indexOf(r)) >= 0 && (a = t), void 0 !== o && (t = n.indexOf(o)) >= 0 && (s = t), e.minIndex = a, e.maxIndex = s, e.min = n[a], e.max = n[s]
            },
            buildTicks: function () {
                var t = this._getLabels(),
                    e = this.minIndex,
                    n = this.maxIndex;
                this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1)
            },
            getLabelForIndex: function (t, e) {
                var n = this.chart;
                return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t]
            },
            _configure: function () {
                var t = this,
                    e = t.options.offset,
                    n = t.ticks;
                hn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1))
            },
            getPixelForValue: function (t, e, n) {
                var i, r, o, a = this;
                return fn(e) || fn(n) || (t = a.chart.data.datasets[n].data[e]), fn(t) || (i = a.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (r = a._getLabels(), t = H.valueOrDefault(i, t), e = -1 !== (o = r.indexOf(t)) ? o : e, isNaN(e) && (e = t)), a.getPixelForDecimal((e - a._startValue) / a._valueRange)
            },
            getPixelForTick: function (t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
            },
            getValueForPixel: function (t) {
                var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                return Math.min(Math.max(e, 0), this.ticks.length - 1)
            },
            getBasePixel: function () {
                return this.bottom
            }
        });
    pn._defaults = {
        position: "bottom"
    };
    var gn = H.noop,
        mn = H.isNullOrUndef,
        vn = hn.extend({
            getRightValue: function (t) {
                return "string" == typeof t ? +t : hn.prototype.getRightValue.call(this, t)
            },
            handleTickRangeOptions: function () {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var n = H.sign(t.min),
                        i = H.sign(t.max);
                    n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0)
                }
                var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                    o = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: function () {
                var t, e = this.options.ticks,
                    n = e.stepSize,
                    i = e.maxTicksLimit;
                return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t
            },
            _computeTickLimit: function () {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: gn,
            buildTicks: function () {
                var t = this,
                    e = t.options.ticks,
                    n = t.getTickLimit(),
                    i = {
                        maxTicks: n = Math.max(2, n),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: H.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    r = t.ticks = function (t, e) {
                        var n, i, r, o, a = [],
                            s = t.stepSize,
                            l = s || 1,
                            u = t.maxTicks - 1,
                            c = t.min,
                            d = t.max,
                            h = t.precision,
                            f = e.min,
                            p = e.max,
                            g = H.niceNum((p - f) / u / l) * l;
                        if (g < 1e-14 && mn(c) && mn(d)) return [f, p];
                        (o = Math.ceil(p / g) - Math.floor(f / g)) > u && (g = H.niceNum(o * g / u / l) * l), s || mn(h) ? n = Math.pow(10, H._decimalPlaces(g)) : (n = Math.pow(10, h), g = Math.ceil(g * n) / n), i = Math.floor(f / g) * g, r = Math.ceil(p / g) * g, s && (!mn(c) && H.almostWhole(c / g, g / 1e3) && (i = c), !mn(d) && H.almostWhole(d / g, g / 1e3) && (r = d)), o = (r - i) / g, o = H.almostEquals(o, Math.round(o), g / 1e3) ? Math.round(o) : Math.ceil(o), i = Math.round(i * n) / n, r = Math.round(r * n) / n, a.push(mn(c) ? i : c);
                        for (var m = 1; m < o; ++m) a.push(Math.round((i + m * g) * n) / n);
                        return a.push(mn(d) ? r : d), a
                    }(i, t);
                t.handleDirectionalChanges(), t.max = H.max(r), t.min = H.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function () {
                var t = this;
                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), hn.prototype.convertTicksToLabels.call(t)
            },
            _configure: function () {
                var t, e = this,
                    n = e.getTicks(),
                    i = e.min,
                    r = e.max;
                hn.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (r - i) / Math.max(n.length - 1, 1) / 2, r += t), e._startValue = i, e._endValue = r, e._valueRange = r - i
            }
        }),
        bn = {
            position: "left",
            ticks: {
                callback: Ze.formatters.linear
            }
        };

    function yn(t, e, n, i) {
        var r, o, a = t.options,
            s = function (t, e, n) {
                var i = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join(".");
                return void 0 === t[i] && (t[i] = {
                    pos: [],
                    neg: []
                }), t[i]
            }(e, a.stacked, n),
            l = s.pos,
            u = s.neg,
            c = i.length;
        for (r = 0; r < c; ++r) o = t._parseValue(i[r]), isNaN(o.min) || isNaN(o.max) || n.data[r].hidden || (l[r] = l[r] || 0, u[r] = u[r] || 0, a.relativePoints ? l[r] = 100 : o.min < 0 || o.max < 0 ? u[r] += o.min : l[r] += o.max)
    }

    function xn(t, e, n) {
        var i, r, o = n.length;
        for (i = 0; i < o; ++i) r = t._parseValue(n[i]), isNaN(r.min) || isNaN(r.max) || e.data[i].hidden || (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max))
    }
    var wn = vn.extend({
            determineDataLimits: function () {
                var t, e, n, i, r = this,
                    o = r.options,
                    a = r.chart.data.datasets,
                    s = r._getMatchingVisibleMetas(),
                    l = o.stacked,
                    u = {},
                    c = s.length;
                if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === l)
                    for (t = 0; !l && t < c; ++t) l = void 0 !== (e = s[t]).stack;
                for (t = 0; t < c; ++t) n = a[(e = s[t]).index].data, l ? yn(r, u, e, n) : xn(r, e, n);
                H.each(u, function (t) {
                    i = t.pos.concat(t.neg), r.min = Math.min(r.min, H.min(i)), r.max = Math.max(r.max, H.max(i))
                }), r.min = H.isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = H.isFinite(r.max) && !isNaN(r.max) ? r.max : 1, r.handleTickRangeOptions()
            },
            _computeTickLimit: function () {
                var t;
                return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = H.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
            },
            handleDirectionalChanges: function () {
                this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function (t, e) {
                return this._getScaleLabel(this.chart.data.datasets[e].data[t])
            },
            getPixelForValue: function (t) {
                return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange)
            },
            getValueForPixel: function (t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange
            },
            getPixelForTick: function (t) {
                var e = this.ticksAsNumbers;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
            }
        }),
        kn = bn;
    wn._defaults = kn;
    var _n = H.valueOrDefault,
        Cn = H.math.log10,
        Mn = {
            position: "left",
            ticks: {
                callback: Ze.formatters.logarithmic
            }
        };

    function Sn(t, e) {
        return H.isFinite(t) && t >= 0 ? t : e
    }
    var Tn = hn.extend({
            determineDataLimits: function () {
                var t, e, n, i, r, o, a = this,
                    s = a.options,
                    l = a.chart,
                    u = l.data.datasets,
                    c = a.isHorizontal();

                function d(t) {
                    return c ? t.xAxisID === a.id : t.yAxisID === a.id
                }
                a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, a.minNotZero = Number.POSITIVE_INFINITY;
                var h = s.stacked;
                if (void 0 === h)
                    for (t = 0; t < u.length; t++)
                        if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && d(e) && void 0 !== e.stack) {
                            h = !0;
                            break
                        } if (s.stacked || h) {
                    var f = {};
                    for (t = 0; t < u.length; t++) {
                        var p = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                        if (l.isDatasetVisible(t) && d(e))
                            for (void 0 === f[p] && (f[p] = []), r = 0, o = (i = u[t].data).length; r < o; r++) {
                                var g = f[p];
                                n = a._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (g[r] = g[r] || 0, g[r] += n.max)
                            }
                    }
                    H.each(f, function (t) {
                        if (t.length > 0) {
                            var e = H.min(t),
                                n = H.max(t);
                            a.min = Math.min(a.min, e), a.max = Math.max(a.max, n)
                        }
                    })
                } else
                    for (t = 0; t < u.length; t++)
                        if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && d(e))
                            for (r = 0, o = (i = u[t].data).length; r < o; r++) n = a._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (a.min = Math.min(n.min, a.min), a.max = Math.max(n.max, a.max), 0 !== n.min && (a.minNotZero = Math.min(n.min, a.minNotZero)));
                a.min = H.isFinite(a.min) ? a.min : null, a.max = H.isFinite(a.max) ? a.max : null, a.minNotZero = H.isFinite(a.minNotZero) ? a.minNotZero : null, this.handleTickRangeOptions()
            },
            handleTickRangeOptions: function () {
                var t = this,
                    e = t.options.ticks;
                t.min = Sn(e.min, t.min), t.max = Sn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Cn(t.min)) - 1), t.max = Math.pow(10, Math.floor(Cn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(Cn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Cn(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Cn(t.max))) : t.minNotZero = 1)
            },
            buildTicks: function () {
                var t = this,
                    e = t.options.ticks,
                    n = !t.isHorizontal(),
                    i = {
                        min: Sn(e.min),
                        max: Sn(e.max)
                    },
                    r = t.ticks = function (t, e) {
                        var n, i, r = [],
                            o = _n(t.min, Math.pow(10, Math.floor(Cn(e.min)))),
                            a = Math.floor(Cn(e.max)),
                            s = Math.ceil(e.max / Math.pow(10, a));
                        0 === o ? (n = Math.floor(Cn(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(o), o = i * Math.pow(10, n)) : (n = Math.floor(Cn(o)), i = Math.floor(o / Math.pow(10, n)));
                        var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                        do {
                            r.push(o), 10 == ++i && (i = 1, l = ++n >= 0 ? 1 : l), o = Math.round(i * Math.pow(10, n) * l) / l
                        } while (n < a || n === a && i < s);
                        var u = _n(t.max, o);
                        return r.push(u), r
                    }(i, t);
                t.max = H.max(r), t.min = H.min(r), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && r.reverse()
            },
            convertTicksToLabels: function () {
                this.tickValues = this.ticks.slice(), hn.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function (t, e) {
                return this._getScaleLabel(this.chart.data.datasets[e].data[t])
            },
            getPixelForTick: function (t) {
                var e = this.tickValues;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
            },
            _getFirstTickValue: function (t) {
                var e = Math.floor(Cn(t));
                return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
            },
            _configure: function () {
                var t = this,
                    e = t.min,
                    n = 0;
                hn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = _n(t.options.ticks.fontSize, R.global.defaultFontSize) / t._length), t._startValue = Cn(e), t._valueOffset = n, t._valueRange = (Cn(t.max) - Cn(e)) / (1 - n)
            },
            getPixelForValue: function (t) {
                var e = this,
                    n = 0;
                return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (Cn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n)
            },
            getValueForPixel: function (t) {
                var e = this,
                    n = e.getDecimalForPixel(t);
                return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
            }
        }),
        An = Mn;
    Tn._defaults = An;
    var Dn = H.valueOrDefault,
        Pn = H.valueAtIndexOrDefault,
        In = H.options.resolve,
        Ln = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0,0,0,0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            gridLines: {
                circular: !1
            },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: Ze.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function (t) {
                    return t
                }
            }
        };

    function Nn(t) {
        var e = t.ticks;
        return e.display && t.display ? Dn(e.fontSize, R.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function On(t, e, n, i, r) {
        return t === i || t === r ? {
            start: e - n / 2,
            end: e + n / 2
        } : t < i || t > r ? {
            start: e - n,
            end: e
        } : {
            start: e,
            end: e + n
        }
    }

    function En(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function Fn(t, e, n, i) {
        var r, o, a = n.y + i / 2;
        if (H.isArray(e))
            for (r = 0, o = e.length; r < o; ++r) t.fillText(e[r], n.x, a), a += i;
        else t.fillText(e, n.x, a)
    }

    function Rn(t, e, n) {
        90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
    }

    function jn(t) {
        return H.isNumber(t) ? t : 0
    }
    var zn = vn.extend({
            setDimensions: function () {
                var t = this;
                t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Nn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
            },
            determineDataLimits: function () {
                var t = this,
                    e = t.chart,
                    n = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                H.each(e.data.datasets, function (r, o) {
                    if (e.isDatasetVisible(o)) {
                        var a = e.getDatasetMeta(o);
                        H.each(r.data, function (e, r) {
                            var o = +t.getRightValue(e);
                            isNaN(o) || a.data[r].hidden || (n = Math.min(o, n), i = Math.max(o, i))
                        })
                    }
                }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
            },
            _computeTickLimit: function () {
                return Math.ceil(this.drawingArea / Nn(this.options))
            },
            convertTicksToLabels: function () {
                var t = this;
                vn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(function () {
                    var e = H.callback(t.options.pointLabels.callback, arguments, t);
                    return e || 0 === e ? e : ""
                })
            },
            getLabelForIndex: function (t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function () {
                var t = this.options;
                t.display && t.pointLabels.display ? function (t) {
                    var e, n, i, r = H.options._parseFont(t.options.pointLabels),
                        o = {
                            l: 0,
                            r: t.width,
                            t: 0,
                            b: t.height - t.paddingTop
                        },
                        a = {};
                    t.ctx.font = r.string, t._pointLabelSizes = [];
                    var s, l, u, c = t.chart.data.labels.length;
                    for (e = 0; e < c; e++) {
                        i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = r.lineHeight, u = t.pointLabels[e], n = H.isArray(u) ? {
                            w: H.longestText(s, s.font, u),
                            h: u.length * l
                        } : {
                            w: s.measureText(u).width,
                            h: l
                        }, t._pointLabelSizes[e] = n;
                        var d = t.getIndexAngle(e),
                            h = H.toDegrees(d) % 360,
                            f = On(h, i.x, n.w, 0, 180),
                            p = On(h, i.y, n.h, 90, 270);
                        f.start < o.l && (o.l = f.start, a.l = d), f.end > o.r && (o.r = f.end, a.r = d), p.start < o.t && (o.t = p.start, a.t = d), p.end > o.b && (o.b = p.end, a.b = d)
                    }
                    t.setReductions(t.drawingArea, o, a)
                }(this) : this.setCenterPoint(0, 0, 0, 0)
            },
            setReductions: function (t, e, n) {
                var i = this,
                    r = e.l / Math.sin(n.l),
                    o = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                    a = -e.t / Math.cos(n.t),
                    s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
                r = jn(r), o = jn(o), a = jn(a), s = jn(s), i.drawingArea = Math.min(Math.floor(t - (r + o) / 2), Math.floor(t - (a + s) / 2)), i.setCenterPoint(r, o, a, s)
            },
            setCenterPoint: function (t, e, n, i) {
                var r = this,
                    o = r.width - e - r.drawingArea,
                    a = t + r.drawingArea,
                    s = n + r.drawingArea,
                    l = r.height - r.paddingTop - i - r.drawingArea;
                r.xCenter = Math.floor((a + o) / 2 + r.left), r.yCenter = Math.floor((s + l) / 2 + r.top + r.paddingTop)
            },
            getIndexAngle: function (t) {
                var e = this.chart,
                    n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
                return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function (t) {
                var e = this;
                if (H.isNullOrUndef(t)) return NaN;
                var n = e.drawingArea / (e.max - e.min);
                return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
            },
            getPointPosition: function (t, e) {
                var n = this.getIndexAngle(t) - Math.PI / 2;
                return {
                    x: Math.cos(n) * e + this.xCenter,
                    y: Math.sin(n) * e + this.yCenter
                }
            },
            getPointPositionForValue: function (t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function (t) {
                var e = this.min,
                    n = this.max;
                return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
            },
            _drawGrid: function () {
                var t, e, n, i = this,
                    r = i.ctx,
                    o = i.options,
                    a = o.gridLines,
                    s = o.angleLines,
                    l = Dn(s.lineWidth, a.lineWidth),
                    u = Dn(s.color, a.color);
                if (o.pointLabels.display && function (t) {
                        var e = t.ctx,
                            n = t.options,
                            i = n.pointLabels,
                            r = Nn(n),
                            o = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                            a = H.options._parseFont(i);
                        e.save(), e.font = a.string, e.textBaseline = "middle";
                        for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                            var l = 0 === s ? r / 2 : 0,
                                u = t.getPointPosition(s, o + l + 5),
                                c = Pn(i.fontColor, s, R.global.defaultFontColor);
                            e.fillStyle = c;
                            var d = t.getIndexAngle(s),
                                h = H.toDegrees(d);
                            e.textAlign = En(h), Rn(h, t._pointLabelSizes[s], u), Fn(e, t.pointLabels[s], u, a.lineHeight)
                        }
                        e.restore()
                    }(i), a.display && H.each(i.ticks, function (t, n) {
                        0 !== n && (e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]), function (t, e, n, i) {
                            var r, o = t.ctx,
                                a = e.circular,
                                s = t.chart.data.labels.length,
                                l = Pn(e.color, i - 1),
                                u = Pn(e.lineWidth, i - 1);
                            if ((a || s) && l && u) {
                                if (o.save(), o.strokeStyle = l, o.lineWidth = u, o.setLineDash && (o.setLineDash(e.borderDash || []), o.lineDashOffset = e.borderDashOffset || 0), o.beginPath(), a) o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                                else {
                                    r = t.getPointPosition(0, n), o.moveTo(r.x, r.y);
                                    for (var c = 1; c < s; c++) r = t.getPointPosition(c, n), o.lineTo(r.x, r.y)
                                }
                                o.closePath(), o.stroke(), o.restore()
                            }
                        }(i, a, e, n))
                    }), s.display && l && u) {
                    for (r.save(), r.lineWidth = l, r.strokeStyle = u, r.setLineDash && (r.setLineDash(In([s.borderDash, a.borderDash, []])), r.lineDashOffset = In([s.borderDashOffset, a.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; t >= 0; t--) e = i.getDistanceFromCenterForValue(o.ticks.reverse ? i.min : i.max), n = i.getPointPosition(t, e), r.beginPath(), r.moveTo(i.xCenter, i.yCenter), r.lineTo(n.x, n.y), r.stroke();
                    r.restore()
                }
            },
            _drawLabels: function () {
                var t = this,
                    e = t.ctx,
                    n = t.options.ticks;
                if (n.display) {
                    var i, r, o = t.getIndexAngle(0),
                        a = H.options._parseFont(n),
                        s = Dn(n.fontColor, R.global.defaultFontColor);
                    e.save(), e.font = a.string, e.translate(t.xCenter, t.yCenter), e.rotate(o), e.textAlign = "center", e.textBaseline = "middle", H.each(t.ticks, function (o, l) {
                        (0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (r = e.measureText(o).width, e.fillStyle = n.backdropColor, e.fillRect(-r / 2 - n.backdropPaddingX, -i - a.size / 2 - n.backdropPaddingY, r + 2 * n.backdropPaddingX, a.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(o, 0, -i))
                    }), e.restore()
                }
            },
            _drawTitle: H.noop
        }),
        Bn = Ln;
    zn._defaults = Bn;
    var Wn = H._deprecated,
        Hn = H.options.resolve,
        Vn = H.valueOrDefault,
        qn = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Un = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Yn = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        $n = Object.keys(Yn);

    function Xn(t, e) {
        return t - e
    }

    function Gn(t) {
        return H.valueOrDefault(t.time.min, t.ticks.min)
    }

    function Kn(t) {
        return H.valueOrDefault(t.time.max, t.ticks.max)
    }

    function Qn(t, e, n, i) {
        var r = function (t, e, n) {
                for (var i, r, o, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
                    if (r = t[(i = a + s >> 1) - 1] || null, o = t[i], !r) return {
                        lo: null,
                        hi: o
                    };
                    if (o[e] < n) a = i + 1;
                    else {
                        if (!(r[e] > n)) return {
                            lo: r,
                            hi: o
                        };
                        s = i - 1
                    }
                }
                return {
                    lo: o,
                    hi: null
                }
            }(t, e, n),
            o = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
            a = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
            s = a[e] - o[e],
            l = s ? (n - o[e]) / s : 0,
            u = (a[i] - o[i]) * l;
        return o[i] + u
    }

    function Zn(t, e) {
        var n = t._adapter,
            i = t.options.time,
            r = i.parser,
            o = r || i.format,
            a = e;
        return "function" == typeof r && (a = r(a)), H.isFinite(a) || (a = "string" == typeof o ? n.parse(a, o) : n.parse(a)), null !== a ? +a : (r || "function" != typeof o || (a = o(e), H.isFinite(a) || (a = n.parse(a))), a)
    }

    function Jn(t, e) {
        if (H.isNullOrUndef(e)) return null;
        var n = t.options.time,
            i = Zn(t, t.getRightValue(e));
        return null === i || n.round && (i = +t._adapter.startOf(i, n.round)), i
    }

    function ti(t, e, n, i) {
        var r, o, a, s = $n.length;
        for (r = $n.indexOf(t); r < s - 1; ++r)
            if (a = (o = Yn[$n[r]]).steps ? o.steps : Un, o.common && Math.ceil((n - e) / (a * o.size)) <= i) return $n[r];
        return $n[s - 1]
    }

    function ei(t, e, n) {
        var i, r, o = [],
            a = {},
            s = e.length;
        for (i = 0; i < s; ++i) a[r = e[i]] = i, o.push({
            value: r,
            major: !1
        });
        return 0 !== s && n ? function (t, e, n, i) {
            var r, o, a = t._adapter,
                s = +a.startOf(e[0].value, i),
                l = e[e.length - 1].value;
            for (r = s; r <= l; r = +a.add(r, 1, i))(o = n[r]) >= 0 && (e[o].major = !0);
            return e
        }(t, o, a, n) : o
    }
    var ni = hn.extend({
        initialize: function () {
            this.mergeTicksOptions(), hn.prototype.initialize.call(this)
        },
        update: function () {
            var t = this,
                e = t.options,
                n = e.time || (e.time = {}),
                i = t._adapter = new Qe._date(e.adapters.date);
            return Wn("time scale", n.format, "time.format", "time.parser"), Wn("time scale", n.min, "time.min", "ticks.min"), Wn("time scale", n.max, "time.max", "ticks.max"), H.mergeIf(n.displayFormats, i.formats()), hn.prototype.update.apply(t, arguments)
        },
        getRightValue: function (t) {
            return t && void 0 !== t.t && (t = t.t), hn.prototype.getRightValue.call(this, t)
        },
        determineDataLimits: function () {
            var t, e, n, i, r, o, a, s = this,
                l = s.chart,
                u = s._adapter,
                c = s.options,
                d = c.time.unit || "day",
                h = Un,
                f = qn,
                p = [],
                g = [],
                m = [],
                v = s._getLabels();
            for (t = 0, n = v.length; t < n; ++t) m.push(Jn(s, v[t]));
            for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                if (l.isDatasetVisible(t))
                    if (r = l.data.datasets[t].data, H.isObject(r[0]))
                        for (g[t] = [], e = 0, i = r.length; e < i; ++e) o = Jn(s, r[e]), p.push(o), g[t][e] = o;
                    else g[t] = m.slice(0), a || (p = p.concat(m), a = !0);
            else g[t] = [];
            m.length && (h = Math.min(h, m[0]), f = Math.max(f, m[m.length - 1])), p.length && (p = n > 1 ? function (t) {
                var e, n, i, r = {},
                    o = [];
                for (e = 0, n = t.length; e < n; ++e) r[i = t[e]] || (r[i] = !0, o.push(i));
                return o
            }(p).sort(Xn) : p.sort(Xn), h = Math.min(h, p[0]), f = Math.max(f, p[p.length - 1])), h = Jn(s, Gn(c)) || h, f = Jn(s, Kn(c)) || f, h = h === Un ? +u.startOf(Date.now(), d) : h, f = f === qn ? +u.endOf(Date.now(), d) + 1 : f, s.min = Math.min(h, f), s.max = Math.max(h + 1, f), s._table = [], s._timestamps = {
                data: p,
                datasets: g,
                labels: m
            }
        },
        buildTicks: function () {
            var t, e, n, i = this,
                r = i.min,
                o = i.max,
                a = i.options,
                s = a.ticks,
                l = a.time,
                u = i._timestamps,
                c = [],
                d = i.getLabelCapacity(r),
                h = s.source,
                f = a.distribution;
            for (u = "data" === h || "auto" === h && "series" === f ? u.data : "labels" === h ? u.labels : function (t, e, n, i) {
                    var r, o = t._adapter,
                        a = t.options,
                        s = a.time,
                        l = s.unit || ti(s.minUnit, e, n, i),
                        u = Hn([s.stepSize, s.unitStepSize, 1]),
                        c = "week" === l && s.isoWeekday,
                        d = e,
                        h = [];
                    if (c && (d = +o.startOf(d, "isoWeek", c)), d = +o.startOf(d, c ? "day" : l), o.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
                    for (r = d; r < n; r = +o.add(r, u, l)) h.push(r);
                    return r !== n && "ticks" !== a.bounds || h.push(r), h
                }(i, r, o, d), "ticks" === a.bounds && u.length && (r = u[0], o = u[u.length - 1]), r = Jn(i, Gn(a)) || r, o = Jn(i, Kn(a)) || o, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= r && n <= o && c.push(n);
            return i.min = r, i.max = o, i._unit = l.unit || (s.autoSkip ? ti(l.minUnit, i.min, i.max, d) : function (t, e, n, i, r) {
                var o, a;
                for (o = $n.length - 1; o >= $n.indexOf(n); o--)
                    if (a = $n[o], Yn[a].common && t._adapter.diff(r, i, a) >= e - 1) return a;
                return $n[n ? $n.indexOf(n) : 0]
            }(i, c.length, l.minUnit, i.min, i.max)), i._majorUnit = s.major.enabled && "year" !== i._unit ? function (t) {
                for (var e = $n.indexOf(t) + 1, n = $n.length; e < n; ++e)
                    if (Yn[$n[e]].common) return $n[e]
            }(i._unit) : void 0, i._table = function (t, e, n, i) {
                if ("linear" === i || !t.length) return [{
                    time: e,
                    pos: 0
                }, {
                    time: n,
                    pos: 1
                }];
                var r, o, a, s, l, u = [],
                    c = [e];
                for (r = 0, o = t.length; r < o; ++r)(s = t[r]) > e && s < n && c.push(s);
                for (c.push(n), r = 0, o = c.length; r < o; ++r) l = c[r + 1], a = c[r - 1], s = c[r], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                    time: s,
                    pos: r / (o - 1)
                });
                return u
            }(i._timestamps.data, r, o, f), i._offsets = function (t, e, n, i, r) {
                var o, a, s = 0,
                    l = 0;
                return r.offset && e.length && (o = Qn(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - o : (Qn(t, "time", e[1], "pos") - o) / 2, a = Qn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? a : (a - Qn(t, "time", e[e.length - 2], "pos")) / 2), {
                    start: s,
                    end: l,
                    factor: 1 / (s + 1 + l)
                }
            }(i._table, c, 0, 0, a), s.reverse && c.reverse(), ei(i, c, i._majorUnit)
        },
        getLabelForIndex: function (t, e) {
            var n = this,
                i = n._adapter,
                r = n.chart.data,
                o = n.options.time,
                a = r.labels && t < r.labels.length ? r.labels[t] : "",
                s = r.datasets[e].data[t];
            return H.isObject(s) && (a = n.getRightValue(s)), o.tooltipFormat ? i.format(Zn(n, a), o.tooltipFormat) : "string" == typeof a ? a : i.format(Zn(n, a), o.displayFormats.datetime)
        },
        tickFormatFunction: function (t, e, n, i) {
            var r = this._adapter,
                o = this.options,
                a = o.time.displayFormats,
                s = a[this._unit],
                l = this._majorUnit,
                u = a[l],
                c = n[e],
                d = o.ticks,
                h = l && u && c && c.major,
                f = r.format(t, i || (h ? u : s)),
                p = h ? d.major : d.minor,
                g = Hn([p.callback, p.userCallback, d.callback, d.userCallback]);
            return g ? g(f, e, n) : f
        },
        convertTicksToLabels: function (t) {
            var e, n, i = [];
            for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(t[e].value, e, t));
            return i
        },
        getPixelForOffset: function (t) {
            var e = this._offsets,
                n = Qn(this._table, "time", t, "pos");
            return this.getPixelForDecimal((e.start + n) * e.factor)
        },
        getPixelForValue: function (t, e, n) {
            var i = null;
            if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = Jn(this, t)), null !== i) return this.getPixelForOffset(i)
        },
        getPixelForTick: function (t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
        },
        getValueForPixel: function (t) {
            var e = this._offsets,
                n = this.getDecimalForPixel(t) / e.factor - e.end,
                i = Qn(this._table, "pos", n, "time");
            return this._adapter._create(i)
        },
        _getLabelSize: function (t) {
            var e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                i = H.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                r = Math.cos(i),
                o = Math.sin(i),
                a = Vn(e.fontSize, R.global.defaultFontSize);
            return {
                w: n * r + a * o,
                h: n * o + a * r
            }
        },
        getLabelWidth: function (t) {
            return this._getLabelSize(t).w
        },
        getLabelCapacity: function (t) {
            var e = this,
                n = e.options.time,
                i = n.displayFormats,
                r = i[n.unit] || i.millisecond,
                o = e.tickFormatFunction(t, 0, ei(e, [t], e._majorUnit), r),
                a = e._getLabelSize(o),
                s = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h);
            return e.options.offset && s--, s > 0 ? s : 1
        }
    });
    ni._defaults = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    var ii = {
            category: pn,
            linear: wn,
            logarithmic: Tn,
            radialLinear: zn,
            time: ni
        },
        ri = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
        };
    Qe._date.override("function" == typeof t ? {
        _id: "moment",
        formats: function () {
            return ri
        },
        parse: function (e, n) {
            return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
        },
        format: function (e, n) {
            return t(e).format(n)
        },
        add: function (e, n, i) {
            return t(e).add(n, i).valueOf()
        },
        diff: function (e, n, i) {
            return t(e).diff(t(n), i)
        },
        startOf: function (e, n, i) {
            return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf()
        },
        endOf: function (e, n) {
            return t(e).endOf(n).valueOf()
        },
        _create: function (e) {
            return t(e)
        }
    } : {}), R._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var oi = {
        dataset: function (t) {
            var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                r = i && n.isDatasetVisible(e) && i.dataset._children || [],
                o = r.length || 0;
            return o ? function (t, e) {
                return e < o && r[e]._view || null
            } : null
        },
        boundary: function (t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return H.isArray(e) ? function (t, n) {
                return e[n]
            } : function (t) {
                return {
                    x: null === n ? t.x : n,
                    y: null === i ? t.y : i
                }
            }
        }
    };

    function ai(t, e, n) {
        var i, r = t._model || {},
            o = r.fill;
        if (void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o) return !1;
        if (!0 === o) return "origin";
        if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
        switch (o) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return o;
            default:
                return !1
        }
    }

    function si(t) {
        return (t.el._scale || {}).getPointPositionForValue ? function (t) {
            var e, n, i, r, o, a = t.el._scale,
                s = a.options,
                l = a.chart.data.labels.length,
                u = t.fill,
                c = [];
            if (!l) return null;
            for (e = s.ticks.reverse ? a.max : a.min, n = s.ticks.reverse ? a.min : a.max, i = a.getPointPositionForValue(0, e), r = 0; r < l; ++r) o = "start" === u || "end" === u ? a.getPointPositionForValue(r, "start" === u ? e : n) : a.getBasePosition(r), s.gridLines.circular && (o.cx = i.x, o.cy = i.y, o.angle = a.getIndexAngle(r) - Math.PI / 2), c.push(o);
            return c
        }(t) : function (t) {
            var e, n = t.el._model || {},
                i = t.el._scale || {},
                r = t.fill,
                o = null;
            if (isFinite(r)) return null;
            if ("start" === r ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePixel && (o = i.getBasePixel()), null != o) {
                if (void 0 !== o.x && void 0 !== o.y) return o;
                if (H.isFinite(o)) return {
                    x: (e = i.isHorizontal()) ? o : null,
                    y: e ? null : o
                }
            }
            return null
        }(t)
    }

    function li(t, e, n) {
        var i, r = t[e].fill,
            o = [e];
        if (!n) return r;
        for (; !1 !== r && -1 === o.indexOf(r);) {
            if (!isFinite(r)) return r;
            if (!(i = t[r])) return !1;
            if (i.visible) return r;
            o.push(r), r = i.fill
        }
        return !1
    }

    function ui(t) {
        var e = t.fill,
            n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), oi[n](t))
    }

    function ci(t) {
        return t && !t.skip
    }

    function di(t, e, n, i, r) {
        var o, a, s, l;
        if (i && r) {
            for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) H.canvas.lineTo(t, e[o - 1], e[o]);
            if (void 0 === n[0].angle)
                for (t.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) H.canvas.lineTo(t, n[o], n[o - 1], !0);
            else
                for (a = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - a, 2) + Math.pow(n[0].y - s, 2)), o = r - 1; o > 0; --o) t.arc(a, s, l, n[o].angle, n[o - 1].angle, !0)
        }
    }

    function hi(t, e, n, i, r, o) {
        var a, s, l, u, c, d, h, f, p = e.length,
            g = i.spanGaps,
            m = [],
            v = [],
            b = 0,
            y = 0;
        for (t.beginPath(), a = 0, s = p; a < s; ++a) c = n(u = e[l = a % p]._view, l, i), d = ci(u), h = ci(c), o && void 0 === f && d && (s = p + (f = a + 1)), d && h ? (b = m.push(u), y = v.push(c)) : b && y && (g ? (d && m.push(u), h && v.push(c)) : (di(t, m, v, b, y), b = y = 0, m = [], v = []));
        di(t, m, v, b, y), t.closePath(), t.fillStyle = r, t.fill()
    }
    var fi = {
            id: "filler",
            afterDatasetsUpdate: function (t, e) {
                var n, i, r, o, a = (t.data.datasets || []).length,
                    s = e.propagate,
                    l = [];
                for (i = 0; i < a; ++i) o = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof yt.Line && (o = {
                    visible: t.isDatasetVisible(i),
                    fill: ai(r, i, a),
                    chart: t,
                    el: r
                }), n.$filler = o, l.push(o);
                for (i = 0; i < a; ++i)(o = l[i]) && (o.fill = li(l, i, s), o.boundary = si(o), o.mapper = ui(o))
            },
            beforeDatasetsDraw: function (t) {
                var e, n, i, r, o, a, s, l = t._getSortedVisibleDatasetMetas(),
                    u = t.ctx;
                for (n = l.length - 1; n >= 0; --n)(e = l[n].$filler) && e.visible && (r = (i = e.el)._view, o = i._children || [], a = e.mapper, s = r.backgroundColor || R.global.defaultColor, a && s && o.length && (H.canvas.clipArea(u, t.chartArea), hi(u, o, a, r, s, i._loop), H.canvas.unclipArea(u)))
            }
        },
        pi = H.rtl.getRtlAdapter,
        gi = H.noop,
        mi = H.valueOrDefault;

    function vi(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }
    R._set("global", {
        legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (t, e) {
                var n = e.datasetIndex,
                    i = this.chart,
                    r = i.getDatasetMeta(n);
                r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function (t) {
                    var e = t.data.datasets,
                        n = t.options.legend || {},
                        i = n.labels && n.labels.usePointStyle;
                    return t._getSortedDatasetMetas().map(function (n) {
                        var r = n.controller.getStyle(i ? 0 : void 0);
                        return {
                            text: e[n.index].label,
                            fillStyle: r.backgroundColor,
                            hidden: !t.isDatasetVisible(n.index),
                            lineCap: r.borderCapStyle,
                            lineDash: r.borderDash,
                            lineDashOffset: r.borderDashOffset,
                            lineJoin: r.borderJoinStyle,
                            lineWidth: r.borderWidth,
                            strokeStyle: r.borderColor,
                            pointStyle: r.pointStyle,
                            rotation: r.rotation,
                            datasetIndex: n.index
                        }
                    }, this)
                }
            }
        },
        legendCallback: function (t) {
            var e, n, i, r = document.createElement("ul"),
                o = t.data.datasets;
            for (r.setAttribute("class", t.id + "-legend"), e = 0, n = o.length; e < n; e++)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[e].backgroundColor, o[e].label && i.appendChild(document.createTextNode(o[e].label));
            return r.outerHTML
        }
    });
    var bi = X.extend({
        initialize: function (t) {
            H.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
        },
        beforeUpdate: gi,
        update: function (t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: gi,
        beforeSetDimensions: gi,
        setDimensions: function () {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: gi,
        beforeBuildLabels: gi,
        buildLabels: function () {
            var t = this,
                e = t.options.labels || {},
                n = H.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter(function (n) {
                return e.filter(n, t.chart.data)
            })), t.options.reverse && n.reverse(), t.legendItems = n
        },
        afterBuildLabels: gi,
        beforeFit: gi,
        fit: function () {
            var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                r = t.ctx,
                o = H.options._parseFont(n),
                a = o.size,
                s = t.legendHitBoxes = [],
                l = t.minSize,
                u = t.isHorizontal();
            if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) {
                if (r.font = o.string, u) {
                    var c = t.lineWidths = [0],
                        d = 0;
                    r.textAlign = "left", r.textBaseline = "middle", H.each(t.legendItems, function (t, e) {
                        var i = vi(n, a) + a / 2 + r.measureText(t.text).width;
                        (0 === e || c[c.length - 1] + i + 2 * n.padding > l.width) && (d += a + n.padding, c[c.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: a
                        }, c[c.length - 1] += i + n.padding
                    }), l.height += d
                } else {
                    var h = n.padding,
                        f = t.columnWidths = [],
                        p = t.columnHeights = [],
                        g = n.padding,
                        m = 0,
                        v = 0;
                    H.each(t.legendItems, function (t, e) {
                        var i = vi(n, a) + a / 2 + r.measureText(t.text).width;
                        e > 0 && v + a + 2 * h > l.height && (g += m + n.padding, f.push(m), p.push(v), m = 0, v = 0), m = Math.max(m, i), v += a + h, s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: a
                        }
                    }), g += m, f.push(m), p.push(v), l.width += g
                }
                t.width = l.width, t.height = l.height
            } else t.width = l.width = t.height = l.height = 0
        },
        afterFit: gi,
        isHorizontal: function () {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function () {
            var t = this,
                e = t.options,
                n = e.labels,
                i = R.global,
                r = i.defaultColor,
                o = i.elements.line,
                a = t.height,
                s = t.columnHeights,
                l = t.width,
                u = t.lineWidths;
            if (e.display) {
                var c, d = pi(e.rtl, t.left, t.minSize.width),
                    h = t.ctx,
                    f = mi(n.fontColor, i.defaultFontColor),
                    p = H.options._parseFont(n),
                    g = p.size;
                h.textAlign = d.textAlign("left"), h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = p.string;
                var m = vi(n, g),
                    v = t.legendHitBoxes,
                    b = function (t, i) {
                        switch (e.align) {
                            case "start":
                                return n.padding;
                            case "end":
                                return t - i;
                            default:
                                return (t - i + n.padding) / 2
                        }
                    },
                    y = t.isHorizontal();
                c = y ? {
                    x: t.left + b(l, u[0]),
                    y: t.top + n.padding,
                    line: 0
                } : {
                    x: t.left + n.padding,
                    y: t.top + b(a, s[0]),
                    line: 0
                }, H.rtl.overrideTextDirection(t.ctx, e.textDirection);
                var x = g + n.padding;
                H.each(t.legendItems, function (e, i) {
                    var f = h.measureText(e.text).width,
                        p = m + g / 2 + f,
                        w = c.x,
                        k = c.y;
                    d.setWidth(t.minSize.width), y ? i > 0 && w + p + n.padding > t.left + t.minSize.width && (k = c.y += x, c.line++, w = c.x = t.left + b(l, u[c.line])) : i > 0 && k + x > t.top + t.minSize.height && (w = c.x = w + t.columnWidths[c.line] + n.padding, c.line++, k = c.y = t.top + b(a, s[c.line]));
                    var _ = d.x(w);
                    ! function (t, e, i) {
                        if (!(isNaN(m) || m <= 0)) {
                            h.save();
                            var a = mi(i.lineWidth, o.borderWidth);
                            if (h.fillStyle = mi(i.fillStyle, r), h.lineCap = mi(i.lineCap, o.borderCapStyle), h.lineDashOffset = mi(i.lineDashOffset, o.borderDashOffset), h.lineJoin = mi(i.lineJoin, o.borderJoinStyle), h.lineWidth = a, h.strokeStyle = mi(i.strokeStyle, r), h.setLineDash && h.setLineDash(mi(i.lineDash, o.borderDash)), n && n.usePointStyle) {
                                var s = m * Math.SQRT2 / 2,
                                    l = d.xPlus(t, m / 2),
                                    u = e + g / 2;
                                H.canvas.drawPoint(h, i.pointStyle, s, l, u, i.rotation)
                            } else h.fillRect(d.leftForLtr(t, m), e, m, g), 0 !== a && h.strokeRect(d.leftForLtr(t, m), e, m, g);
                            h.restore()
                        }
                    }(_, k, e), v[i].left = d.leftForLtr(_, v[i].width), v[i].top = k,
                        function (t, e, n, i) {
                            var r = g / 2,
                                o = d.xPlus(t, m + r),
                                a = e + r;
                            h.fillText(n.text, o, a), n.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(o, a), h.lineTo(d.xPlus(o, i), a), h.stroke())
                        }(_, k, e, f), y ? c.x += p + n.padding : c.y += x
                }), H.rtl.restoreTextDirection(t.ctx, e.textDirection)
            }
        },
        _getLegendItemAt: function (t, e) {
            var n, i, r, o = this;
            if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom)
                for (r = o.legendHitBoxes, n = 0; n < r.length; ++n)
                    if (t >= (i = r[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return o.legendItems[n];
            return null
        },
        handleEvent: function (t) {
            var e, n = this,
                i = n.options,
                r = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === r) {
                if (!i.onHover && !i.onLeave) return
            } else {
                if ("click" !== r) return;
                if (!i.onClick) return
            }
            e = n._getLegendItemAt(t.x, t.y), "click" === r ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e))
        }
    });

    function yi(t, e) {
        var n = new bi({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        de.configure(t, n, e), de.addBox(t, n), t.legend = n
    }
    var xi = {
            id: "legend",
            _element: bi,
            beforeInit: function (t) {
                var e = t.options.legend;
                e && yi(t, e)
            },
            beforeUpdate: function (t) {
                var e = t.options.legend,
                    n = t.legend;
                e ? (H.mergeIf(e, R.global.legend), n ? (de.configure(t, n, e), n.options = e) : yi(t, e)) : n && (de.removeBox(t, n), delete t.legend)
            },
            afterEvent: function (t, e) {
                var n = t.legend;
                n && n.handleEvent(e)
            }
        },
        wi = H.noop;
    R._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var ki = X.extend({
        initialize: function (t) {
            H.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: wi,
        update: function (t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: wi,
        beforeSetDimensions: wi,
        setDimensions: function () {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: wi,
        beforeBuildLabels: wi,
        buildLabels: wi,
        afterBuildLabels: wi,
        beforeFit: wi,
        fit: function () {
            var t, e = this,
                n = e.options,
                i = e.minSize = {},
                r = e.isHorizontal();
            n.display ? (t = (H.isArray(n.text) ? n.text.length : 1) * H.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = r ? e.maxWidth : t, e.height = i.height = r ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0
        },
        afterFit: wi,
        isHorizontal: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function () {
            var t = this,
                e = t.ctx,
                n = t.options;
            if (n.display) {
                var i, r, o, a = H.options._parseFont(n),
                    s = a.lineHeight,
                    l = s / 2 + n.padding,
                    u = 0,
                    c = t.top,
                    d = t.left,
                    h = t.bottom,
                    f = t.right;
                e.fillStyle = H.valueOrDefault(n.fontColor, R.global.defaultFontColor), e.font = a.string, t.isHorizontal() ? (r = d + (f - d) / 2, o = c + l, i = f - d) : (r = "left" === n.position ? d + l : f - l, o = c + (h - c) / 2, i = h - c, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, o), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
                var p = n.text;
                if (H.isArray(p))
                    for (var g = 0, m = 0; m < p.length; ++m) e.fillText(p[m], 0, g, i), g += s;
                else e.fillText(p, 0, 0, i);
                e.restore()
            }
        }
    });

    function _i(t, e) {
        var n = new ki({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        de.configure(t, n, e), de.addBox(t, n), t.titleBlock = n
    }
    var Ci = {},
        Mi = fi,
        Si = xi,
        Ti = {
            id: "title",
            _element: ki,
            beforeInit: function (t) {
                var e = t.options.title;
                e && _i(t, e)
            },
            beforeUpdate: function (t) {
                var e = t.options.title,
                    n = t.titleBlock;
                e ? (H.mergeIf(e, R.global.title), n ? (de.configure(t, n, e), n.options = e) : _i(t, e)) : n && (de.removeBox(t, n), delete t.titleBlock)
            }
        };
    for (var Ai in Ci.filler = Mi, Ci.legend = Si, Ci.title = Ti, Xe.helpers = H,
            function () {
                function t(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function e(t) {
                    return null != t && "none" !== t
                }

                function n(n, i, r) {
                    var o = document.defaultView,
                        a = H._getParentNode(n),
                        s = o.getComputedStyle(n)[i],
                        l = o.getComputedStyle(a)[i],
                        u = e(s),
                        c = e(l),
                        d = Number.POSITIVE_INFINITY;
                    return u || c ? Math.min(u ? t(s, n, r) : d, c ? t(l, a, r) : d) : "none"
                }
                H.where = function (t, e) {
                    if (H.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return H.each(t, function (t) {
                        e(t) && n.push(t)
                    }), n
                }, H.findIndex = Array.prototype.findIndex ? function (t, e, n) {
                    return t.findIndex(e, n)
                } : function (t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, r = t.length; i < r; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1
                }, H.findNextWhere = function (t, e, n) {
                    H.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, H.findPreviousWhere = function (t, e, n) {
                    H.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, H.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, H.almostEquals = function (t, e, n) {
                    return Math.abs(t - e) < n
                }, H.almostWhole = function (t, e) {
                    var n = Math.round(t);
                    return n - e <= t && n + e >= t
                }, H.max = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, H.min = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, H.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, H.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, H.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, H._decimalPlaces = function (t) {
                    if (H.isFinite(t)) {
                        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
                        return n
                    }
                }, H.getAngleFromPoint = function (t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        r = Math.sqrt(n * n + i * i),
                        o = Math.atan2(i, n);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: r
                    }
                }, H.distanceBetweenPoints = function (t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, H.aliasPixel = function (t) {
                    return t % 2 == 0 ? 0 : .5
                }, H._alignPixel = function (t, e, n) {
                    var i = t.currentDevicePixelRatio,
                        r = n / 2;
                    return Math.round((e - r) * i) / i + r
                }, H.splineCurve = function (t, e, n, i) {
                    var r = t.skip ? e : t,
                        o = e,
                        a = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                        u = s / (s + l),
                        c = l / (s + l),
                        d = i * (u = isNaN(u) ? 0 : u),
                        h = i * (c = isNaN(c) ? 0 : c);
                    return {
                        previous: {
                            x: o.x - d * (a.x - r.x),
                            y: o.y - d * (a.y - r.y)
                        },
                        next: {
                            x: o.x + h * (a.x - r.x),
                            y: o.y + h * (a.y - r.y)
                        }
                    }
                }, H.EPSILON = Number.EPSILON || 1e-14, H.splineCurveMonotone = function (t) {
                    var e, n, i, r, o, a, s, l, u, c = (t || []).map(function (t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        d = c.length;
                    for (e = 0; e < d; ++e)
                        if (!(i = c[e]).model.skip) {
                            if (n = e > 0 ? c[e - 1] : null, (r = e < d - 1 ? c[e + 1] : null) && !r.model.skip) {
                                var h = r.model.x - i.model.x;
                                i.deltaK = 0 !== h ? (r.model.y - i.model.y) / h : 0
                            }!n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                        } for (e = 0; e < d - 1; ++e) i = c[e], r = c[e + 1], i.model.skip || r.model.skip || (H.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (o = i.mK / i.deltaK, a = r.mK / i.deltaK, (l = Math.pow(o, 2) + Math.pow(a, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = o * s * i.deltaK, r.mK = a * s * i.deltaK)));
                    for (e = 0; e < d; ++e)(i = c[e]).model.skip || (n = e > 0 ? c[e - 1] : null, r = e < d - 1 ? c[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), r && !r.model.skip && (u = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK))
                }, H.nextItem = function (t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, H.previousItem = function (t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, H.niceNum = function (t, e) {
                    var n = Math.floor(H.log10(t)),
                        i = t / Math.pow(10, n);
                    return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, H.requestAnimFrame = "undefined" == typeof window ? function (t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, H.getRelativePosition = function (t, e) {
                    var n, i, r = t.originalEvent || t,
                        o = t.target || t.srcElement,
                        a = o.getBoundingClientRect(),
                        s = r.touches;
                    s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY);
                    var l = parseFloat(H.getStyle(o, "padding-left")),
                        u = parseFloat(H.getStyle(o, "padding-top")),
                        c = parseFloat(H.getStyle(o, "padding-right")),
                        d = parseFloat(H.getStyle(o, "padding-bottom")),
                        h = a.right - a.left - l - c,
                        f = a.bottom - a.top - u - d;
                    return {
                        x: n = Math.round((n - a.left - l) / h * o.width / e.currentDevicePixelRatio),
                        y: i = Math.round((i - a.top - u) / f * o.height / e.currentDevicePixelRatio)
                    }
                }, H.getConstraintWidth = function (t) {
                    return n(t, "max-width", "clientWidth")
                }, H.getConstraintHeight = function (t) {
                    return n(t, "max-height", "clientHeight")
                }, H._calculatePadding = function (t, e, n) {
                    return (e = H.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
                }, H._getParentNode = function (t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                }, H.getMaximumWidth = function (t) {
                    var e = H._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var n = e.clientWidth,
                        i = n - H._calculatePadding(e, "padding-left", n) - H._calculatePadding(e, "padding-right", n),
                        r = H.getConstraintWidth(t);
                    return isNaN(r) ? i : Math.min(i, r)
                }, H.getMaximumHeight = function (t) {
                    var e = H._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var n = e.clientHeight,
                        i = n - H._calculatePadding(e, "padding-top", n) - H._calculatePadding(e, "padding-bottom", n),
                        r = H.getConstraintHeight(t);
                    return isNaN(r) ? i : Math.min(i, r)
                }, H.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, H.retinaScale = function (t, e) {
                    var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = t.canvas,
                            r = t.height,
                            o = t.width;
                        i.height = r * n, i.width = o * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = o + "px")
                    }
                }, H.fontString = function (t, e, n) {
                    return e + " " + t + "px " + n
                }, H.longestText = function (t, e, n, i) {
                    var r = (i = i || {}).data = i.data || {},
                        o = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
                    var a, s, l, u, c, d = 0,
                        h = n.length;
                    for (a = 0; a < h; a++)
                        if (null != (u = n[a]) && !0 !== H.isArray(u)) d = H.measureText(t, r, o, d, u);
                        else if (H.isArray(u))
                        for (s = 0, l = u.length; s < l; s++) null == (c = u[s]) || H.isArray(c) || (d = H.measureText(t, r, o, d, c));
                    var f = o.length / 2;
                    if (f > n.length) {
                        for (a = 0; a < f; a++) delete r[o[a]];
                        o.splice(0, f)
                    }
                    return d
                }, H.measureText = function (t, e, n, i, r) {
                    var o = e[r];
                    return o || (o = e[r] = t.measureText(r).width, n.push(r)), o > i && (i = o), i
                }, H.numberOfLabelLines = function (t) {
                    var e = 1;
                    return H.each(t, function (t) {
                        H.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, H.color = w ? function (t) {
                    return t instanceof CanvasGradient && (t = R.global.defaultColor), w(t)
                } : function (t) {
                    return console.error("Color.js not found!"), t
                }, H.getHoverColor = function (t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : H.color(t).saturate(.5).darken(.1).rgbString()
                }
            }(), Xe._adapters = Qe, Xe.Animation = K, Xe.animationService = Q, Xe.controllers = Xt, Xe.DatasetController = nt, Xe.defaults = R, Xe.Element = X, Xe.elements = yt, Xe.Interaction = ee, Xe.layouts = de, Xe.platform = Se, Xe.plugins = Te, Xe.Scale = hn, Xe.scaleService = Ae, Xe.Ticks = Ze, Xe.Tooltip = ze, Xe.helpers.each(ii, function (t, e) {
                Xe.scaleService.registerScaleType(e, t, t._defaults)
            }), Ci) Ci.hasOwnProperty(Ai) && Xe.plugins.register(Ci[Ai]);
    Xe.platform.initialize();
    var Di = Xe;
    return "undefined" != typeof window && (window.Chart = Xe), Xe.Chart = Xe, Xe.Legend = Ci.legend._element, Xe.Title = Ci.title._element, Xe.pluginService = Xe.plugins, Xe.PluginBase = Xe.Element.extend({}), Xe.canvasHelpers = Xe.helpers.canvas, Xe.layoutService = Xe.layouts, Xe.LinearScaleBase = vn, Xe.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
        Xe[t] = function (e, n) {
            return new Xe(e, Xe.helpers.merge(n || {}, {
                type: t.charAt(0).toLowerCase() + t.slice(1)
            }))
        }
    }), Di
});