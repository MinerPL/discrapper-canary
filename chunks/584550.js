l.d(t, { m: () => eN });
var i = l(477900),
    n = l(582128),
    a = l(593673),
    s = l(503698),
    r = l.n(s),
    d = l(140735),
    c = l(17928),
    u = l(661531),
    o = l(663417),
    f = l(834730),
    h = l(97808),
    m = l(778712),
    x = l(369606),
    g = l(80682),
    E = l(696451),
    A = l(287809),
    v = l(562153),
    p = l(927813),
    j = l(61567),
    I = l(375708);
let S = p.A.Seconds.WEEK,
    _ = p.A.Seconds.DAY;
var y = l(251812),
    C = l(518782),
    b = l(289873),
    N = l(738188),
    T = l(448492);
function D() {
    return (0, i.jsx)("div", {
        className: T.w,
        children: (0, i.jsx)(b.y, { type: b.y.Type.SPINNING_CIRCLE, "aria-label": I.intl.string(I.t.ZTNur7) }),
    });
}
function w() {
    return (0, i.jsxs)("div", {
        className: T.w,
        role: "alert",
        children: [
            (0, i.jsx)(N.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(f.E, { variant: "text-sm/normal", color: "text-muted", children: I.intl.string(I.t.F8FvUy) }),
        ],
    });
}
var G = l(764359);
function k(e) {
    let { guildId: t, data: l } = e,
        { entries: n, stat: a } = l,
        s = n.slice(0, 20),
        c = (0, y.K)(a),
        h = (0, y.K)(C.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED).valueLabel;
    return (
        (0, g.Eq)({ [t]: s.map((e) => e.user_id) }, "leaderboard"),
        (0, i.jsxs)("div", {
            className: G.Up,
            children: [
                (0, i.jsx)("div", {
                    className: G.CZ,
                    children: (0, i.jsxs)("table", {
                        className: G.tp,
                        children: [
                            (0, i.jsx)("thead", {
                                children: (0, i.jsxs)("tr", {
                                    className: G.U1,
                                    children: [
                                        (0, i.jsx)("th", {
                                            className: r()(G.e4, G.Jt),
                                            children: (0, i.jsx)(d.A, { children: "Rank" }),
                                        }),
                                        (0, i.jsx)("th", {
                                            className: G.e4,
                                            children: (0, i.jsx)(d.A, { children: "Member" }),
                                        }),
                                        (0, i.jsx)("th", {
                                            className: G.e4,
                                            children: (0, i.jsx)(d.A, { children: c.valueLabel }),
                                        }),
                                        (0, i.jsx)("th", {
                                            className: G.e4,
                                            children: (0, i.jsx)(d.A, { children: h }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)("tbody", {
                                children: s.map((e) => (0, i.jsx)(L, { guildId: t, entry: e }, e.user_id)),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: G.qr,
                    children: [
                        (0, i.jsx)(o.RefreshIcon, { size: "xxs", color: u.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                        (0, i.jsx)(f.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: I.intl.string(j.default["/nma+a"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
function L(e) {
    let { guildId: t, entry: l } = e,
        n = l.user_id,
        a = (0, c.bG)([A.default], () => A.default.getUser(n)),
        s = (0, c.bG)([E.Ay], () => E.Ay.getMember(t, n)),
        r = v.Ay.useName(t, void 0, a);
    return null == a || null == s
        ? null
        : (0, i.jsxs)("tr", {
              className: G.nM,
              children: [
                  (0, i.jsx)("td", {
                      className: G.Jt,
                      children: (0, i.jsx)(f.E, { variant: "text-sm/semibold", color: "text-muted", children: l.rank }),
                  }),
                  (0, i.jsx)("td", {
                      className: G.Hn,
                      children: (0, i.jsxs)("div", {
                          className: G.kQ,
                          children: [
                              (0, i.jsx)(h.eu, {
                                  size: m._3.SIZE_32,
                                  src: a.getAvatarURL(t, 32) ?? void 0,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(f.E, {
                                  variant: "text-md/semibold",
                                  color: "text-default",
                                  className: G.UU,
                                  children: r,
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)("td", {
                      className: G.Hn,
                      children: (0, i.jsx)(f.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          children: l.value,
                      }),
                  }),
                  (0, i.jsx)("td", {
                      className: G.Hn,
                      children: (0, i.jsx)(f.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          children: l.application_ids.length,
                      }),
                  }),
              ],
          });
}
var R = l(331322),
    U = l(452027),
    B = l(103557),
    W = l(825484),
    P = l(821609),
    F = l(95477),
    M = l(866665),
    O = l(408278),
    H = l(241326),
    z = l(683071),
    q = l(2553),
    X = l(405810),
    K = l(967198),
    Y = l(488428),
    V = l(776231),
    $ = l(486020),
    Z = l(652215);
function Q(e, t, l) {
    let i = $.QB ? "webp" : "jpg",
        { CDN_HOST: n, API_ENDPOINT: a } = window.GLOBAL_ENV,
        s = Z.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        r = null != n ? `https://${n}${s}` : location.protocol + a + s,
        d = { size: (0, V.kr)(500 * (0, V.mZ)()) };
    return ("jpg" === i && (d.quality = "lossless"), (r += `?${Y.stringify(d)}`));
}
var J = l(868602),
    ee = l(445187),
    et = l(890497),
    el = l(734057),
    ei = l(317525),
    en = l(576705),
    ea = l(935208),
    es = l(44167);
l(321073);
var er = l(485845),
    ed = l(136722),
    ec = l(435183),
    eu = l(155718),
    eo = l(795816),
    ef = l(933958),
    eh = l(574152),
    em = l(627363),
    ex = l(587895),
    eg = l(712440),
    eE = l(733110),
    eA = l(488926),
    ev = l(360469);
async function ep(e) {
    null == ex.A.getApplication(ev.NW) && (await (0, em.TA)(ev.NW));
    let t = ef.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== ev.NW);
    return await (0, eo.su)({
        channelId: e,
        applicationId: ev.NW,
        isStart: t,
        embeddedActivitiesManager: (0, eh.A)(),
        renderInFramePool: !0,
    });
}
async function ej(e) {
    let { channel: t, selectedRoleIds: l } = e,
        i = [];
    if (l.length > 0)
        for (let e of (i.push({ id: t.guild_id, type: eu.r2.ROLE, allow: eA.x3, deny: Z.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            i.push({ id: e, type: eu.r2.ROLE, allow: Z.xBc.USE_EMBEDDED_ACTIVITIES, deny: eA.x3 });
    let n = await (0, ec.RT)(t.id, { permissionOverwrites: i });
    if (!n.ok) throw n;
}
let eI = [];
var eS = l(344351),
    e_ = l(256693),
    ey = l(812901),
    eC = l(317608),
    eb = l(953538);
let eN = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? Q(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: ee.k,
                children: [
                    null != d && (0, i.jsx)("img", { className: ee.S, src: d, alt: "" }),
                    null != a && (0, i.jsx)(f.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: s } = e,
                r = t.config,
                [d, u] = n.useState(r.title ?? ""),
                [o, f] = n.useState(r.text ?? ""),
                [h, m] = n.useState(r.image),
                [x, g] = n.useState(null),
                E = (0, c.bG)([K.A], () => K.A.getGuildId()),
                A = void 0 !== h ? h : null != r.image_hash && null != E ? Q(E, t.id, r.image_hash) : null;
            return (0, i.jsxs)(R.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(F.k, {
                        label: I.intl.string(I.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (g(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(U.D, {
                        label: I.intl.string(I.t.X4IxWL),
                        children: (0, i.jsxs)(R.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: J.B,
                            children: [
                                (0, i.jsxs)(R.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(X.A, {
                                            variant: "secondary",
                                            text: I.intl.string(I.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (g(null), m(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, q.A)(0xa00000),
                                        }),
                                        null != A &&
                                            (0, i.jsx)(M.m, {
                                                text: I.intl.string(I.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(O.K, {
                                                    variant: "critical-secondary",
                                                    icon: H.TrashIcon,
                                                    onClick: function () {
                                                        (g(null), m(null));
                                                    },
                                                    "aria-label": I.intl.string(I.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != A && (0, i.jsx)("img", { className: J.V, src: A, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(B.f, {
                        label: I.intl.string(I.t.COGMNC),
                        value: o,
                        onChange: function (e) {
                            (g(null), f(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != x &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(z.w, { type: "critical", children: x }),
                        }),
                    (0, i.jsxs)(W.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(P.$, { variant: "secondary", text: I.intl.string(I.t["ETE/oC"]), onClick: s }),
                            (0, i.jsx)(P.$, {
                                variant: "primary",
                                text: I.intl.string(I.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != r.image_hash),
                                        0 === o.length && !e && (g(I.intl.string(j.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: r.image_hash,
                                        text: o.length > 0 ? o : null,
                                        title: d.length > 0 ? d : null,
                                    };
                                    (void 0 !== h && (t.image = h), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        useTitle: function (e) {
            return e.config.title ?? e.default_title ?? "";
        },
    },
    [a.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, i.jsx)(D, {})
                : "error" === t.status
                  ? (0, i.jsx)(w, {})
                  : (0, i.jsx)(k, { guildId: l, data: t.data });
        },
        useTitle: function (e, t) {
            return t?.status === "success" ? (0, y.K)(t.data.stat).name : (e.default_title ?? "");
        },
        TitleIcon: function () {
            return (0, i.jsx)(x.TrophyIcon, { size: "sm", color: u.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success"
                ? null
                : (0, i.jsx)("div", {
                      className: G.f$,
                      children: (0, i.jsx)(f.E, {
                          variant: "text-xs/semibold",
                          color: "text-brand",
                          children: (function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                                  l = Math.ceil(Math.max(e + S - t / 1e3, 0) / _);
                              return I.intl.formatToPlainString(j.default.C07UJ2, { days: l });
                          })(t.data.week_start_ts),
                      }),
                  });
        },
    },
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = (0, es.n)(),
                s = (0, c.bG)(
                    [el.A, en.A],
                    () => {
                        let e = null != a ? el.A.getChannel(a) : void 0;
                        return null != e && en.A.can(Z.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                r = (0, c.bG)(
                    [ef.Ay],
                    () => {
                        let e = ef.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== ev.NW ||
                            e.location.kind !== eS.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, c.bG)([ef.Ay], () => ef.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, c.bG)(
                        [eE.default],
                        () => eE.default.getFetchStateForApplication(ev.NW) === eE.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, c.bG)(
                        [eE.default, ex.A],
                        () => {
                            let e = eE.default.getNewestTokenForApplication(ev.NW);
                            if (null == e) return !1;
                            let t = ex.A.getApplication(ev.NW),
                                l = t?.integrationTypesConfig?.[er.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let i = new Set(e.scopes);
                            return l.every((e) => i.has(e));
                        },
                        [],
                    )),
                    n.useEffect(() => {
                        (eE.default.getFetchStateForApplication(ev.NW) === eE.FetchState.NOT_FETCHED &&
                            eg.A.fetch([ev.NW]),
                            null == ex.A.getApplication(ev.NW) && (0, em.TA)(ev.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                h = n.useRef(!1);
            n.useEffect(() => {
                null == r && null != a && s && u && o && !h.current && ((h.current = !0), ep(a));
            }, [s, a, r, u, o]);
            let m = n.useCallback(() => {
                    null != a && ((h.current = !0), ep(a));
                }, [a]),
                x = null != a && u && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: eb.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(eC.A, {
                                  frameId: (0, e_.Ri)(r),
                                  level: ey.A.WithinAppContent,
                                  className: eb.t$,
                              }),
                          null == r &&
                              x &&
                              (0, i.jsx)("div", {
                                  className: eb.P5,
                                  children: (0, i.jsx)(P.$, {
                                      variant: "secondary",
                                      text: I.intl.string(j.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: eb.kL,
                      children: (0, i.jsx)("div", {
                          className: eb.m0,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: I.intl.string(j.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, c.bG)([K.A], () => K.A.getGuildId()),
                a = ea.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, es.n)(),
                r = (0, c.bG)([el.A], () => (null != s ? el.A.getChannel(s) : void 0), [s]),
                d = (0, c.bG)([en.A], () => null != r && en.A.can(Z.xBc.MANAGE_ROLES, r), [r]),
                u = (0, c.bG)([ei.A], () => (null == l ? eI : ei.A.getSortedRoles(l).filter((e) => e.id !== a)), [
                    l,
                    a,
                ]),
                o = n.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          ed.zy(e.deny, Z.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? u
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && ed.zy(t.allow, Z.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, u]),
                [f, h] = n.useState(null),
                [m, x] = n.useState(!1),
                [g, E] = n.useState(!1),
                A = f ?? o,
                v = n.useMemo(() => u.map((e) => ({ id: e.id, label: e.name, value: e.id })), [u]);
            async function p() {
                if (null != r) {
                    (E(!1), x(!0));
                    try {
                        (await ej({ channel: r, selectedRoleIds: A }), t());
                    } catch {
                        (x(!1), E(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(R.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(et.Z, {
                              selectionMode: "multiple",
                              label: I.intl.string(j.default.XXLbfv),
                              description: I.intl.string(j.default.XrpYIG),
                              placeholder: I.intl.string(j.default.pp6WeD),
                              options: v,
                              value: A,
                              onSelectionChange: function (e) {
                                  (E(!1), h(e));
                              },
                              disabled: !d || m,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(z.w, { type: "warning", children: I.intl.string(j.default.UPLtlA) }),
                          g &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(z.w, {
                                      type: "critical",
                                      children: I.intl.string(j.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(W.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(P.$, {
                                      variant: "secondary",
                                      text: I.intl.string(I.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: m,
                                  }),
                                  (0, i.jsx)(P.$, {
                                      variant: "primary",
                                      text: I.intl.string(I.t["R3BPH+"]),
                                      onClick: p,
                                      disabled: !d,
                                      loading: m,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: n, role: a, width: s = 288, height: r = 192 } = e;
            return (0, i.jsx)("img", {
                style: { width: s, height: r },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: t,
                "aria-label": l,
                "aria-hidden": n,
                role: a ?? "img",
            });
        },
    },
};
