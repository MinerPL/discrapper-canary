n.r(t), n.d(t, { default: () => e4 });
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
    Y = n(50617),
    H = n(375708),
    O = n(673724),
    K = n(948230),
    X = n(976713),
    U = n(692200),
    q = n(683180),
    W = n(208137),
    Z = n(805332),
    $ = n(277977),
    Q = n(972786);
function J(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ee = n(58703);
let et = [
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
var en = n(413927);
function ea() {
    let e = et.slice(0, 3);
    if (0 === e.length) return null;
    let t = H.intl.string(Y.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: en.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: en.bZ,
                children: [
                    (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: H.intl.string(Y.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: en.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: en.S3,
                            children: [
                                (0, i.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: en.VO,
                                    children: (0, ee.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
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
var ei = n(86303),
    el = n(210744),
    es = n(922016),
    er = n(980707),
    eo = n(477782),
    ed = n(81369),
    ec = n(402879);
async function eu(e, t, n) {
    (0, $.Hc)(e);
    let a = await (0, $.vX)(e, t);
    (0, $.dv)(e, n, [a]);
}
function ep(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, O.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(Y.default.AzziHF, { size: (0, O.ZJ)((0, O.yr)(t)) });
}
async function em(e, t) {
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
        i = await (0, $.cS)(e, a);
    await (0, ec.F)(i, a);
}
function eh(e) {
    let t = l.useRef(null),
        n = l.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                (t.target.value = ""), null != n && e(n);
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
var eg = n(950305),
    ef = n(664121);
let ex = [
    { value: "user", icon: eg.UserIcon, nameMessage: Y.default.iqXIRN },
    { value: "guild", icon: ef.R, nameMessage: Y.default.LdgKdI },
];
function ey(e) {
    let { importing: t, onImport: n } = e,
        a = l.useRef(null),
        s = eh(l.useCallback((e) => n(e, "user"), [n])),
        r = eh(l.useCallback((e) => n(e, "guild"), [n])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(es.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: es.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(er.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": H.intl.string(Y.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(eo.rX, {
                            label: H.intl.string(Y.default.MLg0S8),
                            children: ex
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: H.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        eo.Dr,
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
                        icon: ed.H,
                        text: H.intl.string(Y.default["NHP2+t"]),
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
var eb = n(113491),
    ej = n(629584),
    ev = n(148853),
    ew = n(491920);
function eC(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        o = l.useMemo(() => t.map((e) => ({ value: e, name: (0, ev.kZ)(e), "aria-controls": (0, ev.z3)(e) })), [t]),
        d = l.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, i.jsx)(ej.I, {
              role: "tablist",
              look: "pill",
              className: r()(ew.b, s),
              optionClassName: ew.u,
              options: o,
              value: n,
              onChange: d,
          });
}
var ek = n(663417),
    eA = n(70688),
    eN = n(173936),
    eE = n(473935),
    eI = n(365199),
    eS = n(770818),
    eP = n(147036),
    eR = n(957565),
    e_ = n(557875),
    eD = n(869369),
    eT = n(123917);
let ez = new Set();
n(321073);
var eM = n(746080);
let eV = [];
function eL(e) {
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
        { pending: I, refresh: S } = (0, eS.A)(A ?? null),
        { pending: P, connect: R } = (function (e) {
            let [t, n] = l.useState(ez),
                a = l.useRef(ez),
                i = l.useCallback((e) => {
                    (a.current = (0, e_.Q6)(a.current, e)), n(a.current);
                }, []);
            return {
                pending: t,
                connect: l.useCallback(
                    (t) => {
                        if (null == e) return;
                        let l = (0, e_.K9)(a.current, t.type);
                        async function s() {
                            let n = await (0, $.JI)(e, t.type);
                            if ((i(t.type), "url" === n.type)) return void (0, eT.h)({ href: n.url, trusted: !1 });
                            let a =
                                "setup" === (0, e_.rq)(n.error)
                                    ? H.intl.string(Y.default.avu1u4)
                                    : H.intl.string(Y.default["5fwOcF"]);
                            (0, y.P0)((0, b.o)(a, j.Ck.FAILURE));
                        }
                        null != l && ((a.current = l), n(l), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(N ?? null),
        _ = (0, c.bG)([$.Ay], () => (null == N ? eV : $.Ay.getDeclaredConnections(N))),
        D = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: i } = e,
                l = [];
            for (let { connection: e, offer: s } of (t &&
                l.push({
                    id: "preview-refresh",
                    label: H.intl.string(Y.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                l.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(Y.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(Y.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return l;
        })({
            canRefresh: null != A,
            refreshPending: I,
            offers: l.useMemo(() => (0, e_.Xl)(_), [_]),
            connectPending: P,
        }),
        T = l.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        z = null != m && o,
        M = r && null != p,
        V = z || null != d || M || null != h || null != g || null != f,
        L = eR.p5 && null != a,
        G = eR.p5;
    return null != x || null != C || V || G || r
        ? (0, i.jsx)(es.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "right",
              animation: es.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsxs)(er.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": H.intl.string(H.t.ogxXGq),
                      onClose: l,
                      onSelect: l,
                      children: [
                          null != x || null != C
                              ? (0, i.jsxs)(eo.rX, {
                                    children: [
                                        null != x
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "refresh",
                                                  icon: ek.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ek.RefreshIcon },
                                                  label: H.intl.string(Y.default.xKexN1),
                                                  disabled: v,
                                                  action: x,
                                              })
                                            : null,
                                        null != C
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "close",
                                                  icon: eA.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eA.DoorExitIcon },
                                                  label: H.intl.string(Y.default.Ea0Wrr),
                                                  action: C,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          D.length > 0
                              ? (0, i.jsx)(eo.rX, {
                                    children: D.map((e) =>
                                        (0, i.jsx)(
                                            eo.Dr,
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
                              ? (0, i.jsxs)(eo.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "remix",
                                                  label: H.intl.string(Y.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "export",
                                                  label: H.intl.string(Y.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        M
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "import",
                                                  label: H.intl.string(Y.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "connect-tool",
                                                  label: H.intl.string(Y.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "version-history",
                                                  label: H.intl.string(Y.default.jAWwzi),
                                                  action: g,
                                              })
                                            : null,
                                        null != f
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "restore-points",
                                                  label: H.intl.string(Y.default.FRjicO),
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          G
                              ? (0, i.jsxs)(eo.rX, {
                                    children: [
                                        L
                                            ? (0, i.jsx)(eo.Dr, {
                                                  id: "copy-link",
                                                  label: H.intl.string(H.t.WqhZss),
                                                  icon: eN.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eN.LinkIcon },
                                                  action: () =>
                                                      (0, eR.C)((0, eP.n)(a, eM.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, b.o)(H.intl.string(H.t["L/PwZf"]), j.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, i.jsx)(eo.Dr, {
                                            id: "copy-project-id",
                                            label: H.intl.string(Y.default.b4TqpT),
                                            icon: eE.L,
                                            leadingAccessory: { type: "icon", icon: eE.L },
                                            action: () =>
                                                (0, eR.C)(t, () =>
                                                    (0, y.P0)((0, b.o)(H.intl.string(Y.default.WOKsTg), j.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(eo.rX, {
                                    children: [
                                        (0, i.jsx)(eo.Dr, {
                                            id: "settings",
                                            label: H.intl.string(Y.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, eD.A)(t, s ?? a),
                                        }),
                                        (0, i.jsx)(eo.Dr, {
                                            id: "delete",
                                            label: H.intl.string(H.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: H.intl.formatToPlainString(Y.default.ZokHVz, { name: n }),
                                                    subtitle: H.intl.string(Y.default.NmF939),
                                                    confirmText: H.intl.string(H.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, K.xx)(t)).ok)
                                                            throw Error(H.intl.string(Y.default.tqKZCi));
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
                      icon: eI.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": H.intl.string(H.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": n,
                  });
              },
          })
        : null;
}
var eG = n(742589),
    eF = n(769979);
function eB(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, i.jsx)(eG.A, {
        hideSearch: !0,
        toolbar: n,
        className: eF.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eF.QF,
            children: [
                (0, i.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eF.Kk,
                }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eG.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, i.jsx)(eG.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eG.A.Title, { className: eF.Qw, wrapperClassName: eF.DD, children: t }),
            ],
        }),
    });
}
var eY = n(321593),
    eH = n(580954),
    eO = n(192308),
    eK = n(189213),
    eX = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function eU(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        l = "permissions" === t;
    return (0, i.jsx)(eK.Modal, {
        transitionState: n,
        onClose: a,
        title: H.intl.string(l ? Y.default.Rtlv25 : Y.default["+UouPe"]),
        subtitle: H.intl.string(l ? Y.default["nDQB/b"] : Y.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(l ? H.t.BddRzS : Y.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function eq(e) {
    (0, eO.openModal)((t) => (0, i.jsx)(eU, { ...t, reason: e }));
}
var eW = n(480007),
    eZ = n(584936),
    e$ = n(899154),
    eQ = n(652215),
    eJ = n(675210),
    e0 = n(165610),
    e2 = n(352978);
function e6(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e1(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
    return (0, i.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e8(e) {
    return (0, i.jsx)(g.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e3(e) {
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
                    (0, y.P0)((0, b.o)(H.intl.formatToPlainString(Y.default.u9TapG, { name: n }), j.Ck.MESSAGE)),
                    em(t, n)
                        .catch((e) => {
                            let n;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof $._v ? e.status : null)
                                            ? H.intl.string(Y.default.uB40Hz)
                                            : 404 === n
                                              ? H.intl.string(Y.default.wCq2jC)
                                              : H.intl.string(Y.default.G2GqyP),
                                        j.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (r = eh(
                    l.useCallback(
                        (e) => {
                            let a = ep(e);
                            null != a
                                ? (0, y.P0)((0, b.o)(a, j.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: n }),
                                      subtitle: H.intl.string(Y.default["6syXoH"]),
                                      confirmText: H.intl.string(Y.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, M.pX)(eQ.BVt.CHANNEL(c, eM.VV.VIBEGRATIONS, t));
                                          try {
                                              await eu(t, e, H.intl.string(Y.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), j.Ck.FAILURE));
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
                : H.intl.formatToPlainString(Y.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: e2.OY,
        children: [
            (0, i.jsx)(eY.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: e2.W6,
                onClick: p,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: B.Ay.getApplicationIconURL({ id: g, icon: v?.icon, size: 40 }),
                        className: e2.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: e2.MM,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: e2.j1,
                                children: o.name,
                            }),
                            null == w
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e2.h3,
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
                className: e2.M2,
                children: (0, i.jsxs)("div", {
                    className: e2.Pl,
                    children: [
                        (0, i.jsx)(eL, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, Q.PV)(o),
                            canRemix: (0, Q.H_)(o),
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
function e7(e) {
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
        X = l.useRef(!1),
        q = l.useRef(null);
    (B.current = F),
        l.useEffect(
            () => (
                (O.current = !0),
                () => {
                    O.current = !1;
                }
            ),
            [],
        );
    let W = (0, c.bG)([Q.Ay], () => (null == F ? null : Q.Ay.getIntegrationStatus(F)), [F]),
        { data: J, isLoading: ee } = (0, D.YY)(t?.preview_application_id ?? void 0),
        et = null != F && L !== F,
        en = W?.preview_ready === !0,
        ea = W?.has_activity === !0,
        {
            availability: es,
            activeMode: er,
            setMode: eo,
            widgetApplicationId: ed,
        } = (0, e$.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: ea,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: W?.owner_authorization_revoked === !0,
        }),
        ec = (0, eJ.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: en,
            integrationInstalled: W?.integration_installed ?? null,
            botPermissionsChanged: W?.bot_permissions_changed === !0,
        }),
        em = o || et || ee,
        eg = H.intl.string(Y.default["5gU57O"]),
        ef = p && !I && !h && !f,
        ex = H.intl.string(ef ? Y.default.YdgE0j : Y.default.aWVf4j),
        ey = l.useCallback(() => {
            if (I || h || f) {
                S(!1), g(!1), E(!1), m(!0);
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
                if (null == t || X.current) return;
                let n = t.id;
                function a() {
                    return O.current && B.current === n;
                }
                (X.current = !0),
                    g(!1),
                    m(!0),
                    _({ entry: e, status: "restoring" }),
                    (0, $.oB)(n, e.sha)
                        .then(
                            () => {
                                a() && _({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (_({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, y.P0)((0, b.o)(H.intl.string(Y.default.q6iZ84), j.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (X.current = !1);
                        });
            },
            [t],
        ),
        ek = (0, c.bG)([Z.A], () => Z.A.isBuilderPreviewMobile()),
        eA = H.intl.string(ek ? Y.default["3uCc8U"] : Y.default["+nzCxZ"]),
        eN = l.useCallback(() => (0, K.GG)(!ek), [ek]),
        eE = (0, z.A)(t?.preview_application_id ?? null, e0.sd),
        eI = (0, e0.x1)(eE) && eE.data.proxyTicketRefreshing,
        eS = l.useCallback(() => {
            null == eE || eI || T.A.refreshProxyTicket(eE.id);
        }, [eE, eI]),
        eP = l.useCallback(() => {
            var e, n;
            null != t && ((e = t.id), (n = eE?.id), (0, $.Bn)(e), (0, eH.A)().leaveFrame(n)), s();
        }, [t, eE?.id, s]),
        eR = l.useCallback(() => {
            null != t && (m(!0), (0, $.dv)(t.id, H.intl.string(Y.default["2ejwtJ"])));
        }, [t]),
        e_ = eh(
            l.useCallback(
                (e) => {
                    if (null == t) return;
                    let n = t.id,
                        a = ep(e);
                    null != a
                        ? (0, y.P0)((0, b.o)(a, j.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(Y.default["6syXoH"]),
                              confirmText: H.intl.string(Y.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await eu(n, e, H.intl.string(Y.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), j.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eT = l.useCallback(() => {
            null != t && (0, eZ.A)(t, r);
        }, [t, r]),
        ez = l.useCallback(async () => {
            if (null == F || B.current !== F) return;
            q.current?.abort();
            let e = new AbortController();
            (q.current = e), G(null);
            try {
                await (0, K.U1)(F, e.signal);
            } catch {
            } finally {
                e.signal.aborted || q.current !== e || B.current !== F || G(F);
            }
        }, [F]);
    l.useEffect(
        () => (
            ez(),
            () => {
                q.current?.abort(), (q.current = null);
            }
        ),
        [ez],
    );
    let eV = W?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eG = l.useCallback(async () => {
            null == t ||
                (t.guild_id === eV && t.preview_guild_id === eV) ||
                (await (0, K.M7)(t.id, { guild_id: eV, preview_guild_id: eV }));
        }, [eV, t]),
        eF = l.useCallback(async () => {
            try {
                await eG();
            } catch {}
            await ez();
        }, [ez, eG]),
        eY = l.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                U.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: J ?? null,
                    guildId: eV,
                    onClose: () => {
                        eF();
                    },
                });
        }, [eF, eV, J, t]),
        eK = ec
            ? { type: "permissions", onReviewPermissions: eY, loading: ee || et }
            : et && null == W
              ? { type: "checking" }
              : void 0;
    l.useEffect(() => {
        null == t && a && (0, M.pX)(eQ.BVt.CHANNEL(r, eM.VV.VIBEGRATIONS));
    }, [r, t, a]);
    let eU = l.useCallback((e) => {
            d(!0);
            let t = (0, $.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(H.intl.string(Y.default.fNP6Cd));
                (0, K.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, b.o)(e instanceof Error ? e.message : H.intl.string(Y.default.fNP6Cd), j.Ck.FAILURE),
                        );
                    })
                    .finally(() => d(!1)),
                t
            );
        }, []),
        e3 = l.useCallback(() => {
            if (null == t) return;
            if (!en) return void eq(eX.NO_PREVIEW);
            if (ec) return void eq(eX.PERMISSIONS);
            if ("user" === t.install_scope)
                return void eU(t.id)
                    .then(() => {
                        (0, y.P0)((0, b.o)(H.intl.string(Y.default.wA0o0L), j.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, $.$C)(t.id);
            e.catch(() => {}),
                (0, eW.A)({
                    projectId: t.id,
                    guildId: r,
                    applicationId: t.application_id,
                    projectName: t.name,
                    publish: eU(t.id),
                    initialDraft: e,
                });
        }, [r, ec, en, t, eU]),
        e7 = (0, i.jsx)(eB, {
            title: t?.name ?? H.intl.string(Y.default.F2dRba),
            breadcrumb: { title: H.intl.string(Y.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: e2.FO,
                          children: [
                              es.showModeSwitch ? (0, i.jsx)(eC, { modes: es.modes, mode: er, onChange: eo }) : null,
                              (0, i.jsx)(v.m, {
                                  text: eA,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(w.K, {
                                      icon: ek ? e9 : e1,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eA,
                                      "aria-pressed": ek,
                                      onClick: eN,
                                  }),
                              }),
                              "frame" === er ? (0, i.jsx)(el.A, { frame: eE, controlProjectId: t.id }) : null,
                              (0, i.jsx)("div", { className: e2.YJ }),
                              P
                                  ? (0, i.jsx)(v.m, {
                                        text: H.intl.string(Y.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(w.K, {
                                            icon: C.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["8MLfBT"]),
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
                                            icon: e6,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": ex,
                                            "aria-pressed": ef,
                                            onClick: ey,
                                        }),
                                    }),
                              (0, Q.PV)(t)
                                  ? (0, i.jsx)(v.m, {
                                        text: H.intl.string(Y.default["xhcY+n"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(w.K, {
                                            icon: k.SettingsIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["xhcY+n"]),
                                            onClick: () => (0, eD.A)(t.id, t.guild_id ?? r),
                                        }),
                                    })
                                  : null,
                              (0, Q.jf)(t)
                                  ? (0, i.jsx)(v.m, {
                                        text: eg,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(w.K, {
                                            icon: e8,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": eg,
                                            loading: o,
                                            disabled: em,
                                            onClick: e3,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(eL, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, Q.PV)(t),
                                  canRemix: (0, Q.H_)(t),
                                  onRefresh: (0, e0.x1)(eE) ? eS : void 0,
                                  isRefreshing: eI,
                                  onClose: eP,
                                  onExport: eR,
                                  onImport: e_.open,
                                  onRemix: eT,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eO.openModalLazy)(async () => {
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
                                                m(!0), S(!1), E(!1), g(!0);
                                            },
                                  onRestorePoints: () => {
                                      m(!0), S(!1), g(!1), E(!0);
                                  },
                                  refreshApplicationId:
                                      es.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== es.profileState
                                          ? ed
                                          : null,
                                  previewProjectId: t.id,
                              }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: e2.nj,
        children: [
            e_.input,
            (0, i.jsx)("main", {
                className: e2.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: e2.j5,
                              children: [
                                  e7,
                                  (0, i.jsxs)("div", {
                                      className: e2.sD,
                                      children: [
                                          (0, i.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: H.intl.string(Y.default.F2dRba),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: H.intl.string(Y.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: H.intl.string(Y.default["42EdIV"]),
                                              onClick: () => (0, K.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              ei.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: e0.sd,
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
                                  previewGate: eK,
                                  availability: es,
                                  activeMode: er,
                                  widgetApplicationId: ed,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e5(e) {
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
                    .filter((e) => (0, q.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        z = H.intl.string(Y.default.TU9IGR),
        M = [
            H.intl.string(Y.default["E+Q26x"]),
            H.intl.string(Y.default["06/jqP"]),
            H.intl.string(Y.default["3gSfUa"]),
        ],
        V = [
            {
                id: "feature-showcase",
                name: H.intl.string(Y.default.BLDsiz),
                description: H.intl.string(Y.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: H.intl.string(Y.default["+abXa8"]),
                description: H.intl.string(Y.default.OZYPMR),
            },
        ],
        L = H.intl.string(Y.default.FYK2xQ),
        G = H.intl.string(Y.default["/SUK82"]),
        F = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || v());
            },
            [u, v],
        );
    return (0, i.jsxs)("div", {
        className: r()(e2.nj, e2.a0),
        children: [
            (0, i.jsx)(eB, { title: H.intl.string(Y.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: e2.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: e2.ps,
                        children: [
                            (0, i.jsx)(E.Ip, {
                                className: e2.Yy,
                                children: (0, i.jsx)("div", {
                                    className: e2.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(e2.Qs, e2.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: H.intl.string(Y.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e2.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e2.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e2.Aw,
                                                        children: V.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e2.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": H.intl.formatToPlainString(
                                                                            Y.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(e2.nx, e2.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return v(
                                                                                      ((t = e.name),
                                                                                      H.intl.formatToPlainString(
                                                                                          Y.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e2.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e2.BK,
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
                                                className: e2.WI,
                                                "aria-label": G,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e2.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e2.Aw,
                                                        children: M.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e2.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: e2.nx,
                                                                        onClick: d ? void 0 : () => v(e),
                                                                        children: (0, i.jsx)(x.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: e2.un,
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
                                            (0, i.jsx)(ea, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: e2.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(e2.Qs, e2.DA),
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
                                            className: e2.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: e2.gH,
                                                    ref: D,
                                                    children: (0, i.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: H.intl.string(Y.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: H.intl.string(Y.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: H.intl.string(Y.default.MLg0S8),
                                                                options: ex.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: H.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: h,
                                                    }),
                                                }),
                                                (0, i.jsx)(eb.A, {
                                                    settings: g ?? X.Cl,
                                                    choices: (0, W.e)()
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
                                                    text: H.intl.string(H.t.CumH4u),
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
                        className: e2.pA,
                        "aria-label": H.intl.string(Y.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: e2.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e2.RM,
                                        children: [
                                            (0, i.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: H.intl.string(Y.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: H.intl.string(Y.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ey, { importing: C, onImport: w }),
                                ],
                            }),
                            (0, i.jsxs)(E.Ip, {
                                className: e2.xe,
                                children: [
                                    (null == a || "loading" === a.type) && 0 === T.length
                                        ? (0, i.jsx)("div", { className: e2.E8, children: (0, i.jsx)(P.y, {}) })
                                        : a?.type === "error" && 0 === T.length
                                          ? (0, i.jsxs)("div", {
                                                className: e2.E8,
                                                children: [
                                                    (0, i.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e2.JS,
                                                        children: H.intl.string(Y.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: H.intl.string(Y.default["42EdIV"]),
                                                        onClick: () => (0, K.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === T.length
                                            ? (0, i.jsx)("div", {
                                                  className: e2.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: e2.ST,
                                                      children: [
                                                          (0, i.jsx)(R.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: e2.sI,
                                                              children: H.intl.string(Y.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: e2.Dq,
                                                  children: T.map((e) =>
                                                      (0, i.jsx)(
                                                          e3,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => b(e.id),
                                                              onRemix: () => (0, eZ.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    k.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: e2.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e2.uc,
                                                      children: [
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: H.intl.string(Y.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: H.intl.string(Y.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e2.Dq,
                                                      children: k.map((e) =>
                                                          (0, i.jsx)(
                                                              e3,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => b(e.id),
                                                                  onRemix: () => (0, eZ.A)(e, o),
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
function e4(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, c.yK)([Q.Ay], () => Q.Ay.getOwnedProjects()),
        r = (0, c.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        o = (0, c.yK)([Q.Ay], () => Q.Ay.getSharedProjects(n), [n]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(n)?.roles ?? [], [n]),
        u = (0, c.bG)([G.A, F.A], () => {
            let e = G.A.getGuild(n);
            return null != e && F.A.can(eQ.xBc.MANAGE_GUILD, e);
        }, [n]),
        [p, m] = l.useState(""),
        h = a ?? null,
        [g, f] = l.useState(!1),
        [x, v] = l.useState(null),
        [w, C] = l.useState("guild"),
        [k, A] = l.useState(null),
        [N, E] = l.useState(null);
    l.useEffect(() => {
        (0, K.hF)(n);
    }, [n, d, u]),
        l.useEffect(() => {
            (0, K.dm)(n, h);
        }, [n, h]);
    let I = l.useCallback((e) => {
            C(e), A(null);
        }, []),
        S = l.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    a = J({ idea: t, installScope: w, submitting: g });
                if ("idea" !== a && "submitting" !== a) {
                    if (null == w) return void A(H.intl.string(Y.default.jQ3nQB));
                    null != e && m(e), f(!0), v(null);
                    try {
                        let e = await (0, K.gA)({ guild_id: n, install_scope: w });
                        (0, $.Hc)(e),
                            (0, $.r2)(e, N ?? X.Cl),
                            (0, $.dv)(e, t),
                            (0, M.pX)(eQ.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS, e)),
                            m(""),
                            E(null);
                    } catch (e) {
                        v(e instanceof Error ? e.message : H.intl.string(Y.default.KKkp5Y));
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
                let a = ep(e);
                if (null != a) return void (0, y.P0)((0, b.o)(a, j.Ck.FAILURE));
                R(!0);
                let i = null;
                try {
                    (i = await (0, K.gA)({ guild_id: n, install_scope: t })),
                        (0, $.Hc)(i),
                        (0, $.r2)(i, N ?? X.Cl),
                        await eu(i, e, H.intl.string(Y.default.KjEtrZ)),
                        (0, M.pX)(eQ.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS, i)),
                        E(null);
                } catch {
                    null != i && (await (0, K.xx)(i).catch(() => void 0)),
                        (0, y.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), j.Ck.FAILURE));
                } finally {
                    R(!1);
                }
            },
            [n, N],
        ),
        D = l.useCallback(
            (e) => {
                (0, M.pX)(eQ.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        T = l.useCallback(() => {
            (0, M.pX)(eQ.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS));
        }, [n]),
        z = l.useCallback((e) => {
            m(e), v(null);
        }, []),
        V = (0, c.bG)([Q.Ay], () => {
            if (null == h) return null;
            let e = Q.Ay.getProject(h);
            return null == e || (0, Q.PV)(e) || e.guild_id === n ? e : null;
        }, [h, n]),
        B = (0, c.bG)([Q.Ay], () => Q.Ay.hasFetchedGuildProjects(n), [n]);
    return null != h
        ? (0, i.jsx)(e7, { project: V, projectsLoaded: B, onBack: T, guildId: n }, h)
        : (0, i.jsx)(e5, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: N,
              onModelSettingsChange: E,
              idea: p,
              guildId: n,
              submitting: g,
              createError: x,
              createDisabled: "idea" === (t = J({ idea: p, installScope: w, submitting: g })) || "submitting" === t,
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
