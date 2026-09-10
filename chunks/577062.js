t.d(n, { A: () => A });
var l = t(477900),
    i = t(582128),
    s = t(523875),
    a = t(666654),
    r = t(688810),
    o = t(980923),
    c = t(384059),
    u = t(204651),
    d = t(375708);
function A(e) {
    let {
            selfMute: n,
            serverMute: t,
            suppress: A,
            centerButton: h = !1,
            awaitingRemote: m,
            onMouseEnter: C,
            onMouseLeave: E,
            onClick: p,
            ...g
        } = e,
        { parentAnalyticsLocation: f } = (0, r.Ay)(),
        I = n || t || A,
        x = h ? u.l : u.A,
        v = (0, o.A)(n, t, A, m),
        { events: T, play: _, Component: j } = (0, s.L)(I ? "unmute" : "mute"),
        N = t || A ? a.O : j;
    return (
        i.useEffect(() => () => _(), [_, I]),
        (0, l.jsx)(x, {
            ...g,
            iconComponent: N,
            isTrayButton: !0,
            caretColor: I ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: I ? "red" : void 0,
            label: v,
            onMouseEnter: (e) => {
                (C?.(e), T.onMouseEnter());
            },
            onMouseLeave: (e) => {
                (E?.(e), T.onMouseLeave());
            },
            onClick: (e) => {
                (p?.(e), (0, c.X)(f, c.O.MIC, n));
            },
        })
    );
}
