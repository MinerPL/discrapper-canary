(n.r(t), n.d(t, { default: () => te }));
var a,
    i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(17928),
    u = n(314116),
    p = n(534890),
    m = n(646270),
    h = n(31300),
    g = n(794083),
    f = n(939249),
    x = n(834730),
    y = n(691540),
    b = n(857250),
    j = n(97483),
    v = n(866665),
    w = n(408278),
    C = n(92446),
    k = n(625903),
    A = n(297264),
    N = n(821609),
    E = n(364522),
    I = n(103557),
    S = n(691885),
    P = n(289873),
    R = n(152367),
    _ = n(661531),
    D = n(627363),
    T = n(625180),
    z = n(672929),
    M = n(976860),
    V = n(885386),
    L = n(696451),
    G = n(71393),
    F = n(576705),
    B = n(486020),
    H = n(50617),
    Y = n(375708),
    O = n(673724),
    X = n(948230),
    K = n(936494),
    U = n(976713),
    q = n(692200),
    W = n(683180),
    Z = n(208137),
    $ = n(805332),
    Q = n(277977),
    J = n(972786);
function ee(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var et = n(58703);
let en = [
    {
        date: "2026-09-10",
        summary:
            "Hitting your project limit, or conjuring too fast, now says so instead of just asking you to try again.",
    },
    {
        date: "2026-09-09",
        summary:
            "Pick which app a voice channel runs from the call itself, and switch between it and the participants.",
    },
    {
        date: "2026-09-09",
        summary:
            "On phones, an app channel now has a chat button: read and post in the channel as usual, then tap back to the app.",
    },
    {
        date: "2026-09-09",
        summary:
            "The app frame can go fullscreen: a new header control fills your whole screen with the running app, and Escape brings the view back.",
    },
    {
        date: "2026-09-08",
        summary: "App settings that name a channel now offer a channel picker instead of asking you to paste an id.",
    },
    {
        date: "2026-09-08",
        summary:
            "Made a mistake in your app\u2019s data? Conjure now saves a restore point before every deploy, lets you save your own, and can rewind the app\u2019s data to any restore point or exact moment from the last 30 days, keeping an undo point so a rewind is never one-way.",
    },
    {
        date: "2026-09-08",
        summary:
            "Importing a big project is faster and narrates its progress, and a zip that still has node_modules or .git inside now imports cleanly, telling you what was left out.",
    },
    {
        date: "2026-09-08",
        summary:
            "The checklist step being worked on gets its box back: the spinner turns inside the same frame the finished tick fills in.",
    },
    {
        date: "2026-09-07",
        summary:
            "A Priority toggle arrives in the model picker: on models that offer it, replies come back sooner for more runes, and the Speedrun stop now runs it by default.",
    },
    {
        date: "2026-09-07",
        summary:
            "An app with public pages can now claim a name for its web address \u2014 yourgame.discordvibeapps.com instead of a long number \u2014 and links to the old address keep working.",
    },
    {
        date: "2026-09-06",
        summary:
            "Every build step now shows its progress behind the curtain \u2014 what is syncing, installing, bundling, packing, checking, and publishing \u2014 instead of one silent line.",
    },
    {
        date: "2026-09-06",
        summary:
            "Collaborators on an app shared with their server can now remix it into a copy of their own, with no need for the owner to turn sharing on first.",
    },
    {
        date: "2026-09-06",
        summary:
            "Remixed an app? When the original improves, Conjure offers to update your copy while keeping every change you made, only checking with you on the rare spot it cannot keep both. You can also ask it to inherit updates from another app by its project id, even for a project you imported rather than remixed.",
    },
    { date: "2026-09-05", summary: "GPT-6 Astra joins the model picker and now powers the Big Brain effort stop." },
    {
        date: "2026-09-05",
        summary:
            "The rune panel is simpler now: one Conjuring count covers all the work in a turn, with Compacting listed separately.",
    },
    {
        date: "2026-09-05",
        summary:
            "Your app now has its own web address: pages people can open in a browser, a second address showing the version you are still working on, and a Sign in with Discord button that never asks anyone for a password.",
    },
    {
        date: "2026-09-05",
        summary:
            "Claude Fable 5.1 replaces Claude Fable 5 in the model picker, sharper on long builds at the same price.",
    },
    {
        date: "2026-09-03",
        summary: "Remix an app and Conjure builds your copy first, so the ideas it suggests are ones you can try.",
    },
    {
        date: "2026-09-03",
        summary:
            "Your published app stays playable while Conjure drives the preview, instead of both freezing at once.",
    },
    {
        date: "2026-09-02",
        summary:
            "One Effort scale, from Speedrun to Big Brain, sets how much thinking goes into a run, instead of choosing models and thinking levels separately.",
    },
    {
        date: "2026-09-02",
        summary:
            "Apps now know who\u2019s using them the moment they open, without asking anyone to sign in or approve anything.",
    },
    {
        date: "2026-09-02",
        summary:
            "A project you import gets fixed up and running straight away, instead of asking you to approve a plan.",
    },
    {
        date: "2026-09-02",
        summary:
            "Small follow-ups like adding sign-in are built straight away, instead of coming back as another plan to approve.",
    },
    {
        date: "2026-09-02",
        summary:
            "When a plan is redrawn, the new sketch keeps the look of the one before it, so your app still looks like itself.",
    },
    {
        date: "2026-09-01",
        summary:
            "Publishing now offers patch notes: Conjure drafts what changed since your last release, you edit them, and they post to a channel you pick.",
    },
    {
        date: "2026-09-01",
        summary: "People you share a project with can see the Publish control, instead of it being owner-only.",
    },
    {
        date: "2026-09-01",
        summary:
            "Checklist items Conjure is still working on show a spinner, so running and done tell apart at a glance.",
    },
    {
        date: "2026-08-31",
        summary: "Plan proposals come with a wireframe sketch, so you can see the shape of the app before you say go.",
    },
    {
        date: "2026-08-31",
        summary:
            "With Discord\u2019s Developer Mode on, a debug pane beside the builder shows your app\u2019s live logs and what your project is spending.",
    },
    {
        date: "2026-08-31",
        summary:
            "Your project gets a real name as soon as Conjure lands on a plan, instead of sitting as Untitled App.",
    },
    {
        date: "2026-08-31",
        summary:
            "App icons are drawn to suit what the app actually does, and always come back solid rather than see-through.",
    },
    {
        date: "2026-08-28",
        summary: "Apps you install just for yourself can hold an ordinary back-and-forth conversation with you in DMs.",
    },
    {
        date: "2026-08-26",
        summary:
            "You can move back and forth through Conjure\u2019s questions instead of being held on the one in front of you.",
    },
    {
        date: "2026-08-26",
        summary: "Hand a project to a whole role in settings, rather than adding one person at a time.",
    },
    {
        date: "2026-08-25",
        summary: "Conjuring has its own doorway in the desktop title bar, so it is one click away from anywhere.",
    },
];
var ea = n(413927);
function ei() {
    let e = en.slice(0, 3);
    if (0 === e.length) return null;
    let t = Y.intl.string(H.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: ea.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: ea.bZ,
                children: [
                    (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Y.intl.string(H.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: ea.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: ea.S3,
                            children: [
                                (0, i.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ea.VO,
                                    children: (0, et.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                }),
                                (0, i.jsx)(x.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
        ],
    });
}
var el = n(86303),
    es = n(210744),
    er = n(922016),
    eo = n(980707),
    ed = n(477782),
    ec = n(81369),
    eu = n(402879);
async function ep(e, t, n) {
    (0, Q.Hc)(e);
    let a = await (0, Q.vX)(e, t);
    (0, Q.dv)(e, n, [a]);
}
function em(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, O.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, O.ZJ)((0, O.yr)(t)) });
}
async function eh(e, t) {
    let n,
        a =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        i = await (0, Q.cS)(e, a);
    await (0, eu.F)(i, a);
}
function eg(e) {
    let t = l.useRef(null),
        n = l.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, i.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var ef = n(950305),
    ex = n(664121);
let ey = [
    { value: "user", icon: ef.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: ex.R, nameMessage: H.default.LdgKdI },
];
function eb(e) {
    let { importing: t, onImport: n } = e,
        a = l.useRef(null),
        s = eg(l.useCallback((e) => n(e, "user"), [n])),
        r = eg(l.useCallback((e) => n(e, "guild"), [n])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(er.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: er.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(eo.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(ed.rX, {
                            label: Y.intl.string(H.default.MLg0S8),
                            children: ey
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        ed.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: l } = n;
                    return (0, i.jsx)(N.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: ec.H,
                        text: Y.intl.string(H.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
            s.input,
            r.input,
        ],
    });
}
var ej = n(113491),
    ev = n(629584),
    ew = n(148853),
    eC = n(491920);
function ek(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        o = l.useMemo(() => t.map((e) => ({ value: e, name: (0, ew.kZ)(e), "aria-controls": (0, ew.z3)(e) })), [t]),
        d = l.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, i.jsx)(ev.I, {
              role: "tablist",
              look: "pill",
              className: r()(eC.b, s),
              optionClassName: eC.u,
              options: o,
              value: n,
              onChange: d,
          });
}
var eA = n(663417),
    eN = n(70688),
    eE = n(173936),
    eI = n(473935),
    eS = n(365199),
    eP = n(770818),
    eR = n(147036),
    e_ = n(957565),
    eD = n(557875),
    eT = n(869369),
    ez = n(123917);
let eM = new Set();
n(321073);
var eV = n(746080);
let eL = [];
function eG(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: a,
            projectGuildId: s,
            isOwner: r,
            canRemix: o,
            onExport: d,
            onImport: p,
            onRemix: m,
            onConnectTool: h,
            onVersionHistory: g,
            onRestorePoints: f,
            onRefresh: x,
            isRefreshing: v = !1,
            onClose: C,
            refreshApplicationId: A,
            previewProjectId: N,
        } = e,
        E = l.useRef(null),
        { pending: I, refresh: S } = (0, eP.A)(A ?? null),
        { pending: P, connect: R } = (function (e) {
            let [t, n] = l.useState(eM),
                a = l.useRef(eM),
                i = l.useCallback((e) => {
                    ((a.current = (0, eD.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: t,
                connect: l.useCallback(
                    (t) => {
                        if (null == e) return;
                        let l = (0, eD.K9)(a.current, t.type);
                        async function s() {
                            let n = await (0, Q.JI)(e, t.type);
                            if ((i(t.type), "url" === n.type)) return void (0, ez.h)({ href: n.url, trusted: !1 });
                            let a =
                                "setup" === (0, eD.rq)(n.error)
                                    ? Y.intl.string(H.default.avu1u4)
                                    : Y.intl.string(H.default["5fwOcF"]);
                            (0, y.P0)((0, b.o)(a, j.Ck.FAILURE));
                        }
                        null != l && ((a.current = l), n(l), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(N ?? null),
        _ = (0, c.bG)([Q.Ay], () => (null == N ? eL : Q.Ay.getDeclaredConnections(N))),
        D = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: i } = e,
                l = [];
            for (let { connection: e, offer: s } of (t &&
                l.push({
                    id: "preview-refresh",
                    label: Y.intl.string(H.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                l.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return l;
        })({
            canRefresh: null != A,
            refreshPending: I,
            offers: l.useMemo(() => (0, eD.Xl)(_), [_]),
            connectPending: P,
        }),
        T = l.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        z = null != m && o,
        M = r && null != p,
        V = z || null != d || M || null != h || null != g || null != f,
        L = e_.p5 && null != a,
        G = e_.p5;
    return null != x || null != C || V || G || r
        ? (0, i.jsx)(er.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "right",
              animation: er.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsxs)(eo.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: l,
                      onSelect: l,
                      children: [
                          null != x || null != C
                              ? (0, i.jsxs)(ed.rX, {
                                    children: [
                                        null != x
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "refresh",
                                                  icon: eA.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eA.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: v,
                                                  action: x,
                                              })
                                            : null,
                                        null != C
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "close",
                                                  icon: eN.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eN.DoorExitIcon },
                                                  label: Y.intl.string(H.default.Ea0Wrr),
                                                  action: C,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          D.length > 0
                              ? (0, i.jsx)(ed.rX, {
                                    children: D.map((e) =>
                                        (0, i.jsx)(
                                            ed.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void S();
                                                    let t = null == e.connectionType ? null : T.get(e.connectionType);
                                                    null != t && R(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          V
                              ? (0, i.jsxs)(ed.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        M
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: g,
                                              })
                                            : null,
                                        null != f
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          G
                              ? (0, i.jsxs)(ed.rX, {
                                    children: [
                                        L
                                            ? (0, i.jsx)(ed.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eE.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eE.LinkIcon },
                                                  action: () =>
                                                      (0, e_.C)((0, eR.n)(a, eV.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, b.o)(Y.intl.string(Y.t["L/PwZf"]), j.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, i.jsx)(ed.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: eI.L,
                                            leadingAccessory: { type: "icon", icon: eI.L },
                                            action: () =>
                                                (0, e_.C)(t, () =>
                                                    (0, y.P0)((0, b.o)(Y.intl.string(H.default.WOKsTg), j.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(ed.rX, {
                                    children: [
                                        (0, i.jsx)(ed.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, eT.A)(t, s ?? a),
                                        }),
                                        (0, i.jsx)(ed.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: Y.intl.formatToPlainString(H.default.ZokHVz, { name: n }),
                                                    subtitle: Y.intl.string(H.default.NmF939),
                                                    confirmText: Y.intl.string(Y.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, X.xx)(t)).ok)
                                                            throw Error(Y.intl.string(H.default.tqKZCi));
                                                    },
                                                });
                                            },
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, i.jsx)(w.K, {
                      ...e,
                      buttonRef: E,
                      icon: eS.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": n,
                  });
              },
          })
        : null;
}
var eF = n(742589),
    eB = n(769979);
function eH(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, i.jsx)(eF.A, {
        hideSearch: !0,
        toolbar: n,
        className: eB.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eB.QF,
            children: [
                (0, i.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eB.Kk,
                }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eF.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, i.jsx)(eF.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eF.A.Title, { className: eB.Qw, wrapperClassName: eB.DD, children: t }),
            ],
        }),
    });
}
var eY = n(321593),
    eO = n(580954),
    eX = n(192308),
    eK = n(189213),
    eU = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function eq(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        l = "permissions" === t;
    return (0, i.jsx)(eK.Modal, {
        transitionState: n,
        onClose: a,
        title: Y.intl.string(l ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(l ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(l ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function eW(e) {
    (0, eX.openModal)((t) => (0, i.jsx)(eq, { ...t, reason: e }));
}
var eZ = n(480007),
    e$ = n(584936),
    eQ = n(899154),
    eJ = n(652215),
    e0 = n(675210),
    e2 = n(165610),
    e6 = n(352978);
function e1(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e8(e) {
    return (0, i.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e3(e) {
    return (0, i.jsx)(g.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e7(e) {
    let t,
        n,
        a,
        s,
        r,
        { project: o, guildId: c, onSelect: p, onRemix: m } = e,
        h =
            ((t = o.id),
            (n = o.name),
            (a = l.useRef(!1)),
            (s = l.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, b.o)(Y.intl.formatToPlainString(H.default.u9TapG, { name: n }), j.Ck.MESSAGE)),
                    eh(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof Q._v ? e.status : null)
                                            ? Y.intl.string(H.default.uB40Hz)
                                            : 404 === n
                                              ? Y.intl.string(H.default.wCq2jC)
                                              : Y.intl.string(H.default.G2GqyP),
                                        j.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (r = eg(
                    l.useCallback(
                        (e) => {
                            let a = em(e);
                            null != a
                                ? (0, y.P0)((0, b.o)(a, j.Ck.FAILURE))
                                : (0, u.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: n }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, M.pX)(eJ.BVt.CHANNEL(c, eV.VV.VIBEGRATIONS, t));
                                          try {
                                              await ep(t, e, Y.intl.string(H.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, b.o)(Y.intl.string(H.default["02GpNr"]), j.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        g = o.preview_application_id ?? o.application_id,
        { data: v } = (0, D.YY)(g),
        w =
            null == o.updated_at
                ? null
                : Y.intl.formatToPlainString(H.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: e6.OY,
        children: [
            (0, i.jsx)(eY.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: e6.W6,
                onClick: p,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: B.Ay.getApplicationIconURL({ id: g, icon: v?.icon, size: 40 }),
                        className: e6.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: e6.MM,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: e6.j1,
                                children: o.name,
                            }),
                            null == w
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e6.h3,
                                      children: (0, i.jsx)(x.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: w,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: e6.M2,
                children: (0, i.jsxs)("div", {
                    className: e6.Pl,
                    children: [
                        (0, i.jsx)(eG, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, J.PV)(o),
                            canRemix: (0, J.H_)(o),
                            onRemix: m,
                            onExport: h.onExport,
                            onImport: h.onImport,
                        }),
                        h.importInput,
                    ],
                }),
            }),
        ],
    });
}
function e5(e) {
    let { project: t, projectsLoaded: a, onBack: s, guildId: r } = e,
        [o, d] = l.useState(!1),
        [p, m] = l.useState(!0),
        [h, g] = l.useState(!1),
        [f, E] = l.useState(!1),
        [I, S] = l.useState(!1),
        P = V.Q_.useSetting(),
        [R, _] = l.useState(null),
        [L, G] = l.useState(null),
        F = t?.id ?? null,
        B = l.useRef(F),
        O = l.useRef(!0),
        K = l.useRef(!1),
        U = l.useRef(null);
    ((B.current = F),
        l.useEffect(
            () => (
                (O.current = !0),
                () => {
                    O.current = !1;
                }
            ),
            [],
        ));
    let W = (0, c.bG)([J.Ay], () => (null == F ? null : J.Ay.getIntegrationStatus(F)), [F]),
        { data: Z, isLoading: ee } = (0, D.YY)(t?.preview_application_id ?? void 0),
        et = null != F && L !== F,
        en = W?.preview_ready === !0,
        ea = W?.has_activity === !0,
        {
            availability: ei,
            activeMode: er,
            setMode: eo,
            widgetApplicationId: ed,
        } = (0, eQ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: ea,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: W?.owner_authorization_revoked === !0,
        }),
        ec = (0, e0.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: en,
            integrationInstalled: W?.integration_installed ?? null,
            botPermissionsChanged: W?.bot_permissions_changed === !0,
        }),
        eu = o || et || ee,
        eh = Y.intl.string(H.default["5gU57O"]),
        ef = p && !I && !h && !f,
        ex = Y.intl.string(ef ? H.default.YdgE0j : H.default.aWVf4j),
        ey = l.useCallback(() => {
            if (I || h || f) {
                (S(!1), g(!1), E(!1), m(!0));
                return;
            }
            m((e) => !e);
        }, [I, h, f]),
        eb = l.useCallback(() => m(!1), []),
        ej = l.useCallback(() => {
            S((e) => !e && (m(!0), g(!1), E(!1), !0));
        }, []),
        ev = l.useCallback(() => S(!1), []),
        ew = l.useCallback(
            (e) => {
                if (null == t || K.current) return;
                let n = t.id;
                function a() {
                    return O.current && B.current === n;
                }
                ((K.current = !0),
                    g(!1),
                    m(!0),
                    _({ entry: e, status: "restoring" }),
                    (0, Q.oB)(n, e.sha)
                        .then(
                            () => {
                                a() && _({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (_({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, y.P0)((0, b.o)(Y.intl.string(H.default.q6iZ84), j.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (K.current = !1);
                        }));
            },
            [t],
        ),
        eC = (0, c.bG)([$.A], () => $.A.isBuilderPreviewMobile()),
        eA = Y.intl.string(eC ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        eN = l.useCallback(() => (0, X.GG)(!eC), [eC]),
        eE = (0, z.A)(t?.preview_application_id ?? null, e2.sd),
        eI = (0, e2.x1)(eE) && eE.data.proxyTicketRefreshing,
        eS = l.useCallback(() => {
            null == eE || eI || T.A.refreshProxyTicket(eE.id);
        }, [eE, eI]),
        eP = l.useCallback(() => {
            var e, n;
            (null != t && ((e = t.id), (n = eE?.id), (0, Q.Bn)(e), (0, eO.A)().leaveFrame(n)), s());
        }, [t, eE?.id, s]),
        eR = l.useCallback(() => {
            null != t && (m(!0), (0, Q.dv)(t.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [t]),
        e_ = eg(
            l.useCallback(
                (e) => {
                    if (null == t) return;
                    let n = t.id,
                        a = em(e);
                    null != a
                        ? (0, y.P0)((0, b.o)(a, j.Ck.FAILURE))
                        : (0, u.A)({
                              title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: t.name }),
                              subtitle: Y.intl.string(H.default["6syXoH"]),
                              confirmText: Y.intl.string(H.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await ep(n, e, Y.intl.string(H.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, b.o)(Y.intl.string(H.default["02GpNr"]), j.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eD = l.useCallback(() => {
            null != t && (0, e$.A)(t, r);
        }, [t, r]),
        ez = l.useCallback(async () => {
            if (null == F || B.current !== F) return;
            U.current?.abort();
            let e = new AbortController();
            ((U.current = e), G(null));
            try {
                await (0, X.U1)(F, e.signal);
            } catch {
            } finally {
                e.signal.aborted || U.current !== e || B.current !== F || G(F);
            }
        }, [F]);
    l.useEffect(
        () => (
            ez(),
            () => {
                (U.current?.abort(), (U.current = null));
            }
        ),
        [ez],
    );
    let eM = W?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eL = l.useCallback(async () => {
            null == t ||
                (t.guild_id === eM && t.preview_guild_id === eM) ||
                (await (0, X.M7)(t.id, { guild_id: eM, preview_guild_id: eM }));
        }, [eM, t]),
        eF = l.useCallback(async () => {
            try {
                await eL();
            } catch {}
            await ez();
        }, [ez, eL]),
        eB = l.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                q.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: Z ?? null,
                    guildId: eM,
                    onClose: () => {
                        eF();
                    },
                });
        }, [eF, eM, Z, t]),
        eY = ec
            ? { type: "permissions", onReviewPermissions: eB, loading: ee || et }
            : et && null == W
              ? { type: "checking" }
              : void 0;
    l.useEffect(() => {
        null == t && a && (0, M.pX)(eJ.BVt.CHANNEL(r, eV.VV.VIBEGRATIONS));
    }, [r, t, a]);
    let eK = l.useCallback((e) => {
            d(!0);
            let t = (0, Q.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(Y.intl.string(H.default.fNP6Cd));
                (0, X.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, b.o)(e instanceof Error ? e.message : Y.intl.string(H.default.fNP6Cd), j.Ck.FAILURE),
                        );
                    })
                    .finally(() => d(!1)),
                t
            );
        }, []),
        eq = l.useCallback(() => {
            if (null == t) return;
            if (!en) return void eW(eU.NO_PREVIEW);
            if (ec) return void eW(eU.PERMISSIONS);
            if ("user" === t.install_scope)
                return void eK(t.id)
                    .then(() => {
                        (0, y.P0)((0, b.o)(Y.intl.string(H.default.wA0o0L), j.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, Q.$C)(t.id);
            (e.catch(() => {}),
                (0, eZ.A)({
                    projectId: t.id,
                    guildId: r,
                    applicationId: t.application_id,
                    projectName: t.name,
                    publish: eK(t.id),
                    initialDraft: e,
                }));
        }, [r, ec, en, t, eK]),
        e7 = (0, i.jsx)(eH, {
            title: t?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: e6.FO,
                          children: [
                              ei.showModeSwitch ? (0, i.jsx)(ek, { modes: ei.modes, mode: er, onChange: eo }) : null,
                              (0, i.jsx)(v.m, {
                                  text: eA,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(w.K, {
                                      icon: eC ? e8 : e9,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eA,
                                      "aria-pressed": eC,
                                      onClick: eN,
                                  }),
                              }),
                              "frame" === er ? (0, i.jsx)(es.A, { frame: eE, controlProjectId: t.id }) : null,
                              (0, i.jsx)("div", { className: e6.YJ }),
                              P
                                  ? (0, i.jsx)(v.m, {
                                        text: Y.intl.string(H.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(w.K, {
                                            icon: C.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": Y.intl.string(H.default["8MLfBT"]),
                                            "aria-pressed": I,
                                            onClick: ej,
                                        }),
                                    })
                                  : null,
                              ef
                                  ? null
                                  : (0, i.jsx)(v.m, {
                                        text: ex,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(w.K, {
                                            icon: e1,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": ex,
                                            "aria-pressed": ef,
                                            onClick: ey,
                                        }),
                                    }),
                              (0, J.PV)(t)
                                  ? (0, i.jsx)(v.m, {
                                        text: Y.intl.string(H.default["xhcY+n"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(w.K, {
                                            icon: k.SettingsIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": Y.intl.string(H.default["xhcY+n"]),
                                            onClick: () => (0, eT.A)(t.id, t.guild_id ?? r),
                                        }),
                                    })
                                  : null,
                              (0, J.jf)(t)
                                  ? (0, i.jsx)(v.m, {
                                        text: eh,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(w.K, {
                                            icon: e3,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": eh,
                                            loading: o,
                                            disabled: eu,
                                            onClick: eq,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(eG, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, J.PV)(t),
                                  canRemix: (0, J.H_)(t),
                                  onRefresh: (0, e2.x1)(eE) ? eS : void 0,
                                  isRefreshing: eI,
                                  onClose: eP,
                                  onExport: eR,
                                  onImport: e_.open,
                                  onRemix: eD,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eX.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, i.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      R?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (m(!0), S(!1), E(!1), g(!0));
                                            },
                                  onRestorePoints: () => {
                                      (m(!0), S(!1), g(!1), E(!0));
                                  },
                                  refreshApplicationId:
                                      ei.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ei.profileState
                                          ? ed
                                          : null,
                                  previewProjectId: t.id,
                              }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: e6.nj,
        children: [
            e_.input,
            (0, i.jsx)("main", {
                className: e6.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: e6.j5,
                              children: [
                                  e7,
                                  (0, i.jsxs)("div", {
                                      className: e6.sD,
                                      children: [
                                          (0, i.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(H.default.F2dRba),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(H.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(H.default["42EdIV"]),
                                              onClick: () => (0, X.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              el.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: e2.sd,
                                  header: e7,
                                  chatOpen: p,
                                  onCloseChat: eb,
                                  versionHistoryOpen: h,
                                  onCloseVersionHistory: () => g(!1),
                                  restorePointsOpen: f,
                                  onCloseRestorePoints: () => E(!1),
                                  installScope: t.install_scope,
                                  debugOpen: P && I,
                                  onCloseDebug: ev,
                                  onRestoreVersion: ew,
                                  restoreState: R,
                                  previewReady: en,
                                  previewGate: eY,
                                  availability: ei,
                                  activeMode: er,
                                  widgetApplicationId: ed,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e4(e) {
    let {
            projects: t,
            sharedProjects: n,
            fetchState: a,
            idea: s,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: h,
            modelSettings: g,
            onModelSettingsChange: y,
            onSelectProject: b,
            onIdeaChange: j,
            onCreate: v,
            onImportNewProject: w,
            importing: C,
        } = e,
        k = l.useMemo(
            () =>
                n
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [n],
        ),
        D = l.useRef(null);
    l.useEffect(() => {
        null != h && D.current?.querySelector("button")?.focus();
    }, [h]);
    let T = l.useMemo(
            () =>
                t
                    .filter((e) => (0, W.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        z = Y.intl.string(H.default.TU9IGR),
        M = [
            Y.intl.string(H.default["E+Q26x"]),
            Y.intl.string(H.default["06/jqP"]),
            Y.intl.string(H.default["3gSfUa"]),
        ],
        V = [
            {
                id: "feature-showcase",
                name: Y.intl.string(H.default.BLDsiz),
                description: Y.intl.string(H.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: Y.intl.string(H.default["+abXa8"]),
                description: Y.intl.string(H.default.OZYPMR),
            },
        ],
        L = Y.intl.string(H.default.FYK2xQ),
        G = Y.intl.string(H.default["/SUK82"]),
        F = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || v());
            },
            [u, v],
        );
    return (0, i.jsxs)("div", {
        className: r()(e6.nj, e6.a0),
        children: [
            (0, i.jsx)(eH, { title: Y.intl.string(H.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: e6.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: e6.ps,
                        children: [
                            (0, i.jsx)(E.Ip, {
                                className: e6.Yy,
                                children: (0, i.jsx)("div", {
                                    className: e6.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(e6.Qs, e6.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: Y.intl.string(H.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e6.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e6.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: Y.intl.string(H.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e6.Aw,
                                                        children: V.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e6.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": Y.intl.formatToPlainString(
                                                                            H.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(e6.nx, e6.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return v(
                                                                                      ((t = e.name),
                                                                                      Y.intl.formatToPlainString(
                                                                                          H.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e6.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e6.BK,
                                                                                variant: "text-sm/normal",
                                                                                color: "text-subtle",
                                                                                children: e.description,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e6.WI,
                                                "aria-label": G,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e6.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: Y.intl.string(H.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e6.Aw,
                                                        children: M.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e6.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: e6.nx,
                                                                        onClick: d ? void 0 : () => v(e),
                                                                        children: (0, i.jsx)(x.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: e6.un,
                                                                            children: e,
                                                                        }),
                                                                    }),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(ei, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: e6.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(e6.Qs, e6.DA),
                                    children: [
                                        (0, i.jsx)(I.f, {
                                            label: z,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: z,
                                            error: c,
                                            onChange: j,
                                            onKeyDown: F,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: e6.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: e6.gH,
                                                    ref: D,
                                                    children: (0, i.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: Y.intl.string(H.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: Y.intl.string(H.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: Y.intl.string(H.default.MLg0S8),
                                                                options: ey.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: Y.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: h,
                                                    }),
                                                }),
                                                (0, i.jsx)(ej.A, {
                                                    settings: g ?? U.Cl,
                                                    choices: (0, Z.e)()
                                                        ? {
                                                              main: [...O.S8.main, ...O.wF.main],
                                                              subagent: [...O.S8.subagent, ...O.wF.subagent],
                                                              thinking: O.S8.thinking,
                                                          }
                                                        : O.S8,
                                                    disabled: d,
                                                    onChange: y,
                                                }),
                                                (0, i.jsx)(N.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: Y.intl.string(Y.t.CumH4u),
                                                    disabled: u,
                                                    loading: d,
                                                    onClick: () => v(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("aside", {
                        className: e6.pA,
                        "aria-label": Y.intl.string(H.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: e6.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e6.RM,
                                        children: [
                                            (0, i.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: Y.intl.string(H.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: Y.intl.string(H.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(eb, { importing: C, onImport: w }),
                                ],
                            }),
                            (0, i.jsxs)(E.Ip, {
                                className: e6.xe,
                                children: [
                                    (null == a || "loading" === a.type) && 0 === T.length
                                        ? (0, i.jsx)("div", { className: e6.E8, children: (0, i.jsx)(P.y, {}) })
                                        : a?.type === "error" && 0 === T.length
                                          ? (0, i.jsxs)("div", {
                                                className: e6.E8,
                                                children: [
                                                    (0, i.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e6.JS,
                                                        children: Y.intl.string(H.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: Y.intl.string(H.default["42EdIV"]),
                                                        onClick: () => (0, X.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === T.length
                                            ? (0, i.jsx)("div", {
                                                  className: e6.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: e6.ST,
                                                      children: [
                                                          (0, i.jsx)(R.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: e6.sI,
                                                              children: Y.intl.string(H.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: e6.Dq,
                                                  children: T.map((e) =>
                                                      (0, i.jsx)(
                                                          e7,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => b(e.id),
                                                              onRemix: () => (0, e$.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    k.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: e6.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e6.uc,
                                                      children: [
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: Y.intl.string(H.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: Y.intl.string(H.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e6.Dq,
                                                      children: k.map((e) =>
                                                          (0, i.jsx)(
                                                              e7,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => b(e.id),
                                                                  onRemix: () => (0, e$.A)(e, o),
                                                              },
                                                              e.id,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function te(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, c.yK)([J.Ay], () => J.Ay.getOwnedProjects()),
        r = (0, c.bG)([J.Ay], () => J.Ay.getProjectsFetchState()),
        o = (0, c.yK)([J.Ay], () => J.Ay.getSharedProjects(n), [n]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(n)?.roles ?? [], [n]),
        u = (0, c.bG)(
            [G.A, F.A],
            () => {
                let e = G.A.getGuild(n);
                return null != e && F.A.can(eJ.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [p, m] = l.useState(""),
        h = a ?? null,
        [g, f] = l.useState(!1),
        [x, v] = l.useState(null),
        [w, C] = l.useState("guild"),
        [k, A] = l.useState(null),
        [N, E] = l.useState(null);
    (l.useEffect(() => {
        (0, X.hF)(n);
    }, [n, d, u]),
        l.useEffect(() => {
            (0, X.dm)(n, h);
        }, [n, h]));
    let I = l.useCallback((e) => {
            (C(e), A(null));
        }, []),
        S = l.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    a = ee({ idea: t, installScope: w, submitting: g });
                if ("idea" !== a && "submitting" !== a) {
                    if (null == w) return void A(Y.intl.string(H.default.jQ3nQB));
                    (null != e && m(e), f(!0), v(null));
                    try {
                        let e = await (0, X.gA)({ guild_id: n, install_scope: w });
                        ((0, Q.Hc)(e),
                            (0, Q.r2)(e, N ?? U.Cl),
                            (0, Q.dv)(e, t),
                            (0, M.pX)(eJ.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS, e)),
                            m(""),
                            E(null));
                    } catch (e) {
                        v((0, K.Xd)(e));
                    } finally {
                        f(!1);
                    }
                }
            },
            [w, n, p, N, g],
        ),
        [P, R] = l.useState(!1),
        _ = l.useCallback(
            async (e, t) => {
                let a = em(e);
                if (null != a) return void (0, y.P0)((0, b.o)(a, j.Ck.FAILURE));
                R(!0);
                let i = null;
                try {
                    ((i = await (0, X.gA)({ guild_id: n, install_scope: t })),
                        (0, Q.Hc)(i),
                        (0, Q.r2)(i, N ?? U.Cl),
                        await ep(i, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, M.pX)(eJ.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS, i)),
                        E(null));
                } catch {
                    (null != i && (await (0, X.xx)(i).catch(() => void 0)),
                        (0, y.P0)((0, b.o)(Y.intl.string(H.default["02GpNr"]), j.Ck.FAILURE)));
                } finally {
                    R(!1);
                }
            },
            [n, N],
        ),
        D = l.useCallback(
            (e) => {
                (0, M.pX)(eJ.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        T = l.useCallback(() => {
            (0, M.pX)(eJ.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS));
        }, [n]),
        z = l.useCallback((e) => {
            (m(e), v(null));
        }, []),
        V = (0, c.bG)(
            [J.Ay],
            () => {
                if (null == h) return null;
                let e = J.Ay.getProject(h);
                return null == e || (0, J.PV)(e) || e.guild_id === n ? e : null;
            },
            [h, n],
        ),
        B = (0, c.bG)([J.Ay], () => J.Ay.hasFetchedGuildProjects(n), [n]);
    return null != h
        ? (0, i.jsx)(e5, { project: V, projectsLoaded: B, onBack: T, guildId: n }, h)
        : (0, i.jsx)(e4, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: N,
              onModelSettingsChange: E,
              idea: p,
              guildId: n,
              submitting: g,
              createError: x,
              createDisabled: "idea" === (t = ee({ idea: p, installScope: w, submitting: g })) || "submitting" === t,
              onSelectProject: D,
              onIdeaChange: z,
              onCreate: S,
              onImportNewProject: _,
              importing: P,
              installScope: w,
              onInstallScopeChange: I,
              installScopeError: k,
          });
}
