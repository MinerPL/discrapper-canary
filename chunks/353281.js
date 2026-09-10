r.d(t, { H: () => o, J: () => i });
var l = r(477900),
    n = r(582128);
let a = (0, n.createContext)(null);
function i(e) {
    let { renderHeader: t, getSocialLayerStorefrontLink: r, children: i } = e,
        o = n.useMemo(() => ({ renderHeader: t, getSocialLayerStorefrontLink: r }), [t, r]);
    return (0, l.jsx)(a.Provider, { value: o, children: i });
}
function o() {
    let e = (0, n.useContext)(a);
    return { renderHeader: e?.renderHeader, getSocialLayerStorefrontLink: e?.getSocialLayerStorefrontLink };
}
