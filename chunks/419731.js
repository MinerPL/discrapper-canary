function i(t) {
    if (null == t) return null;
    let e = Date.parse(t);
    return Number.isNaN(e) ? null : e;
}
function n(t, e) {
    let l = i(t);
    return null != l && null != e && l > e;
}
function r(t, e) {
    if (null == e) return !1;
    let l = i(t?.updated_at);
    return null != l && l > e.lastViewedAt;
}
l.d(e, { ds: () => r, f3: () => n });
