l.d(n, { A: () => j });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(689175),
    c = l(66834),
    u = l(379257),
    d = l(847599),
    o = l(36149),
    A = l(323073),
    h = l(506164),
    g = l(204925),
    m = l(375708),
    x = l(814316);
function f(e) {
    let { guild: n, channelId: l } = e,
        { modalType: a, emphasiseDisagree: s, ...r } = (0, A.k$)(n),
        x = i.useCallback(() => {
            null != n && c.A.nsfwReturnToSafety(n.id);
        }, [n]),
        f = i.useCallback(() => {
            null != n && c.A.nsfwAgree(n.id);
        }, [n]),
        j = i.useCallback(() => {
            u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.NSFW_GUILD });
        }, []);
    (0, o.I7)(g.w_.NSFW_SERVER);
    let N = { ...r, guildId: n?.id, channelId: l, disagreement: m.intl.string(m.t["/g10LC"]) };
    switch (a) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, t.jsx)(h.A, {
                onAgree: j,
                onDisagree: x,
                modalType: a,
                agreementButtonVariant: !0 === s ? "secondary" : "primary",
                disagreementButtonVariant: !0 === s ? "primary" : "secondary",
                ...N,
            });
        default:
            return (0, t.jsx)(h.A, { onAgree: f, onDisagree: x, modalType: a, ...N });
    }
}
let j = function (e) {
    let { guild: n, channelId: l, className: a } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = c;
            e?.scrollToBottom();
        }, []),
        (0, t.jsx)(r.Ch, {
            ref: c,
            className: x.X,
            children: (0, t.jsx)("div", {
                className: s()(a, x.i),
                children: (0, t.jsx)(f, { guild: n, channelId: l }),
            }),
        })
    );
};
