t.d(n, { A: () => D, R: () => M });
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(435558),
    o = t(207119),
    c = t(17928),
    u = t(939249),
    d = t(866323),
    A = t(43990),
    h = t(228366),
    m = t(367513),
    C = t(148494),
    E = t(386467),
    p = t(521981),
    g = t(763754),
    f = t(308334),
    I = t(516287),
    x = t(68935),
    v = t(148355),
    T = t(232835),
    _ = t(994500),
    j = t(486020),
    N = t(927813),
    S = t(403362),
    b = t(240248),
    O = t(652215),
    y = t(838541),
    R = t(538347);
let M = 10 * N.A.Millis.SECOND;
function L(e) {
    let { message: n } = e,
        { isBlocked: t, isIgnored: s } = (0, c.cf)(
            [_.A],
            () => ({ isBlocked: _.A.isBlockedForMessage(n), isIgnored: _.A.isIgnoredForMessage(n) }),
            [n],
        ),
        r = (0, g.X4)(n),
        o = i.useContext(E.A),
        [d, A] = i.useState(!1),
        h = i.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (m.A.updateChatOpen(n.channel_id, !0),
                    C.A.jumpToMessage({ channelId: n.channel_id, messageId: n.id, flash: !0 }));
            },
            [n.channel_id, n.id],
        ),
        T = (0, b.uJ)(n.content) ? null : (0, p.Ay)(n, { allowGameMentions: !0 }).content,
        {
            contentPlaceholder: N,
            renderedContent: S,
            trailingIcon: O,
            leadingIcon: M,
        } = (0, f.o)(n, T, t, s, R.BK, { trailingIconClass: R.sl, leadingIconClass: R.aG, iconSize: y.eJ }),
        L = (0, x.o6)(n),
        D =
            L.length > 0
                ? L.map((e) => (0, l.jsx)(v.A, { className: R.yI, size: 128, sticker: e, isInteracting: d }, e.id))
                : null;
    return (0, l.jsx)(I.x, {
        value: d,
        children: (0, l.jsxs)(u.D, {
            className: R.oR,
            onMouseEnter: () => {
                A(!0);
            },
            onMouseLeave: () => {
                A(!1);
            },
            onClick: h,
            children: [
                (0, l.jsxs)("div", {
                    className: a()(R.kn, { [R.mK]: n.mentioned }),
                    children: [
                        null != D ? null : M,
                        S ?? D ?? (0, l.jsx)("span", { children: N }),
                        null != D ? null : O,
                    ],
                }),
                (0, l.jsx)("img", {
                    alt: "",
                    src:
                        r?.guildMemberAvatar != null && null != o
                            ? (0, j.s7)({ guildId: o, userId: n.author.id, avatar: r.guildMemberAvatar })
                            : n.author.getAvatarURL(o, 32),
                    className: R.my,
                }),
            ],
        }),
    });
}
function D(e) {
    let { channelId: n, className: t } = e,
        [s, u] = i.useState(!1),
        { toastsHidden: m, toastMessages: C } = (function (e) {
            let { channelId: n, isFrozen: t, count: l, lingerMs: s } = e,
                [a, r] = i.useState([]),
                [o, u] = i.useState(!1),
                d = i.useRef(null),
                A = i.useRef(void 0),
                m = i.useCallback(() => {
                    (r([]), u(!0));
                }, []);
            (i.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: l, optimistic: i } = e;
                    t !== n ||
                        l.type === O.lAJ.STAGE_START ||
                        l.type === O.lAJ.STAGE_END ||
                        l.type === O.lAJ.STAGE_TOPIC ||
                        l.type === O.lAJ.STAGE_SPEAKER ||
                        l.type === O.lAJ.STAGE_RAISE_HAND ||
                        i ||
                        (clearTimeout(A.current), (A.current = setTimeout(m, s)), r((e) => [...e, l.id]));
                }
                return (
                    h.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        h.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [n, m, l, s]),
                i.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                i.useEffect(() => {
                    a.length > 3 &&
                        r((e) => {
                            let n = e.length - 3;
                            return [...e.slice(n)];
                        });
                }, [a]),
                t && null == d.current ? (d.current = a) : t || null == d.current || (d.current = null));
            let C = d.current ?? a;
            return {
                toastsHidden: o,
                toastMessages: (0, c.yK)([T.A], () => C.map((e) => T.A.getMessage(n, e)), [n, C]).filter(S.Vq),
            };
        })({ channelId: n, isFrozen: s, count: 3, lingerMs: M }),
        E = i.useRef({}),
        [p, g] = i.useState({}),
        f = i.useCallback((e, n) => {
            null == n ? delete E.current[e] : (E.current[e] = n);
        }, []),
        I = i.useRef(p);
    (i.useLayoutEffect(() => {
        I.current = p;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                n = 0;
            for (let t of C) {
                let l = E.current[t.id] ?? 0;
                ((e[t.id] = n), (n += l + 8));
            }
            (0, r.isEqual)(e, I.current) || g(e);
        }, [C]));
    let x = C.map((e) => ({ message: e, height: E.current[e.id], y: p[e.id] })),
        v = (0, d.p)(x, {
            keys: (e) => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: n } = e;
                return { opacity: 1, translateY: n };
            },
            update: (e) => {
                let { y: n } = e;
                return { translateY: n };
            },
            leave: (e) => {
                let { height: n, y: t } = e;
                return { opacity: 0, translateY: m ? t : -(n ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, l.jsx)(A.N, {
        theme: O.NJ8.DARK,
        children: (e) =>
            (0, l.jsx)("div", {
                className: a()(t, e),
                onMouseEnter: () => {
                    u(!0);
                },
                onMouseLeave: () => {
                    u(!1);
                },
                children: v((e, n) =>
                    (0, l.jsx)(o.animated.div, {
                        ref: (e) => f(n.message.id, null != e ? e.offsetHeight : null),
                        className: R.T_,
                        style: e,
                        children: (0, l.jsx)(L, { message: n.message }),
                    }),
                ),
            }),
    });
}
