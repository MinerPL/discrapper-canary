l.d(n, { A: () => f });
var t = l(477900),
    i = l(582128),
    r = l(17928),
    a = l(826745),
    s = l(629403),
    o = l(612630),
    d = l(351906),
    u = l(652215),
    c = l(650583),
    g = l(375708),
    m = l(759847);
function f(e) {
    let { autoFocus: n = !1, className: l, userId: f, onUpdate: p } = e,
        x = (0, r.bG)([d.A], () => d.A.hidePersonalInformation),
        { loading: h, note: v } = (0, o.A)(f),
        A = i.useRef(null);
    return (i.useEffect(() => {
        if (!n || x) return;
        let e = A.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [n, x]),
    x)
        ? null
        : (0, t.jsx)("div", {
              className: l,
              children: (0, t.jsx)(a.y, {
                  ref: A,
                  className: m.P,
                  disabled: h,
                  placeholder: h ? g.intl.string(g.t["WLKx/9"]) : g.intl.string(g.t.VBhOe2),
                  "aria-label": g.intl.string(g.t.PbMNh2),
                  onBlur: function (e) {
                      let n = e.currentTarget.value;
                      (v ?? "") !== n && (p?.(), s.A.updateNote(f, n));
                  },
                  onKeyPress: function (e) {
                      e.key === c.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === c.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: v ?? void 0,
                  maxLength: u.T7x,
              }),
          });
}
