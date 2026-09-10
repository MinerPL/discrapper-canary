s.d(t, { RB: () => p, aB: () => g, x6: () => f });
var i = s(636537),
    n = s(691540),
    a = s(857250),
    r = s(97483),
    l = s(228366),
    c = s(181658),
    o = s(919466),
    d = s(297966),
    u = s(652215),
    m = s(375708);
function x() {
    let e = o.A.getRequestState();
    return e === d.db.FETCHING || e === d.db.CANCELLING;
}
async function g(e) {
    if (!x()) {
        l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.post({ url: u.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
            return (l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body);
        } catch {
            (l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" }),
                (0, n.P0)((0, a.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE)));
        }
    }
}
async function f(e) {
    if (!x()) {
        l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: u.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
            return (l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body);
        } catch (e) {
            10138 === new c.A(e).code
                ? l.h.dispatch({ type: "PARTNER_ACTIVATION_RESET" })
                : l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" });
        }
    }
}
async function p(e) {
    if (!x()) {
        l.h.dispatch({ type: "PARTNER_CANCELLATION_START" });
        try {
            (await i.Bo.del({ url: u.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                l.h.dispatch({ type: "PARTNER_CANCELLATION_SUCCESS" }));
        } catch {
            (l.h.dispatch({ type: "PARTNER_CANCELLATION_FAILURE" }),
                (0, n.P0)((0, a.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE)));
        }
    }
}
