(r.r(n),
    r.d(n, {
        ImageConversionFailureReason: () => c,
        convertFileToJpeg: () => f,
        maybeConvertHeicToJpeg: () => p,
        maybeConvertJxrToJpeg: () => v,
        renameToJpegExtension: () => s.DP,
    }));
var i,
    o = r(77729),
    t = r(626584),
    a = r(731068),
    s = r(452661);
let l = new t.A("ImageConversion");
var c =
    (((i = {}).NATIVE_MODULE_UNAVAILABLE = "native_module_unavailable"),
    (i.PLATFORM_UNSUPPORTED = "platform_unsupported"),
    (i.SIZE_LIMIT_EXCEEDED = "size_limit_exceeded"),
    (i.CONVERSION_FAILED = "conversion_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    i);
let u = { label: "heic", matches: s.E5, canConvert: (e) => e.canConvertHeic() },
    m = { label: "jxr", matches: s.Tn, canConvert: (e) => e.canConvertJxr() };
async function d(e, n, r, i) {
    let { label: t, matches: s, canConvert: c } = n;
    if (!s(e)) return null;
    let u = performance.now();
    function m() {
        return Math.round(performance.now() - u);
    }
    function d(n) {
        return { success: !1, sizeBefore: e.size, sizeAfter: e.size, reason: n, compressTimeMs: m() };
    }
    let p = o.A?.sysimg;
    if (null == p) return (l.verbose("sysimg not available (not Electron)"), d("native_module_unavailable"));
    try {
        if (!(await c(p))) return (l.verbose(`platform does not support ${t} conversion`), d("platform_unsupported"));
        if (null != i && e.size > i) return (l.verbose(`file too large: ${e.size} > ${i}`), d("size_limit_exceeded"));
        let n = await e.arrayBuffer(),
            o = Math.min(100, Math.max(1, r)),
            s = JSON.stringify({ format: "jpeg", quality: o }),
            u = await p.convertBytes(n, s),
            v = new Blob([u], { type: "image/jpeg" }),
            f = m();
        l.log(`converted ${e.name}: ${e.size} -> ${v.size} bytes in ${f}ms`);
        let g = null;
        try {
            g = (await p.getBackendName?.()) ?? null;
        } catch {
            g = null;
        }
        return {
            success: !0,
            convertedBlob: v,
            sizeBefore: e.size,
            sizeAfter: v.size,
            compressTimeMs: f,
            imageCompressionQuality: o / 100,
            imageEncoderType: (function (e) {
                switch (e) {
                    case "WIC":
                        return a.ad.WIC;
                    case "ImageIO":
                        return a.ad.IMAGEIO;
                    case "stub":
                        return a.ad.SYSIMG_STUB;
                    default:
                        return a.ad.SYSIMG_UNKNOWN;
                }
            })(g),
        };
    } catch (n) {
        return (l.warn(`${t} conversion failed for ${e.name}:`, n), d("conversion_failed"));
    }
}
function p(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 85,
        r = arguments.length > 2 ? arguments[2] : void 0;
    return d(e, u, n, r);
}
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 85,
        r = arguments.length > 2 ? arguments[2] : void 0;
    return d(e, m, n, r);
}
async function f(e, n, r, i) {
    let o = await ("heic" === n ? p(e, r, i) : v(e, r, i));
    return null == o
        ? null
        : o.success && null != o.convertedBlob
          ? (l.log(`${n} conversion worked for ${e.name}: ${o.sizeBefore} -> ${o.sizeAfter} bytes`),
            {
                convertedFile: new File([o.convertedBlob], (0, s.DP)(e.name), {
                    type: "image/jpeg",
                    lastModified: e.lastModified,
                }),
                analytics: {
                    convertedMimeType: "image/jpeg",
                    compressTimeMs: o.compressTimeMs,
                    imageCompressionQuality: o.imageCompressionQuality,
                    imageEncoderType: o.imageEncoderType,
                },
            })
          : {
                convertedFile: null,
                analytics: {
                    convertedMimeType: null,
                    conversionFailureReason: o.reason ?? "unknown_error",
                    compressTimeMs: o.compressTimeMs,
                },
            };
}
