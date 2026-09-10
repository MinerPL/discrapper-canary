(i.d(t, { A0: () => eC, NI: () => ev, Ay: () => e_, Tb: () => ex }), i(321073));
var n,
    a,
    s,
    r = i(477900),
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
    R = i(591179),
    j = i(462463),
    A = i(780964),
    T = i(766075),
    y = i(166403),
    E = i(676279),
    N = i(975571),
    I = i(158045),
    O = i(789861),
    L = i(769623),
    S = i(920050),
    M = i(707922),
    U = i(483489),
    w = i(398523),
    k = i(881373),
    B = i(852218),
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
        (0, r.jsx)("div", {
            className: Y()(i, H.k),
            children: (0, r.jsx)(V.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
G.displayName = "PremiumRewardsBentoBoxAsset";
var F = i(440005),
    K = i(26508),
    W = i(592909),
    z = i(989790),
    X = i(202541);
i(92737);
var Z = i(88001),
    $ = i(652215),
    q = i(190107),
    J = i(355097),
    Q = i(310235),
    ee = i(334551),
    et = i(148155),
    ei = i(1889),
    en = i(375708),
    ea = i(72191),
    es = i(701974),
    er = i(553875),
    el = i(505051),
    eo = i(817577);
let ed = "/assets/035ad0fba4997f3f.svg",
    ec =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eu =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    em =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
    ep =
        "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var ef = i(576765),
    eb = i(88433),
    eg = i(909340),
    eh = i(455482),
    ex = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    eC = (((a = {}).SMALL = "small"), (a.MEDIUM = "medium"), (a.LARGE = "large"), a),
    ev =
        (((s = {}).REFERRAL_PROGRAM = "referralProgram"),
        (s.SERVER_PROFILES = "serverProfiles"),
        (s.SHOW_YOUR_STYLE = "showYourStyle"),
        (s.YOUR_SPACE = "yourSpace"),
        (s.EMOJIS = "emojis"),
        (s.NO_LIMITS = "noLimits"),
        (s.CUSTOM_THEMES = "customThemes"),
        (s.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (s.PREMIUM_GROUP = "premiumGroup"),
        (s.CALL_OF_DUTY = "callOfDuty"),
        (s.THREE_P_PROMOTIONS = "threePPromotions"),
        (s.ORB_REWARDS = "orbRewards"),
        (s.ORB_MULTIPLIER = "orbMultiplier"),
        (s.COMBINED_ORBS = "combinedOrbs"),
        s);
let e_ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, f.Ay)(p.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, R.X)("useBentoBoxes"),
        a = (0, j.A)({ analyticsLocations: t }),
        s = (0, l.useCallback)(() => {
            (0, h.A)($.BVt.NITRO_HOME, { search: (0, o.stringify)({ perk: S.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        D = (0, v.A)({ scrollPosition: J._F.TRY_IT_OUT, analyticsLocations: t }),
        Y = (0, l.useCallback)(() => {
            (0, T.openUserSettings)(A.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, g.L)({ analyticsLocations: t }),
            );
        }, [t]),
        V = (0, l.useCallback)(() => {
            (0, C.A)({ subscriptionTier: X.pe.TIER_2, initialPlanId: X.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        H = (0, E.TM)(),
        ex = N.A.getArticleURL($.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: eC, multiplier: e_ } = (0, _.lk)(q.rE.NITRO_HOME_MARKETING),
        eP = l.useRef(null),
        eR = (0, x.b)("bento_box"),
        ej = (function () {
            let { enabled: e } = w.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, k.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return l.useMemo(() => {
                let i = { [B.XY]: t, [B.KS]: e };
                return B.mY.filter((e) => i[e]);
            }, [e, t, void 0]);
        })(),
        eA = {
            premiumGroup: { thumbnail: eo, assetUrl: eo },
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
                thumbnail: ef.A,
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eb.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: H
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eh.A, assetUrl: eg.A },
            orbMultiplier: { thumbnail: em, assetUrl: H ? ec : eu },
            combinedOrbs: { thumbnail: em, assetUrl: H ? ec : eu },
            callOfDuty: { thumbnail: ep, assetUrl: ep },
            threePPromotions: { thumbnail: eR ? (0, r.jsx)(G, { ref: eP }) : ed, assetUrl: eR ? void 0 : ed },
        },
        eT = (0, L.Y)({ location: "bento_box" }),
        ey = (0, M.A)(!eT),
        eE = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        eN = null != eE && (0, I.Nc)(eE),
        eI = {
            serverProfiles: {
                name: "serverProfiles",
                title: en.intl.string(en.t.I9TYMg),
                description: en.intl.string(en.t.HMSHeH),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                onClick: n ? a : D,
                previewImage: eA.serverProfiles.thumbnail,
                videoUrl: eA.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: en.intl.string(en.t.tPY4o9),
                description: en.intl.format(en.t.jRPQUH, { learnMoreLink: ex }),
                previewImage: eA.referralProgram.thumbnail,
                videoUrl: eA.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: en.intl.string(ea.default.XokIHM),
                description: en.intl.string(ea.default["7esQMC"]),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eA.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: eA.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: en.intl.string(es.default.ABtBDQ),
                description: en.intl.string(es.default.MFNXZh),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eA.displayNameStyles.thumbnail,
                onClick: n ? a : Y,
                videoUrl: eA.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: en.intl.formatToPlainString(et.default.VFEDDB, { premiumGroupProductName: (0, Z.DP)() }),
                description:
                    eT && null != ey
                        ? en.intl.formatToPlainString(et.default.vmvhN5, { pricePerPerson: ey, totalMember: Z.LM })
                        : en.intl.formatToPlainString(et.default.WudmR3, {
                              totalSeats: Z.aw,
                              premiumGroupProductName: (0, Z.DP)(),
                          }),
                previewImage: eA.premiumGroup.thumbnail,
                videoUrl: eA.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: en.intl.formatToPlainString(et.default.LwdrNi, { premiumGroupProductName: (0, Z.DP)() }),
                        onClick: V,
                        icon: m.t,
                        iconPosition: "start",
                        disabled: eN,
                    },
                    {
                        variant: "secondary",
                        text: en.intl.string(en.t.hvVgAZ),
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    i.e("499709"),
                                    i.e("403370"),
                                    i.e("569595"),
                                ]).then(i.bind(i, 526710));
                                return (t) => (0, r.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: en.intl.string(en.t.Ij3Zmv),
                description: en.intl.string(en.t.UsOUxY),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eA.showYourStyle.thumbnail,
                onClick: n ? a : D,
                videoUrl: eA.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: en.intl.string(en.t.Wme3nX),
                description: en.intl.string(en.t["/aAIqV"]),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eA.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = i(766075);
                        e(A.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eA.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: en.intl.string(en.t.zY5PPb),
                description: en.intl.string(en.t.R5Xag2),
                previewImage: eA.emojis.thumbnail,
                videoUrl: eA.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: en.intl.string(en.t["6b3ydG"]),
                description: en.intl.string(en.t["Y+IJyg"]),
                previewImage: eA.noLimits.thumbnail,
                videoUrl: eA.noLimits.assetUrl,
            },
            callOfDuty: {
                name: "callOfDuty",
                title: en.intl.string(Q.default.sB5V0c),
                description: en.intl.formatToPlainString(Q.default["RuZS+B"], { validDates: (0, O.a1)() }),
                previewImage: eA.callOfDuty.thumbnail,
                videoUrl: eA.callOfDuty.assetUrl,
                containerClassName: el.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: en.intl.string(Q.default["9Rq7t1"]),
                        onClick: () =>
                            (0, C.A)({
                                subscriptionTier: X.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: s,
                            }),
                        icon: m.t,
                        iconPosition: "start",
                    },
                ],
            },
            threePPromotions: {
                name: "threePPromotions",
                title: eR ? en.intl.string(en.t.E4U4SS) : en.intl.string(ee.default.OlObRa),
                description: eR ? en.intl.string(en.t["B4uSy/"]) : en.intl.string(ee.default["8Gl8gP"]),
                descriptionCta: eR ? en.intl.string(en.t.RzWDqY) : en.intl.string(ee.default.HINTfJ),
                previewImage: eA.threePPromotions.thumbnail,
                videoUrl: eA.threePPromotions.assetUrl,
                onClick: () =>
                    (0, U.P)({
                        analyticsLocations: t,
                        partnerIds: ej,
                        isLocked: !0,
                        showXboxCard: eR,
                        title: eR ? en.intl.string(en.t.NG1e6l) : en.intl.string(en.t["7ioAjs"]),
                        subtitle: eR
                            ? en.intl.format(er.default.zS4GBR, { termsLink: N.A.getArticleURL($.MVz.NITRO_2_POINT_0) })
                            : en.intl.format(en.t.LOYRxB, {
                                  helpCenterLink: N.A.getArticleURL($.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: eR ? void 0 : en.intl.string(en.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eR ? eP : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: en.intl.string(ei.default["ZFJ/NU"]),
                description: en.intl.string(ei.default.wMi514),
                descriptionCta: en.intl.string(en.t.hvVgAZ),
                onClick: () => {
                    window.open(N.A.getArticleURL($.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eA.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eA.orbRewards.assetUrl,
                badgeText: eR ? void 0 : en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: en.intl.string(en.t.Csf5Ol),
                description: en.intl.format(en.t["G5k+lZ"], { bonusOrbMultiplier: e_ }),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                onClick: () => (0, P.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eA.orbMultiplier.thumbnail,
                videoUrl: eA.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: en.intl.string(en.t.Tzhw6e),
                description: en.intl.format(en.t.djzJx6, { bonusOrbMultiplier: e_ }),
                descriptionCta: en.intl.string(en.t.RzWDqY),
                onClick: () => (0, P.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: eR ? void 0 : en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eA.combinedOrbs.thumbnail,
                videoUrl: eA.combinedOrbs.assetUrl,
            },
        };
    function eO(e) {
        let t = eI[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eL = (function (e) {
            let t = (0, W.A0)({ location: "bento_box" }),
                i = (0, k.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = w.A.useConfig({ location: "bento_box" }),
                a = t ? ev.CALL_OF_DUTY : ev.THREE_P_PROMOTIONS,
                s = (0, z.O9)(),
                r = (0, K.DK)(F.W.NITRO, "useBentoBoxes"),
                l = r && e;
            return [
                ...(t || i || n ? [a] : []),
                ...(l ? [ev.COMBINED_ORBS] : []),
                ...(!l && e ? [ev.ORB_MULTIPLIER] : []),
                ...(s ? [ev.PREMIUM_GROUP] : []),
                ...(!l && r ? [ev.ORB_REWARDS] : []),
                ev.DISPLAY_NAME_STYLES,
                ev.CUSTOM_THEMES,
                ev.SERVER_PROFILES,
                ev.REFERRAL_PROGRAM,
            ];
        })(eC),
        eS = [],
        eM = e ? null : eL[0],
        eU = eL.slice(+!e, e ? 2 : 3);
    return (
        null != eM && eS.push([eO(eM)]),
        1 === eU.length ? eS.push([eO(eU[0])]) : 2 === eU.length && eS.push([eO(eU[0]), eO(eU[1])]),
        {
            whatsNewBoxes: [...eS],
            bestOfBoxes: [[eO("showYourStyle")], [eO("yourSpace")], [eO("emojis"), eO("noLimits")]],
        }
    );
};
