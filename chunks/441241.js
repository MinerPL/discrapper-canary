s.r(l), s.d(l, { default: () => eC });
var t = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(806163),
    o = s(132500),
    c = s(17928),
    d = s(364522),
    u = s(944791),
    h = s(444927),
    g = s(688810),
    C = s(354328),
    x = s(475073),
    m = s(611924),
    p = s(744082),
    I = s(561794),
    b = s(440938),
    E = s(590180),
    j = s(50920),
    A = s(395856),
    L = s(790297),
    f = s(350172),
    _ = s(730202),
    N = s(295586),
    v = s(510801),
    T = s(682301);
function O(e) {
    let { enabled: l = !0, includeUnpublished: s = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = l && null != e ? e : "";
    n.useEffect(() => {
        "" !== t && N.p.requestCollections([t], { includeUnpublished: s });
    }, [t, s]);
    let { collection: a, fetchState: r } = (0, c.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(t), fetchState: _.A.getFetchState(t) }),
            [t],
        ),
        i = (0, T.Hd)(t, r),
        o = n.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        d = n.useMemo(() => ("error" === r || i ? "error" : null != o ? "ready" : "loading"), [r, i, o]);
    return {
        category: o,
        state: d,
        retry: n.useCallback(() => {
            "" !== t &&
                (0, f._v)({
                    collectionIds: [t],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    ignoreCache: !0,
                });
        }, [t, s]),
    };
}
var S = s(841702),
    k = s(983545),
    R = s(349769),
    y = s(235939);
s(321073);
var B = s(575593),
    F = s(651162),
    G = s(40474),
    P = s(297264),
    U = s(821609),
    D = s(449543),
    M = s(152858),
    H = s(287809),
    V = s(174459),
    w = s(161918),
    X = s(993408),
    W = s(511265),
    $ = s(13875),
    Y = s(652215),
    z = s(828515),
    K = s(258245),
    q = s(484469),
    J = s(196231),
    Z = s(337183),
    Q = s(758836),
    ee = s(375708),
    el = s(146053);
function es(e, l) {
    let s = (0, A.$)(l),
        { category: t } = O(e, { enabled: s, includeUnpublished: (0, C.A)("shop_include_unpublished") }),
        n = (0, c.bG)([E.A], () => E.A.getCategory(e));
    return s ? (t ?? void 0) : n;
}
let et = { aspectRatio: "1 / 1" },
    en = {
        [B.R.PROFILE_EFFECT]: { className: el.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: el.kP, aspectRatio: "2 / 1" },
    };
function ea(e) {
    let { category: l } = e,
        s = (0, c.bG)([H.default], () => H.default.getCurrentUser()),
        n = (0, W.p)()(l.products);
    return null == s || 0 === n.length
        ? null
        : (0, t.jsx)("div", {
              className: el.hd,
              children: (0, t.jsx)("div", {
                  className: el.fr,
                  children: n.map((e, l) => {
                      let { className: s, aspectRatio: n } =
                          en[
                              e.type === B.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                  ? B.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? et;
                      return (0, t.jsx)(
                          b.R9,
                          {
                              newValue: { tilePosition: l },
                              children: (0, t.jsx)(K.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function er(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        a = (0, A.$)("collection_index_related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: t = !0 } = e,
                a = n.useMemo(() => ({ applicationId: Y.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                r = t && null != l && "" !== l,
                i = (0, f.HX)(a);
            n.useEffect(() => {
                r && (0, f.Su)(a);
            }, [r, a]);
            let { collectionIds: o, fetchState: d } = (0, c.cf)(
                    [_.A],
                    () => ({
                        collectionIds: _.A.getCollectionsAfterIds(i),
                        fetchState: _.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                u = n.useMemo(() => (r ? (o ?? []) : []), [r, o]),
                h = u.join(","),
                g = (0, c.cf)([_.A], () => {
                    let e = {};
                    for (let l of u) e[l] = _.A.getCollectionOrSummary(l);
                    return e;
                }, [u]);
            return {
                categories: n.useMemo(
                    () =>
                        u
                            .map((e) => g[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
                    [h, g],
                ),
                isLoading: r && null == o && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: a }),
        i = (0, c.bG)([E.A], () => E.A.categories),
        o = n.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !Q.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        d = n.useMemo(() => {
            if (a) return r.filter(o).slice(0, 8);
            let e = [...i.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let t = [];
            for (let l = 1; l <= e.length && t.length < 8; l++) {
                let n = e[(s + l) % e.length];
                o(n) && n.products.length > 0 && t.push(n);
            }
            return t;
        }, [a, r, i, l, o]);
    return 0 === d.length
        ? null
        : (0, t.jsxs)("div", {
              className: el.t3,
              children: [
                  (0, t.jsx)("div", {
                      className: el.bb,
                      children: (0, t.jsx)(P.D, {
                          variant: "heading-lg/semibold",
                          children: ee.intl.string(ee.t.EhRZ9o),
                      }),
                  }),
                  (0, t.jsx)(
                      D.A,
                      {
                          gap: "xl",
                          scrollBehavior: M.Uf.ITEM,
                          children: d.map((e, l) =>
                              (0, t.jsx)(
                                  b.R9,
                                  {
                                      newValue: {
                                          categoryPosition: l,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: l,
                                      },
                                      children: (0, t.jsx)("div", {
                                          className: el.EU,
                                          children: (0, t.jsx)(J.S, {
                                              category: e,
                                              badgeText: (0, X.HF)(e.unpublishedAt)
                                                  ? ee.intl.string(ee.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: s,
                                              pageType: Q.G2.COLLECTION_INDEX,
                                              className: el.vK,
                                          }),
                                      }),
                                  },
                                  e.skuId,
                              ),
                          ),
                      },
                      l,
                  ),
              ],
          });
}
let ei = [
    { tab: Q.G2.AVATAR_DECORATIONS, label: () => ee.intl.string(ee.t.dRZYNE) },
    { tab: Q.G2.PROFILE_EFFECTS, label: () => ee.intl.string(ee.t["1cNjtx"]) },
    { tab: Q.G2.NAMEPLATES, label: () => ee.intl.string(ee.t.V68Fqz) },
    { tab: Q.G2.PROFILE_FRAMES, label: () => ee.intl.string(ee.t.ecTJkR) },
    { tab: Q.G2.BUNDLES, label: () => ee.intl.string(ee.t.FYFpps) },
];
function eo() {
    let e = (0, i.W6)(),
        l = (0, $.s)("CollectionPageFooter"),
        s = n.useMemo(
            () =>
                ei.filter((e) => {
                    let { tab: s } = e;
                    return l || s !== Q.G2.PROFILE_FRAMES;
                }),
            [l],
        );
    return (0, t.jsxs)("div", {
        className: el.nb,
        children: [
            (0, t.jsx)(P.D, { variant: "heading-md/semibold", children: ee.intl.string(ee.t.Yr70c4) }),
            (0, t.jsx)("div", {
                className: el.J2,
                children: s.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, t.jsx)(
                        U.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function ec(e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        a = (0, b.uM)(),
        o = es(l, "collection_index_breadcrumb")?.name,
        c = n.useMemo(
            () => [
                { id: "shop_all", label: ee.intl.string(ee.t.xFcotU) },
                { id: "collection", label: o ?? "" },
            ],
            [o],
        ),
        d = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (V.default.track(Y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: Q.G2.COLLECTION_INDEX,
                        page_category: o,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(Q.G2.CATALOG)));
            },
            [s, a?.sessionId, l, o],
        ),
        u = n.useCallback(
            (e, l) =>
                (0, t.jsxs)("span", {
                    className: r()(el.u, { [el.kG]: l }),
                    children: [e.label, !l && (0, t.jsx)("span", { className: el.Tl, children: "/" })],
                }),
            [],
        );
    return (0, t.jsx)(G.A, {
        className: el.C2,
        separatorClassName: el.Lw,
        breadcrumbs: c,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function ed() {
    return (0, t.jsxs)("div", {
        className: el.kL,
        children: [
            (0, t.jsx)(Z.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: Q.G2.COLLECTION_INDEX }),
            (0, t.jsx)("div", {
                className: el.hd,
                children: (0, t.jsx)("div", {
                    className: el.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, t.jsx)(q.A, {}, l)),
                }),
            }),
            (0, t.jsxs)("div", {
                className: el.t3,
                children: [
                    (0, t.jsx)("div", { className: el.bb, children: (0, t.jsx)("div", { className: el.M$ }) }),
                    (0, t.jsxs)("div", {
                        className: el.A9,
                        children: [(0, t.jsx)("div", { className: el.nl }), (0, t.jsx)("div", { className: el.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eu = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        a = es(l, "collection_index_page_content"),
        r = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(Y.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        o = n.useMemo(
            () =>
                null == a
                    ? null
                    : {
                          rankedSkuIds: a.heroRanking ?? [],
                          name: a.name,
                          unpublishedAt: a.unpublishedAt,
                          categorySkuId: a.skuId,
                          summary: a.summary,
                          type: F.g.HERO,
                          categoryStoreListingId: a.storeListingId,
                          bannerDisplayConfig: a.heroBannerDisplayConfig,
                          logoDisplayConfig: a.heroLogoDisplayConfig,
                          heroLogoUrl: a.heroLogoUrl,
                          heroBannerUrl: a.heroBannerUrl,
                          heroBannerAnimatedUrl: a.heroBannerAnimatedUrl,
                          heroRiveUrl: a.heroRiveUrl,
                      },
            [a],
        );
    if (null == a) return null;
    let c = null != a.heroBannerUrl || null != a.heroRiveUrl;
    return (0, t.jsx)(w.iM, {
        tab: Q.G2.COLLECTION_INDEX,
        children: (0, t.jsxs)("div", {
            className: el.kL,
            children: [
                c && null != o
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)("div", {
                                  className: el.rz,
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: el.zn,
                                          children: (0, t.jsx)(ec, { collectionId: l }),
                                      }),
                                      (0, t.jsx)(Z.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: Q.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, t.jsx)(ea, { category: a }),
                              (0, t.jsx)(er, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: el.AW,
                          children: [
                              (0, t.jsx)("div", { className: el.zn, children: (0, t.jsx)(ec, { collectionId: l }) }),
                              (0, t.jsx)("div", { className: el.$T, children: (0, t.jsx)(z.A, { category: a }) }),
                              (0, t.jsx)(ea, { category: a }),
                              (0, t.jsx)(er, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      }),
                (0, t.jsx)(eo, {}),
            ],
        }),
    });
};
var eh = s(146919),
    eg = s(170522);
let eC = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        a = n.useRef(null);
    (0, m.P)(x.a);
    let f = (0, eh.yB)("CollectiblesShopIndexPage");
    (0, eh.gB)();
    let { selectedTab: _, transitionToTab: N, transitionState: v } = (0, k.o)(Q.G2.COLLECTION_INDEX);
    (0, I.pE)();
    let T = (0, A.$)("collection_index_page");
    (0, S.Ay)({ stalePurchasesOK: !0, skipFetch: T }), (0, p.A)(Y.FYj);
    let B = (0, h.A)((0, o.A)()),
        F = (0, j.a)("CollectiblesShopIndexPage"),
        { category: G, state: P } = O(l, { enabled: T, includeUnpublished: (0, C.A)("shop_include_unpublished") }),
        U = (0, c.bG)([E.A], () => (null != l ? E.A.getCategory(l) : void 0)),
        D = (0, c.bG)([E.A], () => E.A.isFetchingCategories),
        M = (0, c.bG)([E.A], () => null != E.A.lastSuccessfulFetch),
        H = (0, c.bG)([E.A], () => E.A.error),
        V = T ? (G ?? void 0) : U,
        { analyticsLocations: w } = (0, L.lC)(Q.G2.COLLECTION_INDEX);
    (0, L.uS)(B, _, V?.name, v),
        n.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)(Y.BVt.COLLECTIBLES_SHOP);
        }, []);
    let X = (T ? "loading" !== P : !D && (M || null != H)) && null == V;
    return null == l || !F || X
        ? (0, t.jsx)(i.rd, { to: Y.BVt.COLLECTIBLES_SHOP })
        : V?.isOrbsExclusive === !0
          ? (0, t.jsx)(i.rd, { to: Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(Q.G2.ORBS) })
          : null == V
            ? (0, t.jsxs)("div", {
                  className: r()(eg.bx, { [eh.jP]: f }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, t.jsx)(R.G, { handleTransition: N, selectedTab: _ }),
                      (0, t.jsx)(d.Ip, { children: (0, t.jsx)(ed, {}) }),
                  ],
              })
            : (0, t.jsx)(g.f5, {
                  value: w,
                  children: (0, t.jsx)(b.R9, {
                      newValue: { sessionId: B },
                      children: (0, t.jsxs)("div", {
                          className: r()(eg.bx, { [eh.jP]: f }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, t.jsx)(R.G, { handleTransition: N, selectedTab: _ }),
                              (0, t.jsx)(y.A, { tab: _, handleTransition: N }),
                              (0, t.jsx)(d.Ip, { ref: a, children: (0, t.jsx)(eu, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
