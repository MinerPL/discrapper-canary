n.d(t, { A: () => _ });
var r = n(477900),
    i = n(582128),
    s = n(702841),
    l = n(834730),
    a = n(287809),
    o = n(158045),
    u = n(298072),
    c = n(993408),
    d = n(740076),
    f = n(466459),
    I = n(623373),
    p = n(219103),
    g = n(561769),
    A = n(57020),
    v = n(375708),
    C = n(178287);
function m(e) {
    let { product: t, prioritizedCurrency: n } = e,
        u = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        I = o.Ay.canUseCollectibles(u),
        g = (0, c.xM)(u),
        m = null != g,
        { isDisabled: _ } = (0, d.I)(t.skuId),
        { isPurchased: h, isPartiallyOwnedBundle: x } = (0, f.h)(t),
        E = (0, c.G0)(t),
        R = (0, c.tt)(t),
        {
            checkoutEligiblePrices: k,
            hasSufficientOrbs: b,
            shouldCheckoutWithOrbs: y,
        } = (0, A.F)({ product: t, hasShopDiscount: m, prioritizedCurrency: n }),
        S = k[0]?.currency,
        T = i.useMemo(() => (0, c.fT)(t, m, S), [t, m, S]);
    return _
        ? (0, r.jsx)(l.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: v.intl.string(v.t.wu4gyV),
          })
        : x
          ? (0, r.jsx)(l.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.BEjTij),
            })
          : h && !(E && !I)
            ? (0, r.jsx)(l.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: v.intl.string(v.t["6cfuDj"]),
              })
            : R
              ? (0, r.jsx)(l.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: v.intl.string(v.t.nBtvYB),
                })
              : E
                ? (0, r.jsx)(l.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: v.intl.string(v.t.rt69oo),
                  })
                : 0 === k.length
                  ? null
                  : (0, r.jsx)(p.x, {
                        priceAmount: k[0].amount,
                        priceCurrency: k[0].currency,
                        discount: T,
                        discountIconConfig: m
                            ? { displayMode: "default", source: g ?? c.D0.NITRO, size: "sm" }
                            : void 0,
                        className: y && !b ? C.c : void 0,
                        variant: "text-md/bold",
                    });
}
let _ = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, g.Vm)(t),
        s = (0, u.Q)(i);
    if (null == i) return null;
    let l = (0, I.rb)(i, s);
    return (0, r.jsx)(m, { product: l, prioritizedCurrency: n });
};
