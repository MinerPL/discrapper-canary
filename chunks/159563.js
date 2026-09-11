function r(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw Error(
        "[Immer] minified error nr: " +
            e +
            (n.length
                ? " " +
                  n
                      .map(function (e) {
                          return "'" + e + "'";
                      })
                      .join(",")
                : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
    );
}
function i(e) {
    return !!e && !!e[L];
}
function a(e) {
    var t;
    return (
        !!e &&
        ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return n === Object || ("function" == typeof n && Function.toString.call(n) === Z);
        })(e) ||
            Array.isArray(e) ||
            !!e[j] ||
            !!(null == (t = e.constructor) ? void 0 : t[j]) ||
            c(e) ||
            d(e))
    );
}
function o(e, t, n) {
    (void 0 === n && (n = !1),
        0 === u(e)
            ? (n ? Object.keys : $)(e).forEach(function (r) {
                  (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              }));
}
function u(e) {
    var t = e[L];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : c(e) ? 2 : 3 * !!d(e);
}
function s(e, t) {
    return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function l(e, t, n) {
    var r = u(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function c(e) {
    return z && e instanceof Map;
}
function d(e) {
    return M && e instanceof Set;
}
function f(e) {
    return e.o || e.t;
}
function h(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = U(e);
    delete t[L];
    for (var n = $(t), r = 0; r < n.length; r++) {
        var i = n[r],
            a = t[i];
        (!1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) && (t[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i] }));
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function p(e, t) {
    return (
        void 0 === t && (t = !1),
        _(e) ||
            i(e) ||
            !a(e) ||
            (u(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t &&
                o(
                    e,
                    function (e, t) {
                        return p(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function m() {
    r(2);
}
function _(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function g(e) {
    var t = W[e];
    return (t || r(18, e), t);
}
n.d(t, { Qx: () => i, jM: () => J, mq: () => H, vD: () => X });
function v(e, t) {
    t && (g("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function y(e) {
    (b(e), e.p.forEach(w), (e.p = null));
}
function b(e) {
    e === P && (P = e.l);
}
function D(e) {
    return (P = { p: [], l: P, h: e, m: !0, _: 0 });
}
function w(e) {
    var t = e[L];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function C(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return (
        t.h.O || g("ES5").S(t, e, i),
        i
            ? (n[L].P && (y(t), r(4)),
              a(e) && ((e = E(t, e)), t.l || k(t, e)),
              t.u && g("Patches").M(n[L].t, e, t.u, t.s))
            : (e = E(t, n, [])),
        y(t),
        t.u && t.v(t.u, t.s),
        e !== I ? e : void 0
    );
}
function E(e, t, n) {
    if (_(t)) return t;
    var r = t[L];
    if (!r)
        return (
            o(
                t,
                function (i, a) {
                    return A(e, r, t, i, a, n);
                },
                !0,
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return (k(e, r.t, !0), r.t);
    if (!r.I) {
        ((r.I = !0), r.A._--);
        var i = 4 === r.i || 5 === r.i ? (r.o = h(r.k)) : r.o,
            a = i,
            u = !1;
        (3 === r.i && ((a = new Set(i)), i.clear(), (u = !0)),
            o(a, function (t, a) {
                return A(e, r, i, t, a, n, u);
            }),
            k(e, i, !1),
            n && e.u && g("Patches").N(r, n, e.u, e.s));
    }
    return r.o;
}
function A(e, t, n, r, o, u, c) {
    if (i(o)) {
        var d = E(e, o, u && t && 3 !== t.i && !s(t.R, r) ? u.concat(r) : void 0);
        if ((l(n, r, d), !i(d))) return;
        e.m = !1;
    } else c && n.add(o);
    if (a(o) && !_(o)) {
        if (!e.h.D && e._ < 1) return;
        (E(e, o), (t && t.A.l) || k(e, o));
    }
}
function k(e, t, n) {
    (void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n));
}
function B(e, t) {
    var n = e[L];
    return (n ? f(n) : e)[t];
}
function F(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n;) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function x(e) {
    e.P || ((e.P = !0), e.l && x(e.l));
}
function T(e) {
    e.o || (e.o = h(e.t));
}
function R(e, t, n) {
    var r,
        i,
        a,
        o,
        u,
        s,
        l,
        f = c(t)
            ? g("MapSet").F(t, n)
            : d(t)
              ? g("MapSet").T(t, n)
              : e.O
                ? ((a = i =
                      {
                          i: +!!(r = Array.isArray(t)),
                          A: n ? n.A : P,
                          P: !1,
                          I: !1,
                          R: {},
                          l: n,
                          t: t,
                          k: null,
                          o: null,
                          j: null,
                          C: !1,
                      }),
                  (o = G),
                  r && ((a = [i]), (o = q)),
                  (s = (u = Proxy.revocable(a, o)).revoke),
                  (i.k = l = u.proxy),
                  (i.j = s),
                  l)
                : g("ES5").J(t, n);
    return ((n ? n.A : P).p.push(f), f);
}
function V(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return h(e);
}
var S,
    P,
    O = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    z = "u" > typeof Map,
    M = "u" > typeof Set,
    N = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    I = O ? Symbol.for("immer-nothing") : (((S = {})["immer-nothing"] = !0), S),
    j = O ? Symbol.for("immer-draftable") : "__$immer_draftable",
    L = O ? Symbol.for("immer-state") : "__$immer_state",
    Z = "" + Object.prototype.constructor,
    $ =
        "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    U =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                $(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    W = {},
    G = {
        get: function (e, t) {
            if (t === L) return e;
            var n,
                r,
                i = f(e);
            if (!s(i, t))
                return (r = F(i, t)) ? ("value" in r ? r.value : null == (n = r.get) ? void 0 : n.call(e.k)) : void 0;
            var o = i[t];
            return e.I || !a(o) ? o : o === B(e.t, t) ? (T(e), (e.o[t] = R(e.A.h, o, e))) : o;
        },
        has: function (e, t) {
            return t in f(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(f(e));
        },
        set: function (e, t, n) {
            var r = F(f(e), t);
            if (null == r ? void 0 : r.set) return (r.set.call(e.k, n), !0);
            if (!e.P) {
                var i = B(f(e), t),
                    a = null == i ? void 0 : i[L];
                if (a && a.t === n) return ((e.o[t] = n), (e.R[t] = !1), !0);
                if ((n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) && (void 0 !== n || s(e.t, t))) return !0;
                (T(e), x(e));
            }
            return (
                (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                    (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                    ((e.o[t] = n), (e.R[t] = !0)),
                !0
            );
        },
        deleteProperty: function (e, t) {
            return (
                void 0 !== B(e.t, t) || t in e.t ? ((e.R[t] = !1), T(e), x(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = f(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
                ? { writable: !0, configurable: 1 !== e.i || "length" !== t, enumerable: r.enumerable, value: n[t] }
                : r;
        },
        defineProperty: function () {
            r(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            r(12);
        },
    },
    q = {};
(o(G, function (e, t) {
    q[e] = function () {
        return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
    };
}),
    (q.deleteProperty = function (e, t) {
        return q.set.call(this, e, t, void 0);
    }),
    (q.set = function (e, t, n) {
        return G.set.call(this, e[0], t, n, e[0]);
    }));
var K = new ((function () {
        function e(e) {
            var t = this;
            ((this.O = N),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var o,
                            u = n;
                        return (
                            (n = e),
                            function (e) {
                                var r = this;
                                void 0 === e && (e = u);
                                for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                                    a[o - 1] = arguments[o];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = n).call.apply(t, [r, e].concat(a));
                                });
                            }
                        );
                    }
                    if (("function" != typeof n && r(6), void 0 !== i && "function" != typeof i && r(7), a(e))) {
                        var s = D(t),
                            l = R(t, e, void 0),
                            c = !0;
                        try {
                            ((o = n(l)), (c = !1));
                        } finally {
                            c ? y(s) : b(s);
                        }
                        return "u" > typeof Promise && o instanceof Promise
                            ? o.then(
                                  function (e) {
                                      return (v(s, i), C(e, s));
                                  },
                                  function (e) {
                                      throw (y(s), e);
                                  },
                              )
                            : (v(s, i), C(o, s));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (o = n(e)) && (o = e), o === I && (o = void 0), t.D && p(o, !0), i)) {
                            var d = [],
                                f = [];
                            (g("Patches").M(e, o, d, f), i(d, f));
                        }
                        return o;
                    }
                    r(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                    if ("function" == typeof e)
                        return function (n) {
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                                i[a - 1] = arguments[a];
                            return t.produceWithPatches(n, function (t) {
                                return e.apply(void 0, [t].concat(i));
                            });
                        };
                    var r,
                        i,
                        a = t.produce(e, n, function (e, t) {
                            ((r = e), (i = t));
                        });
                    return "u" > typeof Promise && a instanceof Promise
                        ? a.then(function (e) {
                              return [e, r, i];
                          })
                        : [a, r, i];
                }),
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze));
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                (a(e) || r(8),
                    i(e) &&
                        (i((t = e)) || r(22, t),
                        (e = (function e(t) {
                            if (!a(t)) return t;
                            var n,
                                r = t[L],
                                i = u(t);
                            if (r) {
                                if (!r.P && (r.i < 4 || !g("ES5").K(r))) return r.t;
                                ((r.I = !0), (n = V(t, i)), (r.I = !1));
                            } else n = V(t, i);
                            return (
                                o(n, function (t, i) {
                                    var a;
                                    (r && ((a = r.t), (2 === u(a) ? a.get(t) : a[t]) === i)) || l(n, t, e(i));
                                }),
                                3 === i ? new Set(n) : n
                            );
                        })(t))));
                var t,
                    n = D(this),
                    s = R(this, e, void 0);
                return ((s[L].C = !0), b(n), s);
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[L]).A;
                return (v(n, t), C(void 0, n));
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                (e && !N && r(20), (this.O = e));
            }),
            (t.applyPatches = function (e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n,
                        r = t[n];
                    if (0 === r.path.length && "replace" === r.op) {
                        e = r.value;
                        break;
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var a = g("Patches").$;
                return i(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    J = K.produce,
    H =
        (K.produceWithPatches.bind(K),
        K.setAutoFreeze.bind(K),
        K.setUseProxies.bind(K),
        K.applyPatches.bind(K),
        K.createDraft.bind(K)),
    X = K.finishDraft.bind(K);
