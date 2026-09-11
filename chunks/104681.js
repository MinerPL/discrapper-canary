function r(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n,
            r = getComputedStyle(e, null);
        return (
            i(r.overflowY, t) ||
            i(r.overflowX, t) ||
            (!!(n = (function (e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement;
                } catch (e) {
                    return null;
                }
            })(e)) &&
                (n.clientHeight < e.scrollHeight || n.clientWidth < e.scrollWidth))
        );
    }
    return !1;
}
function o(e, t, n, r, i, a, o, u) {
    return (a < e && o > t) || (a > e && o < t)
        ? 0
        : (a <= e && u <= n) || (o >= t && u >= n)
          ? a - e - r
          : (o > t && u < n) || (a < e && u > n)
            ? o - t + i
            : 0;
}
n.d(t, { A: () => l });
var u = function (e, t) {
    var n = window,
        i = t.scrollMode,
        u = t.block,
        s = t.inline,
        l = t.boundary,
        c = t.skipOverflowHiddenElements,
        d =
            "function" == typeof l
                ? l
                : function (e) {
                      return e !== l;
                  };
    if (!r(e)) throw TypeError("Invalid target");
    for (var f, h, p = document.scrollingElement || document.documentElement, m = [], _ = e; r(_) && d(_);) {
        if ((_ = null == (h = (f = _).parentElement) ? f.getRootNode().host || null : h) === p) {
            m.push(_);
            break;
        }
        (null != _ && _ === document.body && a(_) && !a(document.documentElement)) ||
            (null != _ && a(_, c) && m.push(_));
    }
    for (
        var g = n.visualViewport ? n.visualViewport.width : innerWidth,
            v = n.visualViewport ? n.visualViewport.height : innerHeight,
            y = window.scrollX || pageXOffset,
            b = window.scrollY || pageYOffset,
            D = e.getBoundingClientRect(),
            w = D.height,
            C = D.width,
            E = D.top,
            A = D.right,
            k = D.bottom,
            B = D.left,
            F = "start" === u || "nearest" === u ? E : "end" === u ? k : E + w / 2,
            x = "center" === s ? B + C / 2 : "end" === s ? A : B,
            T = [],
            R = 0;
        R < m.length;
        R++
    ) {
        var V = m[R],
            S = V.getBoundingClientRect(),
            P = S.height,
            O = S.width,
            z = S.top,
            M = S.right,
            N = S.bottom,
            I = S.left;
        if ("if-needed" === i && E >= 0 && B >= 0 && k <= v && A <= g && E >= z && k <= N && B >= I && A <= M) break;
        var j = getComputedStyle(V),
            L = parseInt(j.borderLeftWidth, 10),
            Z = parseInt(j.borderTopWidth, 10),
            $ = parseInt(j.borderRightWidth, 10),
            U = parseInt(j.borderBottomWidth, 10),
            W = 0,
            G = 0,
            q = "offsetWidth" in V ? V.offsetWidth - V.clientWidth - L - $ : 0,
            K = "offsetHeight" in V ? V.offsetHeight - V.clientHeight - Z - U : 0,
            J = "offsetWidth" in V ? (0 === V.offsetWidth ? 0 : O / V.offsetWidth) : 0,
            H = "offsetHeight" in V ? (0 === V.offsetHeight ? 0 : P / V.offsetHeight) : 0;
        if (p === V)
            ((W =
                "start" === u
                    ? F
                    : "end" === u
                      ? F - v
                      : "nearest" === u
                        ? o(b, b + v, v, Z, U, b + F, b + F + w, w)
                        : F - v / 2),
                (G =
                    "start" === s
                        ? x
                        : "center" === s
                          ? x - g / 2
                          : "end" === s
                            ? x - g
                            : o(y, y + g, g, L, $, y + x, y + x + C, C)),
                (W = Math.max(0, W + b)),
                (G = Math.max(0, G + y)));
        else {
            ((W =
                "start" === u
                    ? F - z - Z
                    : "end" === u
                      ? F - N + U + K
                      : "nearest" === u
                        ? o(z, N, P, Z, U + K, F, F + w, w)
                        : F - (z + P / 2) + K / 2),
                (G =
                    "start" === s
                        ? x - I - L
                        : "center" === s
                          ? x - (I + O / 2) + q / 2
                          : "end" === s
                            ? x - M + $ + q
                            : o(I, M, O, L, $ + q, x, x + C, C)));
            var X = V.scrollLeft,
                Y = V.scrollTop;
            ((F += Y - (W = Math.max(0, Math.min(Y + W / H, V.scrollHeight - P / H + K)))),
                (x += X - (G = Math.max(0, Math.min(X + G / J, V.scrollWidth - O / J + q)))));
        }
        T.push({ el: V, top: W, left: G });
    }
    return T;
};
function s(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let l = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (s(t) && "function" == typeof t.behavior) return t.behavior(n ? u(e, t) : []);
    if (n) {
        var r,
            i,
            a,
            o = !1 === t ? { block: "end", inline: "nearest" } : s(t) ? t : { block: "start", inline: "nearest" };
        return (
            (r = u(e, o)),
            void 0 === (i = o.behavior) && (i = "auto"),
            (a = "scrollBehavior" in document.body.style),
            void r.forEach(function (e) {
                var t = e.el,
                    n = e.top,
                    r = e.left;
                t.scroll && a ? t.scroll({ top: n, left: r, behavior: i }) : ((t.scrollTop = n), (t.scrollLeft = r));
            })
        );
    }
};
