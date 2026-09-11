n.d(t, { RC: () => d, go: () => A, iY: () => c, vU: () => f, wW: () => E });
var i = n(582128),
    r = n(323889),
    s = n(17928),
    o = n(475743),
    u = n(859703),
    a = n(590202),
    l = n(266569);
function d(e) {
    var t, n;
    let s =
            ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
            (n = "adContentId" in e ? e.adContentId : void 0),
            i.useMemo(
                () => (null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : []),
                [t, n],
            )),
        o = "questOrQuests" in e ? r.p.QUEST : e.adCreativeType;
    return i.useMemo(() => {
        let t = (function (e) {
            let { adContentIds: t, questContent: n } = e;
            return `${[...t].sort().join("_")}_${n}`;
        })({ adContentIds: s, questContent: e.questContent });
        return (r.p.QUEST, { adContentIds: s, adCreativeType: o, key: t });
    }, [s, e.questContent, o]);
}
function c(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        l = (0, s.bG)([u.A], () => (n !== r.p.QUEST || 1 !== t.length ? null : u.A.getQuest(t[0])), [t, n]),
        d = i.useMemo(() => (null == l ? null : (0, a.NI)(l)), [l]),
        c = (0, o.Ay)(d);
    return d !== c;
}
function C() {
    return i.useContext(l.n0);
}
function f() {
    return C()?.current;
}
function A() {
    return f()?.getId();
}
function E() {
    let e = C();
    return i.useCallback(() => e?.current?.getId(), [e]);
}
