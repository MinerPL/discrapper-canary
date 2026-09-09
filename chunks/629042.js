n.d(t, { L0: () => u, Nc: () => m, SV: () => c, VZ: () => d });
var l = n(288106),
    i = n(65238),
    r = n(993408),
    a = n(623373),
    s = n(80151),
    o = n(375708);
function u(e, t) {
    var n, l;
    let s;
    return null == t
        ? null
        : null != (0, i.XF)(t)
          ? ((n = e), (l = t), null == (s = (0, i.XF)(l)) || n.categorySkuId !== s.collectionId ? null : l)
          : (function (e, t) {
                let n = t.rewardConfig?.discount;
                if (null == n || (0, r.G0)(e) || !e.isFirstParty || ((0, r.aw)(e) && !t.includeBundles)) return null;
                let l = n.fiatEnabled && (0, a.go)(e),
                    i = n.orbsEnabled && (0, a.Vx)(e);
                return l || i ? t : null;
            })(e, t);
}
function c(e) {
    return u(e, (0, s.A)());
}
function d(e) {
    let t = c(e),
        n = t?.rewardConfig?.discount;
    return null == t || null == n
        ? null
        : t.rewardConfig?.discount?.type === l.RP.PERCENT && 100 === t.rewardConfig.discount.amount
          ? o.intl.string(o.t["302tKP"])
          : o.intl.string(o.t["7EGhnE"]);
}
function m(e) {
    let t = c(e);
    return (
        null != t &&
        t.rewardConfig?.discount != null &&
        t.rewardConfig.discount.fiatEnabled &&
        !t.rewardConfig.discount.orbsEnabled
    );
}
