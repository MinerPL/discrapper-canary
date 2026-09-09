let i, l;
n.d(t, { g: () => lU, A: () => lV }), n(321073);
var a = n(477900),
    s = n(582128),
    r = n(503698),
    o = n.n(r),
    d = n(435558),
    c = n.n(d),
    u = n(158390),
    h = n(17928),
    m = n(554146),
    p = n(451988),
    g = n(97808),
    f = n(778712),
    A = n(922016),
    x = n(939249),
    v = n(140735),
    E = n(312138);
if (221552 == n.j) var C = n(192308);
var T = n(442433),
    _ = n(820284),
    S = n(717558),
    I = n(964486),
    j = n(220839),
    b = n(397244),
    N = n(394871),
    y = n(74445),
    M = n(866323),
    R = n(120842);
function w(e) {
    let { text: t } = e,
        n = (0, M.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, a.jsx)("div", {
        className: R.k,
        children: n((e, t) => (0, a.jsx)(y.animated.div, { className: R.H, style: e, children: t })),
    });
}
var k = n(29160),
    P = n(793574),
    O = n(688810),
    L = n(992526),
    D = n(682618),
    U = n(982240),
    G = n(70283);
let F = [G.$.STREAMING, G.$.GAME_VARIETY, G.$.GAME_TIME, G.$.ACCOUNT_AGE];
var V = n(116833),
    H = n(43105),
    B = n(375708);
function W(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: B.intl.string(B.t.uwDBSq),
                  body: B.intl.formatToPlainString(B.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: B.intl.string(B.t["5GD53o"]), body: B.intl.string(B.t["2Rb7tE"]) };
    return (0, a.jsx)(H.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: V.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: B.intl.string(B.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var z = n(470739),
    Z = n(92111),
    K = n(49999);
function q(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: i } = e;
    return (0, a.jsx)(W, {
        ...t,
        onPrimaryAction: () => {
            i(K.i.TAKE_ACTION), (0, z._)();
        },
        onRequestClose: () => i(K.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var Y = n(521502),
    $ = n(380610),
    X = n(198052),
    J = n(18235),
    Q = n(183184),
    ee = n(384059),
    et = n(480890),
    en = n(601255),
    ei = n(562819),
    el = n(449582),
    ea = n(351952),
    es = n(88686),
    er = n(174755),
    eo = n(302223),
    ed = n(248778),
    ec = n(609425),
    eu = n(922301),
    eh = n(660184),
    em = n(643501),
    ep = n(297264),
    eg = n(834730),
    ef = n(789645),
    eA = n(826673),
    ex = n(750506),
    ev = n(780964),
    eE = n(766075),
    eC = n(417146),
    eT = n(552122),
    e_ = n(717421),
    eS = n(775602),
    eI = n(579800);
let ej = { mass: 10, tension: 550, friction: 140 };
function eb(e) {
    let { className: t, pageMultiplier: n } = e,
        i = (0, h.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        [l, r] = s.useState({ x: 0, y: 0 }),
        d = s.useMemo(
            () =>
                c().throttle((e) => {
                    i || r({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, i],
        );
    s.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [u, m] = (0, e_.z)(() => ({ x: 0, y: 0, config: ej }));
    return (
        s.useEffect(() => {
            m({ x: l.x, y: l.y });
        }, [l.x, l.y, m]),
        (0, a.jsx)(y.animated.div, {
            style: { transform: (0, y.to)([u.x, u.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: o()(eI.T, t),
        })
    );
}
var eN = n(293556);
function ey(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: i } = e,
        l = eT.A.useIsEligible(),
        s = (0, eA.HX)(t),
        r = null != n,
        o = null != i ? { color: i } : void 0,
        { analyticsLocations: d } = (0, O.Ay)(P.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, eA.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, eE.openUserSettings)(ev.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(K.i.TAKE_ACTION);
    }
    return l && !s
        ? (0, a.jsx)(ex.Ay, {
              children: (0, a.jsxs)("div", {
                  className: eN.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, a.jsxs)("div", {
                              className: eN.o5,
                              children: [
                                  (0, a.jsx)(eb, { className: eN.iL, pageMultiplier: 5 }),
                                  (0, a.jsx)("div", { className: eN.Np }),
                              ],
                          }),
                      (0, a.jsx)("div", { className: eN.c8 }),
                      (0, a.jsxs)("div", {
                          className: eN.Qs,
                          children: [
                              (0, a.jsxs)("div", {
                                  children: [
                                      (0, a.jsx)(ep.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: B.intl.string(B.t["6CxPoB"]),
                                      }),
                                      (0, a.jsx)(eg.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: B.intl.format(B.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      x.D,
                                                      {
                                                          tag: "span",
                                                          className: eN.nf,
                                                          style: o,
                                                          onClick: u,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(x.D, {
                                  className: eN.l2,
                                  onClick: () => c(K.i.USER_DISMISS),
                                  children: (0, a.jsx)(ef.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eM() {
    return null == eC.A.coachmarkDismissibleContent
        ? null
        : (0, a.jsx)(ey, {
              dismissibleContent: eC.A.coachmarkDismissibleContent,
              backgroundColor: eC.A.coachmarkBackgroundColor,
              specialTextColor: eC.A.coachmarkSpecialTextColor,
          });
}
var eR = n(74848),
    ew = n(607399),
    ek = n(707554),
    eP = n(224640),
    eO = n(305866),
    eL = n(364522),
    eD = n(22231),
    eU = n(812993),
    eG = n(935154),
    eF = n(780338);
if (221552 != n.j) var C = n(192308);
var eV = n(980707),
    eH = n(877784),
    eB = n(26137),
    eW = n(473935),
    ez = n(765671),
    eZ = n(643056),
    eK = n(176781),
    eq = n(320448),
    eY = n(993401),
    e$ = n(211450);
function eX(e) {
    return (0, a.jsx)("div", {
        className: e$.wE,
        children: (0, a.jsx)(eV.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eJ(e) {
    let {
            action: t,
            onClick: n,
            icon: i,
            label: l,
            sublabel: r,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, eY.rE)({ action: t, onClick: n }),
        [g, f] = s.useState(!1),
        v = s.useRef(null),
        E = c ?? v,
        T = null != d,
        _ = T && m,
        S = s.useCallback(() => {
            f(!0);
        }, []),
        I = s.useCallback(() => {
            (0, C.hasAnyModalOpen)() || f(!1);
        }, []);
    function j() {
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: e$.iA, children: (0, a.jsx)(i, { size: "xs", color: "currentColor" }) }),
                (0, a.jsxs)("div", {
                    className: e$.$H,
                    children: [
                        (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(eg.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: e$.W1,
                                    children: l,
                                }),
                                (0, a.jsx)(eg.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function b(e) {
        let t;
        return (
            (t = _
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(x.D, { className: e$.ef, onClick: p, children: j() }),
                          (0, a.jsx)(x.D, {
                              className: e$.ap,
                              "aria-label": B.intl.string(B.t.PdRCRg),
                              ...e,
                              onClick: S,
                              children: (0, a.jsx)(eq._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : T
                  ? (0, a.jsxs)(x.D, {
                        className: e$.ef,
                        ...e,
                        onClick: S,
                        children: [
                            j(),
                            (0, a.jsx)("div", {
                                className: e$.ap,
                                children: (0, a.jsx)(eq._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, a.jsx)(x.D, { className: e$.ef, onClick: p, children: j() })),
            (0, a.jsx)("div", { ref: E, className: e$.jG, children: t })
        );
    }
    return T
        ? (0, a.jsx)("li", {
              className: e$.j$,
              onMouseEnter: S,
              onMouseLeave: I,
              children: (0, a.jsx)(A.Y, {
                  targetElementRef: u ?? E,
                  align: h,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: g,
                  onRequestClose: I,
                  children: b,
              }),
          })
        : (0, a.jsx)("li", { className: e$.j$, children: b() });
}
function eQ(e) {
    let { children: t, "aria-label": n } = e;
    return (0, a.jsx)("ul", { "aria-label": n, children: t });
}
var e0 = n(734066),
    e1 = n(915725),
    e2 = n(409067),
    e3 = n(271597),
    e5 = n(475358),
    e7 = n(866665),
    e8 = n(408278),
    e6 = n(625903),
    e4 = n(404778),
    e9 = n(689175),
    te = n(821609),
    tt = n(532624),
    tn = n(927813),
    ti = n(879631),
    tl = n(350535),
    ta = n(974293),
    ts = n(572164),
    tr = n(953932),
    to = n(280483),
    td = n(890856),
    tc = n(713517),
    tu = n(609174),
    th = n(619744);
function tm(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        i = (0, tu.Y_)(),
        l = s.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, e3.p)({ initialEditingClipId: i.id });
            },
            [i, t],
        );
    return (0, a.jsx)(te.$, {
        onClick: l,
        icon: eD.PencilIcon,
        variant: n,
        size: "sm",
        text: B.intl.string(B.t.bt75uw),
        fullWidth: !0,
    });
}
var tp = n(82716),
    tg = n(585579),
    tf = n(930317),
    tA = n(285072),
    tx = n(575172);
let tv = s.memo(function (e) {
    let { clip: t, isNew: n, onClose: i, className: l } = e,
        r = s.useRef(null),
        { isHoveringOrFocusing: d } = (0, tc.A)(r),
        c = s.useCallback(() => {
            i?.(), (0, e3.p)({ initialEditingClipId: t.id });
        }, [t.id, i]);
    return (0, a.jsx)(tu.Cl, {
        clip: t,
        children: (0, a.jsx)(td.s, {
            ref: r,
            "aria-label": B.intl.string(B.t.bt75uw),
            onClick: c,
            className: o()(tx.Z1, l),
            children: (0, a.jsxs)(tf.d, {
                isStatic: !0,
                children: [
                    n && (0, a.jsx)(eU.Lp, { className: tx.Ad, text: B.intl.string(B.t.y2b7CA) }),
                    (0, a.jsxs)(tA.h, {
                        isVisible: d,
                        className: tx.Lw,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tx.mY,
                                children: [(0, a.jsx)(tp.z, {}), (0, a.jsx)(th.k, {})],
                            }),
                            (0, a.jsxs)("div", {
                                className: tx.E_,
                                children: [
                                    (0, a.jsx)(tm, { onBeforeEdit: i, variant: "overlay-secondary" }),
                                    (0, a.jsx)(tg.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tE = n(696016),
    tC = n(652215),
    tT = n(753070),
    t_ = n(268378),
    tS = n(48127);
function tI(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: i, setPopoutRef: l } = e;
    (0, to.A)();
    let r = (0, h.yK)([e1.Ay], () => Object.values(e1.Ay.getClips())),
        o = (0, h.bG)([e1.Ay], () => e1.Ay.getSettings()),
        d = (0, h.bG)([e1.Ay], () => e1.Ay.getNewClipIds()),
        c = (0, ta.aJ)("ClipsPopout"),
        u = (0, h.bG)([e1.Ay], () => e1.Ay.getEnableAutoclipping()),
        m = (0, h.bG)([tt.Ay], () => tt.Ay.getKeybindForAction(tC.hCu.SAVE_CLIP)),
        p = s.useCallback(
            (e) => {
                l?.(e);
            },
            [l],
        ),
        g = !o.showPovClipsInGallery,
        f = s.useMemo(() => {
            let e = r.filter((e) => e.type === tE.nQ.CLIP && "" !== e.thumbnail && (!g || !(0, e2.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, g]),
        A = s.useMemo(() => f.slice(0, 16), [f]),
        x = f.length > 16,
        v = null != m ? tl.dI(m.shortcut, !0) : null,
        E = [
            (0, ti.$)(o.clipsLength / tn.A.Millis.SECOND),
            (0, tT.zr)(o.clipsQuality.resolution),
            B.intl.formatToPlainString(B.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        c && E.push(B.intl.string(t_.default.XWkJoi)),
        (0, a.jsxs)("div", {
            ref: p,
            className: tS.SW,
            role: "dialog",
            "aria-label": B.intl.string(B.t.z2jK6X),
            children: [
                (0, a.jsxs)("div", {
                    className: tS.wx,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tS.$,
                            children: [
                                (0, a.jsx)(ep.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: B.intl.string(B.t.z2jK6X),
                                }),
                                null != v && (0, a.jsx)(e5.e, { className: tS.P, shortcut: v }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tS.$s,
                            children: [
                                (0, a.jsx)(e7.m, {
                                    text: B.intl.string(B.t["3D5yo/"]),
                                    children: (0, a.jsx)(e8.K, {
                                        onClick: () => n(),
                                        icon: e6.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": B.intl.string(B.t["3D5yo/"]),
                                    }),
                                }),
                                (0, a.jsx)(e7.m, {
                                    text: B.intl.string(t_.default["55C2MH"]),
                                    children: (0, a.jsx)(e8.K, {
                                        onClick: () => t(),
                                        icon: eK.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": B.intl.string(t_.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: tS.ov,
                    children: [
                        E.map((e, t) =>
                            (0, a.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, a.jsx)("span", { className: tS.LO, children: "\u2022" }),
                                        (0, a.jsx)(eg.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tS.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        c &&
                            (0, a.jsx)(eg.E, {
                                variant: "text-xs/semibold",
                                color: u ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tS.wS,
                                children: u ? B.intl.string(t_.default.lTwKmt) : B.intl.string(t_.default.GNDqtf),
                            }),
                    ],
                }),
                (0, a.jsx)(e4.c, {}),
                A.length > 0
                    ? (0, a.jsxs)(e9.Ch, {
                          className: tS.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, a.jsx)(tv, { clip: e, isNew: d.includes(e.id), onClose: i }, e.id)),
                              x &&
                                  (0, a.jsx)("div", {
                                      className: tS.qr,
                                      children: (0, a.jsx)(te.$, {
                                          onClick: () => t(),
                                          text: B.intl.string(t_.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, a.jsx)(tj, { keybindString: v }),
            ],
        })
    );
}
function tj(e) {
    let { keybindString: t } = e,
        n = (0, ts.E)();
    return (0, a.jsxs)("div", {
        className: tS.p$,
        children: [
            (0, a.jsx)(eg.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tS.qO,
                children: B.intl.string(t_.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, a.jsx)(eg.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tS.CZ,
                      children: B.intl.format(t_.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, a.jsx)(
                                  eg.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, a.jsx)(e5.e, { shortcut: t }),
                      }),
                  })
                : (0, a.jsx)(tr.A, {}),
        ],
    });
}
function tb(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        i = (0, e0.sw)(),
        l = !(0, h.bG)([e1.Ay], () => e1.Ay.getSettings().showPovClipsInGallery),
        r = (0, h.bG)([e1.Ay], () => {
            let e = e1.Ay.getNewClipIds();
            return l
                ? e.filter((e) => {
                      let t = e1.Ay.getClipById(e);
                      return null != t && !(0, e2.kD)(t);
                  }).length
                : e.length;
        }, [l]),
        o = s.useCallback(
            (e) => {
                t(), (0, e3.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = s.useCallback(() => {
            t(), (0, eE.openUserSettings)(ev.X.CLIPS_PANEL);
        }, [t]);
    return i
        ? (0, a.jsx)(eJ, {
              action: "PRESS_CLIPS",
              icon: eK.x,
              label: B.intl.string(B.t.z2jK6X),
              trailing: r > 0 ? (0, a.jsx)(eU.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, a.jsx)(tI, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tN = n(480335),
    ty = n(577390),
    tM = n(372320),
    tR = n(31956),
    tw = n(744808),
    tk = n(645507),
    tP = n(131607),
    tO = n(970931),
    tL = n(315710),
    tD = n(832248),
    tU = n(462887),
    tG = n(736653),
    tF = n(439174),
    tV = n(158045),
    tH = n(19886),
    tB = n(202541);
function tW() {
    let e = (0, tH.Xb)(),
        t = (0, tV.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tB.sp.length - 1; t >= 0; t--) {
        let i = tB.VD[tB.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tz = {
        [tB.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tB.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tB.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tB.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tB.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tB.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tB.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tB.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tZ = {
        [tB.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tB.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tB.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tB.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tB.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tB.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tB.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tB.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tK = n(570484);
let tq = s.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tY() {
    let e = (0, h.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        t = (0, tD.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tW(),
                t = (0, tU.M)((0, tG.Ay)());
            if (null == e) return null;
            let n = tz[e],
                i = tZ[e],
                l = {
                    currentBadge: (0, tF.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tB.sp.indexOf(e);
            if (a > 0) {
                let e = tB.sp[a - 1],
                    n = tz[e];
                (l.prevBadge = (0, tF.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return l;
        })(),
        [i, l] = s.useState(null);
    return (null != n && null == i && l(n), e || !t || null == i) ? null : (0, a.jsx)(t$, { levelUpData: i });
}
function t$(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        i = s.useCallback(() => {
            tD.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, a.jsx)(tL.Ok, {
        containerRef: n,
        children: (0, a.jsxs)("div", {
            className: tK.i,
            children: [
                (0, a.jsx)("div", {
                    className: tK.b,
                    children: (0, a.jsx)(e7.m, {
                        text: B.intl.string(B.t.cpT0Cq),
                        children: (0, a.jsx)(e8.K, {
                            icon: ef.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: i,
                            "aria-label": B.intl.string(B.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, a.jsx)(s.Suspense, { fallback: null, children: (0, a.jsx)(tq, { levelUpData: t }) }),
            ],
        }),
    });
}
var tX = n(397562),
    tJ = n(206835),
    tQ = n(183555),
    t0 = n(465318),
    t1 = n(999291),
    t2 = n(402860),
    t3 = n(718019),
    t5 = n(461116),
    t7 = n(915614),
    t8 = n(744753),
    t6 = n(559506),
    t4 = n(646986),
    t9 = n(657538),
    ne = n(946356),
    nt = n(465829),
    nn = n(624479),
    ni = n(206845),
    nl = n(957565),
    na = n(427262),
    ns = n(62119);
function nr(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: i } = (0, tQ.NJ)();
    return nl.p5
        ? (0, a.jsx)(ni.A, {
              text: B.intl.string(B.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: na.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, a.jsx)(x.D, {
                      ...e,
                      className: o()(ns.c, { [ns.R]: n }),
                      "aria-label": B.intl.string(B.t.y5MwJy),
                      children: (0, a.jsx)(nn.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var no = n(983495),
    nd = n(442228),
    nc = n(885386),
    nu = n(362862),
    nh = n(863610),
    nm = n(508770),
    np = n(421773),
    ng = n(309954),
    nf = n(673125),
    nA = n(106799),
    nx = n(276130),
    nv = n(769001);
function nE(e) {
    let { popoutContainerRef: t } = e,
        { balance: n } = (0, ng.W)(),
        i = (0, h.bG)([nf.A], () => nf.A.clientUnreadNotificationType),
        { isHovered: l, onMouseEnter: r, onMouseLeave: d } = (0, np.A)(0, 200),
        c = s.useCallback(() => {
            (0, C.hasAnyModalOpen)() || d();
        }, [d]),
        u = (0, eY.rE)({ action: "PRESS_ORBS", onClick: r }),
        m = s.useMemo(
            () =>
                null != n
                    ? B.intl.format(B.t["8xDISf"], { balance: String(n) })
                    : (0, a.jsx)(nh.n, { dotRadius: 3.5, themed: !0, className: nv.K }),
            [n],
        ),
        p = s.useMemo(
            () =>
                i === nf.Y.NEW_ACHIEVEMENT
                    ? (0, a.jsx)(nm.E, { type: "new", variant: "brand" })
                    : i === nf.Y.UNCLAIMED_ACHIEVEMENT
                      ? (0, a.jsx)(nm.E, { type: { text: B.intl.string(B.t.O13yhz) }, variant: "brand" })
                      : null,
            [i],
        );
    return (0, a.jsx)("li", {
        className: e$.j$,
        onMouseEnter: r,
        onMouseLeave: c,
        children: (0, a.jsx)(A.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: 0,
            renderPopout: () =>
                (0, a.jsx)("div", { onMouseEnter: r, onMouseLeave: c, children: (0, a.jsx)(nx.vG, {}) }),
            shouldShow: l,
            onRequestClose: c,
            children: (e) =>
                (0, a.jsx)("div", {
                    className: e$.jG,
                    children: (0, a.jsxs)(x.D, {
                        className: e$.ef,
                        ...e,
                        onClick: u,
                        children: [
                            (0, a.jsx)("div", {
                                className: e$.iA,
                                children: (0, a.jsx)(nA.A, { shouldUseThemeColor: !0, customSize: 18 }),
                            }),
                            (0, a.jsx)("div", {
                                className: e$.$H,
                                children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(eg.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: e$.W1,
                                        children: m,
                                    }),
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: o()(e$.ap, nv._),
                                children: [p, (0, a.jsx)(eq._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nC = n(290863),
    nT = n(351906),
    n_ = n(403362),
    nS = n(562153),
    nI = n(661531),
    nj = n(477782),
    nb = n(628284),
    nN = n(695366),
    ny = n(363195),
    nM = n(889227),
    nR = n(287809),
    nw = n(174459),
    nk = n(429707),
    nP = n(274303),
    nO = n(994125),
    nL = n(347853),
    nD = n(573879),
    nU = n(559117),
    nG = n(661439),
    nF = n(385113),
    nV = n(352003),
    nH = n(429913),
    nB = n(334074),
    nW = n(633075),
    nz = n(667049),
    nZ = n(280450),
    nK = n(90165),
    nq = n(518477);
function nY(e) {
    let { targetElementRef: t, onClose: i } = e,
        [l, r] = s.useState(!1),
        o = (0, h.bG)([nZ.default], () => nZ.default.getId()),
        { eligibleApplications: d, markAsDismissed: c } = (function () {
            let e = (0, h.yK)([nF.A], () => nF.A.getFeaturedApplicationIds());
            (0, nV.A)(e),
                s.useEffect(() => {
                    (0, nG.X)();
                }, []);
            let t = (0, h.bG)([nZ.default], () => nZ.default.getId()),
                n = (0, nz.A)(t),
                i = s.useMemo(() => n.filter((e) => e instanceof nW.R), [n]),
                l = (0, nH.A)(e),
                a = s.useMemo(() => l.filter(n_.Vq), [l]),
                r = (0, h.cf)([nK.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nK.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = s.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = r[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, r]),
                { eligibleToShow: d, markAsDismissed: c } = (0, nB.hj)({
                    applications: o,
                    dismissibleContent: m.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nB.SH,
                });
            return {
                eligibleApplications: s.useMemo(() => o.filter((e) => d.includes(e.id)), [o, d]),
                markAsDismissed: c,
            };
        })();
    return ((0, s.useEffect)(() => {
        0 !== d.length &&
            Promise.all([
                n.e("459257"),
                n.e("535308"),
                n.e("389187"),
                n.e("816027"),
                n.e("562772"),
                n.e("970604"),
                n.e("433400"),
                n.e("953327"),
                n.e("733814"),
                n.e("106980"),
                n.e("367536"),
                n.e("814431"),
                n.e("763214"),
                n.e("291103"),
                n.e("59599"),
                n.e("488602"),
                n.e("426737"),
                n.e("607468"),
                n.e("440636"),
                n.e("649975"),
                n.e("890516"),
                n.e("429249"),
                n.e("396635"),
                n.e("807007"),
                n.e("162775"),
                n.e("128804"),
                n.e("60882"),
                n.e("71151"),
                n.e("765073"),
                n.e("790484"),
                n.e("211004"),
                n.e("269714"),
                n.e("62849"),
                n.e("489020"),
                n.e("670058"),
                n.e("527798"),
                n.e("829172"),
                n.e("322497"),
                n.e("507140"),
                n.e("32776"),
                n.e("290608"),
                n.e("759086"),
                n.e("867336"),
                n.e("148758"),
                n.e("36026"),
                n.e("294387"),
                n.e("119766"),
                n.e("84867"),
                n.e("679157"),
                n.e("1955"),
                n.e("341161"),
                n.e("401696"),
                n.e("202985"),
                n.e("455021"),
                n.e("812196"),
                n.e("661630"),
                n.e("470126"),
                n.e("227853"),
                n.e("286615"),
                n.e("70866"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("989649"),
                n.e("853458"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("709976"),
                n.e("807432"),
                n.e("873532"),
                n.e("750955"),
                n.e("953343"),
                n.e("279774"),
                n.e("771593"),
                n.e("697284"),
                n.e("410470"),
                n.e("295570"),
                n.e("765208"),
                n.e("711562"),
                n.e("906470"),
                n.e("661157"),
                n.e("276257"),
                n.e("157064"),
                n.e("156957"),
                n.e("918786"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("358937"),
                n.e("448738"),
                n.e("590994"),
                n.e("258407"),
                n.e("894292"),
                n.e("153302"),
                n.e("836576"),
                n.e("253453"),
                n.e("82937"),
                n.e("699826"),
                n.e("923981"),
                n.e("750370"),
                n.e("972281"),
                n.e("641278"),
                n.e("761973"),
                n.e("669130"),
                n.e("636909"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("919659"),
                n.e("698136"),
                n.e("718368"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("38012"),
                n.e("419121"),
                n.e("919789"),
                n.e("302847"),
                n.e("232960"),
                n.e("74886"),
                n.e("929642"),
                n.e("491760"),
                n.e("972006"),
                n.e("180644"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("76428"),
                n.e("77473"),
                n.e("863232"),
                n.e("364827"),
                n.e("907167"),
                n.e("910471"),
                n.e("784569"),
                n.e("25279"),
                n.e("861060"),
                n.e("952372"),
                n.e("262156"),
                n.e("960235"),
                n.e("959880"),
                n.e("77333"),
                n.e("910486"),
                n.e("56366"),
                n.e("797595"),
                n.e("147662"),
                n.e("344057"),
                n.e("641248"),
                n.e("128504"),
                n.e("331988"),
                n.e("544571"),
                n.e("40291"),
                n.e("402368"),
                n.e("733115"),
                n.e("397270"),
                n.e("834552"),
                n.e("373122"),
                n.e("217951"),
                n.e("293159"),
                n.e("171202"),
                n.e("755936"),
                n.e("172503"),
                n.e("730760"),
                n.e("330316"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("793716"),
                n.e("481987"),
                n.e("595653"),
                n.e("221856"),
                n.e("958038"),
                n.e("18387"),
                n.e("576909"),
                n.e("45594"),
                n.e("406174"),
                n.e("708757"),
                n.e("993103"),
                n.e("585968"),
                n.e("776273"),
                n.e("811133"),
                n.e("407170"),
                n.e("572963"),
                n.e("307575"),
                n.e("554241"),
                n.e("724303"),
                n.e("521930"),
                n.e("53102"),
                n.e("875842"),
                n.e("88599"),
                n.e("95340"),
                n.e("171273"),
                n.e("437065"),
                n.e("229787"),
                n.e("709640"),
                n.e("952548"),
                n.e("298408"),
                n.e("979483"),
                n.e("553984"),
                n.e("943780"),
                n.e("884601"),
                n.e("782969"),
                n.e("451224"),
                n.e("375767"),
                n.e("981004"),
                n.e("428967"),
                n.e("886246"),
                n.e("859546"),
                n.e("608032"),
                n.e("523276"),
                n.e("477970"),
                n.e("386317"),
                n.e("948720"),
                n.e("729963"),
                n.e("830938"),
                n.e("392075"),
                n.e("174016"),
                n.e("852557"),
                n.e("790417"),
                n.e("160920"),
                n.e("699292"),
                n.e("50097"),
                n.e("754982"),
                n.e("252229"),
                n.e("36877"),
                n.e("203930"),
                n.e("93461"),
                n.e("903663"),
                n.e("190779"),
                n.e("513992"),
                n.e("489523"),
                n.e("829260"),
                n.e("327198"),
                n.e("504098"),
                n.e("176911"),
                n.e("582486"),
                n.e("280098"),
                n.e("741786"),
                n.e("704374"),
                n.e("553683"),
                n.e("723934"),
                n.e("571294"),
                n.e("967293"),
                n.e("186546"),
                n.e("247339"),
                n.e("347430"),
                n.e("85179"),
                n.e("736637"),
                n.e("443256"),
                n.e("182816"),
                n.e("819119"),
                n.e("373566"),
                n.e("529225"),
                n.e("669046"),
                n.e("286470"),
                n.e("653308"),
                n.e("754876"),
                n.e("414501"),
                n.e("64500"),
                n.e("956183"),
                n.e("671367"),
                n.e("375072"),
                n.e("569443"),
                n.e("49282"),
                n.e("235683"),
                n.e("702091"),
            ]).then(n.bind(n, 577593));
    }, [d.length]),
    0 === d.length)
        ? null
        : (0, a.jsx)(H.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/06b7b29c0f2eac5ce71823e813f9989b2a53aba0998090a4fa1d0ab6241127a9.svg",
              },
              title: B.intl.string(B.t.HMWL9c),
              body: B.intl.string(B.t["9hfy3A"]),
              onRequestClose: () =>
                  c(
                      d.map((e) => e.id),
                      K.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: B.intl.string(B.t.VSLDly),
                      loading: l,
                      onClick: function () {
                          r(!0),
                              (0, t2.openUserProfileModal)({ userId: o, tabSection: nq.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      (0, C.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("929642"),
                                                  n.e("491760"),
                                                  n.e("962982"),
                                                  n.e("504098"),
                                                  n.e("723934"),
                                                  n.e("182816"),
                                                  n.e("264707"),
                                              ]).then(n.bind(n, 480142));
                                              return (n) =>
                                                  (0, a.jsx)(t, {
                                                      ...n,
                                                      trackUserProfileEditAction: () => {},
                                                      highlightedApplicationIds: e,
                                                  });
                                          },
                                          { stackingBehavior: "stack" },
                                      ),
                                          c(
                                              d.map((e) => e.id),
                                              K.i.TAKE_ACTION,
                                          ),
                                          i();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var n$ = n(461213),
    nX = n(818348),
    nJ = n(709516);
function nQ() {
    let e = (0, h.bG)([n$.A], () => n$.A.getStatus()),
        t = (0, na.MU)(e) ?? "",
        n = e === nX.cl.INVISIBLE || e === nX.cl.OFFLINE;
    return (0, a.jsxs)("div", {
        className: nJ.k,
        children: [
            (0, a.jsxs)(v.A, { tag: "div", children: [B.intl.string(B.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, a.jsx)(e7.m, {
                    text: B.intl.string(B.t.L99HQm),
                    children: (0, a.jsx)(nN.E, {
                        size: "xs",
                        color: nI.A.colors.STATUS_WARNING,
                        "aria-label": B.intl.string(B.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n0 = n(146901),
    n1 = n(827827);
let n2 = [
        { duration: 15 * tn.A.Millis.MINUTE, label: () => B.intl.string(B.t["8ot6gv"]) },
        { duration: tn.A.Millis.HOUR, label: () => B.intl.string(B.t.UMWBZr) },
        { duration: 8 * tn.A.Millis.HOUR, label: () => B.intl.string(B.t.EpAXPC) },
        { duration: tn.A.Millis.DAY, label: () => B.intl.string(B.t["755t4q"]) },
        { duration: 3 * tn.A.Millis.DAY, label: () => B.intl.string(B.t["f3/1ch"]) },
        { duration: void 0, label: () => B.intl.string(B.t["46dqJY"]) },
    ],
    n3 = "forever";
function n5(e) {
    let { status: t, currentStatus: n, description: i } = e,
        l = t !== tC.clD.ONLINE,
        s = (0, a.jsx)(a.Fragment, {
            children: n2.map((e) => {
                let { duration: i, label: l } = e;
                return (0, a.jsx)(
                    nj.Dr,
                    {
                        id: `${t}-${i}`,
                        label: l(),
                        action: () => (0, n1.A)({ nextStatus: t, prevStatus: n, durationMillis: i }),
                        dontCloseOnAction: !0,
                    },
                    i ?? n3,
                );
            }),
        });
    return (0, a.jsx)(nj.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (0, na.MU)(t),
        subtext: i,
        iconLeft: () => (0, a.jsx)(eG.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n1.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: l ? s : void 0,
    });
}
function n7(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, n0._)(e);
    return "today" === t
        ? B.intl.formatToPlainString(B.t.ZxxHIO, { timeString: i })
        : B.intl.formatToPlainString(B.t["9OFjSe"], { dateString: n, timeString: i });
}
var n8 = n(996988),
    n6 = n(207634),
    n4 = n(47453);
function n9(e) {
    let { currentUser: t, onClose: n, setPopoutRef: i, highlightBadge: l, openedAt: r, className: d } = e,
        c = __OVERLAY__,
        u = (0, t1.Ay)(t.id, void 0),
        { analyticsLocations: p } = (0, O.Ay)(P.A.USER_PROFILE_ACCOUNT_POPOUT),
        A = (0, tQ.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tX.A)(p, u, nq.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, ez.Ay)(),
        { isHoveringOrFocusing: E, isHovering: T } = (0, tc.A)(x);
    s.useEffect(() => {
        i?.(x.current);
    }, [x, i]),
        s.useEffect(
            () => (tD.A.setState({ isOpen: !0 }), () => tD.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let _ = (0, h.bG)([nC.A], () => nC.A.getStatus(t.id)),
        S = n7(nc.CY.useSetting()),
        I = (0, h.bG)([nT.A], () => nT.A.hidePersonalInformation),
        j = (0, tO.kB)(),
        b = nc.Q_.useSetting(),
        N = (function (e) {
            let t = nc.CY.useSetting(),
                n = (0, tO.kB)(),
                i = nc.Jr.useSetting();
            function l(i) {
                let l = n7(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tC.clD.DND:
                        return n ? B.intl.string(B.t.day5A6) : B.intl.string(B.t["tq/fMK"]);
                    case tC.clD.INVISIBLE:
                        return B.intl.string(B.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, a.jsx)(a.Fragment, {
                    children: n2.map((t) => {
                        let { duration: n, label: i } = t;
                        return (0, a.jsx)(
                            nj.Dr,
                            {
                                id: `${e}-${n}`,
                                label: i(),
                                action: () => {
                                    (0, tO.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n3,
                        );
                    }),
                }),
                r = n5({ status: tC.clD.ONLINE, currentStatus: e }),
                o = n5({ status: tC.clD.IDLE, currentStatus: e, description: l(tC.clD.IDLE) }),
                d = n5({ status: tC.clD.DND, currentStatus: e, description: l(tC.clD.DND) }),
                c = n5({ status: tC.clD.INVISIBLE, currentStatus: e, description: l(tC.clD.INVISIBLE) });
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    r,
                    (0, a.jsx)(nj.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(nj.bX, {}, "menu-separator-statuses"),
                                  (0, a.jsx)(
                                      nj.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: B.intl.string(B.t.gJRnwK),
                                          iconLeft: eF.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: eF.BellSlashIcon },
                                          badge: { text: B.intl.string(B.t.ApAu9f) },
                                          subtext:
                                              null != i && "0" !== i
                                                  ? B.intl.format(B.t.BWD8fs, {
                                                        endTime: new Date(Number(i)).toLocaleString(
                                                            B.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : B.intl.string(B.t["Br1q+x"]),
                                          action: () => {
                                              (0, tO.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: s,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(_),
        y = (function (e) {
            let t = (0, h.bG)([nR.default], () => nR.default.getCurrentUser()),
                n = (0, h.bG)([nT.A], () => nT.A.hidePersonalInformation),
                i = (0, h.bG)([ny.A], () => (0, tU.M)(ny.A.theme)),
                { multiAccountUsers: l } = (0, nO.K)(),
                s = l.map((l) => {
                    let s = new nM.A(l),
                        r = s.id === t?.id,
                        o = l.tokenStatus === nP.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, a.jsx)(
                        nj.Dr,
                        {
                            id: s.id,
                            focusedClassName: nU.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, a.jsxs)("div", {
                                    className: nU.ci,
                                    children: [
                                        (0, a.jsx)(g.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: f._3.SIZE_24,
                                            "aria-label": l.username,
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: nU.DD,
                                            children: [
                                                (0, a.jsx)(eg.E, {
                                                    className: nU.gE,
                                                    variant: "text-sm/normal",
                                                    children: na.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, a.jsx)(eg.E, {
                                                        className: nU.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, a.jsx)(nb.y, {
                                                size: "sm",
                                                color: t
                                                    ? nI.A.unsafe_rawColors.WHITE.css
                                                    : nI.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nI.A.unsafe_rawColors.BRAND_500.css
                                                        : nI.A.unsafe_rawColors.WHITE.css,
                                                className: nU.s0,
                                            }),
                                        o &&
                                            (0, a.jsx)(nN.E, {
                                                color: nI.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nI.A.unsafe_rawColors.BRAND_500.css
                                                        : nI.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nU.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nL.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (nw.default.track(tC.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tC.JJy.USER_PROFILE },
                                        }),
                                        nk.Mx(n, void 0, nD.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        s.id,
                    );
                });
            return (
                s.push(
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(nj.bX, {}),
                            (0, a.jsx)(nj.Dr, {
                                id: "manage-accounts",
                                label: B.intl.string(B.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nL.A)();
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        M = (0, tJ.A)({ analyticsLocations: p }),
        R = (0, tV.TW)(t),
        w = (0, L.J9)({ location: "UserProfileAccountPopout" }),
        k = (0, eZ.d)({ location: "UserProfileAccountPopout" }),
        D = s.useRef(null),
        U = s.useRef(null),
        G = (0, tM.A)(u?.profileFrame?.skuId, "UserProfileAccountPopout"),
        F = (0, ty.A)(u?.profileFrame?.skuId);
    (0, tR.A)({ skuId: u?.profileFrame?.skuId, openedAt: r, context: A, analyticsLocations: p });
    let V = s.useRef((0, tD.A)((e) => e.shouldRenderTenureLevelUp)),
        H = s.useMemo(() => (0, tk.A)(), []),
        [W, Z] = s.useState(() => tD.A.getState().shouldRenderTenureLevelUp);
    function q(e) {
        n?.(), (0, t2.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: p, ...A, ...e });
    }
    s.useEffect(() => {
        let e = setTimeout(() => {
            Z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Y = u?.widgets != null && u.widgets.length > 0,
        $ = s.useCallback(() => {
            n();
        }, [n]),
        X = s.useCallback(() => {
            M(), $();
        }, [M, $]),
        J = (0, ed.ux)("UserProfileAccountPopout"),
        Q = t0.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        ee = (0, nu.H)({ location: "UserProfileAccountPopout" }),
        [et, en] = (0, tP.kn)(
            [
                J ? m.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                Q ? m.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(n_.Vq),
            void 0,
            !0,
        ),
        ei = s.useId();
    return (0, a.jsx)(O.f5, {
        value: p,
        children: (0, a.jsx)(tQ.of, {
            value: A,
            openedAt: r,
            fetchStartedAt: u?.fetchStartedAt,
            fetchEndedAt: u?.fetchEndedAt,
            isLoaded: u?.isLoaded,
            children: (0, a.jsxs)(eO.l, {
                ref: x,
                "aria-labelledby": ei,
                className: o()(e$.jC, d),
                "data-layer": "base",
                children: [
                    (0, a.jsx)(v.A, { children: (0, a.jsx)(ek.H, { id: ei, children: B.intl.string(B.t["5fWB8U"]) }) }),
                    (0, a.jsxs)(ek.F, {
                        children: [
                            (0, a.jsxs)(ne.A, {
                                className: e$.BK,
                                user: t,
                                displayProfile: u,
                                themeType: n8.d.POPOUT,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: n4.wx,
                                        children: [
                                            (0, a.jsx)(t7.A, { user: t, displayProfile: u, themeType: n8.d.POPOUT }),
                                            (0, a.jsx)(t3.A, {
                                                user: t,
                                                displayProfile: u,
                                                avatarSize: n6.T[n8.d.POPOUT].avatarSize,
                                                onOpenProfile: c ? void 0 : q,
                                            }),
                                            (0, a.jsx)(no.A, {
                                                ref: D,
                                                user: t,
                                                themeType: n8.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(eL.Ip, {
                                        className: e$.rf,
                                        style: { pointerEvents: W ? "none" : void 0 },
                                        children: [
                                            (0, a.jsx)(t6.A, { userId: t.id }),
                                            (0, a.jsx)(nt.Ay, {
                                                className: e$.eF,
                                                user: t,
                                                displayName: nS.Ay.getName(void 0, null, t),
                                                onClickName: c ? void 0 : q,
                                                displayNameTrailing: (0, a.jsx)(nr, { user: t, isVisible: E }),
                                                pronouns: u?.pronouns,
                                                trailing: (0, a.jsx)(t5.A, {
                                                    displayProfile: u,
                                                    themeType: n8.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != l ? (e) => e === l : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, a.jsx)(t8.A, { isPremiumUser: R, onInteraction: n }),
                                            (0, a.jsx)(nd.A, {
                                                userId: t.id,
                                                userBio: u?.bio,
                                                hidePersonalInformation: I,
                                                onClose: n,
                                            }),
                                            Y &&
                                                (0, a.jsx)(t9.A, {
                                                    user: t,
                                                    widgets: u?.widgets,
                                                    onOpenUserProfileModal: q,
                                                }),
                                            (0, a.jsx)(t4.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: q,
                                                onClose: n,
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: e$.T_,
                                                children: [
                                                    (0, a.jsx)(ne.A.Overlay, {
                                                        className: e$.g0,
                                                        children: (0, a.jsxs)(eQ, {
                                                            children: [
                                                                (0, a.jsx)(eJ, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: B.intl.string(B.t.s5vZlQ),
                                                                    icon: eD.PencilIcon,
                                                                    trailing:
                                                                        null != et
                                                                            ? (0, a.jsx)(eU.Lp, {
                                                                                  text: B.intl.string(B.t.y2b7CA),
                                                                                  "aria-hidden": !0,
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        et ===
                                                                            m.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            en(K.i.TAKE_ACTION),
                                                                            X();
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, a.jsx)(eJ, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, a.jsx)(nQ, {}),
                                                                    sublabel: null != S && S,
                                                                    icon: () =>
                                                                        (0, a.jsx)(eG.nW, { status: _, size: 12 }),
                                                                    trailing:
                                                                        (j || _ === tC.clD.DND) &&
                                                                        (0, a.jsx)(eF.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: ew.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, a.jsx)(eX, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: e$.hQ,
                                                                                  "aria-label": B.intl.string(
                                                                                      B.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: ew.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, C.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, a.jsx)(
                                                                                                      eP.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              B.intl.string(
                                                                                                                  B.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          a.jsx)(eV.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  B.intl.string(
                                                                                                                      B
                                                                                                                          .t
                                                                                                                          .E13trI,
                                                                                                                  ),
                                                                                                              hideScroller:
                                                                                                                  !0,
                                                                                                              onClose:
                                                                                                                  t,
                                                                                                              onSelect:
                                                                                                                  void 0,
                                                                                                              children:
                                                                                                                  N,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                w &&
                                                                    k &&
                                                                    (0, a.jsx)(eJ, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: eH.q,
                                                                        label: B.intl.string(B.t["9kPRi0"]),
                                                                        onClick: () => {
                                                                            n(),
                                                                                (0, z._)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                });
                                                                        },
                                                                    }),
                                                                (0, a.jsx)(tb, { onClose: n, popoutContainerRef: x }),
                                                                ee && (0, a.jsx)(nE, { popoutContainerRef: x }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, a.jsx)(ne.A.Overlay, {
                                                        className: e$.g0,
                                                        children: (0, a.jsxs)(eQ, {
                                                            children: [
                                                                (0, a.jsx)(eJ, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eB.r,
                                                                    label: B.intl.string(B.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nL.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, a.jsx)(eX, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": B.intl.string(B.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: y,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    nl.p5 &&
                                                                    b &&
                                                                    (0, a.jsx)(eJ, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eW.L,
                                                                        label: B.intl.string(B.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, nl.C)(t.id), n();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u?.profileEffect != null &&
                                        !V.current &&
                                        (0, a.jsx)(tN.A, { skuId: u.profileEffect.skuId, isHovering: T }),
                                    null != G && (0, a.jsx)(tw.A, { frame: G, fadeIn: F }),
                                ],
                            }),
                            (0, a.jsx)(nY, { targetElementRef: U, onClose: n }),
                            (0, a.jsx)(tY, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ie = n(130490),
    it = n(655116),
    ii = n(106531),
    il = n(454719),
    ia = n(342296),
    is = n(852712),
    ir = n(389960),
    io = n(173660),
    id = n(303277),
    ic = n(763827),
    iu = n(499156),
    ih = n(731854);
let im = 2.5 * tn.A.Millis.SECOND,
    ip = +tn.A.Millis.HOUR;
var ig = n(459838),
    iA = n(485296);
let ix = 3 * tn.A.Millis.SECOND,
    iv = +tn.A.Millis.DAY;
var iE = n(616356),
    iC = n(734057),
    iT = n(629016),
    i_ = n(186111),
    iS = n(967198),
    iI = n(486020),
    ij = n(625494),
    ib = n(536194),
    iN = n(19575),
    iy = n(994314),
    iM = n(485599),
    iR = n(338854);
function iw(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: i, position: l, shouldShow: s = !0, children: r } = e,
        o = (0, e0.sw)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            r,
            s && o
                ? (0, a.jsx)(iR.H, {
                      targetElementRef: t,
                      title: B.intl.string(t_.default.Qn21R6),
                      body: B.intl.string(t_.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: l,
                      caretConfig: { align: "center" },
                      action: {
                          text: B.intl.string(B.t.RzWDqY),
                          onClick: function () {
                              n(K.i.TAKE_ACTION), i();
                          },
                      },
                      onRequestClose: function () {
                          n(K.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var ik = n(379848),
    iP = n(626584),
    iO = n(757036),
    iL = n(591179),
    iD = n(531685),
    iU = n(259065),
    iG = n(701974);
let iF = new iP.A("DisplayNameStylesFlywheelCoachmark");
function iV(e) {
    let { markAsDismissed: t, targetElementRef: n, children: i } = e,
        { analyticsLocations: l } = (0, O.Ay)(),
        r = (0, s.useRef)(null),
        o = (0, h.bG)([iD.A], () => iD.A.isFocused()),
        d = (0, iO.L)(tB.PremiumTypes.TIER_2),
        c = (0, iL.X)("DisplayNameStylesFlywheelCoachmark"),
        u = (0, s.useCallback)(() => {
            t(K.i.TAKE_ACTION);
            let e = nR.default.getCurrentUser();
            c && null != e
                ? (0, t2.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: l,
                      onModalOpen: () => {
                          (0, iU.L)({ analyticsLocations: l, stackingBehavior: "stack" });
                      },
                  })
                : (0, eE.openUserSettings)(ev.X.PROFILE_PANEL, { analyticsLocations: l }, () => {
                      (0, iU.L)({ analyticsLocations: l });
                  });
        }, [t, l, c]),
        m = (0, s.useCallback)(() => {
            t(K.i.USER_DISMISS);
        }, [t]);
    (0, s.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iF.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [B.intl.string(iG.default.TyUdka)] : [B.intl.string(iG.default.dluV0R)];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            i,
            (0, a.jsx)(H.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: m,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: r,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                title: B.intl.string(iG.default.cYwrp8),
                body: p,
                actions: [{ text: B.intl.string(B.t["4P5I8V"]), variant: "primary", onClick: u }],
            }),
        ],
    });
}
var iH = n(45780),
    iB = n(696451),
    iW = n(71393),
    iz = n(685073),
    iZ = n(228366);
let iK = { lastSeenInfos: {} },
    iq = iK;
class iY extends h.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iq = e ?? iK;
    }
    getState() {
        return iq;
    }
    getGuildLastSeenInfo(e) {
        return iq.lastSeenInfos[e] ?? null;
    }
}
let i$ = new iY(iZ.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iq.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iq = iK;
    },
});
var iX = n(514661);
let iJ = new iP.A("GuildTagAvailableCoachmark");
function iQ(e) {
    let t = (0, h.bG)([iW.A], () => iW.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iZ.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: i, onAdoptTag: l, onEditProfile: s } = (0, iX.A)(t?.id ?? null, () => n(K.i.TAKE_ACTION));
    if (null == t || !(0, iz.q0)(t))
        return iJ.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: B.intl.string(B.t.jwEaiX), loading: i, onClick: l, variant: "primary" },
        { text: B.intl.string(B.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(H.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: V.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: B.intl.formatToPlainString(B.t["m/Tc3n"], { guildName: t.name }),
                body: B.intl.string(B.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(K.i.USER_DISMISS),
            }),
        ],
    });
}
function i0(e) {
    let t = (0, h.bG)([iW.A], () => iW.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: i, onAdoptTag: l, onEditProfile: s } = (0, iX.A)(t?.id ?? null, () => n(K.i.TAKE_ACTION));
    if (null == t || !(0, iz.q0)(t))
        return iJ.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: B.intl.string(B.t.jwEaiX), loading: i, onClick: l, variant: "primary" },
        { text: B.intl.string(B.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(H.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: V.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: B.intl.formatToPlainString(B.t.VFqnyU, { guildName: t.name }),
                body: B.intl.string(B.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(K.i.USER_DISMISS),
            }),
        ],
    });
}
var i1 = n(843010),
    i2 = n(764231),
    i3 = n(425713);
function i5(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = tW(),
        l = (0, h.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        s = (0, tD.A)((e) => e.isOpen),
        r = (0, i1.G)();
    return l || null == i || s || r
        ? null
        : (0, a.jsx)(ik.zJ, {
              contentType: m.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e;
                  return (0, a.jsx)(i7, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: l,
                      targetElementRef: n,
                      shouldShow: t === m.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i7(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: i, shouldShow: l } = e,
        r = tB.sp.indexOf(t),
        o = (0, i3.I)(tB.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, s.useCallback)(() => {
            n(K.i.TAKE_ACTION),
                tD.A.setState({ shouldRenderTenureLevelUp: !0 }),
                ij._.dispatch(tC.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, s.useCallback)(() => {
            n(K.i.USER_DISMISS);
        }, [n]),
        u = tB.VD[t],
        h = B.intl.formatToPlainString(B.t.ewkaVR, {
            timeMilestone: (0, i2.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: B.intl.string(B.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, a.jsx)(H.A, {
        targetElementRef: i,
        onRequestClose: c,
        shouldShow: l,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: B.intl.string(B.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function i8(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, ie.c9)(),
        i = null != e.targetElementRef.current && t && n,
        [l, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iH.G$)(m.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tC.dJq),
                l = (0, h.bG)([iW.A, nR.default, iB.Ay], () => {
                    if (null === e) return !1;
                    let t = iW.A.getGuild(e);
                    if (void 0 === t || !(0, iz.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nR.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iB.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tP.ww)(l && n && !i ? [m.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tC.eGj);
        })(e.guildId, { shouldShow: i }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, h.bG)([i$], () => (null === l ? null : i$.getGuildLastSeenInfo(l))),
                s = (0, h.bG)([iW.A], () => iW.A.getGuild(l)?.profile?.tag),
                r = null != s && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === s,
                d = null !== l && r && !o;
            return (0, tP.Wl)(d && n ? m.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: i });
    return i
        ? l === m.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, a.jsx)(i0, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === m.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, a.jsx)(iQ, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(i5, { groupName: K.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, a.jsx)(ik.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: K.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: i } = t;
                                switch (n) {
                                    case m.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, a.jsx)(iV, {
                                            markAsDismissed: i,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case m.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, a.jsx)(iw, {
                                            markAsDismissed: i,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: e3.p,
                                            children: e.children,
                                        });
                                    case m.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                e.children,
                                                (0, a.jsx)(q, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: i,
                                                    targetElementRef: e.targetElementRef,
                                                }),
                                            ],
                                        });
                                    default:
                                        return e.children;
                                }
                            },
                        }),
                    ],
                })
        : e.children;
}
var i6 = n(615675),
    i4 = n(900797),
    i9 = n(847374),
    le = n(348858),
    lt = n(617354),
    ln = n(829773),
    li = n(42473),
    ll = n(516171),
    la = n(577755);
function ls(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: i,
            onClick: l,
            iconForeground: r,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: u,
        } = e,
        h = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: f },
        } = (0, le.I)(h ? "undeafen" : "deafen"),
        x = n ? i6.T : m,
        { name: v } = (0, eR.x5)(ih.oh.AUDIO_OUTPUT),
        E = (0, lt.A)(t, n, i),
        { analyticsLocations: C } = (0, O.Ay)(P.A.AUDIO_OUTPUT_BUTTON),
        T = s.useRef(null);
    return (
        s.useEffect(() => () => p(), [h, p]),
        (0, a.jsx)(O.f5, {
            value: C,
            children: (0, a.jsx)(A.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(O.f5, {
                            value: C,
                            children: (0, a.jsx)(ln.A, {
                                onInteraction: (0, et.s)("AudioDeviceMenu", P.A.ACCOUNT),
                                onClose: t,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                maybeRenderSpatialAudioCheckbox: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: A.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: s } = e,
                        { isShown: u } = t,
                        m = u ? i4.t : i9.a;
                    return (0, a.jsxs)("div", {
                        ref: T,
                        className: o()(ll.Lh, { [ll.v8]: h, [ll.q6]: u }),
                        children: [
                            (0, a.jsx)(li.A, {
                                "aria-checked": h,
                                "aria-label": B.intl.string(B.t.wjcRFX),
                                className: ll.eT,
                                disabled: i,
                                icon: (0, a.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? nI.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: r,
                                }),
                                iconForeground: h ? la.o : void 0,
                                innerClassName: o()({ [la.T]: n }),
                                onClick: l,
                                onContextMenu: s,
                                onMouseEnter: g,
                                onMouseLeave: f,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, a.jsx)(li.A, {
                                className: o()(ll.UT, { [ll.q6]: u }),
                                disabled: i,
                                icon: (0, a.jsx)(m, {
                                    className: ll.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? nI.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? B.intl.formatToPlainString(B.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? B.intl.format(B.t["f+DDY/"], { outputDeviceName: v })
                                    : B.intl.string(B.t.aA4Vce),
                                "aria-label": c
                                    ? B.intl.formatToPlainString(B.t["f+DDY/"], { outputDeviceName: v })
                                    : B.intl.string(B.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lr = n(666654),
    lo = n(523875),
    ld = n(993719);
let lc = {};
class lu extends h.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lc[e] ?? !1;
    }
}
let lh = new lu(iZ.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lc[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lc[t] = !1;
    },
});
var lm = n(362823),
    lp = n(980923),
    lg = n(573549),
    lf = n(222176),
    lA = n(973324);
function lx(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
            suppress: l,
            awaitingRemote: r,
            iconForeground: d,
            onMouseEnter: c,
            onMouseLeave: u,
            onClick: m,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: f,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: E,
            speaking: C,
        } = e,
        { showPTTIconIndicator: T } = iu.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, h.bG)([id.Ay], () => id.Ay.getMode() === ih.TB.PUSH_TO_TALK),
        S = (0, h.bG)([id.Ay], () => id.Ay.getSettings().modeOptions.shortcut),
        I = (0, h.bG)([lh], () => lh.getIsTutorialActive(lm.v.MUTE_TUTORIAL)),
        j = (0, h.bG)([ic.A], () => null != ic.A.getChannelId()),
        { name: b } = (0, eR.x5)(ih.oh.AUDIO_INPUT),
        { enabledInputProfiles: N } = (0, is.d)({ location: "MicrophoneButton" }),
        y = s.useRef(null),
        M = n || l || i,
        R = (0, lo.L)(M ? "unmute" : "mute"),
        { analyticsLocations: w } = (0, O.Ay)(P.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: L, play: D } = R,
        U = i || l ? lr.O : k;
    s.useEffect(() => () => D(), [M, D]);
    let G = (0, lp.A)(n, i, l, r);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: B.intl.string(B.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: B.intl.format(B.t.c1qUOQ, { keybind: tl.dI(S).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: G };
    let F = T && _ && j,
        V = M ? nI.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = s.useCallback(() => {
            m(), I && ld.N(lm.v.MUTE_TUTORIAL);
        }, [m, I]);
    return (0, a.jsxs)(O.f5, {
        value: w,
        children: [
            (0, a.jsx)(A.Y, {
                targetElementRef: y,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, a.jsx)(O.f5, {
                            value: w,
                            children: (0, a.jsx)(ln.A, {
                                onInteraction: (0, et.s)("AudioDeviceMenu", P.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: N.length > 0,
                                renderInputDevices: !0,
                                maybeRenderInputMeter: !0,
                                renderInputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: A.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: i } = e,
                        { isShown: l } = n,
                        s = l ? i4.t : i9.a;
                    return (0, a.jsxs)("div", {
                        ref: y,
                        className: o()(ll.Lh, { [ll.v8]: M, [ll.q6]: l }),
                        children: [
                            (0, a.jsx)(li.A, {
                                "aria-checked": M,
                                "aria-label": B.intl.string(B.t.w4m945),
                                className: ll.eT,
                                disabled: r,
                                icon: (0, a.jsx)(U, { size: "custom", width: 20, height: 20, color: V, className: d }),
                                onClick: W,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    c(), L.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    u(), L.onMouseLeave();
                                },
                                plated: null != p,
                                redGlow: M,
                                role: "switch",
                                ...t,
                                children: F ? (0, a.jsx)("div", { className: o()(lf.U, { [lf.z]: C }) }) : null,
                            }),
                            (0, a.jsx)(li.A, {
                                "aria-label": x
                                    ? B.intl.formatToPlainString(B.t["18wnuD"], { inputDeviceName: b })
                                    : B.intl.string(B.t.fRzCbB),
                                className: o()(ll.UT, { [ll.q6]: l }),
                                disabled: r,
                                icon: (0, a.jsx)(s, {
                                    className: ll.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: V,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: c,
                                onMouseLeave: u,
                                plated: null != p,
                                redGlow: M,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? B.intl.formatToPlainString(B.t["18wnuD"], { inputDeviceName: b })
                                    : void 0,
                                tooltipShouldShow: !l,
                                tooltipText: x
                                    ? B.intl.format(B.t["18wnuD"], { inputDeviceName: b })
                                    : B.intl.string(B.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, a.jsx)(H.A, {
                targetElementRef: y,
                shouldShow: I,
                graphic: { type: "image", src: lA.A },
                onRequestClose: () => {
                    ld.N(lm.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: B.intl.string(lg.default.VG4zAf),
                body: B.intl.string(lg.default["8VIRzR"]),
            }),
        ],
    });
}
var lv = n(935399),
    lE = n(505312),
    lC = n(848847),
    lT = n(88001),
    l_ = n(148155),
    lS = n(438705);
function lI(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        l = s.useCallback(() => {
            i(), (0, eE.openUserSettings)(ev.X.SUBSCRIPTIONS_PANEL);
        }, [i]);
    return (0, a.jsx)(H.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lS },
        shouldShow: n,
        title: B.intl.format(l_.default.bx8sR9, { premiumGroupProductName: (0, lT.DP)() }),
        body: B.intl.format(l_.default.Pw4OFZ, { premiumGroupProductName: (0, lT.DP)() }),
        onRequestClose: i,
        actions: [{ text: B.intl.string(l_.default.DD26QR), onClick: l }],
    });
}
var lj = n(873298),
    lb = n(840387);
function lN(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, lb.Z)(),
        l = nc.KP.useSetting(),
        r = i && l !== lj.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, s.useCallback)(() => {
            t(K.i.TAKE_ACTION), (0, eE.openUserSettings)(ev.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, s.useCallback)(() => {
            t(K.i.USER_DISMISS);
        }, [t]),
        c = r
            ? l === lj.KP.FRIENDS_ONLY
                ? B.intl.string(B.t["/hogEy"])
                : B.intl.string(B.t["6hEfm1"])
            : B.intl.string(B.t.bnNxW1);
    return (0, a.jsx)(H.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: d,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/6127c744cb2822ba2b138271130d9493e2579c126af2ee58921b6f988c6a46d6.svg",
        },
        title: B.intl.string(B.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: B.intl.string(B.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var ly = n(415443);
function lM(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            onClick: r,
            onContextMenu: o,
            dismissibleContents: d,
            iconForeground: c,
            nameplate: u,
        } = e,
        h = s.useRef(null),
        [p, g] = s.useState(!1);
    (0, lv.Ay)(() => {
        function e() {
            return g(!0);
        }
        return (
            ij._.subscribe(tC.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                ij._.unsubscribe(tC.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = s.useCallback(() => {
        g(!1), r();
    }, [r]);
    if (null != i) {
        let e = (0, ly.A)("1788981840162", !0);
        t =
            null != e
                ? B.intl.formatToPlainString(B.t.wve4kg, { webBuildOverride: i.id, builtAt: e })
                : B.intl.formatToPlainString(B.t.Gzh6ZP, { webBuildOverride: i.id });
    } else t = B.intl.string(B.t.cduTBL);
    let A = e6.SettingsIcon,
        x = (0, lE.w)();
    return (
        (A = null != i ? lC.H : x.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(li.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: o,
                    "aria-label": B.intl.string(B.t.cduTBL),
                    icon: (0, a.jsx)(A, { size: "refresh_sm", color: "currentColor", className: c }),
                    ...x.events,
                    plated: null != u,
                }),
                (0, a.jsx)(lI, { targetElementRef: h, shouldShow: p, onDismiss: () => g(!1) }),
                (0, a.jsx)(ik.Ay, {
                    contentTypes: d,
                    groupName: K.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === m.M.TINY_BRONCO && null != l
                            ? (0, a.jsx)(s.Suspense, {
                                  fallback: null,
                                  children: (0, a.jsx)(l, { markAsDismissed: n, targetElementRef: h }),
                              })
                            : t === m.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, a.jsx)(lN, { markAsDismissed: n, targetElementRef: h })
                              : null;
                    },
                }),
            ],
        })
    );
}
var lR = n(358285);
let lw = iN.Ay.getEnableHardwareAcceleration() ? g.Js : g.eu,
    lk = 2.5 * tn.A.Millis.SECOND,
    lP = 2 * tn.A.Millis.MINUTE,
    lO = 2 * tn.A.Millis.MINUTE,
    lL = 5 * tn.A.Millis.SECOND;
function lD(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: i = -1 / 0,
            streaming: l,
            currentUser: r,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: h,
            nameplate: m,
            avatarDecoration: p,
            "data-jump-section": g,
        } = e,
        v = s.useRef(null),
        E = t ?? v,
        C = (0, iI.F_)({ avatarDecoration: p, size: (0, ei.Te)(f._3.SIZE_32) }),
        T = (0, ec.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: I,
            setHighlightBadge: b,
        } = (function () {
            let e = s.useRef(null),
                t = s.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = s.useState(),
                [l, a] = s.useState(!1);
            return (
                (0, j.A)(() => a(!0), 750),
                s.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        ij._.subscribe(tC.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ij._.unsubscribe(tC.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: l ? n : void 0, setHighlightBadge: i }
            );
        })(),
        N = (0, ea.K)(m);
    return null == r
        ? null
        : (0, a.jsx)(_.A, {
              object: tC.ZSU.AVATAR,
              children: (0, a.jsx)(ia.A, {
                  user: r,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, il.A)(r.id, r.getAvatarURL(void 0, ia.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, a.jsx)(n9, {
                          currentUser: r,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: i,
                          className: lR.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: A.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), b(void 0);
                  },
                  children: (e) => {
                      S(e);
                      let { onMouseEnter: t, onMouseDown: s, ...u } = e;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          style: N,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: o()(lR.Q9, { [lR.ZQ]: null != m }),
                          children: [
                              (0, a.jsx)(x.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": B.intl.string(B.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: lR.$n,
                                  "data-jump-section": g,
                              }),
                              (0, a.jsx)(lw, {
                                  size: f._3.SIZE_32,
                                  src: r.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: C,
                                  status: l ? tC.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: i,
                                  className: lR.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: lR.oM, children: h(T) }),
                          ],
                      });
                  },
              }),
          });
}
class lU extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new p.Ep();
    speakingWhilePTTTooltipTimeout = new p.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(lO, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = s.createRef();
    avatarWithPopoutRef = s.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: l, occluded: a, speakingWhilePTTInactive: s } = this.props;
        a !== i && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            s !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, Q.A)(e, t, tC.JJy.ACCOUNT_PANEL), (0, ee.X)(P.A.ACCOUNT, ee.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, J.A)(e, tC.JJy.ACCOUNT_PANEL), (0, ee.X)(P.A.ACCOUNT, ee.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ic.A.isConnected() ? (0, eE.openUserSettings)(ev.X.VOICE_AND_VIDEO_PANEL) : (0, eE.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, T.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("618416"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("679157"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("401696"),
                    n.e("202985"),
                    n.e("455021"),
                    n.e("812196"),
                    n.e("661630"),
                    n.e("470126"),
                    n.e("162775"),
                    n.e("128804"),
                    n.e("60882"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("70866"),
                    n.e("311541"),
                    n.e("472847"),
                    n.e("870088"),
                    n.e("989649"),
                    n.e("853458"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("279774"),
                    n.e("771593"),
                    n.e("697284"),
                    n.e("410470"),
                    n.e("295570"),
                    n.e("765208"),
                    n.e("711562"),
                    n.e("906470"),
                    n.e("661157"),
                    n.e("276257"),
                    n.e("157064"),
                    n.e("156957"),
                    n.e("918786"),
                    n.e("701335"),
                    n.e("257935"),
                    n.e("724086"),
                    n.e("358937"),
                    n.e("448738"),
                    n.e("590994"),
                    n.e("258407"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("836576"),
                    n.e("253453"),
                    n.e("82937"),
                    n.e("699826"),
                    n.e("923981"),
                    n.e("750370"),
                    n.e("972281"),
                    n.e("489020"),
                    n.e("641278"),
                    n.e("761973"),
                    n.e("669130"),
                    n.e("636909"),
                    n.e("466592"),
                    n.e("73946"),
                    n.e("282050"),
                    n.e("436101"),
                    n.e("976888"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("919659"),
                    n.e("698136"),
                    n.e("718368"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("38012"),
                    n.e("411938"),
                    n.e("653383"),
                    n.e("696490"),
                    n.e("419121"),
                    n.e("919789"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("226956"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("737853"),
                    n.e("225307"),
                    n.e("332165"),
                    n.e("524434"),
                    n.e("854326"),
                    n.e("984"),
                    n.e("226229"),
                    n.e("981833"),
                    n.e("931937"),
                    n.e("516497"),
                    n.e("24774"),
                    n.e("326794"),
                    n.e("489565"),
                    n.e("684231"),
                    n.e("570690"),
                    n.e("886631"),
                    n.e("74336"),
                    n.e("978898"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("376991"),
                    n.e("194704"),
                    n.e("3942"),
                    n.e("403643"),
                    n.e("812793"),
                    n.e("293612"),
                    n.e("703728"),
                    n.e("519435"),
                    n.e("10985"),
                    n.e("102075"),
                    n.e("828178"),
                    n.e("45036"),
                    n.e("480889"),
                    n.e("434683"),
                    n.e("920955"),
                    n.e("505928"),
                    n.e("752657"),
                    n.e("747973"),
                    n.e("314001"),
                    n.e("885251"),
                    n.e("167275"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("444038"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("180644"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("785456"),
                    n.e("689521"),
                    n.e("398791"),
                    n.e("10886"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("564664"),
                    n.e("842631"),
                    n.e("852197"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
                    n.e("459257"),
                    n.e("790484"),
                    n.e("765073"),
                    n.e("631323"),
                    n.e("464452"),
                    n.e("381673"),
                    n.e("714144"),
                    n.e("816027"),
                    n.e("458855"),
                    n.e("305161"),
                    n.e("845486"),
                    n.e("401425"),
                    n.e("120561"),
                    n.e("880186"),
                    n.e("58353"),
                    n.e("17256"),
                    n.e("40416"),
                    n.e("76283"),
                    n.e("792513"),
                    n.e("292699"),
                    n.e("377016"),
                    n.e("226867"),
                    n.e("754366"),
                    n.e("657682"),
                    n.e("600336"),
                    n.e("535413"),
                    n.e("172413"),
                    n.e("145006"),
                    n.e("799951"),
                    n.e("302458"),
                    n.e("556436"),
                    n.e("280574"),
                    n.e("102137"),
                    n.e("375971"),
                    n.e("655282"),
                    n.e("792818"),
                    n.e("861161"),
                    n.e("579958"),
                    n.e("27612"),
                    n.e("987313"),
                    n.e("657266"),
                    n.e("622074"),
                    n.e("556315"),
                    n.e("198877"),
                    n.e("531521"),
                    n.e("132839"),
                    n.e("873943"),
                    n.e("152263"),
                    n.e("982186"),
                    n.e("207322"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("301850"),
                    n.e("926787"),
                    n.e("870423"),
                    n.e("2059"),
                    n.e("464838"),
                    n.e("772699"),
                    n.e("40074"),
                    n.e("733814"),
                    n.e("202342"),
                    n.e("988435"),
                    n.e("377476"),
                    n.e("766811"),
                    n.e("746309"),
                    n.e("883221"),
                    n.e("384236"),
                    n.e("64640"),
                    n.e("368991"),
                    n.e("223213"),
                    n.e("867336"),
                    n.e("232960"),
                    n.e("656997"),
                    n.e("828849"),
                    n.e("302847"),
                    n.e("74886"),
                    n.e("929642"),
                    n.e("944121"),
                    n.e("245851"),
                    n.e("459397"),
                    n.e("652014"),
                    n.e("643363"),
                    n.e("980902"),
                    n.e("157771"),
                    n.e("669381"),
                    n.e("715958"),
                    n.e("560042"),
                    n.e("824992"),
                    n.e("110299"),
                    n.e("860350"),
                    n.e("769590"),
                    n.e("866539"),
                    n.e("161411"),
                    n.e("966268"),
                    n.e("25839"),
                    n.e("932696"),
                    n.e("683084"),
                    n.e("927808"),
                    n.e("771149"),
                    n.e("925807"),
                    n.e("959922"),
                    n.e("311992"),
                    n.e("876880"),
                    n.e("888213"),
                    n.e("150183"),
                    n.e("394692"),
                    n.e("272788"),
                    n.e("436988"),
                    n.e("3445"),
                    n.e("592378"),
                    n.e("10058"),
                    n.e("802273"),
                    n.e("30482"),
                    n.e("87648"),
                    n.e("48055"),
                    n.e("388474"),
                    n.e("774188"),
                    n.e("280999"),
                    n.e("362079"),
                    n.e("537014"),
                    n.e("628902"),
                    n.e("364685"),
                    n.e("485595"),
                    n.e("163968"),
                    n.e("480979"),
                    n.e("118191"),
                    n.e("885987"),
                    n.e("28420"),
                    n.e("477550"),
                    n.e("71930"),
                    n.e("97191"),
                    n.e("385504"),
                    n.e("310994"),
                    n.e("770720"),
                    n.e("195830"),
                    n.e("338218"),
                    n.e("846582"),
                    n.e("300726"),
                    n.e("53719"),
                    n.e("992535"),
                    n.e("737132"),
                    n.e("207998"),
                    n.e("442781"),
                    n.e("803511"),
                    n.e("955410"),
                    n.e("868052"),
                    n.e("106980"),
                    n.e("951589"),
                    n.e("257073"),
                    n.e("65764"),
                    n.e("29489"),
                    n.e("269714"),
                    n.e("445380"),
                    n.e("926018"),
                    n.e("440065"),
                    n.e("213217"),
                    n.e("680015"),
                    n.e("585005"),
                    n.e("684986"),
                    n.e("527302"),
                    n.e("423538"),
                    n.e("700572"),
                    n.e("14775"),
                    n.e("446761"),
                    n.e("915213"),
                    n.e("530166"),
                    n.e("594045"),
                    n.e("348567"),
                    n.e("452075"),
                    n.e("900277"),
                    n.e("127962"),
                    n.e("503376"),
                    n.e("494822"),
                    n.e("926132"),
                    n.e("76428"),
                    n.e("77473"),
                    n.e("863232"),
                    n.e("364827"),
                    n.e("907167"),
                    n.e("910471"),
                    n.e("784569"),
                    n.e("25279"),
                    n.e("861060"),
                    n.e("952372"),
                    n.e("262156"),
                    n.e("960235"),
                    n.e("959880"),
                    n.e("77333"),
                    n.e("910486"),
                    n.e("56366"),
                    n.e("797595"),
                    n.e("147662"),
                    n.e("344057"),
                    n.e("641248"),
                    n.e("128504"),
                    n.e("331988"),
                    n.e("544571"),
                    n.e("40291"),
                    n.e("402368"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("834552"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("293159"),
                    n.e("171202"),
                    n.e("755936"),
                    n.e("172503"),
                    n.e("730760"),
                    n.e("330316"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("793716"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("221856"),
                    n.e("958038"),
                    n.e("18387"),
                    n.e("576909"),
                    n.e("45594"),
                    n.e("406174"),
                    n.e("708757"),
                    n.e("993103"),
                    n.e("585968"),
                    n.e("393336"),
                    n.e("481647"),
                    n.e("776273"),
                    n.e("428367"),
                    n.e("776602"),
                    n.e("811133"),
                    n.e("407170"),
                    n.e("140402"),
                    n.e("811310"),
                    n.e("21921"),
                    n.e("572963"),
                    n.e("307575"),
                    n.e("391763"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("521930"),
                    n.e("393766"),
                    n.e("913823"),
                    n.e("571210"),
                    n.e("53102"),
                    n.e("331549"),
                    n.e("139970"),
                    n.e("676418"),
                    n.e("875842"),
                    n.e("940258"),
                    n.e("198329"),
                    n.e("858164"),
                    n.e("292583"),
                    n.e("930233"),
                    n.e("586127"),
                    n.e("427032"),
                    n.e("166495"),
                    n.e("844841"),
                    n.e("401518"),
                    n.e("221200"),
                    n.e("9205"),
                    n.e("308555"),
                    n.e("25949"),
                    n.e("88342"),
                    n.e("323354"),
                    n.e("146070"),
                    n.e("88599"),
                    n.e("836863"),
                    n.e("472789"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("807936"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("171273"),
                    n.e("311802"),
                    n.e("437065"),
                    n.e("179049"),
                    n.e("698965"),
                    n.e("709640"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("989088"),
                    n.e("952548"),
                    n.e("470068"),
                    n.e("817989"),
                    n.e("931319"),
                    n.e("37977"),
                    n.e("720590"),
                    n.e("691671"),
                    n.e("298408"),
                    n.e("147626"),
                    n.e("803434"),
                    n.e("613867"),
                    n.e("979483"),
                    n.e("553984"),
                    n.e("943780"),
                    n.e("203589"),
                    n.e("174630"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("31267"),
                    n.e("480830"),
                    n.e("451224"),
                    n.e("179745"),
                    n.e("448948"),
                    n.e("375767"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("692215"),
                    n.e("886246"),
                    n.e("945413"),
                    n.e("235313"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("588070"),
                    n.e("859546"),
                    n.e("486672"),
                    n.e("75029"),
                    n.e("963244"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("608032"),
                    n.e("523276"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("477970"),
                    n.e("868214"),
                    n.e("164776"),
                    n.e("902564"),
                    n.e("371477"),
                    n.e("67878"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("91450"),
                    n.e("795752"),
                    n.e("803332"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("741678"),
                    n.e("772401"),
                    n.e("852617"),
                    n.e("102698"),
                    n.e("204744"),
                    n.e("36227"),
                    n.e("386317"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("948720"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("886243"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("282783"),
                    n.e("432209"),
                    n.e("10039"),
                    n.e("305557"),
                    n.e("859991"),
                    n.e("729963"),
                    n.e("368062"),
                    n.e("793438"),
                    n.e("709371"),
                    n.e("830938"),
                    n.e("310235"),
                    n.e("392075"),
                    n.e("174016"),
                    n.e("844780"),
                    n.e("852557"),
                    n.e("987478"),
                    n.e("790417"),
                    n.e("160920"),
                    n.e("535321"),
                    n.e("436564"),
                    n.e("603998"),
                    n.e("939171"),
                    n.e("699292"),
                    n.e("50097"),
                    n.e("754982"),
                    n.e("692513"),
                    n.e("550033"),
                    n.e("883952"),
                    n.e("252229"),
                    n.e("229666"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("820930"),
                    n.e("159957"),
                    n.e("26001"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("838056"),
                    n.e("708536"),
                    n.e("120379"),
                    n.e("457458"),
                    n.e("36877"),
                    n.e("824547"),
                    n.e("203930"),
                    n.e("896804"),
                    n.e("93461"),
                    n.e("903663"),
                    n.e("295998"),
                    n.e("508829"),
                    n.e("275133"),
                    n.e("819193"),
                    n.e("480945"),
                    n.e("201243"),
                    n.e("228850"),
                    n.e("897073"),
                    n.e("78601"),
                    n.e("190779"),
                    n.e("215920"),
                    n.e("342234"),
                    n.e("81189"),
                    n.e("496268"),
                    n.e("513992"),
                    n.e("200203"),
                    n.e("904774"),
                    n.e("489523"),
                    n.e("249629"),
                    n.e("726294"),
                    n.e("780407"),
                    n.e("574678"),
                    n.e("267255"),
                    n.e("829260"),
                    n.e("781949"),
                    n.e("321455"),
                    n.e("98972"),
                    n.e("967279"),
                    n.e("127659"),
                    n.e("734546"),
                    n.e("327198"),
                    n.e("806295"),
                    n.e("341701"),
                    n.e("66580"),
                    n.e("504098"),
                    n.e("176911"),
                    n.e("840985"),
                    n.e("468083"),
                    n.e("548730"),
                    n.e("871467"),
                    n.e("825947"),
                    n.e("132737"),
                    n.e("51892"),
                    n.e("841838"),
                    n.e("549837"),
                    n.e("283230"),
                    n.e("431649"),
                    n.e("139103"),
                    n.e("760989"),
                    n.e("225612"),
                    n.e("303710"),
                    n.e("860003"),
                    n.e("949013"),
                    n.e("276814"),
                    n.e("137937"),
                    n.e("33448"),
                    n.e("79216"),
                    n.e("146149"),
                    n.e("396325"),
                    n.e("645830"),
                    n.e("808979"),
                    n.e("733771"),
                    n.e("482178"),
                    n.e("238260"),
                    n.e("946039"),
                    n.e("995602"),
                    n.e("816589"),
                    n.e("993616"),
                    n.e("512162"),
                    n.e("866008"),
                    n.e("544901"),
                    n.e("925501"),
                    n.e("929569"),
                    n.e("896480"),
                    n.e("986300"),
                    n.e("479006"),
                    n.e("138733"),
                    n.e("983947"),
                    n.e("944727"),
                    n.e("705871"),
                    n.e("527462"),
                    n.e("501888"),
                    n.e("186546"),
                    n.e("322455"),
                    n.e("960816"),
                    n.e("168031"),
                    n.e("347430"),
                    n.e("597162"),
                    n.e("271203"),
                    n.e("175284"),
                    n.e("384820"),
                    n.e("966598"),
                    n.e("506627"),
                    n.e("443256"),
                    n.e("360536"),
                    n.e("864926"),
                    n.e("228011"),
                    n.e("373566"),
                    n.e("407408"),
                    n.e("846327"),
                    n.e("815057"),
                    n.e("787462"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("462318"),
                    n.e("470556"),
                    n.e("313052"),
                    n.e("450541"),
                    n.e("647999"),
                    n.e("337886"),
                    n.e("46416"),
                    n.e("15622"),
                    n.e("61750"),
                    n.e("195782"),
                    n.e("483518"),
                    n.e("531997"),
                    n.e("798384"),
                    n.e("986629"),
                    n.e("113582"),
                    n.e("49111"),
                    n.e("124564"),
                    n.e("666601"),
                    n.e("754876"),
                    n.e("505340"),
                    n.e("639721"),
                    n.e("419631"),
                    n.e("82384"),
                    n.e("876892"),
                    n.e("816799"),
                    n.e("852694"),
                    n.e("360324"),
                    n.e("632482"),
                    n.e("162883"),
                    n.e("540976"),
                    n.e("85216"),
                    n.e("883922"),
                    n.e("649351"),
                    n.e("483102"),
                    n.e("902552"),
                    n.e("580890"),
                    n.e("689588"),
                    n.e("524084"),
                    n.e("44264"),
                    n.e("444790"),
                    n.e("87641"),
                    n.e("874913"),
                    n.e("435476"),
                    n.e("665807"),
                    n.e("258327"),
                    n.e("214451"),
                    n.e("407755"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("384357"),
                    n.e("233049"),
                    n.e("443184"),
                    n.e("821403"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, a.jsx)(e, { ...t, onClose: T.Z_, onInteraction: (0, et.s)("UserSettingsMenu", P.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, et.s)("AudioDeviceMenu", P.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, T.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, is.d)({ location: "Account" });
                    return (0, a.jsx)(O.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: T.Z_,
                            renderInputDevices: !0,
                            renderInputProfiles: n.length > 0,
                            renderInputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
                };
            });
    };
    handleOutputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, T.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () =>
                    (0, a.jsx)(O.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: T.Z_,
                            renderOutputDevices: !0,
                            renderOutputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
        this.setState({
            hoveringOnMute: !0,
            shouldShowSpeakingWhileMutedTooltip: !1,
            shouldShowSpeakingWhilePTTTooltip: !1,
        }),
            this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop();
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop();
    };
    dismissSpeakingWhilePTTTooltip = () => {
        this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop();
    };
    dismissTooltips = () => {
        this.props.onDismissDeviceChangedTooltip?.(),
            this.props.dismissPTTJoinTooltip?.(),
            this.dismissSpeakingWhileMutedTooltip(),
            this.dismissSpeakingWhilePTTTooltip();
    };
    handleOccludedChanged = () => {
        let { occluded: e } = this.props;
        e &&
            this.setState({
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                shouldShowSpeakingWhilePTTTooltip: !1,
            });
    };
    handleSpeakingWhileMutedChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhileMuted: i,
                occluded: l,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lP;
        i
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(lk, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleSpeakingWhilePTTChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhilePTTInactive: i,
                occluded: l,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? r ||
              e ||
              t ||
              n ||
              l ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(lk, () =>
                          this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop());
    };
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: i,
                status: l,
                userTag: s,
                voiceChannel: r,
            } = this.props;
        if (null == i) return null;
        if ((0, b.A)({ activities: t, status: l, applicationStream: n, voiceChannel: r }))
            return (0, a.jsxs)(k.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, a.jsx)(v.A, { children: na.Ay.humanizeStatus(l) }),
                    (0, a.jsx)(N.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lR.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tC.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, a.jsxs)(k.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(v.A, { children: na.Ay.humanizeStatus(l) }),
                      (0, a.jsx)(eo.A, { activity: o, emojiClassName: lR.Zg, className: lR.WO }),
                  ],
              })
            : null != l && l !== tC.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, a.jsx)(k.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, a.jsx)(w, { text: na.Ay.humanizeStatus(l) }),
                })
              : s;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)("div", {
                          className: lR.eW,
                          children: (0, a.jsx)(iM.A, {
                              className: o()({ [lR.e8]: null != e }),
                              children: (0, a.jsx)(eh.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? eu.G.ANIMATED : eu.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, a.jsx)("div", {
                          className: lR.XP,
                          children: (0, a.jsx)(iy.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { badgeDirectoryNuxPopoverVariant: t, currentUser: n, dismissibleContents: i } = this.props;
        return null == n
            ? null
            : (0, a.jsx)(i8, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: i.avatar,
                  children: (0, a.jsx)(lD, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: l } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(E.sk, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: o()(lR.kL, { [lR.UG]: null != n, [lR.bc]: !i, [lR.G5]: l }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(er.A, { nameplate: t, hovered: s, placement: es.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(lG, {
                                          ...this.props,
                                          ...this.state,
                                          accountContainerRef: this.containerRef,
                                          handleMouseEnterMute: this.handleMouseEnterMute,
                                          handleMouseLeaveMute: this.handleMouseLeaveMute,
                                          handleToggleSelfMute: this.handleToggleSelfMute,
                                          handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                          handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                          handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                          handleOpenAccountSettings: this.handleOpenAccountSettings,
                                          handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu,
                                          dismissTooltips: this.dismissTooltips,
                                      }),
                                  ],
                              }),
                      }),
                      (0, a.jsx)(eM, {}),
                  ],
              });
    }
}
function lG(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: r,
            serverDeaf: o,
            suppress: d,
            shouldShowSpeakingWhileMutedTooltip: c,
            shouldShowSpeakingWhilePTTTooltip: u,
            webBuildOverride: h,
            handleMouseEnterMute: m,
            handleMouseLeaveMute: p,
            handleToggleSelfDeaf: g,
            handleToggleSelfMute: f,
            handleInputAudioContextMenu: A,
            handleOutputAudioContextMenu: x,
            handleOpenAccountSettings: v,
            handleOpenSettingsContextMenu: E,
            dismissibleContents: C,
            occluded: T,
            nameplate: _,
            accountContainerRef: S,
            deviceChangedTooltipType: I,
            shouldShowPTTJoinTooltip: j = !1,
            dismissTooltips: b,
            speaking: N,
        } = e,
        y = (0, ea.K)(_);
    function M() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, a.jsx)(lM, {
            webBuildOverride: h,
            onClick: v,
            onContextMenu: E,
            dismissibleContents: [...C.settings, ...e],
            iconForeground: null != _ ? lR.t4 : void 0,
            nameplate: _,
        });
    }
    return (0, a.jsxs)("div", {
        className: lR.Uo,
        style: y,
        children: [
            (0, a.jsx)(lx, {
                accountContainerRef: S,
                selfMute: n,
                serverMute: r,
                suppress: d,
                awaitingRemote: l,
                onMouseEnter: m,
                onMouseLeave: p,
                onClick: f,
                onContextMenu: A,
                iconForeground: null != _ ? lR.t4 : void 0,
                nameplate: _,
                shouldShowSpeakingWhileMutedTooltip: c,
                shouldShowInputDeviceChangedTooltip: !c && "input" === I,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: j,
                dismissTooltips: b,
                speaking: N,
            }),
            (0, a.jsx)(ls, {
                selfDeaf: t,
                serverDeaf: o,
                onClick: g,
                onContextMenu: x,
                awaitingRemote: l,
                iconForeground: null != _ ? lR.t4 : void 0,
                nameplate: _,
                shouldShowOutputDeviceChangedTooltip: "output" === I,
                dismissTooltips: b,
            }),
            null != i
                ? (0, a.jsx)(s.Suspense, { fallback: M(), children: (0, a.jsx)(i, { occluded: T, children: M }) })
                : M(),
        ],
    });
}
function lF(e) {
    let t = (0, h.bG)([ic.A], () => null != ic.A.getChannelId()),
        n = (0, eR.Py)(e),
        i = s.useRef(new p.Ep()),
        [l, a] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(lL, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = s.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, I.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: l, dismissTooltip: r }
    );
}
function lV() {
    let e = (0, h.bG)([nR.default], () => nR.default.getCurrentUser()),
        t = (0, h.bG)([nZ.default], () => nZ.default.getId()),
        {
            activities: n,
            streaming: i,
            status: l,
        } = (0, h.cf)([n$.A], () => {
            let e = n$.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tC.$pd.STREAMING;
                    }),
                status: n$.A.getStatus(),
            };
        }),
        r = (0, h.bG)([iE.A], () => iE.A.getAnyStreamForUser(t)),
        o = (0, S.A)({ userId: t }),
        d = (0, h.bG)([iA.A], () => iA.A.getVoiceVolume(t)),
        u = na.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, h.bG)([ic.A, iC.A], () => {
            let e = ic.A.getChannelId();
            return null != e ? iC.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: A, suppress: x } = (0, io.A)(g),
        { selfDeaf: v, deaf: E } = (0, ir.A)(g),
        T = (0, h.bG)([Y.A], () => ((0, $.kK)() ? Y.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        _ = (0, h.bG)([id.Ay], () => id.Ay.getSpeakingWhileMuted()),
        j = (0, h.bG)([X.A], () => X.A.isFullscreenInContext()),
        b = (0, h.bG)([i_.A], () => i_.A.hasLayers()),
        N = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || b || ib.P.isDisallowPopupsSet() || j,
        y = (0, h.bG)([em.default], () => null != em.default.getAwaitingRemoteSessionInfo()),
        M = (0, h.bG)([iS.A], () => iS.A.getGuildId()),
        R = e?.avatarDecoration,
        w = (0, en.A)(R),
        k = na.Ay.useName(e) ?? "",
        { analyticsLocations: G } = (0, O.Ay)(P.A.ACCOUNT),
        V = (0, el.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, ie.c9)(),
        B = (0, h.bG)([it.A, nR.default, iT.A], () => {
            let e,
                t = it.A.getSyncingWith(),
                n = it.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = c()(Array.from(iT.A.getParty(e) ?? []))
                        .map((e) => nR.default.getUser(e))
                        .filter(n_.Vq)
                        .value()),
                i.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        z = (0, ii.lX)("AccountCoachmark"),
        K = (0, ed.ux)("AccountCoachmark"),
        q = (0, L.VV)({ location: "AccountCoachmark" }),
        J = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            s.useEffect(() => {
                null != t && n && !U.Ay.hasCatalogFor(t) && (0, D.RS)(t);
            }, [t, n]);
            let i = (0, h.bG)([U.Ay], () => null != t && U.Ay.hasCatalogFor(t), [t]),
                l = (0, h.bG)(
                    [U.Ay],
                    () => (null != t ? U.Ay.getBadges(t).filter((e) => Z.sC.has(e.badge_id) && e.owned).length : 0),
                    [t],
                ),
                a = (0, h.yK)(
                    [U.Ay],
                    () =>
                        null != t
                            ? (function (e) {
                                  let t = new Map(e.map((e) => [e.badge_id, e])),
                                      n = [];
                                  for (let e of F) {
                                      let i = t.get(e);
                                      if (i?.owned !== !0 || null == i.current_tier) continue;
                                      let l = i.tiers.findIndex((e) => e.key === i.current_tier);
                                      if (-1 === l) continue;
                                      let a = i.tiers[l],
                                          s = a?.complex_icon_static_url ?? a?.simple_icon_url;
                                      null != s && n.push({ iconUrl: s, tierIndex: l });
                                  }
                                  return n
                                      .sort((e, t) => t.tierIndex - e.tierIndex)
                                      .slice(0, 3)
                                      .map((e) => e.iconUrl);
                              })(U.Ay.getBadges(t))
                            : [],
                    [t],
                );
            return n && null != t && i
                ? l > 0
                    ? { variant: "progress", newBadgeCount: l, badgeIconUrls: a }
                    : { variant: "no-progress" }
                : null;
        })({ currentUserId: e?.id, enabled: q });
    !N &&
        (K && W.avatar.push(m.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != J && W.avatar.push(m.M.BADGE_DIRECTORY_NUX_POPOVER),
        z && W.settings.push(m.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: ee } = lF(ih.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: ei } = lF(ih.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ea, dismissTooltip: es } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, h.bG)([id.Ay], () => id.Ay.getMode() === ih.TB.PUSH_TO_TALK),
                i = (0, h.bG)(
                    [ic.A],
                    () => null != ic.A.getChannelId() && (ic.A.getDuration() ?? Number.MAX_VALUE) < im,
                ),
                [l, a] = s.useState(!1),
                { showPTTJoinTooltip: r } = iu.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = s.useRef(new p.Ep()),
                d = s.useRef(new p.Ep());
            s.useEffect(() => {
                if (i && n && !e) {
                    if ((iu.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        d.current.start(ip, () => {
                            t(!1);
                        }),
                        o.current.start(im, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, r, e]);
            let c = s.useCallback(() => {
                a(!1), o.current.stop();
            }, []);
            return (
                (0, I.l0)(() => {
                    o.current.stop(), d.current.stop();
                }),
                { shouldShowTooltip: l, dismissTooltip: c }
            );
        })(),
        er = (function () {
            let { showPTTSpeakingIndicator: e } = iu.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = s.useState(!1),
                i = (0, h.bG)([id.Ay], () => id.Ay.getMode() === ih.TB.PUSH_TO_TALK),
                l = (0, h.bG)([ic.A], () => ic.A.getRTCConnectionId()),
                a = (0, h.bG)([id.Ay], () => {
                    let e = id.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < iv;
                }),
                r = s.useRef(new p.Ep());
            return (
                s.useEffect(() => {
                    n(!1);
                }, [l]),
                s.useEffect(() => {
                    let t = 0,
                        s = r.current;
                    function o(e, i) {
                        let l = (i & ih.ME.VOICE) === ih.ME.VOICE,
                            a = iA.A.isCurrentUserPTTActive();
                        l && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              s.start(ix, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != l && id.Ay.getMediaEngine().on(ig.bg.VoiceActivity, o),
                        () => {
                            id.Ay.getMediaEngine().removeListener(ig.bg.VoiceActivity, o), s.stop();
                        }
                    );
                }, [e, i, a, l]),
                t
            );
        })(),
        eo = s.useMemo(() => (Q ? "input" : et ? "output" : void 0), [Q, et]),
        ec = s.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        ee();
                        break;
                    case "output":
                        ei();
                }
            },
            [ee, ei],
        );
    return (0, a.jsx)(O.f5, {
        value: G,
        children: (0, a.jsx)(lU, {
            currentUser: e,
            username: k,
            activities: n,
            applicationStream: r,
            voiceChannel: g,
            dismissibleContents: W,
            badgeDirectoryNuxPopoverVariant: J,
            userTag: u,
            occluded: N,
            selfDeaf: v,
            selfMute: A,
            serverDeaf: E,
            serverMute: f,
            speaking: o,
            voiceDb: d,
            speakingWhileMuted: _,
            speakingWhilePTTInactive: er,
            status: l,
            streaming: i,
            suppress: x,
            webBuildOverride: T,
            awaitingRemote: y,
            nameplate: V,
            selectedGuildId: M,
            avatarDecoration: w,
            isQuestBarEmpty: H,
            isListenAlongVisible: B,
            deviceChangedTooltipType: eo,
            onDismissDeviceChangedTooltip: () => ec(eo),
            shouldShowPTTJoinTooltip: ea,
            dismissPTTJoinTooltip: es,
        }),
    });
}
