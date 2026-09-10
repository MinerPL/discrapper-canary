n.d(t, { S: () => U });
var i = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    l = n(435558),
    o = n(562708),
    d = n(821609),
    c = n(43990),
    u = n(331322),
    m = n(462887),
    b = n(602853),
    p = n(661531),
    f = n(993077),
    g = n(834730),
    h = n(403581),
    x = n(297264),
    v = n(736653),
    _ = n(139286),
    P = n(531260),
    C = n(914410),
    R = n(174459),
    T = n(872725),
    A = n(721157),
    y = n(555393),
    E = n(51965),
    N = n(465794),
    j = n(202541),
    O = n(652215),
    I = n(375708),
    L = n(799544);
function U(e) {
    let {
            id: t,
            title: n,
            description: r,
            descriptionNote: U,
            caption: M,
            pillText: w,
            primaryAsset: k,
            primaryAssetClassName: D,
            backgroundAssetUrl: B,
            progress: Y,
            ctaIcon: G,
            ctaIconPosition: V,
            ctaText: H,
            ctaVariant: z,
            ctaDisabled: F,
            ctaLoading: K,
            onCtaClick: W,
            subscriptionRequired: X,
            isThirdPartyPerk: $ = !1,
            glowing: q = !1,
            progressGlowing: J = !1,
            featured: Z,
            expired: Q = !1,
            className: ee,
            containerClassName: et,
            tabIndex: en = 0,
            blurTint: ei,
            footerContent: ea,
            analyticsOptions: er,
            onFocus: es,
        } = e,
        el = (0, v.DP)(),
        { fractionalState: eo } = (0, P.A)(),
        ed = (0, y.N)(),
        ec = { name: t };
    (er?.thirdPartyPartner != null && (ec.third_party_partner = er.thirdPartyPartner),
        (0, _.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ec }));
    let eu = a.useMemo(
            () =>
                (0, l.debounce)(() => {
                    R.default.track(O.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: er?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [er?.thirdPartyPartner, n],
        ),
        em = a.useCallback(() => {
            null != W &&
                (W(),
                R.default.track(O.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(W.name),
                }));
        }, [W, n]),
        eb = !0 === X && ($ ? ed?.state === A.zE.UPSELL : eo === j.xc.FP_ONLY),
        ep = !(0, l.isEmpty)(B),
        ef = ep && (0, m.q)(el),
        eg = (0, b.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        eh = eb || !(0, l.isEmpty)(H),
        ex = z ?? (!ep && (0, m.q)(el) ? "primary" : "overlay-primary"),
        ev = (0, l.isEmpty)(H)
            ? null
            : { icon: G, iconPosition: V, text: H, variant: ex, onClick: em, disabled: F, loading: K },
        e_ = (0, i.jsx)(N.A, { fullWidth: !0, defaultTextOverride: I.intl.string(I.t.sEAnVH) }),
        eP = null == ev ? null : $ ? (0, i.jsx)(E.A, { ...ev }) : (0, i.jsx)(d.$, { ...ev });
    return (0, i.jsx)(c.N, {
        theme: ef ? O.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)(T.A, {
                id: t,
                tabIndex: en,
                onMouseEnter: eu,
                onFocus: es,
                cardType: f.s.PRIMARY,
                glowing: q,
                hueRotate: 25,
                glowAmount: (0, m.M)(el) ? 2 : 8,
                blurAmount: 10,
                className: s()(L.Ui, et, { [L.Tn]: ep }),
                cardClassName: s()(L.Nr, e, ee, { [L.j8]: Z, [L._7]: Q }),
                cardStyle: {
                    backgroundImage: null != B ? `url(${B})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(w) &&
                        (0, i.jsx)(g.E, {
                            variant: "text-xs/bold",
                            color: Q ? "badge-text-default" : "badge-expressive-text-default",
                            className: L.Io,
                            children: w,
                        }),
                    (0, i.jsxs)("div", {
                        className: L.qh,
                        children: [
                            Z &&
                                (0, i.jsx)("div", {
                                    className: L.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(S, { asset: k, className: D }),
                                }),
                            (0, i.jsx)(S, { asset: k, className: D }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: L.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: L.u_,
                                style: { "--custom-tint-color": ei ?? eg },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: L.P_,
                                children: [
                                    eb &&
                                        (0, i.jsxs)("div", {
                                            className: L.d_,
                                            children: [
                                                (0, i.jsx)(h.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: I.intl.string(I.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(M) &&
                                        (0, i.jsx)("div", {
                                            className: L.OU,
                                            children:
                                                "string" == typeof M
                                                    ? (0, i.jsx)(g.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: M,
                                                      })
                                                    : M,
                                        }),
                                    (0, i.jsx)(x.D, { variant: "heading-lg/semibold", children: n }),
                                    !(0, l.isEmpty)(r) &&
                                        (0, i.jsxs)("div", {
                                            className: L.Wi,
                                            children: [
                                                (0, i.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.h_,
                                                    children: (0, l.isEmpty)(U)
                                                        ? r
                                                        : (0, i.jsxs)(u.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, i.jsx)("div", { children: r }),
                                                                  (0, i.jsx)("div", { children: U }),
                                                              ],
                                                          }),
                                                }),
                                                (0, i.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.XV,
                                                    inert: !0,
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != Y &&
                                        (0, i.jsx)("div", {
                                            className: L.oU,
                                            children: (0, i.jsx)(C.Ay, {
                                                variant: C.qP.BLUE,
                                                progress: (0, l.clamp)(Y, 0, 1),
                                                maximum: 1,
                                                glowing: J,
                                            }),
                                        }),
                                    null != ea && (0, i.jsx)("div", { className: L.Gv, children: ea }),
                                    eh && (0, i.jsx)("div", { className: L.Cj }),
                                ],
                            }),
                            eh && (0, i.jsx)("div", { className: L.yk, children: eb ? e_ : eP }),
                        ],
                    }),
                ],
            }),
    });
}
function S(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: s()(L.eq, n), draggable: "false" })
          : t;
}
