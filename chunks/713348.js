t.d(s, { A: () => d });
var n = t(582128),
    l = t(17928),
    i = t(287809),
    a = t(639935),
    r = t(249203),
    u = t(695904);
function d(e) {
    let s = (0, u.bq)(),
        t = (0, l.bG)(
            [r.A, i.default],
            () => null != s && e.id !== i.default.getCurrentUser()?.id && null == r.A.getEntry(e.id),
            [e, s],
        );
    n.useEffect(() => {
        t && (0, a.b)(e.id);
    }, [t, e.id]);
}
