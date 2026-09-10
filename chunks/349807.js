e.d(n, { A: () => h });
var i = e(477900),
    t = e(477782),
    r = e(582128),
    a = e(16236),
    d = e(93055),
    u = e(17928),
    s = e(181079);
function o(l, n) {
    return l.length === n.length && l.every((l, e) => l.id === n[e].id && l.name === n[e].name);
}
var c = e(375708);
function h(l) {
    let n = (function (l) {
        let n = (0, d.DZ)(),
            e = (0, d.Af)(l.id),
            i = (0, u.bG)([s.A], () => (0, d.m_)(s.A.getFavoriteChannels()), [], o),
            t = e?.id,
            h = r.useCallback(
                (l) => {
                    null != t && (0, a.JD)(t, l);
                },
                [t],
            );
        if (__OVERLAY__ || !n || null == e) return null;
        let b = i
                .filter((l) => null != l.id && l.id !== e.parentId)
                .map((l) => {
                    let { id: n, name: e } = l;
                    return { id: n, label: e };
                }),
            f = null != e.parentId;
        return f || 0 !== b.length
            ? {
                  label: c.intl.string(c.t.FAplms),
                  destinations: f ? [{ id: null, label: c.intl.string(c.t.GSfOoo) }, ...b] : b,
                  perform: h,
              }
            : null;
    })(l);
    if (null == n) return null;
    let { label: e, destinations: h, perform: b } = n,
        f = h.find((l) => null == l.id),
        p = h.filter((l) => null != l.id);
    return (0, i.jsxs)(t.Dr, {
        id: "move-to-category",
        label: e,
        children: [
            null != f &&
                (0, i.jsx)(t.rX, {
                    children: (0, i.jsx)(t.Dr, { id: "favorite-uncategorized", label: f.label, action: () => b(null) }),
                }),
            p.length > 0 &&
                (0, i.jsx)(t.rX, {
                    children: p.map((l) =>
                        (0, i.jsx)(t.Dr, { id: `favorite-${l.id}`, label: l.label, action: () => b(l.id) }, l.id),
                    ),
                }),
        ],
    });
}
