n.d(e, { A: () => o, j: () => m });
var r = n(477900);
n(582128);
var t = n(503698),
    a = n.n(t),
    s = n(323384),
    c = n(297264),
    i = n(834730),
    u = n(289873),
    d = n(199457);
function o(l) {
    let { heading: e, description: n, error: t, className: u } = l;
    return (0, r.jsxs)("div", {
        className: a()(d.v, u),
        children: [
            (0, r.jsx)(s.k, { size: "lg", color: "var(--icon-muted)" }),
            null != e ? (0, r.jsx)(c.D, { variant: "heading-md/semibold", color: "text-default", children: e }) : null,
            null != n
                ? (0, r.jsx)(i.E, { variant: "text-sm/normal", color: "text-muted", className: d.r, children: n })
                : null,
            null != t
                ? (0, r.jsx)(i.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      className: d.r,
                      children: t,
                  })
                : null,
        ],
    });
}
function m(l) {
    let { className: e } = l;
    return (0, r.jsx)("div", { className: a()(d.v, e), children: (0, r.jsx)(u.y, {}) });
}
