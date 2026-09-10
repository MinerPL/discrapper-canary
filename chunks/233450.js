n.d(t, { default: () => l_ });
var l,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    c = n(562708),
    o = n(535185),
    d = n(792216),
    u = n(17928),
    m = n(521489),
    x = n(866665),
    h = n(821609),
    g = n(414499),
    f = n(192308),
    j = n(689175),
    A = n(707554),
    p = n(964486),
    v = n(881698),
    E = n(146779),
    N = n(793574),
    I = n(688810),
    k = n(139286),
    b = n(206828),
    S = n(587895),
    T = n(590703),
    C = n(180170),
    y = n(583846),
    L = n(569926),
    R = n(928550),
    G = n(570962),
    P = n(402860),
    O = n(773669),
    _ = n(409626),
    M = n(422069),
    w = n(205184),
    D = n(957807),
    V = n(49491),
    U = n(429913),
    F = n(832163),
    Y = n(561794),
    W = n(862772),
    B = n(287809);
let z = a.createContext(void 0);
function H() {
    let e = a.useContext(z);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var X = n(435558),
    K = n.n(X),
    J = n(621466),
    $ = n(966697),
    Q = n(939249),
    q = n(834730),
    Z = n(297264),
    ee = n(460905),
    et = n(776231),
    en = n(449543),
    el = n(46054),
    ei = n(58703);
n(321073);
var ea = n(155718),
    es = n(387408),
    er = n(731068),
    ec = n(59318),
    eo = n(320095),
    ed = n(708676),
    eu = n(383233),
    em = n(998218),
    ex = n(375708);
let eh = /^#{1,3}\s+(.+)$/,
    eg = /^https?:\/\/\S+$/;
var ef = n(60465),
    ej = n(158390),
    eA = n(636537),
    ep = n(228366),
    ev = n(927813),
    eE = n(371794),
    eN = n(652215);
let eI = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function ek(e) {
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, eE.aP)({
                url: eN.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: O.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eb(e) {
    let t = ((await eA.Bo.get({ url: eN.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eI.has(t),
    );
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eS = (0, u.UT)(M.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => M.A.getSimilarGames(e) ?? null,
    load: (e) => eb(e),
    retryConfig: { backoff: () => new ej.A(5 * ev.A.Millis.SECOND, 5 * ev.A.Millis.MINUTE) },
    failureStaleAfter: ev.A.Seconds.MINUTE,
});
async function eT(e, t) {
    ep.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eA.Bo.get({ url: eN.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        ep.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, es.A)((0, eo.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, eu._c)(e))
                            return e.components
                                .filter((e) => e.type === ea.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eg.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let n = [];
                                  return (
                                      null != t.rawTitle && n.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && n.push(t.rawDescription),
                                      n.length > 0 ? n.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(l),
                    s = (function (e) {
                        if ((0, eu._c)(e)) {
                            let t = e.components.find((e) => e.type === ea.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, er.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ec.tT)(e.content_type));
                        if (null != t) return (0, er.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ec.XB)(e.content_type));
                        if (null != n) return (0, er.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, er.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, er.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, er.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(l),
                    { title: r, body: c } =
                        ((t = a.indexOf("\n")),
                        (n = (-1 === t ? a : a.slice(0, t)).match(eh)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, eu._c)(l)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let n = t.author?.name,
                                      l = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = t.color ?? void 0;
                                  if (null != n || null != i || null != s)
                                      return {
                                          authorName: n,
                                          authorIconUrl: l,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: s,
                                          color: r,
                                      };
                              })(l);
                return {
                    id: l.id,
                    media: s,
                    title: r,
                    body: c,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: o,
                    embedSource: d,
                    poll: l.poll,
                };
            }),
            channelId: l.channel_id ?? void 0,
            guildId: l.guild_id ?? void 0,
        });
    } catch (t) {
        ep.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eC = n(284009),
    ey = n.n(eC),
    eL = n(376728),
    eR = n(976860),
    eG = n(71393),
    eP = n(449054);
async function eO(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    ey()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eG.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eN.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eP.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eN.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eL.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eR.pX)(eN.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var e_ = n(320448),
    eM = n(493285);
let ew = { sm: eM.nz, md: eM.a };
function eD(e) {
    let { className: t, width: n } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eM.qf, t), style: { width: n } });
}
function eV(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        a = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: l, style: a, children: n });
}
function eU(e) {
    let { className: t, size: n = "md" } = e;
    return (0, i.jsx)(eD, { className: r()(eM.x6, ew[n], t) });
}
var eF = n(406510);
function eY(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, i.jsxs)("div", {
        className: eF.kL,
        "aria-busy": !0,
        children: [
            (0, i.jsxs)("div", {
                className: eF.wR,
                children: [(0, i.jsx)(eD, { className: eF.Iz, width: n }), l && (0, i.jsx)(eU, { size: "sm" })],
            }),
            t,
        ],
    });
}
function eW(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eF.wR,
                children: [
                    (0, i.jsx)(Z.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: e_._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: ex.intl.string(ex.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eB = n(949959);
function ez(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eB.n, { [eB.C]: 16 === n }), children: t });
}
var eH = n(235240),
    eX = n(165648);
function eK(e, t) {
    return el.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eJ() {
    return (0, i.jsxs)(eV, {
        className: eH.s7,
        children: [
            (0, i.jsx)(eD, { className: eH.o$ }),
            (0, i.jsxs)("div", {
                className: eH.UF,
                children: [(0, i.jsx)(eD, { className: eH.iX }), (0, i.jsx)(eD, { className: eH.jt })],
            }),
        ],
    });
}
function e$(e, t) {
    var n;
    let l,
        i = (0, et.kr)(364 * (0, et.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = em.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function eQ(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [s, r] = a.useState(!1),
        c = a.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, i.jsx)($.y, {
              readyState: s ? eN.Rv1.READY : eN.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, i.jsx)("img", {
                  src: n,
                  className: eH.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function eq(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        d = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        u = n.media?.proxyUrl ?? n.media?.url,
        m = null != u ? e$(u, d) : void 0,
        { embedSource: x } = n;
    return null == x
        ? null
        : (0, i.jsx)(Q.D, {
              className: c ? eH.jI : eH.IU,
              onClick: o,
              children: (0, i.jsxs)("div", {
                  className: c ? eH.GT : eH.s4,
                  children: [
                      null != x.url &&
                          (0, i.jsx)(q.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eH.Ow,
                              children: x.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eH._d,
                          style: null != x.color ? { borderInlineStartColor: x.color } : void 0,
                          children: [
                              null != x.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eH.Tu,
                                      children: [
                                          null != x.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: x.authorIconUrl,
                                                  className: eH.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(q.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: x.authorName,
                                          }),
                                      ],
                                  }),
                              null != n.media &&
                                  null != m &&
                                  (0, i.jsx)("div", {
                                      className: eH.ax,
                                      children: (0, i.jsx)(eQ, { message: n, src: m, aspectRatio: d }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)(Z.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: c ? eH.KX : eH._N,
                                      children: eK(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eH.h_, eX.PT),
                                      children: [eK(n.body, l), (0, i.jsx)("div", { className: eH.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eH.ov,
                                  children: [
                                      null != x.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: x.providerIconUrl,
                                              className: eH.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(q.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != x.providerName ? `${x.providerName} \xb7 ` : "",
                                              (0, ei.i$)(new Date(n.timestamp), "LL"),
                                          ],
                                      }),
                                      n.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eH.a5,
                                              children: [
                                                  (0, i.jsx)(ee.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(q.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(ex.intl.currentLocale).format(
                                                          n.reactionCount,
                                                      ),
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
let eZ = a.memo(function (e) {
    let { message: t, channelId: n, isMain: l } = e;
    return (0, i.jsxs)("div", {
        className: l ? eH.GT : eH.s4,
        children: [
            null != t.title &&
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l ? eH.KX : eH._N,
                    children: eK(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: r()(eH.h_, eX.PT),
                    children: [eK(t.body, n), (0, i.jsx)("div", { className: eH.fm })],
                }),
            (0, i.jsxs)("div", {
                className: eH.ov,
                children: [
                    (0, i.jsx)(q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ei.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: eH.a5,
                            children: [
                                (0, i.jsx)(ee.n, { size: "xs", color: "currentColor" }),
                                (0, i.jsx)(q.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(ex.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function e0(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        d = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        u = n.media?.proxyUrl ?? n.media?.url,
        m = null != u ? e$(u, d) : void 0,
        x = null != n.media && null != m;
    return (0, i.jsxs)(Q.D, {
        className: r()({ [eH.cG]: c && x, [eH.jI]: c && !x, [eH.IU]: !c }),
        onClick: o,
        children: [
            null != n.media &&
                null != m &&
                (0, i.jsx)("div", {
                    className: c ? eH._v : eH.eZ,
                    children: (0, i.jsx)(eQ, { message: n, src: m, aspectRatio: d }),
                }),
            (0, i.jsx)(eZ, { message: n, channelId: l, isMain: c }),
        ],
    });
}
function e1(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        s = "main" === t,
        { poll: r } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        d = r.answers.length - o.length;
    return (0, i.jsx)(Q.D, {
        className: s ? eH.jI : eH.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? eH.GT : eH.s4,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eH.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eH.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eH.Nf,
                                    children: (0, i.jsx)(q.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eH.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        d > 0 &&
                            (0, i.jsx)(q.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eH.PF,
                                children: ex.intl.format(ex.t["mv/nIa"], { count: d }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eH.ov,
                    children: (0, i.jsx)(q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ex.intl.format(ex.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, ed.J)(r.expiry) ?? ex.intl.string(ex.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function e8(e) {
    return null != e.message.poll
        ? (0, i.jsx)(e1, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eq, { ...e })
          : (0, i.jsx)(e0, { ...e });
}
let e4 = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, I.Ay)(),
        { invite: s, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = H(),
        {
            messages: d,
            guildId: m,
            channelId: x,
            loading: h,
            hasFetched: g,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, u.cf)([M.A], () => ({
                data: null != e ? M.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && M.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && M.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || M.A.isAnnouncementsFetching(e) || eT(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = a.useCallback(() => {
            let e = s?.guild?.id ?? m;
            null != e &&
                null != x &&
                (n(_.GameProfileTrackActionActions.Announcements),
                ef.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eO({ invite: s, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, s, m, x, l, t]),
        j = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? m;
                null != i &&
                    null != x &&
                    (n(_.GameProfileTrackActionActions.AnnouncementsItem),
                    ef.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eO({ invite: s, guildId: i, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, s, m, x, l, t],
        ),
        A = null != x && d.length > 0;
    return (!g || h) && r
        ? (0, i.jsx)(eY, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, i.jsx)(ez, {
                  gap: 16,
                  children: K()
                      .range(3)
                      .map((e) => (0, i.jsx)(eJ, {}, e)),
              }),
          })
        : A
          ? (0, i.jsx)(eW, {
                title: ex.intl.string(ex.t.B0BV3Y),
                onClickViewAll: f,
                children: (0, i.jsx)(en.A, {
                    gap: 16,
                    children: d.map((e) =>
                        (0, i.jsx)(e8, { variant: "small", message: e, channelId: x, onCardClick: j }, e.id),
                    ),
                }),
            })
          : null;
});
var e5 = n(541830),
    e2 = n(240248),
    e6 = n(505779),
    e3 = n(808380);
let e7 = [e3.Y.DESKTOP, e3.Y.XBOX, e3.Y.PLAYSTATION, e3.Y.NINTENDO];
var e9 = n(28863),
    te = n(975807),
    tt = n(194362);
function tn(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(_.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tt.a)(eN.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, te.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(e9.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ea.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(q.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ex.intl.format(ex.t.KAjfKl, { claimLink: s }),
          });
}
var tl = n(998445),
    ti = n(274997),
    ta = n(80500),
    ts = n(319745),
    tr = n(488225),
    tc = n(967492),
    to = n(72265),
    td = n(454346),
    tu = n(37948),
    tm = n(750013);
let tx = { size: "xs", colorClass: tm.wP };
function th(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tu.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case e6.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(tl.GlobeEarthIcon, { ...t }),
                        action: _.GameProfileTrackActionActions.WebsiteLink,
                        title: ex.intl.string(ex.t.fOUKvg),
                    };
                case e6.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(ti.p, { ...t }),
                        action: _.GameProfileTrackActionActions.XLink,
                        title: ex.intl.string(ex.t.INic4y),
                    };
                case e6.V.YOUTUBE:
                    return {
                        action: _.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(ta.C, { ...t }),
                        title: ex.intl.string(ex.t.lNmxbE),
                    };
                case e6.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(ts.Z, { ...t }),
                        action: _.GameProfileTrackActionActions.FacebookLink,
                        title: ex.intl.string(ex.t.FjyREK),
                    };
                case e6.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(tr.L, { ...t }),
                        action: _.GameProfileTrackActionActions.InstagramLink,
                        title: ex.intl.string(ex.t["cgR+IK"]),
                    };
                case e6.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(tc.a, { ...t }),
                        action: _.GameProfileTrackActionActions.BlueskyLink,
                        title: ex.intl.string(ex.t["D/PHq5"]),
                    };
                case e6.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(to.T, { ...t }),
                        action: _.GameProfileTrackActionActions.RedditLink,
                        title: ex.intl.string(ex.t["Hgb+fc"]),
                    };
                case e6.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(td.a, { ...t }),
                        action: _.GameProfileTrackActionActions.TwitchLink,
                        title: ex.intl.string(ex.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tx),
        o = a.useCallback(() => {
            (n(s), l(t.url));
        }, [s, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(Q.D, { onClick: o, className: tm.yO, title: c, children: r }),
    });
}
var tg = n(31300),
    tf = n(802516),
    tj = n(22363),
    tA = n(418524),
    tp = n(672572);
function tv(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case e3.Y.DESKTOP:
            return (0, i.jsx)(tg.k, { size: "xs", ...n });
        case e3.Y.XBOX:
            return (0, i.jsx)(tf.Y, { size: "xs", ...n });
        case e3.Y.PLAYSTATION:
            return (0, i.jsx)(tj.X, { size: "xs", ...n });
        case e3.Y.NINTENDO:
            return (0, i.jsx)(tA.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tE(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case e3.Y.DESKTOP:
                        return ex.intl.string(ex.t.KT6uCJ);
                    case e3.Y.XBOX:
                        return ex.intl.string(ex.t.DDWUJp);
                    case e3.Y.PLAYSTATION:
                        return ex.intl.string(ex.t.fzMz2s);
                    case e3.Y.NINTENDO:
                        return ex.intl.string(ex.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tv, { platform: t }),
        },
        t,
    );
}
var tN = n(424994),
    tI = n(422384);
function tk() {
    return (0, i.jsx)(q.E, { variant: "text-sm/normal", color: "text-subtle", children: ex.intl.string(ex.t.GruYxV) });
}
let tb = function (e) {
    let { game: t, trackAction: n } = e,
        l = a.useMemo(() => t.genres.map(e5.du).join(", "), [t]),
        s = t.getCompanyByRole(ea.wk.PUBLISHER),
        r = t.getCompanyByRole(ea.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(e3.Y.DESKTOP) && (e.has(e3.Y.MACOS) || e.has(e3.Y.LINUX)) && n.push(e3.Y.DESKTOP),
                n.filter((e) => e7.includes(e)).sort((e, t) => e7.indexOf(e) - e7.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return e6.p.includes(t);
            })
            .sort((e, t) => e6.p.indexOf(e.category) - e6.p.indexOf(t.category)),
        x = !(0, e2.uJ)(l),
        h = !(0, e2.uJ)(c),
        g = !(0, e2.uJ)(o),
        f = !(0, e2.uJ)(d),
        j = u.length > 0,
        A = m.length > 0 && !m.every((e) => (0, e2.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tI.uW,
        children: [
            (0, i.jsx)("div", {
                className: tI.Gf,
                children: (0, i.jsx)(Z.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tI.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tI.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? ex.intl.string(ex.t.pDgwYB) : ex.intl.string(ex.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tI.Gu,
                                      children: l,
                                  })
                                : (0, i.jsx)(tk, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tI.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? ex.intl.string(ex.t.Hc7Enk) : ex.intl.string(ex.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tI.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tk, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tI.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? ex.intl.string(ex.t.KATEJB) : ex.intl.string(ex.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tI.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tk, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tI.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tI.Gu,
                                      children: ei.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tk, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tI.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? ex.intl.string(ex.t.PNqxNe) : ex.intl.string(ex.t["UxAag+"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tI.Gu,
                                      children: u.map((e) => (0, i.jsx)(tE, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tk, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tI.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["Oj3o1/"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: tI.Gu,
                                      children: m.map((e) => (0, i.jsx)(th, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tk, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tI.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tI.Gu,
                                children: ex.intl.format(ex.t.XPFZVl, { igdbLink: tN.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tI.OQ, children: (0, i.jsx)(tn, { game: t, trackAction: n }) }),
        ],
    });
};
var tS = n(714991),
    tT = n(486020),
    tC = n(992638);
function ty() {
    return (0, i.jsxs)(eV, {
        className: tC.uW,
        animationDelayMs: 300,
        children: [
            (0, i.jsx)(eD, { className: tC.dU, width: "30%" }),
            (0, i.jsx)(eV, {
                className: tC.nV,
                children: (0, i.jsxs)("div", {
                    className: tC.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tC.To,
                            children: [
                                (0, i.jsx)(eD, { className: tC.QV }),
                                (0, i.jsxs)("div", {
                                    className: tC.Yv,
                                    children: [
                                        (0, i.jsx)(eD, { className: tC.Ag }),
                                        (0, i.jsx)(eD, { className: tC.zl }),
                                        (0, i.jsx)(eD, { className: tC.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(eU, {}),
                    ],
                }),
            }),
        ],
    });
}
function tL(e) {
    let { guild: t } = e,
        n = tT.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, s] = a.useState(void 0),
        r = null != n && l !== n,
        c = a.useCallback(() => {
            s(n);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: tC._C,
        children: [
            r && (0, i.jsx)(eD, { className: tC.EQ }),
            (0, i.jsx)("img", {
                className: tC.$f,
                src: n,
                alt: ex.intl.formatToPlainString(ex.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tR(e) {
    let { trackAction: t } = e,
        { invite: n, hasDiscordWebsite: l, isCommunityInviteResolving: s, isMember: r, closeModal: c } = H(),
        o = a.useCallback(() => {
            null != n &&
                (t(_.GameProfileTrackActionActions.JoinServer),
                c(),
                ep.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: n, code: n.code, context: eN.BRT.APP }));
        }, [n, t, c]);
    return null == n || null == n.guild
        ? l && s
            ? (0, i.jsx)(ty, {})
            : null
        : (0, i.jsxs)("div", {
              className: tC.uW,
              children: [
                  (0, i.jsx)(Z.D, {
                      className: tC.Gf,
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: ex.intl.string(ex.t["U2N+ci"]),
                  }),
                  (0, i.jsx)("div", {
                      className: tC.kL,
                      children: (0, i.jsxs)("div", {
                          className: tC.hQ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tC.To,
                                  children: [
                                      (0, i.jsx)(tL, { guild: n.guild }),
                                      (0, i.jsxs)("div", {
                                          className: tC.yj,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tC.YS,
                                                  children: [
                                                      (0, i.jsx)(tS.A, { guild: n.guild, size: 16 }),
                                                      (0, i.jsx)(Z.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: n.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, e2.uJ)(n.guild?.description) &&
                                                  (0, i.jsx)(q.E, {
                                                      className: tC.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: n.guild?.description,
                                                  }),
                                              null != n.approximate_member_count || null != n.approximate_presence_count
                                                  ? (0, i.jsxs)("div", {
                                                        className: tC.iR,
                                                        children: [
                                                            null != n.approximate_presence_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tC.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tC._o }),
                                                                        (0, i.jsx)(q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: ex.intl.format(ex.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    n.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != n.approximate_member_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tC.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tC.jk }),
                                                                        (0, i.jsx)(q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: ex.intl.format(ex.t.zRl6XR, {
                                                                                count: n.approximate_member_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                        ],
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(h.$, {
                                  variant: "secondary",
                                  text: r ? ex.intl.string(ex.t.cEnaWx) : ex.intl.string(ex.t.XpeFYr),
                                  onClick: o,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tG = n(369606),
    tP = n(459746),
    tO = n(691540),
    t_ = n(857250),
    tM = n(97483),
    tw = n(922016),
    tD = n(980707),
    tV = n(477782),
    tU = n(663341),
    tF = n(408278),
    tY = n(34188),
    tW = n(173936),
    tB = n(365199),
    tz = n(789645),
    tH = n(442433),
    tX = n(50268),
    tK = n(44724),
    tJ = n(957565),
    t$ = n(695366),
    tQ = n(540185),
    tq = n(926268),
    tZ = n(53788),
    t0 = n(831453),
    t1 = n(785866),
    t8 = n(555704),
    t4 = n(47675),
    t5 = n(633075),
    t2 = n(289173),
    t6 = n(321191),
    t3 = n(958805),
    t7 = n(735321),
    t9 = n(96173),
    ne = n(280450),
    nt = n(403362);
async function nn(e) {
    let t = e((0, t7.BF)());
    await t3.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function nl(e) {
    var t;
    let l,
        { game: s, className: r, trackAction: c } = e,
        o = a.useRef(null),
        d = a.useRef(null),
        m = (0, tX.A)({ id: s.id, label: ex.intl.string(ex.t.SHQGPj) }),
        g =
            ((t = s.id),
            (l = a.useCallback(() => {
                null != t &&
                    (c?.(_.GameProfileTrackActionActions.Feedback),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("142753"),
                            n.e("250440"),
                            n.e("568035"),
                            n.e("268582"),
                            n.e("733771"),
                            n.e("946039"),
                            n.e("55266"),
                            n.e("627495"),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, i.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, c])),
            null == t
                ? null
                : (0, i.jsx)(tV.Dr, {
                      id: "game-profile-something-wrong",
                      label: ex.intl.string(ex.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: t$.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, u.bG)([ne.default], () => ne.default.getId()),
                s = a.useMemo(
                    () => [
                        {
                            type: tQ.x.FAVORITE_GAMES,
                            addLabel: ex.intl.string(ex.t.fgmitg),
                            removeLabel: ex.intl.string(ex.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tq.HeartIcon,
                        },
                        {
                            type: tQ.x.PLAYED_GAMES,
                            addLabel: ex.intl.string(ex.t["0xIVLR"]),
                            removeLabel: ex.intl.string(ex.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tZ.G,
                        },
                        {
                            type: tQ.x.CURRENT_GAMES,
                            addLabel: ex.intl.string(ex.t.G0c4En),
                            removeLabel: ex.intl.string(ex.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: t0.H,
                        },
                        {
                            type: tQ.x.WANT_TO_PLAY_GAMES,
                            addLabel: ex.intl.string(ex.t.UuBS4K),
                            removeLabel: ex.intl.string(ex.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: t1._,
                        },
                    ],
                    [],
                ),
                r = (0, u.yK)([t6.A], () => (null == l ? [] : (t6.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, t9.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof t5.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(nt.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                d = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await nn((i) => {
                                let a = i.filter(t2.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, t7.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new t2.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new t2.Yy({ ...a, games: e });
                                }
                                var s = l;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return ((c[r] = s), c);
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, t4.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = a.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await nn((n) =>
                                e
                                    ? n.some((e) => e instanceof t5.R && e.applicationId === o)
                                        ? n
                                        : [(t = new t5.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof t5.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof t5.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, t4.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, t7.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof t5.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        tV.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? ex.intl.formatToPlainString(ex.t.Ktb1n8, { name: n })
                                : ex.intl.formatToPlainString(ex.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: t8.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of s) {
                    let n = r.filter(t2.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, t7.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            tV.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? ex.intl.string(ex.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => d(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: a,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(s),
        { closeModal: A } = H(),
        p = (0, u.bG)([F.A], () => F.A.getApplicationIdFromDetectableId(s.id)),
        v = (0, u.bG)([F.A], () => F.A.hasStorefrontForApplicationId(p), [p]),
        E = a.useCallback(() => {
            null != p && (0, tK.G)({ applicationId: p });
        }, [p]),
        N = a.useCallback(() => {
            null != p && (c(_.GameProfileTrackActionActions.GameShop), (0, tK.default)({ applicationId: p }), A());
        }, [p, c, A]),
        I = a.useCallback(() => A(!1), [A]),
        k = a.useCallback(() => {
            c(_.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eN.BVt.GAME_PROFILE(s.id)}`;
            (0, tJ.C)(e, () => {
                (0, tO.P0)((0, t_.o)(ex.intl.string(ex.t["+5kSoW"]), tM.Ck.SUCCESS));
            });
        }, [s.id, c]);
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            null != j &&
                (0, i.jsx)(tw.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tD.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, tH.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tV.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: d,
                            children: (0, i.jsx)(h.$, {
                                icon: tU.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: ex.intl.string(ex.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, i.jsx)(x.m, {
                    text: ex.intl.string(ex.t.apFNLU),
                    children: (0, i.jsx)(tF.K, {
                        icon: tY.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ex.intl.string(ex.t.apFNLU),
                        onMouseDown: E,
                        onClick: N,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: ex.intl.string(ex.t.WqhZss),
                children: (0, i.jsx)(tF.K, {
                    icon: tW.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": ex.intl.string(ex.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tw.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tD.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, tH.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tV.rX, { children: g }), (0, i.jsx)(tV.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: ex.intl.string(ex.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tF.K, {
                                    icon: tB.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": ex.intl.string(ex.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tF.K, {
                icon: tz.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: I,
                "aria-label": ex.intl.string(ex.t.cpT0Cq),
            }),
        ],
    });
}
var ni = n(732369);
function na(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: ni.y5,
        children: [
            (0, i.jsx)("div", { className: r()(ni.nI, n && ni.hD) }),
            (0, i.jsxs)("div", {
                className: r()(ni.A1, n && ni.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: ni.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: ni.hm,
                        children: [
                            (0, i.jsx)(Z.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(no, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(nl, { game: t, className: ni.HK, trackAction: l }),
        ],
    });
}
function ns(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(ni.nI, ni.Jn, t && ni.hD) });
}
let nr = a.forwardRef(function (e, t) {
    let { game: n } = e,
        [l] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            let e = n.getBannerURL(2048);
            if (null != e) return e;
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(l * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n, l]);
    return (0, e2.uJ)(s)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: ni.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, i.jsx)("div", { className: ni.N4 }),
              ],
          });
});
function nc(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(e5.du).join(", ");
    return (0, e2.uJ)(n) ? null : (0, i.jsx)(q.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function no(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: ni.Qc,
        children: [
            (0, i.jsx)(tG.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(q.E, {
                variant: "text-xs/bold",
                color: "none",
                children: ex.intl.formatToPlainString(ex.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nd(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? ni.n8 : ni.FS,
        children: (0, i.jsx)(tP.A, { game: t, className: ni.xe, size: tP.w.LARGE }),
    });
}
let nu = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: s } = H(),
        c = a.useRef(null),
        o = a.useRef(null);
    a.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let l = (function (e, t) {
            let n = 0,
                l = e;
            for (; null != l && l !== t;) ((n += l.offsetTop), (l = l.offsetParent));
            return n;
        })(t, e);
        l > 0 && n?.(l);
    }, [n]);
    let d = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(ni.ap, l && ni.Gh),
        children: [
            s &&
                null != t &&
                (0, i.jsx)("div", {
                    className: ni.Tf,
                    children: (0, i.jsx)(tP.A, { game: t, className: ni.w$, size: tP.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: ni.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(no, { rank: t.l30Rank }),
                    (0, i.jsx)(Z.D, { ref: o, variant: "heading-xxl/semibold", children: d }),
                    (0, i.jsx)(nc, { game: t }),
                ],
            }),
        ],
    });
};
var nm = n(141628),
    nx = n(289363),
    nh = n(134131);
function ng() {
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: nh.uW,
        children: [
            (0, i.jsx)(eD, { className: nh.dU, width: "30%" }),
            (0, i.jsxs)(eV, {
                className: nh.nV,
                children: [
                    (0, i.jsx)("div", { className: nh.sB, children: (0, i.jsx)(nx.default, { isLoading: !0 }) }),
                    (0, i.jsxs)("div", {
                        className: nh.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nh.Yv,
                                children: [(0, i.jsx)(eD, { width: "55%" }), (0, i.jsx)(eD, { width: "85%" })],
                            }),
                            (0, i.jsx)(eU, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nf(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: l,
            hasAlreadyLinked: s,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: m,
        } = H(),
        x = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
        g = a.useCallback(() => {
            (t(_.GameProfileTrackActionActions.LinkAccount), c({ analyticsLocations: n }));
        }, [t, c, n]);
    return !d || m || null == x
        ? null
        : null == o || (r && !l)
          ? (0, i.jsx)(ng, {})
          : !r || s
            ? null
            : (0, i.jsxs)("div", {
                  className: nh.uW,
                  children: [
                      (0, i.jsx)(Z.D, {
                          className: nh.Gf,
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: ex.intl.string(ex.t["VDAhr+"]),
                      }),
                      (0, i.jsxs)("div", {
                          className: nh.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: nh.sB,
                                  children: (0, i.jsx)(nx.default, { application: o }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: nh.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: nh.FS,
                                          children: [
                                              (0, i.jsx)(Z.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: ex.intl.formatToPlainString(ex.t.hUbQT2, {
                                                      gameName: o.name,
                                                  }),
                                              }),
                                              (0, i.jsx)(q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: ex.intl.string(ex.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: nm.A,
                                          text: ex.intl.string(ex.t.jynBQ5),
                                          onClick: g,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
}
var nj = n(80687),
    nA = n(775602),
    np = n(534573),
    nv = n(248643),
    nE = n(256905),
    nN = n(966245),
    nI = n(191096),
    nk = n(90721),
    nb = n(258924);
let nS = a.memo(function (e) {
        let t,
            { item: n, index: l, isSelected: s, isPlaying: c, onSelect: o, gameName: d } = e,
            u = a.useCallback(() => o(l), [o, l]);
        return (0, i.jsx)(Q.D, {
            className: r()(nb.JS, s && nb.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: nb.ub,
                children: [
                    (0, i.jsx)("img", {
                        src:
                            ((t = "VIDEO" === n.type ? (n.poster ?? n.url) : n.url),
                            (0, np.Ec)(t, { size: 106, keepAspectRatio: !0, format: tT.QB ? "webp" : null })),
                        className: nb.xn,
                        alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: nb.UZ,
                            children: (0, i.jsx)(nj.D, { playing: s && c, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    nT = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: s,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            u = a.useRef(null);
        return (
            (0, nk.A)({ videoRef: s, canvasRef: u, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: u, className: nb.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nb.tN,
                        children: (0, i.jsx)(nv.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: l,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: nN.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nb.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nC(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, d] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, u.bG)([nA.Ay], () => nA.Ay.useReducedMotion),
        { obscured: g } = (0, nI.I3)();
    o !== t.screenshotUrls && (d(t.screenshotUrls), s(0));
    let f = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eE.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eE.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        j = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        A = f[j],
        p = A?.type === "VIDEO",
        v = a.useCallback(
            (e) => {
                let t = f[j],
                    n = f[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), s(e));
            },
            [f, j],
        ),
        [E, N] = a.useState(!1),
        I = a.useRef(null),
        k = a.useCallback(() => {
            n(p ? _.GameProfileTrackActionActions.ClickTrailer : _.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = I.current,
                l = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === j;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || i, initialTimeSec: n ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, nE.R)({
                items: r,
                startingIndex: j,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: s,
                onClose: () => {
                    let e = x.current,
                        t = I.current,
                        n = null != e ? !e.paused : l;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        N(n));
                },
            });
        }, [n, f, j, p]),
        b = a.useCallback(() => N(!0), []),
        S = a.useCallback(() => N(!1), []),
        T = a.useCallback(() => c(null), []),
        C = a.useCallback(
            (e) => {
                e && k();
            },
            [k],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: nb.kL,
              children: [
                  p
                      ? (0, i.jsx)("div", {
                            className: nb.ND,
                            children: (0, i.jsx)(
                                nT,
                                {
                                    item: A,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: I,
                                    onPlay: b,
                                    onPause: S,
                                    onFullscreenChange: C,
                                },
                                `${j}-${A.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nb.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nb.Jy,
                                            onAnimationEnd: T,
                                            children: (0, i.jsx)("img", { src: r, className: nb.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: nb.QN }),
                                (0, i.jsx)(Q.D, {
                                    className: nb.gv,
                                    onClick: k,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: A.url,
                                            className: nb.c8,
                                            alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: t.name }),
                                        },
                                        A.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(en.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, n) =>
                          (0, i.jsx)(
                              nS,
                              { item: e, index: n, isPlaying: E, isSelected: n === j, onSelect: v, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var ny = n(49381),
    nL = n(661531),
    nR = n(223273);
function nG(e, t, n) {
    if (null == e || null == t || t < 10) return nR.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nR.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nR.vI.VERY_POSITIVE
              : nR.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nR.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nR.vI.MIXED;
    if (e >= 20) return nR.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nR.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nR.vI.VERY_NEGATIVE;
    return nR.vI.OVERWHELMINGLY_NEGATIVE;
}
function nP(e) {
    switch (e) {
        case nR.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nR.vI.OVERWHELMINGLY_POSITIVE:
        case nR.vI.VERY_POSITIVE:
        case nR.vI.POSITIVE:
        case nR.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nR.vI.MIXED:
            return "steam-review-text-mixed";
        case nR.vI.MOSTLY_NEGATIVE:
        case nR.vI.NEGATIVE:
        case nR.vI.VERY_NEGATIVE:
        case nR.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nO =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    n_ = n(778591);
function nM(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        a = Math.min(Math.max(t, 0), 100) / 100,
        s = a * l;
    return (0, i.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - a) * 360) / 2}deg)` },
        children: (0, i.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${l - s}`,
        }),
    });
}
var nw = n(255417);
function nD(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tu.A)(),
        d = nG(s, r, "recent" === c),
        u = nP(d),
        m = a.useCallback(() => {
            (n(_.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, i.jsx)(Q.D, {
        onClick: m,
        className: nw.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nw.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nw.tN,
                    children: [
                        (0, i.jsx)(ny.N, { size: "sm", color: nL.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(Z.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            d === nR.vI.NO_USER_REVIEWS
                                ? ex.intl.string(ex.t.CLMt8J)
                                : ex.intl
                                      .format(
                                          "recent" === c
                                              ? ex.t.TzvC0k
                                              : "localized" === c
                                                ? ex.t.EOfrwm
                                                : ex.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nw.Z0,
                            children: [
                                (0, i.jsx)(q.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case nR.vI.NO_USER_REVIEWS:
                                                return ex.intl.string(ex.t.CLMt8J);
                                            case nR.vI.OVERWHELMINGLY_POSITIVE:
                                                return ex.intl.string(ex.t["75sx1S"]);
                                            case nR.vI.VERY_POSITIVE:
                                                return ex.intl.string(ex.t["EkOVg+"]);
                                            case nR.vI.POSITIVE:
                                                return ex.intl.string(ex.t.ZUkFtr);
                                            case nR.vI.MOSTLY_POSITIVE:
                                                return ex.intl.string(ex.t.M7Z09a);
                                            case nR.vI.MIXED:
                                                return ex.intl.string(ex.t.c8yuHR);
                                            case nR.vI.MOSTLY_NEGATIVE:
                                                return ex.intl.string(ex.t.H0MSjG);
                                            case nR.vI.NEGATIVE:
                                                return ex.intl.string(ex.t.vpLrgz);
                                            case nR.vI.VERY_NEGATIVE:
                                                return ex.intl.string(ex.t["5spYuX"]);
                                            case nR.vI.OVERWHELMINGLY_NEGATIVE:
                                                return ex.intl.string(ex.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== nR.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(q.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: ex.intl
                                            .format(ex.t.sgIoin, { rating_count: r.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${c}`,
                ),
            ],
        }),
    });
}
function nV(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, tu.A)(),
        x = a.useCallback(() => {
            (l(_.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, i.jsx)(Q.D, {
        onClick: x,
        className: nw.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nw.Ur,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nw.WA,
                    children: [
                        null != c ? (0, i.jsx)(nU, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, i.jsx)(nF, { rating: o, tier: c }) : null,
                        u
                            ? (0, i.jsx)(q.E, {
                                  variant: "text-xs/medium",
                                  color: nP(nR.vI.NO_USER_REVIEWS),
                                  children: ex.intl.string(ex.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nU(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nO.MIGHTY:
                    return ex.intl.string(ex.t.aZej2g);
                case nO.STRONG:
                    return ex.intl.string(ex.t.MLxnSg);
                case nO.FAIR:
                    return ex.intl.string(ex.t["3f19KA"]);
                case nO.WEAK:
                    return ex.intl.string(ex.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nO.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nO.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nO.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nO.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nw.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nF(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nO.MIGHTY:
                    t = "#fc430a";
                    break;
                case nO.STRONG:
                    t = "#9e00b4";
                    break;
                case nO.FAIR:
                    t = "#4aa1ce";
                    break;
                case nO.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: ex.intl.string(ex.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nw.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nM, { rating: t, strokeColor: l }),
                    (0, i.jsx)(q.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nw.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nY = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, n_.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED && null != l,
        r = t.reviews?.steam,
        c = nG(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== nR.vI.NO_USER_REVIEWS,
        u =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        m = u ? r?.localizedRating : r?.rating,
        x = u ? r?.localizedRatingCount : r?.ratingCount,
        h = u ? ex.t["aWb+V4"] : ex.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return s || o || g
        ? (0, i.jsxs)("div", {
              className: nw.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nw.Gf,
                      children: (0, i.jsx)(Z.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: ex.intl.string(ex.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nw.kL,
                      children: [
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: nw.WH,
                                    children: (0, i.jsx)(nD, {
                                        url: l,
                                        trackAction: n,
                                        title: ex.intl.string(ex.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != l
                              ? (0, i.jsx)("div", {
                                    className: nw.WH,
                                    children: (0, i.jsx)(nD, {
                                        url: l,
                                        trackAction: n,
                                        title: ex.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: u ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: nw.WH,
                                    children: (0, i.jsx)(nV, { game: t, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nW = n(839534),
    nB = n(674658),
    nz = n(450047),
    nH = n(722258),
    nX = n(258245),
    nK = n(561769),
    nJ = n(484469),
    n$ = n(57020);
let nQ = [];
var nq = n(758836),
    nZ = n(747828);
let n0 = [0, 1, 2, 3, 4],
    n1 = a.createContext({ trackAction: () => {} });
function n8(e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: l } = (0, nB.q)(t, !0),
        s = a.useContext(nK.v3),
        { trackAction: r } = a.useContext(n1),
        c = a.useRef(null),
        o = a.useCallback(
            (e) => {
                (r(_.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    null != l &&
                        ((c.current = e.currentTarget),
                        (0, nH.B)({
                            skuId: t,
                            analyticsLocations: [N.A.GAME_PROFILE],
                            analyticsSource: N.A.GAME_PROFILE,
                            shouldCheckoutWithOrbs: (0, n$.A)({ product: l }),
                            returnRef: c,
                        })));
            },
            [r, t, l],
        );
    if (null == l) return null;
    let { flattenProductVariants: d, ...u } = s;
    return (0, i.jsx)(nK.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...u },
        children: (0, i.jsx)(nX.A, {
            skuId: t,
            aspectRatio: n,
            cardClassName: nZ.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function n4() {
    return (0, i.jsx)(nJ.A, {});
}
function n5(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = H(),
        s = t.shopCollectionIds?.[0],
        {
            skuIds: r,
            hasFetched: c,
            isFetching: o,
        } = (function (e) {
            let {
                hasFetched: t,
                isFetching: n,
                skuIds: l,
            } = (0, u.cf)([M.A], () => ({
                hasFetched: null != e && M.A.hasShopCollectionBeenFetched(e),
                isFetching: null != e && M.A.isShopCollectionFetching(e),
                skuIds: null != e ? M.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || M.A.isShopCollectionFetching(e) || ek(e);
                }, [e, t]),
                { skuIds: l ?? nQ, hasFetched: t, isFetching: n }
            );
        })(s),
        d = (0, nz.D)(r, !0),
        m = a.useCallback(() => {
            (n(_.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nW.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: nq.G2.CATALOG,
                }));
        }, [n, l]),
        x = a.useMemo(() => ({ trackAction: n }), [n]);
    return null != s && (!c || o || (r.length > 0 && d))
        ? (0, i.jsx)(eY, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, i.jsx)(ez, { children: n0.map((e) => (0, i.jsx)(n4, {}, e)) }),
          })
        : 0 === r.length
          ? null
          : (0, i.jsx)(n1.Provider, {
                value: x,
                children: (0, i.jsx)(eW, {
                    title: ex.intl.string(ex.t["5DYPT8"]),
                    onClickViewAll: m,
                    children: (0, i.jsx)(en.A, { gap: "md", children: r.map((e) => (0, i.jsx)(n8, { skuId: e }, e)) }),
                }),
            });
}
var n2 = n(921138),
    n6 = n(311043);
let n3 = [],
    n7 = [];
var n9 = n(607346);
let le = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function lt(e) {
    let { className: t } = e;
    return (0, i.jsx)(eV, { className: t, children: (0, i.jsx)(eD, { className: n9.Lg }) });
}
function ln(e) {
    let { game: t, trackClick: n } = e,
        { navigateToGame: l } = H(),
        s = t.getCoverURL(256),
        [r, c] = a.useState(null),
        o = null == s || r === s,
        { shouldOpenGameProfile: d, gameId: u } = (0, n2.Ay)({
            gameId: t.id,
            source: _.GameProfileSources.SimilarGames,
        }),
        m = a.useCallback(() => {
            (n(_.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                d && null != u && l(u, _.GameProfileSources.SimilarGames));
        }, [t.id, u, n, d, l]),
        h = a.useCallback(() => c(s), [s]);
    return (0, i.jsx)(x.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsxs)(Q.D, {
            className: n9.Nr,
            onClick: m,
            "aria-label": ex.intl.formatToPlainString(ex.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, i.jsx)(tP.A, {
                    game: t,
                    className: n9.xe,
                    size: tP.w.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !o && (0, i.jsx)(lt, { className: n9.uz }),
            ],
        }),
    });
}
function ll(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: a } = (function (e) {
            let t = !eI.has(e),
                { data: n, isLoading: l, error: i } = eS(e, t),
                a = t && null != n ? n : n3;
            (0, L.x)(a);
            let s = (0, u.bG)(
                    [n6.A],
                    () => a.some((e) => null == n6.A.getGame(e) && !n6.A.hasNoData(e) && !n6.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, u.yK)(
                    [n6.A, B.default],
                    () => {
                        let e = B.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => n6.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, n2.T_)(t) && !(0, V.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: n7 };
        })(t);
    return eI.has(t)
        ? null
        : l
          ? (0, i.jsx)(eY, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, i.jsx)("div", {
                    className: n9.XG,
                    style: le,
                    children: (0, i.jsx)(ez, {
                        children: K()
                            .range(0, 8)
                            .map((e) => (0, i.jsx)(lt, { className: n9.aZ }, e)),
                    }),
                }),
            })
          : 0 === a.length
            ? null
            : (0, i.jsx)(eW, {
                  title: ex.intl.string(ex.t["6rLyQB"]),
                  children: (0, i.jsx)("div", {
                      className: n9.XG,
                      style: le,
                      children: (0, i.jsx)(en.A, {
                          gap: "md",
                          children: a.map((e) => (0, i.jsx)(ln, { game: e, trackClick: n }, e.id)),
                      }),
                  }),
              });
}
var li = n(871123),
    la = n(317560),
    ls = n(467884),
    lr = n(761812);
function lc(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: lr.B, children: t });
}
function lo(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        s = a.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(en.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      lc,
                      {
                          children: (0, i.jsx)(ls.Ay, {
                              positionInSection: t,
                              skuId: e,
                              variant: ls.s6.SMALL,
                              analyticsLocations: n,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
let ld = [0, 1, 2, 3];
function lu() {
    return (0, i.jsx)(eY, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, i.jsx)(ez, { children: ld.map((e) => (0, i.jsx)(lc, { children: (0, i.jsx)(ls.yf, {}) }, e)) }),
    });
}
function lm(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: s,
        } = H(),
        { analyticsLocations: r } = (0, I.Ay)([N.A.GAME_PROFILE]),
        c = a.useCallback(() => {
            n?.application != null &&
                (t(_.GameProfileTrackActionActions.GameShop),
                s(),
                (0, tK.default)({ applicationId: n.application.id }));
        }, [n, t, s]),
        o = a.useCallback(
            (e, l) => {
                let i = n?.guildId;
                null != i &&
                    (t(_.GameProfileTrackActionActions.GameShopItem),
                    (0, la.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, li.rG)(e, t, l, i) && s();
                        },
                    }));
            },
            [t, s, r, n],
        );
    if (l) return (0, i.jsx)(lu, {});
    if (null == n) return null;
    let { skuIds: d } = n;
    return (0, i.jsx)(eW, {
        title: ex.intl.string(ex.t.WDdlUb),
        onClickViewAll: c,
        children: (0, i.jsx)(lo, { skuIds: d, analyticsLocations: r, onCardClick: o }),
    });
}
n(667532);
var lx = n(853022);
let lh = new Set(["1402418703554842694", "356877880938070016"]),
    lg = [e6.V.EPICGAMES, e6.V.STEAM, e6.V.ROBLOX, e6.V.BATTLENET, e6.V.RIOT, e6.V.MINECRAFT];
var lf = n(349361),
    lj = n(924895),
    lA = n(422688),
    lp = n(505200),
    lv = n(695250);
let lE = function (e) {
    switch (e.category) {
        case e6.V.STEAM:
            return {
                icon: ny.N,
                text: ex.intl.string(ex.t.FsANs4),
                ariaLabel: ex.intl.string(ex.t["P+ePTG"]),
                action: _.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case e6.V.EPICGAMES:
            return {
                icon: lf.r,
                text: ex.intl.string(ex.t.ZbBMHa),
                ariaLabel: ex.intl.string(ex.t.BwX0UW),
                action: _.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case e6.V.ROBLOX:
            return {
                icon: lj.H,
                text: ex.intl.string(ex.t["pJ+P+h"]),
                ariaLabel: ex.intl.string(ex.t.tYxpdf),
                action: _.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case e6.V.BATTLENET:
            return {
                icon: lA.a,
                text: ex.intl.string(ex.t["A7grp+"]),
                ariaLabel: ex.intl.string(ex.t.x9at20),
                action: _.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case e6.V.RIOT:
            return {
                icon: lp.A,
                text: ex.intl.string(ex.t.h6MapL),
                ariaLabel: ex.intl.string(ex.t["528nvc"]),
                action: _.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case e6.V.MINECRAFT:
            return {
                icon: lv.m,
                text: ex.intl.string(ex.t["HZbmO+"]),
                ariaLabel: ex.intl.string(ex.t.WWTqYn),
                action: _.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tf.Y,
                text: ex.intl.string(ex.t["QpN/Iz"]),
                ariaLabel: ex.intl.string(ex.t["8JZmmF"]),
                action: _.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function lN(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lI = n(48460);
function lk(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, n_.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eN.d3x.XBOX_GAME_PASS && !(0, e2.uJ)(e.id));
                return t?.id == null ? null : (0, lx.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== e6.V.EPICGAMES || !!lh.has(l)) &&
                            (e.category !== e6.V.STEAM || s !== d.Y.RETIRED_ABANDONED) &&
                            lg.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === d.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === e6.V.STEAM) ||
                    e.push({ category: e6.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === e6.V.STEAM ? -1 : +(t.category === e6.V.STEAM)));
                return (null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a);
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lb(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tu.A)();
    return (0, i.jsx)(lN, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lS = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = lk(t),
        c = a.useMemo(() => r.map(lE).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lb, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lI.G,
            children: [(0, i.jsx)(lb, { data: c[0], trackAction: l }), (0, i.jsx)(lb, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(lN, {
        text: ex.intl.string(ex.t["/hMurx"]),
        "aria-label": ex.intl.string(ex.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: a } = e;
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await n.e("176758").then(n.bind(n, 459477));
                    return (n) => (0, i.jsx)(e, { game: t, websiteButtons: l, trackAction: a, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: lI.G, children: [(0, i.jsx)(lb, { data: c[0], trackAction: l }), o] })
        : o;
};
var lT = n(123292);
function lC(e) {
    let { game: t, trackAction: n } = e,
        l = a.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [n, l] = a.useState("full");
            a.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        l((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (n.observe(t), () => n.disconnect());
            }, [e]);
            let i = a.useCallback(() => {
                "expanded" === n
                    ? (t(_.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(_.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: d } = H(),
        u = a.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = s ? ex.intl.string(ex.t["6MwJo/"]) : ex.intl.string(ex.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tp.fi, tp.mX),
        children: [
            (0, i.jsx)(q.E, { ref: l, lineClamp: s ? void 0 : u, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(lT.Q, { onClick: o, text: m }),
        ],
    });
}
let ly = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: tp.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: tp.lM,
                    children: [
                        (0, i.jsx)(nC, { game: t, trackAction: n }),
                        (0, i.jsx)(lC, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(e4, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lm, { trackAction: n }),
                (0, i.jsx)(n5, { game: t, trackAction: n }),
                (0, i.jsx)(ll, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    lL = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: tp.V0,
            children: [
                (0, i.jsx)(nC, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: tp.gr,
                    children: [
                        (0, i.jsx)(nd, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: tp.E1,
                            children: [
                                (0, i.jsx)(lS, { game: t, trackAction: n }),
                                (0, i.jsx)(lC, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(nf, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tR, { trackAction: n }),
                (0, i.jsx)(e4, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lm, { trackAction: n }),
                (0, i.jsx)(n5, { game: t, trackAction: n }),
                (0, i.jsx)(ll, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(nY, { game: t, trackAction: n }),
                (0, i.jsx)(tb, { game: t, trackAction: n }),
            ],
        });
    });
function lR(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: s } = H();
    (0, k.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        (l(_.GameProfileTrackActionActions.CloudPlay), s(), t());
    }, [s, t, l]);
    return (0, i.jsx)(x.m, {
        text: ex.intl.string(ex.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: ex.intl.string(ex.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function lG(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        s = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: tp.NC,
              children: (0, i.jsx)(lR, { onCloudPlayClick: s, analyticsLocations: l, trackAction: a }),
          });
}
function lP(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, R.L_)(t.getOfficialApplicationId()),
        [c] = (0, R.L_)(t.id),
        { showsStoreLinks: o } = lk(t),
        u = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(tp.Pn, tp.fi, tp.iH, o ? tp.sV : tp.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(lG, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: tp.V0,
                children: [
                    (0, i.jsx)(lS, { game: t, trackAction: n }),
                    (0, i.jsx)(nf, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tR, { trackAction: n }),
                    u && (0, i.jsx)(nY, { game: t, trackAction: n }),
                    (0, i.jsx)(tb, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function lO(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: s,
            onClose: c,
            appContext: d,
            trackExternalAction: x,
            initialScrollOffset: h,
            navigateToGame: g,
        } = e,
        [v, E] = a.useState(!0),
        [k, R] = a.useState(null),
        { clientThemesClassName: H } = (0, T.Ay)(),
        X = (0, u.bG)([O.default], () => O.default.locale),
        K = a.useMemo(() => (0, _.generateViewId)(), []),
        { analyticsLocations: J } = (0, I.Ay)(N.A.GAME_PROFILE),
        $ = (0, w.s)(t),
        { data: Q } = (0, L.I)(t),
        q = (0, D.rG)(Q),
        Z = Q?.getOfficialApplicationId(),
        ee = null != Z,
        et = (0, u.bG)([S.A], () => null != Z && S.A.didFetchingApplicationFail(Z), [Z]),
        en = Q?.name ?? "",
        el = (0, V.A)(Q),
        ei = a.useRef(null);
    a.useEffect(() => {
        ei.current = k;
    }, [k]);
    let {
            hasAlreadyLinked: ea,
            canStartAuthorization: es,
            fetched: er,
            startAuthorization: ec,
            connectionApp: eo,
        } = (0, b.RD)(Q),
        { invite: ed, isMember: eu, isResolving: em } = (0, D.Ay)(Q, R),
        { socialLayerStorefrontRecommendationsData: ex, socialLayerStorefrontRecommendationsLoading: eh } = (function (
            e,
        ) {
            let t = B.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, u.cf)(
                    [F.A],
                    () => ({
                        storefrontApplicationId: null != e ? F.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === F.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                s = (0, U.h)(l),
                r = (0, u.bG)([S.A], () => null != l && S.A.didFetchingApplicationFail(l), [l]),
                c = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: d } = (0, W.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: Y.B5.USER_PROFILE,
                }),
                m = a.useMemo(
                    () =>
                        null == s || null == s.guildId || "success" !== d || 0 === o.length
                            ? null
                            : { application: s, skuIds: o.map((e) => e.id), guildId: s.guildId },
                    [s, d, o],
                ),
                x = "loading" === d,
                h = "success" === d && o.length > 0 && null == s && !r;
            return {
                socialLayerStorefrontRecommendationsData: m,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || h),
            };
        })(t),
        eg = a.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, _.getGuildIdAndVerifiedFromInvite)(ei.current);
                (0, _.trackGameProfileAction)({
                    gameName: en,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: K,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [en, t, K, n],
        );
    ((0, p.Ay)(() => {
        ((0, _.trackGameProfileOpen)({
            source: n,
            viewId: K,
            gameId: t,
            gameName: en,
            authorId: l,
            profileType: _.GameProfileTypes.FullProfile,
        }),
            (0, C.He)());
    }),
        (0, p.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, _.getGuildIdAndVerifiedFromInvite)(ei.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, y.JM)(e) ? (0, y.W6)(e, l) : (0, y.aJ)(e, X);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, _.trackGameProfileClose)({
                viewId: K,
                gameId: t,
                gameName: en,
                playedFriendIds: $.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: M.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ef = a.useCallback((e) => {
            E(e.contentRect.width >= 800);
        }, []),
        ej = (0, o.w)(ef, [], { fireOnMount: !0 }),
        eA = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, P.closeUserProfileModal)()) : c();
            },
            [c],
        ),
        ep = a.useCallback(() => eA(!1), [eA]),
        ev = a.useRef(null),
        eE = a.useCallback(() => ev.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eN = a.useMemo(
            () => ({
                isTwoColumn: v,
                canStartAuthorization: es,
                hasAlreadyLinked: ea,
                fetchedAuthorization: er,
                startAuthorization: ec,
                connectionApp: eo,
                invite: ed,
                hasDiscordWebsite: q,
                hasOfficialApplication: ee,
                officialApplicationFetchFailed: et,
                isCommunityInviteResolving: em,
                isMember: eu,
                socialLayerStorefrontRecommendationsData: ex,
                socialLayerStorefrontRecommendationsLoading: eh,
                closeModal: eA,
                navigateToGame: g,
                getScrollOffset: eE,
            }),
            [v, es, ea, er, ec, eo, ed, q, ee, et, em, eu, ex, eh, eA, g, eE],
        ),
        [eI, ek] = a.useState(!1),
        [eb, eS] = a.useState(150),
        eT = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && ev.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eC = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eT.current) {
                let e = Math.max(0, 1 - t / 150);
                eT.current.style.opacity = String(e);
            }
            ek(t >= eb);
        },
        [eb],
    );
    return null == Q
        ? null
        : (0, i.jsx)(I.f5, {
              value: J,
              children: (0, i.jsx)(m.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, i.jsx)(z.Provider, {
                      value: eN,
                      children: (0, i.jsx)("div", {
                          className: r()(H, tp.kL),
                          ref: ej,
                          children: (0, i.jsxs)(G.A, {
                              obscured: el,
                              onClose: ep,
                              children: [
                                  (0, i.jsx)(nr, { game: Q, ref: eT }),
                                  (0, i.jsx)(na, { game: Q, show: eI, trackAction: eg }),
                                  (0, i.jsx)(ns, { show: eI }),
                                  (0, i.jsxs)(j.Ch, {
                                      ref: ev,
                                      onScroll: eC,
                                      children: [
                                          (0, i.jsx)(nu, {
                                              game: Q,
                                              onSetCompactBarScrollThreshold: eS,
                                              showCompactBar: eI,
                                          }),
                                          (0, i.jsx)(A.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: tp.jC,
                                                        children: [
                                                            (0, i.jsx)(ly, { game: Q, trackAction: eg }),
                                                            (0, i.jsx)(lP, {
                                                                game: Q,
                                                                appContext: d,
                                                                source: n,
                                                                trackExternalAction: x,
                                                                trackAction: eg,
                                                                analyticsLocations: J,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: tp.b9,
                                                        children: (0, i.jsx)(lL, {
                                                            game: Q,
                                                            trackAction: eg,
                                                            analyticsLocations: J,
                                                        }),
                                                    }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let l_ = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: s, ...r } = e,
        [c, o] = a.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: s }),
        d = c.gameId,
        u = a.useCallback(
            (e, t) => {
                e !== d && ((0, D.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, i.jsx)(
        lO,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: u,
            ...r,
        },
        c.gameId,
    );
};
