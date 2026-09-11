t.d(s, { A: () => i });
var n = t(582128),
    l = t(172218);
function i(e) {
    let { wishlistId: s, onAction: t, productLines: i } = e,
        [a, r] = (0, n.useState)(!1),
        u = (0, n.useCallback)(
            (e) => {
                e && null != s && (t({ action: "VIEW_WISHLIST", wishlistId: s, productLines: i ?? void 0 }), r(!0));
            },
            [s, t, i],
        );
    return (0, l.K)(u, void 0, null != s && !a);
}
