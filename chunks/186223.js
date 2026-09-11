r.d(t, { Cj: () => o, sR: () => c, vK: () => d });
var i = r(465323),
    n = r(158045),
    l = r(580630),
    a = r(202541),
    s = r(375708);
function c(e) {
    let { targetSubscriptionPlan: t, isGift: r, shouldShowSavingsPercent: i, isEligibleForTrial: n } = e;
    return i && t.interval === a.WT.YEAR && !r && !n;
}
function d(e, t, r) {
    let a = (0, n.z_)(e, t, r);
    if (null == a) return null;
    let c = (0, i.LQ)(a.amount, a.currency);
    return null == c || c <= 0
        ? null
        : s.intl.format(s.t["zYz/ME"], { amount: (0, l.$g)(c, a.currency, { maximumFractionDigits: 0 }) });
}
function o(e, t, r) {
    let i = (0, n.XN)(e, t, r);
    return null == i ? null : s.intl.format(s.t.uVgNlo, { price: (0, l.$g)(i.amount, i.currency) });
}
