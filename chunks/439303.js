r.d(t, { E9: () => c, jM: () => s });
var l = r(477900),
    n = r(582128),
    a = r(812729),
    i = r.n(a);
let o = n.createContext({});
function s() {
    return n.useContext(o);
}
function c(e) {
    let { newValue: t, children: r } = e,
        a = s(),
        c = n.useMemo(() => {
            let e = { ...a, ...t };
            return i()(a, e) ? (a ?? e) : e;
        }, [a, t]);
    return (0, l.jsx)(o.Provider, { value: c, children: r });
}
