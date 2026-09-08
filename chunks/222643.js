t.d(n, { x: () => d });
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(623646),
    r = t(43189),
    o = t(742023),
    c = t(461782),
    u = t(447404);
function d(e) {
    let {
            buttonRef: n,
            dismissed: t,
            onDismiss: d,
            renderComponent: A,
            nudgeAlignIntoViewport: m = !1,
            skipForceHide: h = !1,
        } = e,
        C = i.useContext(c.vG),
        [E, p] = i.useState(""),
        [g, f] = i.useState(!1),
        x = (0, s.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        I = i.useRef(null),
        v = i.useRef(0);
    i.useEffect(() => {
        let e = n.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        i.useEffect(() => {
            h || (p(String(v.current)), f(void 0 !== x && x < (I.current?.clientHeight ?? 300) + 24), (v.current += 1));
        }, [x, I, h]);
    let { preventIdle: T, allowIdle: _ } = (0, u.o)("popup");
    return n?.current == null
        ? null
        : (0, l.jsx)(r.Ay, {
              children: (0, l.jsx)(a.Q, {
                  targetRef: n,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: E,
                  nudgeAlignIntoViewport: m,
                  children: () =>
                      (0, l.jsx)("div", {
                          ref: I,
                          onMouseOver: T,
                          onFocus: T,
                          onBlur: _,
                          onMouseLeave: _,
                          children: A({ hidden: g || C || t, onDismiss: d }),
                      }),
              }),
          });
}
