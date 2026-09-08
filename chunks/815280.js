n.d(t, { A: () => _ });
var r = n(477900);
n(582128);
var s = n(503698),
    l = n.n(s),
    a = n(17928),
    i = n(653887),
    o = n(775602),
    u = n(607470),
    c = n(531685),
    d = n(296344);
let _ = function (e) {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: s, isResponsive: _ = !1, eventTargetRef: E } = e,
        g = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        S = (0, a.bG)([c.A], () => c.A.isFocused()),
        L = null != n && !g && S;
    return null != s
        ? (0, r.jsx)(i._, { src: s, fit: "fit-width", eventTargetRef: E })
        : L
          ? (0, r.jsx)(u.A, { className: l()({ [d.no]: _ }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, r.jsx)("div", { className: l()({ [d.no]: _ }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
