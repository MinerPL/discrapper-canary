n.d(t, { l: () => r, p: () => a });
var i = n(544576);
function r() {
    return i.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
}
function a() {
    return Date.now() - r();
}
