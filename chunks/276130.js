n.d(t, { Yc: () => eA, vG: () => eN, FT: () => e_, EA: () => eb });
var a = n(477900),
    l = n(582128),
    s = n(892227),
    r = n(17928),
    i = n(922016),
    c = n(757036),
    o = n(366505),
    h = n(166403),
    u = n(124861),
    d = n(362862),
    m = n(761705),
    C = n(923138),
    E = n(12510),
    g = n(673125),
    f = n(503698),
    x = n.n(f),
    _ = n(821609),
    A = n(661531),
    v = n(403581),
    p = n(834730),
    S = n(939249),
    N = n(577473),
    b = n(34188),
    L = n(303136),
    j = n(626031),
    O = n(628284),
    R = n(320448),
    U = n(404778),
    T = n(318254),
    y = n(742967),
    I = n(570165),
    M = n(375708),
    F = n(137484),
    w = n(427483);
function G(e) {
    let { achievementStatus: t, animationState: n = "off" } = e,
        l = t === u.x.COMPLETED || t === u.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: x()(F.TK, { [F.AM]: l }),
            children: (0, a.jsx)(y.x, {
                className: F.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: w.A,
                animationState: n,
                assetAltText: "",
            }),
        });
    return l ? (0, a.jsx)("div", { className: F.Zs, children: s }) : s;
}
function B(e) {
    let { className: t } = e;
    return (0, a.jsx)(U.c, { className: x()(F.Fu, t) });
}
function D(e) {
    let {
            achievementIdentifier: t,
            title: n,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: i,
            onDiscoveryClick: c,
            isLastItem: o,
        } = e,
        [h, d] = l.useState(!1),
        [m, C] = l.useState(!1);
    async function E() {
        null != i && (C(!0), await i(t).finally(() => C(!1)));
    }
    let g = null != c && r === u.x.NONE,
        f = x()(F.of, { [F.D8]: h, [F.or]: g }),
        v = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: F.Ub,
                    children: [
                        (0, a.jsx)(G, { achievementStatus: r, animationState: h ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: F.Du,
                            children: [
                                (0, a.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                                (0, a.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: M.intl.format(r === u.x.COMPLETED ? I.default.h2qWpS : I.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(T.C, {
                                                className: F.fN,
                                                size: "xs",
                                                color: A.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: n, isClaiming: l, handleClaim: s, hasDiscoveryClick: r } = t,
                        i = (0, a.jsx)(_.$, {
                            variant: "expressive",
                            size: "sm",
                            text: M.intl.string(I.default.WmfVjs),
                            loading: l,
                            onClick: s,
                        });
                    return l
                        ? i
                        : e === u.x.COMPLETED
                          ? n
                              ? i
                              : (0, a.jsx)(O.y, {
                                    color: A.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": M.intl.string(I.default.k6h2J3),
                                })
                          : r
                            ? (0, a.jsx)(R._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: h, isClaiming: m, handleClaim: E, hasDiscoveryClick: g }),
            ],
        }),
        N = l.useMemo(() => ({ onMouseEnter: () => d(!0), onMouseLeave: () => d(!1) }), []);
    return g
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(S.D, { className: f, ...N, onClick: c, "aria-label": n, children: v }),
                  !o && (0, a.jsx)(B, {}),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: f, ...N, children: v }), !o && (0, a.jsx)(B, {})],
          });
}
var H = n(652215),
    k = n(653877),
    P = n(268920),
    W = n(633217);
function z() {
    return (0, a.jsx)("div", {
        className: k.s,
        children: (0, a.jsx)(L.A, { src: W.A, fallbackImage: P.A, className: k.Cb }),
    });
}
function V(e) {
    let { nitroIconColor: t = A.A.colors.ICON_SUBTLE, text: n } = e;
    return (0, a.jsxs)("div", {
        className: k.SY,
        children: [
            (0, a.jsx)(v.t, { size: "xs", color: t }),
            (0, a.jsx)(p.E, { variant: "text-xs/medium", color: "text-subtle", children: n }),
        ],
    });
}
function $(e) {
    let { orbBalance: t, headerTagsContent: n } = e;
    return (0, a.jsxs)("div", {
        className: k.SZ,
        children: [
            (0, a.jsx)(z, {}),
            (0, a.jsxs)("div", {
                className: k.ZX,
                children: [
                    (0, a.jsx)(j.t, {
                        value: t,
                        onValueChange: H.tEg,
                        onValueReached: H.tEg,
                        targetTotalCounterTime: 1500,
                        textVariant: "display-md",
                        textColor: "text-strong",
                        horizontalAlignment: "left",
                        isRenderedWithoutLottieAnimation: !0,
                    }),
                    n,
                ],
            }),
        ],
    });
}
function K(e) {
    let { text: t, onClick: n } = e,
        l = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(v.t, { size: "xxs", color: "white" }),
                (0, a.jsx)(p.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == n
        ? (0, a.jsx)("div", { className: k.lh, children: l })
        : (0, a.jsx)(S.D, { className: x()(k.lh, k.w9), onClick: n, children: l });
}
function X(e) {
    let { title: t, challenges: n, onClaim: s, badgeText: r, onClickBadge: i } = e,
        c = n.length > 0;
    return (0, a.jsx)("div", {
        className: x()(k.E6, { [k.GN]: !c }),
        children: c
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsxs)("div", {
                          className: k.$b,
                          children: [
                              (0, a.jsx)(p.E, { variant: "text-xs/medium", color: "text-subtle", children: t }),
                              null != r && (0, a.jsx)(K, { text: r, onClick: i }),
                          ],
                      }),
                      n.map((e, t) =>
                          (0, a.jsx)(
                              l.Fragment,
                              { children: (0, a.jsx)(D, { ...e, onClaim: s, isLastItem: t === n.length - 1 }) },
                              e.achievementIdentifier,
                          ),
                      ),
                  ],
              })
            : (0, a.jsxs)("div", {
                  className: k.AZ,
                  children: [
                      (0, a.jsx)(p.E, {
                          variant: "text-sm/medium",
                          color: "text-default",
                          children: M.intl.string(I.default.xOP5OP),
                      }),
                      (0, a.jsx)(p.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: M.intl.string(I.default.XW2CuY),
                      }),
                  ],
              }),
    });
}
function q(e) {
    let { onQuestsClick: t, onShopClick: n } = e;
    return (0, a.jsxs)("div", {
        className: k.W,
        children: [
            (0, a.jsx)(_.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: N.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(_.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: b.U, type: "icon" },
                fullWidth: !0,
                onClick: n,
            }),
        ],
    });
}
function Y(e) {
    let {
            orbBalance: t,
            headerTagsContent: n,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: i,
            cardRef: c,
        } = e,
        [o, h] = l.useState(!1);
    return (0, a.jsxs)("div", {
        className: x()(k.ql, k.Ut),
        ref: c,
        children: [
            (0, a.jsx)($, { orbBalance: t, headerTagsContent: n }),
            o ? null : s({ onClose: () => h(!0) }),
            r,
            i,
        ],
    });
}
var Q = n(408278),
    Z = n(789645),
    J = n(696292),
    ee = n(793574),
    et = n(839534),
    en = n(75678),
    ea = n(87719),
    el = n(576761),
    es = n(617986),
    er = n(758836),
    ei = n(202541);
function ec() {
    (0, et.Cz)({ tab: er.G2.ORBS, analyticsLocations: [], analyticsSource: ee.A.ORBS_BALANCE_MENU });
}
function eo() {
    (0, es.mA)({ fromContent: J.u.ORBS_BALANCE_MENU });
}
var eh = n(600676);
function eu(e) {
    let {
        title: t,
        imageUrl: n,
        imageAlt: l,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: i,
        buttonVariant: c,
        onCtaClick: o,
        onClose: h,
        className: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: x()(eh.Vm, u),
        children: [
            null != h
                ? (0, a.jsx)("div", {
                      className: eh.Fx,
                      children: (0, a.jsx)(Q.K, {
                          icon: Z.P,
                          "aria-label": M.intl.string(M.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: h,
                      }),
                  })
                : null,
            null != n && (0, a.jsx)("img", { alt: l, src: n, className: eh.db }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(p.E, { variant: "text-md/bold", color: "text-default", className: eh.L8, children: t }),
                    null != s &&
                        (0, a.jsx)(p.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: eh.Gd,
                            children: s,
                        }),
                    (0, a.jsx)(_.$, { text: r, size: "sm", icon: i, onClick: o, variant: c }),
                ],
            }),
        ],
    });
}
function ed(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(eu, {
        title: M.intl.string(I.default.o6s7yg),
        imageUrl: n(105644),
        imageAlt: M.intl.string(I.default.qa1xyr),
        subTextDescription: M.intl.string(I.default.HACucK),
        buttonText: M.intl.string(I.default.o6s7yg),
        buttonIcon: { asset: b.U, type: "icon" },
        onCtaClick: ec,
        onClose: t,
    });
}
let em = { asset: v.t, type: "icon" };
function eC(e) {
    let { onClose: t } = e,
        { nitroGatedOrbMultiplier: s } = (0, r.cf)([g.A], () => ({
            nitroGatedOrbMultiplier: g.A.nitroGatedOrbMultiplier,
        })),
        i = l.useCallback(() => {
            !(function (e) {
                let { analyticsLocations: t = [] } = e;
                (0, en.A)({ subscriptionTier: ei.pe.TIER_2, analyticsLocations: t });
            })({ analyticsLocations: [] });
        }, []),
        c = l.useMemo(() => M.intl.format(I.default["Ba/7wO"], { multiplier: s }), [s]);
    return null == s
        ? null
        : (0, a.jsx)(eu, {
              title: M.intl.string(I.default.ZqCAos),
              imageUrl: n(780361),
              imageAlt: M.intl.string(I.default.FkfrRH),
              subTextDescription: c,
              buttonText: M.intl.string(I.default.U9UQJE),
              buttonIcon: em,
              buttonVariant: "expressive",
              onCtaClick: i,
              onClose: t,
              className: eh.ml,
          });
}
var eE = n(123576);
let eg = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: u.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: u.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: u.x.NONE,
        orbRewardAmount: 100,
    },
];
async function ef(e) {
    console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
}
function ex(e) {
    let { userHasPremium: t, onClose: n, orbBalance: l } = e;
    return t ? (null != l && l >= 1400 ? (0, a.jsx)(ed, { onClose: n }) : null) : (0, a.jsx)(eC, { onClose: n });
}
function e_(e) {
    let { userHasPremium: t, orbBalance: n, hasNoChallenges: l } = e;
    return (0, a.jsx)(Y, {
        orbBalance: n,
        headerTagsContent: t
            ? (0, a.jsx)(V, { text: M.intl.format(I.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return ex({ userHasPremium: t, onClose: a, orbBalance: n });
        },
        orbChallengesCard: (0, a.jsx)(X, {
            title: M.intl.string(I.default.H6Ny8N),
            badgeText: M.intl.format(t ? I.default.OHLdjq : I.default.WOMrJf, { multiplier: 1.2 }),
            challenges: l ? [] : eg,
            onClaim: ef,
        }),
        orbWalletFooter: (0, a.jsx)(q, { onQuestsClick: eo, onShopClick: ec }),
    });
}
function eA(e) {
    let { userHasPremium: t, orbBalance: n } = e;
    return (0, a.jsx)(e_, { userHasPremium: t, orbBalance: n, hasNoChallenges: !0 });
}
function ev() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, o.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let n = Math.max(1, (0, s.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(V, { text: M.intl.format(I.default["04j3XV"], { orbAmount: t.reward_amount, days: n }) });
}
function ep() {
    return null != (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription()) ? (0, a.jsx)(ev, {}) : null;
}
function eS() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t } = (0, C.z)({ shouldFetch: !0 }),
        n = (0, c.L)(ei.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: s } = (0, r.cf)([g.A], () => ({
            nitroGatedOrbMultiplier: g.A.nitroGatedOrbMultiplier,
        })),
        i = l.useMemo(() => {
            if (!n)
                return () =>
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, ea.x)() : (0, es.gC)(t, el.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: s });
        }, [s, n]);
    return t
        ? (0, a.jsx)(X, {
              title: M.intl.string(I.default.H6Ny8N),
              challenges: e,
              onClaim: E.Xz,
              onClickBadge: i,
              badgeText: M.intl.format(n ? I.default.OHLdjq : I.default.WOMrJf, { multiplier: s }),
          })
        : (0, a.jsx)("div", { className: eE.y });
}
function eN(e) {
    let { cardRef: t } = e,
        { balance: n } = (0, m.W)(),
        s = (0, d.H)({ location: "StatefulOrbWallet" }),
        r = (0, c.L)(ei.PremiumTypes.TIER_2);
    return (l.useEffect(() => {
        s && (0, E.eX)();
    }, [s]),
    s)
        ? (0, a.jsx)(Y, {
              cardRef: t,
              orbBalance: n,
              headerTagsContent: (0, a.jsx)(ep, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return ex({ userHasPremium: r, onClose: t, orbBalance: n });
              },
              orbChallengesCard: (0, a.jsx)(eS, {}),
              orbWalletFooter: (0, a.jsx)(q, { onQuestsClick: eo, onShopClick: ec }),
          })
        : null;
}
function eb(e) {
    let { cardRef: t, targetElementRef: n, shouldShow: s } = e,
        r = l.useCallback(() => (0, a.jsx)(eN, { cardRef: t }), [t]);
    return (0, a.jsx)(i.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: r,
        position: "bottom",
        align: "right",
        shouldShow: s,
        animation: i.Y.Animation.NONE,
        targetElementRef: n,
        children: () => null,
    });
}
