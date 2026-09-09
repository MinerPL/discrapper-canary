r.d(t, { yf: () => ef, Ay: () => eh, s6: () => ex });
var l,
    n = r(477900),
    a = r(582128),
    i = r(310784),
    o = r.n(i),
    s = r(503698),
    c = r.n(s),
    u = r(536637),
    d = r.n(u),
    m = r(318254),
    x = r(939249),
    p = r(366010),
    f = r(821609),
    _ = r(638916),
    h = r(43990),
    g = r(825484),
    C = r(17928),
    b = r(269115),
    j = r(834730),
    v = r(890856),
    N = r(812993),
    y = r(866665),
    A = r(442433),
    k = r(775602),
    E = r(793574),
    T = r(688810),
    R = r(429913),
    I = r(713517),
    P = r(427209),
    M = r(976860),
    S = r(288106),
    D = r(993046),
    H = r(363195),
    L = r(885386),
    w = r(652165),
    O = r(67480),
    B = r(174459),
    G = r(871123),
    F = r(733391),
    U = r(439303),
    W = r(353281),
    z = r(832163),
    Y = r(69236),
    $ = r(654107),
    q = r(31969),
    K = r(345938),
    V = r(510022),
    J = r(99161),
    Q = r(263911),
    Z = r(971146),
    X = r(366523),
    ee = r(300182),
    et = r(434078);
function er() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(et.Vl, et.Yf), style: { animationDelay: `${e}s` } });
}
function el() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: et.RC, style: { width: `${e}%` } });
}
var en = r(533772),
    ea = r(821707),
    ei = r(743693),
    eo = r(652215),
    es = r(995393),
    ec = r(375708);
let eu = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ed = o()("#000000").darken(1.5).alpha(0.9).hex(),
    em = o()("#000000").alpha(0).hex();
var ex = (((l = {})[(l.SMALL = 0)] = "SMALL"), (l[(l.MEDIUM = 1)] = "MEDIUM"), (l[(l.EMBEDDED = 2)] = "EMBEDDED"), l);
let ep = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ef() {
    return (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: c()(et.Nr, et.ax, et.Yf),
        children: (0, n.jsxs)("div", { className: et.zH, children: [(0, n.jsx)(el, {}), (0, n.jsx)(el, {})] }),
    });
}
function e_(e) {
    let {
            guildId: t,
            sku: r,
            isCardHovered: l,
            trackCardClick: i,
            variant: o,
            analyticsLocations: s,
            analyticsContext: u,
        } = e,
        d = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != r &&
                        (i(es.bB.FORWARD_BUTTON),
                        (0, K.d)({
                            sku: r,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: s,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [r, t, i, u, s],
        ),
        m = a.useCallback(() => {
            i(es.bB.WISHLIST_BUTTON);
        }, [i]),
        p = a.useMemo(() => c()(et.o, { [et.H5]: l }), [l]);
    return (0, n.jsxs)("div", {
        className: et.zu,
        children: [
            2 === o &&
                (0, n.jsx)(x.D, {
                    className: c()(p, et.gy),
                    onClick: d,
                    children: (0, n.jsx)(P.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(ei._, {
                sku: r,
                isCardHovered: l,
                trackButtonClick: m,
                className: c()(p, et.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eh(e) {
    let {
            positionInSection: t,
            skuId: l,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            analyticsLocations: x,
        } = e,
        P = a.useRef(null),
        K = a.useRef(null),
        ei = (0, C.bG)([O.A], () => O.A.get(l)),
        { guildId: ex } = (0, G.nG)(ei?.applicationId),
        ef = ei?.applicationId,
        eh = (0, C.bG)([H.A], () => (0, p.M)(H.A.theme)),
        eg = (0, C.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eC = L.Q_.useSetting(),
        { isHoveringOrFocusing: eb } = (0, I.A)(P),
        ej = (0, U.jM)(),
        { analyticsLocations: ev } = (0, T.Ay)(x ?? []),
        eN = a.useRef({ positionInSection: t, analyticsLocations: ev }),
        [ey, eA] = a.useState(!1),
        ek = (0, C.bG)([z.A], () => (null != l ? z.A.getNormalizedSKUEligibility(l) : void 0), [l]),
        eE = (function (e, t) {
            let r = (0, C.bG)([O.A], () => O.A.get(e)),
                [l, n] = a.useState(!1),
                [i, o] = a.useState(!1),
                s = a.useMemo(() => (0, G.xf)(r), [r]),
                c = a.useMemo(() => (0, G.fq)(r), [r]);
            return (
                a.useEffect(() => {
                    if (r?.id == null || l || !t) return;
                    if (null == c) return void n(!0);
                    let e = new Image();
                    return (
                        (e.src = c.toString()),
                        (e.onload = () => {
                            n(!0);
                        }),
                        (e.onerror = () => {
                            n(!0);
                        }),
                        () => {
                            (e.onerror = null), (e.onload = null), (e.src = "");
                        }
                    );
                }, [c, t, l, r?.id]),
                a.useEffect(() => {
                    if (r?.id == null || i || !t) return;
                    if (null == s) return void o(!0);
                    let e = !0;
                    return (
                        (0, $.l0)(s.toString()).finally(() => {
                            e && o(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, s, t, r?.id]),
                a.useMemo(() => l && i, [l, i])
            );
        })(l, ey),
        eT = (0, D.JL)({ sku: ei }),
        eR = eT?.amount,
        eI = (0, Y.oG)({ orbPriceAmount: eR }),
        eP = (0, R.h)(ei?.applicationId),
        {
            priceComponent: eM,
            extendedHeight: eS,
            displayPrice: eD,
            shownPriceDetails: eH,
        } = (function (e) {
            let { sku: t, orbsGate: r, orbPriceAmount: l, promotion: i, showOrbsOnly: o = !1 } = e,
                s = (0, D.ou)({ sku: t }),
                { normalPrice: c, discountedPrice: u, discountPercent: d, userPrice: x } = (0, D.j9)(s),
                p = a.useMemo(() => {
                    let e = i?.reward;
                    return null == e || e.type !== S.Ns.ACTION || e.amount <= 0
                        ? null
                        : (0, n.jsx)("div", {
                              className: et.pt,
                              children: (0, n.jsx)(j.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: ec.intl.format(ec.t.GiVd2Q, {
                                      orbCount: e.amount,
                                      orbIconHook: () =>
                                          (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [i]);
            return a.useMemo(() => {
                let e = {
                    currency: s.userPrice?.currency ?? s.normalPrice?.currency ?? null,
                    price: s.userPrice?.amount ?? null,
                    regularPrice: s.normalPrice?.amount ?? null,
                };
                return null != t && (0, G.mC)(t)
                    ? i?.flavor === "nitro" && null != u
                        ? {
                              priceComponent: (0, n.jsx)(ea.A, { discountedPrice: u, normalPrice: c }),
                              extendedHeight: !1,
                              displayPrice: x,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : o && null != l && l > 0
                          ? {
                                priceComponent: (0, n.jsx)(en.O, {
                                    variant: "text-md/bold",
                                    orbPrice: l,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: x,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: l },
                            }
                          : "HIDDEN" !== r && null != l
                            ? {
                                  priceComponent: (0, n.jsx)(en.A, {
                                      orbsGate: r,
                                      className: et.p6,
                                      orbPrice: l,
                                      fiatPrice: c,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: x,
                                  shownPriceDetails: { ...e, orbsAmount: l },
                              }
                            : null != d && null != u
                              ? {
                                    priceComponent: (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: et.p6,
                                                children: [
                                                    null != c &&
                                                        (0, n.jsx)(j.E, {
                                                            className: et.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: c,
                                                        }),
                                                    (0, n.jsx)(j.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: u,
                                                    }),
                                                    (0, n.jsxs)(j.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-positive",
                                                        lineClamp: 1,
                                                        children: ["(", d, ")"],
                                                    }),
                                                ],
                                            }),
                                            p,
                                        ],
                                    }),
                                    extendedHeight: null != p,
                                    displayPrice: x,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                              : {
                                    priceComponent: (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(j.E, {
                                                variant: "text-md/bold",
                                                color: "text-overlay-light",
                                                lineClamp: 1,
                                                children: c,
                                            }),
                                            p,
                                        ],
                                    }),
                                    extendedHeight: !1,
                                    displayPrice: x,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                    : {
                          priceComponent: null,
                          extendedHeight: !1,
                          displayPrice: x,
                          shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: null },
                      };
            }, [t, i, u, c, d, o, l, r, p, s, x]);
        })({
            sku: ei,
            orbsGate: eI,
            orbPriceAmount: eR,
            promotion: (0, q.F)("card", { applicationId: ef, skuId: l }),
            showOrbsOnly: u,
        }),
        eL = 2 !== i && eE ? eH : ep,
        ew = a.useCallback((e) => {
            eA(e);
        }, []),
        eO = a.useMemo(() => c()(et.Nr, { [et.ax]: 0 === i, [et.GW]: 1 === i, [et.jz]: 2 === i }), [i]),
        { handleCardHover: eB, handleCardUnhover: eG } = (function (e) {
            let {
                    skuId: t,
                    applicationId: r,
                    guildId: l,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(!1),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            return (
                a.useEffect(() => {
                    u.current = n;
                }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]),
                {
                    handleCardHover: a.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: n,
                                    applicationId: a,
                                    pageIndex: i,
                                    pageTitle: o,
                                    pageSection: s,
                                    pageSectionTitle: m,
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = u.current,
                                { positionInSection: f, analyticsLocations: _, shownPriceDetails: h } = d.current;
                            B.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: l ?? n,
                                application_id: r ?? a,
                                page_index: i,
                                page_title: o,
                                page_section: s,
                                page_section_title: m,
                                position_in_section: f,
                                is_user_guild_member: x,
                                page_has_leaderboard: p,
                                price: h.price,
                                regular_price: h.regularPrice,
                                currency: h.currency,
                                orbs_amount: h.orbsAmount,
                                location_stack: _,
                            }),
                                (c.current = !0);
                        }
                    }, [t, r, l]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: l,
            applicationId: ef,
            guildId: ex,
            analyticsContext: ej,
            positionInSection: t,
            analyticsLocations: ev,
            shownPriceDetails: eL,
        }),
        { handleCardVisibilityChange: eF } = (function (e) {
            let {
                    skuId: t,
                    applicationId: r,
                    guildId: l,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(null),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            a.useEffect(() => {
                u.current = n;
            }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]);
            let m = a.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: n,
                            applicationId: a,
                            pageIndex: i,
                            pageTitle: o,
                            pageSection: s,
                            pageSectionTitle: c,
                            isUserGuildMember: m,
                            pageHasLeaderboard: x,
                        } = u.current,
                        { positionInSection: p, analyticsLocations: f, shownPriceDetails: _ } = d.current;
                    B.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: l ?? n,
                        application_id: r ?? a,
                        page_index: i,
                        page_title: o,
                        page_section: s,
                        page_section_title: c,
                        position_in_section: p,
                        is_user_guild_member: m,
                        page_has_leaderboard: x,
                        price: _.price,
                        regular_price: _.regularPrice,
                        currency: _.currency,
                        orbs_amount: _.orbsAmount,
                        location_stack: f,
                    });
                }, [t, r, l]),
                x = a.useCallback(
                    (e) => {
                        e
                            ? null === c.current &&
                              (c.current = window.setTimeout(() => {
                                  m(), (c.current = null);
                              }, 1e3))
                            : null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [m],
                );
            return (
                a.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: x }
            );
        })({
            skuId: l,
            applicationId: ef,
            guildId: ex,
            analyticsContext: ej,
            positionInSection: t,
            analyticsLocations: ev,
            shownPriceDetails: eL,
        });
    a.useEffect(() => {
        eF(ey);
    }, [ey]);
    let eU = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: r } = eN.current,
                    {
                        sessionId: n,
                        guildId: a,
                        applicationId: i,
                        pageIndex: o,
                        pageTitle: s,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = ej;
                B.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: l,
                    guild_id: ex ?? a,
                    application_id: ef ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: r,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: eL.price,
                    regular_price: eL.regularPrice,
                    currency: eL.currency,
                    orbs_amount: eL.orbsAmount,
                    location_stack: t,
                });
            },
            [l, ef, ex, ej, eL],
        ),
        { primaryIconAsset: eW, primaryIconLabel: ez } = a.useMemo(() => (0, G.Cv)(ei, ef), [ei, ef]),
        eY = (0, C.bG)([z.A], () => z.A.getStorefrontState(ef)?.activePage ?? 0),
        e$ = a.useMemo(() => {
            let e = ei?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                r = Math.max(d()(e).diff(t, "days"), 1);
            return r <= 3 ? ec.intl.format(ec.t.PWw4Vp, { days: r }) : null;
        }, [ei?.tenantMetadata?.socialLayer?.expiresAt]),
        eq = (0, G.xf)(ei),
        eK = a.useMemo(() => {
            if (!eE) return "none";
            let [e, t] = eu[i];
            return `linear-gradient(to top, ${ed} ${30 + e}%, ${em} ${30 + t}%)`;
        }, [i, eE]),
        eV = a.useCallback(() => {
            null != ef && (0, F.iR)(ef, l);
        }, [ef, l]),
        eJ = a.useCallback(() => {
            eB(),
                null != ef &&
                    (K.current = setTimeout(() => {
                        (0, F.iR)(ef, l);
                    }, 1e3));
        }, [ef, l, eB]),
        eQ = a.useCallback(() => {
            eG(), null != K.current && (clearTimeout(K.current), (K.current = null));
        }, [eG]);
    a.useEffect(
        () => () => {
            null != K.current && clearTimeout(K.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eZ } = (0, W.H)(),
        eX = a.useCallback(() => {
            null != ef && null != eZ && (0, M.bG)(eZ(eY, l, ei?.slug));
        }, [ef, l, eY, ei?.slug, eZ]),
        e0 = a.useCallback(
            (e) => {
                (eU(es.bB.CARD), null != o && ei?.applicationId != null)
                    ? o(e, { skuId: l, applicationId: ei.applicationId })
                    : eX();
            },
            [eU, o, eX, l, ei?.applicationId],
        ),
        e1 = a.useCallback(
            (e) => {
                eC &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await r.e("897249").then(r.bind(r, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: l });
                    });
            },
            [eC, l],
        ),
        e3 = a.useMemo(() => [...ev, E.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ev]),
        e8 = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eP &&
                        (eU(es.bB.BUY_WITH_ORBS_BUTTON),
                        (0, w.B4)({
                            skuId: l,
                            applicationId: eP.id,
                            onComplete: () => {
                                null != eP &&
                                    null != ei &&
                                    (0, V.n)({ sku: ei, application: eP, analyticsLocations: e3 });
                            },
                            analyticsLocations: e3,
                        }));
            },
            [ei, eP, l, eU, e3],
        ),
        e2 = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != ei &&
                        (eU(es.bB.BUY_BUTTON), (0, J.a)(ei, { isGift: !1 }, { analyticsLocations: e3, guildId: ex }));
            },
            [ei, ex, eU, e3],
        ),
        e9 = ei?.exclusive === !0 && 2 !== i,
        e7 = a.useMemo(
            () =>
                "CAN_CHECKOUT" === eI
                    ? (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: e8,
                          "aria-label": ec.intl.formatToPlainString(ec.t.yi41qQ, { orbPrice: eR }),
                          text: ec.intl.format(ec.t.JC15qj, {
                              orbPrice: eR,
                              orbIconHook: () =>
                                  (0, n.jsx)(m.C, { className: et.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: e2,
                          text: null != eD ? ec.intl.format(ec.t.Xp5WTn, { price: eD }) : ec.intl.string(ec.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eI, e8, e2, eV, eR, eD],
        );
    if (null == ei) return null;
    let e6 = (0, G.fq)(ei),
        e5 = e9 ? (0, n.jsx)("div", { className: et.mN, "aria-hidden": !0 }) : null,
        e4 = (0, n.jsx)(b.L, {
            innerRef: P,
            onChange: ew,
            threshold: 0,
            children: (0, n.jsxs)(v.s, {
                onClick: e0,
                onContextMenu: e1,
                onMouseEnter: eJ,
                onMouseLeave: eQ,
                className: c()(eO, { [et.Zl]: !eg && 2 !== i, [et.BN]: eh, [eh ? et.Mn : et.YF]: eb, [et.Rc]: !eE }, s),
                ref: P,
                "aria-label": ei.name,
                children: [
                    ei.exclusive
                        ? (0, n.jsx)("div", { className: et.fC, children: (0, n.jsx)(Q.I, {}) })
                        : null != e$ && (0, n.jsx)(N.Lp, { text: e$, disableColor: !0, className: et.qS }),
                    (0, n.jsx)(e_, {
                        sku: ei,
                        guildId: ex,
                        isCardHovered: eb,
                        variant: i,
                        trackCardClick: eU,
                        analyticsLocations: ev,
                        analyticsContext: ej,
                    }),
                    null != e6
                        ? eE
                            ? (0, n.jsx)(X.A, {
                                  containerClassName: et.Vl,
                                  foregroundImageClassName: et.wP,
                                  cardImage: e6,
                                  altText: ei.name,
                                  shape: "custom",
                                  backgroundImageClassName: et.GC,
                                  cardBackgroundImage: eq,
                                  cssPosition: "absolute",
                              })
                            : (0, n.jsx)(er, {})
                        : (0, n.jsx)("div", {
                              className: et.t7,
                              children: (0, n.jsx)(_.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: et.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)("div", { className: et.iZ, style: { background: eK } }),
                                  (0, n.jsx)(h.N, {
                                      theme: eo.NJ8.DARKER,
                                      children: (e) =>
                                          (0, n.jsxs)("div", {
                                              className: c()(et.zH, e),
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: c()(et.gn, { [et.ov]: !(0, G.mC)(ei), [et.w4]: eS }),
                                                      children: [
                                                          eE &&
                                                              (0, n.jsx)("div", {
                                                                  className: et.S1,
                                                                  children: (0, n.jsx)(Z.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eE
                                                              ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [
                                                                        null != eW &&
                                                                            (0, n.jsx)("img", {
                                                                                src: eW.toString(),
                                                                                alt: ez,
                                                                                className: et.ye,
                                                                            }),
                                                                        (0, n.jsx)(j.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: ei.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, n.jsx)(el, {}),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: et.iQ,
                                                      children: eE ? eM : (0, n.jsx)(el, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: et.li,
                                      children: (0, n.jsxs)(g.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              ek
                                                  ? e7
                                                  : (0, n.jsx)(y.m, {
                                                        text: ec.intl.string(ec.t.IqlPbQ),
                                                        children: (0, n.jsx)(f.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                e.stopPropagation(),
                                                                    eU(es.bB.VIEW_DETAILS_BUTTON),
                                                                    eX();
                                                            },
                                                            text: ec.intl.string(ec.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, n.jsx)(ee.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eU(es.bB.GIFT_BUTTON),
                                                          (0, J.a)(
                                                              ei,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ev,
                                                                      E.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                  ],
                                                              },
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        });
    return e9 ? (0, n.jsxs)("div", { className: et.ur, children: [e5, e4] }) : e4;
}
