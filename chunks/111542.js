n.d(t, { N: () => l, t: () => s });
var i = n(565150),
    r = n(452661);
function a(e) {
    return e.platform !== i.xz.WEB || !0 === e.imageConversionEvaluated || null == e.file
        ? null
        : (0, r.E5)(e.file)
          ? "heic"
          : (0, r.Tn)(e.file)
            ? "jxr"
            : null;
}
function s(e) {
    return null != a(e);
}
async function l(e) {
    let t = a(e);
    if (null == t || e.platform !== i.xz.WEB) return e;
    try {
        let [
                {
                    maybeConvertHeicToJpeg: i,
                    maybeConvertJxrToJpeg: a,
                    renameToJpegExtension: s,
                    ImageConversionFailureReason: l,
                },
                { HeicUploadConversionExperiment: o },
                { JxrUploadConversionExperiment: d },
                { default: c },
            ] = await Promise.all([
                n.e("86851").then(n.bind(n, 85582)),
                Promise.resolve().then(n.bind(n, 669646)),
                n.e("320480").then(n.bind(n, 231971)),
                Promise.resolve().then(n.bind(n, 860840)),
            ]),
            {
                experiment: u,
                convert: _,
                sourceMimeType: E,
            } = "heic" === t
                ? { experiment: o, convert: i, sourceMimeType: r.II }
                : { experiment: d, convert: a, sourceMimeType: r.NX },
            A = e.file,
            h = {
                originalContentType:
                    e.compressionMetadata?.originalContentType != null &&
                    "" !== e.compressionMetadata.originalContentType
                        ? e.compressionMetadata.originalContentType
                        : E(A),
                preCompressionSize: e.compressionMetadata?.preCompressionSize ?? A.size,
            },
            I = u.getConfig({ location: `imagePreConvert.maybePreConvertImageItem.${t}` });
        if (!I.enabled) return { ...e, compressionMetadata: h, imageConversionEvaluated: !0 };
        let f = await _(A, I.quality, I.maxFileSizeBytes);
        if (null == f || !f.success || null == f.convertedBlob) {
            let t =
                null == f
                    ? void 0
                    : {
                          convertedMimeType: null,
                          conversionFailureReason: f.reason ?? l.UNKNOWN_ERROR,
                          compressTimeMs: f.compressTimeMs,
                      };
            return { ...e, compressionMetadata: h, imageConversionEvaluated: !0, imageConversionAnalytics: t };
        }
        let p = new File([f.convertedBlob], s(A.name), { type: "image/jpeg", lastModified: A.lastModified }),
            T = (await c.fromBlob(A).catch(() => null)) ?? void 0;
        return {
            ...e,
            file: p,
            compressionMetadata: h,
            originalMd5: T,
            imageConversionEvaluated: !0,
            imageConversionAnalytics: { convertedMimeType: "image/jpeg", compressTimeMs: f.compressTimeMs },
        };
    } catch {
        return e;
    }
}
