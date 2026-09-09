a.d(s, { Hx: () => x, NB: () => d, Xj: () => c, wX: () => o, yW: () => m });
var t,
    i,
    l = a(582128),
    n = a(174459),
    r = a(652215);
let d = "xbox",
    c = "xbox_perks_modal";
var o = (((t = {}).CONNECTION_FOOTER = "xbox_perks_connection_footer"), t),
    x = (((i = {}).CONNECT = "connect"), i);
function m(e) {
    return l.useCallback(
        (s) => {
            n.default.track(r.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, { partner: d, cta_type: s, location_stack: e });
        },
        [e],
    );
}
