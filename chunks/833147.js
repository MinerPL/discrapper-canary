r.d(e, { A: () => s });
var n = r(477900),
    t = r(536246),
    u = r(162802),
    o = r(355361);
function s(a) {
    let { application: e, queryParams: r, url: s, onIframeMount: i, onIframeUnmount: c, onGuestReload: l } = a;
    return (0, n.jsx)(u.o, {
        allowPopups: (0, t.b)(e),
        referrerPolicy: "origin",
        url: s,
        onIframeMount: i,
        onIframeUnmount: c,
        onGuestReload: l,
        queryParams: r,
        className: o.p,
        shouldRefocus: !1,
    });
}
