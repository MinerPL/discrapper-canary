n.d(t, { A: () => y });
var r = n(477900),
    i = n(503698),
    s = n.n(i),
    l = n(575593),
    a = n(947641),
    o = n(17928),
    u = n(778712),
    c = n(661531),
    d = n(287809),
    f = n(298072),
    I = n(466459),
    p = n(139136),
    g = n(395744),
    A = n(623373),
    v = n(561769),
    C = n(846957),
    m = n(929283),
    _ = n(245068),
    h = n(761365),
    x = n(844266);
function E(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function R(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, A.YW)(t),
        { isPurchased: a, isPartiallyOwnedBundle: o } = (0, I.h)(t),
        u = i === l.R.PROFILE_EFFECT || i === l.R.PROFILE_FRAME || i === l.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: s()(x.mA, { [x.zj]: (a || o) && !n, [x.Ge]: u }),
                children: (0, r.jsx)(k, { product: t, isCardHovered: n }),
            }),
            a && (0, r.jsx)(b, { hidden: n }),
        ],
    });
}
function k(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        a = (0, A.YW)(n),
        c =
            ((t = (0, f.Q)(n)),
            n?.type === l.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (a) {
        case l.R.PROFILE_EFFECT:
            return (0, r.jsx)(p.A, { skuId: c.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case l.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: x.pI, children: (0, r.jsx)(g.A, { frame: c, filterLayer: E }) });
        case l.R.AVATAR_DECORATION:
            return (0, r.jsx)(m.i, { item: c, user: s, isHighlighted: i, avatarSize: u._3.SIZE_120 });
        case l.R.NAMEPLATE:
            return (0, r.jsx)(h.A, { nameplate: c, user: s, isHighlighted: i });
        case l.R.BUNDLE:
            return (0, r.jsx)(_.X, { product: n, user: s, isHighlighted: i });
        case l.R.EXTERNAL_SKU:
            return (0, r.jsx)(C.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function b(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(a.r, {
        size: "custom",
        color: c.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(x.zo, { [x.R]: t }),
    });
}
let y = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, v.Vm)(t),
        l = (0, f.Q)(s);
    if (null == s) return null;
    let a = (0, A.rb)(s, i ?? l);
    return (0, r.jsx)(R, { product: a, isCardHovered: n });
};
