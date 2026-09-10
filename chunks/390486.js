l.d(t, { H: () => s, R: () => i });
var r = l(506774);
let n = "recentBuildOverrides";
function s() {
    return (r.w.get(n) ?? []).filter((e) => null == e.exp || e.exp > Date.now());
}
function i(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let l = { id: e.targetBuildOverride.discord_web.id, payload: t, exp: Date.parse(e.expiresAt) },
        i = [l, ...s().filter((e) => l.id !== e.id)].slice(0, 5);
    r.w.set(n, i);
}
