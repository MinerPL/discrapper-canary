n.d(t, { Ay: () => b, O7: () => x, gS: () => N });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(17928),
    c = n(834730),
    d = n(939249),
    m = n(150934),
    p = n(721836),
    C = n(951305),
    h = n(773669),
    f = n(97352),
    E = n(45938),
    S = n(252424),
    y = n(158045),
    I = n(580630),
    g = n(725018),
    A = n(186223),
    P = n(202541),
    _ = n(375708),
    v = n(781248);
function x(e, t) {
    let n = e.interval === P.WT.YEAR ? _.t.ECT4A5 : _.t.v9QeON;
    return _.intl.format(n, { price: (0, I.$g)(t.amount, t.currency) });
}
function T(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function N(e, t, n) {
    let {
            userLocale: l,
            isEligibleForBOGOPromotion: i,
            shouldShowSavingsPercent: r,
            isGift: a,
            planId: s,
            savingsPercent: o,
            priceOptions: u,
            isEligibleForTrial: c,
        } = n,
        d = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== P.gD.PREMIUM_MONTH_TIER_2 ? null : T(_.intl.string(_.t.iQTfWx));
    if (null != t && (t.interval !== P.WT.YEAR || null == e) && !(r && !d)) return null;
    if (
        null != t &&
        !d &&
        (0, A.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: c ?? !1 })
    ) {
        let e = (0, A.vK)(t, a, u);
        return null != e ? T(e) : null;
    }
    return null != t && t.interval === P.WT.YEAR && null != e
        ? _.intl.string(_.t["122kWB"])
        : r && !d && null != o
          ? T(_.intl.format(_.t.IAybsG, { discount: (0, S.l9)(l, o / 100) }))
          : null;
}
function b(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: S,
            shouldShowTrialOrDiscountLayout: A,
            isEligibleForDiscount: T,
            isEligibleForTrial: b,
            isCurrentPlan: j,
            disabled: R,
        } = e,
        M = (0, u.bG)([h.default], () => h.default.locale),
        {
            discountInfo: O,
            setSelectedPlanId: L,
            isGift: k,
        } = (0, p.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: w } = (0, C.Pv)(),
        U = k && (0, E.Ik)(w),
        { discountOffer: D, discountAmountOff: G, applicablePlan: F } = O,
        B = (0, u.bG)([f.A], () => f.A.get(n));
    o()(null != B, "Missing subscriptionPlan");
    let H = (0, y.m6)(B.id),
        W = (0, g.cg)(),
        Y = (0, y.L_)({ planId: n, isGift: k, priceOptions: s, subscriptionPlan: B }),
        K = (0, y.y8)(n, !1, k, s),
        V = null != Y && !A,
        Z = i.useCallback(() => {
            let e = N(t, B, {
                userLocale: M,
                isEligibleForBOGOPromotion: W,
                shouldShowSavingsPercent: V,
                isGift: k,
                planId: n,
                savingsPercent: Y,
                priceOptions: s,
                isEligibleForTrial: b,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: v.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: v.kP,
                        children: e.text,
                    }))
                  : null;
        }, [M, W, B, t, V, k, n, Y, s, b]),
        q = i.useMemo(
            () => (0, y.D8)(B.interval, k, S, B.intervalCount, U, H),
            [B.interval, B.intervalCount, k, S, U, H],
        ),
        z = null != F && n === F;
    function Q() {
        R || r || L(n, { shouldUpdateQuantity: !1 });
    }
    let $ = A
        ? _.intl.format(_.t.hXcaLT, {
              price:
                  T && null != G && z
                      ? (0, I.$g)(K.amount - G, K.currency)
                      : b
                        ? (0, I.$g)(0, K.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, I.$g)(K.amount, K.currency),
          })
        : (0, I.$g)(K.amount, K.currency);
    return (0, l.jsxs)(d.D, {
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: Q,
        className: a()(v.G_, { [v.vW]: U && r, [v.Gb]: U }),
        children: [
            (0, l.jsxs)("div", {
                className: a()(v.XM, { [v.PA]: R }),
                children: [
                    (0, l.jsxs)("div", {
                        className: v.l,
                        children: [
                            !U &&
                                (0, l.jsx)("div", {
                                    className: v.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: r,
                                        value: r,
                                        label: "",
                                        description: "",
                                        onChange: Q,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: a()(v.Gl, { [v.h4]: r || U, [v.ox]: A && (r || U) }),
                                        children: [q, U && Z()],
                                    }),
                                    U &&
                                        (0, l.jsx)("div", {
                                            className: v._R,
                                            children: _.intl.format(_.t.ori2Jm, {
                                                currencyAmount: (0, I.$g)(K.amount, K.currency),
                                            }),
                                        }),
                                ],
                            }),
                            j &&
                                (0, l.jsxs)("span", {
                                    className: v.bq,
                                    children: ["(", _.intl.string(_.t.ymSxhy), ")"],
                                }),
                            !U && Z(),
                        ],
                    }),
                    A
                        ? (0, l.jsx)("div", { className: a()({ [v.kb]: r }), children: $ })
                        : (0, l.jsx)("div", { className: a()({ [v.h4]: r || U }), children: $ }),
                ],
            }),
            A &&
                (0, l.jsx)("div", {
                    className: v.hB,
                    children: (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: r ? "text-default" : "interactive-text-default",
                        className: a()(v.Ub, { [v.sw]: T || b }),
                        children: (function (e, t) {
                            let {
                                price: n,
                                isEligibleForDiscount: l,
                                isEligibleForTrial: i,
                                discountAmountOff: r,
                                discountOffer: a,
                                isDiscountApplicableToPlan: s,
                                savingsPercent: o,
                            } = t;
                            return l && null != r && s
                                ? e.interval === P.WT.YEAR
                                    ? _.intl.format(_.t["EQmTl+"], {
                                          numYears: a?.discount.intervalCount ?? P.OJ,
                                          regularPrice: (0, I.$g)(n.amount, n.currency),
                                      })
                                    : _.intl.format(_.t["VeE/4E"], {
                                          numMonths: a?.discount.intervalCount ?? P.OJ,
                                          discountedPrice: (0, I.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, I.$g)(n.amount, n.currency),
                                      })
                                : i
                                  ? x(e, n)
                                  : e.interval === P.WT.YEAR
                                    ? _.intl.formatToPlainString(_.t.rtLTJP, { percent: o ?? "" })
                                    : null;
                        })(B, {
                            price: K,
                            isEligibleForDiscount: T,
                            isEligibleForTrial: b,
                            discountAmountOff: G,
                            discountOffer: D,
                            isDiscountApplicableToPlan: z,
                            savingsPercent: Y,
                        }),
                    }),
                }),
        ],
    });
}
