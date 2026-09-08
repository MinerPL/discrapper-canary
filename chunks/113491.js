l.d(t, { A: () => _ });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(900797),
    o = l(320448),
    u = l(691885),
    d = l(243721),
    c = l(834730),
    m = l(922016),
    f = l(866665),
    h = l(939249),
    x = l(783977),
    g = l(976713),
    p = l(313265);
l(321073), l(134528), l(947204);
var v = l(224341),
    j = l(947936);
let b = 1e3 / 30,
    y = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    k = 2 * Math.PI;
function N(e, t) {
    let l = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)) ^ (l >>> 16)) >>> 0) / 0xffffffff;
}
function A() {
    let e = a.useRef(null);
    return (
        a.useEffect(() => {
            let t = e.current,
                l = t?.getContext("2d");
            if (null == t || null == l || !document.documentElement.classList.contains("full-motion")) return;
            let n = getComputedStyle(t).getPropertyValue("color").trim(),
                a = t.closest('[role="group"]'),
                r = a?.querySelector("[data-vibegrations-effort-handle]") ?? null,
                i = 0,
                s = [],
                o = 0,
                u = 0,
                d = 8,
                c = 9,
                m = 0,
                f = 0,
                h = !1,
                x = 0,
                g = 0,
                p = performance.now();
            function j() {
                if (null == l) return;
                (l.textAlign = "center"),
                    (l.textBaseline = "middle"),
                    (l.font = `${d}px 'AI Visual Identity Glyphs', monospace`);
                let e = 0;
                for (let t of v.QI + v.vd) {
                    let n = l.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (d * d) / e) : d;
                l.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function A() {
                if (null == t || null == l) return;
                let e = t.clientWidth,
                    n = t.clientHeight;
                if (e === o && n === u) return;
                (o = e), (c = (d = ((u = n) - 2 - 2) / 3) + 1);
                let r = a?.querySelectorAll("[data-stop]"),
                    m = r?.[r.length - 1];
                null != m && (i = m.offsetLeft + m.offsetWidth / 2),
                    (s = null == r ? [] : Array.from(r, (e) => e.offsetLeft + e.offsetWidth / 2));
                let f = window.devicePixelRatio,
                    h = Number.isFinite(f) && f > 0 ? f : 1;
                (t.width = Math.round(o * h)), (t.height = Math.round(u * h)), l.setTransform(h, 0, 0, h, 0, 0), j();
            }
            A(),
                (m = requestAnimationFrame(function e(a) {
                    if (((m = requestAnimationFrame(e)), a - f < b)) return;
                    let j = a - f;
                    if (((f = a), null == t || null == l || 0 === o || null == r)) return;
                    let A = Number(r.dataset.effortCentre),
                        w = r.hasAttribute("data-effort-live"),
                        S = Number.isFinite(A) && Math.abs(A - i) > 16;
                    if (!h && (!w || S)) return;
                    x = Math.min(1, Math.max(0, x + ((w ? 1 : -1) * j) / 260));
                    let E = t.getBoundingClientRect(),
                        C = E.width > 0 ? E.width / o : 1,
                        I = r.getBoundingClientRect(),
                        T = (I.left - E.left) / C,
                        M = (1 - Math.min(1, Math.abs(T + I.width / C / 2 - i) / 16)) * x;
                    if (M < 0.01) {
                        h && l.clearRect(0, 0, o, u), (h = !1);
                        return;
                    }
                    h || (g = a), (h = !0), l.clearRect(0, 0, o, u);
                    let P = T - 1 - (1 - M) * 16,
                        _ = (a - p) / 1e3,
                        R = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (a - g) / 1500))) ** 3),
                        L = Math.ceil(P / c);
                    l.fillStyle = n;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * N(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(_ * k * 0.13 + N(e, 29) * k))) * R,
                            a = 0;
                        for (let t of y) {
                            let l = (e * t.stagger + 0.07 * N(e, t.salt)) * k;
                            a += t.weight * Math.sin(_ * k * t.hz + l);
                        }
                        let r = 0.30000000000000004 + 0.7 * (1 + a),
                            i = Math.floor((_ * t) / c),
                            o = 1 + e * c + d / 2,
                            m = d / 2 + 3,
                            f = Math.abs(o - u / 2) < m;
                        for (let t = 0; t < L; t++) {
                            let a,
                                u = P - (t * c + d / 2);
                            if (u < 0) break;
                            let h = (P - u) / n;
                            if (h >= 1) break;
                            let x = 1 - h ** r,
                                g = Math.min(v.QI.length, Math.floor(x * (v.QI.length + 1)));
                            (a =
                                0.07 > N(t - i, e + 613)
                                    ? v.QI.charAt(0)
                                    : g < v.QI.length
                                      ? v.QI.charAt(g)
                                      : v.vd.charAt(Math.floor(N(e, 977) * v.vd.length))),
                                (f && s.some((e) => Math.abs(u - e) < m)) ||
                                    ((l.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - h) / 0.34) *
                                        M),
                                    l.fillText(a, u, o));
                        }
                    }
                    l.globalAlpha = 1;
                }));
            let w = document.fonts;
            null != w && w.load(`${d}px 'AI Visual Identity Glyphs'`, v.QI + v.vd).then(j, () => void 0);
            let S = "u" < typeof ResizeObserver ? null : new ResizeObserver(A);
            return (
                S?.observe(t),
                () => {
                    cancelAnimationFrame(m), S?.disconnect();
                }
            );
        }, []),
        (0, n.jsx)("canvas", { ref: e, className: j.Z, "aria-hidden": "true" })
    );
}
var w = l(757713);
function S(e) {
    let { activeIndex: t, stops: l, ariaLabel: r, disabled: s, onSelect: o, className: u } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        m = a.useRef(null),
        [f, h] = a.useState(-1),
        x = a.useRef(!1),
        g = a.useRef(t),
        p = a.useRef({ activeIndex: t, disabled: s, onSelect: o, stopCount: l.length }),
        v = a.useRef(!1),
        j = t >= 0 ? t : f,
        b = t < 0 && f >= 0,
        y = a.useCallback((e, t, l, n) => {
            let a = c.current,
                r = m.current;
            null != a &&
                null != r &&
                ("arrive" === n
                    ? ((a.style.transitionProperty = "opacity, background-color"),
                      (r.style.transitionProperty = "opacity"))
                    : "snap" === n || "drag" === n
                      ? ((a.style.transitionProperty = "none"), (r.style.transitionProperty = "none"))
                      : ((a.style.transitionProperty = ""), (r.style.transitionProperty = "")),
                (a.style.transform = `translateX(${e}px)`),
                (a.style.width = `${t}px`),
                (a.dataset.effortCentre = String(e + t / 2)),
                (r.style.transform = `translateX(${e + t - l}px)`),
                ("arrive" === n || "snap" === n) &&
                    (a.getBoundingClientRect(), (a.style.transitionProperty = ""), (r.style.transitionProperty = "")));
        }, []),
        k = a.useCallback(
            (e, t) => {
                let l = d.current,
                    n = e >= 0 ? l?.querySelector(`[data-stop='${e}']`) : null;
                null != n && y(n.offsetLeft, n.offsetWidth, l?.offsetWidth ?? 0, t);
            },
            [y],
        );
    function N(e) {
        if (s) return;
        let n = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === n) return;
        e.preventDefault();
        let a = t >= 0 ? t : n > 0 ? -1 : l.length,
            r = Math.min(l.length - 1, Math.max(0, a + n));
        r !== t && (o(r), d.current?.querySelector(`[data-stop='${r}']`)?.focus());
    }
    return (
        a.useLayoutEffect(() => {
            let e = j >= 0,
                n = e && x.current;
            (x.current = e),
                (g.current = j),
                (p.current = { activeIndex: t, disabled: s, onSelect: o, stopCount: l.length }),
                v.current || k(j, n ? "animate" : "arrive");
        }, [j, t, s, o, l.length, p, k]),
        a.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => k(g.current, "snap"));
            return t.observe(e), () => t.disconnect();
        }, [k]),
        a.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let l = null;
            function n(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function a(e, t) {
                let l = null;
                for (let n = 0; n < e.stops.length; n += 1) {
                    let a = e.stops[n];
                    if (null == a) continue;
                    let r = t - a;
                    (null == l || Math.abs(r) < Math.abs(l.offset)) && (l = { index: n, left: a, offset: r });
                }
                return l;
            }
            function r() {
                if (null == l) return;
                l.frame = 0;
                let { metrics: e } = l,
                    t = n(e, l.x),
                    r = a(e, t);
                if (null == r) return;
                if (24 >= Math.abs(r.offset)) {
                    var i;
                    let t;
                    l.snapped !== r.index &&
                        ((l.snapped = r.index),
                        (l.snappedAt = l.at),
                        r.index !== p.current.activeIndex && p.current.onSelect(r.index));
                    let n = l.at - l.snappedAt < 300;
                    y(
                        r.left +
                            ((t = Math.min(Math.abs((i = r.offset)) / 24, 1)), 12 * Math.sign(i) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        n ? "animate" : "drag",
                    );
                    return;
                }
                null != l.snapped && (l.releasedAt = l.at), (l.snapped = null);
                let s = l.at - l.releasedAt < 300;
                y(t, e.handleWidth, e.rowWidth, s ? "animate" : "drag");
            }
            function i(n) {
                if (p.current.disabled || p.current.activeIndex < 0 || null == t) return;
                let a = (function () {
                    if (null == e || null == t) return null;
                    let l = e.getBoundingClientRect(),
                        n = [];
                    for (let t = 0; t < p.current.stopCount; t += 1)
                        n.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: l.left, rowWidth: l.width, handleWidth: t.offsetWidth, stops: n };
                })();
                null != a &&
                    (n.preventDefault(),
                    t.setPointerCapture(n.pointerId),
                    (l = {
                        pointerId: n.pointerId,
                        metrics: a,
                        snapped: p.current.activeIndex,
                        snappedAt: n.timeStamp,
                        releasedAt: 0,
                        x: n.clientX,
                        at: n.timeStamp,
                        frame: 0,
                    }),
                    (v.current = !0));
            }
            function s(e) {
                if (null != l) {
                    if (0 === e.buttons) return void o(e.clientX);
                    (l.x = e.clientX), (l.at = e.timeStamp), 0 === l.frame && (l.frame = requestAnimationFrame(r));
                }
            }
            function o(e) {
                let r = l;
                if (((l = null), (v.current = !1), null == r)) return;
                0 !== r.frame && cancelAnimationFrame(r.frame),
                    null != t && t.hasPointerCapture(r.pointerId) && t.releasePointerCapture(r.pointerId);
                let i = a(r.metrics, n(r.metrics, e ?? r.x));
                null != i &&
                    (y(i.left, r.metrics.handleWidth, r.metrics.rowWidth, "animate"),
                    i.index !== p.current.activeIndex && p.current.onSelect(i.index));
            }
            function u(e) {
                o(e.clientX);
            }
            function m() {
                o(null);
            }
            return (
                t.addEventListener("pointerdown", i),
                t.addEventListener("pointermove", s),
                t.addEventListener("pointerup", u),
                t.addEventListener("pointercancel", u),
                t.addEventListener("lostpointercapture", m),
                window.addEventListener("pointerup", u),
                window.addEventListener("blur", m),
                () => {
                    null != l && 0 !== l.frame && cancelAnimationFrame(l.frame),
                        t.removeEventListener("pointerdown", i),
                        t.removeEventListener("pointermove", s),
                        t.removeEventListener("pointerup", u),
                        t.removeEventListener("pointercancel", u),
                        t.removeEventListener("lostpointercapture", m),
                        window.removeEventListener("pointerup", u),
                        window.removeEventListener("blur", m);
                }
            );
        }, [p, v, y]),
        (0, n.jsx)("div", {
            className: i()(w.u4, u),
            role: "group",
            "aria-label": r,
            children: (0, n.jsxs)("div", {
                ref: d,
                className: w.Gb,
                children: [
                    (0, n.jsx)("span", {
                        className: w.Ek,
                        "aria-hidden": "true",
                        children: (0, n.jsx)("span", { ref: m, className: i()(w.GS, { [w.eG]: t < 0 }) }),
                    }),
                    (0, n.jsx)("span", {
                        ref: c,
                        "data-vibegrations-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: i()(w.p$, { [w.Jb]: j < 0, [w.jz]: b, [w.al]: t >= 0 && !s }),
                        "aria-hidden": "true",
                    }),
                    l.map((e, l) =>
                        (0, n.jsx)(
                            "button",
                            {
                                type: "button",
                                "data-stop": l,
                                "aria-pressed": l === t,
                                "aria-label": e,
                                disabled: s,
                                className: w.ds,
                                onKeyDown: N,
                                onPointerEnter: () => h(l),
                                onPointerLeave: () => h((e) => (e === l ? -1 : e)),
                                onFocus: () => h(l),
                                onBlur: () => h((e) => (e === l ? -1 : e)),
                                onClick: () => o(l),
                                children: (0, n.jsx)("span", { className: w.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, n.jsx)("span", { className: w.jN, "aria-hidden": "true", children: (0, n.jsx)(A, {}) }),
                ],
            }),
        })
    );
}
var E = l(856795),
    C = l(50617),
    I = l(375708),
    T = l(752065);
function M(e) {
    let [t, l] = a.useState(e),
        [n, r] = a.useState(!1),
        [i, s] = a.useState(e);
    return (
        i !== e && (s(e), e ? l(!0) : r(!1)),
        a.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        a.useEffect(() => {
            if (!t || !e) return;
            let l = 0,
                n = requestAnimationFrame(() => {
                    l = requestAnimationFrame(() => r(!0));
                });
            return () => {
                cancelAnimationFrame(n), cancelAnimationFrame(l);
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function P(e) {
    let { settings: t, choices: l, disabled: r, onChange: m, placement: f, open: h, entered: x } = e,
        [v, j] = a.useState(!1),
        b = M(v),
        y = (0, g.EF)(t, l.main),
        k = v ? s.t : o._,
        N = a.useMemo(
            () => l.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: p.o[e.provider] })),
            [l.main],
        ),
        A = a.useMemo(() => l.thinking.map((e) => ({ id: e, label: p.h[e] ?? e, value: e })), [l.thinking]);
    function w(e) {
        return l.main.find((t) => t.id === e)?.supports_fast === !0;
    }
    function P(e) {
        let { fast: t, ...l } = e;
        m((0, g.ko)(!0 === t && w(e.model) ? { ...l, fast: !0 } : l));
    }
    let _ = g.Q0.map((e) => e.summary()),
        R = y >= 0 ? _[y] : (0, g.tg)(t, l.main),
        { text: L, phase: D } = (0, E.Q)(R);
    return (0, n.jsx)("div", {
        className: T.qd,
        "data-placement": f ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(T.t$, { [T.Zr]: h && x, [T.GF]: !h }),
            role: "dialog",
            "aria-label": I.intl.string(C.default["2NWMqY"]),
            children: [
                b.mounted
                    ? (0, n.jsxs)("div", {
                          className: i()(T.Nr, T.uO, { [T.Zr]: v && b.entered, [T.GF]: !v }),
                          children: [
                              (0, n.jsx)(u.l, {
                                  label: I.intl.string(C.default["9FRudW"]),
                                  options: N,
                                  value: t.main.model,
                                  onSelectionChange: (e) => P({ ...t.main, model: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
                              (0, n.jsx)(u.l, {
                                  label: I.intl.string(C.default["4AsQHS"]),
                                  options: A,
                                  value: t.main.thinking,
                                  onSelectionChange: (e) => P({ ...t.main, thinking: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
                              w(t.main.model)
                                  ? (0, n.jsx)(d.d, {
                                        label: I.intl.string(C.default.SYLSgx),
                                        description: I.intl.string(C.default.HITWAI),
                                        checked: !0 === t.main.fast,
                                        disabled: r,
                                        onChange: (e) => P({ ...t.main, fast: e }),
                                    })
                                  : null,
                          ],
                      })
                    : null,
                (0, n.jsxs)("div", {
                    className: `${T.Nr} ${T.rF}`,
                    children: [
                        (0, n.jsxs)("div", {
                            className: T.wx,
                            children: [
                                (0, n.jsxs)("button", {
                                    type: "button",
                                    className: T.y6,
                                    "aria-expanded": v,
                                    "aria-label": I.intl.string(C.default.IaLFoX),
                                    onClick: () => j((e) => !e),
                                    children: [
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: I.intl.string(C.default.GDs9Vq),
                                        }),
                                        (0, n.jsx)(k, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: T.vg,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(c.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: i()(T.Z, { [T.xQ]: "exit" === D, [T.lm]: "enter" === D }),
                                    children: L,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: T.hs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: T.Nb,
                                    children: [
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: I.intl.string(C.default.c11EuO),
                                        }),
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: I.intl.string(C.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(S, {
                                    activeIndex: y,
                                    stops: _,
                                    ariaLabel: I.intl.string(C.default.GDs9Vq),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let t = g.Q0[e];
                                        null != t && P((0, g.lA)(t));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function _(e) {
    let { settings: t, choices: l, disabled: r, onChange: i, className: s, icon: o } = e,
        u = a.useRef(null),
        [d, c] = a.useState(null),
        [g, p] = a.useState(t);
    t !== g && (p(t), c(null));
    let v = d ?? t,
        j = a.useCallback(
            (e) => {
                c(e), i(e);
            },
            [i],
        ),
        [b, y] = a.useState(!1),
        { mounted: k, entered: N } = M(b);
    return (0, n.jsx)(m.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        shouldShow: k,
        onRequestClose: () => y(!1),
        animation: m.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(P, {
                settings: v,
                choices: l,
                disabled: r,
                onChange: j,
                placement: t,
                open: b,
                entered: N,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(f.m, {
                text: I.intl.string(C.default.GoSNDN),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, n.jsx)(h.D, {
                    innerRef: u,
                    className: s ?? T.hZ,
                    "aria-label": I.intl.string(C.default.GoSNDN),
                    ...e,
                    onClick: () => y((e) => !e),
                    "aria-expanded": b,
                    children: o ?? (0, n.jsx)(x.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
