n.d(i, { A: () => z, I: () => w });
var t = n(477900),
    e = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(825484),
    c = n(821609),
    o = n(17928),
    d = n(834730),
    u = n(318254),
    p = n(289873),
    m = n(866665),
    A = n(793574),
    x = n(688810),
    C = n(587895),
    E = n(875444),
    h = n(429913),
    b = n(288106),
    j = n(993046),
    I = n(801228),
    T = n(652165),
    N = n(561794),
    _ = n(287809),
    f = n(67480),
    g = n(328968),
    k = n(871123),
    v = n(733391),
    R = n(832163),
    D = n(69236),
    F = n(31969),
    P = n(510022),
    S = n(317560),
    G = n(99161),
    O = n(971146),
    L = n(300182),
    B = n(467884),
    U = n(533772),
    y = n(375708),
    M = n(702360);
function H(l) {
    let { sku: i, normalPrice: n, discountedPrice: a, discountPercent: r, orbsGate: c, orbPriceAmount: o } = l,
        p = (0, F.F)("card", { applicationId: i.applicationId, skuId: i.id }),
        m = e.useMemo(() => {
            let l = p?.reward;
            return null == l || l.type !== b.Ns.ACTION || l.amount <= 0
                ? null
                : (0, t.jsx)("div", {
                      className: M.pt,
                      children: (0, t.jsx)(d.E, {
                          variant: "text-sm/semibold",
                          color: "currentColor",
                          children: y.intl.format(y.t.GiVd2Q, {
                              orbCount: l.amount,
                              orbIconHook: () => (0, t.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                          }),
                      }),
                  });
        }, [p]);
    if ("HIDDEN" !== c && null != o)
        return (0, t.jsx)(U.A, { orbsGate: c, className: M.PB, orbPrice: o, fiatPrice: n });
    let A = null != r && null != a;
    return (0, t.jsx)("div", {
        className: s()(M.PB, { [M.un]: A }),
        children: A
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != n &&
                          (0, t.jsx)(d.E, {
                              className: M.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, t.jsx)(d.E, { variant: "text-md/bold", lineClamp: 1, children: a }),
                      (0, t.jsxs)(d.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", r, ")"],
                      }),
                      m,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != n && (0, t.jsx)(d.E, { variant: "text-md/bold", lineClamp: 1, children: n }), m],
              }),
    });
}
function w(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, o.bG)([R.A], () => R.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(z, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function z(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: b } = l,
        F = (0, o.bG)([g.A], () => g.A.isFetchingForSKU(n)),
        U = (0, I.A)({ skuId: n }),
        w = (0, o.bG)([R.A], () => (null != i ? R.A.getApplicationIdFromGuildId(i) : void 0)),
        z = U?.applicationId ?? s ?? w,
        K = (0, o.bG)([C.A], () => null != z && C.A.isFetchingApplication(z)),
        W = (0, o.bG)([C.A], () => null != z && C.A.didFetchingApplicationFail(z)),
        Y = (0, h.h)(z),
        { analyticsLocations: q } = (0, x.Ay)(A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, N.pE)();
    let J = (0, o.bG)([_.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? _.default.getUser(a.recipients[0]) : null,
        ),
        Q = (0, o.bG)([R.A], () => (null != n ? R.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: V, primaryIconLabel: $ } = e.useMemo(() => (0, k.Cv)(U, z), [U, z]),
        { normalPrice: X, discountedPrice: Z, discountPercent: ll, userPrice: li } = (0, j.CD)({ sku: U }),
        ln = (0, j.JL)({ sku: U }),
        lt = ln?.amount,
        le = (0, D.oG)({ orbPriceAmount: lt });
    e.useEffect(() => {
        null == z ||
            null == n ||
            null != f.A.get(n) ||
            f.A.isFetching(n) ||
            f.A.didFetchingSkuFail(n) ||
            (0, v.Pp)(z, n);
    }, [z, n]);
    let la = e.useCallback(
            (l) => {
                l.stopPropagation(),
                    U?.applicationId != null &&
                        (0, S.R)({
                            customNavigateToSocialLayerStorefront: b,
                            skuId: n,
                            applicationId: U.applicationId,
                            isStorefront: !1,
                            analyticsLocations: q,
                        });
            },
            [n, U, q, b],
        ),
        ls = e.useCallback(() => {
            null != U &&
                Q &&
                (0, G.a)(
                    U,
                    { isGift: !1 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [U, i, Q]),
        lr = e.useCallback(() => {
            null != U &&
                (0, G.a)(
                    U,
                    { isGift: !0, giftRecipient: J ?? void 0 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [U, J]),
        lc = e.useCallback(() => {
            if (null == U || null == Y) return;
            let l = [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: n,
                applicationId: Y.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, P.n)({ sku: U, application: Y, analyticsLocations: l });
                },
            });
        }, [U, Y, n]),
        { onClick: lo, text: ld } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === le
                    ? {
                          onClick: lc,
                          text: y.intl.format(y.t.JC15qj, {
                              orbPrice: lt,
                              orbIconHook: () =>
                                  (0, t.jsx)(u.C, { className: M.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: ls,
                          text: null != li ? y.intl.format(y.t.Xp5WTn, { price: li }) : y.intl.string(y.t.boqtTA),
                      },
            [le, lc, ls, li, lt],
        ),
        lu = null != z && null == Y && !W;
    return (F || K || lu) && (null == U || null == Y)
        ? (0, t.jsx)("div", { className: M.kL, children: (0, t.jsx)(p.y, { className: M.u1 }) })
        : null != Y && null != U && (0, E.A)(Y) && Y.id === U.applicationId
          ? (0, t.jsxs)("div", {
                className: M.kL,
                children: [
                    (0, t.jsx)(B.Ay, {
                        className: M.Nr,
                        skuId: n,
                        variant: B.s6.EMBEDDED,
                        onClick: la,
                        analyticsLocations: q,
                    }),
                    (0, t.jsxs)("div", {
                        className: M.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: M.lI,
                                children: [
                                    (0, t.jsx)(O.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: M.PB,
                                        children: [
                                            null != V &&
                                                (0, t.jsx)("img", { src: V.toString(), alt: $, className: M.ye }),
                                            (0, t.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: U.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(H, {
                                        sku: U,
                                        normalPrice: X,
                                        discountedPrice: Z,
                                        discountPercent: ll,
                                        orbsGate: le,
                                        orbPriceAmount: lt,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(r.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(m.m, {
                                        text: Q ? void 0 : y.intl.string(y.t.IqlPbQ),
                                        children: (0, t.jsx)(c.$, {
                                            variant: Q ? "secondary" : "primary",
                                            onClick: la,
                                            text: y.intl.string(y.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    Q && (0, t.jsx)(c.$, { variant: "primary", onClick: lo, text: ld, fullWidth: !0 }),
                                    (0, t.jsx)(L.A, { onGift: lr }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
