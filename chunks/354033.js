n.d(t, { X: () => T, Y: () => x });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(17928),
    s = n(821609),
    o = n(939249),
    u = n(789645),
    c = n(834730),
    d = n(297264),
    m = n(565645),
    p = n(241524),
    C = n(166532),
    h = n(71393),
    f = n(371794),
    E = n(500345),
    S = n(599941),
    y = n(320137),
    I = n(417360),
    g = n(759625),
    A = n(2242),
    P = n(375708),
    _ = n(631907),
    v = n(200791);
function x(e) {
    let { onClose: t, listing: n, step: i, guildId: a } = e,
        s = (0, S.Tq)(a),
        c = (0, p.A)(A.TQ),
        d = (function () {
            if (c) return null;
            let e =
                s?.cover_image_asset?.application_id != null
                    ? (0, f.YE)(s.cover_image_asset.application_id, s.cover_image_asset, 440)
                    : void 0;
            return null == e && i !== C.pn.CONFIRM
                ? null
                : null == e
                  ? (0, l.jsx)("div", { className: _.gI })
                  : (0, l.jsx)("img", { src: e, alt: "", className: _.F0 });
        })();
    return (0, l.jsxs)("div", {
        className: r()(_.N1, { [v.G]: null != d, [_.TP]: c || null == d }),
        children: [
            d,
            (function () {
                if (i !== C.pn.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, f.YE)(n.application_id, n.image_asset, 80);
                return (0, l.jsx)("div", {
                    className: _.z9,
                    children: (0, l.jsx)("img", { src: e, alt: "", className: _.ah }),
                });
            })(),
            (0, l.jsx)(o.D, {
                className: _.G3,
                onClick: () => t(!1),
                "aria-label": P.intl.string(P.t.cpT0Cq),
                children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: _.ut }),
            }),
        ],
    });
}
function T(e) {
    let { onClose: t, listing: n, guildId: i } = e,
        r = (0, a.bG)([h.A], () => h.A.getGuild(i), [i]),
        o = (0, y.A)(i).filter((e) => e.roles.includes(n.role_id)),
        u = n.role_benefits.benefits.filter(E.B1).slice(0, null === o.length ? 4 : 3),
        p = (0, I.A)(u).slice(0, null === o.length ? 4 : 3);
    return (0, l.jsxs)("div", {
        className: _.RP,
        children: [
            (0, l.jsx)(d.D, {
                className: _.RS,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: P.intl.format(P.t["1HIsTk"], { serverName: r?.name }),
            }),
            (0, l.jsx)(c.E, {
                className: _.sT,
                variant: "text-md/normal",
                color: "text-default",
                children: P.intl.format(P.t.oi3gip, { tier: n.name }),
            }),
            p.length > 0 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: _.n2,
                            children: P.intl.string(P.t.w0CQ01),
                        }),
                        (0, l.jsx)("div", {
                            className: _.M3,
                            children: p.map((e) =>
                                (0, l.jsx)(g.A, { benefit: e, guildId: i, onClick: () => t(!0) }, (0, E.nh)(e)),
                            ),
                        }),
                    ],
                }),
            (function () {
                if (0 === o.length) return null;
                let e = o[0];
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: _.n2,
                            children: P.intl.string(P.t["6Y1FLi"]),
                        }),
                        (0, l.jsxs)("div", {
                            className: _.DI,
                            children: [
                                (0, l.jsx)(m.A, {
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated ?? !1,
                                    className: _.mp,
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: _.cC,
                                            children: P.intl.string(P.t.PrKk4n),
                                        }),
                                        (0, l.jsx)(c.E, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: P.intl.format(P.t["2ICUkG"], { count: o.length }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            })(),
            (0, l.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: _.EJ,
                children: (0, l.jsx)(s.$, {
                    variant: "primary",
                    text: P.intl.string(P.t["Ph+ecI"]),
                    onClick: () => t(!0),
                }),
            }),
        ],
    });
}
