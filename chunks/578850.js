(s.d(t, { A: () => rn }), s(323874), s(14289), s(35956), s(205816));
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
    G = s(474090),
    U = s(881489),
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
    en = s(3900),
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
    eG = s(89366),
    eU = s(724651),
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
    tG = (((a = {}).UP = "up"), (a.DOWN = "down"), a);
let tU = (e) => {
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
                    children: (0, o.jsx)(tU, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.UP,
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
                    children: (0, o.jsx)(tU, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.DOWN,
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
                    children: (0, o.jsx)(tU, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.DOWN,
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
                    children: (0, o.jsx)(tU, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tL.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.UP,
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
                    children: (0, o.jsx)(tU, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tL.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.UP,
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
                  children: (0, o.jsx)(tU, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tL.SINE },
                      parallaxAnimationData: {
                          pathDirection: tG.UP,
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
                    children: (0, o.jsx)(tU, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tL.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tG.UP,
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
            s.e("174016"),
            s.e("852557"),
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
        n = (0, U.Zb)(t);
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
        n = (0, U.Zb)(t),
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
        I = (0, eU.O)(),
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
            r = (0, U.ds)(),
            l = (0, eG.QQ)(),
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
        theme: e7.NJ8.DARKER,
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
var sD = s(789861),
    sO = s(592909),
    sM = s(398523),
    sk = s(881373),
    sL = s(555393),
    sG = s(852218),
    sU = s(483489),
    sw = s(310235),
    sB = s(334551);
let sH =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sF =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
function sV() {
    let { analyticsLocations: e } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sO.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sO.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sk.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sM.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = null === (0, sL.N)(),
        r = (0, sd.b)("useHardwarePartnerPerkCards"),
        { currentDate: l, nDaysInMonth: c } = (0, d.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, d.useMemo)(() => {
        let d = r ? void 0 : ef.intl.string(ef.t.y2b7CA),
            u = t
                ? {
                      id: sh.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ef.intl.string(sw.default.F0b4Z8),
                      description: ef.intl.formatToPlainString(sw.default["hworR+"], { validDates: (0, sD.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ef.intl.formatToPlainString(sw.default.g7iyvR, { date: (0, sD.mh)() }),
                      caption: (0, o.jsx)("img", { src: sF, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sH,
                      ctaText: ef.intl.string(sw.default.fcopjf),
                      onCtaClick: () =>
                          (0, sU.P)({
                              partnerIds: [sG.Bt],
                              title: ef.intl.string(sw.default.YJsqDS),
                              subtitle: ef.intl.format(sw.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: ef.intl.string(sw.default.Dkm10r),
                                  body: ef.intl.string(sw.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sG.Bt },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
            m = s
                ? {
                      id: sh.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: ef.intl.string(sw.default["IcD/7p"]),
                      description: ef.intl.formatToPlainString(sw.default.hausFi, { date: (0, sD.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: ef.intl.string(sw.default.fxF0Jz),
                      caption: (0, o.jsx)("img", { src: sF, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sH,
                      analyticsOptions: { thirdPartyPartner: sG.Bt },
                  }
                : null,
            x = i
                ? {
                      id: sh.LOGITECH_3PP_CARD_ID,
                      title: ef.intl.string(sB.default.OlObRa),
                      description: ef.intl.format(sB.default.ZGOJ8R, {
                          discountPercent: sk.aW,
                          termsUrl: eM.A.getArticleURL(e7.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: l.getDate() / c,
                      ctaText: ef.intl.string(ef.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sU.P)({
                              partnerIds: [sG.XY],
                              title: ef.intl.string(sB.default["2I7nK+"]),
                              subtitle: ef.intl.format(sB.default.W8jOD0, {
                                  termsUrl: eM.A.getArticleURL(e7.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: d,
                      caption: (0, o.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sG.XY },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
            g = n
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
                      progress: l.getDate() / c,
                      ctaText: ef.intl.string(ef.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sU.P)({
                              partnerIds: [sG.KS],
                              title: ef.intl.string(ef.t["7ioAjs"]),
                              subtitle: ef.intl.format(ef.t.LOYRxB, {
                                  helpCenterLink: eM.A.getArticleURL(e7.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sG.KS },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null;
        return { callOfDutyCard: u, expiredCallOfDutyCard: m, logitechCard: x, steelseriesCard: g };
    }, [r, e, t, s, l, i, c, n, a]);
}
var sz = s(762493);
let sW = "xgpp";
function sY(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, sd.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l } = sV();
    if (!i) return null;
    let c = null != n || null != a || null != r || null != l;
    return (0, o.jsx)(sy, {
        id: sW,
        sectionClassName: m()(sz.uW, sz.Uv, sz.qr),
        heading: (0, o.jsx)(ec.D, {
            variant: "nitro-sm",
            className: m()(sP.R_, sS.U6),
            children: ef.intl.string(ef.t.NG1e6l),
        }),
        beforeGrid: (0, o.jsx)("div", { className: sS.JE, children: (0, o.jsx)(sR, { glowing: t === sW }) }),
        grid: c
            ? (0, o.jsxs)(o.Fragment, {
                  children: [
                      null != n && (0, o.jsx)(sv.S, { ...n, containerClassName: sP.Nr, glowing: s === n.id }),
                      (0, o.jsx)(s_, { containerClassName: sP.Nr }),
                      null != r && (0, o.jsx)(sv.S, { ...r, containerClassName: sP.Nr, glowing: s === r.id }),
                      null != l && (0, o.jsx)(sv.S, { ...l, containerClassName: sP.Nr, glowing: s === l.id }),
                      null != a && (0, o.jsx)(sv.S, { ...a, containerClassName: sP.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var sK = s(313133),
    sX = s(67423);
let sZ = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, b.Ay)(j.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsx)(en.animated.div, {
        className: m()(sK.iE, { [sK.q4]: !t }),
        style: l,
        children: (0, o.jsxs)("div", {
            className: sK.iJ,
            children: [
                (0, o.jsx)("img", { alt: "", src: sX, className: sK.oU }),
                (0, o.jsxs)("div", {
                    className: sK.iQ,
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
                                s.e("174016"),
                                s.e("852557"),
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
var sJ = s(761508),
    sQ = s(449543);
function sq(e) {
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
function s$(e) {
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
function s0(e) {
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
var s1 = s(345394);
function s2(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: s1.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s3(e) {
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
function s7(e) {
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
function s6(e) {
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
function s8(e) {
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
function s5(e) {
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
var s9 = s(996682);
function s4(e) {
    let {
        color: t = ea.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, o.jsxs)("svg", {
        ...(0, s9.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function ie(e) {
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
var it = s(78701);
function is(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: it.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ii = s(462887),
    ia = s(736653),
    ir = s(259065),
    il = s(206835),
    ic = s(591179),
    io = s(462463),
    id = s(219882),
    iu = s(19886),
    im = s(425713),
    ix = s(696292),
    ig = s(192444),
    ip = s(617986),
    ih = s(892227),
    iN = s(81466),
    iA = s(1889),
    ij = s(749012);
let ib = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, J.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ih.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, o.jsxs)("div", {
        className: ij.kL,
        children: [
            null != s &&
                (0, o.jsxs)("div", {
                    className: ij.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: ij.Pf,
                            children: [
                                (0, o.jsx)(iN.CalendarIcon, { size: "sm", color: ea.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(eo.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ef.intl.string(iA.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ef.intl.format(iA.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, o.jsx)("div", { className: ij.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, o.jsxs)("div", {
                    className: ij.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: ij.Pf,
                            children: [
                                (0, o.jsx)(tR.C, { size: "sm", color: ea.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(eo.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ef.intl.string(iA.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ef.intl.format(iA.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var iC = s(758836),
    iE = s(190107),
    iT = s(799544);
function iR(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, ig.lk)(iE.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, J.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, d.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: sh.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ef.intl.string(iA.default.hx5AFp),
                          description: ef.intl.format(iA.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: m()(iT.lH, iT.yK),
                          footerContent: (0, o.jsx)(ib, {}),
                          ctaText: ef.intl.string(iA.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(e7.BVt.COLLECTIBLES_SHOP_WITH_TAB(iC.G2.ORBS)),
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
                          onCtaClick: () => (0, ip.mA)({ fromContent: ix.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iT.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iv = s(975807),
    iI = s(95035),
    i_ = s(989790),
    iS = s(88001),
    iP = s(148155),
    iy = s(817577);
function iD() {
    (0, iv.A)(iS.TE);
}
function iO(e) {
    let t = (0, i_.O9)(),
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
                      title: ef.intl.string(iP.default.YkvksF),
                      description: (0, o.jsxs)(o.Fragment, {
                          children: [
                              ef.intl.formatToPlainString(iP.default.JlyGQj, {
                                  totalSeats: iS.aw,
                                  premiumGroupProductName: (0, iS.DP)(),
                              }),
                              (0, o.jsx)("div", {
                                  className: iT.LF,
                                  children: (0, o.jsx)(iI.A, {
                                      onClick: iD,
                                      children: ef.intl.string(iP.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ef.intl.string(ef.t.oW0eUd),
                      primaryAsset: iy,
                      ctaIcon: eu.t,
                      ctaIconPosition: "start",
                      ctaText: ef.intl.string(ef.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iM = s(562819),
    ik = s(793943),
    iL = s(241988),
    iG = s(655752);
let iU = (0, B.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iw = s(764231),
    iB = s(627380),
    iH = s(30084),
    iF = s(814014),
    iV = s(714206);
let iz =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iW =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iY =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iK() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, ic.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: a, expiredCallOfDutyCard: r, logitechCard: l, steelseriesCard: c } = sV(),
        u = (0, sd.b)("premium_subscriber_home_rewards"),
        x = (0, io.A)({ analyticsLocations: i }),
        f = (0, d.useCallback)(() => {
            (0, eD.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, ir.L)({ analyticsLocations: i }),
            );
        }, [i]),
        p = (0, d.useCallback)(() => {
            (0, eD.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, iM.L)({ analyticsLocations: i }),
            );
        }, [i]),
        h = (0, d.useCallback)(() => {
            (0, eD.openUserSettings)(ey.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === t7.xc.FP_ONLY,
                i = (0, iu.$F)(),
                n = (0, iu.Xb)(),
                a = i?.status === iu.Wo.UPCOMING || s,
                r = i?.status === iu.Wo.WITHHELD,
                l = a || r,
                c = (0, im.N)(i?.id),
                o = (function () {
                    let e = (0, iu.$F)(),
                        t = (0, iG.P)(),
                        s = (0, iu.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iU.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === iu.Wo.WITHHELD) return null;
                    let n = tu()(),
                        a = tu()(s),
                        r = i || e.status === iu.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                u = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion) && !l,
                x = (0, iB.t)(),
                f = (0, iG.P)();
            return (0, d.useMemo)(() => {
                let t,
                    a = null != f ? ef.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iw.T)(t7.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === iu.Wo.UPCOMING
                              ? ef.intl.formatToPlainString(ef.t.a1eKDi, { days: x?.days ?? 0 })
                              : i.status === iu.Wo.WITHHELD
                                ? ((0, iw.T)(i.id, i.tenureReqNumMonths) ?? void 0)
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
                                  (0, iw.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || u ? c.standard : c.ambientLarge) : s && (r = iV),
                    {
                        id: sh.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ef.intl.string(i.nameUnformattedNitro) : s ? ef.intl.string(ef.t.tx9Fvw) : "",
                        pillText: ef.intl.string(ef.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: m()(iF.pq, { [iF.rX]: l, [iF.kE]: u }),
                        caption: null != n ? ef.intl.formatToPlainString(ef.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: o ?? void 0,
                        ctaText: ef.intl.string(ef.t.jVcuVY),
                        onCtaClick: () => (0, iH.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, l, u, n, o, s, x, f, e]);
        })(i),
        A =
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
                                  src: iL,
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
        { nitroOrbsRewardsCard: C, questOrbMultiplierCard: E } = iR("useWhatsNewPerkCards"),
        T = iO(i);
    return (0, d.useMemo)(() => {
        let e = [
                u ? null : a,
                u ? null : l,
                u ? null : c,
                u ? null : r,
                C,
                E,
                T,
                {
                    id: sh.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ef.intl.string(ef.t.OLtTrt),
                    description: ef.intl.string(ef.t["di/pXR"]),
                    onCtaClick: n ? x : f,
                    ctaText: ef.intl.string(ef.t.jVcuVY),
                    primaryAsset: iz,
                },
                {
                    id: sh.CLIENT_THEMES_CARD_ID,
                    title: ef.intl.string(ef.t.acc6h6),
                    description: ef.intl.formatToPlainString(ef.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iY,
                    ctaText: ef.intl.string(ef.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ik.nf)(ik.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: sh.PERMADECOS_CARD_ID,
                    title: ef.intl.string(ef.t.L14NZN),
                    description: ef.intl.string(ef.t.eCZkAI),
                    primaryAsset: (0, o.jsx)(is, { alt: "", ariaHidden: !0 }),
                    ctaText: ef.intl.string(ef.t.jVcuVY),
                    onCtaClick: n ? x : p,
                },
                {
                    id: sh.CUSTOM_APP_ICONS_CARD_ID,
                    title: ef.intl.string(ef.t["GU+wqh"]),
                    description: ef.intl.string(ef.t["1uPk1Z"]),
                    primaryAsset: iW,
                    ctaText: ef.intl.string(ef.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, N), null != A && e.splice(1, 0, A), e.length > s && e.splice(s, e.length - s), e);
    }, [N, A, C, E, T, f, h, p, x, n, a, r, l, c, u]);
}
var iX = s(355097);
let iZ = "/assets/1eb1b74667b4c0f0.svg",
    iJ = "/assets/983b60e4fcaf973b.svg";
var iQ =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iq = [
    { id: "bestof", label: () => ef.intl.string(ef.t.q1u7nQ) },
    { id: "appearance", label: () => ef.intl.string(ef.t.CUnZkZ) },
    { id: "upgrades", label: () => ef.intl.string(ef.t.KC5q8v) },
    { id: "vip", label: () => ef.intl.string(ef.t.DjEAcv) },
];
var i$ = s(18290);
function i0(e) {
    e.stopPropagation();
}
function i1(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, ia.DP)(),
                t = (0, ic.X)("useFavoritesPerkCards"),
                s = (0, iu.Lh)(),
                i = (0, im.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, il.A)({ scrollPosition: iX._F.TRY_IT_OUT, analyticsLocations: n }),
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
                x = (0, io.A)({ analyticsLocations: n }),
                g = (0, d.useCallback)(() => {
                    (0, eD.openUserSettings)(ey.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, ir.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iK(),
                p = (0, d.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = iR("useFavoritesPerkCards"),
                A = iO(n),
                C = (0, d.useMemo)(
                    () => [
                        {
                            id: sh.SERVER_BOOSTS_CARD_ID,
                            title: ef.intl.formatToPlainString(ef.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ef.intl.formatToPlainString(ef.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, o.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != A ? { ...A, categories: ["bestof"] } : null,
                        {
                            id: sh.PROFILES_CARD_ID,
                            title: ef.intl.string(ef.t.xDRab3),
                            description: ef.intl.string(ef.t.yn6fWA),
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, o.jsx)(s$, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sh.HD_VIDEO_CARD_ID,
                            title: ef.intl.string(ef.t["/mQ5gg"]),
                            description: ef.intl.string(ef.t["7WwAXh"]),
                            primaryAsset: (0, o.jsx)(s0, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sh.CLIENT_THEMES_CARD_ID,
                            title: ef.intl.string(ef.t.acc6h6),
                            description: ef.intl.formatToPlainString(ef.t.WQazjs, { themeCount: 20 }),
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iY,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sh.MORE_EMOJIS_CARD_ID,
                            title: ef.intl.string(ef.t.D8vIDT),
                            description: ef.intl.string(ef.t.DRMecB),
                            primaryAsset: (0, o.jsx)(s2, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sh.LARGE_UPLOADS_CARD_ID,
                            title: ef.intl.string(ef.t.nL1WZV),
                            description: (0, id.M6)({
                                legacyCopy: ef.intl.formatToPlainString(ef.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: ef.intl.formatToPlainString(ef.t.teOTfv, {
                                    maxFileSize: (0, ek.EJ)(t7.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, o.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sh.CUSTOM_APP_ICONS_CARD_ID,
                            title: ef.intl.string(ef.t["GU+wqh"]),
                            description: ef.intl.string(ef.t["1uPk1Z"]),
                            ctaText: ef.intl.string(ef.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: iW,
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
                            primaryAsset: iz,
                            categories: ["appearance"],
                        },
                        {
                            id: sh.CUSTOM_SOUNDS_CARD_ID,
                            title: ef.intl.string(ef.t["Cu/oFd"]),
                            description: ef.intl.string(ef.t.czj2aa),
                            primaryAsset: (0, o.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.SPECIAL_STICKERS_CARD_ID,
                            title: ef.intl.string(ef.t.MQoVeb),
                            description: ef.intl.string(ef.t.HGCLZX),
                            primaryAsset: (0, o.jsx)("div", {
                                className: iT.Uc,
                                children: (0, o.jsx)(s6, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.SUPER_REACTIONS_CARD_ID,
                            title: ef.intl.string(ef.t.qERvAA),
                            description: ef.intl.string(ef.t.WkUWzx),
                            primaryAsset: (0, o.jsx)(s8, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ef.intl.string(ef.t.ssVDYQ),
                            description: ef.intl.string(ef.t.aUSRMa),
                            primaryAsset: (0, ii.M)(e) ? iZ : iJ,
                            categories: ["upgrades"],
                        },
                        {
                            id: sh.EARLY_ACCESS_CARD_ID,
                            title: ef.intl.string(ef.t["g/KRY6"]),
                            description: ef.intl.string(ef.t.JzAmJc),
                            primaryAsset: (0, o.jsx)(s5, { alt: "", ariaHidden: !0 }),
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
                                    : (0, o.jsx)(s4, { color: ea.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sh.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ef.intl.string(ef.t["MTD+7w"]),
                            description: ef.intl.string(ef.t.Bhs0s6),
                            ctaText: ef.intl.string(ef.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, o.jsx)(ie, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: sh.PERMADECOS_CARD_ID,
                            title: ef.intl.string(ef.t.L14NZN),
                            description: ef.intl.string(ef.t.eCZkAI),
                            primaryAsset: (0, o.jsx)(is, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, A, a, r, l, c, u, m, g, x, t],
                );
            return (0, d.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, d.useState)(i?.categories[0] ?? iQ.BEST_OF_NITRO),
        r = (0, d.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, o.jsxs)("div", {
        className: i$.uW,
        children: [
            (0, o.jsx)(ec.D, { variant: "nitro-sm", children: ef.intl.string(ef.t["Uh3+CA"]) }),
            (0, o.jsx)(sJ.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i$.Lq,
                "aria-label": ef.intl.string(ef.t["Uh3+CA"]),
                children: iq.map((e) =>
                    (0, o.jsx)(sJ.V.Item, { id: e.id, className: i$.IC, children: e.label() }, e.id),
                ),
            }),
            (0, o.jsx)(
                sQ.A,
                {
                    gap: 20,
                    className: i$.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, o.jsx)(
                                sv.S,
                                { ...e, glowing: t === e.id, containerClassName: i$.Ui, onFocus: i0 },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i2 = s(72979);
let i3 = function (e) {
    let { className: t } = e,
        s = (0, ia.DP)();
    return (0, o.jsx)("img", {
        className: m()(i2.D, t),
        src: (0, ii.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i7 = s(684251);
let i6 = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, o.jsxs)("div", {
              className: m()(i7.kL, i7.Gd, i7.Eg),
              children: [(0, o.jsx)(i3, {}), (0, o.jsx)(so, {}), n],
          })
        : (0, o.jsx)(eA.h, { color: "nitro-pink", className: m()(i7.kL, i7.Gd), offsetBottom: i, children: n });
};
function i8(e) {
    let { glowingPerkId: t = null } = e,
        s = iK();
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
function i5(e, t, s, i) {
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
var i9 = s(92737);
let i4 = "/assets/cd2be35d285d4675.svg",
    ne = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
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
                    s = e.get(i9.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        i5(N ?? "", null != N, E, T);
        let [R, v] = d.useState(!1),
            I = (0, et.p)(),
            P = d.useRef(null),
            [y, D] = d.useState(!1),
            O = null != I && null != c && c.status === e7.Dmq.CANCELED,
            M = (0, ei.iU)(t7.gD.PREMIUM_MONTH_TIER_2, I, c),
            G = !y && O,
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
                  className: m()(i7.xW, i7.Gd),
                  ref: r,
                  children: [
                      (0, o.jsx)(i6, {
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
                                          className: i7.v1,
                                          userDiscountOffer: I,
                                          discountedPrice: M,
                                      }),
                                  }),
                                  (0, o.jsx)(i8, { glowingPerkId: C }),
                                  (0, o.jsx)(sY, { glowingPerkId: C, glowingSectionId: A }),
                                  (0, o.jsx)(i1, { glowingPerkId: C }),
                                  (0, o.jsx)(eC, {
                                      className: i7.Zy,
                                      location: j.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e7.liQ.NITRO_HOME, section: e7.JJy.GIFT_BANNER },
                                  }),
                                  (0, o.jsx)("div", { className: i7.hz }),
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
                                      children: (0, o.jsx)("div", { ref: l, className: i7._Z }),
                                  }),
                                  (0, o.jsx)("img", {
                                      src: i4,
                                      className: i7.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ef.intl.string(ef.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != M &&
                          (0, o.jsx)(sZ, {
                              isVisible: G && R,
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
                    className: m()(i7.kL, i7.Lq, i7.TN, i7.Eg),
                    children: [
                        (0, o.jsx)(so, {}),
                        (0, o.jsx)("div", { className: i7.S, children: (0, o.jsx)(f.y, {}) }),
                    ],
                })
              : (0, o.jsx)("div", { className: m()(i7.kL, i7.Lq), children: (0, o.jsx)(f.y, {}) });
    };
var nt = s(286320),
    ns = s(727949),
    ni = s(440005),
    nn = s(26508);
let na = (0, B.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nr = s(860839);
let nl =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function nc(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: a, height: r },
        src: nl,
        srcSet: `${nl} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var no = s(37537),
    nd = s(783420),
    nu = s(204413),
    nm = s(245383),
    nx = s(824069),
    ng = s(785007),
    nf = s(947910);
function np(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, o.jsxs)("div", {
                    className: nf.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, o.jsx)("div", {
                                className: nf.fQ,
                                children: (0, o.jsx)(tE.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, o.jsxs)(el.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nf.qU,
                            children: [
                                (0, o.jsxs)(el.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nf.NI,
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
                                    className: nf.br,
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
                                                className: nf.yD,
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
                radioBarClassName: m()(nf.tG, { [nf.uA]: s, [nf.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, o.jsx)(ng.$d, {
        ...i,
        options: n,
        value: t,
        size: ng.r9.NOT_SET,
        className: nf.ul,
        withTransparentBackground: !0,
    });
}
var nh = s(773669),
    nN = s(97352),
    nA = s(252424),
    nj = s(526292),
    nb = s(186223),
    nC = s(369827),
    nE = s(803496);
function nT(e) {
    let t = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        s = (0, nC.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nE.A)({
            activeSubscription: t,
            skuIDs: [(0, ek.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nR(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nv(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === t7.Ff.YEAR
          ? ef.intl.format(ef.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : ef.intl.format(ef.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nI = s(614488);
function n_(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, o.jsx)(nd.A, {
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
function nS(e) {
    let { skuId: t, className: s } = e,
        i = t === t7.pe.TIER_2,
        n = (0, ii.q)((0, ia.Ay)()),
        a = (0, no.c)("PlanSelectCard"),
        r = (0, ew.V)(),
        l = r?.subscriptionTrial,
        c = l?.skuId === t,
        u = i && c && null != l,
        x = (0, eU.p)(),
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
                l = nT(t),
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
                f = (0, eU.O)(),
                p = (0, nj.k5)(),
                h = (0, g.bG)([nh.default], () => nh.default.locale),
                N = (0, ei.U9)(f, t),
                A = (0, ei.N1)(n),
                j = (0, ei.N1)(a),
                [b, C] = (0, g.yK)([nN.A], () => [nN.A.get(n), nN.A.get(a)], [n, a]),
                E = null != b ? (0, ek.sS)(b, l) : null,
                T = null != C ? (0, ek.sS)(C, l) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? ef.intl.formatToPlainString(ef.t.IAybsG, {
                              discount: (0, nA.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                v = f?.discount?.planIds,
                I = nR(a, N, v, j, T),
                _ = nR(n, N, v, A, E),
                S = f?.discount.userUsageLimitInterval,
                P = f?.discount.userUsageLimit ?? t7.OJ,
                y = !r || I || _ || null == C ? null : (0, nb.Cj)(C, !1, l),
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
                                ? nv({
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
                            ? nv({
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
                G = M === a ? I : M === n && _;
            return { planRadioOptions: L, selectedPlanId: M, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !G };
        })({ skuId: t }),
        A = i && null == x ? "expressive" : "secondary",
        { buttonText: j } = (0, nm.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nu.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, o.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nI.Ux,
            children: [
                (0, o.jsx)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nI.MY,
                    children: (0, o.jsx)(ec.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nI.ck : nI.JJ,
                        children: i ? ef.intl.string(ef.t.lG6a5x) : ef.intl.string(ef.t["t9uG/o"]),
                    }),
                }),
                (0, o.jsx)(el.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nI.qT,
                    children: i
                        ? (0, o.jsx)(nr.ZP, {
                              featureSet: nr.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, o.jsx)(nr.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, o.jsx)(nx.K, {}),
                u
                    ? (0, o.jsx)("div", {
                          className: nI.qS,
                          role: "separator",
                          children: (0, o.jsx)(eo.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nI.ZV,
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
                    : (0, o.jsx)("hr", { className: nI.yF }),
                (0, o.jsxs)("div", {
                    className: nI.qr,
                    children: [
                        (0, o.jsx)(np, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, o.jsx)(n_, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = m()(nI.Nr, s, { [nI.Fw]: i });
    return i
        ? (0, o.jsxs)(eA.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, o.jsx)("div", {
                      className: nI.kX,
                      "aria-hidden": !0,
                      children: (0, o.jsx)(nc, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, o.jsx)("div", { className: E, children: C });
}
function nP(e) {
    let { className: t } = e,
        s = (0, ii.q)((0, ia.Ay)()),
        i = (0, no.c)("PlanSelectPremiumGroupCard"),
        n = (0, eU.p)(),
        a = null != n,
        r = nT(t7.pe.TIER_2),
        l = (0, g.bG)([O.default], () => O.default.getCurrentUser()),
        { avatarSrc: c, eventHandlers: d } = (0, eQ.A)({ userId: l?.id, size: eK._3.SIZE_32, animateOnHover: !0 }),
        u = (0, g.bG)([nN.A], () => nN.A.get(t7.gD.PREMIUM_GROUP_MONTH)),
        x = (0, ei.N1)(t7.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? ef.intl.format(iP.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iS.DP)(),
              })
            : ef.intl.string(ef.t["2pG5Ga"]),
        h = (0, o.jsx)(nd.A, {
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
        className: m()(nI.Nr, t),
        children: (0, o.jsxs)(el.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nI.Ux,
            children: [
                (0, o.jsxs)(el.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nI.MY,
                    children: [
                        (0, o.jsx)(ec.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nI.ck : nI.JJ,
                            children: ef.intl.string(iP.default.eSKiXk),
                        }),
                        null != l &&
                            (0, o.jsxs)(el.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nI.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, o.jsx)("div", {
                                        className: nI.uA,
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
                                        className: nI.VL,
                                        children: (0, o.jsxs)(eo.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iS.LM],
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
                    className: nI.qT,
                    children: (0, o.jsx)(nr.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, o.jsx)("hr", { className: nI.yF }),
                (0, o.jsxs)("div", {
                    className: nI.qr,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nI.ec,
                            children: [
                                (0, o.jsx)(eo.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ef.intl.string(iP.default.SvSwga),
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
function ny(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, b.Ay)(j.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nr.pw)(t),
        a = (0, i_.PA)(),
        r = (0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        l = { [nI.iR]: !r };
    return (0, o.jsx)(b.f5, {
        value: i,
        children: (0, o.jsxs)(el.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: m()(nI.oB, s),
            children: [
                (0, o.jsx)(ec.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nI.op,
                    children: ef.intl.string(ef.t.vLz3Zs),
                }),
                (0, o.jsxs)("div", {
                    ref: n,
                    className: m()(nI.kR, { [nI.BQ]: a }),
                    children: [
                        (0, o.jsx)(nS, { skuId: t7.pe.TIER_0, className: m()(nI.rz, l) }),
                        (0, o.jsx)(nS, { skuId: t7.pe.TIER_2, className: m()(nI.Rv, l) }),
                        a && (0, o.jsx)(nP, { className: m()(nI.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var nD = s(226830),
    nO = s(366010),
    nM = s(303136);
let nk = function (e) {
    let t,
        { className: s } = e,
        i = (0, tM.TM)(),
        n = (0, nO.q)((0, ia.Ay)());
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
                nM.A,
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
var nL =
        (((c = {}).HOME = "home"),
        (c.WHATS_NEW = "whatsNew"),
        (c.BEST_OF_NITRO = "bestOfNitro"),
        (c.PLANS = "plans"),
        (c.COMPARE = "compare"),
        c),
    nG = s(352756);
let nU = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e7.JJy.MARKETING_FLOATING_CTA };
    return (0, o.jsx)(en.animated.div, {
        className: nG.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, o.jsxs)("div", {
            className: nG.U,
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
var nw = s(573710);
let nB = function () {
    let e = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("div", {
                className: nw.BI,
                children: (0, o.jsx)(tU, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tL.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, o.jsx)("img", { src: tQ, alt: "", className: nw.Q }),
                }),
            }),
            (0, o.jsx)(tB, {
                isMotionReduced: e,
                boltContainerClassName: nw.nJ,
                carContainerClassName: nw.IN,
                hammerContainerClassName: nw.Gj,
                keyContainerClassName: nw.FV,
                starContainerClassName: nw.E1,
                boltAssetClassName: nw.j7,
                carAssetClassName: nw.or,
                hammerAssetClassName: nw.Wv,
                keyAssetClassName: nw.rs,
                starAssetClassName: nw.OY,
            }),
        ],
    });
};
var nH = s(989756);
let nF = d.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, b.Ay)(j.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, o.jsx)(b.f5, {
        value: s,
        children: (0, o.jsx)("div", {
            ref: t,
            className: nH.kL,
            children: (0, o.jsxs)("div", {
                className: nH.hQ,
                children: [
                    (0, o.jsx)(nB, {}),
                    (0, o.jsx)(ec.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nH.RH,
                        children: ef.intl.string(ef.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nF.displayName = "PremiumMarketingFooter";
var nV = s(939249);
let nz = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nL.HOME]: ef.intl.string(ef.t.uGRXjS),
            [nL.WHATS_NEW]: ef.intl.string(ef.t["mfcR/v"]),
            [nL.BEST_OF_NITRO]: ef.intl.string(ef.t.xQKkE8),
            [nL.PLANS]: ef.intl.string(ef.t.wyNMnm),
            [nL.COMPARE]: ef.intl.string(ef.t.pwD7If),
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
                                    nV.D,
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
var nW = s(704333),
    nY = s(414499),
    nK = s(597770),
    nX = s(500060),
    nZ = s(866665),
    nJ = s(406860),
    nQ = s(870975),
    nq = s(698834);
function n$() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nJ.A)({ boxType: sA.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nW.B, text: ef.intl.string(sC.default.MUypiB) },
            { icon: nY.h, text: ef.intl.string(sC.default.ec5Rdd) },
            { icon: nK.GiftIcon, text: ef.intl.string(sC.default["9t2CzW"]), tooltip: sC.default.AyECej },
            { icon: nX.o, text: ef.intl.string(sC.default.R7YJAY) },
        ];
    return (0, o.jsx)(Y.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, o.jsx)("div", {
            ref: e,
            className: nq.iE,
            children: (0, o.jsxs)("div", {
                className: nq.Nr,
                children: [
                    (0, o.jsxs)("div", {
                        className: nq.j,
                        children: [
                            (0, o.jsx)("div", { className: nq._g }),
                            (0, o.jsx)("div", { className: nq.$h }),
                            (0, o.jsx)("div", { className: nq.Rv }),
                            (0, o.jsx)("div", { className: nq.Lw }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: nq.CT,
                        children: [
                            (0, o.jsxs)("div", {
                                className: nq.Qs,
                                children: [
                                    (0, o.jsxs)("div", {
                                        children: [
                                            (0, o.jsx)(ec.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nq.R_,
                                                children: ef.intl.string(sC.default.rkt1aw),
                                            }),
                                            (0, o.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, o.jsxs)(
                                                            "div",
                                                            {
                                                                className: nq.yf,
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
                                                                            className: nq.Jn,
                                                                            children: (0, o.jsx)(nZ.m, {
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
                                                        className: nq.xF,
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
                                        className: nq.WE,
                                        children: (0, o.jsx)(eo.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ef.intl.format(sC.default.KDKdWi, { termsLink: (0, nQ.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)("div", {
                                className: nq.r1,
                                children: (0, o.jsx)("img", {
                                    className: nq.wm,
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
var n0 = s(750338),
    n1 = s(19290),
    n2 = s(505051);
function n3(e) {
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
        className: m()(n2.boxBackdrop, t),
        children: [
            (0, o.jsx)(ec.D, {
                className: n2.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, o.jsx)("div", { className: n2.highlightBento, children: l }),
            (0, o.jsx)("div", {
                className: n2.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n1.A0.SMALL;
                            break;
                        case 2:
                            s = n1.A0.MEDIUM;
                            break;
                        default:
                            s = n1.A0.LARGE;
                    }
                    return (0, o.jsx)(o.Fragment, {
                        children: e.map((e) =>
                            (0, o.jsx)(
                                n0.A,
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
let n7 = d.memo(function (e) {
        let t = (0, sd.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, n1.Ay)(t);
        return (0, o.jsx)(n3, {
            boxLayout: s,
            title: ef.intl.string(ef.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, o.jsx)(n$, {}) : null,
            ...e,
        });
    }),
    n6 = d.memo(function (e) {
        let { bestOfBoxes: t } = (0, n1.Ay)();
        return (0, o.jsx)(n3, { boxLayout: t, title: ef.intl.string(ef.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    n8 = (0, B.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var n5 = s(236834),
    n9 = s(540504);
function n4(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eQ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, o.jsx)("div", {
        className: n9.$6,
        children: (0, o.jsxs)("div", {
            className: n9.sc,
            children: [
                (0, o.jsx)("div", {
                    className: n9.kR,
                    children: (0, o.jsx)(eX.eu, { src: s, "aria-label": t.username, size: eK._3.SIZE_32, ...i }),
                }),
                (0, o.jsx)(ec.D, {
                    variant: "heading-sm/normal",
                    className: n9.FS,
                    color: "text-strong",
                    children: ef.intl.format(ef.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var ae = s(579245),
    at = s(369805);
let as = function () {
    let e = (0, at.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, o.jsx)(ez, { text: e });
};
function ai() {
    let e = (0, g.bG)([nN.A], () => nN.A.getForSkuAndInterval((0, ek.mH)(t7.pe.TIER_0), t7.WT.MONTH));
    return null != e ? (0, ek.sS)(e) : "\u2026";
}
var an = s(508556);
let aa = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tO.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        i = (0, tM.TM)();
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: an.YU,
        children: [
            (0, o.jsx)(tV, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: an.wG,
                assetClassName: an.lu,
            }),
            (0, o.jsx)(tB, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: an.nJ,
                carContainerClassName: an.IN,
                hammerContainerClassName: an.Gj,
                keyContainerClassName: an.FV,
                starContainerClassName: an.E1,
                boltAssetClassName: an.j7,
                carAssetClassName: an.or,
                hammerAssetClassName: an.Wv,
                keyAssetClassName: an.rs,
                starAssetClassName: an.OY,
            }),
        ],
    });
};
var ar = s(14057);
let al = d.memo(
    d.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
            r = ai(),
            l = n8.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            c = (0, n5.A)(),
            d = null != c,
            { visibilityPercentageRef: u, visibilityPercentage: x } = eF(
                !(0, g.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
            ),
            f = (0, nt.b)(),
            p = !d && f.length > 0,
            h = (0, eB.c)(eE.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            A = (0, nj.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && t7.U4.includes(C.discountId)) || N;
        return (0, o.jsx)(b.f5, {
            value: a,
            children: (0, o.jsx)("div", {
                ref: t,
                className: m()(ar.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, o.jsx)("div", {
                    ref: u,
                    children: (0, o.jsxs)("div", {
                        className: ar.hQ,
                        children: [
                            (0, o.jsx)(aa, { containerVisibilityPercentage: x }),
                            A && (0, o.jsx)(as, {}),
                            (0, o.jsx)("div", {
                                className: ar.s8,
                                children: (0, o.jsx)(tj.F, {
                                    forceLevel: 1,
                                    children: (0, o.jsx)(ec.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: ar.wx,
                                        children: ef.intl.string(ef.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, o.jsxs)("div", {
                                className: ar.rf,
                                children: [
                                    d &&
                                        (0, o.jsx)("div", {
                                            className: ar.eZ,
                                            children: (0, o.jsx)(n4, { referrer: c }),
                                        }),
                                    p &&
                                        (0, o.jsx)("div", {
                                            className: ar.Qn,
                                            children: (0, o.jsx)(ae.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, o.jsxs)("div", {
                                        className: A ? ar.es : ar.UJ,
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
                                        className: ar.iQ,
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
var ac = s(820081),
    ao = s(140735),
    ad = s(401432),
    au = s(580630),
    am = s(795269),
    ax = s(84483),
    ag = s(701974),
    af = s(55647),
    ap = s(202600);
function ah(e) {
    let { includes: t } = e;
    return t
        ? (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(ac.B, { size: "sm", color: ea.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, o.jsx)(ao.A, { children: ef.intl.string(ef.t["tq+6t/"]) }),
              ],
          })
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(ad.a, { size: "xs", color: ea.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, o.jsx)(ao.A, { children: ef.intl.string(ef.t.l4qZrp) }),
              ],
          });
}
function aN(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, o.jsxs)("tr", {
        className: m()(af.nM, af.WQ),
        children: [
            (0, o.jsx)("th", {
                scope: "row",
                className: af.nx,
                children: (0, o.jsx)(eo.E, { variant: "text-md/medium", children: t }),
            }),
            (0, o.jsx)("td", {
                className: af.Hn,
                children:
                    null != s.text
                        ? (0, o.jsx)(eo.E, { variant: "text-md/medium", children: s.text })
                        : (0, o.jsx)(ah, { includes: !!s.includes }),
            }),
            (0, o.jsx)("td", {
                className: af.Hn,
                children:
                    null != i.text
                        ? (0, o.jsx)(eo.E, { variant: "text-md/medium", children: i.text })
                        : (0, o.jsx)(ah, { includes: !!i.includes }),
            }),
        ],
    });
}
function aA(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, o.jsxs)("tbody", {
        children: [
            (0, o.jsx)("tr", {
                className: m()(af.nM, af.Gf),
                children: (0, o.jsxs)("td", {
                    className: af.nx,
                    colSpan: 3,
                    children: [
                        (0, o.jsx)(ec.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, o.jsx)(eo.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, o.jsx)(aN, { ...e }, e.id)),
        ],
    });
}
function aj(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === t7.PremiumTypes.TIER_0 ? ef.intl.string(ef.t.tUbSDK) : ef.intl.string(ef.t.Ipxkog);
    return (0, o.jsxs)("div", {
        className: af.nn,
        children: [
            (0, o.jsxs)("div", {
                className: af.KS,
                children: [
                    (0, o.jsx)(eu.t, { colorClass: af.oG }),
                    (0, o.jsx)(ec.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, o.jsx)(ec.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function ab(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, au.$g)(s.amount, s.currency);
    return (0, o.jsx)("thead", {
        children: (0, o.jsxs)("tr", {
            className: af.U1,
            children: [
                (0, o.jsx)("th", {
                    scope: "col",
                    className: af.Cr,
                    children: (0, o.jsx)(ec.D, { variant: "heading-xl/bold", children: ef.intl.string(ef.t.ED4UVD) }),
                }),
                (0, o.jsx)("th", {
                    scope: "col",
                    className: af.Hn,
                    children: (0, o.jsx)(aj, {
                        premiumType: t7.PremiumTypes.TIER_0,
                        priceString: (0, au.$g)(t.amount, t.currency),
                    }),
                }),
                (0, o.jsx)("th", {
                    scope: "col",
                    className: af.Hn,
                    children: (0, o.jsx)(aj, { premiumType: t7.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let aC = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = t7.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, b.Ay)(j.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, ew.V)(),
            l = r?.subscriptionTrial?.skuId,
            c = (0, eU.O)(),
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
                            label: ef.intl.string(ag.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, ig.lk)(iE.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sM.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sk.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, ax.uX)("premium_marketing_comparison");
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
                                label: ef.intl.string(sB.default["gc2sa/"]),
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
                                label: ef.intl.string(iA.default["20tmSN"]),
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
                                        percentageOff: (0, au.l9)(nh.default.locale, t7.oX / 100),
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
            t = (0, o.jsx)(am.R, { className: m()(af.Io, af.SP), text: e });
        }
        let A = l === t7.pe.TIER_0 || n === t7.PremiumTypes.TIER_0;
        return (0, o.jsx)(b.f5, {
            value: a,
            children: (0, o.jsxs)("div", {
                className: m()(af.zr, s),
                children: [
                    (0, o.jsx)(ec.D, {
                        className: af.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: ef.intl.string(ef.t.DbPgAd),
                    }),
                    (0, o.jsxs)("div", {
                        className: af.wY,
                        children: [
                            (0, o.jsxs)("div", {
                                className: m()(af.fO, { [af.Vd]: A, [af.hA]: !A }),
                                children: [
                                    !A && t,
                                    (0, o.jsx)("div", { className: af.xQ }),
                                    (0, o.jsxs)("div", {
                                        className: af.wN,
                                        children: [
                                            (0, o.jsx)("img", { src: ap, alt: "", className: af.kQ }),
                                            (0, o.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: af.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)("table", {
                                className: af.tp,
                                children: [
                                    (0, o.jsx)(ab, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, d.createElement)(aA, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aE = function (e) {
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
var aT = s(818348),
    aR = s(773188);
function av(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, o.jsx)(ny, { innerRef: t }) : (0, o.jsx)(nD.jP, { innerRef: t });
}
let aI = () => {
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
    let y = (0, sO.A0)({ location: "PremiumMarketingHome" }),
        D = (0, nn.DK)(ni.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, ig.lk)(iE.rE.NITRO_HOME_MARKETING),
        M = D && O ? n1.NI.COMBINED_ORBS : O ? n1.NI.ORB_MULTIPLIER : D ? n1.NI.ORB_REWARDS : null,
        G = d.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? M
                : t === n1.NI.THREE_P_PROMOTIONS
                  ? y
                      ? n1.NI.CALL_OF_DUTY
                      : n1.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, M]);
    i5(G ?? "", null != G);
    let { navBarSections: U, activeSectionId: w } = aE([nL.HOME, nL.WHATS_NEW, nL.BEST_OF_NITRO, nL.PLANS, nL.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: z } = U,
        W = (function (e) {
            let { location: t } = e;
            return na.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, o.jsxs)("div", {
            ref: s,
            className: m()(aR.kL, aR.Gd, aR.iI, { [aR.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(nk, { className: aR.yH }),
                (0, o.jsx)(nz, { navBarSections: U, activeSectionId: w }),
                (0, o.jsxs)("div", {
                    className: aR.Qr,
                    children: [
                        (0, o.jsx)("div", {
                            className: aR.qY,
                            ref: B.ref,
                            children: (0, o.jsx)(Y.L, {
                                innerRef: n,
                                onChange: (e) => u(e),
                                threshold: 0,
                                active: !0,
                                children: (0, o.jsx)(al, {
                                    ref: n,
                                    subscriptionTier: v,
                                    isEligibleForBogoPromotion: I,
                                }),
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: aR.So,
                            ref: H.ref,
                            children: (0, o.jsx)(n7, { shouldLoadVideo: A, isReducedMotion: l }),
                        }),
                        (0, o.jsx)("div", {
                            className: aR.KQ,
                            ref: F.ref,
                            children: (0, o.jsx)(n6, { shouldLoadVideo: A, isReducedMotion: l }),
                        }),
                        (0, o.jsx)("div", {
                            className: aR.s5,
                            ref: V.ref,
                            children: (0, o.jsx)(
                                Y.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, o.jsx)(av, { innerRef: i, isPlanSelectUiRedesignEnabled: W }),
                                },
                                W ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, o.jsx)("div", { className: aR.aC, ref: z.ref, children: (0, o.jsx)(aC, {}) }),
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
                    children: (0, o.jsx)("div", { ref: a, className: aR._Z }),
                }),
                (0, o.jsx)(nF, { ref: r }),
                (0, o.jsx)(nU, { isVisible: !c && !f && A, subscriptionTier: v, isEligibleForBogoPromotion: I }),
                (0, o.jsx)(nk, { className: aR.MF }),
            ],
        });
    return (0, o.jsx)(sx.N, {
        theme: aT.NJ.DARKER,
        children: (e) => (0, o.jsx)(K.Gt, { className: m()(aR.XG, e), ref: t, children: X }),
    });
};
var a_ = s(862482),
    aS = s(412260),
    aP = s(662367),
    ay = s(374403),
    aD = s(396375),
    aO = s(815846),
    aM = s(695366),
    ak = s(370049);
let aL = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nj.ar)();
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
            className: m()(ak.kL, n, { [ak.He]: r }),
            type: sg.Z.Types.CUSTOM,
            children: [
                (0, o.jsx)(aM.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: m()(ak.Kk, { [ak.Pt]: r }),
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
var aG = s(978836);
let aU = function (e) {
    let { lifted: t = !1 } = e;
    return (0, o.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: m()(aG.zr, { [aG.N]: t }),
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
                        (0, o.jsx)("stop", { className: aG.eq }),
                        (0, o.jsx)("stop", { offset: "0.339235", className: aG.l_ }),
                        (0, o.jsx)("stop", { offset: "0.492065", className: aG.sM }),
                        (0, o.jsx)("stop", { offset: "0.823236", className: aG.zi }),
                        (0, o.jsx)("stop", { offset: "0.899558", className: aG.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aw = s(900797),
    aB = s(847374),
    aH = s(812993),
    aF = s(614268);
function aV(e) {
    let { className: t } = e;
    return (0, o.jsx)(aH.Lp, { className: m()(aF.T, t), text: ef.intl.string(ef.t.EYxi0o) });
}
var az = s(904788),
    aW = s(507553);
let aY = "/assets/5b4fec8511c3676a.svg",
    aK = "/assets/0838bda6ecd20d91.svg";
function aX(e, t, s) {
    return (0, ii.M)(e) ? t : s;
}
var aZ = s(872461);
function aJ(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, o.jsxs)(nV.D, {
        onClick: s,
        className: aZ.customButton,
        children: [
            t ? ef.intl.string(ef.t.maZaN3) : ef.intl.string(ef.t["37C26f"]),
            t
                ? (0, o.jsx)(aw.t, { size: "md", color: "currentColor", className: aZ.arrow })
                : (0, o.jsx)(aB.a, { size: "md", color: "currentColor", className: aZ.arrow }),
        ],
    });
}
function aQ(e) {
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
            className: m()(aZ.perkCard, i),
            children: [
                l
                    ? (0, o.jsx)(az.A, {
                          className: aZ.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                c ? (0, o.jsx)(aV, { className: aZ.perkCardEarlyAccessBadge }) : null,
                (0, o.jsx)("img", { src: n, alt: "", className: m()(a, aZ.perksCardArt) }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsxs)(ec.D, {
                            variant: "heading-lg/extrabold",
                            className: aZ.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, o.jsx)(eo.E, {
                            variant: "text-sm/normal",
                            className: aZ.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aq = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = d.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, ia.Ay)(),
                n = (0, ic.X)("usePerkCards"),
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
                    imageSource: aX(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                (aW.A.setState({ scrollPosition: iX._F.TRY_IT_OUT }),
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
                    imageSource: aX(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ef.intl.string(ef.t.Bv8Pfk),
                    description: ef.intl.string(ef.t.JMfaTU),
                    imageSource: aX(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ef.intl.string(ef.t.Bv8Pfk),
                    description: ef.intl.string(ef.t.JMfaTU),
                    imageSource: aX(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ef.intl.string(ef.t["lGcW+c"]),
                    description: ef.intl.string(ef.t["/fDyO+"]),
                    imageSource: aX(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ef.intl.string(ef.t["1c+xwT"]),
                    description: ef.intl.string(ef.t.hJG8ZN),
                    imageSource: aX(i, aK, aY),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ef.intl.string(ef.t.tzdIwI),
                    description: ef.intl.string(ef.t.hJG8ZN),
                    imageSource: aX(i, aK, aY),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ef.intl.string(ef.t.tzdIwI),
                    description: ef.intl.string(ef.t.hJG8ZN),
                    imageSource: aX(i, aK, aY),
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
                    imageSource: aX(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aX(i, iZ, iJ),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aZ }),
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
        className: m()(aZ.perksContainer, t, {
            [aZ.partiallyHidden]: i && !n,
            [aZ.subscriberNitroHome]: i,
            [aZ.reducedMotion]: l,
        }),
        children: [
            (0, o.jsx)(ec.D, {
                variant: "heading-xxl/extrabold",
                className: aZ.perksTitle,
                children: i ? ef.intl.string(ef.t.QX14gI) : ef.intl.string(ef.t.RGadQR),
            }),
            (0, o.jsx)("div", {
                className: m()(aZ.perkCardContainer, { [aZ.perkCardContainerExpanded]: n }),
                children: u.map((e) => null != e && (0, o.jsx)(aQ, { ...e }, e.title)),
            }),
            i &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("div", {
                            className: m()({ [aZ.sizeGizmo]: !n, [aZ.sizeGizmoExpanded]: n }),
                            children: (0, o.jsx)(aJ, {
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
                        (0, o.jsx)("div", { className: m()(aZ.cover, { [aZ.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a$ = s(194509),
    a0 = s(317587);
let a1 = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: e7.JJy.MARKETING_FLOATING_CTA },
        l = (0, ia.Ay)(),
        c = (0, nO.M)(l);
    return (0, o.jsx)(en.animated.div, {
        className: m()(a0.iE, { [a0.H8]: i, [a0.q4]: !t }),
        style: a,
        children: (0, o.jsxs)("div", {
            className: i ? a0.zW : a0.iJ,
            children: [
                (0, o.jsx)(aD.A, {
                    color: c ? a_.XD.BRAND_INVERTED : void 0,
                    className: m()(a0.x6, { [a0.Ph]: c }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : a0.PJ,
                }),
                (0, o.jsx)(a$.A, { className: a0.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var a2 = s(386564);
function a3(e) {
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
            ? (0, o.jsx)(aD.A, {
                  color: r ? a_.XD.BRAND_INVERTED : void 0,
                  className: m()(a2.x6, a2.Ph, n, { [a2.Sq]: t && a, [a2.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : a2.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, o.jsx)(aD.A, {
                  color: r || !a ? a_.XD.BRAND_INVERTED : void 0,
                  className: m()(a2.x6, a2.Ph, n, { [a2.Sq]: t && a, [a2.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, o.jsx)(a$.A, { className: m()(a2.x6, n), color: a ? void 0 : a_.XD.WHITE });
    return (0, o.jsxs)("div", { className: m()(a2.UD, i), children: [c, " ", d] });
}
function a7() {
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(az.p, { className: a2.zd }),
            (0, o.jsx)(az.p, { className: a2.G }),
            (0, o.jsx)(az.p, { className: a2.zy }),
            (0, o.jsx)(az.p, { className: a2.GX }),
        ],
    });
}
function a6(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = ai();
    return (0, o.jsx)(eo.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: m()(a2.h_, { [a2.If]: s, [a2.jn]: i }),
        children: ef.intl.format(ef.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let a8 = d.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, b.Ay)(j.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, eG.QQ)(),
        c = (0, nj.ar)(),
        d = (0, eL.cg)(),
        u = (0, nt.b)().length > 0,
        x = ef.intl.string(ef.t.YCZldK);
    return (0, o.jsx)(b.f5, {
        value: r,
        children: (0, o.jsxs)("div", {
            ref: t,
            className: m()(a2.kL, s, { [a2.V1]: !c, [a2.Q4]: !c && u }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, o.jsxs)("div", {
                    className: c ? a2.I6 : a2.G1,
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
                                  className: a2.DF,
                                  children: (0, o.jsx)(ae.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, o.jsx)(a6, {}),
                        d || l
                            ? (0, o.jsx)("div", {
                                  className: a2.UD,
                                  children: (0, o.jsx)(a$.A, { className: m()(a2.x6, i), color: a_.XD.WHITE }),
                              })
                            : (0, o.jsx)(a3, {
                                  subscriptionTier: n,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        u && (0, o.jsx)(a6, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, o.jsx)(a7, {}),
            ],
        }),
    });
});
var a5 = s(22118),
    a9 = s(145359),
    a4 = s(377770);
function re(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, o.jsx)(aU, { lifted: t }) : null;
}
let rt = () => {
        (0, S.P)(_);
        let e = d.useRef(null),
            t = d.useRef(null),
            s = d.useRef(null),
            i = (0, ia.Ay)(),
            n = (0, ii.M)(i),
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
            R = (0, nj.ar)(),
            v = (0, eL.cg)(),
            I = v ?? !1,
            P = (0, g.bG)([aS.A], () => {
                let e = aS.A.getMarketingComponentByType(eE.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, ay.Q)(),
            { analyticsLocations: D } = (0, b.Ay)(j.A.PREMIUM_MARKETING);
        d.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, o.jsx)("div", {
            className: a4.dY,
            children: (0, o.jsx)(Y.L, {
                innerRef: e,
                onChange: (e) => c(e),
                threshold: 0.1,
                active: !0,
                children: (0, o.jsx)(nr.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, o.jsx)(aD.A, {
                        showIcon: !1,
                        subscriptionTier: t7.pe.TIER_0,
                        className: a9.Ph,
                        look: a_.pR.OUTLINED,
                        color: a_.XD.WHITE,
                        buttonShineClassName: a9.Qr,
                    }),
                    tier2CTAButton:
                        T === t7.pe.TIER_0
                            ? (0, o.jsx)(aD.A, {
                                  showIcon: !1,
                                  subscriptionTier: t7.pe.TIER_2,
                                  className: a9.Ph,
                                  look: a_.pR.OUTLINED,
                                  color: a_.XD.WHITE,
                                  buttonShineClassName: a9.Qr,
                              })
                            : (0, o.jsx)(aD.A, {
                                  color: a_.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: t7.pe.TIER_2,
                                  className: a9.Ph,
                                  hasActivePromotion: I,
                                  textOptions: { textClassName: a9.Ac },
                                  buttonShineClassName: a9.Qr,
                              }),
                }),
            }),
        });
        return (0, o.jsxs)("div", {
            className: a4.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(aL, { premiumSubscription: h, className: m()(a4.R3, { [a4.aZ]: R }) }),
                R &&
                    (0, o.jsxs)("div", {
                        className: a4.n1,
                        children: [
                            (0, o.jsx)(re, { inOfferExperience: R }),
                            (0, o.jsx)(sr.l, {
                                className: a4.ij,
                                size: "md",
                                location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, o.jsxs)("div", {
                    className: m()({ [a4.V1]: !R }),
                    children: [
                        null != P && (0, o.jsx)(aO.c, { className: a4.w$, config: P }),
                        (0, o.jsxs)("div", {
                            className: a4.iS,
                            children: [
                                !R &&
                                    (0, o.jsx)(sr.l, {
                                        className: a4.ij,
                                        size: "md",
                                        location: j.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, o.jsx)(Y.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, o.jsx)(a8, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: m()({ [a4.p7]: R, [a4.Pw]: R, [a4.AG]: v, [a4.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, o.jsx)("div", { className: a4.Ol, children: (0, o.jsx)(aP.I, { component: y }) }),
                O,
                (0, o.jsx)(aq, { className: a4.B_ }),
                (0, o.jsx)("div", { className: a4.aC, children: (0, o.jsx)(a5.A, { className: a4.JQ, hideCTAs: !0 }) }),
                (0, o.jsx)("div", { className: a4.hz }),
                (0, o.jsx)(a1, {
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
                    children: (0, o.jsx)("div", { ref: s, className: a4._Z }),
                }),
                (0, o.jsx)("img", {
                    src: i4,
                    className: a4.Kw,
                    width: 112,
                    height: 85,
                    alt: ef.intl.string(ef.t.X4IxWL),
                }),
            ],
        });
    },
    rs = function (e) {
        let { entrypoint: t } = e,
            s = (0, ew.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, ns.NF)({ trialOffer: s }),
            a = (0, ns.Tp)(),
            r = (0, g.bG)([e1.A], () => e1.A.getReminderStateId());
        switch (
            (d.useEffect(() => {
                (!0 === n && (0, ns.QG)(), !0 === a && (0, ns.ne)(r), (null != s || null != i) && (0, w.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case t7.tU.UserSettings:
                return (0, o.jsx)(rt, {});
            case t7.tU.ApplicationStoreHome:
                return (0, o.jsx)(aI, {});
            default:
                return null;
        }
    };
var ri = s(531296);
let rn = function (e) {
    let { entrypoint: t = t7.tU.UserSettings } = e;
    (0, S.P)(_);
    let s = (0, E.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = F("nitro_member_hub_header"),
        n = z("nitro_member_hub_header"),
        a = (0, U.ds)(),
        { sourceAnalyticsLocations: r, analyticsLocations: l } = (0, b.Ay)(j.A.PREMIUM_MARKETING),
        c = (0, g.bG)([k.A], () => k.A.hasFetchedSubscriptions()),
        u = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        v = (0, g.bG)([O.default], () => O.default.getCurrentUser()),
        I = v?.id,
        B = (0, ew.V)(),
        H = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        V = (0, T.Y)(t7.T7),
        [W, Y] = d.useState(!0),
        K = d.useRef(0),
        X = (0, G.YE)(v, t7.PremiumTypes.TIER_2),
        Z = (0, g.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === e7.Dmq.CANCELED;
    ((0, nt.b)(),
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
                ? (0, o.jsx)(b.f5, { value: l, children: (0, o.jsx)(ne, { userId: I }) })
                : ee
                  ? null
                  : (0, o.jsx)("div", { className: m()(ri.kL, ri.Lq), children: (0, o.jsx)(f.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, o.jsxs)(o.Fragment, { children: [ei && (0, o.jsx)(A.A, {}), en] });
    }
    return (0, o.jsx)(b.f5, { value: l, children: (0, o.jsx)(rs, { entrypoint: t }) });
};
