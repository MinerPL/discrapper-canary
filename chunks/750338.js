i.d(t, { A: () => y });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    a = i.n(r),
    l = i(435558),
    o = i(269115),
    d = i(508770),
    c = i(821609),
    u = i(745396),
    m = i(85463),
    p = i(297264),
    f = i(825484),
    b = i(834730),
    h = i(315629),
    g = i(241524),
    x = i(303136),
    C = i(607470),
    v = i(174459),
    _ = i(676279),
    j = i(406860),
    E = i(387640),
    R = i(652215),
    P = i(693591),
    A = i(505051);
let y = (e) => {
    let {
            name: t,
            title: i,
            description: r,
            descriptionCta: y,
            previewImage: N,
            videoUrl: I,
            shouldLoadVideo: T,
            index: O,
            customVideoStyle: w,
            isReducedMotion: M,
            onClick: L,
            badgeText: U,
            badgeVariant: S = "gradient",
            size: k,
            backgroundVideoUrl: B,
            previewImageStyle: D = E.Tb.CONTAINED,
            actions: V,
            mediaRef: H,
            boxArtContainerClassName: Y,
            containerClassName: F,
        } = e,
        G = (0, m.N)(),
        W = (0, _.TM)(),
        K = n.useRef(null),
        Z = n.useRef(0),
        { sectionRef: z, handleVisibilityChange: X } = (0, j.A)({ boxType: t }),
        $ = (0, g.A)("(min-width: 1140px)"),
        q = D === E.Tb.OVERLAY && (k !== E.A0.LARGE || !$),
        J = k === E.A0.LARGE && $ && D === E.Tb.OVERLAY,
        Q = null != B && $ && k === E.A0.LARGE,
        ee = n.useMemo(
            () =>
                (0, l.debounce)(() => {
                    v.default.track(R.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        );
    function et() {
        null == K.current || M || ((K.current.currentTime = Z.current), K.current.play()), M || H?.current?.play();
    }
    function ei() {
        null == K.current || M || ((Z.current = K.current.currentTime), K.current.pause()), M || H?.current?.pause();
    }
    let es = k === E.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function en() {
        let e = null != y && null != L,
            t = null != V && V.length > 0;
        if (!e && !t) return null;
        let i = e ? [{ variant: "secondary", onClick: L, text: y }] : V;
        return (0, s.jsx)("div", {
            className: A.bentoBoxButton,
            children: (0, s.jsx)(f.e, {
                children: i?.map((e, t) => {
                    let { onClick: i, ...n } = e;
                    return (0, s.jsx)(
                        c.$,
                        {
                            ...n,
                            onClick: function (e) {
                                ee(), i?.(e);
                            },
                        },
                        t,
                    );
                }),
            }),
        });
    }
    function er() {
        return (0, s.jsxs)("div", {
            className: a()(A.textBox, A[`${k}`], J && A.overlayTextBox),
            children: [
                (0, s.jsxs)("div", {
                    children: [
                        null == U
                            ? null
                            : "gradient" === S
                              ? (0, s.jsx)("div", {
                                    className: A.badgeContainer,
                                    children: (0, s.jsx)("div", {
                                        className: A.badge,
                                        children: (0, s.jsx)(p.D, {
                                            variant: G,
                                            color: "text-overlay-light",
                                            children: U,
                                        }),
                                    }),
                                })
                              : (0, s.jsx)("div", {
                                    className: A.badgeContainer,
                                    children: (0, s.jsx)(d.E, { type: { text: U }, variant: S }),
                                }),
                        (0, s.jsx)(p.D, { variant: es, color: "text-strong", className: A.header, children: i }),
                    ],
                }),
                (0, s.jsx)(b.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: A.description,
                    children: r,
                }),
                (0, s.jsx)(en, {}),
            ],
        });
    }
    function ea() {
        return (0, s.jsx)("div", {
            className: a()(A.boxArtContainer, A[`${k}`], Y),
            children:
                null == I && (0, u.O)(N) && "string" != typeof N
                    ? N
                    : (0, s.jsx)(
                          C.A,
                          {
                              playsInline: !0,
                              preload: T ? "auto" : "none",
                              muted: !0,
                              poster: N,
                              loop: !0,
                              className: a()(J ? A.overlayImage : A.boxVideo, { [w]: null != w }),
                              ref: K,
                              children: (0, s.jsx)("source", { src: I, type: W ? P.a.MP4 : P.a.WEBM }),
                          },
                          I,
                      ),
        });
    }
    let el = O % 2 != 0;
    return (0, s.jsx)(o.L, {
        innerRef: z,
        onChange: X,
        threshold: 0.5,
        children: (0, s.jsxs)(h.h, {
            ref: z,
            id: t,
            className: a()(
                A.backgroundColor,
                A.boxContainer,
                A[`${k}`],
                A.gradientBackground,
                F,
                q && A.overlayImageMode,
                J && A.overlayMode,
            ),
            onMouseEnter: et,
            onFocus: et,
            onBlur: ei,
            onMouseLeave: ei,
            color: "purple",
            children: [
                Q &&
                    (0, s.jsx)("div", {
                        className: A.backgroundVideoContainer,
                        children: (0, s.jsx)(x.A, {
                            preload: T ? "auto" : "none",
                            className: A.backgroundVideo,
                            src: B,
                        }),
                    }),
                (0, s.jsx)(function () {
                    return el
                        ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(er, {}), (0, s.jsx)(ea, {})] })
                        : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(ea, {}), (0, s.jsx)(er, {})] });
                }, {}),
            ],
        }),
    });
};
