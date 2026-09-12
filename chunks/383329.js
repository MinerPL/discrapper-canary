l.d(a, { R: () => p });
var n = l(582128),
    t = l(435558),
    r = l.n(t),
    u = l(929396),
    i = l(471677),
    o = l(321108),
    s = l(735321),
    c = l(403362),
    d = l(282435);
let m = [];
function h(e) {
    return d.jN.get(e) ?? 0;
}
function p() {
    let { query: e, selectedGameIds: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        l = n.useMemo(() => [...new Set([...d.sx, ...(a ?? m)])], [a]),
        t = (0, o.A)(l),
        p = n.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
        v = n.useMemo(
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
        f = n.useCallback((e, a) => h(a.item.value) - h(e.item.value), []),
        b = n.useMemo(() => ({ baseSort: f, keys: ["label"] }), [f]),
        g = (e?.trim().length ?? 0) > 0,
        { results: x } = (0, i.J$)(e ?? null),
        j = n.useMemo(() => new Set((x ?? []).filter((e) => (0, u.qS)(e)).map((e) => e.id)), [x]),
        k = n.useMemo(
            () => [
                ...(x ?? []).filter((e) => j.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(a ?? m).filter((e) => !j.has(e)).map((e) => ({ id: e, value: e, label: p.get(e)?.name ?? "" })),
            ],
            [x, j, a, p],
        ),
        y = n.useCallback((e) => e.filter((e) => j.has(e.value)), [j]);
    return { options: g ? k : v, matchSorterOptions: b, customMatchSorter: g ? y : void 0 };
}
