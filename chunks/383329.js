l.d(t, { R: () => f });
var n = l(582128),
    a = l(435558),
    r = l.n(a),
    u = l(929396),
    o = l(471677),
    s = l(321108),
    c = l(735321),
    i = l(403362),
    m = l(282435);
let d = [];
function h(e) {
    return m.jN.get(e) ?? 0;
}
function f() {
    let { query: e, selectedGameIds: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        l = n.useMemo(() => [...new Set([...m.sx, ...(t ?? d)])], [t]),
        a = (0, s.A)(l),
        f = n.useMemo(() => new Map(a.map((e) => [e.id, e])), [a]),
        p = n.useMemo(
            () =>
                r()(m.sx)
                    .map((e) => f.get(e))
                    .filter(i.Vq)
                    .filter((e) => (0, c.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return h(t);
                    })
                    .reverse()
                    .value(),
            [f],
        ),
        v = n.useCallback((e, t) => h(t.item.value) - h(e.item.value), []),
        b = n.useMemo(() => ({ baseSort: v, keys: ["label"] }), [v]),
        g = (e?.trim().length ?? 0) > 0,
        { results: x } = (0, o.J$)(e ?? null),
        k = n.useMemo(() => new Set((x ?? []).filter((e) => (0, u.qS)(e)).map((e) => e.id)), [x]),
        y = n.useMemo(
            () => [
                ...(x ?? []).filter((e) => k.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(t ?? d).filter((e) => !k.has(e)).map((e) => ({ id: e, value: e, label: f.get(e)?.name ?? "" })),
            ],
            [x, k, t, f],
        ),
        M = n.useCallback((e) => e.filter((e) => k.has(e.value)), [k]);
    return { options: g ? y : p, matchSorterOptions: b, customMatchSorter: g ? M : void 0 };
}
