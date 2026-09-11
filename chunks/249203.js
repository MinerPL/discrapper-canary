l.d(e, { A: () => d });
var i = l(17928),
    n = l(228366);
let r = {};
function s(t) {
    (null == r[t] &&
        (function () {
            let t = Object.keys(r);
            if (t.length < 500) return;
            let e = t.sort((t, e) => r[t].lastViewedAt - r[e].lastViewedAt).slice(t.length - 499),
                l = {};
            for (let t of e) l[t] = r[t];
            r = l;
        })(),
        (r = { ...r, [t]: { lastViewedAt: Date.now() } }));
}
class u extends i.Ay.PersistedStore {
    static displayName = "ProfileReadStateStore";
    static persistKey = "ProfileReadStateStore";
    initialize(t) {
        r = { ...(t?.entries ?? {}) };
    }
    getState() {
        return { entries: { ...r } };
    }
    getEntry(t) {
        return r[t] ?? null;
    }
}
let d = new u(n.h, {
    PROFILE_READ_STATE_MARK_VIEWED: function (t) {
        let { userId: e } = t;
        s(e);
    },
    PROFILE_READ_STATE_SEED_VIEWED: function (t) {
        let { userId: e } = t;
        if (null != r[e]) return !1;
        s(e);
    },
});
