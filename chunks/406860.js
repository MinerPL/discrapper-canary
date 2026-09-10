n.d(t, { A: () => l });
var i = n(582128),
    a = n(435558),
    r = n(174459),
    s = n(652215);
function l(e) {
    let { boxType: t, thirdPartyPartner: n } = e,
        l = i.useRef(null),
        o = i.useRef(!1);
    return {
        sectionRef: l,
        handleVisibilityChange: i.useCallback(
            (e) => {
                if (e && !o.current) {
                    o.current = !0;
                    let e = { box_type: (0, a.snakeCase)(t) };
                    (null != n && (e.third_party_partner = n),
                        r.default.track(s.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, e));
                }
            },
            [t, n],
        ),
    };
}
