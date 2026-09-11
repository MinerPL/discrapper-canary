n.d(t, { C$: () => u, Oh: () => a, vV: () => l });
var i = n(192444),
    r = n(710969),
    s = n(723702),
    o = n(929482);
function u() {
    return i.Se.getConfig({ location: "quest_ios_attribution" }).enabled && (0, s.isIOS)();
}
function a(e, t) {
    return (0, r.vZ)(e, t)?.is_campaign_ios_attribution_enabled === !0;
}
function l(e, t, n) {
    return u() && e && a(t, n) ? (0, o.BU)() : null;
}
