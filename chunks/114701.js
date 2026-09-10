(t.r(i), t.d(i, { default: () => h }));
var e = t(477900),
    s = t(582128),
    a = t(812901),
    r = t(317608),
    c = t(378859),
    l = t(723512),
    d = t(206600),
    u = t(165610),
    p = t(375708),
    o = t(728846);
function g(n) {
    let { applicationId: i, channel: t } = n,
        l = s.useMemo(() => ({ type: u.U4.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        { frame: g, state: h } = (0, d.A)({ applicationId: i, surface: l });
    switch (h) {
        case d.n.Launched:
            return (0, e.jsx)(r.A, { frameId: g.id, level: a.A.WithinAppContent, className: o.Z });
        case d.n.RenderingElsewhere:
            return (0, e.jsx)(c.A, { className: o.w, description: p.intl.string(p.t["2KIDX+"]) });
        case d.n.NoApplication:
            return (0, e.jsx)(c.A, { className: o.w, description: p.intl.string(p.t.izggZO) });
        case d.n.DoesNotSupportSurface:
            return (0, e.jsx)(c.A, { className: o.w, description: p.intl.string(p.t["iUWcU/"]) });
        case d.n.Error:
            return (0, e.jsx)(c.A, {
                className: o.w,
                heading: p.intl.string(p.t.VquUff),
                error: p.intl.string(p.t["Sd9D/R"]),
            });
        case d.n.AwaitingLaunch:
        case d.n.Loading:
            return (0, e.jsx)(c.j, { className: o.w });
    }
}
function h(n) {
    let { channel: i } = n,
        t = i.application_id;
    return ((0, l.A)(i), null == t)
        ? (0, e.jsx)(c.A, {
              className: o.w,
              heading: p.intl.string(p.t.tU5fiM),
              description: p.intl.string(p.t.E94mJf),
          })
        : (0, e.jsx)(g, { applicationId: t, channel: i });
}
