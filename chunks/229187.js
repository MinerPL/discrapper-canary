t.d(s, { A: () => i });
var n = t(803306),
    l = t(321191);
function i(e, s) {
    if (l.A.isFetchingFriends(e)) return;
    let t = l.A.getMutualFriendsCount(e);
    if (0 === t) return;
    let i = l.A.getMutualFriends(e);
    if (null == t || null == i || i.length !== t) return (0, n.fetchMutualFriends)(e, s);
}
