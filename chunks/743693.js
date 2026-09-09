r.d(e, { _: () => l });
var i = r(477900),
    n = r(17928),
    o = r(139146),
    a = r(280450),
    s = r(471505);
function l(t) {
    let { sku: e, location: r, isCardHovered: l = !0, trackButtonClick: u, ..._ } = t,
        d = (0, n.bG)([a.default], () => a.default.getId()),
        {
            isWishlisted: T,
            isBusy: c,
            isFirstTimeWishlister: b,
            handleToggle: N,
        } = (0, s.G)({ userId: d, sku: e, location: r, trackButtonClick: u });
    return (0, i.jsx)(o._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: T,
        isBusy: c,
        isFirstTimeWishlister: b,
        isVisuallyHidden: !l && !T,
        onClick: N,
        ..._,
    });
}
