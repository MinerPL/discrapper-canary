(n.d(e, { Ay: () => U, H_: () => _, PV: () => u, jf: () => s }), n(321073));
var r = n(17928),
    l = n(228366),
    i = n(287809),
    o = n(673724);
function u(t) {
    return t.owner_user_id === i.default.getCurrentUser()?.id;
}
function a(t) {
    return (0, o.XE)(t) && null != t.guild_id;
}
function s(t) {
    return u(t) || a(t);
}
function _(t) {
    return u(t) || (0, o.tr)(t) || a(t);
}
let c = new Map(),
    d = new Map(),
    E = new Map(),
    p = null,
    f = new Set(),
    T = new Map(),
    I = [],
    h = new Map(),
    A = 0,
    R = new Map(),
    S = new Map(),
    g = [],
    O = new Map(),
    y = new Map();
function w(t, e, n) {
    return null != e && y.get(t)?.get(e) === n;
}
function C(t, e, n) {
    if (null == e) return;
    let r = y.get(t);
    for (null == r && ((r = new Map()), y.set(t, r)), r.set(e, n); r.size > 800;) {
        let t = r.keys().next();
        if (!0 === t.done) break;
        r.delete(t.value);
    }
}
let k = { status: "idle", truncated: !1, count: 0 },
    P = new Map();
function N(t, e, n) {
    let r = P.get(t);
    (null == r && ((r = new Map()), P.set(t, r)), r.set(e, n));
}
function m(t, e, n) {
    let r = e.concat(n);
    O.set(t, r.length > 400 ? r.slice(-400) : r);
}
class B extends r.Ay.Store {
    initialize() {
        this.waitFor(i.default);
    }
    getOwnedProjects() {
        return Array.from(c.values()).filter(u);
    }
    getProject(t) {
        return c.get(t) ?? null;
    }
    findProjectByApplicationId(t) {
        for (let e of c.values()) if (e.application_id === t || e.preview_application_id === t) return e;
        return null;
    }
    getSharedProjects(t) {
        let e = [];
        for (let n of c.values()) u(n) || n.guild_id !== t || e.push(n);
        return e;
    }
    getIntegrationStatus(t) {
        return d.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return E.get(t) ?? null;
    }
    getLogs(t) {
        return h.get(t) ?? I;
    }
    getUnreadLogErrorCount(t) {
        let e = h.get(t);
        if (null == e) return 0;
        let n = S.get(t) ?? 0,
            r = 0;
        for (let t of e) t.key > n && "error" === t.log.level && !0 !== t.log.historical && (r += 1);
        return r;
    }
    getTrace(t) {
        return O.get(t) ?? g;
    }
    getHistoryState(t, e) {
        return P.get(t)?.get(e) ?? k;
    }
    getProjectsFetchState() {
        return p;
    }
    hasFetchedGuildProjects(t) {
        return f.has(t);
    }
    getGuildProjectsFetchState(t) {
        return T.get(t) ?? "unattempted";
    }
    isVibegrationsProjectApplication(t) {
        return null != t && null != this.findProjectByApplicationId(t);
    }
}
function G(t) {
    let { project: e } = t;
    c.set(e.id, e);
}
let L = new Map();
function V(t, e) {
    return `${t}:${e}`;
}
function v(t, e, n) {
    L.get(t)?.touched.add(V(e, n));
}
function D(t, e, n) {
    return t.findIndex((t) => t.kind === e && t.id === n);
}
function j(t, e, n, r) {
    let l = e.slice();
    ((l[n] = r), O.set(t, l));
}
let U = new B(l.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === d.size &&
            0 === E.size &&
            0 === h.size &&
            0 === f.size &&
            0 === O.size &&
            0 === P.size &&
            0 === y.size &&
            null == p
        )
            return !1;
        (c.clear(),
            d.clear(),
            E.clear(),
            h.clear(),
            f.clear(),
            T.clear(),
            R.clear(),
            S.clear(),
            O.clear(),
            P.clear(),
            y.clear(),
            (p = null),
            L.clear());
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (t) {
        let { guildId: e } = t;
        (null != e && T.set(e, "loading"), (p = { type: "loading" }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (t) {
        let { projects: e, guildId: n } = t,
            r = new Set(e.map((t) => t.id));
        for (let [t, e] of c) !r.has(t) && (u(e) || (null != n && e.guild_id === n)) && c.delete(t);
        for (let t of e) c.set(t.id, t);
        for (let t of (null != n && (f.add(n), T.set(n, "success")), d.keys())) c.has(t) || d.delete(t);
        for (let [t, e] of E) c.has(e) || E.delete(t);
        p = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (t) {
        let { guildId: e } = t;
        (null != e && T.set(e, "error"), (p = { type: "error", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: G,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: G,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (t) {
        let { projectId: e, integrationStatus: n } = t;
        d.set(e, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, n] of (c.delete(e),
        d.delete(e),
        h.delete(e),
        R.delete(e),
        S.delete(e),
        O.delete(e),
        P.delete(e),
        y.delete(e),
        E))
            n === e && E.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (t) {
        let { guildId: e, projectId: n } = t;
        if ((E.get(e) ?? null) === n) return !1;
        null == n ? E.delete(e) : E.set(e, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (t) {
        let { projectId: e } = t;
        L.set(e, { snapshot: new Set((O.get(e) ?? g).map((t) => V(t.kind, t.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (t) {
        let { projectId: e, scope: n, status: r, count: l, truncated: i } = t,
            o = "trace" === n ? L.get(e) : void 0;
        if (("trace" === n && L.delete(e), "failed" === r)) {
            let t = P.get(e)?.get(n);
            N(e, n, { status: "failed", truncated: t?.truncated ?? !1, count: t?.count ?? 0 });
            return;
        }
        if (null != o) {
            let t = O.get(e);
            null != t &&
                O.set(
                    e,
                    t.filter((t) => !o.snapshot.has(V(t.kind, t.id)) || o.touched.has(V(t.kind, t.id))),
                );
        }
        N(e, n, { status: "loaded", truncated: i, count: l });
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: n } = t,
            r = n.seq;
        if (null != r) {
            let t = R.get(e);
            if (null != t && r <= t) return !1;
            R.set(e, r);
        }
        let l = { key: ++A, log: n },
            i = h.get(e),
            o = null == i ? [l] : i.concat(l);
        h.set(e, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (t) {
        let { projectId: e } = t,
            n = h.get(e),
            r = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((S.get(e) ?? 0) >= r) return !1;
        S.set(e, r);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (t) {
        let { projectId: e, toolCall: n } = t;
        if ((v(e, "tool", n.id), w(e, n.entry_id, n.status))) return !1;
        let r = O.get(e) ?? g,
            l = D(r, "tool", n.id),
            i = -1 === l ? null : r[l],
            o = n.summary ?? i?.summary,
            u = n.fields ?? i?.fields,
            a = n.schema ?? i?.schema,
            s = n.detail_id ?? i?.detailId,
            _ = n.turn_id ?? i?.turnId,
            c = n.parent_id ?? i?.parentId,
            d = {
                kind: "tool",
                id: n.id,
                ...(null != _ ? { turnId: _ } : {}),
                ...(null != c ? { parentId: c } : {}),
                agent: n.agent,
                tool: n.tool,
                status: n.status,
                ...(null != o ? { summary: o } : {}),
                ...(null != u ? { fields: u } : {}),
                ...(null != a ? { schema: a } : {}),
                ...(null != s ? { detailId: s } : {}),
                ...(null != n.duration_ms ? { durationMs: n.duration_ms } : {}),
                ...(null != n.result_chars ? { resultChars: n.result_chars } : {}),
                ...(!0 === n.result_truncated ? { resultTruncated: !0 } : {}),
                ...(null != n.result_added ? { resultAdded: n.result_added } : {}),
                ...(null != n.result_removed ? { resultRemoved: n.result_removed } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: i?.startedAt ?? n.ts,
            };
        (C(e, n.entry_id, n.status), null != i) ? j(e, r, l, d) : m(e, r, d);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (t) {
        let { projectId: e, modelCall: n } = t;
        if ((v(e, "model", n.id), w(e, n.entry_id, n.status))) return !1;
        let r = O.get(e) ?? g,
            l = D(r, "model", n.id),
            i = -1 === l ? null : r[l],
            o = {
                kind: "model",
                id: n.id,
                ...((n.turn_id ?? i?.turnId) != null ? { turnId: n.turn_id ?? i?.turnId } : {}),
                agent: n.agent,
                model: n.model,
                status: n.status,
                ...(function (t, e) {
                    let n = {};
                    for (let [r, l] of Object.entries(e)) {
                        let e = l ?? t?.[r];
                        "number" == typeof e && (n[r] = e);
                    }
                    return n;
                })(i, {
                    promptTokens: n.prompt_tokens,
                    systemTokens: n.system_tokens,
                    toolsTokens: n.tools_tokens,
                    messagesTokens: n.messages_tokens,
                    tools: n.tools,
                    messages: n.messages,
                    durationMs: n.duration_ms,
                    inputTokens: n.input_tokens,
                    outputTokens: n.output_tokens,
                    cacheReadTokens: n.cache_read_tokens,
                    cacheWriteTokens: n.cache_write_tokens,
                    costUsd: n.cost_usd,
                }),
                ...((n.estimated ?? i?.estimated) === !0 ? { estimated: !0 } : {}),
                ...(null != n.stop_reason ? { stopReason: n.stop_reason } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: i?.startedAt ?? n.ts,
            };
        (C(e, n.entry_id, n.status), null != i) ? j(e, r, l, o) : m(e, r, o);
    },
});
