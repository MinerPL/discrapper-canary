n.d(t, { m: () => u });
var r = n(243399),
    i = n(206311),
    a = n(411211),
    o = n(501974);
function u(e, t) {
    let n = [],
        u = !1,
        s = !1,
        l = (0, o.n)(e),
        c = l.dataLocale,
        d = a.Y.localeData[c];
    if (!d) throw TypeError("Invalid locale");
    let f = l.numberingSystem,
        h = d.digitalFormat[f];
    for (let e = 0; e < i.u.length && !u; e++) {
        let a = i.u[e],
            o = t[a.valueField],
            c = l[a.styleSlot],
            d = l[a.displaySlot],
            { unit: f, numberFormatUnit: p } = a,
            m = Object.create(null);
        ("seconds" === f || "milliseconds" === f || "microseconds" === f) &&
            "numeric" === ("seconds" === f ? l.milliseconds : "milliseconds" === f ? l.microseconds : l.nanoseconds) &&
            ("seconds" === f
                ? (o += t.milliseconds / 1e3 + t.microseconds / 1e6 + t.nanoseconds / 1e9)
                : "milliseconds" === f
                  ? (o += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                  : (o += t.nanoseconds / 1e3),
            void 0 === l.fractionalDigits
                ? ((m.maximumFractionDigits = 9), (m.minimumFractionDigits = 0))
                : ((m.maximumFractionDigits = l.fractionalDigits), (m.minimumFractionDigits = l.fractionalDigits)),
            (m.roundingMode = "trunc"),
            (u = !0));
        if (0 !== o || "auto" !== d) {
            let e;
            ((m.numberingSystem = l.numberingSystem),
                "2-digit" === c && (m.minimumIntegerDigits = 2),
                "2-digit" !== c && "numeric" !== c && ((m.style = "unit"), (m.unit = p), (m.unitDisplay = c)));
            let t = (0, r.Nt)(l.locale, m);
            (s ? (e = n[n.length - 1]).push({ type: "literal", value: h }) : (e = []),
                t.formatToParts(o).forEach(({ type: t, value: n }) => {
                    e.push({ type: t, value: n, unit: p });
                }),
                s || (("2-digit" === c || "numeric" === c) && (s = !0), n.push(e)));
        } else s = !1;
    }
    let p = Object.create(null);
    p.type = "unit";
    let m = l.style;
    ("digital" === m && (m = "short"), (p.style = m));
    let _ = (0, r.A4)(l.locale, p),
        g = [];
    for (let e of n) {
        let t = "";
        for (let { value: n } of e) t += n;
        g.push(t);
    }
    let v = _.formatToParts(g),
        y = 0,
        b = n.length,
        D = [];
    for (let { type: e, value: t } of v)
        if ("element" === e) {
            for (let e of ((0, r.V1)(y < b, "Index out of bounds"), n[y])) D.push(e);
            y++;
        } else ((0, r.V1)("literal" === e, "Type must be literal"), D.push({ type: "literal", value: t }));
    return D;
}
n(632459);
