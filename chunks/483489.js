(i.d(t, { P: () => ex, ThirdPartyPromotionsModal: () => eh }), i(321073));
var n,
    a = i(477900),
    s = i(582128),
    r = i(366010),
    l = i(939249),
    o = i(834730),
    d = i(289873),
    c = i(189213),
    u = i(403581),
    m = i(17928),
    p = i(52133),
    f = i(192308),
    b = i(793574),
    g = i(363195),
    h = i(174459),
    x = i(792656),
    C = i(962644),
    v = i(35587),
    _ = i(412260),
    P = i(852218),
    R = i(194261),
    j = i(297264),
    A = i(144165),
    T = i(341973);
function y(e) {
    let { title: t, body: i, asset: n } = e;
    return (0, a.jsx)("div", {
        className: T.lA,
        children: (0, a.jsxs)("div", {
            className: T.LV,
            children: [
                (0, a.jsxs)("div", {
                    className: T.JN,
                    children: [
                        (0, a.jsx)("div", {
                            className: T.MC,
                            children: (0, a.jsx)(R.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: T.yO,
                            children: [
                                (0, a.jsx)(j.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(j.D, { variant: "heading-sm/medium", color: "text-subtle", children: i }),
                            ],
                        }),
                    ],
                }),
                null != n &&
                    (0, a.jsx)("div", {
                        className: T.R4,
                        children: (0, a.jsx)(A._, {
                            src: n,
                            className: T.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: T.EM,
                        }),
                    }),
            ],
        }),
    });
}
var E = i(947641),
    N = i(408278),
    I = i(624479),
    O = i(821609),
    L = i(695366),
    S = i(331322),
    M = i(661531),
    U = i(914410),
    w = i(58703),
    k = i(975571),
    B = i(38405),
    D = i(264779),
    Y = i(652215),
    V = i(334551),
    H = i(375708);
function G() {
    let e = (0, w.N5)(),
        t = (0, w.P6)();
    return (0, a.jsxs)("div", {
        className: `${T.G9} ${T.sQ}`,
        children: [
            (0, a.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: T.kT,
                children: H.intl.format(V.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(U.Ay, {
                progress: e,
                variant: U.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function F(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: T.oP, children: (0, a.jsx)("div", { className: T.t0, children: t }) });
}
let K = (e) => {
    let { recurrence: t, analyticsLocations: i = [] } = e,
        n = (0, a.jsx)(E.r, { color: M.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        r = (0, a.jsx)("span", {
            className: T.nP,
            children: (0, a.jsx)(N.K, {
                icon: I.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        d(n),
                        h.default.track(Y.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: i,
                        }));
                },
            }),
        }),
        [l, d] = s.useState(() => r);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: T.oP,
            children: (0, a.jsxs)("div", {
                className: T.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: T.cD,
                        children: (0, a.jsx)(o.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    l,
                    (0, a.jsx)(O.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            H.intl.formatToPlainString(H.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                h.default.track(Y.HAw.RECURRING_PROMOTION_CLAIMED),
                                h.default.track(Y.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                                    partner: t.partnerId,
                                    cta_type: "visit store",
                                    promotion: t.outboundTitle,
                                    promotion_id: t.id,
                                    url: t.redemptionURL,
                                    location_stack: i,
                                }));
                        },
                    }),
                ],
            }),
        });
};
function W(e) {
    let {
        recurrence: t,
        canBeClaimed: i,
        hasClaimError: n,
        setCode: s,
        setHasClaimError: r,
        className: l,
        analyticsLocations: o = [],
    } = e;
    return i
        ? n
            ? (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(O.$, {
                      icon: L.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: H.intl.string(H.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(O.$, {
                      icon: R.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? H.intl.string(H.t.vwASIl),
                      onClick: () => {
                          (0, D.kd)({
                              promotionId: t.id,
                              promotionTitle: t.outboundTitle,
                              partnerId: t.partnerId,
                              analyticsLocations: o,
                          })
                              .then((e) => {
                                  ((0, C.LI)(e), s(e.code));
                              })
                              .catch((e) => {
                                  (r(!0), B.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var z = (((n = {}).INLINE = "inline"), (n.FOOTER = "footer"), n);
function X(e) {
    let {
            recurrence: t,
            titleClassName: i,
            partnerLogo: n,
            showPartnerImage: r = !1,
            roundPromotionImage: l = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: c,
            analyticsLocations: u = [],
        } = e,
        [m, p] = s.useState(t.code),
        [f, b] = s.useState(!1),
        g = null == m;
    return (0, a.jsxs)("div", {
        className: T.lA,
        children: [
            (0, a.jsxs)("div", {
                className: T.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: T.JN,
                        children: [
                            n,
                            (0, a.jsxs)("div", {
                                className: null != i ? `${T.yO} ${i}` : T.yO,
                                children: [
                                    (0, a.jsx)(j.D, {
                                        variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(S.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(j.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: f
                                                    ? H.intl.format(H.t.i2EuFO, {
                                                          helpdeskArticle: k.A.getArticleURL(Y.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : g
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? H.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(j.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: H.intl.format(t.bodyNote, {
                                                        partnerName: P.CD[t.partnerId].label,
                                                        helpdeskArticle: k.A.getArticleURL(Y.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                (0, a.jsx)(W, {
                                    recurrence: t,
                                    canBeClaimed: g,
                                    hasClaimError: f,
                                    setCode: p,
                                    setHasClaimError: b,
                                    analyticsLocations: u,
                                }),
                        ],
                    }),
                    r &&
                        (0, a.jsx)("div", {
                            className: T.R4,
                            children: (0, a.jsx)(A._, {
                                src: t.asset ?? "",
                                className: T.Ys,
                                imageClassName: l || t.partnerId === P.XY ? T.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != m && (0, a.jsx)(K, { recurrence: { ...t, code: m }, analyticsLocations: u }),
            "footer" === d &&
                null == m &&
                (0, a.jsx)(F, {
                    children: (0, a.jsx)(W, {
                        recurrence: t,
                        canBeClaimed: g,
                        hasClaimError: f,
                        setCode: p,
                        setHasClaimError: b,
                        className: T.qx,
                        analyticsLocations: u,
                    }),
                }),
        ],
    });
}
function Z(e) {
    let { promotion: t, claimButtonPlacement: i = z.INLINE, analyticsLocations: n } = e;
    return (0, a.jsx)(X, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: i,
        analyticsLocations: n,
    });
}
var $ = i(325499),
    q = i(789861),
    J = i(398523),
    Q = i(881373),
    ee = i(310235),
    et = i(762359);
let ei =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    en =
        "https://cdn.discordapp.com/assets/content/c23a186569a2e8606d206cd4b5cc7f4ee8f880c844bc0debd5fd3400400ff7bc.png";
function ea(e, t) {
    if (null != e) return "flat" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function es() {
    return H.intl.formatToPlainString(H.t.p7BkHh, { discountPercentage: J.b });
}
function er() {
    return (0, $.i)("ThirdPartyPromotionPartnerConfigs") ? H.intl.string(H.t.nmvvaN) : H.intl.string(H.t.igiSKe);
}
let el = {
    [P.KS]: {
        getLockedPreview: () => ({ title: es(), body: er(), asset: en }),
        landingUrl: "https://steelseries.com/",
        logos: {
            dark: (0, a.jsx)(function () {
                return (0, a.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, a.jsxs)("g", {
                            clipPath: "url(#clip0_5398_22750)",
                            children: [
                                (0, a.jsx)("mask", {
                                    id: "mask0_5398_22750",
                                    style: { maskType: "luminance" },
                                    maskUnits: "userSpaceOnUse",
                                    x: "0",
                                    y: "0",
                                    width: "20",
                                    height: "20",
                                    children: (0, a.jsx)("path", { d: "M0 0H20V20H0V0Z", fill: "white" }),
                                }),
                                (0, a.jsxs)("g", {
                                    mask: "url(#mask0_5398_22750)",
                                    children: [
                                        (0, a.jsx)("path", {
                                            d: "M11.7346 16.986C8.84262 16.986 6.49024 14.6399 6.49024 11.756C6.49024 8.87208 8.84262 6.52593 11.7346 6.52593C14.6257 6.52593 16.9781 8.87208 16.9781 11.756C16.9781 14.6399 14.6257 16.986 11.7346 16.986ZM13.2458 3.65049V1.50705C13.2458 0.674633 12.5688 -0.00012207 11.7346 -0.00012207C10.9 -0.00012207 10.2235 0.674633 10.2235 1.50705V3.65002C6.87415 4.26987 4.22771 6.90882 3.60668 10.2497H1.51117C0.676547 10.2497 0 10.924 0 11.756C0 12.5884 0.676547 13.2631 1.51117 13.2631H3.60668C4.31898 17.0925 7.69231 19.9999 11.7346 19.9999C16.2926 19.9999 20 16.3019 20 11.756C20 7.72482 17.084 4.36044 13.2458 3.65049Z",
                                            fill: "#FBFBFB",
                                        }),
                                        (0, a.jsx)("path", {
                                            d: "M10.7447 11.765C10.7447 11.2291 11.1817 10.7932 11.7181 10.7932C12.2558 10.7932 12.6929 11.2291 12.6929 11.765C12.6929 12.3003 12.2558 12.7363 11.7181 12.7363C11.1817 12.7363 10.7447 12.3003 10.7447 11.765ZM8.47461 11.765C8.47461 13.549 9.9298 15.0008 11.7181 15.0008C13.5073 15.0008 14.9625 13.549 14.9625 11.765C14.9625 9.98094 13.5073 8.52914 11.7181 8.52914C9.9298 8.52914 8.47461 9.98094 8.47461 11.765Z",
                                            fill: "#FBFBFB",
                                        }),
                                        (0, a.jsx)("path", {
                                            d: "M5.42451 4.15601C5.42451 4.9889 4.74703 5.66553 3.91146 5.66553C3.07542 5.66553 2.39746 4.9889 2.39746 4.15601C2.39746 3.32266 3.07542 2.6465 3.91146 2.6465C4.74703 2.6465 5.42451 3.32266 5.42451 4.15601Z",
                                            fill: "#FBFBFB",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_5398_22750",
                                children: (0, a.jsx)("rect", { width: "20", height: "20", fill: "white" }),
                            }),
                        }),
                    ],
                });
            }, {}),
            light: (0, a.jsx)(function () {
                return (0, a.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, a.jsxs)("g", {
                            clipPath: "url(#clip0_5398_22756)",
                            children: [
                                (0, a.jsx)("mask", {
                                    id: "mask0_5398_22756",
                                    style: { maskType: "luminance" },
                                    maskUnits: "userSpaceOnUse",
                                    x: "0",
                                    y: "0",
                                    width: "20",
                                    height: "20",
                                    children: (0, a.jsx)("path", { d: "M0 0H20V20H0V0Z", fill: "white" }),
                                }),
                                (0, a.jsxs)("g", {
                                    mask: "url(#mask0_5398_22756)",
                                    children: [
                                        (0, a.jsx)("path", {
                                            d: "M11.7346 16.986C8.84262 16.986 6.49024 14.6399 6.49024 11.756C6.49024 8.87208 8.84262 6.52593 11.7346 6.52593C14.6257 6.52593 16.9781 8.87208 16.9781 11.756C16.9781 14.6399 14.6257 16.986 11.7346 16.986ZM13.2458 3.65049V1.50705C13.2458 0.674633 12.5688 -0.00012207 11.7346 -0.00012207C10.9 -0.00012207 10.2235 0.674633 10.2235 1.50705V3.65002C6.87415 4.26987 4.22771 6.90882 3.60668 10.2497H1.51117C0.676547 10.2497 0 10.924 0 11.756C0 12.5884 0.676547 13.2631 1.51117 13.2631H3.60668C4.31898 17.0925 7.69231 19.9999 11.7346 19.9999C16.2926 19.9999 20 16.3019 20 11.756C20 7.72482 17.084 4.36044 13.2458 3.65049Z",
                                            fill: "#2F3035",
                                        }),
                                        (0, a.jsx)("path", {
                                            d: "M10.7447 11.765C10.7447 11.2291 11.1817 10.7932 11.7181 10.7932C12.2558 10.7932 12.6929 11.2291 12.6929 11.765C12.6929 12.3003 12.2558 12.7363 11.7181 12.7363C11.1817 12.7363 10.7447 12.3003 10.7447 11.765ZM8.47461 11.765C8.47461 13.549 9.9298 15.0008 11.7181 15.0008C13.5073 15.0008 14.9625 13.549 14.9625 11.765C14.9625 9.98094 13.5073 8.52914 11.7181 8.52914C9.9298 8.52914 8.47461 9.98094 8.47461 11.765Z",
                                            fill: "#2F3035",
                                        }),
                                        (0, a.jsx)("path", {
                                            d: "M5.42451 4.15601C5.42451 4.9889 4.74703 5.66553 3.91146 5.66553C3.07542 5.66553 2.39746 4.9889 2.39746 4.15601C2.39746 3.32266 3.07542 2.6465 3.91146 2.6465C4.74703 2.6465 5.42451 3.32266 5.42451 4.15601Z",
                                            fill: "#2F3035",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_5398_22756",
                                children: (0, a.jsx)("rect", { width: "20", height: "20", fill: "white" }),
                            }),
                        }),
                    ],
                });
            }, {}),
        },
        recurringCardAsset: en,
        outboundConfigs: { type: "flat", config: { getTitle: es, getBody: er, getBodyClaimed: () => H.t.w8CXUl } },
    },
    [P.XY]: {
        getLockedPreview: () => ({
            title: (0, $.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(V.default.PF1aT5, { discountPercentage: Q.aW })
                : H.intl.formatToPlainString(V.default.LsJ9hj, { discountPercent: Q.aW }),
            body: (0, $.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(V.default.KoKwMn, {})
                : H.intl.formatToPlainString(V.default.Yl5ww1, {}),
            asset: ei,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: ei,
        outboundConfigs: {
            type: "keyed",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => H.intl.formatToPlainString(V.default.jkdhZq, { discountPercent: Q.aW }),
                    getBody: () => H.intl.formatToPlainString(V.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => H.intl.formatToPlainString(V.default.zeBjoX, { discountPercent: Q.y$ }),
                    getBody: () => H.intl.formatToPlainString(V.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => H.intl.formatToPlainString(V.default.pSBCjv, { discountPercent: Q.K2 }),
                    getBody: () => H.intl.formatToPlainString(V.default.lsRjfl, {}),
                },
            },
        },
    },
    [P.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "flat",
            config: {
                getTitle: () => H.intl.string(ee.default["6vVfeK"]),
                getBody: (e) => H.intl.formatToPlainString(ee.default.nsmhS2, { date: (0, q.mh)(e.endDate) }),
                getAsset: (e, t) => (0, D.WD)(e.id, t),
                getClaimCtaText: () => H.intl.string(ee.default["lbyFG+"]),
                getRedeemCtaText: () => H.intl.string(ee.default["6rwUm2"]),
                claimButtonPlacement: z.FOOTER,
            },
        },
    },
    [P.NC]: {
        getLockedPreview: () => ({ title: H.intl.string(et.default.CwMGMb), body: H.intl.string(et.default.TgHy6p) }),
        landingUrl: "https://www.youtube.com/premium",
        outboundConfigs: {
            type: "flat",
            config: {
                getTitle: () => H.intl.string(et.default.CwMGMb),
                getBody: () => H.intl.string(et.default.TgHy6p),
                getRedeemCtaText: () => H.intl.string(et.default.KfOPbQ),
                claimButtonPlacement: z.FOOTER,
            },
        },
    },
};
var eo = i(553875);
function ed() {
    return (0, a.jsx)(y, {
        title: H.intl.string(eo.default.oDfh3O),
        body: H.intl.string(eo.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var ec = i(202541);
function eu(e, t) {
    return (0, p.v)(e[0], t[0]) && (0, p.v)(e[1], t[1]);
}
function em(e, t, i) {
    let n = el[e.partnerId ?? ""],
        a = ea(n?.outboundConfigs, e.outboundTitle);
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
        asset: a?.getAsset?.(e, i),
        claimCtaText: a?.getClaimCtaText?.(),
        redeemCtaText: a?.getRedeemCtaText?.(),
    };
}
function ep(e) {
    var t;
    let i,
        n,
        { records: d, claimedOutboundPromotionCodeMap: c, theme: u } = e,
        [p, f] = s.useState(!1),
        h = [...d].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        x = p ? h : h.slice(0, 1),
        C = !p && h.length > 1,
        v =
            ((t = d[0]?.partnerId ?? ""),
            (i = (0, m.bG)([g.A], () => (0, r.M)(g.A.theme))),
            null == (n = el[t]?.logos) ? void 0 : i ? n.dark : n.light);
    return (0, a.jsxs)("div", {
        children: [
            x.map((e) => {
                var t;
                let i, n;
                return (0, a.jsx)(
                    X,
                    {
                        recurrence:
                            ((t = c[e.id] ?? null),
                            (i = el[e.partnerId ?? ""]),
                            (n = ea(i?.outboundConfigs, e.outboundTitle)),
                            {
                                ...em(e, t, u),
                                asset: i?.recurringCardAsset ?? "",
                                bodyClaimed: n?.getBodyClaimed?.(),
                                redemptionURL:
                                    "" !== e.outboundRedemptionPageLink
                                        ? e.outboundRedemptionPageLink
                                        : (i?.landingUrl ?? ""),
                            }),
                        partnerLogo: v,
                        showPartnerImage: !0,
                        claimButtonPlacement: z.FOOTER,
                        footerContent: (0, a.jsx)(G, {}),
                        analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
            C &&
                (0, a.jsx)(l.D, {
                    className: T.K8,
                    onClick: () => {
                        f(!0);
                    },
                    children: (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: H.intl.string(H.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ef(e) {
    let { partnerId: t } = e,
        i = el[t]?.getLockedPreview?.() ?? null;
    return null == i ? null : (0, a.jsx)(y, { title: i.title, body: i.body, asset: i.asset });
}
function eb(e) {
    let { partnerIds: t, title: i, subtitle: n, showXboxCard: s = !1, transitionState: r, onClose: l } = e,
        { promotionsLoaded: o } = (0, v.y7)();
    return o
        ? (0, a.jsxs)(c.Modal, {
              title: i,
              subtitle: n,
              actions: [],
              preview: (0, a.jsx)(x.A, {
                  subscriptionTier: ec.pe.TIER_2,
                  fullWidth: !0,
                  onClick: () => {
                      l();
                  },
                  onSubscribeModalClose: (e) => {
                      if (e) return C.Ay.fetchActivePromotions();
                  },
              }),
              transitionState: r,
              onClose: l,
              children: [s && (0, a.jsx)(ed, {}), t.map((e) => (0, a.jsx)(ef, { partnerId: e }, e))],
          })
        : (0, a.jsx)(d.y, {});
}
function eg(e) {
    let { partnerIds: t, title: i, subtitle: n, modalTeaser: s, transitionState: r, onClose: l } = e,
        p = (0, m.bG)([g.A], () => g.A.theme),
        [f, h] = (0, m.bG)(
            [_.A],
            () => {
                let e = [],
                    i = [];
                return (
                    t.forEach((t) => {
                        let n = el[t]?.outboundConfigs;
                        function a(e) {
                            return null != ea(n, e.outboundTitle);
                        }
                        let s = _.A.getPromotionsByPartner(t);
                        (e.push(...s.recurring.filter(a)), i.push(...s.oneTime.filter(a)));
                    }),
                    [e, i]
                );
            },
            [t],
            eu,
        ),
        { promotionsLoaded: x, claimedOutboundPromotionCodeMap: C } = (0, v.y7)();
    if (!x) return (0, a.jsx)(d.y, {});
    let P = t
            .map((e) => el[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        R = P ? { recurring: H.intl.string(V.default["9Y2p6p"]), oneTime: H.intl.string(V.default.Wm58LR) } : void 0,
        j = s?.icon ?? u.t,
        A = (0, a.jsx)("div", {
            className: T.kR,
            children: h.map((e) => {
                let t = em(e, C[e.id] ?? null, p),
                    i = ea(el[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, a.jsx)(
                    Z,
                    {
                        promotion: t,
                        claimButtonPlacement: i?.claimButtonPlacement,
                        analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, a.jsx)(c.Modal, {
        title: i,
        subtitle: n,
        actions: [],
        transitionState: r,
        onClose: l,
        children: (0, a.jsxs)("div", {
            className: T.kL,
            children: [
                f.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            null != R &&
                                (0, a.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: R.recurring,
                                }),
                            (0, a.jsx)("div", {
                                className: T.kR,
                                children: (0, a.jsx)(ep, { records: f, claimedOutboundPromotionCodeMap: C, theme: p }),
                            }),
                        ],
                    }),
                h.length > 0 &&
                    (P
                        ? (0, a.jsxs)("div", {
                              className: T.E7,
                              children: [
                                  null != R &&
                                      (0, a.jsx)(o.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: R.oneTime,
                                      }),
                                  A,
                              ],
                          })
                        : A),
                null != s &&
                    (0, a.jsxs)("div", {
                        className: T.ar,
                        children: [
                            (0, a.jsxs)("div", {
                                className: T.Uv,
                                children: [
                                    (0, a.jsx)(j, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                    (0, a.jsx)(o.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: s.title,
                                    }),
                                ],
                            }),
                            null != s.body &&
                                (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: s.body }),
                        ],
                    }),
            ],
        }),
    });
}
function eh(e) {
    let {
        partnerIds: t,
        isLocked: i = !1,
        title: n,
        subtitle: s,
        modalTeaser: r,
        showXboxCard: l,
        transitionState: o,
        onClose: d,
    } = e;
    return i
        ? (0, a.jsx)(eb, { partnerIds: t, title: n, subtitle: s, showXboxCard: l, transitionState: o, onClose: d })
        : (0, a.jsx)(eg, { partnerIds: t, title: n, subtitle: s, modalTeaser: r, transitionState: o, onClose: d });
}
function ex(e) {
    let {
            partnerIds: t,
            isLocked: n = !1,
            title: s,
            subtitle: r,
            modalTeaser: l,
            showXboxCard: o,
            analyticsLocations: d,
        } = e,
        c = o ? [...t, "xbox"] : t;
    (h.default.track(Y.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: c, partner_id: c[0], location_stack: d }),
        C.Ay.fetchActivePromotions(),
        (0, f.openModalLazy)(async () => {
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(i.bind(i, 483489));
            return (i) =>
                (0, a.jsx)(e, {
                    ...i,
                    partnerIds: t,
                    isLocked: n,
                    title: s,
                    subtitle: r,
                    modalTeaser: l,
                    showXboxCard: o,
                });
        }));
}
