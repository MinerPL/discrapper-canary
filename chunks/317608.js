a.d(t, { A: () => o });
var l = a(477900),
    s = a(582128),
    r = a(333007),
    i = a(649248);
function n(e) {
    return i.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: a, className: o, overlay: d } = e,
        u = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = u.current;
        if (null != e)
            return (
                i.A.registerFrameTarget(t, e, a),
                () => {
                    i.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let c = s.useSyncExternalStore(n, () => i.A.getPoolEntry(t)?.overlay ?? null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: u, className: o, style: { pointerEvents: "none" } }),
            null != d && null != c ? (0, r.createPortal)(d, c) : null,
        ],
    });
}
