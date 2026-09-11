n.d(e, {
    CW: () => w,
    Eo: () => I,
    GG: () => V,
    HV: () => L,
    I$: () => B,
    Is: () => f,
    M7: () => k,
    Ru: () => C,
    U1: () => S,
    Zq: () => G,
    dm: () => N,
    gA: () => g,
    hF: () => R,
    oB: () => y,
    tZ: () => m,
    xx: () => P,
});
var r = n(636537),
    l = n(228366),
    i = n(382483),
    o = n(627363),
    u = n(625180),
    a = n(91242),
    s = n(673724),
    _ = n(927899),
    c = n(936494),
    d = n(972786),
    E = n(652215),
    p = n(165610);
function f(t, e, n) {
    (0, _.Z0)(t, {
        location: "publish",
        code: _.xA.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function T(t) {
    if (null != t)
        for (let e of a.A.getAllFrames())
            (0, p.x1)(e) && e.applicationId === t && !e.data.proxyTicketRefreshing && u.A.refreshProxyTicket(e.id);
}
function I(t) {
    let e = d.Ay.getProject(t);
    null != e && (T(e.application_id), T(e.preview_application_id ?? null));
}
let h = null,
    A = null;
async function R(t) {
    let e = t ?? null;
    if (d.Ay.getProjectsFetchState()?.type === "loading") {
        null != e && e !== h && (A = e);
        return;
    }
    ((h = e), l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await r.Bo.get({
            url: E.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e });
    } catch {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = A;
    ((A = null), null != n && n !== e && R(n));
}
async function S(t, e) {
    let n = await r.Bo.get({ url: E.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && n.ok) {
        var i;
        (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (i = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            l.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: t,
                integrationStatus: i,
            }));
    }
    return n;
}
async function g(t) {
    let e;
    try {
        let { body: n } = await r.Bo.post({
            url: E.Rsh.VIBEGRATIONS_PROJECTS,
            body: { flags: s.A2.PUBLIC, ...t },
            rejectWithError: !1,
        });
        e = n;
    } catch (t) {
        throw new c.uQ((0, c.hj)(t), (0, c.$k)(t));
    }
    return (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function O(t, e) {
    let n = await r.Bo.patch({ url: E.Rsh.VIBEGRATIONS_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function y(t, e) {
    return O(t, { name: e });
}
function w(t, e) {
    return O(t, e);
}
async function C(t, e) {
    let n = await O(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, o.TA)(t);
            } catch {}
    }
    return n;
}
function k(t, e) {
    return O(t, e);
}
async function P(t) {
    let e = await r.Bo.del({ url: E.Rsh.VIBEGRATIONS_PROJECT(t), rejectWithError: !1 });
    return (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: t }), e);
}
function N(t, e) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: t, projectId: e });
}
async function m(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: r, integration_installed: l, project: u } = (await S(t)).body,
        a = n ? u.preview_application_id : u.application_id;
    (null != a && (await (0, o.TA)(a), await (0, i.un)(a, { force: !0 }).catch(() => {}), (n && (!l || r)) || T(a)),
        (0, _.qs)(t, { isPreview: n }));
}
function B(t, e) {
    l.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function G(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function L(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function V(t) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
