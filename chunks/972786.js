(n.d(e, { Ay: () => j, H_: () => _, PV: () => u, jf: () => s }), n(321073));
var l = n(17928),
    r = n(228366),
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
let d = new Map(),
    c = new Map(),
    E = new Map(),
    p = null,
    I = new Set(),
    T = new Map(),
    f = [],
    A = new Map(),
    R = 0,
    h = new Map(),
    S = new Map(),
    g = [],
    O = new Map(),
    y = new Map();
function C(t, e, n) {
    return null != e && y.get(t)?.get(e) === n;
}
function w(t, e, n) {
    if (null == e) return;
    let l = y.get(t);
    for (null == l && ((l = new Map()), y.set(t, l)), l.set(e, n); l.size > 800;) {
        let t = l.keys().next();
        if (!0 === t.done) break;
        l.delete(t.value);
    }
}
let P = { status: "idle", truncated: !1, count: 0 },
    k = new Map();
function N(t, e, n) {
    let l = k.get(t);
    (null == l && ((l = new Map()), k.set(t, l)), l.set(e, n));
}
function B(t, e, n) {
    let l = e.concat(n);
    O.set(t, l.length > 400 ? l.slice(-400) : l);
}
class m extends l.Ay.Store {
    initialize() {
        this.waitFor(i.default);
    }
    getOwnedProjects() {
        return Array.from(d.values()).filter(u);
    }
    getProject(t) {
        return d.get(t) ?? null;
    }
    findProjectByApplicationId(t) {
        for (let e of d.values()) if (e.application_id === t || e.preview_application_id === t) return e;
        return null;
    }
    getSharedProjects(t) {
        let e = [];
        for (let n of d.values()) u(n) || n.guild_id !== t || e.push(n);
        return e;
    }
    getIntegrationStatus(t) {
        return c.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return E.get(t) ?? null;
    }
    getLogs(t) {
        return A.get(t) ?? f;
    }
    getUnreadLogErrorCount(t) {
        let e = A.get(t);
        if (null == e) return 0;
        let n = S.get(t) ?? 0,
            l = 0;
        for (let t of e) t.key > n && "error" === t.log.level && !0 !== t.log.historical && (l += 1);
        return l;
    }
    getTrace(t) {
        return O.get(t) ?? g;
    }
    getHistoryState(t, e) {
        return k.get(t)?.get(e) ?? P;
    }
    getProjectsFetchState() {
        return p;
    }
    hasFetchedGuildProjects(t) {
        return I.has(t);
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
    d.set(e.id, e);
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
function U(t, e, n, l) {
    let r = e.slice();
    ((r[n] = l), O.set(t, r));
}
let j = new m(r.h, {
    LOGOUT: function () {
        if (
            0 === d.size &&
            0 === c.size &&
            0 === E.size &&
            0 === A.size &&
            0 === I.size &&
            0 === O.size &&
            0 === k.size &&
            0 === y.size &&
            null == p
        )
            return !1;
        (d.clear(),
            c.clear(),
            E.clear(),
            A.clear(),
            I.clear(),
            T.clear(),
            h.clear(),
            S.clear(),
            O.clear(),
            k.clear(),
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
            l = new Set(e.map((t) => t.id));
        for (let [t, e] of d) !l.has(t) && (u(e) || (null != n && e.guild_id === n)) && d.delete(t);
        for (let t of e) d.set(t.id, t);
        for (let t of (null != n && (I.add(n), T.set(n, "success")), c.keys())) d.has(t) || c.delete(t);
        for (let [t, e] of E) d.has(e) || E.delete(t);
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
        c.set(e, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, n] of (d.delete(e),
        c.delete(e),
        A.delete(e),
        h.delete(e),
        S.delete(e),
        O.delete(e),
        k.delete(e),
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
        let { projectId: e, scope: n, status: l, count: r, truncated: i } = t,
            o = "trace" === n ? L.get(e) : void 0;
        if (("trace" === n && L.delete(e), "failed" === l)) {
            let t = k.get(e)?.get(n);
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
        N(e, n, { status: "loaded", truncated: i, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: n } = t,
            l = n.seq;
        if (null != l) {
            let t = h.get(e);
            if (null != t && l <= t) return !1;
            h.set(e, l);
        }
        let r = { key: ++R, log: n },
            i = A.get(e),
            o = null == i ? [r] : i.concat(r);
        A.set(e, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (t) {
        let { projectId: e } = t,
            n = A.get(e),
            l = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((S.get(e) ?? 0) >= l) return !1;
        S.set(e, l);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (t) {
        let { projectId: e, toolCall: n } = t;
        if ((v(e, "tool", n.id), C(e, n.entry_id, n.status))) return !1;
        let l = O.get(e) ?? g,
            r = D(l, "tool", n.id),
            i = -1 === r ? null : l[r],
            o = n.summary ?? i?.summary,
            u = n.fields ?? i?.fields,
            a = n.schema ?? i?.schema,
            s = n.detail_id ?? i?.detailId,
            _ = n.turn_id ?? i?.turnId,
            d = n.parent_id ?? i?.parentId,
            c = {
                kind: "tool",
                id: n.id,
                ...(null != _ ? { turnId: _ } : {}),
                ...(null != d ? { parentId: d } : {}),
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
        (w(e, n.entry_id, n.status), null != i) ? U(e, l, r, c) : B(e, l, c);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (t) {
        let { projectId: e, modelCall: n } = t;
        if ((v(e, "model", n.id), C(e, n.entry_id, n.status))) return !1;
        let l = O.get(e) ?? g,
            r = D(l, "model", n.id),
            i = -1 === r ? null : l[r],
            o = {
                kind: "model",
                id: n.id,
                ...((n.turn_id ?? i?.turnId) != null ? { turnId: n.turn_id ?? i?.turnId } : {}),
                agent: n.agent,
                model: n.model,
                status: n.status,
                ...(function (t, e) {
                    let n = {};
                    for (let [l, r] of Object.entries(e)) {
                        let e = r ?? t?.[l];
                        "number" == typeof e && (n[l] = e);
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
        (w(e, n.entry_id, n.status), null != i) ? U(e, l, r, o) : B(e, l, o);
    },
});
