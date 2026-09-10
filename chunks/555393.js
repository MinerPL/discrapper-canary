n.d(t, { N: () => o });
var i = n(17928),
    a = n(531260),
    r = n(287809),
    s = n(166403),
    l = n(721157);
function o() {
    let e = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        t = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        n = (0, i.bG)([s.A], () => s.A.hasFetchedSubscriptions()),
        { fractionalState: o, fetched: d } = (0, a.A)();
    if (!n || !d) return null;
    let { isEligible: c, reason: u } = (0, l.ij)(e, t, o);
    return { isEligible: c, state: (0, l.P3)(u), reason: u };
}
