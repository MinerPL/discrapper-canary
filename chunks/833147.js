r.d(e, { A: () => s });
var n = r(477900),
    u = r(536246),
    t = r(162802),
    o = r(355361);
function s(a) {
    let { application: e, queryParams: r, url: s, onIframeMount: i, onIframeUnmount: c, onGuestReload: l } = a;
    return (0, n.jsx)(t.o, {
        allowPopups: (0, u.b)(e),
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
