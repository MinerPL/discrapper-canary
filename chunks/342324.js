let r;
n.d(t, { A: () => tk });
var i,
    a,
    o,
    u,
    s,
    l,
    c,
    d,
    f = {};
(n.r(f), n.d(f, { decode: () => _, encode: () => y, format: () => b, parse: () => R }));
var h = {};
(n.r(h), n.d(h, { Any: () => V, Cc: () => S, Cf: () => P, P: () => O, S: () => z, Z: () => M }));
let p = {};
function m(e, t) {
    "string" != typeof t && (t = m.defaultChars);
    let n = (function (e) {
        let t = p[e];
        if (t) return t;
        t = p[e] = [];
        for (let e = 0; e < 128; e++) {
            let n = String.fromCharCode(e);
            t.push(n);
        }
        for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            t[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
        }
        return t;
    })(t);
    return e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
        let t = "";
        for (let r = 0, i = e.length; r < i; r += 3) {
            let a = parseInt(e.slice(r + 1, r + 3), 16);
            if (a < 128) {
                t += n[a];
                continue;
            }
            if ((224 & a) == 192 && r + 3 < i) {
                let n = parseInt(e.slice(r + 4, r + 6), 16);
                if ((192 & n) == 128) {
                    let e = ((a << 6) & 1984) | (63 & n);
                    (e < 128 ? (t += "\uFFFD\uFFFD") : (t += String.fromCharCode(e)), (r += 3));
                    continue;
                }
            }
            if ((240 & a) == 224 && r + 6 < i) {
                let n = parseInt(e.slice(r + 4, r + 6), 16),
                    i = parseInt(e.slice(r + 7, r + 9), 16);
                if ((192 & n) == 128 && (192 & i) == 128) {
                    let e = ((a << 12) & 61440) | ((n << 6) & 4032) | (63 & i);
                    (e < 2048 || (e >= 55296 && e <= 57343)
                        ? (t += "\uFFFD\uFFFD\uFFFD")
                        : (t += String.fromCharCode(e)),
                        (r += 6));
                    continue;
                }
            }
            if ((248 & a) == 240 && r + 9 < i) {
                let n = parseInt(e.slice(r + 4, r + 6), 16),
                    i = parseInt(e.slice(r + 7, r + 9), 16),
                    o = parseInt(e.slice(r + 10, r + 12), 16);
                if ((192 & n) == 128 && (192 & i) == 128 && (192 & o) == 128) {
                    let e = ((a << 18) & 1835008) | ((n << 12) & 258048) | ((i << 6) & 4032) | (63 & o);
                    (e < 65536 || e > 1114111
                        ? (t += "\uFFFD\uFFFD\uFFFD\uFFFD")
                        : ((e -= 65536), (t += String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))),
                        (r += 9));
                    continue;
                }
            }
            t += "\uFFFD";
        }
        return t;
    });
}
((m.defaultChars = ";/?:@&=+$,#"), (m.componentChars = ""));
let _ = m,
    g = {};
function v(e, t, n) {
    ("string" != typeof t && ((n = t), (t = v.defaultChars)), void 0 === n && (n = !0));
    let r = (function (e) {
            let t = g[e];
            if (t) return t;
            t = g[e] = [];
            for (let e = 0; e < 128; e++) {
                let n = String.fromCharCode(e);
                /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
            }
            for (let n = 0; n < e.length; n++) t[e.charCodeAt(n)] = e[n];
            return t;
        })(t),
        i = "";
    for (let t = 0, a = e.length; t < a; t++) {
        let o = e.charCodeAt(t);
        if (n && 37 === o && t + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(t + 1, t + 3))) {
            ((i += e.slice(t, t + 3)), (t += 2));
            continue;
        }
        if (o < 128) {
            i += r[o];
            continue;
        }
        if (o >= 55296 && o <= 57343) {
            if (o >= 55296 && o <= 56319 && t + 1 < a) {
                let n = e.charCodeAt(t + 1);
                if (n >= 56320 && n <= 57343) {
                    ((i += encodeURIComponent(e[t] + e[t + 1])), t++);
                    continue;
                }
            }
            i += "%EF%BF%BD";
            continue;
        }
        i += encodeURIComponent(e[t]);
    }
    return i;
}
((v.defaultChars = ";/?:@&=+$,-_.!~*'()#"), (v.componentChars = "-_.!~*'()"));
let y = v;
function b(e) {
    let t = "";
    return (
        (t += e.protocol || ""),
        (t += e.slashes ? "//" : ""),
        (t += e.auth ? e.auth + "@" : ""),
        e.hostname && -1 !== e.hostname.indexOf(":") ? (t += "[" + e.hostname + "]") : (t += e.hostname || ""),
        (t += e.port ? ":" + e.port : ""),
        (t += e.pathname || ""),
        (t += e.search || ""),
        (t += e.hash || "")
    );
}
function D() {
    ((this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.pathname = null));
}
let w = /^([a-z0-9.+-]+:)/i,
    C = /:[0-9]*$/,
    E = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    A = ["%", "/", "?", ";", "#"].concat(
        ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
    ),
    k = ["/", "?", "#"],
    B = /^[+a-z0-9A-Z_-]{0,63}$/,
    F = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    x = { javascript: !0, "javascript:": !0 },
    T = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
    };
((D.prototype.parse = function (e, t) {
    let n,
        r,
        i,
        a = e;
    if (((a = a.trim()), !t && 1 === e.split("#").length)) {
        let e = E.exec(a);
        if (e) return ((this.pathname = e[1]), e[2] && (this.search = e[2]), this);
    }
    let o = w.exec(a);
    if (
        (o && ((n = (o = o[0]).toLowerCase()), (this.protocol = o), (a = a.substr(o.length))),
        (t || o || a.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
            (i = "//" === a.substr(0, 2)) &&
            !(o && x[o]) &&
            ((a = a.substr(2)), (this.slashes = !0)),
        !x[o] && (i || (o && !T[o])))
    ) {
        let e,
            t,
            n = -1;
        for (let e = 0; e < k.length; e++) -1 !== (r = a.indexOf(k[e])) && (-1 === n || r < n) && (n = r);
        (-1 !== (t = -1 === n ? a.lastIndexOf("@") : a.lastIndexOf("@", n)) &&
            ((e = a.slice(0, t)), (a = a.slice(t + 1)), (this.auth = e)),
            (n = -1));
        for (let e = 0; e < A.length; e++) -1 !== (r = a.indexOf(A[e])) && (-1 === n || r < n) && (n = r);
        (-1 === n && (n = a.length), ":" === a[n - 1] && n--);
        let i = a.slice(0, n);
        ((a = a.slice(n)), this.parseHost(i), (this.hostname = this.hostname || ""));
        let o = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!o) {
            let e = this.hostname.split(/\./);
            for (let t = 0, n = e.length; t < n; t++) {
                let n = e[t];
                if (n && !n.match(B)) {
                    let r = "";
                    for (let e = 0, t = n.length; e < t; e++) n.charCodeAt(e) > 127 ? (r += "x") : (r += n[e]);
                    if (!r.match(B)) {
                        let r = e.slice(0, t),
                            i = e.slice(t + 1),
                            o = n.match(F);
                        (o && (r.push(o[1]), i.unshift(o[2])),
                            i.length && (a = i.join(".") + a),
                            (this.hostname = r.join(".")));
                        break;
                    }
                }
            }
        }
        (this.hostname.length > 255 && (this.hostname = ""),
            o && (this.hostname = this.hostname.substr(1, this.hostname.length - 2)));
    }
    let u = a.indexOf("#");
    -1 !== u && ((this.hash = a.substr(u)), (a = a.slice(0, u)));
    let s = a.indexOf("?");
    return (
        -1 !== s && ((this.search = a.substr(s)), (a = a.slice(0, s))),
        a && (this.pathname = a),
        T[n] && this.hostname && !this.pathname && (this.pathname = ""),
        this
    );
}),
    (D.prototype.parseHost = function (e) {
        let t = C.exec(e);
        (t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e));
    }));
let R = function (e, t) {
        if (e && e instanceof D) return e;
        let n = new D();
        return (n.parse(e, t), n);
    },
    V =
        /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    S = /[\0-\x1F\x7F-\x9F]/,
    P =
        /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
    O =
        /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDED0\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]/,
    z =
        /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD803[\uDD8E\uDD8F\uDED1-\uDED8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA]/,
    M = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    N = [
        8364, 0, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 0, 381, 0, 0, 8216, 8217, 8220, 8221,
        8226, 8211, 8212, 732, 8482, 353, 8250, 339, 0, 382, 376,
    ],
    I = (() => {
        let e = new Uint8Array(127),
            t = 0;
        for (let n = 33; n <= 126; n++) 34 !== n && 36 !== n && 92 !== n && (e[n] = t++);
        return e;
    })(),
    j = (function (e) {
        let t = e.length,
            n = 0,
            r = () => {
                let t = I[e.charCodeAt(n++)];
                return t < 61 ? t : 91 * t - 5490 + I[e.charCodeAt(n++)];
            },
            i = new Int32Array(2738);
        (i.fill(-1, 49, 61), i.fill(-1, 2725, 2738));
        let a = new Int32Array(2738),
            o = new Int32Array(2738);
        function u(t, r) {
            let a = 0,
                o = r,
                u = r + t;
            for (; o < u;) {
                let t = I[e.charCodeAt(n++)];
                if (t < 89) ((a += t), (i[o++] = a));
                else if (89 === t) {
                    let t = I[e.charCodeAt(n++)] + 2;
                    for (; t--;) i[o++] = ++a;
                } else {
                    let t = I[e.charCodeAt(n++)];
                    ((a +=
                        89 +
                        (t < 90
                            ? 91 * t + I[e.charCodeAt(n++)]
                            : 8281 * I[e.charCodeAt(n++)] + 91 * I[e.charCodeAt(n++)] + I[e.charCodeAt(n++)])),
                        (i[o++] = a));
                }
            }
        }
        (u(49, 0), u(2664, 61));
        let s = new Int32Array(50),
            l = 0,
            c = 0;
        function d(e, t) {
            for (let n = 0; n < e; n++) {
                let e = t + n,
                    u = r(),
                    d = r();
                ((s[2 * c] = u), (s[2 * c + 1] = d), (c += 1), (a[e] = l));
                let f = (i[u] < 0 ? o[u] : 1) + (i[d] < 0 ? o[d] : 1);
                ((o[e] = f), (l += f));
            }
        }
        (d(13, 2725), d(12, 49));
        let f = new Uint16Array(l),
            h = 0;
        for (let e = 0; e < c; e++)
            for (let t = 0; t < 2; t++) {
                let n = s[2 * e + t],
                    r = i[n];
                if (r < 0) {
                    let e = a[n],
                        t = e + o[n];
                    for (; e < t;) f[h++] = f[e++];
                } else f[h++] = r;
            }
        let p = new Uint16Array(13494),
            m = 0;
        for (; n < t;) {
            let t = I[e.charCodeAt(n++)];
            t >= 61 && (t = 91 * t - 5490 + I[e.charCodeAt(n++)]);
            let r = i[t];
            if (r < 0) {
                let e = a[t],
                    n = e + o[t];
                for (; e < n;) p[m++] = f[e++];
            } else p[m++] = r;
        }
        return p;
    })(
        "!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P",
    );
(((i = s || (s = {}))[(i.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
    (i[(i.FLAG13 = 8192)] = "FLAG13"),
    (i[(i.BRANCH_LENGTH = 8064)] = "BRANCH_LENGTH"),
    (i[(i.JUMP_TABLE = 127)] = "JUMP_TABLE"),
    (i[(i.VALUE_MASK = 8191)] = "VALUE_MASK"),
    ((a = l || (l = {}))[(a.AMP = 38)] = "AMP"),
    (a[(a.NUM = 35)] = "NUM"),
    (a[(a.SEMI = 59)] = "SEMI"),
    (a[(a.EQUALS = 61)] = "EQUALS"),
    (a[(a.ZERO = 48)] = "ZERO"),
    (a[(a.NINE = 57)] = "NINE"),
    (a[(a.LOWER_A = 97)] = "LOWER_A"),
    (a[(a.LOWER_X = 120)] = "LOWER_X"));
let L = 0;
function Z(e) {
    return (e - l.ZERO) >>> 0 <= 9;
}
function $(e) {
    return ((32 | e) - l.LOWER_A) >>> 0 <= 25;
}
(((o = c || (c = {}))[(o.EntityStart = 0)] = "EntityStart"),
    (o[(o.NumericStart = 1)] = "NumericStart"),
    (o[(o.NumericDecimal = 2)] = "NumericDecimal"),
    (o[(o.NumericHex = 3)] = "NumericHex"),
    (o[(o.NamedEntity = 4)] = "NamedEntity"),
    ((u = d || (d = {}))[(u.Legacy = 0)] = "Legacy"),
    (u[(u.Strict = 1)] = "Strict"),
    (u[(u.Attribute = 2)] = "Attribute"));
function U(e, t, n) {
    return 1 === n
        ? String.fromCharCode(e[t] & s.VALUE_MASK)
        : 2 === n
          ? String.fromCharCode(e[t + 1])
          : String.fromCharCode(e[t + 1], e[t + 2]);
}
function W(e) {
    return (function (e, t, n) {
        let r = e.indexOf("&");
        if (r < 0) return e;
        let i = e.length,
            a = 0,
            o = "",
            u = j[0],
            c = u & s.JUMP_TABLE,
            d = (u & s.BRANCH_LENGTH) >> 7;
        do {
            var f;
            let u,
                h,
                p = r + 1,
                m = e.charCodeAt(p);
            if (m === l.NUM) {
                let n = (function (e, t, n) {
                    let r = t + 1,
                        i = 0,
                        a = r;
                    if (r < n && (32 | e.charCodeAt(r)) === l.LOWER_X)
                        for (r += 1, a = r; r < n;) {
                            let t = e.charCodeAt(r);
                            if (Z(t)) i = 16 * i + (t - l.ZERO);
                            else if (((32 | t) - l.LOWER_A) >>> 0 <= 5) i = 16 * i + ((32 | t) - l.LOWER_A + 10);
                            else break;
                            r += 1;
                        }
                    else
                        for (; r < n;) {
                            let t = e.charCodeAt(r) - l.ZERO;
                            if (t >>> 0 > 9) break;
                            ((i = 10 * i + t), (r += 1));
                        }
                    if (r === a) return 0;
                    (r < n && e.charCodeAt(r) === l.SEMI && (r += 1), i > 1114111 && (i = 1114112));
                    let o = r - t;
                    return (o >= 2047 && ((L = o), (o = 2047)), (o << 21) | i);
                })(e, p, i);
                ((u = (function (e) {
                    let t = e >>> 21;
                    return 2047 === t ? L : t;
                })(n)),
                    t && u > 0 && e.charCodeAt(p + u - 1) !== l.SEMI && (u = 0),
                    (h =
                        0 === u
                            ? ""
                            : (function (e) {
                                  return (e - 1) >>> 0 < 127 || (e - 160) >>> 0 < 55136
                                      ? String.fromCharCode(e)
                                      : String.fromCodePoint(
                                            0 === e || (e >= 55296 && e <= 57343) || e > 1114111
                                                ? 65533
                                                : (e >= 128 && e <= 159 && N[e - 128]) || e,
                                        );
                              })(2097151 & n)));
            } else if ($(m)) {
                let n;
                ((u = 0), (h = ""));
                let r = m - c;
                if (r >>> 0 < d) {
                    let e = j[1 + r];
                    n = 0 === e ? -1 : (d + e) & 65535;
                } else n = -1;
                let a = 0,
                    o = 0,
                    f = n < 0 ? 0 : j[n],
                    _ = p + 1;
                t: for (; _ < i;) {
                    for (; (f & (s.VALUE_LENGTH | s.FLAG13)) == 0 && (f & s.JUMP_TABLE) != 0;) {
                        let t = f & s.JUMP_TABLE,
                            r = (f & s.BRANCH_LENGTH) >> 7;
                        if (0 === r) {
                            if (e.charCodeAt(_) !== t) break t;
                            n += 1;
                        } else {
                            let i = e.charCodeAt(_) - t;
                            if (i >>> 0 >= r) break t;
                            let a = j[n + 1 + i];
                            if (0 === a) break t;
                            n = (n + r + a) & 65535;
                        }
                        if (((f = j[n]), (_ += 1) >= i)) break t;
                    }
                    if ((f & (s.VALUE_LENGTH | s.FLAG13)) === s.FLAG13) {
                        let t = (f & s.BRANCH_LENGTH) >> 7;
                        if (e.charCodeAt(_) !== (f & s.JUMP_TABLE)) break;
                        _ += 1;
                        let r = t - 1,
                            i = n + 1,
                            a = 0;
                        for (; a + 1 < r; a += 2) {
                            let t = j[i];
                            if (e.charCodeAt(_) !== (255 & t) || ((_ += 1), e.charCodeAt(_) !== ((t >> 8) & 255)))
                                break t;
                            ((_ += 1), (i += 1));
                        }
                        if (a < r) {
                            if (e.charCodeAt(_) !== (255 & j[i])) break;
                            _ += 1;
                        }
                        ((n += 1 + (t >> 1)), (f = j[n]));
                        continue;
                    }
                    let r = f >>> 14,
                        c = e.charCodeAt(_);
                    if (0 !== r) {
                        if (c === l.SEMI) {
                            ((u = _ - p + 1), (h = 1 === r ? String.fromCharCode(f & s.VALUE_MASK) : U(j, n, r)));
                            break;
                        }
                        if ((t || (f & s.FLAG13) != 0 || ((u = _ - p), (a = n), (o = r)), 1 === r)) break;
                    }
                    let d = (function (e, t, n, r) {
                        let i = (t & s.BRANCH_LENGTH) >> 7,
                            a = t & s.JUMP_TABLE;
                        if (a) {
                            if (0 === i) return r === a ? n : -1;
                            let t = r - a;
                            if (t >>> 0 >= i) return -1;
                            let o = e[n + t];
                            return 0 === o ? -1 : (n + i + o - 1) & 65535;
                        }
                        if (0 === i) return -1;
                        let o = (i + 1) >> 1,
                            u = n + o + i;
                        for (let t = 0; t < i; t++) {
                            let i = (e[n + (t >> 1)] >> ((1 & t) << 3)) & 255;
                            if (i === r) return (u + e[n + o + t]) & 65535;
                            if (i > r) break;
                        }
                        return -1;
                    })(j, f, n + (r || 1), c);
                    if (d < 0) break;
                    ((f = j[(n = d)]), (_ += 1));
                }
                if ("" === h) {
                    let e = f >>> 14;
                    (0 === e || t || (f & s.FLAG13) != 0 || ((u = _ - p), (a = n), (o = e)), u > 0 && (h = U(j, a, o)));
                }
            } else ((u = 0), (h = ""));
            (0 === u ||
            (n &&
                m !== l.NUM &&
                e.charCodeAt(p + u - 1) !== l.SEMI &&
                p + u < i &&
                ((f = e.charCodeAt(p + u)) === l.EQUALS || $(f) || Z(f)))
                ? (r = p)
                : (a < r && (o += e.slice(a, r)), (o += h), (r = a = p + u)),
                e.charCodeAt(r) !== l.AMP && (r = e.indexOf("&", r)));
        } while (r >= 0);
        return o + e.slice(a);
    })(e, !0, !1);
}
var G = class {
        src_Any = V.source;
        src_Cc = S.source;
        src_Z = M.source;
        src_P = O.source;
        src_ZPCc = [this.src_Z, this.src_P, this.src_Cc].join("|");
        src_ZCc = [this.src_Z, this.src_Cc].join("|");
        cache = {};
        opts = { maxLength: 1e4, urlAuth: !1, schema_names: [] };
        constructor(e = {}) {
            this.opts = { ...this.opts, ...e };
        }
        set(e = {}) {
            return ((this.opts = { ...this.opts, ...e }), (this.cache = {}), this);
        }
        escapeRE(e) {
            return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        nestedPairRE(e, t, n = 4) {
            let r = this.escapeRE(e),
                i = this.escapeRE(t),
                a = `(?:(?!${this.src_ZCc}|${r}|${i}).)`,
                o = `${r}${a}{0,1000}${i}`;
            for (let e = 2; e <= n; e++) o = `${r}(?:${a}|${o}){0,1000}${i}`;
            return o;
        }
        get_text_separators() {
            return (this.cache.text_separators ??= /[><\uff5c]/);
        }
        get_pseudo_letter() {
            return (this.cache.src_pseudo_letter ??= RegExp(
                `(?:(?!${this.get_text_separators().source}|${this.src_ZPCc})${this.src_Any})`,
            ));
        }
        get_ipv4_addr() {
            return (this.cache.src_ip4 ??= RegExp(
                "(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])[.]){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])",
            ));
        }
        get_ipv6_addr() {
            let e = "[0-9A-Fa-f]{1,4}",
                t = `(?:(?:${e}:${e})|${this.get_ipv4_addr().source})`;
            return (this.cache.src_ip6_addr ??= RegExp(
                `(?:(?:${e}:){6}${t}|::(?:${e}:){5}${t}|(?:${e})?::(?:${e}:){4}${t}|(?:(?:${e}:){0,1}${e})?::(?:${e}:){3}${t}|(?:(?:${e}:){0,2}${e})?::(?:${e}:){2}${t}|(?:(?:${e}:){0,3}${e})?::${e}:${t}|(?:(?:${e}:){0,4}${e})?::${t}|(?:(?:${e}:){0,5}${e})?::${e}|(?:(?:${e}:){0,6}${e})?::)`,
            ));
        }
        get_ipv6_url_host() {
            return (this.cache.src_ip6_host ??= RegExp(`\\[${this.get_ipv6_addr().source}\\]`));
        }
        get_ipv6_mail_host() {
            return (this.cache.src_ipv6_mail_host ??= RegExp(`\\[IPv6:${this.get_ipv6_addr().source}\\]`));
        }
        get_auth() {
            return (this.cache.src_auth ??= RegExp(`(?:(?:(?!${this.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`));
        }
        get_port() {
            return (this.cache.src_port ??= RegExp(
                "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
            ));
        }
        get_host_terminator() {
            return (this.cache.src_host_terminator ??= RegExp(
                `(?=$|${this.get_text_separators().source}|${this.src_ZPCc})(?!${this.opts["---"] ? "-(?!--)|" : "-|"}_|:\\d|\\.-|\\.(?!$|${this.src_ZPCc}))`,
            ));
        }
        get_path_terminator() {
            return (this.cache.src_path_terminator ??= RegExp(`${this.src_ZPCc}|${this.get_text_separators().source}`));
        }
        get_path() {
            return (this.cache.src_path ??= RegExp(
                `(?:[/?#](?:${this.nestedPairRE("[", "]")}|${this.nestedPairRE("(", ")")}|${this.nestedPairRE("{", "}")}|\\"(?:(?!${this.src_ZCc}|["]).){1,100}\\"|\\'(?:(?!${this.src_ZCc}|[']).){1,100}\\'|\\'(?=${this.get_pseudo_letter().source}|[-])|\\.{2,20}[:]?[a-zA-Z0-9%/&]|\\.(?!${this.src_ZCc}|[.]|$)|` +
                    (this.opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-{0,19})|" : "\\-{1,20}|") +
                    `,(?!${this.src_ZCc}|$)|;(?!${this.src_ZCc}|$)|\\!{1,20}(?!${this.src_ZCc}|[!]|$)|\\?(?!${this.src_ZCc}|[?]|$)|` +
                    this.get_path_extra().source +
                    `[\\\\/:%@#&=_~*]|(?!${this.get_path_terminator().source}).){1,${this.opts.maxLength}}|\\/)?`,
            ));
        }
        get_mail_name() {
            return (this.cache.src_mail_name ??= RegExp(
                "[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9](?:[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9]|[.](?=[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9])){0,63}",
            ));
        }
        get_xn() {
            return (this.cache.src_xn ??= RegExp("xn--[a-z0-9\\-]{1,59}"));
        }
        get_tld() {
            if (this.cache.tld) return this.cache.tld;
            let e = [...new Set(this.opts.tlds || [])].sort().reverse().join("|");
            return ((this.cache.tld = RegExp(`${e || "$#none#$"}|${this.get_xn().source}`)), this.cache.tld);
        }
        get_domain_root() {
            return (this.cache.src_domain_root ??= RegExp(
                "(?:" + this.get_xn().source + `|${this.get_pseudo_letter().source}{1,63})`,
            ));
        }
        get_domain() {
            return (this.cache.src_domain ??= RegExp(
                "(?:" +
                    this.get_xn().source +
                    `|(?:${this.get_pseudo_letter().source})|(?:${this.get_pseudo_letter().source}(?:-|${this.get_pseudo_letter().source}){0,61}${this.get_pseudo_letter().source}))`,
            ));
        }
        get_url_host_port() {
            return (this.cache.url_host_port ??= RegExp(
                "(?:" +
                    this.get_ipv6_url_host().source +
                    `|(?:(?:(?:${this.get_domain().source})\\.){0,10}${this.get_domain().source}))` +
                    this.get_port().source +
                    this.get_host_terminator().source,
            ));
        }
        get_fuzzy_url_host_port() {
            return (this.cache.fuzzy_url_host_port ??= RegExp(
                "(?:" +
                    (this.opts.fuzzyIP ? this.get_ipv4_addr().source + "|" : "") +
                    `(?:(?:(?:${this.get_domain().source})\\.){1,10}(?:${this.get_tld().source})))` +
                    this.get_host_terminator().source,
            ));
        }
        get_mail_host() {
            return (this.cache.src_mail_host ??= RegExp(
                "(?:" +
                    this.get_ipv6_mail_host().source +
                    `|(?:(?:(?:${this.get_domain().source})\\.){0,4}${this.get_domain().source}))` +
                    this.get_host_terminator().source,
            ));
        }
        get_fuzzy_mail_host() {
            return (this.cache.src_fuzzy_mail_host ??= RegExp(
                "(?:" +
                    this.get_ipv6_mail_host().source +
                    `|(?:(?:(?:${this.get_domain().source})[.]){1,4}${this.get_domain_root().source}))` +
                    this.get_host_terminator().source,
            ));
        }
        get_path_extra() {
            return (this.cache.src_path_extra ??= RegExp(""));
        }
        get_fuzzy_mail_host_search() {
            return (this.cache.mail_fuzzy_host_search ??= RegExp(`@${this.get_fuzzy_mail_host().source}`, "ig"));
        }
        get_fuzzy_link_search() {
            return (this.cache.link_fuzzy_search ??= RegExp(
                `(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${this.src_ZPCc}))(?:(?![$+<=>^\`|\uff5c])${this.get_fuzzy_url_host_port().source}${this.get_path().source})`,
                "ig",
            ));
        }
        get_http_validator() {
            return (this.cache.http_validator ??= RegExp(
                "\\/\\/" +
                    (this.opts.urlAuth ? this.get_auth().source : "") +
                    this.get_url_host_port().source +
                    this.get_path().source,
                "iy",
            ));
        }
        get_relative_proto_validator() {
            return (this.cache.relative_proto_validator ??= RegExp(
                (this.opts.urlAuth ? this.get_auth().source : "") +
                    `(?:localhost|${this.get_ipv6_url_host().source}|(?:(?:${this.get_domain().source})[.]){1,10}${this.get_domain_root().source})` +
                    this.get_port().source +
                    this.get_host_terminator().source +
                    this.get_path().source,
                "iy",
            ));
        }
        get_mail_name_validator() {
            return (this.cache.mail_name_validator ??= RegExp(
                `(?:^|${this.get_text_separators().source}|"|\\(|${this.src_ZCc})(${this.get_mail_name().source})$`,
            ));
        }
        get_mailto_validator() {
            return (this.cache.mailto_validator ??= RegExp(
                `${this.get_mail_name().source}@${this.get_mail_host().source}`,
                "iy",
            ));
        }
        get_schema_names() {
            return (this.cache.schema_names ??= new RegExp(
                (this.opts.schema_names || []).map((e) => this.escapeRE(e)).join("|"),
            ));
        }
        get_schema_search() {
            return (this.cache.schema_search ??= RegExp(
                `(^|(?!_)(?:[><\uff5c]|${this.src_ZPCc}))(${this.get_schema_names().source})`,
                "ig",
            ));
        }
        get_schema_at_start() {
            return (this.cache.schema_at_start ??= RegExp(`^${this.get_schema_search().source}`, "i"));
        }
    },
    q = {
        validate: (e, t, n) => {
            let r = n.re.get_http_validator();
            r.lastIndex = t;
            let i = r.exec(e);
            return i ? i[0].length : 0;
        },
        normalize: (e, t) => t.normalize(e),
    },
    K = {
        "http:": q,
        "https:": q,
        "ftp:": q,
        "//": {
            validate: function (e, t, n) {
                let r = n.re.get_relative_proto_validator();
                r.lastIndex = t;
                let i = r.exec(e);
                return i ? ((t >= 3 && ":" === e[t - 3]) || (t >= 3 && "/" === e[t - 3]) ? 0 : i[0].length) : 0;
            },
            normalize: (e, t) => t.normalize(e),
        },
        "mailto:": {
            validate: function (e, t, n) {
                let r = n.re.get_mailto_validator();
                r.lastIndex = t;
                let i = r.exec(e);
                return i ? i[0].length : 0;
            },
            normalize: (e, t) => t.normalize(e),
        },
    },
    J = {
        fuzzyLink: !1,
        fuzzyEmail: !0,
        fuzzyIP: !1,
        "---": !1,
        tlds:
            ((r = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|")),
            "a:cdefgilmnoqrstuwxz|b:abdefghijmnorstvwyz|c:acdfghiklmnoruvwxyz|d:ejkmoz|e:cegrstu|f:ijkmor|g:abdefghilmnpqrstuwy|h:kmnrtu|i:delmnoqrst|j:emop|k:eghimnprwyz|l:abcikrstuvy|m:acdeghklmnopqrstuvwxyz|n:acefgilopruz|o:m|p:aefghklmnrstwy|q:a|r:eosuw|s:abcdeghijklmnortuvxyz|t:cdfghjklmnortvwz|u:agksyz|v:aceginu|w:fs|y:et|z:amw"
                .split("|")
                .forEach((e) => {
                    let t = e.indexOf(":"),
                        n = e.slice(0, t);
                    for (let i of e.slice(t + 1)) r.push(n + i);
                }),
            r),
        urlAuth: !1,
        maxLength: 1e4,
    },
    H = class {
        schema;
        index;
        lastIndex;
        raw;
        text;
        url;
        constructor(e, t, n, r) {
            const i = e.slice(n, r);
            ((this.schema = t.toLowerCase()),
                (this.index = n),
                (this.lastIndex = r),
                (this.raw = i),
                (this.text = i),
                (this.url = i));
        }
    },
    X = class {
        __opts__;
        __schemas__;
        re;
        constructor(e = {}) {
            const { rebuilder: t, ...n } = e;
            ((this.__opts__ = { ...J, ...n }),
                (this.__schemas__ = { ...K }),
                (this.re = t || new G()),
                this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }));
        }
        add(e, t = null) {
            if (t) {
                let n = { normalize: (e, t) => t.normalize(e), ...t };
                this.__schemas__[e] = n;
            } else delete this.__schemas__[e];
            return (this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }), this);
        }
        set(e = {}) {
            return (
                (this.__opts__ = { ...this.__opts__, ...e }),
                this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }),
                this
            );
        }
        test(e) {
            let t, n;
            if (!e.length) return !1;
            for ((n = this.re.get_schema_search()).lastIndex = 0; null !== (t = n.exec(e));)
                if (this.testSchemaAt(e, t[2], n.lastIndex)) return !0;
            if (
                this.__opts__.fuzzyLink &&
                this.__schemas__["http:"] &&
                (((n = this.re.get_fuzzy_link_search()).lastIndex = 0), null !== n.exec(e))
            )
                return !0;
            if (this.__opts__.fuzzyEmail && this.__schemas__["mailto:"] && e.indexOf("@") >= 0) {
                let n = this.re.get_fuzzy_mail_host_search(),
                    r = this.re.get_mail_name_validator();
                for (n.lastIndex = 0; null !== (t = n.exec(e));) {
                    let n = e.slice(Math.max(0, t.index - 65), t.index);
                    if (r.test(n)) return !0;
                }
            }
            return !1;
        }
        testSchemaAt(e, t, n) {
            return this.__schemas__[t.toLowerCase()]
                ? this.__schemas__[t.toLowerCase()].validate(e.slice(0, n + this.__opts__.maxLength), n, this)
                : 0;
        }
        match(e) {
            let t,
                n,
                r,
                i,
                a,
                o,
                u = [],
                s = this.re.get_schema_search(),
                l = !1,
                c = !1,
                d = !1,
                f = 0;
            if (!e.length) return null;
            for (
                s.lastIndex = 0,
                    this.__opts__.fuzzyLink &&
                        this.__schemas__["http:"] &&
                        ((t = this.re.get_fuzzy_link_search()).lastIndex = 0),
                    this.__opts__.fuzzyEmail &&
                        this.__schemas__["mailto:"] &&
                        (((n = this.re.get_fuzzy_mail_host_search()).lastIndex = 0),
                        (r = this.re.get_mail_name_validator()));
                ;
            ) {
                let h,
                    p = Math.max(f - 1, 0);
                if (n && r && !d && (!a || a.index < f))
                    for (n.lastIndex < p && (n.lastIndex = p); ;) {
                        let t = n.exec(e);
                        if (!t) {
                            ((d = !0), (a = void 0));
                            break;
                        }
                        let i = r.exec(e.slice(Math.max(0, t.index - 65), t.index));
                        if (i) {
                            if (
                                (a = {
                                    schema: "mailto:",
                                    index: t.index - i[1].length,
                                    lastIndex: t.index + t[0].length,
                                }).index >= f
                            )
                                break;
                            n.lastIndex < p && (n.lastIndex = p);
                        }
                    }
                if (t && !c && (!i || i.index < f))
                    for (t.lastIndex < p && (t.lastIndex = p); ;) {
                        let n = t.exec(e);
                        if (!n) {
                            ((c = !0), (i = void 0));
                            break;
                        }
                        if (
                            (i = { schema: "", index: n.index + n[1].length, lastIndex: n.index + n[0].length })
                                .index >= f
                        )
                            break;
                        t.lastIndex < p && (t.lastIndex = p);
                    }
                let m = a;
                if (
                    ((!m || (i && (i.index < m.index || (i.index === m.index && i.lastIndex > m.lastIndex)))) &&
                        (m = i),
                    !l)
                )
                    for (;;) {
                        if (!o) {
                            s.lastIndex < p && (s.lastIndex = p);
                            let t = s.exec(e);
                            if (!t) {
                                l = !0;
                                break;
                            }
                            o = { schema: t[2], index: t.index + t[1].length, lastIndex: t.index + t[0].length };
                        }
                        if (o.index < f) {
                            o = void 0;
                            continue;
                        }
                        if (m && o.index > m.index) break;
                        let t = o;
                        o = void 0;
                        let n = this.testSchemaAt(e, t.schema, t.lastIndex);
                        if (n) {
                            h = { schema: t.schema, index: t.index, lastIndex: t.lastIndex + n };
                            break;
                        }
                    }
                let _ = h;
                if (
                    ((!_ || (a && (a.index < _.index || (a.index === _.index && a.lastIndex > _.lastIndex)))) &&
                        (_ = a),
                    (!_ || (i && (i.index < _.index || (i.index === _.index && i.lastIndex > _.lastIndex)))) && (_ = i),
                    !_)
                )
                    break;
                _ === a ? (a = void 0) : _ === i && (i = void 0);
                let g = new H(e, _.schema, _.index, _.lastIndex);
                (g.schema ? this.__schemas__[g.schema].normalize(g, this) : this.normalize(g),
                    u.push(g),
                    (f = _.lastIndex));
            }
            return u.length ? u : null;
        }
        matchAtStart(e) {
            if (!e.length) return null;
            let t = this.re.get_schema_at_start().exec(e);
            if (!t) return null;
            let n = this.testSchemaAt(e, t[2], t[0].length);
            if (!n) return null;
            let r = new H(e, t[2], t.index + t[1].length, t.index + t[0].length + n);
            return (this.__schemas__[r.schema].normalize(r, this), r);
        }
        tlds(e, t = !1) {
            return (
                (e = Array.isArray(e) ? e : [e]),
                t ? (this.__opts__.tlds = this.__opts__.tlds.concat(e)) : (this.__opts__.tlds = e),
                this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }),
                this
            );
        }
        normalize(e) {
            (e.schema || (e.url = `http://${e.url}`),
                "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = `mailto:${e.url}`));
        }
    };
let Y = /^xn--/,
    Q = /[^\0-\x7F]/,
    ee = /[\x2E\u3002\uFF0E\uFF61]/g,
    et = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    en = Math.floor,
    er = String.fromCharCode;
function ei(e) {
    throw RangeError(et[e]);
}
function ea(e, t) {
    let n = e.split("@"),
        r = "";
    return (
        n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
        r +
            (function (e, t) {
                let n = [],
                    r = e.length;
                for (; r--;) n[r] = t(e[r]);
                return n;
            })((e = e.replace(ee, ".")).split("."), t).join(".")
    );
}
let eo = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    eu = function (e, t, n) {
        let r = 0;
        for (e = n ? en(e / 700) : e >> 1, e += en(e / t); e > 455; r += 36) e = en(e / 35);
        return en(r + (36 * e) / (e + 38));
    },
    es = function (e) {
        let t = [],
            n = e.length,
            r = 0,
            i = 128,
            a = 72,
            o = e.lastIndexOf("-");
        o < 0 && (o = 0);
        for (let n = 0; n < o; ++n) (e.charCodeAt(n) >= 128 && ei("not-basic"), t.push(e.charCodeAt(n)));
        for (let s = o > 0 ? o + 1 : 0; s < n;) {
            let o = r;
            for (let t = 1, i = 36; ; i += 36) {
                var u;
                s >= n && ei("invalid-input");
                let o =
                    (u = e.charCodeAt(s++)) >= 48 && u < 58
                        ? 26 + (u - 48)
                        : u >= 65 && u < 91
                          ? u - 65
                          : u >= 97 && u < 123
                            ? u - 97
                            : 36;
                (o >= 36 && ei("invalid-input"), o > en((0x7fffffff - r) / t) && ei("overflow"), (r += o * t));
                let l = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
                if (o < l) break;
                let c = 36 - l;
                (t > en(0x7fffffff / c) && ei("overflow"), (t *= c));
            }
            let l = t.length + 1;
            ((a = eu(r - o, l, 0 == o)),
                en(r / l) > 0x7fffffff - i && ei("overflow"),
                (i += en(r / l)),
                (r %= l),
                t.splice(r++, 0, i));
        }
        return String.fromCodePoint(...t);
    },
    el = function (e) {
        let t = [],
            n = (e = (function (e) {
                let t = [],
                    n = 0,
                    r = e.length;
                for (; n < r;) {
                    let i = e.charCodeAt(n++);
                    if (i >= 55296 && i <= 56319 && n < r) {
                        let r = e.charCodeAt(n++);
                        (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), n--);
                    } else t.push(i);
                }
                return t;
            })(e)).length,
            r = 128,
            i = 0,
            a = 72;
        for (let n of e) n < 128 && t.push(er(n));
        let o = t.length,
            u = o;
        for (o && t.push("-"); u < n;) {
            let n = 0x7fffffff;
            for (let t of e) t >= r && t < n && (n = t);
            let s = u + 1;
            for (let l of (n - r > en((0x7fffffff - i) / s) && ei("overflow"), (i += (n - r) * s), (r = n), e))
                if ((l < r && ++i > 0x7fffffff && ei("overflow"), l === r)) {
                    let e = i;
                    for (let n = 36; ; n += 36) {
                        let r = n <= a ? 1 : n >= a + 26 ? 26 : n - a;
                        if (e < r) break;
                        let i = e - r,
                            o = 36 - r;
                        (t.push(er(eo(r + (i % o), 0))), (e = en(i / o)));
                    }
                    (t.push(er(eo(e, 0))), (a = eu(i, s, u === o)), (i = 0), ++u);
                }
            (++i, ++r);
        }
        return t.join("");
    };
var ec = Object.defineProperty,
    ed = (e, t) => {
        let n = {};
        for (var r in e) ec(n, r, { get: e[r], enumerable: !0 });
        return (t || ec(n, Symbol.toStringTag, { value: "Module" }), n);
    },
    ef = ed({
        arrayReplaceAt: () => ep,
        asciiTrim: () => ez,
        callable: () => eh,
        escapeHtml: () => ek,
        escapeRE: () => eF,
        fromCodePoint: () => e_,
        isMdAsciiPunct: () => eS,
        isPunctChar: () => eR,
        isPunctCharCode: () => eV,
        isSpace: () => ex,
        isValidEntityCode: () => em,
        isWhiteSpace: () => eT,
        lib: () => eM,
        normalizeReference: () => eP,
        unescapeAll: () => eD,
        unescapeMd: () => eb,
    });
function eh(e) {
    let t = function (...n) {
        return Reflect.construct(e, n, new.target && new.target !== t ? new.target : e);
    };
    return (
        Object.defineProperty(t, "name", { value: e.name }), Object.setPrototypeOf(t, e), (t.prototype = e.prototype), t
    );
}
function ep(e, t, n) {
    return [].concat(e.slice(0, t), n, e.slice(t + 1));
}
function em(e) {
    return (
        (!(e >= 55296) || !(e <= 57343)) &&
        (!(e >= 64976) || !(e <= 65007)) &&
        (65535 & e) != 65535 &&
        (65535 & e) != 65534 &&
        (!(e >= 0) || !(e <= 8)) &&
        11 !== e &&
        (!(e >= 14) || !(e <= 31)) &&
        (!(e >= 127) || !(e <= 159)) &&
        !(e > 1114111) &&
        !0
    );
}
function e_(e) {
    return e > 65535 ? String.fromCharCode(55296 + ((e -= 65536) >> 10), 56320 + (1023 & e)) : String.fromCharCode(e);
}
var eg = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
    ev = RegExp(`${eg.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`, "gi"),
    ey = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function eb(e) {
    return 0 > e.indexOf("\\") ? e : e.replace(eg, "$1");
}
function eD(e) {
    return 0 > e.indexOf("\\") && 0 > e.indexOf("&")
        ? e
        : e.replace(ev, function (e, t, n) {
              if (t) return t;
              if (35 === n.charCodeAt(0) && ey.test(n)) {
                  let t = "x" === n[1].toLowerCase() ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
                  return em(t) ? e_(t) : e;
              }
              let r = W(e);
              return r !== e ? r : e;
          });
}
var ew = /[&<>"]/,
    eC = /[&<>"]/g,
    eE = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
function eA(e) {
    return eE[e];
}
function ek(e) {
    return ew.test(e) ? e.replace(eC, eA) : e;
}
var eB = /[.?*+^$[\]\\(){}|-]/g;
function eF(e) {
    return e.replace(eB, "\\$&");
}
function ex(e) {
    switch (e) {
        case 9:
        case 32:
            return !0;
    }
    return !1;
}
function eT(e) {
    if (e >= 8192 && e <= 8202) return !0;
    switch (e) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
            return !0;
    }
    return !1;
}
function eR(e) {
    return O.test(e) || z.test(e);
}
function eV(e) {
    return eR(e_(e));
}
function eS(e) {
    switch (e) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
            return !0;
        default:
            return !1;
    }
}
function eP(e) {
    return (e = e.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
}
function eO(e) {
    return 32 === e || 9 === e || 10 === e || 13 === e;
}
function ez(e) {
    let t = 0;
    for (; t < e.length && eO(e.charCodeAt(t)); t++);
    let n = e.length - 1;
    for (; n >= t && eO(e.charCodeAt(n)); n--);
    return e.slice(t, n + 1);
}
var eM = { mdurl: f, ucmicro: h };
function eN(e, t, n) {
    let r,
        i,
        a,
        o,
        u = e.posMax,
        s = e.pos;
    for (e.pos = t + 1, r = 1; e.pos < u;) {
        if (93 === (a = e.src.charCodeAt(e.pos)) && 0 == --r) {
            i = !0;
            break;
        }
        if (((o = e.pos), e.md.inline.skipToken(e), 91 === a)) {
            if (o === e.pos - 1) r++;
            else if (n) return ((e.pos = s), -1);
        }
    }
    let l = -1;
    return (i && (l = e.pos), (e.pos = s), l);
}
function eI(e, t, n) {
    let r,
        i = t,
        a = { ok: !1, pos: 0, str: "" };
    if (60 === e.charCodeAt(i)) {
        for (i++; i < n && 10 !== (r = e.charCodeAt(i)) && 60 !== r;) {
            if (62 === r) {
                ((a.pos = i + 1), (a.str = eD(e.slice(t + 1, i))), (a.ok = !0));
                break;
            }
            if (92 === r && i + 1 < n) {
                i += 2;
                continue;
            }
            i++;
        }
        return a;
    }
    let o = 0;
    for (; i < n && 32 !== (r = e.charCodeAt(i)) && !(r < 32) && 127 !== r;) {
        if (92 === r && i + 1 < n) {
            if (32 === e.charCodeAt(i + 1)) {
                i++;
                continue;
            }
            i += 2;
            continue;
        }
        if (40 === r && ++o > 32) return a;
        if (41 === r) {
            if (0 === o) break;
            o--;
        }
        i++;
    }
    return (t === i || 0 !== o || ((a.str = eD(e.slice(t, i))), (a.pos = i), (a.ok = !0)), a);
}
function ej(e, t, n, r) {
    let i,
        a = t,
        o = { ok: !1, can_continue: !1, pos: 0, str: "", marker: 0 };
    if (r) ((o.str = r.str), (o.marker = r.marker));
    else {
        if (a >= n) return o;
        let r = e.charCodeAt(a);
        if (34 !== r && 39 !== r && 40 !== r) return o;
        (t++, a++, 40 === r && (r = 41), (o.marker = r));
    }
    for (; a < n;) {
        if ((i = e.charCodeAt(a)) === o.marker) return ((o.pos = a + 1), (o.str += eD(e.slice(t, a))), (o.ok = !0), o);
        if (40 === i && 41 === o.marker) return o;
        (92 === i && a + 1 < n && a++, a++);
    }
    return ((o.can_continue = !0), (o.str += eD(e.slice(t, a))), o);
}
var eL = ed({ parseLinkDestination: () => eI, parseLinkLabel: () => eN, parseLinkTitle: () => ej });
function eZ(e) {
    return (eZ =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function e$(e, t, n) {
    var r;
    return (
        ((r = (function (e, t) {
            if ("object" != eZ(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != eZ(r)) return r;
                throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        })(t, "string")),
        (t = "symbol" == eZ(r) ? r : r + "") in e)
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
        e
    );
}
var eU = class {
        constructor(e, t, n) {
            (e$(this, "map", null),
                e$(this, "level", 0),
                e$(this, "children", null),
                e$(this, "content", ""),
                e$(this, "markup", ""),
                e$(this, "info", ""),
                e$(this, "block", !1),
                e$(this, "hidden", !1),
                (this.type = e),
                (this.tag = t),
                (this.attrs = null),
                (this.nesting = n),
                (this.meta = null));
        }
        attrIndex(e) {
            if (!this.attrs) return -1;
            let t = this.attrs;
            for (let n = 0, r = t.length; n < r; n++) if (t[n][0] === e) return n;
            return -1;
        }
        attrPush(e) {
            this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
        }
        attrSet(e, t) {
            let n = this.attrIndex(e),
                r = [e, t];
            n < 0 ? this.attrPush(r) : (this.attrs[n] = r);
        }
        attrGet(e) {
            let t = this.attrIndex(e),
                n = null;
            return (t >= 0 && (n = this.attrs[t][1]), n);
        }
        attrJoin(e, t) {
            let n = this.attrIndex(e);
            n < 0 ? this.attrPush([e, t]) : (this.attrs[n][1] = `${this.attrs[n][1]} ${t}`);
        }
    },
    eW = class {
        constructor() {
            (e$(this, "__rules__", []), e$(this, "__cache__", null));
        }
        __find__(e) {
            for (let t = 0; t < this.__rules__.length; t++) if (this.__rules__[t].name === e) return t;
            return -1;
        }
        __compile__() {
            let e = new Set();
            (this.__rules__.forEach((t) => {
                t.enabled &&
                    t.alt.forEach((t) => {
                        t && e.add(t);
                    });
            }),
                (this.__cache__ = Object.create(null)),
                (this.__cache__[""] = []),
                this.__rules__.forEach((e) => {
                    e.enabled && this.__cache__[""].push(e.fn);
                }),
                e.forEach((e) => {
                    ((this.__cache__[e] = []),
                        this.__rules__.forEach((t) => {
                            t.enabled && t.alt.indexOf(e) >= 0 && this.__cache__[e].push(t.fn);
                        }));
                }));
        }
        at(e, t, n = {}) {
            let r = this.__find__(e);
            if (-1 === r) throw Error(`Parser rule not found: ${e}`);
            ((this.__rules__[r].fn = t), (this.__rules__[r].alt = n.alt || []), (this.__cache__ = null));
        }
        before(e, t, n, r = {}) {
            let i = this.__find__(e);
            if (-1 === i) throw Error(`Parser rule not found: ${e}`);
            (this.__rules__.splice(i, 0, { name: t, enabled: !0, fn: n, alt: r.alt || [] }), (this.__cache__ = null));
        }
        after(e, t, n, r = {}) {
            let i = this.__find__(e);
            if (-1 === i) throw Error(`Parser rule not found: ${e}`);
            (this.__rules__.splice(i + 1, 0, { name: t, enabled: !0, fn: n, alt: r.alt || [] }),
                (this.__cache__ = null));
        }
        push(e, t, n = {}) {
            (this.__rules__.push({ name: e, enabled: !0, fn: t, alt: n.alt || [] }), (this.__cache__ = null));
        }
        enable(e, t = !1) {
            Array.isArray(e) || (e = [e]);
            let n = [];
            return (
                e.forEach((e) => {
                    let r = this.__find__(e);
                    if (r < 0) {
                        if (t) return;
                        throw Error(`Rules manager: invalid rule name ${e}`);
                    }
                    ((this.__rules__[r].enabled = !0), n.push(e));
                }),
                (this.__cache__ = null),
                n
            );
        }
        enableOnly(e, t = !1) {
            (Array.isArray(e) || (e = [e]),
                this.__rules__.forEach((e) => {
                    e.enabled = !1;
                }),
                this.enable(e, t));
        }
        disable(e, t = !1) {
            Array.isArray(e) || (e = [e]);
            let n = [];
            return (
                e.forEach((e) => {
                    let r = this.__find__(e);
                    if (r < 0) {
                        if (t) return;
                        throw Error(`Rules manager: invalid rule name ${e}`);
                    }
                    ((this.__rules__[r].enabled = !1), n.push(e));
                }),
                (this.__cache__ = null),
                n
            );
        }
        getRules(e) {
            return (this.__cache__ || this.__compile__(), this.__cache__[e] || []);
        }
    },
    eG = {};
((eG.code_inline = function (e, t, n, r, i) {
    let a = e[t];
    return `<code${i.renderAttrs(a)}>${ek(a.content)}</code>`;
}),
    (eG.code_block = function (e, t, n, r, i) {
        let a = e[t];
        return `<pre${i.renderAttrs(a)}><code>${ek(e[t].content)}</code></pre>
`;
    }),
    (eG.fence = function (e, t, n, r, i) {
        let a,
            o = e[t],
            u = o.info ? eD(o.info).trim() : "",
            s = "",
            l = "";
        if (u) {
            let e = u.split(/(\s+)/g);
            ((s = e[0]), (l = e.slice(2).join("")));
        }
        if (0 === (a = (n.highlight && n.highlight(o.content, s, l)) || ek(o.content)).indexOf("<pre")) return a + "\n";
        if (u) {
            let e = o.attrIndex("class"),
                t = o.attrs ? o.attrs.slice() : [];
            return (
                e < 0
                    ? t.push(["class", `${n.langPrefix}${s}`])
                    : ((t[e] = [t[e][0], t[e][1]]), (t[e][1] += ` ${n.langPrefix}${s}`)),
                `<pre><code${i.renderAttrs({ attrs: t })}>${a}</code></pre>
`
            );
        }
        return `<pre><code${i.renderAttrs(o)}>${a}</code></pre>
`;
    }),
    (eG.image = function (e, t, n, r, i) {
        let a = e[t];
        return ((a.attrs[a.attrIndex("alt")][1] = i.renderInlineAsText(a.children, n, r)), i.renderToken(e, t, n));
    }),
    (eG.hardbreak = function (e, t, n) {
        return n.xhtmlOut ? "<br />\n" : "<br>\n";
    }),
    (eG.softbreak = function (e, t, n) {
        return n.breaks ? (n.xhtmlOut ? "<br />\n" : "<br>\n") : "\n";
    }),
    (eG.text = function (e, t) {
        return ek(e[t].content);
    }),
    (eG.html_block = function (e, t) {
        return e[t].content;
    }),
    (eG.html_inline = function (e, t) {
        return e[t].content;
    }));
var eq = class {
        constructor() {
            e$(this, "rules", Object.assign({}, eG));
        }
        renderAttrs(e) {
            let t, n, r;
            if (!e.attrs) return "";
            for (t = 0, r = "", n = e.attrs.length; t < n; t++)
                r += ` ${ek(e.attrs[t][0])}="${ek(String(e.attrs[t][1]))}"`;
            return r;
        }
        renderToken(e, t, n) {
            let r = e[t],
                i = "";
            if (r.hidden) return "";
            let a = t - 1;
            for (; a >= 0 && e[a].hidden && 0 === e[a].nesting;) a--;
            (r.block && -1 !== r.nesting && a >= 0 && e[a].hidden && -1 === e[a].nesting && (i += "\n"),
                (i += (-1 === r.nesting ? "</" : "<") + r.tag),
                (i += this.renderAttrs(r)),
                0 === r.nesting && n.xhtmlOut && (i += " /"));
            let o = !1;
            if (r.block && ((o = !0), 1 === r.nesting)) {
                let n = t + 1;
                for (; n < e.length && e[n].hidden && 0 === e[n].nesting;) n++;
                if (n < e.length) {
                    let t = e[n];
                    "inline" === t.type || t.hidden ? (o = !1) : -1 === t.nesting && t.tag === r.tag && (o = !1);
                }
            }
            return i + (o ? ">\n" : ">");
        }
        renderInline(e, t, n) {
            let r = "",
                i = this.rules;
            for (let a = 0, o = e.length; a < o; a++) {
                let o = e[a].type;
                void 0 !== i[o] ? (r += i[o](e, a, t, n, this)) : (r += this.renderToken(e, a, t));
            }
            return r;
        }
        renderInlineAsText(e, t, n) {
            let r = "";
            for (let i = 0, a = e.length; i < a; i++)
                switch (e[i].type) {
                    case "text":
                    case "code_inline":
                    case "html_inline":
                    case "html_block":
                        r += e[i].content;
                        break;
                    case "image":
                        r += this.renderInlineAsText(e[i].children, t, n);
                        break;
                    case "softbreak":
                    case "hardbreak":
                        r += "\n";
                }
            return r;
        }
        render(e, t, n) {
            let r = "",
                i = this.rules;
            for (let a = 0, o = e.length; a < o; a++) {
                let o = e[a].type;
                "inline" === o
                    ? (r += this.renderInline(e[a].children, t, n))
                    : void 0 !== i[o]
                      ? (r += i[o](e, a, t, n, this))
                      : (r += this.renderToken(e, a, t));
            }
            return r;
        }
    },
    eK = class {
        constructor(e, t, n) {
            (e$(this, "tokens", []),
                e$(this, "inlineMode", !1),
                e$(this, "Token", eU),
                (this.src = e),
                (this.env = n),
                (this.md = t));
        }
    },
    eJ = /\r\n?/g,
    eH = /\0/g,
    eX = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    eY = /\((c|tm|r)\)/i,
    eQ = /\((c|tm|r)\)/gi,
    e0 = { c: "\xa9", r: "\xae", tm: "\u2122" };
function e1(e, t) {
    return e0[t.toLowerCase()];
}
var e2 = /['"]/,
    e3 = /['"]/g;
function e5(e, t, n, r) {
    (e[t] || (e[t] = []), e[t].push({ pos: n, ch: r }));
}
var e4 = [
        [
            "normalize",
            function (e) {
                let t;
                ((t = (t = e.src.replace(eJ, "\n")).replace(eH, "\uFFFD")), (e.src = t));
            },
        ],
        [
            "block",
            function (e) {
                let t;
                e.inlineMode
                    ? (((t = new e.Token("inline", "", 0)).content = e.src),
                      (t.map = [0, 1]),
                      (t.children = []),
                      e.tokens.push(t))
                    : e.md.block.parse(e.src, e.md, e.env, e.tokens);
            },
        ],
        [
            "strip_references",
            function (e) {
                let t = e.tokens,
                    n = 0;
                for (let e = 0; e < t.length; e++)
                    "reference_definition" !== t[e].type && (e !== n && (t[n] = t[e]), n++);
                t.length !== n && (t.length = n);
            },
        ],
        [
            "inline",
            function (e) {
                let t = e.tokens;
                for (let n = 0, r = t.length; n < r; n++) {
                    let r = t[n];
                    "inline" === r.type && e.md.inline.parse(r.content, e.md, e.env, r.children);
                }
            },
        ],
        [
            "linkify",
            function (e) {
                let t = e.tokens;
                if (e.md.options.linkify)
                    for (let i = 0, a = t.length; i < a; i++) {
                        if ("inline" !== t[i].type || !e.md.linkify.test(t[i].content)) continue;
                        let a = t[i].children,
                            o = [],
                            u = 0;
                        for (let t = a.length - 1; t >= 0; t--) {
                            let i = a[t];
                            if ("link_close" === i.type) {
                                for (t--; a[t].level !== i.level && "link_open" !== a[t].type;) t--;
                                continue;
                            }
                            if ("html_inline" === i.type) {
                                var n, r;
                                ((n = i.content),
                                    /^<a[>\s]/i.test(n) && u > 0 && u--,
                                    (r = i.content),
                                    /^<\/a\s*>/i.test(r) && u++);
                            }
                            if (!(u > 0) && "text" === i.type && e.md.linkify.test(i.content)) {
                                let n = i.content,
                                    r = e.md.linkify.match(n),
                                    u = [],
                                    s = i.level,
                                    l = 0;
                                r.length > 0 &&
                                    0 === r[0].index &&
                                    t > 0 &&
                                    "text_special" === a[t - 1].type &&
                                    (r = r.slice(1));
                                for (let t = 0; t < r.length; t++) {
                                    let i = r[t].url,
                                        a = e.md.normalizeLink(i);
                                    if (!e.md.validateLink(a)) continue;
                                    let o = r[t].text;
                                    o = r[t].schema
                                        ? "mailto:" !== r[t].schema || /^mailto:/i.test(o)
                                            ? e.md.normalizeLinkText(o)
                                            : e.md.normalizeLinkText(`mailto:${o}`).replace(/^mailto:/, "")
                                        : e.md.normalizeLinkText(`http://${o}`).replace(/^http:\/\//, "");
                                    let c = r[t].index;
                                    if (c > l) {
                                        let t = new e.Token("text", "", 0);
                                        ((t.content = n.slice(l, c)), (t.level = s), u.push(t));
                                    }
                                    let d = new e.Token("link_open", "a", 1);
                                    ((d.attrs = [["href", a]]),
                                        (d.level = s++),
                                        (d.markup = "linkify"),
                                        (d.info = "auto"),
                                        u.push(d));
                                    let f = new e.Token("text", "", 0);
                                    ((f.content = o), (f.level = s), u.push(f));
                                    let h = new e.Token("link_close", "a", -1);
                                    ((h.level = --s),
                                        (h.markup = "linkify"),
                                        (h.info = "auto"),
                                        u.push(h),
                                        (l = r[t].lastIndex));
                                }
                                if (l < n.length) {
                                    let t = new e.Token("text", "", 0);
                                    ((t.content = n.slice(l)), (t.level = s), u.push(t));
                                }
                                o.push({ index: t, nodes: u });
                            }
                        }
                        if (o.length > 0) {
                            let e = a.length;
                            for (let t of o) e += t.nodes.length - 1;
                            let n = Array(e),
                                r = 0,
                                u = 0;
                            o.reverse();
                            for (let e = 0; e < a.length; e++) {
                                let t = o[r];
                                if ((null == t ? void 0 : t.index) === e) {
                                    for (let e of t.nodes) n[u++] = e;
                                    r++;
                                } else n[u++] = a[e];
                            }
                            t[i].children = n;
                        }
                    }
            },
        ],
        [
            "replacements",
            function (e) {
                let t;
                if (e.md.options.typographer)
                    for (t = e.tokens.length - 1; t >= 0; t--)
                        "inline" === e.tokens[t].type &&
                            (eY.test(e.tokens[t].content) &&
                                (function (e) {
                                    let t = 0;
                                    for (let n = e.length - 1; n >= 0; n--) {
                                        let r = e[n];
                                        ("text" !== r.type || t || (r.content = r.content.replace(eQ, e1)),
                                            "link_open" === r.type && "auto" === r.info && t--,
                                            "link_close" === r.type && "auto" === r.info && t++);
                                    }
                                })(e.tokens[t].children),
                            eX.test(e.tokens[t].content) &&
                                (function (e) {
                                    let t = 0;
                                    for (let n = e.length - 1; n >= 0; n--) {
                                        let r = e[n];
                                        ("text" === r.type &&
                                            !t &&
                                            eX.test(r.content) &&
                                            (r.content = r.content
                                                .replace(/\+-/g, "\xb1")
                                                .replace(/\.{2,}/g, "\u2026")
                                                .replace(/([?!])\u2026/g, "$1..")
                                                .replace(/([?!]){4,}/g, "$1$1$1")
                                                .replace(/,{2,}/g, ",")
                                                .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
                                                .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013")
                                                .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")),
                                            "link_open" === r.type && "auto" === r.info && t--,
                                            "link_close" === r.type && "auto" === r.info && t++);
                                    }
                                })(e.tokens[t].children));
            },
        ],
        [
            "smartquotes",
            function (e) {
                if (e.md.options.typographer)
                    for (let t = e.tokens.length - 1; t >= 0; t--)
                        "inline" === e.tokens[t].type &&
                            e2.test(e.tokens[t].content) &&
                            (function (e, t) {
                                let n,
                                    r = [],
                                    i = {};
                                for (let a = 0; a < e.length; a++) {
                                    let o = e[a],
                                        u = e[a].level;
                                    for (n = r.length - 1; n >= 0 && !(r[n].level <= u); n--);
                                    if (((r.length = n + 1), "text" !== o.type)) continue;
                                    let s = o.content,
                                        l = 0,
                                        c = s.length;
                                    n: for (; l < c;) {
                                        e3.lastIndex = l;
                                        let o = e3.exec(s);
                                        if (!o) break;
                                        let d = !0,
                                            f = !0;
                                        l = o.index + 1;
                                        let h = "'" === o[0],
                                            p = 32;
                                        if (o.index - 1 >= 0) p = s.charCodeAt(o.index - 1);
                                        else
                                            for (
                                                n = a - 1;
                                                n >= 0 && "softbreak" !== e[n].type && "hardbreak" !== e[n].type;
                                                n--
                                            )
                                                if (e[n].content) {
                                                    p = e[n].content.charCodeAt(e[n].content.length - 1);
                                                    break;
                                                }
                                        let m = 32;
                                        if (l < c) m = s.charCodeAt(l);
                                        else
                                            for (
                                                n = a + 1;
                                                n < e.length && "softbreak" !== e[n].type && "hardbreak" !== e[n].type;
                                                n++
                                            )
                                                if (e[n].content) {
                                                    m = e[n].content.charCodeAt(0);
                                                    break;
                                                }
                                        let _ = eS(p) || eV(p),
                                            g = eS(m) || eV(m),
                                            v = eT(p),
                                            y = eT(m);
                                        if (
                                            (y ? (d = !1) : g && !(v || _) && (d = !1),
                                            v ? (f = !1) : _ && !(y || g) && (f = !1),
                                            34 === m && '"' === o[0] && p >= 48 && p <= 57 && (f = d = !1),
                                            d && f && ((d = _), (f = g)),
                                            !d && !f)
                                        ) {
                                            h && e5(i, a, o.index, "\u2019");
                                            continue;
                                        }
                                        if (f)
                                            for (n = r.length - 1; n >= 0; n--) {
                                                let e = r[n];
                                                if (r[n].level < u) break;
                                                if (e.single === h && r[n].level === u) {
                                                    let u, s;
                                                    ((e = r[n]),
                                                        h
                                                            ? ((u = t.md.options.quotes[2]),
                                                              (s = t.md.options.quotes[3]))
                                                            : ((u = t.md.options.quotes[0]),
                                                              (s = t.md.options.quotes[1])),
                                                        e5(i, a, o.index, s),
                                                        e5(i, e.token, e.pos, u),
                                                        (r.length = n));
                                                    continue n;
                                                }
                                            }
                                        d
                                            ? r.push({ token: a, pos: o.index, single: h, level: u })
                                            : f && h && e5(i, a, o.index, "\u2019");
                                    }
                                }
                                Object.keys(i).forEach(function (t) {
                                    let n = Number(t);
                                    e[n].content = (function (e, t) {
                                        let n = "",
                                            r = 0;
                                        t.sort((e, t) => e.pos - t.pos);
                                        for (let i = 0; i < t.length; i++) {
                                            let a = t[i];
                                            ((n += e.slice(r, a.pos) + a.ch), (r = a.pos + 1));
                                        }
                                        return n + e.slice(r);
                                    })(e[n].content, i[t]);
                                });
                            })(e.tokens[t].children, e);
            },
        ],
        [
            "text_join",
            function (e) {
                let t,
                    n,
                    r = e.tokens,
                    i = r.length;
                for (let e = 0; e < i; e++) {
                    if ("inline" !== r[e].type) continue;
                    let i = r[e].children,
                        a = i.length;
                    for (t = 0; t < a; t++)
                        ("text_special" === i[t].type && (i[t].type = "text"),
                            i[t].children &&
                                (function (e) {
                                    let t,
                                        n,
                                        r = e.length;
                                    for (t = 0; t < r; t++) "text_special" === e[t].type && (e[t].type = "text");
                                    for (t = n = 0; t < r; t++)
                                        "text" === e[t].type && t + 1 < r && "text" === e[t + 1].type
                                            ? (e[t + 1].content = e[t].content + e[t + 1].content)
                                            : (t !== n && (e[n] = e[t]), n++);
                                    t !== n && (e.length = n);
                                })(i[t].children));
                    for (t = n = 0; t < a; t++)
                        "text" === i[t].type && t + 1 < a && "text" === i[t + 1].type
                            ? (i[t + 1].content = i[t].content + i[t + 1].content)
                            : (t !== n && (i[n] = i[t]), n++);
                    t !== n && (i.length = n);
                }
            },
        ],
    ],
    e9 = class {
        constructor() {
            (e$(this, "ruler", new eW()), e$(this, "State", eK));
            for (let e = 0; e < e4.length; e++) this.ruler.push(e4[e][0], e4[e][1]);
        }
        process(e) {
            let t = this.ruler.getRules("");
            for (let n = 0, r = t.length; n < r; n++) t[n](e);
        }
    },
    e6 = class {
        constructor(e, t, n, r) {
            (e$(this, "bMarks", []),
                e$(this, "eMarks", []),
                e$(this, "tShift", []),
                e$(this, "sCount", []),
                e$(this, "bsCount", []),
                e$(this, "blkIndent", 0),
                e$(this, "line", 0),
                e$(this, "lineMax", 0),
                e$(this, "tight", !1),
                e$(this, "listIndent", -1),
                e$(this, "parentType", "root"),
                e$(this, "level", 0),
                e$(this, "Token", eU),
                (this.src = e),
                (this.md = t),
                (this.env = n),
                (this.tokens = r));
            const i = this.src;
            for (let e = 0, t = 0, n = 0, r = 0, a = i.length, o = !1; t < a; t++) {
                const u = i.charCodeAt(t);
                if (!o)
                    if (ex(u)) {
                        (n++, 9 === u ? (r += 4 - (r % 4)) : r++);
                        continue;
                    } else o = !0;
                (10 === u || t === a - 1) &&
                    (10 !== u && t++,
                    this.bMarks.push(e),
                    this.eMarks.push(t),
                    this.tShift.push(n),
                    this.sCount.push(r),
                    this.bsCount.push(0),
                    (o = !1),
                    (n = 0),
                    (r = 0),
                    (e = t + 1));
            }
            (this.bMarks.push(i.length),
                this.eMarks.push(i.length),
                this.tShift.push(0),
                this.sCount.push(0),
                this.bsCount.push(0),
                (this.lineMax = this.bMarks.length - 1));
        }
        push(e, t, n) {
            let r = new eU(e, t, n);
            return (
                (r.block = !0),
                n < 0 && this.level--,
                (r.level = this.level),
                n > 0 && this.level++,
                this.tokens.push(r),
                r
            );
        }
        isEmpty(e) {
            return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
        }
        skipEmptyLines(e) {
            for (let t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
            return e;
        }
        skipSpaces(e) {
            for (let t = this.src.length; e < t && ex(this.src.charCodeAt(e)); e++);
            return e;
        }
        skipSpacesBack(e, t) {
            if (e <= t) return e;
            for (; e > t;) if (!ex(this.src.charCodeAt(--e))) return e + 1;
            return e;
        }
        skipChars(e, t) {
            for (let n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
            return e;
        }
        skipCharsBack(e, t, n) {
            if (e <= n) return e;
            for (; e > n;) if (t !== this.src.charCodeAt(--e)) return e + 1;
            return e;
        }
        getLines(e, t, n, r) {
            if (e >= t) return "";
            let i = Array(t - e);
            for (let a = 0, o = e; o < t; o++, a++) {
                let e,
                    u = 0,
                    s = this.bMarks[o],
                    l = s;
                for (e = o + 1 < t || r ? this.eMarks[o] + 1 : this.eMarks[o]; l < e && u < n;) {
                    let e = this.src.charCodeAt(l);
                    if (ex(e)) 9 === e ? (u += 4 - ((u + this.bsCount[o]) % 4)) : u++;
                    else if (l - s < this.tShift[o]) u++;
                    else break;
                    l++;
                }
                u > n ? (i[a] = Array(u - n + 1).join(" ") + this.src.slice(l, e)) : (i[a] = this.src.slice(l, e));
            }
            return i.join("");
        }
    };
function e8(e, t) {
    let n = e.bMarks[t] + e.tShift[t],
        r = e.eMarks[t];
    return e.src.slice(n, r);
}
function e7(e) {
    let t = [],
        n = e.length,
        r = 0,
        i = e.charCodeAt(r),
        a = !1,
        o = 0,
        u = "";
    for (; r < n;)
        (124 === i &&
            (a ? ((u += e.substring(o, r - 1)), (o = r)) : (t.push(u + e.substring(o, r)), (u = ""), (o = r + 1))),
            (a = 92 === i),
            r++,
            (i = e.charCodeAt(r)));
    return (t.push(u + e.substring(o)), t);
}
function te(e, t) {
    let n = e.eMarks[t],
        r = e.bMarks[t] + e.tShift[t],
        i = e.src.charCodeAt(r++);
    return (42 !== i && 45 !== i && 43 !== i) || (r < n && !ex(e.src.charCodeAt(r))) ? -1 : r;
}
function tt(e, t) {
    let n = e.bMarks[t] + e.tShift[t],
        r = e.eMarks[t],
        i = n;
    if (i + 1 >= r) return -1;
    let a = e.src.charCodeAt(i++);
    if (a < 48 || a > 57) return -1;
    for (;;) {
        if (i >= r) return -1;
        if ((a = e.src.charCodeAt(i++)) >= 48 && a <= 57) {
            if (i - n >= 10) return -1;
            continue;
        }
        if (41 === a || 46 === a) break;
        return -1;
    }
    return i < r && !ex((a = e.src.charCodeAt(i))) ? -1 : i;
}
var tn =
        "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
    tr = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    ti = RegExp(
        `^(?:${tn}|${tr}|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`,
    ),
    ta = RegExp(`^(?:${tn}|${tr})`),
    to = [
        [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
        [/^<!--/, /-->/, !0],
        [/^<\?/, /\?>/, !0],
        [/^<![A-Za-z]/, />/, !0],
        [/^<!\[CDATA\[/, /\]\]>/, !0],
        [
            RegExp(
                "^</?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=(\\s|/?>|$))",
                "i",
            ),
            /^$/,
            !0,
        ],
        [RegExp(`${ta.source}\\s*$`), /^$/, !1],
    ],
    tu = [
        [
            "table",
            function (e, t, n, r) {
                let i;
                if (t + 2 > n) return !1;
                let a = t + 1;
                if (e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4) return !1;
                let o = e.bMarks[a] + e.tShift[a];
                if (o >= e.eMarks[a]) return !1;
                let u = e.src.charCodeAt(o++);
                if ((124 !== u && 45 !== u && 58 !== u) || o >= e.eMarks[a]) return !1;
                let s = e.src.charCodeAt(o++);
                if ((124 !== s && 45 !== s && 58 !== s && !ex(s)) || (45 === u && ex(s))) return !1;
                for (; o < e.eMarks[a];) {
                    let t = e.src.charCodeAt(o);
                    if (124 !== t && 45 !== t && 58 !== t && !ex(t)) return !1;
                    o++;
                }
                let l = e8(e, t + 1),
                    c = l.split("|"),
                    d = [];
                for (let e = 0; e < c.length; e++) {
                    let t = c[e].trim();
                    if (!t)
                        if (0 === e || e === c.length - 1) continue;
                        else return !1;
                    if (!/^:?-+:?$/.test(t)) return !1;
                    58 === t.charCodeAt(t.length - 1)
                        ? d.push(58 === t.charCodeAt(0) ? "center" : "right")
                        : 58 === t.charCodeAt(0)
                          ? d.push("left")
                          : d.push("");
                }
                if (-1 === (l = e8(e, t).trim()).indexOf("|") || e.sCount[t] - e.blkIndent >= 4) return !1;
                ((c = e7(l)).length && "" === c[0] && c.shift(), c.length && "" === c[c.length - 1] && c.pop());
                let f = c.length;
                if (0 === f || f !== d.length) return !1;
                if (r) return !0;
                let h = e.parentType;
                e.parentType = "table";
                let p = e.md.block.ruler.getRules("blockquote"),
                    m = e.push("table_open", "table", 1),
                    _ = [t, 0];
                ((m.map = _),
                    (e.push("thead_open", "thead", 1).map = [t, t + 1]),
                    (e.push("tr_open", "tr", 1).map = [t, t + 1]));
                for (let t = 0; t < c.length; t++) {
                    let n = e.push("th_open", "th", 1);
                    d[t] && (n.attrs = [["style", `text-align:${d[t]}`]]);
                    let r = e.push("inline", "", 0);
                    ((r.content = c[t].trim()), (r.children = []), e.push("th_close", "th", -1));
                }
                (e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1));
                let g = 0;
                for (a = t + 2; a < n && !(e.sCount[a] < e.blkIndent); a++) {
                    let r = !1;
                    for (let t = 0, i = p.length; t < i; t++)
                        if (p[t](e, a, n, !0)) {
                            r = !0;
                            break;
                        }
                    if (
                        r ||
                        !(l = e8(e, a).trim()) ||
                        e.sCount[a] - e.blkIndent >= 4 ||
                        ((c = e7(l)).length && "" === c[0] && c.shift(),
                        c.length && "" === c[c.length - 1] && c.pop(),
                        (g += f - c.length) > 65536)
                    )
                        break;
                    (a === t + 2 && (e.push("tbody_open", "tbody", 1).map = i = [t + 2, 0]),
                        (e.push("tr_open", "tr", 1).map = [a, a + 1]));
                    for (let t = 0; t < f; t++) {
                        let n = e.push("td_open", "td", 1);
                        d[t] && (n.attrs = [["style", `text-align:${d[t]}`]]);
                        let r = e.push("inline", "", 0);
                        ((r.content = c[t] ? c[t].trim() : ""), (r.children = []), e.push("td_close", "td", -1));
                    }
                    e.push("tr_close", "tr", -1);
                }
                return (
                    i && (e.push("tbody_close", "tbody", -1), (i[1] = a)),
                    e.push("table_close", "table", -1),
                    (_[1] = a),
                    (e.parentType = h),
                    (e.line = a),
                    !0
                );
            },
            ["paragraph", "reference"],
        ],
        [
            "code",
            function (e, t, n) {
                if (e.sCount[t] - e.blkIndent < 4) return !1;
                let r = t + 1,
                    i = r;
                for (; r < n;) {
                    if (e.isEmpty(r)) {
                        r++;
                        continue;
                    }
                    if (e.sCount[r] - e.blkIndent >= 4) {
                        i = ++r;
                        continue;
                    }
                    break;
                }
                e.line = i;
                let a = e.push("code_block", "code", 0);
                return ((a.content = e.getLines(t, i, 4 + e.blkIndent, !1) + "\n"), (a.map = [t, e.line]), !0);
            },
        ],
        [
            "fence",
            function (e, t, n, r) {
                let i = e.bMarks[t] + e.tShift[t],
                    a = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4 || i + 3 > a) return !1;
                let o = e.src.charCodeAt(i);
                if (126 !== o && 96 !== o) return !1;
                let u = i,
                    s = (i = e.skipChars(i, o)) - u;
                if (s < 3) return !1;
                let l = e.src.slice(u, i),
                    c = e.src.slice(i, a);
                if (96 === o && c.indexOf(String.fromCharCode(o)) >= 0) return !1;
                if (r) return !0;
                let d = t,
                    f = !1;
                for (
                    ;
                    !(++d >= n) &&
                    (!((i = u = e.bMarks[d] + e.tShift[d]) < (a = e.eMarks[d])) || !(e.sCount[d] < e.blkIndent));
                ) {
                    if (
                        !(
                            e.src.charCodeAt(i) !== o ||
                            e.sCount[d] - e.blkIndent >= 4 ||
                            (i = e.skipChars(i, o)) - u < s
                        ) &&
                        !((i = e.skipSpaces(i)) < a)
                    ) {
                        f = !0;
                        break;
                    }
                }
                ((s = e.sCount[t]), (e.line = d + +!!f));
                let h = e.push("fence", "code", 0);
                return (
                    (h.info = c), (h.content = e.getLines(t + 1, d, s, !0)), (h.markup = l), (h.map = [t, e.line]), !0
                );
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "blockquote",
            function (e, t, n, r) {
                let i,
                    a = e.bMarks[t] + e.tShift[t],
                    o = e.eMarks[t],
                    u = e.lineMax;
                if (e.sCount[t] - e.blkIndent >= 4 || 62 !== e.src.charCodeAt(a)) return !1;
                if (r) return !0;
                let s = [],
                    l = [],
                    c = [],
                    d = [],
                    f = e.md.block.ruler.getRules("blockquote"),
                    h = e.parentType;
                e.parentType = "blockquote";
                let p = !1;
                for (i = t; i < n; i++) {
                    let t = e.sCount[i] < e.blkIndent;
                    if ((a = e.bMarks[i] + e.tShift[i]) >= (o = e.eMarks[i])) break;
                    if (62 === e.src.charCodeAt(a++) && !t) {
                        let t,
                            n,
                            r = e.sCount[i] + 1;
                        32 === e.src.charCodeAt(a)
                            ? (a++, r++, (n = !1), (t = !0))
                            : 9 === e.src.charCodeAt(a)
                              ? ((t = !0), (e.bsCount[i] + r) % 4 == 3 ? (a++, r++, (n = !1)) : (n = !0))
                              : (t = !1);
                        let u = r;
                        for (s.push(e.bMarks[i]), e.bMarks[i] = a; a < o;) {
                            let t = e.src.charCodeAt(a);
                            if (ex(t)) 9 === t ? (u += 4 - ((u + e.bsCount[i] + +!!n) % 4)) : u++;
                            else break;
                            a++;
                        }
                        ((p = a >= o),
                            l.push(e.bsCount[i]),
                            (e.bsCount[i] = e.sCount[i] + 1 + +!!t),
                            c.push(e.sCount[i]),
                            (e.sCount[i] = u - r),
                            d.push(e.tShift[i]),
                            (e.tShift[i] = a - e.bMarks[i]));
                        continue;
                    }
                    if (p) break;
                    let r = !1;
                    for (let t = 0, a = f.length; t < a; t++)
                        if (f[t](e, i, n, !0)) {
                            r = !0;
                            break;
                        }
                    if (r) {
                        ((e.lineMax = i),
                            0 !== e.blkIndent &&
                                (s.push(e.bMarks[i]),
                                l.push(e.bsCount[i]),
                                d.push(e.tShift[i]),
                                c.push(e.sCount[i]),
                                (e.sCount[i] -= e.blkIndent)));
                        break;
                    }
                    (s.push(e.bMarks[i]),
                        l.push(e.bsCount[i]),
                        d.push(e.tShift[i]),
                        c.push(e.sCount[i]),
                        (e.sCount[i] = -1));
                }
                let m = e.blkIndent;
                e.blkIndent = 0;
                let _ = e.push("blockquote_open", "blockquote", 1);
                _.markup = ">";
                let g = [t, 0];
                ((_.map = g),
                    e.md.block.tokenize(e, t, i),
                    (e.push("blockquote_close", "blockquote", -1).markup = ">"),
                    (e.lineMax = u),
                    (e.parentType = h),
                    (g[1] = e.line));
                for (let n = 0; n < d.length; n++)
                    ((e.bMarks[n + t] = s[n]),
                        (e.tShift[n + t] = d[n]),
                        (e.sCount[n + t] = c[n]),
                        (e.bsCount[n + t] = l[n]));
                return ((e.blkIndent = m), !0);
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "hr",
            function (e, t, n, r) {
                let i = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let a = e.bMarks[t] + e.tShift[t],
                    o = e.src.charCodeAt(a++);
                if (42 !== o && 45 !== o && 95 !== o) return !1;
                let u = 1;
                for (; a < i;) {
                    let t = e.src.charCodeAt(a++);
                    if (t !== o && !ex(t)) return !1;
                    t === o && u++;
                }
                if (u < 3) return !1;
                if (r) return !0;
                e.line = t + 1;
                let s = e.push("hr", "hr", 0);
                return ((s.map = [t, e.line]), (s.markup = Array(u + 1).join(String.fromCharCode(o))), !0);
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "list",
            function (e, t, n, r) {
                let i,
                    a,
                    o,
                    u,
                    s,
                    l,
                    c,
                    d = t,
                    f = !0;
                if (
                    e.sCount[d] - e.blkIndent >= 4 ||
                    (e.listIndent >= 0 && e.sCount[d] - e.listIndent >= 4 && e.sCount[d] < e.blkIndent)
                )
                    return !1;
                let h = !1;
                if (
                    (r && "paragraph" === e.parentType && e.sCount[d] >= e.blkIndent && (h = !0), (c = tt(e, d)) >= 0)
                ) {
                    if (((s = !0), (o = e.bMarks[d] + e.tShift[d]), (l = Number(e.src.slice(o, c - 1))), h && 1 !== l))
                        return !1;
                } else {
                    if (!((c = te(e, d)) >= 0)) return !1;
                    s = !1;
                }
                if (h && e.skipSpaces(c) >= e.eMarks[d]) return !1;
                if (r) return !0;
                let p = e.src.charCodeAt(c - 1),
                    m = e.tokens.length;
                s
                    ? ((u = e.push("ordered_list_open", "ol", 1)), 1 !== l && (u.attrs = [["start", l]]))
                    : (u = e.push("bullet_list_open", "ul", 1));
                let _ = [d, 0];
                ((u.map = _), (u.markup = String.fromCharCode(p)));
                let g = !1,
                    v = e.md.block.ruler.getRules("list"),
                    y = e.parentType;
                for (e.parentType = "list"; d < n;) {
                    let t;
                    ((a = c), (i = e.eMarks[d]));
                    let r = e.sCount[d] + c - (e.bMarks[d] + e.tShift[d]),
                        l = r;
                    for (; a < i;) {
                        let t = e.src.charCodeAt(a);
                        if (9 === t) l += 4 - ((l + e.bsCount[d]) % 4);
                        else if (32 === t) l++;
                        else break;
                        a++;
                    }
                    let h = a;
                    (t = h >= i ? 1 : l - r) > 4 && (t = 1);
                    let m = r + t;
                    (u = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(p);
                    let _ = [d, 0];
                    ((u.map = _), s && (u.info = e.src.slice(o, c - 1)));
                    let y = e.tight,
                        b = e.tShift[d],
                        D = e.sCount[d],
                        w = e.listIndent;
                    if (
                        ((e.listIndent = e.blkIndent),
                        (e.blkIndent = m),
                        (e.tight = !0),
                        (e.tShift[d] = h - e.bMarks[d]),
                        (e.sCount[d] = l),
                        h >= i && e.isEmpty(d + 1) ? (e.line = Math.min(e.line + 2, n)) : e.md.block.tokenize(e, d, n),
                        (!e.tight || g) && (f = !1),
                        (g = e.line - d > 1 && e.isEmpty(e.line - 1)),
                        (e.blkIndent = e.listIndent),
                        (e.listIndent = w),
                        (e.tShift[d] = b),
                        (e.sCount[d] = D),
                        (e.tight = y),
                        ((u = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(p)),
                        (d = e.line),
                        (_[1] = d),
                        d >= n || e.sCount[d] < e.blkIndent || e.sCount[d] - e.blkIndent >= 4)
                    )
                        break;
                    let C = !1;
                    for (let t = 0, r = v.length; t < r; t++)
                        if (v[t](e, d, n, !0)) {
                            C = !0;
                            break;
                        }
                    if (C) break;
                    if (s) {
                        if ((c = tt(e, d)) < 0) break;
                        o = e.bMarks[d] + e.tShift[d];
                    } else if ((c = te(e, d)) < 0) break;
                    if (p !== e.src.charCodeAt(c - 1)) break;
                }
                return (
                    ((u = s ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup =
                        String.fromCharCode(p)),
                    (_[1] = d),
                    (e.line = d),
                    (e.parentType = y),
                    f &&
                        (function (e, t) {
                            let n = e.level + 2;
                            for (let r = t + 2, i = e.tokens.length - 2; r < i; r++)
                                e.tokens[r].level === n &&
                                    "paragraph_open" === e.tokens[r].type &&
                                    ((e.tokens[r + 2].hidden = !0), (e.tokens[r].hidden = !0), (r += 2));
                        })(e, m),
                    !0
                );
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "reference",
            function (e, t, n, r) {
                let i,
                    a = e.bMarks[t] + e.tShift[t],
                    o = e.eMarks[t],
                    u = t + 1;
                if (e.sCount[t] - e.blkIndent >= 4 || 91 !== e.src.charCodeAt(a)) return !1;
                function s(t) {
                    let n = e.lineMax;
                    if (t >= n || e.isEmpty(t)) return null;
                    let r = !1;
                    if ((e.sCount[t] - e.blkIndent > 3 && (r = !0), e.sCount[t] < 0 && (r = !0), !r)) {
                        let r = e.md.block.ruler.getRules("reference"),
                            i = e.parentType;
                        e.parentType = "reference";
                        let a = !1;
                        for (let i = 0, o = r.length; i < o; i++)
                            if (r[i](e, t, n, !0)) {
                                a = !0;
                                break;
                            }
                        if (((e.parentType = i), a)) return null;
                    }
                    let i = e.bMarks[t] + e.tShift[t],
                        a = e.eMarks[t];
                    return e.src.slice(i, a + 1);
                }
                let l = e.src.slice(a, o + 1);
                o = l.length;
                let c = -1;
                for (a = 1; a < o; a++) {
                    let e = l.charCodeAt(a);
                    if (91 === e) return !1;
                    if (93 === e) {
                        c = a;
                        break;
                    }
                    if (10 === e) {
                        let e = s(u);
                        null !== e && ((l += e), (o = l.length), u++);
                    } else if (92 === e && ++a < o && 10 === l.charCodeAt(a)) {
                        let e = s(u);
                        null !== e && ((l += e), (o = l.length), u++);
                    }
                }
                if (c < 0 || 58 !== l.charCodeAt(c + 1)) return !1;
                for (a = c + 2; a < o; a++) {
                    let e = l.charCodeAt(a);
                    if (10 === e) {
                        let e = s(u);
                        null !== e && ((l += e), (o = l.length), u++);
                    } else if (ex(e));
                    else break;
                }
                let d = e.md.helpers.parseLinkDestination(l, a, o);
                if (!d.ok) return !1;
                let f = e.md.normalizeLink(d.str);
                if (!e.md.validateLink(f)) return !1;
                let h = (a = d.pos),
                    p = u,
                    m = a;
                for (; a < o; a++) {
                    let e = l.charCodeAt(a);
                    if (10 === e) {
                        let e = s(u);
                        null !== e && ((l += e), (o = l.length), u++);
                    } else if (ex(e));
                    else break;
                }
                let _ = e.md.helpers.parseLinkTitle(l, a, o);
                for (; _.can_continue;) {
                    let t = s(u);
                    if (null === t) break;
                    ((l += t), (a = o), (o = l.length), u++, (_ = e.md.helpers.parseLinkTitle(l, a, o, _)));
                }
                for (
                    a < o && m !== a && _.ok ? ((i = _.str), (a = _.pos)) : ((i = ""), (a = h), (u = p));
                    a < o && ex(l.charCodeAt(a));
                )
                    a++;
                if (a < o && 10 !== l.charCodeAt(a) && i) for (i = "", a = h, u = p; a < o && ex(l.charCodeAt(a));) a++;
                if (a < o && 10 !== l.charCodeAt(a)) return !1;
                let g = eP(l.slice(1, c));
                if (!g) return !1;
                if (r) return !0;
                (void 0 === e.env.references && (e.env.references = {}),
                    void 0 === e.env.references[g] && (e.env.references[g] = { title: i, href: f }));
                let v = e.push("reference_definition", "", 0);
                ((v.map = [t, u]), (v.hidden = !0));
                let y = Object.create(null);
                return ((y.label = g), (v.meta = y), (e.line = u), !0);
            },
        ],
        [
            "html_block",
            function (e, t, n, r) {
                let i = e.bMarks[t] + e.tShift[t],
                    a = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || 60 !== e.src.charCodeAt(i)) return !1;
                let o = e.src.slice(i, a),
                    u = 0;
                for (; u < to.length && !to[u][0].test(o); u++);
                if (u === to.length) return !1;
                if (r) return to[u][2];
                let s = t + 1,
                    l = to[u][1].test("");
                if (!to[u][1].test(o)) {
                    for (; s < n && (!(e.sCount[s] < e.blkIndent) || (!l && e.isEmpty(s))); s++)
                        if (
                            ((i = e.bMarks[s] + e.tShift[s]),
                            (a = e.eMarks[s]),
                            (o = e.src.slice(i, a)),
                            to[u][1].test(o))
                        ) {
                            0 !== o.length && s++;
                            break;
                        }
                }
                e.line = s;
                let c = e.push("html_block", "", 0);
                return ((c.map = [t, s]), (c.content = e.getLines(t, s, e.blkIndent, !0)), !0);
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "heading",
            function (e, t, n, r) {
                let i = e.bMarks[t] + e.tShift[t],
                    a = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let o = e.src.charCodeAt(i);
                if (35 !== o || i >= a) return !1;
                let u = 1;
                for (o = e.src.charCodeAt(++i); 35 === o && i < a && u <= 6;) (u++, (o = e.src.charCodeAt(++i)));
                if (u > 6 || (i < a && !ex(o))) return !1;
                if (r) return !0;
                a = e.skipSpacesBack(a, i);
                let s = e.skipCharsBack(a, 35, i);
                (s > i && ex(e.src.charCodeAt(s - 1)) && (a = s), (e.line = t + 1));
                let l = e.push("heading_open", `h${u}`, 1);
                ((l.markup = "########".slice(0, u)), (l.map = [t, e.line]));
                let c = e.push("inline", "", 0);
                return (
                    (c.content = ez(e.src.slice(i, a))),
                    (c.map = [t, e.line]),
                    (c.children = []),
                    (e.push("heading_close", `h${u}`, -1).markup = "########".slice(0, u)),
                    !0
                );
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "lheading",
            function (e, t, n) {
                let r,
                    i = e.md.block.ruler.getRules("paragraph");
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let a = e.parentType;
                e.parentType = "paragraph";
                let o = 0,
                    u = t + 1;
                for (; u < n && !e.isEmpty(u); u++) {
                    if (e.sCount[u] - e.blkIndent > 3) continue;
                    if (e.sCount[u] >= e.blkIndent) {
                        let t = e.bMarks[u] + e.tShift[u],
                            n = e.eMarks[u];
                        if (
                            t < n &&
                            (45 === (r = e.src.charCodeAt(t)) || 61 === r) &&
                            ((t = e.skipChars(t, r)), (t = e.skipSpaces(t)) >= n)
                        ) {
                            o = 61 === r ? 1 : 2;
                            break;
                        }
                    }
                    if (e.sCount[u] < 0) continue;
                    let t = !1;
                    for (let r = 0, a = i.length; r < a; r++)
                        if (i[r](e, u, n, !0)) {
                            t = !0;
                            break;
                        }
                    if (t) break;
                }
                if (!o) return ((e.parentType = a), !1);
                let s = ez(e.getLines(t, u, e.blkIndent, !1));
                e.line = u + 1;
                let l = e.push("heading_open", `h${o}`, 1);
                ((l.markup = String.fromCharCode(r)), (l.map = [t, e.line]));
                let c = e.push("inline", "", 0);
                return (
                    (c.content = s),
                    (c.map = [t, e.line - 1]),
                    (c.children = []),
                    (e.push("heading_close", `h${o}`, -1).markup = String.fromCharCode(r)),
                    (e.parentType = a),
                    !0
                );
            },
        ],
        [
            "paragraph",
            function (e, t, n) {
                let r = e.md.block.ruler.getRules("paragraph"),
                    i = e.parentType,
                    a = t + 1;
                for (e.parentType = "paragraph"; a < n && !e.isEmpty(a); a++) {
                    if (e.sCount[a] - e.blkIndent > 3 || e.sCount[a] < 0) continue;
                    let t = !1;
                    for (let i = 0, o = r.length; i < o; i++)
                        if (r[i](e, a, n, !0)) {
                            t = !0;
                            break;
                        }
                    if (t) break;
                }
                let o = ez(e.getLines(t, a, e.blkIndent, !1));
                ((e.line = a), (e.push("paragraph_open", "p", 1).map = [t, e.line]));
                let u = e.push("inline", "", 0);
                return (
                    (u.content = o),
                    (u.map = [t, e.line]),
                    (u.children = []),
                    e.push("paragraph_close", "p", -1),
                    (e.parentType = i),
                    !0
                );
            },
        ],
    ],
    ts = class {
        constructor() {
            (e$(this, "ruler", new eW()), e$(this, "State", e6));
            for (let e = 0; e < tu.length; e++) this.ruler.push(tu[e][0], tu[e][1], { alt: (tu[e][2] || []).slice() });
        }
        tokenize(e, t, n) {
            let r = this.ruler.getRules(""),
                i = r.length,
                a = e.md.options.maxNesting,
                o = t,
                u = !1;
            for (; o < n && ((e.line = o = e.skipEmptyLines(o)), !(o >= n) && !(e.sCount[o] < e.blkIndent));) {
                if (e.level >= a) {
                    e.line = n;
                    break;
                }
                let t = e.line,
                    s = !1;
                for (let a = 0; a < i; a++)
                    if ((s = r[a](e, o, n, !1))) {
                        if (t >= e.line) throw Error("block rule didn't increment state.line");
                        break;
                    }
                if (!s) throw Error("none of the block rules matched");
                ((e.tight = !u),
                    e.isEmpty(e.line - 1) && (u = !0),
                    (o = e.line) < n && e.isEmpty(o) && ((u = !0), (e.line = ++o)));
            }
        }
        parse(e, t, n, r) {
            if (!e) return;
            let i = new this.State(e, t, n, r);
            this.tokenize(i, i.line, i.lineMax);
        }
    },
    tl = class {
        constructor(e, t, n, r) {
            (e$(this, "pos", 0),
                e$(this, "level", 0),
                e$(this, "pending", ""),
                e$(this, "pendingLevel", 0),
                e$(this, "cache", {}),
                e$(this, "backticks", {}),
                e$(this, "backticksScanned", !1),
                e$(this, "linkLevel", 0),
                e$(this, "delimiters", []),
                e$(this, "_prev_delimiters", []),
                e$(this, "Token", eU),
                (this.src = e),
                (this.env = n),
                (this.md = t),
                (this.tokens = r),
                (this.tokens_meta = Array(r.length)),
                (this.posMax = this.src.length));
        }
        pushPending() {
            let e = new eU("text", "", 0);
            return (
                (e.content = this.pending), (e.level = this.pendingLevel), this.tokens.push(e), (this.pending = ""), e
            );
        }
        push(e, t, n) {
            let r;
            this.pending && this.pushPending();
            let i = new eU(e, t, n);
            return (
                n < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
                (i.level = this.level),
                n > 0 &&
                    (this.level++,
                    this._prev_delimiters.push(this.delimiters),
                    (this.delimiters = []),
                    (r = { delimiters: this.delimiters })),
                (this.pendingLevel = this.level),
                this.tokens.push(i),
                this.tokens_meta.push(r),
                i
            );
        }
        scanDelims(e, t) {
            let n,
                r = this.posMax,
                i = this.src.charCodeAt(e);
            if (0 === e) n = 32;
            else if (1 === e) (63488 & (n = this.src.charCodeAt(0))) == 55296 && (n = 65533);
            else if ((64512 & (n = this.src.charCodeAt(e - 1))) == 56320) {
                let t = this.src.charCodeAt(e - 2);
                n = (64512 & t) == 55296 ? 65536 + ((t - 55296) << 10) + (n - 56320) : 65533;
            } else (64512 & n) == 55296 && (n = 65533);
            let a = e;
            for (; a < r && this.src.charCodeAt(a) === i;) a++;
            let o = a - e,
                u = a < r ? this.src.charCodeAt(a) : 32;
            if ((64512 & u) == 55296) {
                let e = this.src.charCodeAt(a + 1);
                u = (64512 & e) == 56320 ? 65536 + ((u - 55296) << 10) + (e - 56320) : 65533;
            } else (64512 & u) == 56320 && (u = 65533);
            let s = eS(n) || eV(n),
                l = eS(u) || eV(u),
                c = eT(n),
                d = eT(u),
                f = !d && (!l || c || s),
                h = !c && (!s || d || l);
            return { can_open: f && (t || !h || s), can_close: h && (t || !f || l), length: o };
        }
    },
    tc = [];
for (let e = 0; e < 256; e++) tc.push(0);
function td(e, t) {
    let n,
        r = [],
        i = t.length;
    for (let a = 0; a < i; a++) {
        let i = t[a];
        if (126 !== i.marker || -1 === i.end) continue;
        let o = t[i.end];
        (((n = e.tokens[i.token]).type = "s_open"),
            (n.tag = "s"),
            (n.nesting = 1),
            (n.markup = "~~"),
            (n.content = ""),
            ((n = e.tokens[o.token]).type = "s_close"),
            (n.tag = "s"),
            (n.nesting = -1),
            (n.markup = "~~"),
            (n.content = ""),
            "text" === e.tokens[o.token - 1].type && "~" === e.tokens[o.token - 1].content && r.push(o.token - 1));
    }
    for (; r.length;) {
        let t = r.pop(),
            i = t + 1;
        for (; i < e.tokens.length && "s_close" === e.tokens[i].type;) i++;
        t !== --i && ((n = e.tokens[i]), (e.tokens[i] = e.tokens[t]), (e.tokens[t] = n));
    }
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
    tc[e.charCodeAt(0)] = 1;
});
function tf(e, t) {
    let n = t.length;
    for (let r = n - 1; r >= 0; r--) {
        let n = t[r];
        if ((95 !== n.marker && 42 !== n.marker) || -1 === n.end) continue;
        let i = t[n.end],
            a =
                r > 0 &&
                t[r - 1].end === n.end + 1 &&
                t[r - 1].marker === n.marker &&
                t[r - 1].token === n.token - 1 &&
                t[n.end + 1].token === i.token + 1,
            o = String.fromCharCode(n.marker),
            u = e.tokens[n.token];
        ((u.type = a ? "strong_open" : "em_open"),
            (u.tag = a ? "strong" : "em"),
            (u.nesting = 1),
            (u.markup = a ? o + o : o),
            (u.content = ""));
        let s = e.tokens[i.token];
        ((s.type = a ? "strong_close" : "em_close"),
            (s.tag = a ? "strong" : "em"),
            (s.nesting = -1),
            (s.markup = a ? o + o : o),
            (s.content = ""),
            a && ((e.tokens[t[r - 1].token].content = ""), (e.tokens[t[n.end + 1].token].content = ""), r--));
    }
}
var th =
        /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    tp = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/,
    tm = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    t_ = /^&([a-z][a-z0-9]{1,31});/i;
function tg(e) {
    let t = {},
        n = e.length;
    if (!n) return;
    let r = 0,
        i = -2,
        a = [];
    for (let o = 0; o < n; o++) {
        let n = e[o];
        if (
            (a.push(0),
            (e[r].marker !== n.marker || i !== n.token - 1) && (r = o),
            (i = n.token),
            (n.length = n.length || 0),
            !n.close)
        )
            continue;
        t.hasOwnProperty(n.marker) || (t[n.marker] = [-1, -1, -1, -1, -1, -1]);
        let u = t[n.marker][3 * !!n.open + (n.length % 3)],
            s = r - a[r] - 1,
            l = s;
        for (; s > u; s -= a[s] + 1) {
            let t = e[s];
            if (t.marker === n.marker && t.open && t.end < 0) {
                let r = !1;
                if (
                    ((t.close || n.open) &&
                        (t.length + n.length) % 3 == 0 &&
                        (t.length % 3 != 0 || n.length % 3 != 0) &&
                        (r = !0),
                    !r)
                ) {
                    let r = s > 0 && !e[s - 1].open ? a[s - 1] + 1 : 0;
                    ((a[o] = o - s + r), (a[s] = r), (n.open = !1), (t.end = o), (t.close = !1), (l = -1), (i = -2));
                    break;
                }
            }
        }
        -1 !== l && (t[n.marker][3 * !!n.open + ((n.length || 0) % 3)] = l);
    }
}
var tv = [
        [
            "text",
            function (e, t) {
                let n = e.pos;
                for (
                    ;
                    n < e.posMax &&
                    !(function (e) {
                        switch (e) {
                            case 10:
                            case 33:
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 42:
                            case 43:
                            case 45:
                            case 58:
                            case 60:
                            case 61:
                            case 62:
                            case 64:
                            case 91:
                            case 92:
                            case 93:
                            case 94:
                            case 95:
                            case 96:
                            case 123:
                            case 125:
                            case 126:
                                return !0;
                            default:
                                return !1;
                        }
                    })(e.src.charCodeAt(n));
                )
                    n++;
                return n !== e.pos && (t || (e.pending += e.src.slice(e.pos, n)), (e.pos = n), !0);
            },
        ],
        [
            "linkify",
            function (e, t) {
                var n, r;
                if (!e.md.options.linkify || e.linkLevel > 0) return !1;
                let i = e.pos;
                if (
                    i + 3 > e.posMax ||
                    58 !== e.src.charCodeAt(i) ||
                    47 !== e.src.charCodeAt(i + 1) ||
                    47 !== e.src.charCodeAt(i + 2)
                )
                    return !1;
                let a = i - Math.min(10, e.pending.length, i),
                    o = i;
                for (
                    ;
                    o > a &&
                    (((n = e.src.charCodeAt(o - 1)) >= 65 && n <= 90) ||
                        (n >= 97 && n <= 122) ||
                        (n >= 48 && n <= 57) ||
                        43 === n ||
                        45 === n ||
                        46 === n);
                )
                    o--;
                if (o === i || !(((r = e.src.charCodeAt(o)) >= 65 && r <= 90) || (r >= 97 && r <= 122))) return !1;
                let u = i - o,
                    s = e.md.linkify.matchAtStart(e.src.slice(o));
                if (!s) return !1;
                let l = s.url;
                if (l.length <= u) return !1;
                let c = l.length;
                for (; c > 0 && 42 === l.charCodeAt(c - 1);) c--;
                c !== l.length && (l = l.slice(0, c));
                let d = e.md.normalizeLink(l);
                if (!e.md.validateLink(d)) return !1;
                if (!t) {
                    e.pending = e.pending.slice(0, -u);
                    let t = e.push("link_open", "a", 1);
                    ((t.attrs = [["href", d]]),
                        (t.markup = "linkify"),
                        (t.info = "auto"),
                        (e.push("text", "", 0).content = e.md.normalizeLinkText(l)));
                    let n = e.push("link_close", "a", -1);
                    ((n.markup = "linkify"), (n.info = "auto"));
                }
                return ((e.pos += l.length - u), !0);
            },
        ],
        [
            "newline",
            function (e, t) {
                let n = e.pos;
                if (10 !== e.src.charCodeAt(n)) return !1;
                let r = e.pending.length - 1,
                    i = e.posMax;
                if (!t)
                    if (r >= 0 && 32 === e.pending.charCodeAt(r))
                        if (r >= 1 && 32 === e.pending.charCodeAt(r - 1)) {
                            let t = r - 1;
                            for (; t >= 1 && 32 === e.pending.charCodeAt(t - 1);) t--;
                            ((e.pending = e.pending.slice(0, t)), e.push("hardbreak", "br", 0));
                        } else ((e.pending = e.pending.slice(0, -1)), e.push("softbreak", "br", 0));
                    else e.push("softbreak", "br", 0);
                for (n++; n < i && ex(e.src.charCodeAt(n));) n++;
                return ((e.pos = n), !0);
            },
        ],
        [
            "escape",
            function (e, t) {
                let n = e.pos,
                    r = e.posMax;
                if (92 !== e.src.charCodeAt(n) || ++n >= r) return !1;
                let i = e.src.charCodeAt(n);
                if (10 === i) {
                    for (t || e.push("hardbreak", "br", 0), n++; n < r && ex((i = e.src.charCodeAt(n)));) n++;
                    return ((e.pos = n), !0);
                }
                if (32 === i) {
                    if (!t) {
                        let t = e.push("text_special", "", 0);
                        ((t.content = "\\"), (t.markup = "\\"), (t.info = "escape"));
                    }
                    return ((e.pos = n), !0);
                }
                let a = e.src[n];
                if (i >= 55296 && i <= 56319 && n + 1 < r) {
                    let t = e.src.charCodeAt(n + 1);
                    t >= 56320 && t <= 57343 && ((a += e.src[n + 1]), n++);
                }
                let o = "\\" + a;
                if (!t) {
                    let t = e.push("text_special", "", 0);
                    (i < 256 && 0 !== tc[i] ? (t.content = a) : (t.content = o), (t.markup = o), (t.info = "escape"));
                }
                return ((e.pos = n + 1), !0);
            },
        ],
        [
            "backticks",
            function (e, t) {
                var n;
                let r = e.pos;
                if (96 !== e.src.charCodeAt(r)) return !1;
                let i = e.posMax,
                    a = r + 1;
                for (; a < i && 96 === e.src.charCodeAt(a);) a++;
                let o = e.src.slice(r, a),
                    u = o.length;
                if (
                    (e.backticksScanned ||
                        ((e.backticks = (function (e) {
                            let t = {},
                                n = 0;
                            for (; -1 !== (n = e.indexOf("`", n));) {
                                let r = n;
                                for (; 96 === e.charCodeAt(++n););
                                t[n - r] = r;
                            }
                            return t;
                        })(e.src)),
                        (e.backticksScanned = !0)),
                    (null != (n = e.backticks[u]) ? n : -1) >= a)
                ) {
                    let n,
                        r = a;
                    for (; -1 !== (n = e.src.indexOf("`", r)) && n < i;) {
                        for (r = n + 1; 96 === e.src.charCodeAt(r);) r++;
                        if (r > i) break;
                        if (r - n === u) {
                            if (!t) {
                                let t = e.push("code_inline", "code", 0);
                                t.markup = o;
                                let r = e.src.slice(a, n).replace(/\n/g, " ");
                                (r.startsWith(" ") && r.endsWith(" ") && /[^ ]/.test(r) && (r = r.slice(1, -1)),
                                    (t.content = r));
                            }
                            return ((e.pos = r), !0);
                        }
                    }
                }
                return (t || (e.pending += o), (e.pos = a), !0);
            },
        ],
        [
            "strikethrough",
            function (e, t) {
                let n = e.pos,
                    r = e.src.charCodeAt(n);
                if (t || 126 !== r) return !1;
                let i = e.scanDelims(e.pos, !0),
                    a = i.length,
                    o = String.fromCharCode(r);
                if (a < 2) return !1;
                a % 2 && ((e.push("text", "", 0).content = o), a--);
                for (let t = 0; t < a; t += 2)
                    ((e.push("text", "", 0).content = o + o),
                        e.delimiters.push({
                            marker: r,
                            length: 0,
                            token: e.tokens.length - 1,
                            end: -1,
                            open: i.can_open,
                            close: i.can_close,
                        }));
                return ((e.pos += i.length), !0);
            },
        ],
        [
            "emphasis",
            function (e, t) {
                let n = e.pos,
                    r = e.src.charCodeAt(n);
                if (t || (95 !== r && 42 !== r)) return !1;
                let i = e.scanDelims(e.pos, 42 === r);
                for (let t = 0; t < i.length; t++)
                    ((e.push("text", "", 0).content = String.fromCharCode(r)),
                        e.delimiters.push({
                            marker: r,
                            length: i.length,
                            token: e.tokens.length - 1,
                            end: -1,
                            open: i.can_open,
                            close: i.can_close,
                        }));
                return ((e.pos += i.length), !0);
            },
        ],
        [
            "link",
            function (e, t) {
                let n,
                    r,
                    i,
                    a,
                    o = "",
                    u = "",
                    s = e.pos,
                    l = !0;
                if (91 !== e.src.charCodeAt(e.pos)) return !1;
                let c = e.pos,
                    d = e.posMax,
                    f = e.pos + 1,
                    h = e.md.helpers.parseLinkLabel(e, e.pos, !0);
                if (h < 0) return !1;
                let p = h + 1;
                if (p < d && 40 === e.src.charCodeAt(p)) {
                    for (l = !1, p++; p < d && (ex((n = e.src.charCodeAt(p))) || 10 === n); p++);
                    if (p >= d) return !1;
                    if (((s = p), (i = e.md.helpers.parseLinkDestination(e.src, p, e.posMax)).ok)) {
                        for (
                            o = e.md.normalizeLink(i.str), e.md.validateLink(o) ? (p = i.pos) : (o = ""), s = p;
                            p < d && (ex((n = e.src.charCodeAt(p))) || 10 === n);
                            p++
                        );
                        if (((i = e.md.helpers.parseLinkTitle(e.src, p, e.posMax)), p < d && s !== p && i.ok))
                            for (u = i.str, p = i.pos; p < d && (ex((n = e.src.charCodeAt(p))) || 10 === n); p++);
                    }
                    ((p >= d || 41 !== e.src.charCodeAt(p)) && (l = !0), p++);
                }
                if (l) {
                    if (void 0 === e.env.references) return !1;
                    if (
                        (p < d && 91 === e.src.charCodeAt(p)
                            ? ((s = p + 1),
                              (p = e.md.helpers.parseLinkLabel(e, p)) >= 0 ? (r = e.src.slice(s, p++)) : (p = h + 1))
                            : (p = h + 1),
                        r || (r = e.src.slice(f, h)),
                        (r = eP(r)),
                        !(a = e.env.references[r]))
                    )
                        return ((e.pos = c), !1);
                    ((o = a.href), (u = a.title));
                }
                if (!t) {
                    ((e.pos = f), (e.posMax = h));
                    let t = e.push("link_open", "a", 1),
                        n = [["href", o]];
                    if (((t.attrs = n), u && n.push(["title", u]), r)) {
                        let e = Object.create(null);
                        ((e.label = r), (t.meta = e));
                    }
                    (e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1));
                }
                return ((e.pos = p), (e.posMax = d), !0);
            },
        ],
        [
            "image",
            function (e, t) {
                let n,
                    r,
                    i,
                    a,
                    o,
                    u,
                    s,
                    l,
                    c = "",
                    d = e.pos,
                    f = e.posMax;
                if (33 !== e.src.charCodeAt(e.pos) || 91 !== e.src.charCodeAt(e.pos + 1)) return !1;
                let h = e.pos + 2,
                    p = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
                if (p < 0) return !1;
                if ((a = p + 1) < f && 40 === e.src.charCodeAt(a)) {
                    for (a++; a < f && (ex((n = e.src.charCodeAt(a))) || 10 === n); a++);
                    if (a >= f) return !1;
                    for (
                        l = a,
                            (u = e.md.helpers.parseLinkDestination(e.src, a, e.posMax)).ok &&
                                ((c = e.md.normalizeLink(u.str)), e.md.validateLink(c) ? (a = u.pos) : (c = "")),
                            l = a;
                        a < f && (ex((n = e.src.charCodeAt(a))) || 10 === n);
                        a++
                    );
                    if (((u = e.md.helpers.parseLinkTitle(e.src, a, e.posMax)), a < f && l !== a && u.ok))
                        for (s = u.str, a = u.pos; a < f && (ex((n = e.src.charCodeAt(a))) || 10 === n); a++);
                    else s = "";
                    if (a >= f || 41 !== e.src.charCodeAt(a)) return ((e.pos = d), !1);
                    a++;
                } else {
                    if (void 0 === e.env.references) return !1;
                    if (
                        (a < f && 91 === e.src.charCodeAt(a)
                            ? ((l = a + 1),
                              (a = e.md.helpers.parseLinkLabel(e, a)) >= 0 ? (i = e.src.slice(l, a++)) : (a = p + 1))
                            : (a = p + 1),
                        i || (i = e.src.slice(h, p)),
                        (i = eP(i)),
                        !(o = e.env.references[i]))
                    )
                        return ((e.pos = d), !1);
                    ((c = o.href), (s = o.title));
                }
                if (!t) {
                    r = e.src.slice(h, p);
                    let t = [];
                    e.md.inline.parse(r, e.md, e.env, t);
                    let n = e.push("image", "img", 0),
                        a = [
                            ["src", c],
                            ["alt", ""],
                        ];
                    if (((n.attrs = a), (n.children = t), (n.content = r), s && a.push(["title", s]), i)) {
                        let e = Object.create(null);
                        ((e.label = i), (n.meta = e));
                    }
                }
                return ((e.pos = a), (e.posMax = f), !0);
            },
        ],
        [
            "autolink",
            function (e, t) {
                let n = e.pos;
                if (60 !== e.src.charCodeAt(n)) return !1;
                let r = e.pos,
                    i = e.posMax;
                for (;;) {
                    if (++n >= i) return !1;
                    let t = e.src.charCodeAt(n);
                    if (60 === t) return !1;
                    if (62 === t) break;
                }
                let a = e.src.slice(r + 1, n);
                if (tp.test(a)) {
                    let n = e.md.normalizeLink(a);
                    if (!e.md.validateLink(n)) return !1;
                    if (!t) {
                        let t = e.push("link_open", "a", 1);
                        ((t.attrs = [["href", n]]),
                            (t.markup = "autolink"),
                            (t.info = "auto"),
                            (e.push("text", "", 0).content = e.md.normalizeLinkText(a)));
                        let r = e.push("link_close", "a", -1);
                        ((r.markup = "autolink"), (r.info = "auto"));
                    }
                    return ((e.pos += a.length + 2), !0);
                }
                if (th.test(a)) {
                    let n = e.md.normalizeLink(`mailto:${a}`);
                    if (!e.md.validateLink(n)) return !1;
                    if (!t) {
                        let t = e.push("link_open", "a", 1);
                        ((t.attrs = [["href", n]]),
                            (t.markup = "autolink"),
                            (t.info = "auto"),
                            (e.push("text", "", 0).content = e.md.normalizeLinkText(a)));
                        let r = e.push("link_close", "a", -1);
                        ((r.markup = "autolink"), (r.info = "auto"));
                    }
                    return ((e.pos += a.length + 2), !0);
                }
                return !1;
            },
        ],
        [
            "html_inline",
            function (e, t) {
                let n;
                if (!e.md.options.html) return !1;
                let r = e.posMax,
                    i = e.pos;
                if (60 !== e.src.charCodeAt(i) || i + 2 >= r) return !1;
                let a = e.src.charCodeAt(i + 1);
                if (33 !== a && 63 !== a && 47 !== a && (!((n = 32 | a) >= 97) || !(n <= 122))) return !1;
                let o = e.src.slice(i).match(ti);
                if (!o) return !1;
                if (!t) {
                    var u, s;
                    let t = e.push("html_inline", "", 0);
                    ((t.content = o[0]),
                        (u = t.content),
                        /^<a[>\s]/i.test(u) && e.linkLevel++,
                        (s = t.content),
                        /^<\/a\s*>/i.test(s) && e.linkLevel--);
                }
                return ((e.pos += o[0].length), !0);
            },
        ],
        [
            "entity",
            function (e, t) {
                let n = e.pos,
                    r = e.posMax;
                if (38 !== e.src.charCodeAt(n) || n + 1 >= r) return !1;
                if (35 === e.src.charCodeAt(n + 1)) {
                    let r = e.src.slice(n).match(tm);
                    if (r) {
                        if (!t) {
                            let t = "x" === r[1][0].toLowerCase() ? parseInt(r[1].slice(1), 16) : parseInt(r[1], 10),
                                n = e.push("text_special", "", 0);
                            ((n.content = em(t) ? e_(t) : e_(65533)), (n.markup = r[0]), (n.info = "entity"));
                        }
                        return ((e.pos += r[0].length), !0);
                    }
                } else {
                    let r = e.src.slice(n).match(t_);
                    if (r) {
                        let n = W(r[0]);
                        if (n !== r[0]) {
                            if (!t) {
                                let t = e.push("text_special", "", 0);
                                ((t.content = n), (t.markup = r[0]), (t.info = "entity"));
                            }
                            return ((e.pos += r[0].length), !0);
                        }
                    }
                }
                return !1;
            },
        ],
    ],
    ty = [
        [
            "balance_pairs",
            function (e) {
                let t = e.tokens_meta,
                    n = e.tokens_meta.length;
                tg(e.delimiters);
                for (let e = 0; e < n; e++) {
                    var r;
                    let n = null == (r = t[e]) ? void 0 : r.delimiters;
                    n && tg(n);
                }
            },
        ],
        [
            "strikethrough",
            function (e) {
                let t = e.tokens_meta,
                    n = e.tokens_meta.length;
                td(e, e.delimiters);
                for (let i = 0; i < n; i++) {
                    var r;
                    let n = null == (r = t[i]) ? void 0 : r.delimiters;
                    n && td(e, n);
                }
            },
        ],
        [
            "emphasis",
            function (e) {
                let t = e.tokens_meta,
                    n = e.tokens_meta.length;
                tf(e, e.delimiters);
                for (let i = 0; i < n; i++) {
                    var r;
                    let n = null == (r = t[i]) ? void 0 : r.delimiters;
                    n && tf(e, n);
                }
            },
        ],
        [
            "fragments_join",
            function (e) {
                let t,
                    n,
                    r = 0,
                    i = e.tokens,
                    a = e.tokens.length;
                for (t = n = 0; t < a; t++)
                    (i[t].nesting < 0 && r--,
                        (i[t].level = r),
                        i[t].nesting > 0 && r++,
                        "text" === i[t].type && t + 1 < a && "text" === i[t + 1].type
                            ? (i[t + 1].content = i[t].content + i[t + 1].content)
                            : (t !== n && (i[n] = i[t]), n++));
                t !== n && (i.length = n);
            },
        ],
    ],
    tb = class {
        constructor() {
            (e$(this, "ruler", new eW()), e$(this, "ruler2", new eW()), e$(this, "State", tl));
            for (let e = 0; e < tv.length; e++) this.ruler.push(tv[e][0], tv[e][1]);
            for (let e = 0; e < ty.length; e++) this.ruler2.push(ty[e][0], ty[e][1]);
        }
        skipToken(e) {
            let t = e.pos,
                n = this.ruler.getRules(""),
                r = n.length,
                i = e.md.options.maxNesting,
                a = e.cache;
            if (void 0 !== a[t]) {
                e.pos = a[t];
                return;
            }
            let o = !1;
            if (e.level < i) {
                for (let i = 0; i < r; i++)
                    if ((e.level++, (o = n[i](e, !0)), e.level--, o)) {
                        if (t >= e.pos) throw Error("inline rule didn't increment state.pos");
                        break;
                    }
            } else e.pos = e.posMax;
            (!o && e.pos++, (a[t] = e.pos));
        }
        tokenize(e) {
            let t = this.ruler.getRules(""),
                n = t.length,
                r = e.posMax,
                i = e.md.options.maxNesting;
            for (; e.pos < r;) {
                let a = e.pos,
                    o = !1;
                if (e.level < i) {
                    for (let r = 0; r < n; r++)
                        if ((o = t[r](e, !1))) {
                            if (a >= e.pos) throw Error("inline rule didn't increment state.pos");
                            break;
                        }
                }
                if (o) {
                    if (e.pos >= r) break;
                    continue;
                }
                e.pending += e.src[e.pos++];
            }
            e.pending && e.pushPending();
        }
        parse(e, t, n, r) {
            let i = new this.State(e, t, n, r);
            this.tokenize(i);
            let a = this.ruler2.getRules(""),
                o = a.length;
            for (let e = 0; e < o; e++) a[e](i);
        }
    },
    tD = {
        default: {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "\u201C\u201D\u2018\u2019",
                highlight: null,
                maxNesting: 100,
            },
            components: { core: {}, block: {}, inline: {} },
        },
        zero: {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "\u201C\u201D\u2018\u2019",
                highlight: null,
                maxNesting: 20,
            },
            components: {
                core: { rules: ["normalize", "block", "strip_references", "inline", "text_join"] },
                block: { rules: ["paragraph"] },
                inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] },
            },
        },
        commonmark: {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "\u201C\u201D\u2018\u2019",
                highlight: null,
                maxNesting: 20,
            },
            components: {
                core: { rules: ["normalize", "block", "strip_references", "inline", "text_join"] },
                block: {
                    rules: [
                        "blockquote",
                        "code",
                        "fence",
                        "heading",
                        "hr",
                        "html_block",
                        "lheading",
                        "list",
                        "reference",
                        "paragraph",
                    ],
                },
                inline: {
                    rules: [
                        "autolink",
                        "backticks",
                        "emphasis",
                        "entity",
                        "escape",
                        "html_inline",
                        "image",
                        "link",
                        "newline",
                        "text",
                    ],
                    rules2: ["balance_pairs", "emphasis", "fragments_join"],
                },
            },
        },
    },
    tw = /^(vbscript|javascript|file|data):/,
    tC = /^data:image\/(gif|png|jpeg|webp);/,
    tE = ["http:", "https:", "mailto:"],
    tA = class {
        validateLink(e) {
            let t = e.trim().toLowerCase();
            return !tw.test(t) || tC.test(t);
        }
        normalizeLink(e) {
            let t = R(e, !0);
            if (t.hostname && (!t.protocol || tE.indexOf(t.protocol) >= 0))
                try {
                    var n;
                    ((n = t.hostname),
                        (t.hostname = ea(n, function (e) {
                            return Q.test(e) ? "xn--" + el(e) : e;
                        })));
                } catch (e) {}
            return (
                t.auth && (t.auth = y(t.auth)),
                t.hostname && (t.hostname = y(t.hostname)),
                t.pathname && (t.pathname = y(t.pathname)),
                t.search && (t.search = y(t.search)),
                t.hash && (t.hash = y(t.hash)),
                b(t)
            );
        }
        normalizeLinkText(e) {
            let t = R(e, !0);
            if (t.hostname && (!t.protocol || tE.indexOf(t.protocol) >= 0))
                try {
                    var n;
                    ((n = t.hostname),
                        (t.hostname = ea(n, function (e) {
                            return Y.test(e) ? es(e.slice(4).toLowerCase()) : e;
                        })));
                } catch (e) {}
            return _(b(t), _.defaultChars + "%");
        }
        constructor(...e) {
            (e$(this, "inline", new tb()),
                e$(this, "block", new ts()),
                e$(this, "core", new e9()),
                e$(this, "renderer", new eq()),
                e$(this, "linkify", new X()),
                e$(this, "utils", ef),
                e$(this, "helpers", Object.assign({}, eL)));
            const [t, n] = e;
            "string" == typeof t
                ? (this.configure(t), n && this.set(n))
                : (this.configure("default"), this.set(t || {}));
        }
        set(e) {
            return (Object.assign(this.options, e), this);
        }
        configure(e) {
            let t;
            if ("string" == typeof e) {
                if (!(t = tD[e])) throw Error(`Wrong 'markdown-it' preset "${e}", check name`);
            } else t = e;
            if (!t) throw Error("Wrong `markdown-it` preset, can't be empty");
            t.options && (this.options = { ...t.options });
            let n = t.components;
            if (n) {
                var r;
                ["core", "block", "inline"].forEach((e) => {
                    var t;
                    let r = null == (t = n[e]) ? void 0 : t.rules;
                    r && this[e].ruler.enableOnly(r);
                });
                let e = null == (r = n.inline) ? void 0 : r.rules2;
                e && this.inline.ruler2.enableOnly(e);
            }
            return this;
        }
        enable(e, t = !1) {
            let n = [];
            (Array.isArray(e) || (e = [e]),
                ["core", "block", "inline"].forEach((t) => {
                    n = n.concat(this[t].ruler.enable(e, !0));
                }),
                (n = n.concat(this.inline.ruler2.enable(e, !0))));
            let r = e.filter((e) => 0 > n.indexOf(e));
            if (r.length && !t) throw Error(`MarkdownIt. Failed to enable unknown rule(s): ${r}`);
            return this;
        }
        disable(e, t = !1) {
            let n = [];
            (Array.isArray(e) || (e = [e]),
                ["core", "block", "inline"].forEach((t) => {
                    n = n.concat(this[t].ruler.disable(e, !0));
                }),
                (n = n.concat(this.inline.ruler2.disable(e, !0))));
            let r = e.filter((e) => 0 > n.indexOf(e));
            if (r.length && !t) throw Error(`MarkdownIt. Failed to disable unknown rule(s): ${r}`);
            return this;
        }
        use(e, ...t) {
            return (e.apply(e, [this, ...t]), this);
        }
        parse(e, t) {
            if ("string" != typeof e) throw Error("Input data should be a String");
            let n = new this.core.State(e, this, t);
            return (this.core.process(n), n.tokens);
        }
        render(e, t = {}) {
            return this.renderer.render(this.parse(e, t), this.options, t);
        }
        parseInline(e, t) {
            let n = new this.core.State(e, this, t);
            return ((n.inlineMode = !0), this.core.process(n), n.tokens);
        }
        renderInline(e, t = {}) {
            return this.renderer.render(this.parseInline(e, t), this.options, t);
        }
    };
(e$(tA, "Token", eU),
    e$(tA, "Ruler", eW),
    e$(tA, "Renderer", eq),
    e$(tA, "ParserCore", e9),
    e$(tA, "StateCore", eK),
    e$(tA, "ParserBlock", ts),
    e$(tA, "StateBlock", e6),
    e$(tA, "ParserInline", tb),
    e$(tA, "StateInline", tl));
var tk = eh(tA);
