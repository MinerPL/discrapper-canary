n.d(a, { A: () => b });
var l = n(477900),
    t = n(582128),
    r = n(503698),
    u = n.n(r),
    i = n(612324),
    o = n(281595),
    s = n(452027),
    c = n(259678),
    d = n(866665),
    m = n(408278),
    h = n(650583),
    p = n(523600),
    f = n(969490),
    v = n(736541);
function b(e) {
    let {
            inputRef: a,
            id: n,
            defaultDirty: r = !1,
            description: b,
            disabled: g = !1,
            error: x,
            fullWidth: k = !0,
            helperText: y,
            hideLabel: j = !1,
            label: M,
            maxRows: S,
            minLength: w,
            multiline: C = !1,
            onBlur: R,
            onChange: N,
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
        { maxLength: H, placeholder: J } = $,
        K = (0, i.A)(a),
        L = t.useRef(null),
        [O, X] = t.useState(Y),
        [_, z] = t.useState(!1),
        [G, I] = t.useState(Y),
        Q = t.useRef(""),
        U = t.useRef(!1),
        W = t.useRef(!1),
        {
            hasError: ee,
            errorMessage: ea,
            setShouldValidate: en,
        } = (0, o.Y)({ defaultDirty: r, error: x, maxLength: H, minLength: w, validateOn: "change", value: O });
    Y !== G && (I(Y), X(Y));
    let el = "function" == typeof q ? q((_ ? O : Y) ?? "", { focused: _ }) : _ ? null : q,
        et = null != el,
        er = u()(p.hF, { [p.c1]: C }),
        eu = {
            ...$,
            ref: K,
            className: u()(er, p.ZZ, { [f.qD]: C }),
            disabled: g,
            minLength: w,
            onBlur: function (e) {
                (z(!1),
                    (W.current = !1),
                    F ||
                        (U.current ||
                        !(function (e, a, n) {
                            let { length: l } = e ?? "";
                            return (null == a || l >= a) && (null == n || l <= n);
                        })(O, w, H)
                            ? ((U.current = !1), X(Q.current), en(r), N?.(Q.current))
                            : T?.(O ?? "")),
                    R?.(e));
            },
            onChange: function (e) {
                (X(e.currentTarget.value), en(!0), N?.(e.currentTarget.value));
            },
            onFocus: function (e) {
                let a = e.currentTarget;
                ((Q.current = a.value),
                    z(!0),
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
            value: O ?? "",
        },
        ei = null == O || "" === O,
        eo = (ei ? J : O) ?? "",
        es = et ? el : `${eo}\u200b`,
        ec = g || F || V?.disabled;
    return (0, l.jsx)(s.D, {
        id: n,
        description: b,
        disabled: g,
        errorMessage: ee ? ea : void 0,
        helperText: ee ? void 0 : y,
        hideLabel: j,
        label: M,
        required: Z,
        children: (e) => {
            let { controlId: a, describedById: n, errorMessageId: t } = e,
                r = { ...eu, id: a, "aria-describedby": n, "aria-errormessage": t, "aria-invalid": ee };
            return (0, l.jsxs)("div", {
                ref: L,
                className: u()(p.kL, "inherit" !== P && v[P], {
                    [p.V4]: et,
                    [p.JD]: ee,
                    [p.j9]: null != S,
                    [p.tY]: null != B,
                    [p.$7]: "sm" === B,
                    [p.N8]: !k,
                    [p.pH]: null != V,
                }),
                "data-disabled": g,
                "data-padding-block": D,
                "data-padding-inline": E,
                "data-read-only": F,
                children: [
                    (0, l.jsx)(c.vN, {
                        ringTarget: L,
                        children: C
                            ? (0, l.jsx)("textarea", { ...r, rows: 1 })
                            : (0, l.jsx)("input", { ...r, type: "text" }),
                    }),
                    (0, l.jsx)("div", {
                        "aria-hidden": "true",
                        className: u()(er, p.St, { [p.tb]: !et && ei, [p.gO]: null != S }),
                        style: null != S ? { "--custom-editable-text-max-rows": S } : void 0,
                        children: es,
                    }),
                    null != V &&
                        (0, l.jsx)("div", {
                            className: p.ZY,
                            children: (0, l.jsx)(d.m, {
                                asContainer: !0,
                                ariaHidden: !0,
                                shouldShow: !ec,
                                text: V.tooltip ?? V.label,
                                children: (0, l.jsx)(m.K, {
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
}
