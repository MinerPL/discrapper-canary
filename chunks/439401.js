r.d(t, { A: () => E });
var n = r(477900),
    s = r(582128),
    l = r(503698),
    i = r.n(l),
    a = r(27232),
    o = r(505930),
    u = r(866665),
    c = r(939249),
    h = r(497685),
    d = r(996566),
    m = r(594061),
    p = r(625494),
    g = r(652215),
    f = r(650583),
    I = r(375708),
    R = r(47299);
let E = s.memo(function (e) {
    let { width: t, height: r, src: l, gifSrc: E, url: _, format: y, className: S } = e,
        [C, v] = s.useState(!1),
        [A, w] = s.useState(!1),
        x = (0, d.km)((0, h.xo)(_), A),
        F = x ? I.intl.string(I.t["5/NS74"]) : I.intl.string(I.t.nIH0v8),
        T = x ? a.StarIcon : o.y;
    function N(e) {
        e.preventDefault(),
            e.stopPropagation(),
            v(!0),
            x
                ? (0, h.Tr)(_)
                : ((0, h.wg)({ url: _, src: l, gifSrc: E, width: t, height: r, format: y }),
                  p._.dispatch(g.jej.FAVORITE_GIF));
    }
    function G() {
        (0, m.cE)(), w(!0);
    }
    return (
        s.useEffect(() => {
            if (!C) return;
            let e = setTimeout(() => {
                v(!1);
            }, 500);
            return () => clearTimeout(e);
        }, [C]),
        (0, n.jsx)(u.m, {
            text: F,
            children: (0, n.jsx)(c.D, {
                "aria-label": F,
                ignoreKeyPress: !0,
                className: i()(S, R.jj, { [R.wH]: x, [R.TV]: C }),
                onMouseDown: (e) => e.preventDefault(),
                onMouseEnter: G,
                onFocus: G,
                onClick: N,
                onKeyDown: function (e) {
                    (e.key === f.dh.ENTER || e.key === f.dh.SPACE) && N(e);
                },
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, n.jsx)(T, {
                    color: "currentColor",
                    className: R.Kk,
                    size: "custom",
                    width: 20,
                    height: 20,
                }),
            }),
        })
    );
});
