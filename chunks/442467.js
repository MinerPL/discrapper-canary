n.d(t, { C: () => s, d: () => l });
var i,
    r = n(136857),
    a = n(597643),
    s =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.PENDING = 1)] = "PENDING"),
        (i[(i.SUCCESS = 2)] = "SUCCESS"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
function l(e, t) {
    return {
        purchaseTokenAuthState: 0,
        purchaseTokenHash: null,
        expiresAt: null,
        handlePaymentFailureForPurchaseTokenAuth: (t) => {
            let { error: n } = t,
                i = n instanceof r.Ay ? n : new r.Ay(n);
            a.A.isConnected() &&
                i.code === r.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED &&
                e({ purchaseTokenAuthState: 1 });
        },
        handlePurchaseTokenAuth: (t) => {
            e({ purchaseTokenAuthState: 2, purchaseTokenHash: t.purchaseTokenHash, expiresAt: t.expiresAt });
        },
        resetPurchaseTokenState: () => {
            e({ purchaseTokenAuthState: 0, purchaseTokenHash: null, expiresAt: null });
        },
    };
}
