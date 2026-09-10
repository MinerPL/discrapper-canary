(n.d(t, { _: () => eo }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(517950),
    a = n(531260),
    s = n(854354),
    o = n(482419),
    u = n(38785),
    c = n(202475),
    d = n(400612),
    m = n(463376),
    p = n(266060),
    C = n(951305),
    h = n(721836),
    f = n(473617),
    E = n(699595),
    S = n(558620),
    y = n(669510),
    I = n(683071),
    g = n(834730),
    A = n(212739);
n(216238);
var P = n(202541),
    _ = n(181666),
    v = n(375708),
    x = n(580194),
    T = n(732280),
    N = n(73663),
    b = n(815545),
    j = n(344159),
    R = n(45938),
    M = n(158045),
    O = n(577381),
    L = n(750532),
    k = n(216641),
    w = n(222707),
    U = n(503698),
    D = n.n(U),
    G = n(575593),
    F = n(403581),
    B = n(17928),
    H = n(262427),
    W = n(674658),
    Y = n(474012),
    K = n(607123),
    V = n(287809),
    Z = n(341535),
    q = n(106934);
function z(e) {
    let { Icon: t = F.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(H.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function Q(e) {
    let { skuIds: t, text: n, gradientColor: a = "nitro-pink" } = e,
        s = (0, B.bG)([V.default], () => V.default.getCurrentUser()),
        o = t[0] !== r.a.SUMMER_2026_GOGO_FAKE_SKU_ID ? t[0] : null,
        { product: u } = (0, W.q)(o),
        c = i.useMemo(
            () =>
                null != u && t.length > 1
                    ? v.intl.format(Z.default.XoHiqS, { name: u.name, count: t.length - 1 })
                    : u?.name,
            [u, t.length],
        ),
        d = (0, Y.tP)(u);
    return null == d
        ? null
        : (0, l.jsx)(H.A, {
              className: q.Xx,
              gradientColor: a,
              customGraphic: (0, l.jsx)("div", {
                  className: q.yn,
                  children: (0, l.jsx)("div", {
                      className: D()(q.ML, {
                          [q.M]: u?.type === G.R.AVATAR_DECORATION,
                          [q.Hm]: u?.type === G.R.PROFILE_EFFECT,
                          [q.hH]: u?.type === G.R.PROFILE_FRAME,
                          [q.qF]: u?.type === G.R.NAMEPLATE,
                          [q.l2]: u?.type === G.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(K.pL, {
                          collectiblesItem: d,
                          user: s,
                          nameplatePreviewStyle: q.M4,
                          nameplatePreviewRescalerStyle: q.N1,
                      }),
                  }),
              }),
              children: (0, l.jsxs)("div", {
                  className: q.zN,
                  children: [
                      (0, l.jsx)(g.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
                      null != c && (0, l.jsx)(g.E, { variant: "text-sm/medium", color: "currentColor", children: c }),
                  ],
              }),
          });
}
var $ = n(377058);
function J(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = v.intl.string(v.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, c.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? v.intl.string(v.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)($.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: u,
        hideCurrencySelect: r,
    });
}
var X = n(340034),
    ee = n(753261),
    et = n(531536),
    en = n(924799);
function el(e) {
    let { fallback: t } = e,
        { enabled: n } = ee.E.useConfig({ location: "PremiumUnifiedCheckoutOrbsRewardNotice" });
    return n
        ? (0, l.jsx)("div", {
              className: en.kL,
              children: (0, l.jsx)(et.W, {
                  className: en.Vs,
                  image: (0, l.jsx)("img", {
                      className: en.L8,
                      alt: "",
                      src: "https://cdn.discordapp.com/assets/content/b6d1d954e5c9ccfd2356d7af86ca2a4a59717635cc6f558f731edb2e6046b25c.png",
                  }),
                  title: (0, l.jsx)(g.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: v.intl.formatToPlainString(v.t.vXqqUc, { orbCount: 5e3 }),
                  }),
                  body: (0, l.jsx)(g.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: v.intl.string(v.t.Ev7DO6),
                  }),
              }),
          })
        : t;
}
var ei = n(845012),
    er = n(134638),
    ea = n(888751),
    es = n(583741);
function eo(e) {
    let {
            verifiedTrialId: t,
            planGroup: n,
            metadata: U,
            reviewWarningMessage: D,
            handlePaymentSourceAdd: G,
            handleStepChange: F,
        } = e,
        {
            checkoutInvoicePreview: B,
            checkoutPriceOptions: H,
            checkoutInvoiceError: W,
            referralTrialOfferId: Y,
            isGift: K,
            activeSubscription: V,
            shouldDisallowPlanSelection: Z,
            expressCheckoutSubmitting: q,
            shouldUseStripeExpressCheckout: $,
            premiumPlanOptions: ee,
        } = (0, h.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { selectedPlanFromFluxStore: et, selectedPlanId: en } = (0, S.D)(),
        {
            isEligibleForTrial: eo,
            discountOffer: eu,
            premiumGroupDiscountOffer: ec,
            isPremiumGroupPurchase: ed,
        } = (0, m.i)(),
        em = i.useMemo(() => eo && null != t, [eo, t]),
        {
            discriminatedInvoicePreview: ep,
            subscriptionPeriodEnd: eC,
            proratedInvoicePreview: eh,
            purchaseDisabled: ef,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    discriminatedInvoicePreview: u,
                    proratedInvoicePreview: c,
                    subscriptionPeriodEnd: m,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: c,
                            renewalInvoicePreview: m,
                            quantity: p,
                            primaryInvoicesError: S,
                        } = (0, h.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: y } = (0, C.Pv)(),
                        {
                            subscriptionPlan: I,
                            purchaseDisabled: g,
                            newItems: A,
                            preventInvoiceFetch: P,
                        } = (0, f.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: _,
                            checkoutInvoiceRequestParams: v,
                            renewalInvoiceRequestParams: x,
                        } = (0, f.jq)({
                            items: A,
                            preventFetch: P,
                            priceOptions: n,
                            trialId: l,
                            subscriptionMetadata: r,
                        }),
                        T = i.useMemo(
                            () =>
                                y
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ..._, skuId: s, subscriptionPlanId: t, quantity: p },
                                      }
                                    : { type: "subscription_checkout_invoice", params: v },
                            [_, v, y, t, s, p],
                        ),
                        N = i.useMemo(() => (y ? null : { type: "subscription_renewal_invoice", params: x }), [x, y]);
                    (i.useEffect(() => {
                        o(T);
                    }, [T, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]));
                    let { proratedInvoicePreview: b } = i.useMemo(() => ({ proratedInvoicePreview: c }), [c]),
                        { discountInvoiceError: j } = (0, E.W)({ priceOptions: n, trialId: l, metadata: r }),
                        R = i.useMemo(() => S ?? j, [S, j]),
                        M = i.useMemo(
                            () =>
                                y ? d.u$.PREMIUM_GIFT : a ? d.u$.PREMIUM_WITH_TRIAL : d.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, d.KY)({
                            invoiceError: R,
                            subscriptionPlan: I,
                            invoiceTypeDiscriminator: M,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: c,
                        discriminatedInvoicePreview: O,
                        proratedInvoicePreview: b,
                        renewalInvoicePreview: m,
                        purchaseDisabled: g,
                        invoiceError: R,
                        subscriptionPeriodEnd: L,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: s,
                subscriptionPeriodEnd: m,
                discriminatedInvoicePreview: u,
                proratedInvoicePreview: c,
            };
        })({ selectedPlanId: en, verifiedTrialId: t, metadata: U, isVerifiedTrial: em }),
        eE = (0, p.K)(),
        eS = ec ?? eu,
        { giftRecipient: ey, selectedGiftingPromotionRewards: eI } = (0, C.Pv)(),
        eg = K && (0, R.Ik)(ey),
        eA = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: em })) && !ed && !Z,
        eP = U?.guild_id ?? void 0,
        e_ = (0, a.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: ev } = (0, c.j)(),
        {
            hasEntitlements: ex,
            paymentSourceType: eT,
            isPrepaid: eN,
            paymentSourceOptionalWarningCopy: eb,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, k.g)(n, a),
                o = (0, M.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, j.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? v.intl.format(v.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: et, paymentSources: ev }),
        ej = eh ?? B,
        eR = i.useMemo(
            () => null != eS && null != eS.discount && null != ej && (0, b.Ro)(ej, eS.discount.id),
            [eS, ej],
        ),
        eM = (0, l.jsx)(J, {
            label: v.intl.string(v.t["u+Cw58"]),
            handlePaymentSourceAdd: G,
            isTrial: em,
            hideCurrencySelect: eR,
            disabled: ef,
            hasEntitlements: ex,
        }),
        eO = (0, T.V)(Y),
        { copy: eL, daysCount: ek, userTrialOffer: ew } = (0, N.O8)(),
        eU = (0, w.pt)({
            fractionalPremiumInfo: e_,
            selectedPlanId: en,
            planGroup: n,
            premiumSubscription: V,
            isGift: K,
        }),
        eD = K && et.interval === P.WT.YEAR && (0, M.xq)(et.id),
        eG = (0, M.L_)({ planId: et.id, isGift: !0, priceOptions: H, subscriptionPlan: et }),
        eF = i.useMemo(() => {
            if (null != eG && eD)
                return { headerBadgeText: v.intl.formatToPlainString(es.default["Mi5BH/"], { percentOff: eG }) };
        }, [eG, eD]),
        eB = (0, L.Fe)(eF),
        eH = i.useMemo(() => {
            if (null != ep && ep.type === d.u$.PREMIUM_WITH_TRIAL && null != ew)
                return (0, l.jsx)(z, { text: v.intl.format(es.default.IAsfR5, { daysCount: ek }) });
            if (null != eS && eR) {
                let e = eS.discount,
                    t = e.intervalCount;
                if (e.intervalType === P.Ff.MONTH)
                    return (0, l.jsx)(z, {
                        text: v.intl.format(es.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.intervalType === P.Ff.YEAR)
                    return (0, l.jsx)(z, { text: v.intl.format(es.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return K && eI.length > 0
                ? (0, l.jsx)(Q, { skuIds: eI, text: v.intl.format(es.default["XWo+Bp"], { count: eI.length }) })
                : eD && null != eG
                  ? (0, l.jsx)(z, { text: v.intl.format(es.default["7sYIBL"], { savingsPercent: eG }) })
                  : null;
        }, [ew, eR, eS, ek, ep, eG, eD, K, eI]),
        eW = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, A.O)();
            return i.useMemo(
                () =>
                    n || t !== P.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(I.w, {
                              type: "info",
                              children: (0, l.jsx)(g.E, {
                                  variant: "text-sm/medium",
                                  children: v.intl.format(_.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: et.skuId, isGift: K }),
        eY = (0, O.i)({ planSkuId: et.skuId, invoice: ej }),
        eK = (0, x.Mq)(et) && eI.includes(r.a.SUMMER_2026_GOGO_FAKE_SKU_ID),
        eV = i.useMemo(() => {
            let e = eH ?? eY ?? null;
            return eK ? (0, l.jsx)(el, { fallback: e }) : e;
        }, [eK, eH, eY]),
        eZ = i.useMemo(() => {
            let e = [];
            return (
                null != D && "" !== D && e.push({ type: "warning", message: D, key: "review-warning" }),
                null != eb && e.push({ type: "info", message: eb, key: "payment-source-optional-warning" }),
                eU
                    ? e.push({
                          directContent: (0, l.jsx)(X.l, {
                              fractionalPremiumInfo: e_,
                              isEligibleForTrial: eo,
                              trialPeriodCopy: eL,
                              subscriptionPeriodEnd: eC,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ed && e.push({ type: "info", message: (0, w.Nn)(), key: "premium-group-purchase-notice" }),
                null != eW && e.push({ directContent: eW, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [D, eb, eU, e_, eo, eL, eC, ed, eW]),
        eq = null != ep ? ep.invoicePreview : null,
        { priceOptions: ez, planPricesLoading: eQ } = (0, M.Pr)(H, eq, W),
        e$ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eZ,
            planSelectContent: eA
                ? (0, l.jsx)(ei.X, {
                      disabled: ef || q,
                      selectedPlanId: en,
                      priceOptions: ez,
                      planOptions: ee,
                      subscriptionPeriodEnd: eC,
                      planPricesLoading: eQ,
                  })
                : void 0,
            paymentMethodContent: eM,
            promotionalNoticeContent: eV,
            headerBadgeConfig: eB,
        };
    if (null == ep && null != W) return (0, l.jsx)(u.T_, { ...e$, legalContent: null });
    if (null == ep || ep.type === d.u$.LOADING)
        return (0, l.jsx)(u.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eB });
    let eJ = null != eO ? eO.subscriptionTrial : void 0,
        eX =
            ep.type === d.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(o.k, {
                      discriminatedInvoicePreview: ep,
                      subscriptionPlan: et,
                      isPrepaidPaymentSource: eN,
                      subscriptionTrial: eJ,
                      isCustomGift: eg,
                  }),
        e0 = null;
    if (
        !eN &&
        (d.ME.has(ep.type) || ep.type === d.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ep &&
        null != ep.renewalInvoicePreview
    ) {
        let e = (0, ea.Gj)(ep.invoicePreview, ep.renewalInvoicePreview, eJ, {
            discountOffer: eS,
            isSubscriptionUpdate: null != V,
            fractionalPremiumInfo: e_,
        });
        e0 = (0, l.jsx)(y._, { ...e, defaultExpanded: $ });
    }
    let e1 = eA
            ? void 0
            : (0, l.jsx)(er._, {
                  type: ep.type,
                  invoicePreview: ep.invoicePreview,
                  storeListing: eE,
                  subscriptionPlan: et,
                  isPrepaidPaymentSource: eN,
                  giftRecipient: ey,
                  isPremiumGroupPurchase: ed,
                  guildId: eP,
                  handleStepChange: F,
              }),
        e2 = (0, l.jsx)(X.P, {
            activeSubscription: V,
            isTrial: em,
            plan: et,
            isGift: K,
            paymentSourceType: eT,
            discriminatedInvoicePreview: ep,
            fractionalPremiumInfo: e_,
        }),
        e3 =
            ep.type === d.u$.PREMIUM_WITH_TRIAL
                ? (0, ea.ib)(ep.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: ep.invoicePreview });
    return (0, l.jsx)(u.T_, {
        ...e$,
        purchaseItemContent: e1,
        subscriptionDetailsContent: e0,
        invoiceSummaryContent: eX,
        legalContent: e2,
        invoiceTotalDueValue: e3,
        invoiceTotalDueLabel: K ? v.intl.string(es.default.Zxav97) : v.intl.string(es.default.R0cZsM),
    });
}
