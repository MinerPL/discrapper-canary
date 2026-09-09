l.d(n, { A: () => d });
var t = l(582128),
    i = l(17928),
    r = l(573648),
    a = l(874490),
    s = l(321191);
let o = [];
function d(e) {
    let n = (0, a.dq)({ forUserProfile: !0 }),
        l = (0, i.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, t.useMemo)(
        () =>
            l?.connectedAccounts == null
                ? o
                : l.connectedAccounts.filter((e) => {
                      let { type: l } = e,
                          t = r.A.get(l);
                      return null != t && r.A.isSupported(l) && n(t);
                  }),
        [l?.connectedAccounts, n],
    );
}
