n.d(t, { A: () => h, t: () => R });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    u = n.n(l),
    i = n(207119),
    o = n(834730),
    c = n(717421),
    d = n(475743),
    s = n(626584),
    m = n(572009),
    f = n(14115),
    g = n(652215),
    p = n(115093),
    E = n(398293);
let N = new s.A("BalanceCounter"),
    b = (0, m._$)(void 0) === p.B.PRODUCTION;
function C(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function R(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: l = "right",
            textColor: i,
            className: c,
            ...s
        } = e,
        m = null === t,
        [f, g] = (0, a.useState)(null),
        p = (0, a.useMemo)(() => C(t), [t]),
        N = (0, d.Ay)(p) ?? 0,
        b = (0, a.useMemo)(() => (null === f ? Math.max(N, p) : Math.max(p, f)), [N, p, f]),
        R = `${m ? 0 : b}ch`,
        { marginClassName: h, textAlignClassName: P } = (0, a.useMemo)(
            () =>
                "left" === l
                    ? { marginClassName: E.v6, textAlignClassName: E.Sc }
                    : { marginClassName: E.sl, textAlignClassName: E.$j },
            [l],
        );
    return (0, r.jsx)(o.E, {
        variant: n,
        color: i,
        className: u()(E.SP, m ? void 0 : h, P, c),
        style: { width: R, opacity: m ? "0" : 1 },
        children: m
            ? null
            : (0, r.jsx)(A, {
                  onSetDigitCount: (e) => {
                      e !== f && g(e);
                  },
                  value: t,
                  ...s,
              }),
    });
}
let A = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: l = g.tEg,
                onValueReached: u = g.tEg,
                targetTotalCounterTime: o = 3e3,
                isRenderedWithoutLottieAnimation: d,
            } = e,
            [s, m] = (0, a.useState)(0),
            p = (0, a.useRef)(null),
            E = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === p.current) {
                p.current = t;
                return;
            }
            let e = null !== p.current ? t - p.current : t;
            (0 !== e && null !== p.current && l(e),
                (E.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
        }, [t, l]);
        let R = t ?? 0,
            A = p.current ?? R,
            { duration: h, delay: P } = (0, f.v)(R - A, { targetTime: o, isRenderedWithoutLottieAnimation: d }),
            { number: D } = (0, c.z)({
                from: { number: p.current ?? R },
                number: R,
                config: { mass: 1, tension: 20, friction: 10, duration: h },
                delay: P,
                onStart: () => {
                    n(C(A));
                },
                onRest: () => {
                    if ((m(s + 1), u(), !b && null !== E.current && null !== p.current)) {
                        let e = Date.now();
                        N.log("Balance Counter finished updating: ", {
                            time: e - E.current.lastChangedAt,
                            delta: R - p.current,
                        });
                    }
                    (n(C(R)), (p.current = R));
                },
            }),
            S = C(Math.max(t ?? 0, D.get()));
        return (0, r.jsx)(i.animated.div, {
            style: { width: `calc(${S}ch)` },
            children: D.to((e) => `${e.toFixed(0)}`),
        });
    },
    h = R;
