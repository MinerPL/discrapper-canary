n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(939249),
    c = n(820081),
    d = n(307301),
    f = n(661531),
    I = n(866665),
    p = n(260762),
    g = n(298072),
    A = n(317097),
    v = n(466459),
    C = n(623373),
    m = n(561769),
    _ = n(758836),
    h = n(375708),
    x = n(699704);
function E(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: u,
            wrap: c,
            overflowProps: d,
            onTrackClick: f,
        } = e,
        I = (0, g.Q)(t),
        {
            shownVariants: A,
            totalVariants: v,
            hasOverflow: m,
        } = i.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, C.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, d?.maxVariantsToShow]),
        _ = i.useCallback(
            (e, n) => {
                (e.stopPropagation(), (0, g.n)(t, n));
            },
            [t],
        ),
        h = i.useId(),
        E = (0, p.A)(`shop-variants-group-${t.storeListingId}-${h}`, o.Gl.HORIZONTAL);
    return 0 === A.length
        ? null
        : (0, r.jsx)(a.hD, {
              navigator: E,
              children: (0, r.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsxs)("div", {
                          className: l()({ [x.yZ]: u, [x.sz]: !u, [x.LV]: c }, x.lO),
                          ref: i,
                          ...a,
                          children: [
                              A.map((e, t) =>
                                  (0, r.jsx)(
                                      R,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === I,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: v - Math.abs(I - t),
                                          onVariantClick: _,
                                          onTrackClick: f,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != d &&
                                  m &&
                                  (0, r.jsx)(b, {
                                      zIndex: I >= d.maxVariantsToShow - 1 ? v + 1 : 0,
                                      isSelected: I >= d.maxVariantsToShow - 1,
                                      onOverflowClick: d.onClick,
                                      onTrackClick: f,
                                      storeListingId: t.storeListingId,
                                  }),
                          ],
                      });
                  },
              }),
          });
}
function R(e) {
    let {
            variant: t,
            variantIndex: n,
            isSelected: s,
            onVariantClick: o,
            onVariantEnter: c,
            onVariantExit: d,
            zIndex: f,
            onTrackClick: p,
        } = e,
        { onFocus: g, ...A } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: C } = (0, v.h)(t),
        m = i.useCallback(
            (e) => {
                (p?.(_.sH.VARIANT_CLICK, n), o(e, n), g());
            },
            [o, g, n, p],
        ),
        E = C ? `${t.variantLabel}, ${h.intl.string(h.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(I.m, {
        text: h.intl.string(h.t["6cfuDj"]),
        shouldShow: C,
        ariaHidden: !0,
        children: (0, r.jsx)(u.D, {
            "aria-label": E,
            onClick: m,
            onMouseEnter: c,
            onMouseLeave: d,
            className: l()(x.bP, { [x.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: f },
            ...A,
            children: C && (0, r.jsx)(k, { variant: t }),
        }),
    });
}
function k(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, A.qt)(t.variantValue) && 0.3 > (0, A.OK)((0, A.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(c.B, { className: x.U, color: n ? f.A.colors.BLACK.css : f.A.colors.WHITE.css });
}
function b(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: o, onTrackClick: c } = e,
        { onFocus: f, ...I } = (0, a.rm)(`shop-variants-group-${o}-overflow`),
        p = i.useCallback(
            (e) => {
                (e.stopPropagation(), c?.(_.sH.VARIANT_CLICK_MORE), s(e), f());
            },
            [s, f, c],
        );
    return (0, r.jsx)(u.D, {
        "aria-label": h.intl.string(h.t["+0zcgs"]),
        onClick: p,
        className: l()(x.bP, x.V3, { [x.wH]: n }),
        style: { zIndex: t },
        ...I,
        children: (0, r.jsx)(d.j, { className: x.ab, color: "white" }),
    });
}
let y = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: l,
            overflowProps: a,
            onTrackClick: o,
        } = e,
        u = (0, m.Vm)(t);
    return null != u && (0, C.B1)(u)
        ? (0, r.jsx)(E, {
              product: u,
              onVariantEnter: s,
              onVariantExit: l,
              isCollapsed: n,
              wrap: i,
              overflowProps: a,
              onTrackClick: o,
          })
        : null;
};
