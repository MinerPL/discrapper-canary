n.d(t, { AO: () => d, Fu: () => f, TM: () => E, sC: () => V, yJ: () => h, zR: () => y });
var r = n(1139),
    i = n(861193),
    a = n(987701),
    s = n(258635);
function o(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
function u(e) {
    return "/" === e.charAt(0) ? e.substr(1) : e;
}
function c(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
        ? e.substr(t.length)
        : e;
}
function l(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function d(e) {
    var t = e.pathname,
        n = e.search,
        r = e.hash,
        i = t || "/";
    return (
        n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
        i
    );
}
function h(e, t, n, a) {
    var s, o, u, c, l, d;
    "string" == typeof e
        ? ((u = ""),
          (c = ""),
          -1 !== (l = (o = e || "/").indexOf("#")) && ((c = o.substr(l)), (o = o.substr(0, l))),
          -1 !== (d = o.indexOf("?")) && ((u = o.substr(d)), (o = o.substr(0, d))),
          ((s = { pathname: o, search: "?" === u ? "" : u, hash: "#" === c ? "" : c }).state = t))
        : (void 0 === (s = (0, r.A)({}, e)).pathname && (s.pathname = ""),
          s.search ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search) : (s.search = ""),
          s.hash ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash) : (s.hash = ""),
          void 0 !== t && void 0 === s.state && (s.state = t));
    try {
        s.pathname = decodeURI(s.pathname);
    } catch (e) {
        if (e instanceof URIError)
            throw URIError(
                'Pathname "' +
                    s.pathname +
                    '" could not be decoded. This is likely caused by an invalid percent-encoding.',
            );
        throw e;
    }
    return (
        n && (s.key = n),
        a
            ? s.pathname
                ? "/" !== s.pathname.charAt(0) && (s.pathname = (0, i.A)(s.pathname, a.pathname))
                : (s.pathname = a.pathname)
            : s.pathname || (s.pathname = "/"),
        s
    );
}
function f(e, t) {
    return (
        e.pathname === t.pathname &&
        e.search === t.search &&
        e.hash === t.hash &&
        e.key === t.key &&
        (0, a.A)(e.state, t.state)
    );
}
function p() {
    var e = null,
        t = [];
    return {
        setPrompt: function (t) {
            return (
                (e = t),
                function () {
                    e === t && (e = null);
                }
            );
        },
        confirmTransitionTo: function (t, n, r, i) {
            if (null != e) {
                var a = "function" == typeof e ? e(t, n) : e;
                "string" == typeof a ? ("function" == typeof r ? r(a, i) : i(!0)) : i(!1 !== a);
            } else i(!0);
        },
        appendListener: function (e) {
            var n = !0;
            function r() {
                n && e.apply(void 0, arguments);
            }
            return (
                t.push(r),
                function () {
                    ((n = !1),
                        (t = t.filter(function (e) {
                            return e !== r;
                        })));
                }
            );
        },
        notifyListeners: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach(function (e) {
                return e.apply(void 0, n);
            });
        },
    };
}
var _ = !!("u" > typeof window && window.document && window.document.createElement);
function m(e, t) {
    t(window.confirm(e));
}
var g = "popstate",
    b = "hashchange";
function v() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function y(e) {
    (void 0 === e && (e = {}), _ || (0, s.A)(!1));
    var t,
        n = window.history,
        i =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
        a = -1 !== window.navigator.userAgent.indexOf("Trident"),
        u = e,
        f = u.forceRefresh,
        y = void 0 !== f && f,
        w = u.getUserConfirmation,
        k = void 0 === w ? m : w,
        x = u.keyLength,
        R = void 0 === x ? 6 : x,
        A = e.basename ? l(o(e.basename)) : "";
    function E(e) {
        var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
        return (A && (a = c(a, A)), h(a, r, n));
    }
    function T() {
        return Math.random().toString(36).substr(2, R);
    }
    var V = p();
    function C(e) {
        ((0, r.A)(N, e), (N.length = n.length), V.notifyListeners(N.location, N.action));
    }
    function D(e) {
        (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) && S(E(e.state));
    }
    function F() {
        S(E(v()));
    }
    var P = !1;
    function S(e) {
        P
            ? ((P = !1), C())
            : V.confirmTransitionTo(e, "POP", k, function (t) {
                  var n, r, i, a, s;
                  t
                      ? C({ action: "POP", location: e })
                      : ((n = e),
                        (r = N.location),
                        -1 === (i = I.indexOf(r.key)) && (i = 0),
                        -1 === (a = I.indexOf(n.key)) && (a = 0),
                        (s = i - a) && ((P = !0), M(s)));
              });
    }
    var L = E(v()),
        I = [L.key];
    function O(e) {
        return A + d(e);
    }
    function M(e) {
        n.go(e);
    }
    var B = 0;
    function U(e) {
        1 === (B += e) && 1 === e
            ? (window.addEventListener(g, D), a && window.addEventListener(b, F))
            : 0 === B && (window.removeEventListener(g, D), a && window.removeEventListener(b, F));
    }
    var j = !1,
        N = {
            length: n.length,
            action: "POP",
            location: L,
            createHref: O,
            push: function (e, t) {
                var r = "PUSH",
                    a = h(e, t, T(), N.location);
                V.confirmTransitionTo(a, r, k, function (e) {
                    if (e) {
                        var t = O(a),
                            s = a.key,
                            o = a.state;
                        if (i)
                            if ((n.pushState({ key: s, state: o }, null, t), y)) window.location.href = t;
                            else {
                                var u = I.indexOf(N.location.key),
                                    c = I.slice(0, u + 1);
                                (c.push(a.key), (I = c), C({ action: r, location: a }));
                            }
                        else window.location.href = t;
                    }
                });
            },
            replace: function (e, t) {
                var r = "REPLACE",
                    a = h(e, t, T(), N.location);
                V.confirmTransitionTo(a, r, k, function (e) {
                    if (e) {
                        var t = O(a),
                            s = a.key,
                            o = a.state;
                        if (i)
                            if ((n.replaceState({ key: s, state: o }, null, t), y)) window.location.replace(t);
                            else {
                                var u = I.indexOf(N.location.key);
                                (-1 !== u && (I[u] = a.key), C({ action: r, location: a }));
                            }
                        else window.location.replace(t);
                    }
                });
            },
            go: M,
            goBack: function () {
                M(-1);
            },
            goForward: function () {
                M(1);
            },
            block: function (e) {
                void 0 === e && (e = !1);
                var t = V.setPrompt(e);
                return (
                    j || (U(1), (j = !0)),
                    function () {
                        return (j && ((j = !1), U(-1)), t());
                    }
                );
            },
            listen: function (e) {
                var t = V.appendListener(e);
                return (
                    U(1),
                    function () {
                        (U(-1), t());
                    }
                );
            },
        };
    return N;
}
var w = "hashchange",
    k = {
        hashbang: {
            encodePath: function (e) {
                return "!" === e.charAt(0) ? e : "!/" + u(e);
            },
            decodePath: function (e) {
                return "!" === e.charAt(0) ? e.substr(1) : e;
            },
        },
        noslash: { encodePath: u, decodePath: o },
        slash: { encodePath: o, decodePath: o },
    };
function x(e) {
    var t = e.indexOf("#");
    return -1 === t ? e : e.slice(0, t);
}
function R() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function A(e) {
    window.location.replace(x(window.location.href) + "#" + e);
}
function E(e) {
    (void 0 === e && (e = {}), _ || (0, s.A)(!1));
    var t = window.history;
    window.navigator.userAgent.indexOf("Firefox");
    var n = e,
        i = n.getUserConfirmation,
        a = void 0 === i ? m : i,
        u = n.hashType,
        f = e.basename ? l(o(e.basename)) : "",
        g = k[void 0 === u ? "slash" : u],
        b = g.encodePath,
        v = g.decodePath;
    function y() {
        var e = v(R());
        return (f && (e = c(e, f)), h(e));
    }
    var E = p();
    function T(e) {
        ((0, r.A)(U, e), (U.length = t.length), E.notifyListeners(U.location, U.action));
    }
    var V = !1,
        C = null;
    function D() {
        var e = R(),
            t = b(e);
        if (e !== t) A(t);
        else {
            var n,
                r = y(),
                i = U.location;
            if ((!V && i.pathname === r.pathname && i.search === r.search && i.hash === r.hash) || C === d(r)) return;
            ((C = null),
                (n = r),
                V
                    ? ((V = !1), T())
                    : E.confirmTransitionTo(n, "POP", a, function (e) {
                          var t, r, i, a, s;
                          e
                              ? T({ action: "POP", location: n })
                              : ((t = n),
                                (r = U.location),
                                -1 === (i = L.lastIndexOf(d(r))) && (i = 0),
                                -1 === (a = L.lastIndexOf(d(t))) && (a = 0),
                                (s = i - a) && ((V = !0), I(s)));
                      }));
        }
    }
    var F = R(),
        P = b(F);
    F !== P && A(P);
    var S = y(),
        L = [d(S)];
    function I(e) {
        t.go(e);
    }
    var O = 0;
    function M(e) {
        1 === (O += e) && 1 === e ? window.addEventListener(w, D) : 0 === O && window.removeEventListener(w, D);
    }
    var B = !1,
        U = {
            length: t.length,
            action: "POP",
            location: S,
            createHref: function (e) {
                var t = document.querySelector("base"),
                    n = "";
                return (t && t.getAttribute("href") && (n = x(window.location.href)), n + "#" + b(f + d(e)));
            },
            push: function (e, t) {
                var n = "PUSH",
                    r = h(e, void 0, void 0, U.location);
                E.confirmTransitionTo(r, n, a, function (e) {
                    if (e) {
                        var t = d(r),
                            i = b(f + t);
                        if (R() !== i) {
                            ((C = t), (window.location.hash = i));
                            var a = L.lastIndexOf(d(U.location)),
                                s = L.slice(0, a + 1);
                            (s.push(t), (L = s), T({ action: n, location: r }));
                        } else T();
                    }
                });
            },
            replace: function (e, t) {
                var n = "REPLACE",
                    r = h(e, void 0, void 0, U.location);
                E.confirmTransitionTo(r, n, a, function (e) {
                    if (e) {
                        var t = d(r),
                            i = b(f + t);
                        R() !== i && ((C = t), A(i));
                        var a = L.indexOf(d(U.location));
                        (-1 !== a && (L[a] = t), T({ action: n, location: r }));
                    }
                });
            },
            go: I,
            goBack: function () {
                I(-1);
            },
            goForward: function () {
                I(1);
            },
            block: function (e) {
                void 0 === e && (e = !1);
                var t = E.setPrompt(e);
                return (
                    B || (M(1), (B = !0)),
                    function () {
                        return (B && ((B = !1), M(-1)), t());
                    }
                );
            },
            listen: function (e) {
                var t = E.appendListener(e);
                return (
                    M(1),
                    function () {
                        (M(-1), t());
                    }
                );
            },
        };
    return U;
}
function T(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function V(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        i = t.initialEntries,
        a = void 0 === i ? ["/"] : i,
        s = t.initialIndex,
        o = t.keyLength,
        u = void 0 === o ? 6 : o,
        c = p();
    function l(e) {
        ((0, r.A)(b, e), (b.length = b.entries.length), c.notifyListeners(b.location, b.action));
    }
    function f() {
        return Math.random().toString(36).substr(2, u);
    }
    var _ = T(void 0 === s ? 0 : s, 0, a.length - 1),
        m = a.map(function (e) {
            return "string" == typeof e ? h(e, void 0, f()) : h(e, void 0, e.key || f());
        });
    function g(e) {
        var t = T(b.index + e, 0, b.entries.length - 1),
            r = b.entries[t];
        c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? l({ action: "POP", location: r, index: t }) : l();
        });
    }
    var b = {
        length: m.length,
        action: "POP",
        location: m[_],
        index: _,
        entries: m,
        createHref: d,
        push: function (e, t) {
            var r = "PUSH",
                i = h(e, t, f(), b.location);
            c.confirmTransitionTo(i, r, n, function (e) {
                if (e) {
                    var t = b.index + 1,
                        n = b.entries.slice(0);
                    (n.length > t ? n.splice(t, n.length - t, i) : n.push(i),
                        l({ action: r, location: i, index: t, entries: n }));
                }
            });
        },
        replace: function (e, t) {
            var r = "REPLACE",
                i = h(e, t, f(), b.location);
            c.confirmTransitionTo(i, r, n, function (e) {
                e && ((b.entries[b.index] = i), l({ action: r, location: i }));
            });
        },
        go: g,
        goBack: function () {
            g(-1);
        },
        goForward: function () {
            g(1);
        },
        canGo: function (e) {
            var t = b.index + e;
            return t >= 0 && t < b.entries.length;
        },
        block: function (e) {
            return (void 0 === e && (e = !1), c.setPrompt(e));
        },
        listen: function (e) {
            return c.appendListener(e);
        },
    };
    return b;
}
