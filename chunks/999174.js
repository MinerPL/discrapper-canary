n.d(t, { default: () => eD });
var l = n(477900),
    i = n(582128),
    a = n(731738),
    s = n(17928),
    r = n(935462),
    d = n(815021),
    c = n(289873),
    o = n(297264),
    u = n(834730),
    g = n(821609),
    m = n(807393),
    x = n(402860),
    h = n(403777),
    _ = n(287809),
    b = n(682618),
    v = n(982240),
    j = n(248284);
n(321073);
var y = n(503698),
    N = n.n(y),
    p = n(70283),
    f = n(508770),
    I = n(866665),
    w = n(885574),
    A = n(97808),
    E = n(123292),
    S = n(683071),
    C = n(707554),
    B = n(364522),
    T = n(404778),
    k = n(982168),
    O = n(775602),
    R = n(640708),
    U = n(780964),
    D = n(766075),
    z = n(153488),
    F = n(240248),
    G = n(609782),
    $ = n(837381),
    P = n(887129),
    M = n(741918),
    L = n(939249),
    V = n(643056),
    H = n(228366);
let Z = { seenBadgeIndicatorIds: new Set() };
class Y extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        Z = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(Z.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return Z.seenBadgeIndicatorIds;
    }
}
let J = new Y(H.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if (Z.seenBadgeIndicatorIds.has(t)) return !1;
        Z = { ...Z, seenBadgeIndicatorIds: new Set([...Z.seenBadgeIndicatorIds, t]) };
    },
});
var q = n(92111),
    K = n(486020);
function W(e, t, n) {
    let l = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, K.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var Q = n(778712),
    X = n(375708),
    ee = n(177861);
function et(e) {
    return `badge-tab-${e}`;
}
function en(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function el(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, $.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === p.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        g = null != u ? `${t.name}, ${u}` : t.name,
        m = r ? `${g}, ${X.intl.string(X.t.y2b7CA)}` : g,
        x = i.useRef(null);
    return (0, l.jsxs)(L.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: et(t.badge_id),
        "aria-label": m,
        "aria-selected": n,
        "aria-controls": n ? q.hJ : void 0,
        className: N()(ee.oL, n && ee.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: ee.Dn }),
            null != t.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ee.pW,
                }),
        ],
    });
}
function ei(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, P.Ay)({
            id: n,
            isEnabled: !0,
            orientation: M.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: ee.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)($.hD, {
                navigator: d,
                children: (0, l.jsx)($.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: ee.yq,
                            children: i.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, l.jsx)(
                                    el,
                                    {
                                        itemId: `item-${t}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: n,
                                    },
                                    e.badge_id,
                                );
                            }),
                        }),
                }),
            }),
        ],
    });
}
function ea(e) {
    let t = [],
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function es(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
            onCustomizeBadges: m,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([v.Ay], () => (null != a ? v.Ay.getBadges(a) : []), [a]),
        { earnable: _, owned: b } = i.useMemo(() => ea(h), [h]),
        { badgeIndicatorIds: j } = (function (e) {
            let { badges: t, enabled: n } = e,
                l = (0, s.bG)([J], () => J.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: i.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return (0, q.Ce)(t) && !l.has(t);
                                      })
                                      .map((e) => {
                                          let { badge_id: t } = e;
                                          return t;
                                      }),
                              )
                            : new Set(),
                    [t, n, l],
                ),
            };
        })({ badges: i.useMemo(() => [...b, ..._], [b, _]), enabled: x }),
        y = W(a, r, 48),
        N = (0, V.d)({ location: "BadgeDirectoryPanel" }),
        p = null != d ? en(d) : null,
        f = null != d && p !== d,
        I =
            null != p && f && null != y
                ? (0, l.jsxs)("span", {
                      className: ee._p,
                      children: [(0, l.jsx)(A.eu, { src: y, size: Q._3.SIZE_24, "aria-hidden": !0 }), p],
                  })
                : p,
        w = r && null != I ? X.intl.format(X.t.EIcwoe, { username: I }) : X.intl.string(X.t.UqnlQF),
        E = r && null != d ? X.intl.string(X.t["75s2Rq"]) : X.intl.string(X.t["62xU4E"]),
        S = r && null != d ? X.intl.formatToPlainString(X.t.BCjSZy, { username: d }) : X.intl.string(X.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: ee.ws,
        children: (0, l.jsxs)(C.F, {
            component: (0, l.jsxs)("div", {
                className: ee.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: ee.kc,
                        children: [
                            !f && null != y && (0, l.jsx)(A.eu, { src: y, size: Q._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: w }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: E }),
                ],
            }),
            children: [
                (0, l.jsxs)(B.Ip, {
                    className: ee.hG,
                    children: [
                        b.length > 0 &&
                            (0, l.jsx)(ei, {
                                label: { type: "aria", text: S },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: j,
                            }),
                        !r &&
                            _.length > 0 &&
                            (0, l.jsx)(ei, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: X.intl.string(X.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: j,
                            }),
                    ],
                }),
                (r || N) &&
                    (0, l.jsx)("div", {
                        className: ee.HO,
                        children: r
                            ? (0, l.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: X.intl.string(X.t.msyp90),
                              })
                            : (0, l.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: m,
                                  text: X.intl.string(X.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var er = n(911608),
    ed = n(847374),
    ec = n(770178),
    eo = n(194261),
    eu = n(140735),
    eg = n(836825);
function em(e) {
    let {
            badge: t,
            isViewingOtherUser: n,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = i.useId(),
        c = n && null != a,
        o = t.badge_id === p.$.PREMIUM_TENURE ? X.intl.string(s ? X.t["5WS9pL"] : X.t.crwYbF) : null,
        g = c ? X.intl.formatToPlainString(X.t.KyTwIh, { username: a }) : o,
        m = null != g && "" !== g;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m &&
                !r &&
                (0, l.jsxs)("div", {
                    className: eg.u4,
                    children: [
                        s &&
                            !c &&
                            (0, l.jsx)(eo.LockIcon, {
                                size: "xxs",
                                color: "currentColor",
                                className: eg.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, l.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eg.SV,
                role: "list",
                "aria-labelledby": m && !r ? d : void 0,
                children: t.tiers.map((e) => {
                    let i = e.owned,
                        a = !i && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: l, isViewerOnUpgradeableNitro: i } = e;
                            return n || !i || l ? (t.milestone_text ?? "") : X.intl.string(X.t.VPu695);
                        })({ tier: e, isUnlocked: i, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: N()(eg.zh, a && eg.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eg.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: i ? "text-default" : "text-muted",
                                    className: eg.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsxs)("span", {
                                                className: eg.nU,
                                                children: [
                                                    !i &&
                                                        (0, l.jsx)(eo.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eg.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, l.jsx)("span", { className: eg.nU, children: c }),
                                    ],
                                }),
                                (0, l.jsx)(eu.A, { children: X.intl.string(i ? X.t.sTFApF : X.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ex = n(652215),
    eh = n(600409);
let e_ = new Set([p.$.GAME_TIME, p.$.GAME_VARIETY, p.$.STREAMING]);
function eb(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = i.useState(!1),
        [g, m] = i.useState(t.badge_id),
        x = i.useId(),
        h = i.useId(),
        _ = i.useRef(null),
        b = i.useRef(null);
    t.badge_id !== g && (m(t.badge_id), o(!1));
    let v = i.useCallback(() => {
            let e = _.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        j = i.useCallback(
            (e) => {
                null != e.target && c && v();
            },
            [c, v],
        );
    (0, ec.g)(b, j, [c], { enabled: c });
    let y = n ?? t,
        p = (0, s.bG)([z.A], () => z.A.hasConsented(ex.YAq.PERSONALIZATION)),
        f = !a && e_.has(t.badge_id) && !p,
        I = a ? void 0 : y.next_tier,
        w = a ? void 0 : y.current_tier,
        A = null != I ? y.tiers.find((e) => e.key === I) : void 0,
        E = null != w ? y.tiers.find((e) => e.key === w) : void 0,
        S = a ? void 0 : y.progress?.[0],
        C = S?.threshold ?? A?.requirements[0]?.threshold ?? null,
        B = !a && y.owned && null != A,
        k = a || (0, F.uJ)(y.leveling_instructions) || B ? void 0 : y.leveling_instructions,
        O = A?.name != null ? X.intl.formatToPlainString(X.t["Jn+COZ"], { tier_name: A.name }) : void 0,
        R = c ? X.intl.string(X.t["065Hig"]) : X.intl.string(X.t.MylOvg),
        U = a ? t : y,
        D = E?.complex_icon_static_url ?? E?.simple_icon_url,
        G = A?.complex_icon_static_url ?? A?.simple_icon_url,
        $ = !(0, F.uJ)(S?.progress_helper_text),
        P = null != O ? { "aria-labelledby": h } : { "aria-label": X.intl.string(X.t.Uwhb1l) };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != k && (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: k }),
            B &&
                !f &&
                (0, l.jsxs)("div", {
                    className: eh.ES,
                    children: [
                        null != D &&
                            (0, l.jsx)("img", { className: eh.Tw, src: D, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, l.jsxs)("div", {
                            className: eh.Bd,
                            children: [
                                null != O && (0, l.jsx)(u.E, { id: h, variant: "text-sm/medium", children: O }),
                                null != C
                                    ? (0, l.jsx)(er.z, {
                                          value: S?.current ?? 0,
                                          minValue: S?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: eh.hr,
                                          ...P,
                                      })
                                    : null != S &&
                                      (0, l.jsx)(er.z, { isIndeterminate: !0, size: "md", className: eh.hr, ...P }),
                                $ &&
                                    (0, l.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: S?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != G &&
                            (0, l.jsx)("img", { className: eh.Tw, src: G, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            B && !f
                ? (0, l.jsxs)("div", {
                      className: eh.JC,
                      children: [
                          (0, l.jsx)("div", {
                              ref: b,
                              className: N()(eh.ne, c && eh.GB),
                              id: x,
                              children: (0, l.jsx)("div", {
                                  className: eh.zL,
                                  inert: !c,
                                  children: (0, l.jsxs)("div", {
                                      className: eh.GA,
                                      children: [
                                          (0, l.jsx)(T.c, { className: eh.yF }),
                                          (0, l.jsx)(em, {
                                              badge: U,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, l.jsxs)(L.D, {
                              innerRef: _,
                              className: eh.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, l.jsx)(u.E, {
                                      className: eh.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: R,
                                  }),
                                  (0, l.jsx)(ed.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: N()(eh.ai, c && eh.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(em, { badge: U, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var ev = n(536001),
    ej = n(260981),
    ey = n(540418),
    eN = n(907085),
    ep = n(179820),
    ef = n(174459);
function eI(e) {
    let { actionName: t, badge: n, displayedUserId: l, isSociallyNavigated: i } = e,
        a = _.default.getCurrentUser()?.id,
        s = null != n && null != a ? v.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? v.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != l ? v.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    ef.default.track(ex.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: n?.badge_id,
        badge_tier: null != n ? ((n.owned ? n.current_tier : n.next_tier) ?? n.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: n?.is_earnable ?? !1,
        is_socially_navigated: i,
        total_badges_owned: d,
    });
}
var ew = n(202541);
let eA = [X.t["6zFA/T"], X.t.wzZHKl, X.t["+ED/nf"]];
function eE() {
    let e = Math.floor(Math.random() * eA.length);
    return X.intl.string(eA[e]);
}
function eS(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, l.jsxs)("div", {
        className: N()(ee.AX, ee.aS),
        children: [
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: ee.NM, children: t }),
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: ee.MZ, children: n }),
        ],
    });
}
function eC(e) {
    let { rarityBadgeProps: t } = e;
    return (0, l.jsxs)("div", {
        className: N()(ee.AX, ee.sn),
        children: [
            (0, l.jsx)(f.E, { ...t }),
            (0, l.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: X.intl.string(X.t["phYZe+"]),
            }),
        ],
    });
}
function eB() {
    return (0, l.jsx)(I.m, {
        text: X.intl.string(X.t.goKu4e),
        children: (0, l.jsxs)("span", {
            className: ee.Gb,
            children: [
                (0, l.jsx)(w.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: ee.LS,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: X.intl.string(X.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eT() {
    return (0, l.jsx)(R.A, { height: 3, width: 3, "aria-hidden": "true", className: ee.zN });
}
function ek(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: ee.U3,
              children: t.map((e, t) => {
                  let { key: n, node: i } = e;
                  return (0, l.jsxs)("span", { className: ee.Hq, children: [t > 0 && (0, l.jsx)(eT, {}), i] }, n);
              }),
          });
}
function eO(e) {
    let {
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: i,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        g = (0, F.uJ)(t.info_label) ? void 0 : t.info_label,
        m = (0, q.HW)(t.badge_id),
        { statusText: x, toggleText: h } = (function (e) {
            let t,
                n,
                {
                    badge: l,
                    isOwnProfile: i,
                    isViewingOtherUser: a,
                    targetUsername: s,
                    targetOwnsBadge: r,
                    viewerOwnsBadge: d,
                    unlockedStatusText: c,
                } = e;
            if (
                ((t = i
                    ? l.owned
                        ? c
                        : X.intl.string(X.t.uHtDcT)
                    : a && null != s
                      ? X.intl.formatToPlainString(X.t.Eo5Cnp, { username: en(s) })
                      : l.owned
                        ? c
                        : X.intl.string(X.t.uHtDcT)),
                !i)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (n = X.intl.string(X.t.yxEAGH))
                    : e && (n = X.intl.formatToPlainString(X.t["9GNsge"], { username: en(s) }));
            }
            return { statusText: t, toggleText: n };
        })({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: i,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    (m && _.push({ key: "beta", node: (0, l.jsx)(eB, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, l.jsxs)("span", {
                    className: ee.pC,
                    children: [
                        !n && null != s && (0, l.jsx)(A.eu, { src: s, size: Q._3.SIZE_16, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: ee.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != g &&
            _.push({
                key: "info",
                node: (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: ee.$L,
                    children: g,
                }),
            }));
    let b = _.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, l.jsx)(E.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: o,
                          text: h,
                      }),
                  }
                : void 0,
        j = b || null == v ? _ : [..._, v];
    return 0 === j.length && null == v
        ? null
        : (0, l.jsxs)("div", {
              className: ee.rI,
              children: [(0, l.jsx)(ek, { segments: j }), b && null != v && (0, l.jsx)(ek, { segments: [v] })],
          });
}
function eR(e) {
    let t,
        n,
        a,
        r,
        c,
        m,
        x,
        {
            badge: h,
            viewerBadge: b,
            onClose: j,
            isOwnProfile: y,
            isViewingOtherUser: f,
            targetUsername: I,
            displayedUserId: w,
            targetOwnsBadge: A,
            viewerOwnsBadge: E,
            onToggleViewedUser: R,
            onViewOwnCatalog: $,
        } = e,
        P = W(w, f, 32),
        M = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(h),
        L = (0, s.bG)([O.Ay], () => O.Ay.useReducedMotion)
            ? void 0
            : (M?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        V = M?.complex_icon_static_url ?? h.complex_icon_static_url,
        H = M?.simple_icon_url ?? h.simple_icon_url,
        Z = L ?? V ?? H,
        Y =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case ev.x.COMMON:
                        return { type: { text: X.intl.string(X.t.L0K5ci) }, variant: "rarity-common", icon: ej.p };
                    case ev.x.RARE:
                        return { type: { text: X.intl.string(X.t["sTx/5z"]) }, variant: "rarity-rare", icon: ey.A };
                    case ev.x.EPIC:
                        return { type: { text: X.intl.string(X.t.RD8RiN) }, variant: "rarity-epic", icon: eN.b };
                    case ev.x.MYTHIC:
                        return { type: { text: X.intl.string(X.t.vqc1ol) }, variant: "rarity-mythic", icon: ep.O };
                    default:
                        return null;
                }
            })(M?.rarity ?? h.rarity) ?? void 0,
        J = (0, q.Om)(h.badge_id),
        K = h.badge_id === p.$.PREMIUM_TENURE,
        Q = K ? (M?.name ?? M?.key) : M?.name,
        en = K ? X.intl.string(X.t.Ipxkog) : h.name;
    K ? (r = null != Q ? `${en} ${Q}` : en) : null != Q ? ((a = en), (r = Q)) : (r = en);
    let el = (0, G.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== p.$.STAFF,
        ei = (h.tiers?.length ?? 0) > 0,
        ea = (0, v.H5)(h),
        es = (function (e) {
            let [t, n] = i.useState(eE),
                [l, a] = i.useState(e);
            return (e !== l && (a(e), n(eE())), t);
        })(h.badge_id);
    c = h.owned
        ? h.badge_id === p.$.APRIL_FOOLS_2026
            ? X.intl.string(X.t["5LcHT0"])
            : el && null == ea
              ? es
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(X.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(ea)
        : ei
          ? "--"
          : void 0;
    let er = ((n = null == (t = h.tiers?.[0]?.key) || M?.key === t), X.intl.string(n ? X.t.WDhIz2 : X.t.wYaDmz)),
        ed = null != c && h.badge_id !== p.$.STAFF,
        ec = null != Y,
        eo = null;
    ((ed || ec) &&
        (eo = (0, l.jsxs)("div", {
            className: N()(ee.$S, (!ed || !ec) && ee.jQ),
            children: [
                ed && null != c && (0, l.jsx)(eS, { earnedDateText: c, label: er }),
                ec && (0, l.jsx)(eC, { rarityBadgeProps: Y }),
            ],
        })),
        ed || (m = X.intl.string(X.t.sTFApF)));
    let eu = b?.owned === !0 && (b.tiers?.length ?? 0) > 0 && null == b.next_tier,
        eg = _.default.getCurrentUser()?.premiumType,
        em = K && (eg === ew.PremiumTypes.TIER_0 || eg === ew.PremiumTypes.TIER_1);
    x = eu ? X.intl.string(X.t.jY5xAL) : em ? X.intl.string(X.t.qkwSSp) : (b?.description ?? h.description);
    let eh = i.useCallback(() => {
            null != J &&
                (eI({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: f,
                }),
                j(),
                k.A.popAll(),
                J.ctaAction());
        }, [h, w, f, J, j]),
        e_ =
            !f || h.is_earnable || E || h.badge_id === p.$.STAFF
                ? null
                : (0, l.jsx)(S.w, { type: "info", children: X.intl.format(X.t.vFekBs, { onViewBadges: $ }) }),
        ef = (0, s.bG)([z.A], () => z.A.hasConsented(ex.YAq.PERSONALIZATION)),
        eA = (0, q.Jn)(h.badge_id) && !f && !ef;
    return (0, l.jsx)(C.F, {
        forceLevel: 2,
        children: (0, l.jsx)("div", {
            id: q.hJ,
            role: "tabpanel",
            "aria-labelledby": et(h.badge_id),
            className: ee.SV,
            children: (0, l.jsxs)(B.d_, {
                className: ee.C9,
                children: [
                    (0, l.jsx)("div", { className: ee.Gw, children: (0, l.jsx)(d.J, { onClick: j, size: "sm" }) }),
                    null != Z &&
                        (0, l.jsx)("img", {
                            className: N()(ee.y2, null != L && Z === L && ee.hu),
                            src: Z,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, l.jsxs)("div", {
                        className: ee.OU,
                        children: [
                            (0, l.jsx)("div", {
                                className: ee.cQ,
                                children: (0, l.jsxs)("div", {
                                    className: ee.nj,
                                    children: [
                                        (0, l.jsxs)(o.D, {
                                            variant: K ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: N()(ee._r, K && ee.ve),
                                            children: [
                                                null != a &&
                                                    (0, l.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        className: ee.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, l.jsx)(eO, {
                                            badge: h,
                                            isOwnProfile: y,
                                            isViewingOtherUser: f,
                                            targetUsername: I,
                                            viewedAvatarSrc: P,
                                            targetOwnsBadge: A,
                                            viewerOwnsBadge: E,
                                            unlockedStatusText: m,
                                            onToggleViewedUser: R,
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: ee.oA,
                                children: [
                                    eA &&
                                        (0, l.jsx)(S.w, {
                                            type: "info",
                                            children: X.intl.format(X.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, D.openUserSettings)(U.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eo,
                                    !(0, F.uJ)(x) &&
                                        (0, l.jsxs)("div", {
                                            className: ee.d9,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: ee.E4,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: ee.jv,
                                                            children: [
                                                                el &&
                                                                    (0, l.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ee.c$,
                                                                        children: X.intl.string(X.t["/Gmn3f"]),
                                                                    }),
                                                                (0, l.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: ee.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != J &&
                                                            (0, l.jsx)(g.$, {
                                                                variant: em
                                                                    ? "expressive"
                                                                    : E
                                                                      ? "secondary"
                                                                      : K
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: eh,
                                                                text: J.ctaLabel({
                                                                    owned: E,
                                                                    isViewerOnUpgradeableNitro: em,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (h.tiers?.length ?? 0) > 0 &&
                                                    (0, l.jsxs)("div", {
                                                        className: ee.cJ,
                                                        children: [
                                                            (0, l.jsx)(T.c, {}),
                                                            (0, l.jsx)(eb, {
                                                                badge: h,
                                                                viewerBadge: b,
                                                                isViewingOtherUser: f,
                                                                targetUsername: I,
                                                                isViewerOnUpgradeableNitro: em,
                                                            }),
                                                        ],
                                                    }),
                                                null != e_ && (0, l.jsx)("div", { className: ee.Z6, children: e_ }),
                                            ],
                                        }),
                                    (0, F.uJ)(x) && e_,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eU = n(470739);
function eD(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: y,
            targetUserId: N,
            targetUsername: p,
            viewingCurrentUserBadges: f,
        } = e,
        I = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        w = null == N || N === I,
        A = !w && null != N && !0 !== f,
        E = A ? N : I,
        S = null != E ? `viewed_user:${A ? "other" : "self"}` : void 0,
        [C, B] = i.useState(y ?? null),
        T = (0, s.yK)([v.Ay], () => (null != E ? v.Ay.getBadges(E) : []), [E]),
        k = (0, s.bG)([v.Ay], () => null != E && v.Ay.hasCatalogFor(E), [E]),
        O = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(E), [E]);
    (i.useEffect(() => {
        null != E && (v.Ay.hasCatalogFor(E) ? v.Ay.isCatalogStaleFor(E) && (0, b.RS)(E) : (0, b.RS)(E));
        let e = A ? I : N;
        w || null == e || v.Ay.hasCatalogFor(e) || (0, b.RS)(e);
    }, [E, w, A, I, N]),
        i.useEffect(() => {
            null != S && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [S] });
        }, [S]));
    let R = i.useMemo(() => {
            let { earnable: e, owned: t } = ea(T);
            return A ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [T, A]),
        U = null != C && null != E ? v.Ay.getBadgeById(C, E) : void 0,
        D = null != R && null != E ? v.Ay.getBadgeById(R, E) : void 0,
        z = U ?? D,
        F = !k && !O,
        G = !k && O,
        $ = !A;
    i.useEffect(() => {
        G && null != S && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [S] });
    }, [G, S]);
    let P = (0, s.bG)([v.Ay], () => null != N && null != z && (v.Ay.getBadgeById(z.badge_id, N)?.owned ?? !1), [z, N]),
        M = (0, s.bG)([v.Ay], () => (null != I && null != z ? v.Ay.getBadgeById(z.badge_id, I) : void 0), [z, I]),
        L = M?.owned ?? !1,
        V = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eU._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        H = i.useCallback(() => {
            null != N &&
                null != z &&
                (A
                    ? V({
                          initialBadgeId: z.badge_id,
                          targetUserId: N,
                          targetUsername: p,
                          viewingCurrentUserBadges: !0,
                      })
                    : V({ initialBadgeId: z.badge_id, targetUserId: N, targetUsername: p }));
        }, [A, z, V, N, p]),
        Z = i.useCallback(() => {
            null != I &&
                null != N &&
                (eI({ actionName: "view_your_badges_pressed", badge: z, displayedUserId: E, isSociallyNavigated: A }),
                V({ targetUserId: N, targetUsername: p, viewingCurrentUserBadges: !0 }));
        }, [I, E, A, z, V, N, p]),
        Y = i.useCallback(() => {
            null != E && (0, b.RS)(E, { isRetry: !0 });
        }, [E]),
        J = i.useCallback(() => {
            (eI({ actionName: "badge_directory_closed", badge: z, displayedUserId: E, isSociallyNavigated: A }), n());
        }, [E, A, n, z]),
        K = i.useCallback(() => {
            null != I &&
                (eI({
                    actionName: "customize_your_badges_pressed",
                    badge: z,
                    displayedUserId: E,
                    isSociallyNavigated: A,
                }),
                J(),
                j.A.setState({ isOpen: !0 }),
                (0, h.kN)(I) || (0, x.openUserProfileModal)({ userId: I }));
        }, [I, E, J, A, z]),
        W = z?.badge_id;
    return (
        i.useEffect(() => {
            null != W && $ && (0, q.Ce)(W) && (0, b.PV)(W);
        }, [W, $]),
        i.useEffect(() => {
            null != z &&
                eI({ actionName: "badge_detail_viewed", badge: z, displayedUserId: E, isSociallyNavigated: A });
        }, [W, E, A]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": X.intl.string(X.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: ee.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ee.jE,
                children: [
                    (F || G || null == z) &&
                        (0, l.jsx)("div", { className: ee.b, children: (0, l.jsx)(d.J, { onClick: J, size: "sm" }) }),
                    F
                        ? (0, l.jsx)("div", { className: ee.Lq, children: (0, l.jsx)(c.y, {}) })
                        : G
                          ? (0, l.jsxs)("div", {
                                className: ee.IU,
                                children: [
                                    (0, l.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: X.intl.string(X.t.iufib1),
                                    }),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: ee.TQ,
                                        children: X.intl.string(X.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Y,
                                        text: X.intl.string(X.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(es, {
                                        selectedBadgeId: z?.badge_id ?? null,
                                        onSelectBadge: B,
                                        displayedUserId: E,
                                        isViewingOtherUser: A,
                                        targetUsername: p,
                                        onViewOwnCatalog: Z,
                                        onCustomizeBadges: K,
                                        showBadgeIndicators: $,
                                    }),
                                    null != z &&
                                        (0, l.jsx)(eR, {
                                            badge: z,
                                            viewerBadge: M,
                                            onClose: J,
                                            isOwnProfile: w,
                                            isViewingOtherUser: A,
                                            targetUsername: p,
                                            displayedUserId: E,
                                            targetOwnsBadge: P,
                                            viewerOwnsBadge: L,
                                            onToggleViewedUser: H,
                                            onViewOwnCatalog: Z,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
