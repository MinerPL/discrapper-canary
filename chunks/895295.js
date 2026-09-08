l.d(t, { m: () => m });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
    a = l(785007),
    u = l(85463),
    c = l(834730),
    o = l(517837);
function d(e) {
    let { text: t } = e,
        l = (0, u.N)();
    return (0, n.jsx)(c.E, { tag: "span", variant: l, color: "text-overlay-light", className: o.Fi, children: t });
}
function m(e) {
    let { headingComponent: t, headingSubText: l, value: i, planRadioOptions: u, ...m } = e,
        x = r.useMemo(
            () =>
                null == u
                    ? []
                    : u.map((e) => {
                          let t = e.value === i,
                              l = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, n.jsxs)("div", {
                                  className: o.VH,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: o.C2,
                                          children: [
                                              (0, n.jsx)(c.E, {
                                                  variant: "text-md/medium",
                                                  color: l,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, n.jsx)(d, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: o.Cq,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: o.SS,
                                                  children: [
                                                      null != e.subTextStrikethrough &&
                                                          (0, n.jsx)(c.E, {
                                                              tag: "span",
                                                              variant: "text-md/medium",
                                                              color: "text-subtle",
                                                              className: o.fF,
                                                              children: e.subTextStrikethrough,
                                                          }),
                                                      (0, n.jsx)(c.E, {
                                                          tag: "span",
                                                          variant: "text-md/medium",
                                                          color: l,
                                                          children: e.subText,
                                                      }),
                                                  ],
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, n.jsx)(c.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-subtle",
                                                      children: e.secondarySubText,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              value: e.value,
                              disabled: e.isDisabled,
                              radioBarClassName: s()(o.tG, { [o.uA]: t }),
                          };
                      }),
            [u, i],
        );
    return (0, n.jsxs)("div", {
        children: [
            t,
            null != l &&
                (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", className: o.cm, children: l }),
            (0, n.jsx)(a.$d, { ...m, options: x, value: i, className: o.ul }),
        ],
    });
}
