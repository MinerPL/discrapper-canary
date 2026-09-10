i.d(t, { Ay: () => h, t$: () => d });
var s = i(17928),
    n = i(734057),
    r = i(576705),
    a = i(977997),
    l = i(818348);
let c = { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: a.A },
    o = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
        i = (function (e) {
            let { userId: t, guildId: i, includeNonDiscoverable: s = !1 } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return null != i && null != t
                ? s
                    ? n.VoiceStateStore.getVoiceState(i, t)
                    : n.VoiceStateStore.getDiscoverableVoiceState(i, t)
                : null != t
                  ? s
                      ? n.VoiceStateStore.getVoiceStateForUser(t)
                      : n.VoiceStateStore.getDiscoverableVoiceStateForUser(t)
                  : void 0;
        })(e, t),
        s = (function (e) {
            let { voiceState: t } = e,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            if (t?.channelId != null) return i.ChannelStore.getChannel(t.channelId);
        })({ voiceState: i }, t);
    return !(function (e) {
        let { voiceState: t, voiceChannel: i } = e,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
        return null != t && (i?.isPrivate() || s.PermissionStore.can(l.xB.VIEW_CHANNEL, i));
    })({ voiceState: i, voiceChannel: s }, t)
        ? o
        : { voiceState: i, voiceChannel: s };
}
function h(e) {
    let { userId: t, guildId: i, includeNonDiscoverable: l } = e;
    return (0, s.cf)(
        [n.A, r.A, a.A],
        () =>
            d(
                { userId: t, guildId: i, includeNonDiscoverable: l },
                { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: a.A },
            ),
        [i, t, l],
    );
}
