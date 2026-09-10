(s.d(t, { A: () => rl }), s(323874), s(14289), s(35956), s(205816));
var i,
    n,
    a,
    r,
    l,
    c,
    o = s(477900),
    d = s(582128),
    u = s(503698),
    m = s.n(u),
    x = s(806163),
    g = s(17928),
    f = s(289873),
    p = s(228366),
    h = s(73825),
    N = s(974544),
    A = s(107834),
    j = s(793574),
    b = s(688810),
    C = s(277984),
    E = s(86379),
    T = s(160946),
    R = s(545075),
    v = s(840251),
    I = s(688151);
let _ = new v.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var S = s(611924),
    P = s(75678),
    y = s(976860),
    D = s(351906),
    O = s(287809),
    M = s(295405),
    k = s(166403),
    L = s(174459),
    U = s(474090),
    G = s(881489),
    w = s(10392),
    B = s(945810);
let H = (0, B.mj)({
    name: "2026-05-nitro-home-header",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "treatment_a" },
        2: { treatment: "treatment_b" },
        3: { treatment: "treatment_c" },
    },
});
function F(e) {
    let t = H.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
let V = (0, B.mj)({
    kind: "user",
    name: "2026-07-nitro-home-header-followup",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function z(e) {
    let { enabled: t } = V.useConfig({ location: e });
    return t;
}
s(321073);
var W = s(554146),
    Y = s(269115),
    K = s(689175),
    X = s(131607),
    Z = s(961250),
    J = s(366505),
    Q = s(321191),
    q = s(903209),
    $ = s(927813),
    ee = s(107857),
    et = s(131168),
    es = s(482589),
    ei = s(511484),
    en = s(207119),
    ea = s(661531),
    er = s(717421),
    el = s(331322),
    ec = s(297264),
    eo = s(834730),
    ed = s(821609),
    eu = s(403581),
    em = s(815021),
    ex = s(576243),
    eg = s(49999),
    ef = s(375708),
    ep = s(862068);
function eh(e) {
    let { premiumSubscription: t, content: s, markAsDismissed: i } = e,
        { analyticsLocations: n } = (0, b.Ay)(j.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        a = (0, er.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, o.jsx)(en.animated.div, {
        className: ep.iE,
        style: a,
        children: (0, o.jsxs)("div", {
            className: ep.iJ,
            children: [
                (0, o.jsx)(ex.A, { size: 64, iconSize: 40, color: ea.A.colors.WHITE }),
                (0, o.jsxs)("div", {
                    className: ep.qX,
                    children: [
                        (0, o.jsxs)(el.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: ep.iQ,
                            children: [
                                (0, o.jsx)(ec.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: s.title,
                                }),
                                (0, o.jsx)(eo.E, { variant: "text-sm/medium", color: "text-muted", children: s.body }),
                            ],
                        }),
                        (0, o.jsx)(ed.$, {
                            variant: "expressive",
                            icon: eu.t,
                            size: "md",
                            text: s.cta,
                            onClick: function () {
                                (i(eg.i.TAKE_ACTION),
                                    (0, P.A)({
                                        subscription: t,
                                        initialPlanId: s.yearlyPlanId,
                                        analyticsLocations: n,
                                    }));
                            },
                        }),
                    ],
                }),
                (0, o.jsx)(em.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ef.intl.string(ef.t.WAI6xu),
                    onClick: () => i(eg.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eN = s(428331),
    eA = s(315629),
    ej = s(65470),
    eb = s(719126);
let eC = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, b.Ay)(s);
    return (0, o.jsx)(b.f5, {
        value: n,
        children: (0, o.jsxs)(eA.h, {
            className: m()(eb.kL, eb.pm, t),
            color: "purple",
            children: [
                (0, o.jsxs)("div", {
                    className: eb.FS,
                    children: [
                        (0, o.jsx)(ec.D, {
                            variant: "heading-xxl/bold",
                            className: eb.R_,
                            children: ef.intl.string(ef.t.Ve9Ge6),
                        }),
                        (0, o.jsx)(eo.E, { variant: "text-md/medium", children: ef.intl.string(ef.t.yQ06u1) }),
                        (0, o.jsx)("div", {
                            className: eb.SB,
                            children: (0, o.jsx)(ej.A, {
                                buttonTextOverride: ef.intl.string(ef.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, o.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eb._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eE = s(877624);
let eT =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eR(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: eT,
        srcSet: `${eT} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ev = s(502572),
    eI = s(192308),
    e_ = s(775602),
    eS = s(366999),
    eP = s(531260),
    ey = s(780964),
    eD = s(766075),
    eO = s(786300),
    eM = s(975571),
    ek = s(158045),
    eL = s(725018),
    eU = s(89366),
    eG = s(724651),
    ew = s(732280),
    eB = s(549996),
    eH = s(172218);
function eF() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, d.useState)(1),
        i = (0, d.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eH.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eV = s(287763);
let ez = function (e) {
    let { text: t } = e;
    return (0, o.jsx)("div", {
        className: eV.i,
        children: (0, o.jsx)(eo.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var eW = s(371764),
    eY = s(103411),
    eK = s(778712),
    eX = s(97808),
    eZ = s(590251),
    eJ = s(144165),
    eQ = s(854627),
    eq = s(427262),
    e$ = (((i = {}).ORBS = "orbs"), (i.DISCOUNT = "discount"), i);
let e0 = (0, B.mj)({
    name: "2026-07-premium-referral-incentives",
    kind: "user",
    defaultConfig: { referralRewardType: null, useAltReferralCardArt: !1 },
    variations: {
        0: { referralRewardType: null, useAltReferralCardArt: !1 },
        1: { referralRewardType: "orbs", useAltReferralCardArt: !1 },
        2: { referralRewardType: "discount", useAltReferralCardArt: !1 },
        3: { referralRewardType: "orbs", useAltReferralCardArt: !0 },
        4: { referralRewardType: "discount", useAltReferralCardArt: !0 },
    },
});
var e1 = s(851746),
    e2 = s(326084),
    e3 = s(664654);
s(232198);
var e7 = s(652215);
function e6() {
    let e,
        t,
        s,
        { location: i = "PremiumNitroHomeReferralBanner" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { referralSentUsers: n } = (0, e3.J)(),
        a = (0, g.bG)([e1.A], () => e1.A.getRecipientStatus()),
        r = !1 !== (0, g.bG)([e1.A], () => e1.A.getHasEligibleFriends()),
        {
            isEligibleForIncentive: l,
            referralRewardType: c,
            useAltReferralCardArt: o,
        } = (function (e) {
            let t,
                { location: s } = e,
                i = (0, eY.m)(!0),
                { referralRewardType: n, useAltReferralCardArt: a } = {
                    referralRewardType: (t = e0.useConfig({ location: s })).referralRewardType,
                    useAltReferralCardArt: t.useAltReferralCardArt,
                    isInReferralIncentivesTreatment: null != t.referralRewardType,
                },
                r = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
                l = null != r && !r.isPurchasedExternally,
                c = null != r && r.hasPremiumNitroMonthly,
                o = !0 === i && n === e$.ORBS,
                d = !0 === i && n === e$.DISCOUNT && l && c;
            return { isEligibleForIncentive: o || d, referralRewardType: n, useAltReferralCardArt: a };
        })({ location: i }),
        d = l ? c : null,
        u =
            ((e = 0),
            (t = 0),
            (s = 0),
            a.forEach((i) => {
                i === e2.aK.REFERRER_REWARD_GRANTED
                    ? (e++, t++, s++)
                    : i === e2.aK.CONVERTED
                      ? (t++, s++)
                      : i === e2.aK.REDEEMED && s++;
            }),
            { numRewardGranted: e, numConverted: t, numRedeemed: s, numSent: a.size }),
        m = a.size === e3.Z,
        x = (function (e, t, s) {
            let i = eM.A.getArticleURL(e7.MVz.REFERRAL_PROGRAM);
            if (null != s)
                return t.numRewardGranted === e3.Z
                    ? s === e$.ORBS
                        ? ef.intl.format(ef.t.OluhLp, { helpdeskArticle: i })
                        : ef.intl.format(ef.t["8BYihN"], { helpdeskArticle: i })
                    : t.numSent === e3.Z
                      ? s === e$.ORBS
                          ? ef.intl.format(ef.t["1aV1j9"], { helpdeskArticle: i })
                          : ef.intl.format(ef.t.QNrPuS, { helpdeskArticle: i })
                      : e
                        ? s === e$.ORBS
                            ? ef.intl.format(ef.t.cfE0uG, { numOrbs: 500, helpdeskArticle: i })
                            : ef.intl.format(ef.t["+fcvlI"], { helpdeskArticle: i })
                        : ef.intl.format(ef.t["a0+Jwv"], { helpdeskArticle: i });
            return e
                ? t.numSent === e3.Z
                    ? t.numRedeemed === e3.Z
                        ? ef.intl.format(ef.t["1aEjsH"], { helpdeskArticle: i })
                        : ef.intl.format(ef.t["+u3AOO"], { helpdeskArticle: i })
                    : ef.intl.format(ef.t["omMr+V"], { helpdeskArticle: i })
                : ef.intl.format(ef.t["zWhX/Q"], { helpdeskArticle: i });
        })(r, u, d),
        f =
            d === e$.ORBS
                ? ef.intl.string(ef.t.tAlkl4)
                : d === e$.DISCOUNT
                  ? ef.intl.formatToPlainString(ef.t["/JJ9I5"], { discountPercent: 30 })
                  : ef.intl.string(ef.t.USo4s7);
    return {
        referralSentUsers: n,
        nReferralsSent: u.numSent,
        hasEligibleFriends: r,
        allSent: m,
        headingText: f,
        bodyText: x,
        referralStatus: u,
        isEligibleForIncentive: l,
        referralIncentiveRewardType: d,
        useAltReferralCardArt: o,
    };
}
var e8 = s(212737),
    e5 = s(162907);
let e9 =
        "https://cdn.discordapp.com/assets/content/7932c6a6c499ae3ae7d3c3bc398778b62517d38df2c179320dc872062c73d5e9.png",
    e4 =
        "https://cdn.discordapp.com/assets/content/23f043bae7978056c72b82e7a4af6618d2fdb874c40857f580b0978b3b48ab0b.png",
    te =
        "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function tt(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    (L.default.track(e7.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eI.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, o.jsx)(e, { ...s, startingScreen: t });
        }));
}
function ts(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eQ.A)({ userId: t.id, size: eK._3.SIZE_24 });
    return (0, o.jsx)(
        eX.eu,
        { className: e5.bj, src: s, "aria-label": (0, eq.mG)(t), size: eK._3.SIZE_24, ...i },
        t.id,
    );
}
function ti(e) {
    let { slotIndex: t } = e;
    return (0, o.jsx)("div", { className: e5.p, children: t });
}
function tn(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, o.jsx)("div", {
        className: m()(e5.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e3.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, o.jsx)(ts, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, o.jsx)(ti, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let ta = { width: 142, height: 80 },
    tr = { width: 90, height: 60 };
function tl(e) {
    let {
            nReferralsSent: t,
            imageSize: s = 93,
            backgroundClassName: i,
            ringClassName: n,
            referralRewardType: a = null,
            useAltReferralCardArt: r = !1,
        } = e,
        {
            src: l,
            srcSet: c,
            dimensions: d,
        } = r
            ? a === e$.ORBS
                ? {
                      src: e4,
                      srcSet: `${e4} 1x, https://cdn.discordapp.com/assets/content/5189110776398f40547893b913eee3ec5107abb10086a4c587a072bc001a04e6.png 2x`,
                      dimensions: ta,
                  }
                : a === e$.DISCOUNT
                  ? {
                        src: e9,
                        srcSet: `${e9} 1x, https://cdn.discordapp.com/assets/content/945caab9e3f5f20d5f81c3ee82c9e83ef6be4e2ca5690550a6a44582fa6aadc3.png 2x`,
                        dimensions: tr,
                    }
                  : { src: te, srcSet: void 0, dimensions: null }
            : { src: te, srcSet: void 0, dimensions: null },
        u = d?.width ?? s,
        m = d?.height ?? s;
    return (0, o.jsx)(eZ.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e5.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e5.e0,
        overlayClassName: t === e3.Z ? e5.ys : void 0,
        children:
            null != c
                ? (0, o.jsx)("img", { src: l, srcSet: c, alt: "", role: "presentation", width: u, height: m })
                : (0, o.jsx)(eJ._, { src: l, height: m, width: u, zoomable: !1 }),
    });
}
function tc(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e6();
    return (0, o.jsxs)("div", {
        className: m()(e5.kL, t),
        children: [
            (0, o.jsx)("div", { className: e5.G3, children: (0, o.jsx)(tl, { nReferralsSent: i }) }),
            (0, o.jsxs)("div", {
                className: e5.IH,
                children: [
                    (0, o.jsx)(tn, { referralSentUsers: s, className: e5.GV }),
                    (0, o.jsxs)("div", {
                        className: e5.n4,
                        children: [
                            (0, o.jsx)(ec.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ef.intl.string(ef.t.USo4s7),
                            }),
                            (0, o.jsx)(eo.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, o.jsx)(ed.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: ef.intl.string(ef.t.Lm2nFc),
                        onClick: () =>
                            tt({ startingScreen: e8.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var to = s(792656),
    td = s(536637),
    tu = s.n(td),
    tm = s(496431),
    tx = s(850292);
let tg = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, tm.A)(tu()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: r, minutes: l, seconds: c } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: c, unitType: "seconds" },
        ];
    return (0, o.jsxs)("div", {
        className: m()(tx.Xl, s, { [tx.a3]: "text-lg/bold" === i }),
        children: [
            (0, o.jsx)(eo.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ef.intl.string(ef.t["/ARFVE"]),
            }),
            (0, o.jsx)("div", {
                className: tx.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsxs)(
                                    "div",
                                    {
                                        className: tx.bh,
                                        children: [
                                            (0, o.jsxs)("div", {
                                                className: tx.kB,
                                                children: [
                                                    (0, o.jsx)("div", {
                                                        className: tx.B2,
                                                        children: (0, o.jsx)(eo.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, o.jsx)("div", {
                                                        className: tx.B2,
                                                        children: (0, o.jsx)(eo.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(eo.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return ef.intl.string(ef.t.ixASa2);
                                                        case "hours":
                                                            return ef.intl.string(ef.t["8sNvNn"]);
                                                        case "minutes":
                                                            return ef.intl.string(ef.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return ef.intl.string(ef.t.JhaiLW);
                                                        default:
                                                            return "";
                                                    }
                                                })(e.unitType),
                                            }),
                                        ],
                                    },
                                    e.unitType,
                                ),
                                !t &&
                                    (0, o.jsx)(eo.E, {
                                        className: tx.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === d.length - 1, i),
                ),
            }),
        ],
    });
};
var tf = s(473702),
    tp = s(609425),
    th = s(660184),
    tN = s(938767);
function tA() {
    let e = (0, g.bG)([O.default], () => O.default.getCurrentUser()),
        t = (0, tp.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eQ.A)({ userId: e?.id, size: eK._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eq.mG)(e);
    return (0, o.jsxs)("div", {
        className: tN.kL,
        children: [
            (0, o.jsx)("div", {
                className: tN.my,
                children: (0, o.jsx)(eX.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eK._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, o.jsx)("div", { className: tN.QC, children: (0, o.jsx)(th.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tj = s(707554),
    tb = s(628154);
let tC = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, o.jsx)(tj.F, {
        forceLevel: 1,
        children: (0, o.jsx)(ec.D, { className: m()(tb.w, t, i && tb.n), variant: n, color: s, children: a }),
    });
};
var tE = s(508770),
    tT = s(478016),
    tR = s(318254),
    tv = s(626031),
    tI = s(957457);
function t_(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === e$.ORBS
          ? (0, o.jsx)(tS, { nRewardsGranted: t, className: i })
          : s === e$.DISCOUNT
            ? (0, o.jsx)(tP, { nRewardsGranted: t, className: i })
            : null;
}
function tS(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 500 * t,
        [n, a] = d.useState(0);
    return (
        d.useEffect(() => {
            a(i);
        }, [i]),
        (0, o.jsxs)(el.B, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            fullWidth: !1,
            className: s,
            children: [
                (0, o.jsxs)("div", {
                    className: tI.u,
                    "aria-label": String(i),
                    children: [
                        (0, o.jsx)(tR.C, { size: "xs", color: ea.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, o.jsx)(tv.t, {
                            value: n,
                            onValueChange: e7.tEg,
                            onValueReached: e7.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, o.jsx)(eo.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ef.intl.string(ef.t.UhguER),
                }),
            ],
        })
    );
}
function tP(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, o.jsxs)(el.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": ef.intl.formatToPlainString(ef.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, o.jsx)(tT.U, { size: "xs", color: ea.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, o.jsx)(eo.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: ef.intl.format(ef.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var ty = s(558992);
function tD(e) {
    let { className: t } = e,
        {
            referralSentUsers: s,
            nReferralsSent: i,
            hasEligibleFriends: n,
            allSent: a,
            headingText: r,
            bodyText: l,
            referralStatus: c,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: u,
            useAltReferralCardArt: x,
        } = e6({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, o.jsxs)("div", {
        className: m()(ty.kL, t),
        children: [
            (0, o.jsx)("div", {
                className: ty.G3,
                children: (0, o.jsx)(tl, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: ty.HP,
                    ringClassName: ty.pZ,
                    referralRewardType: u,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, o.jsxs)("div", {
                className: m()(ty.IH, d && ty.zD),
                children: [
                    d &&
                        (0, o.jsx)("div", {
                            className: ty.aZ,
                            children: (0, o.jsx)(tE.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, o.jsxs)("div", {
                        className: ty.n4,
                        children: [
                            (0, o.jsx)(ec.D, {
                                variant: d ? "heading-lg/bold" : "heading-lg/semibold",
                                color: "text-strong",
                                children: r,
                            }),
                            (0, o.jsx)(eo.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: l,
                            }),
                        ],
                    }),
                    d
                        ? (0, o.jsxs)("div", {
                              className: ty.Wp,
                              children: [
                                  (0, o.jsx)(tn, { referralSentUsers: s }),
                                  (0, o.jsx)(t_, { nRewardsGranted: c.numRewardGranted, referralRewardType: u }),
                              ],
                          })
                        : (0, o.jsx)(tn, { referralSentUsers: s, className: ty.t7 }),
                ],
            }),
            (0, o.jsx)(ed.$, {
                variant: "primary",
                disabled: !1 === n || !0 === a,
                text: ef.intl.string(ef.t.Lm2nFc),
                onClick: () =>
                    tt({ startingScreen: e8.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tO = s(702841),
    tM = s(676279),
    tk = s(396583),
    tL = (((n = {}).SINE = "sine"), (n.COSINE = "cosine"), n),
    tU = (((a = {}).UP = "up"), (a.DOWN = "down"), a);
let tG = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: r = !1,
            animationSpeedScale: l = 1,
            children: c,
        } = e,
        u = (0, er.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * l }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, d.useState)(1),
        f = (0, er.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * l },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [p, h] = (0, d.useState)(1),
        N = (0, er.z)(
            null != t
                ? {
                      from: { blur: p > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: p > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * l },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, d.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * l), [l]),
        [j, b] = (0, d.useState)(0),
        [C, E] = (0, d.useState)(1),
        T = (0, er.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tk.A)(() => {
        (b(C * (0.5 * Math.random() * 5 + 2.5)), E((e) => -1 * e));
    }, A),
    r)
        ? c
        : (0, o.jsx)(en.animated.div, {
              style: {
                  transform: u.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = m(e * Math.PI * 2) * i.range,
                          s = 0;
                      if (null != n) {
                          let e = n.range * (1 - n.containerVisibilityPercentage);
                          s = "up" === n.pathDirection ? -e : e;
                      }
                      return `translateY(${t + s}px)`;
                  }),
                  translateX: a ? T.xOffset.to((e) => `${e}px`) : 0,
                  scale: f.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: c,
          });
};
var tw = s(382168);
let tB = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: r,
        starContainerClassName: l,
        boltAssetClassName: c,
        carAssetClassName: d,
        hammerAssetClassName: u,
        keyAssetClassName: x,
        starAssetClassName: g,
        animationSpeedScale: f = 1,
        blurScale: p = 1,
    } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            null != i &&
                (0, o.jsx)("div", {
                    className: m()(tw.nJ, i),
                    children: (0, o.jsx)(tG, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tU.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, o.jsx)("div", {
                    className: m()(tw.IN, n),
                    children: (0, o.jsx)(tG, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tU.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, o.jsx)("div", {
                    className: m()(tw.Gj, a),
                    children: (0, o.jsx)(tG, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tU.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: u,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, o.jsx)("div", {
                    className: m()(tw.FV, r),
                    children: (0, o.jsx)(tG, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tU.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, o.jsx)("div", {
                    className: m()(tw.E1, l),
                    children: (0, o.jsx)(tG, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tL.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tU.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var tH = s(607470);
let tF =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tV = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: r = 1,
        } = e;
        return s
            ? (0, o.jsx)("div", {
                  className: n,
                  children: (0, o.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, o.jsx)("div", {
                  className: n,
                  children: (0, o.jsx)(tG, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tL.SINE },
                      parallaxAnimationData: {
                          pathDirection: tU.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: r,
                      children: t
                          ? (0, o.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, o.jsx)(
                                tH.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, o.jsx)("source", { src: tF }),
                                },
                                tF,
                            ),
                  }),
              });
    },
    tz = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: r,
                keyContainerClassName: l,
                starContainerClassName: c,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: f = 1,
            } = e,
            p = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
            h = (0, tM.TM)();
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(tV, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, o.jsx)(tB, {
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: r,
                    keyContainerClassName: l,
                    starContainerClassName: c,
                    boltAssetClassName: d,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: f,
                }),
            ],
        });
    };
var tW = s(942663);
let tY = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, o.jsx)(tz, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: m()(tW.wG, s && tW.Vx),
        flyingWumpusAssetClassName: m()(tW.lu, s && tW.ov),
        boltContainerClassName: m()(tW.nJ, s && tW.Wc),
        hammerContainerClassName: m()(tW.Gj, s && tW.XA),
        keyContainerClassName: m()(tW.FV, s && tW.oZ),
        starContainerClassName: m()(tW.E1, s && tW.LN),
        boltAssetClassName: m()(tW.j7, s && tW.QN),
        hammerAssetClassName: m()(tW.Wv, s && tW.B9),
        keyAssetClassName: m()(tW.rs, s && tW.I1),
        starAssetClassName: m()(tW.OY, s && tW.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tK = (((r = {}).MORNING = "morning"), (r.AFTERNOON = "afternoon"), (r.EVENING = "evening"), r),
    tX = s(454273);
let tZ = function (e) {
    let t,
        s,
        {
            className: i,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: r,
            shouldShowReferralProgressBar: l,
            marketingBanner: c,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: u, visibilityPercentage: x } = eF(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion)),
        f =
            ((t = { [tK.MORNING]: ef.t["Wvc/I+"], [tK.AFTERNOON]: ef.t["d+0STx"], [tK.EVENING]: ef.t.CqsxKI }),
            ef.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tK.MORNING
                        : s >= 12 && s < 17
                          ? tK.AFTERNOON
                          : tK.EVENING
                ],
            )),
        p = c ?? (l ? (0, o.jsx)(tD, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tX.kL, tX.Eg, i),
        ref: r,
        children: (0, o.jsxs)("div", {
            className: m()(tX.W2, tX.HQ),
            ref: u,
            children: [
                (0, o.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    className: tX.ZU,
                    children: [
                        a && n,
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, o.jsxs)(el.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, o.jsx)(tC, {
                                            className: tX.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: f,
                                        }),
                                        (0, o.jsx)(tA, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, o.jsx)("div", {
                    className: tX.y3,
                    children: (0, o.jsx)(tY, { containerVisibilityPercentage: x, compact: null == p }),
                }),
            ],
        }),
    });
};
var tJ = s(924864);
let tQ =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tq = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)("div", {
                    className: tJ.BI,
                    children: (0, o.jsx)(tG, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tL.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tU.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, o.jsx)("img", { src: tQ, alt: "", className: tJ.Q }),
                    }),
                }),
                (0, o.jsx)(tB, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tJ.Gj,
                    keyContainerClassName: tJ.FV,
                    starContainerClassName: tJ.E1,
                    hammerAssetClassName: tJ.Wv,
                    keyAssetClassName: tJ.rs,
                    starAssetClassName: tJ.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var t$ = s(549926);
let t0 = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(tz, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: t$.wG,
        flyingWumpusAssetClassName: t$.lu,
        boltContainerClassName: t$.nJ,
        hammerContainerClassName: t$.Gj,
        keyContainerClassName: t$.FV,
        starContainerClassName: t$.E1,
        boltAssetClassName: t$.j7,
        hammerAssetClassName: t$.Wv,
        keyAssetClassName: t$.rs,
        starAssetClassName: t$.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var t1 = s(499126);
function t2(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(tz, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: t1.wG,
        flyingWumpusAssetClassName: t1.lu,
        boltContainerClassName: t1.nJ,
        hammerContainerClassName: t1.Gj,
        keyContainerClassName: t1.FV,
        starContainerClassName: t1.E1,
        boltAssetClassName: t1.j7,
        hammerAssetClassName: t1.Wv,
        keyAssetClassName: t1.rs,
        starAssetClassName: t1.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let t3 = function () {
    let e = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion);
    return (0, o.jsx)(tB, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: t1.cI,
        hammerContainerClassName: t1.qg,
        keyContainerClassName: t1.h2,
        boltContainerClassName: t1.Bz,
        starAssetClassName: t1.ks,
        hammerAssetClassName: t1.GY,
        keyAssetClassName: t1.p4,
        boltAssetClassName: t1.vy,
    });
};
var t7 = s(202541);
function t6(e, t, i) {
    (0, eI.openModalLazy)(async () => {
        let { PremiumBrandRefreshSubscriptionCancellationModal: n } = await Promise.all([
            s.e("489361"),
            s.e("227853"),
            s.e("470126"),
            s.e("162775"),
            s.e("128804"),
            s.e("60882"),
            s.e("71151"),
            s.e("286615"),
            s.e("70866"),
            s.e("311541"),
            s.e("472847"),
            s.e("870088"),
            s.e("989649"),
            s.e("853458"),
            s.e("718368"),
            s.e("258407"),
            s.e("153302"),
            s.e("758053"),
            s.e("836576"),
            s.e("983513"),
            s.e("216806"),
            s.e("310734"),
            s.e("348567"),
            s.e("452075"),
            s.e("900277"),
            s.e("127962"),
            s.e("364827"),
            s.e("907167"),
            s.e("861060"),
            s.e("952372"),
            s.e("959880"),
            s.e("910486"),
            s.e("56366"),
            s.e("797595"),
            s.e("641248"),
            s.e("544571"),
            s.e("40291"),
            s.e("523276"),
            s.e("948720"),
            s.e("729963"),
            s.e("830938"),
            s.e("392075"),
            s.e("102328"),
            s.e("174016"),
            s.e("790417"),
            s.e("50097"),
            s.e("76027"),
            s.e("594161"),
            s.e("435432"),
            s.e("80347"),
            s.e("680166"),
        ]).then(s.bind(s, 293061));
        return (s) => (0, o.jsx)(n, { ...s, analyticsLocations: e, initialStep: i, premiumSubscription: t });
    });
}
function t8(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, G.Zb)(t);
    return (0, o.jsx)("div", {
        className: m()(tX.kL, s),
        ref: i,
        children: (0, o.jsxs)("div", {
            className: tX.ap,
            children: [
                (0, o.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, o.jsx)(ez, { text: ef.intl.string(ef.t.yhldRB) }),
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: 12,
                            className: tX.rG,
                            children: [
                                (0, o.jsx)(tC, { children: ef.intl.format(ef.t.FwjP6W, { days: n }) }),
                                (0, o.jsx)(eo.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: ef.intl.string(ef.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, o.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, o.jsx)(to.A, {
                                    size: "md",
                                    buttonTextOverride: ef.intl.string(ef.t["2+luBl"]),
                                    iconOverride: eu.t,
                                    variantOverride: "expressive",
                                }),
                                (0, o.jsx)(ed.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ef.intl.string(ef.t.Af7ye6),
                                    onClick: () => (0, eD.openUserSettings)(ey.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: tX.Hk,
                    children: [(0, o.jsx)(eR, { alt: "", width: "100%", height: "auto" }), (0, o.jsx)(t3, {})],
                }),
            ],
        }),
    });
}
function t5(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, G.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = eF(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion));
    return (0, o.jsx)("div", {
        className: m()(tX.kL, s),
        ref: i,
        children: (0, o.jsxs)("div", {
            className: tX.Gs,
            ref: a,
            children: [
                (0, o.jsxs)(el.B, {
                    align: "start",
                    gap: 24,
                    className: tX.E2,
                    children: [
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, o.jsx)(ez, { text: ef.intl.string(ef.t.yhldRB) }),
                                (0, o.jsx)(tC, { children: ef.intl.format(ef.t.FwjP6W, { days: n }) }),
                                (0, o.jsx)("div", {
                                    className: tX.X8,
                                    children: (0, o.jsx)(eo.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ef.intl.string(ef.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, o.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tX.oF,
                            children: [
                                (0, o.jsx)(to.A, {
                                    size: "md",
                                    buttonTextOverride: ef.intl.string(ef.t["2+luBl"]),
                                    iconOverride: eu.t,
                                    variantOverride: "expressive",
                                }),
                                (0, o.jsx)(ed.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ef.intl.string(ef.t.Af7ye6),
                                    onClick: () => (0, eD.openUserSettings)(ey.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, o.jsx)("div", { className: tX.Tg, children: (0, o.jsx)(t2, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function t9(e) {
    let {
            className: t,
            buttonVisibilityRef: s,
            userDiscountOffer: i,
            discountedPrice: n,
            premiumSubscription: a,
            analyticsLocations: r,
            headingTop: l,
            showPill: c,
            shouldShowReferralProgressBar: d,
            marketingBanner: u,
        } = e,
        { visibilityPercentageRef: x, visibilityPercentage: f } = eF(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion)),
        p = u ?? (d ? (0, o.jsx)(tD, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tX.kL, tX.Eg, t),
        ref: s,
        children: (0, o.jsxs)("div", {
            className: m()(tX.W2, tX.HQ),
            ref: x,
            children: [
                (0, o.jsxs)(el.B, {
                    align: "start",
                    gap: 32,
                    className: m()(tX.ZU, tX.GW),
                    children: [
                        c && l,
                        null != i.expiresAt &&
                            (0, o.jsx)(tg, { expiresAt: i.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, o.jsxs)(el.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, o.jsx)(tC, {
                                    children: ef.intl.format(ef.t["3yZP0G"], { percent: i.discount.amount }),
                                }),
                                null != n &&
                                    (0, o.jsx)(eo.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ef.intl.format(ef.t["3Q4wCy"], {
                                            discountedPrice: n,
                                            billingPeriod: (0, ek.Ke)(i.discount.intervalType),
                                            numMonths: i.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, o.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, o.jsx)(ed.$, {
                                    variant: "expressive",
                                    icon: eu.t,
                                    size: "md",
                                    text: ef.intl.string(ef.t.zrCzVB),
                                    onClick: () => t6(r, a, tf.g.CONFIRM_DISCOUNT),
                                }),
                                (0, o.jsx)(ej.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: ef.intl.string(ef.t["3KomGa"]),
                                }),
                            ],
                        }),
                        p,
                    ],
                }),
                (0, o.jsx)("div", {
                    className: m()(tX.y3, tX.Xx),
                    children: (0, o.jsx)(t0, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function t4(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingText: n,
            headingTop: a,
            showPill: r,
            shouldShowChurnVariant: l,
            premiumSubscription: c,
            userDiscountOffer: d,
            discountedPrice: u,
            buttonVisibilityRef: x,
        } = st(),
        { isInNitroHomeHeaderTreatment: f } = F("subscriber_home_hero"),
        p = z("subscriber_home_hero"),
        { analyticsLocations: h } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        N = (0, eB.c)(eE.C.MARKETING_PAGE_BANNER),
        A = (0, eL.cg)(),
        C = null != c && c.status === e7.Dmq.CANCELED,
        E = f && !C,
        T = null;
    null != N &&
        "marketingPageBanner" === N.properties.properties.oneofKind &&
        (T = (0, o.jsx)(eW.x, {
            componentId: N.id,
            promotionId: N.promotionId,
            promotionBannerMarketingComponentFields: N.properties.properties.marketingPageBanner,
        }));
    let R = T;
    null == R && i && !E && (R = (0, o.jsx)(tc, {}));
    let v = (0, ew.V)(),
        I = (0, eG.O)(),
        _ = (0, ei.U9)(I, t7.pe.TIER_2) ? t7.pe.TIER_2 : void 0,
        S = null != c && c.status !== e7.Dmq.ACCOUNT_HOLD && c.hasAnyPremiumNitro,
        P = (0, eP.A)(),
        y = P.isFractionalPremiumActive && !S && null == R && !l,
        { visibilityPercentageRef: D, visibilityPercentage: O } = eF(!(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion));
    if (s)
        return p
            ? (0, o.jsx)(t5, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x })
            : (0, o.jsx)(t8, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: x });
    if (E) {
        let e = y
            ? (0, o.jsxs)("div", {
                  className: tX.UJ,
                  children: [
                      (0, o.jsx)(to.A, {
                          size: "md",
                          hasActivePromotion: !!A,
                          subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
                      }),
                      (0, o.jsx)(ej.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: ef.intl.string(ef.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, o.jsx)(tZ, {
            className: t,
            headingTop: a,
            showPill: r,
            buttonVisibilityRef: x,
            shouldShowReferralProgressBar: i,
            marketingBanner: T,
            heroButtons: e,
        });
    }
    return p && C
        ? l && null != d && null != c
            ? (0, o.jsx)(t9, {
                  className: t,
                  buttonVisibilityRef: x,
                  userDiscountOffer: d,
                  discountedPrice: u,
                  premiumSubscription: c,
                  analyticsLocations: h,
                  headingTop: a,
                  showPill: r,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
            : (0, o.jsx)(tZ, {
                  className: t,
                  headingTop: a,
                  showPill: r,
                  buttonVisibilityRef: x,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
        : (0, o.jsx)("div", {
              className: m()(tX.kL, t),
              "data-testid": "subscriber-nitro-home-hero-header",
              ref: x,
              children: (0, o.jsxs)("div", {
                  className: tX.Qs,
                  ref: D,
                  children: [
                      r && a,
                      (0, o.jsxs)("div", {
                          className: tX.N1,
                          children: [
                              (0, o.jsx)(tq, { containerVisibilityPercentage: O }),
                              l &&
                                  d?.expiresAt != null &&
                                  (0, o.jsx)(tg, { expiresAt: d.expiresAt.toISOString(), className: tX.IZ }),
                              (0, o.jsx)(tC, {
                                  children:
                                      l && null != d
                                          ? ef.intl.format(ef.t["3yZP0G"], { percent: d.discount.amount })
                                          : n,
                              }),
                              l &&
                                  null != d &&
                                  null != u &&
                                  (0, o.jsx)(eo.E, {
                                      className: tX.jG,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: ef.intl.format(ef.t["3Q4wCy"], {
                                          discountedPrice: u,
                                          billingPeriod: (0, ek.Ke)(d.discount.intervalType),
                                          numMonths: d.discount.intervalCount,
                                      }),
                                  }),
                          ],
                      }),
                      (0, o.jsxs)("div", {
                          className: y || l ? tX.UJ : void 0,
                          children: [
                              y &&
                                  (0, o.jsx)(to.A, {
                                      size: "md",
                                      hasActivePromotion: !!A,
                                      subscriptionTier: v?.subscriptionTrial?.skuId ?? _,
                                  }),
                              l &&
                                  null != c &&
                                  (0, o.jsx)(ed.$, {
                                      variant: "expressive",
                                      icon: eu.t,
                                      size: "md",
                                      text: ef.intl.string(ef.t.zrCzVB),
                                      onClick: () => t6(h, c, tf.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, o.jsx)(ej.A, {
                                  variant: y || l ? "secondary" : "expressive",
                                  size: "md",
                                  buttonTextOverride: ef.intl.string(ef.t["3KomGa"]),
                              }),
                          ],
                      }),
                      R,
                  ],
              }),
          });
}
let [se, st] = (0, eO.A)(),
    ss = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
            r = (0, G.ds)(),
            l = (0, eU.QQ)(),
            c = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            d = null != c && c.status === e7.Dmq.CANCELED && null != i,
            u = l && !d,
            m = ef.intl.string(ef.t.qYKftX),
            x = (0, eY.m)(),
            f = ef.intl.string(ef.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, eP.A)(),
            N = (0, eS.Ay)(h, eS.yE.CREDITS_ENDS_IN),
            A = null;
        if (p === t7.xc.NONE || r) A = (0, o.jsx)(ez, { text: m });
        else {
            u = !0;
            let e = ef.intl.format(ef.t["yR+oDD"], {
                helpCenterLink: eM.A.getArticleURL(e7.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            A = (0, o.jsx)(ev.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tX.YL,
                position: "right",
                children: (e) =>
                    (0, o.jsx)("div", {
                        ...e,
                        className: tX.V_,
                        children: (0, o.jsx)("div", { className: tX.eL, children: (0, o.jsx)(ez, { text: N }) }),
                    }),
            });
        }
        return (0, o.jsx)(b.f5, {
            value: a,
            children: (0, o.jsx)(se.Provider, {
                value: {
                    headingText: f,
                    headingTop: A,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: c,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, o.jsx)(t4, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var si = s(820284),
    sn = s(742589),
    sa = s(392943),
    sr = s(285373),
    sl = s(603202),
    sc = s(673992);
let so = function () {
    return (0, o.jsx)(si.A, {
        section: e7.JJy.NAVIGATION,
        children: (0, o.jsx)(sn.A, {
            className: m()(sl.TQ, sc.C$),
            transparent: !0,
            role: "navigation",
            children: (0, o.jsxs)("div", {
                className: sl.Wc,
                children: [
                    (0, o.jsxs)("div", {
                        className: sc.wk,
                        children: [
                            (0, o.jsx)(eu.t, { colorClass: sc.tr }),
                            (0, o.jsx)("span", {
                                role: "img",
                                "aria-label": ef.intl.string(ef.t.Ipxkog),
                                className: sc.Ss,
                                children: (0, o.jsx)(sa.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: sl.MQ,
                        children: [
                            (0, o.jsx)(sr.l, { size: "sm", location: j.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, o.jsx)(ej.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var sd = s(325499),
    su = s(562708),
    sm = s(885574),
    sx = s(43990),
    sg = s(993077),
    sf = s(139286),
    sp = s(872725),
    sh = s(920050),
    sN = s(51965),
    sA = s(375776),
    sj = s(727811),
    sb = s(222652),
    sC = s(553875),
    sE = s(934353);
function sT(e) {
    let { openRewardModal: t } = e,
        s = (0, sb.z)();
    if (s.kind === sb.N.SUBSCRIBE)
        return (0, o.jsxs)("div", {
            className: sE.R$,
            children: [
                (0, o.jsx)(to.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: t7.pe.TIER_2,
                }),
                (0, o.jsx)(ed.$, { variant: "secondary", size: "md", text: ef.intl.string(ef.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === sj.P.CLAIMED
            ? { text: ef.intl.string(sC.default.Plwzgf) }
            : { text: ef.intl.string(ef.t.hvVgAZ) };
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: sE.R$,
                children: [
                    (0, o.jsx)(sN.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, o.jsx)(ed.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === sj.P.CLAIM_IN_PROGRESS &&
                (0, o.jsxs)("div", {
                    className: sE.ed,
                    children: [
                        (0, o.jsx)(sm.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ef.intl.string(sC.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sR(e) {
    let { glowing: t = !1 } = e;
    (0, sf.A)({
        type: su.ImpressionTypes.VIEW,
        name: su.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: sh.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, b.Ay)(j.A.CROISSANT_PREMIUM_HERO_CARD),
        n = d.useCallback(() => {
            (0, eI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, o.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, o.jsx)(sx.N, {
        theme: e7.NJ8.DARK,
        children: (e) =>
            (0, o.jsx)(b.f5, {
                value: i,
                children: (0, o.jsx)("div", {
                    className: m()(e, sE.kL),
                    children: (0, o.jsx)(sp.A, {
                        cardType: sg.s.CUSTOM,
                        cardClassName: sE.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, o.jsxs)("div", {
                            className: sE.XF,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: sE.j,
                                    children: [
                                        (0, o.jsx)("div", { className: sE._g }),
                                        (0, o.jsx)("div", { className: sE.$h }),
                                        (0, o.jsx)("div", { className: sE.Rv }),
                                        (0, o.jsx)("div", { className: sE.Lw }),
                                        (0, o.jsx)("div", { className: sE.mR }),
                                    ],
                                }),
                                (0, o.jsxs)("div", {
                                    className: sE.Qs,
                                    children: [
                                        (0, o.jsx)("img", {
                                            className: sE.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, o.jsx)(ec.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sE.DD,
                                            children: ef.intl.string(sC.default.RGT513),
                                        }),
                                        (0, o.jsx)(eo.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sE.h_,
                                            children: ef.intl.string(sC.default["+pTnsf"]),
                                        }),
                                        (0, o.jsx)(sT, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sv = s(744064);
function sI(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sb.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sb.N.SUBSCRIBE
                ? n
                : {
                      ...n,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, o.jsx)(sv.S, {
        id: sh.XBOX_PREMIUM_PERK_CARD_ID,
        title: ef.intl.string(sC.default.UVL9tD),
        description: ef.intl.string(sC.default["I+IXr0"]),
        ...a,
        className: t,
        containerClassName: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, o.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function s_(e) {
    let { analyticsLocations: t } = (0, b.Ay)(j.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, o.jsx)(b.f5, { value: t, children: (0, o.jsx)(sI, { ...e }) });
}
var sS = s(700556),
    sP = s(821874);
function sy(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = sP.Ui;
    return (0, o.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, o.jsx)("div", { className: m()(l, null != n && sS.Jx, r), children: a }) : null,
        ],
    });
}
var sD = s(695366),
    sO = s(789861),
    sM = s(592909),
    sk = s(398523),
    sL = s(881373),
    sU = s(555393),
    sG = s(852218),
    sw = s(483489),
    sB = s(612413),
    sH = s(310235),
    sF = s(334551),
    sV = s(762359);
let sz =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sW =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
    sY =
        "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg";
function sK() {
    let { analyticsLocations: e } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sM.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sM.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sL.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sk.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sB.mh)({ location: "useThirdPartyPartnerPerkCards" }),
        r = null === (0, sU.N)(),
        l = (0, sd.b)("useHardwarePartnerPerkCards"),
        { currentDate: c, nDaysInMonth: u } = (0, d.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, d.useMemo)(() => {
        let d = l ? void 0 : ef.intl.string(ef.t.y2b7CA),
            m = t
                ? {
                      id: sh.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ef.intl.string(sH.default.F0b4Z8),
                      description: ef.intl.formatToPlainString(sH.default["hworR+"], { validDates: (0, sO.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ef.intl.formatToPlainString(sH.default.g7iyvR, { date: (0, sO.mh)() }),
                      caption: (0, o.jsx)("img", { src: sW, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sz,
                      ctaText: ef.intl.string(sH.default.fcopjf),
                      onCtaClick: () =>
                          (0, sw.P)({
                              partnerIds: [sG.Bt],
                              title: ef.intl.string(sH.default.YJsqDS),
                              subtitle: ef.intl.format(sH.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: ef.intl.string(sH.default.Dkm10r),
                                  body: ef.intl.string(sH.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sG.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: sh.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ef.intl.string(sH.default["IcD/7p"]),
                      description: ef.intl.formatToPlainString(sH.default.hausFi, { date: (0, sO.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ef.intl.string(sH.default.fxF0Jz),
                      caption: (0, o.jsx)("img", { src: sW, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sz,
                      analyticsOptions: { thirdPartyPartner: sG.Bt },
                  }
                : null,
            g = i
                ? {
                      id: sh.LOGITECH_3PP_CARD_ID,
                      title: ef.intl.string(sF.default.OlObRa),
                      description: ef.intl.format(sF.default.ZGOJ8R, {
                          discountPercent: sL.aW,
                          termsUrl: eM.A.getArticleURL(e7.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: c.getDate() / u,
                      ctaText: ef.intl.string(ef.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sw.P)({
                              partnerIds: [sG.XY],
                              title: ef.intl.string(sF.default["2I7nK+"]),
                              subtitle: ef.intl.format(sF.default.W8jOD0, {
                                  termsUrl: eM.A.getArticleURL(e7.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl: sY,
                      pillText: d,
                      caption: (0, o.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sG.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            f = n
                ? {
                      id: sh.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ef.intl.string(ef.t.m7PucM),
                      description: ef.intl.format(ef.t["1Zw6xL"], {}),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: d,
                      caption: (0, o.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: c.getDate() / u,
                      ctaText: ef.intl.string(ef.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sw.P)({
                              partnerIds: [sG.KS],
                              title: ef.intl.string(ef.t["7ioAjs"]),
                              subtitle: ef.intl.format(ef.t.LOYRxB, {
                                  helpCenterLink: eM.A.getArticleURL(e7.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sG.KS },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null;
        return {
            callOfDutyCard: m,
            expiredCallOfDutyCard: x,
            logitechCard: g,
            steelseriesCard: f,
            youtubeCard: a
                ? {
                      id: sh.YOUTUBE_3PP_CARD_ID,
                      title: ef.intl.string(sV.default["NNPh/j"]),
                      description: ef.intl.format(sV.default.MrgHvR, {
                          helpCenterUrl: eM.A.getArticleURL(e7.MVz.YOUTUBE_PROMOTION),
                      }),
                      isThirdPartyPerk: !0,
                      pillText: d,
                      backgroundAssetUrl: sY,
                      blurTint: "#2E213D",
                      caption: "YouTube Premium",
                      ctaText: ef.intl.string(ef.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sw.P)({
                              partnerIds: [sG.NC],
                              analyticsLocations: e,
                              title: ef.intl.string(sV.default.TDZUui),
                              subtitle: ef.intl.format(sV.default.BTLkvw, {
                                  helpCenterUrl: eM.A.getArticleURL(e7.MVz.YOUTUBE_PROMOTION),
                              }),
                              modalTeaser: {
                                  title: ef.intl.format(sV.default.J8CVYT, {
                                      helpCenterUrl: eM.A.getArticleURL(e7.MVz.YOUTUBE_PROMOTION),
                                  }),
                                  icon: sD.E,
                              },
                          }),
                      analyticsOptions: { thirdPartyPartner: sG.NC },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, s, c, i, u, n, a, r]);
}
var sX = s(762493);
let sZ = "xgpp";
function sJ(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, sd.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: c } = sK();
    if (!i) return null;
    let d = null != n || null != a || null != r || null != l || null != c;
    return (0, o.jsx)(sy, {
        id: sZ,
        sectionClassName: m()(sX.uW, sX.Uv, sX.qr),
        heading: (0, o.jsx)(ec.D, {
            variant: "nitro-sm",
            className: m()(sP.R_, sS.U6),
            children: ef.intl.string(ef.t.NG1e6l),
        }),
        beforeGrid: (0, o.jsx)("div", { className: sS.JE, children: (0, o.jsx)(sR, { glowing: t === sZ }) }),
        grid: d
            ? (0, o.jsxs)(o.Fragment, {
                  children: [
                      null != n && (0, o.jsx)(sv.S, { ...n, containerClassName: sP.Nr, glowing: s === n.id }),
                      (0, o.jsx)(s_, { containerClassName: sP.Nr }),
                      null != c && (0, o.jsx)(sv.S, { ...c, containerClassName: sP.Nr, glowing: s === c.id }),
                      null != r && (0, o.jsx)(sv.S, { ...r, containerClassName: sP.Nr, glowing: s === r.id }),
                      null != l && (0, o.jsx)(sv.S, { ...l, containerClassName: sP.Nr, glowing: s === l.id }),
                      null != a && (0, o.jsx)(sv.S, { ...a, containerClassName: sP.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sQ = s(313133),
    sq = s(67423);
let s$ = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, b.Ay)(j.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsx)(en.animated.div, {
        className: m()(sQ.iE, { [sQ.q4]: !t }),
        style: l,
        children: (0, o.jsxs)("div", {
            className: sQ.iJ,
            children: [
                (0, o.jsx)("img", { alt: "", src: sq, className: sQ.oU }),
                (0, o.jsxs)("div", {
                    className: sQ.iQ,
                    children: [
                        (0, o.jsx)(ec.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ef.intl.format(ef.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ef.intl.format(ef.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, ek.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, o.jsx)(ed.$, {
                    variant: "expressive",
                    icon: eu.t,
                    size: "md",
                    text: ef.intl.string(ef.t.zrCzVB),
                    onClick: () =>
                        void (0, eI.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("470126"),
                                s.e("162775"),
                                s.e("128804"),
                                s.e("60882"),
                                s.e("71151"),
                                s.e("286615"),
                                s.e("70866"),
                                s.e("311541"),
                                s.e("472847"),
                                s.e("870088"),
                                s.e("989649"),
                                s.e("853458"),
                                s.e("718368"),
                                s.e("258407"),
                                s.e("153302"),
                                s.e("758053"),
                                s.e("836576"),
                                s.e("983513"),
                                s.e("216806"),
                                s.e("310734"),
                                s.e("348567"),
                                s.e("452075"),
                                s.e("900277"),
                                s.e("127962"),
                                s.e("364827"),
                                s.e("907167"),
                                s.e("861060"),
                                s.e("952372"),
                                s.e("959880"),
                                s.e("910486"),
                                s.e("56366"),
                                s.e("797595"),
                                s.e("641248"),
                                s.e("544571"),
                                s.e("40291"),
                                s.e("523276"),
                                s.e("948720"),
                                s.e("729963"),
                                s.e("830938"),
                                s.e("392075"),
                                s.e("102328"),
                                s.e("174016"),
                                s.e("790417"),
                                s.e("50097"),
                                s.e("76027"),
                                s.e("594161"),
                                s.e("435432"),
                                s.e("80347"),
                                s.e("680166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: r,
                                    initialStep: tf.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var s0 = s(761508),
    s1 = s(449543);
function s2(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a9ce5551f37c49862694d063777be6e02b9190ff9a205c7c62f5fe9cecb673de.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s3(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s7(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/ce65064fd18fa477fe14c2d4066af96637c446e074008fb0b7599874537ce8d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s6 = s(345394);
function s8(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: s6.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s5(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/804d87fc1c1330e6413159eaacc359de89bdfbec7b4602532b1bd074868783c8.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s9(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a0a5fdb2c9735632e0cadb26af7aa33929c63981e559ef0337cacced2cab2d09.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s4(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/c561ce5c9866c0bdb3f8c9dc43164f873414c3d905d1ab4beace8020dc4933fc.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function ie(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function it(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var is = s(996682);
function ii(e) {
    let {
        color: t = ea.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, o.jsxs)("svg", {
        ...(0, is.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        width: a,
        height: r,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, o.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, o.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, o.jsx)("defs", {
                children: (0, o.jsx)("clipPath", {
                    id: "a",
                    children: (0, o.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function ia(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ir = s(78701);
function il(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: ir.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ic = s(462887),
    io = s(736653),
    id = s(259065),
    iu = s(206835),
    im = s(591179),
    ix = s(462463),
    ig = s(219882),
    ip = s(19886),
    ih = s(425713),
    iN = s(696292),
    iA = s(192444),
    ij = s(617986),
    ib = s(892227),
    iC = s(81466),
    iE = s(1889),
    iT = s(749012);
let iR = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, J.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ib.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, o.jsxs)("div", {
        className: iT.kL,
        children: [
            null != s &&
                (0, o.jsxs)("div", {
                    className: iT.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: iT.Pf,
                            children: [
                                (0, o.jsx)(iC.CalendarIcon, { size: "sm", color: ea.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(eo.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ef.intl.string(iE.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ef.intl.format(iE.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, o.jsx)("div", { className: iT.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, o.jsxs)("div", {
                    className: iT.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: iT.Pf,
                            children: [
                                (0, o.jsx)(tR.C, { size: "sm", color: ea.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(eo.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ef.intl.string(iE.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ef.intl.format(iE.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var iv = s(758836),
    iI = s(190107),
    i_ = s(799544);
function iS(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, iA.lk)(iI.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, J.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, d.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: sh.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ef.intl.string(iE.default.hx5AFp),
                          description: ef.intl.format(iE.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: m()(i_.lH, i_.yK),
                          footerContent: (0, o.jsx)(iR, {}),
                          ctaText: ef.intl.string(iE.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(e7.BVt.COLLECTIBLES_SHOP_WITH_TAB(iv.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, d.useMemo)(
            () =>
                t
                    ? {
                          id: sh.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ef.intl.string(ef.t.Csf5Ol),
                          description: ef.intl.format(ef.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ef.intl.string(ef.t.jVcuVY),
                          onCtaClick: () => (0, ij.mA)({ fromContent: iN.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: i_.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iP = s(975807),
    iy = s(95035),
    iD = s(989790),
    iO = s(88001),
    iM = s(148155),
    ik = s(817577);
function iL() {
    (0, iP.A)(iO.TE);
}
function iU(e) {
    let t = (0, iD.O9)(),
        i = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, d.useCallback)(() => {
            n
                ? (0, eI.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, o.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: t7.pe.TIER_2,
                      initialPlanId: t7.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, d.useMemo)(
        () =>
            t
                ? {
                      id: sh.PREMIUM_GROUP_CARD_ID,
                      title: ef.intl.string(iM.default.YkvksF),
                      description: (0, o.jsxs)(o.Fragment, {
                          children: [
                              ef.intl.formatToPlainString(iM.default.JlyGQj, {
                                  totalSeats: iO.aw,
                                  premiumGroupProductName: (0, iO.DP)(),
                              }),
                              (0, o.jsx)("div", {
                                  className: i_.LF,
                                  children: (0, o.jsx)(iy.A, {
                                      onClick: iL,
                                      children: ef.intl.string(iM.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ef.intl.string(ef.t.oW0eUd),
                      primaryAsset: ik,
                      ctaIcon: eu.t,
                      ctaIconPosition: "start",
                      ctaText: ef.intl.string(ef.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iG = s(562819),
    iw = s(793943),
    iB = s(241988),
    iH = s(655752);
let iF = (0, B.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iV = s(764231),
    iz = s(627380),
    iW = s(30084),
    iY = s(814014),
    iK = s(714206);
let iX =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iZ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iJ =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iQ() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, im.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: a, expiredCallOfDutyCard: r, logitechCard: l, steelseriesCard: c, youtubeCard: u } = sK(),
        x = (0, sd.b)("premium_subscriber_home_rewards"),
        f = (0, ix.A)({ analyticsLocations: i }),
        p = (0, d.useCallback)(() => {
            (0, eD.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, id.L)({ analyticsLocations: i }),
            );
        }, [i]),
        h = (0, d.useCallback)(() => {
            (0, eD.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, iG.L)({ analyticsLocations: i }),
            );
        }, [i]),
        N = (0, d.useCallback)(() => {
            (0, eD.openUserSettings)(ey.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        A = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === t7.xc.FP_ONLY,
                i = (0, ip.$F)(),
                n = (0, ip.Xb)(),
                a = i?.status === ip.Wo.UPCOMING || s,
                r = i?.status === ip.Wo.WITHHELD,
                l = a || r,
                c = (0, ih.N)(i?.id),
                o = (function () {
                    let e = (0, ip.$F)(),
                        t = (0, iH.P)(),
                        s = (0, ip.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iF.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === ip.Wo.WITHHELD) return null;
                    let n = tu()(),
                        a = tu()(s),
                        r = i || e.status === ip.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                u = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion) && !l,
                x = (0, iz.t)(),
                f = (0, iH.P)();
            return (0, d.useMemo)(() => {
                let t,
                    a = null != f ? ef.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iV.T)(t7.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === ip.Wo.UPCOMING
                              ? ef.intl.formatToPlainString(ef.t.a1eKDi, { days: x?.days ?? 0 })
                              : i.status === ip.Wo.WITHHELD
                                ? ((0, iV.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return ef.intl.formatToPlainString(ef.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return ef.intl.formatToPlainString(ef.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(x, a) ??
                                  (0, iV.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || u ? c.standard : c.ambientLarge) : s && (r = iK),
                    {
                        id: sh.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ef.intl.string(i.nameUnformattedNitro) : s ? ef.intl.string(ef.t.tx9Fvw) : "",
                        pillText: ef.intl.string(ef.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: m()(iY.pq, { [iY.rX]: l, [iY.kE]: u }),
                        caption: null != n ? ef.intl.formatToPlainString(ef.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: o ?? void 0,
                        ctaText: ef.intl.string(ef.t.jVcuVY),
                        onCtaClick: () => (0, iW.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, l, u, n, o, s, x, f, e]);
        })(i),
        C =
            ((e = (0, ee.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription())),
            (s = (0, eN.q)(t, e === ee.Iz.NITRO_HOME_TILE)),
            (0, d.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: sh.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, o.jsx)("img", {
                                  src: iB,
                                  alt: "",
                                  "aria-hidden": !0,
                                  style: { width: 157 },
                                  draggable: !1,
                              }),
                              ctaIcon: eu.t,
                              ctaIconPosition: "start",
                              ctaText: s.cta,
                              onCtaClick: () =>
                                  (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: i }),
                          },
                [i, s, t],
            )),
        { nitroOrbsRewardsCard: E, questOrbMultiplierCard: T } = iS("useWhatsNewPerkCards"),
        R = iU(i);
    return (0, d.useMemo)(() => {
        let e = [
                x ? null : a,
                x ? null : u,
                x ? null : l,
                x ? null : c,
                x ? null : r,
                E,
                T,
                R,
                {
                    id: sh.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ef.intl.string(ef.t.OLtTrt),
                    description: ef.intl.string(ef.t["di/pXR"]),
                    onCtaClick: n ? f : p,
                    ctaText: ef.intl.string(ef.t.jVcuVY),
                    primaryAsset: iX,
                },
                {
                    id: sh.CLIENT_THEMES_CARD_ID,
                    title: ef.intl.string(ef.t.acc6h6),
                    description: ef.intl.formatToPlainString(ef.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iJ,
                    ctaText: ef.intl.string(ef.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iw.nf)(iw.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: sh.PERMADECOS_CARD_ID,
                    title: ef.intl.string(ef.t.L14NZN),
                    description: ef.intl.string(ef.t.eCZkAI),
                    primaryAsset: (0, o.jsx)(il, { alt: "", ariaHidden: !0 }),
                    ctaText: ef.intl.string(ef.t.jVcuVY),
                    onCtaClick: n ? f : h,
                },
                {
                    id: sh.CUSTOM_APP_ICONS_CARD_ID,
                    title: ef.intl.string(ef.t["GU+wqh"]),
                    description: ef.intl.string(ef.t["1uPk1Z"]),
                    primaryAsset: iZ,
                    ctaText: ef.intl.string(ef.t.y9TxXV),
                    onCtaClick: N,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, A), null != C && e.splice(1, 0, C), e.length > s && e.splice(s, e.length - s), e);
    }, [A, C, E, T, R, p, N, h, f, n, a, r, l, c, u, x]);
}
var iq = s(355097);
let i$ = "/assets/1eb1b74667b4c0f0.svg",
    i0 = "/assets/983b60e4fcaf973b.svg";
var i1 =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let i2 = [
    { id: "bestof", label: () => ef.intl.string(ef.t.q1u7nQ) },
    { id: "appearance", label: () => ef.intl.string(ef.t.CUnZkZ) },
    { id: "upgrades", label: () => ef.intl.string(ef.t.KC5q8v) },
    { id: "vip", label: () => ef.intl.string(ef.t.DjEAcv) },
];
var i3 = s(18290);
function i7(e) {
    e.stopPropagation();
}
function i6(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, io.DP)(),
                t = (0, im.X)("useFavoritesPerkCards"),
                s = (0, ip.Lh)(),
                i = (0, ih.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, iu.A)({ scrollPosition: iq._F.TRY_IT_OUT, analyticsLocations: n }),
                r = (0, d.useCallback)(() => {
                    (0, eD.openUserSettings)(ey.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                l = (0, d.useCallback)(() => {
                    (0, eD.openUserSettings)(ey.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                c = (0, d.useCallback)(() => {
                    (0, eD.openUserSettings)(ey.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, d.useCallback)(() => {
                    (0, y.pX)(e7.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, d.useCallback)(() => {
                    (0, eD.openUserSettings)(ey.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, ix.A)({ analyticsLocations: n }),
                g = (0, d.useCallback)(() => {
                    (0, eD.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, id.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iQ(),
                p = (0, d.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = iS("useFavoritesPerkCards"),
                A = iU(n),
                C = (0, d.useMemo)(
                    () => [
                        {
                            id: sh.SERVER_BOOSTS_CARD_ID,
                            title: ef.intl.formatToPlainString(ef.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ef.intl.formatToPlainString(ef.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, o.jsx)(s2, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != A ? { ...A, categories: ["bestof"] } : null,
                        {
                            id: sh.PROFILES_CARD_ID,
                            title: ef.intl.string(ef.t.xDRab3),
                            description: ef.intl.string(ef.t.yn6fWA),
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, o.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sh.HD_VIDEO_CARD_ID,
                            title: ef.intl.string(ef.t["/mQ5gg"]),
                            description: ef.intl.string(ef.t["7WwAXh"]),
                            primaryAsset: (0, o.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sh.CLIENT_THEMES_CARD_ID,
                            title: ef.intl.string(ef.t.acc6h6),
                            description: ef.intl.formatToPlainString(ef.t.WQazjs, { themeCount: 20 }),
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iJ,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sh.MORE_EMOJIS_CARD_ID,
                            title: ef.intl.string(ef.t.D8vIDT),
                            description: ef.intl.string(ef.t.DRMecB),
                            primaryAsset: (0, o.jsx)(s8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sh.LARGE_UPLOADS_CARD_ID,
                            title: ef.intl.string(ef.t.nL1WZV),
                            description: (0, ig.M6)({
                                legacyCopy: ef.intl.formatToPlainString(ef.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: ef.intl.formatToPlainString(ef.t.teOTfv, {
                                    maxFileSize: (0, ek.EJ)(t7.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, o.jsx)(s5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sh.CUSTOM_APP_ICONS_CARD_ID,
                            title: ef.intl.string(ef.t["GU+wqh"]),
                            description: ef.intl.string(ef.t["1uPk1Z"]),
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: iZ,
                            categories: ["appearance"],
                        },
                        {
                            id: sh.ENTRANCE_SOUNDS_CARD_ID,
                            title: ef.intl.string(ef.t.WJfCPi),
                            description: ef.intl.string(ef.t.liQKJR),
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: sh.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ef.intl.string(ef.t.OLtTrt),
                            description: ef.intl.string(ef.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            primaryAsset: iX,
                            categories: ["appearance"],
                        },
                        {
                            id: sh.CUSTOM_SOUNDS_CARD_ID,
                            title: ef.intl.string(ef.t["Cu/oFd"]),
                            description: ef.intl.string(ef.t.czj2aa),
                            primaryAsset: (0, o.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.SPECIAL_STICKERS_CARD_ID,
                            title: ef.intl.string(ef.t.MQoVeb),
                            description: ef.intl.string(ef.t.HGCLZX),
                            primaryAsset: (0, o.jsx)("div", {
                                className: i_.Uc,
                                children: (0, o.jsx)(s4, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.SUPER_REACTIONS_CARD_ID,
                            title: ef.intl.string(ef.t.qERvAA),
                            description: ef.intl.string(ef.t.WkUWzx),
                            primaryAsset: (0, o.jsx)(ie, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ef.intl.string(ef.t.ssVDYQ),
                            description: ef.intl.string(ef.t.aUSRMa),
                            primaryAsset: (0, ic.M)(e) ? i$ : i0,
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.EARLY_ACCESS_CARD_ID,
                            title: ef.intl.string(ef.t["g/KRY6"]),
                            description: ef.intl.string(ef.t.JzAmJc),
                            primaryAsset: (0, o.jsx)(it, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sh.BADGE_CARD_ID,
                            title: ef.intl.string(ef.t.Bn3CtB),
                            description: ef.intl.string(ef.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, o.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, o.jsx)(ii, { color: ea.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sh.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ef.intl.string(ef.t["MTD+7w"]),
                            description: ef.intl.string(ef.t.Bhs0s6),
                            ctaText: ef.intl.string(ef.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, o.jsx)(ia, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: sh.PERMADECOS_CARD_ID,
                            title: ef.intl.string(ef.t.L14NZN),
                            description: ef.intl.string(ef.t.eCZkAI),
                            primaryAsset: (0, o.jsx)(il, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, A, a, r, l, c, u, m, g, x, t],
                );
            return (0, d.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, d.useState)(i?.categories[0] ?? i1.BEST_OF_NITRO),
        r = (0, d.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, o.jsxs)("div", {
        className: i3.uW,
        children: [
            (0, o.jsx)(ec.D, { variant: "nitro-sm", children: ef.intl.string(ef.t["Uh3+CA"]) }),
            (0, o.jsx)(s0.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i3.Lq,
                "aria-label": ef.intl.string(ef.t["Uh3+CA"]),
                children: i2.map((e) =>
                    (0, o.jsx)(s0.V.Item, { id: e.id, className: i3.IC, children: e.label() }, e.id),
                ),
            }),
            (0, o.jsx)(
                s1.A,
                {
                    gap: 20,
                    className: i3.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, o.jsx)(
                                sv.S,
                                { ...e, glowing: t === e.id, containerClassName: i3.Ui, onFocus: i7 },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i8 = s(72979);
let i5 = function (e) {
    let { className: t } = e,
        s = (0, io.DP)();
    return (0, o.jsx)("img", {
        className: m()(i8.D, t),
        src: (0, ic.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i9 = s(684251);
let i4 = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, o.jsxs)("div", {
              className: m()(i9.kL, i9.Gd, i9.Eg),
              children: [(0, o.jsx)(i5, {}), (0, o.jsx)(so, {}), n],
          })
        : (0, o.jsx)(eA.h, { color: "nitro-pink", className: m()(i9.kL, i9.Gd), offsetBottom: i, children: n });
};
function ne(e) {
    let { glowingPerkId: t = null } = e,
        s = iQ();
    return (0, o.jsx)(sy, {
        sectionClassName: sP.uW,
        heading: (0, o.jsx)(ec.D, { variant: "nitro-sm", className: sP.R_, children: ef.intl.string(ef.t.Aw5DRm) }),
        grid: (0, o.jsx)(o.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, o.jsx)(
                    sv.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: m()(sP.Nr, { [sP.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function nt(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
            r = d.useRef(!1);
        (d.useEffect(() => {
            if (!t || r.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                l = e();
            if (null != l && l.offsetHeight > 0) {
                ((r.current = !0), l.scrollIntoView(s));
                return;
            }
            let c = !1,
                o = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        r.current ||
                        c ||
                        ((r.current = !0), d.disconnect(), t.target.scrollIntoView(s));
                }),
                u = performance.now();
            return (
                !(function t() {
                    if (c || performance.now() - u > 5e3) return;
                    let i = e();
                    null != i
                        ? i.offsetHeight > 0
                            ? ((r.current = !0), i.scrollIntoView(s))
                            : d.observe(i)
                        : (o = requestAnimationFrame(t));
                })(),
                () => {
                    ((c = !0), null != o && cancelAnimationFrame(o), d.disconnect());
                }
            );
        }, [t, a, i, n, ...s]),
            d.useEffect(() => {
                t || (r.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], s, i);
}
var ns = s(92737);
let ni = "/assets/cd2be35d285d4675.svg",
    nn = (e) => {
        let { userId: t } = e,
            s = (0, G.ds)(),
            { isInNitroHomeHeaderTreatment: i } = F("nitro_member_hub_header"),
            n = z("nitro_member_hub_header"),
            a = (0, x.zy)();
        (d.useEffect(() => {
            p.h.wait(async () => {
                let e = [(0, Z.Ay)()];
                (null != t && e.push((0, q.A)(t)), await Promise.all(e));
            });
        }, [t]),
            d.useEffect(() => {
                v(!0);
            }, []),
            (0, es.j)(),
            (0, S.P)(_));
        let r = d.useRef(null),
            l = d.useRef(null),
            c = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            { isReady: u, programReward: h } = (0, J.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: A,
                glowingPerkId: C,
                scrollBlock: E,
                scrollInline: T,
            } = d.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(ns.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        nt(N ?? "", null != N, E, T);
        let [R, v] = d.useState(!1),
            I = (0, et.p)(),
            P = d.useRef(null),
            [y, D] = d.useState(!1),
            O = null != I && null != c && c.status === e7.Dmq.CANCELED,
            M = (0, ei.iU)(t7.gD.PREMIUM_MONTH_TIER_2, I, c),
            U = !y && O,
            w = null != (0, g.bG)([Q.A], () => (null != t ? Q.A.getUserProfile(t) : null)) && (u || null != h),
            B = (0, ee.TF)({ location: "PremiumSubscriberHome" }),
            H = (0, eN.q)(c, B === ee.Iz.STICKY_BAR),
            [V, en] = (0, X.iP)(
                null != H && w && c?.id != null ? W.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                c?.id ?? "",
                { cooldownDurationMs: $.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != c && c.status === e7.Dmq.CANCELED,
            er = i && !s && !ea,
            el = n && (s || ea),
            { analyticsLocations: ec } = (0, b.Ay)(j.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eo, ed] = d.useState(!1);
        return w
            ? (0, o.jsxs)(K.Gt, {
                  className: m()(i9.xW, i9.Gd),
                  ref: r,
                  children: [
                      (0, o.jsx)(i4, {
                          shouldRenderNitroHomeHeaderExperiment: er,
                          shouldRenderNitroHomeFollowup: el,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, o.jsxs)(b.f5, {
                              value: ec,
                              children: [
                                  (0, o.jsx)(Y.L, {
                                      innerRef: P,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, o.jsx)(ss, {
                                          buttonVisibilityRef: P,
                                          className: i9.v1,
                                          userDiscountOffer: I,
                                          discountedPrice: M,
                                      }),
                                  }),
                                  (0, o.jsx)(ne, { glowingPerkId: C }),
                                  (0, o.jsx)(sJ, { glowingPerkId: C, glowingSectionId: A }),
                                  (0, o.jsx)(i6, { glowingPerkId: C }),
                                  (0, o.jsx)(eC, {
                                      className: i9.Zy,
                                      location: j.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e7.liQ.NITRO_HOME, section: e7.JJy.GIFT_BANNER },
                                  }),
                                  (0, o.jsx)("div", { className: i9.hz }),
                                  (0, o.jsx)(Y.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !eo &&
                                              (L.default.track(e7.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ec,
                                              }),
                                              ed(!0));
                                      },
                                      children: (0, o.jsx)("div", { ref: l, className: i9._Z }),
                                  }),
                                  (0, o.jsx)("img", {
                                      src: ni,
                                      className: i9.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ef.intl.string(ef.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != M &&
                          (0, o.jsx)(s$, {
                              isVisible: U && R,
                              premiumSubscription: c,
                              churnDiscountOffer: I,
                              discountedPrice: M,
                          }),
                      null != V &&
                          null != H &&
                          null != c &&
                          (0, o.jsx)(eh, { premiumSubscription: c, content: H, markAsDismissed: en }),
                  ],
              })
            : er || el
              ? (0, o.jsxs)("div", {
                    className: m()(i9.kL, i9.Lq, i9.TN, i9.Eg),
                    children: [
                        (0, o.jsx)(so, {}),
                        (0, o.jsx)("div", { className: i9.S, children: (0, o.jsx)(f.y, {}) }),
                    ],
                })
              : (0, o.jsx)("div", { className: m()(i9.kL, i9.Lq), children: (0, o.jsx)(f.y, {}) });
    };
var na = s(286320),
    nr = s(727949),
    nl = s(440005),
    nc = s(26508);
let no = (0, B.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nd = s(860839);
let nu =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function nm(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: nu,
        srcSet: `${nu} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nx = s(37537),
    ng = s(783420),
    nf = s(204413),
    np = s(245383),
    nh = s(824069),
    nN = s(785007),
    nA = s(947910);
function nj(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, o.jsxs)("div", {
                    className: nA.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, o.jsx)("div", {
                                className: nA.fQ,
                                children: (0, o.jsx)(tE.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, o.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nA.qU,
                            children: [
                                (0, o.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nA.NI,
                                    children: [
                                        (0, o.jsx)(eo.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, o.jsx)(eo.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, o.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nA.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, o.jsx)(eo.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, o.jsx)(eo.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: nA.yD,
                                                children: e.secondarySubText,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                value: e.value,
                disabled: e.isDisabled,
                radioBarClassName: m()(nA.tG, { [nA.uA]: s, [nA.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, o.jsx)(nN.$d, {
        ...i,
        options: n,
        value: t,
        size: nN.r9.NOT_SET,
        className: nA.ul,
        withTransparentBackground: !0,
    });
}
var nb = s(773669),
    nC = s(97352),
    nE = s(252424),
    nT = s(526292),
    nR = s(186223),
    nv = s(369827),
    nI = s(803496);
function n_(e) {
    let t = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        s = (0, nv.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nI.A)({
            activeSubscription: t,
            skuIDs: [(0, ek.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nS(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nP(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === t7.Ff.YEAR
          ? ef.intl.format(ef.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ef.intl.format(ef.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var ny = s(614488);
function nD(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, o.jsx)(ng.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, o.jsx)(ed.$, {
                size: "md",
                fullWidth: !0,
                icon: eu.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nO(e) {
    let { skuId: t, className: s } = e,
        i = t === t7.pe.TIER_2,
        n = (0, ic.q)((0, io.Ay)()),
        a = (0, nx.c)("PlanSelectCard"),
        r = (0, ew.V)(),
        l = r?.subscriptionTrial,
        c = l?.skuId === t,
        u = i && c && null != l,
        x = (0, eG.p)(),
        {
            planRadioOptions: f,
            selectedPlanId: p,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = d.useState(null),
                n = t7.En[t],
                a = t7.zE[t],
                r = t === t7.pe.TIER_2,
                l = n_(t),
                c = (0, ew.V)(),
                o = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, g.cf)(
                    [k.A],
                    () => {
                        let e = k.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, ek.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === t7.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [t7.gD.PREMIUM_YEAR_TIER_0, t7.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                x = u === t,
                f = (0, eG.O)(),
                p = (0, nT.k5)(),
                h = (0, g.bG)([nb.default], () => nb.default.locale),
                N = (0, ei.U9)(f, t),
                A = (0, ei.N1)(n),
                j = (0, ei.N1)(a),
                [b, C] = (0, g.yK)([nC.A], () => [nC.A.get(n), nC.A.get(a)], [n, a]),
                E = null != b ? (0, ek.sS)(b, l) : null,
                T = null != C ? (0, ek.sS)(C, l) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? ef.intl.formatToPlainString(ef.t.IAybsG, {
                              discount: (0, nE.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                I = nS(a, N, v, j, T),
                _ = nS(n, N, v, A, E),
                S = f?.discount.userUsageLimitInterval,
                P = f?.discount.userUsageLimit ?? t7.OJ,
                y = !r || I || _ || null == C ? null : (0, nR.Cj)(C, !1, l),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== t7.pe.TIER_2 ? null : s && !i ? t7.En[t] : t7.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                M = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: ef.intl.string(ef.t["/Q4HRN"]),
                        primarySubText:
                            (I
                                ? nP({
                                      expectedUsageInterval: t7.Ff.YEAR,
                                      usageInterval: S,
                                      discountDuration: P,
                                      regularPrice: T,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: I ? j : T,
                        secondarySubText: I ? T : null,
                        badgeText: I ? R : null,
                        useGradientSelectedBorder: r && (o || I || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: ef.intl.string(ef.t.DKzs96),
                        primarySubText: _
                            ? nP({
                                  expectedUsageInterval: t7.Ff.MONTH,
                                  usageInterval: S,
                                  discountDuration: P,
                                  regularPrice: E,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : E,
                        secondarySubText: _ ? E : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: r && (o || _),
                        isDisabled: x || m,
                    },
                ],
                U = M === a ? I : M === n && _;
            return { planRadioOptions: L, selectedPlanId: M, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = i && null == x ? "expressive" : "secondary",
        { buttonText: j } = (0, np.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nf.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, o.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: ny.Ux,
            children: [
                (0, o.jsx)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: ny.MY,
                    children: (0, o.jsx)(ec.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? ny.ck : ny.JJ,
                        children: i ? ef.intl.string(ef.t.lG6a5x) : ef.intl.string(ef.t["t9uG/o"]),
                    }),
                }),
                (0, o.jsx)(el.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: ny.qT,
                    children: i
                        ? (0, o.jsx)(nd.ZP, {
                              featureSet: nd.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, o.jsx)(nd.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, o.jsx)(nh.K, {}),
                u
                    ? (0, o.jsx)("div", {
                          className: ny.qS,
                          role: "separator",
                          children: (0, o.jsx)(eo.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: ny.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case t7.WT.DAY:
                                          if (t % 7 == 0) return ef.intl.format(ef.t["1MYPH0"], { weeks: t / 7 });
                                          return ef.intl.format(ef.t.pYfIoO, { days: t });
                                      case t7.WT.MONTH:
                                          return ef.intl.format(ef.t["96hTLe"], { months: t });
                                      case t7.WT.YEAR:
                                          return ef.intl.format(ef.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, o.jsx)("hr", { className: ny.yF }),
                (0, o.jsxs)("div", {
                    className: ny.qr,
                    children: [
                        (0, o.jsx)(nj, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, o.jsx)(nD, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = m()(ny.Nr, s, { [ny.Fw]: i });
    return i
        ? (0, o.jsxs)(eA.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, o.jsx)("div", {
                      className: ny.kX,
                      "aria-hidden": !0,
                      children: (0, o.jsx)(nm, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, o.jsx)("div", { className: E, children: C });
}
function nM(e) {
    let { className: t } = e,
        s = (0, ic.q)((0, io.Ay)()),
        i = (0, nx.c)("PlanSelectPremiumGroupCard"),
        n = (0, eG.p)(),
        a = null != n,
        r = n_(t7.pe.TIER_2),
        l = (0, g.bG)([O.default], () => O.default.getCurrentUser()),
        { avatarSrc: c, eventHandlers: d } = (0, eQ.A)({ userId: l?.id, size: eK._3.SIZE_32, animateOnHover: !0 }),
        u = (0, g.bG)([nC.A], () => nC.A.get(t7.gD.PREMIUM_GROUP_MONTH)),
        x = (0, ei.N1)(t7.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? ef.intl.format(iM.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iO.DP)(),
              })
            : ef.intl.string(ef.t["2pG5Ga"]),
        h = (0, o.jsx)(ng.A, {
            subscriptionTier: t7.pe.TIER_2,
            initialPlanId: t7.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, o.jsx)(ed.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: eu.t,
                    text: p,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        N = null;
    if (a && null != x) N = x;
    else if (null != u)
        try {
            N = (0, ek.sS)(u, r, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, o.jsx)("div", {
        className: m()(ny.Nr, t),
        children: (0, o.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: ny.Ux,
            children: [
                (0, o.jsxs)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: ny.MY,
                    children: [
                        (0, o.jsx)(ec.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? ny.ck : ny.JJ,
                            children: ef.intl.string(iM.default.eSKiXk),
                        }),
                        null != l &&
                            (0, o.jsxs)(el.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: ny.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, o.jsx)("div", {
                                        className: ny.uA,
                                        children: (0, o.jsx)(eX.eu, {
                                            src: c,
                                            size: eK._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, o.jsx)(el.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: ny.VL,
                                        children: (0, o.jsxs)(eo.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iO.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, o.jsx)(el.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: ny.qT,
                    children: (0, o.jsx)(nd.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, o.jsx)("hr", { className: ny.yF }),
                (0, o.jsxs)("div", {
                    className: ny.qr,
                    children: [
                        (0, o.jsxs)("div", {
                            className: ny.ec,
                            children: [
                                (0, o.jsx)(eo.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ef.intl.string(iM.default.SvSwga),
                                }),
                                null == N
                                    ? (0, o.jsx)(f.y, { type: f.y.Type.PULSING_ELLIPSIS })
                                    : (0, o.jsx)(eo.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
                                          children: N,
                                      }),
                            ],
                        }),
                        h,
                    ],
                }),
            ],
        }),
    });
}
function nk(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, b.Ay)(j.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nd.pw)(t),
        a = (0, iD.PA)(),
        r = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        l = { [ny.iR]: !r };
    return (0, o.jsx)(b.f5, {
        value: i,
        children: (0, o.jsxs)(el.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: m()(ny.oB, s),
            children: [
                (0, o.jsx)(ec.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: ny.op,
                    children: ef.intl.string(ef.t.vLz3Zs),
                }),
                (0, o.jsxs)("div", {
                    ref: n,
                    className: m()(ny.kR, { [ny.BQ]: a }),
                    children: [
                        (0, o.jsx)(nO, { skuId: t7.pe.TIER_0, className: m()(ny.rz, l) }),
                        (0, o.jsx)(nO, { skuId: t7.pe.TIER_2, className: m()(ny.Rv, l) }),
                        a && (0, o.jsx)(nM, { className: m()(ny.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var nL = s(226830),
    nU = s(366010),
    nG = s(303136);
let nw = function (e) {
    let t,
        { className: s } = e,
        i = (0, tM.TM)(),
        n = (0, nU.q)((0, io.Ay)());
    return (
        (t = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, o.jsx)("div", {
            className: s,
            children: (0, o.jsx)(
                nG.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, o.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var nB =
        (((c = {}).HOME = "home"),
        (c.WHATS_NEW = "whatsNew"),
        (c.BEST_OF_NITRO = "bestOfNitro"),
        (c.PLANS = "plans"),
        (c.COMPARE = "compare"),
        c),
    nH = s(352756);
let nF = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e7.JJy.MARKETING_FLOATING_CTA };
    return (0, o.jsx)(en.animated.div, {
        className: nH.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, o.jsxs)("div", {
            className: nH.U,
            children: [
                (0, o.jsx)(to.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, o.jsx)(ej.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nV = s(573710);
let nz = function () {
    let e = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("div", {
                className: nV.BI,
                children: (0, o.jsx)(tG, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tL.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, o.jsx)("img", { src: tQ, alt: "", className: nV.Q }),
                }),
            }),
            (0, o.jsx)(tB, {
                isMotionReduced: e,
                boltContainerClassName: nV.nJ,
                carContainerClassName: nV.IN,
                hammerContainerClassName: nV.Gj,
                keyContainerClassName: nV.FV,
                starContainerClassName: nV.E1,
                boltAssetClassName: nV.j7,
                carAssetClassName: nV.or,
                hammerAssetClassName: nV.Wv,
                keyAssetClassName: nV.rs,
                starAssetClassName: nV.OY,
            }),
        ],
    });
};
var nW = s(989756);
let nY = d.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, b.Ay)(j.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, o.jsx)(b.f5, {
        value: s,
        children: (0, o.jsx)("div", {
            ref: t,
            className: nW.kL,
            children: (0, o.jsxs)("div", {
                className: nW.hQ,
                children: [
                    (0, o.jsx)(nz, {}),
                    (0, o.jsx)(ec.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nW.RH,
                        children: ef.intl.string(ef.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nY.displayName = "PremiumMarketingFooter";
var nK = s(939249);
let nX = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nB.HOME]: ef.intl.string(ef.t.uGRXjS),
            [nB.WHATS_NEW]: ef.intl.string(ef.t["mfcR/v"]),
            [nB.BEST_OF_NITRO]: ef.intl.string(ef.t.xQKkE8),
            [nB.PLANS]: ef.intl.string(ef.t.wyNMnm),
            [nB.COMPARE]: ef.intl.string(ef.t.pwD7If),
        },
        n = (0, g.bG)([O.default], () => O.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, o.jsx)(sn.A, {
        className: sl.TQ,
        transparent: !0,
        children: (0, o.jsxs)("div", {
            className: sl.Wc,
            children: [
                (0, o.jsxs)("div", {
                    className: sl.wG,
                    children: [
                        (0, o.jsx)(eu.t, { className: sl.nE, colorClass: sl.oG }),
                        (0, o.jsx)("div", {
                            className: sl.zc,
                            role: "tablist",
                            "aria-label": ef.intl.string(ef.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, o.jsxs)(
                                    nK.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: sl.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, o.jsx)(eo.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, o.jsx)("div", { className: sl.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: sl.MQ,
                    children: [
                        null != n && (0, o.jsx)(sr.l, { size: "sm", location: j.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, o.jsx)(ej.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nZ = s(704333),
    nJ = s(414499),
    nQ = s(597770),
    nq = s(500060),
    n$ = s(866665),
    n0 = s(406860),
    n1 = s(870975),
    n2 = s(698834);
function n3() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, n0.A)({ boxType: sA.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nZ.B, text: ef.intl.string(sC.default.MUypiB) },
            { icon: nJ.h, text: ef.intl.string(sC.default.ec5Rdd) },
            { icon: nQ.GiftIcon, text: ef.intl.string(sC.default["9t2CzW"]), tooltip: sC.default.AyECej },
            { icon: nq.o, text: ef.intl.string(sC.default.R7YJAY) },
        ];
    return (0, o.jsx)(Y.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, o.jsx)("div", {
            ref: e,
            className: n2.iE,
            children: (0, o.jsxs)("div", {
                className: n2.Nr,
                children: [
                    (0, o.jsxs)("div", {
                        className: n2.j,
                        children: [
                            (0, o.jsx)("div", { className: n2._g }),
                            (0, o.jsx)("div", { className: n2.$h }),
                            (0, o.jsx)("div", { className: n2.Rv }),
                            (0, o.jsx)("div", { className: n2.Lw }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: n2.CT,
                        children: [
                            (0, o.jsxs)("div", {
                                className: n2.Qs,
                                children: [
                                    (0, o.jsxs)("div", {
                                        children: [
                                            (0, o.jsx)(ec.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: n2.R_,
                                                children: ef.intl.string(sC.default.rkt1aw),
                                            }),
                                            (0, o.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, o.jsxs)(
                                                            "div",
                                                            {
                                                                className: n2.yf,
                                                                children: [
                                                                    (0, o.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, o.jsx)(eo.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, o.jsx)("div", {
                                                                            className: n2.Jn,
                                                                            children: (0, o.jsx)(n$.m, {
                                                                                text: ef.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, o.jsx)(
                                                                                    sm.CircleInformationIcon,
                                                                                    {
                                                                                        size: "xxs",
                                                                                        color: "var(--icon-default)",
                                                                                    },
                                                                                ),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, o.jsx)("div", {
                                                        className: n2.xF,
                                                        children: (0, o.jsx)(to.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: t7.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: n2.WE,
                                        children: (0, o.jsx)(eo.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ef.intl.format(sC.default.KDKdWi, { termsLink: (0, n1.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)("div", {
                                className: n2.r1,
                                children: (0, o.jsx)("img", {
                                    className: n2.wm,
                                    src: "https://cdn.discordapp.com/assets/content/183a222feae2555e7a057002bbcae445e70efa78fb204d353c9c93b4a1f210d4.png",
                                    alt: "Xbox Game Pass",
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n7 = s(750338),
    n6 = s(19290),
    n8 = s(505051);
function n5(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: r = !1,
        highlightBento: l,
    } = e;
    return (0, o.jsxs)("div", {
        className: m()(n8.boxBackdrop, t),
        children: [
            (0, o.jsx)(ec.D, {
                className: n8.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, o.jsx)("div", { className: n8.highlightBento, children: l }),
            (0, o.jsx)("div", {
                className: n8.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n6.A0.SMALL;
                            break;
                        case 2:
                            s = n6.A0.MEDIUM;
                            break;
                        default:
                            s = n6.A0.LARGE;
                    }
                    return (0, o.jsx)(o.Fragment, {
                        children: e.map((e) =>
                            (0, o.jsx)(
                                n7.A,
                                { index: t + +!!r, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let n9 = d.memo(function (e) {
        let t = (0, sd.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, n6.Ay)(t);
        return (0, o.jsx)(n5, {
            boxLayout: s,
            title: ef.intl.string(ef.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, o.jsx)(n3, {}) : null,
            ...e,
        });
    }),
    n4 = d.memo(function (e) {
        let { bestOfBoxes: t } = (0, n6.Ay)();
        return (0, o.jsx)(n5, { boxLayout: t, title: ef.intl.string(ef.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    ae = (0, B.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var at = s(236834),
    as = s(540504);
function ai(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eQ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, o.jsx)("div", {
        className: as.$6,
        children: (0, o.jsxs)("div", {
            className: as.sc,
            children: [
                (0, o.jsx)("div", {
                    className: as.kR,
                    children: (0, o.jsx)(eX.eu, { src: s, "aria-label": t.username, size: eK._3.SIZE_32, ...i }),
                }),
                (0, o.jsx)(ec.D, {
                    variant: "heading-sm/normal",
                    className: as.FS,
                    color: "text-strong",
                    children: ef.intl.format(ef.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var an = s(579245),
    aa = s(369805);
let ar = function () {
    let e = (0, aa.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, o.jsx)(ez, { text: e });
};
function al() {
    let e = (0, g.bG)([nC.A], () => nC.A.getForSkuAndInterval((0, ek.mH)(t7.pe.TIER_0), t7.WT.MONTH));
    return null != e ? (0, ek.sS)(e) : "\u2026";
}
var ac = s(508556);
let ao = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        i = (0, tM.TM)();
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: ac.YU,
        children: [
            (0, o.jsx)(tV, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: ac.wG,
                assetClassName: ac.lu,
            }),
            (0, o.jsx)(tB, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: ac.nJ,
                carContainerClassName: ac.IN,
                hammerContainerClassName: ac.Gj,
                keyContainerClassName: ac.FV,
                starContainerClassName: ac.E1,
                boltAssetClassName: ac.j7,
                carAssetClassName: ac.or,
                hammerAssetClassName: ac.Wv,
                keyAssetClassName: ac.rs,
                starAssetClassName: ac.OY,
            }),
        ],
    });
};
var ad = s(14057);
let au = d.memo(
    d.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
            r = al(),
            l = ae.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            c = (0, at.A)(),
            d = null != c,
            { visibilityPercentageRef: u, visibilityPercentage: x } = eF(
                !(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
            ),
            f = (0, na.b)(),
            p = !d && f.length > 0,
            h = (0, eB.c)(eE.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            A = (0, nT.ar)() && !N,
            C = (0, eG.O)(),
            E = (null != C && t7.U4.includes(C.discountId)) || N;
        return (0, o.jsx)(b.f5, {
            value: a,
            children: (0, o.jsx)("div", {
                ref: t,
                className: m()(ad.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, o.jsx)("div", {
                    ref: u,
                    children: (0, o.jsxs)("div", {
                        className: ad.hQ,
                        children: [
                            (0, o.jsx)(ao, { containerVisibilityPercentage: x }),
                            A && (0, o.jsx)(ar, {}),
                            (0, o.jsx)("div", {
                                className: ad.s8,
                                children: (0, o.jsx)(tj.F, {
                                    forceLevel: 1,
                                    children: (0, o.jsx)(ec.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: ad.wx,
                                        children: ef.intl.string(ef.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, o.jsxs)("div", {
                                className: ad.rf,
                                children: [
                                    d &&
                                        (0, o.jsx)("div", {
                                            className: ad.eZ,
                                            children: (0, o.jsx)(ai, { referrer: c }),
                                        }),
                                    p &&
                                        (0, o.jsx)("div", {
                                            className: ad.Qn,
                                            children: (0, o.jsx)(an.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, o.jsxs)("div", {
                                        className: A ? ad.es : ad.UJ,
                                        children: [
                                            (0, o.jsx)(to.A, {
                                                size: "md",
                                                fullWidth: A,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? t7.pe.NONE : i,
                                                buttonTextOverride: E ? ef.intl.string(ef.t["2pG5Ga"]) : void 0,
                                            }),
                                            !A && (0, o.jsx)(ej.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: ad.iQ,
                                        children: (0, o.jsx)(eo.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: l
                                                ? ef.intl.string(ef.t.jHqrJW)
                                                : ef.intl.format(ef.t.kt9wxs, { cheapestMonthlyPrice: r }),
                                        }),
                                    }),
                                    null != h &&
                                        "marketingPageBanner" === h.properties.properties.oneofKind &&
                                        (0, o.jsx)(eW.x, {
                                            componentId: h.id,
                                            promotionId: h.promotionId,
                                            promotionBannerMarketingComponentFields:
                                                h.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    }),
);
var am = s(820081),
    ax = s(140735),
    ag = s(401432),
    af = s(580630),
    ap = s(795269),
    ah = s(84483),
    aN = s(701974),
    aA = s(55647),
    aj = s(202600);
function ab(e) {
    let { includes: t } = e;
    return t
        ? (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(am.B, { size: "sm", color: ea.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, o.jsx)(ax.A, { children: ef.intl.string(ef.t["tq+6t/"]) }),
              ],
          })
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(ag.a, { size: "xs", color: ea.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, o.jsx)(ax.A, { children: ef.intl.string(ef.t.l4qZrp) }),
              ],
          });
}
function aC(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, o.jsxs)("tr", {
        className: m()(aA.nM, aA.WQ),
        children: [
            (0, o.jsx)("th", {
                scope: "row",
                className: aA.nx,
                children: (0, o.jsx)(eo.E, { variant: "text-md/medium", children: t }),
            }),
            (0, o.jsx)("td", {
                className: aA.Hn,
                children:
                    null != s.text
                        ? (0, o.jsx)(eo.E, { variant: "text-md/medium", children: s.text })
                        : (0, o.jsx)(ab, { includes: !!s.includes }),
            }),
            (0, o.jsx)("td", {
                className: aA.Hn,
                children:
                    null != i.text
                        ? (0, o.jsx)(eo.E, { variant: "text-md/medium", children: i.text })
                        : (0, o.jsx)(ab, { includes: !!i.includes }),
            }),
        ],
    });
}
function aE(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, o.jsxs)("tbody", {
        children: [
            (0, o.jsx)("tr", {
                className: m()(aA.nM, aA.Gf),
                children: (0, o.jsxs)("td", {
                    className: aA.nx,
                    colSpan: 3,
                    children: [
                        (0, o.jsx)(ec.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, o.jsx)(eo.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, o.jsx)(aC, { ...e }, e.id)),
        ],
    });
}
function aT(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === t7.PremiumTypes.TIER_0 ? ef.intl.string(ef.t.tUbSDK) : ef.intl.string(ef.t.Ipxkog);
    return (0, o.jsxs)("div", {
        className: aA.nn,
        children: [
            (0, o.jsxs)("div", {
                className: aA.KS,
                children: [
                    (0, o.jsx)(eu.t, { colorClass: aA.oG }),
                    (0, o.jsx)(ec.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, o.jsx)(ec.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aR(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, af.$g)(s.amount, s.currency);
    return (0, o.jsx)("thead", {
        children: (0, o.jsxs)("tr", {
            className: aA.U1,
            children: [
                (0, o.jsx)("th", {
                    scope: "col",
                    className: aA.Cr,
                    children: (0, o.jsx)(ec.D, { variant: "heading-xl/bold", children: ef.intl.string(ef.t.ED4UVD) }),
                }),
                (0, o.jsx)("th", {
                    scope: "col",
                    className: aA.Hn,
                    children: (0, o.jsx)(aT, {
                        premiumType: t7.PremiumTypes.TIER_0,
                        priceString: (0, af.$g)(t.amount, t.currency),
                    }),
                }),
                (0, o.jsx)("th", {
                    scope: "col",
                    className: aA.Hn,
                    children: (0, o.jsx)(aT, { premiumType: t7.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let av = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = t7.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, ew.V)(),
            l = r?.subscriptionTrial?.skuId,
            c = (0, eG.O)(),
            u = (0, ei.YJ)(c),
            x = null != c && (0, ei.U9)(c, t7.pe.TIER_2) && u === t7.gD.PREMIUM_MONTH_TIER_2,
            g = (0, ei.N1)(u),
            f = null != g ? `${g}/${(0, ek.FJ)(t7.WT.MONTH)}` : "",
            p = (0, ek.JM)(t7.gD.PREMIUM_MONTH_TIER_0),
            h = (0, ek.JM)(t7.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, sd.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: ef.intl.string(ef.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: ef.intl.string(ef.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: ef.intl.string(ef.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: ef.intl.string(aN.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, iA.lk)(iI.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sk.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sL.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, ah.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ef.intl.string(ef.t.NG1e6l),
                            subtitle: ef.intl.format(sC.default.uJcbMv, {
                                termsLink: eM.A.getArticleURL(e7.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ef.intl.string(sC.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: ef.intl.string(sC.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: ef.intl.string(sF.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: ef.intl.formatToPlainString(ef.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: ef.intl.string(iE.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: ef.intl.string(ef.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: ef.intl.string(ef.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: ef.intl.string(ef.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: ef.intl.string(ef.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: ef.intl.string(ef.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: ef.intl.string(ef.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: ef.intl.string(ef.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: ef.intl.string(ef.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: ef.intl.string(ef.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, ek.EJ)(t7.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, ek.EJ)(t7.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: ef.intl.string(ef.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: ef.intl.string(ef.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: ef.intl.string(ef.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: ef.intl.string(ef.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: ef.intl.formatToPlainString(ef.t.nyhDpw, {
                                        numBoosts: t7.M4,
                                        percentageOff: (0, af.l9)(nb.default.locale, t7.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: ef.intl.string(ef.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: ef.intl.string(ef.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: ef.intl.string(ef.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: ef.intl.formatToPlainString(ef.t["8crdzJ"], { maxChars: e7.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: ef.intl.string(ef.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (i) t = null;
        else {
            let e = null != r ? ef.intl.string(ef.t.IBYG5U) : ef.intl.string(ef.t.TR2B4T);
            t = (0, o.jsx)(ap.R, { className: m()(aA.Io, aA.SP), text: e });
        }
        let A = l === t7.pe.TIER_0 || n === t7.PremiumTypes.TIER_0;
        return (0, o.jsx)(b.f5, {
            value: a,
            children: (0, o.jsxs)("div", {
                className: m()(aA.zr, s),
                children: [
                    (0, o.jsx)(ec.D, {
                        className: aA.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: ef.intl.string(ef.t.DbPgAd),
                    }),
                    (0, o.jsxs)("div", {
                        className: aA.wY,
                        children: [
                            (0, o.jsxs)("div", {
                                className: m()(aA.fO, { [aA.Vd]: A, [aA.hA]: !A }),
                                children: [
                                    !A && t,
                                    (0, o.jsx)("div", { className: aA.xQ }),
                                    (0, o.jsxs)("div", {
                                        className: aA.wN,
                                        children: [
                                            (0, o.jsx)("img", { src: aj, alt: "", className: aA.kQ }),
                                            (0, o.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: aA.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)("table", {
                                className: aA.tp,
                                children: [
                                    (0, o.jsx)(aR, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, d.createElement)(aE, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aI = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, d.useCallback)(
                (e) => {
                    let s = l.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, n] = (0, d.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, r] = (0, d.useState)(e[0]);
        (0, d.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && r(e[0]);
        }, [i]);
        let l = (0, d.useRef)({});
        return (
            (0, d.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        n((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(l.current).forEach((t) => {
                        null != t && e.observe(t);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, d.useMemo)(
                    () =>
                        e.reduce(
                            (e, t, i) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        ((l.current[t] = e), null != e && (e.id = t));
                                    },
                                    scrollToSection: () => s(t),
                                    order: i,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, s],
                ),
                activeSectionId: a,
                setActiveSectionId: r,
            }
        );
    };
var a_ = s(818348),
    aS = s(773188);
function aP(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, o.jsx)(nk, { innerRef: t }) : (0, o.jsx)(nL.jP, { innerRef: t });
}
let ay = () => {
    let e = (0, x.zy)();
    (0, S.P)(_);
    let t = d.useRef(null),
        s = d.useRef(null),
        i = d.useRef(null),
        n = d.useRef(null),
        a = d.useRef(null),
        r = d.useRef(null),
        l = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        [c, u] = d.useState(!1),
        [f, p] = d.useState(!1),
        [h, N] = d.useState(!1),
        [A, C] = d.useState(!1),
        E = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        T = null != E ? (0, ek.EL)(E) : null,
        R = null != T ? ek.Ay.getSkuIdForPlan(T.planId) : null,
        v = null !== R && R !== t7.pe.TIER_2 ? t7.pe.TIER_2 : null,
        I = (0, eL.cg)(),
        { analyticsLocations: P } = (0, b.Ay)(j.A.PREMIUM_MARKETING);
    d.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, sM.A0)({ location: "PremiumMarketingHome" }),
        D = (0, nc.DK)(nl.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, iA.lk)(iI.rE.NITRO_HOME_MARKETING),
        M = D && O ? n6.NI.COMBINED_ORBS : O ? n6.NI.ORB_MULTIPLIER : D ? n6.NI.ORB_REWARDS : null,
        U = d.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? M
                : t === n6.NI.THREE_P_PROMOTIONS
                  ? y
                      ? n6.NI.CALL_OF_DUTY
                      : n6.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, M]);
    nt(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = aI([nB.HOME, nB.WHATS_NEW, nB.BEST_OF_NITRO, nB.PLANS, nB.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: z } = G,
        W = (function (e) {
            let { location: t } = e;
            return no.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, o.jsxs)("div", {
            ref: s,
            className: m()(aS.kL, aS.Gd, aS.iI, { [aS.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(nw, { className: aS.yH }),
                (0, o.jsx)(nX, { navBarSections: G, activeSectionId: w }),
                (0, o.jsxs)("div", {
                    className: aS.Qr,
                    children: [
                        (0, o.jsx)("div", {
                            className: aS.qY,
                            ref: B.ref,
                            children: (0, o.jsx)(Y.L, {
                                innerRef: n,
                                onChange: (e) => u(e),
                                threshold: 0,
                                active: !0,
                                children: (0, o.jsx)(au, {
                                    ref: n,
                                    subscriptionTier: v,
                                    isEligibleForBogoPromotion: I,
                                }),
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: aS.So,
                            ref: H.ref,
                            children: (0, o.jsx)(n9, { shouldLoadVideo: A, isReducedMotion: l }),
                        }),
                        (0, o.jsx)("div", {
                            className: aS.KQ,
                            ref: F.ref,
                            children: (0, o.jsx)(n4, { shouldLoadVideo: A, isReducedMotion: l }),
                        }),
                        (0, o.jsx)("div", {
                            className: aS.s5,
                            ref: V.ref,
                            children: (0, o.jsx)(
                                Y.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, o.jsx)(aP, { innerRef: i, isPlanSelectUiRedesignEnabled: W }),
                                },
                                W ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, o.jsx)("div", { className: aS.aC, ref: z.ref, children: (0, o.jsx)(av, {}) }),
                    ],
                }),
                (0, o.jsx)(Y.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (L.default.track(e7.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            N(!0));
                    },
                    children: (0, o.jsx)("div", { ref: a, className: aS._Z }),
                }),
                (0, o.jsx)(nY, { ref: r }),
                (0, o.jsx)(nF, { isVisible: !c && !f && A, subscriptionTier: v, isEligibleForBogoPromotion: I }),
                (0, o.jsx)(nw, { className: aS.MF }),
            ],
        });
    return (0, o.jsx)(sx.N, {
        theme: a_.NJ.DARK,
        children: (e) => (0, o.jsx)(K.Gt, { className: m()(aS.XG, e), ref: t, children: X }),
    });
};
var aD = s(862482),
    aO = s(412260),
    aM = s(662367),
    ak = s(374403),
    aL = s(396375),
    aU = s(815846),
    aG = s(370049);
let aw = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nT.ar)();
    if (null == i) return null;
    let l = null != i ? ek.Ay.getPremiumPlanItem(i) : null;
    if (
        (ek.Ay.isBoostOnlySubscription(i)
            ? (t = ef.intl.string(ef.t.Uj0md3))
            : null != l && (t = ek.Ay.getTierDisplayNameByPlanId(l.planId)),
        null == t)
    )
        return null;
    function c() {
        return (0, eD.openUserSettings)(ey.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != l ? ek.Ay.getSkuIdForPlan(l.planId) : null) === t7.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, o.jsxs)(sg.Z, {
            className: m()(aG.kL, n, { [aG.He]: r }),
            type: sg.Z.Types.CUSTOM,
            children: [
                (0, o.jsx)(sD.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: m()(aG.Kk, { [aG.Pt]: r }),
                }),
                (0, o.jsx)(eo.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? ef.intl.format(ef.t["tYuv+T"], {
                              helpdeskArticle: eM.A.getArticleURL(e7.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: c,
                          })
                        : ef.intl.format(ef.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: c }),
                }),
            ],
        })
    );
};
var aB = s(978836);
let aH = function (e) {
    let { lifted: t = !1 } = e;
    return (0, o.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: m()(aB.zr, { [aB.N]: t }),
        children: [
            (0, o.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, o.jsx)("stop", { className: aB.eq }),
                        (0, o.jsx)("stop", { offset: "0.339235", className: aB.l_ }),
                        (0, o.jsx)("stop", { offset: "0.492065", className: aB.sM }),
                        (0, o.jsx)("stop", { offset: "0.823236", className: aB.zi }),
                        (0, o.jsx)("stop", { offset: "0.899558", className: aB.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aF = s(900797),
    aV = s(847374),
    az = s(812993),
    aW = s(614268);
function aY(e) {
    let { className: t } = e;
    return (0, o.jsx)(az.Lp, { className: m()(aW.T, t), text: ef.intl.string(ef.t.EYxi0o) });
}
var aK = s(904788),
    aX = s(507553);
let aZ = "/assets/5b4fec8511c3676a.svg",
    aJ = "/assets/0838bda6ecd20d91.svg";
function aQ(e, t, s) {
    return (0, ic.M)(e) ? t : s;
}
var aq = s(872461);
function a$(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, o.jsxs)(nK.D, {
        onClick: s,
        className: aq.customButton,
        children: [
            t ? ef.intl.string(ef.t.maZaN3) : ef.intl.string(ef.t["37C26f"]),
            t
                ? (0, o.jsx)(aF.t, { size: "md", color: "currentColor", className: aq.arrow })
                : (0, o.jsx)(aV.a, { size: "md", color: "currentColor", className: aq.arrow }),
        ],
    });
}
function a0(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: r,
            isNew: l = !1,
            isEarlyAccess: c = !1,
        } = e,
        { analyticsLocations: d } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, o.jsx)(b.f5, {
        value: d,
        children: (0, o.jsxs)("div", {
            className: m()(aq.perkCard, i),
            children: [
                l
                    ? (0, o.jsx)(aK.A, {
                          className: aq.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                c ? (0, o.jsx)(aY, { className: aq.perkCardEarlyAccessBadge }) : null,
                (0, o.jsx)("img", { src: n, alt: "", className: m()(a, aq.perksCardArt) }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsxs)(ec.D, {
                            variant: "heading-lg/extrabold",
                            className: aq.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-sm/normal",
                            className: aq.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a1 = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = d.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, io.Ay)(),
                n = (0, im.X)("usePerkCards"),
                a = (0, tO.bG)([O.default], () => {
                    let e = O.default.getCurrentUser();
                    return ek.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, ek.EJ)(t7.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: ef.intl.string(ef.t.SS87rQ),
                    description: ef.intl.string(ef.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: ef.intl.string(ef.t["5cYMu0"]),
                    description: ef.intl.string(ef.t.vxk9va),
                    imageSource: aQ(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: ef.intl.string(ef.t["/xvEMy"]),
                    description: ef.intl.string(ef.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: ef.intl.string(ef.t.OuItFi),
                    description: ef.intl.string(ef.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: ef.intl.string(ef.t["R2IV/Q"]),
                    description: ef.intl.string(ef.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: ef.intl.string(ef.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? ef.intl.formatToPlainString(ef.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : ef.intl.formatToPlainString(ef.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (aX.A.setState({ scrollPosition: iq._F.TRY_IT_OUT }),
                                    t(ey.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? ef.intl.format(ef.t.aj1pfZ, { onCheckItOutClick: t })
                            : ef.intl.format(ef.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ef.intl.string(ef.t.BUScid),
                    description: ef.intl.string(ef.t.vN6XpQ),
                    imageSource: aQ(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ef.intl.string(ef.t.Bv8Pfk),
                    description: ef.intl.string(ef.t.JMfaTU),
                    imageSource: aQ(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ef.intl.string(ef.t.Bv8Pfk),
                    description: ef.intl.string(ef.t.JMfaTU),
                    imageSource: aQ(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ef.intl.string(ef.t["lGcW+c"]),
                    description: ef.intl.string(ef.t["/fDyO+"]),
                    imageSource: aQ(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ef.intl.string(ef.t["1c+xwT"]),
                    description: ef.intl.string(ef.t.hJG8ZN),
                    imageSource: aQ(i, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ef.intl.string(ef.t.tzdIwI),
                    description: ef.intl.string(ef.t.hJG8ZN),
                    imageSource: aQ(i, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ef.intl.string(ef.t.tzdIwI),
                    description: ef.intl.string(ef.t.hJG8ZN),
                    imageSource: aQ(i, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: ef.intl.string(ef.t.RSXQYO),
                    description: ef.intl.string(ef.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: ef.intl.string(ef.t["uZt5q/"]),
                    description: ef.intl.string(ef.t.ZK3ZoX),
                    imageSource: aQ(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: ef.intl.formatToPlainString(ef.t.jqhAdL, { premiumMaxSize: r }),
                    description: ef.intl.formatToPlainString(ef.t["HI+cfm"], { premiumMaxSize: r }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: ef.intl.string(ef.t.NaGpTf),
                    description: ef.intl.string(ef.t["A8O/Qw"]),
                    imageSource: aQ(i, i$, i0),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aq }),
        l = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        { analyticsLocations: c } = (0, b.Ay)(),
        u = [
            r.emoji,
            r.streaming,
            r.upload,
            r.customAppIcons,
            r.soundboard,
            r.videoBackground,
            r.superReactions,
            r.stickersPremiumPerk,
            r.badgeAlt,
        ];
    return (0, o.jsxs)("div", {
        className: m()(aq.perksContainer, t, {
            [aq.partiallyHidden]: i && !n,
            [aq.subscriberNitroHome]: i,
            [aq.reducedMotion]: l,
        }),
        children: [
            (0, o.jsx)(ec.D, {
                variant: "heading-xxl/extrabold",
                className: aq.perksTitle,
                children: i ? ef.intl.string(ef.t.QX14gI) : ef.intl.string(ef.t.RGadQR),
            }),
            (0, o.jsx)("div", {
                className: m()(aq.perkCardContainer, { [aq.perkCardContainerExpanded]: n }),
                children: u.map((e) => null != e && (0, o.jsx)(a0, { ...e }, e.title)),
            }),
            i &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("div", {
                            className: m()({ [aq.sizeGizmo]: !n, [aq.sizeGizmoExpanded]: n }),
                            children: (0, o.jsx)(a$, {
                                onClick: function () {
                                    (L.default.track(e7.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: c,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, o.jsx)("div", { className: m()(aq.cover, { [aq.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a2 = s(194509),
    a3 = s(317587);
let a7 = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: e7.JJy.MARKETING_FLOATING_CTA },
        l = (0, io.Ay)(),
        c = (0, nU.M)(l);
    return (0, o.jsx)(en.animated.div, {
        className: m()(a3.iE, { [a3.H8]: i, [a3.q4]: !t }),
        style: a,
        children: (0, o.jsxs)("div", {
            className: i ? a3.zW : a3.iJ,
            children: [
                (0, o.jsx)(aL.A, {
                    color: c ? aD.XD.BRAND_INVERTED : void 0,
                    className: m()(a3.x6, { [a3.Ph]: c }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : a3.PJ,
                }),
                (0, o.jsx)(a2.A, { className: a3.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var a6 = s(386564);
function a8(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: r,
            isEligibleForBogoPromotion: l,
        } = e,
        c = l
            ? (0, o.jsx)(aL.A, {
                  color: r ? aD.XD.BRAND_INVERTED : void 0,
                  className: m()(a6.x6, a6.Ph, n, { [a6.Sq]: t && a, [a6.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : a6.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, o.jsx)(aL.A, {
                  color: r || !a ? aD.XD.BRAND_INVERTED : void 0,
                  className: m()(a6.x6, a6.Ph, n, { [a6.Sq]: t && a, [a6.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, o.jsx)(a2.A, { className: m()(a6.x6, n), color: a ? void 0 : aD.XD.WHITE });
    return (0, o.jsxs)("div", { className: m()(a6.UD, i), children: [c, " ", d] });
}
function a5() {
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(aK.p, { className: a6.zd }),
            (0, o.jsx)(aK.p, { className: a6.G }),
            (0, o.jsx)(aK.p, { className: a6.zy }),
            (0, o.jsx)(aK.p, { className: a6.GX }),
        ],
    });
}
function a9(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = al();
    return (0, o.jsx)(eo.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: m()(a6.h_, { [a6.If]: s, [a6.jn]: i }),
        children: ef.intl.format(ef.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a4 = d.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, eU.QQ)(),
        c = (0, nT.ar)(),
        d = (0, eL.cg)(),
        u = (0, na.b)().length > 0,
        x = ef.intl.string(ef.t.YCZldK);
    return (0, o.jsx)(b.f5, {
        value: r,
        children: (0, o.jsxs)("div", {
            ref: t,
            className: m()(a6.kL, s, { [a6.V1]: !c, [a6.Q4]: !c && u }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, o.jsxs)("div", {
                    className: c ? a6.I6 : a6.G1,
                    children: [
                        (0, o.jsx)(tj.F, {
                            forceLevel: 1,
                            children: (0, o.jsx)(ec.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: x,
                            }),
                        }),
                        u
                            ? (0, o.jsx)("div", {
                                  className: a6.DF,
                                  children: (0, o.jsx)(an.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, o.jsx)(a9, {}),
                        d || l
                            ? (0, o.jsx)("div", {
                                  className: a6.UD,
                                  children: (0, o.jsx)(a2.A, { className: m()(a6.x6, i), color: aD.XD.WHITE }),
                              })
                            : (0, o.jsx)(a8, {
                                  subscriptionTier: n,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        u && (0, o.jsx)(a9, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, o.jsx)(a5, {}),
            ],
        }),
    });
});
var re = s(22118),
    rt = s(145359),
    rs = s(377770);
function ri(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, o.jsx)(aH, { lifted: t }) : null;
}
let rn = () => {
        (0, S.P)(_);
        let e = d.useRef(null),
            t = d.useRef(null),
            s = d.useRef(null),
            i = (0, io.Ay)(),
            n = (0, ic.M)(i),
            [a, r] = d.useState(!1),
            [l, c] = d.useState(!1),
            [u, x] = d.useState(!1),
            [f, p] = d.useState(!1),
            h = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            N = null != h ? (0, ek.EL)(h) : null,
            A = null != N ? ek.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== A && A !== t7.pe.TIER_2 ? t7.pe.TIER_2 : null,
            E = (0, ew.V)(),
            T = E?.subscriptionTrial?.skuId,
            R = (0, nT.ar)(),
            v = (0, eL.cg)(),
            I = v ?? !1,
            P = (0, g.bG)([aO.A], () => {
                let e = aO.A.getMarketingComponentByType(eE.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, ak.Q)(),
            { analyticsLocations: D } = (0, b.Ay)(j.A.PREMIUM_MARKETING);
        d.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, o.jsx)("div", {
            className: rs.dY,
            children: (0, o.jsx)(Y.L, {
                innerRef: e,
                onChange: (e) => c(e),
                threshold: 0.1,
                active: !0,
                children: (0, o.jsx)(nd.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, o.jsx)(aL.A, {
                        showIcon: !1,
                        subscriptionTier: t7.pe.TIER_0,
                        className: rt.Ph,
                        look: aD.pR.OUTLINED,
                        color: aD.XD.WHITE,
                        buttonShineClassName: rt.Qr,
                    }),
                    tier2CTAButton:
                        T === t7.pe.TIER_0
                            ? (0, o.jsx)(aL.A, {
                                  showIcon: !1,
                                  subscriptionTier: t7.pe.TIER_2,
                                  className: rt.Ph,
                                  look: aD.pR.OUTLINED,
                                  color: aD.XD.WHITE,
                                  buttonShineClassName: rt.Qr,
                              })
                            : (0, o.jsx)(aL.A, {
                                  color: aD.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: t7.pe.TIER_2,
                                  className: rt.Ph,
                                  hasActivePromotion: I,
                                  textOptions: { textClassName: rt.Ac },
                                  buttonShineClassName: rt.Qr,
                              }),
                }),
            }),
        });
        return (0, o.jsxs)("div", {
            className: rs.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(aw, { premiumSubscription: h, className: m()(rs.R3, { [rs.aZ]: R }) }),
                R &&
                    (0, o.jsxs)("div", {
                        className: rs.n1,
                        children: [
                            (0, o.jsx)(ri, { inOfferExperience: R }),
                            (0, o.jsx)(sr.l, {
                                className: rs.ij,
                                size: "md",
                                location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, o.jsxs)("div", {
                    className: m()({ [rs.V1]: !R }),
                    children: [
                        null != P && (0, o.jsx)(aU.c, { className: rs.w$, config: P }),
                        (0, o.jsxs)("div", {
                            className: rs.iS,
                            children: [
                                !R &&
                                    (0, o.jsx)(sr.l, {
                                        className: rs.ij,
                                        size: "md",
                                        location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, o.jsx)(Y.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, o.jsx)(a4, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: m()({ [rs.p7]: R, [rs.Pw]: R, [rs.AG]: v, [rs.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, o.jsx)("div", { className: rs.Ol, children: (0, o.jsx)(aM.I, { component: y }) }),
                O,
                (0, o.jsx)(a1, { className: rs.B_ }),
                (0, o.jsx)("div", { className: rs.aC, children: (0, o.jsx)(re.A, { className: rs.JQ, hideCTAs: !0 }) }),
                (0, o.jsx)("div", { className: rs.hz }),
                (0, o.jsx)(a7, {
                    isVisible: !a && !l && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, o.jsx)(Y.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !u &&
                            (L.default.track(e7.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            x(!0));
                    },
                    children: (0, o.jsx)("div", { ref: s, className: rs._Z }),
                }),
                (0, o.jsx)("img", {
                    src: ni,
                    className: rs.Kw,
                    width: 112,
                    height: 85,
                    alt: ef.intl.string(ef.t.X4IxWL),
                }),
            ],
        });
    },
    ra = function (e) {
        let { entrypoint: t } = e,
            s = (0, ew.V)(),
            i = (0, eG.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, nr.NF)({ trialOffer: s }),
            a = (0, nr.Tp)(),
            r = (0, g.bG)([e1.A], () => e1.A.getReminderStateId());
        switch (
            (d.useEffect(() => {
                (!0 === n && (0, nr.QG)(), !0 === a && (0, nr.ne)(r), (null != s || null != i) && (0, w.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case t7.tU.UserSettings:
                return (0, o.jsx)(rn, {});
            case t7.tU.ApplicationStoreHome:
                return (0, o.jsx)(ay, {});
            default:
                return null;
        }
    };
var rr = s(531296);
let rl = function (e) {
    let { entrypoint: t = t7.tU.UserSettings } = e;
    (0, S.P)(_);
    let s = (0, E.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = F("nitro_member_hub_header"),
        n = z("nitro_member_hub_header"),
        a = (0, G.ds)(),
        { sourceAnalyticsLocations: r, analyticsLocations: l } = (0, b.Ay)(j.A.PREMIUM_MARKETING),
        c = (0, g.bG)([k.A], () => k.A.hasFetchedSubscriptions()),
        u = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        v = (0, g.bG)([O.default], () => O.default.getCurrentUser()),
        I = v?.id,
        B = (0, ew.V)(),
        H = (0, eG.O)({ includePremiumGroupDiscount: !0 }),
        V = (0, T.Y)(t7.T7),
        [W, Y] = d.useState(!0),
        K = d.useRef(0),
        X = (0, U.YE)(v, t7.PremiumTypes.TIER_2),
        Z = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === e7.Dmq.CANCELED;
    ((0, na.b)(),
        d.useEffect(() => {
            p.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([C.hP(), C.$o(), (0, h.zS)(null, null, e7.tF5.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    Y(!1));
            });
        }, []),
        d.useEffect(() => {
            W ||
                L.default.track(e7.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: K.current,
                });
        }, [r, W]),
        d.useEffect(() => {
            s && (null != B || null != H) && (0, w.u1)(B, H);
        }, [s, B, H]));
    let Q = (0, x.zy)(),
        q = d.useRef(!1),
        $ = c && u && V,
        [ee, et] = d.useState($);
    ($ && !ee && et(!0),
        d.useEffect(() => {
            if (q.current || !$) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: t7.pe.TIER_0, nitro: t7.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((q.current = !0),
                (0, y.bG)(e7.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [$, Q.search, l]));
    let es = (0, g.bG)([D.A], () => D.A.enabled),
        ei = t === t7.tU.ApplicationStoreHome,
        en = es
            ? (0, o.jsx)(N.A, {})
            : s
              ? (0, o.jsx)(R.uK, {})
              : ei && X
                ? (0, o.jsx)(b.f5, { value: l, children: (0, o.jsx)(nn, { userId: I }) })
                : ee
                  ? null
                  : (0, o.jsx)("div", { className: m()(rr.kL, rr.Lq), children: (0, o.jsx)(f.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, o.jsxs)(o.Fragment, { children: [ei && (0, o.jsx)(A.A, {}), en] });
    }
    return (0, o.jsx)(b.f5, { value: l, children: (0, o.jsx)(ra, { entrypoint: t }) });
};
