n.d(t, { A: () => tl, Fo: () => e7, RV: () => eA, f7: () => eS, o$: () => tp, rL: () => em, zL: () => to });
var r = n(877413),
    i = n.n(r),
    a = n(649852),
    o = n.n(a),
    u = n(64015),
    s = n.n(u),
    l = n(582128),
    c = n(104681),
    d = n(719442),
    f = n(415171),
    h = n(294106),
    p = n(333007);
function m(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function _(e, t) {
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
var g = 0;
class v {
    constructor() {
        this.id = "".concat(g++);
    }
}
var y = new WeakMap(),
    b = new WeakMap(),
    D = new WeakMap(),
    w = new WeakMap(),
    C = new WeakMap(),
    E = new WeakMap(),
    A = new WeakMap(),
    k = new WeakMap(),
    B = new WeakMap(),
    F = new WeakMap(),
    x = new WeakMap(),
    T = new WeakMap(),
    R = new WeakMap(),
    V = new WeakMap(),
    S = new WeakMap(),
    P = new WeakMap(),
    O = new WeakMap(),
    z = new WeakMap(),
    M = new WeakMap(),
    N = new WeakMap(),
    I = new WeakMap(),
    j = Symbol("placeholder"),
    L = Symbol("mark-placeholder"),
    Z = globalThis.Text,
    $ = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    U = (e) => G(e) && 8 === e.nodeType,
    W = (e) => G(e) && 1 === e.nodeType,
    G = (e) => {
        var t = $(e);
        return !!t && e instanceof t.Node;
    },
    q = (e) => {
        var t = e && e.anchorNode && $(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    K = (e) => G(e) && 3 === e.nodeType,
    J = (e, t, n) => {
        for (
            var { childNodes: r } = e, i = r[t], a = t, o = !1, u = !1;
            (U(i) || (W(i) && 0 === i.childNodes.length) || (W(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!o || !u);
        ) {
            if (a >= r.length) {
                ((o = !0), (a = t - 1), (n = "backward"));
                continue;
            }
            if (a < 0) {
                ((u = !0), (a = t + 1), (n = "forward"));
                continue;
            }
            ((i = r[a]), (t = a), (a += "forward" === n ? 1 : -1));
        }
        return [i, t];
    },
    H = (e, t, n) => {
        var [r] = J(e, t, n);
        return r;
    },
    X = (e) => {
        var t = "";
        if (K(e) && e.nodeValue) return e.nodeValue;
        if (W(e)) {
            for (var n of Array.from(e.childNodes)) t += X(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    Y = /data-slate-fragment="(.+?)"/m,
    Q = (e, t, n) => {
        var { target: r } = t;
        if (W(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = em.getWindow(e);
        if (i.contains(r)) return em.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && Q(e, a, n);
    },
    ee = parseInt(l.version.split(".")[0], 10) >= 17,
    et =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    en = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    er = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    ei = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ea = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    eo = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    eu = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    es = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    el = er && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    ec =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    ed = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    ef = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eh = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    ep =
        (!es || !el) &&
        !eo &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    em = {
        isComposing: (e) => !!T.get(e),
        getWindow(e) {
            var t = D.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = k.get(t);
            return (n || ((n = new v()), k.set(t, n)), n);
        },
        findPath(e, t) {
            for (var n = [], r = t; ;) {
                var i = b.get(r);
                if (null == i)
                    if (d.KE.isEditor(r)) return n;
                    else break;
                var a = y.get(r);
                if (null == a) break;
                (n.unshift(a), (r = i));
            }
            throw Error("Unable to find the path for Slate node: ".concat(d.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = em.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!x.get(e),
        isReadOnly: (e) => !!F.get(e),
        blur(e) {
            var t = em.toDOMNode(e, e),
                n = em.findDocumentOrShadowRoot(e);
            (x.set(e, !1), n.activeElement === t && t.blur());
        },
        focus(e) {
            var t = em.toDOMNode(e, e),
                n = em.findDocumentOrShadowRoot(e);
            (x.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 }));
        },
        deselect(e) {
            var { selection: t } = e,
                n = em.findDocumentOrShadowRoot(e).getSelection();
            (n && n.rangeCount > 0 && n.removeAllRanges(), t && d.gB.deselect(e));
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = em.toDOMNode(e, e);
            try {
                n = W(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!n &&
                n.closest("[data-slate-editor]") === a &&
                (!i ||
                    !!n.isContentEditable ||
                    ("boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a) ||
                    !!n.getAttribute("data-slate-zero-width"))
            );
        },
        insertData(e, t) {
            e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, n) {
            e.setFragmentData(t, n);
        },
        toDOMNode(e, t) {
            var n = B.get(e),
                r = d.KE.isEditor(t) ? w.get(e) : null == n ? void 0 : n.get(em.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.h6.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.KE.node(e, t.path),
                r = em.toDOMNode(e, n);
            d.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var i = Array.from(r.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, o = 0;
                o < i.length;
                o++
            ) {
                var u = i[o],
                    s = u.childNodes[0];
                if (null != s && null != s.textContent) {
                    var { length: l } = s.textContent,
                        c = u.getAttribute("data-slate-length"),
                        f = a + (null == c ? l : parseInt(c, 10)),
                        h = i[o + 1];
                    if (t.offset === f && null != h && h.hasAttribute("data-slate-mark-placeholder")) {
                        var p,
                            m,
                            _ = h.childNodes[0];
                        p = [_ instanceof Z ? _ : h, null != (m = h.textContent) && m.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= f) {
                        p = [s, Math.min(l, Math.max(0, t.offset - a))];
                        break;
                    }
                    a = f;
                }
            }
            if (!p) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.h6.stringify(t)));
            return p;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = d.Q6.isBackward(t),
                a = em.toDOMPoint(e, n),
                o = d.Q6.isCollapsed(t) ? a : em.toDOMPoint(e, r),
                u = em.getWindow(e).document.createRange(),
                [s, l] = i ? o : a,
                [c, f] = i ? a : o,
                h = !!(W(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"),
                p = !!(W(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
            return (u.setStart(s, h ? 1 : l), u.setEnd(c, p ? 1 : f), u);
        },
        toSlateNode(e, t) {
            var n = W(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? E.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var o = em.toSlateNode(e, t.target),
                u = em.findPath(e, o);
            if (d.Hg.isElement(o) && d.KE.isVoid(e, o)) {
                var s = a.getBoundingClientRect(),
                    l = e.isInline(o) ? r - s.left < s.left + s.width - r : i - s.top < s.top + s.height - i,
                    c = d.KE.point(e, u, { edge: l ? "start" : "end" }),
                    f = l ? d.KE.before(e, c) : d.KE.after(e, c);
                if (f) return d.KE.range(e, f);
            }
            var { document: h } = em.getWindow(e);
            if (h.caretRangeFromPoint) n = h.caretRangeFromPoint(r, i);
            else {
                var p = h.caretPositionFromPoint(r, i);
                p && ((n = h.createRange()).setStart(p.offsetNode, p.offset), n.setEnd(p.offsetNode, p.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return em.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [a, o] = r
                    ? t
                    : ((e) => {
                          var [t, n] = e;
                          if (W(t) && t.childNodes.length) {
                              var r = n === t.childNodes.length,
                                  i = r ? n - 1 : n;
                              for (
                                  [t, i] = J(t, i, r ? "backward" : "forward"), r = i < n;
                                  W(t) && t.childNodes.length;
                              ) {
                                  var a = r ? t.childNodes.length - 1 : 0;
                                  t = H(t, a, r ? "backward" : "forward");
                              }
                              n = r && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, n];
                      })(t),
                u = a.parentNode,
                s = null,
                l = 0;
            if (u) {
                var c,
                    f,
                    h = em.toDOMNode(e, e),
                    p = u.closest('[data-slate-void="true"]'),
                    m = p && h.contains(p) ? p : null,
                    _ = u.closest("[data-slate-leaf]"),
                    g = null;
                if (_) {
                    if ((s = _.closest('[data-slate-node="text"]'))) {
                        var v = em.getWindow(e).document.createRange();
                        (v.setStart(s, 0), v.setEnd(a, o));
                        var y = v.cloneContents();
                        ([
                            ...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                er &&
                                !r &&
                                e.hasAttribute("data-slate-zero-width") &&
                                e.textContent.length > 0 &&
                                "\uFEFF" !== e.textContext
                            ) {
                                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (l = y.textContent.length),
                            (g = s));
                    }
                } else if (m) {
                    for (var b = m.querySelectorAll("[data-slate-leaf]"), D = 0; D < b.length; D++) {
                        var w = b[D];
                        if (em.hasDOMNode(e, w)) {
                            _ = w;
                            break;
                        }
                    }
                    _
                        ? ((s = _.closest('[data-slate-node="text"]')),
                          (l = (g = _).textContent.length),
                          g.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              l -= e.textContent.length;
                          }))
                        : (l = 1);
                }
                g &&
                    l === g.textContent.length &&
                    er &&
                    "z" === g.getAttribute("data-slate-zero-width") &&
                    null != (c = g.textContent) &&
                    c.startsWith("\uFEFF") &&
                    (u.hasAttribute("data-slate-zero-width") ||
                        (ei && null != (f = g.textContent) && f.endsWith("\n\n"))) &&
                    l--;
            }
            if (er && !s && !r) {
                var C = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
                if (C && em.hasDOMNode(e, C, { editable: !0 })) {
                    var E = em.toSlateNode(e, C),
                        { path: A, offset: k } = d.KE.start(e, em.findPath(e, E));
                    return (C.querySelector("[data-slate-leaf]") || (k = o), { path: A, offset: k });
                }
            }
            if (!s) {
                if (i) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var B = em.toSlateNode(e, s);
            return { path: em.findPath(e, B), offset: l };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                a,
                o,
                u,
                s,
                { exactMatch: l, suppressThrow: c } = n;
            if (
                ((q(t) ? t.anchorNode : t.startContainer) &&
                    (q(t)
                        ? ((r = t.anchorNode),
                          (i = t.anchorOffset),
                          (a = t.focusNode),
                          (o = t.focusOffset),
                          (u =
                              eu &&
                              ((e) => {
                                  for (var t = e && e.parentNode; t;) {
                                      if ("[object ShadowRoot]" === t.toString()) return !0;
                                      t = t.parentNode;
                                  }
                                  return !1;
                              })(r)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((r = t.startContainer),
                          (i = t.startOffset),
                          (a = t.endContainer),
                          (o = t.endOffset),
                          (u = t.collapsed))),
                null == r || null == a || null == i || null == o)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in a &&
                "false" === a.getAttribute("contenteditable") &&
                ((a = r), (o = (null == (s = r.textContent) ? void 0 : s.length) || 0));
            var f = em.toSlatePoint(e, [r, i], { exactMatch: l, suppressThrow: c });
            if (!f) return null;
            var h = u ? f : em.toSlatePoint(e, [a, o], { exactMatch: l, suppressThrow: c });
            if (!h) return null;
            if (ei && !u && r !== a) {
                var p = d.KE.isEnd(e, f, f.path),
                    m = d.KE.isStart(e, h, h.path);
                (p && (f = d.KE.after(e, f) || f), m && (h = d.KE.before(e, h) || h));
            }
            var _ = { anchor: f, focus: h };
            return (
                d.Q6.isExpanded(_) &&
                    d.Q6.isForward(_) &&
                    W(a) &&
                    d.KE.void(e, { at: _.focus, mode: "highest" }) &&
                    (_ = d.KE.unhangRange(e, _, { voids: !0 })),
                _
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.KE.hasPath(e, n.path) && d.KE.hasPath(e, r.path);
        },
        hasTarget: (e, t) => G(t) && em.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => G(t) && em.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => em.hasEditableTarget(e, t) || em.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (F.get(e)) return !1;
            var n = em.hasTarget(e, t) && em.toSlateNode(e, t);
            return d.Hg.isElement(n) && d.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = S.get(e)) || t();
        },
        androidPendingDiffs: (e) => z.get(e),
    },
    e_ = ["anchor", "focus"],
    eg = ["anchor", "focus"],
    ev = (e, t) => {
        var n = _(e, e_),
            r = _(t, eg);
        return (
            e[j] === t[j] &&
            Object.keys(n).length === Object.keys(r).length &&
            Object.keys(n).every((e) => r.hasOwnProperty(e) && n[e] === r[e])
        );
    },
    ey = eh ? l.useLayoutEffect : l.useEffect,
    eb = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = eA(),
            o = em.findPath(a, i),
            u = d.wA.parent(o),
            s = !0 === n[L];
        return a.isVoid(r)
            ? l.createElement(eC, { length: d.bP.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== d.KE.string(a, u)
              ? "" === n.text
                  ? l.createElement(eC, { isMarkPlaceholder: s })
                  : t && "\n" === n.text.slice(-1)
                    ? l.createElement(eD, { isTrailing: !0, text: n.text })
                    : l.createElement(eD, { text: n.text })
              : l.createElement(eC, { isLineBreak: !0, isMarkPlaceholder: s });
    },
    eD = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, l.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [a] = (0, l.useState)(i);
        return (
            ey(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            l.createElement(ew, { ref: r }, a)
        );
    },
    ew = (0, l.memo)(
        (0, l.forwardRef)((e, t) => l.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    eC = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            r && (i["data-slate-mark-placeholder"] = !0),
            l.createElement(
                "span",
                Object.assign({}, i),
                er && n ? null : "\uFEFF",
                n ? l.createElement("br", null) : null,
            )
        );
    },
    eE = (0, l.createContext)(null),
    eA = () => {
        var e = (0, l.useContext)(eE);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    ek = l.memo(
        (e) => {
            var {
                    leaf: t,
                    isLast: n,
                    text: r,
                    parent: i,
                    renderPlaceholder: a,
                    renderLeaf: o = (e) => l.createElement(eB, Object.assign({}, e)),
                } = e,
                u = (0, l.useRef)(null),
                s = (0, l.useRef)(null),
                c = eA(),
                d = (0, l.useRef)(null);
            ((0, l.useEffect)(
                () => () => {
                    d.current && d.current.disconnect();
                },
                [],
            ),
                (0, l.useEffect)(() => {
                    var e = null == s ? void 0 : s.current;
                    if (
                        (e ? C.set(c, e) : C.delete(c),
                        d.current
                            ? (d.current.disconnect(), e && d.current.observe(e))
                            : e &&
                              ((d.current = new (window.ResizeObserver || f.tb)(() => {
                                  var e = I.get(c);
                                  null == e || e();
                              })),
                              d.current.observe(e)),
                        !e && u.current)
                    ) {
                        var t = I.get(c);
                        null == t || t();
                    }
                    return (
                        (u.current = s.current),
                        () => {
                            C.delete(c);
                        }
                    );
                }, [s, t]));
            var h = l.createElement(eb, { isLast: n, leaf: t, parent: i, text: r });
            if (t[j]) {
                var p = {
                    children: t.placeholder,
                    attributes: {
                        "data-slate-placeholder": !0,
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            width: "100%",
                            maxWidth: "100%",
                            display: "block",
                            opacity: "0.333",
                            userSelect: "none",
                            textDecoration: "none",
                        },
                        contentEditable: !1,
                        ref: s,
                    },
                };
                h = l.createElement(l.Fragment, null, a(p), h);
            }
            return o({ attributes: { "data-slate-leaf": !0 }, children: h, leaf: t, text: r });
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            d.EY.equals(t.leaf, e.leaf) &&
            t.leaf[j] === e.leaf[j],
    ),
    eB = (e) => {
        var { attributes: t, children: n } = e;
        return l.createElement("span", Object.assign({}, t), n);
    },
    eF = l.memo(
        (e) => {
            for (
                var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: o } = e,
                    u = eA(),
                    s = (0, l.useRef)(null),
                    c = d.EY.decorations(o, t),
                    f = em.findKey(u, o),
                    h = [],
                    p = 0;
                p < c.length;
                p++
            ) {
                var m = c[p];
                h.push(
                    l.createElement(ek, {
                        isLast: n && p === c.length - 1,
                        key: "".concat(f.id, "-").concat(p),
                        renderPlaceholder: i,
                        leaf: m,
                        text: o,
                        parent: r,
                        renderLeaf: a,
                    }),
                );
            }
            var _ = (0, l.useCallback)(
                (e) => {
                    var t = B.get(u);
                    (e
                        ? (null == t || t.set(f, e), A.set(o, e), E.set(e, o))
                        : (null == t || t.delete(f), A.delete(o), s.current && E.delete(s.current)),
                        (s.current = e));
                },
                [s, u, f, o],
            );
            return l.createElement("span", { "data-slate-node": "text", ref: _ }, h);
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = t[n];
                    if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !ev(r, i))
                        return !1;
                }
                return !0;
            })(t.decorations, e.decorations),
    ),
    ex = l.memo(
        (e) => {
            var {
                    decorations: t,
                    element: n,
                    renderElement: r = (e) => l.createElement(eT, Object.assign({}, e)),
                    renderPlaceholder: a,
                    renderLeaf: o,
                    selection: u,
                } = e,
                s = eA(),
                c = ez(),
                f = s.isInline(n),
                h = em.findKey(s, n),
                p = (0, l.useCallback)(
                    (e) => {
                        var t = B.get(s);
                        e
                            ? (null == t || t.set(h, e), A.set(n, e), E.set(e, n))
                            : (null == t || t.delete(h), A.delete(n));
                    },
                    [s, h, n],
                ),
                m = eP({
                    decorations: t,
                    node: n,
                    renderElement: r,
                    renderPlaceholder: a,
                    renderLeaf: o,
                    selection: u,
                }),
                _ = { "data-slate-node": "element", ref: p };
            if ((f && (_["data-slate-inline"] = !0), !f && d.KE.hasInlines(s, n))) {
                var g = d.bP.string(n),
                    v = i()(g);
                "rtl" === v && (_.dir = v);
            }
            if (d.KE.isVoid(s, n)) {
                ((_["data-slate-void"] = !0), !c && f && (_.contentEditable = !1));
                var [[D]] = d.bP.texts(n);
                ((m = l.createElement(
                    f ? "span" : "div",
                    {
                        "data-slate-spacer": !0,
                        style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                    },
                    l.createElement(eF, { renderPlaceholder: a, decorations: [], isLast: !1, parent: n, text: D }),
                )),
                    y.set(D, 0),
                    b.set(D, n));
            }
            return r({ attributes: _, children: m, element: n, decorations: t });
        },
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = t[n];
                    if (!d.Q6.equals(r, i) || !ev(r, i)) return !1;
                }
                return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && d.Q6.equals(e.selection, t.selection))),
    ),
    eT = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = eA().isInline(r) ? "span" : "div";
        return l.createElement(i, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    eR = (0, l.createContext)(() => []),
    eV = (0, l.createContext)(!1),
    eS = () => (0, l.useContext)(eV),
    eP = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: o } = e,
                u = (0, l.useContext)(eR),
                s = eA(),
                c = em.findPath(s, n),
                f = [],
                h = d.Hg.isElement(n) && !s.isInline(n) && d.KE.hasInlines(s, n),
                p = d.Hg.isElement(n) && null != s.rendersTrailingNewline && s.rendersTrailingNewline(n),
                m = 0;
            m < n.children.length;
            m++
        ) {
            var _ = c.concat(m),
                g = n.children[m],
                v = em.findKey(s, g),
                D = d.KE.range(s, _),
                w = o && d.Q6.intersection(D, o),
                C = u([g, _]);
            for (var E of t) {
                var A = d.Q6.intersection(E, D);
                A && C.push(A);
            }
            (d.Hg.isElement(g)
                ? f.push(
                      l.createElement(
                          eV.Provider,
                          { key: "provider-".concat(v.id), value: !!w },
                          l.createElement(ex, {
                              decorations: C,
                              element: g,
                              key: v.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: w,
                          }),
                      ),
                  )
                : f.push(
                      l.createElement(eF, {
                          decorations: C,
                          key: v.id,
                          isLast: (h || p) && m === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: g,
                      }),
                  ),
                y.set(g, m),
                b.set(g, n));
        }
        return f;
    },
    eO = (0, l.createContext)(!1),
    ez = () => (0, l.useContext)(eO),
    eM = (0, l.createContext)(null),
    eN = {
        bold: "mod+b",
        compose: ["down", "left", "right", "up", "backspace", "enter"],
        moveBackward: "left",
        moveForward: "right",
        moveWordBackward: "ctrl+left",
        moveWordForward: "ctrl+right",
        deleteBackward: "shift?+backspace",
        deleteForward: "shift?+delete",
        extendBackward: "shift+left",
        extendForward: "shift+right",
        italic: "mod+i",
        insertSoftBreak: "shift+enter",
        splitBlock: "enter",
        undo: "mod+z",
    },
    eI = {
        moveLineBackward: "opt+up",
        moveLineForward: "opt+down",
        moveWordBackward: "opt+left",
        moveWordForward: "opt+right",
        deleteBackward: ["ctrl+backspace", "ctrl+h"],
        deleteForward: ["ctrl+delete", "ctrl+d"],
        deleteLineBackward: "cmd+shift?+backspace",
        deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
        deleteWordBackward: "opt+shift?+backspace",
        deleteWordForward: "opt+shift?+delete",
        extendLineBackward: "opt+shift+up",
        extendLineForward: "opt+shift+down",
        redo: "cmd+shift+z",
        transposeCharacter: "ctrl+t",
    },
    ej = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    eL = (e) => {
        var t = eN[e],
            n = eI[e],
            r = ej[e],
            i = t && (0, h.isKeyHotkey)(t),
            a = n && (0, h.isKeyHotkey)(n),
            o = r && (0, h.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (en && a && a(e)) || (!en && o && o(e)));
    },
    eZ = {
        isBold: eL("bold"),
        isCompose: eL("compose"),
        isMoveBackward: eL("moveBackward"),
        isMoveForward: eL("moveForward"),
        isDeleteBackward: eL("deleteBackward"),
        isDeleteForward: eL("deleteForward"),
        isDeleteLineBackward: eL("deleteLineBackward"),
        isDeleteLineForward: eL("deleteLineForward"),
        isDeleteWordBackward: eL("deleteWordBackward"),
        isDeleteWordForward: eL("deleteWordForward"),
        isExtendBackward: eL("extendBackward"),
        isExtendForward: eL("extendForward"),
        isExtendLineBackward: eL("extendLineBackward"),
        isExtendLineForward: eL("extendLineForward"),
        isItalic: eL("italic"),
        isMoveLineBackward: eL("moveLineBackward"),
        isMoveLineForward: eL("moveLineForward"),
        isMoveWordBackward: eL("moveWordBackward"),
        isMoveWordForward: eL("moveWordForward"),
        isRedo: eL("redo"),
        isSoftBreak: eL("insertSoftBreak"),
        isSplitBlock: eL("splitBlock"),
        isTransposeCharacter: eL("transposeCharacter"),
        isUndo: eL("undo"),
    },
    e$ = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class eU extends l.Component {
    constructor() {
        (super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null));
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, e$);
    }
    componentDidMount() {
        var e,
            t,
            { receivedUserInput: n } = this.props,
            r = this.context;
        ((this.manager =
            ((e = []),
            {
                registerMutations: (t) => {
                    if (n.current) {
                        var i = t.filter((e) => Q(r, e, t));
                        e.push(...i);
                    }
                },
                restoreDOM: function () {
                    e.length > 0 &&
                        (e.reverse().forEach((e) => {
                            "characterData" !== e.type &&
                                (e.removedNodes.forEach((t) => {
                                    e.target.insertBefore(t, e.nextSibling);
                                }),
                                e.addedNodes.forEach((t) => {
                                    e.target.removeChild(t);
                                }));
                        }),
                        t());
                },
                clear: (t = () => {
                    e = [];
                }),
            })),
            (this.mutationObserver = new MutationObserver(this.manager.registerMutations)),
            this.observe());
    }
    getSnapshotBeforeUpdate() {
        var e,
            t,
            n,
            r,
            i = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
        return (
            null != i && i.length && (null == (r = this.manager) || r.registerMutations(i)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (n = this.manager) || n.restoreDOM(),
            null
        );
    }
    componentDidUpdate() {
        var e;
        (null == (e = this.manager) || e.clear(), this.observe());
    }
    componentWillUnmount() {
        var e;
        null == (e = this.mutationObserver) || e.disconnect();
    }
    render() {
        return this.props.children;
    }
}
eU.contextType = eE;
var eW = er
    ? eU
    : (e) => {
          var { children: t } = e;
          return l.createElement(l.Fragment, null, t);
      };
function eG(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function eq(e, t) {
    var { start: n, end: r, text: i } = t,
        a = e.slice(n, r),
        o = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
        })(a, i),
        u = Math.min(a.length - o, i.length - o),
        s = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
                if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
            return r;
        })(a, i, u),
        l = { start: n + o, end: r - s, text: i.slice(o, i.length - s) };
    return l.start === l.end && 0 === l.text.length ? null : l;
}
function eK(e, t) {
    var { path: n, offset: r } = t;
    if (!d.KE.hasPath(e, n)) return null;
    var i = d.bP.get(e, n);
    if (!d.EY.isText(i)) return null;
    var a = d.KE.above(e, { match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t), at: n });
    if (!a) return null;
    for (; r > i.text.length;) {
        var o = d.KE.next(e, { at: n, match: d.EY.isText });
        if (!o || !d.wA.isDescendant(o[1], a[1])) return null;
        ((r -= i.text.length), (i = o[0]), (n = o[1]));
    }
    return { path: n, offset: r };
}
function eJ(e, t) {
    var n = eK(e, t.anchor);
    if (!n) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var r = eK(e, t.focus);
    return r ? { anchor: n, focus: r } : null;
}
function eH(e, t, n) {
    var r = z.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return d.wA.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return d.bR.transform(t, n, { affinity: "backward" });
    var { diff: a } = i;
    if (t.offset <= a.start + a.text.length) {
        var o = { path: t.path, offset: a.start },
            u = d.bR.transform(o, n, { affinity: "backward" });
        return u ? { path: u.path, offset: u.offset + t.offset - a.start } : null;
    }
    var s = { path: t.path, offset: t.offset - a.text.length + a.end - a.start },
        l = d.bR.transform(s, n, { affinity: "backward" });
    return l
        ? "split_node" === n.type && d.wA.equals(n.path, t.path) && s.offset < n.position && a.start < n.position
            ? l
            : { path: l.path, offset: l.offset + a.text.length - a.end + a.start }
        : null;
}
function eX(e, t, n) {
    var r = eH(e, t.anchor, n);
    if (!r) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var i = eH(e, t.focus, n);
    return i ? { anchor: r, focus: i } : null;
}
function eY(e, t) {
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
function eQ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eY(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eY(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e0 = function () {},
    e1 = ["node"];
function e2(e, t) {
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
var e3 = { subtree: !0, childList: !0, characterData: !0 },
    e5 = [
        "autoFocus",
        "decorate",
        "onDOMBeforeInput",
        "placeholder",
        "readOnly",
        "renderElement",
        "renderLeaf",
        "renderPlaceholder",
        "scrollSelectionIntoView",
        "style",
        "as",
        "disableDefaultStyles",
    ],
    e4 = ["text"];
function e9(e, t) {
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
function e6(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e9(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e9(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e8 = (e) => l.createElement(l.Fragment, null, eP(e)),
    e7 = (e) => {
        var t,
            n,
            r,
            a,
            u,
            c,
            f = (0, l.useCallback)((e) => l.createElement(te, Object.assign({}, e)), []),
            {
                autoFocus: h,
                decorate: p = tt,
                onDOMBeforeInput: g,
                placeholder: v,
                readOnly: y = !1,
                renderElement: b,
                renderLeaf: k,
                renderPlaceholder: B = f,
                scrollSelectionIntoView: V = tn,
                style: Z = {},
                as: U = "div",
                disableDefaultStyles: K = !1,
            } = e,
            J = _(e, e5),
            H = (() => {
                var e = (0, l.useContext)(eM);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [X, Y] = (0, l.useState)(!1),
            ee = (0, l.useRef)(null),
            en = (0, l.useRef)([]),
            { onUserInput: eo, receivedUserInput: es } =
                ((t = eA()),
                (n = (0, l.useRef)(!1)),
                (r = (0, l.useRef)(0)),
                (a = (0, l.useCallback)(() => {
                    if (!n.current) {
                        n.current = !0;
                        var e = em.getWindow(t);
                        (e.cancelAnimationFrame(r.current),
                            (r.current = e.requestAnimationFrame(() => {
                                n.current = !1;
                            })));
                    }
                }, [])),
                (0, l.useEffect)(() => () => cancelAnimationFrame(r.current), []),
                { receivedUserInput: n, onUserInput: a }),
            [, el] = (0, l.useReducer)((e) => e + 1, 0);
        (I.set(H, el), F.set(H, y));
        var e_ = (0, l.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        ((0, l.useLayoutEffect)(
            () => () => {
                null == e_ || (null != e_.latestElement && (e_.latestElement.remove(), (e_.latestElement = null)));
            },
            [],
        ),
            (0, l.useEffect)(() => {
                ee.current && h && ee.current.focus();
            }, [h]));
        var eg = (0, l.useCallback)(
                s()(() => {
                    if (
                        (er || !em.isComposing(H)) &&
                        (!e_.isUpdatingSelection || (null != eb && eb.isFlushing())) &&
                        !e_.isDraggingInternally
                    ) {
                        var e = em.findDocumentOrShadowRoot(H),
                            { activeElement: t } = e,
                            n = em.toDOMNode(H, H),
                            r = e.getSelection();
                        if ((t === n ? ((e_.latestElement = t), x.set(H, !0)) : x.delete(H), !r))
                            return d.gB.deselect(H);
                        var { anchorNode: i, focusNode: a } = r,
                            o = em.hasEditableTarget(H, i) || em.isTargetInsideNonReadonlyVoid(H, i),
                            u = em.hasEditableTarget(H, a) || em.isTargetInsideNonReadonlyVoid(H, a);
                        if (o && u) {
                            var s = em.toSlateRange(H, r, { exactMatch: !1, suppressThrow: !0 });
                            s &&
                                (em.isComposing(H) ||
                                (null != eb && eb.hasPendingChanges()) ||
                                (null != eb && eb.isFlushing())
                                    ? null == eb || eb.handleUserSelect(s)
                                    : d.gB.select(H, s));
                        }
                        !y || (o && u) || d.gB.deselect(H);
                    }
                }, 100),
                [y],
            ),
            ev = (0, l.useMemo)(() => o()(eg, 0), [eg]),
            eb = (function (e) {
                var t,
                    { node: n } = e,
                    r = _(e, e1);
                if (!er) return null;
                var i = eA(),
                    a =
                        ((t = (0, l.useRef)(!1)),
                        (0, l.useEffect)(
                            () => (
                                (t.current = !0),
                                () => {
                                    t.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.current),
                    [o] = (0, l.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
                                i = !1,
                                a = null,
                                o = null,
                                u = null,
                                s = 0,
                                l = !1,
                                c = () => {
                                    var e = N.get(t);
                                    if ((N.delete(t), e)) {
                                        var { selection: n } = t,
                                            r = eJ(t, e);
                                        !r || (n && d.Q6.equals(r, n)) || d.gB.select(t, r);
                                    }
                                },
                                f = () => {
                                    if (
                                        (o && (clearTimeout(o), (o = null)),
                                        u && (clearTimeout(u), (u = null)),
                                        !g() && !_())
                                    )
                                        return void c();
                                    (i || ((i = !0), setTimeout(() => (i = !1))), _() && (i = "action"));
                                    var e = t.selection && d.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    (O.set(t, t.marks), e0("flush", M.get(t), z.get(t)));
                                    for (var a = g(); (s = null == (f = z.get(t)) ? void 0 : f[0]);) {
                                        var s,
                                            f,
                                            h,
                                            p = P.get(t);
                                        (void 0 !== p && (P.delete(t), (t.marks = p)), p && !1 === l && (l = null));
                                        var m = (function (e) {
                                            var { path: t, diff: n } = e;
                                            return {
                                                anchor: { path: t, offset: n.start },
                                                focus: { path: t, offset: n.end },
                                            };
                                        })(s);
                                        ((t.selection && d.Q6.equals(t.selection, m)) || d.gB.select(t, m),
                                            s.diff.text ? d.KE.insertText(t, s.diff.text) : d.KE.deleteFragment(t),
                                            z.set(
                                                t,
                                                null == (h = z.get(t))
                                                    ? void 0
                                                    : h.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== s.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: n, diff: r } = t;
                                                if (!d.KE.hasPath(e, n)) return !1;
                                                var i = d.bP.get(e, n);
                                                if (!d.EY.isText(i)) return !1;
                                                if (r.start !== i.text.length || 0 === r.text.length)
                                                    return i.text.slice(r.start, r.start + r.text.length) === r.text;
                                                var a = d.wA.next(n);
                                                if (!d.KE.hasPath(e, a)) return !1;
                                                var o = d.bP.get(e, a);
                                                return d.EY.isText(o) && o.text.startsWith(r.text);
                                            })(t, s) &&
                                                ((a = !1),
                                                M.delete(t),
                                                O.delete(t),
                                                (i = "action"),
                                                N.delete(t),
                                                n.cancel(),
                                                r.cancel(),
                                                null == e || e.unref()));
                                    }
                                    var v = null == e ? void 0 : e.unref();
                                    if (
                                        (!v ||
                                            N.get(t) ||
                                            (t.selection && d.Q6.equals(v, t.selection)) ||
                                            d.gB.select(t, v),
                                        _())
                                    )
                                        return void (() => {
                                            var e = M.get(t);
                                            if ((M.delete(t), e)) {
                                                if (e.at) {
                                                    var n = d.bR.isPoint(e.at) ? eK(t, e.at) : eJ(t, e.at);
                                                    if (!n) return;
                                                    var r = d.KE.range(t, n);
                                                    (t.selection && d.Q6.equals(t.selection, r)) || d.gB.select(t, n);
                                                }
                                                e.run();
                                            }
                                        })();
                                    (a && n(), n.flush(), r.flush(), c());
                                    var y = O.get(t);
                                    (O.delete(t), void 0 !== y && ((t.marks = y), t.onChange()));
                                },
                                h = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = C.get(t);
                                    if (n) {
                                        if (g() || e) {
                                            n.style.display = "none";
                                            return;
                                        }
                                        n.style.removeProperty("display");
                                    }
                                },
                                p = (e, n) => {
                                    var r,
                                        i,
                                        a,
                                        o,
                                        u,
                                        l,
                                        c,
                                        f,
                                        p = null != (f = z.get(t)) ? f : [];
                                    z.set(t, p);
                                    var m = d.bP.leaf(t, e),
                                        _ = p.findIndex((t) => d.wA.equals(t.path, e));
                                    if (_ < 0) {
                                        (eq(m.text, n) && p.push({ path: e, diff: n, id: s++ }), h());
                                        return;
                                    }
                                    var g =
                                        ((r = m.text),
                                        (i = p[_].diff),
                                        (a = Math.min(i.start, n.start)),
                                        (o = Math.max(0, Math.min(i.start + i.text.length, n.end) - n.start)),
                                        (u = eG(r, i, n)),
                                        (l = Math.max(
                                            n.start + n.text.length,
                                            i.start +
                                                i.text.length +
                                                (i.start + i.text.length > n.start ? n.text.length : 0) -
                                                o,
                                        )),
                                        (c = u.slice(a, l)),
                                        eq(r, {
                                            start: a,
                                            end: Math.max(i.end, n.end - i.text.length + (i.end - i.start)),
                                            text: c,
                                        }));
                                    if (!g) {
                                        (p.splice(_, 1), h());
                                        return;
                                    }
                                    p[_] = eQ(eQ({}, p[_]), {}, { diff: g });
                                },
                                m = function (e) {
                                    var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    ((l = !1),
                                        N.delete(t),
                                        n.cancel(),
                                        r.cancel(),
                                        _() && f(),
                                        M.set(t, { at: i, run: e }),
                                        (u = setTimeout(f)));
                                },
                                _ = () => !!M.get(t),
                                g = () => {
                                    var e;
                                    return !!(null != (e = z.get(t)) && e.length);
                                },
                                v = (e) => {
                                    (N.set(t, e), o && (clearTimeout(o), (o = null)));
                                    var { selection: n } = t;
                                    if (e) {
                                        var r = !n || !d.wA.equals(n.anchor.path, e.anchor.path),
                                            i =
                                                !n ||
                                                !d.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        (((r && l) || i) && (l = !1), (r || g()) && (o = setTimeout(f, 200)));
                                    }
                                },
                                y = () => {
                                    _() || (u = setTimeout(f));
                                };
                            return {
                                flush: f,
                                scheduleFlush: y,
                                hasPendingDiffs: g,
                                hasPendingAction: _,
                                hasPendingChanges: () => _() || g(),
                                isFlushing: () => i,
                                handleUserSelect: v,
                                handleCompositionEnd: (e) => {
                                    (a && clearTimeout(a),
                                        (a = setTimeout(() => {
                                            (T.set(t, !1), f());
                                        }, 25)));
                                },
                                handleCompositionStart: (e) => {
                                    (T.set(t, !0), a && (clearTimeout(a), (a = null)));
                                },
                                handleDOMBeforeInput: (e) => {
                                    o && (clearTimeout(o), (o = null));
                                    var { inputType: n } = e,
                                        r = null,
                                        i = e.dataTransfer || e.data || void 0;
                                    !1 !== l && "insertText" !== n && "insertCompositionText" !== n && (l = !1);
                                    var [a] = e.getTargetRanges();
                                    a && (r = em.toSlateRange(t, a, { exactMatch: !1, suppressThrow: !0 }));
                                    var u = em.getWindow(t).getSelection();
                                    if (
                                        (!r &&
                                            u &&
                                            ((a = u),
                                            (r = em.toSlateRange(t, u, { exactMatch: !1, suppressThrow: !0 }))),
                                        (r = null != (T = r) ? T : t.selection))
                                    ) {
                                        var s = !0;
                                        if (n.startsWith("delete")) {
                                            if (d.Q6.isExpanded(r)) {
                                                var [c, f] = d.Q6.edges(r);
                                                if (d.bP.leaf(t, c.path).text.length === c.offset && 0 === f.offset) {
                                                    var h = d.KE.next(t, { at: c.path, match: d.EY.isText });
                                                    h && d.wA.equals(h[1], f.path) && (r = { anchor: f, focus: f });
                                                }
                                            }
                                            var _ = n.endsWith("Backward") ? "backward" : "forward",
                                                [g, b] = d.Q6.edges(r),
                                                [D, w] = d.KE.leaf(t, g.path),
                                                C = { text: "", start: g.offset, end: b.offset },
                                                E = z.get(t),
                                                A = null == E ? void 0 : E.find((e) => d.wA.equals(e.path, w)),
                                                k = A ? [A.diff, C] : [C];
                                            if ((0 === eG(D.text, ...k).length && (s = !1), d.Q6.isExpanded(r))) {
                                                if (s && d.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var B = { path: r.anchor.path, offset: g.offset };
                                                    return (
                                                        v(d.KE.range(t, B, B)),
                                                        p(r.anchor.path, { text: "", end: b.offset, start: g.offset })
                                                    );
                                                }
                                                return m(() => d.KE.deleteFragment(t, { direction: _ }), { at: r });
                                            }
                                        }
                                        switch (n) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return m(() => d.KE.deleteFragment(t), { at: r });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: F } = r;
                                                if (s && d.Q6.isCollapsed(r)) {
                                                    var x = d.bP.leaf(t, F.path);
                                                    if (F.offset < x.text.length)
                                                        return p(F.path, {
                                                            text: "",
                                                            start: F.offset,
                                                            end: F.offset + 1,
                                                        });
                                                }
                                                return m(() => d.KE.deleteForward(t), { at: r });
                                            case "deleteContentBackward":
                                                var T,
                                                    R,
                                                    { anchor: V } = r,
                                                    S = q(a) ? a.isCollapsed : !!(null != (R = a) && R.collapsed);
                                                if (s && S && d.Q6.isCollapsed(r) && V.offset > 0)
                                                    return p(V.path, { text: "", start: V.offset - 1, end: V.offset });
                                                return m(() => d.KE.deleteBackward(t), { at: r });
                                            case "deleteEntireSoftLine":
                                                return m(
                                                    () => {
                                                        (d.KE.deleteBackward(t, { unit: "line" }),
                                                            d.KE.deleteForward(t, { unit: "line" }));
                                                    },
                                                    { at: r },
                                                );
                                            case "deleteHardLineBackward":
                                                return m(() => d.KE.deleteBackward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineBackward":
                                                return m(() => d.KE.deleteBackward(t, { unit: "line" }), { at: r });
                                            case "deleteHardLineForward":
                                                return m(() => d.KE.deleteForward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineForward":
                                                return m(() => d.KE.deleteForward(t, { unit: "line" }), { at: r });
                                            case "deleteWordBackward":
                                                return m(() => d.KE.deleteBackward(t, { unit: "word" }), { at: r });
                                            case "deleteWordForward":
                                                return m(() => d.KE.deleteForward(t, { unit: "word" }), { at: r });
                                            case "insertLineBreak":
                                                return m(() => d.KE.insertSoftBreak(t), { at: r });
                                            case "insertParagraph":
                                                return m(() => d.KE.insertBreak(t), { at: r });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == i ? void 0 : i.constructor.name) === "DataTransfer")
                                                    return m(() => em.insertData(t, i), { at: r });
                                                var O = null != i ? i : "";
                                                if (
                                                    (P.get(t) && (O = O.replace("\uFEFF", "")),
                                                    "insertText" === n && /.*\n.*\n$/.test(O) && (O = O.slice(0, -1)),
                                                    O.includes("\n"))
                                                )
                                                    return m(
                                                        () => {
                                                            var e = O.split("\n");
                                                            e.forEach((n, r) => {
                                                                (n && d.KE.insertText(t, n),
                                                                    r !== e.length - 1 && d.KE.insertSoftBreak(t));
                                                            });
                                                        },
                                                        { at: r },
                                                    );
                                                if (d.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var [M, N] = d.Q6.edges(r),
                                                        I = { start: M.offset, end: N.offset, text: O };
                                                    if (O && l && "insertCompositionText" === n) {
                                                        var j = l.start + l.text.search(/\S|$/);
                                                        I.start + I.text.search(/\S|$/) === j + 1 &&
                                                        I.end === l.start + l.text.length
                                                            ? ((I.start -= 1), (l = null), y())
                                                            : (l = !1);
                                                    } else
                                                        l =
                                                            "insertText" === n &&
                                                            (null === l
                                                                ? I
                                                                : !!(l && d.Q6.isCollapsed(r)) &&
                                                                  l.end + l.text.length === M.offset &&
                                                                  eQ(eQ({}, l), {}, { text: l.text + O }));
                                                    if (s) return void p(M.path, I);
                                                }
                                                return m(() => d.KE.insertText(t, O), { at: r });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    g() || (h(!0), setTimeout(h));
                                },
                                handleDomMutations: (e) => {
                                    if (!(g() || _()) && e.some((n) => Q(t, n, e))) {
                                        var n;
                                        null == (n = I.get(t)) || n();
                                    }
                                },
                                handleInput: () => {
                                    (_() || !g()) && f();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? e2(Object(n), !0).forEach(function (t) {
                                              m(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                          : e2(Object(n)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                            });
                                }
                                return e;
                            })({ editor: i }, r),
                        ),
                    );
                return (
                    !(function (e, t, n) {
                        var [r] = (0, l.useState)(() => new MutationObserver(t));
                        (ey(() => {
                            r.takeRecords();
                        }),
                            (0, l.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return (r.observe(e.current, n), () => r.disconnect());
                            }, []));
                    })(n, o.handleDomMutations, e3),
                    S.set(i, o.scheduleFlush),
                    a && o.flush(),
                    o
                );
            })({ node: ee, onDOMSelectionChange: eg, scheduleOnDOMSelectionChange: ev });
        ey(() => {
            ee.current && (e = $(ee.current))
                ? (D.set(H, e), w.set(H, ee.current), A.set(H, ee.current), E.set(ee.current, H))
                : A.delete(H);
            var e,
                { selection: t } = H,
                n = em.findDocumentOrShadowRoot(H).getSelection();
            if (!(!n || !em.isFocused(H) || (null != eb && eb.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var i = w.get(H),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var o = em.toSlateRange(H, n, { exactMatch: !0, suppressThrow: !0 }),
                                    u =
                                        (null == n.anchorNode ||
                                            3 !== n.anchorNode.nodeType ||
                                            null == n.focusNode ||
                                            3 !== n.focusNode.nodeType) &&
                                        !em.isComposing(H);
                                if (o && d.Q6.equals(o, t) && !u) {
                                    if (!e_.hasMarkPlaceholder) return;
                                    var s,
                                        { anchorNode: l } = n;
                                    if (
                                        null != l &&
                                        null != (s = l.parentElement) &&
                                        s.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !em.hasRange(H, t)) {
                                H.selection = em.toSlateRange(H, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            e_.isUpdatingSelection = !0;
                            var c = t && em.toDOMRange(H, t);
                            return (
                                c
                                    ? (d.Q6.isBackward(t)
                                          ? n.setBaseAndExtent(
                                                c.endContainer,
                                                c.endOffset,
                                                c.startContainer,
                                                c.startOffset,
                                            )
                                          : n.setBaseAndExtent(
                                                c.startContainer,
                                                c.startOffset,
                                                c.endContainer,
                                                c.endOffset,
                                            ),
                                      V(H, c))
                                    : n.removeAllRanges(),
                                c
                            );
                        }
                    },
                    i = r(),
                    a = (null == eb ? void 0 : eb.isFlushing()) === "action";
                if (!er || !a)
                    return void setTimeout(() => {
                        (i && ei && em.toDOMNode(H, H).focus(), (e_.isUpdatingSelection = !1));
                    });
                var o = null,
                    u = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    (em.toDOMNode(H, H).focus(), r(e));
                                } catch (e) {}
                            };
                            (e(),
                                (o = setTimeout(() => {
                                    (e(!0), (e_.isUpdatingSelection = !1));
                                })));
                        }
                    });
                return () => {
                    (cancelAnimationFrame(u), o && clearTimeout(o));
                };
            }
        });
        var eD = (0, l.useCallback)(
                (e) => {
                    if ((eo(), !y && em.hasEditableTarget(H, e.target) && !ti(e, g))) {
                        if (eb) return eb.handleDOMBeforeInput(e);
                        (ev.flush(), eg.flush());
                        var { selection: t } = H,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(i && em.isComposing(H))) {
                            var a = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                d.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                ((a = !0), H.marks && (a = !1));
                                var { anchor: o } = t,
                                    [u, s] = em.toDOMPoint(H, o),
                                    l = null == (h = u.parentElement) ? void 0 : h.closest("a"),
                                    c = em.getWindow(H);
                                if (a && l && em.hasDOMNode(H, l)) {
                                    var f,
                                        h,
                                        p,
                                        m,
                                        _ =
                                            null == c
                                                ? void 0
                                                : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                    _ === u && (null == (m = _.textContent) ? void 0 : m.length) === s && (a = !1);
                                }
                                if (
                                    a &&
                                    u.parentElement &&
                                    (null == c || null == (p = c.getComputedStyle(u.parentElement))
                                        ? void 0
                                        : p.whiteSpace) === "pre"
                                ) {
                                    var v = d.KE.above(H, {
                                        at: o.path,
                                        match: (e) => d.Hg.isElement(e) && d.KE.isBlock(H, e),
                                    });
                                    v && d.bP.string(v[0]).includes("	") && (a = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [b] = e.getTargetRanges();
                                if (b) {
                                    var D = em.toSlateRange(H, b, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !d.Q6.equals(t, D)) {
                                        a = !1;
                                        var w = !i && H.selection && d.KE.rangeRef(H, H.selection);
                                        (d.gB.select(H, D), w && R.set(H, w));
                                    }
                                }
                            }
                            if (!i) {
                                if ((a || e.preventDefault(), t && d.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var C = n.endsWith("Backward") ? "backward" : "forward";
                                    d.KE.deleteFragment(H, { direction: C });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        d.KE.deleteFragment(H);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        d.KE.deleteForward(H);
                                        break;
                                    case "deleteContentBackward":
                                        d.KE.deleteBackward(H);
                                        break;
                                    case "deleteEntireSoftLine":
                                        (d.KE.deleteBackward(H, { unit: "line" }),
                                            d.KE.deleteForward(H, { unit: "line" }));
                                        break;
                                    case "deleteHardLineBackward":
                                        d.KE.deleteBackward(H, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        d.KE.deleteBackward(H, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        d.KE.deleteForward(H, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        d.KE.deleteForward(H, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        d.KE.deleteBackward(H, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        d.KE.deleteForward(H, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        d.KE.insertSoftBreak(H);
                                        break;
                                    case "insertParagraph":
                                        d.KE.insertBreak(H);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        ("insertFromComposition" === n && em.isComposing(H) && (Y(!1), T.set(H, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? em.insertData(H, r)
                                                : "string" == typeof r &&
                                                  (a
                                                      ? en.current.push(() => d.KE.insertText(H, r))
                                                      : d.KE.insertText(H, r)));
                                }
                                var E = null == (f = R.get(H)) ? void 0 : f.unref();
                                (R.delete(H), !E || (H.selection && d.Q6.equals(H.selection, E)) || d.gB.select(H, E));
                            }
                        }
                    }
                },
                [y, g],
            ),
            ew = (0, l.useCallback)(
                (e) => {
                    (null == e
                        ? (eg.cancel(),
                          ev.cancel(),
                          w.delete(H),
                          A.delete(H),
                          ee.current && ep && ee.current.removeEventListener("beforeinput", eD))
                        : ep && e.addEventListener("beforeinput", eD),
                        (ee.current = e));
                },
                [ee, eD, eg, ev],
            );
        ey(() => {
            var e = em.getWindow(H);
            return (
                e.document.addEventListener("selectionchange", ev),
                () => {
                    e.document.removeEventListener("selectionchange", ev);
                }
            );
        }, [ev]);
        var eC = p([H, []]);
        if (v && 1 === H.children.length && 1 === Array.from(d.bP.texts(H)).length && "" === d.bP.string(H) && !X) {
            var eE = d.KE.start(H, []);
            eC.push({ [j]: !0, placeholder: v, anchor: eE, focus: eE });
        }
        var { marks: ek } = H;
        if (((e_.hasMarkPlaceholder = !1), H.selection && d.Q6.isCollapsed(H.selection) && ek)) {
            var { anchor: eB } = H.selection,
                eF = d.bP.leaf(H, eB.path),
                ex = _(eF, e4);
            if (!d.EY.equals(eF, ek, { loose: !0 })) {
                e_.hasMarkPlaceholder = !0;
                var eT = Object.fromEntries(Object.keys(ex).map((e) => [e, null]));
                eC.push(e6(e6(e6({ [L]: !0 }, eT), ek), {}, { anchor: eB, focus: eB }));
            }
        }
        (0, l.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = H;
                if (e) {
                    var { anchor: t } = e,
                        n = d.bP.leaf(H, t.path);
                    if (ek && !d.EY.equals(n, ek, { loose: !0 })) return void P.set(H, ek);
                }
                P.delete(H);
            });
        });
        var eV = null == (u = C.get(H)) || null == (c = u.getBoundingClientRect()) ? void 0 : c.height;
        return l.createElement(
            eO.Provider,
            { value: y },
            l.createElement(
                eR.Provider,
                { value: p },
                l.createElement(
                    eW,
                    { node: ee, receivedUserInput: es },
                    l.createElement(
                        U,
                        Object.assign({ role: y ? void 0 : "textbox", "aria-multiline": !y || void 0 }, J, {
                            spellCheck: (!!ep || !eh) && J.spellCheck,
                            autoCorrect: ep || !eh ? J.autoCorrect : "false",
                            autoCapitalize: ep || !eh ? J.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !y,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: ew,
                            style: e6(
                                e6(
                                    {},
                                    K
                                        ? {}
                                        : e6(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              eV ? { minHeight: eV } : {},
                                          ),
                                ),
                                Z,
                            ),
                            onBeforeInput: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        !ep &&
                                        !y &&
                                        !tr(e, J.onBeforeInput) &&
                                        em.hasSelectableTarget(H, e.target) &&
                                        (e.preventDefault(), !em.isComposing(H))
                                    ) {
                                        var t = e.data;
                                        d.KE.insertText(H, t);
                                    }
                                },
                                [y],
                            ),
                            onInput: (0, l.useCallback)((e) => {
                                if (!tr(e, J.onInput)) {
                                    if (eb) return void eb.handleInput();
                                    for (var t of en.current) t();
                                    en.current = [];
                                }
                            }, []),
                            onBlur: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        y ||
                                        e_.isUpdatingSelection ||
                                        !em.hasSelectableTarget(H, e.target) ||
                                        tr(e, J.onBlur)
                                    )
                                        return;
                                    var t = em.findDocumentOrShadowRoot(H);
                                    if (e_.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== em.toDOMNode(H, H) &&
                                            !(W(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && G(n) && em.hasDOMNode(H, n)) {
                                                var r = em.toSlateNode(H, n);
                                                if (d.Hg.isElement(r) && !H.isVoid(r)) return;
                                            }
                                            if (ea) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            x.delete(H);
                                        }
                                    }
                                },
                                [y, J.onBlur],
                            ),
                            onClick: (0, l.useCallback)(
                                (e) => {
                                    if (em.hasTarget(H, e.target) && !tr(e, J.onClick) && G(e.target)) {
                                        var t = em.toSlateNode(H, e.target),
                                            n = em.findPath(H, t);
                                        if (d.KE.hasPath(H, n) && d.bP.get(H, n) === t) {
                                            if (3 === e.detail && n.length >= 1) {
                                                var r = n;
                                                if (!(d.Hg.isElement(t) && d.KE.isBlock(H, t))) {
                                                    var i,
                                                        a = d.KE.above(H, {
                                                            match: (e) => d.Hg.isElement(e) && d.KE.isBlock(H, e),
                                                            at: n,
                                                        });
                                                    r = null != (i = null == a ? void 0 : a[1]) ? i : n.slice(0, 1);
                                                }
                                                var o = d.KE.range(H, r);
                                                d.gB.select(H, o);
                                                return;
                                            }
                                            if (!y) {
                                                var u = d.KE.start(H, n),
                                                    s = d.KE.end(H, n),
                                                    l = d.KE.void(H, { at: u }),
                                                    c = d.KE.void(H, { at: s });
                                                if (l && c && d.wA.equals(l[1], c[1])) {
                                                    var f = d.KE.range(H, u);
                                                    d.gB.select(H, f);
                                                }
                                            }
                                        }
                                    }
                                },
                                [y, J.onClick],
                            ),
                            onCompositionEnd: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        em.hasSelectableTarget(H, e.target) &&
                                        (em.isComposing(H) && (Y(!1), T.set(H, !1)),
                                        null == eb || eb.handleCompositionEnd(e),
                                        !tr(e, J.onCompositionEnd) && !er && !ea && !ec && !et && !ef && !ed) &&
                                        e.data
                                    ) {
                                        var t = P.get(H);
                                        (P.delete(H),
                                            void 0 !== t && (O.set(H, H.marks), (H.marks = t)),
                                            d.KE.insertText(H, e.data));
                                        var n = O.get(H);
                                        (O.delete(H), void 0 !== n && (H.marks = n));
                                    }
                                },
                                [J.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, l.useCallback)(
                                (e) => {
                                    !em.hasSelectableTarget(H, e.target) ||
                                        tr(e, J.onCompositionUpdate) ||
                                        em.isComposing(H) ||
                                        (Y(!0), T.set(H, !0));
                                },
                                [J.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        em.hasSelectableTarget(H, e.target) &&
                                        (null == eb || eb.handleCompositionStart(e),
                                        !tr(e, J.onCompositionStart) && !er)
                                    ) {
                                        Y(!0);
                                        var { selection: t } = H;
                                        if (t) {
                                            if (d.Q6.isExpanded(t)) return void d.KE.deleteFragment(H);
                                            var n = d.KE.above(H, {
                                                match: (e) => d.Hg.isElement(e) && d.KE.isInline(H, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, r] = n;
                                                if (d.KE.isEnd(H, t.anchor, r)) {
                                                    var i = d.KE.after(H, r);
                                                    d.gB.setSelection(H, { anchor: i, focus: i });
                                                }
                                            }
                                        }
                                    }
                                },
                                [J.onCompositionStart],
                            ),
                            onCopy: (0, l.useCallback)(
                                (e) => {
                                    em.hasSelectableTarget(H, e.target) &&
                                        !tr(e, J.onCopy) &&
                                        (e.preventDefault(), em.setFragmentData(H, e.clipboardData, "copy"));
                                },
                                [J.onCopy],
                            ),
                            onCut: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasSelectableTarget(H, e.target) && !tr(e, J.onCut)) {
                                        (e.preventDefault(), em.setFragmentData(H, e.clipboardData, "cut"));
                                        var { selection: t } = H;
                                        if (t)
                                            if (d.Q6.isExpanded(t)) d.KE.deleteFragment(H);
                                            else {
                                                var n = d.bP.parent(H, t.anchor.path);
                                                d.KE.isVoid(H, n) && d.gB.delete(H);
                                            }
                                    }
                                },
                                [y, J.onCut],
                            ),
                            onDragOver: (0, l.useCallback)(
                                (e) => {
                                    if (em.hasTarget(H, e.target) && !tr(e, J.onDragOver)) {
                                        var t = em.toSlateNode(H, e.target);
                                        d.Hg.isElement(t) && d.KE.isVoid(H, t) && e.preventDefault();
                                    }
                                },
                                [J.onDragOver],
                            ),
                            onDragStart: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasTarget(H, e.target) && !tr(e, J.onDragStart)) {
                                        var t = em.toSlateNode(H, e.target),
                                            n = em.findPath(H, t);
                                        if (
                                            (d.Hg.isElement(t) && d.KE.isVoid(H, t)) ||
                                            d.KE.void(H, { at: n, voids: !0 })
                                        ) {
                                            var r = d.KE.range(H, n);
                                            d.gB.select(H, r);
                                        }
                                        ((e_.isDraggingInternally = !0), em.setFragmentData(H, e.dataTransfer, "drag"));
                                    }
                                },
                                [y, J.onDragStart],
                            ),
                            onDrop: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasTarget(H, e.target) && !tr(e, J.onDrop)) {
                                        e.preventDefault();
                                        var t = H.selection,
                                            n = em.findEventRange(H, e),
                                            r = e.dataTransfer;
                                        (d.gB.select(H, n),
                                            e_.isDraggingInternally &&
                                                t &&
                                                !d.Q6.equals(t, n) &&
                                                !d.KE.void(H, { at: n, voids: !0 }) &&
                                                d.gB.delete(H, { at: t }),
                                            em.insertData(H, r),
                                            em.isFocused(H) || em.focus(H));
                                    }
                                    e_.isDraggingInternally = !1;
                                },
                                [y, J.onDrop],
                            ),
                            onDragEnd: (0, l.useCallback)(
                                (e) => {
                                    (!y &&
                                        e_.isDraggingInternally &&
                                        J.onDragEnd &&
                                        em.hasTarget(H, e.target) &&
                                        J.onDragEnd(e),
                                        (e_.isDraggingInternally = !1));
                                },
                                [y, J.onDragEnd],
                            ),
                            onFocus: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        !y &&
                                        !e_.isUpdatingSelection &&
                                        em.hasEditableTarget(H, e.target) &&
                                        !tr(e, J.onFocus)
                                    ) {
                                        var t = em.toDOMNode(H, H);
                                        if (
                                            ((e_.latestElement = em.findDocumentOrShadowRoot(H).activeElement),
                                            ei && e.target !== t)
                                        )
                                            return void t.focus();
                                        x.set(H, !0);
                                    }
                                },
                                [y, J.onFocus],
                            ),
                            onKeyDown: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasEditableTarget(H, e.target)) {
                                        null == eb || eb.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (em.isComposing(H) && !1 === t.isComposing && (T.set(H, !1), Y(!1)),
                                            !(tr(e, J.onKeyDown) || em.isComposing(H)))
                                        ) {
                                            var { selection: n } = H,
                                                r = H.children[null !== n ? n.focus.path[0] : 0],
                                                a = "rtl" === i()(d.bP.string(r));
                                            if (eZ.isRedo(t)) {
                                                (e.preventDefault(), "function" == typeof H.redo && H.redo());
                                                return;
                                            }
                                            if (eZ.isUndo(t)) {
                                                (e.preventDefault(), "function" == typeof H.undo && H.undo());
                                                return;
                                            }
                                            if (eZ.isMoveLineBackward(t)) {
                                                (e.preventDefault(), d.gB.move(H, { unit: "line", reverse: !0 }));
                                                return;
                                            }
                                            if (eZ.isMoveLineForward(t)) {
                                                (e.preventDefault(), d.gB.move(H, { unit: "line" }));
                                                return;
                                            }
                                            if (eZ.isExtendLineBackward(t)) {
                                                (e.preventDefault(),
                                                    d.gB.move(H, { unit: "line", edge: "focus", reverse: !0 }));
                                                return;
                                            }
                                            if (eZ.isExtendLineForward(t)) {
                                                (e.preventDefault(), d.gB.move(H, { unit: "line", edge: "focus" }));
                                                return;
                                            }
                                            if (eZ.isMoveBackward(t)) {
                                                (e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(H, { reverse: !a })
                                                        : d.gB.collapse(H, { edge: "start" }));
                                                return;
                                            }
                                            if (eZ.isMoveForward(t)) {
                                                (e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(H, { reverse: a })
                                                        : d.gB.collapse(H, { edge: "end" }));
                                                return;
                                            }
                                            if (eZ.isMoveWordBackward(t)) {
                                                (e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(H, { edge: "focus" }),
                                                    d.gB.move(H, { unit: "word", reverse: !a }));
                                                return;
                                            }
                                            if (eZ.isMoveWordForward(t)) {
                                                (e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(H, { edge: "focus" }),
                                                    d.gB.move(H, { unit: "word", reverse: a }));
                                                return;
                                            }
                                            if (ep) {
                                                if (
                                                    (eu || ea) &&
                                                    n &&
                                                    (eZ.isDeleteBackward(t) || eZ.isDeleteForward(t)) &&
                                                    d.Q6.isCollapsed(n)
                                                ) {
                                                    var o = d.bP.parent(H, n.anchor.path);
                                                    if (
                                                        d.Hg.isElement(o) &&
                                                        d.KE.isVoid(H, o) &&
                                                        (d.KE.isInline(H, o) || d.KE.isBlock(H, o))
                                                    ) {
                                                        (e.preventDefault(), d.KE.deleteBackward(H, { unit: "block" }));
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (eZ.isBold(t) || eZ.isItalic(t) || eZ.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (eZ.isSoftBreak(t)) {
                                                    (e.preventDefault(), d.KE.insertSoftBreak(H));
                                                    return;
                                                }
                                                if (eZ.isSplitBlock(t)) {
                                                    (e.preventDefault(), d.KE.insertBreak(H));
                                                    return;
                                                }
                                                if (eZ.isDeleteBackward(t)) {
                                                    (e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(H, { direction: "backward" })
                                                            : d.KE.deleteBackward(H));
                                                    return;
                                                }
                                                if (eZ.isDeleteForward(t)) {
                                                    (e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(H, { direction: "forward" })
                                                            : d.KE.deleteForward(H));
                                                    return;
                                                }
                                                if (eZ.isDeleteLineBackward(t)) {
                                                    (e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(H, { direction: "backward" })
                                                            : d.KE.deleteBackward(H, { unit: "line" }));
                                                    return;
                                                }
                                                if (eZ.isDeleteLineForward(t)) {
                                                    (e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(H, { direction: "forward" })
                                                            : d.KE.deleteForward(H, { unit: "line" }));
                                                    return;
                                                }
                                                if (eZ.isDeleteWordBackward(t)) {
                                                    (e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(H, { direction: "backward" })
                                                            : d.KE.deleteBackward(H, { unit: "word" }));
                                                    return;
                                                }
                                                if (eZ.isDeleteWordForward(t)) {
                                                    (e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(H, { direction: "forward" })
                                                            : d.KE.deleteForward(H, { unit: "word" }));
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [y, J.onKeyDown],
                            ),
                            onPaste: (0, l.useCallback)(
                                (e) => {
                                    let t;
                                    !y &&
                                        em.hasEditableTarget(H, e.target) &&
                                        !tr(e, J.onPaste) &&
                                        (!ep ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            ea) &&
                                        (e.preventDefault(), em.insertData(H, e.clipboardData));
                                },
                                [y, J.onPaste],
                            ),
                        }),
                        l.createElement(e8, {
                            decorations: eC,
                            node: H,
                            renderElement: b,
                            renderPlaceholder: B,
                            renderLeaf: k,
                            selection: H.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    te = (e) => {
        var { attributes: t, children: n } = e;
        return l.createElement("span", Object.assign({}, t), n, er && l.createElement("br", null));
    },
    tt = () => [],
    tn = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement,
                r = function (e) {
                    var n = t.startContainer,
                        r = t.startOffset + e;
                    if (3 !== n.nodeType || r < 0 || r + 1 > n.length) return null;
                    var i = n.ownerDocument.createRange();
                    return (i.setStart(n, r), i.setEnd(n, r + 1), i.getClientRects().length > 0 ? i : null);
                },
                i = t;
            if (0 === t.getClientRects().length) {
                var a = r(0) || r(-1);
                if (null === a) return;
                i = a;
            }
            ((n.getBoundingClientRect = i.getBoundingClientRect.bind(i)),
                (0, c.A)(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect);
        }
    },
    tr = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    ti = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    ta = (0, l.createContext)(!1),
    to = () => (0, l.useContext)(ta),
    tu = (0, l.createContext)({}),
    ts = ["editor", "children", "onChange", "value"],
    tl = (e) => {
        var t,
            n,
            r,
            { editor: i, children: a, onChange: o, value: u } = e,
            s = _(e, ts),
            c = (0, l.useRef)(!1),
            [f, h] = l.useState(() => {
                if (!d.bP.isNodeList(u))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(d.h6.stringify(u)),
                    );
                if (!d.KE.isEditor(i)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.h6.stringify(i)));
                return ((i.children = u), Object.assign(i, s), { v: 0, editor: i });
            }),
            { selectorContext: p, onChange: m } =
                ((t = (0, l.useRef)([]).current),
                (n = (0, l.useRef)({ editor: i }).current),
                (r = (0, l.useCallback)((e) => {
                    ((n.editor = e), t.forEach((t) => t(e)));
                }, [])),
                {
                    selectorContext: (0, l.useMemo)(
                        () => ({
                            getSlate: () => n.editor,
                            addEventListener: (e) => (
                                t.push(e),
                                () => {
                                    t.splice(t.indexOf(e), 1);
                                }
                            ),
                        }),
                        [t, n],
                    ),
                    onChange: r,
                }),
            g = (0, l.useCallback)(() => {
                (o && o(i.children), h((e) => ({ v: e.v + 1, editor: i })), m(i));
            }, [o]);
        (0, l.useEffect)(
            () => (
                V.set(i, g),
                () => {
                    (V.set(i, () => {}), (c.current = !0));
                }
            ),
            [g],
        );
        var [v, y] = (0, l.useState)(em.isFocused(i));
        return (
            (0, l.useEffect)(() => {
                y(em.isFocused(i));
            }),
            ey(() => {
                var e = () => y(em.isFocused(i));
                return ee
                    ? (document.addEventListener("focusin", e),
                      document.addEventListener("focusout", e),
                      () => {
                          (document.removeEventListener("focusin", e), document.removeEventListener("focusout", e));
                      })
                    : (document.addEventListener("focus", e, !0),
                      document.addEventListener("blur", e, !0),
                      () => {
                          (document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0));
                      });
            }, []),
            l.createElement(
                tu.Provider,
                { value: p },
                l.createElement(
                    eM.Provider,
                    { value: f },
                    l.createElement(eE.Provider, { value: f.editor }, l.createElement(ta.Provider, { value: v }, a)),
                ),
            )
        );
    },
    tc = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    td = (e, t, n) => {
        var r = em.toDOMRange(e, t).getBoundingClientRect(),
            i = em.toDOMRange(e, n).getBoundingClientRect();
        return tc(r, i) && tc(i, r);
    };
function tf(e, t) {
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
function th(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tf(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tf(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tp = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: n, onChange: r, deleteBackward: i, addMark: a, removeMark: o } = e;
        return (
            B.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
                var r, i;
                (null == (r = S.get(e)) || r(),
                    !P.get(e) && null != (i = z.get(e)) && i.length && P.set(e, null),
                    O.delete(e),
                    a(t, n));
            }),
            (e.removeMark = (t) => {
                var n;
                (!P.get(e) && null != (n = z.get(e)) && n.length && P.set(e, null), O.delete(e), o(t));
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return i(t);
                if (e.selection && d.Q6.isCollapsed(e.selection)) {
                    var n = d.KE.above(e, { match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t), at: e.selection });
                    if (n) {
                        var [, r] = n,
                            a = d.KE.range(e, r, e.selection.anchor),
                            o = ((e, t) => {
                                var n = d.KE.range(e, d.Q6.end(t)),
                                    r = Array.from(d.KE.positions(e, { at: t })),
                                    i = 0,
                                    a = r.length,
                                    o = Math.floor(a / 2);
                                if (td(e, d.KE.range(e, r[i]), n)) return d.KE.range(e, r[i], n);
                                if (r.length < 2) return d.KE.range(e, r[r.length - 1], n);
                                for (; o !== r.length && o !== i;)
                                    (td(e, d.KE.range(e, r[o]), n) ? (a = o) : (i = o), (o = Math.floor((i + a) / 2)));
                                return d.KE.range(e, r[a], n);
                            })(e, a);
                        d.Q6.isCollapsed(o) || d.gB.delete(e, { at: o });
                    }
                }
            }),
            (e.apply = (t) => {
                var r,
                    i = [],
                    a = z.get(e);
                if (null != a && a.length) {
                    var o = a
                        .map((e) =>
                            (function (e, t) {
                                var { path: n, diff: r, id: i } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset <= r.start)
                                            return {
                                                diff: {
                                                    start: t.text.length + r.start,
                                                    end: t.text.length + r.end,
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end + t.text.length, text: r.text },
                                            id: i,
                                            path: n,
                                        };
                                    case "remove_text":
                                        if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset + t.text.length <= r.start)
                                            return {
                                                diff: {
                                                    start: r.start - t.text.length,
                                                    end: r.end - t.text.length,
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end - t.text.length, text: r.text },
                                            id: i,
                                            path: n,
                                        };
                                    case "split_node":
                                        if (!d.wA.equals(t.path, n) || t.position >= r.end)
                                            return {
                                                diff: r,
                                                id: i,
                                                path: d.wA.transform(n, t, { affinity: "backward" }),
                                            };
                                        if (t.position > r.start)
                                            return {
                                                diff: {
                                                    start: r.start,
                                                    end: Math.min(t.position, r.end),
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: {
                                                start: r.start - t.position,
                                                end: r.end - t.position,
                                                text: r.text,
                                            },
                                            id: i,
                                            path: d.wA.transform(n, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!d.wA.equals(t.path, n))
                                            return { diff: r, id: i, path: d.wA.transform(n, t) };
                                        return {
                                            diff: {
                                                start: r.start + t.position,
                                                end: r.end + t.position,
                                                text: r.text,
                                            },
                                            id: i,
                                            path: d.wA.transform(n, t),
                                        };
                                }
                                var a = d.wA.transform(n, t);
                                return a ? { diff: r, path: a, id: i } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    z.set(e, o);
                }
                var u = N.get(e);
                u && N.set(e, eX(e, u, t));
                var s = M.get(e);
                if (null != s && s.at) {
                    var l = d.bR.isPoint(null == s ? void 0 : s.at) ? eH(e, s.at, t) : eX(e, s.at, t);
                    M.set(e, l ? th(th({}, s), {}, { at: l }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...tm(e, t.path));
                        break;
                    case "set_selection":
                        (null == (r = R.get(e)) || r.unref(), R.delete(e));
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...tm(e, d.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        i.push(...tm(e, d.wA.previous(t.path)));
                        break;
                    case "move_node":
                        i.push(...tm(e, d.wA.common(d.wA.parent(t.path), d.wA.parent(t.newPath))));
                }
                for (var [c, f] of (n(t), i)) {
                    var [h] = d.KE.node(e, c);
                    k.set(h, f);
                }
            }),
            (e.setFragmentData = (n) => {
                var { selection: r } = e;
                if (r) {
                    var [i, a] = d.Q6.edges(r),
                        o = d.KE.void(e, { at: i.path }),
                        u = d.KE.void(e, { at: a.path });
                    if (!d.Q6.isCollapsed(r) || o) {
                        var s = em.toDOMRange(e, r),
                            l = s.cloneContents(),
                            c = l.childNodes[0];
                        if (
                            (l.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (c = e);
                            }),
                            u)
                        ) {
                            var [f] = u,
                                h = s.cloneRange(),
                                p = em.toDOMNode(e, f);
                            (h.setEndAfter(p), (l = h.cloneContents()));
                        }
                        if (
                            (o && (c = l.querySelector("[data-slate-spacer]")),
                            Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            K(c))
                        ) {
                            var m = c.ownerDocument.createElement("span");
                            ((m.style.whiteSpace = "pre"), m.appendChild(c), l.appendChild(m), (c = m));
                        }
                        var _ = JSON.stringify(e.getFragment()),
                            g = window.btoa(encodeURIComponent(_));
                        (c.setAttribute("data-slate-fragment", g), n.setData("application/".concat(t), g));
                        var v = l.ownerDocument.createElement("div");
                        return (
                            v.appendChild(l),
                            v.setAttribute("hidden", "true"),
                            l.ownerDocument.body.appendChild(v),
                            n.setData("text/html", v.innerHTML),
                            n.setData("text/plain", X(v)),
                            l.ownerDocument.body.removeChild(v),
                            n
                        );
                    }
                }
            }),
            (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (n) => {
                var r =
                    n.getData("application/".concat(t)) ||
                    ((e) => {
                        var [, t] = e.getData("text/html").match(Y) || [];
                        return t;
                    })(n);
                if (r) {
                    var i = JSON.parse(decodeURIComponent(window.atob(r)));
                    return (e.insertFragment(i), !0);
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var n = t.getData("text/plain");
                if (n) {
                    var r = n.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var a of r) (i && d.gB.splitNodes(e, { always: !0 }), e.insertText(a), (i = !0));
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                p.unstable_batchedUpdates(() => {
                    var n = V.get(e);
                    (n && n(), r(t));
                });
            }),
            e
        );
    },
    tm = (e, t) => {
        var n = [];
        for (var [r, i] of d.KE.levels(e, { at: t })) {
            var a = em.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
