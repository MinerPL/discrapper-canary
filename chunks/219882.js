n.d(t, { J6: () => l, M6: () => o, ew: () => s });
var i = n(945810),
    r = n(202541);
let a = (0, i.mj)({
    name: "2026-09-nitro-file-upload-rollout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s() {
    let { location: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return l({ location: e }).enabled ? r.gb : r.f3;
}
function l() {
    let { location: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return a.getConfig({ location: e ?? "NitroFileUploadRollout" });
}
function o(e) {
    let { legacyCopy: t, rolloutCopy: n } = e;
    return l().enabled ? n : t;
}
(0, i.mj)({
    name: "2026-09-non-nitro-file-upload-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
