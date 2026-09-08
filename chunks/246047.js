n.d(t, { c: () => i, v: () => u });
var r = n(477900);
n(582128);
var l = n(621466),
    a = n(607470);
function i(e) {
    return null == e ? null : null != e.domNode ? e.domNode : (0, l.vq)(e, HTMLVideoElement) ? e : null;
}
let u = (e) => {
    let { ref: t, src: n, onSourceError: l, isScrubbing: i, children: u, ...s } = e;
    return (0, r.jsxs)(a.A, { ...s, ref: t, children: [u, null != n && (0, r.jsx)("source", { onError: l, src: n })] });
};
