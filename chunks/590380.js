l.d(t, { n: () => f, p: () => m });
var n = l(477900);
l(582128);
var a = l(503698),
    s = l.n(a),
    i = l(514042),
    r = l(834730),
    u = l(939249),
    d = l(298668);
function o(e) {
    return s()(d._B, { [d.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: l = null, compact: a = !1, subText: s, children: u, onThumbError: o } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: d.gJ, onError: o })
                : (0, n.jsx)(i.FileIcon, { size: a ? "xs" : "sm", color: "currentColor" }),
            (0, n.jsxs)("div", {
                className: d.Wd,
                children: [
                    (0, n.jsx)(r.E, { variant: "text-sm/medium", color: "text-default", className: d.Rr, children: t }),
                    s,
                ],
            }),
            u,
        ],
    });
}
function m(e) {
    return (0, n.jsx)("div", { className: o(e.compact ?? !1), children: c(e) });
}
function f(e) {
    let { name: t, thumbSrc: l, ariaLabel: a, onClick: i, onThumbError: r } = e;
    return (0, n.jsx)(u.D, {
        className: s()(o(!0), d.w8),
        onClick: i,
        "aria-label": a,
        children: c({ name: t, thumbSrc: l, compact: !0, onThumbError: r }),
    });
}
