r.d(e, { A: () => s });
var n = r(477900);
r(582128);
var t = r(833147),
    u = r(625180),
    o = r(580015);
function s(a) {
    let { frame: e, application: r, className: s } = a,
        i = e.id,
        c = (0, n.jsx)(t.A, {
            application: r,
            queryParams: (0, o.A)(e),
            url: e.data.url,
            onIframeMount: (a) => u.A.attachFrameIframe(i, a),
            onIframeUnmount: (a) => u.A.detachFrameIframe(i, a),
            onGuestReload: () => u.A.setFramePrefersPictureInPictureOnNavigateAway(i, !1),
        });
    return null != s ? (0, n.jsx)("div", { className: s, children: c }) : c;
}
