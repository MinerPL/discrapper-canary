l.d(t, { _: () => d });
var n = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
    a = l(834730),
    u = l(580630),
    c = l(777485),
    o = l(564082);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: l,
            totalLineItemLabelSubText: s,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: h,
            intervalCount: p,
            currency: v,
            defaultExpanded: j = !1,
        } = e,
        [f, g] = r.useState(j),
        N = r.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, u.$g)(e, v);
            return (0, u.CE)(t, h, p);
        }, [x, v, h, p]),
        b = (0, n.jsxs)(c.h, {
            label: t,
            defaultExpanded: j,
            isDisabled: x.length <= 0,
            onExpandedChange: g,
            collapsedContent: m
                ? (0, n.jsx)(a.E, { variant: "text-md/normal", color: "text-subtle", children: N })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...r } = e,
                        s = (0, u.$g)(l, v),
                        i = t ? s : (0, u.CE)(s, h, p);
                    return (0, n.jsx)(c.i, { value: i, ...r }, r.id);
                }),
                (0, n.jsx)("div", { className: o.m }),
                (0, n.jsx)(c.i, {
                    label: l ?? t,
                    labelSubText: s,
                    value: N,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, n.jsx)("div", { className: i()({ [o.k]: f }), children: b });
}
