n.d(t, { A: () => I });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(404144),
    u = n.n(s),
    o = n(607470),
    c = n(61491),
    d = n(683063),
    m = n(339350),
    f = n(939249),
    g = n(97808),
    h = n(778712),
    p = n(268378),
    x = n(375708),
    v = n(599507);
let S = l.memo(function (e) {
    let { source: t, label: n, isActive: l, isInRange: i, onSelect: s } = e,
        u = t.owner?.name ?? n ?? x.intl.string(p.default["6XuC8e"]);
    if (!i && !l) {
        let e = (0, c.rB)(t.startSec);
        return (0, r.jsx)(d.u, {
            asset: (0, r.jsx)(m.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, r.jsx)(f.D, {
                className: v.RG,
                "aria-label": x.intl.formatToPlainString(p.default.JFaxs2, { name: u, time: e }),
                "aria-disabled": !0,
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, r.jsx)(g.eu, { src: t.owner?.avatarUrl, size: h._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, r.jsxs)(f.D, {
        className: a()(v.uF, { [v._]: l }),
        "aria-label": l
            ? x.intl.formatToPlainString(p.default["RSMzC/"], { name: u })
            : x.intl.formatToPlainString(p.default["4AH1Vb"], { name: u }),
        "aria-current": l,
        onClick: () => s(t),
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, r.jsx)("div", {
                className: a()(v.U8, { [v.ED]: l }),
                children:
                    null != t.poster &&
                    (0, r.jsx)("img", { className: v.a1, src: t.poster, alt: "", "aria-hidden": !0 }),
            }),
            null != t.owner &&
                (0, r.jsx)("div", {
                    className: v.UH,
                    children: (0, r.jsx)(g.eu, { src: t.owner.avatarUrl, size: h._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
function A(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
var C = n(340710);
function I(e) {
    let {
            ref: t,
            src: n,
            poster: i,
            className: s,
            onSourceError: c,
            isScrubbing: d,
            onTimeUpdate: m,
            onEnded: f,
            onLoadedMetadata: g,
            onError: h,
            children: v,
            original: I,
            subSources: b,
            ...j
        } = e,
        y = l.useRef(null),
        [E, T] = l.useState(I.durationSec ?? 0),
        [_, M] = l.useState(I.id),
        [N, L] = l.useState(0),
        [R, w] = l.useState("hidden"),
        [k, P] = l.useState("contain"),
        D = l.useMemo(() => [{ ...I, startSec: 0, durationSec: E }, ...b], [I, b, E]),
        O = D.find((e) => e.id === _) ?? D[0],
        U = l.useRef(null),
        H = l.useRef(null),
        V = l.useRef(null);
    function $(e, t) {
        let n = D.find((t) => t.id === e);
        if (null == n) return;
        let r = u()(t, 0, E),
            l = y.current;
        if (n.id === z.current.activeSource.id) {
            (H.current = null), null != l && (l.currentTime = r - n.startSec);
            return;
        }
        !(function () {
            let e = y.current,
                t = V.current;
            if (null == e || null == t || 0 === e.videoWidth) return;
            let n = t.getContext("2d");
            if (null != n) {
                (t.width = e.videoWidth), (t.height = e.videoHeight);
                try {
                    n.drawImage(e, 0, 0);
                } catch {
                    return;
                }
                P(window.getComputedStyle(e).objectFit), w("holding");
            }
        })(),
            (U.current = {
                localSeekSec: u()(r - n.startSec, 0, n.durationSec),
                resumePlayback: null != l && !l.paused,
                playbackRate: l?.playbackRate ?? 1,
            }),
            (H.current = r),
            (z.current = { ...z.current, activeSource: n }),
            M(n.id),
            L(r);
    }
    function G(e) {
        $(I.id, e);
    }
    let z = l.useRef({ activeSource: O, masterDurationSec: E, isScrubbing: d, revertToOriginal: G });
    l.useLayoutEffect(() => {
        z.current = { ...z.current, activeSource: O, masterDurationSec: E, isScrubbing: d, revertToOriginal: G };
    });
    let F = l.useRef(null);
    l.useLayoutEffect(
        () => (
            (F.current ??= (function (e) {
                let t = null;
                function n() {
                    let n = e.getElement();
                    return null != n && (t = n), t;
                }
                return new Proxy(
                    {},
                    {
                        get(t, r) {
                            let l = n();
                            switch (r) {
                                case "domNode":
                                    return e.getElement();
                                case "currentTime":
                                    return e.getCurrentTimeSec();
                                case "duration":
                                    return e.getDurationSec();
                                case "buffered":
                                    var i, a;
                                    return (
                                        (i = l?.buffered),
                                        (a = e.getActiveStartSec()),
                                        {
                                            length: i?.length ?? 0,
                                            start: (e) => (i?.start(e) ?? 0) + a,
                                            end: (e) => (i?.end(e) ?? 0) + a,
                                        }
                                    );
                            }
                            if (null == l) return;
                            let s = Reflect.get(l, r);
                            return "function" == typeof s ? s.bind(l) : s;
                        },
                        set(t, r, l) {
                            if ("currentTime" === r) return e.seekTo(l), !0;
                            let i = n();
                            return null != i && Reflect.set(i, r, l), !0;
                        },
                        has(e, t) {
                            let r = n();
                            return null != r && Reflect.has(r, t);
                        },
                    },
                );
            })({
                getElement: () => y.current,
                getDurationSec: () => z.current.masterDurationSec,
                getActiveStartSec: () => z.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = H.current;
                    return null != e ? e : z.current.activeSource.startSec + (y.current?.currentTime ?? 0);
                },
                seekTo: (e) => {
                    let t = u()(e, 0, z.current.masterDurationSec);
                    if ((L(t), A(z.current.activeSource, t))) {
                        H.current = null;
                        let e = y.current;
                        null != e && (e.currentTime = t - z.current.activeSource.startSec);
                        return;
                    }
                    (H.current = t), z.current.isScrubbing || z.current.revertToOriginal(t);
                },
            })),
            t(F.current),
            () => {
                t(null);
            }
        ),
        [t],
    );
    let Z = l.useRef(_);
    function K(e) {
        e.id !== O.id && $(e.id, N);
    }
    l.useEffect(() => {
        Z.current !== _ && ((Z.current = _), y.current?.load());
    }, [_]),
        l.useEffect(() => {
            if ("releasing" !== R) return;
            let e = y.current;
            if (null == e) return void w("hidden");
            let t = !1;
            function n() {
                t || ((t = !0), w("hidden"));
            }
            let r = setTimeout(n, 1e3);
            if ("function" == typeof e.requestVideoFrameCallback) {
                let l = e.requestVideoFrameCallback(n);
                return () => {
                    (t = !0), clearTimeout(r), e.cancelVideoFrameCallback(l);
                };
            }
            return (
                e.addEventListener("seeked", n),
                () => {
                    (t = !0), clearTimeout(r), e.removeEventListener("seeked", n);
                }
            );
        }, [R]),
        l.useEffect(() => {
            if (d) return;
            let e = H.current;
            null == e || null != U.current || A(z.current.activeSource, e) || z.current.revertToOriginal(e);
        }, [d]);
    let B = !A(O, N);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.A, {
                ...j,
                ref: y,
                className: a()(s, { [C._b]: B }),
                poster: O.poster ?? i,
                onTimeUpdate: function (e) {
                    let t = y.current;
                    if (null != t && null == U.current && null == H.current) {
                        let e = O.startSec + t.currentTime;
                        L(e), O.id !== I.id && e >= O.startSec + O.durationSec - 0.12 && G(e);
                    }
                    m?.(e);
                },
                onEnded: function (e) {
                    O.id !== I.id ? G(O.startSec + O.durationSec) : f?.(e);
                },
                onLoadedMetadata: function (e) {
                    let t = y.current,
                        n = U.current;
                    if (null == n) {
                        null != t &&
                            Number.isFinite(t.duration) &&
                            (T(t.duration), (z.current = { ...z.current, masterDurationSec: t.duration })),
                            g?.(e);
                        return;
                    }
                    if (((U.current = null), null != t)) {
                        t.playbackRate = n.playbackRate;
                        try {
                            t.currentTime = n.localSeekSec;
                        } catch {}
                        n.resumePlayback && t.play().catch(() => {});
                    }
                    (H.current = null), w((e) => ("holding" === e ? "releasing" : e));
                },
                onError: function (e) {
                    O.id !== I.id ? G(O.startSec + (y.current?.currentTime ?? 0)) : h?.(e);
                },
                children: [v, (0, r.jsx)("source", { onError: c, src: O.url })],
            }),
            (0, r.jsx)("canvas", {
                ref: V,
                className: C.bQ,
                style: { objectFit: k },
                hidden: "hidden" === R,
                "aria-hidden": !0,
            }),
            D.length > 1 &&
                (0, r.jsx)("div", {
                    className: C.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: D.map((e) =>
                        (0, r.jsx)(
                            S,
                            {
                                source: e,
                                label: e.id === I.id ? (e.label ?? x.intl.string(p.default["9tdsDk"])) : e.label,
                                isActive: e.id === O.id,
                                isInRange: A(e, N),
                                onSelect: K,
                            },
                            e.id,
                        ),
                    ),
                }),
        ],
    });
}
