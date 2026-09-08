i.d(t, { default: () => t9 });
var n,
    s = i(477900),
    r = i(582128),
    l = i(284009),
    a = i.n(l),
    c = i(562708),
    o = i(334279),
    d = i(702841),
    u = i(778712),
    m = i(231723),
    p = i(224640),
    x = i(793574),
    g = i(688810),
    h = i(139286),
    v = i(252732),
    E = i(101058),
    f = i(836602),
    N = i(903209),
    A = i(652165),
    j = i(287809),
    I = i(174459),
    R = i(839534),
    C = i(440938),
    y = i(298072),
    _ = i(993408),
    k = i(503089),
    T = i(331884),
    L = i(652215),
    O = i(623373),
    P = i(536572),
    S = i(177366),
    b = i(575593);
function D(e, t) {
    return e.type === b.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var B = i(212407),
    M = i(935094),
    F = i(503698),
    w = i.n(F),
    U = i(939249),
    G = i(834730),
    H = i(297264),
    z = i(14702),
    V = i(758836),
    W = i(375708),
    X = i(690901);
function Z(e) {
    let { name: t, typeLabel: i } = e;
    return (0, s.jsxs)(G.E, {
        variant: "text-sm/medium",
        className: X.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: X.kx, children: t }),
            null != i && (0, s.jsx)("span", { className: X.FP, children: i }),
        ],
    });
}
let Y = { [b.R.AVATAR_DECORATION]: !0, [b.R.PROFILE_FRAME]: !0 };
function K(e) {
    let { item: t, index: i, isSelected: n, setSelected: l, label: a, trackedSkuId: c, onTrackClick: o } = e,
        d = r.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = r.useCallback(() => {
            o(V.sH.BUNDLE_VIEW_PRODUCT, c), l(i);
        }, [o, c, l, i]),
        m = !0 === Y[t.type];
    return (0, s.jsx)(U.D, {
        tag: "div",
        role: "radio",
        "aria-checked": n,
        tabIndex: n ? 0 : -1,
        className: w()(X.xn, { [X.Y4]: n, [X.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: X.Yf, children: (0, s.jsx)(z.O, { product: d }) }),
    });
}
var $ = i(442759),
    q = i(344346),
    J = i(139136),
    Q = i(395744),
    ee = i(929283),
    et = i(650228);
function ei(e) {
    let {
        item: t,
        user: i,
        bundleFirstAvatarDecoration: n,
        isBundle: r,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: o,
    } = e;
    switch (t.type) {
        case b.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: et.h1,
                children: (0, s.jsx)(ee.i, { user: i, item: t, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case b.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? et.sm : et.VY,
                children: (0, s.jsx)(J.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case b.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? et.ob : et.fE, children: (0, s.jsx)(Q.A, { frame: t }) });
        case b.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: et.Dz,
                children: (0, s.jsx)(q.A, {
                    className: et.M4,
                    nameplate: t,
                    user: i,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: n ?? a,
                    pendingDisplayNameStyles: c,
                    pendingGlobalName: o,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
}
function en(e) {
    let { user: t, selectedProduct: i, previewingProduct: n, selectedBundleSlide: r, pendingProfile: l } = e,
        a = n ?? i,
        { firstAvatarDecoration: c } = (0, $.f5)(a),
        { pendingChanges: o, pendingAvatarSrc: d } = l,
        u = a.items[r] ?? a.items[0];
    return null == u
        ? null
        : (0, s.jsx)(ei, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, _.aw)(a),
              pendingAvatarSrc: d,
              pendingAvatarDecoration: o.pendingAvatarDecoration,
              pendingDisplayNameStyles: o.pendingDisplayNameStyles,
              pendingGlobalName: o.pendingGlobalName,
          });
}
var es = i(846957);
function er(e) {
    let { selectedProduct: t, previewingProduct: i } = e;
    return (0, s.jsx)(es.B, { product: i ?? t });
}
var el = i(975571);
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return W.intl.formatToPlainString(W.t["/0Yndu"], { num: e.bundledProducts?.length });
    let i = e.bundledProducts ?? [],
        n = [],
        s = !1;
    for (let e of i)
        switch (e.type) {
            case b.R.AVATAR_DECORATION:
                n.push(W.intl.formatToPlainString(W.t.Ntv9Jt, { itemName: e.name }));
                break;
            case b.R.PROFILE_EFFECT:
                n.push(W.intl.formatToPlainString(W.t["3Y8q7a"], { itemName: e.name }));
                break;
            case b.R.NAMEPLATE:
                n.push(W.intl.formatToPlainString(W.t["2keXky"], { itemName: e.name })), (s = !0);
        }
    if (s) {
        let e = n.join(", ").replace(/, ([^,]*)$/, " & $1");
        return W.intl.formatToPlainString(W.t.Ofrqj6, { joinedItems: e });
    }
    let r = n.join(" & ");
    return W.intl.formatToPlainString(W.t.Ofrqj6, { joinedItems: r });
}
i(321073);
var ec = i(740076),
    eo = i(661847),
    ed = i(422460);
function eu(e) {
    let { skuId: t } = e;
    return (0, V.EZ)(t)
        ? (0, s.jsx)(G.E, {
              variant: "text-sm/normal",
              className: ed.CU,
              children: W.intl.format(W.t.Q1scdE, {
                  helpdeskArticle: el.A.getArticleURL(L.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function em(e) {
    let { productRecord: t, productName: i, selectedProduct: n, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        d = D(t, a) ?? n,
        u = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, r.useMemo)(() => {
                if (null != e && null != e.summary && "" !== e.summary) {
                    if (e.type === b.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                        let i = ea(e, t);
                        return e.summary.replace("{joinedItems}", i);
                    }
                    return e.summary;
                }
                switch (e?.type) {
                    case b.R.AVATAR_DECORATION:
                        return W.intl.string(W.t["3lv7q2"]);
                    case b.R.PROFILE_EFFECT:
                        return W.intl.string(W.t.VhJL72);
                    case b.R.NAMEPLATE:
                        return W.intl.string(W.t.ik37EZ);
                    case b.R.PROFILE_FRAME:
                        return W.intl.string(W.t.fWzWPp);
                    case b.R.BUNDLE:
                        return ea(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(d, !1),
        { disabledReason: m } = (0, ec.I)(n.skuId),
        p = (0, y.Q)(t),
        x = (0, O.B1)(t),
        g = x ? t.variants[a ?? p] : null,
        h = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != h.current && ((h.current.tabIndex = -1), h.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: ed.sn,
                    children: [
                        (0, s.jsx)(H.D, { ref: h, variant: "heading-xl/bold", className: ed.R_, children: i }),
                        (0, s.jsx)(G.E, { variant: "text-sm/normal", children: u }),
                        (0, s.jsx)(eu, { skuId: d.skuId }),
                        null !== m && (0, s.jsx)(G.E, { variant: "text-xs/normal", className: ed.H$, children: m }),
                    ],
                }),
                x &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != g &&
                                (0, s.jsx)(G.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ed.a9,
                                    lineClamp: 1,
                                    children: W.intl.format(W.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: ed.I8, children: g.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: ed._x,
                                children: (0, s.jsx)(eo.A, {
                                    skuId: t.skuId,
                                    onVariantEnter: c,
                                    onVariantExit: o,
                                    wrap: !0,
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var ep =
        (((n = {}).COLLECTIBLE = "COLLECTIBLE"),
        (n.BUNDLE = "BUNDLE"),
        (n.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (n.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (n.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        n),
    ex = i(97808),
    eg = i(346055),
    eh = i(993077),
    ev = i(245604),
    eE = i(460905),
    ef = i(262295),
    eN = i(685073),
    eA = i(320095),
    ej = i(963852),
    eI = i(763754),
    eR = i(20851),
    eC = i(986687),
    ey = i(158045),
    e_ = i(780898),
    ek = i(158008);
function eT(e) {
    let { user: t, innerClassName: i } = e;
    return (0, s.jsx)("div", {
        className: ek.mV,
        children: (0, s.jsx)(ef.A, {
            avatar: (0, s.jsx)(ex.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: L.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: w()(ek.$L, i),
        }),
    });
}
function eL(e) {
    let { user: t, nameplate: i, avatarDecoration: n, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, e_.Ov)();
    return (0, s.jsx)("div", {
        className: ek.nJ,
        role: "img",
        "aria-label": W.intl.formatToPlainString(W.t["95pCSf"], { a11y_text: i.label }),
        children: (0, s.jsxs)(eg.M, {
            children: [
                (0, s.jsx)(eT, { user: a.mallow, innerClassName: ek.ab }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: ek.OS,
                    children: [W.intl.string(W.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(eT, { user: a.phibi, innerClassName: ek.e9 }),
                (0, s.jsx)("div", {
                    className: ek.mV,
                    children: (0, s.jsx)(q.A, {
                        className: ek.M4,
                        innerClassName: ek.e9,
                        user: t,
                        nameplate: i,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: n,
                        pendingDisplayNameStyles: r,
                        pendingGlobalName: l,
                        hideDecorators: !0,
                    }),
                }),
                (0, s.jsx)(eT, { user: a.locke, innerClassName: ek.e9 }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: ek.OS,
                    children: [W.intl.string(W.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eT, { user: a.boom, innerClassName: ek.bD }),
                (0, s.jsx)(eT, { user: a.cherry, innerClassName: ek.bD }),
            ],
        }),
    });
}
function eO(e) {
    let {
            user: t,
            avatarDecoration: i,
            pendingAvatarSrc: n,
            pendingPrimaryGuildId: r,
            pendingDisplayNameStyles: l,
            pendingGlobalName: a,
        } = e,
        c = (function (e) {
            let { author: t } = e;
            return (0, eA.rh)({
                ...(0, ej.Ay)({ author: t, channelId: "1337", content: W.intl.string(W.t.d5YwK5) }),
                state: L.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        o = (0, eN.gS)(r),
        d = (0, eI.p_)(c),
        u = {
            ...d,
            nick:
                void 0 !== a
                    ? (0, v.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: t, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== r ? o : d.primaryGuild,
            displayNameStyles: void 0 !== l ? l : d.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": W.intl.string(W.t["TN+ZvB"]),
        children: (0, s.jsx)(eg.M, {
            children: (0, s.jsxs)(eh.Z, {
                className: ek.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eR.A,
                        {
                            className: ek.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: i ?? null,
                            avatarOverride: n,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: ek.lG,
                        children: [
                            (0, s.jsx)(ev.U, { size: "md", color: "currentColor", className: ek.hq }),
                            (0, s.jsx)(eE.n, { size: "md", color: "currentColor", className: ek.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eP(e) {
    let { product: t, user: i, pendingProfile: n, activeBundleSlide: r } = e,
        l = ey.Ay.canUsePremiumProfileCustomization(i),
        { pendingAvatar: a, ...c } = n.pendingChanges,
        o = n.pendingAvatarSrc,
        d = t.type === b.R.BUNDLE ? t.items[r ?? 0] : void 0,
        u = d?.type ?? t.type,
        m = u === b.R.AVATAR_DECORATION,
        p = u === b.R.PROFILE_EFFECT,
        { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: h, firstProfileFrame: v } = (0, $.f5)(t),
        E = d?.type === b.R.AVATAR_DECORATION ? d : x,
        f = d?.type === b.R.PROFILE_EFFECT ? d : g,
        N = d?.type === b.R.PROFILE_FRAME ? d : v,
        A = d?.type === b.R.NAMEPLATE ? d : h;
    if (u === b.R.NAMEPLATE && null != A)
        return (0, s.jsx)("div", {
            className: ek.Zj,
            children: (0, s.jsx)(eL, {
                user: i,
                nameplate: A,
                avatarDecoration: E ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? ek.RA : ek.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eC.A, {
                    ...c,
                    pendingAvatar: o,
                    user: i,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: E ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: f ?? c.pendingProfileEffect,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? ek.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eO, {
                        user: i,
                        avatarDecoration: E,
                        pendingAvatarSrc: o,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eS(e) {
    let { user: t, pendingProfile: i, selectedProduct: n, previewingProduct: r, selectedBundleSlide: l } = e;
    return (0, s.jsx)(eP, { user: t, pendingProfile: i, product: r ?? n, activeBundleSlide: l });
}
var eb = i(478016),
    eD = i(661531),
    eB = i(219882),
    eM = i(224016),
    eF = i(202541),
    ew = i(549848);
function eU() {
    let e = [
        W.intl.string(W.t.E1NP2x),
        W.intl.string(W.t.kpMomJ),
        (0, eB.M6)({
            legacyCopy: W.intl.string(W.t.xT1Vfn),
            rolloutCopy: W.intl.formatToPlainString(W.t.IDAfOy, {
                maxFileSize: (0, ey.EJ)(eF.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        W.intl.string(W.t.myyAEr),
        W.intl.string(W.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: ew.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: ew.ym,
            }),
            (0, s.jsx)(eM.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: ew.PX,
                children: e.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: ew.UJ,
                            children: [
                                (0, s.jsx)(eb.U, { color: eD.A.colors.WHITE }),
                                (0, s.jsx)(G.E, {
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: e,
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var eG = i(17928),
    eH = i(132198),
    ez = i(35929);
function eV(e) {
    let { user: t } = e,
        i = ey.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: n, ...r } = (0, eG.cf)([f.A], () => f.A.getPendingChanges()),
        l = (0, E.V7)({ userId: t.id, image: n });
    return (0, s.jsx)("div", {
        className: ez.k,
        children: (0, s.jsx)(eC.A, {
            ...r,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, eH._)()],
            canUsePremiumCustomization: i,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eW = i(165416);
function eX(e) {
    let { user: t, productRecord: i, isClosing: n, isOrbCheckoutModalOpen: r } = e;
    return i.skuId === V.Dp.ORB_PROFILE_BADGE
        ? n || r
            ? null
            : (0, s.jsx)(eV, { user: t })
        : (0, V.EZ)(i.skuId)
          ? (0, s.jsx)(eU, {})
          : (0, s.jsx)(es.B, { product: i, className: eW.M });
}
let eZ = {
    [ep.COLLECTIBLE]: { LeftPreview: en, Info: em, RightPreview: eS },
    [ep.BUNDLE]: {
        LeftPreview: en,
        Info: function (e) {
            let {
                    productRecord: t,
                    productName: i,
                    selectedBundleSlide: n,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = t.items,
                o = t.bundledProducts,
                d = o?.[n]?.name,
                u = c[n]?.type,
                m = null != u ? (0, _.Dm)(u) : null,
                p = W.intl.string(W.t.cTbdgu),
                x = r.useRef(null),
                g = r.useCallback(
                    (e) => {
                        c.length <= 1 ||
                            ("ArrowLeft" === e.key || "ArrowUp" === e.key
                                ? (e.preventDefault(), l((e) => (e - 1 + c.length) % c.length))
                                : "ArrowRight" === e.key || "ArrowDown" === e.key
                                  ? (e.preventDefault(), l((e) => (e + 1) % c.length))
                                  : "Home" === e.key
                                    ? (e.preventDefault(), l(0))
                                    : "End" === e.key && (e.preventDefault(), l(c.length - 1)));
                    },
                    [c.length, l],
                );
            r.useEffect(() => {
                let e = x.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[n]?.focus();
            }, [n]);
            let h = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != h.current && ((h.current.tabIndex = -1), h.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: X.Qf,
                    children: [
                        (0, s.jsx)(H.D, { ref: h, variant: "heading-xl/bold", className: X.R_, title: i, children: i }),
                        (0, s.jsx)(G.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: W.intl.format(W.t["1tUCAO"], { count: c.length }),
                        }),
                        (0, s.jsxs)("div", {
                            className: X.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: X.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: x,
                                        className: X.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: g,
                                        children: c.map((e, t) => {
                                            let i = o?.[t]?.name ?? e.skuId,
                                                r = o?.[t]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                K,
                                                {
                                                    item: e,
                                                    index: t,
                                                    isSelected: t === n,
                                                    setSelected: l,
                                                    label: i,
                                                    trackedSkuId: r,
                                                    onTrackClick: a,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != d && (0, s.jsx)(Z, { name: d, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eS,
    },
    [ep.EXTERNAL_ORB_BADGE]: { LeftPreview: er, Info: em, RightPreview: eX },
    [ep.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: er, Info: em, RightPreview: eX },
    [ep.EXTERNAL_GENERIC]: { LeftPreview: er, Info: em, RightPreview: eX },
};
function eY(e) {
    var t;
    return eZ[
        ((t = e),
        (0, V.pQ)(t.skuId)
            ? t.skuId === V.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, V.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, _.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var eK = i(13875),
    e$ = i(629042),
    eq = i(110629),
    eJ = i(268959),
    eQ = i(866665),
    e0 = i(508770),
    e1 = i(278416);
let e2 = (e) => {
    let { promotion: t } = e;
    return (0, s.jsx)(eQ.m, {
        position: "top",
        asContainer: !0,
        text: W.intl.formatToPlainString(W.t.cNtuKF, { offerName: t.displayName }),
        children: (0, s.jsx)(e0.E, {
            type: { text: W.intl.string(W.t["nb5PC/"]) },
            variant: "expressive",
            icon: e1.TagIcon,
        }),
    });
};
var e8 = i(252125);
function e6(e) {
    let t,
        { productRecord: i, selectedProduct: n, selectedBundleSlide: r } = e,
        l = (0, eK.Do)("CollectiblesShopProductDetailsModal") && n.type === b.R.PROFILE_FRAME,
        a = (0, e$.SV)(n),
        c = i.type === b.R.BUNDLE ? (i.items[r] ?? i.items[0]) : void 0,
        o =
            null != c &&
            !i.hideBadge &&
            null == i.badgeOverride &&
            (0, O.JQ)({ skuId: c.skuId, type: c.type, items: [c] });
    return (
        (t = l
            ? (0, s.jsx)(eq.A, { location: "CollectiblesShopProductDetailsModal" })
            : o
              ? (0, s.jsx)(eJ.s, {})
              : (0, s.jsx)(eJ.A, { skuId: i.skuId })),
        (0, s.jsxs)("div", { className: e8.N, children: [t, null != a && (0, s.jsx)(e2, { promotion: a })] })
    );
}
var e5 = i(462887),
    e3 = i(821609),
    e9 = i(318254),
    e7 = i(825484),
    e4 = i(331322),
    te = i(736653),
    tt = i(44120),
    ti = i(465794),
    tn = i(757036),
    ts = i(761705),
    tr = i(580630),
    tl = i(4227),
    ta = i(466459),
    tc = i(395068),
    to = i(885574),
    td = i(495900);
function tu(e) {
    let { className: t, isPartiallyPurchased: i } = e;
    return i
        ? (0, s.jsx)(eQ.m, {
              position: "top",
              align: "left",
              text: W.intl.string(W.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: w()(td.GX, t),
                  children: [
                      (0, s.jsx)("span", {
                          className: td.P0,
                          children: (0, s.jsx)(to.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: td.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "text-md/semibold", children: W.intl.string(W.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "text-md/semibold", className: t, children: W.intl.string(W.t["6cfuDj"]) });
}
var tm = i(878112),
    tp = i(572595),
    tx = i(206835),
    tg = i(450481);
let th = function (e) {
    let { product: t, onSuccess: i, onTrackClick: n } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, tg.p)({ product: t, onSuccess: i }),
        c = (0, tx.A)();
    return a
        ? (0, s.jsx)(e3.$, {
              variant: "primary",
              onClick: () => {
                  n?.(V.sH.USE_NOW), r();
              },
              loading: l,
              text: W.intl.string(W.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(e3.$, {
              variant: "primary",
              onClick: () => {
                  n?.(V.sH.EDIT_PROFILE), c(), i?.();
              },
              text: W.intl.string(W.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tv = i(865781);
let tE = function (e) {
    let { analyticsLocations: t, children: i } = e;
    return (0, s.jsx)(g.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, s.jsxs)("div", {
            className: tv.k,
            children: [
                (0, s.jsx)(G.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: W.intl.format(W.t["3cglst"], {
                        articleURL: el.A.getArticleURL(L.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                i,
            ],
        }),
    });
};
var tf = i(561769),
    tN = i(140735),
    tA = i(826706);
function tj(e) {
    let {
            price: { amount: t, currency: i },
            className: n,
            variant: r = "heading-md/semibold",
        } = e,
        l = (0, tr.RS)(t, i);
    return (0, s.jsxs)(G.E, {
        variant: r,
        className: w()(tA.v, n),
        children: [
            (0, s.jsx)(tN.A, { children: W.intl.format(W.t["2CEGln"], { price: l }) }),
            (0, s.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tI = i(219103),
    tR = i(282968);
function tC(e) {
    let {
            product: t,
            hasShopDiscount: i,
            discountSource: n,
            discount: r,
            className: l,
            hideStrikethroughPrice: a = !1,
            discountIconDisplayMode: c,
            discountIconSize: o = "md",
        } = e,
        d = (0, _.WD)(t, { hasShopDiscount: i, discount: r });
    if (null == d) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = d;
    if (m)
        return (0, s.jsx)("div", {
            className: w()(tR.kG, l),
            children: (0, s.jsx)(tI.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: g } = d;
    return (0, s.jsxs)("div", {
        className: w()(tR.kG, l),
        children: [
            a ? null : (0, s.jsx)(tj, { price: x, className: tR.q9 }),
            (0, s.jsx)(tI.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: tR.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: n ?? _.D0.NITRO, size: o } : void 0,
            }),
        ],
    });
}
var ty = i(403581),
    t_ = i(75678),
    tk = i(843625);
function tT(e) {
    let { text: t, onTrackClick: i } = e,
        { analyticsLocations: n } = (0, g.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: tk.F,
        innerRef: l,
        onClick: () => {
            i?.(V.sH.SUBSCRIBE_NOW), (0, t_.A)({ subscriptionTier: eF.pe.TIER_2, analyticsLocations: n, returnRef: l });
        },
        children: t,
    });
}
var tL = i(329986);
function tO(e) {
    let { product: t, onTrackClick: i } = e,
        n = (0, _.yt)(t, L.lid.PREMIUM_TIER_2);
    if (null == n) return null;
    let r = (0, tr.RS)(n.amount, n.currency);
    return (0, s.jsxs)("div", {
        className: tL.k,
        children: [
            (0, s.jsx)(eQ.m, {
                text: W.intl.string(W.t.MPFyJ5),
                "aria-label": W.intl.string(W.t.X3Ekj8),
                children: (0, s.jsx)(ty.t, { size: "md", color: "currentColor", className: tL.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "text-xs/medium",
                children: W.intl.format(W.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, s.jsx)(tT, { text: e, onTrackClick: i }),
                }),
            }),
        ],
    });
}
var tP = i(818348),
    tS = i(426919);
function tb(e) {
    let { orbPrice: t, isProductDisabled: i, hasSufficientOrbs: n, discount: r } = e,
        l = i ? W.intl.string(W.t.wu4gyV) : W.intl.string(W.t.eFNRzU),
        a = i || !n;
    return (0, s.jsxs)("div", {
        className: tS.eg,
        children: [
            (0, s.jsx)("div", {
                className: tS.zR,
                children: (0, s.jsx)(G.E, { variant: "text-xs/normal", className: a ? tS.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(tI.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: r,
                className: a ? tS.r9 : void 0,
            }),
        ],
    });
}
function tD(e) {
    let {
        prices: t,
        hasShopDiscount: i,
        discountSource: n,
        discount: r,
        product: l,
        hasSufficientOrbs: a,
        onTrackClick: c,
        isProductDisabled: o,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === tP.Yr.DISCORD_ORB
          ? (0, s.jsx)(tb, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a, discount: r })
          : (0, s.jsxs)("div", {
                className: tS.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: tS.pw,
                        children: [
                            (0, s.jsx)(tC, {
                                product: l,
                                discount: r,
                                hasShopDiscount: i,
                                discountSource: n,
                                hideStrikethroughPrice: !i,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            i ? null : (0, s.jsx)(tO, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tP.Yr.DISCORD_ORB &&
                        (0, s.jsx)(tI.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tS.r9 : void 0,
                        }),
                ],
            });
}
var tB = i(347722),
    tM = i(57020),
    tF = i(61750),
    tw = i(543080);
function tU(e) {
    let {
            user: t,
            productRecord: i,
            selectedProduct: n,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: o,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: x,
            onTrackClick: g,
        } = e,
        { cardId: h, sessionId: v, tilePosition: E } = (0, C.uM)() ?? {},
        f = (0, tn.L)(eF.PremiumTypes.TIER_2),
        N = (0, _.xM)(t),
        j = (0, eK.Do)("CollectiblesShopProductDetailsModal") && n.type === b.R.PROFILE_FRAME,
        I = ey.Ay.canUseShopDiscounts(t) || j,
        y = (0, e$.VZ)(n),
        k = (0, e$.Nc)(n),
        T = (0, ta.h)(i),
        { isPurchased: O, isPartiallyOwnedBundle: P } = (0, ta.h)(n),
        { isDisabled: S } = (0, ec.I)(n.skuId),
        D = (0, _.Zu)({ product: n, isPartiallyOwnedBundle: P, isPurchased: O }),
        B = (0, d.bG)([tl.A], () => tl.A.isClaiming === n?.skuId),
        M = (0, te.Ay)(),
        F = (0, e5.M)(M),
        U = (0, _.G0)(n),
        H = (0, _.yt)(n, L.lid.DEFAULT),
        z = H?.amount === 0,
        X = (0, tB.X)(n),
        Z = k ? tf.Hi.FIAT : c === V.G2.ORBS && a ? tf.Hi.ORBS : void 0,
        { checkoutEligiblePrices: Y, hasSufficientOrbs: K } = (0, tM.F)({
            product: n,
            hasShopDiscount: I,
            prioritizedCurrency: Z,
        }),
        $ = r.useMemo(() => (0, _.fT)(n, I, Y[0]?.currency), [n, I, Y]),
        q = (0, tc.A)({ location: "CollectiblesShopProductDetailsModal", product: n }),
        J = r.useMemo(() => Y.some((e) => e.currency === tP.Yr.DISCORD_ORB), [Y]);
    (0, ts.W)({ disableFetch: !J });
    let Q = r.useCallback(() => {
        g(V.sH.BUY_WITH_FIAT),
            (0, tt.A)({
                skuId: n.skuId,
                analyticsLocations: m,
                discoverySessionId: v,
                onClose: (e) => (e ? x() : (0, tP.tE)()),
            });
    }, [m, x, n.skuId, g, v]);
    function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, s.jsx)(ti.A, {
                subscriptionTier: eF.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    g(V.sH.UNLOCK_WITH_NITRO), (0, tp.M)();
                },
                onSubscribeModalClose: () => {
                    (0, tp.t)({
                        product: i,
                        category: l,
                        shouldCheckoutWithOrbs: a,
                        returnRef: p,
                        analyticsLocations: m,
                        tab: c,
                        giftRecipient: o,
                        giftingOrigin: u,
                        cardId: h,
                        sessionId: v,
                        tilePosition: E,
                    });
                },
            });
        return t ? (0, s.jsx)(tE, { analyticsLocations: m, children: n }) : n;
    }
    return (0, s.jsxs)("div", {
        className: tw.iw,
        children: [
            T.isPurchased || T.isPartiallyOwnedBundle
                ? (0, s.jsx)(tu, { className: tw.On, isPartiallyPurchased: P })
                : U
                  ? (0, s.jsxs)("div", {
                        className: tw.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "text-md/semibold", children: W.intl.string(W.t.rt69oo) }),
                            !O &&
                                (0, s.jsx)(G.E, {
                                    className: w()(tw.ed, !F && tw.un),
                                    variant: "text-xxs/normal",
                                    children: W.intl.string(W.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(tD, {
                        prices: Y,
                        product: n,
                        hasShopDiscount: I,
                        discountSource: N,
                        discount: $,
                        hasSufficientOrbs: K,
                        isProductDisabled: S,
                        onTrackClick: g,
                    }),
            (0, s.jsx)(e4.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !U || f || z
                        ? D
                            ? O
                                ? X
                                    ? (0, s.jsxs)(e7.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, s.jsx)(th, { product: n, onSuccess: x, onTrackClick: g }),
                                              (0, s.jsx)(tm.A, {
                                                  primary: !0,
                                                  product: n,
                                                  onSuccess: x,
                                                  giftRecipient: o,
                                                  giftingOrigin: u,
                                                  onTrackClick: g,
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(th, { product: n, onSuccess: x, onTrackClick: g })
                                : q
                                  ? ee(W.intl.string(W.t["9wfL34"]), !0)
                                  : U
                                    ? (0, s.jsx)(e3.$, {
                                          loading: B,
                                          loadingStartedLabel: W.intl.string(W.t["TYw+9s"]),
                                          loadingFinishedLabel: W.intl.string(W.t.Pg1UP5),
                                          onClick: async () => {
                                              g(V.sH.ADD_TO_COLLECTION),
                                                  await (0, R.iJ)(n.skuId),
                                                  x(),
                                                  (0, tF.A)({
                                                      product: n,
                                                      analyticsLocations: m,
                                                      purchaseType: V.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: W.intl.string(W.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, s.jsx)(s.Fragment, {
                                          children: Y.map((e, t) => {
                                              let i,
                                                  l,
                                                  a,
                                                  c,
                                                  d,
                                                  p = 0 === t,
                                                  h =
                                                      e.currency === tP.Yr.DISCORD_ORB
                                                          ? ((i = S
                                                                ? W.intl.string(W.t.cTdr3x)
                                                                : W.intl.string(W.t.zqh7ZM)),
                                                            (l = !K || S),
                                                            (a = W.intl.formatToPlainString(W.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = l ? `${a}, ${i}` : a),
                                                            (0, s.jsx)(eQ.m, {
                                                                position: "top",
                                                                text: i,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (0, s.jsx)(e3.$, {
                                                                    variant: p ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        g(V.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: n.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, R.gB)(),
                                                                                        x(),
                                                                                        (0, tF.A)({
                                                                                            product: n,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: V.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                                discoverySessionId: v,
                                                                            });
                                                                    },
                                                                    disabled: l,
                                                                    "aria-label": c,
                                                                    text: W.intl.format(W.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, s.jsx)(e9.C, {
                                                                                className: tw.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((d =
                                                                y ??
                                                                W.intl.formatToPlainString(W.t["cNSL/j"], {
                                                                    price: (0, tr.$g)(e.amount, e.currency),
                                                                })),
                                                            (0, s.jsxs)(e7.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, s.jsx)(e3.$, {
                                                                        variant: p ? "primary" : "secondary",
                                                                        onClick: Q,
                                                                        text: d,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    X &&
                                                                        (0, s.jsx)(tm.A, {
                                                                            primary: p,
                                                                            product: n,
                                                                            onSuccess: x,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: g,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, s.jsx)(r.Fragment, { children: h }, e.currency);
                                          }),
                                      })
                            : X
                              ? (0, s.jsx)(tm.A, {
                                    primary: !0,
                                    product: n,
                                    onSuccess: x,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: u,
                                    onTrackClick: g,
                                })
                              : null
                        : ee(W.intl.string(W.t.sEAnVH)),
            }),
        ],
    });
}
var tG = i(634656);
function tH(e) {
    let {
            productRecord: t,
            selectedProduct: i,
            previewingProduct: n,
            user: r,
            selectedBundleSlide: l,
            pendingProfile: a,
        } = e,
        c = eY(t);
    return (0, s.jsxs)("div", {
        className: w()(tG.wd, { [tG.E7]: null != c.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: tG.dL,
                children: (0, s.jsx)(e6, { productRecord: t, selectedProduct: i, selectedBundleSlide: l }),
            }),
            null != c.LeftPreview &&
                (0, s.jsx)("div", {
                    className: tG._E,
                    children: (0, s.jsx)(c.LeftPreview, {
                        user: r,
                        selectedProduct: i,
                        previewingProduct: n,
                        productRecord: t,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, s.jsx)("div", { className: tG.F_, children: (0, s.jsx)(c.Info, { ...e }) }),
            (0, s.jsx)(tU, { ...e }),
        ],
    });
}
var tz = i(529756),
    tV = i(408278),
    tW = i(972213),
    tX = i(156248),
    tZ = i(139146),
    tY = i(60465),
    tK = i(976860),
    t$ = i(402860),
    tq = i(50920),
    tJ = i(365491),
    tQ = i(668953),
    t0 = i(881636),
    t1 = i(807562);
function t2(e) {
    let { goPrev: t, goNext: i } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: t1.Y,
                children: (0, s.jsx)(tV.K, {
                    "aria-label": W.intl.string(W.t["3NdvMK"]),
                    onClick: t,
                    icon: tQ.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: t1.K,
                children: (0, s.jsx)(tV.K, {
                    "aria-label": W.intl.string(W.t.RYIeOX),
                    onClick: i,
                    icon: t0.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t8 = i(48062);
function t6(e) {
    let {
            user: t,
            pendingProfile: i,
            productRecord: n,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: c,
            selectedBundleSlide: o,
            setSelectedBundleSlide: d,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: x,
            tab: g,
            onClose: h,
            onTrackClick: v,
        } = e,
        E = eY(n),
        f = (0, _.aw)(a),
        N = f ? a.items.length : 0,
        A = (function () {
            let e = (0, tq.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, C.uM)() ?? {},
                i = (0, tJ.v)((e) => e.reset);
            return r.useCallback(
                (n, s) => {
                    if (
                        (I.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: n.skuId,
                            cta_name: s,
                        }),
                        (0, t$.closeUserProfileModal)(),
                        (0, tY.p)(),
                        e && !0 !== n.isOrbsExclusive)
                    )
                        return void (0, tK.pX)(L.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n.skuId));
                    i();
                    let r = !0 === n.isOrbsExclusive ? V.G2.ORBS : V.G2.CATALOG;
                    (0, tK.pX)(`${L.BVt.COLLECTIBLES_SHOP_WITH_TAB(r)}&${V.P1}=${n.skuId}`);
                },
                [e, t, i],
            );
        })(),
        j = r.useCallback(() => {
            v(V.sH.GO_TO_COLLECTION), h(), A(x, "go_to_collection_button");
        }, [x, h, v, A]),
        R = r.useCallback(() => {
            N <= 1 || d((e) => (e - 1 + N) % N);
        }, [N, d]),
        y = r.useCallback(() => {
            N <= 1 || d((e) => (e + 1) % N);
        }, [N, d]),
        k = r.useCallback(
            (e) => {
                if (N <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), R())
                        : "ArrowRight" === e.key && (e.preventDefault(), y()));
            },
            [N, R, y],
        ),
        T = r.useCallback(() => {
            v(V.sH.CLOSE_DETAIL), h();
        }, [v, h]),
        O = r.useRef(null),
        S = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (S.current) {
                S.current = !1;
                return;
            }
            let e = O.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, s.jsxs)("div", {
            className: w()(t8.i1, (0, V.EZ)(a.skuId) ? t8.bF : a.type === b.R.AVATAR_DECORATION ? t8.Jq : t8.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: k,
            children: [
                (0, s.jsx)("div", {
                    className: t8.GV,
                    children: (0, s.jsx)(eQ.m, {
                        text: W.intl.string(W.t["Hr/q/6"]),
                        children: (0, s.jsx)(e3.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: tz.c,
                            text: x.name,
                            onClick: j,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: t8.KR,
                    ref: O,
                    children: (0, s.jsx)(E.RightPreview, {
                        user: t,
                        pendingProfile: i,
                        productRecord: n,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: o,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                f && N > 1 && (0, s.jsx)(t2, { goPrev: R, goNext: y }),
                (0, s.jsxs)("div", {
                    className: t8.VG,
                    children: [
                        (0, s.jsx)(tZ.R, {
                            product: n,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: v,
                        }),
                        (0, s.jsx)(tX.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, P.VG)(a),
                            tab: g,
                            onTrackClick: v,
                        }),
                        (0, s.jsx)(tV.K, {
                            "aria-label": W.intl.string(W.t.cpT0Cq),
                            onClick: T,
                            icon: tW.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var t5 = i(80801);
let t3 = (0, u.FT)(u._3.SIZE_152),
    t9 = function (e) {
        let {
                transitionState: t,
                onClose: i,
                product: n,
                category: l,
                returnRef: u,
                analyticsSource: b,
                analyticsLocations: F,
                shouldCheckoutWithOrbs: w,
                tab: U,
                giftRecipient: G,
                giftingOrigin: H,
            } = e,
            z = (0, d.bG)([j.default], () => j.default.getCurrentUser()),
            V = (0, d.cf)([f.A], () => f.A.getPendingChanges()),
            W = (0, M.f)(n),
            { previewingVariantIndex: X } = W,
            Z = (0, y.Q)(n),
            Y = D(n, X),
            K = (0, O.rb)(n, Z);
        a()(null != K, "Selected product should not be null");
        let { analyticsLocations: $ } = (0, g.Ay)([...F, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, S.Yr)(K.skuId);
        let q = (0, B.U1)(l),
            [J, Q] = r.useState(0);
        r.useEffect(() => {
            null != z && (0, N.A)(z.id, z.getAvatarURL(void 0, 80));
        }, [z]);
        let ee = r.useMemo(() => (0, _.V6)(n.type, n.skuId), [n.type, n.skuId]);
        r.useEffect(() => {
            I.default.track(L.HAw.OPEN_MODAL, {
                type: L.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: b,
                location_stack: $,
                sku_id: K.skuId,
                product_type: ee,
            }),
                (0, R.RD)(K.skuId);
        }, [b, $, K.skuId, ee]);
        let { cardId: et, sessionId: ei, tilePosition: en } = (0, C.uM)() ?? {},
            es = r.useMemo(() => (0, O.v8)(n), [n]),
            er = (function (e) {
                let { skuId: t, productSkuIds: i, analyticsLocations: n } = e,
                    { cardId: s, sessionId: l } = (0, C.uM)() ?? {},
                    a = (0, T.o)(),
                    c = (0, _.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        I.default.track(L.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? t,
                            cta: e,
                            shop_session_id: l,
                            card_id: s,
                            product_sku_ids: i,
                            location_stack: n,
                            discount_source: (0, _.b_)(c),
                        });
                    },
                    [t, n, s, i, l, c],
                );
            })({ skuId: K.skuId, productSkuIds: es, analyticsLocations: $ });
        (0, h.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: K.skuId,
                card_id: et,
                shop_session_id: ei,
                position_in_section: en,
                product_sku_ids: es,
                location_stack: $,
            },
        });
        let el = (0, A.o6)(),
            ea = t === m.ip.EXITING,
            ec = (0, k.c)("product_details_modal");
        if (null == z || (n.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let eo = {
                pendingChanges: V,
                pendingAvatarSrc:
                    void 0 !== V.pendingAvatar
                        ? (0, v.sv)((0, E.V7)({ userId: z.id, image: V.pendingAvatar, size: t3 }), null, z, {
                              size: t3,
                          })
                        : void 0,
            },
            ed = (0, P.VG)(n),
            eu = {
                user: z,
                pendingProfile: eo,
                productRecord: n,
                productName: ed,
                selectedProduct: K,
                previewingProduct: Y ?? null,
                category: l,
                selectedVariantIndex: Z,
                previewingVariantIndexProps: W,
                selectedBundleSlide: J,
                setSelectedBundleSlide: Q,
                tab: U,
                shouldCheckoutWithOrbs: w,
                giftRecipient: G?.id !== z.id ? G : void 0,
                giftingOrigin: G?.id !== z.id ? H : void 0,
                analyticsLocations: $,
                returnRef: u,
                onClose: i,
                onTrackClick: er,
            };
        return (0, s.jsx)(g.f5, {
            value: $,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: i,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, s.jsx)("div", {
                    className: t5.C,
                    children: (0, s.jsxs)("div", {
                        className: t5.j,
                        children: [
                            (0, s.jsx)(tH, { ...eu }),
                            (0, s.jsx)(t6, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: q }),
                        ],
                    }),
                }),
            }),
        });
    };
