n.d(t, { Bp: () => g, Hs: () => p, eq: () => S, t_: () => N });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(52133),
    o = n(765548),
    d = n(347481),
    c = n(719975),
    u = n(179172),
    _ = n(868162),
    E = n(731854);
let A = new Set(["DisplayPort"]);
function h(e) {
    return c.Ay.getInputDevices()[_.A.inputDevices[e]] ?? c.Ay.getOutputDevices()[_.A.outputDevices[e]];
}
function I(e) {
    return _.A.initialized
        ? d.A.isCertified(_.A.inputDevices[e])
            ? (d.A.getCertifiedDevice(_.A.inputDevices[e]) ?? null)
            : d.A.isCertified(_.A.outputDevices[e])
              ? (d.A.getCertifiedDevice(_.A.outputDevices[e]) ?? null)
              : null
        : null;
}
function f() {
    let e = c.Ay.getInputDeviceId(),
        t = c.Ay.getOutputDeviceId();
    if (!0 === _.A.getState().neverShowModal || a().isEmpty(_.A.lastDeviceConnected)) return !1;
    let n = (0, _.x)(c.Ay.getInputDevices()[e]),
        i = (0, _.x)(c.Ay.getOutputDevices()[t]);
    if (a().some(_.A.lastDeviceConnected, (e) => A.has(e.displayName) || e.displayName === n || e.displayName === i))
        return !1;
    let r = a().some(
        _.A.lastDeviceConnected,
        (e) => d.A.isCertified(_.A.inputDevices[e.displayName]) || d.A.isCertified(_.A.outputDevices[e.displayName]),
    );
    return (
        ((e !== E.dx || !_.A.lastInputSystemDevice.justChanged) &&
            (t !== E.dx || !_.A.lastOutputSystemDevice.justChanged)) ||
        !!r
    );
}
function p() {
    if (!f()) return null;
    let e = a().first(Object.keys(_.A.lastDeviceConnected)),
        t = null != e && "" !== e ? _.A.lastDeviceConnected[e] : null;
    return null == t || !0 === _.A.getState().ignoredDevices[t.displayName]
        ? null
        : { device: t, mediaEngineDevice: h(t.displayName), certifiedDeviceMetadata: I(t.displayName) };
}
function T(e, t) {
    return e.length === t.length && e.every((e, n) => (0, l.A)(e, t[n]));
}
function m() {
    if (!f()) return [];
    let { ignoredDevices: e } = _.A.getState();
    return Object.values(_.A.lastDeviceConnected)
        .filter((t) => !0 !== e[t.displayName])
        .map((e) => ({ device: e, mediaEngineDevice: h(e.displayName), certifiedDeviceMetadata: I(e.displayName) }));
}
function g() {
    return (0, s.bG)([_.A, c.Ay, d.A], m, void 0, T);
}
function S(e, t) {
    return null != t ? `${t.vendor.name} ${t.model.name}` : e.displayName;
}
function N(e) {
    let { device: t, switchDeviceLocation: n, onMount: r, onIgnore: a } = e,
        s = i.useRef(!1),
        l = (0, o.A)(r);
    return (
        i.useEffect(() => {
            if (null != t)
                return (
                    (s.current = !1),
                    l(),
                    () => {
                        s.current || u.mk();
                    }
                );
        }, [t, l]),
        {
            handleSwitch: i.useCallback(
                (e) => {
                    null != t && ((s.current = !0), u.TO(t.displayName, e, n));
                },
                [t, n],
            ),
            handleDontSwitch: i.useCallback(() => {
                null != t && ((s.current = !0), u.mk());
            }, [t]),
            handleIgnore: i.useCallback(() => {
                null != t && ((s.current = !0), u.BG(t.displayName), a());
            }, [t, a]),
        }
    );
}
