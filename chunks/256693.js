i.d(t, { Ri: () => r, aQ: () => o, fS: () => a });
var n = i(795816),
    l = i(933958);
let s = "activity:";
function r(e) {
    let { applicationId: t, location: i } = e;
    return `activity:${t}:${i.id}`;
}
function a(e) {
    return e.startsWith(s);
}
function o(e) {
    let t = (function (e) {
        let t = e.indexOf(":", s.length);
        if (-1 === t) return null;
        let i = e.slice(s.length, t),
            n = e.slice(t + 1);
        return "" === i || "" === n ? null : { applicationId: i, locationId: n };
    })(e);
    if (null == t) return;
    let { applicationId: i, locationId: r } = t,
        a = l.Ay.getSelfEmbeddedActivities().get(i);
    null != a && a.location.id === r && (0, n._H)({ location: a.location, applicationId: i, showFeedback: !1 });
}
