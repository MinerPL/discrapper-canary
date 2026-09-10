n.d(t, { h: () => I, x: () => u });
var i = n(308588),
    l = n(403581),
    c = n(104510),
    r = n(987144),
    s = n(75678),
    a = n(976860),
    o = n(44724),
    _ = n(71393),
    T = n(202541),
    A = n(92737),
    E = n(652215);
function u(e) {
    let { buttonAction: t } = e;
    switch (t ?? i.d.UNSPECIFIED) {
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return { icon: void 0 };
        case i.d.OPEN_GUILD_BOOST_CHECKOUT:
            return { icon: c._ };
        default:
            return { icon: l.t };
    }
}
function I(e) {
    let {
        buttonAction: t,
        deeplinkSection: n,
        applicationId: l,
        guildId: c,
        analyticsLocations: u = [],
        analyticsLocation: I,
        onClose: d,
    } = e;
    switch (t) {
        case i.d.OPEN_GUILD_BOOST_CHECKOUT:
            return () => {
                let e = null != c ? _.A.getGuild(c) : null;
                null != e && (0, r.g)({ guild: e, analyticsLocations: u, analyticsLocation: I ?? {}, onClose: d });
            };
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                (null != l && (0, o.default)({ applicationId: l }), d?.());
            };
        case i.d.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${E.BVt.APPLICATION_STORE}?${A.x}=${encodeURIComponent(n)}`
                        : E.BVt.APPLICATION_STORE;
                ((0, a.pX)(e), d?.());
            };
        case i.d.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: T.pe.TIER_1,
                    analyticsLocations: u,
                    analyticsObject: { ...I, object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.d.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, s.A)({ analyticsLocations: u });
        case i.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: T.pe.TIER_2,
                    initialPlanId: T.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: u,
                    analyticsObject: { ...I, object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.d.OPEN_TIER_2_PAYMENT_MODAL:
        case i.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, s.A)({
                    subscriptionTier: T.pe.TIER_2,
                    analyticsLocations: u,
                    analyticsObject: { ...I, object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
    }
}
