l.d(t, { Ay: () => m, b9: () => c });
var n = l(477900);
l(582128);
var a = l(903586),
    s = l(191521),
    i = l(196582),
    r = l(883455),
    u = l(50617),
    d = l(375708),
    o = l(13699);
function c(e) {
    let t = (0, a.GO)(e, { turnActive: !0 }),
        l = (0, a.SY)(t.steps);
    return null != l
        ? (0, a.WQ)(l)
        : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? d.intl.string(u.default.nv6pUM));
}
function m(e) {
    let { projectId: t, steps: l, fallbackLabel: c, live: m, durationMs: f, connectsDown: h = !1, closed: x = !1 } = e,
        p = (0, a.SY)(l),
        g = m ? void 0 : f,
        k =
            null != g
                ? (function (e) {
                      let t = Math.max(1, Math.round(e / 1e3));
                      if (t < 60) return d.intl.formatToPlainString(u.default["49T8W0"], { count: t });
                      let l = Math.round(t / 60);
                      return l < 60
                          ? d.intl.formatToPlainString(u.default.NkZO2t, { count: l })
                          : d.intl.formatToPlainString(u.default["2qYUUZ"], {
                                hours: Math.floor(l / 60),
                                minutes: l % 60,
                            });
                  })(g)
                : null != p
                  ? (0, a.WQ)(p)
                  : (c ?? d.intl.string(u.default.nv6pUM)),
        v = l.length > 1 || l.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, n.jsx)(i.A, {
        glyph: (0, n.jsx)(s.A, {}),
        line: k,
        anchor: !0,
        live: m,
        settled: null != g || (!m && x),
        connectsDown: h,
        detail: v
            ? (0, n.jsx)("ol", {
                  className: o.dO,
                  children: l.map((e) =>
                      (0, n.jsx)(r.A, { projectId: t, node: e, presentation: "detail", active: m && e === p }, e.id),
                  ),
              })
            : void 0,
    });
}
