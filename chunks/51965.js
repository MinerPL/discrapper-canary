n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var a = n(866665),
    r = n(821609),
    s = n(721157),
    l = n(555393),
    o = n(375708);
function d(e) {
    let t = (0, l.N)(),
        n =
            (t?.reason ?? null) === s.ON.TRIAL_USER_NOT_ELIGIBLE
                ? o.intl.string(o.t["2S/5mX"])
                : o.intl.string(o.t.GcPSts);
    return t?.state === s.zE.BLOCK_CLAIM
        ? (0, i.jsx)(a.m, {
              text: n,
              asContainer: !0,
              children: (0, i.jsx)(r.$, {
                  fullWidth: e.fullWidth,
                  variant: "overlay-primary",
                  size: e.size,
                  text: o.intl.string(o.t.rJbFM3),
                  disabled: !0,
              }),
          })
        : (0, i.jsx)(r.$, { ...e });
}
