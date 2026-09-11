n.d(t, { A: () => u, o: () => a });
var l = n(477900),
    r = n(582128),
    i = n(461782);
function a(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: l } = r.useContext(i.k3);
    return {
        preventIdle: r.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: r.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: l,
    };
}
function u(e) {
    let { children: t, className: n } = e,
        { preventIdle: i, allowIdle: u } = a("interact-hover"),
        { preventIdle: s, allowIdle: o } = a("interact-focus");
    r.useEffect(
        () => () => {
            (u(), o());
        },
        [u, o],
    );
    let c = r.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || o();
        },
        [o],
    );
    return (0, l.jsx)("div", { className: n, onMouseEnter: i, onMouseLeave: u, onFocus: s, onBlur: c, children: t });
}
