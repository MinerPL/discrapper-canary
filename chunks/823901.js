n.d(t, { y: () => I });
var i = n(477900),
    l = n(877624),
    c = n(17928),
    r = n(417098),
    s = n(597770),
    a = n(688810),
    o = n(75678),
    _ = n(412260),
    T = n(49999),
    A = n(652215),
    E = n(375708),
    u = n(971656);
function I(e) {
    let { markAsDismissed: t, className: n } = e,
        { analyticsLocations: I } = (0, a.Ay)(),
        d = (0, c.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == d
        ? null
        : (0, i.jsxs)(r.$T, {
              color: r.Hv.PREMIUM_TIER_2,
              className: n,
              children: [
                  (0, i.jsx)(r.PM, {
                      onClick: () => t(T.i.USER_DISMISS),
                      noticeType: A.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(s.GiftIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: u.ez,
                  }),
                  d.body,
                  (0, i.jsx)(r.Z_, {
                      onClick: () => {
                          (0, o.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: I,
                              analyticsLocation: A.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: A.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: A.kqX.GIFTING_PROMOTION_REMINDER,
                      children: E.intl.string(E.t.RzWDqY),
                  }),
              ],
          });
}
