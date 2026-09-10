r.d(i, { A: () => tR });
var n = r(477900),
    e = r(582128),
    a = r(503698),
    l = r.n(a),
    s = r(132500),
    o = r(612324),
    c = r(575593),
    u = r(334279),
    d = r(890856),
    k = r(825484),
    p = r(444927),
    x = r(793574),
    C = r(688810),
    m = r(713517),
    f = r(440938),
    I = r(161918),
    g = r(395856),
    j = r(503089),
    T = r(682301),
    v = r(629042),
    A = r(777829),
    P = r(859587),
    y = r(918838),
    h = r(536572),
    S = r(268959),
    b = r(387945),
    L = r(618317),
    E = r(140877),
    N = r(702841),
    _ = r(821609),
    R = r(44120),
    O = r(465794),
    H = r(757036),
    U = r(206835),
    V = r(106799),
    w = r(652165),
    Y = r(287809),
    B = r(158045),
    D = r(839534),
    M = r(4227),
    W = r(298072),
    $ = r(993408),
    q = r(450481),
    F = r(740076),
    z = r(466459),
    G = r(623373),
    K = r(561769),
    Q = r(766172),
    Z = r(57020),
    J = r(61750),
    X = r(758836),
    tt = r(202541),
    ti = r(375708),
    tr = r(508672);
function tn(t) {
    let {
            product: i,
            cardRef: r,
            hasShopDiscount: e,
            analyticsLocations: a,
            selectedVariantIndex: l,
            text: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = (0, $.R8)(i, e, !1),
        d = (0, f.uM)()?.sessionId,
        k = s ?? ti.intl.formatToPlainString(ti.t["cNSL/j"], { price: u });
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(),
                o?.(X.sH.BUY_WITH_FIAT),
                (0, R.A)({
                    skuId: (0, Q.Y)({ product: i, selectedVariantIndex: l }),
                    returnRef: r,
                    analyticsLocations: a,
                    discoverySessionId: d,
                }));
        },
        text: k,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: k, productLabel: c }),
        fullWidth: !0,
    });
}
function te(t) {
    let { text: i, onTrackClick: r, productLabel: e } = t,
        a = i ?? ti.intl.string(ti.t.sEAnVH);
    return (0, n.jsx)(O.A, {
        subscriptionTier: tt.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: a,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: a, productLabel: e }),
        onClick: (t) => {
            (t.stopPropagation(), r?.(X.sH.UNLOCK_WITH_NITRO));
        },
    });
}
function ta(t) {
    let { handlePreviewButtonClick: i, text: r, onTrackClick: e, productLabel: a } = t,
        l = r ?? ti.intl.string(ti.t.FdGl5A);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e?.(X.sH.VIEW_DETAILS), i(t));
        },
        text: l,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        fullWidth: !0,
    });
}
function tl(t) {
    let { handleUseNow: i, isApplying: r, text: e, onTrackClick: a, productLabel: l } = t,
        s = e ?? ti.intl.string(ti.t.MAS7uK);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(X.sH.USE_NOW), i());
        },
        loading: r,
        text: s,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: s, productLabel: l }),
        fullWidth: !0,
    });
}
function ts(t) {
    let { text: i, onTrackClick: r, productLabel: e } = t,
        a = (0, U.A)(),
        l = i ?? ti.intl.string(ti.t["2p2aYz"]);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), r?.(X.sH.EDIT_PROFILE), a());
        },
        text: l,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: l, productLabel: e }),
        fullWidth: !0,
    });
}
function to(t) {
    let { skuId: i, onClick: r, text: e, productLabel: a } = t,
        l = e ?? ti.intl.string(ti.t.FdGl5A);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), r(i));
        },
        text: l,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        fullWidth: !0,
    });
}
function tc(t) {
    let {
            product: i,
            isClaimPremiumProductDisabled: r,
            isClaiming: e,
            analyticsLocations: a,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = l ?? ti.intl.string(ti.t.zp6caO);
    async function d() {
        (s?.("claim premium product button"),
            o?.(X.sH.ADD_TO_COLLECTION),
            await (0, D.iJ)(i.skuId),
            (0, J.A)({ product: i, analyticsLocations: a, purchaseType: X.gs.PREMIUM_PURCHASE }));
    }
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), d());
        },
        disabled: r,
        loading: e,
        loadingStartedLabel: ti.intl.string(ti.t["TYw+9s"]),
        loadingFinishedLabel: ti.intl.string(ti.t.Pg1UP5),
        text: u,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: u, productLabel: c }),
        fullWidth: !0,
    });
}
function tu(t) {
    let {
            product: i,
            checkoutEligiblePrices: r,
            analyticsLocations: e,
            selectedVariantIndex: a,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
        } = t,
        u = (0, f.uM)()?.sessionId,
        d = l ?? ti.intl.formatToPlainString(ti.t.yi41qQ, { orbPrice: r[0].amount });
    return (0, n.jsx)(_.$, {
        variant: "primary",
        text:
            l ??
            ti.intl.format(ti.t.JC15qj, {
                orbPrice: r[0].amount,
                orbIconHook: () => (0, n.jsx)(V.A, { className: tr.f }),
            }),
        onClick: (t) => {
            (t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(X.sH.BUY_WITH_ORBS),
                (0, w.B4)({
                    skuId: (0, Q.Y)({ product: i, selectedVariantIndex: a }),
                    onComplete: (t) => {
                        ((0, D.gB)(),
                            (0, J.A)({
                                product: i,
                                analyticsLocations: e,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: X.gs.ORB,
                            }));
                    },
                    analyticsLocations: e,
                    discoverySessionId: u,
                }));
        },
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: d, productLabel: c }),
        fullWidth: !0,
    });
}
function td(t) {
    let { handlePreviewButtonClick: i, text: r, onTrackClick: e, productLabel: a } = t,
        l = r ?? ti.intl.string(ti.t.GpnHfH);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e?.(X.sH.PAYMENT_OPTIONS), i(t));
        },
        text: l,
        "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        fullWidth: !0,
    });
}
function tk(t) {
    let {
            product: i,
            cardRef: r,
            selectedVariantIndex: e,
            onClick: a,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
        } = t,
        u = (0, N.bG)([Y.default], () => Y.default.getCurrentUser()),
        d = (0, H.L)(tt.PremiumTypes.TIER_2),
        k = B.Ay.canUseShopDiscounts(u),
        p = (0, v.VZ)(i),
        { isPurchased: m, isPartiallyOwnedBundle: f } = (0, z.h)(i),
        I = (0, $.G0)(i),
        g = (0, $.tt)(i),
        { isDisabled: j } = (0, F.I)(i.skuId),
        T = (0, $.Zu)({ product: i, isPartiallyOwnedBundle: f, isPurchased: m }),
        {
            shouldCheckoutWithOrbs: A,
            hasSufficientOrbs: P,
            checkoutEligiblePrices: y,
            isOrbExclusive: S,
        } = (0, Z.F)({ product: i, hasShopDiscount: k, prioritizedCurrency: s }),
        { analyticsLocations: b } = (0, C.Ay)(x.A.COLLECTIBLES_SHOP_CARD),
        L = (0, h.s7)(i),
        E = (0, K.ql)(i, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [_, R] = (0, N.yK)([M.A], () => [
            M.A.isClaiming === i.skuId,
            null != M.A.isClaiming && M.A.isClaiming !== i.skuId,
        ]),
        { handleUseNow: O, isApplying: U, canUseNow: V } = (0, q.p)({ product: i }),
        w = l ?? p ?? void 0;
    if (null != a) return (0, n.jsx)(to, { onClick: a, skuId: i.skuId, text: l, productLabel: L });
    if (I && !d && !g) return (0, n.jsx)(te, { text: l, onTrackClick: c, productLabel: L });
    if (!T || j) return (0, n.jsx)(ta, { handlePreviewButtonClick: E, text: l, onTrackClick: c, productLabel: L });
    if (m)
        return V
            ? (0, n.jsx)(tl, { handleUseNow: O, isApplying: U, text: l, onTrackClick: c, productLabel: L })
            : (0, n.jsx)(ts, { text: l, onTrackClick: c, productLabel: L });
    if (I)
        return (0, n.jsx)(tc, {
            product: i,
            isClaimPremiumProductDisabled: R,
            isClaiming: _,
            analyticsLocations: b,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: L,
        });
    if (A && P)
        return (0, n.jsx)(tu, {
            product: i,
            checkoutEligiblePrices: y,
            analyticsLocations: b,
            selectedVariantIndex: e,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: L,
        });
    if (A && !P)
        if (y.length > 1)
            return (0, n.jsx)(td, { handlePreviewButtonClick: E, text: l, onTrackClick: c, productLabel: L });
        else return (0, n.jsx)(ta, { handlePreviewButtonClick: E, text: l, onTrackClick: c, productLabel: L });
    return S
        ? (0, n.jsx)(ta, { handlePreviewButtonClick: E, text: l, onTrackClick: c, productLabel: L })
        : (0, n.jsx)(tn, {
              product: i,
              cardRef: r,
              hasShopDiscount: k,
              analyticsLocations: b,
              selectedVariantIndex: e,
              text: w,
              onTrackClick: c,
              productLabel: L,
          });
}
let tp = function (t) {
    let { skuId: i, cardRef: r, onClick: e, text: a, prioritizedCurrency: l, onClickAnalytics: s, onTrackClick: o } = t,
        c = (0, K.Vm)(i),
        u = (0, W.Q)(c);
    if (null == c) return null;
    let d = (0, G.rb)(c, u);
    return (0, n.jsx)(tk, {
        product: d,
        cardRef: r,
        selectedVariantIndex: u,
        onClick: e,
        text: a,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
    });
};
var tx = r(408278),
    tC = r(39623),
    tm = r(878112),
    tf = r(347722);
function tI(t) {
    let {
            product: i,
            selectedVariantIndex: r,
            cardRef: e,
            onClick: a,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
        } = t,
        u = (0, I.Mk)(),
        d = u?.tab,
        k = (0, f.uM)(),
        p = (0, tf.X)(i, s),
        C = (0, K.ql)(i, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        m = (0, h.s7)(i);
    return null != a || null != l
        ? (0, n.jsx)(tx.K, {
              variant: "primary",
              "aria-label": ti.intl.formatToPlainString(ti.t["5UYoSr"], {
                  ctaLabel: ti.intl.string(ti.t.SKNnqq),
                  productLabel: m,
              }),
              icon: l ?? tC.EyeIcon,
              onClick: (t) => {
                  (t.stopPropagation(), null != a ? a(i.skuId) : (c?.(X.sH.OPEN_DETAILS), C(t)));
              },
          })
        : p
          ? (0, n.jsx)(f.R9, {
                newValue: { pageCategory: d === X.G2.HOME ? void 0 : k?.pageCategory },
                children: (0, n.jsx)(tm.A, {
                    primary: !0,
                    product: i,
                    selectedVariantIndex: r,
                    returnRef: e,
                    tooltipDelay: 250,
                    onTrackClick: c,
                }),
            })
          : null;
}
let tg = function (t) {
    let { skuId: i, cardRef: r, onClick: e, icon: a, prioritizedCurrency: l, onClickAnalytics: s, onTrackClick: o } = t,
        c = (0, K.Vm)(i),
        u = (0, W.Q)(c);
    if (null == c) return null;
    let d = (0, G.rb)(c, u);
    return (0, n.jsx)(tI, {
        product: d,
        cardRef: r,
        selectedVariantIndex: u,
        onClick: e,
        icon: a,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
    });
};
var tj = r(484469),
    tT = r(661847),
    tv = r(139146),
    tA = r(668253);
function tP(t) {
    let { product: i, selectedVariantIndex: r, isCardHovered: e, onTrackClick: a } = t;
    return (0, n.jsx)(tv.R, {
        product: i,
        selectedVariantIndex: r,
        isCardHovered: e,
        className: tA.i,
        onTrackClick: a,
    });
}
let ty = function (t) {
    let { skuId: i, isCardHovered: r, onTrackClick: e } = t,
        a = (0, K.Vm)(i),
        l = (0, W.Q)(a);
    return null == a
        ? null
        : (0, n.jsx)(tP, { product: a, selectedVariantIndex: l, isCardHovered: r, onTrackClick: e });
};
var th = r(935094),
    tS = r(521e3),
    tb = r(496552);
let tL = e.memo(function (t) {
    let {
            product: i,
            hideWishlistButton: r,
            hideProductName: a,
            hideVariantSwitcher: s,
            hidePrice: u,
            hidePrimaryCTA: p,
            hideSecondaryCTA: g,
            badgeOverride: j,
            onClickCard: T,
            onClickPrimaryCTA: N,
            onClickSecondaryCTA: _,
            onMouseEnter: R,
            onMouseLeave: O,
            onFocus: H,
            onBlur: U,
            primaryCTAText: V,
            secondaryCTAIcon: w,
            productNameClassName: Y,
            badgeClassName: B,
            cardClassName: D,
            prioritizedCurrency: M,
            aspectRatio: W,
            hideStaticBundleBackgroundAsset: $,
        } = t,
        { previewingVariantIndex: q, handleEntering: F, handleLeaving: z } = (0, th.f)(i),
        G = (0, K.gZ)() ?? M,
        Q = (0, v.Nc)(i),
        Z = G ?? (Q ? K.Hi.FIAT : void 0),
        J = (0, I.Mk)(),
        tt = J?.tab,
        ti = (0, f.uM)(),
        tr = e.useMemo(() => (0, K.UU)(i, tt, ti), [i, tt, ti]),
        tn = (0, h.s7)(i),
        te = e.useId(),
        ta = e.useRef(null),
        { isHoveringOrFocusing: tl } = (0, m.A)(ta),
        ts = (0, tS.$c)(i.skuId),
        to = (0, y.U)(i),
        tc = (0, o.A)(ta, to),
        tu = (0, K.ql)(i, x.A.COLLECTIBLES_SHOP_CARD, tr),
        { analyticsLocations: td } = (0, C.Ay)(),
        tk = (0, A.f)({ product: i, analyticsLocations: td }),
        tx = e.useCallback(
            (t) => {
                null != T ? T(t) : (tk(X.sH.OPEN_DETAILS), tu(t));
            },
            [tk, T, tu],
        );
    (0, P.x)(tl, i);
    let tC = i.type === c.R.BUNDLE && i.previewAssets?.fgStatic != null,
        tm = i.type === c.R.VARIANTS_GROUP && !s,
        tf = e.useMemo(() => ({ maxVariantsToShow: 4, onClick: tu }), [tu]),
        tI = i.type === c.R.BUNDLE && !$,
        tj = !p || !g,
        tv = !(u && a) || tm,
        tA = tv || tj,
        tP = tj || tm;
    return (0, n.jsx)(d.s, {
        ref: tc,
        onClick: tx,
        "aria-label": tn,
        "aria-describedby": te,
        className: l()(D, tb.ty, { [tb.yo]: tl }),
        onFocus: () => H?.(i.skuId),
        onBlur: () => U?.(i.skuId),
        onMouseEnter: () => R?.(i.skuId),
        onMouseLeave: () => O?.(i.skuId),
        children: (0, n.jsx)(tS.vf.Provider, {
            value: ts ? ta : null,
            children: (0, n.jsxs)("div", {
                id: te,
                className: tb.qt,
                style: { aspectRatio: W },
                children: [
                    tI &&
                        i.previewAssets?.bgStatic != null &&
                        (0, n.jsx)("img", { className: tb.vD, src: i.previewAssets.bgStatic, alt: "" }),
                    (0, n.jsx)("div", {
                        className: l()(tb.Dq, { [tb.$r]: !a || tv || tP, [tb.T9]: tC }),
                        children: (0, n.jsx)(L.A, { skuId: i.skuId, isCardHovered: tl, overrideVariantIndex: q }),
                    }),
                    (0, n.jsxs)("div", {
                        className: tb.N1,
                        children: [
                            (0, n.jsx)(S.A, { skuId: i.skuId, badgeOverride: j, className: B, prioritizedCurrency: Z }),
                            !r && (0, n.jsx)(ty, { skuId: i.skuId, isCardHovered: tl, onTrackClick: tk }),
                        ],
                    }),
                    tA &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", { className: l()(tb.wY, { [tb.KY]: tC }) }),
                                (0, n.jsxs)("div", {
                                    className: tb.xQ,
                                    children: [
                                        tv &&
                                            (0, n.jsxs)("div", {
                                                className: tb.xE,
                                                children: [
                                                    !(a && u) &&
                                                        (0, n.jsxs)("div", {
                                                            className: tb.Ly,
                                                            children: [
                                                                !a &&
                                                                    (0, n.jsx)(b.A, {
                                                                        skuId: i.skuId,
                                                                        className: l()(Y, tb.tZ),
                                                                    }),
                                                                !u &&
                                                                    (0, n.jsx)("div", {
                                                                        className: tb.oh,
                                                                        children: (0, n.jsx)(E.A, {
                                                                            skuId: i.skuId,
                                                                            prioritizedCurrency: Z,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    tm &&
                                                        (0, n.jsx)(tT.A, {
                                                            skuId: i.skuId,
                                                            isCollapsed: !tl,
                                                            onVariantEnter: F,
                                                            onVariantExit: z,
                                                            overflowProps: tf,
                                                            onTrackClick: tk,
                                                        }),
                                                ],
                                            }),
                                        tj &&
                                            (0, n.jsx)("div", {
                                                className: tb.Vs,
                                                children: (0, n.jsxs)(k.e, {
                                                    wrap: !1,
                                                    className: tb.Ld,
                                                    fullWidth: !0,
                                                    children: [
                                                        !p &&
                                                            (0, n.jsx)(tp, {
                                                                skuId: i.skuId,
                                                                cardRef: ta,
                                                                onClick: N,
                                                                text: V,
                                                                prioritizedCurrency: Z,
                                                                onClickAnalytics: tr,
                                                                onTrackClick: tk,
                                                            }),
                                                        !g &&
                                                            (0, n.jsx)(tg, {
                                                                skuId: i.skuId,
                                                                cardRef: ta,
                                                                onClick: _,
                                                                icon: w,
                                                                prioritizedCurrency: Z,
                                                                onClickAnalytics: tr,
                                                                onTrackClick: tk,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
});
function tE(t) {
    let i = (0, j.c)("product_card");
    return t === u.j.PREMIUM_TIER_2_1_DAY && !i;
}
function tN(t) {
    let { skuId: i, ...r } = t,
        e = (0, K.Vm)(i),
        a = (0, p.A)(() => ({ cardId: (0, s.A)() })),
        l = tE(i);
    return null == e || l ? null : (0, n.jsx)(f.R9, { newValue: a, children: (0, n.jsx)(tL, { product: e, ...r }) });
}
function t_(t) {
    let { skuId: i, ...r } = t,
        a = e.useContext(K.v3),
        { state: o, product: c } = (0, T.IK)(i, {
            needsCategory: !1,
            seedCategoryStore: !0,
            flattenVariants: a.flattenProductVariants,
        }),
        u = (0, p.A)(() => ({ cardId: (0, s.A)() })),
        d = tE(i),
        k = e.useMemo(() => ({ ...a, productOverride: c ?? void 0, standalonePreview: !0 }), [a, c]);
    return d
        ? null
        : "loading" === o
          ? (0, n.jsx)(tj.A, {})
          : null == c
            ? null
            : (0, n.jsx)(f.R9, {
                  newValue: u,
                  children: (0, n.jsx)(K.v3.Provider, {
                      value: k,
                      children: (0, n.jsx)(tL, { product: c, ...r, cardClassName: l()(r.cardClassName, tb.w) }),
                  }),
              });
}
let tR = function (t) {
    return (0, g.$)("product_card") ? (0, n.jsx)(t_, { ...t }) : (0, n.jsx)(tN, { ...t });
};
