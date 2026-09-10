n.d(t, { l: () => N, A: () => I });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(319354),
    u = n(84571),
    o = n(862482),
    c = n(866665),
    d = n(939249),
    f = n(241524),
    h = n(147925),
    p = n(461782),
    m = n(447404),
    g = n(17928),
    y = n(462887),
    E = n(736653),
    v = n(198052),
    C = n(309010),
    x = n(652215),
    S = n(375708),
    A = n(609142);
function I(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: i,
            onMouseLeave: d,
            onContextMenu: f,
            className: h,
            wrapperClassName: p,
            iconClassName: g,
            iconColor: y = "currentColor",
            iconComponent: E,
            themeable: v = !1,
            disabled: C = !1,
            isActive: x = !1,
            tooltipPosition: S = "top",
            shouldShowTooltip: I = !0,
            forceTooltipOpen: T = !1,
            buttonRef: R,
            grow: N,
            "aria-label": w,
            look: L,
            buttonText: _,
            size: b,
            color: k,
        } = e,
        j = (0, u.O)(t);
    return (0, l.jsx)(m.A, {
        children: (0, l.jsx)(c.m, {
            position: S,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: I,
            forceOpen: T,
            children: (0, l.jsxs)(o.$n, {
                "data-migration-pending": !0,
                look: L ?? o.$n.Looks.BLANK,
                size: b ?? o.$n.Sizes.NONE,
                color: k,
                onKeyDown: (e) => {
                    r?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: i,
                onMouseLeave: d,
                onContextMenu: f ?? void 0,
                onFocus: (e) => {
                    i?.(e);
                },
                onBlur: d,
                disabled: C,
                innerClassName: a()(A.NL, { [A.eq]: null != _ }),
                className: a()({ [A.vu]: x }, h),
                wrapperClassName: p,
                buttonRef: R,
                grow: N,
                "aria-label": w ?? j,
                children: [
                    (0, l.jsx)(E, {
                        size: s.E.md,
                        className: a()(g, { [A.pd]: null == _, [A.IW]: v, [A.vu]: x }),
                        color: y,
                    }),
                    _,
                ],
            }),
        }),
    });
}
let T = {
        disconnect: A.Zf,
        join: A.fj,
        red: A.wv,
        white: A.ON,
        green: A.wL,
        yellow: A.D9,
        primaryDark: A.Zq,
        primaryLight: A.Zq,
        activeLight: A.H3,
        premiumGradient: A.ck,
    },
    R = {
        disconnect: A.Zf,
        join: A.fj,
        red: A.Xr,
        white: A.ON,
        green: A.Vu,
        yellow: A.D9,
        primaryDark: A.Zq,
        primaryLight: A.Zq,
        activeLight: A.H3,
        premiumGradient: A.ck,
    };
function N(e) {
    let t,
        n,
        i,
        {
            ref: s,
            color: u,
            caretColor: o,
            caretAriaLabel: c,
            isActive: N = !1,
            className: w,
            iconClassName: L,
            onPopoutClick: _,
            popoutOpen: b = !1,
            popoutDisabled: k = !1,
            isTrayButton: j,
            applyStyles: O = !1,
            ...D
        } = e,
        P =
            ((t = (0, g.bG)([C.Ay], () => C.Ay.getVoiceChannelId())),
            (n = (0, g.bG)([v.A], () => (null != t ? v.A.getMode(t) : null))),
            (i = (0, E.Ay)()),
            null != u
                ? u
                : n === x._Of.VOICE && (0, y.q)(i)
                  ? N
                      ? "activeLight"
                      : "primaryLight"
                  : N
                    ? "white"
                    : "primaryDark"),
        W = (0, f.A)("(max-width: 456px)"),
        M = r.useRef(null),
        K = r.useContext(p.vG);
    r.useEffect(() => {
        null != M.current && (K ? M.current.pause() : M.current.play());
    }, [K]);
    let V = D.onContextMenu ?? _,
        G = null == _ && !j,
        U = null != _ && !j,
        F = (0, l.jsx)(I, {
            ...D,
            grow: !1,
            onContextMenu: V,
            iconClassName: a()(L, A.LF, G && A.Ns),
            className: a()(W || O ? w : null, N && A.vu, A.wh, R[P], G && A.Sy, j && null != _ && !W && A.hA),
        });
    return W
        ? F
        : (0, l.jsxs)("div", {
              ref: s,
              className: a()(A.re, b && A.q6, w, U && [A.TD, T[P]]),
              children: [
                  F,
                  null != _
                      ? (0, l.jsx)(m.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": c ?? S.intl.string(S.t.PdRCRg),
                                onClick: k ? void 0 : _,
                                className: a()(A.cd, j && A.Ml, R[o ?? P], b && [A.q6, A.vu], k && A.r9),
                                children: (0, l.jsx)(h.A, { className: a()(A.gG, b && A.ho, k && A.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
