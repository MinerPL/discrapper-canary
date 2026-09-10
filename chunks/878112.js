n.d(t, { A: () => h });
var r = n(477900),
    i = n(582128),
    s = n(575593),
    l = n(821609),
    a = n(597770),
    o = n(866665),
    u = n(408278),
    c = n(688810),
    d = n(44120),
    f = n(174459),
    I = n(440938),
    p = n(238184),
    g = n(536572),
    A = n(766172),
    v = n(758836),
    C = n(652215),
    m = n(202541),
    _ = n(375708);
let h = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: h,
            returnRef: x,
            onSuccess: E,
            tooltipDelay: R,
            fullWidth: k = !1,
            fullWidthLabel: b,
            giftRecipient: y,
            giftingOrigin: S = m.vQ.SHOP_PAGE,
            onTrackClick: T,
        } = e,
        { analyticsLocations: j } = (0, c.Ay)(),
        L = i.useRef(null),
        O = (0, I.uM)(),
        V = (0, p.A)();
    function P(e) {
        (e.stopPropagation(),
            f.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: O?.sessionId,
                sku_id: t.skuId,
                page_section: O?.pageSection,
                page_category: O?.pageCategory,
                tile_type: s.R[t.type],
                tile_position: String(O?.tilePosition),
                cta_name: "gift button",
                page_type: V ?? "home",
            }),
            T?.(v.sH.SEND_AS_GIFT),
            (0, d.A)({
                skuId: (0, A.Y)({ product: t, selectedVariantIndex: h }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: S,
                analyticsLocations: j,
                discoverySessionId: O?.sessionId,
                returnRef: x,
                onClose:
                    null != E
                        ? (e) => {
                              e && E();
                          }
                        : void 0,
            }));
    }
    if (k)
        return (0, r.jsx)(l.$, {
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            onClick: P,
            text: b ?? _.intl.string(_.t.gmnzqM),
            fullWidth: !0,
        });
    let N = _.intl.string(_.t["JCFN/y"]);
    return (0, r.jsx)(o.m, {
        text: N,
        delay: R,
        children: (0, r.jsx)(u.K, {
            "aria-label": _.intl.formatToPlainString(_.t["5UYoSr"], { ctaLabel: N, productLabel: (0, g.s7)(t) }),
            buttonRef: L,
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            size: "md",
            onClick: P,
        }),
    });
};
