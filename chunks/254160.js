n.d(t, { f: () => s });
var i = n(887924);
let r = new (n(626584).A)("codedLinkQueue"),
    a = new i.default({ concurrency: 5, intervalCap: 10, interval: 2e3 });
function s(e) {
    a.add(e);
}
a.on("add", () => {
    a.size > 0 && r.warn("Message link fetch queue backlog:", a.size);
});
