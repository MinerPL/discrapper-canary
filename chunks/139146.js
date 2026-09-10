r.d(e, { R: () => g, _: () => T });
var i = r(477900),
    n = r(582128),
    l = r(503698),
    s = r.n(l),
    u = r(17928),
    a = r(844222),
    o = r(926268),
    d = r(559758),
    c = r(939249),
    S = r(683063),
    h = r(866665),
    A = r(661492),
    I = r(280450),
    f = r(536572),
    p = r(113265),
    _ = r(758836),
    E = r(375708),
    m = r(715838);
let y = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function g(t) {
    let {
            product: e,
            selectedVariantIndex: r,
            location: l,
            onError: s,
            isCardHovered: a = !0,
            onTrackClick: o,
            ...d
        } = t,
        c = (0, u.bG)([I.default], () => I.default.getId()),
        {
            isWishlisted: S,
            isBusy: h,
            isFirstTimeWishlister: E,
            handleToggle: m,
            specificProductOrVariant: y,
            isPurchased: g,
        } = (0, p.z)({ userId: c, product: e, selectedVariantIndex: r, location: l, onError: s }),
        R = (0, f.s7)(y),
        L = n.useCallback(() => {
            o?.(S ? _.sH.REMOVE_FROM_WISHLIST : _.sH.ADD_TO_WISHLIST), m();
        }, [S, m, o]);
    return g
        ? null
        : (0, i.jsx)(T, {
              skuId: y.skuId,
              productName: R,
              disabled: !(0, A.q)(y),
              isWishlisted: S,
              isBusy: h,
              isFirstTimeWishlister: E,
              isVisuallyHidden: !a && !S,
              onClick: L,
              ...d,
          });
}
function T(t) {
    let {
            skuId: e,
            productName: r,
            className: l,
            disabled: u,
            variant: A = "default",
            size: I = "md",
            isWishlisted: f,
            isBusy: p,
            isFirstTimeWishlister: _,
            isVisuallyHidden: g,
            onClick: T,
            shouldShowTooltip: R,
            tooltipConfig: L = {},
        } = t,
        v = y[I],
        { reducedMotion: k } = n.useContext(a.C),
        w = n.useRef(null),
        [C, F] = n.useState(!1),
        U = f && !C,
        W = U ? o.HeartIcon : d.y,
        b = s()(m.normalIconColor, U && m.wishlistedOrAnimating);
    n.useEffect(() => {
        F(!1);
    }, [e]);
    let O = n.useCallback(
            (t) => {
                t.stopPropagation(), u || (f || k.enabled ? f && C && F(!1) : F(!0), T());
            },
            [u, f, k.enabled, C, T],
        ),
        P = !u && !f && !C,
        H = n.useCallback(
            (t) => {
                t.target === t.currentTarget && C && requestAnimationFrame(() => F(!1));
            },
            [C],
        );
    function D() {
        let t = E.intl.formatToPlainString(E.t["7kFjeK"], { productName: r });
        return (0, i.jsx)(c.D, {
            className: s()(
                m.wishlistButton,
                m[I],
                {
                    [m.variantDefault]: "default" === A,
                    [m.variantSecondary]: "secondary" === A,
                    [m.variantSecondaryOverlay]: "overlay-secondary" === A,
                    [m.disabled]: u,
                    [m.visuallyHidden]: g,
                },
                l,
            ),
            innerRef: w,
            onClick: O,
            "aria-label": t,
            "aria-pressed": f,
            "aria-busy": p,
            "aria-disabled": u,
            children: k.enabled
                ? (0, i.jsx)(W, { colorClass: void 0 ?? b, size: v })
                : (0, i.jsxs)("div", {
                      className: s()(m.iconContainer, P && m.canAnimate),
                      children: [
                          (0, i.jsx)("span", {
                              className: s()(m.iconWrapper, P && m.canHover),
                              children: (0, i.jsx)(W, { colorClass: void 0 ?? b, size: v }),
                          }),
                          (0, i.jsx)("span", {
                              className: s()(m.animationOverlay, C && m.clickAnimation),
                              onAnimationEnd: H,
                              children: (0, i.jsx)(o.HeartIcon, { size: v }),
                          }),
                      ],
                  }),
        });
    }
    if (_ && !u) {
        let t = L.firstTimeTitle ?? E.intl.string(E.t["47Rhc3"]),
            e = L.firstTimeBody ?? E.intl.string(E.t.PXjA0b);
        return (0, i.jsx)(S.u, { title: t, body: e, shouldShow: R, children: D() });
    }
    let M = u
        ? (L.disabled ?? E.intl.string(E.t["50TX9k"]))
        : f
          ? (L.remove ?? E.intl.string(E.t.yr9TTf))
          : (L.add ?? E.intl.string(E.t["8DkMEQ"]));
    return (0, i.jsx)(h.m, { text: M, ariaHidden: !u, shouldShow: R, children: D() });
}
