i.d(t, { S: () => S });
var n = i(477900),
    a = i(582128),
    s = i(503698),
    r = i.n(s),
    l = i(435558),
    o = i(562708),
    d = i(821609),
    c = i(43990),
    u = i(331322),
    m = i(462887),
    p = i(602853),
    f = i(661531),
    b = i(993077),
    g = i(834730),
    h = i(403581),
    x = i(297264),
    C = i(736653),
    v = i(139286),
    _ = i(531260),
    P = i(914410),
    R = i(174459),
    j = i(872725),
    A = i(721157),
    T = i(555393),
    y = i(51965),
    E = i(465794),
    N = i(202541),
    I = i(652215),
    O = i(375708),
    L = i(799544);
function S(e) {
    let {
            id: t,
            title: i,
            description: s,
            descriptionNote: S,
            caption: U,
            pillText: w,
            primaryAsset: k,
            primaryAssetClassName: B,
            backgroundAssetUrl: D,
            progress: Y,
            ctaIcon: V,
            ctaIconPosition: H,
            ctaText: G,
            ctaVariant: F,
            ctaDisabled: K,
            ctaLoading: W,
            onCtaClick: z,
            subscriptionRequired: X,
            isThirdPartyPerk: Z = !1,
            glowing: $ = !1,
            progressGlowing: q = !1,
            featured: J,
            expired: Q = !1,
            className: ee,
            containerClassName: et,
            tabIndex: ei = 0,
            blurTint: en,
            footerContent: ea,
            analyticsOptions: es,
            onFocus: er,
        } = e,
        el = (0, C.DP)(),
        { fractionalState: eo } = (0, _.A)(),
        ed = (0, T.N)(),
        ec = { name: t };
    (es?.thirdPartyPartner != null && (ec.third_party_partner = es.thirdPartyPartner),
        (0, v.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ec }));
    let eu = a.useMemo(
            () =>
                (0, l.debounce)(() => {
                    R.default.track(I.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(i),
                        partner: es?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [es?.thirdPartyPartner, i],
        ),
        em = a.useCallback(() => {
            null != z &&
                (z(),
                R.default.track(I.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(i),
                    function_name: (0, l.snakeCase)(z.name),
                }));
        }, [z, i]),
        ep = !0 === X && (Z ? ed?.state === A.zE.UPSELL : eo === N.xc.FP_ONLY),
        ef = !(0, l.isEmpty)(D),
        eb = ef && (0, m.q)(el),
        eg = (0, p.r)(f.A.colors.BACKGROUND_BASE_LOW).hex(),
        eh = ep || !(0, l.isEmpty)(G),
        ex = F ?? (!ef && (0, m.q)(el) ? "primary" : "overlay-primary"),
        eC = (0, l.isEmpty)(G)
            ? null
            : { icon: V, iconPosition: H, text: G, variant: ex, onClick: em, disabled: K, loading: W },
        ev = (0, n.jsx)(E.A, { fullWidth: !0, defaultTextOverride: O.intl.string(O.t.sEAnVH) }),
        e_ = null == eC ? null : Z ? (0, n.jsx)(y.A, { ...eC }) : (0, n.jsx)(d.$, { ...eC });
    return (0, n.jsx)(c.N, {
        theme: eb ? I.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)(j.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: eu,
                onFocus: er,
                cardType: b.s.PRIMARY,
                glowing: $,
                hueRotate: 25,
                glowAmount: (0, m.M)(el) ? 2 : 8,
                blurAmount: 10,
                className: r()(L.Ui, et, { [L.Tn]: ef }),
                cardClassName: r()(L.Nr, e, ee, { [L.j8]: J, [L._7]: Q }),
                cardStyle: {
                    backgroundImage: null != D ? `url(${D})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(w) &&
                        (0, n.jsx)(g.E, {
                            variant: "text-xs/bold",
                            color: Q ? "badge-text-default" : "badge-expressive-text-default",
                            className: L.Io,
                            children: w,
                        }),
                    (0, n.jsxs)("div", {
                        className: L.qh,
                        children: [
                            J &&
                                (0, n.jsx)("div", {
                                    className: L.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(M, { asset: k, className: B }),
                                }),
                            (0, n.jsx)(M, { asset: k, className: B }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: L.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: L.u_,
                                style: { "--custom-tint-color": en ?? eg },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: L.P_,
                                children: [
                                    ep &&
                                        (0, n.jsxs)("div", {
                                            className: L.d_,
                                            children: [
                                                (0, n.jsx)(h.t, { size: "sm", color: f.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: O.intl.string(O.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(U) &&
                                        (0, n.jsx)("div", {
                                            className: L.OU,
                                            children:
                                                "string" == typeof U
                                                    ? (0, n.jsx)(g.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: U,
                                                      })
                                                    : U,
                                        }),
                                    (0, n.jsx)(x.D, { variant: "heading-lg/semibold", children: i }),
                                    !(0, l.isEmpty)(s) &&
                                        (0, n.jsxs)("div", {
                                            className: L.Wi,
                                            children: [
                                                (0, n.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.h_,
                                                    children: (0, l.isEmpty)(S)
                                                        ? s
                                                        : (0, n.jsxs)(u.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, n.jsx)("div", { children: s }),
                                                                  (0, n.jsx)("div", { children: S }),
                                                              ],
                                                          }),
                                                }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != Y &&
                                        (0, n.jsx)("div", {
                                            className: L.oU,
                                            children: (0, n.jsx)(P.Ay, {
                                                variant: P.qP.BLUE,
                                                progress: (0, l.clamp)(Y, 0, 1),
                                                maximum: 1,
                                                glowing: q,
                                            }),
                                        }),
                                    null != ea && (0, n.jsx)("div", { className: L.Gv, children: ea }),
                                    eh && (0, n.jsx)("div", { className: L.Cj }),
                                ],
                            }),
                            eh && (0, n.jsx)("div", { className: L.yk, children: ep ? ev : e_ }),
                        ],
                    }),
                ],
            }),
    });
}
function M(e) {
    let { asset: t, className: i } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: r()(L.eq, i), draggable: "false" })
          : t;
}
