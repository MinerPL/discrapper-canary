(r.r(n),
    r.d(n, {
        HeicConversionFailureReason: () => u,
        ImageConversionFailureReason: () => u,
        isHeicFile: () => s.E5,
        isJxrFile: () => s.Tn,
        maybeConvertHeicToJpeg: () => f,
        maybeConvertJxrToJpeg: () => v,
        renameToJpegExtension: () => s.DP,
    }));
var i,
    t = r(77729),
    a = r(626584),
    o = r(731068),
    s = r(452661);
let l = new a.A("ImageConversion");
var u =
    (((i = {}).NATIVE_MODULE_UNAVAILABLE = "native_module_unavailable"),
    (i.PLATFORM_UNSUPPORTED = "platform_unsupported"),
    (i.SIZE_LIMIT_EXCEEDED = "size_limit_exceeded"),
    (i.CONVERSION_FAILED = "conversion_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    i);
let c = { label: "heic", matches: s.E5, canConvert: (e) => e.canConvertHeic() },
    m = { label: "jxr", matches: s.Tn, canConvert: (e) => e.canConvertJxr() };
async function d(e, n, r, i) {
    let { label: a, matches: s, canConvert: u } = n;
    if (!s(e)) return null;
    let c = performance.now();
    function m() {
        return Math.round(performance.now() - c);
    }
    function d(n) {
        return { success: !1, originalFile: e, sizeBefore: e.size, sizeAfter: e.size, reason: n, compressTimeMs: m() };
    }
    let f = t.A?.sysimg;
    if (null == f) return (l.verbose("sysimg not available (not Electron)"), d("native_module_unavailable"));
    try {
        if (!(await u(f))) return (l.verbose(`platform does not support ${a} conversion`), d("platform_unsupported"));
        if (null != i && e.size > i) return (l.verbose(`file too large: ${e.size} > ${i}`), d("size_limit_exceeded"));
        let n = await e.arrayBuffer(),
            t = Math.min(100, Math.max(1, r)),
            s = JSON.stringify({ format: "jpeg", quality: t }),
            c = await f.convertBytes(n, s),
            v = new Blob([c], { type: "image/jpeg" }),
            p = m();
        l.log(`converted ${e.name}: ${e.size} -> ${v.size} bytes in ${p}ms`);
        let _ = null;
        try {
            _ = (await f.getBackendName?.()) ?? null;
        } catch {
            _ = null;
        }
        return {
            success: !0,
            originalFile: e,
            convertedBlob: v,
            sizeBefore: e.size,
            sizeAfter: v.size,
            compressTimeMs: p,
            imageCompressionQuality: t / 100,
            imageEncoderType: (function (e) {
                switch (e) {
                    case "WIC":
                        return o.ad.WIC;
                    case "ImageIO":
                        return o.ad.IMAGEIO;
                    case "stub":
                        return o.ad.SYSIMG_STUB;
                    default:
                        return o.ad.SYSIMG_UNKNOWN;
                }
            })(_),
        };
    } catch (n) {
        return (l.warn(`${a} conversion failed for ${e.name}:`, n), d("conversion_failed"));
    }
}
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 85,
        r = arguments.length > 2 ? arguments[2] : void 0;
    return d(e, c, n, r);
}
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 85,
        r = arguments.length > 2 ? arguments[2] : void 0;
    return d(e, m, n, r);
}
