n.d(t, { T: () => j });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(207119),
    u = n(505124),
    o = n(866665),
    c = n(43990),
    d = n(717421),
    m = n(713608),
    f = n(918715),
    g = n(661531),
    h = n(271520),
    p = n(762555),
    x = n(268378),
    v = n(375708),
    S = n(328115);
function A(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: l,
        isAnimated: i,
        index: d,
        activated: m,
        expansionSpring: f,
        icon: h,
        tooltip: p,
    } = e;
    return (0, r.jsx)(o.m, {
        delay: 300,
        text: p,
        children: (0, r.jsx)(c.N, {
            theme: u.NJ.ONYX,
            children: (e) =>
                (0, r.jsx)(s.animated.div, {
                    className: a()(S.z, e),
                    onMouseEnter: () => l(d),
                    onMouseLeave: () => l(null),
                    style: {
                        left: i ? f.to((e) => t - e) : t,
                        right: n,
                        width: i ? f.to((e) => `${C + 2 * e}px`) : C,
                        height: i ? f.to((e) => `${C + 2 * e}px`) : C,
                    },
                    children: (0, r.jsx)(h, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: m ? g.A.colors.INTERACTIVE_ICON_ACTIVE : g.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
        }),
    });
}
let C = 12,
    b = { tension: 500, friction: 30, clamp: !0 };
function j(e) {
    let [t, n] = l.useState(null),
        i = l.useRef(null),
        [{ expansion: a }, s] = (0, d.z)(() => ({
            expansion: 0,
            config: b,
            onRest: () => {
                null == i.current && n(null);
            },
        })),
        u = l.useCallback(
            (e) => {
                ((i.current = e), null != e ? (n(e), s({ expansion: 4 })) : s({ expansion: 0 }));
            },
            [s],
        ),
        o = h.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        c = l.useMemo(() => (o ? e.filter((e) => null != e.game) : []), [e, o]),
        g = l.useMemo(() => c.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: C, gapPx: 4 })), [c]),
        S = l.useCallback(
            (e, n) => {
                let l,
                    i,
                    s = t === e.index,
                    o = c[e.index];
                if (null == o) return null;
                let d = n > e.leftPx;
                switch (o.game.type) {
                    case p.Q_.MULTIKILL:
                        ((i = v.intl.string(x.default.PMLPER)), (l = m.q));
                        break;
                    case p.Q_.KILL:
                        ((l = m.q), (i = v.intl.string(x.default.fYdqnM)));
                        break;
                    case p.Q_.DEATH:
                        ((l = f.V), (i = v.intl.string(x.default.MhIx41)));
                }
                return null == l || null == i
                    ? null
                    : (0, r.jsx)(A, {
                          ...e,
                          activated: d,
                          gapPx: 4,
                          tooltip: i,
                          expansionSpring: a,
                          setHoveredIndex: u,
                          isAnimated: s,
                          icon: l,
                      });
            },
            [t, c, u, a],
        );
    return { indicators: g, animatingIndex: t, expansionSpring: a, hoverExpansionPx: 4, renderIndicator: S };
}
