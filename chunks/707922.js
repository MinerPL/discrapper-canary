n.d(t, { A: () => s });
var r = n(580630),
    a = n(935399),
    l = n(17928),
    u = n(73825),
    i = n(97352),
    o = n(158045),
    c = n(202541),
    d = n(88001);
function s(e) {
    let t = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, o.mH)(c.pe.TIER_2),
            { plan: n, isFetchingPlan: r } = (0, l.cf)([i.A], () => ({
                plan: i.A.get(c.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: i.A.isFetchingForSKU(t),
            }));
        if (
            ((0, a.Ay)(() => {
                e || null != n || r || (0, u.ur)(t);
            }),
            e || null == n)
        )
            return null;
        try {
            return (0, o.JM)(c.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == t ? null : (0, r.$g)(Math.round(t.amount / d.aw), t.currency);
}
