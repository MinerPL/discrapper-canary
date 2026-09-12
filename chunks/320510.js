n.d(t, { S: () => r });
var i = n(940107);
function r(e, t, n) {
    let r;
    return (0, i.W)(e, "control", n, {
        id: t,
        timeoutMs:
            ("number" == typeof (r = n.timeoutMs) && isFinite(r) && r > 0 ? Math.min(Math.floor(r), 2e4) : 5e3) + 4e3,
        retryMs: 400,
        sourceMatch: "origin",
        label: "control",
    }).then(
        (e) =>
            "boolean" == typeof e?.ok && Array.isArray(e.results)
                ? { status: "completed", response: e }
                : { status: "failed", message: "the preview frame returned a malformed control result" },
        (e) =>
            e instanceof i.f
                ? { status: "failed", message: "the preview frame did not answer the control batch" }
                : { status: "unavailable" },
    );
}
