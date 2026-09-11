r.d(t, { A: () => c });
var i = r(477900),
    n = r(582128),
    l = r(130147),
    a = r(344346),
    s = r(309239);
let c = n.memo(function (e) {
    let { user: t, guildId: r, nameplate: n, isHighlighted: c, size: d = "default" } = e,
        o = "small" === d ? 62 : 94,
        u = "small" === d ? 72 : 110;
    return (0, i.jsx)("div", {
        className: s.Dz,
        children: (0, i.jsxs)("div", {
            className: s.ur,
            children: [
                (0, i.jsx)(l._, { showStatus: !0, width: o, opacity: 0.7, size: d }),
                (0, i.jsx)(l._, { showStatus: !0, width: u, opacity: 0.85, size: d }),
                (0, i.jsx)(a.A, {
                    user: t,
                    guildId: r,
                    nameplate: n,
                    className: s.tZ,
                    isHighlighted: c,
                    showPlaceholderUser: !c,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === d ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(l._, { showStatus: !0, width: u, opacity: 0.85, size: d }),
                (0, i.jsx)(l._, { showStatus: !0, width: o, opacity: 0.7, size: d }),
            ],
        }),
    });
});
