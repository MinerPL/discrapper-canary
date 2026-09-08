n.d(t, { A: () => R, s: () => x });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    l = n(17928),
    a = n(866665),
    o = n(812993),
    u = n(926321),
    c = n(318254),
    d = n(287809),
    f = n(158045),
    I = n(590180),
    p = n(298072),
    g = n(993408),
    A = n(466459),
    v = n(623373),
    C = n(561769),
    m = n(57020),
    _ = n(375708),
    h = n(31005);
function x(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.m, {
        text: _.intl.string(_.t.dCou7i),
        children: (0, r.jsx)(o.Lp, {
            disableColor: !0,
            className: s()(t, h.$, h.C),
            text: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.DiceIcon, { size: "xxs", color: "currentColor" }),
                    _.intl.string(_.t["+drfVi"]),
                ],
            }),
        }),
    });
}
function E(e) {
    let { product: t, badgeOverride: n, productBadgeOverride: i, className: a, prioritizedCurrency: u } = e,
        { isPurchased: p, isPartiallyOwnedBundle: E } = (0, A.h)(t),
        R = (0, g.G0)(t),
        k = (0, l.bG)([I.A], () => I.A.getCategoryForProduct(t.skuId)),
        b = k?.unpublishedAt != null ? (0, g.WU)(k.unpublishedAt) : null,
        y = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        S = f.Ay.canUseShopDiscounts(y),
        { isOrbExclusive: T } = (0, m.F)({ product: t, hasShopDiscount: S, prioritizedCurrency: u }),
        j = n;
    if (
        (null == j &&
            (null != i
                ? (j = C.AW.BADGE_OVERRIDE)
                : (0, v.JQ)(t)
                  ? (j = C.AW.DYNAMIC)
                  : (0, g.HF)(k?.unpublishedAt)
                    ? (j = C.AW.LIMITED_TIME)
                    : !E && !p && (0, g.aT)(t.skuId)
                      ? (j = C.AW.NEW)
                      : T
                        ? (j = C.AW.ORBS_EXCLUSIVE)
                        : R && (j = C.AW.NITRO_EXCLUSIVE)),
        null == j || j === C.AW.NONE)
    )
        return null;
    if (j === C.AW.DYNAMIC) return (0, r.jsx)(x, { className: a });
    if (j === C.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)(o.Lp, {
            disableColor: !0,
            className: s()(a, h.$, h.C),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.C, { size: "xxs", color: "currentColor" }), _.intl.string(_.t["0TmQRG"])],
            }),
        });
    let L = null;
    switch (j) {
        case C.AW.LIMITED_TIME:
            L =
                null != b
                    ? b > 1
                        ? _.intl.formatToPlainString(_.t.Io7ozn, { days: b })
                        : _.intl.string(_.t.Bc13HF)
                    : _.intl.string(_.t["h/uBCR"]);
            break;
        case C.AW.NEW:
            L = _.intl.string(_.t.y2b7CA);
            break;
        case C.AW.NITRO_EXCLUSIVE:
            L = _.intl.string(_.t.X3Ekj8);
            break;
        case C.AW.BADGE_OVERRIDE:
            L = i;
    }
    return (0, r.jsx)(o.Lp, { text: L, disableColor: !0, className: s()(a, h.$) });
}
let R = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s } = e,
        l = (0, C.Vm)(t),
        a = (0, p.Q)(l);
    if (null == l || l.hideBadge) return null;
    let o = (0, v.rb)(l, a);
    return (0, r.jsx)(E, {
        product: o,
        badgeOverride: n,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
    });
};
