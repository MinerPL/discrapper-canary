n.d(t, { U: () => I });
var r = n(582128),
    i = n(562708),
    s = n(172218),
    l = n(688810),
    a = n(139286),
    o = n(440938),
    u = n(298072),
    c = n(993408),
    d = n(623373),
    f = n(331884);
function I(e) {
    let t = (0, o.uM)(),
        { analyticsLocations: n } = (0, l.Ay)(),
        I = (0, u.Q)(e),
        p = (0, f.o)(),
        g = (0, c.xM)(p),
        A = r.useRef(null),
        v = r.useRef(!1),
        C = r.useRef(I);
    r.useEffect(() => {
        C.current = I;
    }, [I]);
    let m = r.useCallback(() => {
            let r = (0, d.B1)(e);
            (0, a.x)(
                {
                    name: i.ImpressionNames.SHOP_CARD,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: r ? (e.variants[C.current]?.skuId ?? e.skuId) : e.skuId,
                        card_id: t?.cardId,
                        shop_session_id: t?.sessionId,
                        position_in_section: t?.tilePosition,
                        product_sku_ids: (0, d.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                        location_stack: n,
                        discount_source: (0, c.b_)(g),
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, g]),
        _ = (0, s.K)((e) => {
            e
                ? v.current ||
                  (null === A.current &&
                      (A.current = setTimeout(() => {
                          m(), (v.current = !0), (A.current = null);
                      }, 1e3)))
                : ((v.current = !1), null !== A.current && (clearTimeout(A.current), (A.current = null)));
        }, 0.5);
    return (
        r.useEffect(
            () => () => {
                null !== A.current && (clearTimeout(A.current), (A.current = null));
            },
            [],
        ),
        _
    );
}
