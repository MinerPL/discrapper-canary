n.d(t, { I6: () => m, UY: () => o, bx: () => c, ck: () => s, e0: () => u, gw: () => d });
var l = n(477900),
    r = n(582128),
    a = n(333007);
let [i, s] = (0, n(786300).A)();
function u(e) {
    let { children: t } = e,
        [n, a] = r.useState(null),
        [s, u] = r.useState(null),
        [o, c] = r.useState(null),
        d = r.useMemo(
            () => ({
                setCheckoutFooterContentNode: a,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: s,
                setCheckoutHeaderElementNode: u,
                checkoutFooterLineItemNode: o,
                setCheckoutFooterLineItemNode: c,
            }),
            [n, a, s, u, o, c],
        );
    return (0, l.jsx)(i.Provider, { value: d, children: t });
}
function o(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = s();
    return null == n ? null : a.createPortal(t, n);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = s();
    return null == n ? null : a.createPortal(t, n);
}
function d(e) {
    let { children: t } = e,
        { checkoutFooterLineItemNode: n } = s();
    return null == n ? null : a.createPortal(t, n);
}
function m() {
    let e = r.useContext(i);
    return null == e ? null : e.checkoutFooterLineItemNode;
}
