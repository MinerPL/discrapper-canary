n.d(t, { A: () => n1, u: () => nQ });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    c = n(834730),
    d = n(429913),
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
    T = n(282435);
let k = (0, S.sampleSize)(T.sx, T.sx.length),
    N = (0, C.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !s.has(e)), ...k],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...k],
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
            return t()._setStack(n, s), l;
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
            t()._setGameIds(n, [...s, ...r]), t()._setPeekedGameIds(n, [...a, ...r]);
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                s = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...s, ...l]);
        },
        remove: (e, n) => {
            let i = (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n));
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
    let c = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: c, onAddGame: r };
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
        children: (0, i.jsx)(c.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? B.intl.string(B.t["6MwJo/"]) : B.intl.string(B.t.lBeKY2),
        }),
    });
}
var K = n(43990),
    Y = n(241326),
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
        c = l.useCallback(
            (e, t) => {
                t ? o.add(e) : o.delete(e), a(o.size > 0);
            },
            [o],
        ),
        d = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: c }),
            [n, r, c],
        );
    return (0, i.jsx)(en.Provider, { value: d, children: t });
}
var el = n(892572);
function es(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: d = !0, disableMarkdown: u = !1 } = e,
        g = d ? $.d : $.j,
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
    return (0, i.jsx)(c.E, {
        ref: m,
        className: r()(el.YD, { [el.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: x,
        children: u ? a : g(a),
    });
}
function er(e) {
    let {
            value: t,
            placeholder: n,
            variant: s,
            color: r,
            onCommit: a,
            maxLength: o,
            maxLines: c,
            growWidth: d,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, ee.T)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(es, { interactive: !1, variant: s, color: r, value: t, maxLines: c, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: d || m.isEditing,
            preview: x,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: el.ZZ,
        };
    return 1 === c
        ? (0, i.jsx)(ee.y, { ...f, variant: "compact", textVariant: s })
        : (0, i.jsx)(ee.y, { ...f, variant: "multiline", rows: 1, maxRows: c, textVariant: s });
}
function ea(e) {
    return e.canEdit
        ? (0, i.jsx)(er, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(es, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var eo = n(326009),
    ec = n(922016),
    ed = n(22231),
    eu = n(750943),
    eg = n(458499);
function em(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(ec.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(eg.A, { lastEdit: t, cropAndUpload: s, onChangeImage: r, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(X.Y, {
                ...e,
                ref: n,
                icon: ed.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: B.intl.string(B.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, i.jsx)(X.Y, {
              ref: n,
              icon: eu.X,
              variant: "overlay-secondary",
              tooltipText: B.intl.string(B.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(em, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var ef = n(691540),
    eh = n(857250),
    ep = n(97483),
    eI = n(192308),
    ej = n(765548),
    eA = n(860840),
    eE = n(229531),
    ev = n(515718),
    eS = n(741394),
    eC = n(38405);
function eb(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [c, d] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, ej.A)(a),
        x = l.useCallback(() => {
            (o.current = o.current + 1), d(null), g(null);
        }, []),
        f = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                d(e);
                try {
                    let [s, r] = await Promise.all([
                        E.A.uploadWidgetAsset(t),
                        eA.default.fromBlob(n).catch(() => void 0),
                    ]);
                    if (o.current !== l) return;
                    d(null),
                        g({ filename: s, unprocessedFile: n, transform: i }),
                        m({ filename: s, localDataUri: e, originalHash: r });
                } catch (e) {
                    if (o.current !== l) return;
                    d(null), (0, ef.P0)((0, eh.o)(B.intl.string(B.t.F4Neqh), ep.Ck.FAILURE)), eC.A.captureException(e);
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
                    o = (0, ev.aU)(s);
                o.size > 0xa00000
                    ? (0, ef.P0)((0, eh.o)(B.intl.string(B.t.YbdEFK), ep.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, eE.B)(n) ?? "png"),
                              (l = (0, eS.kh)(t)),
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
                (0, eI.openModalLazy)(
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
        previewUri: c,
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var eT = n(652215),
    ek = n(339984),
    eN = n(148548);
function ey() {
    return (0, i.jsx)(Q, {
        label: B.intl.string(B.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: eN.GU,
    });
}
function ew(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        c = l.useRef(null),
        d = l.useRef(null);
    function u(e) {
        (0, F.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== O.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new I.Tu({ ...t, sections: i });
        });
    }
    function g(e) {
        u((t) => ({ ...t, title: e }));
    }
    function m(e) {
        u((t) => ({ ...t, subtitle: e }));
    }
    let x = l.useCallback(() => {
            let e = d.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: f,
            previewUri: h,
            cancelUpload: p,
            getLastEdit: j,
        } = eb({
            uploadType: ek.HL.PERSONAL_WIDGET_COVER,
            returnRef: c,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function A() {
        p(), u((e) => ({ ...e, image: void 0 }));
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
        T = b || a,
        k = j(n.image);
    return (0, i.jsx)(K.N, {
        theme: b ? eT.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: d,
                className: r()(eN.kL, { [eN.Vp]: T }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eN.El,
                              children: [
                                  (0, i.jsx)(eo.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: eN.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && C ? (0, i.jsx)("div", { className: eN.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(X.A, {
                              className: eN.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ex, {
                                            lastEdit: k,
                                            buttonRef: c,
                                            disabled: S,
                                            cropAndUpload: f,
                                            onChangeImage: E,
                                        })
                                      : null,
                                  (0, i.jsx)(X.Y, {
                                      icon: Y.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? B.intl.string(B.t.RyK5Ww) : B.intl.string(B.t.g2jVww),
                                      onClick: b ? A : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(eN.hQ, e, { [eN.Vp]: T }),
                        children: [
                            (0, i.jsx)(ea, {
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
                            (0, i.jsx)(ea, {
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
var eR = n(661531),
    e_ = n(603090);
function eL(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(e_.cR, { [e_.mr]: n }),
        children: [
            (0, i.jsx)(eu.X, { size: "xs", color: eR.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", children: B.intl.string(B.t["9AY+/x"]) }),
        ],
    });
}
function eO(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: c,
            previewUri: d,
            cancelUpload: u,
            getLastEdit: g,
        } = eb({
            uploadType: ek.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: e_.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: e_.tF,
                      children: [
                          (0, i.jsx)(eo.A, {
                              className: r()(e_.k9, s ? e_.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: d,
                              cropAndUpload: c,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, i.jsx)(X.A, {
                                    className: e_.ij,
                                    children: (0, i.jsx)(X.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: B.intl.string(B.t.RyK5Ww),
                                        onClick: function () {
                                            u(),
                                                a(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                );
                                        },
                                        icon: Y.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e_.oT,
                children: [
                    (0, i.jsx)(ea, {
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
                    (0, i.jsx)(ea, {
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
                      className: e_.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(X.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: B.intl.string(B.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eu.X,
                                }),
                          (0, i.jsx)(X.Y, {
                              variant: "overlay-secondary",
                              tooltipText: B.intl.string(B.t.g2jVww),
                              onClick: function () {
                                  o(l.key);
                              },
                              icon: Y.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eP(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    function a(e) {
        (0, F.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== O.K.FIELDS) return t;
            let i = [...t.sections];
            return (i[l] = { ...n, fields: e(n.fields) }), new I.Tu({ ...t, sections: i });
        });
    }
    function o(e, t) {
        a((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let s = [...n];
            return (s[i] = t(l)), s;
        });
    }
    function c(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function d() {
        a((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: e_.kL, children: (0, i.jsx)(eL, { alwaysVisible: !0, onClick: d }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eO, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: c }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eL, { onClick: d }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: e_.kL, children: u }) : null,
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
var eD = n(202541),
    eM = n(877068);
let eG = { section: eT.JJy.PERSONAL_WIDGET };
function eU(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eM.wx,
        children: [
            (0, i.jsx)(M.A, { size: "xs", className: eM.nr }),
            (0, i.jsx)(ea, {
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
function eF(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case O.K.COVER:
            return (0, i.jsx)(ew, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case O.K.FIELDS:
            return (0, i.jsx)(eP, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eW() {
    return (0, a.bG)([G.default], () => U.Ay.isPremium(G.default.getCurrentUser(), eD.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eM.hc,
              children: [
                  (0, i.jsx)(P.h, { color: "nitro-pink", className: eM.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eM.LK,
                      children: [
                          (0, i.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: B.intl.string(B.t.WOPVdz),
                          }),
                          (0, i.jsx)(c.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: B.intl.string(B.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(D.A, {
                      size: "sm",
                      subscriptionTier: eD.pe.TIER_2,
                      defaultTextOverride: B.intl.string(B.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eG,
                  }),
              ],
          });
}
function eH() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(en);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eB(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        c = s && !0 !== r,
        d = l.useMemo(() => t.sections.some((e) => e.type === O.K.COVER), [t.sections]);
    return (0, i.jsx)(W.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eM.Nr,
        headerClassName: eM.JE,
        children: (0, i.jsxs)("div", {
            className: eM.kL,
            children: [
                (0, i.jsx)(eU, { widget: t, canEdit: c }),
                c && !d ? (0, i.jsx)(ey, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eF, { userId: n.id, section: e, sectionIndex: t, canEdit: c, hasCoverSection: d }, t),
                ),
                (0, i.jsx)(eH, {}),
                c ? (0, i.jsx)(eW, {}) : null,
            ],
        }),
    });
}
function eV(e) {
    return (0, i.jsx)(ei, { children: (0, i.jsx)(eB, { ...e }) });
}
var ez = n(702841),
    eK = n(821609),
    eY = n(403581),
    eX = n(307301),
    eq = n(183555),
    eZ = n(465318),
    eJ = n(384377),
    eQ = n(554146),
    e$ = n(43105),
    e0 = n(131607),
    e1 = n(518477),
    e8 = n(49999);
function e2() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eZ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e0.kn)(e && t ? [eQ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === eQ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e7(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)();
    return n
        ? (0, i.jsx)(e$.A, {
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
              onRequestClose: () => l(e8.i.USER_DISMISS),
              actions: [
                  {
                      text: B.intl.string(B.t.RCy7Px),
                      icon: eY.t,
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, F.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eJ.XA)(e1.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e5 = n(410453);
function e3(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useCallback(() => {
            n && s(e8.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, F.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eJ.XA)(e1.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(eK.$, {
        icon: eY.t,
        text: B.intl.string(B.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e4(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [d, u] = e2(),
        g = (function () {
            let e = (0, ez.bG)([G.default], () => G.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eZ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            d && u(e8.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eI.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("962982"), n.e("422420"), n.e("264707")]).then(
                            n.bind(n, 480142),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, d, u]);
    return (0, i.jsxs)("div", {
        className: r()(e5.w, t),
        children: [
            (0, i.jsx)(c.E, {
                className: e5.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: B.intl.string(B.t.OYlggR),
            }),
            g ? (0, i.jsx)(e3, { buttonRef: o, isCoachmarkVisible: d, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eK.$, {
                icon: eX.j,
                text: B.intl.string(B.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e7, { targetElementRef: g ? o : a, isVisible: d, markAsDismissed: u }),
        ],
    });
}
var e6 = n(192),
    e9 = n(172218),
    te = n(408278),
    tt = n(499373),
    tn = n(775602),
    ti = n(793574),
    tl = n(734066),
    ts = n(111994),
    tr = n(280450),
    ta = n(321191);
function to(e) {
    return (0, a.bG)(
        [tr.default, ta.A],
        () => (ta.A.getUserProfile(tr.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var tc = n(314531);
n(926675);
var td = n(305866),
    tu = n(123181),
    tg = n(229087),
    tm = n(753437),
    tx = n(382701),
    tf = n(630900);
function th(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        d = l.useMemo(() => n?.filter((e) => null != (0, tm.W3)(e)) ?? [], [n]),
        u = d.length > 0,
        g = o && d.length < 20,
        { trackUserProfileEditAction: m } = (0, eq.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        p = l.useRef(null),
        I = l.useRef(null),
        [j, A] = l.useState(d.length),
        [E, v] = l.useState(!1),
        [S, C] = l.useState(!1),
        T = E || S;
    l.useEffect(() => {
        a(T);
    }, [T, a]),
        l.useEffect(() => () => a(!1), [a]);
    let k = l.useCallback(
            (e, n) => {
                (0, F.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        N = l.useCallback(() => {
            C(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: b.x.CLIPS_GALLERY });
        }, [m]),
        y = l.useCallback(() => C(!1), []),
        w = l.useCallback(
            (e) => {
                (0, F.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        R = l.useCallback(() => {
            if (E) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === d.length) return void A(d.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = d.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(d.length, i)) return void A(d.length);
            let r = i - (n + 4),
                a = 0;
            for (; a < d.length && s(a + 1, r); ) a++;
            A(a);
        }, [d, E]);
    (0, et.g)(x, R);
    let _ = d.length - j,
        L = _ > 0,
        O = l.useCallback(
            (e) => {
                1 === _ && v(!1), w(e);
            },
            [w, _],
        );
    return u || g
        ? (0, i.jsxs)("div", {
              className: tf.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tf.xP,
                      "aria-hidden": !0,
                      children: [
                          d.map((e) =>
                              (0, i.jsx)(
                                  tg.A,
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
                              className: tf.lv,
                              ref: h,
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${d.length}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, i.jsx)("ul", {
                          className: tf.nM,
                          "aria-label": B.intl.string(B.t["4Rq3a7"]),
                          children: d
                              .slice(0, j)
                              .map((e) =>
                                  (0, i.jsx)(tg.A, { tag: e, variant: "filled", onRemove: o ? () => w(e) : void 0 }, e),
                              ),
                      }),
                  L &&
                      (0, i.jsx)(tp, {
                          buttonRef: p,
                          numHidden: _,
                          isOpen: E,
                          onOpenChange: v,
                          disableInteraction: r,
                          children: d.map((e) =>
                              (0, i.jsx)(tg.A, { tag: e, className: tf.Hl, onRemove: o ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, i.jsx)(tu.A, { tags: d, onTagsChange: k, onOpen: N, onClose: y, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tp(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = B.intl.string(B.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${tf.lv} ${tx.r9}`,
              ref: t,
              children: (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(ec.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, i.jsx)(td.l, {
                      className: tf.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tf.ns, children: a }),
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
                          className: tf.lv,
                          children: (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tI = n(3026);
n(600253);
var tj = n(936026);
function tA(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(c.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tj.Qw, { [tj.qf]: n }),
        children: (0, i.jsx)(tI.A, { children: t }),
    });
}
function tE(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eq.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, F.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        c = (0, ee.T)({ value: n, onCommit: o }),
        { isEditing: d } = c,
        u = B.intl.string(B.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(d);
        }, [d, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(ee.y, {
            ...c,
            variant: "compact",
            removeVerticalPadding: !0,
            className: r()(tj.ZZ, { [tj.Dy]: c.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tj.$, tj.TG),
                children: [
                    (0, i.jsx)(ed.PencilIcon, { size: "xxs", color: "currentColor", className: tj.wz }),
                    "" === n.trim() ? (0, i.jsx)(tA, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tA, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: B.intl.string(B.t.PDnM11),
            label: B.intl.string(B.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tv(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(tE, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tj.$, children: (0, i.jsx)(tA, { value: n ?? "" }) })
        : null;
}
var tS = n(663341),
    tC = n(451395),
    tb = n(823016),
    tT = n(765178),
    tk = n(282988);
function tN(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = B.intl.string(B.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(te.K, {
                "aria-label": r,
                icon: Y.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, F.mC)(t),
                        null != n && (0, tk.UE)(n),
                        tT.O.announce(B.intl.string(B.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var ty = n(233002);
function tw(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: c, manageFocusOnReorder: d } = (0, tb.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(ty.Vs, { [ty.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": B.intl.formatToPlainString(B.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tc.A, { item: t, ringSize: "sm", className: ty.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tC.jV, { buttonRef: c(t.key), className: ty.BU }),
                            (0, i.jsx)(tN, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: ty.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: ty.NI,
        children: g
            ? (0, i.jsx)(tC.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": B.intl.formatToPlainString(B.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: F.N5,
                  onEnd: () => d(t.key),
                  className: ty.oE,
                  dropBeforeClassName: ty.A,
                  dropAfterClassName: ty.Ze,
                  draggingClassName: ty.Id,
                  children: m,
              })
            : m,
    });
}
function tR(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: ty.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tw, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: ty.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: ty.Yn,
                                    "aria-label": B.intl.string(B.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tS.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tb.B, { emptyListFallbackRef: null, children: o }) : o;
}
var t_ = n(729475),
    tL = n(358618),
    tO = n(983851);
function tP(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = B.intl.string(B.t.OIDkcp),
        r = B.intl.string(t ? B.t.YqAjXy : B.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(te.K, {
                    "aria-label": s,
                    icon: t_.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(q.m, {
                text: r,
                ariaHidden: !0,
                children: (0, i.jsx)(te.K, {
                    "aria-label": r,
                    icon: t ? tL._ : tO.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tD = n(798108),
    tM = n(789645),
    tG = n(297264),
    tU = n(915089),
    tF = n(772168);
function tW(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tU.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tF.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tF.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tF.r,
                        "aria-label": B.intl.string(B.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tM.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tG.D, {
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
var tH = n(335978);
function tB(e) {
    let { clip: t } = e,
        n = B.intl.formatToPlainString(B.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            (0, tk._A)(t, [ti.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tH.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tH.xn, loading: "lazy" }),
                (0, i.jsx)(tS.PlusLargeIcon, { size: "sm", color: "currentColor", className: tH.Xv }),
            ],
        }),
    });
}
function tV(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tW, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tH.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tH.NI, children: (0, i.jsx)(tB, { clip: e }) }, e.id)),
        }),
    });
}
var tz = n(769015),
    tK = n(202163);
function tY(e) {
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
                  children: (0, i.jsx)(tz.A, { game: l, size: tz.M.XSMALL, allowUnknownGameIcon: !1 }),
              }),
          });
}
var tX = n(558285),
    tq = n(608857),
    tZ = n(915725),
    tJ = n(409067),
    tQ = n(696016),
    t$ = n(716112);
function t0(e) {
    let { onClick: t } = e,
        n = B.intl.string(B.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(te.K, { variant: "secondary", size: "sm", icon: tt.T, "aria-label": n, onClick: t }),
    });
}
function t1() {
    return (0, i.jsx)("div", {
        className: t$.p$,
        children: (0, i.jsx)(c.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: B.intl.format(B.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function t8(e) {
    let t,
        s,
        r,
        { widget: o, user: c, allowEditing: d, disableInteraction: u, ...g } = e,
        [m, x] = l.useState(null),
        [f, h] = l.useState(!1),
        [p, I] = l.useState(!1),
        [j, A] = l.useState(!0),
        E = (0, a.bG)([tn.Ay], () => tn.Ay.useReducedMotion),
        v = (0, e9.K)(I, 0.5),
        [S, C] = l.useState(!1),
        [b, T] = l.useState(!1),
        k = l.useRef(void 0),
        N = (0, tq.A)(o),
        y =
            ((t = (0, a.yK)([tZ.Ay], () => Object.values(tZ.Ay.getClips()))),
            (s = (0, a.bG)([tZ.Ay], () => tZ.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tk.UQ)()),
            l.useMemo(() => {
                let e = new Set(r.keys());
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, tJ.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        w = (0, tl.sw)(),
        R = d && !0 !== u,
        _ = 0 === N.length,
        L = N.length >= 4,
        O = R && w && !L,
        P = R || N.length > 1,
        [D] = l.useState(() => y.length >= 3),
        [M, G] = l.useState(!1),
        U = to(o.type),
        V = O && !U && D && !M && y.length > 0,
        z = l.useCallback(() => G(!0), []),
        K = N.find((e) => e.key === m) ?? N[0],
        Y = l.useMemo(() => (!0 === u ? [] : N.filter(tq.K)), [N, u]),
        X = null != K ? Y.findIndex((e) => e.key === K.key) : -1,
        q = l.useCallback(() => {
            X < 0 || (0, tX.A)({ clips: Y, startingIndex: X });
        }, [Y, X]),
        Z = l.useCallback(() => A((e) => !e), []),
        J = l.useCallback(() => {
            if (X < 0) return;
            let e = Y[(X + 1) % Y.length];
            null != e && x(e.key);
        }, [Y, X]),
        Q = (X >= 0 && !E && p) || f,
        $ = l.useCallback(() => {
            k.current = window.setTimeout(() => h(!0), 150);
        }, []),
        ee = l.useCallback(() => {
            window.clearTimeout(k.current), h(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(k.current), []);
    let et = l.useCallback(() => {
        (0, eI.openModalLazy)(
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
                    n.e("33091"),
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
                        initialMainLink: ts.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            ((e) => (0, tk._A)(e, [ti.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tQ.nm },
        );
    }, []);
    return (0, i.jsx)(W.A, {
        userId: c.id,
        widget: o,
        allowEditing: d,
        disableInteraction: u,
        headerTitle: (0, F.L)(o),
        headerActionButtons: O && _ ? [(0, i.jsx)(t0, { onClick: et }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            V && (0, i.jsx)("div", { className: t$.$k, children: (0, i.jsx)(tV, { clips: y, onDismiss: z }) }),
        ...g,
        children:
            null != K
                ? (0, i.jsxs)("div", {
                      className: t$.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: v,
                              className: t$.aM,
                              onMouseEnter: $,
                              onMouseLeave: ee,
                              children: [
                                  (0, i.jsx)(tc.A, {
                                      item: K,
                                      ringSize: "lg",
                                      isPlaying: Q,
                                      isMuted: j,
                                      fit: "contain",
                                      onEnded: Y.length > 1 ? J : void 0,
                                      className: t$.VH,
                                  }),
                                  X >= 0 &&
                                      !S &&
                                      !b &&
                                      (0, i.jsx)(H.D, {
                                          className: t$.Hf,
                                          "aria-label": B.intl.string(B.t.CscLHM),
                                          onClick: q,
                                      }),
                                  ("saved" === K.status || "pending" === K.status) &&
                                      (0, i.jsx)(tY, { gameId: K.gameId, className: t$.AT }),
                                  R
                                      ? ("saved" === K.status || "pending" === K.status) &&
                                        (0, i.jsx)("div", {
                                            className: t$.nP,
                                            children: (0, i.jsx)(tN, {
                                                widgetClipId: K.key,
                                                localClipId: "pending" === K.status ? K.localClipId : void 0,
                                            }),
                                        })
                                      : X >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: t$.nP,
                                            children: (0, i.jsx)(tP, { isMuted: j, onToggleMuted: Z, onFullscreen: q }),
                                        }),
                                  (0, i.jsx)(tD.A, {
                                      children:
                                          ("saved" === K.status || "pending" === K.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tv, {
                                                      clipId: K.key,
                                                      title: K.title,
                                                      allowEditing: R,
                                                      onEditingChange: C,
                                                  }),
                                                  (0, i.jsx)(th, {
                                                      clipId: K.key,
                                                      tags: K.tags,
                                                      allowEditing: d,
                                                      disableInteraction: u,
                                                      onEditingChange: T,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          P &&
                              (0, i.jsx)(tR, {
                                  items: N,
                                  selectedKey: K.key,
                                  onSelect: x,
                                  onAddClip: O ? et : void 0,
                                  allowEditing: R,
                              }),
                      ],
                  })
                : (0, i.jsx)(t1, {}),
    });
}
var t2 = n(704824),
    t7 = n(382483),
    t5 = n(385113),
    t3 = n(334074),
    t4 = n(657718),
    t6 = n(478016);
function t9(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, F.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eJ.XA)(e1.jM.WIDGET_ADDED));
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
                            icon: tM.P,
                            "aria-label": B.intl.string(B.t.WAI6xu),
                            onClick: () => {
                                s(e8.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: B.intl.string(B.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t4.S, {
                            variant: "primary",
                            size: "sm",
                            icon: t6.U,
                            "aria-label": B.intl.formatToPlainString(B.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                s(e8.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function ne() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([t5.A], () => t5.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, t7.Wq)();
        }, []);
        let t = (0, a.bG)([G.default], () => G.default.getCurrentUser()),
            n = (0, d.A)(e),
            { tokens: i, fetched: s } = (0, t2.j)(e),
            r = (0, R.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            c = l.useMemo(
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
            { eligibleToShow: u, markAsDismissed: g } = (0, t3.hj)({
                applications: c,
                dismissibleContent: eQ.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: t3.SH,
            }),
            m = l.useMemo(() => c.filter((e) => u.includes(e.id)), [c, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(t9, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var nt = n(128988),
    nn = n(896170),
    ni = n(453318),
    nl = n(321108),
    ns = n(383329),
    nr = n(67710);
function na(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: c } = (0, eq.NJ)(),
        [d, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, ns.R)({ query: d }),
        f = d.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, nl.A)(h),
        j = l.useCallback(
            (e) => {
                (0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    tT.O.announce(B.intl.string(B.t.q0U3DE)),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.();
            },
            [t, c, s, h, p],
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
        v = l.useMemo(() => ({ ...x, threshold: nn.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, nn.Ht)(A, e, v).length), [f, A, v]),
        C = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === d.trim() &&
                    "" !== n.trim() &&
                    c({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    u(n),
                    (g.current = n);
            },
            [d, c, t, S],
        );
    return (0, i.jsx)(ec.Y, {
        ...a,
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
        },
        onRequestClose: () => {
            c({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: S(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(td.l, {
                className: nr.C,
                "aria-label": B.intl.string(B.t.uqw8wK),
                children: (0, i.jsxs)(ni.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: v,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, i.jsx)(ni.a3, {
                            label: B.intl.string(B.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: B.intl.string(B.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, i.jsx)(ni.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function no(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(na, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: B.intl.string(B.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(te.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: tt.T,
                    "aria-label": B.intl.string(B.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function nc(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(na, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: nr.c,
                "aria-label": B.intl.string(B.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tS.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let nd = l.createContext(null);
function nu(e) {
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
    return (0, i.jsx)(nd.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function ng() {
    let e = l.useContext(nd);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var nm = n(67438);
function nx(e) {
    let { widget: t } = e,
        n = (0, F.cv)(t.type),
        l = 1 === n,
        s = l ? B.intl.string(B.t["3FdPBT"]) : B.intl.format(B.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? nm.O : nm.k,
        children: [
            l && (0, i.jsx)(nc, { widget: t, widgetType: t.type }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nf = n(683071),
    nh = n(312252);
function np(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, F.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nh.l,
              children: (0, i.jsx)(nf.w, {
                  type: "warning",
                  children: B.intl.formatToPlainString(B.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nI = n(943793),
    nj = n(148420);
function nA(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tb.r)();
    return (0, i.jsx)("ul", {
        className: nj.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nI.A, {
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
function nE(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = ng(),
        d = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nA, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(np, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tb.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nv(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nE, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nx, { widget: n }),
    });
}
function nS(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        c = n.games[0];
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != c
                ? (0, i.jsx)(nI.A, {
                      user: t,
                      widgetType: n.type,
                      game: c,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nx, { widget: n }),
    });
}
var nC = n(793693);
function nb(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nC.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nT = n(686246),
    nk = n(201438),
    nN = n(788593),
    ny = n(858808),
    nw = n(365611),
    nR = n(900850);
function n_(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: c } = (0, tb.r)(),
        d = l.useRef(null);
    return (0, i.jsx)(tC.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => d.current?.offsetWidth },
        "aria-label": B.intl.formatToPlainString(B.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(n, e, t),
        onEnd: () => c(s.gameId),
        className: nR.kL,
        dropBeforeClassName: nR.A,
        dropAfterClassName: nR.Ze,
        draggingClassName: nR.Id,
        children: (0, i.jsx)("div", { ref: d, className: nR.An, children: o }),
    });
}
function nL(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: c,
        } = e,
        { coverImageUrl: d, gameName: u, isLoading: g } = (0, nk.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tb.r)(),
        x = s && !r,
        { isDragging: f } = (0, nT.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nN.A, {
                    imageSrc: d,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == d || r ? void 0 : nw.iL,
                    hideTooltip: f,
                    coverRef: c,
                }),
                x && (0, i.jsx)(tC.jV, { buttonRef: m(t.gameId), className: nR.BU }),
                x && (0, i.jsx)(ny.A, { game: t, widgetType: l, className: nR.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nw.mD })
        : x
          ? (0, i.jsx)(n_, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: d, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nR.kL, children: h() });
}
function nO(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tb.r)();
    return (0, i.jsx)(nb, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nL, {
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
function nP(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = ng(),
        d = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nO, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(np, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tb.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nD(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nP, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nx, { widget: n }),
    });
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
                ? (0, i.jsx)(nP, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nx, { widget: n }),
    });
}
var nG = n(875620);
function nU(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nk.A)(t),
        c = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        d = B.intl.formatToPlainString(B.t["3mb1s5"], { game: r });
    return o || c
        ? (0, i.jsx)("div", { className: nw.mD })
        : (0, i.jsx)(q.m, {
              text: d,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nG.c9,
                  onClick: l,
                  "aria-label": d,
                  children: [
                      (0, i.jsx)(nN.A, {
                          className: nG.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tS.PlusLargeIcon, { size: "md", className: nG.Xv, color: eR.A.colors.WHITE }),
                  ],
              }),
          });
}
function nF(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = y(n),
        { setExpanded: o } = ng(),
        { trackUserProfileEditAction: c } = (0, eq.NJ)(),
        d = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, F.ew)({ widgetType: n, game: { gameId: e } }),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: n });
            },
            [a, n, c, o],
        );
    return (0, i.jsx)(tW, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nG.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nU, { onClick: () => d(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nW = n(870961);
function nH(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nS, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nv, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nM, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nD, { widget: t, ...n });
        default:
            return null;
    }
}
function nB(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...a } = e,
        { setExpanded: o } = ng(),
        { shouldShowSuggestions: c, handleDismissSuggestions: d } = (function (e) {
            let [t, n] = l.useState(!1),
                i = to(e.type),
                s = (0, F.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !s,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = s && !r,
        g = u && c,
        m = (0, F.L)(t),
        x = (0, F.FM)(t, { showEditingControls: u }),
        f = (0, F.uA)(t),
        h = 1 === (0, F.cv)(t.type);
    return (0, i.jsx)(nH, {
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
                          no,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => o(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, i.jsx)(nF, { userId: n.id, widgetType: t.type, onDismiss: d, className: nW.r }),
        ...a,
    });
}
function nV(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nu, { widgetType: t.type, children: (0, i.jsx)(nB, { widget: t, ...n }) });
}
var nz = n(669253),
    nK = n(483708),
    nY = n(96173),
    nX = n(788259),
    nq = n(269507);
function nZ(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        d = (0, a.bG)([ta.A], () => ta.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e2(!d),
        m = (0, nY.A)();
    return (
        l.useEffect(() => {
            r.current || d || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [d, n]),
        (0, i.jsxs)("div", {
            className: nq.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nq.FS,
                    children: [
                        (0, i.jsx)(tG.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: B.intl.string(B.t["oqalC+"]),
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: d ? B.intl.string(B.t["+W59o5"]) : B.intl.string(B.t.O9SQ1c),
                        }),
                    ],
                }),
                !d &&
                    (0, i.jsx)("ul", {
                        className: nq.ZW,
                        "aria-label": B.intl.string(B.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nX.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !d && (0, i.jsx)(e7, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nJ = n(366209);
function nQ(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(L.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(eV, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nV, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(t8, { widget: t, ...n })
              : null;
}
function n$() {
    return (0, i.jsxs)("div", {
        className: nJ.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: B.intl.string(B.t["7blcz6"]) }),
        ],
    });
}
function n0(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, _.A)(t.id),
        c = (function () {
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
                        children: [(0, i.jsx)(e4, { className: nJ.cG }), c && (0, i.jsx)(n$, {}), (0, i.jsx)(ne, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nQ,
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
        let c = n && !r;
        l.useEffect(() => {
            if (!c) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [c]);
    })(o, I),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, d.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, i.jsx)(nZ, { userId: t.id })
        : o
          ? (0, i.jsx)(e6.D, { children: A() })
          : A();
}
function n1(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, nz.k)(t.id);
    return (0, i.jsxs)(nK.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nJ.XG, { [nJ.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(nt.A, { scrollerRef: s }), (0, i.jsx)(n0, { user: t, ...n })],
    });
}
