n.d(t, { A: () => c });
var r = n(580630),
    a = n(935399),
    l = n(17928),
    u = n(73825),
    i = n(97352),
    o = n(158045),
    d = n(202541),
    s = n(88001);
function c(e) {
    let t = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, o.mH)(d.pe.TIER_2),
            { plan: n, isFetchingPlan: r } = (0, l.cf)([i.A], () => ({
                plan: i.A.get(d.gD.PREMIUM_GROUP_MONTH),
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
            return (0, o.JM)(d.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == t ? null : (0, r.$g)(Math.round(t.amount / s.aw), t.currency);
}
