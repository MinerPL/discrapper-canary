a.r(t), a.d(t, { videoQuestCollection: () => eb, playgroundConfig: () => eS });
var r = a(782134),
    l = a(477900),
    n = a(582128),
    i = a(682176),
    o = a(784018);
let s = {
    name: "Clips Player",
    id: "clips-player",
    component: function (e) {
        let {
                videoUrl: t,
                posterUrl: a,
                minWidth: r,
                maxWidth: o,
                maxHeight: s,
                active: u,
                autoPlay: d,
                autoMute: c,
                allowFullScreen: p,
                embed: m,
                fillContainer: f,
                showTextContent: g,
                showParticipants: h,
            } = e,
            x = n.useMemo(
                () => ({
                    id: "playground-clip",
                    url: t,
                    proxy_url: t,
                    filename: "playground-clip.mp4",
                    size: 0,
                    width: 1920,
                    height: 1080,
                    content_type: "video/mp4",
                    title: "Playground Clip",
                    clip_created_at: new Date().toISOString(),
                }),
                [t],
            );
        return (0, l.jsx)("div", {
            style: f ? { width: "100%", height: "500px" } : { display: "flex", justifyContent: "center" },
            children: (0, l.jsx)(i.A, {
                attachment: x,
                src: t,
                posterUrl: a,
                active: u,
                autoPlay: d,
                autoMute: c,
                allowFullScreen: p,
                embed: m,
                fillContainer: f,
                minWidth: r,
                maxWidth: 0 === o ? void 0 : o,
                maxHeight: 0 === s ? void 0 : s,
                showTextContent: g,
                showParticipants: h,
            }),
        });
    },
    controls: {
        videoUrl: { label: "Video URL", type: "text", defaultValue: o.kz },
        posterUrl: {
            label: "Poster URL",
            type: "text",
            defaultValue: "https://cdn.discordapp.com/assets/og_img_discord_home.png",
        },
        minWidth: { label: "Min Width (px)", type: "number", defaultValue: 500 },
        maxWidth: { label: "Max Width (px, 0 = unrestricted)", type: "number", defaultValue: 800 },
        maxHeight: { label: "Max Height (px, 0 = unrestricted)", type: "number", defaultValue: 500 },
        active: { label: "Active", type: "boolean", defaultValue: !0 },
        autoPlay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
        autoMute: { label: "Auto-mute", type: "boolean", defaultValue: !1 },
        allowFullScreen: { label: "Allow Fullscreen", type: "boolean", defaultValue: !0 },
        embed: { label: "Embed mode", type: "boolean", defaultValue: !1 },
        fillContainer: { label: "Fill Container", type: "boolean", defaultValue: !1 },
        showTextContent: { label: "Show Text Content", type: "boolean", defaultValue: !0 },
        showParticipants: { label: "Show Participants", type: "boolean", defaultValue: !0 },
    },
};
var u = a(231723),
    d = a(664111),
    c = a(3451),
    p = a(503698),
    m = a.n(p),
    f = a(404144),
    g = a.n(f),
    h = a(607470),
    x = a(61491),
    b = a(683063),
    S = a(339350),
    y = a(939249),
    v = a(97808),
    E = a(778712),
    V = a(268378),
    T = a(375708),
    A = a(599507);
let w = n.memo(function (e) {
    let { source: t, label: a, isActive: r, isInRange: n, onSelect: i } = e,
        o = t.owner?.name ?? a ?? T.intl.string(V.default["6XuC8e"]);
    if (!n && !r) {
        let e = (0, x.rB)(t.startSec);
        return (0, l.jsx)(b.u, {
            asset: (0, l.jsx)(S.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, l.jsx)(y.D, {
                className: A.RG,
                "aria-label": T.intl.formatToPlainString(V.default.JFaxs2, { name: o, time: e }),
                "aria-disabled": !0,
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, l.jsx)(v.eu, { src: t.owner?.avatarUrl, size: E._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, l.jsxs)(y.D, {
        className: m()(A.uF, { [A._]: r }),
        "aria-label": r
            ? T.intl.formatToPlainString(V.default["RSMzC/"], { name: o })
            : T.intl.formatToPlainString(V.default["4AH1Vb"], { name: o }),
        "aria-current": r,
        onClick: () => i(t),
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, l.jsx)("div", {
                className: m()(A.U8, { [A.ED]: r }),
                children:
                    null != t.poster &&
                    (0, l.jsx)("img", { className: A.a1, src: t.poster, alt: "", "aria-hidden": !0 }),
            }),
            null != t.owner &&
                (0, l.jsx)("div", {
                    className: A.UH,
                    children: (0, l.jsx)(v.eu, { src: t.owner.avatarUrl, size: E._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
function P(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
var C = a(340710);
function R(e) {
    let {
            ref: t,
            src: a,
            poster: r,
            className: i,
            onSourceError: o,
            isScrubbing: s,
            onTimeUpdate: u,
            onEnded: d,
            onLoadedMetadata: c,
            onError: p,
            children: f,
            original: x,
            subSources: b,
            ...S
        } = e,
        y = n.useRef(null),
        [v, E] = n.useState(x.durationSec ?? 0),
        [A, R] = n.useState(x.id),
        [j, k] = n.useState(0),
        [_, L] = n.useState("hidden"),
        [U, D] = n.useState("contain"),
        I = n.useMemo(() => [{ ...x, startSec: 0, durationSec: v }, ...b], [x, b, v]),
        F = I.find((e) => e.id === A) ?? I[0],
        O = n.useRef(null),
        M = n.useRef(null),
        z = n.useRef(null);
    function N(e, t) {
        let a = I.find((t) => t.id === e);
        if (null == a) return;
        let r = g()(t, 0, v),
            l = y.current;
        if (a.id === H.current.activeSource.id) {
            (M.current = null), null != l && (l.currentTime = r - a.startSec);
            return;
        }
        !(function () {
            let e = y.current,
                t = z.current;
            if (null == e || null == t || 0 === e.videoWidth) return;
            let a = t.getContext("2d");
            if (null != a) {
                (t.width = e.videoWidth), (t.height = e.videoHeight);
                try {
                    a.drawImage(e, 0, 0);
                } catch {
                    return;
                }
                D(window.getComputedStyle(e).objectFit), L("holding");
            }
        })(),
            (O.current = {
                localSeekSec: g()(r - a.startSec, 0, a.durationSec),
                resumePlayback: null != l && !l.paused,
                playbackRate: l?.playbackRate ?? 1,
            }),
            (M.current = r),
            (H.current = { ...H.current, activeSource: a }),
            R(a.id),
            k(r);
    }
    function B(e) {
        N(x.id, e);
    }
    let H = n.useRef({ activeSource: F, masterDurationSec: v, isScrubbing: s, revertToOriginal: B });
    n.useLayoutEffect(() => {
        H.current = { ...H.current, activeSource: F, masterDurationSec: v, isScrubbing: s, revertToOriginal: B };
    });
    let Q = n.useRef(null);
    n.useLayoutEffect(
        () => (
            (Q.current ??= (function (e) {
                let t = null;
                function a() {
                    let a = e.getElement();
                    return null != a && (t = a), t;
                }
                return new Proxy(
                    {},
                    {
                        get(t, r) {
                            let l = a();
                            switch (r) {
                                case "domNode":
                                    return e.getElement();
                                case "currentTime":
                                    return e.getCurrentTimeSec();
                                case "duration":
                                    return e.getDurationSec();
                                case "buffered":
                                    var n, i;
                                    return (
                                        (n = l?.buffered),
                                        (i = e.getActiveStartSec()),
                                        {
                                            length: n?.length ?? 0,
                                            start: (e) => (n?.start(e) ?? 0) + i,
                                            end: (e) => (n?.end(e) ?? 0) + i,
                                        }
                                    );
                            }
                            if (null == l) return;
                            let o = Reflect.get(l, r);
                            return "function" == typeof o ? o.bind(l) : o;
                        },
                        set(t, r, l) {
                            if ("currentTime" === r) return e.seekTo(l), !0;
                            let n = a();
                            return null != n && Reflect.set(n, r, l), !0;
                        },
                        has(e, t) {
                            let r = a();
                            return null != r && Reflect.has(r, t);
                        },
                    },
                );
            })({
                getElement: () => y.current,
                getDurationSec: () => H.current.masterDurationSec,
                getActiveStartSec: () => H.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = M.current;
                    return null != e ? e : H.current.activeSource.startSec + (y.current?.currentTime ?? 0);
                },
                seekTo: (e) => {
                    let t = g()(e, 0, H.current.masterDurationSec);
                    if ((k(t), P(H.current.activeSource, t))) {
                        M.current = null;
                        let e = y.current;
                        null != e && (e.currentTime = t - H.current.activeSource.startSec);
                        return;
                    }
                    (M.current = t), H.current.isScrubbing || H.current.revertToOriginal(t);
                },
            })),
            t(Q.current),
            () => {
                t(null);
            }
        ),
        [t],
    );
    let W = n.useRef(A);
    function q(e) {
        e.id !== F.id && N(e.id, j);
    }
    n.useEffect(() => {
        W.current !== A && ((W.current = A), y.current?.load());
    }, [A]),
        n.useEffect(() => {
            if ("releasing" !== _) return;
            let e = y.current;
            if (null == e) return void L("hidden");
            let t = !1;
            function a() {
                t || ((t = !0), L("hidden"));
            }
            let r = setTimeout(a, 1e3);
            if ("function" == typeof e.requestVideoFrameCallback) {
                let l = e.requestVideoFrameCallback(a);
                return () => {
                    (t = !0), clearTimeout(r), e.cancelVideoFrameCallback(l);
                };
            }
            return (
                e.addEventListener("seeked", a),
                () => {
                    (t = !0), clearTimeout(r), e.removeEventListener("seeked", a);
                }
            );
        }, [_]),
        n.useEffect(() => {
            if (s) return;
            let e = M.current;
            null == e || null != O.current || P(H.current.activeSource, e) || H.current.revertToOriginal(e);
        }, [s]);
    let $ = !P(F, j);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(h.A, {
                ...S,
                ref: y,
                className: m()(i, { [C._b]: $ }),
                poster: F.poster ?? r,
                onTimeUpdate: function (e) {
                    let t = y.current;
                    if (null != t && null == O.current && null == M.current) {
                        let e = F.startSec + t.currentTime;
                        k(e), F.id !== x.id && e >= F.startSec + F.durationSec - 0.12 && B(e);
                    }
                    u?.(e);
                },
                onEnded: function (e) {
                    F.id !== x.id ? B(F.startSec + F.durationSec) : d?.(e);
                },
                onLoadedMetadata: function (e) {
                    let t = y.current,
                        a = O.current;
                    if (null == a) {
                        null != t &&
                            Number.isFinite(t.duration) &&
                            (E(t.duration), (H.current = { ...H.current, masterDurationSec: t.duration })),
                            c?.(e);
                        return;
                    }
                    if (((O.current = null), null != t)) {
                        t.playbackRate = a.playbackRate;
                        try {
                            t.currentTime = a.localSeekSec;
                        } catch {}
                        a.resumePlayback && t.play().catch(() => {});
                    }
                    (M.current = null), L((e) => ("holding" === e ? "releasing" : e));
                },
                onError: function (e) {
                    F.id !== x.id ? B(F.startSec + (y.current?.currentTime ?? 0)) : p?.(e);
                },
                children: [f, (0, l.jsx)("source", { onError: o, src: F.url })],
            }),
            (0, l.jsx)("canvas", {
                ref: z,
                className: C.bQ,
                style: { objectFit: U },
                hidden: "hidden" === _,
                "aria-hidden": !0,
            }),
            I.length > 1 &&
                (0, l.jsx)("div", {
                    className: C.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: I.map((e) =>
                        (0, l.jsx)(
                            w,
                            {
                                source: e,
                                label: e.id === x.id ? (e.label ?? T.intl.string(V.default["9tdsDk"])) : e.label,
                                isActive: e.id === F.id,
                                isInRange: P(e, j),
                                onSelect: q,
                            },
                            e.id,
                        ),
                    ),
                }),
        ],
    });
}
let j = {
    orientation: {
        label: "Orientation",
        type: "select",
        options: [
            { label: "Landscape", value: "landscape" },
            { label: "Portrait", value: "portrait" },
        ],
        defaultValue: "landscape",
    },
    autoplay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
    originalUrl: { label: "Original URL", type: "text", defaultValue: o.kz },
    originalDurationSec: { label: "Master timeline length (sec)", type: "number", defaultValue: 30 },
    subUrl: {
        label: "Clip URL (both clips)",
        type: "text",
        defaultValue: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
    },
    clipAStartSec: { label: "Clip A start (sec)", type: "number", defaultValue: 8 },
    clipADurationSec: { label: "Clip A length (sec)", type: "number", defaultValue: 6 },
    clipBStartSec: { label: "Clip B start (sec)", type: "number", defaultValue: 18 },
    clipBDurationSec: { label: "Clip B length (sec)", type: "number", defaultValue: 8 },
};
var k = a(74445),
    _ = a(831544),
    L = a(717421),
    U = a(834730),
    D = a(831056);
let I = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function F(e) {
    let { orientation: t, thumbnailUrl: a, onReplay: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(D.nY, { url: a }),
            (0, l.jsx)(D.KP, {}),
            (0, l.jsxs)(D.zj, {
                orientation: t,
                children: [
                    (0, l.jsx)(D.Kb, { url: a, orientation: t }),
                    (0, l.jsx)(D.lx, {
                        title: "Watch Again",
                        subtitle: "Replay this video",
                        ctaBtnLabel: "Replay",
                        onCTAClick: r,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function O(e) {
    let {
            orientation: t,
            autoplay: a,
            maxSeekableTimeSec: r,
            videoUrl: i,
            poster: s,
            showEndScreen: c,
            initialActive: p,
            autoHideVolumeSlider: m,
            numExtraButtons: f,
            sizing: g,
            persistPlayhead: h,
            hideFullScreenBtn: x,
        } = e,
        [b, S] = n.useState(0),
        y = n.useMemo(() => {
            if (null == i || "" === i) return i;
            let e = i.includes("?") ? "&" : "?";
            return 0 === b ? i : `${i}${e}_cb=${b}`;
        }, [i, b]),
        v = n.useMemo(
            () =>
                Array.from({ length: f }, (e, t) => ({
                    id: `extra-button-${t}`,
                    label: `Extra Button ${t + 1}`,
                    iconComponent: _.MicrophoneIcon,
                    onClick: () => {
                        console.log(`Extra Button ${t + 1} clicked`);
                    },
                })),
            [f],
        );
    return (0, l.jsxs)("div", {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
        children: [
            (0, l.jsx)("button", {
                onClick: () => S((e) => e + 1),
                style: {
                    padding: "6px 14px",
                    cursor: "pointer",
                    fontSize: "13px",
                    borderRadius: "4px",
                    border: "1px solid #555",
                    background: "#2b2d31",
                    color: "#dbdee1",
                },
                children: "Clear Cache & Reload",
            }),
            (0, l.jsx)("div", {
                style:
                    "video" === g
                        ? {
                              width: "landscape" === t ? "640px" : "360px",
                              height: "landscape" === t ? "360px" : "640px",
                              margin: "0 auto",
                          }
                        : {
                              display: "flex",
                              flexDirection: "column",
                              width: "portrait" === t ? "400px" : "100%",
                              maxWidth: "portrait" === t ? void 0 : "800px",
                              height: "portrait" === t ? "700px" : "500px",
                              backgroundColor: "#1e1f22",
                              borderRadius: "8px",
                              overflow: "hidden",
                          },
                children: (0, l.jsx)(
                    d.default,
                    {
                        src: y,
                        poster: s,
                        initialActive: p,
                        autoplay: a,
                        extraButtons: v,
                        hideFullScreenBtn: x,
                        orientation: t,
                        maxSeekableTimeSec: r > 0 ? r : void 0,
                        autoHideVolumeSlider: m,
                        persistPlayhead: h,
                        parentTransitionState: u.ip.ENTERED,
                        onProgressUpdate: () => {},
                        onEnded: () => {},
                        onError: () => {},
                        transcriptText: i === o.Im ? o.LI : o.pQ,
                        renderEndScreen: c
                            ? (e) => {
                                  let { replay: a } = e;
                                  return (0, l.jsx)(F, { orientation: t, thumbnailUrl: I, onReplay: a });
                              }
                            : void 0,
                    },
                    `${String(p)}-${b}`,
                ),
            }),
        ],
    });
}
let M = {
        orientation: {
            label: "Orientation",
            type: "select",
            options: [
                { label: "Landscape", value: "landscape" },
                { label: "Portrait", value: "portrait" },
            ],
            defaultValue: "landscape",
        },
        autoplay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
        maxSeekableTimeSec: { label: "Max Seekable Time (sec, 0 = unrestricted)", type: "number", defaultValue: 0 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: o.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: I },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
        initialActive: { label: "Initially Active", type: "boolean", defaultValue: !0 },
        autoHideVolumeSlider: { label: "Auto-hide Volume Slider", type: "boolean", defaultValue: !1 },
        persistPlayhead: { label: "Persist Playhead", type: "boolean", defaultValue: !0 },
        sizing: {
            label: "Container sizing",
            type: "select",
            options: [
                { label: "Modal context (800\xd7500)", value: "modal" },
                { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            ],
            defaultValue: "modal",
        },
        numExtraButtons: { label: "Extra Buttons", type: "number", defaultValue: 0 },
        hideFullScreenBtn: { label: "Hide Fullscreen Button", type: "boolean", defaultValue: !1 },
    },
    z = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: O,
        controls: { ...M, orientation: { ...M.orientation, defaultValue: "landscape" } },
    },
    N = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: O,
        controls: { ...M, orientation: { ...M.orientation, defaultValue: "portrait" } },
    },
    B = {
        name: "HLS",
        id: "hls-video-generic",
        component: O,
        controls: {
            ...M,
            orientation: { ...M.orientation, defaultValue: "landscape" },
            videoUrl: { ...M.videoUrl, defaultValue: o.Im },
        },
    },
    H = { tension: 500, friction: 30, clamp: !0 },
    Q = {
        name: "Timeline Indicators",
        id: "timeline-indicators-generic",
        component: function (e) {
            let { orientation: t, autoplay: a, maxSeekableTimeSec: r, videoUrl: i, indicatorTimeSec: o } = e,
                s = (function (e) {
                    let [t, a] = n.useState(null),
                        [r, i] = n.useState(null),
                        o = n.useRef(null),
                        [{ expansion: s }, u] = (0, L.z)(() => ({
                            expansion: 0,
                            config: H,
                            onRest: () => {
                                null == o.current && i(null);
                            },
                        })),
                        d = n.useCallback(
                            (e) => {
                                (o.current = e), null != e ? (i(e), u({ expansion: 4 })) : u({ expansion: 0 }), a(e);
                            },
                            [u],
                        ),
                        c = n.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                        p = n.useCallback(
                            (e, t) => {
                                let a = r === e.index;
                                return (0, l.jsx)(
                                    k.animated.div,
                                    {
                                        "data-testid": "timeline-indicator",
                                        onMouseEnter: () => d(e.index),
                                        onMouseLeave: () => d(null),
                                        style: {
                                            position: "absolute",
                                            left: a ? s.to((t) => e.leftPx - t) : e.leftPx,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: a ? s.to((e) => `${32 + 2 * e}px`) : 32,
                                            height: a ? s.to((e) => `${32 + 2 * e}px`) : 32,
                                            boxSizing: "border-box",
                                            borderRadius: "50%",
                                            backgroundColor: "#3ba55c",
                                            border: "2px solid white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            zIndex: 1,
                                        },
                                        children: (0, l.jsx)(U.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-overlay-light",
                                            children: "R",
                                        }),
                                    },
                                    `indicator-${e.index}`,
                                );
                            },
                            [d, r, s],
                        );
                    return {
                        indicators: c,
                        animatingIndex: r,
                        expansionSpring: s,
                        hoverExpansionPx: 4,
                        renderIndicator: p,
                    };
                })(o);
            return (0, l.jsx)("div", {
                style: {
                    width: "landscape" === t ? "640px" : "360px",
                    height: "landscape" === t ? "360px" : "640px",
                    margin: "0 auto",
                },
                children: (0, l.jsx)(d.default, {
                    src: i,
                    autoplay: a,
                    orientation: t,
                    maxSeekableTimeSec: r > 0 ? r : void 0,
                    parentTransitionState: u.ip.ENTERED,
                    timelineIndicatorConfig: s,
                }),
            });
        },
        controls: {
            orientation: M.orientation,
            autoplay: M.autoplay,
            maxSeekableTimeSec: M.maxSeekableTimeSec,
            videoUrl: M.videoUrl,
            indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
        },
    };
var W = a(405670),
    q = a(441512),
    $ = a(412703),
    K = a(440703),
    Y = a(267548),
    G = a(668824),
    Z = a(738822),
    J = a(73473),
    X = a(55759),
    ee = a(795068),
    et = a(190107),
    ea = a(652215);
function er(e) {
    let {
        url: t,
        width: a = 640,
        height: r = 360,
        target: l = 60,
        videoTitle: n = "Test Video Quest",
        transcript: i,
    } = e;
    return {
        type: $.n.WATCH_VIDEO,
        target: l,
        assets: { video: { url: t, width: a, height: r, transcript: i } },
        messages: { videoTitle: n },
    };
}
function el() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: r = null, claimedAt: l = null } = e;
    return {
        userId: "123",
        questId: en,
        enrolledAt: r,
        completedAt: a,
        claimedAt: l,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let en = `playground-video-quest-${Date.now()}`;
function ei(e) {
    return {
        id: en,
        preview: !0,
        config: {
            id: en,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            messages: { questName: "Video Quest Playground", gameTitle: "Test Game", gamePublisher: "Discord" },
            colors: { primary: "#5865F2", secondary: "#3BA55C" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        type: K.l.VIRTUAL_CURRENCY,
                        orbQuantity: 200,
                        messages: {
                            name: "Test Reward",
                            nameWithArticle: "a Test Reward",
                            redemptionInstructionsByPlatform: {},
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [Z.pY.CROSS_PLATFORM],
            },
            assets: {
                hero: "",
                heroVideo: o.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: G.K.AND, tasks: { [$.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: Y.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: el({ enrolledAt: new Date().toISOString() }),
        targetedContent: [Z.uF.QUEST_HOME_DESKTOP],
    };
}
function eo(e) {
    let { quest: t, isPortrait: a, children: r, isFullscreenEnabled: i = !1, setIsFullscreenEnabled: o = ea.tEg } = e,
        s = n.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: Z.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: a,
                onClose: ea.tEg,
                isFullscreenEnabled: i,
                setIsFullscreenEnabled: o,
                maxProgressSec: 0,
                targetSec: 0,
            }),
            [t, a, i, o],
        ),
        u = n.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, l.jsx)(J.R, {
        questOrQuests: t,
        questContent: Z.uF.VIDEO_MODAL,
        sourceQuestContent: Z.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, l.jsx)(ee.l.Provider, { value: u, children: (0, l.jsx)(ee.a.Provider, { value: s, children: r }) }),
    });
}
function es(e) {
    let { orientation: t, autoplay: a, questCompleted: r, fullEpisode: i, targetTimeSec: o, videoUrl: s } = e,
        d = "portrait" === t,
        [c, p] = n.useState(!1),
        m = er({
            url: s,
            width: d ? 360 : 640,
            height: d ? 640 : 360,
            target: o,
            videoTitle: d ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        f = ei(m),
        g = n.useRef(!1);
    g.current || ((g.current = !0), W.Kr.getState().clearState()),
        i && (f.config.features = [et.Li.FULL_EPISODE_VIDEO_QUEST]);
    let h = r
        ? {
              ...f,
              userStatus: el({
                  enrolledAt: f.userStatus?.enrolledAt ?? null,
                  completedAt: f.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: m.target,
              }),
          }
        : f;
    return (0, l.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: d ? "400px" : "100%",
            maxWidth: d ? void 0 : "800px",
            height: d ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, l.jsx)(eo, {
            quest: h,
            isPortrait: d,
            isFullscreenEnabled: c,
            setIsFullscreenEnabled: p,
            children: (0, l.jsx)(X.A, {
                targetTimeSec: m.target,
                parentTransitionState: u.ip.ENTERED,
                onOptimisticProgressUpdate: ea.tEg,
                autoplay: a,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: s,
            }),
        }),
    });
}
let eu = {
        orientation: {
            label: "Orientation",
            type: "select",
            options: [
                { label: "Landscape", value: "landscape" },
                { label: "Portrait", value: "portrait" },
            ],
            defaultValue: "landscape",
        },
        questCompleted: { label: "Quest Completed", type: "boolean", defaultValue: !1 },
        fullEpisode: { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
        targetTimeSec: { label: "Target Time (sec)", type: "number", defaultValue: 15 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: o.kz },
    },
    ed = {
        name: "Landscape",
        id: "landscape-video",
        component: es,
        controls: { ...eu, orientation: { ...eu.orientation, defaultValue: "landscape" } },
    },
    ec = {
        name: "Portrait",
        id: "portrait-video",
        component: es,
        controls: { ...eu, orientation: { ...eu.orientation, defaultValue: "portrait" } },
    },
    ep =
        'Quest completion is server-driven. In the playground, crossing the reward indicator won\'t flip to the completed state \u2014 toggle "Quest Completed" to preview that UI.',
    em = {
        marginTop: "12px",
        padding: "8px 12px",
        fontSize: "12px",
        lineHeight: 1.4,
        color: "var(--text-muted)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "6px",
    };
function ef(e, t) {
    return "video" === e
        ? { width: t ? "360px" : "640px", height: t ? "640px" : "360px", margin: "0 auto" }
        : {
              display: "flex",
              flexDirection: "column",
              width: t ? "400px" : "100%",
              maxWidth: t ? void 0 : "800px",
              height: t ? "700px" : "500px",
              backgroundColor: "#1e1f22",
              borderRadius: "8px",
              overflow: "hidden",
          };
}
function eg(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: r,
            fullEpisode: i,
            targetTimeSec: o,
            videoUrl: s,
            sizing: d,
        } = e,
        c = "portrait" === t,
        p = er({
            url: s,
            width: c ? 360 : 640,
            height: c ? 640 : 360,
            target: o,
            videoTitle: c ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        m = ei(p),
        f = n.useRef(!1);
    f.current || ((f.current = !0), W.Kr.getState().clearState()),
        n.useEffect(() => {
            let e = document.querySelector('[data-testid="discord-web-video-player-video"]');
            if (null != e)
                if (!(e.readyState >= 1))
                    return (
                        e.addEventListener("loadedmetadata", t, { once: !0 }),
                        () => e.removeEventListener("loadedmetadata", t)
                    );
                else t();
            function t() {
                null != e && (e.currentTime = 0);
            }
        }, []),
        i && (m.config.features = [et.Li.FULL_EPISODE_VIDEO_QUEST]);
    let g = r
        ? {
              ...m,
              userStatus: el({
                  enrolledAt: m.userStatus?.enrolledAt ?? null,
                  completedAt: m.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: p.target,
              }),
          }
        : m;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)("div", {
                style: ef(d, c),
                children: (0, l.jsx)(eo, {
                    quest: g,
                    isPortrait: c,
                    children: (0, l.jsx)(q.A, {
                        targetTimeSec: p.target,
                        parentTransitionState: u.ip.ENTERED,
                        onOptimisticProgressUpdate: ea.tEg,
                        autoplay: a,
                        autoFocus: !1,
                        openedAtMs: 0,
                        orientation: t,
                        videoUrlOverride: s,
                    }),
                }),
            }),
            i && !r && (0, l.jsx)("div", { style: em, children: ep }),
        ],
    });
}
let eh = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    ex = {
        label: "Container sizing",
        type: "select",
        options: [
            { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            { label: "Modal context (800\xd7500)", value: "modal" },
        ],
        defaultValue: "modal",
    },
    eb = {
        id: "video-quest",
        name: "Video Player",
        groups: [
            { title: "Discord Video Player (Generic)", stories: [z, N, B, Q] },
            {
                title: "Discord Multi Video Player (Experimental)",
                stories: [
                    {
                        name: "Multi Video (POV switching)",
                        id: "multi-video-player",
                        docs: "Demonstrates `renderVideo`. The player is handed a renderer that mounts several clips as one continuous timeline \u2014 its scrubber, clock and seek buttons keep working in master-timeline seconds, and it is told nothing about the extra sources. Pick a POV circle to switch; playback returns to the original when a clip runs out or you seek outside its window.",
                        component: function (e) {
                            let {
                                    orientation: t,
                                    autoplay: a,
                                    originalUrl: r,
                                    originalDurationSec: i,
                                    subUrl: o,
                                    clipAStartSec: s,
                                    clipADurationSec: p,
                                    clipBStartSec: m,
                                    clipBDurationSec: f,
                                } = e,
                                g = n.useMemo(
                                    () => ({
                                        id: "original",
                                        url: r,
                                        durationSec: i,
                                        poster: "https://cdn.discordapp.com/assets/og_img_discord_home.png",
                                        owner: { avatarUrl: c.A.DEFAULT_AVATARS["0"], name: "Wumpus" },
                                    }),
                                    [r, i],
                                ),
                                h = n.useMemo(
                                    () => [
                                        {
                                            id: "clip-a",
                                            url: o,
                                            startSec: s,
                                            durationSec: p,
                                            poster: "https://cdn.discordapp.com/assets/activities/krunker_strike_poster.jpg",
                                            owner: { avatarUrl: c.A.DEFAULT_AVATARS["1"], name: "Clyde" },
                                        },
                                        {
                                            id: "clip-b",
                                            url: o,
                                            startSec: m,
                                            durationSec: f,
                                            poster: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png",
                                            owner: { avatarUrl: c.A.DEFAULT_AVATARS["2"], name: "Nelly" },
                                        },
                                    ],
                                    [o, s, p, m, f],
                                );
                            return (0, l.jsx)("div", {
                                style: {
                                    maxWidth: "landscape" === t ? "800px" : void 0,
                                    width: "landscape" === t ? "640px" : "360px",
                                    height: "landscape" === t ? "360px" : "640px",
                                    margin: "0 auto",
                                    backgroundColor: "#1e1f22",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                },
                                children: (0, l.jsx)(
                                    d.default,
                                    {
                                        parentTransitionState: u.ip.ENTERED,
                                        orientation: t,
                                        autoplay: a,
                                        src: g.url,
                                        poster: g.poster,
                                        renderVideo: (e) => (0, l.jsx)(R, { ...e, original: g, subSources: h }),
                                    },
                                    `${r}-${i}`,
                                ),
                            });
                        },
                        controls: j,
                    },
                ],
            },
            { title: "Clips Player", stories: [s] },
            {
                title: "Composed Quest Player",
                stories: [
                    {
                        name: "Landscape",
                        id: "landscape-video-composed",
                        component: eg,
                        controls: {
                            ...eu,
                            orientation: { ...eu.orientation, defaultValue: "landscape" },
                            fullEpisode: eh,
                            sizing: ex,
                        },
                    },
                    {
                        name: "Portrait",
                        id: "portrait-video-composed",
                        component: eg,
                        controls: {
                            ...eu,
                            orientation: { ...eu.orientation, defaultValue: "portrait" },
                            fullEpisode: eh,
                            sizing: ex,
                        },
                    },
                    {
                        name: "Landscape \u2014 Autoplay",
                        id: "landscape-video-composed-autoplay",
                        component: eg,
                        controls: {
                            ...eu,
                            orientation: { ...eu.orientation, defaultValue: "landscape" },
                            autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                            fullEpisode: eh,
                            sizing: ex,
                        },
                    },
                    {
                        name: "Landscape \u2014 Progress Persistence",
                        id: "landscape-video-composed-persistence",
                        component: function (e) {
                            let {
                                    orientation: t,
                                    autoplay: a,
                                    questCompleted: r,
                                    fullEpisode: n,
                                    targetTimeSec: i,
                                    videoUrl: o,
                                    sizing: s,
                                } = e,
                                d = "portrait" === t,
                                c = er({
                                    url: o,
                                    width: d ? 360 : 640,
                                    height: d ? 640 : 360,
                                    target: i,
                                    videoTitle: d ? "Test Portrait Video" : "Test Landscape Video",
                                    transcript: "transcript.txt",
                                }),
                                p = ei(c);
                            n && (p.config.features = [et.Li.FULL_EPISODE_VIDEO_QUEST]);
                            let m = r
                                ? {
                                      ...p,
                                      userStatus: el({
                                          enrolledAt: p.userStatus?.enrolledAt ?? null,
                                          completedAt: p.userStatus?.enrolledAt ?? null,
                                          streamProgressSeconds: c.target,
                                      }),
                                  }
                                : p;
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)("div", {
                                        style: ef(s, !1),
                                        children: (0, l.jsx)(eo, {
                                            quest: m,
                                            isPortrait: !1,
                                            children: (0, l.jsx)(q.A, {
                                                targetTimeSec: c.target,
                                                parentTransitionState: u.ip.ENTERED,
                                                onOptimisticProgressUpdate: ea.tEg,
                                                autoplay: a,
                                                autoFocus: !1,
                                                openedAtMs: 0,
                                                orientation: t,
                                                videoUrlOverride: o,
                                            }),
                                        }),
                                    }),
                                    n && !r && (0, l.jsx)("div", { style: em, children: ep }),
                                ],
                            });
                        },
                        controls: {
                            ...eu,
                            orientation: { ...eu.orientation, defaultValue: "landscape" },
                            fullEpisode: eh,
                            sizing: ex,
                        },
                    },
                ],
            },
            { title: "Legacy Quest Player", stories: [ed, ec] },
        ],
        tags: ["Video Player", "Quests"],
        IconComponent: r.PlayIcon,
    },
    eS = { playgroundBaseUrl: "video-quest", collections: [eb] };
