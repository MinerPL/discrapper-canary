n.d(t, { A: () => s });
var i = n(582128),
    a = n(287809),
    r = n(402860);
function s() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, i.useCallback)(() => {
        let t = a.default.getCurrentUser();
        null != t && (0, r.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
