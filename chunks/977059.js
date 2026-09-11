n.d(t, { A: () => e8 });
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
    f = n(262),
    g = n(503698),
    E = n.n(g),
    p = n(612324),
    h = n(834730),
    b = n(259678),
    x = n(307301),
    _ = n(192308),
    A = n(28863),
    N = n(866665),
    v = n(22231),
    R = n(922016),
    I = n(983555),
    j = n(274670),
    y = n(144779),
    T = n(793574),
    C = n(688810),
    S = n(682618),
    D = n(992526),
    P = n(609782);
let O = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var M = n(248284),
    U = n(686246),
    B = n(425763),
    k = n(952270),
    G = n(365199),
    w = n(315710),
    L = n(297264),
    H = n(821609),
    V = n(442433),
    $ = n(450232),
    F = n(183555),
    z = n(451395),
    X = n(327791),
    K = n(315629),
    W = n(403581),
    Y = n(87719),
    q = n(375708),
    Z = n(207711);
function Q(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(K.h, {
        color: "nitro-pink",
        className: Z.U,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: Z.t,
                children: q.intl.string(q.t.cKIIzk),
            }),
            (0, a.jsx)(H.$, {
                variant: "expressive",
                size: "sm",
                icon: W.t,
                text: q.intl.string(q.t.pj0XBN),
                onClick: function () {
                    (t(), (0, Y.e)());
                },
            }),
        ],
    });
}
var J = n(470739),
    ee = n(577931),
    et = n(494881);
let en = "BADGE";
function ea(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, B.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(z.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: "PROFILE_BADGES",
        itemType: en,
        "aria-label": q.intl.formatToPlainString(q.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: et.oE,
        draggingClassName: et.Id,
        dropBeforeClassName: et.A,
        dropAfterClassName: et.Ze,
        children: [
            (0, a.jsx)(el, { ...r }),
            (0, a.jsx)(z.jV, {
                buttonRef: d,
                className: et.BU,
                "aria-label": q.intl.formatToPlainString(q.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function el(e) {
    let { badge: t, index: r, onClose: s, onAction: i, controlRef: o, onUnhide: d } = e,
        [c, u] = l.useState(!1);
    function m(e) {
        (u(!0),
            (0, V.L3)(
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
        className: E()(et.fw, c && et.HV),
        onContextMenu: f ? void 0 : m,
        children: [
            (0, a.jsx)("div", {
                className: et.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: E()(et.pC, f && et.jx),
                    }),
            }),
            f
                ? (0, a.jsx)(N.m, {
                      position: "top",
                      text: q.intl.string(q.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          ref: o,
                          type: "button",
                          className: et.KJ,
                          "aria-label": q.intl.formatToPlainString(q.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => d?.(t),
                          children: (0, a.jsx)(k.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      ref: o,
                      type: "button",
                      className: et.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": c,
                      "aria-label": q.intl.formatToPlainString(q.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: m,
                      children: (0, a.jsx)(G.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function er() {
    let e = (0, B.VU)(),
        { badge: t, sourceClientOffset: n } = (0, U.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === en ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: et.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: et.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: et.pC,
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
        (0, w.tj)(n, { keyboardModeEnabled: !0 }));
    let { analyticsLocations: o } = (0, C.Ay)(T.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: d } = (0, F.NJ)();
    l.useEffect(() => {
        d({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: o });
    }, []);
    let { fixedBadges: u, reorderableBadges: f, hiddenBadges: g } = (0, ee.A)(),
        p = (0, X.A)(),
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
                canReorder: p,
            }));
    }
    let v = u.length + f.length + g.length,
        R = (0, s.bG)([i.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function I(e, t) {
        (0, c.hB)((0, c.i1)(b, e, t));
    }
    let j = v > 0,
        y = R && !j,
        S = !p && !y,
        D = p ? q.t.VHaYM7 : q.t["7Qs/YX"];
    return (0, a.jsxs)("div", {
        ref: n,
        className: E()(et.SW, y && et.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: E()(et.Qs, S && et.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: et.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: et.$,
                                children: [
                                    (0, a.jsx)($.A, { size: "xs", className: et.oU }),
                                    (0, a.jsx)(L.D, {
                                        id: r,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: q.intl.string(q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !y &&
                                (0, a.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: q.intl.string(D),
                                }),
                        ],
                    }),
                    S && (0, a.jsx)(Q, { onClose: t }),
                    y &&
                        (0, a.jsx)(h.E, {
                            className: et.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: q.intl.string(q.t.VT02mI),
                        }),
                    j &&
                        (0, a.jsxs)("div", {
                            className: et.yq,
                            role: "group",
                            "aria-label": q.intl.string(q.t.VWV0y5),
                            children: [
                                u.map((e, n) =>
                                    (0, a.jsx)(
                                        el,
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
                                    p
                                        ? (0, a.jsx)(
                                              ea,
                                              {
                                                  badge: e,
                                                  index: u.length + n,
                                                  onClose: t,
                                                  onAction: A,
                                                  controlRef: _(e.badge_id),
                                                  reorderableIndex: n,
                                                  onReorder: I,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              el,
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
                                        el,
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
            (0, a.jsx)(er, {}),
            (0, a.jsx)(H.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: q.intl.string(q.t.fN2how),
                onClick: function () {
                    (d({ action: "PRESS_VIEW_BADGES", analyticsLocations: o }),
                        t(),
                        (0, J._)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ei = n(70283),
    eo = n(775602),
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
            badgeData: E,
            currentTier: p,
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
        b = (0, s.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        x = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, S.RS)(c);
        }, [c]),
        _ = E?.badge_id === ei.$.PREMIUM_TENURE,
        A = g === ei.$.LEGACY_USERNAME,
        N = p?.name,
        v = _ ? q.intl.string(q.t.Ipxkog) : (E?.name ?? u);
    _ ? (r = n = null != N ? `${v} ${N}` : v) : null != N ? ((t = v), (n = N), (r = `${v} ${N}`)) : ((n = v), (r = v));
    let R = b ? void 0 : E?.complex_icon_animated_url,
        I = R ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? m,
        j = null != R && I === R;
    if (A) return (0, a.jsx)(ef, { userId: c, title: n, badgeImage: I, shouldShow: f, children: o });
    let y = E?.info_label ?? (null != h ? q.intl.formatToPlainString(q.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(ed.A, {
        title: n,
        eyebrow: t,
        body: y,
        badgeImage: I,
        badgeName: r,
        variant: _ ? "nitro" : "default",
        isAnimated: j,
        shouldShow: f,
        onShow: x,
        children: o,
    });
}
function ef(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [ec.A, eu.A],
            () =>
                eu.A.hidePersonalInformation
                    ? q.intl.string(q.t.Br1ls3)
                    : null != n
                      ? (ec.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ed.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var eg = n(839534),
    eE = n(683063);
function ep(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(eE.u, {
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
    eb = n(704640),
    ex = n(425713),
    e_ = n(642481),
    eA = n(720879),
    eN = n(202541),
    ev = n(49999),
    eR = n(518477);
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
        m = q.intl.string(u).toLocaleUpperCase(),
        f = eN.VD[t].rarity,
        g = (0, eb.A)(t),
        E = (0, ex.I)(t).standard;
    (0, l.useEffect)(() => {
        (eh.m[eh.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E));
    }, [E]);
    let p = (0, l.useCallback)(() => {
        n?.(ev.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(ed.A, {
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
        ? (0, a.jsx)(eA.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: eR.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(e_.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: p,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...h,
                  }),
              ],
          });
};
var ej = n(592265);
let ey = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: ej.R,
        children: [t, (0, a.jsx)("div", { className: ej.A, children: n }), l],
    });
};
var eT = n(224016),
    eC = n(747278);
let eS = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, ex.I)(n.id).standard;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eT.A, { width: 56, className: eC.R }),
        children: [
            (0, a.jsx)(L.D, { variant: "heading-xl/extrabold", children: q.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eC.K,
                children: t.description,
            }),
        ],
    });
};
var eD = n(30084),
    eP = n(738822),
    eO = n(104886),
    eM = n(590202),
    eU = n(976860),
    eB = n(305003),
    ek = n(273875),
    eG = n(798618),
    ew = n(752079),
    eL = n(370277);
function eH(e) {
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
            (0, a.jsxs)(ek.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eV, { showSubtext: s }), (0, a.jsx)(eG.F, {})],
            }),
        ],
    });
}
function eV(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)(ew.A, { className: eL.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(L.D, {
            variant: "heading-md/extrabold",
            className: eL.RK,
            children: q.intl.string(q.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(L.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eL.Qn,
                children: q.intl.string(q.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", className: eL.lV, children: q.intl.string(q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var e$ = n(174459),
    eF = n(474090),
    ez = n(439174),
    eX = n(47675),
    eK = n(999291),
    eW = n(874402),
    eY = n(652215),
    eq = n(758836),
    eZ = n(854232),
    eQ = n(816645);
function eJ(e) {
    let t,
        {
            badges: n,
            overflowCount: r,
            className: d,
            badgeClassName: c,
            displayProfile: u,
            onClose: g,
            shouldOpenBadgeTooltip: U,
            shouldGlowTenureBadge: B,
            popoutAnchorRef: k,
            containerRef: G,
        } = e,
        w = (0, M.A)((e) => e.isOpen),
        L = l.useRef(null),
        H = (0, p.A)(L, G),
        V = l.useRef(null),
        $ = l.useRef(null),
        z = l.useRef(null),
        { analyticsLocations: X } = (0, C.Ay)(T.A.BADGE),
        { context: K, trackUserProfileAction: W } = (0, F.NJ)(),
        Y = m.default.getCurrentUser(),
        Z = (0, eF.CC)(Y?.premiumType, eN.PremiumTypes.TIER_2),
        Q = (0, D.J)({ location: "UserProfileBadgeList" }),
        ee = (0, o.d)({ location: "UserProfileBadgeList" }),
        et = (function (e) {
            let { location: t } = e;
            return O.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (Q || et) && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, S.RS)(u.userId);
    }, [Q, et, u?.userId]);
    let en = u?.userId,
        ea = (0, s.bG)(
            [i.Ay],
            () => {
                if (!et || null == en) return null;
                let e = {};
                for (let t of n) {
                    let n = (0, P.w0)(t.id);
                    if (null == n) continue;
                    let a = i.Ay.getBadgeById(n, en)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [et, en, n],
        ),
        el = u?.userId === Y?.id,
        er = el && Q && ee && null != k,
        ei = !er && Q,
        eo = er && 0 === n.length,
        ed = Y?.id,
        ec = (0, s.bG)(
            [i.Ay],
            () => null != ed && (!i.Ay.hasCatalogFor(ed) || i.Ay.getBadges(ed).some((e) => e.owned)),
            [ed],
        ),
        eu = er && w;
    function ef(e) {
        M.A.setState({ isOpen: e });
    }
    let eE = (0, eK.AP)(Y?.id ?? null),
        eh = (0, f.A)(eE).some((e) => e.id === eB.A.ORB_PROFILE_BADGE),
        eb = er && 0 === r ? n.length - 1 : -1,
        ex = null;
    r > 0 &&
        ((ex = (0, a.jsx)(h.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: eQ.AX,
            children: q.intl.format(q.t.n7CiSK, { count: r }),
        })),
        (t = q.intl.formatToPlainString(q.t.eIHfGZ, { overflow_count: r })));
    let e_ = (0, a.jsxs)("div", {
        ref: H,
        className: E()(eQ.kL, ee && eQ.Yq, er && eQ.Tx, d),
        ...(eo ? null : { "aria-label": q.intl.string(q.t.VWV0y5), role: "group" }),
        ...(er && !eo ? { onClick: () => ef(!eu) } : null),
        children: [
            eo &&
                (0, a.jsx)(b.vN, {
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: eQ.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eu,
                        onClick: (e) => {
                            (e.stopPropagation(), ef(!eu));
                        },
                        children: [
                            (0, a.jsx)(x.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(h.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: q.intl.string(q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === eB.A.ORB_PROFILE_BADGE,
                    l = (0, ez.e0)(e.id),
                    r = null != l || e.id === eZ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== eZ.K,
                    o = ea?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eR.L7)(e.icon),
                        className: E()(eQ.qS, null != o && eQ.Do, t === eb && eQ.el, c),
                    }),
                    p = null != U && U(e.id),
                    h = {
                        onClick: (a) => {
                            if (
                                (W({ action: "PRESS_BADGE" }),
                                (0, eX.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: X,
                                    ...K,
                                }),
                                er)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (Q && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, J._)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if (n) {
                                ((0, eg.Cz)({
                                    tab: eq.G2.ORBS,
                                    analyticsLocations: X,
                                    analyticsSource: T.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    g?.(),
                                    (0, _.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    e$.default.track(eY.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: Z,
                                        viewed_user_id: u?.userId,
                                    }),
                                    Z)
                                ) {
                                    (el
                                        ? ((0, eU.pX)(eY.BVt.NITRO_HOME), (0, _.closeAllModals)())
                                        : (0, eD.D)({ analyticsLocations: X, displayProfile: u }),
                                        g?.());
                                    return;
                                }
                                if (el) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: X }) : null;
                                    if (null == t) return;
                                    return (g?.(), (0, _.closeAllModals)(), t(a));
                                }
                                return ((0, eD.D)({ analyticsLocations: X, displayProfile: u }), void g?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: X }) : null;
                            if (null != s) return (g?.(), (0, _.closeAllModals)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === f.h &&
                                ((0, eO.E5)(eO.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, j.r)({
                                          type: y.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eP.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : e$.default.track(eY.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eM.fF)(eP.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                W({ action: "HOVER_BADGE" }),
                                (0, eX.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: X,
                                    ...K,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(er ? { "aria-haspopup": "dialog", "aria-expanded": eu } : null),
                        style: { filter: B && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (Q)
                    return (0, a.jsx)(
                        em,
                        {
                            shouldShow: !eu,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eR.L7)(e.icon),
                            children: (0, a.jsx)(A.Anchor, { ...h, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(A.Anchor, { ...h, ref: V, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eI, {
                                badgeId: e.id,
                                targetElementRef: V,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    e$.default.track(eY.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (el ? "self" : "other"),
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
                    let n = (0, a.jsx)(A.Anchor, { ...h, ref: $, children: d });
                    return (0, a.jsx)(
                        eH,
                        {
                            targetElementRef: $,
                            delay: eR.In,
                            showSubtext: !eh && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(A.Anchor, { ...h, ref: z, children: d });
                    return (0, a.jsx)(
                        ep,
                        {
                            targetElementRef: z,
                            delay: eR.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, a.jsx)(A.Anchor, { ...h, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eZ.K
                            ? (0, a.jsx)(eS, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== eZ.K ? l : void 0 });
                return (0, a.jsx)(
                    N.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: eR.In, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (ei
                    ? (0, a.jsx)(b.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: E()(eQ.$O, eQ.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != en ? m.default.getUser(en) : null;
                                  (0, J._)({ targetUserId: en, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: ex,
                          }),
                      })
                    : (0, a.jsx)("span", { className: eQ.$O, children: ex })),
            er &&
                !eo &&
                (0, a.jsx)(b.vN, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: eQ.r9,
                        "aria-label": q.intl.string(q.t.PXIyjF),
                        "aria-haspopup": "dialog",
                        "aria-expanded": eu,
                        onClick: (e) => {
                            (e.stopPropagation(), ef(!eu));
                        },
                        children: (0, a.jsx)(v.PencilIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: eQ.IZ,
                            "aria-hidden": !0,
                        }),
                    }),
                }),
        ],
    });
    return er
        ? (0, a.jsx)(R.Y, {
              targetElementRef: eo && !ec ? L : k,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: eu,
              onRequestClose: (e) => {
                  let t = e?.target;
                  L.current?.contains(t) === !0 || (t?.closest(`[${eW.m}]`) == null && ef(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(es, { onClose: t });
              },
              children: () => e_,
          })
        : e_;
}
var e0 = n(996988);
let e1 = {
    [e0.d.POPOUT]: 12,
    [e0.d.MODAL]: 26,
    [e0.d.SIDEBAR]: 13,
    [e0.d.VIDEO_TILE_BACKGROUND]: 12,
    [e0.d.EMBED]: 12,
};
function e8(e) {
    let t,
        {
            displayProfile: n,
            themeType: g,
            isRedesignEnabled: E,
            pendingLegacyUsernameDisabled: p,
            pendingBadges: h,
            showPendingBadgeEdits: b = !1,
            onClose: x,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: N,
            containerRef: v,
        } = e,
        R = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        I = n?.userId,
        j = (0, s.bG)([m.default], () => null != I && m.default.getUser(I)?.bot === !0, [I]),
        y = (0, f.A)(n, p),
        { pendingBadgeDisplayOrder: T, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        S = (0, s.yK)([i.Ay], () => (b && null != I && i.Ay.hasCatalogFor(I) ? i.Ay.getBadges(I) : []), [b, I]),
        D = l.useMemo(() => {
            let e = y;
            if (null != h) {
                let t = new Set(y.map((e) => e.id));
                e = [...y, ...h.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, S, { pendingBadgeDisplayOrder: T, pendingBadgeHiddenBadges: C }) : e;
        }, [y, h, b, S, T, C]);
    if (0 === D.length && !b) return null;
    let P = R && !j,
        O = P ? Math.max(D.length - d.k9, 0) : 0;
    return (
        (t = P
            ? [D.slice(0, d.k9)]
            : g === e0.d.MODAL_V2
              ? [D]
              : (0, r.chunk)(D, !0 === E && g === e0.d.SIDEBAR ? e1[e0.d.POPOUT] : e1[g])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    eJ,
                    {
                        badges: e,
                        overflowCount: O,
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
