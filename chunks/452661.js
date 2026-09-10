n.d(t, { DP: () => A, E5: () => c, II: () => _, NX: () => E, Tn: () => u });
let i = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]),
    r = new Set([".heic", ".heif", ".hif"]),
    a = /\.(heic|heif|hif)$/i,
    s = new Set(["image/jxr", "image/vnd.ms-photo"]),
    l = new Set([".jxr", ".wdp", ".hdp"]),
    o = /\.(jxr|wdp|hdp)$/i;
function d(e) {
    let t = "string" == typeof e.name ? e.name : "",
        n = t.lastIndexOf(".");
    return n < 0 ? null : t.slice(n).toLowerCase();
}
function c(e) {
    if (i.has(e.type)) return !0;
    let t = d(e);
    return null != t && r.has(t);
}
function u(e) {
    if (s.has(e.type)) return !0;
    let t = d(e);
    return null != t && l.has(t);
}
function _(e) {
    return "" !== e.type
        ? e.type
        : ("string" == typeof e.name ? e.name : "").toLowerCase().endsWith(".heic")
          ? "image/heic"
          : "image/heif";
}
function E(e) {
    return "" !== e.type ? e.type : "image/jxr";
}
function A(e) {
    return a.test(e) ? e.replace(a, ".jpg") : o.test(e) ? e.replace(o, ".jpg") : `${e}.jpg`;
}
