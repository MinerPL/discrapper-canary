r.d(t, { Ay: () => _, pL: () => T });
var i = r(477900),
    n = r(582128),
    l = r(503698),
    a = r.n(l),
    s = r(575593),
    c = r(38021),
    d = r(844222),
    o = r(583094),
    u = r(17928),
    m = r(661531),
    x = r(775602),
    p = r(139136),
    h = r(665411),
    j = r(474012),
    g = r(929283),
    f = r(245068),
    N = r(761365),
    v = r(366523),
    E = r(403362),
    A = r(652215),
    C = r(778712),
    R = r(880465);
function T(e) {
    let {
        collectiblesItem: t,
        isFocused: r = !1,
        user: n,
        guildId: l,
        nameplatePreviewStyle: c,
        nameplatePreviewRescalerStyle: d,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? R.Nq : R.hT,
            children: (0, i.jsx)(f.X, { product: t, isHighlighted: r, user: n }),
        });
    }
    switch (t.item.type) {
        case s.R.AVATAR_DECORATION:
            return (0, i.jsx)(g.i, { user: n, guildId: l, avatarSize: C._3.SIZE_80, item: t.item, isHighlighted: r });
        case s.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: R.xC,
                children: (0, i.jsx)(p.A, {
                    skuId: t.item.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case s.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: a()(R.M4, c),
                children: (0, i.jsx)("div", {
                    className: a()(R.N1, d),
                    children: (0, i.jsx)(N.A, {
                        user: n,
                        guildId: l,
                        nameplate: t.item,
                        isHighlighted: r,
                        size: "small",
                    }),
                }),
            });
        case s.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: R.pI,
                children: (0, i.jsx)(h.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function I(e) {
    let { sku: t, ...r } = e,
        l = n.useMemo(() => (0, j.T7)(t), [t]);
    return null == l ? null : (0, i.jsx)(T, { collectiblesItem: l, ...r });
}
function y(e) {
    let { sku: t, isFocused: r } = e;
    return (0, i.jsx)(v.e, {
        shape: "custom",
        containerClassName: a()(R.JS, r && R.P3),
        backgroundImageClassName: R.m1,
        foregroundImageClassName: R.aF,
        sku: t,
    });
}
function P(e) {
    let { eventTargetRef: t, assetClassName: r, disableHover: l } = e,
        s = (0, u.bG)([x.Ay], () => x.Ay.useReducedMotion),
        { theme: p, saturation: h } = (0, c.wR)(),
        { highContrastModeEnabled: j } = n.useContext(d.C),
        [g, f, N, v] = m.A.colors.TEXT_DEFAULT.resolve({ theme: p, saturation: h, highContrastModeEnabled: j }).rgba();
    return (0, i.jsx)("div", {
        className: R.yv,
        children: (0, i.jsx)(o.u, {
            className: a()(R.MO, r),
            dataBinding: { reducedMotion: l || s, logoColor: { r: g, g: f, b: N, a: v } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function _(e) {
    let { sku: t, isFocused: r, user: n, guildId: l, eventTargetRef: a, assetClassName: s, disableHover: c } = e;
    switch (t.productLine) {
        case A.EZt.COLLECTIBLES:
            return (0, i.jsx)(I, { sku: t, isFocused: r, user: n, guildId: l });
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(y, { sku: t, isFocused: r });
        case A.EZt.APPLICATION:
        case A.EZt.BOOST:
        case A.EZt.GUILD_ROLE:
            return null;
        case A.EZt.PREMIUM:
            return (0, i.jsx)(P, { eventTargetRef: a, assetClassName: s, disableHover: c });
        case A.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, E.xb)(t.productLine);
    }
}
