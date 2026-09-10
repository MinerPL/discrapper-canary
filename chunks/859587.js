n.d(t, { x: () => d });
var r = n(582128),
    i = n(66455),
    s = n(688810),
    l = n(174459),
    a = n(440938),
    o = n(298072),
    u = n(623373),
    c = n(652215);
function d(e, t) {
    let n = (0, a.uM)(),
        { analyticsLocations: d } = (0, s.Ay)(),
        f = (0, o.Q)(t),
        I = r.useRef(!1),
        p = (0, i.A)(n),
        g = (0, i.A)(t),
        A = (0, i.A)(f),
        v = (0, i.A)(d);
    r.useEffect(() => {
        if (!e) {
            I.current = !1;
            return;
        }
        if (I.current) return;
        let t = setTimeout(() => {
            let e = p.current,
                t = g.current,
                n = (0, u.B1)(t);
            (l.default.track(c.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: n ? (t.variants[A.current]?.skuId ?? t.skuId) : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                product_sku_ids: (0, u.v8)(t),
                location_stack: v.current,
            }),
                (I.current = !0));
        }, 250);
        return () => clearTimeout(t);
    }, [e, p, g, A, v]);
}
