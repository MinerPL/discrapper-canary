n.d(t, { CC: () => E, CZ: () => h, DK: () => _, J8: () => c });
var i = n(239266),
    r = n(84483),
    a = n(287809),
    s = n(158045),
    l = n(440005),
    o = n(212739),
    d = n(202541);
function c(e) {
    if (null == e) return !0;
    let t = e.next_reward_date;
    return null != t && "" !== t && (0, i.A)(new Date(t));
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils";
    switch (e) {
        case l.W.NITRO: {
            let { isInTreatment: e } = (0, r.v9)(t);
            return e;
        }
        case l.W.XBOX:
            return !0;
        default:
            return !1;
    }
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: n } = (0, r.uX)(t);
    switch (e) {
        case l.W.NITRO:
            return n;
        case l.W.XBOX:
            return !0;
        default:
            return !1;
    }
}
function E() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return u(l.W.NITRO, t) && ((e = void 0 ?? a.default.getCurrentUser()), (0, s.YE)(e, d.PremiumTypes.TIER_2));
}
let A = {
    [l.W.NITRO]: E,
    [l.W.XBOX]: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
        return u(l.W.XBOX, e) && (0, o.H)(a.default.getCurrentUser());
    },
};
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    for (let t of Object.values(l.W)) if ("number" == typeof t && A[t](e)) return !0;
    return !1;
}
