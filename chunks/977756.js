l.d(t, { m: () => eI });
var i = l(477900),
    n = l(582128),
    a = l(593673),
    s = l(503698),
    r = l.n(s),
    d = l(140735),
    c = l(17928),
    u = l(297264),
    o = l(866665),
    f = l(834730),
    h = l(97808),
    m = l(778712),
    g = l(80682),
    x = l(696451),
    E = l(287809),
    A = l(927813),
    p = l(562153),
    _ = l(518782),
    v = l(289873),
    S = l(738188),
    j = l(375708),
    I = l(448492);
function y() {
    return (0, i.jsx)("div", {
        className: I.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": j.intl.string(j.t.ZTNur7) }),
    });
}
function b() {
    return (0, i.jsxs)("div", {
        className: I.w,
        role: "alert",
        children: [
            (0, i.jsx)(S.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(f.E, { variant: "text-sm/normal", color: "text-muted", children: j.intl.string(j.t.F8FvUy) }),
        ],
    });
}
var C = l(764359);
function N(e) {
    let { guildId: t, data: l } = e,
        { entries: n, stat: a, week_start_ts: s } = l;
    (0, g.Eq)({ [t]: n.map((e) => e.user_id) }, "leaderboard");
    let c = new Date(),
        h = s + A.A.Millis.WEEK / 1e3 - c.getTime() / 1e3;
    return (0, i.jsxs)("div", {
        className: C.Up,
        children: [
            (0, i.jsxs)("div", {
                className: C.wx,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: (function (e) {
                            switch (e) {
                                case _.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
                                    return "Time spent gaming";
                                case _.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                    return "Number of days gaming";
                                case _.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                    return "Unique games played";
                                default:
                                    return "Gaming Leaderboard";
                            }
                        })(a),
                    }),
                    (0, i.jsx)(o.m, {
                        text: "Data updates every day.",
                        children: (0, i.jsx)("div", {
                            className: C.f$,
                            children: (0, i.jsxs)(f.E, {
                                variant: "text-xs/semibold",
                                color: "text-brand",
                                children: [Math.max(0, Math.floor(h / 3600)), " hours left"],
                            }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: C.CZ,
                children: (0, i.jsxs)("table", {
                    className: C.tp,
                    children: [
                        (0, i.jsx)("thead", {
                            children: (0, i.jsxs)("tr", {
                                className: C.U1,
                                children: [
                                    (0, i.jsx)("th", {
                                        className: r()(C.e4, C.Jt),
                                        children: (0, i.jsx)(d.A, { children: "Rank" }),
                                    }),
                                    (0, i.jsx)("th", {
                                        className: C.e4,
                                        children: (0, i.jsx)(d.A, { children: "Member" }),
                                    }),
                                    (0, i.jsx)("th", {
                                        className: C.e4,
                                        children: (0, i.jsx)(d.A, {
                                            children: (function (e) {
                                                switch (e) {
                                                    case _.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
                                                        return "Hours played";
                                                    case _.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                                        return "Days played";
                                                    case _.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                                        return "Unique games played";
                                                    default:
                                                        return "Unknown stat";
                                                }
                                            })(a),
                                        }),
                                    }),
                                    (0, i.jsx)("th", {
                                        className: C.e4,
                                        children: (0, i.jsx)(d.A, { children: "Unique games played" }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("tbody", {
                            children: n.map((e) => (0, i.jsx)(D, { guildId: t, entry: e }, e.user_id)),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function D(e) {
    let { guildId: t, entry: l } = e,
        n = l.user_id,
        a = (0, c.bG)([E.default], () => E.default.getUser(n)),
        s = (0, c.bG)([x.Ay], () => x.Ay.getMember(t, n)),
        r = p.Ay.useName(t, void 0, a);
    return null == a || null == s
        ? null
        : (0, i.jsxs)("tr", {
              className: C.nM,
              children: [
                  (0, i.jsx)("td", {
                      className: C.Jt,
                      children: (0, i.jsx)(f.E, { variant: "text-sm/semibold", color: "text-muted", children: l.rank }),
                  }),
                  (0, i.jsx)("td", {
                      className: C.Hn,
                      children: (0, i.jsxs)("div", {
                          className: C.kQ,
                          children: [
                              (0, i.jsx)(h.eu, {
                                  size: m._3.SIZE_32,
                                  src: a.getAvatarURL(t, 32) ?? void 0,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(f.E, {
                                  variant: "text-md/semibold",
                                  color: "text-default",
                                  className: C.UU,
                                  children: r,
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)("td", {
                      className: C.Hn,
                      children: (0, i.jsx)(f.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          children: l.value,
                      }),
                  }),
                  (0, i.jsx)("td", {
                      className: C.Hn,
                      children: (0, i.jsx)(f.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          children: l.application_ids.length,
                      }),
                  }),
              ],
          });
}
var T = l(331322),
    G = l(452027),
    w = l(103557),
    R = l(825484),
    L = l(821609),
    k = l(95477),
    U = l(408278),
    B = l(241326),
    W = l(683071),
    P = l(2553),
    M = l(405810),
    F = l(967198),
    O = l(488428),
    H = l(776231),
    q = l(486020),
    Y = l(652215);
function z(e, t, l) {
    let i = q.QB ? "webp" : "jpg",
        { CDN_HOST: n, API_ENDPOINT: a } = window.GLOBAL_ENV,
        s = Y.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        r = null != n ? `https://${n}${s}` : location.protocol + a + s,
        d = { size: (0, H.kr)(500 * (0, H.mZ)()) };
    return "jpg" === i && (d.quality = "lossless"), (r += `?${O.stringify(d)}`);
}
var X = l(61567),
    V = l(868602),
    $ = l(445187),
    K = l(890497),
    Q = l(734057),
    Z = l(317525),
    J = l(576705),
    ee = l(935208);
l(321073);
var et = l(485845),
    el = l(136722),
    ei = l(435183),
    en = l(155718),
    ea = l(795816),
    es = l(933958),
    er = l(574152),
    ed = l(627363),
    ec = l(587895),
    eu = l(712440),
    eo = l(733110),
    ef = l(488926),
    eh = l(716357),
    em = l(360469);
function eg() {
    return (0, c.bG)([F.A, eh.A], () => {
        let e = F.A.getGuildId();
        return null != e ? eh.A.getSpace(e)?.channel_id : void 0;
    });
}
async function ex(e) {
    null == ec.A.getApplication(em.NW) && (await (0, ed.TA)(em.NW));
    let t = es.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== em.NW);
    return await (0, ea.su)({
        channelId: e,
        applicationId: em.NW,
        isStart: t,
        embeddedActivitiesManager: (0, er.A)(),
        renderInFramePool: !0,
    });
}
async function eE(e) {
    let { channel: t, selectedRoleIds: l } = e,
        i = [];
    if (l.length > 0)
        for (let e of (i.push({ id: t.guild_id, type: en.r2.ROLE, allow: ef.x3, deny: Y.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            i.push({ id: e, type: en.r2.ROLE, allow: Y.xBc.USE_EMBEDDED_ACTIVITIES, deny: ef.x3 });
    let n = await (0, ei.RT)(t.id, { permissionOverwrites: i });
    if (!n.ok) throw n;
}
let eA = [];
var ep = l(344351),
    e_ = l(256693),
    ev = l(812901),
    eS = l(317608),
    ej = l(953538);
let eI = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? z(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: $.k,
                children: [
                    null != d && (0, i.jsx)("img", { className: $.S, src: d, alt: "" }),
                    null != a && (0, i.jsx)(f.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: s } = e,
                r = t.config,
                [d, u] = n.useState(r.title ?? ""),
                [f, h] = n.useState(r.text ?? ""),
                [m, g] = n.useState(r.image),
                [x, E] = n.useState(null),
                A = (0, c.bG)([F.A], () => F.A.getGuildId()),
                p = void 0 !== m ? m : null != r.image_hash && null != A ? z(A, t.id, r.image_hash) : null;
            return (0, i.jsxs)(T.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(k.k, {
                        label: j.intl.string(j.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            E(null), u(e);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(G.D, {
                        label: j.intl.string(j.t.X4IxWL),
                        children: (0, i.jsxs)(T.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: V.B,
                            children: [
                                (0, i.jsxs)(T.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(M.A, {
                                            variant: "secondary",
                                            text: j.intl.string(j.t["MsUY/S"]),
                                            onChange: function (e) {
                                                E(null), g(e);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, P.A)(0xa00000),
                                        }),
                                        null != p &&
                                            (0, i.jsx)(o.m, {
                                                text: j.intl.string(j.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(U.K, {
                                                    variant: "critical-secondary",
                                                    icon: B.TrashIcon,
                                                    onClick: function () {
                                                        E(null), g(null);
                                                    },
                                                    "aria-label": j.intl.string(j.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != p && (0, i.jsx)("img", { className: V.V, src: p, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(w.f, {
                        label: j.intl.string(j.t.COGMNC),
                        value: f,
                        onChange: function (e) {
                            E(null), h(e);
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != x &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(W.w, { type: "critical", children: x }),
                        }),
                    (0, i.jsxs)(R.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(L.$, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: s }),
                            (0, i.jsx)(L.$, {
                                variant: "primary",
                                text: j.intl.string(j.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== m ? null !== m : null != r.image_hash),
                                        0 === f.length && !e && (E(j.intl.string(X.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: r.image_hash,
                                        text: f.length > 0 ? f : null,
                                        title: d.length > 0 ? d : null,
                                    };
                                    void 0 !== m && (t.image = m), l(t);
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
                ? (0, i.jsx)(y, {})
                : "error" === t.status
                  ? (0, i.jsx)(b, {})
                  : (0, i.jsx)(N, { guildId: l, data: t.data });
        },
    },
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = eg(),
                s = (0, c.bG)([Q.A, J.A], () => {
                    let e = null != a ? Q.A.getChannel(a) : void 0;
                    return null != e && J.A.can(Y.xBc.USE_EMBEDDED_ACTIVITIES, e);
                }, [a]),
                r = (0, c.bG)([es.Ay], () => {
                    let e = es.Ay.getCurrentEmbeddedActivity();
                    return null == e ||
                        e.applicationId !== em.NW ||
                        e.location.kind !== ep.T.GUILD_CHANNEL ||
                        e.location.channel_id !== a
                        ? null
                        : e;
                }, [a]),
                d = (0, c.bG)([es.Ay], () => es.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, c.bG)(
                        [eo.default],
                        () => eo.default.getFetchStateForApplication(em.NW) === eo.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, c.bG)([eo.default, ec.A], () => {
                        let e = eo.default.getNewestTokenForApplication(em.NW);
                        if (null == e) return !1;
                        let t = ec.A.getApplication(em.NW),
                            l = t?.integrationTypesConfig?.[et.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                        if (null == l) return !0;
                        let i = new Set(e.scopes);
                        return l.every((e) => i.has(e));
                    }, [])),
                    n.useEffect(() => {
                        eo.default.getFetchStateForApplication(em.NW) === eo.FetchState.NOT_FETCHED &&
                            eu.A.fetch([em.NW]),
                            null == ec.A.getApplication(em.NW) && (0, ed.TA)(em.NW);
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                h = n.useRef(!1);
            n.useEffect(() => {
                null == r && null != a && s && u && o && !h.current && ((h.current = !0), ex(a));
            }, [s, a, r, u, o]);
            let m = n.useCallback(() => {
                    null != a && ((h.current = !0), ex(a));
                }, [a]),
                g = null != a && u && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: ej.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(eS.A, {
                                  frameId: (0, e_.Ri)(r),
                                  level: ev.A.WithinAppContent,
                                  className: ej.t$,
                              }),
                          null == r &&
                              g &&
                              (0, i.jsx)("div", {
                                  className: ej.P5,
                                  children: (0, i.jsx)(L.$, {
                                      variant: "secondary",
                                      text: j.intl.string(X.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: ej.kL,
                      children: (0, i.jsx)("div", {
                          className: ej.m0,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.string(X.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, c.bG)([F.A], () => F.A.getGuildId()),
                a = ee.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = eg(),
                r = (0, c.bG)([Q.A], () => (null != s ? Q.A.getChannel(s) : void 0), [s]),
                d = (0, c.bG)([J.A], () => null != r && J.A.can(Y.xBc.MANAGE_ROLES, r), [r]),
                u = (0, c.bG)([Z.A], () => (null == l ? eA : Z.A.getSortedRoles(l).filter((e) => e.id !== a)), [l, a]),
                o = n.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          el.zy(e.deny, Y.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? u
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && el.zy(t.allow, Y.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, u]),
                [f, h] = n.useState(null),
                [m, g] = n.useState(!1),
                [x, E] = n.useState(!1),
                A = f ?? o,
                p = n.useMemo(() => u.map((e) => ({ id: e.id, label: e.name, value: e.id })), [u]);
            async function _() {
                if (null != r) {
                    E(!1), g(!0);
                    try {
                        await eE({ channel: r, selectedRoleIds: A }), t();
                    } catch {
                        g(!1), E(!0);
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(T.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(K.Z, {
                              selectionMode: "multiple",
                              label: j.intl.string(X.default.XXLbfv),
                              description: j.intl.string(X.default.XrpYIG),
                              placeholder: j.intl.string(X.default.pp6WeD),
                              options: p,
                              value: A,
                              onSelectionChange: function (e) {
                                  E(!1), h(e);
                              },
                              disabled: !d || m,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(W.w, { type: "warning", children: j.intl.string(X.default.UPLtlA) }),
                          x &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(W.w, {
                                      type: "critical",
                                      children: j.intl.string(X.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(R.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(L.$, {
                                      variant: "secondary",
                                      text: j.intl.string(j.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: m,
                                  }),
                                  (0, i.jsx)(L.$, {
                                      variant: "primary",
                                      text: j.intl.string(j.t["R3BPH+"]),
                                      onClick: _,
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
