i.d(r, { v: () => t });
var l = i(477900),
    a = i(503698),
    d = i.n(a),
    u = i(85463),
    g = i(834730),
    n = i(727960);
let p = {
    blurpleLight: "blurple-light",
    blurpleMedium: "blurple-medium",
    blurpleDark: "blurple-dark",
    purpleLight: "purple-light",
    purpleMedium: "purple-medium",
    purpleDark: "purple-dark",
    greenLight: "green-light",
    greenMedium: "green-medium",
    greenDark: "green-dark",
    orangeLight: "orange-light",
    orangeMedium: "orange-medium",
    orangeDark: "orange-dark",
    yellowLight: "yellow-light",
    yellowMedium: "yellow-medium",
    yellowDark: "yellow-dark",
    pinkLight: "pink-light",
    pinkMedium: "pink-medium",
    pinkDark: "pink-dark",
    redLight: "red-light",
    redMedium: "red-medium",
    redDark: "red-dark",
    grayLight: "gray-light",
    grayMedium: "gray-medium",
    grayDark: "gray-dark",
};
function t(e) {
    let { text: r, variant: i = "grayLight", icon: a, iconColor: t } = e,
        h = p[i],
        k = (0, u.N)(),
        m =
            null != a
                ? (0, l.jsx)(a, { color: t ?? "currentColor", size: "xxs", "aria-hidden": !0, className: n.icon })
                : null;
    return (0, l.jsxs)(g.E, {
        variant: k,
        className: d()(n.chip, n[h], { [n["with-icon"]]: null != a }),
        children: [m, r],
    });
}
