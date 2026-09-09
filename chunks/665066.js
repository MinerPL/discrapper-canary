let t;
_.d(E, { Wx: () => a, g0: () => C, qC: () => r });
var u,
    i = _(612200),
    c = _(323073),
    l = _(398884),
    A = _(772366),
    S = _(207560),
    e = _(652215),
    o = _(204925),
    a =
        (((u = {}).PROCEED = "PROCEED"),
        (u.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (u.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        u);
function r(n) {
    let { guild: E, isMember: _, onConfirm: u } = n;
    return null != t && null != E && !_ && !!(0, c.zS)(E) && !!(0, S.u0)() && t({ onConfirm: u });
}
function G(n) {
    return null != n && (0, l.Sn)();
}
function O(n) {
    (0, A.A)({
        analyticsSource: { page: e.liQ.INVITE_EMBED },
        analyticsLocation: { page: e.liQ.INVITE_EMBED, section: e.JJy.GUILD_CAP_UPSELL_MODAL },
        analyticsLocations: n,
    });
}
function C(n) {
    let { guildId: E, guild: _, isMember: t, analyticsLocations: u, onGateConfirm: l } = n;
    return r({
        guild: _,
        isMember: t,
        onConfirm: function () {
            G(E) ? O(u) : l();
        },
    })
        ? "AGE_GATE_SHOWN"
        : null != _ && !t && (0, c.xq)() && (0, c.zS)(_)
          ? ((0, i.yO)(o.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
          : G(E)
            ? (O(u), "GUILD_CAP_SHOWN")
            : "PROCEED";
}
