n.d(t, { default: () => M, u: () => p });
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(116833),
    a = n(772707),
    o = n(331322),
    d = n(691885),
    u = n(683071),
    c = n(56562),
    A = n(626584),
    E = n(967198),
    h = n(594061),
    g = n(617617);
function I() {
    return g.A.getDefaultGuildThemePreference() === c.tI.PERSONAL ? c.tI.PERSONAL : c.tI.GUILD;
}
async function m(e, t) {
    let n = t ? c.tI.PERSONAL : c.tI.GUILD;
    (await (0, h.JM)(n), await (0, h.Sh)(e));
}
var _ = n(244696),
    C = n(49999),
    N = n(375708),
    S = n(975366);
let p = "GUILD_THEME_NUX_MODAL",
    T = new A.A("GuildThemeNuxModal");
function M(e) {
    let { guildId: t, markAsDismissed: n, transitionState: A, onClose: h } = e,
        [g, p] = s.useState(I),
        [M, f] = s.useState(null),
        [L, O] = s.useState("init"),
        R = g === c.tI.PERSONAL,
        D = (0, l.bG)([E.A], () => E.A.getGuildId()),
        x = (0, l.bG)(
            [_.A],
            () => {
                let e = _.A.getGuildThemeSnapshot(t);
                return null != e && e.enabled ? (e.themeSettings ?? null) : null;
            },
            [t],
        ),
        G = R ? null : x;
    s.useEffect(() => {
        D !== t && h();
    }, [t, h, D]);
    let U = s.useCallback((e) => {
            (f(null), p(e));
        }, []),
        b = s.useCallback(async () => {
            if ("init" === L) {
                if (D !== t) return void (await h());
                (O("submitting"), f(null));
                try {
                    await m(t, R);
                } catch (e) {
                    (T.error("Failed to save guild theme NUX preference", e), f(N.intl.string(N.t.fEptJP)), O("init"));
                    return;
                }
                (O("submitted"), n(C.i.TAKE_ACTION), await h());
            }
        }, [t, R, n, h, D, L]),
        y = s.useCallback(async () => {
            ("submitted" !== L && n(C.i.USER_DISMISS), await h());
        }, [n, h, L]),
        H = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: N.intl.string(N.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: N.intl.string(N.t.js8y7t) },
            ],
            [],
        ),
        P = R ? N.intl.string(N.t.cvoikF) : N.intl.string(N.t["cY+Oob"]);
    return (0, i.jsx)(a.k, {
        size: "md",
        transitionState: A,
        onClose: y,
        gradientColor: "blue",
        graphic: {
            type: "dynamic",
            component: r.DynamicGraphicComponent.GUILD_THEME_NUX_PREVIEW,
            aspectRatio: "16/9",
            props: { themeSettings: G },
        },
        title: N.intl.string(N.t.Q9zFy9),
        subtitle: N.intl.string(N.t.XLpBLj),
        actions: [
            {
                text: P,
                variant: R ? "secondary" : "primary",
                loading: "submitting" === L,
                disabled: "submitting" === L,
                onClick: b,
            },
        ],
        children: (0, i.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            className: S.r,
            children: [
                (0, i.jsx)(d.l, {
                    selectionMode: "single",
                    options: H,
                    value: g,
                    onSelectionChange: U,
                    fullWidth: !0,
                    label: N.intl.string(N.t.Q7mm4g),
                    hideLabel: !0,
                }),
                R && (0, i.jsx)(u.w, { type: "warning", children: N.intl.string(N.t.tTHQAy) }),
                null != M && (0, i.jsx)(u.w, { type: "critical", children: M }),
            ],
        }),
    });
}
