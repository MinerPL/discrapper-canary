l.d(t, { A: () => A });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(834730),
    u = l(847374),
    d = l(320448),
    o = l(939249),
    c = l(256905),
    m = l(903586),
    f = l(277977),
    h = l(590380),
    x = l(435619),
    p = l(17928),
    g = l(866665),
    k = l(778712),
    v = l(730134),
    j = l(287809),
    b = l(427262),
    _ = l(50617),
    y = l(375708),
    N = l(13699);
function w(e) {
    let { userId: t } = e,
        l = (0, p.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(l);
    if (null == l || null == a) return null;
    let s = y.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, n.jsx)(g.m, {
        text: s,
        ariaHidden: !0,
        children: (0, n.jsx)("span", {
            className: N.jz,
            role: "img",
            "aria-label": s,
            children: (0, n.jsx)(v.A, { user: l, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var S = l(705754),
    C = l(229775);
function A(e) {
    let { projectId: t, node: l, presentation: s = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        p = a.useId(),
        g = a.useCallback(() => h((e) => !e), []),
        k = (0, m.WQ)(l),
        v = l.detail,
        j = "failed" === l.status ? "text-feedback-critical" : "detail" === s ? "text-muted" : "text-default",
        b = "text-muted" === j,
        A = c && b ? "none" : f && b ? "currentColor" : j,
        M = i()(N.iq, { [C.Hz]: c && b }),
        I = "detail" === s ? "text-md/normal" : "text-sm/normal",
        E = "detail" === s ? "text-sm/normal" : "text-xs/normal",
        $ = null != t ? l.screenshots : [],
        D = null != t ? l.attachments : [];
    if (0 === v.length && 0 === $.length && 0 === D.length)
        return (0, n.jsx)("li", {
            "data-step-kind": l.labelKey ?? "step",
            className: N.Dx,
            children: (0, n.jsx)(r.E, {
                tag: "div",
                variant: I,
                color: A,
                selectable: !0,
                className: M,
                children: (0, n.jsx)(S.A, { text: k, variant: I, prose: !0 }),
            }),
        });
    let W = f ? u.a : d._;
    return (0, n.jsxs)("li", {
        "data-step-kind": l.labelKey ?? "step",
        className: N.Dx,
        children: [
            (0, n.jsxs)(o.D, {
                tag: "div",
                className: N.kG,
                "aria-expanded": f,
                "aria-controls": p,
                "aria-label": y.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: g,
                children: [
                    (0, n.jsx)(r.E, {
                        tag: "span",
                        variant: I,
                        color: A,
                        className: M,
                        children: (0, n.jsx)(S.A, { text: k, variant: I, prose: !0 }),
                    }),
                    (0, n.jsx)(W, { size: "xs", color: "currentColor", className: N.Ue }),
                ],
            }),
            (0, n.jsxs)("div", {
                id: p,
                hidden: !f,
                className: N.yJ,
                children: [
                    v.map((e, t) => {
                        let a = l.detailDrivenBy[t];
                        return (0, n.jsxs)(
                            "div",
                            {
                                className: N.l6,
                                children: [
                                    (0, n.jsx)(r.E, {
                                        tag: "div",
                                        variant: E,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [C.Hz]: c && b }),
                                        children: (0, n.jsx)(S.A, { text: e, variant: E }),
                                    }),
                                    null != a ? (0, n.jsx)(w, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && $.length > 0
                        ? (0, n.jsx)("div", {
                              className: N.y8,
                              children: $.map((e) => (0, n.jsx)(T, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && D.length > 0 ? (0, n.jsx)(x.A, { projectId: t, attachments: D }) : null,
                ],
            }),
        ],
    });
}
function M() {}
function T(e) {
    let { projectId: t, screenshotId: l } = e,
        [s, i] = a.useState(null),
        [r, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, f.aF)(t, l).then(
                (t) => {
                    e || i(t);
                },
                () => {
                    e || u(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, l]);
    let d = y.intl.string(_.default["3Hq9pQ"]),
        o = a.useCallback(() => {
            (0, f.aF)(t, l).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, M);
        }, [t, l, d]);
    return r ? null : (0, n.jsx)(h.n, { name: d, thumbSrc: s, ariaLabel: d, onClick: o, onThumbError: () => u(!0) });
}
