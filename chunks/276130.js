n.d(t, { Yc: () => eN, vG: () => ej, FT: () => ev, EA: () => eO });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(892227),
    c = n(17928),
    o = n(939249),
    h = n(922016),
    d = n(757036),
    u = n(366505),
    m = n(166403),
    C = n(124861),
    E = n(362862),
    g = n(761705),
    _ = n(923138),
    x = n(12510),
    f = n(673125),
    A = n(821609),
    p = n(661531),
    v = n(403581),
    N = n(834730),
    L = n(683071),
    b = n(577473),
    S = n(34188),
    j = n(303136),
    O = n(626031),
    y = n(628284),
    R = n(320448),
    U = n(404778),
    T = n(318254),
    I = n(742967),
    M = n(570165),
    F = n(375708),
    G = n(137484),
    w = n(427483);
function D(e) {
    let { achievementStatus: t, animationState: n = "off" } = e,
        l = t === C.x.COMPLETED || t === C.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: i()(G.TK, { [G.AM]: l }),
            children: (0, a.jsx)(I.x, {
                className: G.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: w.A,
                animationState: n,
                assetAltText: "",
            }),
        });
    return l ? (0, a.jsx)("div", { className: G.Zs, children: s }) : s;
}
function H(e) {
    let { className: t } = e;
    return (0, a.jsx)(U.c, { className: i()(G.Fu, t) });
}
function B(e) {
    let {
            achievementIdentifier: t,
            title: n,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: c,
            onDiscoveryClick: h,
            isLastItem: d,
        } = e,
        [u, m] = l.useState(!1),
        [E, g] = l.useState(!1);
    async function _() {
        null != c && (g(!0), await c(t).finally(() => g(!1)));
    }
    let x = null != h && r === C.x.NONE,
        f = i()(G.of, { [G.D8]: u, [G.or]: x }),
        v = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: G.Ub,
                    children: [
                        (0, a.jsx)(D, { achievementStatus: r, animationState: u ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: G.Du,
                            children: [
                                (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: F.intl.format(r === C.x.COMPLETED ? M.default.h2qWpS : M.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(T.C, {
                                                className: G.fN,
                                                size: "xs",
                                                color: p.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: n, isClaiming: l, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, a.jsx)(A.$, {
                            variant: "expressive",
                            size: "sm",
                            text: F.intl.string(M.default.WmfVjs),
                            loading: l,
                            onClick: s,
                        });
                    return l
                        ? r
                        : e === C.x.COMPLETED
                          ? n
                              ? r
                              : (0, a.jsx)(y.y, {
                                    color: p.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": F.intl.string(M.default.k6h2J3),
                                })
                          : i
                            ? (0, a.jsx)(R._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: u, isClaiming: E, handleClaim: _, hasDiscoveryClick: x }),
            ],
        }),
        L = l.useMemo(() => ({ onMouseEnter: () => m(!0), onMouseLeave: () => m(!1) }), []);
    return x
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(o.D, { className: f, ...L, onClick: h, "aria-label": n, children: v }),
                  !d && (0, a.jsx)(H, {}),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: f, ...L, children: v }), !d && (0, a.jsx)(H, {})],
          });
}
var k = n(652215),
    P = n(653877),
    W = n(268920),
    z = n(633217);
function V() {
    return (0, a.jsx)("div", {
        className: P.s,
        children: (0, a.jsx)(j.A, { src: z.A, fallbackImage: W.A, className: P.Cb }),
    });
}
function K(e) {
    let { nitroIconColor: t = p.A.colors.ICON_SUBTLE, text: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SY,
        children: [
            (0, a.jsx)(v.t, { size: "xs", color: t }),
            (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: n }),
        ],
    });
}
function X(e) {
    let { orbBalance: t, headerTagsContent: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SZ,
        children: [
            (0, a.jsx)(V, {}),
            (0, a.jsxs)("div", {
                className: P.ZX,
                children: [
                    (0, a.jsx)(O.t, {
                        value: t,
                        onValueChange: k.tEg,
                        onValueReached: k.tEg,
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
function Y(e) {
    let { text: t, onClick: n } = e,
        l = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(v.t, { size: "xxs", color: "white" }),
                (0, a.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == n
        ? (0, a.jsx)("div", { className: P.lh, children: l })
        : (0, a.jsx)(o.D, { className: i()(P.lh, P.w9), onClick: n, children: l });
}
function q(e) {
    let { numRows: t = 3 } = e,
        n = l.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: P.gW,
        "aria-hidden": !0,
        children: n.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: P.US,
                    children: [
                        (0, a.jsx)("div", { className: i()(P.DO, P.VR) }),
                        (0, a.jsxs)("div", {
                            className: P.hG,
                            children: [
                                (0, a.jsx)("div", { className: i()(P.DO, P.Iz) }),
                                (0, a.jsx)("div", { className: i()(P.DO, P.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function Q(e) {
    let { title: t, challenges: n, isLoading: s, onClaim: r, badgeText: c, onClickBadge: o, inlineNoticeProps: h } = e,
        d = n.length > 0,
        u = l.useMemo(
            () =>
                s && null == h
                    ? (0, a.jsx)(q, { numRows: 3 })
                    : d
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: P.$b,
                                    children: [
                                        (0, a.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, a.jsx)(Y, { text: c, onClick: o }),
                                    ],
                                }),
                                n.map((e, t) =>
                                    (0, a.jsx)(
                                        l.Fragment,
                                        {
                                            children: (0, a.jsx)(B, {
                                                ...e,
                                                onClaim: r,
                                                isLastItem: t === n.length - 1,
                                            }),
                                        },
                                        e.achievementIdentifier,
                                    ),
                                ),
                            ],
                        })
                      : null != h
                        ? null
                        : (0, a.jsxs)("div", {
                              className: i()(P.GN, P.AZ),
                              children: [
                                  (0, a.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: F.intl.string(M.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: F.intl.string(M.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, d, t, c, o, n, h, r],
        ),
        m = l.useMemo(
            () =>
                null == h
                    ? null
                    : (0, a.jsx)("div", {
                          className: i()(P.re, { [P.Oi]: d }),
                          children: (0, a.jsx)(L.w, { ...h, children: h.message }),
                      }),
            [h, d],
        );
    return (0, a.jsxs)("div", { className: P.E6, "aria-busy": s, children: [m, u] });
}
function $(e) {
    let { onQuestsClick: t, onShopClick: n } = e;
    return (0, a.jsxs)("div", {
        className: P.W,
        children: [
            (0, a.jsx)(A.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: b.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(A.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: S.U, type: "icon" },
                fullWidth: !0,
                onClick: n,
            }),
        ],
    });
}
function Z(e) {
    let {
            orbBalance: t,
            headerTagsContent: n,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
        } = e,
        [h, d] = l.useState(!1);
    return (0, a.jsxs)("div", {
        className: i()(P.ql, P.Ut),
        ref: o,
        children: [
            (0, a.jsx)(X, { orbBalance: t, headerTagsContent: n }),
            h ? null : s({ onClose: () => d(!0) }),
            r,
            c,
        ],
    });
}
var J = n(408278),
    ee = n(789645),
    et = n(696292),
    en = n(793574),
    ea = n(839534),
    el = n(75678),
    es = n(87719),
    ei = n(576761),
    er = n(617986),
    ec = n(758836),
    eo = n(202541);
function eh() {
    (0, ea.Cz)({ tab: ec.G2.ORBS, analyticsLocations: [], analyticsSource: en.A.ORBS_BALANCE_MENU });
}
function ed() {
    (0, er.mA)({ fromContent: et.u.ORBS_BALANCE_MENU });
}
var eu = n(600676);
function em(e) {
    let {
        title: t,
        imageUrl: n,
        imageAlt: l,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: c,
        buttonVariant: o,
        onCtaClick: h,
        onClose: d,
        className: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: i()(eu.Vm, u),
        children: [
            null != d
                ? (0, a.jsx)("div", {
                      className: eu.Fx,
                      children: (0, a.jsx)(J.K, {
                          icon: ee.P,
                          "aria-label": F.intl.string(F.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: d,
                      }),
                  })
                : null,
            null != n && (0, a.jsx)("img", { alt: l, src: n, className: eu.db }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(N.E, { variant: "text-md/bold", color: "text-default", className: eu.L8, children: t }),
                    null != s &&
                        (0, a.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: eu.Gd,
                            children: s,
                        }),
                    (0, a.jsx)(A.$, { text: r, size: "sm", icon: c, onClick: h, variant: o }),
                ],
            }),
        ],
    });
}
function eC(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(em, {
        title: F.intl.string(M.default.o6s7yg),
        imageUrl: n(105644),
        imageAlt: F.intl.string(M.default.qa1xyr),
        subTextDescription: F.intl.string(M.default.HACucK),
        buttonText: F.intl.string(M.default.o6s7yg),
        buttonIcon: { asset: S.U, type: "icon" },
        onCtaClick: eh,
        onClose: t,
    });
}
let eE = { asset: v.t, type: "icon" };
function eg(e) {
    let { onClose: t } = e,
        { nitroGatedOrbMultiplier: s } = (0, c.cf)([f.Ay], () => ({
            nitroGatedOrbMultiplier: f.Ay.nitroGatedOrbMultiplier,
        })),
        i = l.useCallback(() => {
            !(function (e) {
                let { analyticsLocations: t = [] } = e;
                (0, el.A)({ subscriptionTier: eo.pe.TIER_2, analyticsLocations: t });
            })({ analyticsLocations: [] });
        }, []),
        r = l.useMemo(() => F.intl.format(M.default["Ba/7wO"], { multiplier: s }), [s]);
    return null == s
        ? null
        : (0, a.jsx)(em, {
              title: F.intl.string(M.default.ZqCAos),
              imageUrl: n(780361),
              imageAlt: F.intl.string(M.default.FkfrRH),
              subTextDescription: r,
              buttonText: F.intl.string(M.default.U9UQJE),
              buttonIcon: eE,
              buttonVariant: "expressive",
              onCtaClick: i,
              onClose: t,
              className: eu.ml,
          });
}
var e_ = n(123576);
let ex = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: C.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: C.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: C.x.NONE,
        orbRewardAmount: 100,
    },
];
async function ef(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eA(e) {
    let { userHasPremium: t, onClose: n, orbBalance: l } = e;
    return t ? (null != l && l >= 1400 ? (0, a.jsx)(eC, { onClose: n }) : null) : (0, a.jsx)(eg, { onClose: n });
}
function ep(e) {
    let { text: t, onClick: n } = e;
    return null == n
        ? (0, a.jsx)("span", { className: e_.dW, children: t })
        : (0, a.jsx)(o.D, { className: i()(e_.dW, e_.or), onClick: n, children: t });
}
function ev(e) {
    let { userHasPremium: t, orbBalance: n, hasErrorMessage: l, isLoading: s, hasNoChallenges: i } = e;
    return (0, a.jsx)(Z, {
        orbBalance: n,
        headerTagsContent: t
            ? (0, a.jsx)(K, { text: F.intl.format(M.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return eA({ userHasPremium: t, onClose: a, orbBalance: n });
        },
        orbChallengesCard: (0, a.jsx)(Q, {
            isLoading: s,
            inlineNoticeProps: l
                ? {
                      type: "warning",
                      message: F.intl.format(M.default.ggLzeg, { underlineHook: (e) => (0, a.jsx)(ep, { text: e }) }),
                  }
                : null,
            title: F.intl.string(M.default.H6Ny8N),
            badgeText: F.intl.format(t ? M.default.OHLdjq : M.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : ex,
            onClaim: ef,
        }),
        orbWalletFooter: (0, a.jsx)($, { onQuestsClick: ed, onShopClick: eh }),
    });
}
function eN(e) {
    return (0, a.jsx)(ev, { ...e, hasNoChallenges: !0 });
}
function eL() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, u.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let n = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(K, { text: F.intl.format(M.default["04j3XV"], { orbAmount: t.reward_amount, days: n }) });
}
function eb() {
    return null != (0, c.bG)([m.A], () => m.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eL, {}) : null;
}
function eS() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t, refetch: n } = (0, _.z)({ shouldFetch: !0 }),
        s = (0, d.L)(eo.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: i, orbChallengesDisplayError: r } = (0, c.cf)([f.Ay], () => ({
            nitroGatedOrbMultiplier: f.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: f.Ay.orbChallengesDisplayError,
        })),
        o = l.useMemo(
            () =>
                null != r
                    ? {
                          type: "warning",
                          message:
                              r.errorType === f.EB.CLAIM_CHALLENGE
                                  ? F.intl.string(M.default.FYb5rH)
                                  : F.intl.format(M.default.ggLzeg, {
                                        underlineHook: (e) => (0, a.jsx)(ep, { text: e, onClick: n }),
                                    }),
                      }
                    : null,
            [r, n],
        ),
        h = l.useMemo(() => {
            if (!s)
                return () =>
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, es.x)() : (0, er.gC)(t, ei.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: i });
        }, [i, s]);
    return (0, a.jsx)(Q, {
        title: F.intl.string(M.default.H6Ny8N),
        isLoading: !t,
        inlineNoticeProps: o,
        challenges: e,
        onClaim: x.Xz,
        onClickBadge: h,
        badgeText: F.intl.format(s ? M.default.OHLdjq : M.default.WOMrJf, { multiplier: i }),
    });
}
function ej(e) {
    let { cardRef: t } = e,
        { balance: n } = (0, g.W)(),
        s = (0, E.H)({ location: "StatefulOrbWallet" }),
        i = (0, d.L)(eo.PremiumTypes.TIER_2);
    return (l.useEffect(() => {
        s && (0, x.eX)();
    }, [s]),
    s)
        ? (0, a.jsx)(Z, {
              cardRef: t,
              orbBalance: n,
              headerTagsContent: (0, a.jsx)(eb, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eA({ userHasPremium: i, onClose: t, orbBalance: n });
              },
              orbChallengesCard: (0, a.jsx)(eS, {}),
              orbWalletFooter: (0, a.jsx)($, { onQuestsClick: ed, onShopClick: eh }),
          })
        : null;
}
function eO(e) {
    let { cardRef: t, targetElementRef: n, shouldShow: s } = e,
        i = l.useCallback(() => (0, a.jsx)(ej, { cardRef: t }), [t]);
    return (0, a.jsx)(h.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: i,
        position: "bottom",
        align: "right",
        shouldShow: s,
        animation: h.Y.Animation.NONE,
        targetElementRef: n,
        children: () => null,
    });
}
