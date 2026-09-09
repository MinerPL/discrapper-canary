l.d(t, { A: () => c });
var n = l(477900);
l(582128);
var a = l(834730),
    s = l(13699);
let i = /^(.*?)\s*\(([^()]+)\)$/,
    r = /[[\]{}<>`\xab\xbb;$\\=]/,
    u = /'[^']*'|"[^"]*"/,
    d = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function o(e, t) {
    let l = /^\S+/.exec(e);
    return null == l
        ? e
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(a.E, { tag: "span", variant: d[t], color: "none", children: l[0] }),
                  e.slice(l[0].length),
              ],
          });
}
function c(e) {
    let { text: t, variant: l, prose: a } = e;
    if (!0 === a) return t;
    let d = i.exec(t);
    return null == d || r.test(d[2]) || u.test(d[2])
        ? o(t, l)
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  o(d[1], l),
                  " ",
                  d[2].split(/(\s+)/).map((e, t) => {
                      let l;
                      return /^\s*$/.test(e)
                          ? e
                          : ((l = e.startsWith("+") ? s.sI : e.startsWith("-") || e.startsWith("\u2212") ? s.eh : s.zH),
                            (0, n.jsx)("span", { className: l, children: e }, t));
                  }),
              ],
          });
}
