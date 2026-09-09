n.r(t), n.d(t, { default: () => eo });
var s = n(477900),
    l = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(333007),
    o = n(43990),
    u = n(604681),
    c = n(761929),
    d = n(97469),
    f = n(17928),
    m = n(761640),
    h = n(734057),
    x = n(309010),
    g = n(652215);
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m.Ay, x.Ay, h.A],
        [t, n, s] = e,
        l = n.getChannelId();
    return t.getSection(l, s.getChannel(l)?.type === g.rbe.DM) !== g.YvQ.FRIENDS;
}
function j() {
    return (0, f.bG)([m.Ay, x.Ay, h.A], () => p([m.Ay, x.Ay, h.A]));
}
var R = n(331322),
    b = n(283973),
    C = n(259730),
    v = n(866665),
    A = n(214947),
    N = n(834730),
    E = n(939249),
    k = n(847374),
    w = n(450030),
    S = n(783977),
    I = n(7689),
    y = n(408278),
    M = n(922016),
    D = n(765671);
n(321073);
var P = n(661531),
    F = n(602853),
    z = n(475825),
    H = n(8285),
    L = n(305866),
    B = n(95477),
    G = n(308528),
    X = n(565860),
    V = n(723690),
    O = n(976860),
    U = n(290863),
    W = n(994500),
    _ = n(287809),
    J = n(682530),
    T = n(375708),
    Z = n(972910);
function q(e) {
    let { friend: t, appendGap: n, closePopout: i } = e,
        [a, o] = (0, l.useState)(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, f.cf)([U.A], () => ({
            status: U.A.getStatus(t.userId),
            isMobile: U.A.isMobileOnline(t.userId),
            isVR: U.A.isVROnline(t.userId),
        }));
    return (0, s.jsx)(E.D, {
        className: r()(Z.Ke, { [Z.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = h.A.getDMFromUserId(t.user.id);
            null != e ? (0, O.pX)(g.BVt.CHANNEL(g.ME, e)) : G.A.openPrivateChannel({ recipientIds: t.user.id }), i?.();
        },
        children: (0, s.jsx)(V.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, s.jsx)(N.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: Z.eF,
        }),
    });
}
function K(e) {
    let { searchResults: t, closePopout: n } = e,
        l = (0, F.r)(P.A.space.SPACE_XS),
        i = (0, F.r)(P.A.space.SPACE_XXS),
        r = 36 + 2 * l,
        a = [t.length];
    return (0, s.jsx)(z.OZ, {
        renderRow: (e) => {
            let { section: l, row: i } = e,
                r = t[i];
            return (0, s.jsx)(q, { friend: r, appendGap: i !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + i),
        sections: a,
        sectionHeight: 18 + i,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, s.jsx)(N.E, {
                className: Z.nw,
                variant: "text-sm/medium",
                children: T.intl.format(T.t.xIWGxu, { count: t.length }),
            });
        },
        className: Z.Xv,
    });
}
function Y() {
    return (0, s.jsxs)("div", {
        className: Z.e7,
        children: [
            (0, s.jsx)(I.MagnifyingGlassIcon, {}),
            (0, s.jsx)(N.E, {
                variant: "text-sm/medium",
                className: Z.n1,
                children: T.intl.string(J.default["0usxBd"]),
            }),
        ],
    });
}
function $() {
    return (0, s.jsxs)("div", {
        className: Z.e7,
        children: [
            (0, s.jsx)(H.R, {}),
            (0, s.jsx)(N.E, { variant: "text-sm/medium", className: Z.n1, children: T.intl.string(J.default.VH2HXW) }),
        ],
    });
}
function Q(e) {
    let { externalQuery: t, closePopout: n } = e,
        i = void 0 !== t,
        [r, a] = (0, l.useState)(""),
        o = (0, X.HI)(i ? t : r),
        u = (0, f.bG)([W.A, _.default], () => {
            if ("" === o) return [];
            let e = W.A.getFriendIDs(),
                t = [];
            return (
                e.forEach((e) => {
                    let n = _.default.getUser(e);
                    if (void 0 === n) return;
                    let s = W.A.getNickname(e),
                        l = [(0, X.HI)(n.username)];
                    null != n.globalName && l.push((0, X.HI)(n.globalName)),
                        null != s && l.push((0, X.HI)(s)),
                        l.some((e) => e.includes(o)) &&
                            t.push({
                                userId: e,
                                user: n,
                                nickname: s,
                                sortName: s?.toLowerCase() ?? n.globalName?.toLowerCase() ?? n.username.toLowerCase(),
                            });
                }),
                t.sort((e, t) => e.sortName.localeCompare(t.sortName)),
                t
            );
        }, [o]);
    return (0, s.jsx)(L.l, {
        children: (0, s.jsxs)("div", {
            className: Z.kL,
            children: [
                !i &&
                    (0, s.jsx)("div", {
                        className: Z.M6,
                        children: (0, s.jsx)(B.k, { placeholder: T.intl.string(T.t.lLDtTK), value: r, onChange: a }),
                    }),
                "" === o
                    ? (0, s.jsx)(Y, {})
                    : u.length > 0
                      ? (0, s.jsx)(K, { searchResults: u, closePopout: n })
                      : (0, s.jsx)($, {}),
            ],
        }),
    });
}
var ee = n(540950);
function et() {
    let e = j(),
        [t, n] = l.useState(!1),
        i = l.useRef(null),
        r = l.useRef(null),
        a = l.useRef(null),
        o = l.useCallback((e) => {
            let { width: t } = e,
                s = r.current?.getBoundingClientRect().width,
                l = a.current?.getBoundingClientRect().width;
            null != t && null != s && null != l && n(t - (s + l) <= 24);
        }, []);
    (0, D.i4)(i, o);
    let c = e
        ? (0, s.jsx)(es, {})
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(en, { compact: t }),
                  (0, s.jsxs)(R.B, {
                      direction: "horizontal",
                      fullWidth: !1,
                      ref: a,
                      children: [
                          (0, s.jsx)(ei, { popoutPosition: "bottom" }),
                          (0, s.jsx)(er, { icon: b.R, label: T.intl.string(J.default.au4mU4) }),
                          (0, s.jsx)(er, {
                              icon: C.E,
                              label: T.intl.string(J.default.JZCSRZ),
                              onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                          }),
                      ],
                  }),
              ],
          });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(en, { ghost: !0, ref: r }),
            (0, s.jsx)(R.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: e ? "center" : "space-between",
                padding: 8,
                className: ee.wx,
                ref: i,
                children: c,
            }),
        ],
    });
}
function en(e) {
    let { compact: t = !1, ghost: n = !1, ref: i } = e,
        a = n ? l.Fragment : v.m,
        o = t
            ? (0, s.jsx)(A.$, { size: "xs", color: "var(--icon-default)" })
            : (0, s.jsx)(N.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: T.intl.string(J.default["7kJd9e"]),
              });
    return (0, s.jsx)(a, {
        text: T.intl.string(J.default["7kJd9e"]),
        children: (0, s.jsx)(E.D, {
            className: r()(ee.Iw, { [ee.qy]: n }),
            "aria-label": T.intl.string(J.default["7kJd9e"]),
            innerRef: i,
            children: (0, s.jsxs)(R.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [o, (0, s.jsx)(k.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function es() {
    let e = l.useRef(null),
        [t, n] = l.useState(!1);
    function i(e) {
        e.preventDefault(), n(!0);
    }
    return (0, s.jsx)(M.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: () => n(!1),
        position: "bottom",
        renderPopout: () => (0, s.jsx)(el, {}),
        children: () =>
            (0, s.jsx)(er, {
                buttonRef: e,
                icon: w.U,
                label: T.intl.string(J.default["Dr/+ku"]),
                onContextMenu: i,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function el() {
    return (0, s.jsxs)(R.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: ee.QG,
        children: [
            (0, s.jsx)(er, { icon: S.R, label: T.intl.string(J.default["i+986w"]), tooltipPosition: "left" }),
            (0, s.jsx)(ei, { popoutPosition: "left", tooltipPosition: "left" }),
            (0, s.jsx)(er, { icon: b.R, label: T.intl.string(J.default.au4mU4), tooltipPosition: "left" }),
        ],
    });
}
function ei(e) {
    let { popoutPosition: t, tooltipPosition: n } = e,
        i = l.useRef(null),
        [r, a] = l.useState(!1);
    function o() {
        a(!1);
    }
    return (0, s.jsx)(M.Y, {
        targetElementRef: i,
        shouldShow: r,
        onRequestClose: o,
        position: t,
        renderPopout: () => (0, s.jsx)(Q, { closePopout: o }),
        children: () =>
            (0, s.jsx)(er, {
                buttonRef: i,
                icon: I.MagnifyingGlassIcon,
                label: T.intl.string(J.default["60M8Ae"]),
                tooltipPosition: n,
                onClick: () => a(!0),
            }),
    });
}
function er(e) {
    let { label: t, onClick: n, tooltipPosition: i, buttonRef: r, ...a } = e,
        o = l.useRef(null),
        u = r ?? o;
    return (0, s.jsx)(v.m, {
        text: t,
        position: i,
        targetElementRef: u,
        anchorRef: u,
        children: (0, s.jsx)(y.K, {
            size: "sm",
            variant: "icon-only",
            "aria-label": t,
            onClick: n,
            buttonRef: u,
            ...a,
        }),
    });
}
var ea = n(45863);
function eo() {
    let e = l.useRef(null),
        t = j(),
        n = l.useRef(!1),
        i = l.useMemo(() => ({ width: p() ? 64 : 280 }), []);
    l.useLayoutEffect(() => {
        null == e.current || n.current || (e.current.style.width = `${t ? 64 : 280}px`);
    }, [t]);
    let f = l.useCallback((e, t) => {
            let n = t <= 200;
            n !== p() && (0, a.flushSync)(() => u.A.setFriendsSidebarCollapsed(n));
        }, []),
        m = l.useCallback(() => {
            n.current = !0;
        }, []),
        h = l.useCallback(() => {
            n.current = !1;
        }, []),
        x = (0, c.A)({
            resizableDomNodeRef: e,
            minDimension: 64,
            maxDimension: 320,
            orientation: c.R.HORIZONTAL_LEFT,
            onElementResize: f,
            onElementResizeStart: m,
            onElementResizeEnd: h,
            throttleDuration: 0,
            getClampedValue: eu,
        }),
        g = (0, d.NC)();
    return (0, s.jsx)(o.N, {
        theme: g,
        children: (t) =>
            (0, s.jsxs)("div", {
                ref: e,
                className: r()(ea.k, t),
                style: i,
                children: [
                    (0, s.jsx)("div", {
                        role: "separator",
                        "aria-orientation": "vertical",
                        "aria-label": T.intl.string(J.default["F3+Xei"]),
                        "aria-valuemin": 64,
                        "aria-valuemax": 320,
                        className: ea.D,
                        onMouseDown: x,
                    }),
                    (0, s.jsx)(et, {}),
                ],
            }),
    });
}
function eu(e) {
    return e <= 200 ? 64 : Math.min(e, 320);
}
