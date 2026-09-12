n.d(t, { A: () => d });
var a = n(582128),
    l = n(440745),
    r = n.n(l),
    i = n(317097),
    s = n(17928),
    o = n(775602);
let d = function (e) {
    let t = (0, s.bG)([o.Ay], () => (o.Ay.desaturateUserColors ? o.Ay.saturation : 1));
    return (0, a.useMemo)(() => {
        let { h: n, s: a, l } = r()((0, i.Hl)(e)).toHsl(),
            s = r()({ h: n, s: a * t, l });
        return { hex: s.toHexString(), hsl: s.toHslString() };
    }, [e, t]);
};
