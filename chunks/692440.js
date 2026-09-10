l.d(t, { DK: () => h, Hc: () => v, Lw: () => j, U5: () => m, _J: () => x, de: () => p });
var n = l(477900),
    r = l(582128);
l(17928);
var s = l(557026),
    i = l(270537),
    a = l(888751);
l(97352);
var u = l(158045),
    c = l(580630);
(l(732280), l(735164), l(787455), l(815545));
var o = l(652215),
    d = l(375708);
function m(e) {
    return e.currency === o.Yri.USD ? (0, c.$g)(e.total, e.currency) : `${(0, c.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: l } = e,
        { lineItems: r } = (0, a.Ig)(t, { includeTaxLineItem: !0, isPrepaidPaymentSource: l });
    return (0, n.jsx)(i.Vm, { label: d.intl.string(d.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function h(e) {
    let { proratedInvoice: t, renewalInvoice: l, overrideRenewalDate: n } = e,
        { intervalType: r, intervalCount: s } = (0, u.Ge)(t),
        { intervalType: i, intervalCount: a } = (0, u.Ge)(l);
    if (r !== i || s !== a || t.subscriptionPeriodEnd.getTime() === l.subscriptionPeriodStart.getTime()) return null;
    let c = null != n ? n : t.subscriptionPeriodEnd;
    return d.intl.format(d.t.JWWD4E, { renewalDate: c });
}
function p(e) {
    let t,
        {
            overrideRenewalDate: l,
            currentInvoice: n,
            renewalInvoice: r,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: i,
        } = e;
    return null != l
        ? l
        : ((t = null != n ? n.subscriptionPeriodEnd : s ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, u._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: l,
            overrideRenewalDate: i,
            isUpdate: u = !1,
            fractionalPremiumInfo: c,
            defaultExpanded: o,
            onComputeRenewalDate: d,
        } = e,
        m = r.useMemo(
            () =>
                (0, a.Gj)(t ?? null, l, null, {
                    overrideRenewalDate: i,
                    isSubscriptionUpdate: u,
                    fractionalPremiumInfo: c,
                }),
            [t, l, i, u, c],
        );
    return (
        r.useEffect(() => {
            null != d && d(m.renewalDate);
        }, [d, m.renewalDate]),
        (0, n.jsx)(s._D, { ...m, defaultExpanded: o })
    );
}
function j(e, t) {
    let { isCustomGift: l, isPrepaidPaymentSource: n } = t;
    return l
        ? (0, u.D8)(e.interval, !0, void 0, void 0, !0, (0, u.m6)(e.id))
        : d.intl.formatToPlainString(d.t.LQLxkW, { planName: (0, u.Mn)(e.id, !1, n) });
}
l(588976);
