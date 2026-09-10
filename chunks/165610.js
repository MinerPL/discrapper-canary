n.d(t, {
    HD: () => E,
    U4: () => o,
    VA: () => _,
    Yf: () => u,
    h: () => A,
    ny: () => I,
    sV: () => c,
    sd: () => d,
    x1: () => h,
    y0: () => l,
});
var i,
    r,
    a,
    s = n(652215),
    l = (((i = {})[(i.FOCUSED = 0)] = "FOCUSED"), (i[(i.PIP = 1)] = "PIP"), i),
    o =
        (((r = {})[(r.MAIN = 0)] = "MAIN"),
        (r[(r.APP_CHANNEL = 1)] = "APP_CHANNEL"),
        (r[(r.VOICE_CHANNEL = 2)] = "VOICE_CHANNEL"),
        r);
let d = { type: 0 };
var c = (((a = {})[(a.MAIN = 0)] = "MAIN"), (a[(a.INLINE = 1)] = "INLINE"), a);
function u(e) {
    switch (e.type) {
        case 0:
            return 0;
        case 1:
        case 2:
            return 1;
    }
}
function _(e, t) {
    switch (t.type) {
        case 0:
            return `main:${e}`;
        case 1:
            return `app-channel:${e}:${t.channelId}`;
        case 2:
            return `voice-channel:${e}:${t.channelId}`;
    }
}
function E(e) {
    switch (e.type) {
        case s.rbe.GUILD_APP:
            return { type: 1, channelId: e.id, guildId: e.guild_id };
        case s.rbe.GUILD_VOICE:
            return { type: 2, channelId: e.id, guildId: e.guild_id };
        default:
            return null;
    }
}
function A(e) {
    if (null != e)
        switch (e.type) {
            case 0:
                return;
            case 1:
            case 2:
                return e.channelId;
        }
}
function h(e) {
    return e?.state === "launched";
}
function I(e) {
    return h(e) ? e : null;
}
