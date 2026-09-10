n.d(t, { A: () => et });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    o = n.n(s),
    u = n(17928),
    c = n(364840),
    d = n(821609),
    m = n(862482),
    p = n(109802),
    C = n(452027),
    h = n(778712),
    f = n(297264),
    E = n(289873),
    S = n(890497),
    y = n(398590),
    I = n(717398),
    A = n(966327),
    g = n(769015),
    P = n(242874),
    v = n(580194),
    _ = n(192308),
    x = n(219271),
    T = n(427358),
    N = n(7133),
    b = n(994500),
    j = n(351906),
    R = n(287809),
    M = n(957565),
    O = n(45938),
    L = n(158045),
    k = n(427262),
    w = n(951305),
    U = n(331322),
    D = n(834730),
    G = n(683071),
    F = n(696208),
    B = n(869038),
    H = n(793574),
    W = n(688810),
    Y = n(780964),
    V = n(766075),
    K = n(403362),
    Z = n(482132),
    q = n(375708),
    z = n(341535),
    Q = n(757716);
function $(e) {
    let {
            giftCode: t,
            giftCount: n,
            checkoutSessionId: r,
            deliveryReady: a,
            privateGiftLink: s,
            onComplete: c,
            onClose: d,
        } = e,
        [m, p] = i.useState([]),
        [C, f] = i.useState(!1),
        { isLoading: E, potentialRecipients: g } = (function () {
            i.useEffect(() => {
                (I.A.fetchRelationships(), (0, x.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, u.cf)([T.A], () => ({
                    userAffinities: T.A.getUserAffinitiesMap(),
                    isLoading: T.A.isFetching(),
                })),
                n = i.useMemo(() => Array.from(e.keys()).sort((e, t) => T.A.compare(e, t)), [e]),
                l = (0, u.bG)([b.A], () => b.A.getFriendIDs()),
                r = i.useMemo(() => [...n, ...o().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, u.yK)(
                    [R.default],
                    () =>
                        r
                            .map(R.default.getUser)
                            .filter(K.Vq)
                            .filter((e) => !e.bot),
                    [r],
                ),
            };
        })(),
        { analyticsLocations: v } = (0, W.Ay)(H.A.PREMIUM_GIFT_SUCCESS_MODAL),
        _ = (0, u.yK)([R.default], () => m.map(R.default.getUser).filter(K.Vq), [m]),
        N = n > 1,
        j = N ? !a : null == t,
        M = 1 === m.length,
        O = M ? null == t : !a,
        L = m.length > 1 && null == r,
        w = C || 0 === m.length || m.length > n || _.length !== m.length || O || L,
        $ = g.map((e) => ({
            id: e.id,
            value: e.id,
            label: k.Ay.getUserTag(e),
            leading: (0, l.jsx)(A.A, { user: e, size: h._3.SIZE_20 }),
            disabled: N && m.length >= n && !m.includes(e.id),
        }));
    async function J() {
        let e;
        f(!0);
        try {
            if (M) {
                let n = _[0];
                (await (0, P.UN)(n, t), (e = { recipients: [n], failedRecipients: [] }));
            } else {
                if (null == r) throw Error("Checkout session ID must be defined");
                let t = await (0, B.kW)(m, r),
                    n = new Set(t.successful_recipient_ids),
                    l = new Set(t.failed_recipient_ids);
                e = { recipients: _.filter((e) => n.has(e.id)), failedRecipients: _.filter((e) => l.has(e.id)) };
            }
        } catch {
            e = { recipients: [], failedRecipients: _ };
        } finally {
            f(!1);
        }
        c(e);
    }
    function X(e) {
        e.length <= n && p(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: Q.Q,
                children: [
                    (0, l.jsxs)("div", {
                        className: Q.O,
                        children: [
                            N
                                ? (0, l.jsxs)(U.B, {
                                      gap: 8,
                                      children: [
                                          (0, l.jsxs)(U.B, {
                                              direction: "horizontal",
                                              align: "center",
                                              justify: "space-between",
                                              children: [
                                                  (0, l.jsx)(D.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      "aria-hidden": !0,
                                                      children: q.intl.string(z.default.ZolTTE),
                                                  }),
                                                  (0, l.jsx)(D.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      tabularNumbers: !0,
                                                      role: "status",
                                                      children: q.intl.format(q.t.H55rqz, {
                                                          numMembers: m.length,
                                                          maxMemberLimit: n,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(S.Z, {
                                              selectionMode: "multiple",
                                              label: q.intl.string(z.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: q.intl.string(z.default.xdDO7f),
                                              loading: E || j,
                                              disabled: j || C,
                                              value: m,
                                              onSelectionChange: X,
                                              options: $,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(S.Z, {
                                      selectionMode: "single",
                                      label: q.intl.string(q.t.MJw05f),
                                      placeholder: q.intl.string(q.t.J019jZ),
                                      loading: E || j,
                                      disabled: j || C,
                                      value: m[0],
                                      onSelectionChange: (e) => X(null != e ? [e] : []),
                                      options: $,
                                  }),
                            s,
                        ],
                    }),
                    (0, l.jsx)(G.w, {
                        type: "info",
                        children: q.intl.format(z.default.ZvgWUV, {
                            giftCount: n,
                            onInventoryClick: function () {
                                (d(), (0, y.bz)(), (0, V.openUserSettings)(Y.X.GIFT_PANEL, { analyticsLocations: v }));
                            },
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(Z.UX, {
                children: (0, l.jsx)(F.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: q.intl.string(z.default["qTXpj/"]),
                            disabled: C,
                            onClick: function () {
                                (d(), (0, y.bz)());
                            },
                        },
                        { variant: "primary", text: q.intl.string(q.t["+EgwQn"]), disabled: w, loading: C, onClick: J },
                    ],
                }),
            }),
        ],
    });
}
var J = n(652215),
    X = n(202541),
    ee = n(392309);
function et(e) {
    let {
            giftCode: t,
            giftCount: r = 1,
            checkoutSessionId: s,
            giftCodeDeliveryReady: o = !1,
            shouldUsePostPurchaseRecipientDelivery: S = !1,
            application: I,
            sku: P,
            subscriptionPlan: x,
            selectedGiftStyle: T,
            onClose: b,
            hasSentMessage: R,
            giftRecipient: U,
            giftMessageError: D,
            isSendingMessage: G,
        } = e,
        [F, B] = i.useState(p.e.Modes.DEFAULT),
        H = (0, u.bG)([j.A], () => j.A.enabled),
        W = R || (null != T && null != U),
        Y = P?.productLine === J.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: V,
            openGiftingBadgePostPurchaseModal: K,
            canShowGiftingBadgePostPurchase: z,
        } = (0, w.Pv)(),
        Q = (0, v.Mq)(x) && V.length > 0,
        et = z && 0 === V.length;
    function el() {
        return null != x ? x.skuId : null != P ? P.id : null;
    }
    function ei() {
        let e;
        return null != D
            ? q.intl.string(q.t.qB8aya)
            : null == x
              ? null
              : ((e = x.interval === X.WT.MONTH ? (W ? q.t["4ZJ+7Z"] : q.t["P+z55d"]) : W ? q.t.p0pZXP : q.t.bXqk3o),
                q.intl.format(e, { skuName: (0, L.RH)(x.id), intervalCount: x.intervalCount }));
    }
    function er() {
        let e;
        if (null == t) return null;
        switch (F) {
            case p.e.Modes.SUCCESS:
                e = q.intl.string(q.t.XVvPjU);
                break;
            case p.e.Modes.ERROR:
                e = q.intl.string(q.t.i4GM3L);
                break;
            default:
                e = q.intl.string(q.t.OpuAlK);
        }
        return (0, l.jsx)(C.D, {
            label: q.intl.string(q.t["/dG4NA"]),
            children: (0, l.jsx)(p.e, {
                hideMessage: H ? q.intl.string(q.t["0RLn47"]) : null,
                value: (0, O.Zq)(t),
                mode: F,
                text: e,
                onCopy: (e) => {
                    (null != P && (0, O.AK)(new N.A({ code: t, maxUses: 1 }), P),
                        (0, M.C)(
                            e,
                            () => B(p.e.Modes.SUCCESS),
                            () => B(p.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            B(p.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: M.p5,
                className: ee.__invalid_copyInput,
                buttonColor: m.XD.LINK,
                buttonLook: m.pR.LINK,
            }),
        });
    }
    return G
        ? (0, l.jsxs)("div", {
              className: ee.EL,
              children: [
                  null != I
                      ? (0, l.jsx)(g.A, { game: I, className: ee.__invalid_icon, size: g.M.LARGE, skuId: el() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : S
          ? (0, l.jsx)($, {
                giftCode: t,
                giftCount: r,
                checkoutSessionId: s,
                deliveryReady: o,
                privateGiftLink: 1 === r ? er() : null,
                onComplete: (e) => {
                    var t;
                    (b(),
                        (0, y.bz)(),
                        (t = {
                            recipients: e.recipients,
                            failedRecipients: e.failedRecipients,
                            rewardSkuIds: V,
                            purchaseQuantity: r,
                            canShowGiftingBadgePostPurchase: z,
                            openGiftingBadgePostPurchaseModal: K,
                        }),
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await n.e("692318").then(n.bind(n, 150061));
                            return (n) => (0, l.jsx)(e, { ...n, ...t });
                        }));
                },
                onClose: b,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(ee.EL, { [ee.L1]: Q }),
                        children: [
                            null != I
                                ? (0, l.jsx)(g.A, {
                                      game: I,
                                      className: ee.__invalid_icon,
                                      size: g.M.LARGE,
                                      skuId: el(),
                                  })
                                : null,
                            (0, l.jsx)(f.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [ee.wx]: null == T && !Y, [ee.$A]: null != T && !Y }),
                                children:
                                    null != U || (R && null == D)
                                        ? q.intl.string(q.t.zOmK9N)
                                        : null != D
                                          ? q.intl.string(q.t.d1lrmU)
                                          : q.intl.string(q.t["/s1xR7"]),
                            }),
                            (R && null != U && null == D) || W
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: ee.jx,
                                              children: [
                                                  (0, l.jsx)(A.A, { user: U, size: h._3.SIZE_40 }),
                                                  (0, l.jsxs)("div", {
                                                      className: ee.gn,
                                                      children: [
                                                          (0, l.jsx)(f.D, {
                                                              variant: "heading-md/semibold",
                                                              children: k.Ay.getName(U),
                                                          }),
                                                          (0, l.jsxs)("div", {
                                                              className: ee.Ik,
                                                              children: [" ", k.Ay.getUserTag(U)],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: ee._c, children: ei() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: ee.I0, children: ei() }),
                                          null == D &&
                                              (0, l.jsx)(en, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (b(), (0, y.bz)(), et && K());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: ee.yF }),
                                          (0, l.jsxs)("div", {
                                              className: ee.PN,
                                              children: [
                                                  er(),
                                                  (0, l.jsx)("div", {
                                                      className: ee.W$,
                                                      children: q.intl.string(q.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    et &&
                        (0, l.jsx)(Z.UX, {
                            children: (0, l.jsx)(c.j, {
                                children: (0, l.jsx)("div", {
                                    className: ee.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: q.intl.string(q.t.PDTjLN),
                                        onClick: () => {
                                            (b(), K());
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function en(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        (I.A.fetchRelationships(), (0, x.u)());
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [m, p] = i.useState(!1),
        { userAffinities: C, isLoading: f } = (0, u.cf)([T.A], () => ({
            userAffinities: T.A.getUserAffinitiesMap(),
            isLoading: T.A.isFetching(),
        })),
        E = Array.from(C.keys()).sort((e, t) => T.A.compare(e, t)),
        y = (0, u.bG)([b.A], () => b.A.getFriendIDs()),
        g = o().difference(y, E),
        v = [...E, ...g],
        _ = (0, u.bG)([R.default], () => R.default.filter((e) => v.includes(e.id) && !e.bot), [v]);
    if (null == _ || 0 === _.length) return null;
    let N = o().sortBy(_, (e) => v.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: ee.vt,
        children: [
            (0, l.jsxs)("div", {
                className: ee.AQ,
                children: [
                    (0, l.jsx)(S.Z, {
                        selectionMode: "single",
                        label: q.intl.string(q.t.MJw05f),
                        placeholder: q.intl.string(q.t.J019jZ),
                        loading: f,
                        value: r,
                        onSelectionChange: (e) => {
                            (a(e), c(!1));
                        },
                        options: N.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${k.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(A.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: ee.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == r,
                            loading: m,
                            onClick: () => {
                                (p(!0),
                                    (0, P.UN)(r, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            (c(!0), p(!1));
                                        }));
                            },
                            text: q.intl.string(q.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? ee.Sc : ee.W$,
                children: s ? q.intl.string(q.t.jo5Vbl) : q.intl.string(q.t["8/N3v3"]),
            }),
        ],
    });
}
