i.d(r, { v: () => p });
var l = i(477900),
    a = i(503698),
    d = i.n(a),
    u = i(834730),
    g = i(727960);
let n = {
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
function p(e) {
    let { text: r, variant: i = "grayLight", icon: a, iconColor: p } = e,
        t = n[i],
        h =
            null != a
                ? (0, l.jsx)(a, { color: p ?? "currentColor", size: "xxs", "aria-hidden": !0, className: g.icon })
                : null;
    return (0, l.jsxs)(u.E, {
        variant: "eyebrow",
        className: d()(g.chip, g[t], { [g["with-icon"]]: null != a }),
        children: [h, r],
    });
}
