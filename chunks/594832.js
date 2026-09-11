e.d(t, {
    B5: () => v,
    Zh: () => E,
    fw: () => k,
    pE: () => F,
    pl: () => m,
    rJ: () => U,
    sv: () => W,
    tA: () => _,
    uS: () => S,
});
var n,
    u,
    s = e(582128),
    i = e(435558),
    r = e(17928),
    o = e(96203),
    c = e(435658),
    d = e(321191),
    A = e(903209),
    f = e(280450),
    a = e(287809),
    h = e(808247),
    g = e(107563),
    p = e(855052),
    I = e(792334);
let m = 5,
    E = 350;
var S = (((n = {}).WISHLIST = "wishlist"), (n.POPULAR = "popular"), n),
    v = (((u = {}).USER_PROFILE = "user_profile"), u);
function b(l, t) {
    return null != t ? `${l}:${t}` : `${l}:default`;
}
function W(l) {
    let { wishlistIdsAndUsers: t, source: e = "user_profile" } = l,
        n = (0, r.yK)(
            [g.A],
            () =>
                t.map((l) => {
                    let { wishlistId: t } = l;
                    return null != t ? g.A.getWishlist(t) : null;
                }),
            [t],
        ),
        u = (0, r.bG)(
            [g.A],
            () =>
                t.some((l) => {
                    let { wishlistId: t } = l;
                    return null != t && g.A.isFetching(t);
                }),
            [t],
        ),
        i = (0, r.yK)(
            [g.A],
            () =>
                t.map((l) => {
                    let { wishlistId: t } = l;
                    return null != t ? g.A.getError(t) : void 0;
                }),
            [t],
        ),
        o = (0, r.yK)([d.A], () =>
            t.map((l) => {
                let { wishlistId: t, userId: e } = l;
                return null != t ? d.A.getWishlistSettings(e, t)?.updated_at : void 0;
            }),
        ),
        c = s.useMemo(() => {
            let l = {};
            return (
                t.forEach((t, e) => {
                    let { userId: n, wishlistId: u } = t;
                    e >= o.length || (l[b(n, u)] = o[e]);
                }),
                l
            );
        }, [t, o]);
    return (
        (0, s.useEffect)(() => {
            for (let { wishlistId: l, userId: n } of t) {
                if (null == l || g.A.isFetching(l) || null != g.A.getError(l)) continue;
                let t = g.A.getWishlist(l),
                    u = g.A.getUpdatedAt(l),
                    s = c[b(n, l)];
                (null == t || (null != s && u !== s)) && h.A.fetchWishlist(l, s, e);
            }
        }, [t, e, c]),
        { wishlists: n, isFetching: u, errors: i }
    );
}
function k(l) {
    let { wishlistId: t, userId: e, source: n = "user_profile" } = l,
        [u, o, A, f] = (0, r.yK)([g.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [g.A.getWishlist(t), g.A.getStatus(t), g.A.getError(t), g.A.getUpdatedAt(t)],
        ),
        a = s.useMemo(() => (null == u ? [] : (0, i.uniq)((0, p.Lh)(u))), [u]);
    (0, c.j)({ skuIds: a });
    let I = (0, r.bG)([d.A], () => {
        if (null != t && null != e) return d.A.getWishlistSettings(e, t)?.updated_at;
    });
    return (
        (0, s.useEffect)(() => {
            null == t ||
                g.A.isFetching(t) ||
                null != A ||
                ((null == u || (null != I && f !== I)) && h.A.fetchWishlist(t, I, n));
        }, [t, n, u, I, f, A]),
        { wishlist: u, isFetching: "fetching" === o, wasFetched: "success" === o || "error" === o, error: A }
    );
}
function U(l, t) {
    return (0, r.bG)([g.A], () => null != l && g.A.hasSkuId(l, t));
}
function _(l) {
    let { isGift: t, giftRecipient: e, isSocialLayerStorefrontEnabled: n = !0 } = l;
    s.useEffect(() => {
        e?.id != null && (0, A.A)(e.id);
    }, [e?.id]);
    let u = (0, o.A)({ userId: e?.id }),
        i = (0, r.bG)([d.A], () => (e?.id == null ? null : d.A.getFirstWishlistId(e.id))),
        { wishlist: c } = k({ wishlistId: null != i && t && null != e ? i : null, userId: e?.id }),
        f = (0, I.B)(c);
    return s.useMemo(() => !0 === t && null != e && (f.length > 0 || (n && u.length > 0)), [t, e, f, u, n]);
}
function F() {
    return (function (l) {
        let t = (0, r.bG)([a.default], () => a.default.getUser(l)),
            { userProfile: e, wishlistId: n } = (0, r.cf)(
                [d.A],
                () => ({
                    userProfile: null != l ? d.A.getUserProfile(l) : null,
                    wishlistId: null != l ? d.A.getFirstWishlistId(l) : null,
                }),
                [l],
            );
        return (
            s.useEffect(() => {
                null != l && null == e && null != t && null == e && (0, A.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, l, e]),
            { ...k({ wishlistId: n, userId: l }), wishlistId: n, userProfile: e }
        );
    })((0, r.bG)([f.default], () => f.default.getId()));
}
