n.d(t, {
    EY: () => eC,
    Hg: () => W,
    KE: () => X,
    Q6: () => ep,
    bP: () => en,
    bR: () => ec,
    gB: () => ez,
    h6: () => eg,
    ie: () => g,
    wA: () => eo,
});
var r,
    i,
    a = n(694260),
    o = n(159563);
function u(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var s = new WeakMap(),
    l = new WeakMap(),
    c = new WeakMap(),
    d = new WeakMap(),
    f = new WeakMap(),
    h = new WeakMap(),
    p = new WeakMap();
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? m(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var g = () => {
    var e = {
        children: [],
        operations: [],
        selection: null,
        marks: null,
        isInline: () => !1,
        isVoid: () => !1,
        markableVoid: () => !1,
        onChange: () => {},
        apply: (t) => {
            for (var n of X.pathRefs(e)) eu.transform(n, t);
            for (var r of X.pointRefs(e)) ed.transform(r, t);
            for (var i of X.rangeRefs(e)) em.transform(i, t);
            var a,
                o,
                u = s.get(e) || [],
                d = l.get(e) || new Set(),
                f = (e) => {
                    if (e) {
                        var t = e.join(",");
                        o.has(t) || (o.add(t), a.push(e));
                    }
                };
            if (eo.operationCanTransformPath(t)) for (var h of ((a = []), (o = new Set()), u)) f(eo.transform(h, t));
            else ((a = u), (o = d));
            for (var p of e.getDirtyPaths(t)) f(p);
            (s.set(e, a),
                l.set(e, o),
                ez.transform(e, t),
                e.operations.push(t),
                X.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                c.get(e) ||
                    (c.set(e, !0),
                    Promise.resolve().then(() => {
                        (c.set(e, !1), e.onChange({ operation: t }), (e.operations = []));
                    })));
        },
        addMark: (t, n) => {
            var { selection: r, markableVoid: i } = e;
            if (r) {
                var a = (t, n) => {
                        if (!eC.isText(t)) return !1;
                        var [r, i] = X.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    o = ep.isExpanded(r),
                    u = !1;
                if (!o) {
                    var [s, l] = X.node(e, r);
                    if (s && a(s, l)) {
                        var [d] = X.parent(e, l);
                        u = d && e.markableVoid(d);
                    }
                }
                if (o || u) ez.setNodes(e, { [t]: n }, { match: a, split: !0, voids: !0 });
                else {
                    var f = _(_({}, X.marks(e) || {}), {}, { [t]: n });
                    ((e.marks = f), c.get(e) || e.onChange());
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n && ep.isCollapsed(n) && ez.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && ep.isCollapsed(n) && ez.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && ep.isExpanded(n) && ez.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? en.fragment(e, t) : [];
        },
        insertBreak: () => {
            ez.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            ez.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            ez.insertFragment(e, t);
        },
        insertNode: (t) => {
            ez.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
                if (r) {
                    var i = _({ text: t }, r);
                    ez.insertNodes(e, i);
                } else ez.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, r] = t;
            if (!eC.isText(n)) {
                if (W.isElement(n) && 0 === n.children.length)
                    return void ez.insertNodes(e, { text: "" }, { at: r.concat(0), voids: !0 });
                for (
                    var i =
                            !X.isEditor(n) &&
                            W.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                eC.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        a = 0,
                        o = 0;
                    o < n.children.length;
                    o++, a++
                ) {
                    var u = en.get(e, r);
                    if (!eC.isText(u)) {
                        var s = n.children[o],
                            l = u.children[a - 1],
                            c = o === n.children.length - 1;
                        if ((eC.isText(s) || (W.isElement(s) && e.isInline(s))) !== i)
                            (ez.removeNodes(e, { at: r.concat(a), voids: !0 }), a--);
                        else if (W.isElement(s)) {
                            if (e.isInline(s))
                                if (null != l && eC.isText(l)) {
                                    if (c) {
                                        var d = { text: "" };
                                        (ez.insertNodes(e, d, { at: r.concat(a + 1), voids: !0 }), a++);
                                    }
                                } else {
                                    var f = { text: "" };
                                    (ez.insertNodes(e, f, { at: r.concat(a), voids: !0 }), a++);
                                }
                        } else
                            null != l &&
                                eC.isText(l) &&
                                (eC.equals(s, l, { loose: !0 })
                                    ? (ez.mergeNodes(e, { at: r.concat(a), voids: !0 }), a--)
                                    : "" === l.text
                                      ? (ez.removeNodes(e, { at: r.concat(a - 1), voids: !0 }), a--)
                                      : "" === s.text && (ez.removeNodes(e, { at: r.concat(a), voids: !0 }), a--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var r = (t, n) => {
                        if (!eC.isText(t)) return !1;
                        var [r, i] = X.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    i = ep.isExpanded(n),
                    a = !1;
                if (!i) {
                    var [o, u] = X.node(e, n);
                    if (o && r(o, u)) {
                        var [s] = X.parent(e, u);
                        a = s && e.markableVoid(s);
                    }
                }
                if (i || a) ez.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
                else {
                    var l = _({}, X.marks(e) || {});
                    (delete l[t], (e.marks = l), c.get(e) || e.onChange());
                }
            }
        },
        getDirtyPaths: (e) => {
            switch (e.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                    var { path: t } = e;
                    return eo.levels(t);
                case "insert_node":
                    var { node: n, path: r } = e;
                    return [
                        ...eo.levels(r),
                        ...(eC.isText(n)
                            ? []
                            : Array.from(en.nodes(n), (e) => {
                                  var [, t] = e;
                                  return r.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: i } = e;
                    return [...eo.ancestors(i), eo.previous(i)];
                case "move_node":
                    var { path: a, newPath: o } = e;
                    if (eo.equals(a, o)) return [];
                    var u = [],
                        s = [];
                    for (var l of eo.ancestors(a)) {
                        var c = eo.transform(l, e);
                        u.push(c);
                    }
                    for (var d of eo.ancestors(o)) {
                        var f = eo.transform(d, e);
                        s.push(f);
                    }
                    var h = s[s.length - 1],
                        p = o[o.length - 1];
                    return [...u, ...s, h.concat(p)];
                case "remove_node":
                    var { path: m } = e;
                    return [...eo.ancestors(m)];
                case "split_node":
                    var { path: _ } = e;
                    return [...eo.levels(_), eo.next(_)];
                default:
                    return [];
            }
        },
        shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: n } = e,
                r = 42 * n;
            if (t > r)
                throw Error(
                    "Could not completely normalize the editor after ".concat(
                        r,
                        " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                    ),
                );
            return !0;
        },
    };
    return e;
};
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
var y = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            r = t ? k(e) : e,
            a = i.None,
            o = i.None,
            u = 0,
            s = null;
        for (var l of r) {
            var c = l.codePointAt(0);
            if (!c) break;
            var d = N(l, c);
            if (
                (([a, o] = n ? [o, d] : [d, a]),
                (a & i.ZWJ) != 0 &&
                    (o & i.ExtPict) != 0 &&
                    !(n ? L(e.substring(0, u)) : L(e.substring(0, e.length - u))))
            )
                break;
            if (
                ((a & i.RI) != 0 &&
                    (o & i.RI) != 0 &&
                    !(s = null !== s ? !s : !!n || $(e.substring(0, e.length - u)))) ||
                (a !== i.None &&
                    o !== i.None &&
                    (function (e, t) {
                        return -1 === I.findIndex((n) => (e & n[0]) != 0 && (t & n[1]) != 0);
                    })(a, o))
            )
                break;
            u += l.length;
        }
        return u || 1;
    },
    b = /\s/,
    D =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    w = /['\u2018\u2019]/,
    C = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0;) {
            var i = y(e, t),
                [a, o] = E(e, i, t);
            if (A(a, o, t)) ((r = !0), (n += i));
            else if (r) break;
            else n += i;
            e = o;
        }
        return n;
    },
    E = (e, t, n) => {
        if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    A = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (b.test(t)) return !1;
        if (w.test(t)) {
            var i = y(n, r),
                [a, o] = E(n, i, r);
            if (e(a, o, r)) return !0;
        }
        return !D.test(t);
    },
    k = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (F(r.charCodeAt(0))) {
                var i = e.charAt(t - n - 1);
                if (B(i.charCodeAt(0))) {
                    (yield i + r, n++);
                    continue;
                }
            }
            yield r;
        }
    },
    B = (e) => e >= 55296 && e <= 56319,
    F = (e) => e >= 56320 && e <= 57343;
(((r = i || (i = {}))[(r.None = 0)] = "None"),
    (r[(r.Extend = 1)] = "Extend"),
    (r[(r.ZWJ = 2)] = "ZWJ"),
    (r[(r.RI = 4)] = "RI"),
    (r[(r.Prepend = 8)] = "Prepend"),
    (r[(r.SpacingMark = 16)] = "SpacingMark"),
    (r[(r.L = 32)] = "L"),
    (r[(r.V = 64)] = "V"),
    (r[(r.T = 128)] = "T"),
    (r[(r.LV = 256)] = "LV"),
    (r[(r.LVT = 512)] = "LVT"),
    (r[(r.ExtPict = 1024)] = "ExtPict"),
    (r[(r.Any = 2048)] = "Any"));
var x =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    T =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    R =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    V = /^[\u1100-\u115F\uA960-\uA97C]$/,
    S = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    P = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    O =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    z =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    M =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    N = (e, t) => {
        var n = i.Any;
        return (
            -1 !== e.search(x) && (n |= i.Extend),
            8205 === t && (n |= i.ZWJ),
            t >= 127462 && t <= 127487 && (n |= i.RI),
            -1 !== e.search(T) && (n |= i.Prepend),
            -1 !== e.search(R) && (n |= i.SpacingMark),
            -1 !== e.search(V) && (n |= i.L),
            -1 !== e.search(S) && (n |= i.V),
            -1 !== e.search(P) && (n |= i.T),
            -1 !== e.search(O) && (n |= i.LV),
            -1 !== e.search(z) && (n |= i.LVT),
            -1 !== e.search(M) && (n |= i.ExtPict),
            n
        );
    },
    I = [
        [i.L, i.L | i.V | i.LV | i.LVT],
        [i.LV | i.V, i.V | i.T],
        [i.LVT | i.T, i.T],
        [i.Any, i.Extend | i.ZWJ],
        [i.Any, i.SpacingMark],
        [i.Prepend, i.Any],
        [i.ZWJ, i.ExtPict],
        [i.RI, i.RI],
    ],
    j =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    L = (e) => -1 !== e.search(j),
    Z = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    $ = (e) => {
        var t = e.match(Z);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    U = (e) => (0, a.Q)(e) && en.isNodeList(e.children) && !X.isEditor(e),
    W = {
        isAncestor: (e) => (0, a.Q)(e) && en.isNodeList(e.children),
        isElement: U,
        isElementList: (e) => Array.isArray(e) && e.every((e) => W.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return U(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
        },
    },
    G = ["text"],
    q = ["text"];
function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? K(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : K(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var H = new WeakMap(),
    X = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: r = "lowest", at: i = e.selection, match: a } = t;
            if (i) {
                var o = X.path(e, i);
                for (var [u, s] of X.levels(e, { at: o, voids: n, match: a, reverse: "lowest" === r }))
                    if (!eC.isText(u)) {
                        if (ep.isRange(i)) {
                            if (eo.isAncestor(s, i.anchor.path) && eo.isAncestor(s, i.focus.path)) return [u, s];
                        } else if (!eo.equals(o, s)) return [u, s];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = X.point(e, t, { edge: "end" }),
                a = X.end(e, []),
                { distance: o = 1 } = r,
                u = 0;
            for (var s of X.positions(e, J(J({}, r), {}, { at: { anchor: i, focus: a } }))) {
                if (u > o) break;
                (0 !== u && (n = s), u++);
            }
            return n;
        },
        before(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = X.start(e, []),
                a = X.point(e, t, { edge: "start" }),
                { distance: o = 1 } = r,
                u = 0;
            for (var s of X.positions(e, J(J({}, r), {}, { at: { anchor: i, focus: a }, reverse: !0 }))) {
                if (u > o) break;
                (0 !== u && (n = s), u++);
            }
            return n;
        },
        deleteBackward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = "character" } = t;
            e.deleteBackward(n);
        },
        deleteForward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = "character" } = t;
            e.deleteForward(n);
        },
        deleteFragment(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { direction: n = "forward" } = t;
            e.deleteFragment(n);
        },
        edges: (e, t) => [X.start(e, t), X.end(e, t)],
        end: (e, t) => X.point(e, t, { edge: "end" }),
        first(e, t) {
            var n = X.path(e, t, { edge: "start" });
            return X.node(e, n);
        },
        fragment(e, t) {
            var n = X.range(e, t);
            return en.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => W.isElement(t) && X.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => eC.isText(t) || X.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => eC.isText(e)),
        insertBreak(e) {
            e.insertBreak();
        },
        insertSoftBreak(e) {
            e.insertSoftBreak();
        },
        insertFragment(e, t) {
            e.insertFragment(t);
        },
        insertNode(e, t) {
            e.insertNode(t);
        },
        insertText(e, t) {
            e.insertText(t);
        },
        isBlock: (e, t) => !e.isInline(t),
        isEditor(e) {
            var t = H.get(e);
            if (void 0 !== t) return t;
            if (!(0, a.Q)(e)) return !1;
            var n =
                "function" == typeof e.addMark &&
                "function" == typeof e.apply &&
                "function" == typeof e.deleteBackward &&
                "function" == typeof e.deleteForward &&
                "function" == typeof e.deleteFragment &&
                "function" == typeof e.insertBreak &&
                "function" == typeof e.insertSoftBreak &&
                "function" == typeof e.insertFragment &&
                "function" == typeof e.insertNode &&
                "function" == typeof e.insertText &&
                "function" == typeof e.isInline &&
                "function" == typeof e.isVoid &&
                "function" == typeof e.normalizeNode &&
                "function" == typeof e.onChange &&
                "function" == typeof e.removeMark &&
                "function" == typeof e.getDirtyPaths &&
                (null === e.marks || (0, a.Q)(e.marks)) &&
                (null === e.selection || ep.isRange(e.selection)) &&
                en.isNodeList(e.children) &&
                ea.isOperationList(e.operations);
            return (H.set(e, n), n);
        },
        isEnd(e, t, n) {
            var r = X.end(e, n);
            return ec.equals(t, r);
        },
        isEdge: (e, t, n) => X.isStart(e, t, n) || X.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [r] = n;
            return 0 === n.length || (1 === n.length && eC.isText(r) && "" === r.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = d.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = X.start(e, n);
            return ec.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = X.path(e, t, { edge: "end" });
            return X.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = X.path(e, t, n);
            return [en.leaf(e, r), r];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
                { match: a } = t;
            if ((null == a && (a = () => !0), n)) {
                var o = [],
                    u = X.path(e, n);
                for (var [s, l] of en.levels(e, u))
                    if (a(s, l) && (o.push([s, l]), !i && W.isElement(s) && X.isVoid(e, s))) break;
                (r && o.reverse(), yield* o);
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (ep.isExpanded(n)) {
                var [r] = X.nodes(e, { match: eC.isText });
                if (!r) return {};
                var [i] = r;
                return v(i, G);
            }
            var { anchor: a } = n,
                { path: o } = a,
                [u] = X.leaf(e, o);
            if (0 === a.offset) {
                var s = X.previous(e, { at: o, match: eC.isText });
                if (!X.above(e, { match: (t) => W.isElement(t) && X.isVoid(e, t) && e.markableVoid(t) })) {
                    var l = X.above(e, { match: (t) => W.isElement(t) && X.isBlock(e, t) });
                    if (s && l) {
                        var [c, d] = s,
                            [, f] = l;
                        eo.isAncestor(f, d) && (u = c);
                    }
                }
            }
            return v(u, q);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: a = e.selection } = t;
            if (a) {
                var o = X.after(e, a, { voids: r });
                if (o) {
                    var [, u] = X.last(e, []),
                        s = [o.path, u];
                    if (eo.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                    if (null == i)
                        if (eo.isPath(a)) {
                            var [l] = X.parent(e, a);
                            i = (e) => l.children.includes(e);
                        } else i = () => !0;
                    var [c] = X.nodes(e, { at: s, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = X.path(e, t, n);
            return [en.get(e, r), r];
        },
        *nodes(e) {
            var t,
                n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: a = e.selection, mode: o = "all", universal: u = !1, reverse: s = !1, voids: l = !1 } = i,
                { match: c } = i;
            if ((c || (c = () => !0), a)) {
                if (Y.isSpan(a)) ((t = a[0]), (n = a[1]));
                else {
                    var d = X.path(e, a, { edge: "start" }),
                        f = X.path(e, a, { edge: "end" });
                    ((t = s ? f : d), (n = s ? d : f));
                }
                var h = en.nodes(e, {
                        reverse: s,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !l && W.isElement(n) && X.isVoid(e, n);
                        },
                    }),
                    p = [];
                for (var [m, _] of h) {
                    var g = r && 0 === eo.compare(_, r[1]);
                    if ("highest" !== o || !g) {
                        if (!c(m, _))
                            if (u && !g && eC.isText(m)) return;
                            else continue;
                        if ("lowest" === o && g) {
                            r = [m, _];
                            continue;
                        }
                        var v = "lowest" === o ? r : [m, _];
                        (v && (u ? p.push(v) : yield v), (r = [m, _]));
                    }
                }
                ("lowest" === o && r && (u ? p.push(r) : yield r), u && (yield* p));
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: r } = t,
                i = (e) => s.get(e) || [],
                a = (e) => {
                    var t = i(e).pop(),
                        n = t.join(",");
                    return ((l.get(e) || new Set()).delete(n), t);
                };
            if (X.isNormalizing(e)) {
                if (n) {
                    var o = Array.from(en.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        u = new Set(o.map((e) => e.join(",")));
                    (s.set(e, o), l.set(e, u));
                }
                0 !== i(e).length &&
                    X.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (en.has(e, t)) {
                                var n = X.node(e, t),
                                    [o, u] = n;
                                W.isElement(o) && 0 === o.children.length && e.normalizeNode(n, { operation: r });
                            }
                        for (var s = i(e), l = s.length, c = 0; 0 !== s.length;) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: s,
                                    iteration: c,
                                    initialDirtyPathsLength: l,
                                    operation: r,
                                })
                            )
                                return;
                            var d = a(e);
                            if (en.has(e, d)) {
                                var f = X.node(e, d);
                                e.normalizeNode(f, { operation: r });
                            }
                            (c++, (s = i(e)));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = X.path(e, t, n),
                i = eo.parent(r);
            return X.node(e, i);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: r, edge: i } = n;
            if (eo.isPath(t)) {
                if ("start" === i) {
                    var [, a] = en.first(e, t);
                    t = a;
                } else if ("end" === i) {
                    var [, o] = en.last(e, t);
                    t = o;
                }
            }
            return (
                ep.isRange(t) &&
                    (t =
                        "start" === i ? ep.start(t) : "end" === i ? ep.end(t) : eo.common(t.anchor.path, t.focus.path)),
                ec.isPoint(t) && (t = t.path),
                null != r && (t = t.slice(0, r)),
                t
            );
        },
        hasPath: (e, t) => en.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return (X.pathRefs(e).delete(i), (i.current = null), t);
                    },
                };
            return (X.pathRefs(e).add(i), i);
        },
        pathRefs(e) {
            var t = f.get(e);
            return (t || ((t = new Set()), f.set(e, t)), t);
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: r = "start" } = n;
            if (eo.isPath(t)) {
                if ("end" === r) {
                    var i,
                        [, a] = en.last(e, t);
                    i = a;
                } else {
                    var [, o] = en.first(e, t);
                    i = o;
                }
                var u = en.get(e, i);
                if (!eC.isText(u))
                    throw Error(
                        "Cannot get the "
                            .concat(r, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(r, " text node."),
                    );
                return { path: i, offset: "end" === r ? u.text.length : 0 };
            }
            if (ep.isRange(t)) {
                var [s, l] = ep.edges(t);
                return "start" === r ? s : l;
            }
            return t;
        },
        pointRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return (X.pointRefs(e).delete(i), (i.current = null), t);
                    },
                };
            return (X.pointRefs(e).add(i), i);
        },
        pointRefs(e) {
            var t = h.get(e);
            return (t || ((t = new Set()), h.set(e, t)), t);
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: r = "offset", reverse: i = !1, voids: a = !1 } = t;
            if (n) {
                var o = X.range(e, n),
                    [u, s] = ep.edges(o),
                    l = i ? s : u,
                    c = !1,
                    d = "",
                    f = 0,
                    h = 0,
                    p = 0;
                for (var [m, _] of X.nodes(e, { at: n, reverse: i, voids: a })) {
                    if (W.isElement(m)) {
                        if (!a && e.isVoid(m)) {
                            yield X.start(e, _);
                            continue;
                        }
                        if (e.isInline(m)) continue;
                        if (X.hasInlines(e, m)) {
                            var g = eo.isAncestor(_, s.path) ? s : X.end(e, _),
                                v = eo.isAncestor(_, u.path) ? u : X.start(e, _);
                            ((d = X.string(e, { anchor: v, focus: g }, { voids: a })), (c = !0));
                        }
                    }
                    if (eC.isText(m)) {
                        var b,
                            D,
                            w,
                            A = eo.equals(_, l.path);
                        for (
                            A
                                ? ((h = i ? l.offset : m.text.length - l.offset), (p = l.offset))
                                : ((h = m.text.length), (p = i ? h : 0)),
                                (A || c || "offset" === r) && (yield { path: _, offset: p }, (c = !1));
                            ;
                        ) {
                            if (0 === f) {
                                if ("" === d) break;
                                ((b = d),
                                    (D = r),
                                    (w = i),
                                    (d = E(
                                        d,
                                        (f =
                                            "character" === D
                                                ? y(b, w)
                                                : "word" === D
                                                  ? C(b, w)
                                                  : "line" === D || "block" === D
                                                    ? b.length
                                                    : 1),
                                        i,
                                    )[1]));
                            }
                            if (((p = i ? p - f : p + f), (h -= f) < 0)) {
                                f = -h;
                                break;
                            }
                            ((f = 0), yield { path: _, offset: p });
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: a = e.selection } = t;
            if (a) {
                var o = X.before(e, a, { voids: r });
                if (o) {
                    var [, u] = X.first(e, []),
                        s = [o.path, u];
                    if (eo.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == i)
                        if (eo.isPath(a)) {
                            var [l] = X.parent(e, a);
                            i = (e) => l.children.includes(e);
                        } else i = () => !0;
                    var [c] = X.nodes(e, { reverse: !0, at: s, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        range: (e, t, n) => (ep.isRange(t) && !n ? t : { anchor: X.start(e, t), focus: X.end(e, n || t) }),
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return (X.rangeRefs(e).delete(i), (i.current = null), t);
                    },
                };
            return (X.rangeRefs(e).add(i), i);
        },
        rangeRefs(e) {
            var t = p.get(e);
            return (t || ((t = new Set()), p.set(e, t)), t);
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            d.set(e, t);
        },
        start: (e, t) => X.point(e, t, { edge: "start" }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                i = X.range(e, t),
                [a, o] = ep.edges(i),
                u = "";
            for (var [s, l] of X.nodes(e, { at: i, match: eC.isText, voids: r })) {
                var c = s.text;
                (eo.equals(l, o.path) && (c = c.slice(0, o.offset)),
                    eo.equals(l, a.path) && (c = c.slice(a.offset)),
                    (u += c));
            }
            return u;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                [i, a] = ep.edges(t);
            if (0 !== i.offset || 0 !== a.offset || ep.isCollapsed(t) || eo.hasPrevious(a.path)) return t;
            var o = X.above(e, { at: a, match: (t) => W.isElement(t) && X.isBlock(e, t), voids: r }),
                u = o ? o[1] : [],
                s = { anchor: X.start(e, i), focus: a },
                l = !0;
            for (var [c, d] of X.nodes(e, { at: s, match: eC.isText, reverse: !0, voids: r })) {
                if (l) {
                    l = !1;
                    continue;
                }
                if ("" !== c.text || eo.isBefore(d, u)) {
                    a = { path: d, offset: c.text.length };
                    break;
                }
            }
            return { anchor: i, focus: a };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return X.above(e, J(J({}, t), {}, { match: (t) => W.isElement(t) && X.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = X.isNormalizing(e);
            X.setNormalizing(e, !1);
            try {
                t();
            } finally {
                X.setNormalizing(e, n);
            }
            X.normalize(e);
        },
    },
    Y = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(eo.isPath) },
    Q = ["children"],
    ee = ["text"],
    et = new WeakMap(),
    en = {
        ancestor(e, t) {
            var n = en.get(e, t);
            if (eC.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(eg.stringify(n)),
                );
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of eo.ancestors(t, n)) {
                var i = [en.ancestor(e, r), r];
                yield i;
            }
        },
        child(e, t) {
            if (eC.isText(e)) throw Error("Cannot get the child of a text node: ".concat(eg.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(eg.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: r = !1 } = n,
                    i = en.ancestor(e, t),
                    { children: a } = i,
                    o = r ? a.length - 1 : 0;
                r ? o >= 0 : o < a.length;
            ) {
                var u = en.child(i, o),
                    s = t.concat(o);
                (yield [u, s], (o = r ? o - 1 : o + 1));
            }
        },
        common(e, t, n) {
            var r = eo.common(t, n);
            return [en.get(e, r), r];
        },
        descendant(e, t) {
            var n = en.get(e, t);
            if (X.isEditor(n))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(eg.stringify(n)),
                );
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of en.nodes(e, t)) 0 !== r.length && (yield [n, r]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of en.nodes(e, t)) W.isElement(n) && (yield [n, r]);
        },
        extractProps(e) {
            if (W.isAncestor(e)) {
                var t = v(e, Q);
                return t;
            }
            var t = v(e, ee);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r;)
                if (eC.isText(r) || 0 === r.children.length) break;
                else ((r = r.children[0]), n.push(0));
            return [r, n];
        },
        fragment(e, t) {
            if (eC.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(eg.stringify(e)));
            return (0, o.jM)({ children: e.children }, (e) => {
                var [n, r] = ep.edges(t);
                for (var [, i] of en.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !ep.includes(t, n);
                    },
                })) {
                    if (!ep.includes(t, i)) {
                        var a = en.parent(e, i),
                            o = i[i.length - 1];
                        a.children.splice(o, 1);
                    }
                    if (eo.equals(i, r.path)) {
                        var u = en.leaf(e, i);
                        u.text = u.text.slice(0, r.offset);
                    }
                    if (eo.equals(i, n.path)) {
                        var s = en.leaf(e, i);
                        s.text = s.text.slice(n.offset);
                    }
                }
                X.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eC.isText(n) || !n.children[i])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(eg.stringify(e)));
                n = n.children[i];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eC.isText(n) || !n.children[i]) return !1;
                n = n.children[i];
            }
            return !0;
        },
        isNode: (e) => eC.isText(e) || W.isElement(e) || X.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = et.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => en.isNode(e));
            return (et.set(e, n), n);
        },
        last(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r;)
                if (eC.isText(r) || 0 === r.children.length) break;
                else {
                    var i = r.children.length - 1;
                    ((r = r.children[i]), n.push(i));
                }
            return [r, n];
        },
        leaf(e, t) {
            var n = en.get(e, t);
            if (!eC.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(eg.stringify(n)),
                );
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of eo.levels(t, n)) {
                var i = en.get(e, r);
                yield [i, r];
            }
        },
        matches: (e, t) =>
            (W.isElement(e) && W.isElementProps(t) && W.matches(e, t)) ||
            (eC.isText(e) && eC.isTextProps(t) && eC.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: r = !1 } = t,
                    { from: i = [], to: a } = t,
                    o = new Set(),
                    u = [],
                    s = e;
                !(a && (r ? eo.isBefore(u, a) : eo.isAfter(u, a)));
            ) {
                if (
                    (o.has(s) || (yield [s, u]),
                    !o.has(s) && !eC.isText(s) && 0 !== s.children.length && (null == n || !1 === n([s, u])))
                ) {
                    o.add(s);
                    var l = r ? s.children.length - 1 : 0;
                    (eo.isAncestor(u, i) && (l = i[u.length]), (u = u.concat(l)), (s = en.get(e, u)));
                    continue;
                }
                if (0 === u.length) break;
                if (!r) {
                    var c = eo.next(u);
                    if (en.has(e, c)) {
                        ((u = c), (s = en.get(e, u)));
                        continue;
                    }
                }
                if (r && 0 !== u[u.length - 1]) {
                    ((u = eo.previous(u)), (s = en.get(e, u)));
                    continue;
                }
                ((u = eo.parent(u)), (s = en.get(e, u)), o.add(s));
            }
        },
        parent(e, t) {
            var n = eo.parent(t),
                r = en.get(e, n);
            if (eC.isText(r))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return r;
        },
        string: (e) => (eC.isText(e) ? e.text : e.children.map(en.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of en.nodes(e, t)) eC.isText(n) && (yield [n, r]);
        },
    };
function er(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? er(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : er(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ea = {
        isNodeOperation: (e) => ea.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!(0, a.Q)(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return eo.isPath(e.path) && en.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && eo.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && eo.isPath(e.path) && (0, a.Q)(e.properties);
                case "move_node":
                    return eo.isPath(e.path) && eo.isPath(e.newPath);
                case "set_node":
                    return eo.isPath(e.path) && (0, a.Q)(e.properties) && (0, a.Q)(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && ep.isRange(e.newProperties)) ||
                        (null === e.newProperties && ep.isRange(e.properties)) ||
                        ((0, a.Q)(e.properties) && (0, a.Q)(e.newProperties))
                    );
                case "split_node":
                    return eo.isPath(e.path) && "number" == typeof e.position && (0, a.Q)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => ea.isOperation(e)),
        isSelectionOperation: (e) => ea.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => ea.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
            switch (e.type) {
                case "insert_node":
                    return ei(ei({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return ei(ei({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return ei(ei({}, e), {}, { type: "split_node", path: eo.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (eo.equals(t, n)) return e;
                    if (eo.isSibling(n, t)) return ei(ei({}, e), {}, { path: t, newPath: n });
                    var r = eo.transform(n, e),
                        i = eo.transform(eo.next(n), e);
                    return ei(ei({}, e), {}, { path: r, newPath: i });
                case "remove_node":
                    return ei(ei({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return ei(ei({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: a, newProperties: o } = e;
                    return ei(ei({}, e), {}, { properties: o, newProperties: a });
                case "set_selection":
                    var { properties: u, newProperties: s } = e;
                    if (null == u) return ei(ei({}, e), {}, { properties: s, newProperties: null });
                    if (null == s) return ei(ei({}, e), {}, { properties: null, newProperties: u });
                    return ei(ei({}, e), {}, { properties: s, newProperties: u });
                case "split_node":
                    return ei(ei({}, e), {}, { type: "merge_node", path: eo.next(e.path) });
            }
        },
    },
    eo = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                r = eo.levels(e, t);
            return n ? r.slice(1) : r.slice(0, -1);
        },
        common(e, t) {
            for (var n = [], r = 0; r < e.length && r < t.length; r++) {
                var i = e[r];
                if (i !== t[r]) break;
                n.push(i);
            }
            return n;
        },
        compare(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                if (e[r] < t[r]) return -1;
                if (e[r] > t[r]) return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                a = e[n],
                o = t[n];
            return eo.equals(r, i) && a > o;
        },
        endsAt(e, t) {
            var n = e.length,
                r = e.slice(0, n),
                i = t.slice(0, n);
            return eo.equals(r, i);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                a = e[n],
                o = t[n];
            return eo.equals(r, i) && a < o;
        },
        equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === eo.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === eo.compare(e, t),
        isBefore: (e, t) => -1 === eo.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === eo.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === eo.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === eo.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === eo.compare(e, t),
        isPath: (e) => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
                r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && eo.equals(n, r);
        },
        levels(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { reverse: n = !1 } = t,
                    r = [],
                    i = 0;
                i <= e.length;
                i++
            )
                r.push(e.slice(0, i));
            return (n && r.reverse(), r);
        },
        next(e) {
            if (0 === e.length)
                throw Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
        },
        operationCanTransformPath(e) {
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                case "merge_node":
                case "split_node":
                case "move_node":
                    return !0;
                default:
                    return !1;
            }
        },
        parent(e) {
            if (0 === e.length) throw Error("Cannot get the parent path of the root path [".concat(e, "]."));
            return e.slice(0, -1);
        },
        previous(e) {
            if (0 === e.length)
                throw Error(
                    "Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."),
                );
            var t = e[e.length - 1];
            if (t <= 0)
                throw Error(
                    "Cannot get the previous path of a first child path [".concat(
                        e,
                        "] because it would result in a negative index.",
                    ),
                );
            return e.slice(0, -1).concat(t - 1);
        },
        relative(e, t) {
            if (!eo.isAncestor(t, e) && !eo.equals(e, t))
                throw Error(
                    "Cannot get the relative path of ["
                        .concat(e, "] inside ancestor [")
                        .concat(t, "], because it is not above or equal to the path."),
                );
            return e.slice(t.length);
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return null;
            var r = [...e],
                { affinity: i = "forward" } = n;
            if (0 === e.length) return r;
            switch (t.type) {
                case "insert_node":
                    var { path: a } = t;
                    (eo.equals(a, r) || eo.endsBefore(a, r) || eo.isAncestor(a, r)) && (r[a.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: o } = t;
                    if (eo.equals(o, r) || eo.isAncestor(o, r)) return null;
                    eo.endsBefore(o, r) && (r[o.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: u, position: s } = t;
                    eo.equals(u, r) || eo.endsBefore(u, r)
                        ? (r[u.length - 1] -= 1)
                        : eo.isAncestor(u, r) && ((r[u.length - 1] -= 1), (r[u.length] += s));
                    break;
                case "split_node":
                    var { path: l, position: c } = t;
                    if (eo.equals(l, r)) {
                        if ("forward" === i) r[r.length - 1] += 1;
                        else if ("backward" !== i) return null;
                    } else
                        eo.endsBefore(l, r)
                            ? (r[l.length - 1] += 1)
                            : eo.isAncestor(l, r) && e[l.length] >= c && ((r[l.length - 1] += 1), (r[l.length] -= c));
                    break;
                case "move_node":
                    var { path: d, newPath: f } = t;
                    if (eo.equals(d, f)) break;
                    if (eo.isAncestor(d, r) || eo.equals(d, r)) {
                        var h = f.slice();
                        return (
                            eo.endsBefore(d, f) && d.length < f.length && (h[d.length - 1] -= 1),
                            h.concat(r.slice(d.length))
                        );
                    }
                    eo.isSibling(d, f) && (eo.isAncestor(f, r) || eo.equals(f, r))
                        ? eo.endsBefore(d, r)
                            ? (r[d.length - 1] -= 1)
                            : (r[d.length - 1] += 1)
                        : eo.endsBefore(f, r) || eo.equals(f, r) || eo.isAncestor(f, r)
                          ? (eo.endsBefore(d, r) && (r[d.length - 1] -= 1), (r[f.length - 1] += 1))
                          : eo.endsBefore(d, r) && (eo.equals(f, r) && (r[f.length - 1] += 1), (r[d.length - 1] -= 1));
            }
            return r;
        },
    },
    eu = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = eo.transform(n, t, { affinity: r });
                ((e.current = i), null == i && e.unref());
            }
        },
    };
function es(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? es(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : es(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ec = {
        compare(e, t) {
            var n = eo.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === ec.compare(e, t),
        isBefore: (e, t) => -1 === ec.compare(e, t),
        equals: (e, t) => e.offset === t.offset && eo.equals(e.path, t.path),
        isPoint: (e) => (0, a.Q)(e) && "number" == typeof e.offset && eo.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.jM)(e, (e) => {
                if (null === e) return null;
                var { affinity: r = "forward" } = n,
                    { path: i, offset: a } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = eo.transform(i, t, n);
                        break;
                    case "insert_text":
                        eo.equals(t.path, i) &&
                            (t.offset < a || (t.offset === a && "forward" === r)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        (eo.equals(t.path, i) && (e.offset += t.position), (e.path = eo.transform(i, t, n)));
                        break;
                    case "remove_text":
                        eo.equals(t.path, i) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (eo.equals(t.path, i) || eo.isAncestor(t.path, i)) return null;
                        e.path = eo.transform(i, t, n);
                        break;
                    case "split_node":
                        if (eo.equals(t.path, i))
                            if (t.position === a && null == r) return null;
                            else
                                (t.position < a || (t.position === a && "forward" === r)) &&
                                    ((e.offset -= t.position),
                                    (e.path = eo.transform(i, t, el(el({}, n), {}, { affinity: "forward" }))));
                        else e.path = eo.transform(i, t, n);
                }
            });
        },
    },
    ed = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = ec.transform(n, t, { affinity: r });
                ((e.current = i), null == i && e.unref());
            }
        },
    },
    ef = ["anchor", "focus"];
function eh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
var ep = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                { anchor: r, focus: i } = e;
            return ep.isBackward(e) === n ? [r, i] : [i, r];
        },
        end(e) {
            var [, t] = ep.edges(e);
            return t;
        },
        equals: (e, t) => ec.equals(e.anchor, t.anchor) && ec.equals(e.focus, t.focus),
        includes(e, t) {
            if (ep.isRange(t)) {
                if (ep.includes(e, t.anchor) || ep.includes(e, t.focus)) return !0;
                var [n, r] = ep.edges(e),
                    [i, a] = ep.edges(t);
                return ec.isBefore(n, i) && ec.isAfter(r, a);
            }
            var [o, u] = ep.edges(e),
                s = !1,
                l = !1;
            return (
                ec.isPoint(t)
                    ? ((s = ec.compare(t, o) >= 0), (l = 0 >= ec.compare(t, u)))
                    : ((s = eo.compare(t, o.path) >= 0), (l = 0 >= eo.compare(t, u.path))),
                s && l
            );
        },
        intersection(e, t) {
            var n = v(e, ef),
                [r, i] = ep.edges(e),
                [a, o] = ep.edges(t),
                s = ec.isBefore(r, a) ? a : r,
                l = ec.isBefore(i, o) ? i : o;
            return ec.isBefore(l, s)
                ? null
                : (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? eh(Object(n), !0).forEach(function (t) {
                                    u(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : eh(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                      }
                      return e;
                  })({ anchor: s, focus: l }, n);
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return ec.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return ec.equals(t, n);
        },
        isExpanded: (e) => !ep.isCollapsed(e),
        isForward: (e) => !ep.isBackward(e),
        isRange: (e) => (0, a.Q)(e) && ec.isPoint(e.anchor) && ec.isPoint(e.focus),
        *points(e) {
            (yield [e.anchor, "anchor"], yield [e.focus, "focus"]);
        },
        start(e) {
            var [t] = ep.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.jM)(e, (e) => {
                if (null === e) return null;
                var r,
                    i,
                    { affinity: a = "inward" } = n;
                if ("inward" === a) {
                    var o = ep.isCollapsed(e);
                    ep.isForward(e)
                        ? ((r = "forward"), (i = o ? r : "backward"))
                        : ((r = "backward"), (i = o ? r : "forward"));
                } else
                    "outward" === a
                        ? ep.isForward(e)
                            ? ((r = "backward"), (i = "forward"))
                            : ((r = "forward"), (i = "backward"))
                        : ((r = a), (i = a));
                var u = ec.transform(e.anchor, t, { affinity: r }),
                    s = ec.transform(e.focus, t, { affinity: i });
                if (!u || !s) return null;
                ((e.anchor = u), (e.focus = s));
            });
        },
    },
    em = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = ep.transform(n, t, { affinity: r });
                ((e.current = i), null == i && e.unref());
            }
        },
    },
    e_ = void 0,
    eg = {
        setScrubber(e) {
            e_ = e;
        },
        stringify: (e) => JSON.stringify(e, e_),
    },
    ev = (e, t) => {
        for (var n in e) {
            var r = e[n],
                i = t[n];
            if ((0, a.Q)(r) && (0, a.Q)(i)) {
                if (!ev(r, i)) return !1;
            } else if (Array.isArray(r) && Array.isArray(i)) {
                if (r.length !== i.length) return !1;
                for (var o = 0; o < r.length; o++) if (r[o] !== i[o]) return !1;
            } else if (r !== i) return !1;
        }
        for (var u in t) if (void 0 === e[u] && void 0 !== t[u]) return !1;
        return !0;
    },
    ey = ["text"],
    eb = ["anchor", "focus"];
function eD(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eD(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eD(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eC = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: r = !1 } = n;
        return ev(r ? v(e, ey) : e, r ? v(t, ey) : t);
    },
    isText: (e) => (0, a.Q)(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => eC.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [ew({}, e)];
        for (var r of t) {
            var i = v(r, eb),
                [a, o] = ep.edges(r),
                u = [],
                s = 0,
                l = a.offset,
                c = o.offset;
            for (var d of n) {
                var { length: f } = d.text,
                    h = s;
                if (((s += f), l <= h && s <= c)) {
                    (Object.assign(d, i), u.push(d));
                    continue;
                }
                if ((l !== c && (l === s || c === h)) || l > s || c < h || (c === h && 0 !== h)) {
                    u.push(d);
                    continue;
                }
                var p = d,
                    m = void 0,
                    _ = void 0;
                if (c < s) {
                    var g = c - h;
                    ((_ = ew(ew({}, p), {}, { text: p.text.slice(g) })),
                        (p = ew(ew({}, p), {}, { text: p.text.slice(0, g) })));
                }
                if (l > h) {
                    var y = l - h;
                    ((m = ew(ew({}, p), {}, { text: p.text.slice(0, y) })),
                        (p = ew(ew({}, p), {}, { text: p.text.slice(y) })));
                }
                (Object.assign(p, i), m && u.push(m), u.push(p), _ && u.push(_));
            }
            n = u;
        }
        return n;
    },
};
function eE(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eA(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eE(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eE(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ek = ["text"],
    eB = ["children"];
function eF(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function ex(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eF(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eF(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eT = (e, t) =>
        W.isElement(t) ? !!X.isVoid(e, t) || (1 === t.children.length && eT(e, t.children[0])) : !X.isEditor(t) && !0,
    eR = (e, t) => {
        var [n] = X.node(e, t);
        return (e) => e === n;
    };
function eV(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eS(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eV(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eV(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function eP(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eO(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eP(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eP(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ez = eO(
    eO(
        eO(
            eO(
                {},
                {
                    transform(e, t) {
                        e.children = (0, o.mq)(e.children);
                        var n = e.selection && (0, o.mq)(e.selection);
                        try {
                            n = ((e, t, n) => {
                                switch (n.type) {
                                    case "insert_node":
                                        var { path: r, node: i } = n,
                                            a = en.parent(e, r),
                                            o = r[r.length - 1];
                                        if (o > a.children.length)
                                            throw Error(
                                                'Cannot apply an "insert_node" operation at path ['.concat(
                                                    r,
                                                    "] because the destination is past the end of the node.",
                                                ),
                                            );
                                        if ((a.children.splice(o, 0, i), t))
                                            for (var [u, s] of ep.points(t)) t[s] = ec.transform(u, n);
                                        break;
                                    case "insert_text":
                                        var { path: l, offset: c, text: d } = n;
                                        if (0 === d.length) break;
                                        var f = en.leaf(e, l),
                                            h = f.text.slice(0, c),
                                            p = f.text.slice(c);
                                        if (((f.text = h + d + p), t))
                                            for (var [m, _] of ep.points(t)) t[_] = ec.transform(m, n);
                                        break;
                                    case "merge_node":
                                        var { path: g } = n,
                                            v = en.get(e, g),
                                            y = eo.previous(g),
                                            b = en.get(e, y),
                                            D = en.parent(e, g),
                                            w = g[g.length - 1];
                                        if (eC.isText(v) && eC.isText(b)) b.text += v.text;
                                        else if (eC.isText(v) || eC.isText(b))
                                            throw Error(
                                                'Cannot apply a "merge_node" operation at path ['
                                                    .concat(g, "] to nodes of different interfaces: ")
                                                    .concat(eg.stringify(v), " ")
                                                    .concat(eg.stringify(b)),
                                            );
                                        else b.children.push(...v.children);
                                        if ((D.children.splice(w, 1), t))
                                            for (var [C, E] of ep.points(t)) t[E] = ec.transform(C, n);
                                        break;
                                    case "move_node":
                                        var { path: A, newPath: k } = n;
                                        if (eo.isAncestor(A, k))
                                            throw Error(
                                                "Cannot move a path ["
                                                    .concat(A, "] to new path [")
                                                    .concat(k, "] because the destination is inside itself."),
                                            );
                                        var B = en.get(e, A),
                                            F = en.parent(e, A),
                                            x = A[A.length - 1];
                                        F.children.splice(x, 1);
                                        var T = eo.transform(A, n),
                                            R = en.get(e, eo.parent(T)),
                                            V = T[T.length - 1];
                                        if ((R.children.splice(V, 0, B), t))
                                            for (var [S, P] of ep.points(t)) t[P] = ec.transform(S, n);
                                        break;
                                    case "remove_node":
                                        var { path: O } = n,
                                            z = O[O.length - 1];
                                        if ((en.parent(e, O).children.splice(z, 1), t))
                                            for (var [M, N] of ep.points(t)) {
                                                var I = ec.transform(M, n);
                                                if (null != t && null != I) t[N] = I;
                                                else {
                                                    var j = void 0,
                                                        L = void 0;
                                                    for (var [Z, $] of en.texts(e))
                                                        if (-1 === eo.compare($, O)) j = [Z, $];
                                                        else {
                                                            L = [Z, $];
                                                            break;
                                                        }
                                                    var U = !1;
                                                    (j &&
                                                        L &&
                                                        (U = eo.equals(L[1], O)
                                                            ? !eo.hasPrevious(L[1])
                                                            : eo.common(j[1], O).length < eo.common(L[1], O).length),
                                                        j && !U
                                                            ? ((M.path = j[1]), (M.offset = j[0].text.length))
                                                            : L
                                                              ? ((M.path = L[1]), (M.offset = 0))
                                                              : (t = null));
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var { path: W, offset: G, text: q } = n;
                                        if (0 === q.length) break;
                                        var K = en.leaf(e, W),
                                            J = K.text.slice(0, G),
                                            H = K.text.slice(G + q.length);
                                        if (((K.text = J + H), t))
                                            for (var [X, Y] of ep.points(t)) t[Y] = ec.transform(X, n);
                                        break;
                                    case "set_node":
                                        var { path: Q, properties: ee, newProperties: et } = n;
                                        if (0 === Q.length) throw Error("Cannot set properties on the root node!");
                                        var er = en.get(e, Q);
                                        for (var ei in et) {
                                            if ("children" === ei || "text" === ei)
                                                throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                                            var ea = et[ei];
                                            null == ea ? delete er[ei] : (er[ei] = ea);
                                        }
                                        for (var eu in ee) et.hasOwnProperty(eu) || delete er[eu];
                                        break;
                                    case "set_selection":
                                        var { newProperties: es } = n;
                                        if (null == es) t = es;
                                        else {
                                            if (null == t) {
                                                if (!ep.isRange(es))
                                                    throw Error(
                                                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                            eg.stringify(es),
                                                            " when there is no current selection.",
                                                        ),
                                                    );
                                                t = eA({}, es);
                                            }
                                            for (var el in es) {
                                                var ed = es[el];
                                                if (null == ed) {
                                                    if ("anchor" === el || "focus" === el)
                                                        throw Error(
                                                            'Cannot remove the "'.concat(el, '" selection property'),
                                                        );
                                                    delete t[el];
                                                } else t[el] = ed;
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var ef,
                                            { path: eh, position: em, properties: e_ } = n;
                                        if (0 === eh.length)
                                            throw Error(
                                                'Cannot apply a "split_node" operation at path ['.concat(
                                                    eh,
                                                    "] because the root node cannot be split.",
                                                ),
                                            );
                                        var ev = en.get(e, eh),
                                            ey = en.parent(e, eh),
                                            eb = eh[eh.length - 1];
                                        if (eC.isText(ev)) {
                                            var eD = ev.text.slice(0, em),
                                                ew = ev.text.slice(em);
                                            ((ev.text = eD), (ef = eA(eA({}, e_), {}, { text: ew })));
                                        } else {
                                            var eE = ev.children.slice(0, em),
                                                ek = ev.children.slice(em);
                                            ((ev.children = eE), (ef = eA(eA({}, e_), {}, { children: ek })));
                                        }
                                        if ((ey.children.splice(eb + 1, 0, ef), t))
                                            for (var [eB, eF] of ep.points(t)) t[eF] = ec.transform(eB, n);
                                }
                                return t;
                            })(e, n, t);
                        } finally {
                            ((e.children = (0, o.vD)(e.children)),
                                n ? (e.selection = (0, o.Qx)(n) ? (0, o.vD)(n) : n) : (e.selection = null));
                        }
                    },
                },
            ),
            {
                insertNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    X.withoutNormalizing(e, () => {
                        var { hanging: r = !1, voids: i = !1, mode: a = "lowest" } = n,
                            { at: o, match: u, select: s } = n;
                        if ((en.isNode(t) && (t = [t]), 0 !== t.length)) {
                            var [l] = t;
                            if (
                                (o ||
                                    ((o = e.selection ? e.selection : e.children.length > 0 ? X.end(e, []) : [0]),
                                    (s = !0)),
                                null == s && (s = !1),
                                ep.isRange(o))
                            )
                                if ((r || (o = X.unhangRange(e, o, { voids: i })), ep.isCollapsed(o))) o = o.anchor;
                                else {
                                    var [, c] = ep.edges(o),
                                        d = X.pointRef(e, c);
                                    (ez.delete(e, { at: o }), (o = d.unref()));
                                }
                            if (ec.isPoint(o)) {
                                null == u &&
                                    (u = eC.isText(l)
                                        ? (e) => eC.isText(e)
                                        : e.isInline(l)
                                          ? (t) => eC.isText(t) || X.isInline(e, t)
                                          : (t) => W.isElement(t) && X.isBlock(e, t));
                                var [f] = X.nodes(e, { at: o.path, match: u, mode: a, voids: i });
                                if (!f) return;
                                var [, h] = f,
                                    p = X.pathRef(e, h),
                                    m = X.isEnd(e, o, h);
                                ez.splitNodes(e, { at: o, match: u, mode: a, voids: i });
                                var _ = p.unref();
                                o = m ? eo.next(_) : _;
                            }
                            var g = eo.parent(o),
                                v = o[o.length - 1];
                            if (!(!i && X.void(e, { at: g }))) {
                                for (var y of t) {
                                    var b = g.concat(v);
                                    (v++, e.apply({ type: "insert_node", path: b, node: y }), (o = eo.next(o)));
                                }
                                if (((o = eo.previous(o)), s)) {
                                    var D = X.end(e, o);
                                    D && ez.select(e, D);
                                }
                            }
                        }
                    });
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var { at: n = e.selection, mode: r = "lowest", voids: i = !1 } = t,
                            { match: a } = t;
                        if ((null == a && (a = eo.isPath(n) ? eR(e, n) : (t) => W.isElement(t) && X.isBlock(e, t)), n))
                            for (var o of Array.from(X.nodes(e, { at: n, match: a, mode: r, voids: i }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            })) {
                                var u = o.unref();
                                if (u.length < 2)
                                    throw Error(
                                        "Cannot lift node at a path [".concat(
                                            u,
                                            "] because it has a depth of less than `2`.",
                                        ),
                                    );
                                var [s, l] = X.node(e, eo.parent(u)),
                                    c = u[u.length - 1],
                                    { length: d } = s.children;
                                if (1 === d) {
                                    var f = eo.next(l);
                                    (ez.moveNodes(e, { at: u, to: f, voids: i }),
                                        ez.removeNodes(e, { at: l, voids: i }));
                                } else if (0 === c) ez.moveNodes(e, { at: u, to: l, voids: i });
                                else if (c === d - 1) {
                                    var h = eo.next(l);
                                    ez.moveNodes(e, { at: u, to: h, voids: i });
                                } else {
                                    var p = eo.next(u),
                                        m = eo.next(l);
                                    (ez.splitNodes(e, { at: p, voids: i }),
                                        ez.moveNodes(e, { at: u, to: m, voids: i }));
                                }
                            }
                    });
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { match: i, at: a = e.selection } = t,
                            { hanging: o = !1, voids: u = !1, mode: s = "lowest" } = t;
                        if (a) {
                            if (null == i)
                                if (eo.isPath(a)) {
                                    var [l] = X.parent(e, a);
                                    i = (e) => l.children.includes(e);
                                } else i = (t) => W.isElement(t) && X.isBlock(e, t);
                            if ((!o && ep.isRange(a) && (a = X.unhangRange(e, a, { voids: u })), ep.isRange(a)))
                                if (ep.isCollapsed(a)) a = a.anchor;
                                else {
                                    var [, c] = ep.edges(a),
                                        d = X.pointRef(e, c);
                                    (ez.delete(e, { at: a }), (a = d.unref()), null == t.at && ez.select(e, a));
                                }
                            var [f] = X.nodes(e, { at: a, match: i, voids: u, mode: s }),
                                h = X.previous(e, { at: a, match: i, voids: u, mode: s });
                            if (f && h) {
                                var [p, m] = f,
                                    [_, g] = h;
                                if (0 !== m.length && 0 !== g.length) {
                                    var y = eo.next(g),
                                        b = eo.common(m, g),
                                        D = eo.isSibling(m, g),
                                        w = Array.from(X.levels(e, { at: m }), (e) => {
                                            var [t] = e;
                                            return t;
                                        })
                                            .slice(b.length)
                                            .slice(0, -1),
                                        C = X.above(e, {
                                            at: m,
                                            mode: "highest",
                                            match: (t) => w.includes(t) && eT(e, t),
                                        }),
                                        E = C && X.pathRef(e, C[1]);
                                    if (eC.isText(p) && eC.isText(_)) {
                                        var A = v(p, ek);
                                        ((r = _.text.length), (n = A));
                                    } else if (W.isElement(p) && W.isElement(_)) {
                                        var A = v(p, eB);
                                        ((r = _.children.length), (n = A));
                                    } else
                                        throw Error(
                                            "Cannot merge the node at path ["
                                                .concat(
                                                    m,
                                                    "] with the previous sibling because it is not the same kind: ",
                                                )
                                                .concat(eg.stringify(p), " ")
                                                .concat(eg.stringify(_)),
                                        );
                                    (D || ez.moveNodes(e, { at: m, to: y, voids: u }),
                                        E && ez.removeNodes(e, { at: E.current, voids: u }),
                                        (W.isElement(_) && X.isEmpty(e, _)) ||
                                        (eC.isText(_) && "" === _.text && 0 !== g[g.length - 1])
                                            ? ez.removeNodes(e, { at: g, voids: u })
                                            : e.apply({ type: "merge_node", path: y, position: r, properties: n }),
                                        E && E.unref());
                                }
                            }
                        }
                    });
                },
                moveNodes(e, t) {
                    X.withoutNormalizing(e, () => {
                        var { to: n, at: r = e.selection, mode: i = "lowest", voids: a = !1 } = t,
                            { match: o } = t;
                        if (r) {
                            null == o && (o = eo.isPath(r) ? eR(e, r) : (t) => W.isElement(t) && X.isBlock(e, t));
                            var u = X.pathRef(e, n);
                            for (var s of Array.from(X.nodes(e, { at: r, match: o, mode: i, voids: a }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            })) {
                                var l = s.unref(),
                                    c = u.current;
                                (0 !== l.length && e.apply({ type: "move_node", path: l, newPath: c }),
                                    u.current &&
                                        eo.isSibling(c, l) &&
                                        eo.isAfter(c, l) &&
                                        (u.current = eo.next(u.current)));
                            }
                            u.unref();
                        }
                    });
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var { hanging: n = !1, voids: r = !1, mode: i = "lowest" } = t,
                            { at: a = e.selection, match: o } = t;
                        if (a)
                            for (var u of (null == o &&
                                (o = eo.isPath(a) ? eR(e, a) : (t) => W.isElement(t) && X.isBlock(e, t)),
                            !n && ep.isRange(a) && (a = X.unhangRange(e, a, { voids: r })),
                            Array.from(X.nodes(e, { at: a, match: o, mode: i, voids: r }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            }))) {
                                var s = u.unref();
                                if (s) {
                                    var [l] = X.node(e, s);
                                    e.apply({ type: "remove_node", path: s, node: l });
                                }
                            }
                    });
                },
                setNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    X.withoutNormalizing(e, () => {
                        var { match: r, at: i = e.selection, compare: a, merge: o } = n,
                            { hanging: u = !1, mode: s = "lowest", split: l = !1, voids: c = !1 } = n;
                        if (i) {
                            if (
                                (null == r && (r = eo.isPath(i) ? eR(e, i) : (t) => W.isElement(t) && X.isBlock(e, t)),
                                !u && ep.isRange(i) && (i = X.unhangRange(e, i, { voids: c })),
                                l && ep.isRange(i))
                            ) {
                                if (ep.isCollapsed(i) && X.leaf(e, i.anchor)[0].text.length > 0) return;
                                var d = X.rangeRef(e, i, { affinity: "inward" }),
                                    [f, h] = ep.edges(i),
                                    p = "lowest" === s ? "lowest" : "highest",
                                    m = X.isEnd(e, h, h.path);
                                ez.splitNodes(e, { at: h, match: r, mode: p, voids: c, always: !m });
                                var _ = X.isStart(e, f, f.path);
                                (ez.splitNodes(e, { at: f, match: r, mode: p, voids: c, always: !_ }),
                                    (i = d.unref()),
                                    null == n.at && ez.select(e, i));
                            }
                            for (var [g, v] of (a || (a = (e, t) => e !== t),
                            X.nodes(e, { at: i, match: r, mode: s, voids: c }))) {
                                var y = {},
                                    b = {};
                                if (0 !== v.length) {
                                    var D = !1;
                                    for (var w in t)
                                        "children" !== w &&
                                            "text" !== w &&
                                            a(t[w], g[w]) &&
                                            ((D = !0),
                                            g.hasOwnProperty(w) && (y[w] = g[w]),
                                            o ? null != t[w] && (b[w] = o(g[w], t[w])) : null != t[w] && (b[w] = t[w]));
                                    D && e.apply({ type: "set_node", path: v, properties: y, newProperties: b });
                                }
                            }
                        }
                    });
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { mode: i = "lowest", voids: a = !1 } = t,
                            { match: o, at: u = e.selection, height: s = 0, always: l = !1 } = t;
                        if (
                            (null == o && (o = (t) => W.isElement(t) && X.isBlock(e, t)),
                            ep.isRange(u) &&
                                (u = ((e, t) => {
                                    if (ep.isCollapsed(t)) return t.anchor;
                                    var [, n] = ep.edges(t),
                                        r = X.pointRef(e, n);
                                    return (ez.delete(e, { at: t }), r.unref());
                                })(e, u)),
                            eo.isPath(u))
                        ) {
                            var c = u,
                                d = X.point(e, c),
                                [f] = X.parent(e, c);
                            ((o = (e) => e === f), (s = d.path.length - c.length + 1), (u = d), (l = !0));
                        }
                        if (u) {
                            var h = X.pointRef(e, u, { affinity: "backward" });
                            try {
                                var [p] = X.nodes(e, { at: u, match: o, mode: i, voids: a });
                                if (!p) return;
                                var m = X.void(e, { at: u, mode: "highest" });
                                if (!a && m) {
                                    var [_, g] = m;
                                    if (W.isElement(_) && e.isInline(_)) {
                                        var v = X.after(e, g);
                                        if (!v) {
                                            var y = eo.next(g);
                                            (ez.insertNodes(e, { text: "" }, { at: y, voids: a }), (v = X.point(e, y)));
                                        }
                                        ((u = v), (l = !0));
                                    }
                                    ((s = u.path.length - g.length + 1), (l = !0));
                                }
                                n = X.pointRef(e, u);
                                var b = u.path.length - s,
                                    [, D] = p,
                                    w = u.path.slice(0, b),
                                    C = 0 === s ? u.offset : u.path[b] + 0;
                                for (var [E, A] of X.levels(e, { at: w, reverse: !0, voids: a })) {
                                    var k = !1;
                                    if (
                                        A.length < D.length ||
                                        0 === A.length ||
                                        (!a && W.isElement(E) && X.isVoid(e, E))
                                    )
                                        break;
                                    var B = h.current,
                                        F = X.isEnd(e, B, A);
                                    if (l || !h || !X.isEdge(e, B, A)) {
                                        k = !0;
                                        var x = en.extractProps(E);
                                        e.apply({ type: "split_node", path: A, position: C, properties: x });
                                    }
                                    C = A[A.length - 1] + (k || F ? 1 : 0);
                                }
                                if (null == t.at) {
                                    var T = n.current || X.end(e, []);
                                    ez.select(e, T);
                                }
                            } finally {
                                (h.unref(), null == (r = n) || r.unref());
                            }
                        }
                    });
                },
                unsetNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(t) || (t = [t]);
                    var r = {};
                    for (var i of t) r[i] = null;
                    ez.setNodes(e, r, n);
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                            { at: a = e.selection, match: o } = t;
                        if (a) {
                            (null == o && (o = eo.isPath(a) ? eR(e, a) : (t) => W.isElement(t) && X.isBlock(e, t)),
                                eo.isPath(a) && (a = X.range(e, a)));
                            var u = ep.isRange(a) ? X.rangeRef(e, a) : null;
                            for (var s of Array.from(X.nodes(e, { at: a, match: o, mode: n, voids: i }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            }).reverse())
                                !(function (t) {
                                    var n = t.unref(),
                                        [a] = X.node(e, n),
                                        o = X.range(e, n);
                                    (r && u && (o = ep.intersection(u.current, o)),
                                        ez.liftNodes(e, {
                                            at: o,
                                            match: (e) => W.isAncestor(a) && a.children.includes(e),
                                            voids: i,
                                        }));
                                })(s);
                            u && u.unref();
                        }
                    });
                },
                wrapNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    X.withoutNormalizing(e, () => {
                        var { mode: r = "lowest", split: i = !1, voids: a = !1 } = n,
                            { match: o, at: u = e.selection } = n;
                        if (u) {
                            if (
                                (null == o &&
                                    (o = eo.isPath(u)
                                        ? eR(e, u)
                                        : e.isInline(t)
                                          ? (t) => (W.isElement(t) && X.isInline(e, t)) || eC.isText(t)
                                          : (t) => W.isElement(t) && X.isBlock(e, t)),
                                i && ep.isRange(u))
                            ) {
                                var [s, l] = ep.edges(u),
                                    c = X.rangeRef(e, u, { affinity: "inward" });
                                (ez.splitNodes(e, { at: l, match: o, voids: a }),
                                    ez.splitNodes(e, { at: s, match: o, voids: a }),
                                    (u = c.unref()),
                                    null == n.at && ez.select(e, u));
                            }
                            for (var [, d] of Array.from(
                                X.nodes(e, {
                                    at: u,
                                    match: e.isInline(t)
                                        ? (t) => W.isElement(t) && X.isBlock(e, t)
                                        : (e) => X.isEditor(e),
                                    mode: "lowest",
                                    voids: a,
                                }),
                            )) {
                                var f = ep.isRange(u) ? ep.intersection(u, X.range(e, d)) : u;
                                if (f) {
                                    var h = Array.from(X.nodes(e, { at: f, match: o, mode: r, voids: a }));
                                    if (
                                        h.length > 0 &&
                                        "continue" ===
                                            (function () {
                                                var [n] = h,
                                                    r = h[h.length - 1],
                                                    [, i] = n,
                                                    [, o] = r;
                                                if (0 === i.length && 0 === o.length) return "continue";
                                                var u = eo.equals(i, o) ? eo.parent(i) : eo.common(i, o),
                                                    s = X.range(e, i, o),
                                                    [l] = X.node(e, u),
                                                    c = u.length + 1,
                                                    d = eo.next(o.slice(0, c)),
                                                    f = ex(ex({}, t), {}, { children: [] });
                                                (ez.insertNodes(e, f, { at: d, voids: a }),
                                                    ez.moveNodes(e, {
                                                        at: s,
                                                        match: (e) => W.isAncestor(l) && l.children.includes(e),
                                                        to: d.concat(0),
                                                        voids: a,
                                                    }));
                                            })()
                                    )
                                        continue;
                                }
                            }
                        }
                    });
                },
            },
        ),
        {
            collapse(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { edge: n = "anchor" } = t,
                    { selection: r } = e;
                if (r) {
                    if ("anchor" === n) ez.select(e, r.anchor);
                    else if ("focus" === n) ez.select(e, r.focus);
                    else if ("start" === n) {
                        var [i] = ep.edges(r);
                        ez.select(e, i);
                    } else if ("end" === n) {
                        var [, a] = ep.edges(r);
                        ez.select(e, a);
                    }
                }
            },
            deselect(e) {
                var { selection: t } = e;
                t && e.apply({ type: "set_selection", properties: t, newProperties: null });
            },
            move(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { selection: n } = e,
                    { distance: r = 1, unit: i = "character", reverse: a = !1 } = t,
                    { edge: o = null } = t;
                if (n) {
                    ("start" === o && (o = ep.isBackward(n) ? "focus" : "anchor"),
                        "end" === o && (o = ep.isBackward(n) ? "anchor" : "focus"));
                    var { anchor: u, focus: s } = n,
                        l = { distance: r, unit: i },
                        c = {};
                    if (null == o || "anchor" === o) {
                        var d = a ? X.before(e, u, l) : X.after(e, u, l);
                        d && (c.anchor = d);
                    }
                    if (null == o || "focus" === o) {
                        var f = a ? X.before(e, s, l) : X.after(e, s, l);
                        f && (c.focus = f);
                    }
                    ez.setSelection(e, c);
                }
            },
            select(e, t) {
                var { selection: n } = e;
                if (((t = X.range(e, t)), n)) return void ez.setSelection(e, t);
                if (!ep.isRange(t))
                    throw Error(
                        "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                            eg.stringify(t),
                        ),
                    );
                e.apply({ type: "set_selection", properties: n, newProperties: t });
            },
            setPoint(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { selection: r } = e,
                    { edge: i = "both" } = n;
                if (r) {
                    ("start" === i && (i = ep.isBackward(r) ? "focus" : "anchor"),
                        "end" === i && (i = ep.isBackward(r) ? "anchor" : "focus"));
                    var { anchor: a, focus: o } = r,
                        u = "anchor" === i ? a : o;
                    ez.setSelection(e, { ["anchor" === i ? "anchor" : "focus"]: eS(eS({}, u), t) });
                }
            },
            setSelection(e, t) {
                var { selection: n } = e,
                    r = {},
                    i = {};
                if (n) {
                    for (var a in t)
                        (("anchor" !== a || null == t.anchor || ec.equals(t.anchor, n.anchor)) &&
                            ("focus" !== a || null == t.focus || ec.equals(t.focus, n.focus)) &&
                            ("anchor" === a || "focus" === a || t[a] === n[a])) ||
                            ((r[a] = n[a]), (i[a] = t[a]));
                    Object.keys(r).length > 0 && e.apply({ type: "set_selection", properties: r, newProperties: i });
                }
            },
        },
    ),
    {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var n,
                    { reverse: r = !1, unit: i = "character", distance: a = 1, voids: o = !1 } = t,
                    { at: u = e.selection, hanging: s = !1 } = t;
                if (u) {
                    var l = !1;
                    if ((ep.isRange(u) && ep.isCollapsed(u) && ((l = !0), (u = u.anchor)), ec.isPoint(u))) {
                        var c = X.void(e, { at: u, mode: "highest" });
                        if (!o && c) {
                            var [, d] = c;
                            u = d;
                        } else {
                            var f = { unit: i, distance: a },
                                h = r ? X.before(e, u, f) || X.start(e, []) : X.after(e, u, f) || X.end(e, []);
                            ((u = { anchor: u, focus: h }), (s = !0));
                        }
                    }
                    if (eo.isPath(u)) return void ez.removeNodes(e, { at: u, voids: o });
                    if (!ep.isCollapsed(u)) {
                        if (!s) {
                            var [, p] = ep.edges(u),
                                m = X.end(e, []);
                            ec.equals(p, m) || (u = X.unhangRange(e, u, { voids: o }));
                        }
                        var [_, g] = ep.edges(u),
                            v = X.above(e, { match: (t) => W.isElement(t) && X.isBlock(e, t), at: _, voids: o }),
                            y = X.above(e, { match: (t) => W.isElement(t) && X.isBlock(e, t), at: g, voids: o }),
                            b = v && y && !eo.equals(v[1], y[1]),
                            D = eo.equals(_.path, g.path),
                            w = o ? null : X.void(e, { at: _, mode: "highest" }),
                            C = o ? null : X.void(e, { at: g, mode: "highest" });
                        if (w) {
                            var E = X.before(e, _);
                            E && v && eo.isAncestor(v[1], E.path) && (_ = E);
                        }
                        if (C) {
                            var A = X.after(e, g);
                            A && y && eo.isAncestor(y[1], A.path) && (g = A);
                        }
                        var k = [];
                        for (var B of X.nodes(e, { at: u, voids: o })) {
                            var [F, x] = B;
                            (!n || 0 !== eo.compare(x, n)) &&
                                ((!o && W.isElement(F) && X.isVoid(e, F)) ||
                                    (!eo.isCommon(x, _.path) && !eo.isCommon(x, g.path))) &&
                                (k.push(B), (n = x));
                        }
                        var T = Array.from(k, (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            }),
                            R = X.pointRef(e, _),
                            V = X.pointRef(e, g),
                            S = "";
                        if (!D && !w) {
                            var P = R.current,
                                [O] = X.leaf(e, P),
                                { path: z } = P,
                                { offset: M } = _,
                                N = O.text.slice(M);
                            N.length > 0 && (e.apply({ type: "remove_text", path: z, offset: M, text: N }), (S = N));
                        }
                        if (
                            (T.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => ez.removeNodes(e, { at: t, voids: o })),
                            !C)
                        ) {
                            var I = V.current,
                                [j] = X.leaf(e, I),
                                { path: L } = I,
                                Z = D ? _.offset : 0,
                                $ = j.text.slice(Z, g.offset);
                            $.length > 0 && (e.apply({ type: "remove_text", path: L, offset: Z, text: $ }), (S = $));
                        }
                        (!D &&
                            b &&
                            V.current &&
                            R.current &&
                            ez.mergeNodes(e, { at: V.current, hanging: !0, voids: o }),
                            l &&
                                r &&
                                "character" === i &&
                                S.length > 1 &&
                                S.match(/[\u0E00-\u0E7F]+/) &&
                                ez.insertText(e, S.slice(0, S.length - a)));
                        var U = R.unref(),
                            G = V.unref(),
                            q = r ? U || G : G || U;
                        null == t.at && q && ez.select(e, q);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var r,
                    { hanging: i = !1, voids: a = !1 } = n,
                    { at: o = e.selection } = n;
                if (t.length) {
                    if (o) {
                        if (ep.isRange(o))
                            if ((i || (o = X.unhangRange(e, o, { voids: a })), ep.isCollapsed(o))) o = o.anchor;
                            else {
                                var [, u] = ep.edges(o);
                                if (!a && X.void(e, { at: u })) return;
                                var s = X.pointRef(e, u);
                                (ez.delete(e, { at: o }), (o = s.unref()));
                            }
                        else eo.isPath(o) && (o = X.start(e, o));
                        if (!(!a && X.void(e, { at: o }))) {
                            var l = X.above(e, {
                                at: o,
                                match: (t) => W.isElement(t) && X.isInline(e, t),
                                mode: "highest",
                                voids: a,
                            });
                            if (l) {
                                var [, c] = l;
                                X.isEnd(e, o, c) ? (o = X.after(e, c)) : X.isStart(e, o, c) && (o = X.before(e, c));
                            }
                            var [, d] = X.above(e, {
                                    match: (t) => W.isElement(t) && X.isBlock(e, t),
                                    at: o,
                                    voids: a,
                                }),
                                f = X.isStart(e, o, d),
                                h = X.isEnd(e, o, d),
                                p = f && h,
                                m = !f || (f && h),
                                _ = !h,
                                [, g] = en.first({ children: t }, []),
                                [, v] = en.last({ children: t }, []),
                                y = [],
                                b = (t) => {
                                    var [n, r] = t;
                                    return (
                                        0 !== r.length &&
                                        (!!p ||
                                            !(
                                                (m &&
                                                    eo.isAncestor(r, g) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (_ &&
                                                    eo.isAncestor(r, v) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var D of en.nodes({ children: t }, { pass: b })) b(D) && y.push(D);
                            var w = [],
                                C = [],
                                E = [],
                                A = !0,
                                k = !1;
                            for (var [B] of y)
                                W.isElement(B) && !e.isInline(B)
                                    ? ((A = !1), (k = !0), C.push(B))
                                    : A
                                      ? w.push(B)
                                      : E.push(B);
                            var [F] = X.nodes(e, {
                                    at: o,
                                    match: (t) => eC.isText(t) || X.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                [, x] = F,
                                T = X.isStart(e, o, x),
                                R = X.isEnd(e, o, x),
                                V = X.pathRef(e, h && !E.length ? eo.next(d) : d),
                                S = X.pathRef(e, R ? eo.next(x) : x);
                            ez.splitNodes(e, {
                                at: o,
                                match: (t) =>
                                    k ? W.isElement(t) && X.isBlock(e, t) : eC.isText(t) || X.isInline(e, t),
                                mode: k ? "lowest" : "highest",
                                always: k && (!f || w.length > 0) && (!h || E.length > 0),
                                voids: a,
                            });
                            var P = X.pathRef(e, !T || (T && R) ? eo.next(x) : x);
                            if (
                                (ez.insertNodes(e, w, {
                                    at: P.current,
                                    match: (t) => eC.isText(t) || X.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                p && !w.length && C.length && !E.length && ez.delete(e, { at: d, voids: a }),
                                ez.insertNodes(e, C, {
                                    at: V.current,
                                    match: (t) => W.isElement(t) && X.isBlock(e, t),
                                    mode: "lowest",
                                    voids: a,
                                }),
                                ez.insertNodes(e, E, {
                                    at: S.current,
                                    match: (t) => eC.isText(t) || X.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                !n.at &&
                                    (E.length > 0 && S.current
                                        ? (r = eo.previous(S.current))
                                        : C.length > 0 && V.current
                                          ? (r = eo.previous(V.current))
                                          : P.current && (r = eo.previous(P.current)),
                                    r))
                            ) {
                                var O = X.end(e, r);
                                ez.select(e, O);
                            }
                            (P.unref(), V.unref(), S.unref());
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var { voids: r = !1 } = n,
                    { at: i = e.selection } = n;
                if (i) {
                    if ((eo.isPath(i) && (i = X.range(e, i)), ep.isRange(i)))
                        if (ep.isCollapsed(i)) i = i.anchor;
                        else {
                            var a = ep.end(i);
                            if (!r && X.void(e, { at: a })) return;
                            var o = ep.start(i),
                                u = X.pointRef(e, o),
                                s = X.pointRef(e, a);
                            ez.delete(e, { at: i, voids: r });
                            var l = u.unref(),
                                c = s.unref();
                            ((i = l || c), ez.setSelection(e, { anchor: i, focus: i }));
                        }
                    if (!(!r && X.void(e, { at: i }))) {
                        var { path: d, offset: f } = i;
                        t.length > 0 && e.apply({ type: "insert_text", path: d, offset: f, text: t });
                    }
                }
            });
        },
    },
);
