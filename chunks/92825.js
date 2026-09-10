n.d(t, { A: () => R });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(922016),
    a = n(939249),
    o = n(866665),
    u = n(369606),
    c = n(696451),
    d = n(518782),
    h = n(375708);
function m(e) {
    switch (e) {
        case d.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "Gaming Time";
        case d.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "Gaming Days";
        case d.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "Unique Games";
        default:
            return "Gaming";
    }
}
var f = n(297264),
    p = n(834730),
    g = n(821609),
    x = n(964486),
    A = n(966245),
    C = n(378570),
    E = n(309010),
    I = n(287809),
    y = n(174459),
    S = n(562153),
    v = n(470452),
    N = n(652215),
    _ = n(746080),
    j = n(916388);
function T(e) {
    let { guildId: t, userId: n, onClose: i, leaderboardWinnerData: r } = e,
        a = (0, s.bG)([E.Ay], () => E.Ay.getChannelId(t)),
        o = (0, s.bG)([I.default], () => I.default.getUser(n)),
        c = S.Ay.useName(t, a, o),
        d = (0, v.Uq)(t, "LeaderboardWinnerBadgePopout");
    return (
        (0, x.Ay)(() => {
            y.default.track(N.HAw.OPEN_POPOUT, { type: "Leaderboard Winner Badge Popout", guild_id: t, channel_id: a });
        }),
        (0, l.jsx)(A.Uq, {
            className: j.cc,
            children: (0, l.jsxs)("div", {
                className: j.jC,
                children: [
                    (0, l.jsxs)("div", {
                        className: j.rb,
                        children: [
                            (0, l.jsx)("div", {
                                className: j.zc,
                                children: (0, l.jsx)(u.TrophyIcon, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 40,
                                    height: 40,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(f.D, {
                                        variant: "heading-sm/normal",
                                        children: h.intl.format(h.t["LRh/OJ"], {
                                            username: c,
                                            statName: m(r?.winningStat),
                                        }),
                                    }),
                                    (r.winningStreak ?? 0) > 1
                                        ? (0, l.jsx)(p.E, {
                                              variant: "text-sm/normal",
                                              className: j.AR,
                                              children: h.intl.format(h.t.ltaxJz, {
                                                  streakCount: r.winningStreak ?? 0,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    d &&
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: j.lI,
                            children: (0, l.jsx)(g.$, {
                                variant: "primary",
                                size: "sm",
                                text: h.intl.string(h.t.N8M39C),
                                fullWidth: !0,
                                onClick: function () {
                                    (i(),
                                        (0, C.vn)(t, _.VV.GUILD_SPACE, { source: "Leaderboard Winner Badge Popout" }));
                                },
                            }),
                        }),
                ],
            }),
        })
    );
}
var b = n(631949);
function R(e) {
    let { guildId: t, userId: n } = e,
        d = i.useRef(null),
        f = (0, s.bG)([c.Ay], () => c.Ay.getMember(t, n)?.gamingLeaderboardData);
    return null == f
        ? null
        : (0, l.jsx)(r.Y, {
              targetElementRef: d,
              animation: r.Y.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsx)(T, { guildId: t, userId: n, onClose: i, leaderboardWinnerData: f });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, l.jsx)(a.D, {
                      onClick: t,
                      tag: "span",
                      innerRef: d,
                      children: (0, l.jsx)(o.m, {
                          text: h.intl.formatToPlainString(h.t.So4gmj, { statName: m(f?.winningStat) }),
                          children: (0, l.jsx)("div", {
                              className: b.M,
                              children: (0, l.jsx)(u.TrophyIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                              }),
                          }),
                      }),
                  });
              },
          });
}
