t.d(s, { Z: () => u, b: () => d });
var n = t(228366),
    l = t(287809),
    i = t(249203),
    a = t(695904);
function r(e) {
    return e !== l.default.getCurrentUser()?.id && null != (0, a.aS)();
}
function u(e) {
    r(e) && n.h.dispatch({ type: "PROFILE_READ_STATE_MARK_VIEWED", userId: e });
}
function d(e) {
    r(e) && null == i.A.getEntry(e) && n.h.dispatch({ type: "PROFILE_READ_STATE_SEED_VIEWED", userId: e });
}
