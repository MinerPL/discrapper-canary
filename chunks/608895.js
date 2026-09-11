n.d(t, { A: () => r });
var i = n(165610);
function r(e) {
    switch (e.type) {
        case i.U4.MAIN:
            return {};
        case i.U4.APP_CHANNEL:
        case i.U4.VOICE_CHANNEL:
            let t = { channel_id: e.channelId };
            return (null != e.guildId && (t.guild_id = e.guildId), t);
        default:
            return {};
    }
}
