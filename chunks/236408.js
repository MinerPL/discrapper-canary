l.d(t, { A: () => d });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    u = l.n(r),
    o = l(650583),
    s = l(523600),
    c = l(465410),
    i = l(736541);
function m(e, t, l) {
    let { length: n } = e ?? "";
    return (null == t || n >= t) && (null == l || n <= l);
}
function d(e) {
    let {
            value: t,
            onChange: l,
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
        C = a.useRef(null),
        [j, N] = a.useState(t),
        [R, E] = a.useState(!1),
        [T, A] = a.useState(t),
        F = a.useRef(""),
        Z = a.useRef(!1);
    t !== T && (A(t), m(t, k, w) && N(t));
    let B = "function" == typeof p ? p((R ? j : t) ?? "", { focused: R }) : R ? null : p,
        V = null != B,
        $ = u()(s.hF, { [s.c1]: b }),
        q = {
            ...M,
            ref: C,
            className: u()($, s.ZZ, { [c.yL]: b }),
            value: j,
            onKeyDown: function (e) {
                b || e.key !== o.dh.ENTER
                    ? e.key === o.dh.ESCAPE && (e.stopPropagation(), (Z.current = !0), C.current?.blur())
                    : C.current?.blur();
            },
            onChange: function (e) {
                N(e.currentTarget.value), l?.(e.currentTarget.value);
            },
            onFocus: function (e) {
                (F.current = e.currentTarget.value), E(!0), r?.(e);
            },
            onBlur: function (e) {
                E(!1),
                    Z.current || !m(j, k, w) ? ((Z.current = !1), N(F.current), l?.(F.current)) : h?.(j ?? ""),
                    d?.(e);
            },
        },
        L = null == j || "" === j,
        P = (L ? S : j) ?? "",
        X = V ? B : `${P}\u200b`;
    return (0, n.jsxs)("div", {
        className: u()(s.kL, i[f], { [s.V4]: V, [s.tY]: null != g, [s.$7]: "sm" === g }, y),
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
