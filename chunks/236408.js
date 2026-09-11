l.d(a, { A: () => b });
var n = l(477900),
    t = l(582128),
    r = l(503698),
    u = l.n(r),
    i = l(612324),
    o = l(281595),
    s = l(452027),
    c = l(259678),
    d = l(866665),
    m = l(408278),
    h = l(650583),
    p = l(523600),
    v = l(969490),
    f = l(736541);
function b(e) {
    let {
            inputRef: a,
            id: l,
            defaultDirty: r = !1,
            description: b,
            disabled: g = !1,
            error: x,
            fullWidth: j = !0,
            helperText: k,
            hideLabel: y = !1,
            label: M,
            maxRows: S,
            minLength: w,
            multiline: C = !1,
            onBlur: N,
            onChange: R,
            onCommit: T,
            onFocus: A,
            paddingBlock: D = "sm",
            paddingInline: E = "md",
            preview: q,
            readOnly: F = !1,
            required: Z,
            size: B,
            textVariant: P = "text-sm/normal",
            trailing: V,
            value: Y,
            ...$
        } = e,
        { maxLength: z, placeholder: H } = $,
        J = (0, i.A)(a),
        K = t.useRef(null),
        [L, O] = t.useState(Y),
        [X, _] = t.useState(!1),
        [G, I] = t.useState(Y),
        Q = t.useRef(""),
        U = t.useRef(!1),
        W = t.useRef(!1),
        {
            hasError: ee,
            errorMessage: ea,
            setShouldValidate: el,
        } = (0, o.Y)({ defaultDirty: r, error: x, maxLength: z, minLength: w, validateOn: "change", value: L });
    Y !== G && (I(Y), O(Y));
    let en = "function" == typeof q ? q((X ? L : Y) ?? "", { focused: X }) : X ? null : q,
        et = null != en,
        er = u()(p.hF, { [p.c1]: C }),
        eu = {
            ...$,
            ref: J,
            className: u()(er, p.ZZ, { [v.qD]: C }),
            disabled: g,
            minLength: w,
            onBlur: function (e) {
                (_(!1),
                    (W.current = !1),
                    F ||
                        (U.current ||
                        !(function (e, a, l) {
                            let { length: n } = e ?? "";
                            return (null == a || n >= a) && (null == l || n <= l);
                        })(L, w, z)
                            ? ((U.current = !1), O(Q.current), el(r), R?.(Q.current))
                            : T?.(L ?? "")),
                    N?.(e));
            },
            onChange: function (e) {
                (O(e.currentTarget.value), el(!0), R?.(e.currentTarget.value));
            },
            onFocus: function (e) {
                let a = e.currentTarget;
                ((Q.current = a.value),
                    _(!0),
                    W.current || a.setSelectionRange(a.value.length, a.value.length),
                    A?.(e));
            },
            onKeyDown: function (e) {
                F ||
                    (C || e.key !== h.dh.ENTER
                        ? e.key === h.dh.ESCAPE && (e.stopPropagation(), (U.current = !0), e.currentTarget.blur())
                        : e.currentTarget.blur());
            },
            onMouseDown: function () {
                W.current = !0;
            },
            readOnly: F,
            required: Z,
            value: L ?? "",
        },
        ei = null == L || "" === L,
        eo = (ei ? H : L) ?? "",
        es = et ? en : `${eo}\u200b`,
        ec = g || F || V?.disabled,
        ed = (0, n.jsx)(s.D, {
            id: l,
            description: b,
            disabled: g,
            errorMessage: ee ? ea : void 0,
            helperText: ee ? void 0 : k,
            hideLabel: y,
            label: M,
            required: Z,
            children: (e) => {
                let { controlId: a, describedById: l, errorMessageId: t } = e,
                    r = { ...eu, id: a, "aria-describedby": l, "aria-errormessage": t, "aria-invalid": ee };
                return (0, n.jsxs)("div", {
                    ref: K,
                    className: u()(p.kL, "inherit" !== P && f[P], {
                        [p.V4]: et,
                        [p.JD]: ee,
                        [p.j9]: null != S,
                        [p.tY]: null != B,
                        [p.$7]: "sm" === B,
                        [p.pH]: null != V,
                    }),
                    "data-disabled": g,
                    "data-padding-block": D,
                    "data-padding-inline": E,
                    "data-read-only": F,
                    children: [
                        (0, n.jsx)(c.vN, {
                            ringTarget: K,
                            children: C
                                ? (0, n.jsx)("textarea", { ...r, rows: 1 })
                                : (0, n.jsx)("input", { ...r, type: "text" }),
                        }),
                        (0, n.jsx)("div", {
                            "aria-hidden": "true",
                            className: u()(er, p.St, { [p.tb]: !et && ei, [p.gO]: null != S }),
                            style: null != S ? { "--custom-editable-text-max-rows": S } : void 0,
                            children: es,
                        }),
                        null != V &&
                            (0, n.jsx)("div", {
                                className: p.ZY,
                                children: (0, n.jsx)(d.m, {
                                    asContainer: !0,
                                    ariaHidden: !0,
                                    shouldShow: !ec,
                                    text: V.tooltip ?? V.label,
                                    children: (0, n.jsx)(m.K, {
                                        buttonRef: V.buttonRef,
                                        "aria-haspopup": V.hasPopup,
                                        "aria-label": V.label,
                                        disabled: ec,
                                        icon: V.icon,
                                        onClick: V.onClick,
                                        size: "sm",
                                        type: "button",
                                        variant: "icon-only",
                                    }),
                                }),
                            }),
                    ],
                });
            },
        });
    return (0, n.jsx)("div", { className: u()(p.zr, { [p.N8]: !j }), children: ed });
}
