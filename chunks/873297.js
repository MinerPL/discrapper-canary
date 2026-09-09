l.d(s, { A: () => R });
var t = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    i = l(43990),
    c = l(815021),
    o = l(297264),
    u = l(406810),
    d = l(834730),
    g = l(821609),
    h = l(17928),
    p = l(269115),
    m = l(688810),
    f = l(449543),
    x = l(812095),
    k = l(871123),
    _ = l(733391),
    C = l(439303),
    j = l(832163),
    v = l(317560),
    A = l(467884),
    E = l(435658),
    b = l(67480),
    y = l(174459),
    I = l(371794),
    N = l(440938),
    S = l(652215),
    L = l(188275),
    w = l(867595);
let R = function (e) {
    let s,
        l,
        a,
        {
            onDismiss: R,
            skuIds: M,
            tab: D,
            applicationId: O,
            headerText: T,
            logoUrl: F,
            cta: K,
            timeLeftText: B,
            analyticsSection: z,
            analyticsTileType: H,
            analyticsImpressionType: P,
            backgroundGradient: G,
        } = e;
    n.useEffect(() => {
        (0, _.ap)(O);
    }, [O]);
    let J = (0, h.bG)([j.A], () => {
            let e = j.A.getStorefrontMetadata(O);
            return e?.logoAssetId != null ? (0, I.YE)(O, e.logoAssetId, 256) : void 0;
        }, [O]),
        U = F ?? J,
        V =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of M) (0, _.Pp)(O, e);
            }, [M, O]),
            (l = (0, h.bG)([b.A], () => !M.some((e) => b.A.isFetching(e)) && M.some((e) => b.A.didFetchingSkuFail(e)), [
                M,
            ])),
            n.useEffect(() => {
                l && (0, _.ap)(O);
            }, [l, O]),
            (a = (0, h.yK)([b.A, j.A], () => {
                if (M.some((e) => b.A.isFetching(e))) return s.current;
                let e = M.filter((e) => null != b.A.get(e));
                if (e.length >= M.length) return M;
                let l = j.A.getStorefrontDataForApplicationId(O);
                if (null == l || "loading" === l.state) return e;
                let t = new Set(M);
                return [
                    ...e,
                    ...(null != l.storefront
                        ? (0, k.jd)(l.storefront).filter((e) => !t.has(e) && null != b.A.get(e))
                        : []),
                ].slice(0, M.length);
            }, [O, M])),
            n.useEffect(() => {
                a.length > 0 && (s.current = a);
            }, [a]),
            a);
    (0, E.j)({ skuIds: V });
    let Y = (0, N.uM)(),
        { analyticsLocations: $ } = (0, m.Ay)(),
        q = n.useRef(null),
        Q = n.useRef(!1),
        W = n.useRef(null),
        X = n.useMemo(() => ({ pageSection: z }), [z]),
        Z = n.useCallback(
            (e, s) => {
                y.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: Y?.sessionId,
                    page_type: D,
                    page_category: Y?.pageCategory,
                    page_section: Y?.pageSection,
                    tile_type: H,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [Y?.sessionId, Y?.pageCategory, Y?.pageSection, D, H],
        ),
        ee = "button" === K.kind ? K.onClick : void 0,
        es = "button" === K.kind ? K.onMouseDown : void 0,
        el = n.useCallback(() => {
            es?.();
        }, [es]),
        et = n.useCallback(() => {
            Z("go_to_game_shop"), ee?.();
        }, [Z, ee]),
        en = n.useCallback(
            (e, s) => {
                let { skuId: l, applicationId: t } = s;
                Z("card_click", l), (0, v.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: $ });
            },
            [Z, $],
        ),
        ea = n.useCallback(() => {
            Z("dismiss"), R?.();
        }, [Z, R]),
        er = n.useCallback(
            (e) => {
                !Q.current &&
                    (e && null === W.current
                        ? (W.current = setTimeout(() => {
                              (Q.current = !0),
                                  (W.current = null),
                                  y.default.track(S.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: Y?.sessionId,
                                      page_type: D,
                                      page_category: Y?.pageCategory,
                                      page_section: Y?.pageSection,
                                      type: P,
                                  });
                          }, 1e3))
                        : e || null === W.current || (clearTimeout(W.current), (W.current = null)));
            },
            [Y?.sessionId, Y?.pageCategory, Y?.pageSection, D, P],
        );
    return (n.useEffect(
        () => () => {
            null !== W.current && (clearTimeout(W.current), (W.current = null));
        },
        [],
    ),
    0 === V.length)
        ? null
        : (0, t.jsx)(i.N, {
              theme: S.NJ8.DARKER,
              children: (e) =>
                  (0, t.jsx)(p.L, {
                      innerRef: q,
                      onChange: er,
                      threshold: 0,
                      children: (0, t.jsx)("div", {
                          ref: q,
                          className: r()(w.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: w.kL,
                              children: [
                                  null != G && (0, t.jsx)("div", { className: w.D7, style: { background: G } }),
                                  null != R &&
                                      (0, t.jsx)("div", {
                                          className: w.b,
                                          children: (0, t.jsx)(c.J, { size: "sm", variant: "icon-only", onClick: ea }),
                                      }),
                                  null != U && (0, t.jsx)("img", { className: w.wm, src: U, alt: "" }),
                                  (0, t.jsx)("div", {
                                      className: w.xf,
                                      children: (0, t.jsxs)("div", {
                                          className: w.B5,
                                          children: [
                                              (0, t.jsx)(o.D, {
                                                  className: w.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "text-overlay-light",
                                                  children: (0, x.U)(T, { enableNewlines: !0 }),
                                              }),
                                              (0, t.jsxs)("div", {
                                                  className: w.U9,
                                                  children: [
                                                      null != B &&
                                                          (0, t.jsxs)("div", {
                                                              className: w.f$,
                                                              children: [
                                                                  (0, t.jsx)(u.ClockIcon, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  }),
                                                                  (0, t.jsx)(d.E, {
                                                                      variant: "text-xs/medium",
                                                                      color: "none",
                                                                      children: B,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === K.kind
                                                          ? K.node
                                                          : (0, t.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                text: K.text,
                                                                onMouseDown: el,
                                                                onClick: et,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, t.jsxs)(C.E9, {
                                      newValue: X,
                                      children: [
                                          (0, t.jsx)(f.A, {
                                              gap: "md",
                                              children: V.map((e, s) =>
                                                  (0, t.jsx)(
                                                      "div",
                                                      {
                                                          className: w.Ko,
                                                          children: (0, t.jsx)(A.A, {
                                                              skuId: e,
                                                              positionInSection: s,
                                                              onClick: en,
                                                              showOrbsOnly: !1,
                                                          }),
                                                      },
                                                      e,
                                                  ),
                                              ),
                                          }),
                                          O === L.FK &&
                                              (0, t.jsx)("div", {
                                                  className: w.Ok,
                                                  children: (0, t.jsx)(d.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: "\xa9 2026 MARVEL",
                                                  }),
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
};
