l.d(t, { A: () => p });
var n = l(477900);
l(582128);
var a = l(17928),
    r = l(866665),
    i = l(408278),
    s = l(86147),
    o = l(729475),
    u = l(91242),
    d = l(869146),
    c = l(475815),
    m = l(533140),
    f = l(985451),
    h = l(652215),
    x = l(165610),
    g = l(375708);
function p(e) {
    let { frame: t, controlProjectId: l } = e,
        p = (0, m.V0)(t?.id ?? null),
        v = (0, f.o4)(l),
        j = (0, a.bG)(
            [d.A, u.A],
            () => null != t && d.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT) && u.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, x.x1)(t) || j || v) return null;
    let b = (0, m.Uv)(t.id);
    if (null == b || !(0, c.Ub)(b)) return null;
    let y = g.intl.string(p ? g.t.Z7MyNB : g.t.OIDkcp);
    return (0, n.jsx)(r.m, {
        text: y,
        ariaHidden: !0,
        children: (0, n.jsx)(i.K, {
            icon: p ? s.z : o.T,
            size: "sm",
            variant: "icon-only",
            "aria-label": y,
            "aria-pressed": p,
            onClick: () => (0, m.w4)(t.id),
        }),
    });
}
