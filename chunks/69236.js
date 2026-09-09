r.d(e, { W8: () => s, oG: () => l, we: () => u });
var i = r(17928),
    n = r(309954),
    o = r(287809),
    a = r(760716);
function s() {
    let t = (0, a.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, i.bG)([o.default], () => o.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        r = (0, i.bG)([o.default], () => o.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || r;
}
function l(t) {
    let { orbPriceAmount: e } = t;
    return u({ orbPriceAmount: e }).state;
}
function u(t) {
    let { orbPriceAmount: e } = t,
        { balance: r, isFetching: i, error: o } = (s(), (0, n.W)({ disableFetch: !0 }));
    return { state: "HIDDEN", isReady: !0 };
}
