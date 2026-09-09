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
    v = n(259678),
    N = n(307301),
    R = n(192308),
    j = n(28863),
    I = n(866665),
    y = n(22231),
    C = n(922016),
    T = n(983555),
    S = n(274670),
    D = n(144779),
    P = n(793574),
    M = n(688810),
    O = n(682618),
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
    W = n(451395),
    Y = n(327791),
    q = n(315629),
    Q = n(403581),
    Z = n(87719),
    J = n(207711);
function ee(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(q.h, {
        color: "nitro-pink",
        className: J.U,
        children: [
            (0, a.jsx)(A.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: J.t,
                children: p.intl.string(p.t.cKIIzk),
            }),
            (0, a.jsx)(z.$, {
                variant: "expressive",
                size: "sm",
                icon: Q.t,
                text: p.intl.string(p.t.pj0XBN),
                onClick: function () {
                    t(), (0, Z.e)();
                },
            }),
        ],
    });
}
var et = n(470739),
    en = n(577931),
    ea = n(494881);
let el = "BADGE";
function er(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, L.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(W.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: "PROFILE_BADGES",
        itemType: el,
        "aria-label": p.intl.formatToPlainString(p.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: ea.oE,
        draggingClassName: ea.Id,
        dropBeforeClassName: ea.A,
        dropAfterClassName: ea.Ze,
        children: [
            (0, a.jsx)(es, { ...r }),
            (0, a.jsx)(W.jV, {
                buttonRef: d,
                className: ea.BU,
                "aria-label": p.intl.formatToPlainString(p.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function es(e) {
    let { badge: t, index: r, onClose: s, onAction: i, controlRef: o, onUnhide: d } = e,
        [c, u] = l.useState(!1);
    function m(e) {
        u(!0),
            (0, X.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("918024"), n.e("787847")]).then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => u(!1) },
            );
    }
    let f = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: _()(ea.fw, c && ea.HV),
        onContextMenu: f ? void 0 : m,
        children: [
            (0, a.jsx)("div", {
                className: ea.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: _()(ea.pC, f && ea.jx),
                    }),
            }),
            f
                ? (0, a.jsx)(I.m, {
                      position: "top",
                      text: p.intl.string(p.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          ref: o,
                          type: "button",
                          className: ea.KJ,
                          "aria-label": p.intl.formatToPlainString(p.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => d?.(t),
                          children: (0, a.jsx)(H.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      ref: o,
                      type: "button",
                      className: ea.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": c,
                      "aria-label": p.intl.formatToPlainString(p.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: m,
                      children: (0, a.jsx)(V.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function ei() {
    let e = (0, L.VU)(),
        { badge: t, sourceClientOffset: n } = (0, w.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === el ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: ea.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: ea.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ea.pC,
                }),
        }),
    });
}
function eo(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, $.tj)(n, { keyboardModeEnabled: !0 });
    let { fixedBadges: o, reorderableBadges: d, hiddenBadges: u } = (0, en.A)(),
        f = (0, Y.A)(),
        g = l.useMemo(() => d.map((e) => e.badge_id), [d]),
        E = l.useRef(new Map());
    function b(e) {
        return (t) => {
            null == t ? E.current.delete(e) : E.current.set(e, t);
        };
    }
    function h(e) {
        requestAnimationFrame(() => E.current.get(e)?.focus());
    }
    function x(e) {
        h(e.badge_id),
            (0, c.RC)({
                badgeId: e.badge_id,
                hidden: !1,
                reorderableBadgeIds: g,
                hiddenBadgeIds: u.map((e) => {
                    let { badge_id: t } = e;
                    return t;
                }),
                canReorder: f,
            });
    }
    let v = o.length + d.length + u.length,
        N = (0, s.bG)([i.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function R(e, t) {
        (0, c.hB)((0, c.i1)(g, e, t));
    }
    let j = v > 0,
        I = N && !j,
        y = !f && !I,
        C = f ? p.t.VHaYM7 : p.t["7Qs/YX"];
    return (0, a.jsxs)("div", {
        ref: n,
        className: _()(ea.SW, I && ea.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: _()(ea.Qs, y && ea.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: ea.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.$,
                                children: [
                                    (0, a.jsx)(K.A, { size: "xs", className: ea.oU }),
                                    (0, a.jsx)(F.D, {
                                        id: r,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: p.intl.string(p.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !I &&
                                (0, a.jsx)(A.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: p.intl.string(C),
                                }),
                        ],
                    }),
                    y && (0, a.jsx)(ee, { onClose: t }),
                    I &&
                        (0, a.jsx)(A.E, {
                            className: ea.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: p.intl.string(p.t.VT02mI),
                        }),
                    j &&
                        (0, a.jsxs)("div", {
                            className: ea.yq,
                            role: "group",
                            "aria-label": p.intl.string(p.t.VWV0y5),
                            children: [
                                o.map((e, n) =>
                                    (0, a.jsx)(
                                        es,
                                        {
                                            badge: e,
                                            index: n,
                                            onClose: t,
                                            onAction: h,
                                            controlRef: b(e.badge_id),
                                            onUnhide: x,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                                d.map((e, n) =>
                                    f
                                        ? (0, a.jsx)(
                                              er,
                                              {
                                                  badge: e,
                                                  index: o.length + n,
                                                  onClose: t,
                                                  onAction: h,
                                                  controlRef: b(e.badge_id),
                                                  reorderableIndex: n,
                                                  onReorder: R,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: o.length + n,
                                                  onClose: t,
                                                  onAction: h,
                                                  controlRef: b(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                u.map((e, n) =>
                                    (0, a.jsx)(
                                        es,
                                        {
                                            badge: e,
                                            index: o.length + d.length + n,
                                            onClose: t,
                                            onAction: h,
                                            controlRef: b(e.badge_id),
                                            onUnhide: x,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(ei, {}),
            (0, a.jsx)(z.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: p.intl.string(p.t.fN2how),
                onClick: function () {
                    t(), (0, et._)({ viewingCurrentUserBadges: !0 });
                },
            }),
        ],
    });
}
var ed = n(70283),
    ec = n(775602),
    eu = n(461536),
    em = n(321191);
function ef(e) {
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
        x = (0, s.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, O.RS)(c);
        }, [c]),
        A = E?.badge_id === ed.$.PREMIUM_TENURE,
        v = g === ed.$.LEGACY_USERNAME,
        N = b?.name,
        R = A ? p.intl.string(p.t.Ipxkog) : (E?.name ?? u);
    A ? (r = n = null != N ? `${R} ${N}` : R) : null != N ? ((t = R), (n = N), (r = `${R} ${N}`)) : ((n = R), (r = R));
    let j = x ? void 0 : E?.complex_icon_animated_url,
        I = j ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? m,
        y = null != j && I === j;
    if (v) return (0, a.jsx)(eg, { userId: c, title: n, badgeImage: I, shouldShow: f, children: o });
    let C = E?.info_label ?? (null != h ? p.intl.formatToPlainString(p.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(eu.A, {
        title: n,
        eyebrow: t,
        body: C,
        badgeImage: I,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: y,
        shouldShow: f,
        onShow: _,
        children: o,
    });
}
function eg(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [em.A, E.A],
            () =>
                E.A.hidePersonalInformation
                    ? p.intl.string(p.t.Br1ls3)
                    : null != n
                      ? (em.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(eu.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var eE = n(839534),
    ep = n(683063);
function eb(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
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
        children: s,
    });
}
var eh = n(116833),
    ex = n(704640),
    e_ = n(425713),
    eA = n(642481),
    ev = n(720879),
    eN = n(202541),
    eR = n(49999),
    ej = n(518477);
let eI = function (e) {
    let {
            badgeId: t = eN.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eN.VD[t].nameUnformattedNitro,
        m = p.intl.string(u).toLocaleUpperCase(),
        f = eN.VD[t].rarity,
        g = (0, ex.A)(t),
        E = (0, e_.I)(t).standard;
    (0, l.useEffect)(() => {
        eh.m[eh.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E);
    }, [E]);
    let b = (0, l.useCallback)(() => {
        n?.(eR.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(eu.A, {
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
            component: eh.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
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
                  (0, a.jsx)(eA.A, {
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
var ey = n(592265);
let eC = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: ey.R,
        children: [t, (0, a.jsx)("div", { className: ey.A, children: n }), l],
    });
};
var eT = n(224016),
    eS = n(747278);
let eD = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, e_.I)(n.id).standard;
    return (0, a.jsxs)(eC, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eT.A, { width: 56, className: eS.R }),
        children: [
            (0, a.jsx)(F.D, { variant: "heading-xl/extrabold", children: p.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(A.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eS.K,
                children: t.description,
            }),
        ],
    });
};
var eP = n(30084),
    eM = n(738822),
    eO = n(104886),
    eU = n(590202),
    eB = n(976860),
    ek = n(305003),
    eG = n(273875),
    ew = n(798618),
    eL = n(752079),
    eH = n(370277);
function eV(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let m = l.useCallback(() => {
        u(),
            (c.current = window.setTimeout(() => {
                (c.current = null), d(!0);
            }, r));
    }, [r, u]);
    l.useEffect(() => {
        i && !o && m();
    }, [i, o, m]);
    let f = l.useCallback(() => {
            m();
        }, [m]),
        g = l.useCallback(() => {
            u(), d(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eG.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(e$, { showSubtext: s }), (0, a.jsx)(ew.F, {})],
            }),
        ],
    });
}
function e$(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eC, {
        assetComponent: (0, a.jsx)(eL.A, { className: eH.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(F.D, {
            variant: "heading-md/extrabold",
            className: eH.RK,
            children: p.intl.string(p.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(F.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eH.Qn,
                children: p.intl.string(p.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(A.E, { variant: "text-xs/normal", className: eH.lV, children: p.intl.string(p.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eF = n(174459),
    ez = n(474090),
    eX = n(439174),
    eK = n(183555),
    eW = n(47675),
    eY = n(999291),
    eq = n(874402),
    eQ = n(652215),
    eZ = n(758836),
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
        { analyticsLocations: $ } = (0, M.Ay)(P.A.BADGE),
        { context: F, trackUserProfileAction: z } = (0, eK.NJ)(),
        X = m.default.getCurrentUser(),
        K = (0, ez.CC)(X?.premiumType, eN.PremiumTypes.TIER_2),
        W = (0, U.J9)({ location: "UserProfileBadgeList" }),
        Y = (0, o.d)({ location: "UserProfileBadgeList" }),
        q = (function (e) {
            let { location: t } = e;
            return k.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (W || q) && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, O.RS)(u.userId);
    }, [W, q, u?.userId]);
    let Q = u?.userId,
        Z = (0, s.bG)([i.Ay], () => {
            if (!q || null == Q) return null;
            let e = {};
            for (let t of n) {
                let n = (0, B.w0)(t.id);
                if (null == n) continue;
                let a = i.Ay.getBadgeById(n, Q)?.simple_icon_url;
                null != a && (e[t.id] = a);
            }
            return e;
        }, [q, Q, n]),
        J = u?.userId === X?.id,
        ee = J && W && Y && null != b,
        en = !ee && W,
        ea = ee && 0 === n.length,
        el = X?.id,
        er = (0, s.bG)(
            [i.Ay],
            () => null != el && (!i.Ay.hasCatalogFor(el) || i.Ay.getBadges(el).some((e) => e.owned)),
            [el],
        ),
        es = ee && x;
    function ei(e) {
        G.A.setState({ isOpen: e });
    }
    let ed = h((0, eY.AP)(X?.id ?? null)).some((e) => e.id === ek.A.ORB_PROFILE_BADGE),
        ec = ee && 0 === r ? n.length - 1 : -1,
        eu = null;
    r > 0 &&
        ((eu = (0, a.jsx)(A.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e0.AX,
            children: p.intl.format(p.t.n7CiSK, { count: r }),
        })),
        (t = p.intl.formatToPlainString(p.t.eIHfGZ, { overflow_count: r })));
    let em = (0, a.jsxs)("div", {
        ref: w,
        className: _()(e0.kL, Y && e0.Yq, ee && e0.Tx, d),
        ...(ea ? null : { "aria-label": p.intl.string(p.t.VWV0y5), role: "group" }),
        ...(ee && !ea ? { onClick: () => ei(!es) } : null),
        children: [
            ea &&
                (0, a.jsx)(v.vN, {
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: e0.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": es,
                        onClick: (e) => {
                            e.stopPropagation(), ei(!es);
                        },
                        children: [
                            (0, a.jsx)(N.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
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
                let n = e.id === ek.A.ORB_PROFILE_BADGE,
                    l = (0, eX.e0)(e.id),
                    r = null != l || e.id === eJ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== eJ.K,
                    o = Z?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, ej.L7)(e.icon),
                        className: _()(e0.qS, null != o && e0.Do, t === ec && e0.el, c),
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
                                ee)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (W && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, et._)({
                                        initialBadgeId: (0, B.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, eE.Cz)({
                                    tab: eZ.G2.ORBS,
                                    analyticsLocations: $,
                                    analyticsSource: P.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    f?.(),
                                    (0, R.closeAllModals)();
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eF.default.track(eQ.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: K,
                                        viewed_user_id: u?.userId,
                                    }),
                                    K)
                                ) {
                                    J
                                        ? ((0, eB.pX)(eQ.BVt.NITRO_HOME), (0, R.closeAllModals)())
                                        : (0, eP.D)({ analyticsLocations: $, displayProfile: u }),
                                        f?.();
                                    return;
                                }
                                if (J) {
                                    let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: $ }) : null;
                                    if (null == t) return;
                                    return f?.(), (0, R.closeAllModals)(), t(a);
                                }
                                return (0, eP.D)({ analyticsLocations: $, displayProfile: u }), void f?.();
                            }
                            let s = null != e.link ? (0, T.default)(e.link, { analyticsLocations: $ }) : null;
                            if (null != s) return f?.(), (0, R.closeAllModals)(), s(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, eO.E5)(eO.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, S.r)({
                                          type: D.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eM.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eF.default.track(eQ.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eU.fF)(eM.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                z({ action: "HOVER_BADGE" }),
                                (0, eW.vP)({
                                    badgeId: (0, B.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: $,
                                    ...F,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ee ? { "aria-haspopup": "dialog", "aria-expanded": es } : null),
                        style: { filter: E && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (W)
                    return (0, a.jsx)(
                        ef,
                        {
                            shouldShow: !es,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ej.L7)(e.icon),
                            children: (0, a.jsx)(j.Anchor, { ...b, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(j.Anchor, { ...b, ref: L, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eI, {
                                badgeId: e.id,
                                targetElementRef: L,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eF.default.track(eQ.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (J ? "self" : "other"),
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
                    let n = (0, a.jsx)(j.Anchor, { ...b, ref: H, children: d });
                    return (0, a.jsx)(
                        eV,
                        {
                            targetElementRef: H,
                            delay: ej.In,
                            showSubtext: !ed && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(j.Anchor, { ...b, ref: V, children: d });
                    return (0, a.jsx)(
                        eb,
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
                let h = (0, a.jsx)(j.Anchor, { ...b, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eJ.K
                            ? (0, a.jsx)(eD, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== eJ.K ? l : void 0 });
                return (0, a.jsx)(
                    I.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: ej.In, ariaHidden: !0, children: h },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (en
                    ? (0, a.jsx)(v.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: _()(e0.$O, e0.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != Q ? m.default.getUser(Q) : null;
                                  (0, et._)({ targetUserId: Q, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: eu,
                          }),
                      })
                    : (0, a.jsx)("span", { className: e0.$O, children: eu })),
            ee &&
                !ea &&
                (0, a.jsx)(v.vN, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: e0.r9,
                        "aria-label": p.intl.string(p.t.PXIyjF),
                        "aria-haspopup": "dialog",
                        "aria-expanded": es,
                        onClick: (e) => {
                            e.stopPropagation(), ei(!es);
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
    return ee
        ? (0, a.jsx)(C.Y, {
              targetElementRef: ea && !er ? w : b,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: es,
              onRequestClose: (e) => {
                  let t = e?.target;
                  w.current?.contains(t) === !0 || (t?.closest(`[${eq.m}]`) == null && ei(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eo, { onClose: t });
              },
              children: () => em,
          })
        : em;
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
            popoutAnchorRef: v,
        } = e,
        N = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        R = n?.userId,
        j = (0, s.bG)([m.default], () => null != R && m.default.getUser(R)?.bot === !0, [R]),
        I = h(n, E),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        T = (0, s.yK)([i.Ay], () => (b && null != R && i.Ay.hasCatalogFor(R) ? i.Ay.getBadges(R) : []), [b, R]),
        S = l.useMemo(() => {
            let e = I;
            if (null != p) {
                let t = new Set(I.map((e) => e.id));
                e = [...I, ...p.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, T, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [I, p, b, T, y, C]);
    if (0 === S.length && !b) return null;
    let D = N && !j,
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
                        popoutAnchorRef: v,
                    },
                    t,
                ),
            ),
        })
    );
}
