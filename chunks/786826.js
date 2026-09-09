l.d(n, { f: () => K });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(719442),
    u = l(530795),
    o = l(15626),
    d = l(259678),
    c = l(452027),
    g = l(17928),
    v = l(43990),
    f = l(922016),
    h = l(281595),
    p = l(205086),
    m = l(355622),
    b = l(408018),
    A = l(186306),
    I = l(655098),
    C = l(323350),
    x = l(135261),
    y = l(35277),
    k = l(820066),
    N = l(702483),
    j = l(490682),
    E = l(683167),
    P = l(375499),
    w = l(267889),
    S = l(267102),
    R = l(363195),
    D = l(885386),
    M = l(95701),
    L = l(652215),
    G = l(551483),
    T = l(307731),
    V = l(569622),
    O = l(465410),
    z = l(736541);
let B = (0, M.createChannelRecord)({ id: "1", type: L.rbe.DM });
function H(e) {
    let { editor: n, pickerIntention: l, containerClassName: r } = e,
        s = (0, g.bG)([R.A], () => R.A.theme),
        u = a.useRef(null),
        o = a.useCallback(
            (e, l) => {
                let { emoji: t, willClose: a } = e;
                null != t &&
                    (!(function (e, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            t = n.animated ? "a" : "",
                            a = n.originalName ?? n.name ?? "",
                            r = `:${n.name}:`,
                            i = null != n.id ? `<${t}:${a.replace(/:/g, "")}:${n.id}>` : null,
                            s = k.VW.areStylesDisabled(e) || null == i ? r : i;
                        A.o.withSingleEntry(e, () => {
                            y.b.insertText(e, s + (l ? " " : ""));
                        });
                    })(n, t, a),
                    k.VW.focus(n)),
                    a && l();
            },
            [n],
        ),
        d = a.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(v.N, {
                    theme: s,
                    children: (e) =>
                        (0, t.jsx)("div", {
                            className: e,
                            children: (0, t.jsx)(w.A, {
                                persistSearch: !0,
                                closePopout: n,
                                onSelectEmoji: (e) => {
                                    let { emoji: l, willClose: t } = e;
                                    return o({ emoji: l, willClose: t }, n);
                                },
                                pickerIntention: l,
                            }),
                        }),
                });
            },
            [o, l, s],
        );
    return (0, t.jsx)("div", {
        className: i()(V.S0, r),
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(f.Y, {
            targetElementRef: u,
            renderPopout: d,
            position: "top",
            animation: f.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, t.jsx)(P.A, { ...e, ref: u, active: l, tabIndex: 0, className: V.Z8 });
            },
        }),
    });
}
function _(e) {
    let { editor: n, pickerIntention: l } = e,
        [, r] = a.useState(n.selection);
    return (
        a.useEffect(() => {
            function e() {
                return r(n.selection);
            }
            return (
                n.events.addListener("onChange", e),
                () => {
                    n.events.removeListener("onChange", e);
                }
            );
        }, [n]),
        (0, t.jsxs)("div", {
            className: V.aL,
            onMouseDown: (e) => e.preventDefault(),
            children: [(0, t.jsx)(x.P, { slateEditor: n }), (0, t.jsx)(H, { editor: n, pickerIntention: l })],
        })
    );
}
function F(e) {
    let {
            editor: n,
            appearance: l,
            toolbarVariant: r,
            placeholder: s,
            readOnly: c,
            autoFocus: g,
            required: v,
            rows: f,
            pickerIntention: h,
            onChangeValue: p,
            onKeyDown: m,
            onFocus: b,
            onBlur: A,
            ariaLabelledByProp: C,
        } = e,
        k = a.useContext(o._),
        E = k?.errorMessageId != null,
        P = "inline" === l,
        w = a.useRef(null),
        S = a.useRef(null),
        R = a.useCallback(() => n, [n]),
        D = a.useCallback((e) => [...(0, j.A)(n, e, void 0), ...(0, N.A)(n, e)], [n]);
    return (
        a.useEffect(() => {
            if ("floating" !== r) return;
            let e = S.current;
            if (null != e)
                return (
                    e.ownerDocument.addEventListener("scroll", n, { capture: !0 }),
                    () => e.ownerDocument.removeEventListener("scroll", n, { capture: !0 })
                );
            function n(n) {
                n.target.contains(e) && w.current?.hide();
            }
        }, [r]),
        (0, t.jsxs)(t.Fragment, {
            children: [
                "floating" === r && (0, t.jsx)(x.A, { ref: w, getSlateEditor: R, containerRef: S }),
                (0, t.jsx)(d.vN, {
                    children: (0, t.jsxs)("div", {
                        className: i()(V.I6, z[P ? "text-sm/normal" : "text-md/normal"], {
                            [V.mG]: P,
                            [V.mq]: "static" === r,
                        }),
                        "data-error": E || void 0,
                        "data-disabled": c || void 0,
                        children: [
                            "static" === r && !c && (0, t.jsx)(_, { editor: n, pickerIntention: h }),
                            (0, t.jsx)("div", {
                                ref: S,
                                className: i()(V.XG, O.yL, { [V.Cn]: P }),
                                style: { "--custom-rich-text-area-rows": f },
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), y.b.resetSelectionToEditorEnd(n), u.rL.focus(n));
                                },
                                onScroll: () => w.current?.hide(),
                                children: (0, t.jsx)(I.A, {
                                    id: k?.controlId,
                                    containerClassName: V.RZ,
                                    className: V.EN,
                                    editor: n,
                                    placeholder: s,
                                    readOnly: c,
                                    canFocus: !c,
                                    autoFocus: g,
                                    decorate: D,
                                    onChange: p,
                                    onKeyDown: m,
                                    onFocus: b,
                                    onBlur: A,
                                    "aria-labelledby": C ?? k?.labelId,
                                    "aria-describedby": k?.describedById,
                                    "aria-errormessage": k?.errorMessageId,
                                    "aria-invalid": E || void 0,
                                    "aria-required": v || void 0,
                                }),
                            }),
                            "floating" === r &&
                                !c &&
                                (0, t.jsx)(H, {
                                    editor: n,
                                    pickerIntention: h,
                                    containerClassName: i()(V.C7, { [V.y5]: P }),
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function K(e) {
    let {
            value: n,
            placeholder: l,
            minLength: r,
            maxLength: i,
            rows: o = 3,
            autosize: d = !0,
            autoFocus: g = !1,
            error: v,
            emojiPickerIntention: f = T.EmojiIntention.CHAT,
            appearance: A = "boxed",
            toolbarVariant: I = "floating",
            editorRef: x,
            onChange: k,
            onKeyDown: N,
            onFocus: j,
            onBlur: P,
            "aria-labelledby": w,
            ...R
        } = e,
        M = (function (e) {
            let n = a.useContext(S.Ay),
                l = D.SI.useSetting(),
                [t] = a.useState(() => {
                    let t = (0, s.ie)();
                    return (
                        (t.children = (0, b.x7)(e)),
                        (t.selection = { anchor: G.K, focus: G.K }),
                        (0, E.a)({
                            editor: t,
                            chatInputType: m.oU.GENERIC_RICH_TEXTAREA,
                            channel: B,
                            windowContext: n,
                            previewMarkdown: l,
                            updateState: (e, n, l) => {
                                let { value: t, selection: a } = l;
                                void 0 !== t && (e.children = t), null != a && (e.selection = a), e.onChange();
                            },
                        }),
                        t
                    );
                });
            return (
                a.useLayoutEffect(() => {
                    t.onChange();
                }, [t]),
                a.useEffect(() => {
                    t.previewMarkdown !== l && ((t.previewMarkdown = l), t.onChange());
                }, [t, l]),
                t
            );
        })(n),
        [L, V] = a.useState(n),
        [O, z] = a.useState(() => M.children.length);
    a.useImperativeHandle(
        x,
        () => ({
            focus(e) {
                y.b.resetSelectionToEditorEnd(M), u.rL.toDOMNode(M, M).focus(e);
            },
            blur() {
                u.rL.toDOMNode(M, M).blur();
            },
        }),
        [M],
    );
    let { fieldProps: H } = (0, c.n)(R),
        { disabled: _, required: K } = H,
        {
            setShouldValidate: q,
            errorMessage: X,
            hasError: W,
        } = (0, h.Y)({ validateOn: "change", error: v, value: L, minLength: r, maxLength: i }),
        Y = a.useRef(L);
    Y.current = L;
    let U = a.useCallback(
        (e) => {
            let n = (0, C.WO)(e, { mode: "raw" });
            n !== Y.current && (V(n), q(!0), k?.(n)), d && z(e.length);
        },
        [d, k, q],
    );
    a.useEffect(() => {
        n !== Y.current &&
            ((M.children = (0, b.x7)(n)),
            (M.selection = { anchor: G.K, focus: G.K }),
            M.onChange(),
            V(n),
            d && z(M.children.length));
    }, [d, n, M]);
    let $ = d ? Math.max(o, Math.min(O, 15)) : o,
        Z = null != i && "boxed" === A ? (0, t.jsx)(p.n, { value: L, maxLength: i }) : null;
    return (0, t.jsx)(c.D, {
        ...H,
        trailingAuxiliaryContent: Z,
        errorMessage: W ? X : void 0,
        children: (0, t.jsx)(F, {
            editor: M,
            appearance: A,
            toolbarVariant: I,
            placeholder: l,
            readOnly: _,
            autoFocus: g,
            required: K,
            rows: $,
            pickerIntention: f,
            onChangeValue: U,
            onKeyDown: N,
            onFocus: j,
            onBlur: P,
            ariaLabelledByProp: w,
        }),
    });
}
