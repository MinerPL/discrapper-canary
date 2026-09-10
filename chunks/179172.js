n.d(t, { BG: () => s, TO: () => r, mk: () => a });
var i = n(228366);
function r(e, t, n) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_SWITCH", displayName: e, connectedDevicePreference: t, location: n });
}
function a() {
    i.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH" });
}
function s(e) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
}
