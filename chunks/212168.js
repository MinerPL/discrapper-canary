n.d(t, { A: () => c, i: () => d });
var r,
    a = n(477900),
    l = n(582128),
    u = n(503698),
    i = n.n(u),
    o = n(489088),
    d = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), (r.NEW_UPSELL = "newUpsell"), r);
let s = {
        premium: { border: o.wU, background: o.gI },
        limited: { border: o.rY, background: o.pm },
        newUpsell: { border: o.Ef, background: o.st },
    },
    c = l.forwardRef(function (e, t) {
        let {
            children: n,
            type: r = "premium",
            isShown: l,
            hasBackground: u = !1,
            className: d,
            backgroundClassName: c,
        } = e;
        if (!l) return n;
        let { border: m, background: f } = s[r];
        return (0, a.jsx)("div", {
            ref: t,
            className: i()(m, d),
            children: (0, a.jsx)("div", { className: i()(u ? f : o.Tp, c), children: n }),
        });
    });
