n.d(t, { l: () => r, p: () => a });
var i = n(49612);
function r() {
    return i.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
}
function a() {
    return Date.now() - r();
}
