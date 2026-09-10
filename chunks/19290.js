(i.d(t, { A0: () => e_, NI: () => eP, Ay: () => eT, Tb: () => ev }), i(321073));
var n,
    a,
    r,
    s = i(477900),
    l = i(582128),
    o = i(492462),
    d = i(696292),
    c = i(17928),
    u = i(192308),
    m = i(403581),
    p = i(793574),
    f = i(688810),
    b = i(793943),
    g = i(259065),
    h = i(741231),
    x = i(325499),
    C = i(75678),
    v = i(206835),
    _ = i(192444),
    P = i(216934),
    T = i(591179),
    R = i(462463),
    y = i(780964),
    A = i(766075),
    j = i(166403),
    E = i(676279),
    N = i(975571),
    O = i(158045),
    I = i(789861),
    U = i(769623),
    L = i(920050),
    M = i(707922),
    S = i(852218),
    w = i(483489),
    k = i(398523),
    B = i(881373),
    D = i(503698),
    Y = i.n(D),
    V = i(907581),
    H = i(830370);
let G = l.forwardRef((e, t) => {
    let { className: i } = e,
        n = l.useRef(null);
    return (
        l.useImperativeHandle(t, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, s.jsx)("div", {
            className: Y()(i, H.k),
            children: (0, s.jsx)(V.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
G.displayName = "PremiumRewardsBentoBoxAsset";
var F = i(440005),
    z = i(26508),
    K = i(592909),
    W = i(989790),
    X = i(612413),
    Z = i(202541);
i(92737);
var $ = i(88001),
    q = i(652215),
    J = i(190107),
    Q = i(355097),
    ee = i(310235),
    et = i(334551),
    ei = i(148155),
    en = i(1889),
    ea = i(762359),
    er = i(375708),
    es = i(72191),
    el = i(701974),
    eo = i(553875),
    ed = i(505051),
    ec = i(817577);
let eu = "/assets/035ad0fba4997f3f.svg",
    em =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ep =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    ef =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
    eb =
        "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var eg = i(576765),
    eh = i(88433),
    ex = i(909340),
    eC = i(455482),
    ev = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    e_ = (((a = {}).SMALL = "small"), (a.MEDIUM = "medium"), (a.LARGE = "large"), a),
    eP =
        (((r = {}).REFERRAL_PROGRAM = "referralProgram"),
        (r.SERVER_PROFILES = "serverProfiles"),
        (r.SHOW_YOUR_STYLE = "showYourStyle"),
        (r.YOUR_SPACE = "yourSpace"),
        (r.EMOJIS = "emojis"),
        (r.NO_LIMITS = "noLimits"),
        (r.CUSTOM_THEMES = "customThemes"),
        (r.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (r.PREMIUM_GROUP = "premiumGroup"),
        (r.CALL_OF_DUTY = "callOfDuty"),
        (r.THREE_P_PROMOTIONS = "threePPromotions"),
        (r.ORB_REWARDS = "orbRewards"),
        (r.ORB_MULTIPLIER = "orbMultiplier"),
        (r.COMBINED_ORBS = "combinedOrbs"),
        (r.YOUTUBE = "youtube"),
        r);
let eT = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, f.Ay)(p.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, T.X)("useBentoBoxes"),
        a = (0, R.A)({ analyticsLocations: t }),
        r = (0, l.useCallback)(() => {
            (0, h.A)(q.BVt.NITRO_HOME, { search: (0, o.stringify)({ perk: L.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        D = (0, v.A)({ scrollPosition: Q._F.TRY_IT_OUT, analyticsLocations: t }),
        Y = (0, l.useCallback)(() => {
            (0, A.openUserSettings)(y.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, g.L)({ analyticsLocations: t }),
            );
        }, [t]),
        V = (0, l.useCallback)(() => {
            (0, C.A)({ subscriptionTier: Z.pe.TIER_2, initialPlanId: Z.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        H = (0, E.TM)(),
        ev = N.A.getArticleURL(q.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: e_, multiplier: eT } = (0, _.lk)(J.rE.NITRO_HOME_MARKETING),
        eR = l.useRef(null),
        ey = (0, x.b)("bento_box"),
        eA = (function () {
            let { enabled: e } = k.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, B.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return l.useMemo(() => {
                let i = { [S.XY]: t, [S.KS]: e };
                return S.mY.filter((e) => i[e]);
            }, [e, t, void 0]);
        })(),
        ej = {
            premiumGroup: { thumbnail: ec, assetUrl: ec },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: eg.A,
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eh.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eC.A, assetUrl: ex.A },
            orbMultiplier: { thumbnail: ef, assetUrl: H ? em : ep },
            combinedOrbs: { thumbnail: ef, assetUrl: H ? em : ep },
            callOfDuty: { thumbnail: eb, assetUrl: eb },
            threePPromotions: { thumbnail: ey ? (0, s.jsx)(G, { ref: eR }) : eu, assetUrl: ey ? void 0 : eu },
            youtube: { thumbnail: eb, assetUrl: eb },
        },
        eE = (0, U.Y)({ location: "bento_box" }),
        eN = (0, M.A)(!eE),
        eO = (0, c.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        eI = null != eO && (0, O.Nc)(eO),
        eU = {
            serverProfiles: {
                name: "serverProfiles",
                title: er.intl.string(er.t.I9TYMg),
                description: er.intl.string(er.t.HMSHeH),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: n ? a : D,
                previewImage: ej.serverProfiles.thumbnail,
                videoUrl: ej.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: er.intl.string(er.t.tPY4o9),
                description: er.intl.format(er.t.jRPQUH, { learnMoreLink: ev }),
                previewImage: ej.referralProgram.thumbnail,
                videoUrl: ej.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: er.intl.string(es.default.XokIHM),
                description: er.intl.string(es.default["7esQMC"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: ej.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: ej.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: er.intl.string(el.default.ABtBDQ),
                description: er.intl.string(el.default.MFNXZh),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: ej.displayNameStyles.thumbnail,
                onClick: n ? a : Y,
                videoUrl: ej.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: er.intl.formatToPlainString(ei.default.VFEDDB, { premiumGroupProductName: (0, $.DP)() }),
                description:
                    eE && null != eN
                        ? er.intl.formatToPlainString(ei.default.vmvhN5, { pricePerPerson: eN, totalMember: $.LM })
                        : er.intl.formatToPlainString(ei.default.WudmR3, {
                              totalSeats: $.aw,
                              premiumGroupProductName: (0, $.DP)(),
                          }),
                previewImage: ej.premiumGroup.thumbnail,
                videoUrl: ej.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.formatToPlainString(ei.default.LwdrNi, { premiumGroupProductName: (0, $.DP)() }),
                        onClick: V,
                        icon: m.t,
                        iconPosition: "start",
                        disabled: eI,
                    },
                    {
                        variant: "secondary",
                        text: er.intl.string(er.t.hvVgAZ),
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    i.e("499709"),
                                    i.e("403370"),
                                    i.e("569595"),
                                ]).then(i.bind(i, 526710));
                                return (t) => (0, s.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: er.intl.string(er.t.Ij3Zmv),
                description: er.intl.string(er.t.UsOUxY),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: ej.showYourStyle.thumbnail,
                onClick: n ? a : D,
                videoUrl: ej.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: er.intl.string(er.t.Wme3nX),
                description: er.intl.string(er.t["/aAIqV"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: ej.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = i(766075);
                        e(y.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: ej.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: er.intl.string(er.t.zY5PPb),
                description: er.intl.string(er.t.R5Xag2),
                previewImage: ej.emojis.thumbnail,
                videoUrl: ej.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: er.intl.string(er.t["6b3ydG"]),
                description: er.intl.string(er.t["Y+IJyg"]),
                previewImage: ej.noLimits.thumbnail,
                videoUrl: ej.noLimits.assetUrl,
            },
            callOfDuty: {
                name: "callOfDuty",
                title: er.intl.string(ee.default.sB5V0c),
                description: er.intl.formatToPlainString(ee.default["RuZS+B"], { validDates: (0, I.a1)() }),
                previewImage: ej.callOfDuty.thumbnail,
                videoUrl: ej.callOfDuty.assetUrl,
                containerClassName: ed.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.string(ee.default["9Rq7t1"]),
                        onClick: () =>
                            (0, C.A)({
                                subscriptionTier: Z.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: r,
                            }),
                        icon: m.t,
                        iconPosition: "start",
                    },
                ],
            },
            threePPromotions: {
                name: "threePPromotions",
                title: ey ? er.intl.string(er.t.E4U4SS) : er.intl.string(et.default.OlObRa),
                description: ey ? er.intl.string(er.t["B4uSy/"]) : er.intl.string(et.default["8Gl8gP"]),
                descriptionCta: ey ? er.intl.string(er.t.RzWDqY) : er.intl.string(et.default.HINTfJ),
                previewImage: ej.threePPromotions.thumbnail,
                videoUrl: ej.threePPromotions.assetUrl,
                onClick: () =>
                    (0, w.P)({
                        analyticsLocations: t,
                        partnerIds: eA,
                        isLocked: !0,
                        showXboxCard: ey,
                        title: ey ? er.intl.string(er.t.NG1e6l) : er.intl.string(er.t["7ioAjs"]),
                        subtitle: ey
                            ? er.intl.format(eo.default.zS4GBR, { termsLink: N.A.getArticleURL(q.MVz.NITRO_2_POINT_0) })
                            : er.intl.format(er.t.LOYRxB, {
                                  helpCenterLink: N.A.getArticleURL(q.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: ey ? void 0 : er.intl.string(er.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ey ? eR : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: er.intl.string(en.default["ZFJ/NU"]),
                description: er.intl.string(en.default.wMi514),
                descriptionCta: er.intl.string(er.t.hvVgAZ),
                onClick: () => {
                    window.open(N.A.getArticleURL(q.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: ej.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: ej.orbRewards.assetUrl,
                badgeText: ey ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: er.intl.string(er.t.Csf5Ol),
                description: er.intl.format(er.t["G5k+lZ"], { bonusOrbMultiplier: eT }),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: () => (0, P.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: ej.orbMultiplier.thumbnail,
                videoUrl: ej.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: er.intl.string(er.t.Tzhw6e),
                description: er.intl.format(er.t.djzJx6, { bonusOrbMultiplier: eT }),
                descriptionCta: er.intl.string(er.t.RzWDqY),
                onClick: () => (0, P.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: ey ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: ej.combinedOrbs.thumbnail,
                videoUrl: ej.combinedOrbs.assetUrl,
            },
            youtube: {
                name: "youtube",
                title: er.intl.string(ea.default["1ADi0d"]),
                description: er.intl.format(ea.default.P5sLUo, {
                    helpCenterUrl: N.A.getArticleURL(q.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: ej.youtube.thumbnail,
                videoUrl: ej.youtube.assetUrl,
                descriptionCta: er.intl.string(ea.default.VwLXyT),
                onClick: () =>
                    (0, w.P)({
                        analyticsLocations: t,
                        partnerIds: [S.NC],
                        isLocked: !0,
                        title: er.intl.string(ea.default.TDZUui),
                        subtitle: er.intl.format(ea.default.BTLkvw, {
                            helpCenterUrl: N.A.getArticleURL(q.MVz.YOUTUBE_PROMOTION),
                        }),
                    }),
            },
        };
    function eL(e) {
        let t = eU[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eM = (function (e) {
            let t = (0, K.A0)({ location: "bento_box" }),
                i = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                n = (0, X.mh)({ location: "bento_box" }),
                { enabled: a } = k.A.useConfig({ location: "bento_box" }),
                r = t ? eP.CALL_OF_DUTY : eP.THREE_P_PROMOTIONS,
                s = (0, W.O9)(),
                l = (0, z.DK)(F.W.NITRO, "useBentoBoxes"),
                o = l && e;
            return [
                ...(n ? [eP.YOUTUBE] : []),
                ...(t || i || a ? [r] : []),
                ...(o ? [eP.COMBINED_ORBS] : []),
                ...(!o && e ? [eP.ORB_MULTIPLIER] : []),
                ...(s ? [eP.PREMIUM_GROUP] : []),
                ...(!o && l ? [eP.ORB_REWARDS] : []),
                eP.DISPLAY_NAME_STYLES,
                eP.CUSTOM_THEMES,
                eP.SERVER_PROFILES,
                eP.REFERRAL_PROGRAM,
            ];
        })(e_),
        eS = [],
        ew = e ? null : eM[0],
        ek = eM.slice(+!e, e ? 2 : 3);
    return (
        null != ew && eS.push([eL(ew)]),
        1 === ek.length ? eS.push([eL(ek[0])]) : 2 === ek.length && eS.push([eL(ek[0]), eL(ek[1])]),
        {
            whatsNewBoxes: [...eS],
            bestOfBoxes: [[eL("showYourStyle")], [eL("yourSpace")], [eL("emojis"), eL("noLimits")]],
        }
    );
};
