n.d(a, { R: () => p });
var l = n(582128),
    t = n(435558),
    r = n.n(t),
    u = n(929396),
    i = n(471677),
    o = n(321108),
    s = n(735321),
    c = n(403362),
    d = n(282435);
let m = [];
function h(e) {
    return d.jN.get(e) ?? 0;
}
function p() {
    let { query: e, selectedGameIds: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = l.useMemo(() => [...new Set([...d.sx, ...(a ?? m)])], [a]),
        t = (0, o.A)(n),
        p = l.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
        f = l.useMemo(
            () =>
                r()(d.sx)
                    .map((e) => p.get(e))
                    .filter(c.Vq)
                    .filter((e) => (0, s.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return h(a);
                    })
                    .reverse()
                    .value(),
            [p],
        ),
        v = l.useCallback((e, a) => h(a.item.value) - h(e.item.value), []),
        b = l.useMemo(() => ({ baseSort: v, keys: ["label"] }), [v]),
        g = (e?.trim().length ?? 0) > 0,
        { results: x } = (0, i.J$)(e ?? null),
        k = l.useMemo(() => new Set((x ?? []).filter((e) => (0, u.qS)(e)).map((e) => e.id)), [x]),
        y = l.useMemo(
            () => [
                ...(x ?? []).filter((e) => k.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(a ?? m).filter((e) => !k.has(e)).map((e) => ({ id: e, value: e, label: p.get(e)?.name ?? "" })),
            ],
            [x, k, a, p],
        ),
        j = l.useCallback((e) => e.filter((e) => k.has(e.value)), [k]);
    return { options: g ? y : f, matchSorterOptions: b, customMatchSorter: g ? j : void 0 };
}
