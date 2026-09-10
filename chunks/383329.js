t.d(n, { R: () => h });
var l = t(582128),
    r = t(435558),
    a = t.n(r),
    u = t(929396),
    o = t(471677),
    s = t(321108),
    c = t(735321),
    i = t(403362),
    d = t(282435);
let m = [];
function f(e) {
    return d.jN.get(e) ?? 0;
}
function h() {
    let { query: e, selectedGameIds: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = l.useMemo(() => [...new Set([...d.sx, ...(n ?? m)])], [n]),
        r = (0, s.A)(t),
        h = l.useMemo(() => new Map(r.map((e) => [e.id, e])), [r]),
        v = l.useMemo(
            () =>
                a()(d.sx)
                    .map((e) => h.get(e))
                    .filter(i.Vq)
                    .filter((e) => (0, c.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: n } = e;
                        return f(n);
                    })
                    .reverse()
                    .value(),
            [h],
        ),
        p = l.useCallback((e, n) => f(n.item.value) - f(e.item.value), []),
        g = l.useMemo(() => ({ baseSort: p, keys: ["label"] }), [p]),
        x = (e?.trim().length ?? 0) > 0,
        { results: b } = (0, o.J$)(e ?? null),
        M = l.useMemo(() => new Set((b ?? []).filter((e) => (0, u.qS)(e)).map((e) => e.id)), [b]),
        S = l.useMemo(
            () => [
                ...(b ?? []).filter((e) => M.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(n ?? m).filter((e) => !M.has(e)).map((e) => ({ id: e, value: e, label: h.get(e)?.name ?? "" })),
            ],
            [b, M, n, h],
        ),
        k = l.useCallback((e) => e.filter((e) => M.has(e.value)), [M]);
    return { options: x ? S : v, matchSorterOptions: g, customMatchSorter: x ? k : void 0 };
}
