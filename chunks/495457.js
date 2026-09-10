n.d(t, { _: () => i });
function i(e) {
    let { hasRows: t, loadFailed: n, fetchPhase: i } = e;
    return t ? "rows" : n ? "failed" : "settled" !== i ? "loading" : "empty";
}
