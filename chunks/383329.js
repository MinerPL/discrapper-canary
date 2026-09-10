t.d(l, { R: () => f });
var n = t(582128),
    a = t(435558),
    r = t.n(a),
    u = t(929396),
    o = t(471677),
    s = t(321108),
    c = t(735321),
    i = t(403362),
    m = t(282435);
let d = [];
function h(e) {
    return m.jN.get(e) ?? 0;
}
function f() {
    let { query: e, selectedGameIds: l } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = n.useMemo(() => [...new Set([...m.sx, ...(l ?? d)])], [l]),
        a = (0, s.A)(t),
        f = n.useMemo(() => new Map(a.map((e) => [e.id, e])), [a]),
        p = n.useMemo(
            () =>
                r()(m.sx)
                    .map((e) => f.get(e))
                    .filter(i.Vq)
                    .filter((e) => (0, c.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: l } = e;
                        return h(l);
                    })
                    .reverse()
                    .value(),
            [f],
        ),
        v = n.useCallback((e, l) => h(l.item.value) - h(e.item.value), []),
        b = n.useMemo(() => ({ baseSort: v, keys: ["label"] }), [v]),
        g = (e?.trim().length ?? 0) > 0,
        { results: x } = (0, o.J$)(e ?? null),
        k = n.useMemo(() => new Set((x ?? []).filter((e) => (0, u.qS)(e)).map((e) => e.id)), [x]),
        y = n.useMemo(
            () => [
                ...(x ?? []).filter((e) => k.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(l ?? d).filter((e) => !k.has(e)).map((e) => ({ id: e, value: e, label: f.get(e)?.name ?? "" })),
            ],
            [x, k, l, f],
        ),
        M = n.useCallback((e) => e.filter((e) => k.has(e.value)), [k]);
    return { options: g ? y : p, matchSorterOptions: b, customMatchSorter: g ? M : void 0 };
}
