l.d(n, { A: () => s });
var t = l(582128),
    i = l(17928),
    r = l(321191);
let a = [];
function s(e) {
    let n = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, t.useMemo)(
        () => (n?.applicationRoleConnections == null ? a : n.applicationRoleConnections),
        [n?.applicationRoleConnections],
    );
}
