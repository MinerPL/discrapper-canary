n.d(t, { A: () => tt });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    i = n(17928),
    s = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    m = n(287809),
    f = n(262),
    g = n(503698),
    p = n.n(g),
    E = n(612324),
    b = n(70283),
    h = n(834730),
    x = n(259678),
    _ = n(307301),
    A = n(192308),
    N = n(28863),
    v = n(866665),
    I = n(22231),
    R = n(922016),
    j = n(983555),
    T = n(274670),
    y = n(144779),
    C = n(793574),
    S = n(688810),
    D = n(682618),
    M = n(992526),
    P = n(609782);
let U = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var O = n(248284),
    B = n(686246),
    G = n(425763),
    w = n(952270),
    k = n(365199),
    L = n(315710),
    H = n(297264),
    V = n(821609),
    $ = n(442433),
    F = n(450232),
    z = n(183555),
    X = n(451395),
    K = n(327791),
    W = n(315629),
    Y = n(403581),
    q = n(87719),
    Z = n(375708),
    Q = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(W.h, {
        color: "nitro-pink",
        className: Q.U,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: Q.t,
                children: Z.intl.string(Z.t.cKIIzk),
            }),
            (0, a.jsx)(V.$, {
                variant: "expressive",
                size: "sm",
                icon: Y.t,
                text: Z.intl.string(Z.t.pj0XBN),
                onClick: function () {
                    (t(), (0, q.e)());
                },
            }),
        ],
    });
}
var ee = n(470739),
    et = n(577931),
    en = n(494881);
let ea = "BADGE";
function el(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: i, index: s } = r,
        o = (0, G.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(X.mG, {
        index: t,
        itemId: String(i.badge_id),
        itemPreviewProps: { badge: i },
        listType: "PROFILE_BADGES",
        itemType: ea,
        "aria-label": Z.intl.formatToPlainString(Z.t.n5kHOr, { position: s + 1, badgeName: i.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: en.oE,
        draggingClassName: en.Id,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        children: [
            (0, a.jsx)(er, { ...r }),
            (0, a.jsx)(X.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": Z.intl.formatToPlainString(Z.t["9xRVLy"], { badgeName: i.name, position: s + 1 }),
            }),
        ],
    });
}
function er(e) {
    let { badge: t, index: r, onClose: i, onAction: s, controlRef: o, onUnhide: d } = e,
        [c, u] = l.useState(!1);
    function m(e) {
        (u(!0),
            (0, $.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("918024"), n.e("787847")]).then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: i, onAction: s });
                },
                { onClose: () => u(!1) },
            ));
    }
    let f = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: p()(en.fw, c && en.HV),
        onContextMenu: f ? void 0 : m,
        children: [
            (0, a.jsx)("div", {
                className: en.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: p()(en.pC, f && en.jx),
                    }),
            }),
            f
                ? (0, a.jsx)(v.m, {
                      position: "top",
                      text: Z.intl.string(Z.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          ref: o,
                          type: "button",
                          className: en.KJ,
                          "aria-label": Z.intl.formatToPlainString(Z.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => d?.(t),
                          children: (0, a.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      ref: o,
                      type: "button",
                      className: en.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": c,
                      "aria-label": Z.intl.formatToPlainString(Z.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: m,
                      children: (0, a.jsx)(k.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function ei() {
    let e = (0, G.VU)(),
        { badge: t, sourceClientOffset: n } = (0, B.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === ea ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: en.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: en.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: en.pC,
                }),
        }),
    });
}
function es(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    (l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, L.tj)(n, { keyboardModeEnabled: !0 }));
    let { analyticsLocations: o } = (0, S.Ay)(C.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: d } = (0, z.NJ)();
    l.useEffect(() => {
        d({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: o });
    }, []);
    let { fixedBadges: u, reorderableBadges: f, hiddenBadges: g } = (0, et.A)(),
        E = (0, K.A)(),
        b = l.useMemo(() => f.map((e) => e.badge_id), [f]),
        x = l.useRef(new Map());
    function _(e) {
        return (t) => {
            null == t ? x.current.delete(e) : x.current.set(e, t);
        };
    }
    function A(e) {
        requestAnimationFrame(() => x.current.get(e)?.focus());
    }
    function N(e) {
        (A(e.badge_id),
            (0, c.RC)({
                badgeId: e.badge_id,
                hidden: !1,
                reorderableBadgeIds: b,
                hiddenBadgeIds: g.map((e) => {
                    let { badge_id: t } = e;
                    return t;
                }),
                canReorder: E,
            }));
    }
    let v = u.length + f.length + g.length,
        I = (0, i.bG)([s.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && s.Ay.hasCatalogFor(e);
        });
    function R(e, t) {
        (0, c.hB)((0, c.i1)(b, e, t));
    }
    let j = v > 0,
        T = I && !j,
        y = !E && !T,
        D = E ? Z.t.VHaYM7 : Z.t["7Qs/YX"];
    return (0, a.jsxs)("div", {
        ref: n,
        className: p()(en.SW, T && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: p()(en.Qs, y && en.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.$,
                                children: [
                                    (0, a.jsx)(F.A, { size: "xs", className: en.oU }),
                                    (0, a.jsx)(H.D, {
                                        id: r,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !T &&
                                (0, a.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: Z.intl.string(D),
                                }),
                        ],
                    }),
                    y && (0, a.jsx)(J, { onClose: t }),
                    T &&
                        (0, a.jsx)(h.E, {
                            className: en.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Z.t.VT02mI),
                        }),
                    j &&
                        (0, a.jsxs)("div", {
                            className: en.yq,
                            role: "group",
                            "aria-label": Z.intl.string(Z.t.VWV0y5),
                            children: [
                                u.map((e, n) =>
                                    (0, a.jsx)(
                                        er,
                                        {
                                            badge: e,
                                            index: n,
                                            onClose: t,
                                            onAction: A,
                                            controlRef: _(e.badge_id),
                                            onUnhide: N,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                                f.map((e, n) =>
                                    E
                                        ? (0, a.jsx)(
                                              el,
                                              {
                                                  badge: e,
                                                  index: u.length + n,
                                                  onClose: t,
                                                  onAction: A,
                                                  controlRef: _(e.badge_id),
                                                  reorderableIndex: n,
                                                  onReorder: R,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              er,
                                              {
                                                  badge: e,
                                                  index: u.length + n,
                                                  onClose: t,
                                                  onAction: A,
                                                  controlRef: _(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                g.map((e, n) =>
                                    (0, a.jsx)(
                                        er,
                                        {
                                            badge: e,
                                            index: u.length + f.length + n,
                                            onClose: t,
                                            onAction: A,
                                            controlRef: _(e.badge_id),
                                            onUnhide: N,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(ei, {}),
            (0, a.jsx)(V.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: Z.intl.string(Z.t.fN2how),
                onClick: function () {
                    (d({ action: "PRESS_VIEW_BADGES", analyticsLocations: o }),
                        t(),
                        (0, ee._)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var eo = n(775602),
    ed = n(461536),
    ec = n(321191),
    eu = n(351906);
function em(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, P.w0)(d),
        {
            badgeData: p,
            currentTier: E,
            obtainedAt: h,
        } = (0, i.cf)(
            [s.Ay],
            () =>
                null == g || null == c
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: s.Ay.getBadgeById(g, c),
                          currentTier: s.Ay.getCurrentTier(g, c),
                          obtainedAt: s.Ay.getObtainedAt(g, c),
                      },
            [g, c],
        ),
        x = (0, i.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && s.Ay.isCatalogStaleFor(c) && (0, D.RS)(c);
        }, [c]),
        A = p?.badge_id === b.$.PREMIUM_TENURE,
        N = g === b.$.LEGACY_USERNAME,
        v = E?.name,
        I = A ? Z.intl.string(Z.t.Ipxkog) : (p?.name ?? u);
    A ? (r = n = null != v ? `${I} ${v}` : I) : null != v ? ((t = I), (n = v), (r = `${I} ${v}`)) : ((n = I), (r = I));
    let R = x ? void 0 : p?.complex_icon_animated_url,
        j = R ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? m,
        T = null != R && j === R;
    if (N) return (0, a.jsx)(ef, { userId: c, title: n, badgeImage: j, shouldShow: f, children: o });
    let y = p?.info_label ?? (null != h ? Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(ed.A, {
        title: n,
        eyebrow: t,
        body: y,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: T,
        shouldShow: f,
        onShow: _,
        children: o,
    });
}
function ef(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: s } = e,
        o = (0, i.bG)(
            [ec.A, eu.A],
            () =>
                eu.A.hidePersonalInformation
                    ? Z.intl.string(Z.t.Br1ls3)
                    : null != n
                      ? (ec.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ed.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: s, children: t });
}
var eg = n(839534),
    ep = n(683063);
function eE(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: i } = e;
    return (0, a.jsx)(ep.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: l,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: r,
        children: i,
    });
}
var eb = n(38423),
    eh = n(998370),
    ex = n(158390),
    e_ = n(927813);
let eA = 5 * e_.A.Millis.MINUTE,
    eN = new Map(),
    ev = { badgeName: void 0, tierBySimpleIconUrl: new Map() };
var eI = n(116833),
    eR = n(704640),
    ej = n(425713),
    eT = n(642481),
    ey = n(720879),
    eC = n(202541),
    eS = n(49999),
    eD = n(518477);
let eM = function (e) {
    let {
            badgeId: t = eC.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: i,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eC.VD[t].nameUnformattedNitro,
        m = Z.intl.string(u).toLocaleUpperCase(),
        f = eC.VD[t].rarity,
        g = (0, eR.A)(t),
        p = (0, ej.I)(t).standard;
    (0, l.useEffect)(() => {
        (eI.m[eI.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
        n?.(eS.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, a.jsx)(ed.A, {
            targetElementRef: i,
            onShow: c,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: p,
            badgeName: m,
            progressCircle: t,
            children: r,
        });
    }
    let b = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: eI.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(ey.A, {
              targetElementRef: i,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: eD.In,
              onShow: c,
              ...b,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(eT.A, {
                      targetElementRef: i,
                      shouldShow: !0,
                      onRequestClose: E,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...b,
                  }),
              ],
          });
};
var eP = n(592265);
let eU = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eP.R,
        children: [t, (0, a.jsx)("div", { className: eP.A, children: n }), l],
    });
};
var eO = n(224016),
    eB = n(747278);
let eG = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, ej.I)(n.id).standard;
    return (0, a.jsxs)(eU, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eO.A, { width: 56, className: eB.R }),
        children: [
            (0, a.jsx)(H.D, { variant: "heading-xl/extrabold", children: Z.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eB.K,
                children: t.description,
            }),
        ],
    });
};
var ew = n(30084),
    ek = n(738822),
    eL = n(104886),
    eH = n(590202),
    eV = n(976860),
    e$ = n(780964),
    eF = n(766075),
    ez = n(305003),
    eX = n(273875),
    eK = n(798618),
    eW = n(752079),
    eY = n(370277);
function eq(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: i, forceOpen: s } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let m = l.useCallback(() => {
        (u(),
            (c.current = window.setTimeout(() => {
                ((c.current = null), d(!0));
            }, r)));
    }, [r, u]);
    l.useEffect(() => {
        s && !o && m();
    }, [s, o, m]);
    let f = l.useCallback(() => {
            m();
        }, [m]),
        g = l.useCallback(() => {
            (u(), d(!1));
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eX.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eZ, { showSubtext: i }), (0, a.jsx)(eK.F, {})],
            }),
        ],
    });
}
function eZ(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eU, {
        assetComponent: (0, a.jsx)(eW.A, { className: eY.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(H.D, {
            variant: "heading-md/extrabold",
            className: eY.RK,
            children: Z.intl.string(Z.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(H.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eY.Qn,
                children: Z.intl.string(Z.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", className: eY.lV, children: Z.intl.string(Z.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eQ = n(174459),
    eJ = n(474090),
    e0 = n(439174),
    e1 = n(47675),
    e8 = n(999291),
    e2 = n(874402),
    e7 = n(652215),
    e5 = n(758836),
    e4 = n(854232),
    e3 = n(816645);
function e9(e) {
    var t;
    let n,
        r,
        d,
        {
            badges: c,
            overflowCount: u,
            className: g,
            badgeClassName: B,
            displayProfile: G,
            onClose: w,
            shouldOpenBadgeTooltip: k,
            shouldGlowTenureBadge: L,
            popoutAnchorRef: H,
            containerRef: V,
        } = e,
        $ = (0, O.A)((e) => e.isOpen),
        F = l.useRef(null),
        X = (0, E.A)(F, V),
        K = l.useRef(null),
        W = l.useRef(null),
        Y = l.useRef(null),
        { analyticsLocations: q } = (0, S.Ay)(C.A.BADGE),
        { context: Q, trackUserProfileAction: J } = (0, z.NJ)(),
        et = m.default.getCurrentUser(),
        en = (0, eJ.CC)(et?.premiumType, eC.PremiumTypes.TIER_2),
        ea = (0, M.J)({ location: "UserProfileBadgeList" }),
        el = (0, o.d)({ location: "UserProfileBadgeList" }),
        er = (function (e) {
            let { location: t } = e;
            return U.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        { enabled: ei } = eh.J.useConfig({ location: "UserProfileBadgeList" }),
        eo = ei && !ea && c.some((e) => (0, P.w0)(e.id) === b.$.GIFTING),
        ec =
            ((t = (0, eb.b9)(`UserProfileBadgeList${eo ? "" : "-DISABLED"}`) && eo),
            (n = (0, i.bG)([m.default], () => m.default.getCurrentUser()?.id)),
            (r = (0, i.bG)([s.Ay], () => (null != n ? s.Ay.getBadgeById(b.$.GIFTING, n) : void 0), [n])),
            l.useEffect(() => {
                if (!t || null == n) return;
                if (null != r) return void eN.delete(n);
                let e = eN.get(n) ?? { backoff: new ex.A(e_.A.Millis.MINUTE, eA, !0), gateUntil: 0 };
                Date.now() < e.gateUntil ||
                    ((e.gateUntil = Date.now() + e.backoff.fail()), eN.set(n, e), (0, D.o0)(b.$.GIFTING));
            }, [t, n, r]),
            l.useMemo(() => {
                if (!t || null == r) return ev;
                let e = new Map();
                for (let t of r.tiers) null != t.simple_icon_url && e.set(t.simple_icon_url, t);
                return { badgeName: r.name, tierBySimpleIconUrl: e };
            }, [t, r]));
    l.useEffect(() => {
        (ea || er) && G?.userId != null && !s.Ay.hasCatalogFor(G.userId) && (0, D.RS)(G.userId);
    }, [ea, er, G?.userId]);
    let eu = G?.userId,
        ef = (0, i.bG)(
            [s.Ay],
            () => {
                if (!er || null == eu) return null;
                let e = {};
                for (let t of c) {
                    let n = (0, P.w0)(t.id);
                    if (null == n) continue;
                    let a = s.Ay.getBadgeById(n, eu)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [er, eu, c],
        ),
        ep = G?.userId === et?.id,
        eI = ep && ea && el && null != H,
        eR = !eI && ea,
        ej = eI && 0 === c.length,
        eT = et?.id,
        ey = (0, i.bG)(
            [s.Ay],
            () => null != eT && (!s.Ay.hasCatalogFor(eT) || s.Ay.getBadges(eT).some((e) => e.owned)),
            [eT],
        ),
        eS = eI && $;
    function eP(e) {
        O.A.setState({ isOpen: e });
    }
    let eU = (0, e8.AP)(et?.id ?? null),
        eO = (0, f.A)(eU).some((e) => e.id === ez.A.ORB_PROFILE_BADGE),
        eB = eI && 0 === u ? c.length - 1 : -1,
        eX = null;
    u > 0 &&
        ((eX = (0, a.jsx)(h.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e3.AX,
            children: Z.intl.format(Z.t.n7CiSK, { count: u }),
        })),
        (d = Z.intl.formatToPlainString(Z.t.eIHfGZ, { overflow_count: u })));
    let eK = (0, a.jsxs)("div", {
        ref: X,
        className: p()(e3.kL, el && e3.Yq, eI && e3.Tx, g),
        ...(ej ? null : { "aria-label": Z.intl.string(Z.t.VWV0y5), role: "group" }),
        ...(eI && !ej ? { onClick: () => eP(!eS) } : null),
        children: [
            ej &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: e3.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eS,
                        onClick: (e) => {
                            (e.stopPropagation(), eP(!eS));
                        },
                        children: [
                            (0, a.jsx)(_.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(h.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Z.intl.string(Z.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            c.map((e, t) => {
                let n = e.id === ez.A.ORB_PROFILE_BADGE,
                    l = (0, e0.e0)(e.id),
                    r = null != l || e.id === e4.K,
                    i = "april_fools_2026" === e.id,
                    s = void 0 !== l && e.id !== e4.K,
                    o = ef?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eD.L7)(e.icon),
                        className: p()(e3.qS, null != o && e3.Do, t === eB && e3.el, B),
                    }),
                    c = null != k && k(e.id),
                    u = {
                        onClick: (a) => {
                            if (
                                (J({ action: "PRESS_BADGE" }),
                                (0, e1.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...Q,
                                }),
                                eI)
                            )
                                return void a.preventDefault();
                            let l = G?.userId != null ? m.default.getUser(G.userId) : null;
                            if (ea && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, ee._)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: G?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, P.w0)(e.id) === b.$.GIFTING) {
                                (a.preventDefault(),
                                    w?.(),
                                    (0, eF.openUserSettings)(e$.X.GIFT_PANEL, { analyticsLocations: q }));
                                return;
                            }
                            if (n) {
                                ((0, eg.Cz)({
                                    tab: e5.G2.ORBS,
                                    analyticsLocations: q,
                                    analyticsSource: C.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    w?.(),
                                    (0, A.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eQ.default.track(e7.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: en,
                                        viewed_user_id: G?.userId,
                                    }),
                                    en)
                                ) {
                                    (ep
                                        ? ((0, eV.pX)(e7.BVt.NITRO_HOME), (0, A.closeAllModals)())
                                        : (0, ew.D)({ analyticsLocations: q, displayProfile: G }),
                                        w?.());
                                    return;
                                }
                                if (ep) {
                                    let t = null != e.link ? (0, j.default)(e.link, { analyticsLocations: q }) : null;
                                    if (null == t) return;
                                    return (w?.(), (0, A.closeAllModals)(), t(a));
                                }
                                return ((0, ew.D)({ analyticsLocations: q, displayProfile: G }), void w?.());
                            }
                            let i = null != e.link ? (0, j.default)(e.link, { analyticsLocations: q }) : null;
                            if (null != i) return (w?.(), (0, A.closeAllModals)(), i(a));
                        },
                        onMouseEnter: () => {
                            (e.id === f.h &&
                                ((0, eL.E5)(eL.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, T.r)({
                                          type: y.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: ek.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eQ.default.track(e7.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eH.fF)(ek.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                J({ action: "HOVER_BADGE" }),
                                (0, e1.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...Q,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(eI ? { "aria-haspopup": "dialog", "aria-expanded": eS } : null),
                        style: { filter: L && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (ea)
                    return (0, a.jsx)(
                        em,
                        {
                            shouldShow: !eS,
                            legacyBadgeId: e.id,
                            userId: G?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eD.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                let g = null != e.simple_icon_url ? ec.tierBySimpleIconUrl.get(e.simple_icon_url) : void 0;
                if (g?.complex_icon_static_url != null && null != ec.badgeName)
                    return (0, a.jsx)(
                        ed.K,
                        {
                            eyebrow: ec.badgeName,
                            title: g.name ?? e.description,
                            badgeImage: g.complex_icon_static_url,
                            badgeName: e.description,
                            shouldShow: !eS,
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: K, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eM, {
                                badgeId: e.id,
                                targetElementRef: K,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eQ.default.track(e7.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (ep ? "self" : "other"),
                                    });
                                },
                                estimatedTooltipHeight: 220,
                                children: n,
                            }),
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (n) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: W, children: d });
                    return (0, a.jsx)(
                        eq,
                        {
                            targetElementRef: W,
                            delay: eD.In,
                            showSubtext: !eO && !e.isPreviewMode,
                            forceOpen: c,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: Y, children: d });
                    return (0, a.jsx)(
                        eE,
                        {
                            targetElementRef: Y,
                            delay: eD.In,
                            forceOpen: c,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let E = (0, a.jsx)(N.Anchor, { ...u, children: d }),
                    h = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e4.K
                            ? (0, a.jsx)(eG, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e4.K ? l : void 0 });
                return (0, a.jsx)(
                    v.m,
                    { __unsupportedReactNodeAsText: h, forceOpen: c, delay: eD.In, ariaHidden: !0, children: E },
                    `${e.id}-${t}`,
                );
            }),
            u > 0 &&
                (eR
                    ? (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(e3.$O, e3.lv),
                              "aria-label": d,
                              onClick: function () {
                                  let e = null != eu ? m.default.getUser(eu) : null;
                                  (0, ee._)({ targetUserId: eu, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: eX,
                          }),
                      })
                    : (0, a.jsx)("span", { className: e3.$O, children: eX })),
            eI &&
                !ej &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: e3.r9,
                        "aria-label": Z.intl.string(Z.t.PXIyjF),
                        "aria-haspopup": "dialog",
                        "aria-expanded": eS,
                        onClick: (e) => {
                            (e.stopPropagation(), eP(!eS));
                        },
                        children: (0, a.jsx)(I.PencilIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: e3.IZ,
                            "aria-hidden": !0,
                        }),
                    }),
                }),
        ],
    });
    return eI
        ? (0, a.jsx)(R.Y, {
              targetElementRef: ej && !ey ? F : H,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${c.length}`,
              scrollBehavior: "close",
              shouldShow: eS,
              onRequestClose: (e) => {
                  let t = e?.target;
                  F.current?.contains(t) === !0 || (t?.closest(`[${e2.m}]`) == null && eP(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(es, { onClose: t });
              },
              children: () => eK,
          })
        : eK;
}
var e6 = n(996988);
let te = {
    [e6.d.POPOUT]: 12,
    [e6.d.MODAL]: 26,
    [e6.d.SIDEBAR]: 13,
    [e6.d.VIDEO_TILE_BACKGROUND]: 12,
    [e6.d.EMBED]: 12,
};
function tt(e) {
    let t,
        {
            displayProfile: n,
            themeType: g,
            isRedesignEnabled: p,
            pendingLegacyUsernameDisabled: E,
            pendingBadges: b,
            showPendingBadgeEdits: h = !1,
            onClose: x,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: N,
            containerRef: v,
        } = e,
        I = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        R = n?.userId,
        j = (0, i.bG)([m.default], () => null != R && m.default.getUser(R)?.bot === !0, [R]),
        T = (0, f.A)(n, E),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        S = (0, i.yK)([s.Ay], () => (h && null != R && s.Ay.hasCatalogFor(R) ? s.Ay.getBadges(R) : []), [h, R]),
        D = l.useMemo(() => {
            let e = T;
            if (null != b) {
                let t = new Set(T.map((e) => e.id));
                e = [...T, ...b.filter((e) => !t.has(e.id))];
            }
            return h ? (0, c.Rr)(e, S, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [T, b, h, S, y, C]);
    if (0 === D.length && !h) return null;
    let M = I && !j,
        P = M ? Math.max(D.length - d.k9, 0) : 0;
    return (
        (t = M
            ? [D.slice(0, d.k9)]
            : g === e6.d.MODAL_V2
              ? [D]
              : (0, r.chunk)(D, !0 === p && g === e6.d.SIDEBAR ? te[e6.d.POPOUT] : te[g])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e9,
                    {
                        badges: e,
                        overflowCount: P,
                        displayProfile: n,
                        onClose: x,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        popoutAnchorRef: N,
                        containerRef: 0 === t ? v : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
