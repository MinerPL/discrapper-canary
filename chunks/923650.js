(n.d(t, { P: () => ev, ThirdPartyPromotionsModal: () => ex }), n(321073));
var i,
    a = n(477900),
    r = n(582128),
    s = n(366010),
    l = n(939249),
    o = n(834730),
    d = n(289873),
    c = n(189213),
    u = n(403581),
    m = n(17928),
    b = n(52133),
    p = n(192308),
    f = n(793574),
    g = n(363195),
    h = n(174459),
    x = n(792656),
    v = n(962644),
    _ = n(35587),
    P = n(412260),
    R = n(852218),
    C = n(194261),
    T = n(297264),
    A = n(144165),
    E = n(341973);
function y(e) {
    let { title: t, body: n, asset: i } = e;
    return (0, a.jsx)("div", {
        className: E.lA,
        children: (0, a.jsxs)("div", {
            className: E.LV,
            children: [
                (0, a.jsxs)("div", {
                    className: E.JN,
                    children: [
                        (0, a.jsx)("div", {
                            className: E.MC,
                            children: (0, a.jsx)(C.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: E.yO,
                            children: [
                                (0, a.jsx)(T.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(T.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsx)("div", {
                        className: E.R4,
                        children: (0, a.jsx)(A._, {
                            src: i,
                            className: E.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: E.EM,
                        }),
                    }),
            ],
        }),
    });
}
var N = n(947641),
    j = n(408278),
    O = n(624479),
    I = n(821609),
    L = n(695366),
    U = n(331322),
    S = n(661531),
    M = n(914410),
    w = n(58703),
    k = n(975571),
    D = n(38405),
    B = n(264779),
    Y = n(652215),
    G = n(334551),
    V = n(375708);
function H() {
    let e = (0, w.N5)(),
        t = (0, w.P6)();
    return (0, a.jsxs)("div", {
        className: `${E.G9} ${E.sQ}`,
        children: [
            (0, a.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: E.kT,
                children: V.intl.format(G.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(M.Ay, {
                progress: e,
                variant: M.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function z(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: E.oP, children: (0, a.jsx)("div", { className: E.t0, children: t }) });
}
let F = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(N.r, { color: S.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        s = (0, a.jsx)("span", {
            className: E.nP,
            children: (0, a.jsx)(j.K, {
                icon: O.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        d(i),
                        h.default.track(Y.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [l, d] = r.useState(() => s);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: E.oP,
            children: (0, a.jsxs)("div", {
                className: E.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: E.cD,
                        children: (0, a.jsx)(o.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    l,
                    (0, a.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            V.intl.formatToPlainString(V.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                h.default.track(Y.HAw.RECURRING_PROMOTION_CLAIMED),
                                h.default.track(Y.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                                    partner: t.partnerId,
                                    cta_type: "visit store",
                                    promotion: t.outboundTitle,
                                    promotion_id: t.id,
                                    url: t.redemptionURL,
                                    location_stack: n,
                                }));
                        },
                    }),
                ],
            }),
        });
};
function K(e) {
    let {
        recurrence: t,
        canBeClaimed: n,
        hasClaimError: i,
        setCode: r,
        setHasClaimError: s,
        className: l,
        analyticsLocations: o = [],
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(I.$, {
                      icon: L.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: V.intl.string(V.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(I.$, {
                      icon: C.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? V.intl.string(V.t.vwASIl),
                      onClick: () => {
                          (0, B.kd)({
                              promotionId: t.id,
                              promotionTitle: t.outboundTitle,
                              partnerId: t.partnerId,
                              analyticsLocations: o,
                          })
                              .then((e) => {
                                  ((0, v.LI)(e), r(e.code));
                              })
                              .catch((e) => {
                                  (s(!0), D.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var W = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function X(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: s = !1,
            roundPromotionImage: l = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: c,
            analyticsLocations: u = [],
        } = e,
        [m, b] = r.useState(t.code),
        [p, f] = r.useState(!1),
        g = null == m;
    return (0, a.jsxs)("div", {
        className: E.lA,
        children: [
            (0, a.jsxs)("div", {
                className: E.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: E.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${E.yO} ${n}` : E.yO,
                                children: [
                                    (0, a.jsx)(T.D, {
                                        variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(U.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(T.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: p
                                                    ? V.intl.format(V.t.i2EuFO, {
                                                          helpdeskArticle: k.A.getArticleURL(Y.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : g
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? V.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(T.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: V.intl.format(t.bodyNote, {
                                                        partnerName: R.CD[t.partnerId].label,
                                                        helpdeskArticle: k.A.getArticleURL(Y.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                (0, a.jsx)(K, {
                                    recurrence: t,
                                    canBeClaimed: g,
                                    hasClaimError: p,
                                    setCode: b,
                                    setHasClaimError: f,
                                    analyticsLocations: u,
                                }),
                        ],
                    }),
                    s &&
                        (0, a.jsx)("div", {
                            className: E.R4,
                            children: (0, a.jsx)(A._, {
                                src: t.asset ?? "",
                                className: E.Ys,
                                imageClassName: l || t.partnerId === R.XY ? E.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != m && (0, a.jsx)(F, { recurrence: { ...t, code: m }, analyticsLocations: u }),
            "footer" === d &&
                null == m &&
                (0, a.jsx)(z, {
                    children: (0, a.jsx)(K, {
                        recurrence: t,
                        canBeClaimed: g,
                        hasClaimError: p,
                        setCode: b,
                        setHasClaimError: f,
                        className: E.qx,
                        analyticsLocations: u,
                    }),
                }),
        ],
    });
}
function $(e) {
    let { promotion: t, claimButtonPlacement: n = W.INLINE, analyticsLocations: i } = e;
    return (0, a.jsx)(X, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: i,
    });
}
var q = n(325499),
    J = n(789861),
    Z = n(398523),
    Q = n(881373),
    ee = n(310235),
    et = n(762359);
let en =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    ei =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp";
function ea(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function er() {
    return V.intl.formatToPlainString(V.t.p7BkHh, { discountPercentage: Z.b });
}
function es() {
    return (0, q.i)("ThirdPartyPromotionPartnerConfigs") ? V.intl.string(V.t.nmvvaN) : V.intl.string(V.t.igiSKe);
}
let el = {
    [R.KS]: {
        getLockedPreview: () => ({ title: er(), body: es(), asset: ei }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: ei,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: er, getBody: es, getBodyClaimed: () => V.t.w8CXUl },
        },
    },
    [R.XY]: {
        getLockedPreview: () => ({
            title: (0, q.i)("ThirdPartyPromotionPartnerConfigs")
                ? V.intl.formatToPlainString(G.default.PF1aT5, { discountPercentage: Q.aW })
                : V.intl.formatToPlainString(G.default.LsJ9hj, { discountPercent: Q.aW }),
            body: (0, q.i)("ThirdPartyPromotionPartnerConfigs")
                ? V.intl.formatToPlainString(G.default.KoKwMn, {})
                : V.intl.formatToPlainString(G.default.Yl5ww1, {}),
            asset: en,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: en,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => V.intl.formatToPlainString(G.default.jkdhZq, { discountPercent: Q.aW }),
                    getBody: () => V.intl.formatToPlainString(G.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => V.intl.formatToPlainString(G.default.zeBjoX, { discountPercent: Q.y$ }),
                    getBody: () => V.intl.formatToPlainString(G.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => V.intl.formatToPlainString(G.default.pSBCjv, { discountPercent: Q.K2 }),
                    getBody: () => V.intl.formatToPlainString(G.default.lsRjfl, {}),
                },
            },
        },
    },
    [R.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => V.intl.string(ee.default["6vVfeK"]),
                getBody: (e) => V.intl.formatToPlainString(ee.default.nsmhS2, { date: (0, J.mh)(e.endDate) }),
                getAsset: (e, t) => (0, B.WD)(e.id, t),
                getClaimCtaText: () => V.intl.string(ee.default["lbyFG+"]),
                getRedeemCtaText: () => V.intl.string(ee.default["6rwUm2"]),
                claimButtonPlacement: W.FOOTER,
            },
        },
    },
    [R.NC]: {
        getLockedPreview: () => ({
            title: V.intl.string(et.default.CwMGMb),
            body: V.intl.string(et.default.TgHy6p),
            asset: en,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => V.intl.string(et.default.CwMGMb),
                getBody: () => V.intl.string(et.default.TgHy6p),
                getRedeemCtaText: () => V.intl.string(et.default.KfOPbQ),
                claimButtonPlacement: W.FOOTER,
            },
        },
    },
};
var eo = n(553875);
function ed() {
    return (0, a.jsx)(y, {
        title: V.intl.string(eo.default.oDfh3O),
        body: V.intl.string(eo.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var ec = n(202541);
function eu(e, t) {
    return (0, b.v)(e[0], t[0]) && (0, b.v)(e[1], t[1]);
}
function em(e, t, n) {
    let i = el[e.partnerId ?? ""],
        a = ea(i?.outboundConfigs, e.outboundTitle);
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: a?.getTitle(e) ?? "",
        outboundTitle: e.outboundTitle,
        body: a?.getBody?.(e) ?? "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
        asset: a?.getAsset?.(e, n),
        claimCtaText: a?.getClaimCtaText?.(),
        redeemCtaText: a?.getRedeemCtaText?.(),
    };
}
function eb(e) {
    var t;
    let n,
        i,
        { records: d, claimedOutboundPromotionCodeMap: c, theme: u } = e,
        [b, p] = r.useState(!1),
        h = [...d].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        x = b ? h : h.slice(0, 1),
        v = !b && h.length > 1,
        _ =
            ((t = d[0]?.partnerId ?? ""),
            (n = (0, m.bG)([g.A], () => (0, s.M)(g.A.theme))),
            null == (i = el[t]?.logos) ? void 0 : n ? i.dark : i.light);
    return (0, a.jsxs)("div", {
        children: [
            x.map((e) => {
                var t;
                let n, i;
                return (0, a.jsx)(
                    X,
                    {
                        recurrence:
                            ((t = c[e.id] ?? null),
                            (n = el[e.partnerId ?? ""]),
                            (i = ea(n?.outboundConfigs, e.outboundTitle)),
                            {
                                ...em(e, t, u),
                                asset: n?.recurringCardAsset ?? "",
                                bodyClaimed: i?.getBodyClaimed?.(),
                                redemptionURL:
                                    "" !== e.outboundRedemptionPageLink
                                        ? e.outboundRedemptionPageLink
                                        : (n?.landingUrl ?? ""),
                            }),
                        partnerLogo: _,
                        showPartnerImage: !0,
                        claimButtonPlacement: W.FOOTER,
                        footerContent: (0, a.jsx)(H, {}),
                        analyticsLocations: [f.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
            v &&
                (0, a.jsx)(l.D, {
                    className: E.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ep(e) {
    let { partnerId: t } = e,
        n = el[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, a.jsx)(y, { title: n.title, body: n.body, asset: n.asset });
}
function ef(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: i,
            modalTeaser: r,
            showXboxCard: s = !1,
            transitionState: l,
            onClose: o,
        } = e,
        { promotionsLoaded: u } = (0, _.y7)();
    return u
        ? (0, a.jsxs)(c.Modal, {
              title: n,
              subtitle: i,
              actions: [],
              preview: (0, a.jsx)(x.A, {
                  subscriptionTier: ec.pe.TIER_2,
                  fullWidth: !0,
                  onClick: () => {
                      o();
                  },
                  onSubscribeModalClose: (e) => {
                      if (e) return v.Ay.fetchActivePromotions();
                  },
              }),
              transitionState: l,
              onClose: o,
              children: [
                  s && (0, a.jsx)(ed, {}),
                  t.map((e) => (0, a.jsx)(ep, { partnerId: e }, e)),
                  (0, a.jsx)(eg, { modalTeaser: r }),
              ],
          })
        : (0, a.jsx)(d.y, {});
}
function eg(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? u.t;
    return (0, a.jsxs)("div", {
        className: E.ar,
        children: [
            (0, a.jsxs)("div", {
                className: E.Uv,
                children: [
                    (0, a.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-default", children: t.title }),
                ],
            }),
            null != t.body && (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function eh(e) {
    let { partnerIds: t, title: n, subtitle: i, modalTeaser: r, transitionState: s, onClose: l } = e,
        u = (0, m.bG)([g.A], () => g.A.theme),
        [b, p] = (0, m.bG)(
            [P.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = el[t]?.outboundConfigs;
                        function a(e) {
                            return null != ea(i, e.outboundTitle);
                        }
                        let r = P.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            eu,
        ),
        { promotionsLoaded: h, claimedOutboundPromotionCodeMap: x } = (0, _.y7)();
    if (!h) return (0, a.jsx)(d.y, {});
    let v = t
            .map((e) => el[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        R = v ? { recurring: V.intl.string(G.default["9Y2p6p"]), oneTime: V.intl.string(G.default.Wm58LR) } : void 0,
        C = (0, a.jsx)("div", {
            className: E.kR,
            children: p.map((e) => {
                let t = em(e, x[e.id] ?? null, u),
                    n = ea(el[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, a.jsx)(
                    $,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [f.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, a.jsx)(c.Modal, {
        title: n,
        subtitle: i,
        actions: [],
        transitionState: s,
        onClose: l,
        children: (0, a.jsxs)("div", {
            className: E.kL,
            children: [
                b.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            null != R &&
                                (0, a.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: R.recurring,
                                }),
                            (0, a.jsx)("div", {
                                className: E.kR,
                                children: (0, a.jsx)(eb, { records: b, claimedOutboundPromotionCodeMap: x, theme: u }),
                            }),
                        ],
                    }),
                p.length > 0 &&
                    (v
                        ? (0, a.jsxs)("div", {
                              className: E.E7,
                              children: [
                                  null != R &&
                                      (0, a.jsx)(o.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: R.oneTime,
                                      }),
                                  C,
                              ],
                          })
                        : C),
                (0, a.jsx)(eg, { modalTeaser: r }),
            ],
        }),
    });
}
function ex(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: i,
        subtitle: r,
        modalTeaser: s,
        showXboxCard: l,
        transitionState: o,
        onClose: d,
    } = e;
    return n
        ? (0, a.jsx)(ef, {
              partnerIds: t,
              title: i,
              subtitle: r,
              modalTeaser: s,
              showXboxCard: l,
              transitionState: o,
              onClose: d,
          })
        : (0, a.jsx)(eh, { partnerIds: t, title: i, subtitle: r, modalTeaser: s, transitionState: o, onClose: d });
}
function ev(e) {
    let {
            partnerIds: t,
            isLocked: i = !1,
            title: r,
            subtitle: s,
            modalTeaser: l,
            showXboxCard: o,
            analyticsLocations: d,
        } = e,
        c = o ? [...t, "xbox"] : t;
    (h.default.track(Y.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: c, partner_id: c[0], location_stack: d }),
        v.Ay.fetchActivePromotions(),
        (0, p.openModalLazy)(async () => {
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 923650));
            return (n) =>
                (0, a.jsx)(e, {
                    ...n,
                    partnerIds: t,
                    isLocked: i,
                    title: r,
                    subtitle: s,
                    modalTeaser: l,
                    showXboxCard: o,
                });
        }));
}
