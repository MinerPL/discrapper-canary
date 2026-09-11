n.d(t, { P: () => g, m: () => _ });
var r = n(838259),
    i = n(162563),
    a = n(47361),
    o = (function () {
        function e(e, t, n, r) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = n),
                (this.height = r),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                (0, a.C)(this)
            );
        }
        return (
            (e.prototype.toJSON = function () {
                return {
                    x: this.x,
                    y: this.y,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    width: this.width,
                    height: this.height,
                };
            }),
            (e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height);
            }),
            e
        );
    })(),
    u = n(916784),
    s = n(717205),
    l = new WeakMap(),
    c = /auto|scroll/,
    d = /^tb|vertical/,
    f = /msie|trident/i.test(s.S.navigator && s.S.navigator.userAgent),
    h = function (e) {
        return parseFloat(e || "0");
    },
    p = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new i.a((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    m = (0, a.C)({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new o(0, 0, 0, 0),
    }),
    _ = function (e, t) {
        if ((void 0 === t && (t = !1), l.has(e) && !t)) return l.get(e);
        if ((0, u.dK)(e)) return (l.set(e, m), m);
        var n = getComputedStyle(e),
            r = (0, u.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            s = d.test(n.writingMode || ""),
            _ = !r && c.test(n.overflowY || ""),
            g = !r && c.test(n.overflowX || ""),
            v = r ? 0 : h(n.paddingTop),
            y = r ? 0 : h(n.paddingRight),
            b = r ? 0 : h(n.paddingBottom),
            D = r ? 0 : h(n.paddingLeft),
            w = r ? 0 : h(n.borderTopWidth),
            C = r ? 0 : h(n.borderRightWidth),
            E = r ? 0 : h(n.borderBottomWidth),
            A = r ? 0 : h(n.borderLeftWidth),
            k = D + y,
            B = v + b,
            F = A + C,
            x = w + E,
            T = g ? e.offsetHeight - x - e.clientHeight : 0,
            R = _ ? e.offsetWidth - F - e.clientWidth : 0,
            V = r ? r.width : h(n.width) - (i ? k + F : 0) - R,
            S = r ? r.height : h(n.height) - (i ? B + x : 0) - T,
            P = V + k + R + F,
            O = S + B + T + x,
            z = (0, a.C)({
                devicePixelContentBoxSize: p(Math.round(V * devicePixelRatio), Math.round(S * devicePixelRatio), s),
                borderBoxSize: p(P, O, s),
                contentBoxSize: p(V, S, s),
                contentRect: new o(D, v, V, S),
            });
        return (l.set(e, z), z);
    },
    g = function (e, t, n) {
        var i = _(e, n),
            a = i.borderBoxSize,
            o = i.contentBoxSize,
            u = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return u;
            case r.U.BORDER_BOX:
                return a;
            default:
                return o;
        }
    };
