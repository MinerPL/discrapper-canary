n.d(t, { A: () => E });
var a = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    i = n(892227),
    r = n(661531),
    c = n(403581),
    o = n(318254),
    h = n(914410),
    d = n(440005),
    u = n(366505),
    m = n(903080);
let C = {
        churning: { start: r.A.unsafe_rawColors.OPACITY_RED_80.css, end: r.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: r.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: r.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    E = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: n, programReward: l, totalDays: r } = (0, u.F)();
        if (!n || null == l || null == r) return null;
        let E = (0, i.default)(new Date(l.next_reward_date), new Date()),
            g = l.program_current_state === d.L.PREMIUM_CHURNING,
            _ = g ? C.churning.start : C.active.start,
            x = g ? C.churning.end : C.active.end;
        return (0, a.jsxs)("div", {
            className: s()(m.k, t),
            children: [
                (0, a.jsx)(h.Ay, {
                    variant: h.qP.UNSET,
                    progress: r - E,
                    maximum: r,
                    override: { default: { gradientStart: _, gradientEnd: x } },
                }),
                g
                    ? (0, a.jsx)(c.t, { size: "sm", color: "currentColor", className: m.K })
                    : (0, a.jsx)(o.C, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
