(t.d(n, { V: () => _ }), t(321073));
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(435558),
    o = t(17928),
    c = t(367513),
    u = t(688810),
    d = t(198052),
    A = t(384059),
    h = t(573163),
    m = t(309010),
    C = t(741961),
    E = t(234320),
    p = t(20465),
    g = t(108460),
    f = t(204651),
    I = t(652215),
    x = t(375708);
function v(e) {
    let n = (0, o.bG)([C.A], () => !(0, r.isEmpty)(C.A.getTypingUsers(e)), [e]),
        t = (0, o.bG)([m.Ay], () => m.Ay.getVoiceChannelId() === e, [e]),
        { unreadCount: l, mentionCount: i } = (0, o.cf)(
            [h.Ay],
            () => ({ unreadCount: h.Ay.getUnreadCount(e), mentionCount: h.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: l, mentionCount: i, voiceChannelIsSelected: t, isTyping: n };
}
function T(e) {
    let { className: n, channelId: t } = e,
        { unreadCount: i, mentionCount: s, isTyping: a, voiceChannelIsSelected: r } = v(t);
    return (0, l.jsx)(g.A, { className: n, unreadCount: i, mentionCount: s, isTyping: a, canBadge: r });
}
function _(e) {
    let n,
        {
            channelId: t,
            className: s,
            showingClassName: r,
            onClick: h,
            inPopout: m,
            showRequestToSpeakSidebar: C,
            toggleRequestToSpeakSidebar: g,
            ..._
        } = e,
        { parentAnalyticsLocation: j } = (0, u.Ay)(),
        { disabled: N } = _,
        S = i.useRef(null),
        b = (0, o.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: O,
            unreadCount: y,
            mentionCount: R,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: l } = v(e),
                [s, a] = i.useState(!1);
            return (
                i.useEffect(() => {
                    a(n > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, p.R);
                    return () => {
                        (clearTimeout(e), a(!1));
                    };
                }, [n]),
                { isShowing: s || t > 0 || l, unreadCount: n, mentionCount: t }
            );
        })(t),
        M = i.useCallback(() => {
            ((0, A.X)(j, A.O.CHAT, !b), h?.(), !b && C && g?.(), c.A.updateChatOpen(t, !b));
        }, [t, b, h, C, g, j]),
        L = i.useCallback(
            (e) => {
                let { className: n } = e;
                return (0, l.jsx)(T, { className: n, channelId: t });
            },
            [t],
        ),
        D = i.useCallback(() => {
            S.current?.focus();
        }, []);
    (0, E.Vo)({ event: I.jej.FOCUS_CHAT_BUTTON, handler: N ? null : D });
    let [P, k] = i.useState(!1),
        G = i.useCallback(() => {
            m && k(!0);
        }, [m]);
    ((0, E.Vo)({ event: I.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: G }),
        i.useEffect(() => {
            let e;
            return (
                P &&
                    (e = setTimeout(() => {
                        k(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [P]));
    let V = [(n = m && N ? x.intl.string(x.t.DPgc5h) : b ? x.intl.string(x.t.nthdxB) : x.intl.string(x.t["5KxXrK"]))];
    return (
        R > 0 && V.push(x.intl.formatToPlainString(x.t["3l1GOx"], { mentionCount: R })),
        y > 0 && V.push(x.intl.string(x.t.x5zAGZ)),
        (0, l.jsx)(f.A, {
            buttonRef: S,
            onClick: M,
            label: n,
            "aria-label": V.join(", "),
            iconComponent: L,
            tooltipPosition: "bottom",
            wrapperClassName: a()(s, null != r && { [r]: O }),
            forceTooltipOpen: P,
            ..._,
        })
    );
}
