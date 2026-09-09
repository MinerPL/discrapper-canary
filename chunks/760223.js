n.r(t), n.d(t, { default: () => e5 });
var i,
    a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(17928),
    u = n(314116),
    p = n(534890),
    m = n(646270),
    g = n(31300),
    h = n(794083),
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
    z = n(625180),
    T = n(672929),
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
    let { idea: t, installScope: n, submitting: i } = e;
    return i ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ee = n(58703);
let et = [
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
function ei() {
    let e = et.slice(0, 3);
    if (0 === e.length) return null;
    let t = H.intl.string(Y.default.x07mpp);
    return (0, a.jsxs)("section", {
        className: en.rN,
        "aria-label": t,
        children: [
            (0, a.jsxs)("div", {
                className: en.bZ,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: H.intl.string(Y.default.h5CwHI),
                    }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: en.V,
                children: e.map((e) =>
                    (0, a.jsxs)(
                        "li",
                        {
                            className: en.S3,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: en.VO,
                                    children: (0, ee.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                }),
                                (0, a.jsx)(x.E, {
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
var ea = n(86303),
    el = n(922016),
    es = n(980707),
    er = n(477782),
    eo = n(81369),
    ed = n(402879);
async function ec(e, t, n) {
    (0, $.Hc)(e);
    let i = await (0, $.vX)(e, t);
    (0, $.dv)(e, n, [i]);
}
function eu(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, O.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(Y.default.AzziHF, { size: (0, O.ZJ)((0, O.yr)(t)) });
}
async function ep(e, t) {
    let n,
        i =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        a = await (0, $.cS)(e, i);
    await (0, ed.F)(a, i);
}
function em(e) {
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
        input: (0, a.jsx)("input", {
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
    eh = n(664121);
let ef = [
    { value: "user", icon: eg.UserIcon, nameMessage: Y.default.iqXIRN },
    { value: "guild", icon: eh.R, nameMessage: Y.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: n } = e,
        i = l.useRef(null),
        s = em(l.useCallback((e) => n(e, "user"), [n])),
        r = em(l.useCallback((e) => n(e, "guild"), [n])),
        o = { user: s.open, guild: r.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(el.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: el.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(es.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": H.intl.string(Y.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(er.rX, {
                            label: H.intl.string(Y.default.MLg0S8),
                            children: ef
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: H.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        er.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: l } = n;
                    return (0, a.jsx)(N.$, {
                        ...e,
                        buttonRef: i,
                        variant: "secondary",
                        size: "sm",
                        icon: eo.H,
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
var ey = n(113491),
    eb = n(629584),
    ej = n(148853),
    ev = n(491920);
function ew(e) {
    let { modes: t, mode: n, onChange: i, className: s } = e,
        o = l.useMemo(() => t.map((e) => ({ value: e, name: (0, ej.kZ)(e), "aria-controls": (0, ej.z3)(e) })), [t]),
        d = l.useCallback(
            (e) => {
                i(e.value);
            },
            [i],
        );
    return null == n
        ? null
        : (0, a.jsx)(eb.I, {
              role: "tablist",
              look: "pill",
              className: r()(ev.b, s),
              optionClassName: ev.u,
              options: o,
              value: n,
              onChange: d,
          });
}
var eC = n(663417),
    ek = n(70688),
    eA = n(173936),
    eN = n(473935),
    eE = n(365199),
    eI = n(770818),
    eS = n(147036),
    eP = n(957565),
    eR = n(557875),
    e_ = n(869369),
    eD = n(123917);
let ez = new Set();
n(321073);
var eT = n(746080);
let eM = [];
function eV(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: i,
            projectGuildId: s,
            isOwner: r,
            canRemix: o,
            onExport: d,
            onImport: p,
            onRemix: m,
            onConnectTool: g,
            onVersionHistory: h,
            onRestorePoints: f,
            onRefresh: x,
            isRefreshing: v = !1,
            onClose: C,
            refreshApplicationId: A,
            previewProjectId: N,
        } = e,
        E = l.useRef(null),
        { pending: I, refresh: S } = (0, eI.A)(A ?? null),
        { pending: P, connect: R } = (function (e) {
            let [t, n] = l.useState(ez),
                i = l.useRef(ez),
                a = l.useCallback((e) => {
                    (i.current = (0, eR.Q6)(i.current, e)), n(i.current);
                }, []);
            return {
                pending: t,
                connect: l.useCallback(
                    (t) => {
                        if (null == e) return;
                        let l = (0, eR.K9)(i.current, t.type);
                        async function s() {
                            let n = await (0, $.JI)(e, t.type);
                            if ((a(t.type), "url" === n.type)) return void (0, eD.h)({ href: n.url, trusted: !1 });
                            let i =
                                "setup" === (0, eR.rq)(n.error)
                                    ? H.intl.string(Y.default.avu1u4)
                                    : H.intl.string(Y.default["5fwOcF"]);
                            (0, y.P0)((0, b.o)(i, j.Ck.FAILURE));
                        }
                        null != l && ((i.current = l), n(l), s().catch(() => a(t.type)));
                    },
                    [e, a],
                ),
            };
        })(N ?? null),
        _ = (0, c.bG)([$.Ay], () => (null == N ? eM : $.Ay.getDeclaredConnections(N))),
        D = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: i, connectPending: a } = e,
                l = [];
            for (let { connection: e, offer: s } of (t &&
                l.push({
                    id: "preview-refresh",
                    label: H.intl.string(Y.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            i))
                l.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(Y.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
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
            offers: l.useMemo(() => (0, eR.Xl)(_), [_]),
            connectPending: P,
        }),
        z = l.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        T = null != m && o,
        M = r && null != p,
        V = T || null != d || M || null != g || null != h || null != f,
        L = eP.p5 && null != i,
        G = eP.p5;
    return null != x || null != C || V || G || r
        ? (0, a.jsx)(el.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "right",
              animation: el.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, a.jsxs)(es.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": H.intl.string(H.t.ogxXGq),
                      onClose: l,
                      onSelect: l,
                      children: [
                          null != x || null != C
                              ? (0, a.jsxs)(er.rX, {
                                    children: [
                                        null != x
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "refresh",
                                                  icon: eC.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eC.RefreshIcon },
                                                  label: H.intl.string(Y.default.xKexN1),
                                                  disabled: v,
                                                  action: x,
                                              })
                                            : null,
                                        null != C
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "close",
                                                  icon: ek.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ek.DoorExitIcon },
                                                  label: H.intl.string(Y.default.Ea0Wrr),
                                                  action: C,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          D.length > 0
                              ? (0, a.jsx)(er.rX, {
                                    children: D.map((e) =>
                                        (0, a.jsx)(
                                            er.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void S();
                                                    let t = null == e.connectionType ? null : z.get(e.connectionType);
                                                    null != t && R(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          V
                              ? (0, a.jsxs)(er.rX, {
                                    children: [
                                        T
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "remix",
                                                  label: H.intl.string(Y.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "export",
                                                  label: H.intl.string(Y.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        M
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "import",
                                                  label: H.intl.string(Y.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != g
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "connect-tool",
                                                  label: H.intl.string(Y.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != h
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "version-history",
                                                  label: H.intl.string(Y.default.jAWwzi),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "restore-points",
                                                  label: H.intl.string(Y.default.FRjicO),
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          G
                              ? (0, a.jsxs)(er.rX, {
                                    children: [
                                        L
                                            ? (0, a.jsx)(er.Dr, {
                                                  id: "copy-link",
                                                  label: H.intl.string(H.t.WqhZss),
                                                  icon: eA.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eA.LinkIcon },
                                                  action: () =>
                                                      (0, eP.C)((0, eS.n)(i, eT.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, b.o)(H.intl.string(H.t["L/PwZf"]), j.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, a.jsx)(er.Dr, {
                                            id: "copy-project-id",
                                            label: H.intl.string(Y.default.b4TqpT),
                                            icon: eN.L,
                                            leadingAccessory: { type: "icon", icon: eN.L },
                                            action: () =>
                                                (0, eP.C)(t, () =>
                                                    (0, y.P0)((0, b.o)(H.intl.string(Y.default.WOKsTg), j.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          r
                              ? (0, a.jsxs)(er.rX, {
                                    children: [
                                        (0, a.jsx)(er.Dr, {
                                            id: "settings",
                                            label: H.intl.string(Y.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, e_.A)(t, s ?? i),
                                        }),
                                        (0, a.jsx)(er.Dr, {
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
                  return (0, a.jsx)(w.K, {
                      ...e,
                      buttonRef: E,
                      icon: eE.MoreHorizontalIcon,
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
var eL = n(742589),
    eG = n(769979);
function eF(e) {
    let { title: t, actions: n, breadcrumb: i } = e;
    return (0, a.jsx)(eL.A, {
        hideSearch: !0,
        toolbar: n,
        className: eG.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: eG.QF,
            children: [
                (0, a.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eG.Kk,
                }),
                null != i
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(eL.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, a.jsx)(eL.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)(eL.A.Title, { className: eG.Qw, wrapperClassName: eG.DD, children: t }),
            ],
        }),
    });
}
var eB = n(321593),
    eY = n(580954),
    eH = n(192308),
    eO = n(189213),
    eK = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function eX(e) {
    let { reason: t, transitionState: n, onClose: i } = e,
        l = "permissions" === t;
    return (0, a.jsx)(eO.Modal, {
        transitionState: n,
        onClose: i,
        title: H.intl.string(l ? Y.default.Rtlv25 : Y.default["+UouPe"]),
        subtitle: H.intl.string(l ? Y.default["nDQB/b"] : Y.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(l ? H.t.BddRzS : Y.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function eU(e) {
    (0, eH.openModal)((t) => (0, a.jsx)(eX, { ...t, reason: e }));
}
var eq = n(480007),
    eW = n(584936),
    eZ = n(899154),
    e$ = n(652215),
    eQ = n(675210),
    eJ = n(165610),
    e0 = n(352978);
function e2(e) {
    return (0, a.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e6(e) {
    return (0, a.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e1(e) {
    return (0, a.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
    return (0, a.jsx)(h.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e8(e) {
    let t,
        n,
        i,
        s,
        r,
        { project: o, guildId: c, onSelect: p, onRemix: m } = e,
        g =
            ((t = o.id),
            (n = o.name),
            (i = l.useRef(!1)),
            (s = l.useCallback(() => {
                i.current ||
                    ((i.current = !0),
                    (0, y.P0)((0, b.o)(H.intl.formatToPlainString(Y.default.u9TapG, { name: n }), j.Ck.MESSAGE)),
                    ep(t, n)
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
                            i.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (r = em(
                    l.useCallback(
                        (e) => {
                            let i = eu(e);
                            null != i
                                ? (0, y.P0)((0, b.o)(i, j.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: n }),
                                      subtitle: H.intl.string(Y.default["6syXoH"]),
                                      confirmText: H.intl.string(Y.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, M.pX)(e$.BVt.CHANNEL(c, eT.VV.VIBEGRATIONS, t));
                                          try {
                                              await ec(t, e, H.intl.string(Y.default.C7GU2r));
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
        h = o.preview_application_id ?? o.application_id,
        { data: v } = (0, D.YY)(h),
        w =
            null == o.updated_at
                ? null
                : H.intl.formatToPlainString(Y.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, a.jsxs)("div", {
        className: e0.OY,
        children: [
            (0, a.jsx)(eB.Ay, { projectId: o.id }),
            (0, a.jsxs)(f.D, {
                className: e0.W6,
                onClick: p,
                children: [
                    (0, a.jsx)("img", {
                        alt: "",
                        src: B.Ay.getApplicationIconURL({ id: h, icon: v?.icon, size: 40 }),
                        className: e0.VJ,
                    }),
                    (0, a.jsxs)("div", {
                        className: e0.MM,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: e0.j1,
                                children: o.name,
                            }),
                            null == w
                                ? null
                                : (0, a.jsx)("div", {
                                      className: e0.h3,
                                      children: (0, a.jsx)(x.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: w,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: e0.M2,
                children: (0, a.jsxs)("div", {
                    className: e0.Pl,
                    children: [
                        (0, a.jsx)(eV, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, Q.PV)(o),
                            canRemix: (0, Q.H_)(o),
                            onRemix: m,
                            onExport: g.onExport,
                            onImport: g.onImport,
                        }),
                        g.importInput,
                    ],
                }),
            }),
        ],
    });
}
function e3(e) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = e,
        [o, d] = l.useState(!1),
        [p, m] = l.useState(!0),
        [g, h] = l.useState(!1),
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
        ei = W?.has_activity === !0,
        {
            availability: el,
            activeMode: es,
            setMode: er,
            widgetApplicationId: eo,
        } = (0, eZ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: ei,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: W?.owner_authorization_revoked === !0,
        }),
        ed = (0, eQ.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: en,
            integrationInstalled: W?.integration_installed ?? null,
            botPermissionsChanged: W?.bot_permissions_changed === !0,
        }),
        ep = o || et || ee,
        eg = H.intl.string(Y.default["5gU57O"]),
        eh = p && !I && !g && !f,
        ef = H.intl.string(eh ? Y.default.YdgE0j : Y.default.aWVf4j),
        ex = l.useCallback(() => {
            if (I || g || f) {
                S(!1), h(!1), E(!1), m(!0);
                return;
            }
            m((e) => !e);
        }, [I, g, f]),
        ey = l.useCallback(() => m(!1), []),
        eb = l.useCallback(() => {
            S((e) => !e && (m(!0), h(!1), E(!1), !0));
        }, []),
        ej = l.useCallback(() => S(!1), []),
        ev = l.useCallback(
            (e) => {
                if (null == t || X.current) return;
                let n = t.id;
                function i() {
                    return O.current && B.current === n;
                }
                (X.current = !0),
                    h(!1),
                    m(!0),
                    _({ entry: e, status: "restoring" }),
                    (0, $.oB)(n, e.sha)
                        .then(
                            () => {
                                i() && _({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (_({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, y.P0)((0, b.o)(H.intl.string(Y.default.q6iZ84), j.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (X.current = !1);
                        });
            },
            [t],
        ),
        eC = (0, c.bG)([Z.A], () => Z.A.isBuilderPreviewMobile()),
        ek = H.intl.string(eC ? Y.default["3uCc8U"] : Y.default["+nzCxZ"]),
        eA = l.useCallback(() => (0, K.GG)(!eC), [eC]),
        eN = (0, T.A)(t?.preview_application_id ?? null, eJ.sd),
        eE = (0, eJ.x1)(eN) && eN.data.proxyTicketRefreshing,
        eI = l.useCallback(() => {
            null == eN || eE || z.A.refreshProxyTicket(eN.id);
        }, [eN, eE]),
        eS = l.useCallback(() => {
            var e, n;
            null != t && ((e = t.id), (n = eN?.id), (0, $.Bn)(e), (0, eY.A)().leaveFrame(n)), s();
        }, [t, eN?.id, s]),
        eP = l.useCallback(() => {
            null != t && (m(!0), (0, $.dv)(t.id, H.intl.string(Y.default["2ejwtJ"])));
        }, [t]),
        eR = em(
            l.useCallback(
                (e) => {
                    if (null == t) return;
                    let n = t.id,
                        i = eu(e);
                    null != i
                        ? (0, y.P0)((0, b.o)(i, j.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(Y.default["6syXoH"]),
                              confirmText: H.intl.string(Y.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await ec(n, e, H.intl.string(Y.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), j.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eD = l.useCallback(() => {
            null != t && (0, eW.A)(t, r);
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
    let eM = W?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eL = l.useCallback(async () => {
            null == t ||
                (t.guild_id === eM && t.preview_guild_id === eM) ||
                (await (0, K.M7)(t.id, { guild_id: eM, preview_guild_id: eM }));
        }, [eM, t]),
        eG = l.useCallback(async () => {
            try {
                await eL();
            } catch {}
            await ez();
        }, [ez, eL]),
        eB = l.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                U.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: J ?? null,
                    guildId: eM,
                    onClose: () => {
                        eG();
                    },
                });
        }, [eG, eM, J, t]),
        eO = ed
            ? { type: "permissions", onReviewPermissions: eB, loading: ee || et }
            : et && null == W
              ? { type: "checking" }
              : void 0;
    l.useEffect(() => {
        null == t && i && (0, M.pX)(e$.BVt.CHANNEL(r, eT.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let eX = l.useCallback((e) => {
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
        e8 = l.useCallback(() => {
            if (null == t) return;
            if (!en) return void eU(eK.NO_PREVIEW);
            if (ed) return void eU(eK.PERMISSIONS);
            if ("user" === t.install_scope)
                return void eX(t.id)
                    .then(() => {
                        (0, y.P0)((0, b.o)(H.intl.string(Y.default.wA0o0L), j.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, $.$C)(t.id);
            e.catch(() => {}),
                (0, eq.A)({
                    projectId: t.id,
                    guildId: r,
                    applicationId: t.application_id,
                    projectName: t.name,
                    publish: eX(t.id),
                    initialDraft: e,
                });
        }, [r, ed, en, t, eX]),
        e3 = (0, a.jsx)(eF, {
            title: t?.name ?? H.intl.string(Y.default.F2dRba),
            breadcrumb: { title: H.intl.string(Y.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, a.jsxs)("div", {
                          className: e0.FO,
                          children: [
                              el.showModeSwitch ? (0, a.jsx)(ew, { modes: el.modes, mode: es, onChange: er }) : null,
                              (0, a.jsx)(v.m, {
                                  text: ek,
                                  ariaHidden: !0,
                                  children: (0, a.jsx)(w.K, {
                                      icon: eC ? e1 : e6,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": ek,
                                      "aria-pressed": eC,
                                      onClick: eA,
                                  }),
                              }),
                              (0, a.jsx)("div", { className: e0.YJ }),
                              P
                                  ? (0, a.jsx)(v.m, {
                                        text: H.intl.string(Y.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, a.jsx)(w.K, {
                                            icon: C.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["8MLfBT"]),
                                            "aria-pressed": I,
                                            onClick: eb,
                                        }),
                                    })
                                  : null,
                              eh
                                  ? null
                                  : (0, a.jsx)(v.m, {
                                        text: ef,
                                        ariaHidden: !0,
                                        children: (0, a.jsx)(w.K, {
                                            icon: e2,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": ef,
                                            "aria-pressed": eh,
                                            onClick: ex,
                                        }),
                                    }),
                              (0, Q.PV)(t)
                                  ? (0, a.jsx)(v.m, {
                                        text: H.intl.string(Y.default["xhcY+n"]),
                                        ariaHidden: !0,
                                        children: (0, a.jsx)(w.K, {
                                            icon: k.SettingsIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["xhcY+n"]),
                                            onClick: () => (0, e_.A)(t.id, t.guild_id ?? r),
                                        }),
                                    })
                                  : null,
                              (0, Q.jf)(t)
                                  ? (0, a.jsx)(v.m, {
                                        text: eg,
                                        ariaHidden: !0,
                                        children: (0, a.jsx)(w.K, {
                                            icon: e9,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": eg,
                                            loading: o,
                                            disabled: ep,
                                            onClick: e8,
                                        }),
                                    })
                                  : null,
                              (0, a.jsx)(eV, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, Q.PV)(t),
                                  canRemix: (0, Q.H_)(t),
                                  onRefresh: (0, eJ.x1)(eN) ? eI : void 0,
                                  isRefreshing: eE,
                                  onClose: eS,
                                  onExport: eP,
                                  onImport: eR.open,
                                  onRemix: eD,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eH.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      R?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                m(!0), S(!1), E(!1), h(!0);
                                            },
                                  onRestorePoints: () => {
                                      m(!0), S(!1), h(!1), E(!0);
                                  },
                                  refreshApplicationId:
                                      el.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== el.profileState
                                          ? eo
                                          : null,
                                  previewProjectId: t.id,
                              }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: e0.nj,
        children: [
            eR.input,
            (0, a.jsx)("main", {
                className: e0.JX,
                children:
                    null == t
                        ? (0, a.jsxs)("div", {
                              className: e0.j5,
                              children: [
                                  e3,
                                  (0, a.jsxs)("div", {
                                      className: e0.sD,
                                      children: [
                                          (0, a.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: H.intl.string(Y.default.F2dRba),
                                          }),
                                          (0, a.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: H.intl.string(Y.default.GnEJ3o),
                                          }),
                                          (0, a.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: H.intl.string(Y.default["42EdIV"]),
                                              onClick: () => (0, K.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              ea.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eJ.sd,
                                  header: e3,
                                  chatOpen: p,
                                  onCloseChat: ey,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => h(!1),
                                  restorePointsOpen: f,
                                  onCloseRestorePoints: () => E(!1),
                                  installScope: t.install_scope,
                                  debugOpen: P && I,
                                  onCloseDebug: ej,
                                  onRestoreVersion: ev,
                                  restoreState: R,
                                  previewReady: en,
                                  previewGate: eO,
                                  availability: el,
                                  activeMode: es,
                                  widgetApplicationId: eo,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e7(e) {
    let {
            projects: t,
            sharedProjects: n,
            fetchState: i,
            idea: s,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: g,
            modelSettings: h,
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
        null != g && D.current?.querySelector("button")?.focus();
    }, [g]);
    let z = l.useMemo(
            () =>
                t
                    .filter((e) => (0, q.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        T = H.intl.string(Y.default.TU9IGR),
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
    return (0, a.jsxs)("div", {
        className: r()(e0.nj, e0.a0),
        children: [
            (0, a.jsx)(eF, { title: H.intl.string(Y.default.Xmvb23) }),
            (0, a.jsxs)("div", {
                className: e0.Yo,
                children: [
                    (0, a.jsxs)("main", {
                        className: e0.ps,
                        children: [
                            (0, a.jsx)(E.Ip, {
                                className: e0.Yy,
                                children: (0, a.jsx)("div", {
                                    className: e0.Mo,
                                    children: (0, a.jsxs)("section", {
                                        className: r()(e0.Qs, e0.Ix),
                                        children: [
                                            (0, a.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: H.intl.string(Y.default["2tYpRK"]),
                                            }),
                                            (0, a.jsxs)("section", {
                                                className: e0.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, a.jsxs)("div", {
                                                        className: e0.G9,
                                                        children: [
                                                            (0, a.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, a.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsx)("ol", {
                                                        className: e0.Aw,
                                                        children: V.map((e) =>
                                                            (0, a.jsx)(
                                                                "li",
                                                                {
                                                                    className: e0.EA,
                                                                    children: (0, a.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": H.intl.formatToPlainString(
                                                                            Y.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(e0.nx, e0.rz),
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
                                                                            (0, a.jsx)(x.E, {
                                                                                className: e0.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, a.jsx)(x.E, {
                                                                                className: e0.BK,
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
                                            (0, a.jsxs)("section", {
                                                className: e0.WI,
                                                "aria-label": G,
                                                children: [
                                                    (0, a.jsxs)("div", {
                                                        className: e0.G9,
                                                        children: [
                                                            (0, a.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, a.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsx)("ol", {
                                                        className: e0.Aw,
                                                        children: M.map((e) =>
                                                            (0, a.jsx)(
                                                                "li",
                                                                {
                                                                    className: e0.EA,
                                                                    children: (0, a.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: e0.nx,
                                                                        onClick: d ? void 0 : () => v(e),
                                                                        children: (0, a.jsx)(x.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: e0.un,
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
                                            (0, a.jsx)(ei, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                className: e0.Yl,
                                children: (0, a.jsxs)("div", {
                                    className: r()(e0.Qs, e0.DA),
                                    children: [
                                        (0, a.jsx)(I.f, {
                                            label: T,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: T,
                                            error: c,
                                            onChange: j,
                                            onKeyDown: F,
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: e0.VP,
                                            children: [
                                                (0, a.jsx)("div", {
                                                    className: e0.gH,
                                                    ref: D,
                                                    children: (0, a.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: H.intl.string(Y.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: H.intl.string(Y.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: H.intl.string(Y.default.MLg0S8),
                                                                options: ef.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: H.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, a.jsx)(ey.A, {
                                                    settings: h ?? X.Cl,
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
                                                (0, a.jsx)(N.$, {
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
                    (0, a.jsxs)("aside", {
                        className: e0.pA,
                        "aria-label": H.intl.string(Y.default.Bo5fE3),
                        children: [
                            (0, a.jsxs)("div", {
                                className: e0.IR,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: e0.RM,
                                        children: [
                                            (0, a.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: H.intl.string(Y.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: H.intl.string(Y.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(ex, { importing: C, onImport: w }),
                                ],
                            }),
                            (0, a.jsxs)(E.Ip, {
                                className: e0.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, a.jsx)("div", { className: e0.E8, children: (0, a.jsx)(P.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, a.jsxs)("div", {
                                                className: e0.E8,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e0.JS,
                                                        children: H.intl.string(Y.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: H.intl.string(Y.default["42EdIV"]),
                                                        onClick: () => (0, K.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, a.jsx)("div", {
                                                  className: e0.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: e0.ST,
                                                      children: [
                                                          (0, a.jsx)(R.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: e0.sI,
                                                              children: H.intl.string(Y.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, a.jsx)("div", {
                                                  className: e0.Dq,
                                                  children: z.map((e) =>
                                                      (0, a.jsx)(
                                                          e8,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => b(e.id),
                                                              onRemix: () => (0, eW.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    k.length > 0
                                        ? (0, a.jsxs)("div", {
                                              className: e0.qx,
                                              children: [
                                                  (0, a.jsxs)("div", {
                                                      className: e0.uc,
                                                      children: [
                                                          (0, a.jsx)(x.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: H.intl.string(Y.default.jrCnUc),
                                                          }),
                                                          (0, a.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: H.intl.string(Y.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      className: e0.Dq,
                                                      children: k.map((e) =>
                                                          (0, a.jsx)(
                                                              e8,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => b(e.id),
                                                                  onRemix: () => (0, eW.A)(e, o),
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
function e5(e) {
    let t,
        { guildId: n, projectId: i } = e,
        s = (0, c.yK)([Q.Ay], () => Q.Ay.getOwnedProjects()),
        r = (0, c.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        o = (0, c.yK)([Q.Ay], () => Q.Ay.getSharedProjects(n), [n]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(n)?.roles ?? [], [n]),
        u = (0, c.bG)([G.A, F.A], () => {
            let e = G.A.getGuild(n);
            return null != e && F.A.can(e$.xBc.MANAGE_GUILD, e);
        }, [n]),
        [p, m] = l.useState(""),
        g = i ?? null,
        [h, f] = l.useState(!1),
        [x, v] = l.useState(null),
        [w, C] = l.useState("guild"),
        [k, A] = l.useState(null),
        [N, E] = l.useState(null);
    l.useEffect(() => {
        (0, K.hF)(n);
    }, [n, d, u]),
        l.useEffect(() => {
            (0, K.dm)(n, g);
        }, [n, g]);
    let I = l.useCallback((e) => {
            C(e), A(null);
        }, []),
        S = l.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    i = J({ idea: t, installScope: w, submitting: h });
                if ("idea" !== i && "submitting" !== i) {
                    if (null == w) return void A(H.intl.string(Y.default.jQ3nQB));
                    null != e && m(e), f(!0), v(null);
                    try {
                        let e = await (0, K.gA)({ guild_id: n, install_scope: w });
                        (0, $.Hc)(e),
                            (0, $.r2)(e, N ?? X.Cl),
                            (0, $.dv)(e, t),
                            (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS, e)),
                            m(""),
                            E(null);
                    } catch (e) {
                        v(e instanceof Error ? e.message : H.intl.string(Y.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [w, n, p, N, h],
        ),
        [P, R] = l.useState(!1),
        _ = l.useCallback(
            async (e, t) => {
                let i = eu(e);
                if (null != i) return void (0, y.P0)((0, b.o)(i, j.Ck.FAILURE));
                R(!0);
                let a = null;
                try {
                    (a = await (0, K.gA)({ guild_id: n, install_scope: t })),
                        (0, $.Hc)(a),
                        (0, $.r2)(a, N ?? X.Cl),
                        await ec(a, e, H.intl.string(Y.default.KjEtrZ)),
                        (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS, a)),
                        E(null);
                } catch {
                    null != a && (await (0, K.xx)(a).catch(() => void 0)),
                        (0, y.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), j.Ck.FAILURE));
                } finally {
                    R(!1);
                }
            },
            [n, N],
        ),
        D = l.useCallback(
            (e) => {
                (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        z = l.useCallback(() => {
            (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS));
        }, [n]),
        T = l.useCallback((e) => {
            m(e), v(null);
        }, []),
        V = (0, c.bG)([Q.Ay], () => {
            if (null == g) return null;
            let e = Q.Ay.getProject(g);
            return null == e || (0, Q.PV)(e) || e.guild_id === n ? e : null;
        }, [g, n]),
        B = (0, c.bG)([Q.Ay], () => Q.Ay.hasFetchedGuildProjects(n), [n]);
    return null != g
        ? (0, a.jsx)(e3, { project: V, projectsLoaded: B, onBack: z, guildId: n }, g)
        : (0, a.jsx)(e7, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: N,
              onModelSettingsChange: E,
              idea: p,
              guildId: n,
              submitting: h,
              createError: x,
              createDisabled: "idea" === (t = J({ idea: p, installScope: w, submitting: h })) || "submitting" === t,
              onSelectProject: D,
              onIdeaChange: T,
              onCreate: S,
              onImportNewProject: _,
              importing: P,
              installScope: w,
              onInstallScopeChange: I,
              installScopeError: k,
          });
}
