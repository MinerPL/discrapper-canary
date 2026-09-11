function l(e) {
    let t = e?.getBoundingClientRect();
    return null == t ? null : { x: t.left, y: t.top };
}
n.d(t, { A: () => l });
