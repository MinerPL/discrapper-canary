n.d(t, { A: () => et });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(778712),
    c = n(834730),
    d = n(548411),
    u = n(866665),
    h = n(939249),
    p = n(22231),
    m = n(192308),
    A = n(254138),
    f = n(661531),
    x = n(730134),
    g = n(440594),
    C = n(793574),
    y = n(429913),
    j = n(47167),
    I = n(882840),
    N = n(713654),
    v = n(611371),
    E = n(769015),
    b = n(208971),
    _ = n(446243),
    T = n(920639),
    S = n(558076),
    R = n(360729),
    L = n(508654),
    O = n(974930),
    P = n(961314),
    M = n(58736),
    w = n(742589),
    U = n(376352),
    D = n(353428),
    V = n(46054),
    k = n(322338),
    G = n(665691),
    B = n(241756),
    F = n(488947),
    z = n(637443),
    H = n(198052),
    W = n(532622),
    Y = n(416528),
    $ = n(136523),
    K = n(806931),
    X = n(375708),
    q = n(270103),
    Z = n(776811),
    Q = n(165648);
function J(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, B.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.A, { className: Z.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function ee(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, L.Qs)(a.id),
        r = null != s ? (0, O.G3)(s) : null,
        o = null != s;
    if (l?.type === K.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(M.Ay.Divider, { className: Z.yF }),
                    (0, i.jsx)(E.A, { game: n, className: Z.RI }),
                    (0, i.jsx)(c.E, {
                        className: Z.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, g.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === K.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(M.Ay.Divider, { className: Z.yF }),
                (0, i.jsx)(J, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(U.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(P.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: Z.kL, children: t });
}
function et(e) {
    let { channel: t, guild: a, appContext: o, inCall: x, isChatOpen: g, exitFullScreen: E, guildRoomVisible: L } = e,
        O = (0, r.bG)([H.A], () => H.A.getSelectedParticipant(t.id), [t.id]),
        { enabled: P } = (0, R.mf)({ guildId: a?.id, location: "ChannelCallHeader" }),
        U = (0, r.bG)([S.A], () => S.A.getVideoOverlayVisibility()),
        B = (0, z.kM)(t) && (0, F.F)(o),
        J = P && !L && !B,
        et = (0, j.Ay)(t),
        en = J ? X.intl.string(q.default.f7g0DK) : L ? `${et} \xb7 ${X.intl.string(q.default.wRLmM0)}` : et,
        ei = J ? d.Z : (0, N.gU)(t),
        [el] = (0, y.A)(O?.type === K.lp.ACTIVITY ? [O.applicationId] : []),
        ea = X.intl.string(X.t.BVZqJl);
    t.isDM() ? (ea = X.intl.string(X.t.jN2DfZ)) : t.isGroupDM() && (ea = X.intl.string(X.t["e5y+gm"]));
    let es = (0, b.G)((0, I.l)(t)),
        er = t.isGuildVoice() && x && null != es && es.length > 0,
        eo = (0, W.Ay)(t),
        ec = er
            ? (0, i.jsx)("div", {
                  className: Z.Ke,
                  children: (0, i.jsx)(u.m, {
                      text: X.intl.string(X.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: eo,
                      children: (0, i.jsxs)(h.D, {
                          className: s()(Z.WH, { [Z.BI]: eo }),
                          onClick: eo
                              ? function () {
                                    (0, m.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: $.m },
                                    );
                                }
                              : void 0,
                          children: [
                              (0, i.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  className: s()(Z.Gh, Q.PT, { [Z.BI]: eo }),
                                  children: V.A.parseVoiceChannelStatus(es, !0, { channelId: t.id }),
                              }),
                              eo &&
                                  (0, i.jsx)(p.PencilIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: s()(Z.rD, Z.BI),
                                      width: 14,
                                      height: 14,
                                  }),
                          ],
                      }),
                  }),
              })
            : null,
        ed = (0, G.bG)({ channelId: t.id }),
        eu = l.useCallback(() => {
            J &&
                (U
                    ? (0, _.UV)(!1, t.id)
                    : ((0, _.zD)(t.id),
                      (0, T.yt)({
                          channelId: t.id,
                          guildId: t.guild_id,
                          location: C.A.CHANNEL_CALL,
                          guildRoomOpen: !0,
                      })));
        }, [J, t.id, t.guild_id, U]);
    return (0, i.jsxs)("div", {
        className: Z.SC,
        children: [
            (0, i.jsxs)(M.Ay, {
                onDoubleClick: w.I,
                transparent: !0,
                className: Z.jr,
                innerClassName: Z.gi,
                toolbarClassName: Z.KE,
                childrenBottom: ec,
                toolbar: (0, i.jsx)(Y.A, {
                    channel: t,
                    appContext: o,
                    inCall: x,
                    isChatOpen: g,
                    exitFullScreen: E,
                    focusedApplication: el,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: L,
                    guildRoomVideoOverlayVisible: U,
                }),
                children: [
                    (0, i.jsx)(M.Ay.Title, {
                        wrapperClassName: Z.DD,
                        onClick: J ? eu : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != ei
                                    ? (0, i.jsx)(M.Ay.ChannelIcon, {
                                          icon: ei,
                                          "aria-label": ea,
                                          color: J ? "white" : void 0,
                                      })
                                    : null,
                                en,
                                P && (0, i.jsx)(v.A, { className: Z.vW }),
                                ed &&
                                    (0, i.jsx)(u.m, {
                                        text: X.intl.string(X.t.QyZ4Td),
                                        children: (0, i.jsx)(A.m, {
                                            size: "xs",
                                            "aria-label": X.intl.string(X.t.VHXh8a),
                                            color: f.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: Z.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(D.i$, { channel: t, guild: a }),
                    (0, i.jsx)(ee, { focusedApplication: el, focusedParticipant: O, channel: t }),
                ],
            }),
            (0, i.jsx)(k.A, { channelId: t.id }),
        ],
    });
}
