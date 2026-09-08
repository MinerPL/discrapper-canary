n.d(t, { Z: () => _ });
var r = n(582128),
    s = n(17928),
    l = n(174459),
    a = n(158045),
    i = n(440938),
    o = n(590180),
    u = n(993408),
    c = n(331884),
    d = n(652215);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        _ = (0, i.uM)(),
        E = (0, s.bG)([o.A], () => o.A.getProduct(e)),
        g = (0, c.i)(),
        S = a.Ay.canUseShopDiscounts(g),
        L = r.useRef(null),
        p = r.useCallback(() => {
            let r = null != E ? (0, u.Br)(E, S, !1) : null,
                s = null != E ? (0, u.c7)(E, S, !1) : void 0;
            l.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: _?.sessionId,
                sku_id: e,
                display_price: r?.amount,
                display_price_currency: r?.currency.toString(),
                display_price_strikethrough: s,
                position: _?.tilePosition,
                page_type: t,
                page_category: _?.pageCategory,
                page_section: _?.pageSection,
                type: n,
                category_position: _?.categoryPosition,
            });
        }, [_?.sessionId, _?.categoryPosition, _?.pageCategory, _?.pageSection, _?.tilePosition, S, t, E, e, n]),
        A = r.useCallback(
            (e) => {
                e
                    ? null === L.current &&
                      (L.current = setTimeout(() => {
                          p(), (L.current = null);
                      }, 1e3))
                    : null !== L.current && (clearTimeout(L.current), (L.current = null));
            },
            [p],
        );
    return (
        r.useEffect(
            () => () => {
                null !== L.current && (clearTimeout(L.current), (L.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: A }
    );
}
