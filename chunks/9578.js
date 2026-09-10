l.d(t, { A: () => u });
var r = l(477900),
    n = l(582128),
    s = l(478676),
    i = l.n(s),
    a = l(28863),
    o = l(793574),
    c = l(688810),
    d = l(123917);
let u = n.memo(function (e) {
    let { onClick: t, trusted: l, title: s, href: u, children: h, messageId: m, channelId: p, ...g } = e,
        { analyticsLocations: f } = (0, c.Ay)(o.A.MASKED_LINK),
        v = n.useCallback((t) => (0, d.h)(e, t, f), [f, e]),
        j = n.useCallback(
            (e) => {
                1 === e.button && v(e);
            },
            [v],
        ),
        x = i().sanitizeUrl(u);
    return (0, r.jsx)(a.Anchor, {
        ...g,
        title: s,
        target: "_blank",
        rel: "noreferrer noopener",
        href: x,
        onClick: v,
        onAuxClick: j,
        children: h ?? s,
    });
});
