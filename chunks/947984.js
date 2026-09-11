r.d(a, { U: () => n });
var o = r(477900);
r(582128);
let t =
    "https://cdn.discordapp.com/assets/content/478c4e2368b95b01e5322800305a95640e4044e34f0da08b51845bc91b51526e.riv";
var c = r(502377),
    d = r(799226);
let s = { "Badges Coachmark": { on: "boolean", reducedMotion: "boolean" } };
function n(e) {
    let { artboard: a = "Badges Coachmark", stateMachine: r, ...n } = e,
        { status: i, buffer: b } = (0, d.CE)(t),
        p = (0, d.m2)(t);
    return i === d.BW.Loading
        ? null
        : (0, o.jsx)(c.w, {
              ...(p ? { key: "override" } : {}),
              buffer: b,
              artboard: a,
              stateMachine: r,
              artboardProperties: s,
              ...n,
          });
}
n.riveSrc = t;
