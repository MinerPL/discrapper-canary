a.d(n, { $: () => d, k: () => r });
var t = a(582128);
let i = (0, a(945810).mj)({
        name: "2026-06-improved-shop-loading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = t.createContext(null),
    r = o.Provider;
function d(e) {
    let n = t.useContext(o),
        a = i.useConfig({ location: e }).enabled;
    return n ?? a;
}
