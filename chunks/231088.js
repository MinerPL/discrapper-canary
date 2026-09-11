(n.d(t, { RY: () => A, Ww: () => I, ZL: () => E, Zf: () => v, n4: () => j }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(621466),
    o = n(219869),
    d = n(17928),
    c = n(866665),
    u = n(695366),
    g = n(738188),
    m = n(834730),
    x = n(939249),
    f = n(775602),
    h = n(375708),
    p = n(404760);
function I(e) {
    let { value: t, onCommit: n, disabled: i = !1 } = e,
        [s, r] = l.useState("idle"),
        [o, c] = l.useState(t),
        u = "editing" === s && !i,
        g = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        m = l.useRef(null),
        x = l.useRef(null),
        h = l.useRef(null),
        p = l.useRef(!1),
        I = l.useRef(!0),
        j = l.useRef(!1),
        A = l.useCallback(() => {
            ((I.current = !1), c(t), r("editing"));
        }, [t]),
        v = l.useRef(o);
    l.useLayoutEffect(() => {
        v.current = o;
    });
    let E = l.useCallback(() => {
            I.current || ((I.current = !0), n(v.current), r("done"));
        }, [n]),
        C = l.useCallback(() => {
            I.current || ((I.current = !0), r("done"));
        }, []);
    (l.useEffect(() => {
        "done" === s && (p.current && m.current?.focus({ preventScroll: !0 }), (p.current = !1));
    }, [s]),
        l.useEffect(() => {
            let e = j.current;
            ((j.current = !1),
                u &&
                    (x.current?.scrollIntoView({ block: "nearest", behavior: g ? "auto" : "smooth" }),
                    e || h.current?.focus({ preventScroll: !0 })));
        }, [u, g]));
    let S = l.useCallback(
            (e) => {
                !u || (null != x.current && (0, a.vq)(e.relatedTarget) && x.current.contains(e.relatedTarget)) || E();
            },
            [u, E],
        ),
        b = l.useCallback(
            (e) => {
                u && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), C());
            },
            [u, C],
        ),
        k = l.useCallback(() => {
            ((p.current = !0), E(), h.current?.blur());
        }, [E]),
        T = l.useCallback(() => {
            ((p.current = !0), C(), h.current?.blur());
        }, [C]),
        N = l.useCallback(() => {
            u || ((j.current = !0), A());
        }, [u, A]),
        y = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), T())
                    : (e.preventDefault(), k());
            },
            [k, T],
        );
    return {
        isEditing: u,
        committedValue: t,
        editedValue: o,
        setEditedValue: c,
        onCommit: n,
        editButtonRef: m,
        wrapperRef: x,
        inputRef: h,
        handleStartEditing: A,
        handleCommit: E,
        handleCancel: C,
        handleInputCommit: k,
        handleInputCancel: T,
        onInputFocus: N,
        onInputKeyDown: y,
        onBlur: S,
        onContainerKeyDown: b,
    };
}
function j(e, t) {
    return null != t && e.length > t ? h.intl.formatToPlainString(h.t.ICT5S6, { maxLength: t }) : void 0;
}
function A(e) {
    let { tooltip: t, ...n } = e,
        l = (0, i.jsx)("div", {
            className: p.L7,
            children: (0, i.jsx)(o.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == t ? l : (0, i.jsx)(c.m, { text: t, ariaHidden: !0, children: l });
}
function v(e) {
    let { id: t, message: n, type: l } = e,
        s = "error" === l,
        r = s ? u.E : g.WarningIcon;
    return (0, i.jsxs)(m.E, {
        id: t,
        role: s ? "alert" : void 0,
        variant: "text-xs/normal",
        color: s ? "text-feedback-critical" : "text-feedback-warning",
        className: p.VP,
        children: [(0, i.jsx)(r, { size: "xs", color: "currentColor", className: s ? p.ik : p.QW }), n],
    });
}
function E(e) {
    let {
            isEditing: t,
            preview: n,
            placeholder: s,
            input: o,
            editButtonRef: d,
            editButtonAriaLabel: c,
            onStartEditing: u,
            variant: g = "default",
            trailing: f,
            previewErrorMessage: h,
            previewWarningMessage: I,
            className: j,
            wrapperRef: E,
            onBlur: C,
            onKeyDown: S,
            textVariant: b,
            textColor: k,
            disabled: T = !1,
            growWidth: N = !1,
            removeVerticalPadding: y = !1,
        } = e,
        w = l.useRef(null),
        R = l.useId(),
        _ = l.useId(),
        L = null == n,
        O = null != h,
        P = null != I && !O,
        D = O ? "error" : P ? "warning" : null,
        M = O ? h : I,
        G = null != D && null != M,
        [U] = l.useState(t),
        [F, W] = l.useState(!1);
    F || t === U || W(!0);
    let H = [];
    (L && H.push(R), G && "compact" !== g && H.push(_));
    let V = H.length > 0 ? H.join(" ") : void 0;
    function B() {
        let { activeElement: e } = w.current?.ownerDocument ?? document;
        ((0, a.vq)(e, HTMLElement) && e.blur(), u());
    }
    let z = (0, i.jsxs)("div", {
        ref: w,
        className: r()(p.LL, { [p.JD]: O, [p.xe]: P, [p.r9]: T }),
        onMouseDown: T
            ? void 0
            : function (e) {
                  e.preventDefault();
              },
        onClick: T ? void 0 : B,
        children: [
            L
                ? (0, i.jsx)(m.E, {
                      id: R,
                      variant: b ?? "text-sm/normal",
                      color: k ?? "text-muted",
                      className: p.qf,
                      children: s,
                  })
                : n,
            !T &&
                (0, i.jsx)(x.D, {
                    innerRef: d,
                    "aria-label": c,
                    "aria-describedby": V,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        (e.stopPropagation(), B());
                    },
                    focusProps: { ringTarget: w },
                }),
            null != f && (0, i.jsx)("div", { className: p.lD, children: (0, i.jsx)(A, { ...f }) }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: E,
        className: r()(
            p.kL,
            { [p.oE]: "compact" === g, [p.c1]: "multiline" === g, [p.CP]: N, [p.WK]: y, [p.Dy]: t },
            j,
        ),
        onBlur: C,
        onKeyDown: S,
        children: (0, i.jsx)(
            "div",
            {
                className: F ? p.qG : void 0,
                children: t
                    ? o
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: p.VH, children: z }),
                              G && "compact" !== g && (0, i.jsx)(v, { id: _, message: M, type: D }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
