l.d(t, { A: () => r7 });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(789645),
    o = l(672929),
    u = l(58736),
    d = l(948230),
    c = l(277977),
    m = l(289873),
    f = l(821609),
    h = l(627363),
    g = l(580954),
    x = l(297264),
    p = l(834730),
    v = l(625180),
    b = l(91242),
    j = l(812901),
    y = l(317608),
    k = l(206600),
    w = l(869146),
    N = l(742023),
    A = l(697744),
    S = l(50617),
    E = l(375708),
    C = l(296167);
function I(e) {
    let { className: t } = e,
        { Component: l, events: r, getDuration: i } = (0, A.c)();
    return (
        a.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != i()) ? r.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [r, i]),
        a.useEffect(() => {
            let e = setInterval(r.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [r]),
        (0, n.jsxs)("div", {
            className: t,
            onMouseEnter: r.onMouseEnter,
            onMouseLeave: r.onMouseLeave,
            children: [
                (0, n.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, n.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: C.o,
                    children: E.intl.string(S.default.jTuX7C),
                }),
            ],
        })
    );
}
var M = l(328284);
function T(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(M.Bf, a && M.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: M.Ux,
                children: [
                    (0, n.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(p.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var R = l(652215),
    P = l(165610),
    _ = l(963691);
function L(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, k.A)({ applicationId: t, surface: l }),
        s = (0, P.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(R.MLl.ACTIVITY_POPOUT)) return;
                    let l = b.A.getMainFrame()?.id === e;
                    t.intent === P.sV.MAIN
                        ? (l || v.A.promoteFrame(e), v.A.resetFrameLayoutModes(e))
                        : l && v.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, P.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        N.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === P.sV.INLINE && v.A.promoteFrame(s),
                              v.A.updateFrameLayoutMode({ frameId: s, layoutMode: P.y0.PIP }))
                            : e.intent === P.sV.MAIN && v.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case k.n.Launched:
            return (0, n.jsx)(y.A, { frameId: r.id, level: j.A.WithinAppContent, className: _.Z7 });
        case k.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: _.qs,
                children: (0, n.jsx)(T, {
                    title: E.intl.string(S.default["4f6Vkr"]),
                    body: E.intl.string(S.default.LJ2q1H),
                }),
            });
        case k.n.NoApplication:
            return (0, n.jsx)(I, { className: _.qs });
        case k.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: _.qs,
                children: (0, n.jsx)(T, {
                    title: E.intl.string(S.default.FHOJiH),
                    body: E.intl.string(S.default["1yLQoV"]),
                }),
            });
        case k.n.Error:
            return (0, n.jsxs)("div", {
                className: _.qs,
                children: [
                    (0, n.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.MeLWCr),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: _.tj,
                        children: E.intl.string(S.default["1RCbQT"]),
                    }),
                ],
            });
        case k.n.AwaitingLaunch:
        case k.n.Loading:
            return (0, n.jsx)("div", { className: _.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var F = l(17928),
    D = l(323384),
    $ = l(308528),
    z = l(334738),
    O = l(802426),
    q = l(355622),
    G = l(734057),
    U = l(531685),
    B = l(365971),
    V = l(362417);
function W(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: V.f,
        children: [
            (0, n.jsx)(D.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function H() {
    return (0, n.jsx)("div", { className: V.f, children: (0, n.jsx)(m.y, {}) });
}
function Q(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        o = i?.bot?.id ?? null,
        u = (0, F.bG)([G.A], () => {
            if (null == o) return null;
            let e = G.A.getDMFromUserId(o);
            return null != e ? G.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        a.useEffect(() => {
            null != t && $.A.preload(R.ME, t);
        }, [t]),
        (l = (0, F.bG)([U.A], () => U.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, B.Xg)();
            return (
                (0, z.yl)(t, e),
                () => {
                    (0, z.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = a.useState(null),
        m = null != o && d === o;
    return (a.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            $.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, n.jsx)(H, {})
        : null == o || m
          ? (0, n.jsx)(W, { message: E.intl.string(S.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(H, {})
            : (0, n.jsx)("div", {
                  className: V.g,
                  children: (0, n.jsx)(O.A, { channel: u, guild: null, chatInputType: q.oU.SIDEBAR }, u.id),
              });
}
var Y = l(148853),
    K = l(598748),
    X = l(486610),
    Z = l(531913),
    J = l(587895),
    ee = l(633075),
    et = l(946356),
    el = l(139730),
    en = l(520082),
    ea = l(287809),
    er = l(675210),
    ei = l(71495);
function es(e) {
    let { applicationId: t } = e,
        l = (0, F.bG)([ea.default], () => ea.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(eo, { applicationId: t, user: l });
}
function eo(e) {
    let { applicationId: t, user: l } = e,
        r = (0, F.bG)([J.A], () => J.A.getApplication(t)),
        i = a.useMemo(() => new ee.R({ applicationId: t }), [t]),
        s = (0, Z.A)(l.id, t),
        o = s.surfaceConfigs,
        u = (0, er.yZ)({
            widgetTop: null != o[K.m.WIDGET_TOP],
            widgetBottom: null != o[K.m.WIDGET_BOTTOM],
            miniProfile: null != o[K.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, n.jsx)("div", {
              className: ei.$C,
              children: (0, n.jsxs)("div", {
                  className: ei.PV,
                  children: [
                      u.hasMainCard
                          ? (0, n.jsx)("div", {
                                className: ei.a9,
                                children: (0, n.jsx)(et.A.Overlay, {
                                    className: ei.Qb,
                                    children: (0, n.jsx)(en.A, {
                                        user: l,
                                        widget: i,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != r
                          ? (0, n.jsx)("div", {
                                className: ei.ql,
                                children: (0, n.jsx)(el.A, { application: r, rendererProps: s, renderText: X.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var eu = l(976102);
function ed(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        x = (0, o.A)(t, r),
        { isLoading: p } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != x && (0, g.A)().leaveFrame(x.id);
        }, [x, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eu.q, children: (0, n.jsx)(m.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eu.q,
            children: (0, n.jsx)(T, {
                wide: !0,
                title: E.intl.string(S.default.DYwf2n),
                body: E.intl.string(S.default.WWj3pN),
                children: (0, n.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: E.intl.string(S.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!i) return (0, n.jsx)(I, { className: eu.q });
    if (null == t) return null;
    if (p) return (0, n.jsx)("div", { className: eu.q, children: (0, n.jsx)(m.y, {}) });
    let v = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, Y.z3)(d), "aria-label": (0, Y.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eu.R,
        ...v,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, n.jsx)(L, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, n.jsx)("div", {
                          className: eu.q,
                          children: (0, n.jsx)(T, {
                              wide: !0,
                              title: E.intl.string(S.default.SGHO9K),
                              body: E.intl.string(S.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(es, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Q, { previewApplicationId: l }) : null,
        ],
    });
}
var ec = l(534890),
    em = l(738876),
    ef = l(47167),
    eh = l(31717),
    eg = l(372054);
function ex(e) {
    let { channel: t, guild: l, onClose: a } = e,
        r = (0, ef.Ay)(t),
        i = (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: eg.Wx,
        children: [
            (0, n.jsx)(em.A, { channel: t, draftType: eh.C.ChannelMessage }),
            (0, n.jsxs)(u.Ay, {
                toolbar: i,
                "aria-label": E.intl.string(E.t.BIYAqa),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: ec.ChatIcon, "aria-label": E.intl.string(E.t["/VQax8"]) }),
                    (0, n.jsx)(u.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: eg.GZ,
                children: (0, n.jsx)(O.A, { channel: t, guild: l, chatInputType: q.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ep = l(689175),
    ev = l(29692),
    eb = l(903586),
    ej = l(783791),
    ey = l(717447),
    ek = l(29080),
    ew = l(46054);
function eN(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, eb.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, eb.Lf)(t),
        o = s && null != i && i.content.trim() === l.trim(),
        u = !n && "" !== l && !o;
    return {
        streamed: r,
        lastStreamedMessage: i,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
(l(134528), l(947204));
var eA = l(939249),
    eS = l(478016),
    eE = l(34136);
function eC(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(eE.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(eE.wx, null != l && eE.o5, s),
                children: [
                    (0, n.jsx)(p.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var eI = l(113757);
function eM(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eA.D, {
        className: i()(eI.nM, { [eI.f1]: o, [eI.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": E.intl.formatToPlainString(S.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: eI.jo,
                children: [
                    l
                        ? (0, n.jsx)(eS.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eI.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(p.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eI.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, n.jsx)(p.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eT(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(eC, {
        title: E.intl.string(S.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                eM,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eR = l(435619),
    eP = l(866665),
    e_ = l(885574),
    eL = l(430392),
    eF = l(632015),
    eD = l(256905),
    e$ = l(824757);
function ez(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: e$.uW,
        children: [
            (0, n.jsxs)("span", {
                className: e$.a9,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eO() {
    return (0, n.jsx)(eP.m, {
        text: E.intl.string(S.default.DXe2dP),
        children: (0, n.jsx)(eA.D, {
            className: e$.bk,
            "aria-label": E.intl.string(S.default.Y6y4nQ),
            children: (0, n.jsx)(e_.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eq(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(ez, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: e$.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: e$.jw,
                              children: (0, n.jsx)(p.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function eG(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? D.k : eL.RobotIcon;
    return (0, n.jsxs)("span", {
        className: e$.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: e$.L6,
                      children: [
                          (0, n.jsx)(eF.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, n.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: E.intl.string(S.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: e$.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: E.intl.string(t ? E.t.IC5Ann : S.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { projectId: t, design: l } = e,
        [r, i] = a.useState(null),
        [s, o] = a.useState(!1),
        { id: u } = l,
        [d, m] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, c.PK)(t, u).then(
                (t) => {
                    e || i(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, u, d]);
    let f = E.intl.string(S.default.FW8UcU),
        h = a.useCallback(() => {
            (0, c.PK)(t, u).then(
                (e) => {
                    (0, eD.R)({
                        items: [{ type: "IMAGE", url: e, alt: f }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, u, f]),
        g = a.useCallback(() => {
            (i(null),
                (0, c.n6)(t, u).then(
                    (e) => {
                        e ? 0 === d && m(1) : o(!0);
                    },
                    () => {},
                ));
        }, [t, u, d]);
    return s
        ? null
        : (0, n.jsx)(ez, {
              label: E.intl.string(S.default["9W8SbY"]),
              info: (0, n.jsx)(eO, {}),
              children: (0, n.jsx)(eA.D, {
                  className: e$.xX,
                  onClick: h,
                  "aria-label": E.intl.string(S.default.CBrpNv),
                  children: null != r ? (0, n.jsx)("img", { src: r, alt: f, className: e$.sN, onError: g }) : null,
              }),
          });
}
function eB(e) {
    let { projectId: t, proposal: l } = e;
    return (0, n.jsx)(eC, {
        title: E.intl.string(S.default["60htw+"]),
        trailing: (0, n.jsx)(eG, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: e$.rf,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(eU, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(ez, {
                          label: E.intl.string(S.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: e$.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: e$.Aw,
                                          children: (0, n.jsx)(p.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                l.commands.length > 0
                    ? (0, n.jsx)(ez, {
                          label: E.intl.string(E.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: e$.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: e$.uX,
                                          children: [
                                              (0, n.jsxs)(p.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, n.jsx)(p.E, {
                                                  variant: "experimental/body-md/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e.description,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, n.jsx)(eq, { label: E.intl.string(S.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eq, { label: E.intl.string(S.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eV = l(192308),
    eW = l(479191);
function eH(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, eV.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, n.jsxs)("article", {
        className: eW.Lo,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["/e28TK"]),
            }),
            (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.jxvtin),
            }),
            (0, n.jsx)("div", {
                className: eW.cS,
                children: r.fields.map((e) =>
                    (0, n.jsx)(
                        "span",
                        {
                            className: eW.$H,
                            children: (0, n.jsx)(p.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tag: "span",
                                children: e.label,
                            }),
                        },
                        e.name,
                    ),
                ),
            }),
            (0, n.jsx)("div", {
                className: eW.sq,
                children: (0, n.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: E.intl.string(S.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eQ = l(976814),
    eY = l(973e3);
function eK(e) {
    let { projectId: t, request: l } = e,
        r = (0, F.bG)([c.Ay], () => c.Ay.getSettings(t)),
        i = (l.keys ?? []).map((e) => r?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = a.useCallback(() => {
            (0, eQ.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0, isPreview: !0 });
        }, [t, l]);
    return (0, n.jsxs)("article", {
        className: eY.Mk,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default.wgDhiQ),
            }),
            (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : E.intl.string(S.default["V+DBhs"]),
            }),
            i.length > 0
                ? (0, n.jsx)("div", {
                      className: eY.R6,
                      children: i.map((e) =>
                          (0, n.jsx)(
                              "span",
                              {
                                  className: eY.K4,
                                  children: (0, n.jsx)(p.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e.label,
                                  }),
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            (0, n.jsx)("div", {
                className: eY.p0,
                children: (0, n.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: E.intl.string(S.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eX = l(196582);
function eZ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function eJ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e0(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e4(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e5(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e8(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e9() {
    return [
        { key: "snail", Illocon: eZ, tint: "var(--illo-yellow-40)", name: tt(S.default["2l3AEQ"]) },
        { key: "goat", Illocon: eJ, tint: "var(--illo-orange-40)", name: tt(S.default["+FPL+I"]) },
        { key: "frog", Illocon: e0, tint: "var(--illo-green-40)", name: tt(S.default.w4GOfR) },
        { key: "bunny", Illocon: e1, tint: "var(--illo-pink-40)", name: tt(S.default.XmZT9M) },
        { key: "cat", Illocon: e2, tint: "var(--illo-pink-40)", name: tt(S.default.NnydwQ) },
        { key: "caterpillar", Illocon: e3, tint: "var(--illo-green-40)", name: tt(S.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e7, tint: "var(--illo-purple-40)", name: tt(S.default.DoTGt5) },
        { key: "dog", Illocon: e4, tint: "var(--illo-yellow-40)", name: tt(S.default["9zxqmP"]) },
        { key: "spider", Illocon: e6, tint: "var(--illo-orange-40)", name: tt(S.default.HF0T3L) },
        { key: "bee", Illocon: e5, tint: "var(--illo-yellow-40)", name: tt(S.default.XTzDga) },
        { key: "bot", Illocon: e8, tint: "var(--illo-purple-40)", name: tt(S.default.abtC2b) },
    ];
}
function te(e) {
    return e9().find((t) => t.key === e);
}
function tt(e) {
    return E.intl.string(e);
}
function tl(e) {
    let t = e9(),
        l = 0,
        n = e[0] ?? "";
    for (let e = 0; e < n.length; e++) l = (31 * l + n.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, n) => {
            a.set(e, t[(l + n) % t.length]);
        }),
        a
    );
}
var tn = l(683063),
    ta = l(705754),
    tr = l(883455),
    ti = l(13699);
function ts(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.MdXWEK);
}
function to(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, eb.SY)(l.steps),
        c = u
            ? null != d
                ? (0, eb.WQ)(d)
                : ts(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ts(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return E.intl.formatToPlainString(S.default.RsOwXc, { count: t });
                                      let l = Math.round(t / 60);
                                      return l < 60
                                          ? E.intl.formatToPlainString(S.default["z+U4YX"], { count: l })
                                          : E.intl.formatToPlainString(S.default["7Q/vz0"], {
                                                hours: Math.floor(l / 60),
                                                minutes: l % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return E.intl.formatToPlainString(S.default.KS49RN, { task: t });
                      default:
                          return E.intl.formatToPlainString(S.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: ti.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            tr.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: ti.iq,
                                      children: (0, n.jsx)(ta.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(eX.A, {
        glyph: (0, n.jsx)(tn.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ts(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: ti.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var tu = l(140735),
    td = l(329456);
let tc = [];
function tm(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(td.xL, { [td.Vb]: "in_progress" === t, [td.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(S.default.TkPGOH);
                case "in_progress":
                    return E.intl.string(S.default["oK+fmd"]);
                default:
                    return E.intl.string(S.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: td.Qd,
                itemClassName: td.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: td.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: td.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tf(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tc), [l, t]),
        i = a.useMemo(() => new Set(r.map((e) => e.key)), [r]),
        s = r.map((e) => e.key).join("\0"),
        [o, u] = a.useState(r),
        [d, c] = a.useState(s),
        [m, f] = a.useState(!1);
    d !== s && (c(s), u([...r, ...o.filter((e) => !i.has(e.key))]), 0 === r.length && f(!1));
    let h = o.some((e) => !i.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(r), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, r, l]),
        a.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, n.jsxs)("span", {
        className: td.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tn.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: td.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, n.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, n.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: td.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function th(e) {
    let t,
        { todos: l, provisional: r, agents: s } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, o] = a.useState(() => new Set());
            return (
                r !== t && (i(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                a.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(a.useMemo(() => l.map((e) => e.id), [l])),
        u =
            ((t = (s ?? tc).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tc) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: td.p_,
        children: [
            l.map((e) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: i()(td.AS, { [td.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tm, { status: e.status }),
                            (0, n.jsx)(p.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: td.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", { className: td.Qq, children: e.text }),
                            }),
                            (0, n.jsx)(tf, { agents: u.get(e.id) ?? tc, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, n.jsxs)("li", {
                      className: td.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tm, { status: "pending" }),
                          (0, n.jsx)(p.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: td.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: td.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tg(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, n.jsxs)(eC, {
              title: E.intl.string(S.default.qCRC6c),
              trailing: (0, n.jsx)(p.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: E.intl.formatToPlainString(S.default.bQvqly, { completed: i, total: s }),
              }),
              className: td.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, n.jsx)(tu.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: E.intl.formatToPlainString(S.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, n.jsx)("div", {
                      className: td.rf,
                      children: (0, n.jsx)(th, { todos: t, provisional: l, agents: a }),
                  }),
              ],
          });
}
var tx = l(229775),
    tp = l(165648);
function tv(e) {
    let t = tl(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? te(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: ts(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tb(e) {
    let {
            projectId: t,
            steps: l,
            active: r = !1,
            durationMs: i,
            interrupted: s = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: f = !1,
            segmentDurationMs: h,
        } = e,
        g = a.useMemo(() => (0, eb.GO)(l, { turnActive: r }), [l, r]),
        x = a.useMemo(
            () =>
                null == d
                    ? g
                    : {
                          ...g,
                          steps: g.steps.filter((e) => e.segment === d),
                          tasks: g.tasks.filter((e) => e.task.segment === d),
                      },
            [g, d],
        );
    if (s)
        return (0, n.jsx)("ol", {
            className: ti.pj,
            "data-live": !1,
            children: (0, n.jsx)(eX.A, {
                glyph: (0, n.jsx)(ek.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, eb.lt)(l) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !b) return null;
    let j = x.tasks,
        y = tl(j.map((e) => e.taskId)),
        k = !f && (r || j.some((e) => "running" === e.task.status)),
        w = tv(j);
    return (0, n.jsx)(eX.l.Provider, {
        value: j.length,
        children: (0, n.jsxs)("ol", {
            className: ti.pj,
            "data-live": k,
            children: [
                (0, n.jsx)(ey.Ay, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: j.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: f,
                    durationMs: p,
                    connectsDown: j.length > 0,
                }),
                j.map((e, l) => {
                    let a = null != e.task.helperMark ? te(e.task.helperMark) : void 0,
                        r = a ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              to,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < j.length - 1,
                              },
                              e.taskId,
                          );
                }),
                b
                    ? (0, n.jsx)("li", {
                          className: ti.YO,
                          children: (0, n.jsx)(tg, { todos: v, provisional: u, agents: w }),
                      })
                    : null,
            ],
        }),
    });
}
function tj(e) {
    let {
            projectId: t,
            steps: l,
            content: r,
            proposal: s,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: m,
            pickedIdeaIds: f,
            sideReply: h = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: x,
            lastStreamedMessage: v,
            showsClosingMessage: b,
            attachmentsHost: j,
        } = a.useMemo(
            () => eN({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        y = null == u ? null : (0, n.jsx)(eR.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, n.jsx)("div", { className: ti.MT, children: y }),
        w = h
            ? (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: ti.ue,
        children: [
            x.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: ti.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: ti.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tp.PT,
                                              children: ew.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === j && e === v ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(eB, { projectId: t, proposal: s })
                : b
                  ? (0, n.jsxs)("div", {
                        className: i()(ti.ky, tx.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tp.PT, ti.cW),
                                children: ew.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            w,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(ti.ky, tx.XR),
                      children: (0, n.jsx)(eH, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(ti.ky, tx.XR),
                      children: (0, n.jsx)(eK, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != o && o.length > 0 ? (0, n.jsx)(eT, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            b ? null : w,
        ],
    });
}
var ty = l(678949),
    tk = l(504290),
    tw = l(475358),
    tN = l(81369),
    tA = l(922016),
    tS = l(980707),
    tE = l(477782),
    tC = l(717400),
    tI = l(663341),
    tM = l(826745),
    tT = l(783977),
    tR = l(559647),
    tP = l(775602),
    t_ = l(435558),
    tL = l.n(t_),
    tF = l(506774),
    tD = l(228366);
let t$ = "VibegrationsComposerDrafts";
function tz() {
    return tF.w.get(t$) ?? {};
}
let tO = new Map(),
    tq = tL().throttle(() => {
        if (0 === tO.size) return;
        let e = tz();
        for (let [t, l] of tO) "" === l ? delete e[t] : (e[t] = l);
        (tO.clear(), tF.w.set(t$, e));
    }, 1e3);
class tG extends F.Ay.Store {
    getDraft(e) {
        let t = tO.get(e);
        return null != t ? t : (tz()[e] ?? "");
    }
}
let tU = new tG(tD.h, {
    LOGOUT: function () {
        return (tO.clear(), tq.cancel(), tF.w.remove(t$), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (tO.set(t, l), tq(), "" === l && tq.flush(), !1);
    },
});
var tB = l(113491);
(l(323874), l(14289), l(35956));
var tV = l(285796),
    tW = l(673724),
    tH = l(590380),
    tQ = l(298668);
let tY = tW.Is,
    tK = 0;
function tX(e) {
    let { onUploadFile: t, onDeleteFile: l } = e,
        [n, r] = a.useState([]),
        i = a.useRef([]),
        s = a.useRef(new Set()),
        o = a.useRef(t);
    o.current = t;
    let u = a.useRef(l);
    u.current = l;
    let d = a.useCallback((e) => {
            ((i.current = e), r(e));
        }, []),
        c = a.useCallback((e) => {
            u.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    a.useEffect(() => {
        let e = s.current;
        return () => {
            for (let t of i.current)
                (e.add(t.localId),
                    null != t.previewUrl && URL.revokeObjectURL(t.previewUrl),
                    null != t.ref && c(t.ref));
        };
    }, [c]);
    let m = a.useCallback(
            (e, t) => {
                if (s.current.has(e)) return;
                let l = i.current;
                l.some((t) => t.localId === e) && d(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [d],
        ),
        f = a.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...i.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++tK,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tY) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: E.intl.formatToPlainString(S.default.DlX57a, { count: tY }),
                        });
                        continue;
                    }
                    if (!(0, tW.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: E.intl.formatToPlainString(S.default.cI7t94, {
                                size: (0, tW.ZJ)((0, tW.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tW.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    (t.push({ ...r, previewUrl: i }), l.push({ file: n, localId: a }));
                }
                for (let { file: e, localId: n } of (d(t), l))
                    o.current(e).then(
                        (e) => {
                            s.current.has(n) ? c(e) : m(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            s.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                m(n, { status: "error", errorText: E.intl.string(S.default.GwEHvn) }));
                        },
                    );
            },
            [c, m, d],
        ),
        h = a.useCallback(
            (e) => {
                let t = i.current,
                    l = t.find((t) => t.localId === e);
                (s.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && c(l.ref),
                    d(t.filter((t) => t.localId !== e)));
            },
            [c, d],
        ),
        g = a.useCallback(() => {
            let e = i.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let e of i.current) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
            return (d([]), e);
        }, [d]);
    return { drafts: n, addFiles: f, removeDraft: h, settled: n.every((e) => "ready" === e.status), takeRefs: g };
}
function tZ(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(tH.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tQ.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: tQ.o1,
                onClick: () => l(t.localId),
                "aria-label": E.intl.string(S.default["3HWvgk"]),
                children: (0, n.jsx)(tV.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tJ = l(789438);
let t0 = "text-md/normal",
    t1 = null;
function t2(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [m, f] = a.useState(0),
        [h, g] = a.useState(0),
        [x, v] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = c.current;
        function n() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = d.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (g(i + r), f(s));
            let o = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            v({
                frontFrom: 1e3 * (0, tk._R)(m),
                frontTo: 1e3 * (0, tk._R)(h),
                backFrom: 1e3 * (0, tk.T)(m),
                backTo: 1e3 * (0, tk.T)(h),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        a.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, j] = a.useState(0),
        [y, k] = a.useState(null),
        w = a.useRef(!1),
        N = a.useCallback(() => {
            (k(w.current ? (l ? "through" : "out") : l ? "in" : null), j((e) => e + 1));
        }, [l]);
    a.useEffect(() => {
        w.current = l;
    }, [l, t]);
    let A = "in" === y ? x.backFrom : x.frontFrom,
        C = "out" === y ? x.frontTo : x.backTo,
        I = (0, F.bG)([tP.Ay], () => tP.Ay.useReducedMotion),
        M = t === E.intl.string(S.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(tJ.VT, { [tJ.qk]: a }),
            style: a
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(tw.e, { shortcut: "tab", className: tJ.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ty.o, {
                text: t,
                variant: t0,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(tJ.xM, { [tJ.s2]: r }),
                onStart: N,
                onComplete: () => o(t),
            }),
            R(tJ.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: tJ.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(p.E, { variant: t0, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: tJ.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(p.E, { variant: t0, tag: "span", className: tJ.xM, children: t }),
                          R(tJ.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function t3(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: c,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            hasPendingContext: p = !1,
            modelSettings: v,
            onModelSettingsChange: b,
        } = e,
        [j, y] = a.useState(() => tU.getDraft(t)),
        k = a.useCallback(
            (e) => {
                ((0, d.I$)(t, e), y(e));
            },
            [t],
        ),
        [w, N] = a.useState(t);
    w !== t && (N(t), y(tU.getDraft(t)));
    let A = (0, F.bG)([tP.Ay], () => tP.Ay.isSubmitButtonEnabled),
        [C, I] = a.useState(!1),
        [M, T] = a.useState(!1);
    a.useEffect(() => {
        i || T(!1);
    }, [i]);
    let R = a.useRef(null),
        { drafts: P, addFiles: _, removeDraft: L, settled: D, takeRefs: $ } = tX({ onUploadFile: c, onDeleteFile: m }),
        z = "" !== j.trim() || P.length > 0 || p,
        O = l && z && D,
        [q, G] = a.useState(null);
    a.useEffect(() => {
        if (null == q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]);
    let U = a.useCallback(() => {
            if (!O) return;
            let e = $();
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == t1 && (t1 = document.createElement("canvas").getContext("2d"));
                let i = t1;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || i.measureText(r).width <= o) return r;
                let u = 0,
                    d = r.length;
                for (; u < d;) {
                    let e = Math.ceil((u + d) / 2);
                    i.measureText(r.slice(0, e)).width <= o ? (u = e) : (d = e - 1);
                }
                let c = r.slice(0, u),
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(Z.current?.querySelector("textarea") ?? null, es.current, j);
            ("" !== t && G(t), k(""));
        }, [O, j, o, $, k]),
        B = a.useCallback(
            (e) => {
                (e.preventDefault(), U());
            },
            [U],
        ),
        V = a.useCallback(() => {
            null == u || M || (T(!0), u());
        }, [u, M]),
        W = null == g || "" !== j || !l || r || s || p ? null : g,
        H = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !M) {
                    (e.preventDefault(), e.stopPropagation(), V());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != W) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(W));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
            },
            [U, f, i, u, M, V, W, k],
        ),
        Q = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), _(t));
            },
            [l, _],
        ),
        Y = a.useCallback(
            (e) => {
                (e.preventDefault(), I(!1), l && _(Array.from(e.dataTransfer.files)));
            },
            [l, _],
        ),
        K = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), I(!0));
        }, []),
        X = a.useCallback(
            (e) => {
                (_(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [_],
        ),
        Z = a.useRef(null),
        J = a.useRef(null),
        [ee, et] = a.useState(0),
        [el, en] = a.useState(!1);
    a.useEffect(() => {
        if (0 === j.length) return void en(!1);
        let e = Z.current?.querySelector("textarea");
        if (null != e) {
            let t = t6(e);
            null != t && et(t);
        }
        en(!0);
        let t = setTimeout(() => en(!1), t7);
        return () => clearTimeout(t);
    }, [j]);
    let ea = a.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
        er = el ? ` ${tJ.EB}` : "",
        ei = s
            ? E.intl.string(S.default.pGFXZ0)
            : r
              ? E.intl.string(S.default.JeM47J)
              : l
                ? p
                    ? E.intl.string(S.default.Bs7bUv)
                    : x
                      ? E.intl.string(S.default.M3ovXY)
                      : E.intl.string(i ? S.default["67PpcP"] : S.default.ahRdoJ)
                : E.intl.string(S.default.nm4w9P),
        es = a.useRef(0),
        eo = a.useRef(null),
        eu = a.useCallback((e) => {
            if ((eo.current?.disconnect(), null == e)) return;
            es.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                es.current = e.clientWidth;
            });
            (t.observe(e), (eo.current = t));
        }, []),
        ed = a.useId(),
        ec = null != W,
        em = q ?? W ?? ei,
        ef = "" === j && "" !== em;
    return (0, n.jsxs)("form", {
        onSubmit: B,
        onDrop: Y,
        onDragOver: K,
        onDragLeave: () => I(!1),
        className: C ? `${tJ.DA} ${tJ.pV}` : tJ.DA,
        children: [
            P.length > 0
                ? (0, n.jsx)("div", {
                      className: tJ.lN,
                      children: P.map((e) => (0, n.jsx)(tZ, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${tJ.wg} ${tJ.LP}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${tJ.wg} ${tJ.L3}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: tJ.VA,
                ref: Z,
                children: [
                    (0, n.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: X,
                        className: tJ.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == h
                        ? (0, n.jsx)(eP.m, {
                              text: E.intl.string(S.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: J,
                                  type: "button",
                                  className: `${tJ.Y0} ${tJ.nu}`,
                                  disabled: !l,
                                  onClick: () => R.current?.click(),
                                  "aria-label": E.intl.string(S.default.d6Rqlu),
                                  children: (0, n.jsx)(tN.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: tJ.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tA.Y, {
                              targetElementRef: J,
                              position: "top",
                              align: "left",
                              animation: tA.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tS.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": E.intl.string(E.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(tE.rX, {
                                          children: [
                                              (0, n.jsx)(tE.Dr, {
                                                  id: "upload-file",
                                                  label: E.intl.string(E.t["d3+iYs"]),
                                                  iconLeft: tN.H,
                                                  leadingAccessory: { type: "icon", icon: tN.H },
                                                  action: () => R.current?.click(),
                                              }),
                                              null != h
                                                  ? (0, n.jsx)(tE.Dr, {
                                                        id: "import-project",
                                                        label: E.intl.string(S.default.edKajy),
                                                        iconLeft: tC.q,
                                                        leadingAccessory: { type: "icon", icon: tC.q },
                                                        action: h,
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  });
                              },
                              children: (e, t) => {
                                  let { isShown: a } = t;
                                  return (0, n.jsx)("button", {
                                      ...e,
                                      ref: J,
                                      type: "button",
                                      className: `${tJ.Y0} ${tJ.nu}`,
                                      disabled: !l,
                                      "aria-label": E.intl.string(E.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tI.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: tJ.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: tJ.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(t2, { text: em, offering: ec && null == q, typed: null != q }),
                          })
                        : null,
                    (0, n.jsx)(tM.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: H,
                        onPaste: Q,
                        placeholder: ef ? "" : ei,
                        disabled: !l,
                        "aria-label": E.intl.string(S.default.OPr66w),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: tJ.jp,
                    }),
                    ef ? (0, n.jsx)(tu.A, { id: ed, children: ei }) : null,
                    (0, n.jsx)("div", {
                        className: tJ.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eP.m, {
                                      text: E.intl.string(S.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${tJ.Y0} ${tJ.$E}`,
                                          disabled: M,
                                          onClick: V,
                                          "aria-label": E.intl.string(S.default.KdgI4k),
                                          children: (0, n.jsx)(ek.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != v && null != b
                                  ? (0, n.jsx)(tB.A, {
                                        settings: v.settings,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: b,
                                        className: `${tJ.Y0} ${tJ.$E}`,
                                        icon: (0, n.jsx)(tT.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    A
                        ? (0, n.jsxs)("div", {
                              className: tJ.fF,
                              children: [
                                  (0, n.jsx)("div", { className: tJ.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: tJ.rt,
                                      disabled: !O,
                                      "aria-label": E.intl.string(S.default["22GHMt"]),
                                      children: (0, n.jsx)(tR.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let t7 = 1500,
    t4 = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function t6(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t6.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (t6.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of t4) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
t6.mirror = null;
var t5 = l(320095),
    t8 = l(963852),
    t9 = l(521981),
    le = l(763754),
    lt = l(491182),
    ll = l(438729),
    ln = l(622868),
    la = l(308334),
    lr = l(837528),
    li = l(432433),
    ls = l(715628),
    lo = l(752636),
    lu = l(9842),
    ld = l(589022),
    lc = l(95701),
    lm = l(994500),
    lf = l(967198),
    lh = l(803306);
let lg = new Set(),
    lx = new Map();
function lp(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var lv = l(73432);
let lb = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lj(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function ly(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lk(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = ly(e, t),
        r = e.codePointAt(t);
    if (
        (null != r &&
            (8205 === r ||
                (r >= 65024 && r <= 65039) ||
                (r >= 127995 && r <= 127999) ||
                (r >= 768 && r <= 879) ||
                (r >= 8400 && r <= 8447) ||
                (r >= 65056 && r <= 65071) ||
                (r >= 917536 && r <= 917631))) ||
        8205 === a
    )
        return !0;
    if (lj(a) && lj(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lj(ly(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lw(e, t) {
    let { streaming: l } = t,
        n = (0, F.bG)([tP.Ay], () => tP.Ay.useReducedMotion),
        r = l && !n,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        o = i;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && lk(t, r);) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && s(o));
    let u = r && o.length < e.length,
        d = a.useRef(o);
    a.useLayoutEffect(() => {
        d.current = o;
    });
    let c = a.useRef(0),
        m = a.useRef(0);
    (a.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let l = 0 === m.current ? 32 : t - m.current;
                    if (l >= 32) {
                        m.current = t;
                        let e = d.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && lb.has(e.charAt(n - 1));) n--;
                                    return lb.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lk(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        a.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: r && f < e.length };
}
var lN = l(441136);
let lA = (0, lc.createChannelRecord)({ id: "vibegrations-builder", type: R.rbe.DM }),
    lS = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lE(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lN.Yq, { [lN.x1]: t }), children: e });
}
function lC(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lI(e, t, l) {
    let { content: r } = (0, li.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lA, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(ll.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, ls.A)(i, r);
}
function lM(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lr.m)(e, lA, t.usernameProfile, r),
        o = (0, lr.Jo)(t.avatarProfile, r),
        u = (0, F.bG)([lf.A], () => lf.A.getGuildId()),
        d = (0, F.bG)([ea.default], () => ea.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = ea.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(ld.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: i,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function lT(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, t9.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lN.GV,
                              children: [
                                  (0, n.jsx)(lv.A, { className: lN.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, F.cf)(
            [lm.A],
            () => ({
                isReplyAuthorBlocked: lm.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lm.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, le.X4)(l),
        c = (0, le.X4)(t),
        m = lM(l);
    return (0, n.jsx)(la.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lA,
        referencedMessage: { state: lu.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != i,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: i,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function lR(e) {
    let { message: t, author: l } = e,
        a = lM(t);
    return (0, n.jsx)(ln.Ay, {
        message: t,
        channel: lA,
        author: l,
        guildId: a.guildId,
        subscribeToGroupId: t.id,
        renderPopout: a.renderPopout,
        showAvatarPopout: a.showAvatarPopout,
        showUsernamePopout: a.showUsernamePopout,
        onClickAvatar: a.onClickAvatar,
        onClickUsername: a.onClickUsername,
        onPopoutRequestClose: a.onPopoutRequestClose,
    });
}
function lP(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lg.has(e) || null != ea.default.getUser(e)) return;
                let t = lx.get(e) ?? 0;
                t >= 3 ||
                    (lx.set(e, t + 1),
                    lg.add(e),
                    lh
                        .getUser(e)
                        .finally(() => lg.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, F.bG)(
            [ea.default],
            () => lp(r, null != r ? ea.default.getUser(r) : null, ea.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, le.FT)(o, null), [o]),
        d = a.useMemo(() => (0, ev.LL)(t), [t]),
        c = d?.body ?? t,
        m = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, t8.Ay)({ channelId: lA.id, content: c, author: o });
            return (0, t5.rh)({ ...e, timestamp: lC(l, e.timestamp), state: R.cmJ.SENT });
        }, [c, o, l]);
    return null == m
        ? null
        : (0, n.jsx)(l_, { message: m, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function l_(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = lI(t, a);
    return (0, n.jsx)(lt.A, {
        className: lN.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(lR, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lN.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lN.GV,
                              children: [
                                  (0, n.jsx)(lv.A, { className: lN.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lN.WO, children: o }),
                      ],
                  }),
        childrenAccessories: lE(i, "" !== a),
        disableInteraction: !0,
    });
}
function lL(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lw(t, { streaming: u }),
        m = a.useMemo(() => (0, le.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, F.bG)(
            [ea.default],
            () => lp(h, null != h ? ea.default.getUser(h) : null, ea.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, ev.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, t8.Ay)({ channelId: lA.id, content: x?.body ?? i.content, author: g });
            return (0, t5.rh)({ ...e, id: i.id, timestamp: lC(i.createdAt, e.timestamp), state: R.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lA.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, t8.Ay)({ channelId: lA.id, content: d, author: lS });
            return (0, t5.rh)({
                ...e,
                timestamp: lC(l, e.timestamp),
                state: R.cmJ.SENT,
                ...(null != v ? { type: R.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = lI(b, d, lN.OS);
    return (0, n.jsxs)("div", {
        className: lN.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(lt.A, {
                className: lN.yE,
                author: f,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(lT, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, lo.A)({ message: b, channel: lA, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lE(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lN.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(D.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let lF = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var lD = l(375068);
function l$(e) {
    let { projectId: t, messages: l, ref: r, onPickIdea: i } = e,
        s = a.useRef(null),
        o = a.useCallback(
            (e) => {
                ((s.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e));
            },
            [r],
        ),
        [u, d] = a.useState(null),
        c = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = a.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600)));
        }, []),
        f = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    function l(e, l) {
                        t.push({ row: e, groupable: { key: e.key, ...l } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            l(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, ej.BL)(t),
                            n = eN({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, eb.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, eb.CT)(r, { turnActive: e }),
                            o = r.at(-1)?.index,
                            u = !1;
                        for (let d of r) {
                            if (null != d.prose && lF.test(d.prose.content)) u = !0;
                            else if (null != d.prose) {
                                let r = `${t.render_id}:${d.key}`;
                                l(
                                    {
                                        kind: "prose",
                                        key: r,
                                        message: t,
                                        groupStart: !1,
                                        content: d.prose.content,
                                        hostsAttachments:
                                            "streamed" === n.attachmentsHost &&
                                            d.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && d.index === o && !d.hasWork,
                                    },
                                    { actor: "assistant", boundary: r },
                                );
                            }
                            (d.hasWork || d.hasTodos) &&
                                l(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${d.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: d.index,
                                        active: d.index === s,
                                        closed: d.index !== s,
                                        ...(null != d.durationMs ? { segmentDurationMs: d.durationMs } : {}),
                                        reportsDuration: d.index === i,
                                        hostsChecklist: d.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let d = lF.test(t.content ?? "");
                        if (
                            (!0 === t.interrupted || u || d
                                ? l(
                                      {
                                          kind: "interrupted",
                                          key: `${t.render_id}:interrupted`,
                                          message: t,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : r.every((e) => !e.hasTodos) &&
                                  (t.todos?.length ?? 0) > 0 &&
                                  l(
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (n.showsClosingMessage && !d) ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === n.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            l(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: n.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let n = (function (e) {
                        let t,
                            l,
                            n = [],
                            a = null,
                            r = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                (n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0));
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                                n.push(e));
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(l),
            [l],
        );
    return 0 === l.length
        ? (0, n.jsx)("ol", {
              ref: r,
              className: lD.x7,
              children: (0, n.jsx)(lz, {
                  role: "assistant",
                  children: (0, n.jsx)(lL, { content: E.intl.string(S.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: o,
              className: lD.x7,
              children: f.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, n.jsx)(
                              lz,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: u === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lP, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(eR.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, n.jsx)(
                              lz,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lL, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(eR.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, n.jsx)(
                              lz,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tb, {
                                      projectId: t,
                                      steps: a.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != a.finished_at ? a.finished_at - a.created_at : void 0,
                                      todos: a.todos,
                                      provisionalTodo: a.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, n.jsx)(
                              lz,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tb, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              lz,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tb, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: a.todos,
                                      provisionalTodo: a.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, n.jsx)(
                              lz,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lL, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      replyTo: (function (e, t) {
                                          if (null == t) return;
                                          let l = e.find((e) => e.id === t && "user" === e.role);
                                          if (null != l)
                                              return {
                                                  id: l.id,
                                                  content: l.content,
                                                  ...(null != l.user_id ? { userId: l.user_id } : {}),
                                                  createdAt: l.created_at,
                                              };
                                      })(l, a.in_reply_to),
                                      onJumpToReplied: null != a.in_reply_to ? () => m(a.in_reply_to) : void 0,
                                      accessories: (0, n.jsx)(tj, {
                                          projectId: t,
                                          steps: a.steps,
                                          announcement: a.announcement,
                                          content: "",
                                          proposal: a.proposal,
                                          interrupted: !0 === a.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: a.ideas,
                                          pickedIdeaIds:
                                              null == a.ideas
                                                  ? void 0
                                                  : (function (e, t, l) {
                                                        let n = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of l)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && n.add(e.id);
                                                        }
                                                        return n;
                                                    })(l, a, a.ideas),
                                          attachments: a.attachments,
                                          secretRequest: a.secretRequest,
                                          settingsRequest: a.settingsRequest,
                                          onPickIdea: i,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function lz(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(lD.xk, { [lD.Qo]: r, [lD.q3]: s }),
        children: l,
    });
}
var lO = l(625903),
    lq = l(964675);
function lG(e) {
    let { projectId: t } = e,
        l = (0, F.bG)([c.Ay], () => null != c.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, eQ.A)(t, { isPreview: !0 });
        }, [t]);
    return l
        ? (0, n.jsx)(eA.D, {
              className: lq.h,
              "aria-label": E.intl.string(S.default.gTMvzD),
              onClick: r,
              children: (0, n.jsx)(lO.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lU = l(264709),
    lB = l(495557);
function lV(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lw(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lB.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ep.Ch, {
                ref: o,
                className: lB.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tp.PT, lB.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: ew.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lW = l(921461);
function lH(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1, spoken: o, onSpokenChange: u } = e,
        d = a.useRef(null),
        c = a.useId(),
        [m, f] = a.useState(null),
        h = null != t && "end" !== t.phase,
        g = s
            ? S.default.ivvYHP
            : r
              ? S.default.aFffp2
              : l
                ? S.default["0vH/5G"]
                : h
                  ? S.default.Ly7F7x
                  : S.default.QDGuNS,
        x = `${E.intl.string(S.default.Xmvb23)} ${E.intl.string(g)}`,
        [p, v] = a.useState(o ?? x),
        b = a.useRef(x);
    (a.useEffect(() => {
        b.current = x;
    }, [x]),
        a.useEffect(() => {
            u?.(p);
        }, [p, u]));
    let j = a.useRef(null),
        y = a.useRef(p);
    (a.useEffect(() => {
        y.current = p;
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                b.current !== y.current ? v(b.current) : j.current?.play();
            }
            function n() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (n(),
                    (e = window.setTimeout(() => {
                        (l(), (t = window.setInterval(l, 2400)));
                    }, 1800)));
            }
            function r() {
                (j.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", r),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", r), window.removeEventListener("blur", n));
                }
            );
        }, []));
    let k = null != t && "" !== t.text,
        w = t?.session ?? null,
        N = k && null != w && m === w,
        A = a.useCallback(() => {
            k && null != w && f((e) => (e === w ? null : w));
        }, [k, w]),
        C = a.useCallback(() => f(null), []);
    return (0, n.jsx)(tA.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: N,
        onRequestClose: C,
        renderPopout: () => (0, n.jsx)(lV, { id: c, activity: t }),
        children: () =>
            (0, n.jsxs)(eA.D, {
                innerRef: d,
                className: i()(lW.hF, k && lW.Xd),
                "aria-label": E.intl.string(r ? S.default.pGFXZ0 : S.default.SzdX35),
                "aria-expanded": N,
                "aria-describedby": N ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": E.intl.string(g),
                onClick: A,
                children: [
                    (0, n.jsx)("span", {
                        className: lW.bl,
                        children: (0, n.jsx)(lU.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: lW.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, n.jsx)(ty.o, {
                            ref: j,
                            text: p,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: lW.yE,
                        }),
                    }),
                ],
            }),
    });
}
var lQ = l(280894);
function lY(e) {
    return e.toLocaleString();
}
function lK(e) {
    let { label: t, usage: l } = e;
    return (0, n.jsxs)("div", {
        className: lQ.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: lQ.mf,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lY((0, tW.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(p.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lY(l.input_tokens),
                    " in \xb7 ",
                    lY(l.output_tokens),
                    " out \xb7 ",
                    lY(l.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lY(l.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function lX(e) {
    let { project: t } = e,
        l = (0, tW.wU)(t.compaction),
        a = (0, tW.wV)(t.orchestrator, t.codegen),
        r = (0, tW.wV)(a, l);
    return (0, n.jsxs)("div", {
        className: lQ.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: lQ.Q$,
                children: (0, n.jsxs)("div", {
                    className: lQ.mf,
                    children: [
                        (0, n.jsxs)(p.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lY((0, tW.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(lK, { label: E.intl.string(S.default.R9aduM), usage: a }),
            (0, n.jsx)(lK, { label: E.intl.string(S.default.Tj6b30), usage: l }),
            (0, n.jsxs)("div", {
                className: lQ.mf,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["kILb+R"]),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tW.sj)(r) ? "\u2014" : `${Math.round(100 * (0, tW.CA)(r))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lZ(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tA.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(lX, { project: t }),
        children: (e) =>
            (0, n.jsx)(eA.D, {
                innerRef: l,
                className: lQ.Y$,
                "aria-label": E.intl.string(S.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(e_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lJ = l(985451),
    l0 = l(258216);
function l1(e) {
    switch (e) {
        case "connecting":
            return E.intl.string(S.default.W7oyuf);
        case "failed":
            return E.intl.string(S.default.eE60xI);
        case "closed":
            return E.intl.string(S.default["yBmS+I"]);
    }
}
function l2(e) {
    let {
            projectId: t,
            thinking: l,
            restoring: r = !1,
            thinkingActivity: i,
            compacting: s,
            projectUsage: o,
            connState: u,
        } = e,
        d = (0, lJ.o4)(t),
        [c, m] = a.useState(null);
    return (0, n.jsxs)("div", {
        className: l0.jf,
        children: [
            (0, n.jsx)("div", {
                className: l0.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    l || r || d
                        ? (0, n.jsx)(lH, {
                              activity: i,
                              compacting: s,
                              restoring: r,
                              controlling: d,
                              spoken: c,
                              onSpokenChange: m,
                          })
                        : null,
            }),
            (0, n.jsx)(lG, { projectId: t }),
            null == o
                ? null
                : (0, n.jsxs)("span", {
                      className: l0.BP,
                      children: [
                          (0, n.jsx)(p.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": E.intl.formatToPlainString(S.default["7SZZvj"], {
                                  runes: (0, tW.a7)(o.cost_usd),
                                  turns: o.turns,
                              }),
                              children: E.intl.formatToPlainString(S.default["4PFO2p"], {
                                  runes: (0, tW.a7)(o.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, n.jsx)(lZ, { project: o }),
                      ],
                  }),
            "open" === u
                ? null
                : (0, n.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === u ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default.eDDdhB, { status: l1(u) }),
                      "data-vibegrations-conn": !0,
                      "data-state": u,
                      className: l0.XF,
                      children: l1(u),
                  }),
        ],
    });
}
var l3 = l(22231),
    l7 = l(408278),
    l4 = l(900797),
    l6 = l(847374),
    l5 = l(477155),
    l8 = l(935286),
    l9 = l(856795),
    ne = l(424110);
function nt(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eA.D, {
        className: i()(ne.uK, { [ne.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": E.intl.formatToPlainString(d ? S.default.aL1BKQ : S.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: ne.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: ne.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: ne.l8,
                        children: (0, n.jsx)(p.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: ne.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, n.jsx)(p.E, {
                              tag: "span",
                              id: u,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, n.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: ne.rM,
                      children: E.intl.string(S.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nl(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(ne.Ge, ne.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(nt, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: ne.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: ne.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(l3.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(ne.Pu, ne.es), children: s }),
                ],
            }),
        ],
    });
}
function nn(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [o, u] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, v] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        w = a.useRef(null),
        [N, A] = a.useState(null),
        C = a.useRef(null),
        I = a.useRef(0),
        M = null == l,
        T = t.questions.length,
        R = Math.min(m, T - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        z = d[P.id] ?? "",
        { text: O, phase: q } = (0, l9.Q)(P.question),
        G = O === P.question,
        U = G && D?.id === P.id && D.truncated;
    a.useLayoutEffect(() => {
        if (null == N || F || !G) return;
        function e() {
            if (null == N) return;
            let e = N.scrollHeight > N.clientHeight + 1;
            $((t) => (t?.id === P.id && t.truncated === e ? t : { id: P.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(N), () => t.disconnect());
    }, [G, N, P.id, F]);
    let B = E.intl.string(F ? E.t.iTcuma : E.t.dcl9MQ),
        V = a.useCallback(
            (e) => {
                if (null == l) return;
                let n = t.questions
                    .map((t, l) => ({ question: t, index: l, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: l, answer: n } = e;
                        return `${l + 1}. ${t.question} \u{2192} ${n.text.trim()}`;
                    })
                    .join("\n");
                "" !== n && l(n);
            },
            [t, l],
        ),
        W = a.useCallback(
            (e, t) => {
                I.current += 1;
                let l = I.current;
                (g({ direction: t, moves: l }), v({ question: P, draft: z, direction: t, moves: l }), k(!0), f(e));
            },
            [z, P],
        ),
        H = a.useCallback(() => {
            let e = w.current,
                t = C.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = w.current,
            t = C.current;
        if (null == e || null == t) return;
        H();
        let l = new ResizeObserver(H);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [H]);
    let Q = h?.moves;
    a.useEffect(() => {
        if (null == Q) return;
        let e = setTimeout(() => v(null), 400),
            t = setTimeout(() => k(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [Q]);
    let Y = a.useCallback(
            (e) => {
                if (M) return;
                let l = { ...o, [P.id]: e };
                u(l);
                let n = (function (e, t, l) {
                    let { questions: n } = e;
                    for (let e = 1; e <= n.length; e++) {
                        let a = (l + e) % n.length,
                            r = t[n[a].id];
                        if (null == r || "" === r.text.trim()) return a;
                    }
                    return null;
                })(t, l, R);
                null == n ? V(l) : W(n, n < R ? "back" : "forward");
            },
            [o, t, M, R, P.id, V, W],
        ),
        K = a.useCallback(() => {
            if (M || 0 === R) return;
            let e = t.questions[R - 1];
            (u((t) => {
                let l = { ...t };
                return (delete l[e.id], l);
            }),
                c((t) => {
                    let l = { ...t };
                    return (delete l[e.id], l);
                }),
                W(R - 1, "back"));
        }, [t, M, R, W]),
        X = R > 0 && !M,
        Z = a.useCallback(() => {
            let e = z.trim();
            "" !== e && Y({ kind: "custom", text: e });
        }, [z, Y]),
        [J, ee] = a.useState(!1),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let en = a.useCallback(() => {
            null != r && (el(!0), setTimeout(r, 150));
        }, [r]),
        ea = a.useCallback(() => {
            M || R >= T - 1 || W(R + 1, "forward");
        }, [M, R, T, W]),
        er = R < T - 1 && !M;
    return (0, n.jsxs)("section", {
        className: i()(ne.$O, { [ne.fI]: J && !et, [ne.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: ne.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: w,
                        className: ne.wx,
                        children: [
                            (0, n.jsx)(p.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(ne.TK, ne.R_, { [ne.TB]: "exit" === q, [ne.JU]: "enter" === q }),
                                children: O,
                            }),
                            U || F
                                ? (0, n.jsx)("div", {
                                      className: ne.Q7,
                                      children: (0, n.jsx)(eP.m, {
                                          text: B,
                                          children: (0, n.jsx)(l7.K, {
                                              icon: F ? l4.t : l6.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: P.id, expanded: !F }),
                                              "aria-label": B,
                                              "aria-controls": `${P.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, n.jsx)(eA.D, {
                                      className: i()(ne.gb, ne.Q7),
                                      onClick: en,
                                      "aria-label": E.intl.string(S.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, n.jsx)(s.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: ne.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: ne.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: C,
                                    className: ne.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nt,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: M,
                                                    onPick: (e) => Y({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: ne.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: ne.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(l3.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tM.y, {
                                                    value: z,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [P.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), Z());
                                                    },
                                                    placeholder: E.intl.string(S.default.qifsdL),
                                                    "aria-label": E.intl.formatToPlainString(S.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: ne.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, n.jsx)(
                                          nl,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: M },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            T > 1
                ? (0, n.jsxs)("div", {
                      className: ne.qr,
                      children: [
                          (0, n.jsx)(p.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: E.intl.formatToPlainString(S.default["7bypa+"], { index: R + 1, total: T }),
                          }),
                          (0, n.jsxs)("div", {
                              className: ne.Np,
                              children: [
                                  (0, n.jsx)(eA.D, {
                                      className: i()(ne.gb, { [ne.yI]: !X }),
                                      onClick: X ? K : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": M,
                                      "aria-label": E.intl.string(S.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, n.jsx)(l5.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eA.D, {
                                      className: i()(ne.gb, { [ne.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": E.intl.string(S.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(l8.E, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var na = l(643278),
    nr = l(191521),
    ni = l(405189);
function ns(e) {
    let { line: t, placement: l, todos: r, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != l,
        [c, m] = a.useState(l ?? "top"),
        [f, h] = a.useState(d),
        [g, x] = a.useState(!1),
        [p, v] = a.useState(!1),
        [b, j] = a.useState(d);
    (b !== d && (j(d), null != l ? (m(l), h(!0)) : (x(!1), v(!1))),
        a.useEffect(() => {
            if (d || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [d, f]),
        a.useEffect(() => {
            if (!f || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, d]));
    let [y, k] = a.useState(!1),
        [w, N] = a.useState(!1),
        [A, C] = a.useState(p);
    (A !== p && (C(p), p ? k(!0) : N(!1)),
        a.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        a.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, p]));
    let I = null != r && r.length > 0,
        M = a.useCallback(() => v((e) => !e), []);
    return f
        ? (0, n.jsxs)("div", {
              className: ni.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(ni.vK, { [ni.ho]: g && d, [ni.ET]: !d }),
                      children: [
                          null == u
                              ? (0, n.jsx)("ol", {
                                    className: i()(ni.Rk, ti.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(eX.A, {
                                        glyph: (0, n.jsx)(nr.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eA.D, {
                                    className: ni.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(ni.Rk, ti.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(eX.A, {
                                            glyph: (0, n.jsx)(nr.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, n.jsx)(eP.m, {
                                    text: E.intl.string(S.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eA.D, {
                                        className: ni.BO,
                                        onClick: M,
                                        "aria-expanded": p,
                                        "aria-label": E.intl.string(S.default.qCRC6c),
                                        children: (0, n.jsx)(na.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  y && I
                      ? (0, n.jsx)("div", {
                            className: i()(ni.vB, { [ni.pg]: p && w, [ni.ui]: !p }),
                            children: (0, n.jsx)(tg, { todos: r, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var no = l(366010),
    nu = l(825484),
    nd = l(859703),
    nc = l(738822),
    nm = l(291749),
    nf = l(971276),
    nh = l(590202),
    ng = l(710969),
    nx = l(792620),
    np = l(130490),
    nv = l(617986),
    nb = l(363195),
    nj = l(749414);
let ny = !1;
function nk(e) {
    let t,
        l,
        r,
        { open: i } = e,
        s =
            ((t = (0, np.dN)()),
            (l = (0, F.bG)([nd.A], () => nd.A.isQuestAccessSuspended || null != nd.A.questEnrollmentBlockedUntil, [])),
            (r = (0, F.bG)([nd.A], () => null != nd.A.getQuestPreviewOverride(nc.uF.QUEST_BAR_V2), [])),
            null != t && (0, nx.vv)(t)
                ? r
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, nf.s)() || l || (0, ng.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = a.useState(() => ny),
        { mounted: d, closing: c } = (function (e) {
            let [t, l] = a.useState(e),
                [n, r] = a.useState(!1),
                i = a.useRef(null);
            return (
                e && (!t || n) ? (l(!0), r(!1)) : e || !t || n || r(!0),
                a.useEffect(() => {
                    if (!e && t)
                        return (
                            (i.current = setTimeout(() => {
                                ((i.current = null), r(!1), l(!1));
                            }, 150)),
                            () => {
                                null != i.current && (clearTimeout(i.current), (i.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(i && !o && null != s),
        [m, h] = a.useState(s);
    null != s && s !== m && h(s);
    let g = s ?? m,
        x = (0, F.bG)([nb.A], () => nb.A.getState().theme),
        v = (0, no.M)(x) ? R.NJ8.DARK : R.NJ8.LIGHT,
        b = null != g ? (0, nm.tW)(g, nm.fY.GAME_TILE, v).url : null,
        j = null != b && "" !== b ? b : null,
        y = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: nc.uF.QUEST_BAR_V2,
                sourceQuestContent: nc.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: nh.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nv.d5)({ quest: s, ...e })
                : await (0, nv.e0)(s, { ...e, questContentCTA: nh.Cy.ACCEPT_QUEST });
        }, [s]),
        k = a.useCallback(() => {
            ((ny = !0), u(!0));
        }, []);
    return d && null != g
        ? (0, n.jsxs)("aside", {
              className: nj.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != j
                      ? (0, n.jsxs)("div", {
                            className: nj.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("img", { className: nj.Rx, src: j, alt: "" }),
                                (0, n.jsx)("div", { className: nj._e }),
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: nj.iB,
                      children: [
                          null != j ? (0, n.jsx)("img", { className: nj.w1, src: j, alt: "" }) : null,
                          (0, n.jsxs)("div", {
                              className: nj.Ug,
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: E.intl.string(S.default["09LJ+I"]),
                                  }),
                                  (0, n.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: E.intl.format(E.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(nu.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, n.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: E.intl.string(S.default.egO5fO),
                          }),
                          (0, n.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: E.intl.string(E.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nw = l(651649),
    nN = l(670455);
let nA = "shownVibegrationsFeedbackProjectIds";
var nS = l(783134),
    nE = l(348800);
let nC = [E.intl.string(S.default["E+Q26x"]), E.intl.string(S.default["06/jqP"]), E.intl.string(S.default["3gSfUa"])];
function nI(e) {
    let { projectId: t, restoreState: r } = e,
        i = (0, F.bG)([ej.Ay], () => ej.Ay.getMessages(t), [t]),
        s = (0, F.bG)([c.Ay], () => c.Ay.getConnState(t), [t]),
        o = (0, F.bG)([c.Ay], () => c.Ay.isChatStopped(t), [t]),
        u = (0, F.bG)([ej.Ay], () => ej.Ay.getProjectUsage(t), [t]),
        d = (0, F.bG)([ej.Ay], () => ej.Ay.getThinkingActivity(t), [t]),
        m = (0, F.bG)([ej.Ay], () => ej.Ay.isCompacting(t), [t]),
        h = (0, F.bG)([c.Ay], () => c.Ay.getModelSettings(t), [t]),
        g = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useRef(!0),
        [j, y] = a.useState(!0);
    a.useEffect(() => {
        b.current && x.current?.scrollToBottom();
    }, [i]);
    let k = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        w = a.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let l = t > 1;
            y((e) => (!l === e ? e : !l));
        }, []);
    (a.useLayoutEffect(() => {
        let e = g.current,
            t = v.current;
        if (null == e) return;
        let l = x.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            b.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => x.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (i.target === l) {
                    let e = i.contentRect.height;
                    if (e === r) continue;
                    ((r = e), s());
                } else {
                    let e = i.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            o.observe(e),
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        a.useEffect(() => {
            (0, c.Hc)(t);
        }, [t]),
        a.useEffect(
            () => () =>
                (function (e) {
                    let t = ej.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ej.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tF.w.get(nA) ?? []).includes(e) ||
                            nw.A.possiblyShowFeedbackModal(nN.MW.VIBEGRATIONS, () => {
                                let a;
                                ((a = tF.w.get(nA) ?? []).includes(e) || tF.w.set(nA, [...a, e]),
                                    (0, eV.openModalLazy)(async () => {
                                        let { default: a } = await Promise.all([
                                            l.e("312513"),
                                            l.e("36395"),
                                            l.e("155925"),
                                            l.e("218413"),
                                            l.e("137381"),
                                            l.e("847004"),
                                            l.e("341676"),
                                        ]).then(l.bind(l, 580711));
                                        return (l) => (0, n.jsx)(a, { ...l, projectId: e, promptCount: t });
                                    }));
                            }));
                })(t),
            [t],
        ));
    let N = (0, nS.Q_)(t),
        A = a.useCallback(
            (e, l) => {
                (0, c.dv)(t, e, l);
            },
            [t],
        ),
        C = a.useCallback(
            (e, l) => {
                0 === N.annotations.length
                    ? A(e, l)
                    : (A((0, ev.Mx)({ annotations: N.annotations, metaComment: e, context: N.context }), l),
                      (0, nS.PS)(t));
            },
            [N, A, t],
        ),
        I = a.useCallback(() => (0, c.fu)(t), [t]),
        M = a.useCallback((e) => A(e.implementation_prompt), [A]),
        T = a.useCallback((e) => A(e), [A]),
        R = a.useCallback((e) => (0, c.XZ)(t, e), [t]),
        P = a.useCallback((e) => (0, c.vX)(t, e), [t]),
        _ = a.useCallback((e) => (0, c.Vm)(t, e), [t]),
        L = a.useCallback(() => A(E.intl.string(S.default.Jj8Ftb)), [A]),
        D = r?.status === "restoring",
        $ = "open" === s && !o && !D,
        z = i[i.length - 1],
        O = null != z && "assistant" === z.role && null != z.proposal,
        [q, G] = a.useState(null),
        U = z?.clarification != null && z.clarification.id !== q ? z.clarification : null,
        B = a.useCallback(() => {
            null != U && G(U.id);
        }, [U]),
        V = (0, F.bG)([ej.Ay], () => ej.Ay.hasLoadedHistory(t), [t]),
        W = a.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return nC[e % nC.length];
        }, [t]),
        H = O
            ? E.intl.string(S.default.Jj8Ftb)
            : z?.kind === "plan_implemented"
              ? E.intl.string(S.default["3sTTBu"])
              : V && 0 === i.length
                ? W
                : null,
        Q = a.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, ej.BL)(t)) return t;
            }
        }, [i]),
        Y = null != Q,
        K = O && $ ? L : void 0,
        [X, Z] = a.useState(null),
        [J, ee] = a.useState(Y);
    (J !== Y && (ee(Y), Y || Z(null)),
        a.useEffect(() => {
            if (!Y) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Z(null)
                        : Z(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [Y, Q?.steps]));
    let et = a.useMemo(() => (null != Q ? (0, ey.b9)(Q.steps) : ""), [Q]),
        el = a.useMemo(() => (null != Q ? ((0, eb.lt)(Q.steps) ?? Q.todos) : void 0), [Q]),
        en = Q?.provisionalTodo,
        ea = a.useMemo(() => {
            var e;
            return null != Q ? ((e = Q.steps), tv((0, eb.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [Q]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nE.TE,
        children: [
            (0, n.jsx)(nk, { open: null != Q }),
            (0, n.jsx)(ns, {
                onJumpToActivity: k,
                line: et,
                placement: Y && "top" === X ? "top" : null,
                todos: el,
                provisionalTodo: en,
                agents: ea,
            }),
            (0, n.jsxs)("div", {
                className: nE.JX,
                children: [
                    (0, n.jsx)(ep.Ch, {
                        ref: x,
                        onScroll: w,
                        className: j ? nE.N$ : `${nE.N$} ${nE.hB}`,
                        children: (0, n.jsx)(l$, { ref: v, projectId: t, messages: i, onPickIdea: $ ? M : void 0 }),
                    }),
                    (0, n.jsx)("div", {
                        className: nE.NJ,
                        children: (0, n.jsx)(l2, {
                            projectId: t,
                            thinking: Y,
                            restoring: D,
                            thinkingActivity: d,
                            compacting: m,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == U
                        ? null
                        : (0, n.jsx)("div", {
                              className: nE.B5,
                              children: (0, n.jsx)(
                                  nn,
                                  { clarification: U, onSubmit: $ ? T : void 0, onDismiss: B },
                                  U.id,
                              ),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nE.Jx,
                children: [
                    (0, n.jsx)(ns, {
                        onJumpToActivity: k,
                        line: et,
                        placement: Y && "bottom" === X ? "bottom" : null,
                        todos: el,
                        provisionalTodo: en,
                        agents: ea,
                    }),
                    0 === N.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nE.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default.Lkx0Kk, {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default.B0YARo),
                                      onClick: () => (0, nS.PS)(t),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(t3, {
                        projectId: t,
                        canSend: $,
                        stopped: o,
                        running: Y,
                        restoring: D,
                        onSend: C,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: $ ? I : void 0,
                        onUploadFile: P,
                        onDeleteFile: _,
                        onApprove: K,
                        suggestion: H,
                        questionOpen: null != U,
                        modelSettings: h,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var nM = l(661531),
    nT = l(602853),
    nR = l(517461),
    nP = l(761929),
    n_ = l(927506);
function nL(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nT.r)(nM.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nR.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(u ?? 460),
        f = (0, t_.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, nP.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nP.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, n.jsxs)("div", {
        className: n_.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: n_.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: n_.kL, style: { width: f }, children: i }),
        ],
    });
}
var nF = l(691540),
    nD = l(857250),
    n$ = l(97483),
    nz = l(624479),
    nO = l(92446),
    nq = l(761508),
    nG = l(540999),
    nU = l(957565);
let nB = [],
    nV = new Map(),
    nW = new Map(),
    nH = new Map(),
    nQ = new Map(),
    nY = new Map(),
    nK = new Map(),
    nX = new Map();
class nZ extends F.Ay.Store {
    getStatus(e) {
        return nV.get(e) ?? null;
    }
    getFetchState(e) {
        return nW.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nQ.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nK.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nY.get(e) ?? null;
    }
    getModelCalls(e) {
        return nX.get(e) ?? nB;
    }
    getForceCompactionState(e) {
        return nH.get(e) ?? "idle";
    }
}
let nJ = new nZ(tD.h, {
    LOGOUT: function () {
        if (
            0 === nV.size &&
            0 === nW.size &&
            0 === nH.size &&
            0 === nQ.size &&
            0 === nY.size &&
            0 === nK.size &&
            0 === nX.size
        )
            return !1;
        (nV.clear(), nW.clear(), nH.clear(), nQ.clear(), nY.clear(), nK.clear(), nX.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nW.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === nH.get(t);
        n &&
            nH.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === nW.get(t);
        if ((a && nW.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nW.set(t, "failed") : (nV.set(t, l), nW.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nQ.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        nY.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        nH.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        nH.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = nX.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let l = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            n = null == t ? [l] : t.concat(l);
        nX.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, tW.aM)(l.total)) return !1;
        nK.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (nV.delete(t), nW.delete(t), nH.delete(t), nQ.delete(t), nY.delete(t), nK.delete(t), nX.delete(t));
    },
});
var n0 = l(972786);
function n1(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function n2(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function n3(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function n7(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function n4(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function n6(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
var n5 = l(69985);
function n8(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: n5.KE,
        children: [
            (0, n.jsx)("div", {
                className: n5.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(S.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(S.default["4NpaEk"], { time: n4(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(f.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.aw0IJm), onClick: a }),
        ],
    });
}
function n9(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: n5.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(p.E, { variant: "text-xs/semibold", color: "text-muted", className: n5.Gf, children: t }),
            l,
        ],
    });
}
function ae(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: n5.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n5.x7,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != a && (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
        ],
    });
}
function at(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: n5.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n5.x7,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(l)} / ${r(a)}`,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: n5.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? n5.aV : n5.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function al(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(S.default.M7Vn6y);
        case "unconfigured":
            return E.intl.string(S.default.QirpMl);
        case "unauthorized":
            return E.intl.string(S.default.QZ1e4l);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(S.default.zUTHf7, { detail: e.detail })
                : E.intl.string(S.default.WIAQes);
    }
}
function an(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default.SBkDIZ, {
              p50: n1(e.memory_p50_bytes ?? 0),
              p999: n1(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let aa = {
    db: () => S.default.r6cciE,
    db_preview: () => S.default.JmIyL8,
    runtime: () => S.default.bzNyv8,
    runtime_preview: () => S.default["LONZ/8"],
    bot: () => S.default.jdpw3A,
    bot_preview: () => S.default["/g6wUz"],
};
function ar(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(ae, {
            label: E.intl.string(S.default.H6PMwW),
            value: E.intl.string(S.default.TLOZ8J),
            hint: al(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(ae, {
            label: E.intl.string(S.default.H6PMwW),
            value: "\u2014",
            hint: E.intl.string(S.default.uAzxdh),
        });
    let a = an(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ae, { label: E.intl.string(S.default.awAqRi), value: n2(l.cpu_ms) }),
            null != a && (0, n.jsx)(ae, { label: E.intl.string(S.default.WdGviA), value: a }),
        ],
    });
}
function ai(e) {
    let { analytics: t } = e,
        l = E.intl.string(S.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(n9, {
            title: l,
            children: (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: al(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? aa[t] : null) ? E.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(n9, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(p.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          ae,
                          {
                              label: l,
                              value: E.intl.formatToPlainString(S.default.AnRynJ, { cpu: n2(t.cpu_ms) }),
                              hint: an(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var as = l(522652);
let ao = new Set(["error", "aborted", "length"]),
    au = [];
function ad(e) {
    let { call: t } = e,
        l = null != t.stopReason && ao.has(t.stopReason),
        a = [
            null != t.durationMs ? n2(t.durationMs) : null,
            `${n3(t.inputTokens + t.cacheReadTokens + t.cacheWriteTokens)} \u{2192} ${n3(t.outputTokens)}`,
            l ? t.stopReason : null,
        ]
            .filter((e) => null != e)
            .join(" \xb7 ");
    return (0, n.jsxs)("div", {
        className: as.p5,
        children: [
            (0, n.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: as.Q5,
                children: n7(t.observedAt),
            }),
            (0, n.jsxs)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: as.qN,
                children: [t.role, " \xb7 ", t.model],
            }),
            (0, n.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: l ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function ac(e, t) {
    return (0, n.jsx)(ae, {
        label: e,
        value: E.intl.formatToPlainString(S.default.U98VaN, { count: n3((0, tW.aM)(t)) }),
        hint: `${n3(t.input_tokens)} in \xb7 ${n3(t.output_tokens)} out \xb7 ${n3(t.cache_read_input_tokens)} cache read`,
    });
}
function am(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, F.bG)([nJ], () => nJ.getLastTurnUsage(t), [t]),
        u = (0, F.bG)([nJ], () => nJ.getLastCompaction(t), [t]),
        d = (0, F.bG)([nJ], () => nJ.getLastCompactionDecline(t), [t]),
        m = (0, F.bG)([nJ], () => nJ.getForceCompactionState(t), [t]),
        h = a.useCallback(() => (0, c.Lj)(t), [t]),
        g = a.useCallback(() => (0, c.Lj)(t, !0), [t]),
        x = (0, F.bG)([nJ], () => (s ? au : nJ.getModelCalls(t)), [t, s]),
        v = l?.agent?.lifetime ?? null,
        b = l?.agent?.limits ?? null,
        j = l?.agent?.session ?? null,
        y = u?.promptCeiling ?? b?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: as.Mf,
        children: [
            (0, n.jsx)(n8, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(n9, {
                title: E.intl.string(S.default.IYpHtT),
                children:
                    null == v
                        ? (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ae, {
                                      label: E.intl.string(S.default["8MSJDH"]),
                                      value: n3((0, tW.a7)(v.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default["6Z2KhK"], { count: n3(v.turns) }),
                                  }),
                                  ac(E.intl.string(S.default.hk4jJr), v.orchestrator),
                                  ac(E.intl.string(S.default.R9aduM), v.codegen),
                                  ac(E.intl.string(S.default.Tj6b30), (0, tW.wU)(v.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(ae, {
                                          label: E.intl.string(S.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${n3(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(n9, {
                title: E.intl.string(S.default.lo4mY6),
                children:
                    null == o
                        ? (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  ac(E.intl.string(S.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(ae, {
                                      label: E.intl.string(S.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, tW.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(n9, {
                title: E.intl.string(S.default.mn8279),
                children: [
                    null != u && null != y
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(at, {
                                      label: E.intl.string(S.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: n3,
                                  }),
                                  (0, n.jsx)(ae, {
                                      label: E.intl.string(S.default.ntZb8d),
                                      value: `${n3(u.tokensBefore)} \u{2192} ${n3(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.jA05ru, {
                                          count: n3(u.retainedMessages),
                                          time: n4(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.LKGmsP, { ceiling: n3(y) })
                                      : E.intl.string(S.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(ae, {
                            label: E.intl.string(S.default["se+2ls"]),
                            value: `${n3(d.projected)} / ${n3(d.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default.KHK44U, { time: n4(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: as.Lj,
                        children: [
                            (0, n.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default.B0KV7p),
                                disabled: "pending" === m,
                                onClick: h,
                            }),
                            (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.wBng42);
                                    if ("pending" === e) return E.intl.string(S.default["0tgo31"]);
                                    let t = n4(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return E.intl.formatToPlainString(S.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? S.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? S.default.GV4sdd
                                              : S.default["Y+0nUb"];
                                    return E.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(m),
                            }),
                            "object" == typeof m &&
                                !0 === m.pendingTurn &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: E.intl.string(S.default["044+ju"]),
                                            onClick: g,
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: E.intl.string(S.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(n9, {
                    title: E.intl.string(S.default.F5eP7e),
                    children:
                        0 === x.length
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      x
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(ad, { call: e }, e.id)),
                                      x.length > 30 &&
                                          (0, n.jsx)(p.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: E.intl.formatToPlainString(S.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: x.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != j || l?.analytics != null) &&
                (0, n.jsxs)(n9, {
                    title: E.intl.string(S.default.ZRxAPD),
                    children: [
                        null != j &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(ae, {
                                        label: E.intl.string(S.default["wt5X/o"]),
                                        value: n4(j.instance_since),
                                        hint: E.intl.string(S.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(ae, { label: E.intl.string(S.default["4lgurx"]), value: n3(j.sockets) }),
                                    (0, n.jsx)(ae, {
                                        label: E.intl.string(S.default["a/LXBt"]),
                                        value: j.turn_inflight
                                            ? E.intl.string(S.default["9KlveJ"])
                                            : E.intl.string(S.default["4tYZVa"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, n.jsx)(ae, {
                                            label: E.intl.string(S.default["/hOBkc"]),
                                            value: n3(j.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(ar, { analytics: l.analytics }),
                    ],
                }),
            null != b &&
                (0, n.jsxs)(n9, {
                    title: E.intl.string(S.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(ae, { label: E.intl.string(S.default["5iHZLk"]), value: n3(b.max_iterations) }),
                        (0, n.jsx)(ae, {
                            label: E.intl.string(S.default.Rb6m3E),
                            value: n3(b.max_subagent_iterations),
                        }),
                        (0, n.jsx)(ae, {
                            label: E.intl.string(S.default.WQ9pMe),
                            value: E.intl.formatToPlainString(S.default.U98VaN, { count: n3(b.context_window_tokens) }),
                        }),
                        (0, n.jsx)(ae, {
                            label: E.intl.string(S.default.iEAvzu),
                            value: E.intl.formatToPlainString(S.default.U98VaN, {
                                count: n3(b.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(ae, {
                            label: E.intl.string(S.default["jbhs+f"]),
                            value: n3(b.max_user_message_chars),
                        }),
                        (0, n.jsx)(ae, { label: E.intl.string(S.default.TOQnq4), value: n3(b.max_build_attempts) }),
                        (0, n.jsx)(ae, { label: E.intl.string(S.default.RIDc6D), value: n3(b.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var af = l(320448),
    ah = l(629584),
    ag = l(683438),
    ax = l(849363);
function ap(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: ax.ut,
              children: (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.TV42NS),
              }),
          });
}
function av(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: ax.qf,
              children: [
                  (0, n.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: E.intl.string(S.default.TV42NS),
                  }),
                  (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: ax.qf,
              children: [
                  (0, n.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function ab(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: ax.ps,
              children: (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default["U/qDX9"]),
              }),
          })
        : null;
}
var aj = l(417397);
let ay = ["all", "preview", "stable", "web"],
    ak = a.memo(function (e) {
        var t;
        let { entry: l, showSource: r } = e,
            [i, s] = a.useState(!1),
            o = a.useId(),
            u = a.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (e.length > 16e3) return null;
                        let l = e.indexOf("{"),
                            n = e.indexOf("["),
                            a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                        if (-1 === a) return null;
                        let r = e.slice(a).trim();
                        if (r.length < 2) return null;
                        try {
                            t = JSON.parse(r);
                        } catch {
                            return null;
                        }
                        if ("object" != typeof t || null == t) return null;
                        let i = e.slice(0, a).trim(),
                            s = JSON.stringify(t, null, 2);
                        return Array.isArray(t)
                            ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                            : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                    })(l.message),
                [l.message],
            ),
            d = "error" === l.level ? "text-feedback-critical" : "text-default";
        return (0, n.jsxs)("div", {
            className: aj.vK,
            children: [
                (0, n.jsx)(p.E, {
                    tag: "span",
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    className: aj.Mt,
                    selectable: !0,
                    children: n7(l.ts),
                }),
                (0, n.jsx)(p.E, {
                    tag: "span",
                    variant: "text-xxs/semibold",
                    color:
                        "error" === (t = l.level)
                            ? "text-feedback-critical"
                            : "warn" === t
                              ? "text-feedback-warning"
                              : "text-muted",
                    className: aj.dm,
                    children: l.level,
                }),
                (0, n.jsxs)("span", {
                    className: aj.t4,
                    children: [
                        r &&
                            null != l.source &&
                            (0, n.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-subtle",
                                className: aj.Cq,
                                children: l.source,
                            }),
                        null != l.kind &&
                            (0, n.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-feedback-critical",
                                className: aj.Cq,
                                title: l.build ?? void 0,
                                children: E.intl.string(S.default.GO6JcR),
                            }),
                        null != u
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      "" !== u.prefix &&
                                          (0, n.jsxs)(p.E, {
                                              tag: "span",
                                              variant: "text-xs/normal",
                                              color: d,
                                              selectable: !0,
                                              children: [u.prefix, " "],
                                          }),
                                      (0, n.jsxs)(eA.D, {
                                          className: aj.Pq,
                                          "aria-expanded": i,
                                          "aria-controls": o,
                                          "aria-label": E.intl.string(S.default.ehmgbH),
                                          onClick: () => s((e) => !e),
                                          children: [
                                              i
                                                  ? (0, n.jsx)(l6.a, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, n.jsx)(af._, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    }),
                                              (0, n.jsxs)(p.E, {
                                                  tag: "span",
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  children: [
                                                      u.marker,
                                                      " ",
                                                      E.intl.formatToPlainString(
                                                          "[\u2026]" === u.marker ? S.default.lXkB6Z : S.default.wkbYxG,
                                                          { count: u.size },
                                                      ),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      i &&
                                          (0, n.jsx)(p.E, {
                                              tag: "div",
                                              variant: "text-xs/normal",
                                              color: d,
                                              className: aj.dF,
                                              selectable: !0,
                                              id: o,
                                              children: u.pretty,
                                          }),
                                  ],
                              })
                            : (0, n.jsx)(p.E, {
                                  tag: "span",
                                  variant: "text-xs/normal",
                                  color: d,
                                  selectable: !0,
                                  children: l.message,
                              }),
                    ],
                }),
            ],
        });
    });
function aw(e) {
    let { projectId: t } = e,
        l = (0, F.bG)([n0.Ay], () => n0.Ay.getLogs(t), [t]),
        r = (0, F.bG)([n0.Ay], () => n0.Ay.getHistoryState(t, "logs")),
        [i, s] = a.useState("all"),
        [o, u] = a.useState(""),
        d = a.useMemo(() => {
            let e = o.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === i ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === i) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, i, o]),
        c = a.useRef(null),
        m = a.useRef(!0);
    a.useEffect(() => {
        m.current && c.current?.scrollToBottom();
    }, [d]);
    let f = a.useCallback(() => {
            let e = c.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = a.useMemo(
            () =>
                ay.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                                return E.intl.string(S.default["+m8XM6"]);
                            case "stable":
                                return E.intl.string(S.default.kiOVnt);
                            case "web":
                                return E.intl.string(S.default.J2TPCe);
                            default:
                                return E.intl.string(S.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: aj.$F,
        children: [
            (0, n.jsxs)("div", {
                className: aj.y4,
                children: [
                    (0, n.jsx)(ah.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: aj.KT,
                        children: (0, n.jsx)(ag.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: E.intl.string(S.default["MX4vr/"]),
                            "aria-label": E.intl.string(S.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(ap, { state: r }),
            (0, n.jsxs)(ep.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: aj.sx,
                children: [
                    (0, n.jsx)(ab, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(av, {
                              state: r,
                              emptyTitle: E.intl.string(S.default.mcFyYc),
                              emptyBody: E.intl.string(S.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(S.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(ak, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function aN(e) {
    return E.intl.string("preview" === e ? S.default["+m8XM6"] : S.default.kiOVnt);
}
function aA(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(n9, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(p.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(S.default.W4hcKL),
                      }),
        })
    );
}
function aS(e) {
    let { env: t, bot: l } = e;
    return l.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ae, {
                      label: E.intl.formatToPlainString(S.default.f8ix3w, { env: aN(t) }),
                      value: l.connected ? E.intl.string(S.default["9KlveJ"]) : E.intl.string(S.default["4tYZVa"]),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(ae, {
                      label: E.intl.string(S.default["0AB7l3"]),
                      value: n3(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${n4(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(ae, { label: E.intl.string(S.default.ElaQ0A), value: n3(l.guild_count) }),
                  (0, n.jsx)(ae, {
                      label: E.intl.string(S.default.SJtBTN),
                      value: n3(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.bSzLue, {
                                    code: l.last_close_code,
                                    time: n4(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, n.jsx)(ae, {
                          label: E.intl.string(S.default.N4l504),
                          value: n3(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(ae, { label: aN(t), value: E.intl.string(S.default.C6xjtD) });
}
function aE(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(ae, {
        label: aN(t),
        value: E.intl.formatToPlainString(S.default.Yur5Zm, { requests: n3(l.requests), failures: n3(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? E.intl.formatToPlainString(S.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: n4(l.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["1PdrB1"], { time: n4(l.since) }),
    });
}
function aC(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ae, {
                label: E.intl.formatToPlainString(S.default.BVORfc, { env: aN(t) }),
                value: n3(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    ae,
                    {
                        label: E.intl.formatToPlainString(S.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(S.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(S.default["7ecbr3"], { time: n4(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function aI(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(ae, {
        label: aN(t),
        value: E.intl.formatToPlainString(S.default.voXL2a, { calls: n3(l.calls), errors: n3(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function aM(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(n9, {
            title: t,
            children: (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(n9, {
        title: t,
        children: [
            (0, n.jsx)(ae, {
                label: E.intl.string(S.default.KOnL3g),
                value: n3(l.requests),
                hint: E.intl.formatToPlainString(S.default["1PdrB1"], { time: n4(l.since) }),
            }),
            (0, n.jsx)(ae, { label: E.intl.string(S.default.CjPhyY), value: n3(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(at, {
                              label: E.intl.string(S.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: n2,
                          }),
                          (0, n.jsx)(ae, {
                              label: E.intl.string(S.default["+rYPHD"]),
                              value: n2(r),
                              hint: E.intl.formatToPlainString(S.default["+LxC7W"], {
                                  total: n2(l.cpu_ms_total),
                                  wall: n2(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(ae, {
                      label: E.intl.string(S.default["V/nNbs"]),
                      value: E.intl.string(S.default.YKWIxp),
                      hint: E.intl.string(S.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(ae, { label: E.intl.string(S.default.ueEMPa), value: n2(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(ae, { label: E.intl.string(S.default.vM2krr), value: n3(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(ae, {
                label: E.intl.string(S.default.g1O88C),
                value: n3(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(ae, { label: E.intl.string(S.default.JUZs7g), value: n6(l.build) }),
        ],
    });
}
function aT(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: E.intl.string(S.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: E.intl.string(S.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: E.intl.string(S.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(n9, {
        title: E.intl.string(S.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(ae, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(ae, {
                                  label: E.intl.formatToPlainString(S.default["9TpIQg"], { env: l }),
                                  value: n1(r.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      r.r2_truncated ? S.default.o45MMA : S.default.S7o3vV,
                                      { count: n3(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(at, {
                                      label: E.intl.formatToPlainString(S.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: n1,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aR(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: as.Mf,
        children: [
            (0, n.jsx)(n8, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(aM, {
                            title: E.intl.string(S.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aM, {
                            title: E.intl.string(S.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aT, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(aA, {
                                title: E.intl.string(S.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aS, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(aA, {
                                title: E.intl.string(S.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aE, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(aA, {
                                title: E.intl.string(S.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aC, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(aA, {
                                title: E.intl.string(S.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aI, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(ai, { analytics: t.analytics }),
                        (0, n.jsxs)(n9, {
                            title: E.intl.string(S.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(ae, {
                                    label: E.intl.string(S.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? n6(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(ae, {
                                    label: E.intl.string(S.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? n6(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aP(e, t) {
    return String(e).padStart(t, "0");
}
function a_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aP(n.getHours(), 2)}:${aP(n.getMinutes(), 2)}:${aP(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aP(n.getMilliseconds(), 3)}` : a;
}
var aL = l(977129);
let aF = new Map(),
    aD = new Map(),
    a$ = 0,
    az = 0;
async function aO(e, t, l) {
    let n = a$,
        a = aF.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < az) return { status: "forbidden" };
    let r = aD.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aL.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((az = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== a$) return { status: "failed" };
            var l = o.rich;
            for (aF.set(t, l); aF.size > 100;) {
                let e = aF.keys().next();
                if (!0 === e.done) break;
                aF.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aD.set(t, i);
    let s = await i;
    return (aD.get(t) === i && aD.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function aq() {
    ((a$ += 1), aF.clear(), aD.clear(), (az = 0));
}
function aG(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let aU = ["model", "tool", "subagent", "delegated", "context"];
function aB(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aG(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aV(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aW = ["arguments", "result", "usage", "diagnostics"];
function aH(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aQ(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function aY(e) {
    switch (e) {
        case "subagent":
            return E.intl.string(S.default["EoY7D+"]);
        case "context":
            return E.intl.string(S.default.KVFrD3);
        case "tool":
            return E.intl.string(S.default["/N6ZU9"]);
        case "delegated":
            return E.intl.string(S.default.HcEbf2);
        default:
            return E.intl.string(S.default.AhOqQs);
    }
}
var aK = l(40715);
let aX = { started: aK.Vf, ok: aK.mo, error: aK.Sr };
function aZ(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${aK.Om} ${aX[t] ?? aK.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return E.intl.string(S.default.HpKDyl);
                case "error":
                    return E.intl.string(S.default["5T4Dd0"]);
                default:
                    return E.intl.string(S.default.VbEmf0);
            }
        })(t),
    });
}
let aJ = { model: aK.WI, subagent: aK.uM, context: aK.eH, tool: aK.pw, delegated: aK.C8 };
function a0(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: aK.wV,
        children: [
            (0, n.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", className: aK.D6, children: t }),
            (0, n.jsx)("div", { className: aK.zL, children: l }),
        ],
    });
}
function a1(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(a0, {
        label: t,
        value: (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function a2(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: aK.WA, children: t });
}
function a3(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: aK.xd,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: aK.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function a7(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: aK.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: aK.p8,
                children: [
                    (0, n.jsx)(af._, { className: aK.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(p.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: aK.bG, children: l }),
        ],
    });
}
function a4(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(a0, {
            label: t.key,
            value: (0, n.jsx)(p.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? E.intl.formatToPlainString(S.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? E.intl.formatToPlainString(S.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(a0, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: aK.Kv,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return E.intl.string(S.default.xO6bcQ);
                            case "content":
                                return E.intl.string(S.default.gpBZRr);
                            default:
                                return E.intl.string(S.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, n.jsx)(p.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function a6(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: aK.QR,
                      children: (0, n.jsx)(p.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aK.uh,
                          children: E.intl.string(S.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          a0,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: aK.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aK.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: E.intl.string(S.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? E.intl.string(S.default["1kBG9Z"])
                                                        : E.intl.formatToPlainString(S.default.VGSwo4, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function a5(e) {
    let { detail: t } = e;
    if (null == t || "loaded" === t.status || "forbidden" === t.status) return null;
    let l =
        "loading" === t.status ? S.default["vBF/0G"] : "unavailable" === t.status ? S.default.jEQTot : S.default.fj5wM8;
    return (0, n.jsx)(p.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: aK.E7,
        children: E.intl.string(l),
    });
}
function a8(e) {
    let { projectId: t, entry: l, onClose: r, parent: i, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    n.add("usage");
            return (
                (l || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && n.add("diagnostics"),
                aW.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aF.get(t)) return;
                    let l = new AbortController();
                    return (
                        aO(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aF.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = a_(l.startedAt, "millis"),
        f = aG(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ep.Ch, {
        className: aK._0,
        onKeyDown: h,
        role: "region",
        "aria-label": E.intl.formatToPlainString(S.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: aK.sy,
                children: (0, n.jsxs)("div", {
                    className: aK.HI,
                    children: [
                        (0, n.jsx)(aZ, { status: l.status }),
                        (0, n.jsx)(p.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aK.PY} ${aJ[f]}`,
                            children: aY(f),
                        }),
                        (0, n.jsx)(p.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aK.kc,
                            children: c,
                        }),
                        (0, n.jsx)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aK.l5,
                            children: null == l.durationMs ? E.intl.string(S.default.HpKDyl) : aH(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aK.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(a3, {
                      title: E.intl.string(S.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(a4, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(a6, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(a5, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(a3, {
                      title: E.intl.string(S.default.KXrf5F),
                      children: [
                          (0, n.jsx)(a1, {
                              label: E.intl.string(S.default["2Aii2k"]),
                              value: E.intl.formatToPlainString(S.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(a1, {
                                    label: E.intl.string(S.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(a0, {
                                    label: E.intl.string(S.default["UV2R1/"]),
                                    value: (0, n.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: E.intl.string(S.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(a6, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(a3, {
                      title: E.intl.string(S.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(a2, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(a1, {
                                            label: E.intl.string(S.default.Ran4BY),
                                            value: E.intl.formatToPlainString(S.default["PYO+Jv"], {
                                                tokens: aQ(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(a1, {
                                            label: E.intl.string(S.default.vPIcyv),
                                            value: E.intl.formatToPlainString(S.default.Qy2iTq, {
                                                system: aQ(l.systemTokens),
                                                tools: aQ(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aQ(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(a1, {
                                            label: E.intl.string(S.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(a1, {
                                            label: E.intl.string(S.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(a1, {
                                            label: E.intl.string(S.default.VyAl6j),
                                            value: E.intl.formatToPlainString(S.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(a1, {
                                            label: E.intl.string(S.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aK.E7,
                              children: E.intl.string(S.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aK.E7,
                      children: E.intl.string(S.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(a7, {
                      title: E.intl.string(S.default.T7SFyZ),
                      children: (0, n.jsxs)(a2, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(a0, {
                                        label: E.intl.string(S.default.NnBqcd),
                                        value: (0, n.jsx)(eA.D, {
                                            tag: "div",
                                            className: aK.mi,
                                            onClick: () => s(i.id),
                                            children: (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === i.kind ? i.model : i.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, n.jsx)(a1, {
                                        label: E.intl.string(S.default.fI6mzD),
                                        value: E.intl.formatToPlainString(S.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(a1, { label: E.intl.string(S.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(a1, { label: E.intl.string(S.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, n.jsx)(a1, { label: E.intl.string(S.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(a1, { label: E.intl.string(S.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aK.Hm,
                                                children: E.intl.string(S.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    a1,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? E.intl.formatToPlainString(S.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : E.intl.formatToPlainString(S.default["/L6GFe"], {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, n.jsx)(p.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aK.E7,
                children: E.intl.string(S.default.khAjR0),
            }),
        ],
    });
}
let a9 = { model: aK.WI, subagent: aK.uM, context: aK.eH, tool: aK.pw, delegated: aK.C8 };
function re(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = aG(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return aU.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: aK.M0,
        children: [
            (0, n.jsx)("div", {
                className: aK.pZ,
                "aria-hidden": !0,
                children:
                    0 === r
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, n.jsx)(
                                        "div",
                                        {
                                            className: `${aK.dL} ${a9[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: aK.z4,
                role: "group",
                "aria-label": E.intl.string(S.default.UZ1OlR),
                children: aU.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: aK.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${aK.A9} ${a9[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: aY(e) }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(S.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(S.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(p.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: aH(a),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
let rt = { model: aK.WI, subagent: aK.uM, context: aK.eH, tool: aK.pw, delegated: aK.C8 };
function rl(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = aG(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? E.intl.formatToPlainString(S.default["PYO+Jv"], { tokens: aQ(t.promptTokens) })
                : null != t.durationMs
                  ? aH(t.durationMs)
                  : null;
    return (0, n.jsxs)(eA.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${aK.nM} ${s ? aK.A5 : ""} ${"error" === t.status ? aK.Cr : ""} ${l ? aK.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: aK.sU,
                children: [
                    (0, n.jsx)(aZ, { status: t.status }),
                    (0, n.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aK.PY} ${rt[o]}`,
                        children: aY(o),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aK.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aK.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aK.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aK.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rn(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, F.yK)([n0.Ay], () => n0.Ay.getTrace(l), [l]),
        s = (0, F.bG)([n0.Ay], () => n0.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => aq, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [m, f] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, t_.clamp)((e / t) * 100, 25, 75);
        }, []),
        w = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, t_.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, nP.A)({
            resizableDomNodeRef: g,
            orientation: nP.R.VERTICAL_TOP,
            getClampedValue: w,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        A = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), N(e));
            },
            [N],
        ),
        C = a.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), c((e) => (0, t_.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        M = a.useMemo(() => aB(i, r), [i, r]),
        T = a.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        ((null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                l = -1 / 0;
                            for (let n of e) {
                                let e = Date.parse(n.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != n.durationMs && (l = Math.max(l, e + n.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(l) ? Math.max(0, l - t) : null;
                        })(e.entries),
                    }));
                })(i)
                    .map((e, t) => ({ ...e, index: t, entries: aB(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = aV(M, o),
        P = R?.kind === "tool" ? aV(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = M[M.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let D = a.useCallback(
        (e) => {
            if (0 === M.length) return;
            let t = M.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(M.length - 1, t));
                (u(M[l].id), document.getElementById(`trace-${M[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? M.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(M.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), j(o));
        },
        [M, o, j],
    );
    return 0 === i.length
        ? (0, n.jsx)("div", {
              className: aK.uP,
              ref: h,
              children: (0, n.jsx)(av, {
                  state: s,
                  emptyTitle: E.intl.string(S.default.Iyt8OJ),
                  emptyBody: E.intl.string(S.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${aK.uP} ${m ? aK.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: aK.DK,
                      children: [
                          (0, n.jsx)(re, { entries: i }),
                          (0, n.jsx)(ap, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: aK.Ie,
                                    children: (0, n.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: E.intl.string(S.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ep.Ch, {
                                    ref: x,
                                    className: aK.Ns,
                                    children: [
                                        (0, n.jsx)(ab, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: v,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": E.intl.string(S.default["QATZ+A"]),
                                            className: aK.p_,
                                            children: T.map((e) => {
                                                let t = a_(e.startedAt),
                                                    l = E.intl.formatToPlainString(S.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: aK.mf,
                                                                children: [
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, n.jsx)(p.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: aH(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: aK.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rl,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? M[0]?.id),
                                                                            onSelect: y,
                                                                            onKeyDown: D,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == R
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": E.intl.string(S.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aK.b1,
                                    onPointerDown: A,
                                    onKeyDown: C,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: aK.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(a8, {
                                        projectId: l,
                                        entry: R,
                                        parent: P,
                                        childCount: _,
                                        onSelect: u,
                                        onClose: I,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var ra = l(365199),
    rr = l(402879);
function ri(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, F.yK)([n0.Ay], () => n0.Ay.getTrace(t), [t]),
        s = a.useRef(null),
        o = a.useCallback(() => {
            let e = JSON.stringify(
                {
                    kind: "vibegrations.trace",
                    version: 1,
                    project_id: t,
                    exported_at: new Date().toISOString(),
                    note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                    entries: i,
                },
                null,
                2,
            );
            (0, rr.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: aK.ED,
                children: (0, n.jsx)(ag.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: E.intl.string(S.default.NfncNw),
                    "aria-label": E.intl.string(S.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tA.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tA.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tS.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": E.intl.string(E.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tE.rX, {
                            children: (0, n.jsx)(tE.Dr, {
                                id: "export",
                                label: E.intl.string(S.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(l7.K, {
                        ...e,
                        buttonRef: s,
                        icon: ra.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": E.intl.string(E.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var rs = l(497243);
function ro(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [o, d] = a.useState(""),
        m = (0, F.bG)([nG.A], () => nG.A.isDeveloper),
        f = (0, F.bG)([nJ], () => nJ.getStatus(t), [t]),
        h = (0, F.bG)([nJ], () => nJ.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, c.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, c.R7)(t), [t]),
        x = a.useCallback(() => {
            let e = {
                captured_at: new Date().toISOString(),
                project_id: t,
                status: nJ.getStatus(t),
                last_turn_usage: nJ.getLastTurnUsage(t),
                last_compaction: nJ.getLastCompaction(t),
                last_compaction_decline: nJ.getLastCompactionDecline(t),
                model_calls: nJ.getModelCalls(t),
                logs: n0.Ay.getLogs(t),
            };
            (0, nU.C)(JSON.stringify(e, null, 2), () =>
                (0, nF.P0)((0, nD.o)(E.intl.string(S.default.sDSDiO), n$.Ck.SUCCESS)),
            );
        }, [t]),
        p = E.intl.string(S.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rs.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(u.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.Ay.Icon, {
                            icon: nz.CopyIcon,
                            tooltip: E.intl.string(S.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: nO.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(u.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rs.rf,
                children: [
                    (0, n.jsxs)(nq.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": E.intl.string(S.default.uNyR86),
                        className: rs.vR,
                        children: [
                            (0, n.jsx)(nq.V.Item, { id: "logs", children: E.intl.string(S.default["1mpzdJ"]) }),
                            (0, n.jsx)(nq.V.Item, { id: "worker", children: E.intl.string(S.default.whGHLD) }),
                            (0, n.jsx)(nq.V.Item, { id: "agent", children: E.intl.string(S.default.cK3AvL) }),
                            m
                                ? (0, n.jsx)(nq.V.Item, { id: "trace", children: E.intl.string(S.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(aw, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aR, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && m
                            ? (0, n.jsxs)("div", {
                                  className: rs.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rs.XH,
                                          children: (0, n.jsx)(ri, { projectId: t, query: o, onQueryChange: d }),
                                      }),
                                      (0, n.jsx)(rn, { projectId: t, query: o }),
                                  ],
                              })
                            : (0, n.jsx)(am, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: m }),
                ],
            }),
        ],
    });
}
var ru = l(333007),
    rd = l(103557),
    rc = l(97808),
    rm = l(778712),
    rf = l(486020),
    rh = l(277437);
function rg(e) {
    let {
            at: t,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: u,
            onDismiss: d,
            canSubmit: c,
            closing: m,
            onUploadFile: f,
            onDeleteFile: h,
        } = e,
        { drafts: g, addFiles: x, removeDraft: p, settled: v, takeRefs: b } = tX({ onUploadFile: f, onDeleteFile: h }),
        j = a.useRef(null),
        y = (c || g.length > 0) && v && !m,
        k = a.useCallback(() => {
            if (!y) return;
            let e = b();
            u(e.length > 0 ? e : void 0);
        }, [y, b, u]),
        [w, N] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let A = a.useRef(null),
        [C, I] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ width: e.offsetWidth, height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = C?.width ?? 320,
        T = C?.height ?? 44,
        R = l.left + 8,
        P = l.top + 8,
        _ = Math.min(Math.max(t.x, R), Math.max(R, l.left + l.width - M - 8)),
        L = Math.min(Math.max(t.y + 32 + 4, P), Math.max(P, l.top + l.height - T - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(rh.M0, { [rh.ho]: w && !m, [rh.ET]: m }),
        style: { left: _, top: L },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rh.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eP.m, {
                position: "bottom",
                text: E.intl.string(S.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rh.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": E.intl.string(S.default.d6Rqlu),
                    children: (0, n.jsx)(tN.H, { size: "custom", color: "currentColor", className: rh.WW }),
                }),
            }),
            (0, n.jsx)(tM.y, {
                autoFocus: !0,
                rows: 1,
                className: rh.hF,
                value: s,
                placeholder: "" === r ? E.intl.string(S.default.FK09JH) : `Edit ${r}`,
                "aria-label": E.intl.string(S.default["qR+sGX"]),
                onChange: (e) => o(e.target.value),
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            g.length > 0
                ? (0, n.jsx)("div", {
                      className: rh.ZO,
                      children: g.map((e) => (0, n.jsx)(tZ, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rx = l(320510),
    rp = l(940107);
function rv(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let l = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (l.value = e.value),
        "string" == typeof e.path && "" !== e.path && (l.path = e.path),
        l
    );
}
var rb = l(42843);
let rj = { x: 25, y: 21 };
function ry(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rk(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rw(e, t, l, n) {
    let a = rk(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rN(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rA(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let l = t.viewport?.width,
        n = t.viewport?.height;
    return "number" != typeof l || "number" != typeof n || l < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: l, height: n },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function rS(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i } = e,
        s = null != l && l === r ? t : null,
        { active: o, annotations: u } = (0, nS.Q_)(s),
        d = (0, lJ.o4)(s),
        m = (0, eV.useHasAnyModalOpen)(),
        h = (0, F.bG)([ea.default], () => ea.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, v] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [w, N] = a.useState(!1),
        [A, C] = a.useState(null),
        [I, M] = a.useState(!1),
        T = a.useRef(null),
        R = a.useRef(null),
        P = a.useRef(null),
        [_, L] = a.useState(null),
        [D, $] = a.useState(!1),
        [z, O] = a.useState(null),
        [q, G] = a.useState(null),
        U = a.useRef(!1),
        [B, V] = a.useState(!1),
        [W, H] = a.useState(null),
        Q = o && !d && !m;
    (a.useEffect(() => {
        if (!Q) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            v((t) => (ry(t, e) ? t : e));
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [Q, i]),
        a.useEffect(() => {
            if (!Q || null == s) return;
            let e = !0,
                t = i();
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rx.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? rA(t.response) : null;
                        null == l ? N(!0) : (j(l), (0, nS._w)(s, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [Q, i, s]));
    let Y = a.useRef(null);
    (a.useEffect(() => {
        if (!Q || null == x || null == s) return;
        if (null == b) {
            Y.current = x;
            return;
        }
        if (ry(Y.current, x)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Y.current = x;
            let t = [];
            for (let e = 0; e < u.length; e += 24) t.push(u.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rx.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !J.current) return;
                        let l = rA(e.response);
                        null != l && (j(l), (0, nS._w)(s, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rv(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, nS.fA)(s, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, x, b, u, s, i]),
        a.useEffect(() => {
            if (!Q)
                return () => {
                    (C(null), O(null), H(null), j(null));
                };
        }, [Q]));
    let K = a.useRef(null),
        X = a.useRef(null),
        Z = a.useRef(!1),
        J = a.useRef(!1);
    a.useEffect(() => {
        ((J.current = Q), Q || ((K.current = null), (X.current = null), (P.current = null), M(!1)));
    }, [Q]);
    let ee = a.useCallback(
            function e() {
                if (Z.current) return;
                let t = K.current;
                if (null == t) return;
                K.current = null;
                let l = i();
                null != l &&
                    ((Z.current = !0),
                    (0, rp.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(
                            (e) => {
                                let t = Array.isArray(e?.results) ? e.results[0] : void 0;
                                if (null == t) return { status: "failed" };
                                if (t.ok) {
                                    let e = rv(t.element);
                                    return null == e ? { status: "failed" } : { status: "picked", target: e };
                                }
                                return "not_found" === t.code
                                    ? { status: "none" }
                                    : "invalid_command" === t.code
                                      ? { status: "unsupported" }
                                      : { status: "failed" };
                            },
                            () => ({ status: "failed" }),
                        )
                        .then((t) => {
                            if (((Z.current = !1), J.current)) {
                                if ("picked" !== t.status || rR(t.target, ei.current.rect, ei.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? C(null)
                                        : "unsupported" === t.status && $(!0);
                                else {
                                    let e = (0, ev.ts)(t.target);
                                    (L((t) => (rT(t, e) ? t : e)),
                                        C((e) => {
                                            var l;
                                            return ((l = t.target),
                                            null == e || null == l
                                                ? e === l
                                                : e.ref === l.ref &&
                                                  e.rect.x === l.rect.x &&
                                                  e.rect.y === l.rect.y &&
                                                  e.rect.width === l.rect.width &&
                                                  e.rect.height === l.rect.height)
                                                ? e
                                                : t.target;
                                        }));
                                }
                                e();
                            }
                        }));
            },
            [i],
        ),
        et = a.useCallback(() => {
            if (null == z) return;
            let e = !U.current;
            (G({ at: z.at, label: z.label, draft: z.draft, instant: e }), V(e), O(null));
        }, [z]);
    (a.useEffect(() => {
        if (!B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]),
        a.useEffect(() => {
            if (null == q) return;
            let e = setTimeout(() => G(null), rI);
            return () => clearTimeout(e);
        }, [q]));
    let el = null == b || null == x || b.viewport.width < 1 ? 1 : x.width / b.viewport.width,
        en = null != b || w,
        er = a.useMemo(() => b?.elements ?? [], [b]),
        ei = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        ei.current = { rect: x, scale: el };
    }, [x, el]);
    let es = a.useCallback((e, t, l) => {
            (H(null), (U.current = !1), O({ target: e, anchor: t, draft: "", at: l, label: (0, ev.ts)(e) }));
        }, []),
        eo = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        eu = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = R.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(eu);
    let ed = a.useCallback(
            (e) => {
                if (null == x || null != W) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), eu(), M(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > rM || Math.abs(e.clientY - z.at.y) > rM) && (U.current = !0);
                    return;
                }
                if (!en) return void C(null);
                let t = eo(e, x);
                if (D) {
                    let e = (0, ev.jo)(er, t.x, t.y),
                        l = null != e && rR(e, x, el) ? null : e;
                    if (null != l) {
                        let e = (0, ev.ts)(l);
                        L((t) => (rT(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = X.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((X.current = l), (K.current = l), ee());
            },
            [x, el, en, eo, D, er, z, W, eu, ee],
        ),
        ec = a.useCallback(() => {
            (M(!1), C(null), (X.current = null), (K.current = null));
        }, []);
    a.useEffect(() => {
        if (!Q || !I || !en || D || null != z || null != W) return;
        let e = P.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((X.current = n), (K.current = n), ee());
    }, [Q, I, en, D, z, W, ee]);
    let em = a.useCallback(
            (e) => {
                if (null != z || null != W) {
                    (et(), H(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = eo(e, x);
                es(A, (0, ev.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, x, eo, z, W, es, et],
        ),
        ef = a.useCallback(
            (e) => {
                if (null == s) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(),
                        e.stopPropagation(),
                        null != z
                            ? et()
                            : W?.confirmingRemove === !0
                              ? H({ ...W, confirmingRemove: !1 })
                              : null != W
                                ? H(null)
                                : (0, nS.PS)(s));
                    return;
                }
                if (null != z || null != W || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : er.findIndex((e) => e.ref === A.ref);
                    C(er[(l + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    es(A, ev.F6, { x: (x?.left ?? 0) + A.rect.x * el, y: (x?.top ?? 0) + A.rect.y * el }));
            },
            [s, z, W, er, A, es, et, x, el],
        ),
        eh = a.useCallback(
            (e) => {
                null == s ||
                    null == z ||
                    (((0, ev.to)(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, c.dv)(s, (0, ev.v_)(z.target, z.draft), e), et(), C(null)));
            },
            [s, z, et],
        ),
        eg = a.useCallback((e) => (null == s ? Promise.reject(Error("no project")) : (0, c.vX)(s, e)), [s]),
        ex = a.useCallback((e) => (null == s ? Promise.resolve() : (0, c.Vm)(s, e)), [s]),
        ep = a.useCallback(() => {
            null == s ||
                null == W ||
                null == g ||
                ((0, ev.to)(W.draft) && ((0, nS.dy)(s, g, W.id, W.draft.trim()), H({ ...W, editing: !1 })));
        }, [s, W, g]),
        eb = a.useCallback(() => {
            null != s && null != W && null != g && ((0, nS.PR)(s, g, W.id), H(null));
        }, [s, W, g]),
        ej = o
            ? y
                ? E.intl.string(S.default.jQQ8i2)
                : w
                  ? E.intl.string(S.default.zvU2QH)
                  : E.intl.formatToPlainString(S.default.A4HDMU, { count: u.length })
            : "",
        ey = Q && null != x,
        ek = I && null == W,
        ew = null == W ? null : u.find((e) => e.id === W.id),
        eN = z?.target ?? ew?.target ?? null,
        eA = z ?? q,
        eS = z ?? (q?.instant === !0 ? null : q),
        eE =
            null != ew && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = rN(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rw(ew.target, ew.anchor, x, el), x)
                : null;
    return (0, ru.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rb.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: ej,
                }),
                ey
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rb.MT,
                                  style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                  "data-plain-cursor": ek ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": E.intl.string(S.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ed,
                                  onMouseLeave: ec,
                                  onClick: em,
                                  onKeyDown: ef,
                              }),
                              null != A && null == z && null == W ? (0, n.jsx)(rP, { box: rk(A, x, el) }) : null,
                              (0, n.jsx)("div", {
                                  ref: T,
                                  className: rb.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rb.xz,
                                      "data-shown": null != A && null == W && null == z ? "" : void 0,
                                      "data-instant": B ? "" : void 0,
                                      children: (0, n.jsxs)(p.E, {
                                          variant: "text-xs/medium",
                                          className: rb.Ux,
                                          children: [
                                              null == _
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rb.Tl, children: _.kind }),
                                              null == _ || "" === _.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rb.kh, children: [" ", _.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rb.Y,
                                  children: ek
                                      ? (0, n.jsx)(lv.A, { className: rb.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eS
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rb.aZ,
                                        style: { transform: `translate3d(${eS.at.x + 12}px, ${eS.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rb.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == z ? "" : void 0,
                                            children: (0, n.jsxs)(p.E, {
                                                variant: "text-xs/medium",
                                                className: rb.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rb.Tl, children: eS.label.kind }),
                                                    "" === eS.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rb.kh,
                                                              children: [" ", eS.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eN
                                  ? (0, n.jsx)("div", { className: rb.D0, style: rk(eN, x, el), "aria-hidden": !0 })
                                  : null,
                              u.map((e, t) => {
                                  let l = rw(e.target, e.anchor, x, el),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rb.xL,
                                          style: { ...rN(l, x), width: 24, height: 24 },
                                          "aria-label": E.intl.formatToPlainString(S.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ev.iw)(e.target),
                                          }),
                                          "aria-expanded": W?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == z && H(a);
                                          },
                                          onFocus: () => {
                                              null == z && H(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), et(), H(a));
                                          },
                                          children: (0, n.jsx)(rE, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eA
                                  ? null
                                  : (0, n.jsx)(rg, {
                                        at: { x: eA.at.x + 12, y: eA.at.y + 12 },
                                        bounds: x,
                                        kind: eA.label.kind,
                                        value: eA.draft,
                                        canSubmit: null != z && (0, ev.to)(eA.draft),
                                        onChange: (e) => {
                                            null != z && O({ ...z, draft: e });
                                        },
                                        onSubmit: eh,
                                        onDismiss: et,
                                        onUploadFile: eg,
                                        onDeleteFile: ex,
                                        closing: null == z,
                                    }),
                              null != ew && null != W && null != eE
                                  ? (0, n.jsxs)(rC, {
                                        point: eE,
                                        frame: x,
                                        authorId: ew.authorId,
                                        title: (0, ev.iw)(ew.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            W.confirmingRemove ? H({ ...W, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            W.editing || W.confirmingRemove || H(null);
                                        },
                                        children: [
                                            W.editing
                                                ? (0, n.jsx)(rd.f, {
                                                      autoFocus: !0,
                                                      label: E.intl.string(S.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: W.draft,
                                                      maxLength: ev.gq,
                                                      rows: 3,
                                                      onChange: (e) => H({ ...W, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ep());
                                                      },
                                                  })
                                                : (0, n.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rb.aC,
                                                      children: ew.comment,
                                                  }),
                                            (0, nS.zz)(ew, g)
                                                ? (0, n.jsx)("div", {
                                                      className: rb.eB,
                                                      children: W.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rb.nv,
                                                                        children: E.intl.string(S.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: E.intl.string(S.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...W, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: E.intl.string(S.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eb,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: E.intl.string(S.default.ncz32j),
                                                                        onClick: () =>
                                                                            H({
                                                                                ...W,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    W.editing
                                                                        ? (0, n.jsx)(f.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ev.to)(W.draft),
                                                                              text: E.intl.string(S.default.wIeFN0),
                                                                              onClick: ep,
                                                                          })
                                                                        : (0, n.jsx)(f.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: E.intl.string(S.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...W,
                                                                                      editing: !0,
                                                                                      draft: ew.comment,
                                                                                  }),
                                                                          }),
                                                                ],
                                                            }),
                                                  })
                                                : null,
                                        ],
                                    })
                                  : null,
                          ],
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
function rE(e) {
    let { authorId: t } = e,
        l = (0, F.bG)([ea.default], () => ea.default.getUser(t), [t]);
    return (0, n.jsx)(rc.eu, {
        src: null == l ? null : rf.Ay.getUserAvatarURL(l),
        size: rm._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rC(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        v = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rj);
    a.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((l = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (i = Math.max((r = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, r), i)), originX: u.x - s, originY: u.y - o }),
        S = {
            left: k,
            top: w,
            "--custom-vibegrations-card-origin-x": `${N}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: v,
        className: rb.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rb.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rb.ip, children: (0, n.jsx)(rE, { authorId: c }) }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rb.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rb.zI, children: x }),
        ],
    });
}
let rI = 300,
    rM = 2;
function rT(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rR(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rP(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rb.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var r_ = l(11055),
    rL = l(533140),
    rF = l(342667);
function rD(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, frameId: s } = e,
        o = (0, lJ.o4)(null != l && l === r ? t : null),
        u = (0, eV.useHasAnyModalOpen)(),
        d = (0, rL.V0)(s);
    a.useEffect(() => {
        o && d && null != s && (0, rL.c2)(s);
    }, [o, d, s]);
    let [c, m] = a.useState(null);
    a.useEffect(() => {
        if (!o) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            m((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [o, i]);
    let f = o && null != c && !u;
    return (0, ru.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rF.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: o ? E.intl.string(S.default.dIE9zO) : "",
                }),
                f
                    ? (0, n.jsx)("div", {
                          className: rF.o,
                          style: { left: c.left, top: c.top, width: c.width, height: c.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var r$ = l(314116),
    rz = l(364522),
    rO = l(237528),
    rq = l(664121),
    rG = l(95477),
    rU = l(381849),
    rB = l(724401);
function rV(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function rW(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        o = "user" === r ? ["stable"] : ["preview", "stable"],
        [d, h] = a.useState(o[0] ?? "stable"),
        [g, x] = a.useState({ status: "loading" }),
        [v, b] = a.useState(""),
        [j, y] = a.useState(""),
        [k, w] = a.useState({ phase: "idle" }),
        N = "busy" === k.phase,
        [A, C] = a.useState(0),
        I = a.useCallback(() => C((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${d}`;
        return (
            Promise.all([(0, c.DM)(l, d), (0, c.ms)(l, d)])
                .then((l) => {
                    let [n, a] = l;
                    e || x({ status: "loaded", key: t, points: n, window: a, nowMs: Date.now() });
                })
                .catch(() => {
                    e || x({ status: "failed", key: t });
                }),
            () => {
                e = !0;
            }
        );
    }, [l, d, A]);
    let M = "loading" !== g.status && g.key === `${l}|${d}` ? g : { status: "loading" },
        T = a.useCallback(
            (e, t) => {
                (0, r$.A)({
                    title: E.intl.string(S.default.S3WHxG),
                    subtitle:
                        1 === o.length
                            ? E.intl.formatToPlainString(S.default["0lt6bH"], { target: e })
                            : E.intl.formatToPlainString(S.default.zVcDfj, {
                                  environment: E.intl.string(
                                      "preview" === d ? S.default["/kYdZe"] : S.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: E.intl.string(S.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (w({ phase: "busy", environment: d, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (w({
                                              phase: "settled",
                                              environment: d,
                                              tone: "positive",
                                              text: E.intl.string(S.default.kIWqXR),
                                          }),
                                          I())
                                        : "expired" === e.code
                                          ? (w({
                                                phase: "settled",
                                                environment: d,
                                                tone: "danger",
                                                text: E.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                            }),
                                            I())
                                          : "unconfirmed" === e.code
                                            ? (w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: E.intl.string(S.default["2xSPXh"]),
                                              }),
                                              I())
                                            : w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: E.intl.string(S.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    w({
                                        phase: "settled",
                                        environment: d,
                                        tone: "danger",
                                        text: E.intl.string(S.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [d, o, I],
        ),
        R = a.useCallback(() => {
            (w({ phase: "busy", environment: d, kind: "create" }),
                (0, c._m)(l, d, v)
                    .then(() => {
                        (b(""),
                            w({
                                phase: "settled",
                                environment: d,
                                tone: "positive",
                                text: E.intl.string(S.default.mfAoFT),
                            }),
                            I());
                    })
                    .catch(() => {
                        w({ phase: "settled", environment: d, tone: "danger", text: E.intl.string(S.default.uhhqP3) });
                    }));
        }, [l, d, v, I]),
        P = "loaded" === M.status ? M.window : null,
        _ = "loaded" === M.status ? M.nowMs : 0,
        L = P?.earliestRestoreTimestampMs ?? _ - 2592e6,
        F = "" === j ? null : new Date(j).getTime(),
        D = null != F && !Number.isNaN(F) && F >= L && F <= _,
        $ =
            "busy" === k.phase
                ? "restore" === k.kind && k.environment === d
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === k.phase && k.environment === d
                  ? { kind: "notice", tone: k.tone, text: k.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === M.status
                ? (0, n.jsx)("div", { className: rB.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === M.status
                  ? (0, n.jsx)("div", {
                        className: rB.E8,
                        role: "alert",
                        children: (0, n.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default.pwFaXc),
                        }),
                    })
                  : 0 === M.points.length
                    ? (0, n.jsx)("div", {
                          className: rB.E8,
                          children: (0, n.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(rz.Ip, {
                          className: rB.p_,
                          children: (0, n.jsx)("div", {
                              className: rB.jO,
                              children: M.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rU.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rU._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: rB.KW,
                                          children: [
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return E.intl.string(S.default.h4zhWL);
                                                          case "undo":
                                                              return E.intl.string(S.default["c/tNny"]);
                                                          default:
                                                              return E.intl.string(S.default["jViU+0"]);
                                                      }
                                                  })(e.origin),
                                              }),
                                              null != a.relative &&
                                                  (0, n.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: a.absolute ?? void 0,
                                                      children: a.relative,
                                                  }),
                                              e.expired &&
                                                  (0, n.jsx)(rO.v, {
                                                      text: E.intl.string(S.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: rB.AD,
                                                title: E.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rB.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            eA.D,
                                            {
                                                className: rB.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          T(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, c.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        className: rB.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: rB.nd,
            "aria-label": E.intl.string(S.default.FRjicO),
            children: [
                (0, n.jsxs)(u.Ay, {
                    "aria-label": E.intl.string(S.default.FRjicO),
                    toolbar: (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(u.Ay.ChannelIcon, { icon: rq.R, "aria-hidden": !0 }),
                        (0, n.jsx)(u.Ay.Title, { children: E.intl.string(S.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rB.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rB.ne,
                            children: [
                                o.length > 1 &&
                                    (0, n.jsxs)(nq.V, {
                                        selectedItem: d,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (h(e), C(0));
                                        },
                                        "aria-label": E.intl.string(S.default.CNvRyJ),
                                        className: rB.vR,
                                        children: [
                                            (0, n.jsx)(nq.V.Item, {
                                                id: "preview",
                                                children: E.intl.string(S.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(nq.V.Item, {
                                                id: "stable",
                                                children: E.intl.string(S.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        E.intl.formatToPlainString(S.default.l07ism, { days: 30 }),
                                        null != P
                                            ? ` ${new Date(P.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === $.kind
                                    ? (0, n.jsxs)("div", {
                                          className: rB.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  children: E.intl.string(S.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === $.kind
                                      ? (0, n.jsx)("div", {
                                            className: rB.lm,
                                            role: "danger" === $.tone ? "alert" : "status",
                                            children: (0, n.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === $.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: $.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, n.jsxs)("div", {
                            className: rB.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rB.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rB.Fv,
                                            children: (0, n.jsx)(rG.k, {
                                                label: E.intl.string(S.default.hJb78b),
                                                value: v,
                                                onChange: b,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: E.intl.string(S.default["14UarN"]),
                                            onClick: R,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rB._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rB.kv,
                                            children: (0, n.jsx)(rG.k, {
                                                label: E.intl.string(S.default.rI7mpv),
                                                type: "datetime-local",
                                                value: j,
                                                min: rV(L),
                                                max: rV(_),
                                                disabled: N || null == P,
                                                onChange: y,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: E.intl.string(S.default["3D/vYN"]),
                                            disabled: N || !D,
                                            onClick: () => {
                                                null != F && T(new Date(F).toLocaleString(), () => (0, c.dz)(l, d, F));
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var rH = l(406810),
    rQ = l(977628);
function rY(e) {
    let t,
        { projectId: l, onClose: r, onRestore: i } = e,
        [o, d] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, c.ST)(l)
                    .then((t) => {
                        e || d({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || d({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [l]),
        (t =
            "loading" === o.status
                ? (0, n.jsx)("div", { className: rQ.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === o.status
                  ? (0, n.jsx)("div", {
                        className: rQ.E8,
                        role: "alert",
                        children: (0, n.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default["mSJn+K"]),
                        }),
                    })
                  : 0 === o.entries.length
                    ? (0, n.jsx)("div", {
                          className: rQ.E8,
                          children: (0, n.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(rz.Ip, {
                          className: rQ.p_,
                          children: (0, n.jsx)("div", {
                              className: rQ.jO,
                              children: o.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rU.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rU._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      eA.D,
                                      {
                                          className: rQ.f_,
                                          onClick: () =>
                                              (0, r$.A)({
                                                  title: E.intl.string(S.default.qOUOPE),
                                                  subtitle: E.intl.string(S.default.k2JBj5),
                                                  confirmText: E.intl.string(S.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-md/medium",
                                                  className: rQ.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, n.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: l.absolute ?? void 0,
                                                      children: l.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: rQ.nd,
            "aria-label": E.intl.string(S.default.jAWwzi),
            children: [
                (0, n.jsxs)(u.Ay, {
                    "aria-label": E.intl.string(S.default.jAWwzi),
                    toolbar: (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(u.Ay.ChannelIcon, { icon: rH.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(u.Ay.Title, { children: E.intl.string(S.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: rQ.rf, children: t }),
            ],
        })
    );
}
var rK = l(120426),
    rX = l(873727),
    rZ = l(147248),
    rJ = l(418842),
    r0 = l(885386),
    r1 = l(171936),
    r2 = l(796036);
function r3(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: d,
            content: c,
            sidebar: m,
        } = e,
        [f, h] = a.useState(null),
        g = (0, o.A)(l, s),
        x = g?.id ?? null;
    (!(function (e, t) {
        let l = (0, F.bG)([nb.A], () => (0, rX.x4)(nb.A.theme)),
            n = (0, F.bG)([rZ.A], () => rZ.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, F.cf)([tP.Ay], () => ({
                reducedMotion: tP.Ay.useReducedMotion,
                fontScale: (0, rX.U0)(),
                highContrast: tP.Ay.isHighContrastModeEnabled,
                forcedColors: tP.Ay.useForcedColors,
                underlineLinks: tP.Ay.alwaysShowLinkDecorations,
            })),
            d = r0.hH.useSetting(),
            c = (0, rJ.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, rK.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, rX.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rp.W)(n, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, i, t, s, d, e, r, c, u]),
            p = a.useRef(x);
        a.useLayoutEffect(() => {
            p.current = x;
        });
        let v = a.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    ((m.current = !1), f.current || p.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (f.current = !1),
                () => {
                    f.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                v();
            }, [n, v]),
            a.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            a.useLayoutEffect(() => {
                let l = (0, rK.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, rK.F)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0));
            }, [t, e, v]),
            a.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]));
    })(f, x),
        a.useEffect(() => {
            if (null != t) return (0, r1.mn)(t, () => (0, rK.F)(f, x));
        }, [t, f, x]));
    let p = a.useCallback(() => (0, rK.F)(f, x), [f, x]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(eg.Mh, d),
                children: [u, (0, n.jsx)("div", { ref: h, className: eg.fm, children: c })],
            }),
            m,
            (0, n.jsx)(rD, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: p,
                frameId: x,
            }),
            (0, n.jsx)(rS, { projectId: t ?? null, applicationId: l, previewApplicationId: r, resolveIframe: p }),
        ],
    });
}
function r7(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: m,
            chatOpen: f,
            onCloseChat: h,
            chatHeaderAction: g,
            versionHistoryOpen: x = !1,
            restorePointsOpen: p = !1,
            onCloseRestorePoints: v,
            installScope: b = null,
            onCloseVersionHistory: j,
            onRestoreVersion: y,
            debugOpen: k = !1,
            onCloseDebug: w,
            restoreState: N,
            previewReady: A,
            previewGate: C,
            channelMessages: I,
            availability: M,
            activeMode: T,
            widgetApplicationId: R,
        } = e,
        _ = a.useRef(null),
        [L, F] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (o.type === P.U4.MAIN) return ((0, d.HV)(l), () => (0, d.HV)(null));
    }, [l, o.type]),
        a.useEffect(() => {
            null != t && ((0, c.Hc)(t), (0, r2.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            function t() {
                null != e && F(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useEffect(() => () => (0, d.Zq)(0), []));
    let D = Math.max(360, L - 320),
        $ = null != I ? I.open : f,
        z = f || o.type === P.U4.MAIN;
    return (0, n.jsx)("div", {
        ref: _,
        className: eg.LB,
        children: (0, n.jsx)(r3, {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: m,
            mainClassName: null == m ? void 0 : i()(eg.ez, { [eg.zt]: $ }),
            content: (0, n.jsx)(ed, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                previewReady: A,
                previewGate: C,
                availability: M,
                activeMode: T,
                widgetApplicationId: R,
            }),
            sidebar:
                null != I
                    ? (0, n.jsx)(nL, {
                          open: I.open,
                          maxWidth: D,
                          onWidthChange: d.Zq,
                          children: I.open
                              ? (0, n.jsx)(ex, { channel: I.channel, guild: I.guild, onClose: I.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(nL, {
                            open: f,
                            maxWidth: D,
                            onWidthChange: d.Zq,
                            children: (0, n.jsx)("div", {
                                className: eg.cO,
                                children: k
                                    ? (0, n.jsx)(ro, { projectId: t, onClose: w ?? (() => {}) }, t)
                                    : x
                                      ? (0, n.jsx)(
                                            rY,
                                            { projectId: t, onClose: j ?? (() => {}), onRestore: y ?? (() => {}) },
                                            t,
                                        )
                                      : p
                                        ? (0, n.jsx)(rW, { projectId: t, installScope: b, onClose: v ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(r_.A, { projectId: t }),
                                                  (0, n.jsx)(u.Ay, {
                                                      "aria-label": E.intl.string(E.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              g,
                                                              null == h
                                                                  ? null
                                                                  : (0, n.jsx)(u.Ay.Icon, {
                                                                        icon: s.P,
                                                                        tooltip: E.intl.string(S.default.YdgE0j),
                                                                        onClick: h,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(u.Ay.Title, {
                                                          children: E.intl.string(E.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: eg.cb,
                                                      children: (0, n.jsx)(nI, { projectId: t, restoreState: N }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
