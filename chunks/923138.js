n.d(t, { I: () => c, z: () => r });
var a = n(582128),
    l = n(17928),
    s = n(12510),
    i = n(673125);
function r(e) {
    let t = (0, a.useRef)(!1),
        {
            challengesForOrbWallet: n,
            hasFetchedChallenges: r,
            isFetchingChallenges: c,
            fetchChallengesError: o,
        } = (0, l.cf)([i.Ay], () => ({
            challengesForOrbWallet: i.Ay.challengesForOrbWallet,
            hasFetchedChallenges: i.Ay.hasFetchedChallenges,
            isFetchingChallenges: i.Ay.isFetchingChallenges,
            fetchChallengesError: i.Ay.fetchChallengesError,
        })),
        h = null != e && e.shouldFetch;
    return (
        (0, a.useEffect)(() => {
            !(h && !t.current) ||
                r ||
                c ||
                null != o ||
                (0, s.Od)(function () {
                    t.current = !0;
                });
        }, [r, c, h, o]),
        { challengesForOrbWallet: n, hasFetchedChallenges: r, isFetchingChallenges: c, refetch: s.Od }
    );
}
function c(e) {
    let t = null == e || !1 !== e.enabled,
        n = (0, a.useRef)(!1),
        { hasUnreadUpdate: r } = (0, l.cf)([i.Ay], () => ({ hasUnreadUpdate: i.Ay.hasUnreadUpdate }));
    return (
        (0, a.useEffect)(() => {
            !t || n.current || i.Ay.hasFetchedChallenges || ((n.current = !0), (0, s.pu)());
        }, [t]),
        { hasUnreadUpdate: r, ackUnread: s.eX }
    );
}
