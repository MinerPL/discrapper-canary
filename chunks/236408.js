t.d(n, { A: () => f });
var l = t(477900),
    r = t(582128),
    a = t(503698),
    u = t.n(a),
    o = t(259678),
    s = t(650583),
    c = t(523600),
    i = t(465410),
    d = t(736541);
function m(e, n, t) {
    let { length: l } = e ?? "";
    return (null == n || l >= n) && (null == t || l <= t);
}
function f(e) {
    let {
            inputRef: n,
            value: t,
            onChange: a,
            onFocus: f,
            onBlur: h,
            onCommit: v,
            variant: p,
            preview: g,
            trailing: x,
            error: b = !1,
            warning: M = !1,
            multiline: S = !1,
            matchControlHeight: k,
            maxRows: w,
            minLength: y,
            className: j,
            ...C
        } = e,
        { placeholder: N, maxLength: R } = C,
        T = r.useRef(null),
        [E, A] = r.useState(t),
        [F, Z] = r.useState(!1),
        [B, D] = r.useState(t),
        V = r.useRef(""),
        $ = r.useRef(!1),
        q = r.useRef(!1);
    t !== B && (D(t), m(t, y, R) && A(t));
    let J = "function" == typeof g ? g((F ? E : t) ?? "", { focused: F }) : F ? null : g,
        L = null != J,
        P = u()(c.hF, { [c.c1]: S }),
        X = {
            ...C,
            ref: n,
            "aria-invalid": b,
            className: u()(P, c.ZZ, { [i.yL]: S }),
            value: E,
            onKeyDown: function (e) {
                S || e.key !== s.dh.ENTER
                    ? e.key === s.dh.ESCAPE && (e.stopPropagation(), ($.current = !0), e.currentTarget.blur())
                    : e.currentTarget.blur();
            },
            onChange: function (e) {
                (A(e.currentTarget.value), a?.(e.currentTarget.value));
            },
            onFocus: function (e) {
                let n = e.currentTarget;
                ((V.current = n.value),
                    Z(!0),
                    q.current || n.setSelectionRange(n.value.length, n.value.length),
                    f?.(e));
            },
            onBlur: function (e) {
                (Z(!1),
                    (q.current = !1),
                    $.current || !m(E, y, R) ? (($.current = !1), A(V.current), a?.(V.current)) : v?.(E ?? ""),
                    h?.(e));
            },
            onMouseDown: function () {
                q.current = !0;
            },
        },
        Y = null == E || "" === E,
        _ = (Y ? N : E) ?? "",
        K = L ? J : `${_}\u200b`;
    return (0, l.jsxs)("div", {
        ref: T,
        className: u()(
            c.kL,
            d[p],
            { [c.V4]: L, [c.JD]: b, [c.xe]: M && !b, [c.j9]: null != w, [c.tY]: null != k, [c.$7]: "sm" === k },
            j,
        ),
        children: [
            (0, l.jsx)(o.vN, {
                ringTarget: T,
                children: S ? (0, l.jsx)("textarea", { ...X, rows: 1 }) : (0, l.jsx)("input", { ...X, type: "text" }),
            }),
            (0, l.jsx)("div", {
                className: u()(P, c.St, { [c.tb]: !L && Y, [c.gO]: null != w }),
                style: null != w ? { "--custom-editable-text-max-rows": w } : void 0,
                "aria-hidden": "true",
                children: K,
            }),
            null != x && (0, l.jsx)("div", { className: c.ZY, children: x }),
        ],
    });
}
