l.d(n, { A: () => ai });
var t = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r),
    s = l(17928),
    o = l(935462),
    d = l(778712),
    u = l(866323),
    c = l(364522),
    g = l(695366),
    m = l(140735),
    f = l(707554),
    p = l(738188),
    x = l(661531),
    h = l(231723),
    v = l(241524),
    A = l(770178),
    b = l(80682),
    j = l(793574),
    I = l(688810),
    y = l(248284),
    C = l(480335),
    N = l(577390),
    E = l(372320),
    P = l(31956),
    k = l(744808),
    T = l(875741),
    S = l(915089),
    O = l(713517),
    R = l(645507),
    _ = l(922590),
    D = l(821269),
    L = l(397562),
    M = l(93246),
    w = l(561794),
    G = l(71393),
    F = l(994500),
    V = l(351906),
    U = l(287809),
    B = l(562153),
    z = l(474090),
    W = l(158045),
    H = l(183555),
    q = l(47675),
    K = l(321191),
    Y = l(591179),
    X = l(999291),
    $ = l(702841),
    Z = l(370480),
    J = l(773669),
    Q = l(652215),
    ee = l(101928),
    en = l(837529),
    el = l(346713),
    et = l(573648),
    ei = l(429913),
    er = l(321078),
    ea = l(403362),
    es = l(484509),
    eo = l(487409),
    ed = l(83931),
    eu = l(920601),
    ec = l(903209),
    eg = l(919395),
    em = l(101058),
    ef = l(696451),
    ep = l(836602),
    ex = l(996988),
    eh = l(207634);
let ev = (0, d.FT)(eh.T[ex.d.MODAL_V2].avatarSize),
    eA = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eb = l(716804),
    ej = l(679492),
    eI = l(718019),
    ey = l(461116),
    eC = l(915614),
    eN = l(744753),
    eE = l(834730);
function eP(e) {
    let { friendsSinceDate: n } = e;
    return (0, t.jsx)(eE.E, { variant: "text-sm/normal", children: n });
}
var ek = l(361311),
    eT = l(931481),
    eS = l(439053),
    eO = l(743987),
    eR = l(312381),
    e_ = l(501193),
    eD = l(383448),
    eL = l(946356),
    eM = l(983495),
    ew = l(503026),
    eG = l(305385),
    eF = l(109112),
    eV = l(939249),
    eU = l(730134),
    eB = l(169869),
    ez = l(837057),
    eW = l(310419),
    eH = l(889227),
    eq = l(967198),
    eK = l(488995),
    eY = l(375708),
    eX = l(576849);
function e$(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eB.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eX.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(eU.A, { user: new eH.A(n.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eF._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eX.Hd,
                children: [
                    (0, t.jsxs)(eV.D, {
                        className: eX.OB,
                        onClick: function () {
                            (i?.(),
                                (0, ez.transitionToGlobalDiscovery)({
                                    tab: eK.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eW.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != n.platform_name
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eE.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eX.nk,
                                children: eY.intl.format(eY.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eX.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: r } = (0, H.NJ)(),
        o = (0, s.bG)([J.default], () => J.default.locale),
        d = (0, s.bG)([eq.A], () => eq.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eX.kL, l),
              children: n.map((e, n) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eX.FI,
                          children: (0, t.jsx)(e$, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), i());
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}
var eJ = l(403581),
    eQ = l(240248),
    e0 = l(308244),
    e1 = l(83013),
    e2 = l(81400),
    e3 = l(84540),
    e9 = l(290386),
    e7 = l(621466),
    e5 = l(375226),
    e8 = l(231088),
    e6 = l(786826),
    e4 = l(196127);
function ne(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function nn(e) {
    let {
            isEditing: n,
            committedValue: l,
            editedValue: i,
            setEditedValue: r,
            editButtonRef: s,
            handleStartEditing: o,
            wrapperRef: d,
            onBlur: u,
            onContainerKeyDown: c,
            inputRef: g,
            onInputFocus: m,
            onInputKeyDown: f,
            preview: p,
            placeholder: x,
            editButtonAriaLabel: h,
            label: v,
            maxLength: A,
            rows: b,
            emojiPickerIntention: j,
            error: I,
            warning: y,
            className: C,
        } = e,
        N = (0, e8.n4)(n ? i : l, A) ?? I,
        { enabled: E } = e5.A.useConfig({ location: "EditableRichTextField" });
    return (0, t.jsx)(e8.ZL, {
        isEditing: n,
        preview: p,
        placeholder: x,
        editButtonRef: s,
        editButtonAriaLabel: h,
        onStartEditing: o,
        variant: "multiline",
        className: a()(C, { [e4.C]: E }),
        wrapperRef: d,
        onBlur: u,
        onKeyDown: c,
        previewErrorMessage: N,
        previewWarningMessage: y,
        input: (0, t.jsx)(e6.f, {
            appearance: E ? "inline" : "boxed",
            editorRef: g,
            label: v,
            hideLabel: !0,
            value: n ? i : l,
            onChange: r,
            onFocus: m,
            onKeyDown: f,
            maxLength: A,
            error: N,
            helperText: y,
            placeholder: x,
            rows: b,
            emojiPickerIntention: j,
        }),
    });
}
let nl = [
    { value: "HAIKU", label: () => eY.intl.string(eY.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eY.intl.string(eY.t.CXkR1L) },
    { value: "TELL_US", label: () => eY.intl.string(eY.t.eutr4P) },
    { value: "FUN_FACT", label: () => eY.intl.string(eY.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eY.intl.string(eY.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eY.intl.string(eY.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eY.intl.string(eY.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eY.intl.string(eY.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eY.intl.string(eY.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eY.intl.string(eY.t.u7WCGI) },
];
var nt = l(307731);
function ni(e) {
    let n,
        l,
        r,
        a,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        g = d?.guildId != null,
        m = d?.guildId ?? null,
        f = W.Ay.canUsePremiumProfileCustomization(c),
        p = (0, e9.U)({ location: "user_profile_modal_edit" }),
        {
            value: x,
            previewValue: h,
            onCommit: v,
        } = ((n = d?.guildId ?? null),
        (l = d?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingBio)),
        (a = l ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, e3.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        A = (function (e) {
            let { isEditing: n, wrapperRef: l, handleCommit: t, ...r } = (0, e8.Ww)(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, n) {
                            if (n?.contains(e)) return !0;
                            let l = ne(n),
                                t = l?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, l.current),
                    [l],
                );
            i.useEffect(() => {
                if (!n) return;
                let e = l.current?.ownerDocument ?? document;
                function i(e) {
                    (0, e7.vq)(e.target) && !a(e.target) && t();
                }
                return (e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i));
            }, [n, l, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!n) return;
                    let i = e.relatedTarget;
                    !(0, e7.vq)(i) || a(i) || (null == ne(l.current) && t());
                },
                [n, a, t, l],
            );
            return { isEditing: n, wrapperRef: l, handleCommit: t, ...r, onBlur: s };
        })({ value: x, onCommit: v }),
        b = !(0, eQ.uJ)(h),
        j = (0, s.bG)([ep.A], () => ep.A.getErrors(m)),
        I = (0, e2.EC)(m),
        y = j.bio?.[0],
        C = I?.bio?.[0],
        N = i.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * nl.length)), nl[e]);
        }, []),
        E = g ? eY.intl.string(eY.t.yPJ9xr) : N.label();
    return !g || f
        ? (0, t.jsx)(nn, {
              ...A,
              className: u,
              preview: b ? (0, t.jsx)(e0.A, { userBio: h, setLineClamp: !1 }) : null,
              placeholder: E,
              editButtonAriaLabel: eY.intl.string(eY.t.lO3n7a),
              label: eY.intl.string(eY.t["YWo+Zd"]),
              emojiPickerIntention: nt.EmojiIntention.PROFILE,
              maxLength: p,
              error: y,
              warning: C,
          })
        : b
          ? (0, t.jsx)(e0.A, { userBio: h, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var nr = l(430626);
function na(e) {
    let { currentUser: n, displayProfile: l, canEditInPlace: i } = e,
        r = l?.bio,
        a = !(0, eQ.uJ)(r),
        s = l?.guildId != null,
        o = s && W.Ay.canUsePremiumProfileCustomization(n),
        d = o ? eY.intl.string(eY.t.jVai8N) : eY.intl.string(eY.t.ZzAR2Y),
        u = (0, W.TW)(n) ? eY.intl.string(eY.t["5AFxuK"]) : eY.intl.string(eY.t.N6ixy8),
        c = i && o ? { icon: eJ.t, tooltip: u } : void 0;
    return (i || a) && (!i || !s || a || o)
        ? (0, t.jsx)(e1.A, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, t.jsx)(ni, { displayProfile: l, className: nr.u })
                  : (0, t.jsx)(e0.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var ns = l(982168),
    no = l(722868),
    nd = l(822775),
    nu = l(982985),
    nc = l(133385),
    ng = l(34188),
    nm = l(839534),
    nf = l(993401);
function np(e) {
    let { analyticsLocations: n, newestAnalyticsLocation: l } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, nm.Cz)({ analyticsLocations: n, analyticsSource: l });
        }, [n, l]);
    return (0, t.jsx)(nf.q3, {
        action: "VISIT_SHOP",
        icon: ng.U,
        tooltipText: eY.intl.string(eY.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var nx = l(573355),
    nh = l(102951);
function nv(e) {
    let {
            user: n,
            currentUser: l,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, Y.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, no.A)({ user: n, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, nh.J)({ userId: n.id }),
        x = m.length > 0 || f || p;
    return o === Q.eA$.BLOCKED
        ? null
        : n.id === l.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nu.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(np, {}),
                        (0, t.jsx)(nc.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nd.A, { user: n, guildId: i, onClose: d }),
                        (0, t.jsx)(np, {}),
                        (0, t.jsx)(nc.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(nu.e, { userId: n.id, onClose: ns.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(nc.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nu.e, { userId: n.id, onClose: ns.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(nc.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === Q.eA$.FRIEND || o === Q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(nu.e, { userId: n.id, onClose: ns.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(nx.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(nc.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nu.e, { userId: n.id, onClose: ns.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(nx.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(nc.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nx.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(nu.l, { userId: n.id, onClose: ns.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(nc.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var nA = l(463156),
    nb = l(866665),
    nj = l(28863),
    nI = l(509434),
    ny = l(307301),
    nC = l(228366),
    nN = l(95561),
    nE = l(874490),
    nP = l(968309),
    nk = l(174459),
    nT = l(486020),
    nS = l(123917),
    nO = l(783419);
let nR = "User Profile Modal V2";
function n_(e) {
    let n = et.A.get(e);
    ((0, nP.A)({ platformType: n.type, location: nR }),
        nk.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: nR,
            current_step: "desktop oauth",
            platform_type: n.type,
        }));
}
function nD() {
    nC.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: n_, stackingBehavior: "stack" });
}
function nL(e) {
    let { account: n, locale: l, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, Z.An)(r[nO.pK.CREATED_AT], l),
        s = et.A.get((0, nE.ML)(n.type));
    return (0, t.jsx)(nw, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(nb.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(eE.E, { variant: "text-sm/normal", className: eX.GW, children: n.name }),
                  })
                : (0, t.jsx)(nj.Anchor, {
                      href: e,
                      className: eX.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eY.intl.string(eY.t.q5jLJB)}`
                              : `${n.name}, ${eY.intl.string(eY.t.q5jLJB)}`,
                      onClick: (l) => {
                          ((0, nN.zV)(Q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nS.h)({ href: e, trusted: s?.type !== Q.fg2.DOMAIN }, l));
                      },
                      children: (0, t.jsxs)("div", {
                          className: eX.vi,
                          children: [
                              (0, t.jsx)(nb.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: eX.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, t.jsx)(nI.I, { size: "xs", color: "currentColor", className: eX.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return n.type === Q.fg2.REDDIT
                ? (0, eB.xE)(r)
                : n.type === Q.fg2.STEAM
                  ? (0, eB.dy)(r)
                  : n.type === Q.fg2.BLUESKY || n.type === Q.fg2.MASTODON || n.type === Q.fg2.TWITTER
                    ? (0, eB.ED)(r)
                    : n.type === Q.fg2.PAYPAL
                      ? (0, eB.gZ)(r)
                      : n.type === Q.fg2.EBAY
                        ? (0, eB.ub)(r)
                        : n.type === Q.fg2.TIKTOK
                          ? (0, eB.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function nM(e) {
    let { identityWithApplication: n } = e,
        { identity: l, application: i } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let r = nT.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(nw, {
        renderAccountName: function () {
            return (0, t.jsx)(nb.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, t.jsx)(eE.E, {
                    variant: "text-sm/normal",
                    className: eX.GW,
                    children: l.profile.username,
                }),
            });
        },
        renderMetadata: function () {
            return null;
        },
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function nw(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eX.FI,
        children: [
            (0, t.jsx)(nb.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eX.k_,
                    children: (0, t.jsx)("img", {
                        alt: eY.intl.formatToPlainString(eY.t.rtm15P, { name: i }),
                        className: a()(eX.tV, o ? eX.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eX.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, t.jsx)(eE.E, {
                                    variant: "text-xs/normal",
                                    children: eY.intl.format(eY.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eX.yu, children: l() }),
                ],
            }),
        ],
    });
}
function nG(e) {
    let { connections: n, applicationIdentities: l, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([J.default], () => J.default.locale);
    if (!r && 0 === n.length && 0 === l.length) return null;
    let u = n.length > 0 || l.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eX.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eX.V,
                    children: [
                        n.map((e) => (0, t.jsx)(nL, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        l?.map((e) => (0, t.jsx)(nM, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eV.D, {
                    className: eX.qG,
                    onClick: nD,
                    children: [
                        (0, t.jsx)(ny.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eE.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eY.intl.string(eY.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var nF = l(193885),
    nV = l(408278),
    nU = l(993165),
    nB = l(554146),
    nz = l(194261),
    nW = l(315629),
    nH = l(789645),
    nq = l(297264),
    nK = l(812993),
    nY = l(821609),
    nX = l(39623),
    n$ = l(890377),
    nZ = l(517461),
    nJ = l(13875),
    nQ = l(131607),
    n0 = l(248778),
    n1 = l(465794),
    n2 = l(252732),
    n3 = l(945810);
let n9 = (0, n3.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    n7 = (0, n3.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1, clientThemeAdaptedColorsEnabled: !1 },
        variations: {
            1: { enabled: !0, showPresetName: !0, clientThemeAdaptedColorsEnabled: !1 },
            2: { enabled: !0, showPresetName: !1, clientThemeAdaptedColorsEnabled: !0 },
        },
    });
function n5(e) {
    let { location: n } = e;
    return n7.useConfig({ location: n });
}
var n8 = l(487233),
    n6 = l(120386),
    n4 = l(317097),
    le = l(602853),
    ln = l(922016),
    ll = l(508274),
    lt = l(654107),
    li = l(930349);
function lr(e) {
    let { user: n, disabled: l = !1 } = e,
        r = i.useRef(null),
        a = (0, le.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lt.rh)(n.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ep.A, K.A], () => ({
            pendingAccentColor: ep.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: K.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, n4.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e3.p)({ accentColor: e }), []);
    return (0, t.jsx)(ln.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(ll.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(li.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: l,
                accessibleLabel: eY.intl.string(eY.t["/X3fkf"]),
                accessibleValue: (0, n4.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, n4.Hl)(c) } }),
            }),
    });
}
var la = l(450373),
    ls = l(317139);
function lo(e, n) {
    let l = null === e,
        t = void 0 === e;
    return l || (t && null == n) ? eY.intl.string(eY.t["3Xph0/"]) : t ? eY.intl.string(eY.t.keN7ib) : e.description;
}
function ld(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: ls.o, style: { backgroundColor: n } });
}
function lu(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: ls._ });
}
function lc(e) {
    let { displayProfile: n, bannerChange: l, shouldAnimate: i } = e,
        r = (0, le.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = n?.primaryColor ?? (0, n4.LX)(r),
        { hex: s } = (0, la.A)(a),
        o = n?.getPreviewBanner(l, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lu, { src: o }) : (0, t.jsx)(ld, { backgroundColor: s });
}
function lg(e) {
    let { displayProfile: n, bannerChange: l, ...i } = e;
    return (0, t.jsx)(li.A, {
        ...i,
        accessibleLabel: eY.intl.string(eY.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lc, { displayProfile: n, bannerChange: l, shouldAnimate: e }),
    });
}
var lm = l(569059);
function lf(e) {
    let { userId: n, guildId: l, disabled: r, errorMessageId: a } = e,
        s = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, n) {
            let l = (0, X.Ay)(e, n),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, $.cf)(
                    [ep.A, U.default, K.A],
                    () => ({
                        pendingBanner: ep.A.getPendingChanges(n ?? void 0).pendingBanner,
                        mainProfileBanner: U.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != n ? K.A.getGuildMemberProfile(e, n)?.banner : K.A.getUserProfile(e)?.banner,
                    }),
                    [n, e],
                ),
                a = null != n,
                s = a && (l?.isUsingGuildMemberBanner() ?? !1),
                o = null === t;
            return {
                displayProfile: l,
                pendingBanner: t,
                bannerChange: o && a && !s ? void 0 : t,
                accessibleValue: lo(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(n, l),
        f = (0, eg.Ac)(d, g)
            ? {
                  onClick: () => (0, n2.rM)(null, g, (e) => (0, e3.p)({ guildId: l ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eY.intl.string(m ? eY.t.jHlJNS : eY.t.tT9n7D),
              }
            : void 0,
        p = (0, lm.P)({ guildId: l, returnRef: s });
    return (0, t.jsx)(lg, {
        buttonRef: s,
        displayProfile: o,
        bannerChange: u,
        accessibleValue: c,
        variant: "square",
        affordance: f,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: a,
    });
}
var lp = l(259065),
    lx = l(913563),
    lh = l(898985),
    lv = l(922301),
    lA = l(660184),
    lb = l(701974),
    lj = l(523312);
let lI = "heading-xl/semibold";
function ly(e) {
    if (null == e) return eY.intl.string(eY.t["3Xph0/"]);
    let n = eY.intl.string((0, lx.A)(e.fontId)),
        l = eY.intl.string(lh.J[e.effectId] ?? lb.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eY.intl.formatToPlainString(eY.t.A2XnI4, { fontName: n, effectName: l, colors: t });
}
function lC(e) {
    let { displayName: n, displayNameStyles: l, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: a()(lj.MC, { [lj.Xn]: null != l }),
        children:
            null != l
                ? (0, t.jsx)(eE.E, {
                      variant: lI,
                      children: (0, t.jsx)(lA.A, {
                          userName: n,
                          displayNameStyles: l,
                          effectDisplayType: i ? lv.G.ANIMATED : lv.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eE.E, { variant: lI, className: lj.kr, children: n }),
    });
}
function lN(e) {
    let { displayName: n, displayNameStyles: l, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(li.A, {
        ...r,
        accessibleLabel: eY.intl.string(eY.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(lC, { displayNameStyles: l, displayName: n, shouldAnimate: i || e }),
    });
}
function lE(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != l,
        c = (0, s.bG)([ef.Ay], () => (null != l ? (ef.Ay.getMember(l, n.id)?.nick ?? null) : null)),
        g = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, eg.B0)(n, l ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        y = (0, eg.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: l ?? void 0 }),
        C = (0, eg.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: l ?? void 0 }) ?? n.username,
        N = A ? null != h : null != v,
        E =
            null != y && N
                ? {
                      onClick: () => (0, e3.p)({ guildId: l ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(j ? eY.t.en3ogK : eY.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            (o?.(), (0, lp.L)({ analyticsLocations: d, guildId: l ?? void 0, stackingBehavior: "stack" }));
        }, [d, l, o]);
    return (0, t.jsx)(lN, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: ly(y),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: C,
        displayNameStyles: y,
        disabled: r,
    });
}
var lP = l(450232),
    lk = l(89851);
function lT(e) {
    let { heading: n, children: l, disabled: i = !1, showNitroIcon: r = !1, badge: s } = e;
    return (0, t.jsxs)("div", {
        className: lk.Os,
        children: [
            (0, t.jsxs)("div", {
                className: a()(lk.Pf, { [lk.r9]: i }),
                children: [
                    (0, t.jsx)(nq.D, {
                        className: lk.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: n,
                    }),
                    r && (0, t.jsx)(lP.A, { className: lk.IX, size: "xs", color: "inherit", disabled: i }),
                    null != s && (0, t.jsx)("span", { className: lk.ot, children: s }),
                ],
            }),
            l,
        ],
    });
}
function lS(e) {
    let { id: n, message: l } = e;
    return null == l
        ? null
        : (0, t.jsxs)("div", {
              className: lk.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eE.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: n, children: l }),
              ],
          });
}
var lO = l(374654),
    lR = l(366010),
    l_ = l(736653),
    lD = l(674658),
    lL = l(617061),
    lM = l(203632),
    lw = l(536572);
let lG = new Set(),
    lF = 0;
var lV = l(993408),
    lU = l(841702),
    lB = l(515718),
    lz = l(195292);
function lW(e) {
    "" !== e.thumbnailPreviewSrc && (0, lB.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var lH = l(599752),
    lq = l(249360);
let lK =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    lY =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function lX(e) {
    let { effect: n, shouldAnimate: l, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, l_.Ay)(),
        u = (0, lR.M)(d) ? lK : lY,
        c = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, lU.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lV.wo)(r, t), [r, t]),
                s = (0, lz.A)({ enabled: n, isInteracting: l, items: a, preload: lW });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: l }),
        g = null != c,
        m = g ? c : n;
    return (
        i.useEffect(() => {
            l && ((lF += 1), lG.forEach((e) => e()));
        }, [l]),
        (0, t.jsxs)("div", {
            className: lH.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: lH.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(lH.yY, { [lq.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: lM.HL.FromStart,
                            isHovering: l,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function l$(e) {
    let { user: n, guildId: l, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != l,
        u = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        c = (0, eg.N2)({ user: n }),
        g = (0, eg.N2)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileEffect: m } = (0, eg.nZ)(l ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        h = (0, eg.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: l ?? void 0 }),
        { product: v } = (0, lD.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, e3.p)({ guildId: l ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(x ? eY.t["SQy/Po"] : eY.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, lL.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(li.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eY.intl.string(eY.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? eY.intl.string(eY.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : eY.intl.string(t ? eY.t["1M4m8w"] : eY.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, lw.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(lX, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var lZ = l(515727),
    lJ = l(746002);
function lQ(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((n) => {
            let l = (0, lJ.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: lJ.CollectiblesItemAssetFormat.STATIC,
                assetId: n.id,
            });
            null != l && (0, lB.NN)(l).catch(() => {});
        });
}
var l0 = l(715196);
function l1(e) {
    let { responsive: n } = e;
    return !0 !== n;
}
function l2(e) {
    let { profileFramePreview: n, isEmpty: l, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, l_.Ay)(),
        u = (0, lR.M)(d) ? lK : lY,
        c = (0, E.A)(n?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, lU.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lV.MG)(r, t), [r, t]);
            return (0, lz.A)({ enabled: n, isInteracting: l, items: a, preload: lQ });
        })({ enabled: l && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, T.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(l0.hm, x, { [lq.O]: m }),
                    style: p,
                    children: (0, t.jsx)(k.A, { frame: f, filterLayer: l1, isPreview: !0 }),
                }),
            (0, t.jsx)("div", {
                className: a()(l0.ti, { [l0.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: l0.QQ, draggable: !1 }),
            }),
        ],
    });
}
function l3(e) {
    let { user: n, guildId: l, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != l,
        d = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        u = (0, eg.Xf)({ user: n }),
        c = (0, eg.Xf)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileFrame: g } = (0, eg.Tu)(l ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, eg.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: l ?? void 0 }),
        { product: h } = (0, lD.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, e3.p)({ guildId: l ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(p ? eY.t.j6hZyM : eY.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, lZ.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(li.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eY.intl.string(eY.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? eY.intl.string(eY.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : eY.intl.string(t ? eY.t.yFeGB5 : eY.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, lw.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(l2, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var l9 = l(684732),
    l7 = l(498596),
    l5 = l(871524);
function l8(e) {
    let { primaryColor: n, secondaryColor: l, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, n4.Hl)(n)}, ${(0, n4.Hl)(l)})`;
    return (0, t.jsx)("div", { className: l5.D7, style: { background: r }, children: i });
}
function l6(e) {
    let { color: n } = e,
        l = (0, n4.Hl)(n),
        i = (0, n4.bJ)(n, 0xffffff) < l7.Tr.NonText;
    return (0, t.jsx)("div", {
        className: l5.OS,
        children: (0, t.jsx)("div", { className: a()(l5.Hy, { [l5.rY]: i }), style: { backgroundColor: l } }),
    });
}
function l4(e) {
    let { color: n, disabled: l, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eV.D, {
        ...s,
        innerRef: a ?? o,
        className: l5.Dh,
        onClick: l ? void 0 : r,
        "aria-disabled": l,
        tabIndex: l ? -1 : 0,
        children: (0, t.jsx)(l6, { color: n }),
    });
}
function te(e) {
    let {
        color: n,
        ariaLabel: l,
        suggestedColors: i,
        disabled: r,
        isOpen: a,
        onRequestOpen: s,
        onRequestClose: o,
        onSelect: d,
        buttonRef: u,
    } = e;
    return (0, t.jsx)(ln.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(ll.VN, { ...e, value: n, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(l4, { color: n, onClick: i, disabled: r, buttonRef: u, "aria-label": l, ...a });
        },
    });
}
function tn(e) {
    let {
            primaryColor: n,
            secondaryColor: l,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
            variant: u = "square",
            initialOpenPopout: c,
        } = e,
        [g, m] = i.useState(null),
        f = i.useRef(null),
        p = i.useRef(null),
        x = (0, n4.Hl)(n),
        h = (0, n4.Hl)(l),
        v = eY.intl.formatToPlainString(eY.t.FquTfm, { colorLabel: x }),
        A = eY.intl.formatToPlainString(eY.t.xOnm4z, { colorLabel: h });
    i.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? f : p;
            (e.current?.focus(), m(c));
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), f.current?.focus());
                  },
              }
            : void 0;
    return (0, t.jsx)(li.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(l8, {
            primaryColor: n,
            secondaryColor: l,
            children: [
                (0, t.jsx)(te, {
                    color: n,
                    ariaLabel: v,
                    suggestedColors: s,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => m("theme-primary"),
                    onRequestClose: () => m(null),
                    buttonRef: f,
                }),
                (0, t.jsx)(te, {
                    color: l,
                    ariaLabel: A,
                    suggestedColors: s,
                    onSelect: a,
                    disabled: o,
                    isOpen: "theme-secondary" === g,
                    onRequestOpen: () => m("theme-secondary"),
                    onRequestClose: () => m(null),
                    buttonRef: p,
                }),
            ],
        }),
    });
}
function tl(e) {
    let { user: n, guildId: l, disabled: r = !1 } = e,
        a = (0, X.Ay)(n.id, l),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ep.A, K.A], () => {
            let e = ep.A.getPendingChanges(l ?? void 0),
                t = K.A.getUserProfile(n.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != l ? (K.A.getGuildMemberProfile(n.id, l)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, em.V7)({ userId: n.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, ee.A)({
            user: n,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, le.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : n.getAvatarURL(l ?? void 0, 80),
        v = (0, lt.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e3.p)({ guildId: l ?? void 0, themeColors: e });
            },
            [l],
        ),
        b =
            null != l && (0, l9.l)(d, o)
                ? {
                      onClick: () => (0, e3.p)({ guildId: l, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eY.intl.string(eY.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(tn, {
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && A([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && A([m, e]);
              },
              suggestedColors: v,
              disabled: r,
              deleteButton: b,
          });
}
var tt = l(629985);
function ti(e) {
    let { children: n, hasGradientBackground: l = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(tt.k, { [tt.V]: l }), children: n }) });
}
var tr = l(207119),
    ta = l(689175),
    ts = l(424290);
function to(e) {
    let { children: n, isDismissed: l } = e;
    return (0, u.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) => (l ? (0, t.jsx)(tr.animated.div, { className: ts.iK, style: e, children: n }) : null));
}
function td(e) {
    let { children: n, floatingFooter: l } = e,
        r = i.useRef(null),
        s = null != l,
        [o, d] = i.useState(!1),
        [u, c] = i.useState("pending-measurement");
    i.useLayoutEffect(() => {
        if (!s) return void c("pending-measurement");
        let e = r.current?.getScrollerNode();
        null == e || (d(!1), c(e.scrollHeight - e.clientHeight >= 86 ? "dismiss-on-scroll" : "safe-padding"));
    }, [s]);
    let g = i.useCallback(
            (e) => {
                if ("dismiss-on-scroll" !== u) return;
                let { scrollTop: n } = e.currentTarget;
                !o && n >= 86 ? d(!0) : o && n <= 43 && d(!1);
            },
            [u, o],
        ),
        m = s && "safe-padding" === u;
    return (0, t.jsxs)("div", {
        className: ts.u6,
        children: [
            (0, t.jsx)(ta.zC, {
                ref: r,
                className: a()(ts.XG, { [ts.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: ts.Qs, children: n }),
            }),
            s && (0, t.jsx)(to, { isDismissed: o, children: l }),
        ],
    });
}
var tu = l(508770),
    tc = l(732280),
    tg = l(811611),
    tm = l(976860),
    tf = l(402860);
function tp() {
    return i.useCallback(() => {
        ((0, tm.pX)(Q.BVt.NITRO_HOME), (0, tf.closeUserProfileModal)());
    }, []);
}
var tx = l(570002),
    th = l(202541),
    tv = l(155053);
function tA() {
    let e = (0, tc.V)();
    return e?.subscriptionTrial?.skuId === th.pe.TIER_2 ? e : null;
}
function tb() {
    let e = (0, tx.A)(eY.intl.string(eY.t.pj0XBN));
    return (0, t.jsx)(n1.A, { subscriptionTier: th.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tj(e) {
    let { trialOffer: n, onSubscribeSuccess: l } = e,
        i = tp(),
        r = (0, W.FY)({
            intervalType: n.subscriptionTrial?.interval,
            intervalCount: n.subscriptionTrial?.intervalCount,
        }),
        a = (0, tg.ux)(n.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: tv.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tv.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eY.intl.string(eY.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(tu.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eY.intl.format(eY.t["fF+cgd"], { onClick: i }),
            }),
            (0, t.jsx)(n1.A, {
                subscriptionTier: th.pe.TIER_2,
                buttonTextOverride: r,
                onSubscribeModalClose: (e) => {
                    e && l?.();
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != a &&
                (0, t.jsx)(eE.E, { variant: "text-xs/normal", color: "text-muted", className: tv.u8, children: a }),
        ],
    });
}
function tI() {
    let e = tA();
    return null == e ? (0, t.jsx)(tb, {}) : (0, t.jsx)(tj, { trialOffer: e });
}
var ty = l(55619),
    tC = l(848717);
function tN() {
    return (0, t.jsxs)("div", {
        className: tC.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eY.intl.string(eY.t.JFY17v),
            }),
            (0, t.jsx)(nY.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eY.intl.string(eY.t.R9GHya),
                onClick: function () {
                    return ty.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tE = l(342866),
    tP = l(968475);
function tk(e) {
    let { user: n, ...l } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([ep.A], () => ({
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tE.A, {
        ...l,
        variant: "full-height-bar",
        userId: n.id,
        avatarChange: a,
        accessibleValue: (0, tE.$)(a, n.avatar),
        imageInteractingClassName: null == r ? tP.$T : void 0,
    });
}
function tT(e) {
    let { userId: n, ...l } = e,
        i = (0, X.Ay)(n),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [ep.A, K.A],
            () => ({
                pendingBanner: ep.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ep.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: K.A.getUserProfile(n)?.banner,
            }),
            [n],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(lg, {
        ...l,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: lo(d, o),
    });
}
function tS(e) {
    let { user: n, ...l } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: a,
        } = (0, s.cf)([ep.A], () => ({
            pendingDisplayNameStyles: ep.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: ep.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: ep.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, s.cf)([U.default], () => ({ globalName: U.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eg.lw)({ pendingValue: a, userValue: o }) ?? n.username;
    return (0, t.jsx)(lN, {
        ...l,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: ly(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tO = l(207803);
function tR(e) {
    let n = (0, X.Ay)(e.id),
        {
            tryItOutThemeColors: l,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([ep.A], () => ({
            tryItOutThemeColors: ep.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, em.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, ee.A)({
            user: e,
            displayProfile: n,
            pendingThemeColors: l,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: l };
}
function t_(e) {
    let { user: n, initialOpenPopout: l } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tR(n),
        d = (0, le.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : n.getAvatarURL(void 0, 80),
        c = (0, lt.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tO.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(tn, {
              variant: "full-height-bar",
              primaryColor: r,
              secondaryColor: a,
              onSelectPrimaryColor: (e) => {
                  (o?.[0] == null || e !== o[0]) && g([e, a]);
              },
              onSelectSecondaryColor: (e) => {
                  (o?.[1] == null || e !== o[1]) && g([r, e]);
              },
              suggestedColors: c,
              initialOpenPopout: l,
          });
}
function tD(e) {
    let { user: n, onClickPrimary: l, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tR(n);
    if (null == r || null == a) return null;
    let s = eY.intl.formatToPlainString(eY.t.FquTfm, { colorLabel: (0, n4.Hl)(r) }),
        o = eY.intl.formatToPlainString(eY.t.xOnm4z, { colorLabel: (0, n4.Hl)(a) });
    return (0, t.jsx)(li.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(l8, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(l4, { color: r, onClick: l, "aria-label": s }),
                (0, t.jsx)(l4, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var tL = l(847081);
function tM(e) {
    let { user: n, mode: l } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, nU.pA)(),
        c = (function (e) {
            let { analyticsLocations: n } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, lp.L)({ analyticsLocations: n, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [n, e]);
        })(r),
        g = (0, lm._)({ isPremiumTryItOut: !0, returnRef: a }),
        m = (0, lm.P)({ isPremiumTryItOut: !0, returnRef: s }),
        f = "edit" === l;
    return (
        i.useEffect(() => {
            if (f && !o.current) {
                switch (d) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        m();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [d, f, c, g, m]),
        (0, t.jsxs)("div", {
            className: tL.T,
            children: [
                (0, t.jsx)(lT, {
                    heading: eY.intl.string(eY.t.NEzEws),
                    children: (0, t.jsx)(tS, {
                        user: n,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lT, {
                    heading: eY.intl.string(eY.t.DMeO2X),
                    children: f
                        ? (0, t.jsx)(t_, {
                              user: n,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tD, {
                              user: n,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(lT, {
                    heading: eY.intl.string(eY.t.Vgdusv),
                    children: (0, t.jsx)(tT, {
                        userId: n.id,
                        buttonRef: s,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lT, {
                    heading: eY.intl.string(eY.t.Dt3ZUr),
                    children: (0, t.jsx)(tk, {
                        user: n,
                        buttonRef: a,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var tw = l(847374),
    tG = l(111159),
    tF = l(548118),
    tV = l(711014),
    tU = l(540637),
    tB = l(801461),
    tz = l(44482),
    tW = l(844222),
    tH = l(561392),
    tq = l(499957),
    tK = l(15626),
    tY = l(470791);
function tX(e) {
    let {
            options: n,
            value: l,
            onSelectionChange: r,
            label: s,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: p,
        } = e,
        {
            isOpen: x,
            setIsOpen: h,
            refs: v,
            floatingStyles: A,
            getReferenceProps: b,
            getFloatingProps: j,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(tW.C),
                {
                    isOpen: n,
                    setIsOpen: l,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tH.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tq.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: n,
                setIsOpen: l,
                refs: t,
                floatingStyles: r,
                getReferenceProps: a,
                getFloatingProps: s,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: y } = v,
        C = i.useContext(tK._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, O] = i.useState(null),
        R = null != S ? (0, tB.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        D = i.useRef(!1),
        L = i.useMemo(() => n.filter((e) => (0, tB.fI)(e.value, [l])), [l, n]),
        M = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        w = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
            (h(!1), k.current?.focus());
        }, [h]),
        F = i.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (D.current) {
                        D.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = n[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, S, n, r, h],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let n = e[0];
                null != n && (r(n.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: U, handleKeyDown: B } = (0, tU.l)(!0, n),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = U !== z.current;
        ((z.current = U), null != U && e && (O(U), x || ((_.current = !0), h(!0))));
    }, [U, x, h]);
    let W = i.useCallback(
            (e) => {
                if (u) return;
                let l = n.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === l) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || h(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + n, l - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === l) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != S) {
                                let e = n[S];
                                if (null != e && !0 !== e.disabled) {
                                    V([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!x) return void h(!0);
                        O((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void h(!0);
                        if (null == S || S > l - 1) return;
                        {
                            let e = n[S];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === l)) return;
                        (O(0), x || ((_.current = !0), h(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === l)) return;
                        (O(l - 1), x || ((_.current = !0), h(!0)));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = n[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((D.current = !0), h(!1));
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, n, S, V, G, r, h, B],
        ),
        H = Math.max(
            n.findIndex((e) => e.id === L[L.length - 1]?.id),
            0,
        ),
        q = i.useRef(!1);
    i.useEffect(() => {
        c || !x || q.current
            ? x || ((q.current = !1), O(null), (_.current = !1))
            : ((q.current = !0), _.current || O(n.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, n.length]);
    let K = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": R,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: M,
        onMouseDown: w,
        onKeyDown: W,
        onBlur: F,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            ((T.current = e), v.setReference(e));
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: K }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: y,
                    className: a()(tY.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tU.q, {
                        id: P,
                        tabIndex: -1,
                        items: n,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tz.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var t$ = l(216384);
let tZ = "MAIN_PROFILE";
function tJ(e) {
    let { guild: n } = e;
    return (0, t.jsx)(tF.Ay, { className: t$.$f, guild: n, size: tF.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tQ(e) {
    let { leading: n, label: l, description: i } = e;
    return (0, t.jsxs)("div", {
        className: t$.XE,
        children: [
            null != n && (0, t.jsx)("div", { className: t$.fZ, children: n }),
            (0, t.jsxs)("div", {
                className: t$.qL,
                children: [
                    (0, t.jsx)(eE.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: l }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eE.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: i,
                        }),
                ],
            }),
        ],
    });
}
function t0(e) {
    let { leading: n, label: l, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eV.D, {
        innerRef: r,
        className: a()(t$.L5, { [t$.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            n,
            (0, t.jsx)(eE.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: t$.v9,
                children: l,
            }),
            (0, t.jsx)(tw.a, {
                className: t$.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function t1(e) {
    let { selectedGuildId: n, originGuildId: l, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tV.Ay], () => tV.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([G.A], () => G.A.getGuilds()),
        c = (0, s.bG)([eq.A], () => {
            let e = eq.A.getGuildId();
            return null == e || ep._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ef.Ay, tV.Ay], () => {
            let e = {};
            for (let n of tV.Ay.getFlattenedGuildIds()) {
                let l = ef.Ay.getSelfMember(n)?.nick;
                null != l && (e[n] = l);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tZ,
                    label: eY.intl.string(eY.t["2p07FR"]),
                    value: tZ,
                    leading: (0, t.jsx)(tG.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
                },
                n = l ?? c,
                i = d
                    .map((e) => {
                        if (e === n) return null;
                        let l = u[e];
                        return null == l
                            ? null
                            : {
                                  id: l.id,
                                  label: l.name,
                                  value: l.id,
                                  leading: (0, t.jsx)(tJ, { guild: l }),
                                  description: g[l.id] ?? void 0,
                              };
                    })
                    .filter(ea.Vq),
                r = null != n ? u[n] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(tJ, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, l, c, g]),
        f = n ?? tZ,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let l = e === tZ ? null : e;
                l !== n && r(l);
            },
            [r, n],
        );
    return (0, t.jsx)(tX, {
        className: t$.kL,
        label: eY.intl.string(eY.t.rki38K),
        listboxClassName: t$.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tQ, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(t0, { leading: p.value === tZ ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var t2 = l(462887),
    t3 = l(765178),
    t9 = l(461797),
    t7 = l(469054),
    t5 = l(601298);
function t8() {
    let { preset: e, setPreset: n } = (0, nU.RQ)(),
        { clientThemeAdaptedColorsEnabled: l } = n5({ location: "useRandomPremiumTryItOutPreset" }),
        t = (0, l_.Ay)(),
        r = (0, t2.q)(t),
        a = i.useCallback(
            (e) => {
                let n = (0, t9.Wt)(e);
                (0, tO.w5)({
                    banner: (0, t5.X)({
                        assetOrigin: t7.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: l ? (r ? n.themeColors.light : n.themeColors.dark) : n.themeColorsLegacy,
                    displayNameStyles: n.displayNameStyles,
                });
            },
            [l, r],
        );
    i.useEffect(() => {
        ep.A.hasTryItOutChanges() || a(e);
    }, [a, e]);
    let s = i.useCallback(() => {
        let l = (0, t9.B$)(e),
            t = (0, t9.Wt)(l);
        (nk.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: l }),
            n(l),
            a(l),
            t3.O.announce(eY.intl.formatToPlainString(eY.t.M2Hj9s, { presetName: t.getName() })));
    }, [e, n, a]);
    return { preset: e, onShuffle: s };
}
var t6 = l(23722),
    t4 = l(49999),
    ie = l(288490);
let il = "profile-editing-nameplate-error",
    it = "profile-editing-avatar-error",
    ii = "profile-editing-avatar-decoration-error",
    ir = "profile-editing-banner-error",
    ia = "profile-editing-display-name-style-error";
function is(e) {
    let { className: n } = e;
    return (0, t.jsx)("div", {
        className: a()(ie.D0, n),
        children: (0, t.jsx)("div", { className: ie.ZN, children: (0, t.jsx)(nz.LockIcon, { size: "xs" }) }),
    });
}
function io() {
    let e = (0, tx.A)(eY.intl.string(eY.t.pj0XBN)),
        n = tp();
    return (0, t.jsxs)(nW.h, {
        color: "nitro-pink",
        className: ie.Lu,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eY.intl.format(eY.t.TmfgI2, { onClick: n }),
            }),
            (0, t.jsx)(n1.A, { subscriptionTier: th.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function id() {
    let [e, n] = (0, nZ.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: ie.X6,
              children: [
                  (0, t.jsx)(eE.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eY.intl.string(eY.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eV.D, {
                      "aria-label": eY.intl.string(eY.t.rSe9ra),
                      className: ie.TD,
                      onClick: () => n(!0),
                      children: (0, t.jsx)(nH.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function iu() {
    let e = tp(),
        n = (0, tx.A)(eY.intl.string(eY.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: ie.eW,
        children: [
            (0, t.jsxs)("div", {
                className: ie.tm,
                children: [
                    (0, t.jsx)(nq.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eY.intl.string(eY.t.bO0TOe),
                    }),
                    (0, t.jsx)(eE.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eY.intl.format(eY.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(n1.A, { subscriptionTier: th.pe.TIER_2, buttonTextOverride: n, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(is, { className: ie.nd }),
        ],
    });
}
function ic() {
    return (0, t.jsx)(eE.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: ie.BJ,
        "aria-hidden": !0,
        children: eY.intl.format(eY.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(eJ.t, { size: "xxs", color: "currentColor", className: ie.qp }),
        }),
    });
}
function ig(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(lT, {
        heading: eY.intl.string(eY.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(lO.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? il : void 0 }),
            (0, t.jsx)(lS, { id: il, message: r }),
        ],
    });
}
function im(e) {
    let { user: n, guildId: l, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(lT, {
        heading: eY.intl.string(eY.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(n8.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? it : void 0 }),
            (0, t.jsx)(n6.A, { user: n, guildId: l, disabled: i, errorMessageId: null != a ? ii : void 0 }),
            (0, t.jsx)(lS, { id: it, message: (0, n2.d3)(r) }),
            (0, t.jsx)(lS, { id: ii, message: a }),
        ],
    });
}
function ip(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e,
        a = (0, n0.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, nQ.kn)(a && !i ? [nB.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === nB.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(lT, {
        heading: eY.intl.string(eY.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(nK.Lp, { text: eY.intl.string(eY.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(lE, {
                user: n,
                guildId: l,
                disabled: i,
                errorMessageId: null != r ? ia : void 0,
                onOpen: d ? () => o(t4.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(lS, { id: ia, message: r }),
        ],
    });
}
function ix(e) {
    let { user: n, guildId: l, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(lT, {
        heading: eY.intl.string(eY.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(tl, { user: n, guildId: l, disabled: i || !r }),
            (0, t.jsx)(lf, { userId: n.id, guildId: l, disabled: i || !r, errorMessageId: null != a ? ir : void 0 }),
            (0, t.jsx)(lS, { id: ir, message: (0, n2.d3)(a) }),
        ],
    });
}
function ih(e) {
    let { user: n, disabled: l } = e;
    return (0, t.jsx)(lT, {
        heading: eY.intl.string(eY.t["/X3fkf"]),
        disabled: l,
        children: (0, t.jsx)(lr, { user: n, disabled: l }),
    });
}
function iv(e) {
    let { user: n, guildId: l, disabled: i } = e,
        r = (0, nJ.s)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(lT, {
        heading: eY.intl.string(r ? eY.t["Vfbar/"] : eY.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(l$, { user: n, guildId: l, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(l3, { user: n, guildId: l, disabled: i }),
        ],
    });
}
let iA = "premium-try-it-out-description";
function ib(e) {
    let { user: n } = e,
        l = tp(),
        { navigate: i } = (0, nU.pA)();
    return (
        t8(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": iA,
            className: ie.DX,
            children: [
                (0, t.jsx)(is, { className: ie.x$ }),
                (0, t.jsxs)("div", {
                    className: ie.sb,
                    children: [
                        (0, t.jsx)(eE.E, {
                            id: iA,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eY.intl.format(eY.t.TmfgI2, { onClick: l }),
                        }),
                        (0, t.jsx)(nY.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: nX.EyeIcon,
                            text: eY.intl.string(eY.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tM, { user: n, mode: "entrypoint" }),
            ],
        })
    );
}
function ij(e) {
    let {
            user: n,
            panelId: l,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: a,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        { enabled: m } = n5({ location: "DefaultEditingPanelView" }),
        f = (0, t6.A)(c),
        p = null != i,
        x = W.Ay.canUsePremiumProfileCustomization(n),
        h = p && !x,
        v = !x && !p,
        A = v && m,
        b = p && !x && !g,
        j = a || o,
        I = (0, s.bG)([ep.A], () => ep.A.getErrors(i)),
        y = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        C = I.avatar?.[0],
        N = I.avatar_decoration_sku_id?.[0],
        E = I.banner?.[0],
        P = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0],
        k = n9.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = x || p ? "inline" : A ? "hidden" : k ? "end" : "hidden",
        S = (0, t.jsx)(ip, { user: n, guildId: i, disabled: j || h, errorMessage: P });
    return (0, t.jsxs)(ti, {
        hasGradientBackground: b,
        children: [
            (0, t.jsxs)("div", {
                className: ie.wx,
                children: [
                    (0, t.jsx)(nb.m, {
                        text: eY.intl.string(eY.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eV.D, {
                            innerRef: d,
                            className: ie.cS,
                            "aria-label": eY.intl.string(eY.t["l/A351"]),
                            onClick: u,
                            "aria-controls": l,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(n$.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(t1, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(tN, {})
                : (0, t.jsx)(td, {
                      floatingFooter: v && !A ? (0, t.jsx)(io, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (x ? (0, t.jsx)(id, {}) : (0, t.jsx)(iu, {})),
                              x && (0, t.jsx)(ic, {}),
                              (0, t.jsx)(ig, { user: n, guildId: i, disabled: j || h, errorMessage: y }),
                              (0, t.jsx)(im, {
                                  user: n,
                                  guildId: i,
                                  disabled: j || h,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: N,
                              }),
                              "inline" === T && S,
                              x || p
                                  ? (0, t.jsx)(ix, {
                                        user: n,
                                        guildId: i,
                                        disabled: j || h,
                                        canUsePremiumProfileFeatures: x,
                                        bannerErrorMessage: E,
                                    })
                                  : (0, t.jsx)(ih, { user: n, disabled: j || h }),
                              (0, t.jsx)(iv, { user: n, guildId: i, disabled: j || h }),
                              "end" === T && S,
                              A &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(ib, { user: n }), (0, t.jsx)(tI, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var iI = l(110654);
function iy(e) {
    return null;
}
function iC(e) {
    let { activeSlide: n, direction: l, onTransitionComplete: r, children: s } = e,
        o = new Map(s.map((e) => [e.props.id, e]));
    if (!o.has(n)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = i.useState(n),
        [g, m] = i.useState(!1),
        f = "forwards" === l ? 1 : -1,
        p = (0, u.p)(
            n,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, l) => {
                    let { item: t } = l;
                    e.finished && t === n && (m(!1), t !== d && (c(n), r()));
                },
            },
            "respect-motion-settings",
        ),
        x = g || n !== d;
    return (0, t.jsx)("div", {
        className: a()(iI.kL, x && iI.ez),
        children: (0, t.jsx)("div", {
            className: iI.u4,
            children: p((e, n, l) => {
                let { key: i } = l,
                    r = o.get(n);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          tr.animated.div,
                          {
                              className: iI.M6,
                              style: x
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: x || n !== d,
                              "aria-hidden": x || n !== d,
                              children: r.props.children,
                          },
                          i,
                      );
            }),
        }),
    });
}
var iN = l(477155),
    iE = l(206697),
    iP = l(926321),
    ik = l(663417),
    iT = l(145934);
let iS = "shuffle-options-a11y-description";
function iO() {
    let { preset: e, onShuffle: n } = t8(),
        { showPresetName: l } = n5({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let n = (0, t9.Wt)(e);
            return { presetName: n.getName(), presetHeader: n.getPreviewThumbnailSrc() };
        }, [e]);
    return l
        ? (0, t.jsxs)("div", {
              className: iT.kL,
              children: [
                  (0, t.jsx)(nb.m, {
                      text: eY.intl.string(eY.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(nV.K, {
                          icon: ik.RefreshIcon,
                          "aria-label": eY.intl.string(eY.t.VzqqFC),
                          "aria-describedby": iS,
                          onClick: n,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: iS, children: eY.intl.string(eY.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: iT.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: iT.L_, src: a }),
                          (0, t.jsxs)(eE.E, {
                              className: iT._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eY.intl.formatToPlainString(eY.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: iT.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(nY.$, {
                      icon: iP.DiceIcon,
                      text: eY.intl.string(eY.t.VzqqFC),
                      onClick: n,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": iS,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: iS, children: eY.intl.string(eY.t.bBRdiB) }),
              ],
          });
}
var iR = l(280406);
function i_(e) {
    let { user: n, onBack: l, backButtonRef: i } = e,
        r = tA();
    return (0, t.jsxs)(ti, {
        children: [
            (0, t.jsxs)("div", {
                className: iR.wx,
                children: [
                    (0, t.jsx)(eV.D, {
                        innerRef: i,
                        "aria-label": eY.intl.string(eY.t["4IYwrw"]),
                        onClick: l,
                        className: iR.Gv,
                        children: (0, t.jsx)(iN.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(nq.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iR.R_,
                        children: eY.intl.string(eY.t.PxUx8e),
                    }),
                    (0, t.jsx)(eE.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iR.Ij,
                        children: eY.intl.string(eY.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: iR.ZZ, children: (0, t.jsx)(iO, {}) }),
                ],
            }),
            (0, t.jsx)(td, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(tM, { user: n, mode: "edit" }),
                        null != r && (0, t.jsx)(tj, { trialOffer: r, onSubscribeSuccess: iE.T }),
                    ],
                }),
            }),
        ],
    });
}
var iD = l(199016);
let iL = "user-profile-editing-panel",
    iM = "profile-modal-editing-panel-heading";
function iw(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(nb.m, {
        text: eY.intl.string(eY.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eV.D, {
            innerRef: i,
            "aria-label": eY.intl.string(eY.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iL,
            className: a()(iD.eg, l),
            onClick: n,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(nF.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iG(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(nb.m, {
            text: eY.intl.string(eY.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(nV.K, {
                buttonRef: i,
                "aria-label": eY.intl.string(eY.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iL,
                icon: nF.V,
                onClick: n,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iF(e) {
    let {
            selectedGuildId: n,
            originGuildId: l,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        p = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, nU.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: iL,
              "aria-labelledby": iM,
              className: a()(iD.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iD.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iM, children: eY.intl.string(eY.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(iC, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(iy, {
                                  id: "default",
                                  children: (0, t.jsx)(ij, {
                                      panelId: iL,
                                      user: p,
                                      selectedGuildId: n,
                                      originGuildId: l,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, t.jsx)(iy, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(i_, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iV = l(669253),
    iU = l(347805),
    iB = l(629403),
    iz = l(612630),
    iW = l(761431),
    iH = l(61426);
function iq(e) {
    let { userId: n, className: l, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iz.A)(n),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    (f(void 0), g(e), a?.());
                    try {
                        await iB.A.updateNote(n, e);
                    } catch {
                        f(eY.intl.string(eY.t.F8FvUy));
                    }
                }
            },
            [n, u, a],
        ),
        h = d && null == p,
        v = (0, iW.T)({ value: p ?? "", onCommit: x, disabled: h }),
        { handleStartEditing: A } = v,
        b = i.useRef(!1);
    if (
        (i.useEffect(() => {
            !r || o || d || b.current || ((b.current = !0), A());
        }, [r, o, d, A]),
        o)
    )
        return null;
    let j =
        null != p && p.length > 0
            ? (0, t.jsx)(eE.E, { variant: "text-sm/normal", color: "text-default", className: iH.t, children: p })
            : null;
    return (0, t.jsx)(iW.y, {
        ...v,
        variant: "multiline",
        className: l,
        preview: j,
        editButtonAriaLabel: eY.intl.string(eY.t.PbMNh2),
        label: eY.intl.string(eY.t.PbMNh2),
        placeholder: h ? eY.intl.string(eY.t["WLKx/9"]) : eY.intl.string(eY.t.VBhOe2),
        maxLength: Q.T7x,
        rows: 3,
        disabled: h,
        error: m,
    });
}
var iK = l(518477),
    iY = l(793222);
function iX(e) {
    let { userId: n } = e,
        l = (0, eb.g)(),
        { trackUserProfileAction: i } = (0, H.NJ)(),
        r = (0, Y.X)("UserProfileModalV2NotesSection"),
        a = r ? iq : iU.A;
    return (0, t.jsx)(e1.A, {
        heading: eY.intl.string(eY.t["mQKv+v"]),
        scrollTargetId: iK.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: n,
            className: r ? iY.N : iY.w,
            autoFocus: l === iK.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var i$ = l(123292),
    iZ = l(667242),
    iJ = l(655214);
function iQ(e) {
    let { icon: n, message: l, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iZ.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iJ.oR, iZ.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iZ.Kk, children: n }),
                    (0, t.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iZ.hP,
                            children: (0, t.jsx)(i$.Q, {
                                buttonRef: c,
                                variant: "primary",
                                textVariant: "text-sm/semibold",
                                text: r,
                                onClick: s,
                                disabled: o,
                            }),
                        }),
                ],
            }),
        })
    );
}
var i0 = l(346055),
    i1 = l(289873),
    i2 = l(615019);
function i3(e) {
    let { showScrim: n, showLoadingSpinner: l, className: r, children: s } = e;
    i.useEffect(() => {
        l && t3.O.announce(eY.intl.string(eY.t["QR+vBP"]));
    }, [l]);
    let o = i.useRef(null);
    return (
        (0, i0.f)(o, n),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(i2.f, n && i2.z),
                    children: l && (0, t.jsx)(i1.y, { type: i1.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": n || void 0, className: r, children: s }),
            ],
        })
    );
}
var i9 = l(568602),
    i7 = l(625494),
    i5 = l(61881);
function i8(e) {
    let { children: n } = e,
        [l, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([i5.A, ep.A], () => i5.A.hasUnsavedChanges() || ep.A.hasUnsavedChanges());
    i.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = i.useCallback(() => {
        (null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1));
    }, []);
    return (
        i.useEffect(() => {
            function e() {
                (o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        (r(!1), (d.current = null));
                    }, 300)));
            }
            return (
                i7._.subscribe(Q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    i7._.unsubscribe(Q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(i9.b, { isShaking: l, intensity: a, children: n })
    );
}
l(46121);
var i6 = l(483708),
    i4 = l(933832),
    re = l(972213),
    rn = l(97483),
    rl = l(775602),
    rt = l(384377);
let ri = {
        [iK.jM.WIDGET_ADDED]: {
            message: eY.intl.string(eY.t.fFP1Uy),
            icon: (0, t.jsx)(i4.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iK.jM.WIDGET_REMOVED]: {
            message: eY.intl.string(eY.t.zzsK7h),
            icon: (0, t.jsx)(i4.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iK.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eY.intl.string(eY.t["84MExs"]),
            icon: (0, t.jsx)(re.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: rn.Ck.FAILURE,
        },
        [iK.jM.SOMETHING_WENT_WRONG]: {
            message: eY.intl.string(eY.t.F8FvUy),
            icon: (0, t.jsx)(re.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: rn.Ck.FAILURE,
        },
    },
    rr = (e) => {
        let { className: n } = e,
            l = (0, rt.fu)(),
            r = (0, s.bG)([rl.Ay], () => rl.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (o(!0), c(ri[l]), t3.O.announce(ri[l].message)) : o(!1);
        }, [l]);
        let g = (0, u.p)(
            a,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, rt.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, rt.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, l) =>
                        l &&
                        null !== d &&
                        (0, t.jsx)(tr.animated.div, { className: n, style: e, children: (0, t.jsx)(iQ, { ...d }) }),
                ),
            })
        );
    };
var ra = l(297413),
    rs = l(465829),
    ro = l(826673),
    rd = l(609425),
    ru = l(73392),
    rc = l(576705),
    rg = l(997394);
function rm(e) {
    return null == e || "" === e ? void 0 : e;
}
function rf(e) {
    let n,
        l,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        m,
        f,
        { user: p, displayProfile: h } = e,
        { analyticsLocations: v } = (0, I.Ay)(),
        A = h?.guildId != null,
        b = h?.guildId ?? void 0,
        j = W.Ay.canUsePremiumProfileCustomization(p),
        y = (0, n0.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: C, permissionsLoaded: N } = (0, s.cf)([rc.A, G.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = G.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: rc.A.can(Q.xBc.CHANGE_NICKNAME, e) || rc.A.can(Q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            onCommit: k,
        } = ((l = null != (n = h?.guildId ?? null)),
        (r = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ef.Ay], () => (null != n ? (ef.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingNickname)),
        (g = (c = void 0 !== (u = l ? d : o) ? u : l ? a : r) ?? ""),
        (m = rm(c) ?? rm(r) ?? p.username),
        (f = rm(c) ?? p.username),
        {
            value: g,
            previewValue: l ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    l ? (0, e3.p)({ nickname: e.trim(), guildId: n ?? void 0 }) : (0, e3.p)({ globalName: e.trim() });
                },
                [l, n],
            ),
        }),
        T = (0, iW.T)({ value: E, onCommit: k, disabled: !C }),
        { isEditing: S, handleCommit: O } = T,
        R = (0, s.bG)([ep.A], () => ep.A.getErrors(b ?? null)),
        _ = (0, e2.EC)(b ?? null),
        D = A ? R.nick?.[0] : R.global_name?.[0],
        L = _?.nick?.[0],
        M = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(b).pendingDisplayNameStyles),
        w = (0, rd.A)({ userId: p.id, guildId: b, pendingDisplayNameStyles: M }),
        F = (0, ru.a)({ displayNameStyles: w, compensateForSafari: !1 }),
        V = eY.intl.string(A ? eY.t.mq6Cg9 : eY.t.XuZU7A),
        B = A ? eY.intl.string(eY.t.YcDKr8) : p.username,
        z = eY.intl.string(A ? eY.t["g7OSZ/"] : eY.t.kyfzzc),
        H = i.useRef(null),
        q = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    S && O(),
                    y &&
                        (0, ro.Dr)(nB.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: t4.i.INDIRECT_ACTION,
                        }),
                    (0, lp.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: H }));
            },
            [S, O, v, b, y],
        ),
        K = {
            icon: nF.V,
            tooltip: eY.intl.string(eY.t.lqKKI2),
            "aria-label": eY.intl.string(eY.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: q,
            buttonRef: H,
        },
        Y =
            A && !C && N
                ? (0, t.jsx)(nb.m, {
                      text: eY.intl.string(eY.t.gzjxQi),
                      children: (0, t.jsx)(eV.D, {
                          tag: "span",
                          className: rg.C,
                          children: (0, t.jsx)(nz.LockIcon, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eY.intl.string(eY.t.VPu695),
                          }),
                      }),
                  })
                : null;
    return (0, t.jsx)(iW.y, {
        ...T,
        hugContents: !0,
        preview: (e, n) => {
            var l;
            let { focused: i } = n;
            return "" === (l = i ? e : P)
                ? null
                : (0, t.jsx)(rs.c$, {
                      user: p,
                      guildId: b,
                      displayName: l,
                      size: "lg",
                      pendingDisplayNameStyles: M,
                      className: rg.d,
                      displayNameTrailing: Y,
                  });
        },
        placeholder: B,
        editButtonAriaLabel: z,
        label: V,
        maxLength: Q.zzC,
        textVariant: rs.gU.lg,
        textClassName: F,
        trailing: C && j ? K : void 0,
        error: D,
        warning: L,
        disabled: !C,
    });
}
var rp = l(628072);
function rx(e) {
    let n,
        l,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((n = u?.guildId ?? null),
        (l = u?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingPronouns)),
        (o = l ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, e3.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = (0, iW.T)({ value: c, onCommit: m }),
        { isEditing: p, isInlineSurface: x } = f,
        h = u?.guildId != null,
        v = null != g && g.length > 0,
        A = eY.intl.string(h ? eY.t.AXiE0i : eY.t["76Aqhl"]);
    return (0, t.jsx)(iW.y, {
        ...f,
        variant: "compact",
        hugContents: !0,
        className: a()(rp.k, p && !x && rp.J),
        preview: v ? (0, t.jsx)(rs.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eY.intl.string(eY.t.h6VAO7),
        label: eY.intl.string(eY.t["rniRE+"]),
        placeholder: A,
        maxLength: Q.VE5,
        spellCheck: !1,
    });
}
var rh = l(145497),
    rv = l(685073),
    rA = l(318785),
    rb = l(534400),
    rj = l(436921),
    rI = l(743981),
    ry = l(295930),
    rC = l(594615);
let rN = "no-server-tag";
function rE(e) {
    let { buttonRef: n, guildId: l, guildTag: i, guildBadge: r, ...s } = e,
        o = (0, rj.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == l;
    return (0, t.jsx)(eV.D, {
        innerRef: n,
        className: a()(o ? ry.qJ : ry.L5, { [ry.wK]: d }),
        ...s,
        children: (0, t.jsxs)(eE.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: ry.W3,
            tag: "span",
            children: [
                d
                    ? eY.intl.string(eY.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rb.Z9,
                                  {
                                      src: (0, rv.gC)(l, r, rI.Sl.SIZE_14),
                                      size: rI.Sl.SIZE_14,
                                      className: ry.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rv.gC)(l, r, rI.Sl.SIZE_14) ?? l,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tw.a, { size: "xs", color: "currentColor", className: ry.u4 }),
            ],
        }),
    });
}
function rP() {
    let e = (0, rA.b)(),
        n = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        l = (0, s.cf)([U.default], () => {
            let e = U.default.getCurrentUser();
            return (0, rv.Zo)(e?.primaryGuild);
        }),
        r = l.guildId ?? null,
        a = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingPrimaryGuildId),
        o = void 0 !== a ? a : r,
        d = null != o ? (n.get(o) ?? null) : null,
        u = null == d && o === r,
        c = d?.profile?.tag ?? (u ? (l.tag ?? null) : null),
        g = d?.profile?.badge ?? (u ? l.badge : void 0),
        m = i.useCallback(
            (e) =>
                e.id === rN
                    ? (0, t.jsx)("div", {
                          className: rC.uN,
                          children: (0, t.jsx)(eE.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: ry.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tz.c, { ...e }),
            [],
        ),
        f = i.useMemo(
            () => [
                { id: rN, label: eY.intl.string(eY.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let n = e.profile?.tag;
                    if (null == n) return [];
                    let l = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rh.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rb.o9, { guildId: e.id, guildTag: n, guildBadge: l }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, e3.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, t.jsx)(tX, {
              options: f,
              value: o,
              onSelectionChange: p,
              label: eY.intl.string(eY.t.Pdd1nd),
              listboxClassName: ry.yt,
              renderListItem: m,
              children: (e) => {
                  let { buttonRef: n, selectButtonProps: l } = e;
                  return (0, t.jsx)(rE, { buttonRef: n, guildId: o, guildTag: c, guildBadge: g, ...l });
              },
          });
}
var rk = l(956495);
function rT(e) {
    let { displayProfile: n, nickname: l, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(rs.Ay, {
        ...r,
        guildId: n?.guildId ?? void 0,
        displayName: l,
        displayNameSize: "lg",
        pronouns: n?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rS(e) {
    let n = (0, s.bG)([ep.A], () => ep.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rT, { ...e, displayNameStylesOverride: n });
}
function rO(e) {
    let { user: n, displayProfile: l, trailing: i } = e,
        r = n.isProvisional
            ? null
            : (0, t.jsx)(ra.A, {
                  user: n,
                  forceUsername: !0,
                  className: rk.a1,
                  usernameClass: rk.eb,
                  discriminatorClass: rk.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rf, { displayProfile: l, user: n }),
            (0, t.jsxs)("div", {
                className: a()(rk.AK, rk.j6),
                children: [r, (0, t.jsx)(rs.Ce, {}), (0, t.jsx)(rx, { displayProfile: l }), (0, t.jsx)(rP, {}), i],
            }),
        ],
    });
}
function rR(e) {
    let { editingMode: n, ...l } = e;
    switch (n) {
        case "read-only":
            return (0, t.jsx)(rT, { ...l });
        case "try-it-out":
            return (0, t.jsx)(rS, { ...l });
        case "edit":
            return (0, t.jsx)(rO, { ...l });
        default:
            return (0, ea.xb)(n);
    }
}
l(321073);
var r_ = l(97808),
    rD = l(980707),
    rL = l(477782),
    rM = l(22231),
    rw = l(601255),
    rG = l(562819),
    rF = l(19575),
    rV = l(339984),
    rU = l(329801),
    rB = l(884362);
let rz = rF.Ay.getEnableHardwareAcceleration() ? r_.Js : r_.eu;
function rW(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rH(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(rD.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eY.intl.string(eY.t.YAgq3W),
        children: (0, t.jsx)(rL.rX, { children: l }),
    });
}
function rq(e) {
    let { user: n, guildId: l } = e,
        { avatarProps: r, eventHandlers: o } = (0, eI.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: n, guildId: l, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != l,
                c = (0, s.bG)([ef.Ay], () => (null != l ? ef.Ay.getMember(l, n.id) : null)),
                g = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0).pendingAvatar),
                m = u ? c?.avatar : n.avatar,
                f = (0, eg.z5)(g, m),
                p = u && null != n.avatar,
                x = W.Ay.canUsePremiumProfileCustomization(n),
                h = x || null == l,
                v = x || null == l,
                A = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
                b = (0, eg.a4)({ user: n }),
                j = (0, eg.a4)({ user: n, guildId: l ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, eg.CP)(l ?? void 0),
                C = void 0 !== y,
                N = null != (0, rw.A)(C ? y : j) && (C ? null != y : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    (r(),
                        rW(() =>
                            (0, n2.XD)({
                                uploadType: rV.HL.AVATAR,
                                analyticsSource: o,
                                guildId: l ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, o, l, a]),
                k = i.useCallback(() => {
                    (r(),
                        rW(() =>
                            (0, rG.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    (r(),
                        (0, n2.rM)(null, m, (e) => (0, e3.p)({ guildId: l ?? void 0, avatar: e })),
                        (0, eg.WU)(p ? "reset" : "remove"));
                }, [r, l, m, p]),
                S = i.useCallback(() => {
                    (r(), (0, e3.p)({ guildId: l ?? void 0, avatarDecoration: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rL.Dr,
                                { id: "change-avatar", label: eY.intl.string(eY.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rL.Dr,
                                { id: "change-decoration", label: eY.intl.string(eY.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.twB3fz),
                                          action: T,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        N &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, f, N, P, k, T, S]);
        })({ user: n, guildId: l, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rU.my, rU.vk, rB.kL, { [rB.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rz, { ...r, imageClassName: a()(rU.Lw, rB.HU) }),
                  (0, t.jsx)(ln.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: ln.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rH, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rB.r9,
                              children: (0, t.jsx)(nV.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rM.PencilIcon,
                                  "aria-label": eY.intl.string(eY.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rK = l(514905);
function rY(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(rD.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eY.intl.string(eY.t.FzU73A),
        children: (0, t.jsx)(rL.rX, { children: l }),
    });
}
function rX(e) {
    let { user: n, guildId: l } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: n, guildId: l, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, eg.N2)({ user: n, guildId: l ?? void 0 }),
                c = (0, eg.Xf)({ user: n, guildId: l ?? void 0 }),
                g = (0, eg.Xf)({ user: n, guildId: void 0 }),
                m = (0, nJ.s)("UserProfileModalV2EditableBanner"),
                f = W.Ay.canUsePremiumProfileCustomization(n),
                p = null == l,
                x = p || f,
                h = m && (p || f),
                v = null != l,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0)),
                y = (0, s.bG)([K.A], () =>
                    null != l ? K.A.getGuildMemberProfile(n.id, l)?.banner : K.A.getUserProfile(n.id)?.banner,
                ),
                C = (0, s.bG)([U.default], () => U.default.getCurrentUser()?.banner != null),
                N = (0, s.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileEffect != null),
                P = (0, s.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileFrame != null),
                k = (0, eg.Ac)(A, y),
                T = v && C,
                S = v && N,
                O = v && P,
                R = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                D = (0, eg.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != l ? c : void 0,
                    guildId: l ?? void 0,
                }),
                L = (0, E.A)(D?.skuId, "UserProfileModalV2EditableBanner"),
                M = i.useCallback(() => {
                    (r(),
                        (0, n2.XD)({
                            uploadType: rV.HL.BANNER,
                            analyticsSource: o,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, o, l, a]),
                w = i.useCallback(() => {
                    (r(),
                        (0, lL.W)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, u, a]),
                F = i.useCallback(() => {
                    (r(), (0, n2.rM)(null, y, (e) => (0, e3.p)({ guildId: l ?? void 0, banner: e })));
                }, [r, l, y]),
                V = i.useCallback(() => {
                    (r(), (0, e3.p)({ guildId: l ?? void 0, profileEffect: null }));
                }, [r, l]),
                B = i.useCallback(() => {
                    (r(),
                        (0, lZ.w)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedProfileFrame: L,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, L, a]),
                z = i.useCallback(() => {
                    (r(), (0, e3.p)({ guildId: l ?? void 0, profileFrame: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rL.Dr,
                                { id: "change-banner", label: eY.intl.string(eY.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rL.Dr,
                                { id: "change-effect", label: eY.intl.string(eY.t["/6nv6N"]), action: w },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rL.Dr,
                                { id: "change-frame", label: eY.intl.string(eY.t["oTSa/q"]), action: B },
                                "change-frame",
                            ),
                        ),
                    f &&
                        k &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.jHlJNS),
                                          action: F,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.tT9n7D),
                                          action: F,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    x &&
                        R &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        _ &&
                        e.push(
                            O
                                ? (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.A0pzWn),
                                          action: z,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rL.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["8DfADq"]),
                                          action: z,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [T, f, x, h, S, O, k, R, _, M, w, B, F, V, z]);
        })({ user: n, guildId: l, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eC.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rK.kL, { [rK.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eC.A, { ...e, className: rK.Pr }),
                  (0, t.jsx)(ln.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: ln.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rY, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rK.r9,
                              children: (0, t.jsx)(nV.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rM.PencilIcon,
                                  "aria-label": eY.intl.string(eY.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var r$ = l(415916),
    rZ = l(419341),
    rJ = l(732188),
    rQ = l(913453),
    r0 = l(667049),
    r1 = l(389667),
    r2 = l(116331),
    r3 = l(837531),
    r9 = l(186272),
    r7 = l(447538);
let r5 = (e) => e * (2 - e),
    r8 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function r6(e) {
    let { type: n, anchor: l } = e;
    return "staple" !== n || "bottom" !== l;
}
function r4(e) {
    let { displayProfile: n, pendingBanner: l } = e;
    if ((0, en.Nx)()) return null;
    let i = n?.getPreviewBanner(l, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: r7.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function ae(e) {
    let { displayProfile: n, profileEffectOverride: l, isHovering: r } = e,
        a = void 0 !== l ? l : n?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (lG.add(e), () => lG.delete(e)),
            () => lF,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function an(e) {
    var n;
    let l,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: m,
            channelId: f,
            displayProfile: p,
            nickname: x,
            hasEntered: h,
            customStatusPrompt: v,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: C,
            accentColorOverride: N,
            profileEffectOverride: E,
            profileFrame: P,
            fadeInProfileFrame: T,
            editingMode: S,
            isLoading: L = !1,
        } = e,
        w = o.id === d.id,
        G = "edit" === S,
        U = i.useRef(null),
        B = i.useRef(null);
    i.useEffect(() => {
        if (w) return () => y.A.setState({ isOpen: !1 });
    }, [w]);
    let { isHoveringOrFocusing: W } = (0, O.A)(U),
        [H, q] = i.useState(),
        K = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? q("compact-xs") : n <= 380 ? q("compact-sm") : q(void 0);
        }, []);
    (0, A.g)(U, K, [], { fireOnMount: !0 });
    let Y = null != H ? r8[H] : void 0,
        X = i.useMemo(() => v ?? (0, R.A)(), [v]),
        { relationshipType: ee, originApplicationId: en } = (0, s.cf)([F.A], () => ({
            relationshipType: F.A.getRelationshipType(o.id),
            originApplicationId: F.A.getOriginApplicationId(o.id),
        })),
        eo =
            ((n = o.id),
            (l = (0, $.bG)([J.default], () => J.default.locale)),
            (r = (0, $.bG)([F.A], () => (F.A.getRelationshipType(n) === Q.eA$.FRIEND ? F.A.getSince(n) : null), [n])),
            (0, Z.An)(r, l)),
        ed = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        eu = (0, D.q)({ userId: o.id }),
        ec = (0, _.fi)(o.id),
        { appIdentities: eg, connections: em } = (function (e) {
            let { filteredAppIdentities: n } = (0, er.A)(e),
                l = (0, es.A)(e),
                t = i.useMemo(() => new Set(n?.map((e) => e.application_id) ?? []), [n]),
                r = (0, ei.A)([...t]).filter(ea.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        n
                            .map((e) => ({ identity: e, application: r.find((n) => n.id === e.application_id) }))
                            .filter((e) => {
                                let { application: n } = e;
                                return null != n;
                            }),
                    [n, r],
                ),
                connections: i.useMemo(
                    () =>
                        l.filter((e) => {
                            let n = et.A.get(e.type);
                            return (
                                !n?.migrationData?.getMigrationExperimentEnabled(
                                    "useVisibleUserProfileConnectionsAndAppIdentities",
                                ) || !t.has(n.migrationData.replacedBy)
                            );
                        }),
                    [l, t],
                ),
            };
        })(o.id),
        ef = (0, el.A)(o.id),
        ep = em.length > 0 || eg.length > 0,
        ev = ef.length > 0,
        eA = G ? rX : eC.A,
        eb = p?.guildId ?? u,
        ej = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: Y?.avatarSize ?? eh.T[ex.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eE = i.useCallback(() => {
            (0, eG.A)({ user: o, guildId: eb, alt: x });
        }, [x, eb, o]);
    return (0, t.jsxs)("main", {
        className: a()(r7.profile, null != H && r7[H]),
        ref: U,
        "aria-busy": L,
        children: [
            (0, t.jsxs)("div", {
                className: r7.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: r7.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eA, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ex.d.MODAL_V2,
                            specOverrides: Y,
                            pendingBanner: C,
                            pendingAccentColor: N,
                        }),
                    }),
                    G
                        ? (0, t.jsx)(rq, { ...ej })
                        : (0, t.jsx)(eI.A, {
                              ...ej,
                              onOpenAvatar: "read-only" === S ? eE : void 0,
                              imageAnimatingClassName: "try-it-out" === S && null == I ? tP.$T : void 0,
                          }),
                    (0, t.jsx)(eM.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ex.d.MODAL_V2,
                        hasEntered: h,
                        prompt: w ? X : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: r7.profileBody,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(rR, {
                                user: o,
                                displayProfile: p,
                                nickname: x,
                                trailing: (0, t.jsx)(ey.A, {
                                    displayProfile: p,
                                    themeType: ex.d.MODAL_V2,
                                    onClose: b,
                                    showPendingBadgeEdits: w,
                                    popoutAnchorRef: h ? B : void 0,
                                }),
                                onClose: b,
                                editingMode: S,
                            }),
                            (0, t.jsx)("div", { ref: B }),
                        ],
                    }),
                    ee === Q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: r7.profileOverlay,
                            children: (0, t.jsx)(eT.A, {
                                user: o,
                                applicationId: en,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: r7.profileBanner,
                            }),
                        }),
                    ec.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eL.A.Overlay,
                            {
                                className: r7.profileOverlay,
                                children: (0, t.jsx)(eT.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: r7.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: r7.profileOverlay,
                            children: (0, t.jsx)(e1.A, {
                                heading: eY.intl.string(eY.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: r7.profileBanner,
                                children: (0, t.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eD.A, { user: o, className: r7.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: r7.profileOverlay,
                            children: (0, t.jsx)(e_.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: r7.profileButtons,
                        children: (0, t.jsx)(nv, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: ee,
                            onClose: b,
                        }),
                    }),
                    w && "try-it-out" !== S && (0, t.jsx)(eN.A, { isPremiumUser: (0, z.ki)(d) }),
                    !ed && (0, t.jsx)(na, { currentUser: d, displayProfile: p, canEditInPlace: G }),
                    eu.length > 0 &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t["Uv/eTx"]),
                            children: (0, t.jsx)(ek.A, { applicationIds: eu }),
                        }),
                    (0, t.jsx)(e1.A, {
                        heading: eY.intl.string(eY.t.a6XYD9),
                        children: (0, t.jsx)(eO.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iK.In }),
                    }),
                    null != eo &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t.wlTO8v),
                            children: (0, t.jsx)(eP, { friendsSinceDate: eo }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(ew.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: r7.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ed &&
                        (G || ep) &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t["3fe7U5"]),
                            scrollTargetId: iK.bk.CONNECTIONS,
                            children: (0, t.jsx)(nG, {
                                applicationIdentities: eg,
                                connections: em,
                                userId: o.id,
                                allowEditing: G,
                                className: r7.profileAppConnections,
                            }),
                        }),
                    !ed &&
                        ev &&
                        (0, t.jsx)(e1.A, {
                            heading: eY.intl.string(eY.t.PHjkRE),
                            scrollTargetId: iK.bk.APPS,
                            children: (0, t.jsx)(eZ, {
                                applicationRoleConnections: ef,
                                onClose: b,
                                className: r7.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iX, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(ae, { displayProfile: p, profileEffectOverride: E, isHovering: W }),
            null != P && (0, t.jsx)(k.A, { frame: P, filterLayer: r6, fadeIn: T }),
        ],
    });
}
function al(e) {
    let { user: n, displayProfile: l, pendingThemeColors: i, forceShowPremium: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, ee.A)({ user: n, displayProfile: l, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, eu.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function at(e) {
    let {
            user: n,
            currentUser: l,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: y,
            initialTabSection: C,
            initialScrollTarget: k,
            transitionState: O,
            customStatusPrompt: R,
            openedAt: _,
            onClose: D,
            sourceAnalyticsLocations: M = [],
            themeContainerClassName: F,
        } = e,
        z = n.id === l.id,
        $ = i.useCallback(() => (0, r$.A)(z, D), [z, D]),
        {
            guildId: Z,
            pendingGuildId: J,
            isFetching: Q,
            handleSelectUserProfile: ee,
            handleRetry: en,
            hasError: el,
        } = (function (e) {
            let { userId: n, initialGuildId: l } = e,
                [t, r] = i.useState(l),
                [a, o] = i.useState(l),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([K.A], () => K.A.getUserProfile(n)?.fetchError?.status ?? null, [n]),
                f = i.useCallback(() => {
                    (u("retrying"), g((e) => e + 1));
                }, []),
                p = i.useCallback((e) => {
                    (u("loading"), r(e ?? void 0));
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ec.A)(n, void 0, {
                            type: "modal",
                            guildId: t,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(t), u("idle"));
                            },
                            () => {
                                e || (o(t), u("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, c]),
                {
                    guildId: a,
                    pendingGuildId: t,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: n.id, initialGuildId: r }),
        et = i.useMemo(() => (null != Z ? { [Z]: [n.id] } : {}), [Z, n.id]);
    (0, b.Eq)(et, "UserProfileModalV2");
    let ei = (0, Y.X)("UserProfileModalV2"),
        er = (0, nU.YW)(),
        ea = (0, s.bG)([V.A], () => V.A.hidePersonalInformation),
        es = (0, eo.A)(n.id) && ei,
        eu = (0, ed.W)(n.id),
        eh = el && !eu,
        eI = es && !ea && !el && !er,
        ey = er ? "try-it-out" : eI ? "edit" : "read-only",
        {
            pendingThemeColors: eC,
            avatarDecorationOverride: eN,
            avatarOverride: eE,
            bannerOverride: eP,
            accentColorOverride: ek,
            profileEffectOverride: eT,
            profileFrameOverride: eO,
        } = (function (e) {
            let { userId: n, guildId: l, editingMode: t } = e;
            return (0, s.cf)(
                [ep.A, U.default, ef.Ay, K.A],
                () => {
                    if ("read-only" === t) return eA;
                    let e = U.default.getUser(n);
                    if (null == e) return eA;
                    let i = ep.A.getTryItOutChanges(),
                        r =
                            "try-it-out" === t
                                ? {
                                      pendingThemeColors: i.tryItOutThemeColors,
                                      pendingAvatar: i.tryItOutAvatar,
                                      pendingBanner: i.tryItOutBanner,
                                      pendingAvatarDecoration: void 0,
                                      pendingProfileEffect: void 0,
                                      pendingAccentColor: void 0,
                                      pendingProfileFrame: void 0,
                                  }
                                : ep.A.getPendingChanges(l),
                        a = null != l ? ef.Ay.getMember(l, n) : null,
                        s = K.A.getUserProfile(n),
                        o = null != l ? K.A.getGuildMemberProfile(n, l) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, eg.us)({
                            userValue: e.avatarDecoration,
                            guildValue: a?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: l,
                        }),
                        avatarOverride: (0, em.V7)({ userId: n, image: r.pendingAvatar, size: ev }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, eg.us)({
                            userValue: s?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: l,
                        }),
                        profileFrameOverride: (0, eg.us)({
                            userValue: s?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: l,
                        }),
                    };
                },
                [n, l, t],
            );
        })({ userId: n.id, guildId: Z, editingMode: ey }),
        {
            isExpanded: e_,
            isAnimating: eD,
            transition: eM,
            handleExpand: ew,
            handleCollapse: eG,
            refs: { expandIconButtonRef: eF, expandTabButtonRef: eV, collapseButtonRef: eU },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [l, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: r5 },
                    onRest: () => t(!1),
                }),
                a = (0, v.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                d = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    ((c.current = "collapse"), t(!0), n(!0));
                }, []),
                m = i.useCallback(() => {
                    ((c.current = "expand"), t(!0), n(!1));
                }, []);
            return (
                i.useEffect(() => {
                    if (!l) {
                        if ("collapse" === c.current && e) ((c.current = null), d.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, l, a]),
                {
                    isExpanded: e,
                    isAnimating: l,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eB = es && !e_,
        ez = es && (!e_ || eD),
        { defaultWishlistId: eW } = (0, s.cf)([K.A], () => ({ defaultWishlistId: K.A.getFirstWishlistId(n.id) }));
    (0, w.fw)({ wishlistId: eW, userId: n.id });
    let eH = (0, ej.fC)(),
        eq = eh && (!es || !Q),
        eK = es && el,
        eX = J !== Z || eK || null != eH.interactionType,
        e$ = (function (e) {
            let { user: n, currentUser: l } = e,
                { mutualFriendsCount: t, mutualGuilds: i } = (0, rQ.A)(n),
                r = i?.length,
                a = (0, rJ.A)(n),
                s = (0, r0.A)(n.id),
                o = (0, rZ.A)(n),
                { hasNewWishlistItems: d } = (0, r2.A)(n),
                u = [],
                c = n.id === l?.id,
                g = (0, r1.A)(n.id),
                m = s.length > 0;
            return (
                (g || m) && u.push({ text: eY.intl.string(eY.t.laViwx), section: iK.RP.WIDGETS }),
                u.push({ text: eY.intl.string(eY.t.chq59f), section: iK.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: eY.intl.string(eY.t["7lZ31J"]), section: iK.RP.WISHLIST, showNewContentDot: d }),
                n.id !== l?.id &&
                    a &&
                    (u.push({ text: (0, r3.A)(t), section: iK.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, r9.A)(r), section: iK.RP.MUTUAL_GUILDS })),
                u
            );
        })({ user: n, currentUser: l }),
        { analyticsLocations: eZ } = (0, I.Ay)([...M, j.A.USER_PROFILE_MODAL_V2]),
        eJ = (0, H.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: y,
            guildId: Z,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eQ = i.useCallback(() => {
            ((0, q.Wn)({ analyticsLocations: eZ, ...eJ, action: iK.pt.SHOW_STYLES_PANEL }), ew());
        }, [eZ, eJ, ew]),
        e0 = i.useCallback(() => {
            ((0, q.Wn)({ analyticsLocations: eZ, ...eJ, action: iK.pt.HIDE_STYLES_PANEL }), eG());
        }, [eZ, eJ, eG]),
        e1 = (0, X.Ay)(n.id, Z);
    (0, L.A)(eZ, e1, iK.R7.MODAL_V2);
    let e2 = void 0 !== eO ? eO?.skuId : e1?.profileFrame?.skuId,
        e3 = (0, E.A)(e2, "UserProfileModalV2"),
        e9 = (0, N.A)(e2),
        { profileFrameStyle: e7, profileFrameClassName: e5 } = (0, T.A)(e3);
    (0, P.A)({ skuId: e1?.profileFrame?.skuId, openedAt: _, context: eJ, analyticsLocations: eZ });
    let e8 = (0, s.bG)([U.default], () => W.Ay.canUsePremiumProfileCustomization(U.default.getCurrentUser())),
        e6 = er || (z && null != e1 && e8),
        e4 = B.Ay.useName(e1?.guildId, c, n),
        ne = (0, S.GV)(),
        nn = (0, s.bG)([G.A], () => (null != Z ? G.A.getGuild(Z) : null)),
        nl = z
            ? null != nn
                ? eY.intl.formatToPlainString(eY.t.M7OhOF, { guildName: nn.name })
                : eY.intl.string(eY.t.egQPgM)
            : eY.intl.format(eY.t.KRe1Fk, { name: e4 });
    return (0, t.jsx)(I.f5, {
        value: eZ,
        children: (0, t.jsx)(H.of, {
            value: eJ,
            openedAt: _,
            fetchStartedAt: e1?.fetchStartedAt,
            fetchEndedAt: e1?.fetchEndedAt,
            isLoaded: e1?.isLoaded,
            children: (0, t.jsx)(ej.Hl, {
                value: eH,
                children: (0, t.jsx)(eb.N, {
                    value: k,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tP.zr, { [tP.QF]: e1?.private === !0 }),
                        transitionState: O,
                        "aria-labelledby": ne,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(i8, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(r7.layoutContainer, e5, {
                                        [r7.editingPanelEnabled]: es,
                                        [r7.editingPanelExpanded]: es && e_,
                                        [r7.isAnimating]: eD,
                                    }),
                                    style: e7,
                                    children: [
                                        (0, t.jsxs)(al, {
                                            user: n,
                                            displayProfile: e1,
                                            pendingThemeColors: eC,
                                            forceShowPremium: e6,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tP.Oo,
                                                    children: [
                                                        (0, t.jsx)(nA.A, { onClose: $ }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: ne, children: nl }),
                                                        }),
                                                        ez &&
                                                            (0, t.jsx)(iG, {
                                                                buttonRef: eF,
                                                                onClick: eQ,
                                                                className: r7.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eB &&
                                                    (0, t.jsx)("div", {
                                                        className: r7.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iw, {
                                                            innerRef: eV,
                                                            onClick: eQ,
                                                            className: r7.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                es &&
                                                    eM((e, n) =>
                                                        n
                                                            ? (0, t.jsx)(iF, {
                                                                  className: a()(r7.editingPanel, {
                                                                      [r7.isExpanded]: e_,
                                                                  }),
                                                                  selectedGuildId: J,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: ee,
                                                                  onClose: e0,
                                                                  collapseButtonRef: eU,
                                                                  isLoading: Q,
                                                                  isEditingDisabled: el,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eL.A, {
                                                    className: a()(F, tP.A7, r7.profileContentOuter),
                                                    innerClassName: r7.profileContentInner,
                                                    user: n,
                                                    displayProfile: e1,
                                                    themeType: ex.d.MODAL_V2,
                                                    pendingThemeColors: eC,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e6,
                                                    children: [
                                                        (0, t.jsx)(r4, { displayProfile: e1, pendingBanner: eP }),
                                                        e1?.private === !0 && (0, t.jsx)(eR.A, {}),
                                                        !eh && (0, t.jsx)(rr, { className: r7.noticeContainer }),
                                                        eq &&
                                                            (0, t.jsx)("div", {
                                                                className: r7.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iQ, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eY.intl.string(eY.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != en
                                                                            ? eY.intl.string(eY.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: en,
                                                                    actionDisabled: !es && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: r7.profileCardToastContainer,
                                                            children: (0, t.jsx)(eS.A, { userId: n.id, onClose: $ }),
                                                        }),
                                                        (0, t.jsxs)(i3, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: r7.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(an, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    guildId: Z,
                                                                    channelId: c,
                                                                    displayProfile: e1,
                                                                    nickname: e4,
                                                                    originGuildId: d,
                                                                    hasEntered: O === h.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: $,
                                                                    avatarDecorationOverride: eN,
                                                                    avatarOverride: eE,
                                                                    bannerOverride: eP,
                                                                    accentColorOverride: ek,
                                                                    profileEffectOverride: eT,
                                                                    profileFrame: e3,
                                                                    fadeInProfileFrame: e9,
                                                                    editingMode: ey,
                                                                    isLoading: Q,
                                                                }),
                                                                (0, t.jsx)(i6.A, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    displayProfile: e1,
                                                                    guildId: Z,
                                                                    channelId: c,
                                                                    items: e$,
                                                                    initialSection: C,
                                                                    onClose: $,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(iV.A, { userId: n.id, guildId: Z, className: r7.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ai(e) {
    return (0, t.jsx)(nU.tM, { children: (0, t.jsx)(at, { ...e }) });
}
