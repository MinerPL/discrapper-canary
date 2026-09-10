n.d(t, { ON: () => o, P3: () => u, ij: () => d, zE: () => c });
var i,
    a,
    r = n(158045),
    s = n(202541);
let l = new Set([s.k4, s.Dw, s.pX, s.Hp, s.fY, s.bi, s.J7, s.a7, s.Tt]);
var o =
    (((i = {}).NO_SUBSCRIPTION = "no_subscription"),
    (i.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (i.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (i.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    i);
function d(e, t, n) {
    if (null == t)
        return e?.isPremiumGroupMember() === !0
            ? { isEligible: !0, reason: null }
            : { isEligible: !1, reason: "no_subscription" };
    let i = (0, r.EL)(t);
    return null == i || s.hd[i.planId]?.premiumType !== s.PremiumTypes.TIER_2
        ? { isEligible: !1, reason: "not_tier_2_subscription" }
        : t.statusAllowsPerks || n === s.xc.FP_SUB_PAUSED
          ? null != t.trialId && t.hasActiveTrial && !l.has(t.trialId)
              ? { isEligible: !1, reason: "trial_user_not_eligible" }
              : { isEligible: !0, reason: null }
          : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var c = (((a = {}).CAN_CLAIM = "CAN_CLAIM"), (a.BLOCK_CLAIM = "BLOCKED"), (a.UPSELL = "UPSELL"), a);
function u(e) {
    switch (e) {
        case null:
            return "CAN_CLAIM";
        case "no_subscription":
        case "not_tier_2_subscription":
        case "subscription_status_not_allowed":
            return "UPSELL";
        case "trial_user_not_eligible":
            return "BLOCKED";
    }
}
