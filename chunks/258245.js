r.d(i, { A: () => tO });
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
    x = r(444927),
    p = r(793574),
    C = r(688810),
    f = r(713517),
    m = r(440938),
    I = r(161918),
    T = r(395856),
    g = r(503089),
    j = r(682301),
    A = r(629042),
    v = r(777829),
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
    M = r(287809),
    Y = r(158045),
    B = r(839534),
    D = r(4227),
    W = r(298072),
    F = r(993408),
    $ = r(450481),
    q = r(740076),
    z = r(466459),
    G = r(395068),
    K = r(623373),
    Q = r(561769),
    Z = r(766172),
    J = r(57020),
    X = r(61750),
    tt = r(758836),
    ti = r(202541),
    tr = r(375708),
    tn = r(508672);
function te(t) {
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
        u = (0, F.R8)(i, e, !1),
        d = (0, m.uM)()?.sessionId,
        k = s ?? tr.intl.formatToPlainString(tr.t["cNSL/j"], { price: u });
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(),
                o?.(tt.sH.BUY_WITH_FIAT),
                (0, R.A)({
                    skuId: (0, Z.Y)({ product: i, selectedVariantIndex: l }),
                    returnRef: r,
                    analyticsLocations: a,
                    discoverySessionId: d,
                });
        },
        text: k,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: k, productLabel: c }),
        fullWidth: !0,
    });
}
function ta(t) {
    let { text: i, onTrackClick: r, productLabel: e } = t,
        a = i ?? tr.intl.string(tr.t.sEAnVH);
    return (0, n.jsx)(O.A, {
        subscriptionTier: ti.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: a,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: a, productLabel: e }),
        onClick: (t) => {
            t.stopPropagation(), r?.(tt.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function tl(t) {
    let { handlePreviewButtonClick: i, text: r, onTrackClick: e, productLabel: a } = t,
        l = r ?? tr.intl.string(tr.t.FdGl5A);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), e?.(tt.sH.VIEW_DETAILS), i(t);
        },
        text: l,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        fullWidth: !0,
    });
}
function ts(t) {
    let { handleUseNow: i, isApplying: r, text: e, onTrackClick: a, productLabel: l } = t,
        s = e ?? tr.intl.string(tr.t.MAS7uK);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), a?.(tt.sH.USE_NOW), i();
        },
        loading: r,
        text: s,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: s, productLabel: l }),
        fullWidth: !0,
    });
}
function to(t) {
    let { text: i, onTrackClick: r, productLabel: e } = t,
        a = (0, U.A)(),
        l = i ?? tr.intl.string(tr.t["2p2aYz"]);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), r?.(tt.sH.EDIT_PROFILE), a();
        },
        text: l,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: l, productLabel: e }),
        fullWidth: !0,
    });
}
function tc(t) {
    let { skuId: i, onClick: r, text: e, productLabel: a } = t,
        l = e ?? tr.intl.string(tr.t.FdGl5A);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), r(i);
        },
        text: l,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        fullWidth: !0,
    });
}
function tu(t) {
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
        u = l ?? tr.intl.string(tr.t.zp6caO);
    async function d() {
        s?.("claim premium product button"),
            o?.(tt.sH.ADD_TO_COLLECTION),
            await (0, B.iJ)(i.skuId),
            (0, X.A)({ product: i, analyticsLocations: a, purchaseType: tt.gs.PREMIUM_PURCHASE });
    }
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), d();
        },
        disabled: r,
        loading: e,
        loadingStartedLabel: tr.intl.string(tr.t["TYw+9s"]),
        loadingFinishedLabel: tr.intl.string(tr.t.Pg1UP5),
        text: u,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: u, productLabel: c }),
        fullWidth: !0,
    });
}
function td(t) {
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
        u = (0, m.uM)()?.sessionId,
        d = l ?? tr.intl.formatToPlainString(tr.t.yi41qQ, { orbPrice: r[0].amount });
    return (0, n.jsx)(_.$, {
        variant: "primary",
        text:
            l ??
            tr.intl.format(tr.t.JC15qj, {
                orbPrice: r[0].amount,
                orbIconHook: () => (0, n.jsx)(V.A, { className: tn.f }),
            }),
        onClick: (t) => {
            t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(tt.sH.BUY_WITH_ORBS),
                (0, w.B4)({
                    skuId: (0, Z.Y)({ product: i, selectedVariantIndex: a }),
                    onComplete: (t) => {
                        (0, B.gB)(),
                            (0, X.A)({
                                product: i,
                                analyticsLocations: e,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: tt.gs.ORB,
                            });
                    },
                    analyticsLocations: e,
                    discoverySessionId: u,
                });
        },
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: d, productLabel: c }),
        fullWidth: !0,
    });
}
function tk(t) {
    let { handlePreviewButtonClick: i, text: r, onTrackClick: e, productLabel: a } = t,
        l = r ?? tr.intl.string(tr.t.GpnHfH);
    return (0, n.jsx)(_.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), e?.(tt.sH.PAYMENT_OPTIONS), i(t);
        },
        text: l,
        "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        fullWidth: !0,
    });
}
function tx(t) {
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
        u = (0, G.A)({ location: "ProductCardPrimaryCTAInner", product: i }),
        d = (0, N.bG)([M.default], () => M.default.getCurrentUser()),
        k = (0, H.L)(ti.PremiumTypes.TIER_2),
        x = Y.Ay.canUseShopDiscounts(d),
        f = (0, A.VZ)(i),
        { isPurchased: m, isPartiallyOwnedBundle: I } = (0, z.h)(i),
        T = (0, F.G0)(i),
        g = (0, F.tt)(i),
        { isDisabled: j } = (0, q.I)(i.skuId),
        v = (0, F.Zu)({ product: i, isPartiallyOwnedBundle: I, isPurchased: m }),
        {
            shouldCheckoutWithOrbs: P,
            hasSufficientOrbs: y,
            checkoutEligiblePrices: S,
            isOrbExclusive: b,
        } = (0, J.F)({ product: i, hasShopDiscount: x, prioritizedCurrency: s }),
        { analyticsLocations: L } = (0, C.Ay)(p.A.COLLECTIBLES_SHOP_CARD),
        E = (0, h.s7)(i),
        _ = (0, Q.ql)(i, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [R, O] = (0, N.yK)([D.A], () => [
            D.A.isClaiming === i.skuId,
            null != D.A.isClaiming && D.A.isClaiming !== i.skuId,
        ]),
        { handleUseNow: U, isApplying: V, canUseNow: w } = (0, $.p)({ product: i }),
        B = l ?? f ?? void 0;
    if (null != a) return (0, n.jsx)(tc, { onClick: a, skuId: i.skuId, text: l, productLabel: E });
    if (T && !k && !g) return (0, n.jsx)(ta, { text: l, onTrackClick: c, productLabel: E });
    if (!v || j) return (0, n.jsx)(tl, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: E });
    if (m)
        return w
            ? (0, n.jsx)(ts, { handleUseNow: U, isApplying: V, text: l, onTrackClick: c, productLabel: E })
            : (0, n.jsx)(to, { text: l, onTrackClick: c, productLabel: E });
    if (u)
        return (0, n.jsx)(C.f5, {
            value: [...L, p.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, n.jsx)(ta, { text: tr.intl.string(tr.t["9wfL34"]), onTrackClick: c, productLabel: E }),
        });
    if (T)
        return (0, n.jsx)(tu, {
            product: i,
            isClaimPremiumProductDisabled: O,
            isClaiming: R,
            analyticsLocations: L,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: E,
        });
    if (P && y)
        return (0, n.jsx)(td, {
            product: i,
            checkoutEligiblePrices: S,
            analyticsLocations: L,
            selectedVariantIndex: e,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: E,
        });
    if (P && !y)
        if (S.length > 1)
            return (0, n.jsx)(tk, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: E });
        else return (0, n.jsx)(tl, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: E });
    return b
        ? (0, n.jsx)(tl, { handlePreviewButtonClick: _, text: l, onTrackClick: c, productLabel: E })
        : (0, n.jsx)(te, {
              product: i,
              cardRef: r,
              hasShopDiscount: x,
              analyticsLocations: L,
              selectedVariantIndex: e,
              text: B,
              onTrackClick: c,
              productLabel: E,
          });
}
let tp = function (t) {
    let { skuId: i, cardRef: r, onClick: e, text: a, prioritizedCurrency: l, onClickAnalytics: s, onTrackClick: o } = t,
        c = (0, Q.Vm)(i),
        u = (0, W.Q)(c);
    if (null == c) return null;
    let d = (0, K.rb)(c, u);
    return (0, n.jsx)(tx, {
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
var tC = r(408278),
    tf = r(39623),
    tm = r(878112),
    tI = r(347722);
function tT(t) {
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
        k = (0, m.uM)(),
        x = (0, tI.X)(i, s),
        C = (0, Q.ql)(i, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        f = (0, h.s7)(i);
    return null != a || null != l
        ? (0, n.jsx)(tC.K, {
              variant: "primary",
              "aria-label": tr.intl.formatToPlainString(tr.t["5UYoSr"], {
                  ctaLabel: tr.intl.string(tr.t.SKNnqq),
                  productLabel: f,
              }),
              icon: l ?? tf.EyeIcon,
              onClick: (t) => {
                  t.stopPropagation(), null != a ? a(i.skuId) : (c?.(tt.sH.OPEN_DETAILS), C(t));
              },
          })
        : x
          ? (0, n.jsx)(m.R9, {
                newValue: { pageCategory: d === tt.G2.HOME ? void 0 : k?.pageCategory },
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
        c = (0, Q.Vm)(i),
        u = (0, W.Q)(c);
    if (null == c) return null;
    let d = (0, K.rb)(c, u);
    return (0, n.jsx)(tT, {
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
    tA = r(661847),
    tv = r(139146),
    tP = r(668253);
function ty(t) {
    let { product: i, selectedVariantIndex: r, isCardHovered: e, onTrackClick: a } = t;
    return (0, n.jsx)(tv.R, {
        product: i,
        selectedVariantIndex: r,
        isCardHovered: e,
        className: tP.i,
        onTrackClick: a,
    });
}
let th = function (t) {
    let { skuId: i, isCardHovered: r, onTrackClick: e } = t,
        a = (0, Q.Vm)(i),
        l = (0, W.Q)(a);
    return null == a
        ? null
        : (0, n.jsx)(ty, { product: a, selectedVariantIndex: l, isCardHovered: r, onTrackClick: e });
};
var tS = r(935094),
    tb = r(521e3),
    tL = r(496552);
let tE = e.memo(function (t) {
    let {
            product: i,
            hideWishlistButton: r,
            hideProductName: a,
            hideVariantSwitcher: s,
            hidePrice: u,
            hidePrimaryCTA: x,
            hideSecondaryCTA: T,
            badgeOverride: g,
            onClickCard: j,
            onClickPrimaryCTA: N,
            onClickSecondaryCTA: _,
            onMouseEnter: R,
            onMouseLeave: O,
            onFocus: H,
            onBlur: U,
            primaryCTAText: V,
            secondaryCTAIcon: w,
            productNameClassName: M,
            badgeClassName: Y,
            cardClassName: B,
            prioritizedCurrency: D,
            aspectRatio: W,
            hideStaticBundleBackgroundAsset: F,
        } = t,
        { previewingVariantIndex: $, handleEntering: q, handleLeaving: z } = (0, tS.f)(i),
        G = (0, Q.gZ)() ?? D,
        K = (0, A.Nc)(i),
        Z = G ?? (K ? Q.Hi.FIAT : void 0),
        J = (0, I.Mk)(),
        X = J?.tab,
        ti = (0, m.uM)(),
        tr = e.useMemo(() => (0, Q.UU)(i, X, ti), [i, X, ti]),
        tn = (0, h.s7)(i),
        te = e.useId(),
        ta = e.useRef(null),
        { isHoveringOrFocusing: tl } = (0, f.A)(ta),
        ts = (0, tb.$c)(i.skuId),
        to = (0, y.U)(i),
        tc = (0, o.A)(ta, to),
        tu = (0, Q.ql)(i, p.A.COLLECTIBLES_SHOP_CARD, tr),
        { analyticsLocations: td } = (0, C.Ay)(),
        tk = (0, v.f)({ product: i, analyticsLocations: td }),
        tx = e.useCallback(
            (t) => {
                null != j ? j(t) : (tk(tt.sH.OPEN_DETAILS), tu(t));
            },
            [tk, j, tu],
        );
    (0, P.x)(tl, i);
    let tC = i.type === c.R.BUNDLE && i.previewAssets?.fgStatic != null,
        tf = i.type === c.R.VARIANTS_GROUP && !s,
        tm = e.useMemo(() => ({ maxVariantsToShow: 4, onClick: tu }), [tu]),
        tI = i.type === c.R.BUNDLE && !F,
        tT = !x || !T,
        tj = !(u && a) || tf,
        tv = tj || tT,
        tP = tT || tf;
    return (0, n.jsx)(d.s, {
        ref: tc,
        onClick: tx,
        "aria-label": tn,
        "aria-describedby": te,
        className: l()(B, tL.ty, { [tL.yo]: tl }),
        onFocus: () => H?.(i.skuId),
        onBlur: () => U?.(i.skuId),
        onMouseEnter: () => R?.(i.skuId),
        onMouseLeave: () => O?.(i.skuId),
        children: (0, n.jsx)(tb.vf.Provider, {
            value: ts ? ta : null,
            children: (0, n.jsxs)("div", {
                id: te,
                className: tL.qt,
                style: { aspectRatio: W },
                children: [
                    tI &&
                        i.previewAssets?.bgStatic != null &&
                        (0, n.jsx)("img", { className: tL.vD, src: i.previewAssets.bgStatic, alt: "" }),
                    (0, n.jsx)("div", {
                        className: l()(tL.Dq, { [tL.$r]: !a || tj || tP, [tL.T9]: tC }),
                        children: (0, n.jsx)(L.A, { skuId: i.skuId, isCardHovered: tl, overrideVariantIndex: $ }),
                    }),
                    (0, n.jsxs)("div", {
                        className: tL.N1,
                        children: [
                            (0, n.jsx)(S.A, { skuId: i.skuId, badgeOverride: g, className: Y, prioritizedCurrency: Z }),
                            !r && (0, n.jsx)(th, { skuId: i.skuId, isCardHovered: tl, onTrackClick: tk }),
                        ],
                    }),
                    tv &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", { className: l()(tL.wY, { [tL.KY]: tC }) }),
                                (0, n.jsxs)("div", {
                                    className: tL.xQ,
                                    children: [
                                        tj &&
                                            (0, n.jsxs)("div", {
                                                className: tL.xE,
                                                children: [
                                                    !(a && u) &&
                                                        (0, n.jsxs)("div", {
                                                            className: tL.Ly,
                                                            children: [
                                                                !a &&
                                                                    (0, n.jsx)(b.A, {
                                                                        skuId: i.skuId,
                                                                        className: l()(M, tL.tZ),
                                                                    }),
                                                                !u &&
                                                                    (0, n.jsx)("div", {
                                                                        className: tL.oh,
                                                                        children: (0, n.jsx)(E.A, {
                                                                            skuId: i.skuId,
                                                                            prioritizedCurrency: Z,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    tf &&
                                                        (0, n.jsx)(tA.A, {
                                                            skuId: i.skuId,
                                                            isCollapsed: !tl,
                                                            onVariantEnter: q,
                                                            onVariantExit: z,
                                                            overflowProps: tm,
                                                            onTrackClick: tk,
                                                        }),
                                                ],
                                            }),
                                        tT &&
                                            (0, n.jsx)("div", {
                                                className: tL.Vs,
                                                children: (0, n.jsxs)(k.e, {
                                                    wrap: !1,
                                                    className: tL.Ld,
                                                    fullWidth: !0,
                                                    children: [
                                                        !x &&
                                                            (0, n.jsx)(tp, {
                                                                skuId: i.skuId,
                                                                cardRef: ta,
                                                                onClick: N,
                                                                text: V,
                                                                prioritizedCurrency: Z,
                                                                onClickAnalytics: tr,
                                                                onTrackClick: tk,
                                                            }),
                                                        !T &&
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
function tN(t) {
    let i = (0, g.c)("product_card");
    return t === u.j.PREMIUM_TIER_2_1_DAY && !i;
}
function t_(t) {
    let { skuId: i, ...r } = t,
        e = (0, Q.Vm)(i),
        a = (0, x.A)(() => ({ cardId: (0, s.A)() })),
        l = tN(i);
    return null == e || l ? null : (0, n.jsx)(m.R9, { newValue: a, children: (0, n.jsx)(tE, { product: e, ...r }) });
}
function tR(t) {
    let { skuId: i, ...r } = t,
        a = e.useContext(Q.v3),
        { state: o, product: c } = (0, j.IK)(i, {
            needsCategory: !1,
            seedCategoryStore: !0,
            flattenVariants: a.flattenProductVariants,
        }),
        u = (0, x.A)(() => ({ cardId: (0, s.A)() })),
        d = tN(i),
        k = e.useMemo(() => ({ ...a, productOverride: c ?? void 0, standalonePreview: !0 }), [a, c]);
    return d
        ? null
        : "loading" === o
          ? (0, n.jsx)(tj.A, {})
          : null == c
            ? null
            : (0, n.jsx)(m.R9, {
                  newValue: u,
                  children: (0, n.jsx)(Q.v3.Provider, {
                      value: k,
                      children: (0, n.jsx)(tE, { product: c, ...r, cardClassName: l()(r.cardClassName, tL.w) }),
                  }),
              });
}
let tO = function (t) {
    return (0, T.$)("product_card") ? (0, n.jsx)(tR, { ...t }) : (0, n.jsx)(t_, { ...t });
};
