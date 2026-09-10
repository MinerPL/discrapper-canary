l.d(t, { e: () => a });
var n = l(477900);
l(582128);
var r = l(834730),
    s = l(202541),
    i = l(375708);
function a(e) {
    let t,
        { premiumType: l, size: a, className: u, tag: c = "span", ...o } = e;
    switch (l) {
        case s.PremiumTypes.TIER_0:
            t = i.intl.string(i.t["t9uG/o"]);
            break;
        case s.PremiumTypes.TIER_1:
            t = i.intl.string(i.t.FSOz78);
            break;
        case s.PremiumTypes.TIER_2:
            t = i.intl.string(i.t.lG6a5x);
    }
    return (0, n.jsx)(r.E, { tag: c, variant: `nitro-${a}`, className: u, ...o, children: t });
}
