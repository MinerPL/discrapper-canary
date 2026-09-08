s.d(r, { A: () => m });
var a = s(477900);
s(582128);
var i = s(503698),
    t = s.n(i),
    n = s(754474),
    c = s(744808),
    d = s(875741),
    l = s(375708),
    o = s(70040),
    u = s(423393);
function f(e) {
    let { responsive: r } = e;
    return !0 !== r;
}
function p(e) {
    return e.order === n.u.BACK && !0 !== e.responsive;
}
function h(e) {
    return e.order === n.u.FRONT && !0 !== e.responsive;
}
function m(e) {
    let { frame: r, transparentBackground: s = !1, ...i } = e,
        { profileFrameStyle: n, profileFrameClassName: m } = (0, d.A)(r);
    return (0, a.jsxs)("div", {
        className: t()(o.i1, m),
        style: n,
        role: "img",
        "aria-label": l.intl.formatToPlainString(l.t["DT/PwH"], { a11y_text: r.label }),
        children: [
            s &&
                (0, a.jsx)("div", {
                    className: o.tL,
                    children: (0, a.jsx)("div", {
                        className: o.HX,
                        children: (0, a.jsx)(c.A, { frame: r, filterLayer: p, ...i, isPreview: !0 }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: o.HX,
                children: [
                    (0, a.jsx)("img", {
                        src: u.A,
                        alt: "",
                        className: t()(o.wt, o.EX, { [o.GA]: s }),
                        "aria-hidden": !0,
                        draggable: !1,
                    }),
                    (0, a.jsx)(c.A, { frame: r, filterLayer: s ? h : f, ...i, isPreview: !0 }),
                ],
            }),
        ],
    });
}
