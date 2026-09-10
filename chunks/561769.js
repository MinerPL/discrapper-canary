n.d(t, { AW: () => R, Hi: () => k, Mk: () => b, UU: () => y, Vm: () => T, gZ: () => E, ql: () => S, v3: () => x });
var r,
    i,
    s = n(582128),
    l = n(575593),
    a = n(702841),
    o = n(793574),
    u = n(688810),
    c = n(821925),
    d = n(174459),
    f = n(440938),
    I = n(590180),
    p = n(161918),
    g = n(295586),
    A = n(986630),
    v = n(572595),
    C = n(722258),
    m = n(57020),
    _ = n(758836),
    h = n(652215);
let x = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function E() {
    return s.useContext(x).prioritizedCurrency;
}
var R =
        (((r = {}).NONE = "none"),
        (r.NEW = "new"),
        (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (r.LIMITED_TIME = "limited_time"),
        (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (r.BADGE_OVERRIDE = "badge_override"),
        (r.DYNAMIC = "dynamic"),
        r),
    k = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
function b(e) {
    return e === _.G2.ORBS ? "orbs" : void 0;
}
function y(e, t, n) {
    return (r) => {
        d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === _.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === _.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === _.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function S(e, t, n) {
    let r = (0, p.Mk)(),
        i = r?.tab,
        l = (0, f.uM)(),
        { standalonePreview: c, flattenProductVariants: d } = s.useContext(x),
        { analyticsLocations: g } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        A = (0, a.bG)([I.A], () => I.A.getCategoryForProduct(e.skuId)),
        _ = s.useRef(null);
    return s.useCallback(
        (r) => {
            let s = (0, m.A)({ product: e });
            ((_.current = r.currentTarget), n?.(), c)
                ? (0, C.B)({
                      skuId: e.skuId,
                      flattenVariants: d,
                      analyticsLocations: g,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: s,
                      tab: i,
                      returnRef: _,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  })
                : null != A &&
                  (0, v.t)({
                      product: e,
                      category: A,
                      shouldCheckoutWithOrbs: s,
                      analyticsLocations: g,
                      analyticsSource: t,
                      returnRef: _,
                      tab: i,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  });
        },
        [e, i, A, c, d, t, g, n, l?.cardId, l?.sessionId, l?.tilePosition],
    );
}
function T(e) {
    let { flattenProductVariants: t, productOverride: n } = s.useContext(x),
        { legacyProduct: r, storefrontProduct: i } = (0, a.cf)(
            [I.A, c.A],
            () => {
                if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                let r =
                    !0 === t ? I.A.getProduct(e) : I.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                return { legacyProduct: r, storefrontProduct: null == r ? c.A.getProductsForSku(e)?.[0] : void 0 };
            },
            [e, t, n],
        ),
        l = null == n && null == r && null == i;
    s.useEffect(() => {
        l && "" !== e && g.p.requestProducts([e]);
    }, [l, e]);
    let o = s.useMemo(
        () =>
            null != i
                ? (A.A.fromStorefrontProductRecord(i, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [i, t, e],
    );
    return n ?? r ?? o;
}
