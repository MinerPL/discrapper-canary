i.d(t, { A: () => y });
var n = i(477900),
    a = i(582128),
    s = i(503698),
    r = i.n(s),
    l = i(435558),
    o = i(269115),
    d = i(508770),
    c = i(821609),
    u = i(745396),
    m = i(85463),
    p = i(297264),
    f = i(825484),
    b = i(834730),
    g = i(315629),
    h = i(241524),
    x = i(303136),
    C = i(607470),
    v = i(174459),
    _ = i(676279),
    P = i(406860),
    R = i(19290),
    j = i(652215),
    A = i(693591),
    T = i(505051);
let y = (e) => {
    let {
            name: t,
            title: i,
            description: s,
            descriptionCta: y,
            previewImage: E,
            videoUrl: N,
            shouldLoadVideo: I,
            index: O,
            customVideoStyle: L,
            isReducedMotion: S,
            onClick: M,
            badgeText: U,
            badgeVariant: w = "gradient",
            size: k,
            backgroundVideoUrl: B,
            previewImageStyle: D = R.Tb.CONTAINED,
            actions: Y,
            mediaRef: V,
            boxArtContainerClassName: H,
            containerClassName: G,
        } = e,
        F = (0, m.N)(),
        K = (0, _.TM)(),
        W = a.useRef(null),
        z = a.useRef(0),
        { sectionRef: X, handleVisibilityChange: Z } = (0, P.A)({ boxType: t }),
        $ = (0, h.A)("(min-width: 1140px)"),
        q = D === R.Tb.OVERLAY && (k !== R.A0.LARGE || !$),
        J = k === R.A0.LARGE && $ && D === R.Tb.OVERLAY,
        Q = null != B && $ && k === R.A0.LARGE,
        ee = a.useMemo(
            () =>
                (0, l.debounce)(() => {
                    v.default.track(j.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        );
    function et() {
        (null == W.current || S || ((W.current.currentTime = z.current), W.current.play()), S || V?.current?.play());
    }
    function ei() {
        (null == W.current || S || ((z.current = W.current.currentTime), W.current.pause()), S || V?.current?.pause());
    }
    let en = k === R.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function ea() {
        let e = null != y && null != M,
            t = null != Y && Y.length > 0;
        if (!e && !t) return null;
        let i = e ? [{ variant: "secondary", onClick: M, text: y }] : Y;
        return (0, n.jsx)("div", {
            className: T.bentoBoxButton,
            children: (0, n.jsx)(f.e, {
                children: i?.map((e, t) => {
                    let { onClick: i, ...a } = e;
                    return (0, n.jsx)(
                        c.$,
                        {
                            ...a,
                            onClick: function (e) {
                                (ee(), i?.(e));
                            },
                        },
                        t,
                    );
                }),
            }),
        });
    }
    function es() {
        return (0, n.jsxs)("div", {
            className: r()(T.textBox, T[`${k}`], J && T.overlayTextBox),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        null == U
                            ? null
                            : "gradient" === w
                              ? (0, n.jsx)("div", {
                                    className: T.badgeContainer,
                                    children: (0, n.jsx)("div", {
                                        className: T.badge,
                                        children: (0, n.jsx)(p.D, {
                                            variant: F,
                                            color: "text-overlay-light",
                                            children: U,
                                        }),
                                    }),
                                })
                              : (0, n.jsx)("div", {
                                    className: T.badgeContainer,
                                    children: (0, n.jsx)(d.E, { type: { text: U }, variant: w }),
                                }),
                        (0, n.jsx)(p.D, { variant: en, color: "text-strong", className: T.header, children: i }),
                    ],
                }),
                (0, n.jsx)(b.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: T.description,
                    children: s,
                }),
                (0, n.jsx)(ea, {}),
            ],
        });
    }
    function er() {
        return (0, n.jsx)("div", {
            className: r()(T.boxArtContainer, T[`${k}`], H),
            children:
                null == N && (0, u.O)(E) && "string" != typeof E
                    ? E
                    : (0, n.jsx)(
                          C.A,
                          {
                              playsInline: !0,
                              preload: I ? "auto" : "none",
                              muted: !0,
                              poster: E,
                              loop: !0,
                              className: r()(J ? T.overlayImage : T.boxVideo, { [L]: null != L }),
                              ref: W,
                              children: (0, n.jsx)("source", { src: N, type: K ? A.a.MP4 : A.a.WEBM }),
                          },
                          N,
                      ),
        });
    }
    let el = O % 2 != 0;
    return (0, n.jsx)(o.L, {
        innerRef: X,
        onChange: Z,
        threshold: 0.5,
        children: (0, n.jsxs)(g.h, {
            ref: X,
            id: t,
            className: r()(
                T.backgroundColor,
                T.boxContainer,
                T[`${k}`],
                T.gradientBackground,
                G,
                q && T.overlayImageMode,
                J && T.overlayMode,
            ),
            onMouseEnter: et,
            onFocus: et,
            onBlur: ei,
            onMouseLeave: ei,
            color: "purple",
            children: [
                Q &&
                    (0, n.jsx)("div", {
                        className: T.backgroundVideoContainer,
                        children: (0, n.jsx)(x.A, {
                            preload: I ? "auto" : "none",
                            className: T.backgroundVideo,
                            src: B,
                        }),
                    }),
                (0, n.jsx)(function () {
                    return el
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(es, {}), (0, n.jsx)(er, {})] })
                        : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(er, {}), (0, n.jsx)(es, {})] });
                }, {}),
            ],
        }),
    });
};
