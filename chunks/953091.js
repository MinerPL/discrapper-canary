n.d(t, { n: () => p });
var i = n(477900),
    r = n(582128),
    a = n(877603),
    s = n(15626),
    l = n(503698),
    o = n.n(l),
    d = n(160844),
    c = n(661531),
    u = n(789645),
    _ = n(834730),
    E = n(478576);
function A(e) {
    let { graphic: t, size: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: E.m4, "data-size": n, style: { backgroundColor: r } });
            case "avatar":
                let { src: a } = t;
                return (0, i.jsx)("img", { className: E.my, "data-size": n, src: a, alt: "" });
            case "image":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: E.Sl, "data-size": n, src: s, alt: "" });
            default:
                return null;
        }
    let l = "sm" === n ? "xs" : "sm";
    return (0, i.jsx)(t, { size: l, color: "currentColor" });
}
var h = n(70074),
    I = n(132473);
function f(e) {
    let { label: t, size: n, variant: r = "default", isDisabled: s, icon: l, accessibilityHint: E, ...f } = e,
        p = [t, E].filter(Boolean).join(", ");
    return (0, i.jsx)(a.vw, {
        ...f,
        className: o()(I.Tc, h.GA),
        "data-variant": r,
        textValue: p,
        isDisabled: s,
        children: (e) => {
            let { allowsRemoving: r } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != l && (0, i.jsx)(A, { graphic: l, size: n }),
                    (0, i.jsx)(_.E, {
                        color: "none",
                        variant: "sm" === n ? "text-sm/normal" : "text-md/normal",
                        children: t,
                    }),
                    r &&
                        (0, i.jsx)(d.$, {
                            slot: "remove",
                            children: (0, i.jsx)(u.P, {
                                size: "sm" === n ? "xs" : "sm",
                                color: c.A.colors.ICON_DEFAULT,
                            }),
                        }),
                ],
            });
        },
    });
}
function p(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: l,
            selectionMode: o = "none",
            selectionBehavior: d,
            layout: c = "default",
            size: u = "md",
            variant: _,
            items: E,
            onRemove: A,
            children: h,
            selectedKeys: p,
            onSelectionChange: T,
            disallowEmptySelection: m,
        } = e,
        g = r.useContext(s._);
    return (0, i.jsxs)(a.CR, {
        "aria-label": n,
        id: g?.controlId,
        "aria-describedby": g?.describedById,
        "data-layout": c,
        "data-size": u,
        "data-variant": _,
        className: I.WD,
        selectionMode: o,
        selectionBehavior: d,
        selectedKeys: p,
        onSelectionChange: T,
        disabledKeys: l,
        disallowEmptySelection: m,
        onRemove: A,
        children: [
            (0, i.jsx)(a.LY, {
                ref: t,
                className: I.Tw,
                children: E.map((e) =>
                    (0, r.createElement)(f, {
                        ...e,
                        key: e.id,
                        size: u,
                        variant: _,
                        accessibilityHint: e.accessibilityHint,
                    }),
                ),
            }),
            h,
        ],
    });
}
