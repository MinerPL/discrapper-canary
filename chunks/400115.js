n.d(t, { S: () => a, j: () => r });
let i = {};
function r(e, t) {
    i[e] = t;
}
function a(e) {
    let t = i[e];
    if (null != t) return (delete i[e], t);
}
