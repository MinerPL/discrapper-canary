(i.r(t), i.d(t, { default: () => eJ }));
var l = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(17928),
    d = i(834730),
    u = i(289873),
    c = i(689175),
    o = i(250527),
    _ = i(868652),
    E = i(645619),
    f = i(71393),
    g = i(562708),
    h = i(636537),
    m = i(228366),
    A = i(499785),
    I = i(716357);
function p(e) {
    return !(e instanceof h.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var S = i(652215);
let D = 0;
async function C(e) {
    let t = D++;
    m.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: i } = await A.A.get({
            url: S.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: g.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        m.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: i });
    } catch (i) {
        m.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: p(i) });
    }
}
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = I.A.getFetchStatus(e),
        l = t && "error" === i && !I.A.isInBackoff(e);
    ("idle" === i || l) && (await C(e));
}
async function v(e) {
    await C(e);
}
async function T(e, t) {
    let { body: i } = await h.Bo.patch({ url: S.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
async function y(e) {
    m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await h.Bo.get({ url: S.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var G = i(960960),
    j = i(626584),
    L = i(754674);
let U = {};
function b(e) {
    let t = U[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class N extends s.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return U[e]?.draft;
    }
    isEditing(e) {
        return null != U[e];
    }
    getSaveStatus(e) {
        return U[e]?.saveStatus ?? "idle";
    }
}
let P = new N(m.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        U[t] = { draft: { header: i.header, widgets: (0, L.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = b(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, L.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: n } = e,
            a = b(t);
        if (null == a) return !1;
        let r = (0, L.Gm)(a.draft.widgets, i, l, n);
        if (null == r) return !1;
        a.draft = { ...a.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            l = b(t);
        if (null == l) return !1;
        let n = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (n.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, L.W$)(n) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: l } = e,
            n = b(t);
        if (null == n) return !1;
        let a = n.draft.widgets.map((e) => (e.id === i ? { ...e, config: l } : e));
        n.draft = { ...n.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: i } = e,
            l = b(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: i } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            l = U[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = i));
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            l = U[t];
        if (l?.activeSaveRequestId !== i) return !1;
        (delete l.activeSaveRequestId, (l.saveStatus = "error"));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == U[t]) return !1;
        delete U[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == U[t]) return !1;
        delete U[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == U[t]) return !1;
        delete U[t];
    },
    LOGOUT: function () {
        U = {};
    },
});
var w = i(593673);
let R = "draft:",
    k = 0,
    F = new j.A("GuildSpaceEditorActionCreators"),
    H = 0;
function W(e) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function M(e, t, i, l) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
function O(e, t) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function B(e) {
    let t = P.getDraft(e);
    if (null == t || "saving" === P.getSaveStatus(e)) return;
    let i = {};
    void 0 !== t.header.custom_banner && (i.custom_banner = t.header.custom_banner);
    let l = {
            header: i,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: l, config: n } = e,
                    a = {
                        type: i,
                        position: l,
                        config: (function (e) {
                            if (e.type === w.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return (void 0 !== e.image && (t.image = e.image), t);
                            }
                            return e;
                        })(n),
                    };
                return (t.startsWith(R) || (a.id = t), a);
            }),
        },
        n = H++;
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: n });
    try {
        let { body: t } = await h.Bo.put({ url: S.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        m.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        (F.error("Failed to save guild space", { guildId: e, error: t }),
            m.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: n }));
    }
}
var K = i(363957);
let z = 0;
async function V(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = K.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let n = z++;
    m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: n, widgetIds: l });
    try {
        let { body: t } = await h.Bo.get({
            url: S.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: n, widgets: t.widgets });
    } catch (t) {
        m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: n, retryable: p(t) });
    }
}
var q = i(470452),
    Y = i(344351),
    $ = i(795816),
    X = i(933958),
    J = i(44167),
    Q = i(872188),
    Z = i(868285),
    ee = i(36525),
    et = i(871682),
    ei = i(331322),
    el = i(821609),
    en = i(499373),
    ea = i(189213),
    er = i(939249),
    es = i(104510),
    ed = i(661531),
    eu = i(245604),
    ec = i(192308),
    eo = i(775602),
    e_ = i(61567),
    eE = i(375708),
    ef = i(517228);
function eg(e) {
    let { widget: t, onClick: i } = e,
        n = (0, s.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: r } = t.assets,
        u = (n ? null : r) ?? a,
        c = t.boost_price;
    return (0, l.jsxs)(er.D, {
        className: ef.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: ef.b3,
                children: [
                    null != u && (0, l.jsx)("img", { className: ef.YI, src: u, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: ef.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(es._, {
                                size: "sm",
                                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: ef.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: ef.Ti, children: (0, l.jsx)("div", { className: ef.dK }) }),
                            (0, l.jsxs)(ei.B, {
                                className: ef.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(eu.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: eE.intl.string(e_.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(ei.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(ei.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(es._, { size: "sm", color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: eE.intl.format(e_.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: eE.intl.string(e_.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { guildId: t, ...i } = e,
        a = (0, s.yK)(
            [G.A, P],
            () => {
                let e = P.getDraft(t)?.widgets ?? [];
                var i = G.A.getWidgets(t) ?? [];
                let l = new Map();
                for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
                return i.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
            },
            [t],
        );
    return (
        n.useEffect(() => {
            y(t);
        }, [t]),
        (0, l.jsx)(ea.Modal, {
            title: eE.intl.string(e_.default.L8Xfoo),
            subtitle: eE.intl.string(e_.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: ef.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        eg,
                        {
                            widget: e,
                            onClick: () => {
                                var l, n, a;
                                ((l = e.type),
                                    (n = e.name),
                                    (a = e.locked),
                                    m.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, i) {
                                            let l = {
                                                id: `${R}${k++}`,
                                                position: { column: L.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: i,
                                            };
                                            switch (e) {
                                                case w.a.IMAGE_TEXT:
                                                    return {
                                                        ...l,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case w.a.LEADERBOARD:
                                                case w.a.WHITEBOARD:
                                                case w.a.POPULAR_MUSIC:
                                                case w.a.LIVE_ACTIVITY:
                                                    return { ...l, type: e, config: { type: e } };
                                            }
                                        })(l, n, a),
                                    }),
                                    i.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
var em = i(992303);
function eA(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, s.bG)([P], () => P.getSaveStatus(t), [t]),
        r = (0, s.bG)([P], () => P.getDraft(t)?.widgets.length ?? 0, [t]),
        u = "saving" === a,
        c = n.useCallback(() => {
            B(t);
        }, [t]),
        o = n.useCallback(() => {
            W(t);
        }, [t]);
    return (0, l.jsx)(Z.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(et.F, {
                className: em.K,
                children: (0, l.jsx)(ee.A, {
                    submitting: u,
                    disabled: u,
                    onSave: c,
                    onReset: u ? void 0 : o,
                    message: (0, l.jsxs)(ei.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(el.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: en.T,
                                text: eE.intl.string(e_.default.L8Xfoo),
                                disabled: u,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(eh, { guildId: t, ...e })),
                                        void (0, ec.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === a
                                ? (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      role: "alert",
                                      children: eE.intl.string(e_.default.HmFYc5),
                                  })
                                : (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: eE.intl.format(e_.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eI = i(686246),
    ep = i(651300),
    eS = i(451395),
    eD = i(42499),
    eC = i(539888),
    ex = i(977756),
    ev = i(294918);
let eT = "GUILD_SPACE_WIDGET",
    ey = "GUILD_SPACE_WIDGETS",
    eG = `${eT}_${ey}`;
function ej(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: u,
            flatIndex: c,
            leftColumnCount: o,
            onReorder: _,
            isSaving: E,
        } = e,
        f = n.useRef(null),
        g = n.useRef(null),
        h = (0, s.bG)([K.A], () => (i.requires_hydration ? K.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        A = (0, eD.K)(t, i),
        { isDragging: I, dragSourcePosition: p } = (0, eS.gY)({
            dragRef: f,
            dropRef: g,
            index: c,
            listType: ey,
            itemType: eT,
            itemId: i.id,
            onReorder: _,
            canDrag: !E,
        }),
        S = null == p ? null : p < o ? L.FT : L.yM,
        D = null != S && S !== a;
    return (0, l.jsx)("div", {
        ref: g,
        className: r()(ev.NI, { [ev.cB]: I, [ev.ne]: null != p && (D || p > c), [ev.O3]: null != p && !D && p < c }),
        "data-dnd-name": eE.intl.formatToPlainString(a === L.yM ? e_.default.O9RvHQ : e_.default["+cSvS8"], {
            positionNumber: d,
            positionCount: u,
        }),
        children: (0, l.jsx)(eC.P, {
            guildId: t,
            widget: i,
            guildSpaceMode: "edit",
            hydration: h,
            lock: A,
            dragHandleRef: f,
            disabled: E,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void m.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var l;
                return (
                    (l = i.id),
                    void m.h.dispatch({
                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                        guildId: t,
                        widgetId: l,
                        config: e,
                    })
                );
            },
        }),
    });
}
function eL(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = n.useRef(null),
        [{ isOver: s }, d] = (0, ep.H)({
            accept: eG,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        n.useLayoutEffect(
            () => (
                d(a),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", {
            ref: a,
            className: r()(ev.wr, { [ev.SX]: s }),
            "data-dnd-name": eE.intl.string(t === L.yM ? e_.default.fWef0G : e_.default.KcdDyT),
        })
    );
}
function eU(e) {
    let { guildId: t, widgets: i } = e,
        a = n.useMemo(() => (0, L.Rl)(i), [i]),
        r = n.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ex.m[t];
                    }),
                ),
            [a],
        ),
        d = n.useMemo(() => [...r[L.FT], ...r[L.yM]], [r]),
        u = (0, eI.V)((e) => e.isDragging() && e.getItemType() === eG),
        c = (0, s.bG)([P], () => "saving" === P.getSaveStatus(t), [t]),
        o = n.useCallback(
            (e, i) => {
                let l = d[e],
                    n = d[i];
                null != l && null != n && M(t, l.id, n.position.column, n.position.order);
            },
            [t, d],
        ),
        _ = n.useCallback(
            (e, i) => {
                M(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, l.jsx)("div", {
        className: ev.Vg,
        children: r.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: ev.fi,
                    children: [
                        e.map((n, a) =>
                            (0, l.jsx)(
                                ej,
                                {
                                    guildId: t,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === L.yM ? r[L.FT].length + a : a,
                                    leftColumnCount: r[L.FT].length,
                                    onReorder: o,
                                    isSaving: c,
                                },
                                n.id,
                            ),
                        ),
                        u && !c && (0, l.jsx)(eL, { column: i, onDropAtEnd: _ }),
                    ],
                },
                i,
            ),
        ),
    });
}
var eb = i(529609),
    eN = i(866665),
    eP = i(408278),
    ew = i(241326),
    eR = i(297264),
    ek = i(22231),
    eF = i(654107),
    eH = i(548118),
    eW = i(837011),
    eM = i(649640),
    eO = i(2553),
    eB = i(405810),
    eK = i(498642),
    ez = i(486020),
    eV = i(488428),
    eq = i(776231),
    eY = i(986898);
function e$(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: r, isSaving: u } = e,
        c = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]),
        o = (0, s.bG)([eK.A], () => eK.A.getOnlineCount(t), [t]),
        _ = (0, s.bG)([eK.A], () => eK.A.getMemberCount(t), [t]),
        E = i.custom_banner,
        g = (0, s.bG)([eW.A], () => eW.A.getProfile(t), [t]),
        h = (0, eM.b2)().hex(),
        A = null == c ? null : ez.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        p = (0, eF.Ay)(A, h),
        D = (0, eM.n6)(g?.brandColorPrimary ?? p),
        C = n.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof E
                      ? E
                      : void 0 === E && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = ez.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: n } = window.GLOBAL_ENV,
                                  a = S.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  r = null != l ? `https://${l}${a}` : location.protocol + n + a,
                                  s = { size: (0, eq.kr)(1200 * (0, eq.mZ)()) };
                              return ("jpg" === i && (s.quality = "lossless"), (r += `?${eV.stringify(s)}`));
                          })(c.id, i.custom_banner_hash)
                        : ez.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, E, i.custom_banner_hash],
        ),
        x = "string" == typeof E || (void 0 === E && null != i.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: eY.wx,
              children: [
                  null != C
                      ? (0, l.jsx)("img", { className: eY.vK, src: C, alt: "" })
                      : (0, l.jsx)("div", { className: eY.vK, style: { background: D }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eY.f5, "aria-hidden": !0 }),
                  r
                      ? (0, l.jsxs)("div", {
                            className: eY.j0,
                            children: [
                                (0, l.jsx)(eB.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: eE.intl.string(e_.default["EN+0gW"]),
                                    onChange: (e) => O(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eO.A)(0xa00000),
                                    disabled: u,
                                }),
                                x
                                    ? (0, l.jsx)(eN.m, {
                                          text: eE.intl.string(e_.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eP.K, {
                                              variant: "critical-secondary",
                                              icon: ew.TrashIcon,
                                              "aria-label": eE.intl.string(e_.default["CunK+J"]),
                                              onClick: () => O(t, null),
                                              disabled: u,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eY.D_,
                      children: [
                          (0, l.jsx)(eH.Ay, {
                              className: eY.Kk,
                              guild: c,
                              size: eH.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eY.pq,
                              children: [
                                  (0, l.jsx)(eR.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eY.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: eY.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eY.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eE.intl.format(e_.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != _
                                              ? (0, l.jsxs)("div", {
                                                    className: eY.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eY.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eE.intl.format(e_.default["rp7bx+"], {
                                                                count: _,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eY.dJ,
                                              children: [
                                                  (0, l.jsx)(es._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eE.intl.format(e_.default.DwFqrb, {
                                                          count: c.premiumSubscriberCount,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  a &&
                      !r &&
                      (0, l.jsx)(el.$, {
                          icon: ek.PencilIcon,
                          text: eE.intl.string(e_.default.KcOpCm),
                          size: "sm",
                          onClick: () => {
                              let e;
                              null != (e = I.A.getSpace(t)) &&
                                  m.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eX = i(312152);
function eJ(e) {
    let t,
        { guildId: i } = e,
        a = n.useRef(null),
        [g, h, m] = (0, s.yK)([I.A], () => [I.A.getSpace(i), I.A.getFetchStatus(i), I.A.isInBackoff(i)], [i]);
    (n.useEffect(() => {
        let e = a.current !== i;
        ((a.current = i), x(i, e));
    }, [h, i]),
        n.useEffect(() => {
            (0, o.L4)(i, !1, { respectBackoff: !0 });
        }, [i]),
        (t = (0, J.n)()),
        n.useEffect(
            () => () => {
                if (null == t) return;
                let e = X.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === Y.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, $._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let A = (0, s.bG)([f.A], () => f.A.getGuild(i), [i]),
        p = (0, q.mN)(A),
        S = (0, s.bG)([G.A], () => G.A.getFetchStatus(i), [i]);
    n.useEffect(() => {
        p && "idle" === S && y(i);
    }, [p, S, i]);
    let D = A?.guildSpaceSettings?.publish_status !== w.B.PUBLISHED,
        C = n.useCallback(() => T(i, { publish_status: w.B.PUBLISHED }), [i]),
        [j, L] = (0, s.yK)([P], () => [P.getDraft(i), P.getSaveStatus(i)], [i]),
        U = p && null != j,
        b = U ? j.widgets : g?.widgets,
        N = n.useMemo(() => b?.some((e) => e.locked) ?? !1, [b]);
    n.useEffect(() => {
        p && N && ((0, _.AK)(i), (0, _.Xd)(i));
    }, [p, i, N]);
    let R = (0, s.bG)(
        [E.A, G.A],
        () =>
            g?.widgets.some((e) => {
                let t = G.A.getWidget(i, e.type)?.powerup_sku_id;
                return e.locked && null != t && E.A.getStateForGuild(i)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [i, g],
    );
    (n.useEffect(() => {
        R && v(i);
    }, [i, R]),
        n.useEffect(() => {
            p || null == j || "saving" === L || W(i);
        }, [p, j, L, i]));
    let k = n.useMemo(
            () =>
                (b ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [b],
        ),
        F = (0, s.yK)([K.A], () => K.A.getWidgetIdsToHydrate(i, k), [i, k]),
        H = n.useRef(null);
    return (n.useEffect(() => {
        if (H.current !== i && null != g) {
            ((H.current = i), V(i, k, !0));
            return;
        }
        V(i, F);
    }, [i, g, k, F]),
    null == g || null == b)
        ? (0, l.jsx)("div", {
              className: eX.MY,
              children: (0, l.jsx)("div", {
                  className: eX.F,
                  children:
                      "error" !== h || m
                          ? (0, l.jsx)(u.y, {
                                type: u.y.Type.SPINNING_CIRCLE,
                                "aria-label": eE.intl.string(eE.t.ZTNur7),
                            })
                          : (0, l.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: eE.intl.string(eE.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: eX.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: eX.XG,
                      children: (0, l.jsxs)("div", {
                          className: r()(eX.Qs, { [eX.Dy]: U }),
                          children: [
                              p && D ? (0, l.jsx)(Q.A, { onPublish: C }) : null,
                              (0, l.jsx)(e$, {
                                  guildId: i,
                                  header: U ? j.header : g.header,
                                  isEditing: U,
                                  canEdit: p,
                                  isSaving: "saving" === L,
                              }),
                              U
                                  ? (0, l.jsx)(eU, { guildId: i, widgets: b })
                                  : (0, l.jsx)(eb.A, { canEdit: p, guildId: i, widgets: b }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(eA, { guildId: i, isEditing: U }),
              ],
          });
}
