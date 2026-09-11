t.d(n, { Ay: () => eO, SZ: () => eT, rP: () => e_ });
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(207119),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    h = t(844222),
    m = t(717421),
    C = t(827343),
    E = t(730852),
    p = t(401843),
    g = t(820284),
    f = t(933958),
    I = t(967812),
    x = t(793574),
    v = t(688810),
    T = t(198052),
    _ = t(829773),
    j = t(329072),
    N = t(183184),
    S = t(384059),
    b = t(480890),
    O = t(379848),
    y = t(643501),
    R = t(857253),
    M = t(652896),
    L = t(880144),
    D = t(338771),
    P = t(558076),
    k = t(360729),
    G = t(508654),
    V = t(984624),
    U = t(394412),
    B = t(267102),
    H = t(625075),
    w = t(526292),
    Y = t(396495),
    F = t(123973),
    K = t(447404),
    X = t(246356),
    z = t(401685),
    J = t(710801),
    W = t(496841),
    q = t(383831),
    Q = t(905216),
    $ = t(577062),
    Z = t(533978),
    ee = t(958449),
    en = t(970636),
    et = t(616356),
    el = t(470710),
    ei = t(544576),
    es = t(309010),
    ea = t(287809),
    er = t(151476),
    eo = t(405018),
    ec = t(704877),
    eu = t(173660),
    ed = t(543274),
    eA = t(579153),
    eh = t(848362),
    em = t(222692),
    eC = t(702904),
    eE = t(471993),
    ep = t(442353),
    eg = t(652215),
    ef = t(806931),
    eI = t(49999),
    ex = t(731854),
    ev = t(843395);
function eT(e, n) {
    ei.Ay.isVideoEnabled() !== e && ((0, S.X)(x.A.VOICE_CONTROL_TRAY, S.O.CAMERA, e), e ? (0, ep.A)(t, n) : t());
    function t() {
        return C.A.setVideoEnabled(e);
    }
}
function e_(e) {
    let {
            channel: n,
            currentUser: t,
            exitFullScreen: s,
            canGoLive: a,
            hasPermission: r,
            videoBlocked: o = !1,
            disabled: c,
        } = e,
        { parentAnalyticsLocation: h, analyticsLocations: m } = (0, v.Ay)(),
        C = (0, B.Us)(),
        E = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        p = E.find((e) => e.ownerId === t.id),
        g = i.useRef(null),
        f = i.useRef(null),
        I = n.getGuildId(),
        x = i.useCallback(() => {
            if ((s?.(), !a)) return (0, eC.A)();
            (0, eE.A)(I, n.id, m);
        }, [I, n.id, a, s, m]),
        T = (0, w.k0)(),
        [_, j] = i.useState(!1);
    if (!(0, u.bG)([ei.Ay], () => ei.Ay.supports(ex.O5.VIDEO))) return null;
    function N() {
        ((0, S.X)(h, S.O.STREAM, !0), a) ? x() : (0, eC.A)();
    }
    function b() {
        ((0, S.X)(h, S.O.STREAM, !1), (0, D.A)(p));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (function () {
                if (T && 0 === E.length)
                    return (0, l.jsx)(O.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    j(!0),
                                    (0, l.jsx)(Y.b, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            (t(eI.i.USER_DISMISS), j(!1));
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(K.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(X.A, {
                            children: (0, l.jsx)(eh.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != p ? [p] : [],
                                handleGoLive: x,
                                appContext: C,
                                onClose: i,
                                onInteraction: eb("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: A.Y.Animation.FADE,
                    children: (e, n) => {
                        let { ...t } = e,
                            { isShown: i } = n;
                        return (0, l.jsx)("div", {
                            ref: f,
                            children: (function (e, n) {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    s = null != p;
                                return (0, l.jsx)(ee.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: c || !r,
                                    className: ev.uH,
                                    hasPermission: r,
                                    streamActive: null != p,
                                    videoBlocked: o,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: _,
                                    buttonRef: g,
                                    onClick: null != p ? b : N,
                                });
                            })(t, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function ej(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, I.A)(a, n.id)
        ? (0, l.jsx)("div", {
              className: ev.UD,
              children: (0, l.jsx)(ed.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let eN = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, v.Ay)(),
        o = (0, u.bG)([T.A], () => T.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = i.useContext(h.C),
        [C, g] = i.useState(!1),
        f = o?.id,
        I = (0, u.bG)([et.A], () => (null != f ? et.A.getActiveStreamForStreamKey(f) : null), [f]),
        x = o?.type === ef.lp.STREAM && null != I && I.ownerId !== n?.id,
        _ = (0, u.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        j = (0, u.bG)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).some((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        N = (0, u.bG)([P.A], () => P.A.isVisible(s.id)),
        { enabled: b } = (0, k.mf)({ guildId: s.guild_id, location: "CenterControlTray" }),
        O = j && N && b,
        y = (0, G.Qs)(s.id),
        R = i.useRef(null),
        L = i.useCallback(
            () =>
                o?.type === ef.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : x || O
                      ? "STREAM"
                      : null != y
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, x, O, y],
        ),
        [D, U] = i.useState(L()),
        B = (0, m.z)(
            {
                opacity: C ? 0.2 : 1,
                transform: C && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: C ? 600 : 1e3, friction: 45, precision: 0.01, clamp: C },
                onRest: () => {
                    (U(L()), g(!1));
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        L() !== D && g(!0);
    }, [D, L]);
    let H = i.useCallback(() => {
        if (null != I) (0, p.vN)((0, M._z)(I));
        else for (let e of _) (0, p.vN)((0, M._z)(e));
    }, [_, I]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: R,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(eh.A, {
                channel: s,
                currentUser: n,
                activeStreams: _,
                handleGoLive: eg.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eb("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: A.Y.Animation.FADE,
        children: (e, i) => {
            let { onClick: u } = e,
                { isShown: d } = i;
            return (0, l.jsx)(c.animated.div, {
                style: B,
                ref: R,
                children: (function (e, i) {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (D) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== ef.lp.ACTIVITY || null == a) return;
                            return (0, l.jsx)(q.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)(ee.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, S.X)(r, S.O.STOP_WATCHING), H());
                                },
                                onPopoutClick: _.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)(Q.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, S.X)(r, S.O.DISCONNECT), t?.());
                                },
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(V.A, {
                                channelId: s.id,
                                onClick: () => {
                                    ((0, S.X)(r, S.O.DISCONNECT), E.default.disconnect(), t?.());
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eS(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: s, videoBlocked: a = !1, currentUser: r } = e,
        o = (0, B.Us)(),
        { parentAnalyticsLocation: c } = (0, v.Ay)(),
        { reachedLimit: d, limit: A } = (0, eo.A)(n),
        h = i.useCallback(() => {
            ((0, S.X)(c, S.O.JOIN_VIDEO_CALL),
                (0, ep.A)(function () {
                    return E.default.selectVoiceChannel(n.id, !0);
                }, o));
        }, [n.id, o, c]),
        m = i.useCallback(() => {
            t || a ? (0, em.A)() : h();
        }, [t, a, h]),
        C = (0, u.bG)([el.A], () => {
            let e = el.A.getCall(n.id);
            return e?.ringing.includes(r.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: ev.iE,
        children: [
            (0, l.jsx)(en.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: d,
                channelLimit: A,
                channel: n,
                cameraUnavailable: t,
                videoBlocked: a,
                hasPermission: s,
                onCameraUnavailable: m,
                className: ev.uH,
                onChange: h,
            }),
            (0, l.jsx)(W.A, { centerButton: !0, color: "join", channel: n, className: ev.uH }),
            C ? (0, l.jsx)(J.A, { color: "disconnect", channel: n, className: ev.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eb(e) {
    return (0, b.s)(e, x.A.VOICE_CONTROL_TRAY, { entrypoint: ef.GK.CARET });
}
let eO = function (e) {
    let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
        d = (0, z.Bx)(),
        h = i.useRef(null),
        [m, C] = i.useState(void 0),
        E = (0, u.bG)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return (o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e);
        }),
        { cameraUnavailable: p, enabled: I } = (0, er.A)(),
        T = !H.k.useConfig({ location: "CenterControlTray" }).videoEnabled,
        S = (0, ec.A)(n),
        { suppress: b, selfMute: O, mute: M } = (0, eu.A)(n),
        { canGoLive: D } = (0, u.cf)([ei.Ay], () => ({ canGoLive: (0, L.A)(ei.Ay) })),
        P = (0, R.A)(),
        k = (0, u.bG)([y.default], () => null != y.default.getAwaitingRemoteSessionInfo()),
        G = null != P,
        V = (0, u.bG)([es.Ay], () => (P?.channelId ?? es.Ay.getVoiceChannelId()) === n.id),
        w = (0, u.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Y, limit: K } = (0, eo.A)(n),
        { analyticsLocations: J } = (0, v.Ay)(x.A.VOICE_CONTROL_TRAY),
        W = (0, F.Ay)(n),
        q = i.useRef(null),
        Q = i.useRef(null),
        ee = (0, B.Us)();
    return V
        ? (0, l.jsx)(v.f5, {
              value: J,
              children: (0, l.jsxs)(g.A, {
                  section: eg.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: ev.rt, children: (0, l.jsx)(U.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: h,
                          className: a()(ev.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: ev.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: q,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(_.A, {
                                                      onInteraction: eb("AudioDeviceMenu"),
                                                      onClose: n,
                                                      maybeRenderPTTCheckbox: !0,
                                                      renderInputProfiles: !0,
                                                      renderInputDevices: !0,
                                                      renderInputVolume: !0,
                                                      maybeRenderInputMeter: !0,
                                                      renderDeafenCheckbox: !0,
                                                      renderOutputDevices: !0,
                                                      renderOutputVolume: !0,
                                                      maybeRenderSpatialAudioCheckbox: !0,
                                                      renderSettingsButton: !0,
                                                      appContext: ee,
                                                  });
                                              return (0, l.jsxs)(X.A, { children: [t, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: t } = e,
                                                  { isShown: i } = n;
                                              return (0, l.jsx)($.A, {
                                                  ref: q,
                                                  centerButton: !0,
                                                  onPopoutClick: G ? null : t,
                                                  selfMute: O,
                                                  serverMute: M,
                                                  suppress: b,
                                                  popoutOpen: i,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, N.A)(M, b, eg.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !G &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: Q,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(X.A, {
                                                      children: (0, l.jsx)(j.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eb("VideoDeviceMenu"),
                                                          appContext: ee,
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: A.Y.Animation.FADE,
                                              children: (e, n) => {
                                                  let { onClick: t } = e,
                                                      { isShown: i } = n;
                                                  return (0, l.jsx)(en.A, {
                                                      ref: Q,
                                                      centerButton: !0,
                                                      hasPermission: S,
                                                      enabled: I,
                                                      cameraUnavailable: p,
                                                      videoBlocked: T,
                                                      onChange: eT,
                                                      onCameraUnavailable: em.A,
                                                      channelLimitReached: Y,
                                                      channelLimit: K,
                                                      popoutOpen: i,
                                                      onPopoutClick: p ? null : t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < z.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: ev.qi,
                                        children: [
                                            !G &&
                                                (0, l.jsx)(e_, {
                                                    channel: n,
                                                    currentUser: E,
                                                    exitFullScreen: r,
                                                    canGoLive: D,
                                                    hasPermission: S,
                                                    videoBlocked: T,
                                                }),
                                            !G &&
                                                (0, l.jsx)(ej, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            W &&
                                                (0, l.jsx)(Z.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: C,
                                                    idle: c?.idle ?? !0,
                                                }),
                                            (0, l.jsx)(eA.A, {
                                                channel: n,
                                                whichPopoutIsOpen: m,
                                                setWhichPopoutIsOpen: C,
                                                remoteMode: G,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(eN, {
                                  connectedEmbeddedActivity: w,
                                  currentUser: E,
                                  channel: n,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(v.f5, {
              value: J,
              children: (0, l.jsx)(eS, {
                  channel: n,
                  cameraUnavailable: p,
                  hasCameraPermission: S,
                  videoBlocked: T,
                  currentUser: E,
              }),
          });
};
