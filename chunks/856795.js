l.d(t, { Q: () => a });
var n = l(582128);
function a(e) {
    let [t, l] = n.useState(e),
        [a, s] = n.useState("idle"),
        [i, r] = n.useState(e);
    return (
        i !== e && (r(e), s(e === t ? "idle" : "exit")),
        n.useEffect(() => {
            if ("exit" !== a) return;
            let e = setTimeout(() => {
                l(i), s("enter");
            }, 150);
            return () => clearTimeout(e);
        }, [a, i]),
        n.useEffect(() => {
            if ("enter" !== a) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => s("idle"));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [a]),
        { text: t, phase: a }
    );
}
