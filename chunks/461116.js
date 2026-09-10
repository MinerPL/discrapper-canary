n.d(t, { A: () => e7 });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(17928),
    i = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    m = n(287809),
    f = n(702841),
    g = n(885386),
    E = n(351906),
    p = n(375708);
let b = "legacy_username";
function h(e, t) {
    let n = g.m$.useSetting(),
        a = (0, f.bG)([m.default], () => m.default.getCurrentUser()),
        l = (0, f.bG)([E.A], () => E.A.hidePersonalInformation);
    if (null == e) return [];
    let r = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (r = r.filter((e) => e.id !== b)),
        l && (r = r.map((e) => ({ ...e, description: e.id === b ? p.intl.string(p.t.Br1ls3) : e.description }))),
        r
    );
}
var x = n(503698),
    _ = n.n(x),
    A = n(834730),
    N = n(259678),
    v = n(307301),
    R = n(192308),
    I = n(28863),
    j = n(866665),
    y = n(22231),
    C = n(922016),
    T = n(983555),
    S = n(274670),
    D = n(144779),
    P = n(793574),
    O = n(688810),
    M = n(682618),
    U = n(992526),
    B = n(609782);
let k = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var G = n(248284),
    w = n(686246),
    L = n(425763),
    H = n(952270),
    V = n(365199),
    $ = n(315710),
    F = n(297264),
    z = n(821609),
    X = n(442433),
    K = n(450232),
    W = n(183555),
    Y = n(451395),
    q = n(327791),
    Z = n(315629),
    Q = n(403581),
    J = n(87719),
    ee = n(207711);
function et(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(Z.h, {
        color: "nitro-pink",
        className: ee.U,
        children: [
            (0, a.jsx)(A.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: ee.t,
                children: p.intl.string(p.t.cKIIzk),
            }),
            (0, a.jsx)(z.$, {
                variant: "expressive",
                size: "sm",
                icon: Q.t,
                text: p.intl.string(p.t.pj0XBN),
                onClick: function () {
                    (t(), (0, J.e)());
                },
            }),
        ],
    });
}
var en = n(470739),
    ea = n(577931),
    el = n(494881);
let er = "BADGE";
function es(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, L.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(Y.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: "PROFILE_BADGES",
        itemType: er,
        "aria-label": p.intl.formatToPlainString(p.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: el.oE,
        draggingClassName: el.Id,
        dropBeforeClassName: el.A,
        dropAfterClassName: el.Ze,
        children: [
            (0, a.jsx)(ei, { ...r }),
            (0, a.jsx)(Y.jV, {
                buttonRef: d,
                className: el.BU,
                "aria-label": p.intl.formatToPlainString(p.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function ei(e) {
    let { badge: t, index: r, onClose: s, onAction: i, controlRef: o, onUnhide: d } = e,
        [c, u] = l.useState(!1);
    function m(e) {
        (u(!0),
            (0, X.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("918024"), n.e("787847")]).then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => u(!1) },
            ));
    }
    let f = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: _()(el.fw, c && el.HV),
        onContextMenu: f ? void 0 : m,
        children: [
            (0, a.jsx)("div", {
                className: el.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: _()(el.pC, f && el.jx),
                    }),
            }),
            f
                ? (0, a.jsx)(j.m, {
                      position: "top",
                      text: p.intl.string(p.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          ref: o,
                          type: "button",
                          className: el.KJ,
                          "aria-label": p.intl.formatToPlainString(p.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => d?.(t),
                          children: (0, a.jsx)(H.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      ref: o,
                      type: "button",
                      className: el.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": c,
                      "aria-label": p.intl.formatToPlainString(p.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: m,
                      children: (0, a.jsx)(V.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function eo() {
    let e = (0, L.VU)(),
        { badge: t, sourceClientOffset: n } = (0, w.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === er ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: el.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: el.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: el.pC,
                }),
        }),
    });
}
function ed(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    (l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, $.tj)(n, { keyboardModeEnabled: !0 }));
    let { analyticsLocations: o } = (0, O.Ay)(P.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: d } = (0, W.NJ)();
    l.useEffect(() => {
        d({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: o });
    }, []);
    let { fixedBadges: u, reorderableBadges: f, hiddenBadges: g } = (0, ea.A)(),
        E = (0, q.A)(),
        b = l.useMemo(() => f.map((e) => e.badge_id), [f]),
        h = l.useRef(new Map());
    function x(e) {
        return (t) => {
            null == t ? h.current.delete(e) : h.current.set(e, t);
        };
    }
    function N(e) {
        requestAnimationFrame(() => h.current.get(e)?.focus());
    }
    function v(e) {
        (N(e.badge_id),
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
    let R = u.length + f.length + g.length,
        I = (0, s.bG)([i.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function j(e, t) {
        (0, c.hB)((0, c.i1)(b, e, t));
    }
    let y = R > 0,
        C = I && !y,
        T = !E && !C,
        S = E ? p.t.VHaYM7 : p.t["7Qs/YX"];
    return (0, a.jsxs)("div", {
        ref: n,
        className: _()(el.SW, C && el.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: _()(el.Qs, T && el.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: el.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: el.$,
                                children: [
                                    (0, a.jsx)(K.A, { size: "xs", className: el.oU }),
                                    (0, a.jsx)(F.D, {
                                        id: r,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: p.intl.string(p.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !C &&
                                (0, a.jsx)(A.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: p.intl.string(S),
                                }),
                        ],
                    }),
                    T && (0, a.jsx)(et, { onClose: t }),
                    C &&
                        (0, a.jsx)(A.E, {
                            className: el.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: p.intl.string(p.t.VT02mI),
                        }),
                    y &&
                        (0, a.jsxs)("div", {
                            className: el.yq,
                            role: "group",
                            "aria-label": p.intl.string(p.t.VWV0y5),
                            children: [
                                u.map((e, n) =>
                                    (0, a.jsx)(
                                        ei,
                                        {
                                            badge: e,
                                            index: n,
                                            onClose: t,
                                            onAction: N,
                                            controlRef: x(e.badge_id),
                                            onUnhide: v,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                                f.map((e, n) =>
                                    E
                                        ? (0, a.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: u.length + n,
                                                  onClose: t,
                                                  onAction: N,
                                                  controlRef: x(e.badge_id),
                                                  reorderableIndex: n,
                                                  onReorder: j,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              ei,
                                              {
                                                  badge: e,
                                                  index: u.length + n,
                                                  onClose: t,
                                                  onAction: N,
                                                  controlRef: x(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                g.map((e, n) =>
                                    (0, a.jsx)(
                                        ei,
                                        {
                                            badge: e,
                                            index: u.length + f.length + n,
                                            onClose: t,
                                            onAction: N,
                                            controlRef: x(e.badge_id),
                                            onUnhide: v,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(eo, {}),
            (0, a.jsx)(z.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: p.intl.string(p.t.fN2how),
                onClick: function () {
                    (d({ action: "PRESS_VIEW_BADGES", analyticsLocations: o }),
                        t(),
                        (0, en._)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ec = n(70283),
    eu = n(775602),
    em = n(461536),
    ef = n(321191);
function eg(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, B.w0)(d),
        {
            badgeData: E,
            currentTier: b,
            obtainedAt: h,
        } = (0, s.cf)(
            [i.Ay],
            () =>
                null == g || null == c
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: i.Ay.getBadgeById(g, c),
                          currentTier: i.Ay.getCurrentTier(g, c),
                          obtainedAt: i.Ay.getObtainedAt(g, c),
                      },
            [g, c],
        ),
        x = (0, s.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, M.RS)(c);
        }, [c]),
        A = E?.badge_id === ec.$.PREMIUM_TENURE,
        N = g === ec.$.LEGACY_USERNAME,
        v = b?.name,
        R = A ? p.intl.string(p.t.Ipxkog) : (E?.name ?? u);
    A ? (r = n = null != v ? `${R} ${v}` : R) : null != v ? ((t = R), (n = v), (r = `${R} ${v}`)) : ((n = R), (r = R));
    let I = x ? void 0 : E?.complex_icon_animated_url,
        j = I ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? m,
        y = null != I && j === I;
    if (N) return (0, a.jsx)(eE, { userId: c, title: n, badgeImage: j, shouldShow: f, children: o });
    let C = E?.info_label ?? (null != h ? p.intl.formatToPlainString(p.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(em.A, {
        title: n,
        eyebrow: t,
        body: C,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: y,
        shouldShow: f,
        onShow: _,
        children: o,
    });
}
function eE(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [ef.A, E.A],
            () =>
                E.A.hidePersonalInformation
                    ? p.intl.string(p.t.Br1ls3)
                    : null != n
                      ? (ef.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(em.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var ep = n(839534),
    eb = n(683063);
function eh(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(eb.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: l,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: r,
        children: s,
    });
}
var ex = n(116833),
    e_ = n(704640),
    eA = n(425713),
    eN = n(642481),
    ev = n(720879),
    eR = n(202541),
    eI = n(49999),
    ej = n(518477);
let ey = function (e) {
    let {
            badgeId: t = eR.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eR.VD[t].nameUnformattedNitro,
        m = p.intl.string(u).toLocaleUpperCase(),
        f = eR.VD[t].rarity,
        g = (0, e_.A)(t),
        E = (0, eA.I)(t).standard;
    (0, l.useEffect)(() => {
        (ex.m[ex.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E));
    }, [E]);
    let b = (0, l.useCallback)(() => {
        n?.(eI.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(em.A, {
            targetElementRef: s,
            onShow: c,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: E,
            badgeName: m,
            progressCircle: t,
            children: r,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ex.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: E, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(ev.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: ej.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(eN.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: b,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...h,
                  }),
              ],
          });
};
var eC = n(592265);
let eT = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eC.R,
        children: [t, (0, a.jsx)("div", { className: eC.A, children: n }), l],
    });
};
var eS = n(224016),
    eD = n(747278);
let eP = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, eA.I)(n.id).standard;
    return (0, a.jsxs)(eT, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eS.A, { width: 56, className: eD.R }),
        children: [
            (0, a.jsx)(F.D, { variant: "heading-xl/extrabold", children: p.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(A.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eD.K,
                children: t.description,
            }),
        ],
    });
};
var eO = n(30084),
    eM = n(738822),
    eU = n(104886),
    eB = n(590202),
    ek = n(976860),
    eG = n(305003),
    ew = n(273875),
    eL = n(798618),
    eH = n(752079),
    eV = n(370277);
function e$(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
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
        i && !o && m();
    }, [i, o, m]);
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
            (0, a.jsxs)(ew.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eF, { showSubtext: s }), (0, a.jsx)(eL.F, {})],
            }),
        ],
    });
}
function eF(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eT, {
        assetComponent: (0, a.jsx)(eH.A, { className: eV.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(F.D, {
            variant: "heading-md/extrabold",
            className: eV.RK,
            children: p.intl.string(p.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(F.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eV.Qn,
                children: p.intl.string(p.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(A.E, { variant: "text-xs/normal", className: eV.lV, children: p.intl.string(p.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ez = n(174459),
    eX = n(474090),
    eK = n(439174),
    eW = n(47675),
    eY = n(999291),
    eq = n(874402),
    eZ = n(652215),
    eQ = n(758836),
    eJ = n(854232),
    e0 = n(816645);
function e1(e) {
    let t,
        {
            badges: n,
            overflowCount: r,
            className: d,
            badgeClassName: c,
            displayProfile: u,
            onClose: f,
            shouldOpenBadgeTooltip: g,
            shouldGlowTenureBadge: E,
            popoutAnchorRef: b,
        } = e,
        x = (0, G.A)((e) => e.isOpen),
        w = l.useRef(null),
        L = l.useRef(null),
        H = l.useRef(null),
        V = l.useRef(null),
        { analyticsLocations: $ } = (0, O.Ay)(P.A.BADGE),
        { context: F, trackUserProfileAction: z } = (0, W.NJ)(),
        X = m.default.getCurrentUser(),
        K = (0, eX.CC)(X?.premiumType, eR.PremiumTypes.TIER_2),
        Y = (0, U.J9)({ location: "UserProfileBadgeList" }),
        q = (0, o.d)({ location: "UserProfileBadgeList" }),
        Z = (function (e) {
            let { location: t } = e;
            return k.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (Y || Z) && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, M.RS)(u.userId);
    }, [Y, Z, u?.userId]);
    let Q = u?.userId,
        J = (0, s.bG)(
            [i.Ay],
            () => {
                if (!Z || null == Q) return null;
                let e = {};
                for (let t of n) {
                    let n = (0, B.w0)(t.id);
                    if (null == n) continue;
                    let a = i.Ay.getBadgeById(n, Q)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [Z, Q, n],
        ),
        ee = u?.userId === X?.id,
        et = ee && Y && q && null != b,
        ea = !et && Y,
        el = et && 0 === n.length,
        er = X?.id,
        es = (0, s.bG)(
            [i.Ay],
            () => null != er && (!i.Ay.hasCatalogFor(er) || i.Ay.getBadges(er).some((e) => e.owned)),
            [er],
        ),
        ei = et && x;
    function eo(e) {
        G.A.setState({ isOpen: e });
    }
    let ec = h((0, eY.AP)(X?.id ?? null)).some((e) => e.id === eG.A.ORB_PROFILE_BADGE),
        eu = et && 0 === r ? n.length - 1 : -1,
        em = null;
    r > 0 &&
        ((em = (0, a.jsx)(A.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e0.AX,
            children: p.intl.format(p.t.n7CiSK, { count: r }),
        })),
        (t = p.intl.formatToPlainString(p.t.eIHfGZ, { overflow_count: r })));
    let ef = (0, a.jsxs)("div", {
        ref: w,
        className: _()(e0.kL, q && e0.Yq, et && e0.Tx, d),
        ...(el ? null : { "aria-label": p.intl.string(p.t.VWV0y5), role: "group" }),
        ...(et && !el ? { onClick: () => eo(!ei) } : null),
        children: [
            el &&
                (0, a.jsx)(N.vN, {
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: e0.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": ei,
                        onClick: (e) => {
                            (e.stopPropagation(), eo(!ei));
                        },
                        children: [
                            (0, a.jsx)(v.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(A.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: p.intl.string(p.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === eG.A.ORB_PROFILE_BADGE,
                    l = (0, eK.e0)(e.id),
                    r = null != l || e.id === eJ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== eJ.K,
                    o = J?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, ej.L7)(e.icon),
                        className: _()(e0.qS, null != o && e0.Do, t === eu && e0.el, c),
                    }),
                    p = null != g && g(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (z({ action: "PRESS_BADGE" }),
                                (0, eW.vP)({
                                    badgeId: (0, B.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: $,
                                    ...F,
                                }),
                                et)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (Y && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, en._)({
                                        initialBadgeId: (0, B.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if (n) {
                                ((0, ep.Cz)({
                                    tab: eQ.G2.ORBS,
                                    analyticsLocations: $,
                                    analyticsSource: P.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    f?.(),
                                    (0, R.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    ez.default.track(eZ.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: K,
                                        viewed_user_id: u?.userId,
                                    }),
                                    K)
                                ) {
                                    (ee
                                        ? ((0, ek.pX)(eZ.BVt.NITRO_HOME), (0, R.closeAllModals)())
                                        : (0, eO.D)({ analyticsLocations: $, displayProfile: u }),
                                        f?.());
                                    return;
                                }
                                if (ee) {
                                    let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: $ }) : null;
                                    if (null == t) return;
                                    return (f?.(), (0, R.closeAllModals)(), t(a));
                                }
                                return ((0, eO.D)({ analyticsLocations: $, displayProfile: u }), void f?.());
                            }
                            let s = null != e.link ? (0, T.default)(e.link, { analyticsLocations: $ }) : null;
                            if (null != s) return (f?.(), (0, R.closeAllModals)(), s(a));
                        },
                        onMouseEnter: () => {
                            ("quest_completed" === e.id &&
                                ((0, eU.E5)(eU.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, S.r)({
                                          type: D.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eM.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : ez.default.track(eZ.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eB.fF)(eM.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                z({ action: "HOVER_BADGE" }),
                                (0, eW.vP)({
                                    badgeId: (0, B.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: $,
                                    ...F,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(et ? { "aria-haspopup": "dialog", "aria-expanded": ei } : null),
                        style: { filter: E && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (Y)
                    return (0, a.jsx)(
                        eg,
                        {
                            shouldShow: !ei,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ej.L7)(e.icon),
                            children: (0, a.jsx)(I.Anchor, { ...b, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(I.Anchor, { ...b, ref: L, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(ey, {
                                badgeId: e.id,
                                targetElementRef: L,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    ez.default.track(eZ.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (ee ? "self" : "other"),
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
                    let n = (0, a.jsx)(I.Anchor, { ...b, ref: H, children: d });
                    return (0, a.jsx)(
                        e$,
                        {
                            targetElementRef: H,
                            delay: ej.In,
                            showSubtext: !ec && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(I.Anchor, { ...b, ref: V, children: d });
                    return (0, a.jsx)(
                        eh,
                        {
                            targetElementRef: V,
                            delay: ej.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let h = (0, a.jsx)(I.Anchor, { ...b, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eJ.K
                            ? (0, a.jsx)(eP, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== eJ.K ? l : void 0 });
                return (0, a.jsx)(
                    j.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: ej.In, ariaHidden: !0, children: h },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (ea
                    ? (0, a.jsx)(N.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: _()(e0.$O, e0.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != Q ? m.default.getUser(Q) : null;
                                  (0, en._)({ targetUserId: Q, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: em,
                          }),
                      })
                    : (0, a.jsx)("span", { className: e0.$O, children: em })),
            et &&
                !el &&
                (0, a.jsx)(N.vN, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: e0.r9,
                        "aria-label": p.intl.string(p.t.PXIyjF),
                        "aria-haspopup": "dialog",
                        "aria-expanded": ei,
                        onClick: (e) => {
                            (e.stopPropagation(), eo(!ei));
                        },
                        children: (0, a.jsx)(y.PencilIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: e0.IZ,
                            "aria-hidden": !0,
                        }),
                    }),
                }),
        ],
    });
    return et
        ? (0, a.jsx)(C.Y, {
              targetElementRef: el && !es ? w : b,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: ei,
              onRequestClose: (e) => {
                  let t = e?.target;
                  w.current?.contains(t) === !0 || (t?.closest(`[${eq.m}]`) == null && eo(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(ed, { onClose: t });
              },
              children: () => ef,
          })
        : ef;
}
var e8 = n(996988);
let e2 = {
    [e8.d.POPOUT]: 12,
    [e8.d.MODAL]: 26,
    [e8.d.SIDEBAR]: 13,
    [e8.d.VIDEO_TILE_BACKGROUND]: 12,
    [e8.d.EMBED]: 12,
};
function e7(e) {
    let t,
        {
            displayProfile: n,
            themeType: f,
            isRedesignEnabled: g,
            pendingLegacyUsernameDisabled: E,
            pendingBadges: p,
            showPendingBadgeEdits: b = !1,
            onClose: x,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: N,
        } = e,
        v = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        R = n?.userId,
        I = (0, s.bG)([m.default], () => null != R && m.default.getUser(R)?.bot === !0, [R]),
        j = h(n, E),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        T = (0, s.yK)([i.Ay], () => (b && null != R && i.Ay.hasCatalogFor(R) ? i.Ay.getBadges(R) : []), [b, R]),
        S = l.useMemo(() => {
            let e = j;
            if (null != p) {
                let t = new Set(j.map((e) => e.id));
                e = [...j, ...p.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, T, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [j, p, b, T, y, C]);
    if (0 === S.length && !b) return null;
    let D = v && !I,
        P = D ? Math.max(S.length - d.k9, 0) : 0;
    return (
        (t = D
            ? [S.slice(0, d.k9)]
            : f === e8.d.MODAL_V2
              ? [S]
              : (0, r.chunk)(S, !0 === g && f === e8.d.SIDEBAR ? e2[e8.d.POPOUT] : e2[f])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e1,
                    {
                        badges: e,
                        overflowCount: P,
                        displayProfile: n,
                        onClose: x,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        popoutAnchorRef: N,
                    },
                    t,
                ),
            ),
        })
    );
}
