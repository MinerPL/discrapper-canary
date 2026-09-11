r.d(t, { A: () => o });
var i = r(582128),
    n = r(17928),
    l = r(889227),
    a = r(994500),
    s = r(354670),
    c = r(378135),
    d = r(202541);
function o() {
    let e = (0, c.k)(d.Dw),
        t = (0, n.bG)([s.A], () => s.A.getReferrer(e?.trialId)),
        r = (0, n.bG)([a.A], () => null == t || a.A.isBlockedOrIgnored(t.id));
    return i.useMemo(() => (r || null == t ? null : new l.A(t)), [t, r]);
}
