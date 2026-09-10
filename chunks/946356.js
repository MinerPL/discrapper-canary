n.d(r, { A: () => v });
var t = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(86182),
    o = n(77157),
    u = n(875741),
    d = n(486020),
    c = n(101928),
    m = n(920601),
    h = n(939496),
    f = n(52020);
let v = Object.assign(
    l.forwardRef(function (e, r) {
        let {
                user: n,
                displayProfile: l,
                themeType: i,
                profileFrameSkuIdOverride: v,
                className: A,
                innerClassName: C,
                style: y,
                pendingThemeColors: p,
                themeOverride: x,
                children: N,
                isPrivate: b = !1,
                forceShowPremium: j = !1,
                forceUserTheme: T = !1,
            } = e,
            {
                theme: R,
                primaryColor: g,
                secondaryColor: w,
            } = (0, c.A)({ user: n, displayProfile: l, pendingThemeColors: p, isPreview: j, forceUserTheme: T }),
            { profileThemeStyle: I, profileThemeClassName: P } = (0, m.A)({
                theme: x ?? R,
                themeType: i,
                primaryColor: g,
                secondaryColor: w,
                forceUserTheme: T,
            }),
            k = (0, o.A)(void 0 !== v ? v : l?.profileFrame?.skuId),
            { profileFrameStyle: M, profileFrameClassName: _ } = (0, u.A)(k),
            J = (0, d.VI)(l?.banner);
        return (0, t.jsx)("div", {
            className: a()(f.A7, P, _, A, b && f.Gw, J && "has-animated-banner"),
            style: { ...I, ...M, ...y },
            ref: r,
            children: (0, t.jsx)("div", {
                className: a()(f.vW, C),
                children: (0, t.jsx)(s.w, {
                    theme: x ?? R,
                    children: (0, t.jsx)(h.U, {
                        themeType: i,
                        theme: x ?? R,
                        primaryColor: g,
                        secondaryColor: w,
                        userId: n.id,
                        children: N,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: l.forwardRef(function (e, r) {
            let { children: n, className: l } = e;
            return (0, t.jsx)("div", { ref: r, className: a()(f.Lw, l), children: n });
        }),
    },
);
