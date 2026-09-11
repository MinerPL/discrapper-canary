(s.r(l), s.d(l, { default: () => eg }));
var n = s(477900),
    t = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(806163),
    c = s(132500),
    o = s(17928),
    d = s(364522),
    u = s(944791),
    h = s(444927),
    g = s(688810),
    C = s(354328),
    x = s(475073),
    p = s(611924),
    m = s(744082),
    I = s(561794),
    b = s(440938),
    j = s(590180),
    E = s(50920),
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
        n = l && null != e ? e : "";
    t.useEffect(() => {
        "" !== n && N.p.requestCollections([n], { includeUnpublished: s });
    }, [n, s]);
    let { collection: a, fetchState: r } = (0, o.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(n), fetchState: _.A.getFetchState(n) }),
            [n],
        ),
        i = (0, T.Hd)(n, r),
        c = t.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        d = t.useMemo(() => ("error" === r || i ? "error" : null != c ? "ready" : "loading"), [r, i, c]);
    return {
        category: c,
        state: d,
        retry: t.useCallback(() => {
            "" !== n &&
                (0, f._v)({
                    collectionIds: [n],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    ignoreCache: !0,
                });
        }, [n, s]),
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
    $ = s(652215),
    Y = s(828515),
    z = s(258245),
    K = s(484469),
    q = s(196231),
    J = s(337183),
    Z = s(758836),
    Q = s(375708),
    ee = s(146053);
function el(e, l) {
    let s = (0, A.$)(l),
        { category: n } = O(e, { enabled: s, includeUnpublished: (0, C.A)("shop_include_unpublished") }),
        t = (0, o.bG)([j.A], () => j.A.getCategory(e));
    return s ? (n ?? void 0) : t;
}
let es = { aspectRatio: "1 / 1" },
    en = {
        [B.R.PROFILE_EFFECT]: { className: ee.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: ee.kP, aspectRatio: "2 / 1" },
    };
function et(e) {
    let { category: l } = e,
        s = (0, o.bG)([H.default], () => H.default.getCurrentUser()),
        t = (0, W.p)()(l.products);
    return null == s || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: ee.hd,
              children: (0, n.jsx)("div", {
                  className: ee.fr,
                  children: t.map((e, l) => {
                      let { className: s, aspectRatio: t } =
                          en[
                              e.type === B.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                  ? B.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? es;
                      return (0, n.jsx)(
                          b.R9,
                          {
                              newValue: { tilePosition: l },
                              children: (0, n.jsx)(z.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function ea(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        a = (0, A.$)("collection_index_related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: n = !0 } = e,
                a = t.useMemo(() => ({ applicationId: $.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                r = n && null != l && "" !== l,
                i = (0, f.HX)(a);
            t.useEffect(() => {
                r && (0, f.Su)(a);
            }, [r, a]);
            let { collectionIds: c, fetchState: d } = (0, o.cf)(
                    [_.A],
                    () => ({
                        collectionIds: _.A.getCollectionsAfterIds(i),
                        fetchState: _.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                u = t.useMemo(() => (r ? (c ?? []) : []), [r, c]),
                h = u.join(","),
                g = (0, o.cf)(
                    [_.A],
                    () => {
                        let e = {};
                        for (let l of u) e[l] = _.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [u],
                );
            return {
                categories: t.useMemo(
                    () =>
                        u
                            .map((e) => g[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
                    [h, g],
                ),
                isLoading: r && null == c && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: a }),
        i = (0, o.bG)([j.A], () => j.A.categories),
        c = t.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !Z.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        d = t.useMemo(() => {
            if (a) return r.filter(c).slice(0, 8);
            let e = [...i.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let l = 1; l <= e.length && n.length < 8; l++) {
                let t = e[(s + l) % e.length];
                c(t) && t.products.length > 0 && n.push(t);
            }
            return n;
        }, [a, r, i, l, c]);
    return 0 === d.length
        ? null
        : (0, n.jsxs)("div", {
              className: ee.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: ee.bb,
                      children: (0, n.jsx)(P.D, {
                          variant: "heading-lg/semibold",
                          children: Q.intl.string(Q.t.EhRZ9o),
                      }),
                  }),
                  (0, n.jsx)(
                      D.A,
                      {
                          gap: "xl",
                          scrollBehavior: M.Uf.ITEM,
                          children: d.map((e, l) =>
                              (0, n.jsx)(
                                  b.R9,
                                  {
                                      newValue: {
                                          categoryPosition: l,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: l,
                                      },
                                      children: (0, n.jsx)("div", {
                                          className: ee.EU,
                                          children: (0, n.jsx)(q.S, {
                                              category: e,
                                              badgeText: (0, X.HF)(e.unpublishedAt)
                                                  ? Q.intl.string(Q.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: s,
                                              pageType: Z.G2.COLLECTION_INDEX,
                                              className: ee.vK,
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
let er = [
    { tab: Z.G2.AVATAR_DECORATIONS, label: () => Q.intl.string(Q.t.dRZYNE) },
    { tab: Z.G2.PROFILE_EFFECTS, label: () => Q.intl.string(Q.t["1cNjtx"]) },
    { tab: Z.G2.NAMEPLATES, label: () => Q.intl.string(Q.t.V68Fqz) },
    { tab: Z.G2.PROFILE_FRAMES, label: () => Q.intl.string(Q.t.ecTJkR) },
    { tab: Z.G2.BUNDLES, label: () => Q.intl.string(Q.t.FYFpps) },
];
function ei() {
    let e = (0, i.W6)();
    return (0, n.jsxs)("div", {
        className: ee.nb,
        children: [
            (0, n.jsx)(P.D, { variant: "heading-md/semibold", children: Q.intl.string(Q.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: ee.J2,
                children: er.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        U.$,
                        { variant: "secondary", text: t(), onClick: () => e.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
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
        c = el(l, "collection_index_breadcrumb")?.name,
        o = t.useMemo(
            () => [
                { id: "shop_all", label: Q.intl.string(Q.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (V.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: Z.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(Z.G2.CATALOG)));
            },
            [s, a?.sessionId, l, c],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: r()(ee.u, { [ee.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: ee.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(G.A, {
        className: ee.C2,
        separatorClassName: ee.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eo() {
    return (0, n.jsxs)("div", {
        className: ee.kL,
        children: [
            (0, n.jsx)(J.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: Z.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: ee.hd,
                children: (0, n.jsx)("div", {
                    className: ee.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(K.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: ee.t3,
                children: [
                    (0, n.jsx)("div", { className: ee.bb, children: (0, n.jsx)("div", { className: ee.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: ee.A9,
                        children: [(0, n.jsx)("div", { className: ee.nl }), (0, n.jsx)("div", { className: ee.nl })],
                    }),
                ],
            }),
        ],
    });
}
let ed = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        a = el(l, "collection_index_page_content"),
        r = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push($.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        c = t.useMemo(
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
    let o = null != a.heroBannerUrl || null != a.heroRiveUrl;
    return (0, n.jsx)(w.iM, {
        tab: Z.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: ee.kL,
            children: [
                o && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: ee.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: ee.zn,
                                          children: (0, n.jsx)(ec, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(J.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: Z.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(et, { category: a }),
                              (0, n.jsx)(ea, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: ee.AW,
                          children: [
                              (0, n.jsx)("div", { className: ee.zn, children: (0, n.jsx)(ec, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: ee.$T, children: (0, n.jsx)(Y.A, { category: a }) }),
                              (0, n.jsx)(et, { category: a }),
                              (0, n.jsx)(ea, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      }),
                (0, n.jsx)(ei, {}),
            ],
        }),
    });
};
var eu = s(146919),
    eh = s(170522);
let eg = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        a = t.useRef(null);
    (0, p.P)(x.a);
    let f = (0, eu.yB)("CollectiblesShopIndexPage");
    (0, eu.gB)();
    let { selectedTab: _, transitionToTab: N, transitionState: v } = (0, k.o)(Z.G2.COLLECTION_INDEX);
    (0, I.pE)();
    let T = (0, A.$)("collection_index_page");
    ((0, S.Ay)({ stalePurchasesOK: !0, skipFetch: T }), (0, m.A)($.FYj));
    let B = (0, h.A)((0, c.A)()),
        F = (0, E.a)("CollectiblesShopIndexPage"),
        { category: G, state: P } = O(l, { enabled: T, includeUnpublished: (0, C.A)("shop_include_unpublished") }),
        U = (0, o.bG)([j.A], () => (null != l ? j.A.getCategory(l) : void 0)),
        D = (0, o.bG)([j.A], () => j.A.isFetchingCategories),
        M = (0, o.bG)([j.A], () => null != j.A.lastSuccessfulFetch),
        H = (0, o.bG)([j.A], () => j.A.error),
        V = T ? (G ?? void 0) : U,
        { analyticsLocations: w } = (0, L.lC)(Z.G2.COLLECTION_INDEX);
    ((0, L.uS)(B, _, V?.name, v),
        t.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, u.I)($.BVt.COLLECTIBLES_SHOP);
        }, []));
    let X = (T ? "loading" !== P : !D && (M || null != H)) && null == V;
    return null == l || !F || X
        ? (0, n.jsx)(i.rd, { to: $.BVt.COLLECTIBLES_SHOP })
        : V?.isOrbsExclusive === !0
          ? (0, n.jsx)(i.rd, { to: $.BVt.COLLECTIBLES_SHOP_WITH_TAB(Z.G2.ORBS) })
          : null == V
            ? (0, n.jsxs)("div", {
                  className: r()(eh.bx, { [eu.jP]: f }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(R.G, { handleTransition: N, selectedTab: _ }),
                      (0, n.jsx)(d.Ip, { children: (0, n.jsx)(eo, {}) }),
                  ],
              })
            : (0, n.jsx)(g.f5, {
                  value: w,
                  children: (0, n.jsx)(b.R9, {
                      newValue: { sessionId: B },
                      children: (0, n.jsxs)("div", {
                          className: r()(eh.bx, { [eu.jP]: f }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(R.G, { handleTransition: N, selectedTab: _ }),
                              (0, n.jsx)(y.A, { tab: _, handleTransition: N }),
                              (0, n.jsx)(d.Ip, { ref: a, children: (0, n.jsx)(ed, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
