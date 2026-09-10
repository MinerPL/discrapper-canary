t.d(n, { A: () => b });
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(554146),
    r = t(621956),
    o = t(922016),
    c = t(442433),
    u = t(688810),
    d = t(384059),
    A = t(480890),
    h = t(595529),
    m = t(421773),
    C = t(600597),
    E = t(813564),
    p = t(674168),
    g = t(987933),
    f = t(662080),
    I = t(827059),
    x = t(173660),
    v = t(49612),
    T = t(607567),
    _ = t(246356),
    j = t(204651);
t(980504);
var N = t(376086),
    S = t(375708);
function b(e) {
    let { channel: n, themeable: b, whichPopoutIsOpen: O, setWhichPopoutIsOpen: y, idle: R } = e,
        { parentAnalyticsLocation: M } = (0, u.Ay)(),
        {
            Component: L,
            play: D,
            events: { onMouseEnter: P, onMouseLeave: k },
        } = (0, r.E)(),
        G = n.getGuildId(),
        { mute: V, suppress: U } = (0, x.A)(n),
        B = (0, s.bG)([v.Ay], () => v.Ay.isDeaf()),
        H = V || U || B,
        w = (0, E.VE)({ isSoundboardButtonDisabled: H }),
        [Y, F] = (0, h.DP)(w),
        { analyticsLocations: K } = (0, u.Ay)(),
        { showQuickAccess: X } = (0, C.j)("ActionBarSoundboardButton"),
        [z, J] = i.useState(X),
        W = i.useCallback(
            (e) => {
                X && J(e);
            },
            [X],
        ),
        q = i.useCallback(() => W(!1), [W]),
        { isHovered: Q, setIsHovered: $, onMouseEnter: Z, onMouseLeave: ee } = (0, m.A)(200, 300),
        en = i.useMemo(() => (Q && (O === N.P.SOUNDBOARD || null == O)) || O === N.P.SOUNDBOARD, [Q, O]);
    function et(e) {
        null != G &&
            (0, c.L3)(e, async () => {
                let { default: e } = await t.e("811562").then(t.bind(t, 666801));
                return (n) =>
                    (0, l.jsx)(e, {
                        guildId: G,
                        sourceAnalyticsLocations: K,
                        ...n,
                        onInteraction: (0, A.s)("SoundboardContextMenu", M),
                    });
            });
    }
    function el() {
        D(), null != O && Z(), z && q(), y?.(N.P.SOUNDBOARD);
    }
    function ei() {
        (0, d.X)(M, d.O.SOUNDBOARD), O === N.P.SOUNDBOARD ? (y?.(void 0), ee()) : el();
    }
    i.useEffect(() => {
        en || z || W(!0);
    }, [en, z, W]);
    let es = i.useCallback(() => {
            null == O && y?.(N.P.SOUNDBOARD);
        }, [O, y]),
        ea = i.useRef(null),
        { usersInChannel: er } = (0, s.cf)([T.Ay], () => ({ usersInChannel: T.Ay.countVoiceStatesForChannel(n.id) }), [
            n,
        ]),
        [eo, ec] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = er >= 2 && !H && null == O;
            if (R || !e) return void ec(!1);
            let n = setTimeout(() => ec(!0), 300);
            return () => clearTimeout(n);
        }, [R, H, er, O]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.Y, {
                    targetElementRef: ea,
                    shouldShow: en,
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        $(!1), y?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return H
                            ? null
                            : (0, l.jsx)(_.A, {
                                  children: (0, l.jsx)("div", {
                                      onMouseEnter: Z,
                                      onMouseLeave: ee,
                                      onMouseDown: es,
                                      children: z
                                          ? (0, l.jsx)(f.A, {
                                                channel: n,
                                                guildId: G,
                                                openFullPicker: q,
                                                onClose: t,
                                                analyticsSource: "action bar button",
                                            })
                                          : (0, l.jsx)(I.A, {
                                                guildId: G,
                                                channel: n,
                                                onClose: t,
                                                gridNotice:
                                                    Y === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    (0, l.jsx)(p.m, { onClose: t, markAsDismissed: F }),
                                                analyticsSource: "action bar button",
                                            }),
                                  }),
                              });
                    },
                    children: () =>
                        (0, l.jsx)(j.l, {
                            ref: ea,
                            isTrayButton: !0,
                            themeable: b,
                            label: V
                                ? S.intl.string(S.t["Ox4/zU"])
                                : U
                                  ? S.intl.string(S.t["+YBKYI"])
                                  : B
                                    ? S.intl.string(S.t.X1lQli)
                                    : S.intl.string(S.t["6EJvHt"]),
                            iconComponent: L,
                            disabled: H,
                            onContextMenu: et,
                            onClick: ei,
                            onMouseEnter: (e) => {
                                P(), "focus" !== e.type && Z();
                            },
                            onMouseLeave: () => {
                                null == O && (ee(), k());
                            },
                            isActive: Q || O === N.P.SOUNDBOARD,
                            color: Q || O === N.P.SOUNDBOARD ? "primaryDark" : void 0,
                        }),
                }),
                eo &&
                    (0, l.jsx)(g.A, { targetElementRef: ea, openSoundboardPicker: el, shouldShowSoundboardPicker: en }),
            ],
        })
    );
}
