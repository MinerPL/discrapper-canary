(n.r(t), n.d(t, { default: () => k }));
var s = n(477900),
    i = n(582128),
    l = n(17928),
    r = n(417098),
    a = n(834730),
    c = n(512950),
    o = n(821609),
    d = n(830215),
    u = n(277861),
    E = n(976860),
    g = n(280450),
    h = n(67521),
    p = n(207913),
    N = n(228366),
    R = n(462714),
    x = n(482876),
    A = n(855267),
    I = n(239093),
    j = n(652215),
    m = n(375708),
    _ = n(400514);
function T() {
    return (0, l.bG)([p.A], () => p.A.getAgeCheckStatus()) === I.qN.VERIFIED
        ? null
        : (0, s.jsxs)(r.$T, {
              color: r.Hv.DANGER,
              className: _.aL,
              children: [
                  (0, s.jsx)(a.E, {
                      tag: "span",
                      color: "text-overlay-light",
                      variant: "text-md/normal",
                      children: m.intl.string(m.t["MG+Bzb"]),
                  }),
                  (0, s.jsx)(r.eC, {
                      noticeType: j.kqX.SAFETY_SUSPENDED_USER_WARNING,
                      href: I.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                      children: (0, s.jsx)(a.E, {
                          variant: "text-md/normal",
                          color: "text-overlay-light",
                          children: m.intl.string(m.t["9JceHN"]),
                      }),
                  }),
              ],
          });
}
function S() {
    d.A.closeSuspendedUser();
}
function f() {
    h.A.openV2("");
}
function y() {
    (0, u.Vq)();
}
function O() {
    return (0, s.jsx)(c.p, {
        messageType: c.Y.ERROR,
        action: (0, s.jsx)(o.$, { variant: "secondary", size: "sm", text: m.intl.string(m.t.IcA9iD), onClick: f }),
        children: m.intl.string(m.t.dqbMbn),
    });
}
function V() {
    let e = (0, l.bG)([p.A], () => p.A.getIsExpressiveModalV2Enabled());
    return (0, s.jsx)(c.p, { messageType: c.Y.INFO, children: m.intl.string(e ? m.t.PU8nMu : m.t["nhhy/R"]) });
}
function C(e) {
    let { status: t } = e,
        { methods: n, loading: l } = (function () {
            let [e, t] = i.useState({ methods: null, loading: !0 });
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, x.j)()
                            .then(
                                (e) => (
                                    N.h.dispatch({
                                        type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                                        methods: e.methods,
                                        footerMessage: e.footerMessage,
                                        outageBannerMessage: e.outageBannerMessage,
                                    }),
                                    (0, R.Y)(e.methods)
                                ),
                            )
                            .then((n) => {
                                e || t({ methods: n, loading: !1 });
                            })
                            .catch(() => {
                                e || t({ methods: null, loading: !1 });
                            }),
                        () => {
                            e = !0;
                        }
                    );
                }, []),
                e
            );
        })();
    return l
        ? (0, s.jsx)(V, {})
        : (null == n ? t === I.qN.UNDERAGE_MANUAL_REVIEW : 0 === n.length)
          ? (0, s.jsx)(c.p, {
                messageType: c.Y.ERROR,
                action: (0, s.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: m.intl.string(m.t.NkTGsC),
                    onClick: y,
                }),
                children: m.intl.string(m.t.VTgFYh),
            })
          : (0, s.jsx)(O, {});
}
function G(e) {
    let {} = e,
        t = (0, l.bG)([p.A], () => p.A.getAgeCheckStatus()),
        n = (0, l.bG)([p.A], () => p.A.getIsManualReviewFallbackEnabled());
    return t === I.qN.NONE
        ? null
        : t === I.qN.SUCCESS
          ? (0, s.jsx)(c.p, { messageType: c.Y.POSITIVE, children: m.intl.format(m.t.maZDL6, { login: "/login" }) })
          : t === I.qN.VERIFIED
            ? (0, s.jsx)(c.p, {
                  messageType: c.Y.POSITIVE,
                  iconAlign: "center",
                  action: (0, s.jsx)(o.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["2jvQ6K"]),
                      onClick: S,
                  }),
                  children: m.intl.string(m.t["2Qe65J"]),
              })
            : t === I.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN
              ? (0, s.jsx)(c.p, { messageType: c.Y.POSITIVE, children: m.intl.string(m.t.Ie7p1Q) })
              : t === I.qN.ERROR
                ? (0, s.jsx)(c.p, { messageType: c.Y.ERROR, children: m.intl.string(m.t["4sILBU"]) })
                : t === I.qN.FAILURE
                  ? (0, s.jsx)(c.p, { messageType: c.Y.ERROR, children: m.intl.string(m.t["40R63o"]) })
                  : t === I.qN.UNDERAGE || t === I.qN.UNDERAGE_MANUAL_REVIEW
                    ? n
                        ? (0, s.jsx)(C, { status: t })
                        : (0, s.jsx)(O, {})
                    : (0, s.jsx)(V, {});
}
function b() {
    return (0, s.jsxs)("div", { className: _.$$, children: [(0, s.jsx)(G, {}), (0, s.jsx)(A.A, {})] });
}
function k() {
    return (
        null == (0, l.bG)([g.default], () => g.default.getSuspendedUserToken()) &&
            (0, E.pX)(j.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, s.jsxs)("div", { className: _.kL, children: [(0, s.jsx)(T, {}), (0, s.jsx)(b, {})] })
    );
}
