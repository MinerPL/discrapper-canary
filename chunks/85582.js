r.r(n),
    r.d(n, {
        HeicConversionFailureReason: () => l,
        ImageConversionFailureReason: () => l,
        isHeicFile: () => a.E5,
        isJxrFile: () => a.Tn,
        maybeConvertHeicToJpeg: () => v,
        maybeConvertJxrToJpeg: () => f,
        renameToJpegExtension: () => a.DP,
    });
var i,
    o = r(77729),
    t = r(626584),
    a = r(452661);
let s = new t.A("ImageConversion");
var l =
    (((i = {}).NATIVE_MODULE_UNAVAILABLE = "native_module_unavailable"),
    (i.PLATFORM_UNSUPPORTED = "platform_unsupported"),
    (i.SIZE_LIMIT_EXCEEDED = "size_limit_exceeded"),
    (i.CONVERSION_FAILED = "conversion_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    i);
let c = { label: "heic", matches: a.E5, canConvert: (e) => e.canConvertHeic() },
    u = { label: "jxr", matches: a.Tn, canConvert: (e) => e.canConvertJxr() };
async function m(e, n, r, i) {
    let { label: t, matches: a, canConvert: l } = n;
    if (!a(e)) return null;
    let c = performance.now();
    function u() {
        return Math.round(performance.now() - c);
    }
    function m(n) {
        return { success: !1, originalFile: e, sizeBefore: e.size, sizeAfter: e.size, reason: n, compressTimeMs: u() };
    }
    let v = o.A?.sysimg;
    if (null == v) return s.verbose("sysimg not available (not Electron)"), m("native_module_unavailable");
    if (!(await l(v))) return s.verbose(`platform does not support ${t} conversion`), m("platform_unsupported");
    if (null != i && e.size > i) return s.verbose(`file too large: ${e.size} > ${i}`), m("size_limit_exceeded");
    try {
        let n = await e.arrayBuffer(),
            i = JSON.stringify({ format: "jpeg", quality: Math.min(100, Math.max(1, r)) }),
            o = await v.convertBytes(n, i),
            t = new Blob([o], { type: "image/jpeg" });
        return (
            s.log(`converted ${e.name}: ${e.size} -> ${t.size} bytes in ${u()}ms`),
            {
                success: !0,
                originalFile: e,
                convertedBlob: t,
                sizeBefore: e.size,
                sizeAfter: t.size,
                compressTimeMs: u(),
            }
        );
    } catch (n) {
        return s.warn(`${t} conversion failed for ${e.name}:`, n), m("conversion_failed");
    }
}
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 85,
        r = arguments.length > 2 ? arguments[2] : void 0;
    return m(e, c, n, r);
}
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 85,
        r = arguments.length > 2 ? arguments[2] : void 0;
    return m(e, u, n, r);
}
