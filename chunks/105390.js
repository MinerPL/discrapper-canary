i.d(e, { Ag: () => O, MA: () => f, fY: () => S });
var r = i(477900),
    l = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(85463),
    a = i(406810),
    c = i(834730),
    u = i(866665),
    d = i(508770),
    p = i(496431),
    x = i(58703),
    g = i(158045),
    h = i(236056),
    v = i(872725),
    m = i(732280),
    N = i(99462),
    b = i(202541),
    j = i(375708),
    T = i(432458);
function A(t) {
    let {
            isTabSelected: e,
            expiresAt: i,
            badgeCopy: n,
            className: d,
            tooltipTextOverride: g,
            tooltipPosition: h,
            hideTooltip: v = !1,
        } = t,
        m = (0, s.N)(),
        N = l.useMemo(() => Date.parse(i), [i]),
        b = (0, p.A)(N, 6e4);
    if (Object.values(b).every((t) => 0 === t)) return null;
    let A = (0, r.jsxs)("div", {
        className: o()(T.Fg, T.C8, d, { [T.WO]: e }),
        children: [
            (0, r.jsx)(a.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(c.E, { variant: m, color: "text-strong", className: T.a7, children: n }),
        ],
    });
    return v
        ? A
        : (0, r.jsx)(u.m, {
              text: null != g ? g : (0, x.uN)(b, { days: j.t.qVGNkU, hours: j.t.wyg9a9, minutes: j.t.IzmIlV }),
              position: null != h ? h : "top",
              children: A,
          });
}
function O(t) {
    let { isTabSelected: e, trialOffer: i, badgeStyle: l } = t,
        n = (0, m.V)()?.subscriptionTrial,
        o = (0, g.tS)({ intervalType: n?.interval, intervalCount: n?.intervalCount }),
        s = i.trialId === b.Tt,
        a = (0, N.Fu)(i);
    return (0, r.jsx)(f, {
        isTabSelected: e,
        badgeCopy: o,
        offerExpiresAt: i.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: s,
        badgeStyle: l,
    });
}
function S(t) {
    let { isTabSelected: e, userDiscount: i, includesAmountOff: l, badgeStyle: n } = t,
        o = j.intl.formatToPlainString(j.t.iiLbvu, { percent: i.discount.amount }),
        s = l ? o : j.intl.string(j.t["/DTtr6"]),
        a = i.expiresAt?.toISOString() ?? null,
        c = (0, N.__)(i);
    return (0, r.jsx)(f, {
        isTabSelected: e,
        badgeCopy: s,
        offerExpiresAt: a,
        tooltipTextOverride: c,
        tooltipPosition: "right",
        badgeStyle: n,
    });
}
function f(t) {
    let {
            isTabSelected: e,
            badgeCopy: i,
            offerExpiresAt: l,
            tooltipTextOverride: n,
            tooltipPosition: a,
            hideTooltip: u,
            badgeStyle: p,
        } = t,
        x = (0, s.N)();
    return null != l
        ? (0, r.jsx)(A, {
              expiresAt: l,
              isTabSelected: e,
              badgeCopy: i,
              tooltipTextOverride: n,
              tooltipPosition: a,
              hideTooltip: u,
          })
        : p === h.v.GLOWING
          ? (0, r.jsx)(v.A, {
                glowing: !0,
                fit: "cover",
                glowAmount: 1,
                blurAmount: 4,
                hueRotate: 25,
                cardStyle: { background: "transparent", border: "none" },
                children: (0, r.jsx)(d.E, { type: { text: i }, variant: "expressive" }),
            })
          : (0, r.jsx)("div", {
                className: o()(T.Fg, T.AT),
                children: (0, r.jsx)(c.E, { variant: x, className: T.md, children: i }),
            });
}
