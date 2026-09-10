t.d(l, { A: () => d });
var n = t(477900),
    a = t(582128),
    r = t(503698),
    u = t.n(r),
    o = t(650583),
    s = t(523600),
    c = t(465410),
    i = t(736541);
function m(e, l, t) {
    let { length: n } = e ?? "";
    return (null == l || n >= l) && (null == t || n <= t);
}
function d(e) {
    let {
            value: l,
            onChange: t,
            onFocus: r,
            onBlur: d,
            onCommit: h,
            variant: f,
            preview: p,
            trailing: v,
            multiline: b = !1,
            matchControlHeight: g,
            maxRows: x,
            minLength: k,
            className: y,
            ...M
        } = e,
        { placeholder: S, maxLength: w } = M,
        j = a.useRef(null),
        [C, N] = a.useState(l),
        [R, E] = a.useState(!1),
        [T, A] = a.useState(l),
        F = a.useRef(""),
        Z = a.useRef(!1);
    l !== T && (A(l), m(l, k, w) && N(l));
    let B = "function" == typeof p ? p((R ? C : l) ?? "", { focused: R }) : R ? null : p,
        V = null != B,
        $ = u()(s.hF, { [s.c1]: b }),
        q = {
            ...M,
            ref: j,
            className: u()($, s.ZZ, { [c.yL]: b }),
            value: C,
            onKeyDown: function (e) {
                b || e.key !== o.dh.ENTER
                    ? e.key === o.dh.ESCAPE && (e.stopPropagation(), (Z.current = !0), j.current?.blur())
                    : j.current?.blur();
            },
            onChange: function (e) {
                N(e.currentTarget.value), t?.(e.currentTarget.value);
            },
            onFocus: function (e) {
                (F.current = e.currentTarget.value), E(!0), r?.(e);
            },
            onBlur: function (e) {
                E(!1),
                    Z.current || !m(C, k, w) ? ((Z.current = !1), N(F.current), t?.(F.current)) : h?.(C ?? ""),
                    d?.(e);
            },
        },
        L = null == C || "" === C,
        P = (L ? S : C) ?? "",
        X = V ? B : `${P}\u200b`;
    return (0, n.jsxs)("div", {
        className: u()(s.kL, i[f], { [s.V4]: V, [s.j9]: null != x, [s.tY]: null != g, [s.$7]: "sm" === g }, y),
        children: [
            b ? (0, n.jsx)("textarea", { ...q, rows: 1 }) : (0, n.jsx)("input", { ...q, type: "text" }),
            (0, n.jsx)("div", {
                className: u()($, s.St, { [s.tb]: !V && L, [s.gO]: null != x }),
                style: null != x ? { "--custom-editable-text-max-rows": x } : void 0,
                "aria-hidden": "true",
                children: X,
            }),
            null != v && (0, n.jsx)("div", { className: s.ZY, children: v }),
        ],
    });
}
