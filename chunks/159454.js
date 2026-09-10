n.d(t, { A: () => n8, u: () => n$ });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    d = n(834730),
    c = n(429913),
    u = n(277984),
    g = n(840387),
    m = n(201718),
    x = n(615405),
    f = n(633075),
    h = n(646976),
    p = n(289173),
    I = n(210598),
    j = n(311043),
    A = n(569926),
    E = n(958805),
    v = n(61881),
    S = n(435558),
    C = n(196765),
    b = n(540185),
    k = n(282435);
let T = (0, S.sampleSize)(k.sx, k.sx.length),
    N = (0, C.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !s.has(e)), ...T],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...T],
            }),
            Object.values(b.x)))
                t().setNext(6, l);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let l = t().peekNext(7, n);
            t()._setPeekedGameIds(n, l);
        },
        getNext: (e, n) => {
            let i = n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = i.slice(0, e),
                s = i.slice(e);
            return (t()._setStack(n, s), l);
        },
        peekNext: (e, n) => (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let s = [...i];
            s.splice(l, 1);
            let r = t().getNext(1, n),
                a = t().peekNext(7, n);
            (t()._setGameIds(n, [...s, ...r]), t()._setPeekedGameIds(n, [...a, ...r]));
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                s = t().peekNext(7, n);
            (t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...s, ...l]));
        },
        remove: (e, n) => {
            let i = (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            (t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n)));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === b.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
function y(e) {
    let { bump: t, bumpMultiple: n, gameIds: i } = N();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = N(),
            i = l.useMemo(() => n[e] ?? [], [n, e]);
        (0, A.x)(i);
        let s = (0, a.yK)([j.A], () => i.map((e) => j.A.isFetching(e)));
        l.useEffect(() => {
            for (let n of i) {
                let i = j.A.didFetchingFail(n),
                    l = j.A.hasNoData(n),
                    s = !!j.A.getGame(n),
                    r = null != j.A.getCoverImageUrl(n);
                (i || l || (s && !r)) && t(n, e);
            }
        }, [i, t, e, s]);
    })(e);
    let s = l.useMemo(() => i[e] ?? [], [i, e]),
        r = l.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        o = (0, a.yK)([j.A], () => s.map((e) => j.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = j.A.didFetchingFail(e),
                n = j.A.hasNoData(e),
                i = !!j.A.getGame(e),
                l = null != j.A.getCoverImageUrl(e);
            return t || n || (i && !l);
        });
        t.length > 0 && n(t, e);
    }, [s, e, n, o]);
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: r };
}
var w = n(600761),
    R = n(667049),
    _ = n(389667),
    L = n(520082),
    O = n(869484),
    P = n(315629),
    D = n(465794),
    M = n(450232),
    G = n(287809),
    U = n(158045),
    F = n(735321),
    W = n(623280),
    H = n(939249),
    B = n(375708),
    V = n(954165);
function z(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(H.D, {
        onClick: t,
        className: V.x,
        "aria-expanded": n,
        children: (0, i.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? B.intl.string(B.t["6MwJo/"]) : B.intl.string(B.t.lBeKY2),
        }),
    });
}
var Y = n(43990),
    K = n(241326),
    X = n(33969),
    q = n(866665),
    Z = n(245604),
    J = n(601089);
function Q(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(q.m, {
        text: t,
        children: (0, i.jsxs)(H.D, {
            className: r()(J.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: J.n8 }),
                (0, i.jsx)("div", { className: J.zc, children: (0, i.jsx)(Z.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: J.n8 }),
            ],
        }),
    });
}
var $ = n(448766),
    ee = n(761431),
    et = n(770178);
let en = l.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function ei(e) {
    let { children: t } = e,
        [n, s] = l.useState(!1),
        [r, a] = l.useState(!1),
        [o] = l.useState(() => new Set()),
        d = l.useCallback(
            (e, t) => {
                (t ? o.add(e) : o.delete(e), a(o.size > 0));
            },
            [o],
        ),
        c = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: d }),
            [n, r, d],
        );
    return (0, i.jsx)(en.Provider, { value: c, children: t });
}
function el() {
    return l.useContext(en);
}
var es = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? $.d : $.j,
        { textRef: m, lineClamp: x } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = l.useContext(en),
                s = l.useId(),
                r = l.useRef(null),
                a = l.useCallback(() => {
                    let e = r.current;
                    null != e && i(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, i]);
            return (
                (0, et.g)(r, a, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                l.useEffect(() => () => i(s, !1), [s, i]),
                { textRef: r, lineClamp: n ? void 0 : e }
            );
        })(o, a);
    return (0, i.jsx)(d.E, {
        ref: m,
        className: r()(es.YD, { [es.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: x,
        children: u ? a : g(a),
    });
}
function ea(e) {
    let {
            value: t,
            placeholder: n,
            variant: s,
            color: r,
            onCommit: a,
            maxLength: o,
            maxLines: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, ee.T)({ value: t, onCommit: g }),
        { isExpanded: x } = el(),
        f =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: u }),
        h = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: c || m.isEditing,
            preview: f,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: es.ZZ,
        };
    return 1 === d
        ? (0, i.jsx)(ee.y, { ...h, variant: "compact", textVariant: s })
        : (0, i.jsx)(ee.y, {
              ...h,
              variant: "multiline",
              rows: 1,
              maxRows: m.isInlineSurface && x ? void 0 : d,
              textVariant: s,
          });
}
function eo(e) {
    return e.canEdit
        ? (0, i.jsx)(ea, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(er, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var ed = n(326009),
    ec = n(922016),
    eu = n(22231),
    eg = n(750943),
    em = n(458499);
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(ec.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(em.A, { lastEdit: t, cropAndUpload: s, onChangeImage: r, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(X.Y, {
                ...e,
                ref: n,
                icon: eu.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: B.intl.string(B.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function ef(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, i.jsx)(X.Y, {
              ref: n,
              icon: eg.X,
              variant: "overlay-secondary",
              tooltipText: B.intl.string(B.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(ex, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var eh = n(691540),
    ep = n(857250),
    eI = n(97483),
    ej = n(192308),
    eA = n(765548),
    eE = n(860840),
    ev = n(229531),
    eS = n(515718),
    eC = n(741394),
    eb = n(38405);
function ek(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [d, c] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, eA.A)(a),
        x = l.useCallback(() => {
            ((o.current = o.current + 1), c(null), g(null));
        }, []),
        f = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                c(e);
                try {
                    let [s, r] = await Promise.all([
                        E.A.uploadWidgetAsset(t),
                        eE.default.fromBlob(n).catch(() => void 0),
                    ]);
                    if (o.current !== l) return;
                    (c(null),
                        g({ filename: s, unprocessedFile: n, transform: i }),
                        m({ filename: s, localDataUri: e, originalHash: r }));
                } catch (e) {
                    if (o.current !== l) return;
                    (c(null),
                        (0, eh.P0)((0, ep.o)(B.intl.string(B.t.F4Neqh), eI.Ck.FAILURE)),
                        eb.A.captureException(e));
                }
            },
            [m],
        ),
        h = l.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: s, file: r, transform: a } = e,
                    o = (0, eS.aU)(s);
                o.size > 0xa00000
                    ? (0, eh.P0)((0, ep.o)(B.intl.string(B.t.YbdEFK), eI.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, ev.B)(n) ?? "png"),
                              (l = (0, eC.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          r,
                          a,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, a) => {
                let o = r?.();
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: r } = await Promise.all([
                            n.e("398791"),
                            n.e("655327"),
                            n.e("67702"),
                            n.e("1214"),
                            n.e("858164"),
                            n.e("427032"),
                            n.e("571470"),
                            n.e("50342"),
                            n.e("463726"),
                            n.e("93513"),
                            n.e("779149"),
                            n.e("507406"),
                            n.e("455524"),
                            n.e("90017"),
                            n.e("489908"),
                            n.e("574571"),
                            n.e("750348"),
                        ]).then(n.bind(n, 142630));
                        return (n) =>
                            (0, i.jsx)(r, {
                                ...n,
                                file: l,
                                imageUri: e,
                                uploadType: t,
                                returnRef: s,
                                initialTransform: a,
                                cropAspectRatio: o,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, s, r],
        ),
        previewUri: d,
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var eT = n(652215),
    eN = n(339984),
    ey = n(148548);
function ew() {
    return (0, i.jsx)(Q, {
        label: B.intl.string(B.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: ey.GU,
    });
}
function eR(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        d = l.useRef(null),
        c = l.useRef(null);
    function u(e) {
        (0, F.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== O.K.COVER) return t;
            let i = [...t.sections];
            return ((i[s] = e(n)), new I.Tu({ ...t, sections: i }));
        });
    }
    function g(e) {
        u((t) => ({ ...t, title: e }));
    }
    function m(e) {
        u((t) => ({ ...t, subtitle: e }));
    }
    let x = l.useCallback(() => {
            let e = c.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: f,
            previewUri: h,
            cancelUpload: p,
            getLastEdit: j,
        } = ek({
            uploadType: eN.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function A() {
        (p(), u((e) => ({ ...e, image: void 0 })));
    }
    function E() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, F.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let S = null != h,
        C = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || S,
        k = b || a,
        T = j(n.image);
    return (0, i.jsx)(Y.N, {
        theme: b ? eT.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: c,
                className: r()(ey.kL, { [ey.Vp]: k }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: ey.El,
                              children: [
                                  (0, i.jsx)(ed.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: ey.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && C ? (0, i.jsx)("div", { className: ey.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(X.A, {
                              className: ey.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ef, {
                                            lastEdit: T,
                                            buttonRef: d,
                                            disabled: S,
                                            cropAndUpload: f,
                                            onChangeImage: E,
                                        })
                                      : null,
                                  (0, i.jsx)(X.Y, {
                                      icon: K.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? B.intl.string(B.t.RyK5Ww) : B.intl.string(B.t.g2jVww),
                                      onClick: b ? A : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(ey.hQ, e, { [ey.Vp]: k }),
                        children: [
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: B.intl.string(B.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: n.subtitle,
                                placeholder: B.intl.string(B.t.k8zZFd),
                                onCommit: m,
                                maxLength: 150,
                                maxLines: 3,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
n(321073);
var e_ = n(661531),
    eL = n(603090);
function eO(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(eL.cR, { [eL.mr]: n }),
        children: [
            (0, i.jsx)(eg.X, { size: "xs", color: e_.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: B.intl.string(B.t["9AY+/x"]) }),
        ],
    });
}
function eP(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: d,
            previewUri: c,
            cancelUpload: u,
            getLastEdit: g,
        } = ek({
            uploadType: eN.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eL.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: eL.tF,
                      children: [
                          (0, i.jsx)(ed.A, {
                              className: r()(eL.k9, s ? eL.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: c,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, i.jsx)(X.A, {
                                    className: eL.ij,
                                    children: (0, i.jsx)(X.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: B.intl.string(B.t.RyK5Ww),
                                        onClick: function () {
                                            (u(),
                                                a(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                ));
                                        },
                                        icon: K.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eL.oT,
                children: [
                    (0, i.jsx)(eo, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: B.intl.formatToPlainString(B.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(eo, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: B.intl.formatToPlainString(B.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            s
                ? (0, i.jsxs)(X.A, {
                      className: eL.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(X.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: B.intl.string(B.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eg.X,
                                }),
                          (0, i.jsx)(X.Y, {
                              variant: "overlay-secondary",
                              tooltipText: B.intl.string(B.t.g2jVww),
                              onClick: function () {
                                  o(l.key);
                              },
                              icon: K.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eD(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    function a(e) {
        (0, F.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== O.K.FIELDS) return t;
            let i = [...t.sections];
            return ((i[l] = { ...n, fields: e(n.fields) }), new I.Tu({ ...t, sections: i }));
        });
    }
    function o(e, t) {
        a((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let s = [...n];
            return ((s[i] = t(l)), s);
        });
    }
    function d(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function c() {
        a((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eL.kL, children: (0, i.jsx)(eO, { alwaysVisible: !0, onClick: c }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eP, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: d }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eO, { onClick: c }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: eL.kL, children: u }) : null,
            m
                ? (0, i.jsx)(Q, {
                      label: B.intl.string(B.t.t4vU5I),
                      onClick: function () {
                          a((e) => [...e, (0, I.yL)(), (0, I.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var eM = n(202541),
    eG = n(877068);
let eU = { section: eT.JJy.PERSONAL_WIDGET };
function eF(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eG.wx,
        children: [
            (0, i.jsx)(M.A, { size: "xs", className: eG.nr }),
            (0, i.jsx)(eo, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: B.intl.string(B.t.fjSaAm),
                onCommit: function (e) {
                    (0, F.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eW(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case O.K.COVER:
            return (0, i.jsx)(eR, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case O.K.FIELDS:
            return (0, i.jsx)(eD, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eH() {
    return (0, a.bG)([G.default], () => U.Ay.isPremium(G.default.getCurrentUser(), eM.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eG.hc,
              children: [
                  (0, i.jsx)(P.h, { color: "nitro-pink", className: eG.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eG.LK,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: B.intl.string(B.t.WOPVdz),
                          }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: B.intl.string(B.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(D.A, {
                      size: "sm",
                      subscriptionTier: eM.pe.TIER_2,
                      defaultTextOverride: B.intl.string(B.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eU,
                  }),
              ],
          });
}
function eB() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = el();
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eV(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === O.K.COVER), [t.sections]);
    return (0, i.jsx)(W.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eG.Nr,
        headerClassName: eG.JE,
        children: (0, i.jsxs)("div", {
            className: eG.kL,
            children: [
                (0, i.jsx)(eF, { widget: t, canEdit: d }),
                d && !c ? (0, i.jsx)(ew, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eW, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: c }, t),
                ),
                (0, i.jsx)(eB, {}),
                d ? (0, i.jsx)(eH, {}) : null,
            ],
        }),
    });
}
function ez(e) {
    return (0, i.jsx)(ei, { children: (0, i.jsx)(eV, { ...e }) });
}
var eY = n(702841),
    eK = n(821609),
    eX = n(403581),
    eq = n(307301),
    eZ = n(183555),
    eJ = n(465318),
    eQ = n(384377),
    e$ = n(554146),
    e0 = n(43105),
    e1 = n(131607),
    e8 = n(518477),
    e2 = n(49999);
function e5() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eJ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e1.kn)(e && t ? [e$.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === e$.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e7(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eZ.NJ)();
    return n
        ? (0, i.jsx)(e0.A, {
              targetElementRef: t,
              badge: "beta",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/6eb69edbb7097ad438eaec0f50efb2316dc02df984de7b7423253f599c3e23ce.svg",
              },
              position: "left",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              gradientColor: "nitro-pink",
              title: B.intl.string(B.t.KKGxNt),
              body: B.intl.string(B.t["IS+QTV"]),
              onRequestClose: () => l(e2.i.USER_DISMISS),
              actions: [
                  {
                      text: B.intl.string(B.t.RCy7Px),
                      icon: eX.t,
                      onClick: function () {
                          let e = (0, I.g0)();
                          ((0, F.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eQ.XA)(e8.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var e3 = n(410453);
function e6(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eZ.NJ)(),
        a = l.useCallback(() => {
            n && s(e2.i.TAKE_ACTION);
            let e = (0, I.g0)();
            ((0, F.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eQ.XA)(e8.jM.WIDGET_ADDED));
        }, [r, n, s]);
    return (0, i.jsx)(eK.$, {
        icon: eX.t,
        text: B.intl.string(B.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e4(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eZ.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = e5(),
        g = (function () {
            let e = (0, eY.bG)([G.default], () => G.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eJ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            (c && u(e2.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("962982"), n.e("422420"), n.e("264707")]).then(
                            n.bind(n, 480142),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s, c, u]);
    return (0, i.jsxs)("div", {
        className: r()(e3.w, t),
        children: [
            (0, i.jsx)(d.E, {
                className: e3.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: B.intl.string(B.t.OYlggR),
            }),
            g ? (0, i.jsx)(e6, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eK.$, {
                icon: eq.j,
                text: B.intl.string(B.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e7, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var e9 = n(192),
    te = n(172218),
    tt = n(408278),
    tn = n(499373),
    ti = n(775602),
    tl = n(793574),
    ts = n(734066),
    tr = n(111994),
    ta = n(280450),
    to = n(321191);
function td(e) {
    return (0, a.bG)(
        [ta.default, to.A],
        () => (to.A.getUserProfile(ta.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var tc = n(314531);
n(926675);
var tu = n(305866),
    tg = n(123181),
    tm = n(229087),
    tx = n(753437),
    tf = n(382701),
    th = n(630900);
function tp(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        c = l.useMemo(() => n?.filter((e) => null != (0, tx.W3)(e)) ?? [], [n]),
        u = c.length > 0,
        g = o && c.length < 20,
        { trackUserProfileEditAction: m } = (0, eZ.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        p = l.useRef(null),
        I = l.useRef(null),
        [j, A] = l.useState(c.length),
        [E, v] = l.useState(!1),
        [S, C] = l.useState(!1),
        k = E || S;
    (l.useEffect(() => {
        a(k);
    }, [k, a]),
        l.useEffect(() => () => a(!1), [a]));
    let T = l.useCallback(
            (e, n) => {
                ((0, F.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        N = l.useCallback(() => {
            (C(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: b.x.CLIPS_GALLERY }));
        }, [m]),
        y = l.useCallback(() => C(!1), []),
        w = l.useCallback(
            (e) => {
                ((0, F.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        R = l.useCallback(() => {
            if (E) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === c.length) return void A(c.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = c.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(c.length, i)) return void A(c.length);
            let r = i - (n + 4),
                a = 0;
            for (; a < c.length && s(a + 1, r);) a++;
            A(a);
        }, [c, E]);
    (0, et.g)(x, R);
    let _ = c.length - j,
        L = _ > 0,
        O = l.useCallback(
            (e) => {
                (1 === _ && v(!1), w(e));
            },
            [w, _],
        );
    return u || g
        ? (0, i.jsxs)("div", {
              className: th.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: th.xP,
                      "aria-hidden": !0,
                      children: [
                          c.map((e) =>
                              (0, i.jsx)(
                                  tm.A,
                                  {
                                      tag: e,
                                      variant: "filled",
                                      onRemove: o ? () => {} : void 0,
                                      ref: (t) => {
                                          null != t && f.current.set(e, t);
                                      },
                                  },
                                  e,
                              ),
                          ),
                          (0, i.jsx)("li", {
                              className: th.lv,
                              ref: h,
                              children: (0, i.jsx)(d.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${c.length}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, i.jsx)("ul", {
                          className: th.nM,
                          "aria-label": B.intl.string(B.t["4Rq3a7"]),
                          children: c
                              .slice(0, j)
                              .map((e) =>
                                  (0, i.jsx)(tm.A, { tag: e, variant: "filled", onRemove: o ? () => w(e) : void 0 }, e),
                              ),
                      }),
                  L &&
                      (0, i.jsx)(tI, {
                          buttonRef: p,
                          numHidden: _,
                          isOpen: E,
                          onOpenChange: v,
                          disableInteraction: r,
                          children: c.map((e) =>
                              (0, i.jsx)(tm.A, { tag: e, className: th.Hl, onRemove: o ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, i.jsx)(tg.A, { tags: c, onTagsChange: T, onOpen: N, onClose: y, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tI(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = B.intl.string(B.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${th.lv} ${tf.r9}`,
              ref: t,
              children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(ec.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, i.jsx)(tu.l, {
                      className: th.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: th.ns, children: a }),
                  }),
              children: (e) =>
                  (0, i.jsx)(q.m, {
                      text: o,
                      ariaHidden: !0,
                      children: (0, i.jsx)(H.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": o,
                          "aria-expanded": l,
                          className: th.lv,
                          children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tj = n(3026);
n(600253);
var tA = n(936026);
function tE(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tA.Qw, { [tA.qf]: n }),
        children: (0, i.jsx)(tj.A, { children: t }),
    });
}
function tv(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eZ.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, F.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        d = (0, ee.T)({ value: n, onCommit: o }),
        { isEditing: c } = d,
        u = B.intl.string(B.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(c);
        }, [c, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(ee.y, {
            ...d,
            variant: "compact",
            removeVerticalPadding: !0,
            className: r()(tA.ZZ, { [tA.Dy]: d.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tA.$, tA.TG),
                children: [
                    (0, i.jsx)(eu.PencilIcon, { size: "xxs", color: "currentColor", className: tA.wz }),
                    "" === n.trim() ? (0, i.jsx)(tE, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tE, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: B.intl.string(B.t.PDnM11),
            label: B.intl.string(B.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tS(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(tv, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tA.$, children: (0, i.jsx)(tE, { value: n ?? "" }) })
        : null;
}
var tC = n(663341),
    tb = n(451395),
    tk = n(823016),
    tT = n(765178),
    tN = n(282988);
function ty(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eZ.NJ)(),
        r = B.intl.string(B.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(tt.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, F.mC)(t),
                        null != n && (0, tN.UE)(n),
                        tT.O.announce(B.intl.string(B.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
                },
            }),
        }),
    });
}
var tw = n(233002);
function tR(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tk.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tw.Vs, { [tw.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": B.intl.formatToPlainString(B.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tc.A, { item: t, ringSize: "sm", className: tw.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tb.jV, { buttonRef: d(t.key), className: tw.BU }),
                            (0, i.jsx)(ty, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tw.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tw.NI,
        children: g
            ? (0, i.jsx)(tb.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": B.intl.formatToPlainString(B.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: F.N5,
                  onEnd: () => c(t.key),
                  className: tw.oE,
                  dropBeforeClassName: tw.A,
                  dropAfterClassName: tw.Ze,
                  draggingClassName: tw.Id,
                  children: m,
              })
            : m,
    });
}
function t_(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tw.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tR, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tw.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tw.Yn,
                                    "aria-label": B.intl.string(B.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tC.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tk.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tL = n(729475),
    tO = n(358618),
    tP = n(983851);
function tD(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = B.intl.string(B.t.OIDkcp),
        r = B.intl.string(t ? B.t.YqAjXy : B.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(tt.K, {
                    "aria-label": s,
                    icon: tL.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(q.m, {
                text: r,
                ariaHidden: !0,
                children: (0, i.jsx)(tt.K, {
                    "aria-label": r,
                    icon: t ? tO._ : tP.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tM = n(798108),
    tG = n(789645),
    tU = n(297264),
    tF = n(915089),
    tW = n(772168);
function tH(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tF.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tW.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tW.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tW.r,
                        "aria-label": B.intl.string(B.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tG.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tU.D, {
                        id: s,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: B.intl.string(B.t.zMUr6Z),
                    }),
                ],
            }),
            n,
        ],
    });
}
var tB = n(335978);
function tV(e) {
    let { clip: t } = e,
        n = B.intl.formatToPlainString(B.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            (0, tN._A)(t, [tl.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tB.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tB.xn, loading: "lazy" }),
                (0, i.jsx)(tC.PlusLargeIcon, { size: "sm", color: "currentColor", className: tB.Xv }),
            ],
        }),
    });
}
function tz(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tH, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tB.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tB.NI, children: (0, i.jsx)(tV, { clip: e }) }, e.id)),
        }),
    });
}
var tY = n(769015),
    tK = n(202163);
function tX(e) {
    let { gameId: t, className: n } = e,
        { gameRecord: l } = (0, tK.A)(t),
        s = l?.name;
    return null == s
        ? null
        : (0, i.jsx)(q.m, {
              text: s,
              ariaHidden: !0,
              children: (0, i.jsx)("div", {
                  className: n,
                  children: (0, i.jsx)(tY.A, { game: l, size: tY.M.XSMALL, allowUnknownGameIcon: !1 }),
              }),
          });
}
var tq = n(558285),
    tZ = n(608857),
    tJ = n(915725),
    tQ = n(409067),
    t$ = n(696016),
    t0 = n(716112);
function t1(e) {
    let { onClick: t } = e,
        n = B.intl.string(B.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(tt.K, { variant: "secondary", size: "sm", icon: tn.T, "aria-label": n, onClick: t }),
    });
}
function t8() {
    return (0, i.jsx)("div", {
        className: t0.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: B.intl.format(B.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function t2(e) {
    let t,
        s,
        r,
        { widget: o, user: d, allowEditing: c, disableInteraction: u, ...g } = e,
        [m, x] = l.useState(null),
        [f, h] = l.useState(!1),
        [p, I] = l.useState(!1),
        [j, A] = l.useState(!0),
        E = (0, a.bG)([ti.Ay], () => ti.Ay.useReducedMotion),
        v = (0, te.K)(I, 0.5),
        [S, C] = l.useState(!1),
        [b, k] = l.useState(!1),
        T = l.useRef(void 0),
        N = (0, tZ.A)(o),
        y =
            ((t = (0, a.yK)([tJ.Ay], () => Object.values(tJ.Ay.getClips()))),
            (s = (0, a.bG)([tJ.Ay], () => tJ.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tN.UQ)()),
            l.useMemo(() => {
                let e = new Set(r.keys());
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, tQ.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        w = (0, ts.sw)(),
        R = c && !0 !== u,
        _ = 0 === N.length,
        L = N.length >= 4,
        O = R && w && !L,
        P = R || N.length > 1,
        [D] = l.useState(() => y.length >= 3),
        [M, G] = l.useState(!1),
        U = td(o.type),
        V = O && !U && D && !M && y.length > 0,
        z = l.useCallback(() => G(!0), []),
        Y = N.find((e) => e.key === m) ?? N[0],
        K = l.useMemo(() => (!0 === u ? [] : N.filter(tZ.K)), [N, u]),
        X = null != Y ? K.findIndex((e) => e.key === Y.key) : -1,
        q = l.useCallback(() => {
            X < 0 || (0, tq.A)({ clips: K, startingIndex: X });
        }, [K, X]),
        Z = l.useCallback(() => A((e) => !e), []),
        J = l.useCallback(() => {
            if (X < 0) return;
            let e = K[(X + 1) % K.length];
            null != e && x(e.key);
        }, [K, X]),
        Q = (X >= 0 && !E && p) || f,
        $ = l.useCallback(() => {
            T.current = window.setTimeout(() => h(!0), 150);
        }, []),
        ee = l.useCallback(() => {
            (window.clearTimeout(T.current), h(!1));
        }, []);
    l.useEffect(() => () => window.clearTimeout(T.current), []);
    let et = l.useCallback(() => {
        (0, ej.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("440065"),
                    n.e("251714"),
                    n.e("860350"),
                    n.e("180644"),
                    n.e("821717"),
                    n.e("269714"),
                    n.e("19385"),
                    n.e("398104"),
                    n.e("553829"),
                    n.e("606859"),
                    n.e("865257"),
                    n.e("318196"),
                    n.e("323079"),
                    n.e("437655"),
                    n.e("430877"),
                    n.e("48055"),
                    n.e("808915"),
                    n.e("586467"),
                    n.e("875842"),
                    n.e("883952"),
                    n.e("858337"),
                    n.e("3131"),
                    n.e("918024"),
                    n.e("220287"),
                    n.e("324761"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("8563"),
                    n.e("647177"),
                    n.e("169201"),
                    n.e("111527"),
                    n.e("496268"),
                    n.e("127272"),
                    n.e("621573"),
                    n.e("466147"),
                    n.e("838090"),
                    n.e("122266"),
                    n.e("501962"),
                    n.e("901922"),
                    n.e("583518"),
                    n.e("237715"),
                    n.e("974049"),
                    n.e("280559"),
                    n.e("895008"),
                    n.e("352566"),
                    n.e("489492"),
                    n.e("689160"),
                    n.e("231782"),
                    n.e("520342"),
                    n.e("771453"),
                    n.e("194676"),
                ]).then(n.bind(n, 671884));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        initialMainLink: tr.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            (((e) => (0, tN._A)(e, [tl.A.USER_PROFILE_MODAL_V2]))(e), t.onClose());
                        },
                    });
            },
            { modalKey: t$.nm },
        );
    }, []);
    return (0, i.jsx)(W.A, {
        userId: d.id,
        widget: o,
        allowEditing: c,
        disableInteraction: u,
        headerTitle: (0, F.L)(o),
        headerActionButtons: O && _ ? [(0, i.jsx)(t1, { onClick: et }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            V && (0, i.jsx)("div", { className: t0.$k, children: (0, i.jsx)(tz, { clips: y, onDismiss: z }) }),
        ...g,
        children:
            null != Y
                ? (0, i.jsxs)("div", {
                      className: t0.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: v,
                              className: t0.aM,
                              onMouseEnter: $,
                              onMouseLeave: ee,
                              children: [
                                  (0, i.jsx)(tc.A, {
                                      item: Y,
                                      ringSize: "lg",
                                      isPlaying: Q,
                                      isMuted: j,
                                      fit: "contain",
                                      onEnded: K.length > 1 ? J : void 0,
                                      className: t0.VH,
                                  }),
                                  X >= 0 &&
                                      !S &&
                                      !b &&
                                      (0, i.jsx)(H.D, {
                                          className: t0.Hf,
                                          "aria-label": B.intl.string(B.t.CscLHM),
                                          onClick: q,
                                      }),
                                  ("saved" === Y.status || "pending" === Y.status) &&
                                      (0, i.jsx)(tX, { gameId: Y.gameId, className: t0.AT }),
                                  R
                                      ? ("saved" === Y.status || "pending" === Y.status) &&
                                        (0, i.jsx)("div", {
                                            className: t0.nP,
                                            children: (0, i.jsx)(ty, {
                                                widgetClipId: Y.key,
                                                localClipId: "pending" === Y.status ? Y.localClipId : void 0,
                                            }),
                                        })
                                      : X >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: t0.nP,
                                            children: (0, i.jsx)(tD, { isMuted: j, onToggleMuted: Z, onFullscreen: q }),
                                        }),
                                  (0, i.jsx)(tM.A, {
                                      children:
                                          ("saved" === Y.status || "pending" === Y.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tS, {
                                                      clipId: Y.key,
                                                      title: Y.title,
                                                      allowEditing: R,
                                                      onEditingChange: C,
                                                  }),
                                                  (0, i.jsx)(tp, {
                                                      clipId: Y.key,
                                                      tags: Y.tags,
                                                      allowEditing: c,
                                                      disableInteraction: u,
                                                      onEditingChange: k,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          P &&
                              (0, i.jsx)(t_, {
                                  items: N,
                                  selectedKey: Y.key,
                                  onSelect: x,
                                  onAddClip: O ? et : void 0,
                                  allowEditing: R,
                              }),
                      ],
                  })
                : (0, i.jsx)(t8, {}),
    });
}
var t5 = n(704824),
    t7 = n(382483),
    t3 = n(385113),
    t6 = n(334074),
    t4 = n(657718),
    t9 = n(478016);
function ne(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eZ.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, F.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eQ.XA)(e8.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, i.jsx)(L.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(L.A.Cta, {
            showSuggestedForYou: !0,
            heading: B.intl.format(B.t.OIzLCy, { applicationName: n.name }),
            content: B.intl.format(B.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.m, {
                        text: B.intl.string(B.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t4.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tG.P,
                            "aria-label": B.intl.string(B.t.WAI6xu),
                            onClick: () => {
                                s(e2.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: B.intl.string(B.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t4.S, {
                            variant: "primary",
                            size: "sm",
                            icon: t9.U,
                            "aria-label": B.intl.formatToPlainString(B.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (s(e2.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function nt() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([t3.A], () => t3.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, t7.Wq)();
        }, []);
        let t = (0, a.bG)([G.default], () => G.default.getCurrentUser()),
            n = (0, c.A)(e),
            { tokens: i, fetched: s } = (0, t5.j)(e),
            r = (0, R.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, r],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, t6.hj)({
                applications: d,
                dismissibleContent: e$.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: t6.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(ne, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var nn = n(128988),
    ni = n(896170),
    nl = n(453318),
    ns = n(321108),
    nr = n(383329),
    na = n(67710);
function no(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eZ.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, nr.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, ns.A)(h),
        j = l.useCallback(
            (e) => {
                ((0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    tT.O.announce(B.intl.string(B.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.());
            },
            [t, d, s, h, p],
        ),
        A = l.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = I.filter((e) => !o.has(e.id) && (0, F.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [m, o, I, f]),
        E = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...x, threshold: ni.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, ni.Ht)(A, e, v).length), [f, A, v]),
        C = l.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    u(n),
                    (g.current = n));
            },
            [c, d, t, S],
        );
    return (0, i.jsx)(ec.Y, {
        ...a,
        onRequestOpen: () => {
            (d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = ""));
        },
        onRequestClose: () => {
            d({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: S(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tu.l, {
                className: na.C,
                "aria-label": B.intl.string(B.t.uqw8wK),
                children: (0, i.jsxs)(nl.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: v,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, i.jsx)(nl.a3, {
                            label: B.intl.string(B.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: B.intl.string(B.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, i.jsx)(nl.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function nd(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(no, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: B.intl.string(B.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(tt.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: tn.T,
                    "aria-label": B.intl.string(B.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function nc(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(no, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: na.c,
                "aria-label": B.intl.string(B.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tC.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let nu = l.createContext(null);
function ng(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.bG)([v.A], () => {
            let e = v.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, F.cv)(t);
            return n.games.length > i;
        }),
        [r, o] = l.useState(s);
    return (0, i.jsx)(nu.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function nm() {
    let e = l.useContext(nu);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var nx = n(67438);
function nf(e) {
    let { widget: t } = e,
        n = (0, F.cv)(t.type),
        l = 1 === n,
        s = l ? B.intl.string(B.t["3FdPBT"]) : B.intl.format(B.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? nx.O : nx.k,
        children: [
            l && (0, i.jsx)(nc, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nh = n(683071),
    np = n(312252);
function nI(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, F.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: np.l,
              children: (0, i.jsx)(nh.w, {
                  type: "warning",
                  children: B.intl.formatToPlainString(B.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nj = n(943793),
    nA = n(148420);
function nE(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tk.r)();
    return (0, i.jsx)("ul", {
        className: nA.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nj.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: l,
                        coverRef: r(e.gameId),
                        onRemoveGame: a,
                        ...s,
                    }),
                },
                e.gameId,
            ),
        ),
    });
}
function nv(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e9.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nm(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nE, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nI, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tk.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nS(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nv, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nf, { widget: n }),
    });
}
function nC(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = n.games[0];
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, i.jsx)(nj.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nf, { widget: n }),
    });
}
var nb = n(793693);
function nk(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nb.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nT = n(686246),
    nN = n(201438),
    ny = n(788593),
    nw = n(858808),
    nR = n(365611),
    n_ = n(900850);
function nL(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tk.r)(),
        c = l.useRef(null);
    return (0, i.jsx)(tb.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": B.intl.formatToPlainString(B.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: n_.kL,
        dropBeforeClassName: n_.A,
        dropAfterClassName: n_.Ze,
        draggingClassName: n_.Id,
        children: (0, i.jsx)("div", { ref: c, className: n_.An, children: o }),
    });
}
function nO(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, nN.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tk.r)(),
        x = s && !r,
        { isDragging: f } = (0, nT.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ny.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : nR.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, i.jsx)(tb.jV, { buttonRef: m(t.gameId), className: n_.BU }),
                x && (0, i.jsx)(nw.A, { game: t, widgetType: l, className: n_.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nR.mD })
        : x
          ? (0, i.jsx)(nL, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: n_.kL, children: h() });
}
function nP(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tk.r)();
    return (0, i.jsx)(nk, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nO, {
                index: t,
                game: e,
                userId: n,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function nD(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e9.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nm(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nP, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nI, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tk.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nM(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nD, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nf, { widget: n }),
    });
}
function nG(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nD, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nf, { widget: n }),
    });
}
var nU = n(875620);
function nF(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nN.A)(t),
        d = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        c = B.intl.formatToPlainString(B.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: nR.mD })
        : (0, i.jsx)(q.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nU.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(ny.A, {
                          className: nU.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tC.PlusLargeIcon, { size: "md", className: nU.Xv, color: e_.A.colors.WHITE }),
                  ],
              }),
          });
}
function nW(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = y(n),
        { setExpanded: o } = nm(),
        { trackUserProfileEditAction: d } = (0, eZ.NJ)(),
        c = l.useCallback(
            (e) => {
                (a(e),
                    o(!0),
                    (0, F.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [a, n, d, o],
        );
    return (0, i.jsx)(tH, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nU.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nF, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nH = n(870961);
function nB(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nC, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nS, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nG, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nM, { widget: t, ...n });
        default:
            return null;
    }
}
function nV(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...a } = e,
        { setExpanded: o } = nm(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = l.useState(!1),
                i = td(e.type),
                s = (0, F.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !s,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = s && !r,
        g = u && d,
        m = (0, F.L)(t),
        x = (0, F.FM)(t, { showEditingControls: u }),
        f = (0, F.uA)(t),
        h = 1 === (0, F.cv)(t.type);
    return (0, i.jsx)(nB, {
        widget: t,
        user: n,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: m,
        headerSubtitle: x,
        headerActionButtons:
            u && !h
                ? [
                      (0, i.jsx)(
                          nd,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => o(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, i.jsx)(nW, { userId: n.id, widgetType: t.type, onDismiss: c, className: nH.r }),
        ...a,
    });
}
function nz(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(ng, { widgetType: t.type, children: (0, i.jsx)(nV, { widget: t, ...n }) });
}
var nY = n(669253),
    nK = n(483708),
    nX = n(96173),
    nq = n(788259),
    nZ = n(269507);
function nJ(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eZ.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([to.A], () => to.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e5(!c),
        m = (0, nX.A)();
    return (
        l.useEffect(() => {
            r.current || c || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, n]),
        (0, i.jsxs)("div", {
            className: nZ.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nZ.FS,
                    children: [
                        (0, i.jsx)(tU.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: B.intl.string(B.t["oqalC+"]),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? B.intl.string(B.t["+W59o5"]) : B.intl.string(B.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, i.jsx)("ul", {
                        className: nZ.ZW,
                        "aria-label": B.intl.string(B.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nq.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, i.jsx)(e7, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nQ = n(366209);
function n$(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(L.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(ez, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nz, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(t2, { widget: t, ...n })
              : null;
}
function n0() {
    return (0, i.jsxs)("div", {
        className: nQ.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: B.intl.string(B.t["7blcz6"]) }),
        ],
    });
}
function n1(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, _.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                n = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, u.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        h = 0 === r.length && o,
        I = l.useMemo(() => r.filter(p.fu), [r]),
        j = l.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function A() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(e4, { className: nQ.cG }), d && (0, i.jsx)(n0, {}), (0, i.jsx)(nt, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        n$,
                        { widget: e, user: t, guildId: n, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [n, i, s, r] = (0, a.yK)([v.A], () => [
                v.A.suggestedFetchAttempted,
                v.A.suggestedFetchError,
                v.A.suggestedGameIds,
                v.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = N();
        l.useEffect(() => {
            !n && e && E.A.fetchSuggestedGames();
        }, [n, e]);
        let d = n && !r;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, I),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, i.jsx)(nJ, { userId: t.id })
        : o
          ? (0, i.jsx)(e9.D, { children: A() })
          : A();
}
function n8(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, nY.k)(t.id);
    return (0, i.jsxs)(nK.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nQ.XG, { [nQ.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(nn.A, { scrollerRef: s }), (0, i.jsx)(n1, { user: t, ...n })],
    });
}
