a.d(t, { A: () => d, w: () => u });
var l,
    s = a(477900),
    n = a(582128),
    r = a(503698),
    i = a.n(r),
    o = a(834730),
    c = a(375708),
    m = a(899830),
    u = (((l = {})[(l.SMALL = 0)] = "SMALL"), (l[(l.LARGE = 1)] = "LARGE"), l);
function d(e) {
    let { game: t, size: a, className: l, imageSize: r, onLoad: u, onError: d } = e,
        [x, h] = n.useState(!1),
        v = t.name,
        g = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        j = t.getCoverURL(r);
    return null == j || x
        ? (0, s.jsxs)("div", {
              className: i()(m.N, l),
              children: [
                  (0, s.jsx)("div", { className: m.j }),
                  (0, s.jsx)(o.E, {
                      variant: 1 === a ? "text-md/medium" : "text-xs/medium",
                      color: "text-overlay-light",
                      lineClamp: 1 === a ? 4 : 3,
                      children: v,
                  }),
                  (0, s.jsx)("div", { className: m.j }),
                  (0, s.jsx)(o.E, {
                      variant: 1 === a ? "text-sm/normal" : "text-xxs/normal",
                      color: "text-overlay-light",
                      children: null != g ? `(${g?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, s.jsx)("img", {
              className: l,
              src: j,
              alt: c.intl.formatToPlainString(c.t["3ev90U"], { game: v }),
              onError: function (e) {
                  (h(!0), d?.(e));
              },
              onLoad: function (e) {
                  (h(!1), u?.(e));
              },
              draggable: !1,
          });
}
