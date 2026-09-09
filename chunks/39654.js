t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eO, default: () => eM });
var n = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(132500),
    o = t(17928),
    d = t(297264),
    c = t(834730),
    u = t(289873),
    f = t(444927),
    g = t(793574),
    p = t(688810),
    m = t(976860),
    x = t(435658),
    h = t(561794),
    I = t(280450),
    S = t(696451),
    A = t(71393),
    j = t(67480),
    k = t(449054),
    v = t(871123),
    b = t(733391),
    _ = t(439303),
    E = t(353281),
    C = t(429635),
    L = t(977445),
    N = t(832163);
let y = [];
function R(e) {
    let l = (0, L.uS)(e ?? void 0),
        t = (0, o.bG)(
            [N.A],
            () => (null == e ? null : (N.A.getStorefrontDataForApplicationId(e)?.storefront ?? null)),
            [e],
        ),
        n = (0, o.bG)([N.A], () => (null != e ? N.A.getStorefrontEntries(e) : void 0), [e]),
        s = (0, o.bG)([N.A], () => (null != e ? N.A.getPreviewStorefrontId(e) : null), [e]),
        a = t?.id ?? null;
    return l
        ? {
              isTestMode: l,
              entries: n?.state === "fetched" ? n.entries : y,
              selectedStorefrontId: s ?? a,
              liveStorefrontId: a,
              liveStorefront: t,
          }
        : { isTestMode: !1, entries: y, selectedStorefrontId: a, liveStorefrontId: a, liveStorefront: t };
}
var T = t(317560),
    M = t(696292),
    O = t(939249),
    w = t(366010),
    D = t(926268),
    G = t(736653),
    P = t(742589),
    H = t(617986),
    Y = t(402860),
    V = t(70926),
    F = t(287809),
    $ = t(174459),
    W = t(975571),
    U = t(371794),
    Z = t(995393),
    B = t(652215),
    J = t(518477),
    X = t(375708),
    z = t(859425);
function q(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(O.D, { className: i()(z.gb, a), onClick: t, "aria-label": s, children: l });
}
function K() {
    let e = s.useCallback(() => {
        (0, H.mA)({ fromContent: M.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, n.jsx)(V.SS, {
        cardAlignment: V.SS.CardAlignment.END,
        ctaText: X.intl.string(X.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function Q(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, w.M)((0, G.Ay)()),
        r = (0, o.bG)([F.default], () => F.default.getCurrentUser()),
        d = (0, _.jM)(),
        { analyticsLocations: u } = (0, p.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, E.H)(),
        x = s.useCallback(() => {
            r?.id != null &&
                (0, Y.openUserProfileModal)({
                    userId: r.id,
                    tabSection: J.RP.WISHLIST,
                    sourceAnalyticsLocations: [g.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = s.useCallback(() => {
            $.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: d?.sessionId,
                cta_type: Z.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(W.A.getArticleURL(B.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [d, u]),
        I = s.useCallback(() => {
            null != f && (0, m.pX)(f(0));
        }, [f]);
    if (null == l) return null;
    let S = null != l.logoAssetId ? (0, U.YE)(l.applicationId, l.logoAssetId, 128) : null,
        A = null != l.lightThemeLogoAssetId ? (0, U.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        j = null;
    return (
        (j = a ? (S ?? A) : (A ?? S)),
        (0, n.jsxs)(P.A, {
            disableDoubleClick: !0,
            className: z.N1,
            children: [
                (0, n.jsxs)(O.D, {
                    onClick: I,
                    className: z.gn,
                    children: [
                        null != j && (0, n.jsx)("img", { className: z.wm, src: j, alt: l.title }),
                        (0, n.jsx)(P.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: z.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                P.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, m.pX)(f(l));
                                    },
                                    wrapperClassName: z.oB,
                                    className: i()(z.xT, { [z.ys]: t === l }),
                                    children: (0, n.jsx)(c.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: z.sZ,
                    children: [
                        (0, n.jsx)(q, {
                            content: (0, n.jsx)(D.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: X.intl.string(X.t["7lZ31J"]),
                            className: z.ij,
                        }),
                        (0, n.jsx)(K, {}),
                        (0, n.jsx)(q, {
                            onClick: h,
                            ariaLabel: X.intl.string(X.t.hvVgAZ),
                            content: (0, n.jsx)(c.E, {
                                variant: "text-sm/medium",
                                children: X.intl.string(X.t.hvVgAZ),
                            }),
                            className: z.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var ee = t(689175),
    el = t(765671);
let et = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var en = t(467884),
    es = t(352749);
function ea(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(_.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: es.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: es.FS,
                          children: [
                              (0, n.jsx)(d.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(c.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: es.Ui,
                              children: (0, n.jsx)(en.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: en.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ei = t(199023);
function er(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, U.YE)(l, t, 1024, v.pV) : null;
    return (0, n.jsx)("div", {
        className: ei._,
        children: null != s ? (0, n.jsx)("div", { className: ei.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var eo = t(259745),
    ed = t(504082);
function ec(e) {
    let { className: l, skuIds: t, variant: s = en.s.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(l, ed.kL, ed.$2, { [ed.Wc]: s === en.s.MEDIUM }),
              children: t.map((e, l) =>
                  (0, n.jsx)(en.A, { positionInSection: l, skuId: e, variant: s, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var eu = t(534125);
function ef(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = en.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == a || 0 === a.length) return null;
    let o = null != t && t.length > 0;
    return (0, n.jsx)(_.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: eu.hd,
            children: [
                o &&
                    (0, n.jsx)(d.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: eu.Gf,
                        children: t,
                    }),
                (0, n.jsx)(ec, { className: o ? eu.EM : void 0, skuIds: a, variant: i }),
            ],
        }),
    });
}
var eg = t(59520);
function ep(e, l, t, n) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (s + a) / i;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: a,
                applicationId: o,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = l;
            $.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                application_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var em = t(167551);
function ex(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, el.Ay)(),
        d = (0, _.jM)(),
        { analyticsLocations: c } = (0, p.Ay)(),
        u = s.useRef(null),
        { handleScroll: f } =
            ((l = s.useRef(d)),
            s.useEffect(() => {
                l.current = d;
            }, [d]),
            (t = (0, eg.I)(ep, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(B.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, c, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, c, u]),
            }),
        g = (function (e) {
            let { location: l } = e;
            return et.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [m, x] = s.useMemo(() => {
            if (i?.skuIds == null || 0 === i.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return i?.leaderboard == null || null == e || e < 564
                ? [[], i.skuIds]
                : e < 1104
                  ? i.skuIds.length >= 2
                      ? [[], i.skuIds]
                      : [i.skuIds.slice(0, 1), i.skuIds.slice(1)]
                  : [i.skuIds.slice(0, 2), i.skuIds.slice(2)];
        }, [i, o]),
        h = 1 === m.length && null != o && o >= 834 && !g;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = d;
        $.default.track(B.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: c,
        });
    }, [d, a, c]),
    null == i)
        ? null
        : (0, n.jsxs)(ee.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  (0, n.jsx)(eo.M, { applicationId: a, analyticsLocations: c }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: em.k,
                      children: [
                          (0, n.jsx)(er, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !g &&
                              (0, n.jsx)(ea, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: h ? m[0] : void 0,
                                  analyticsLocations: c,
                              }),
                          (0, n.jsx)(ef, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : m,
                              variant: en.s.MEDIUM,
                          }),
                          (0, n.jsx)(ef, { analyticsSectionId: "non-featured-top-section", skuIds: x }),
                          i.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  ef,
                                  {
                                      analyticsSectionId: `index:${l}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
var eh = t(785562),
    eI = t(379418),
    eS = t(847374),
    eA = t(980707),
    ej = t(477782),
    ek = t(922016),
    ev = t(206285),
    eb = t(741412);
function e_(e) {
    let { entries: l, selectedStorefrontId: t, liveStorefrontId: s, onSelect: a, onClose: i } = e;
    return (0, n.jsx)(eA.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": X.intl.string(ev.default.c2I5Ti),
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(ej.rX, {
            children: l.map((e) => {
                var l;
                let r;
                return (0, n.jsx)(
                    ej.iD,
                    {
                        id: e.id,
                        group: "social-layer-storefront-entry",
                        checked: e.id === t,
                        action: () => {
                            a(e.id), i();
                        },
                        label:
                            ((l = e.id === s),
                            (r = "" !== e.title ? e.title : X.intl.string(ev.default.OvBwPV)),
                            l
                                ? X.intl.formatToPlainString(ev.default.eF1VJh, { title: r })
                                : null == e.publishedAt
                                  ? X.intl.formatToPlainString(ev.default.dX2mQt, { title: r })
                                  : r),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function eE(e) {
    let { triggerRef: l, isOpen: t, onToggle: s, children: a } = e;
    return (0, n.jsx)("div", {
        className: eb.I,
        ref: l,
        children: (0, n.jsxs)(O.D, {
            className: eb.h,
            onClick: s,
            "aria-expanded": t,
            "aria-haspopup": "menu",
            children: [a, (0, n.jsx)(eS.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function eC(e) {
    let { applicationId: l, children: t } = e,
        { entries: a, selectedStorefrontId: i, liveStorefrontId: r } = R(l),
        [o, d] = s.useState(!1),
        c = s.useRef(null),
        u = s.useCallback(() => d(!1), []),
        f = s.useCallback(() => d((e) => !e), []),
        g = s.useCallback((e) => (0, b.ZR)(l, e === r ? null : e), [l, r]);
    return (0, n.jsx)(ek.Y, {
        targetElementRef: c,
        shouldShow: o,
        animation: ek.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(e_, { entries: a, selectedStorefrontId: i, liveStorefrontId: r, onSelect: g, onClose: u }),
        children: () => (0, n.jsx)(eE, { triggerRef: c, isOpen: o, onToggle: f, children: t }),
    });
}
var eL = t(664267);
function eN(e) {
    let l = (0, eI.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != l ? (0, n.jsx)(eh.A, { node: l }) : null;
}
function ey(e) {
    let l,
        { storefront: t, isLive: a } = e,
        { publishedAt: i, applicationId: r } = t,
        { entries: o } = R(r),
        [d] = s.useState(() => Date.now());
    l =
        null == i
            ? X.intl.string(ev.default.Id33AH)
            : i.getTime() > d
              ? X.intl.format(ev.default.WOZod0, { timestamp: eN(i) })
              : a
                ? X.intl.format(ev.default.QsHYzr, { timestamp: eN(i) })
                : X.intl.format(ev.default["3x/M9Z"], { timestamp: eN(i) });
    let u = (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: l });
    return (0, n.jsx)("div", {
        className: eL.v,
        children: o.length > 1 ? (0, n.jsx)(eC, { applicationId: r, children: u }) : u,
    });
}
var eR = t(537067);
function eT(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i, isTestMode: r, isLive: o } = e,
        d = (0, _.jM)(),
        { renderHeader: c, getSocialLayerStorefrontLink: u } = (0, E.H)(),
        f = s.useRef(d);
    s.useEffect(() => {
        f.current = d;
    }, [d]);
    let p = s.useCallback(() => {
            null != u && (0, m.bG)(u(0));
        }, [u]),
        x = i?.id;
    return (
        s.useEffect(() => {
            if (null != x)
                return (
                    (0, T.R)({
                        customNavigateToSocialLayerStorefront: p,
                        skuId: x,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [g.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: f.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, m.JK)().location;
                            (0, v.rG)(e, n, l.applicationId, t) && null != u && (0, m.bG)(u(a));
                        },
                    }),
                    () => {
                        (0, T.j)();
                    }
                );
        }, [t, a, x, l.applicationId, u, p]),
        (0, n.jsxs)("div", {
            className: eR.kL,
            children: [
                c?.(a, l),
                r && (0, n.jsx)(ey, { storefront: l, isLive: o }),
                (0, n.jsx)(ex, { applicationId: l.applicationId, page: l.pages[a] }),
            ],
        })
    );
}
function eM(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        d = s.useCallback((e, l, n) => B.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        c = (0, v.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(Q, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == A.A.getGuild(t) && (0, k.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eO, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: d,
        })
    );
}
function eO(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: m = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: k,
        } = e,
        { analyticsLocations: v } = (0, p.Ay)(g.A.SOCIAL_LAYER_STOREFRONT),
        L = (0, C.A)({ applicationId: l, guildId: t }),
        y = L?.storefront ?? null,
        T = (function (e) {
            let { applicationId: l } = e,
                { isTestMode: t, selectedStorefrontId: n, liveStorefrontId: a, liveStorefront: i } = R(l),
                r = t && null != n && n !== a;
            s.useEffect(() => {
                t && null != l && (0, b.JX)(l);
            }, [t, l]),
                s.useEffect(() => {
                    r && null != l && null != n && (0, b.d8)(l, n);
                }, [r, l, n]);
            let d = (0, o.bG)([N.A], () => (r && null != n ? N.A.getStorefrontById(n) : void 0), [r, n]);
            return {
                isTestMode: t,
                selectedStorefrontId: n,
                liveStorefrontId: a,
                effectiveStorefront: r ? (d?.storefront ?? null) : i,
            };
        })({ applicationId: l }),
        M = T.effectiveStorefront ?? y,
        O = null != M && M.id === T.liveStorefrontId,
        w = (0, o.bG)([j.A], () => j.A.get(a), [a]);
    (0, h.pE)(), (0, x.x)({ applicationId: L?.storefront?.applicationId });
    let D = (0, f.A)((0, r.A)()),
        G = (0, o.bG)([S.Ay, I.default], () => S.Ay.isMember(t, I.default.getId())),
        P = s.useMemo(() => (null == m || isNaN(m) || (null != M && m >= M.pages.length) ? 0 : m), [m, M]),
        H = M?.pages[P]?.title ?? null,
        Y = M?.pages[P]?.leaderboard != null,
        V = s.useMemo(
            () => ({
                sessionId: D,
                guildId: t,
                applicationId: l,
                pageIndex: P,
                pageTitle: H,
                isUserGuildMember: G,
                pageHasLeaderboard: Y,
            }),
            [D, t, l, P, H, G, Y],
        );
    return (s.useEffect(() => {
        null != l && (0, b.SP)(l, P, null != a ? a : null);
    }, [l, P, a]),
    null == l || L?.storefront == null)
        ? null != L && "loading" !== L.state
            ? (0, n.jsxs)("div", {
                  className: i()(eR.p$, eR.kL),
                  children: [
                      (0, n.jsx)(d.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: X.intl.string(ev.default.OvBwPV),
                      }),
                      (0, n.jsx)(c.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: X.intl.string(ev.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: i()(eR.u1, eR.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(p.f5, {
              value: v,
              children: (0, n.jsx)(E.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: k,
                  children: (0, n.jsx)(_.E9, {
                      newValue: V,
                      children: (0, n.jsx)(eT, {
                          storefront: M ?? L.storefront,
                          guildId: t,
                          selectedPageIndex: P,
                          selectedSku: w,
                          isTestMode: T.isTestMode,
                          isLive: O,
                      }),
                  }),
              }),
          });
}
