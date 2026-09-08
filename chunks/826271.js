l.d(e, { default: () => I });
var n = l(477900),
    a = l(582128),
    r = l(837381),
    i = l(189213),
    s = l(691540),
    u = l(857250),
    o = l(97483),
    c = l(683438),
    d = l(821609),
    h = l(834730),
    f = l(928039),
    g = l(115718),
    p = l(61916),
    m = l(223863),
    x = l(151054),
    k = l(403362),
    C = l(16236),
    R = l(174459),
    b = l(652215),
    D = l(462617),
    S = l(22277),
    j = l(375708),
    A = l(349828),
    E = l(548654);
function I(t) {
    let { transitionState: e, onClose: l, parentId: h, source: I } = t;
    a.useEffect(() => {
        R.default.track(b.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: I });
    }, [I]);
    let [v, w] = a.useState(""),
        [_, M] = a.useState([]),
        [L, O] = a.useState(!1),
        y = (0, D.A)(),
        { results: F, updateSearchText: H } = (0, x.R)({
            includeMissingDMs: !0,
            channelFilter: y,
            selectedDestinations: _,
        }),
        N = _.length,
        Q = N >= A.dh,
        U = a.useCallback(
            (t) => {
                w(t), H(t);
            },
            [H],
        ),
        q = a.useCallback((t) => {
            M((e) => {
                let l = (0, m.I)(t),
                    n = e.filter((t) => (0, m.I)(t) !== l);
                return n.length < e.length ? n : e.length >= A.dh ? e : [...e, t];
            });
        }, []),
        T = a.useCallback(async () => {
            O(!0);
            let t = (await Promise.all(_.map(m.pk))).filter(k.Vq);
            if (0 === t.length) {
                (0, s.P0)((0, u.o)(j.intl.string(j.t.R0RpRX), o.Ck.FAILURE)), O(!1);
                return;
            }
            (0, C.S_)({ channelIds: t, parentId: h ?? null, source: "modal" }), l();
        }, [l, h, _]),
        V = a.useMemo(() => F.filter((t) => t.type !== g.rD.HEADER), [F]),
        X = (0, p.s)({ rowData: V, selectedDestinations: _, handleToggleDestination: q, disableSelection: Q }),
        z = a.useRef(null),
        B = (0, f.A)("favorites-add-channel-modal", z),
        G = a.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, n.jsx)(P, {}) }),
            [],
        );
    return (0, n.jsx)(r.hD, {
        navigator: B,
        children: (0, n.jsx)(r.PR, {
            children: (t) => {
                let { ref: a, ...r } = t;
                return (0, n.jsx)(i.Modal, {
                    title: j.intl.string(S.default.Rp35U1),
                    actions: [],
                    transitionState: e,
                    onClose: l,
                    input: (0, n.jsx)(c.I, {
                        query: v,
                        onChange: U,
                        onClear: () => U(""),
                        placeholder: j.intl.string(j.t["5h0QOP"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    actionBarInput: (0, n.jsx)("div", {
                        className: E.c,
                        children: (0, n.jsx)(d.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text:
                                N >= 2
                                    ? j.intl.formatToPlainString(S.default.LbCa8x, { count: N })
                                    : j.intl.string(S.default.xKXcSu),
                            onClick: T,
                            disabled: 0 === N,
                            loading: L,
                        }),
                    }),
                    listProps: {
                        ...(0 === V.length ? G : X),
                        ...r,
                        ref: (t) => {
                            (z.current = t), (a.current = t?.getScrollerNode() ?? null);
                        },
                    },
                });
            },
        }),
    });
}
function P() {
    return (0, n.jsx)("div", {
        className: E.p,
        children: (0, n.jsx)(h.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: j.intl.string(S.default.kQL9be),
        }),
    });
}
