let r, i, a;
n.d(t, { Ikc: () => aI, YjP: () => ig, jgl: () => a0, k5n: () => a6 });
var o,
    u,
    s = {};
(n.r(s),
    n.d(s, {
        base64: () => eT,
        base64url: () => eR,
        bigint: () => eL,
        boolean: () => eU,
        browserEmail: () => eC,
        cidrv4: () => eF,
        cidrv6: () => ex,
        cuid: () => ea,
        cuid2: () => eo,
        date: () => ez,
        datetime: () => eI,
        domain: () => eS,
        duration: () => ed,
        e164: () => eP,
        email: () => ev,
        emoji: () => eE,
        extendedDuration: () => ef,
        guid: () => eh,
        hex: () => eJ,
        hostname: () => eV,
        html5Email: () => ey,
        idnEmail: () => ew,
        integer: () => eZ,
        ipv4: () => eA,
        ipv6: () => ek,
        ksuid: () => el,
        lowercase: () => eq,
        mac: () => eB,
        md5_base64: () => eQ,
        md5_base64url: () => e0,
        md5_hex: () => eY,
        nanoid: () => ec,
        null: () => eW,
        number: () => e$,
        rfc5322Email: () => eb,
        sha1_base64: () => e2,
        sha1_base64url: () => e3,
        sha1_hex: () => e1,
        sha256_base64: () => e4,
        sha256_base64url: () => e9,
        sha256_hex: () => e5,
        sha384_base64: () => e8,
        sha384_base64url: () => e7,
        sha384_hex: () => e6,
        sha512_base64: () => tt,
        sha512_base64url: () => tn,
        sha512_hex: () => te,
        string: () => ej,
        time: () => eN,
        ulid: () => eu,
        undefined: () => eG,
        unicodeEmail: () => eD,
        uppercase: () => eK,
        uuid: () => ep,
        uuid4: () => em,
        uuid6: () => e_,
        uuid7: () => eg,
        xid: () => es,
    }));
var l = {};
(n.r(l),
    n.d(l, {
        endsWith: () => rz,
        gt: () => rv,
        gte: () => ry,
        includes: () => rP,
        length: () => rT,
        lowercase: () => rV,
        lt: () => r_,
        lte: () => rg,
        maxLength: () => rF,
        maxSize: () => rA,
        mime: () => rN,
        minLength: () => rx,
        minSize: () => rk,
        multipleOf: () => rE,
        negative: () => rD,
        nonnegative: () => rC,
        nonpositive: () => rw,
        normalize: () => rj,
        overwrite: () => rI,
        positive: () => rb,
        property: () => rM,
        regex: () => rR,
        size: () => rB,
        slugify: () => rU,
        startsWith: () => rO,
        toLowerCase: () => rZ,
        toUpperCase: () => r$,
        trim: () => rL,
        uppercase: () => rS,
    }));
var c = {};
(n.r(c),
    n.d(c, {
        ZodISODate: () => r2,
        ZodISODateTime: () => r0,
        ZodISODuration: () => r9,
        ZodISOTime: () => r5,
        date: () => r3,
        datetime: () => r1,
        duration: () => r6,
        time: () => r4,
    }));
var d = {};
function f(e, t, n) {
    function r(n, r) {
        if (
            (n._zod ||
                Object.defineProperty(n, "_zod", { value: { def: r, constr: o, traits: new Set() }, enumerable: !1 }),
            n._zod.traits.has(e))
        )
            return;
        (n._zod.traits.add(e), t(n, r));
        let i = o.prototype,
            a = Object.keys(i);
        for (let e = 0; e < a.length; e++) {
            let t = a[e];
            t in n || (n[t] = i[t].bind(n));
        }
    }
    let i = n?.Parent ?? Object;
    class a extends i {}
    function o(e) {
        var t;
        let i = n?.Parent ? new a() : this;
        for (let n of (r(i, e), (t = i._zod).deferred ?? (t.deferred = []), i._zod.deferred)) n();
        return i;
    }
    return (
        Object.defineProperty(a, "name", { value: e }),
        Object.defineProperty(o, "init", { value: r }),
        Object.defineProperty(o, Symbol.hasInstance, {
            value: (t) => (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
        }),
        Object.defineProperty(o, "name", { value: e }),
        o
    );
}
(n.r(d),
    n.d(d, {
        ZodAny: () => aA,
        ZodArray: () => aO,
        ZodBase64: () => i1,
        ZodBase64URL: () => i3,
        ZodBigInt: () => ap,
        ZodBigIntFormat: () => a_,
        ZodBoolean: () => af,
        ZodCIDRv4: () => iX,
        ZodCIDRv6: () => iQ,
        ZodCUID: () => iO,
        ZodCUID2: () => iM,
        ZodCatch: () => ob,
        ZodCodec: () => ok,
        ZodCustom: () => oN,
        ZodCustomStringFormat: () => i7,
        ZodDate: () => aS,
        ZodDefault: () => of,
        ZodDiscriminatedUnion: () => aG,
        ZodE164: () => i4,
        ZodEmail: () => iy,
        ZodEmoji: () => iR,
        ZodEnum: () => a9,
        ZodExactOptional: () => ou,
        ZodFile: () => ot,
        ZodFunction: () => oz,
        ZodGUID: () => iD,
        ZodIPv4: () => iW,
        ZodIPv6: () => iJ,
        ZodIntersection: () => aK,
        ZodJWT: () => i6,
        ZodKSUID: () => i$,
        ZodLazy: () => oV,
        ZodLiteral: () => a7,
        ZodMAC: () => iq,
        ZodMap: () => a2,
        ZodNaN: () => ow,
        ZodNanoID: () => iS,
        ZodNever: () => ax,
        ZodNonOptional: () => o_,
        ZodNull: () => aC,
        ZodNullable: () => ol,
        ZodNumber: () => ai,
        ZodNumberFormat: () => ao,
        ZodObject: () => aN,
        ZodOptional: () => oa,
        ZodPipe: () => oE,
        ZodPrefault: () => op,
        ZodPromise: () => oP,
        ZodReadonly: () => oF,
        ZodRecord: () => aY,
        ZodSet: () => a5,
        ZodString: () => i_,
        ZodStringFormat: () => iv,
        ZodSuccess: () => ov,
        ZodSymbol: () => ay,
        ZodTemplateLiteral: () => oT,
        ZodTransform: () => or,
        ZodTuple: () => aH,
        ZodType: () => ip,
        ZodULID: () => iI,
        ZodURL: () => iF,
        ZodUUID: () => iC,
        ZodUndefined: () => aD,
        ZodUnion: () => aZ,
        ZodUnknown: () => aB,
        ZodVoid: () => aR,
        ZodXID: () => iL,
        ZodXor: () => aU,
        _ZodString: () => im,
        _default: () => oh,
        _function: () => oM,
        any: () => ak,
        array: () => az,
        base64: () => i2,
        base64url: () => i5,
        bigint: () => am,
        boolean: () => ah,
        catch: () => oD,
        check: () => oI,
        cidrv4: () => iY,
        cidrv6: () => i0,
        codec: () => oB,
        cuid: () => iz,
        cuid2: () => iN,
        custom: () => oj,
        date: () => aP,
        describe: () => o$,
        discriminatedUnion: () => aq,
        e164: () => i9,
        email: () => ib,
        emoji: () => iV,
        enum: () => a6,
        exactOptional: () => os,
        file: () => on,
        float32: () => as,
        float64: () => al,
        function: () => oM,
        guid: () => iw,
        hash: () => ar,
        hex: () => an,
        hostname: () => at,
        httpUrl: () => iT,
        instanceof: () => oW,
        int: () => au,
        int32: () => ac,
        int64: () => ag,
        intersection: () => aJ,
        ipv4: () => iG,
        ipv6: () => iH,
        json: () => oq,
        jwt: () => i8,
        keyof: () => aM,
        ksuid: () => iU,
        lazy: () => oS,
        literal: () => oe,
        looseObject: () => aL,
        looseRecord: () => a1,
        mac: () => iK,
        map: () => a3,
        meta: () => oU,
        nan: () => oC,
        nanoid: () => iP,
        nativeEnum: () => a8,
        never: () => aT,
        nonoptional: () => og,
        null: () => aE,
        nullable: () => oc,
        nullish: () => od,
        number: () => aa,
        object: () => aI,
        optional: () => oo,
        partialRecord: () => a0,
        pipe: () => oA,
        prefault: () => om,
        preprocess: () => oK,
        promise: () => oO,
        readonly: () => ox,
        record: () => aQ,
        refine: () => oL,
        set: () => a4,
        strictObject: () => aj,
        string: () => ig,
        stringFormat: () => ae,
        stringbool: () => oG,
        success: () => oy,
        superRefine: () => oZ,
        symbol: () => ab,
        templateLiteral: () => oR,
        transform: () => oi,
        tuple: () => aX,
        uint32: () => ad,
        uint64: () => av,
        ulid: () => ij,
        undefined: () => aw,
        union: () => a$,
        unknown: () => aF,
        url: () => ix,
        uuid: () => iE,
        uuidv4: () => iA,
        uuidv6: () => ik,
        uuidv7: () => iB,
        void: () => aV,
        xid: () => iZ,
        xor: () => aW,
    }),
    Object.freeze({ status: "aborted" }),
    Symbol("zod_brand"));
class h extends Error {
    constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
class p extends Error {
    constructor(e) {
        (super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError"));
    }
}
let m = {};
function _(e) {
    return (e && Object.assign(m, e), m);
}
function g(e) {
    let t = Object.values(e).filter((e) => "number" == typeof e);
    return Object.entries(e)
        .filter(([e, n]) => -1 === t.indexOf(+e))
        .map(([e, t]) => t);
}
function v(e, t = "|") {
    return e.map((e) => N(e)).join(t);
}
function y(e, t) {
    return "bigint" == typeof t ? t.toString() : t;
}
function b(e) {
    return {
        get value() {
            {
                let t = e();
                return (Object.defineProperty(this, "value", { value: t }), t);
            }
        },
    };
}
function D(e) {
    return null == e;
}
function w(e) {
    let t = +!!e.startsWith("^"),
        n = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, n);
}
let C = Symbol("evaluating");
function E(e, t, n) {
    let r;
    Object.defineProperty(e, t, {
        get() {
            if (r !== C) return (void 0 === r && ((r = C), (r = n())), r);
        },
        set(n) {
            Object.defineProperty(e, t, { value: n });
        },
        configurable: !0,
    });
}
function A(e, t, n) {
    Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function k(...e) {
    let t = {};
    for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
    return Object.defineProperties({}, t);
}
function B(e) {
    return JSON.stringify(e);
}
let F = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function x(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
let T = b(() => {
    if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        return (Function(""), !0);
    } catch (e) {
        return !1;
    }
});
function R(e) {
    if (!1 === x(e)) return !1;
    let t = e.constructor;
    if (void 0 === t || "function" != typeof t) return !0;
    let n = t.prototype;
    return !1 !== x(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function V(e) {
    return R(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
let S = new Set(["string", "number", "symbol"]),
    P = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function O(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function z(e, t, n) {
    let r = new e._zod.constr(t ?? e._zod.def);
    return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function M(e) {
    if (!e) return {};
    if ("string" == typeof e) return { error: () => e };
    if (e?.message !== void 0) {
        if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
        e.error = e.message;
    }
    return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e;
}
function N(e) {
    return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
let I = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    },
    j = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
    };
function L(e, t = 0) {
    if (!0 === e.aborted) return !0;
    for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
    return !1;
}
function Z(e, t) {
    return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
}
function $(e) {
    return "string" == typeof e ? e : e?.message;
}
function U(e, t, n) {
    let r = { ...e, path: e.path ?? [] };
    return (
        e.message ||
            (r.message =
                $(e.inst?._zod.def?.error?.(e)) ??
                $(t?.error?.(e)) ??
                $(n.customError?.(e)) ??
                $(n.localeError?.(e)) ??
                "Invalid input"),
        delete r.inst,
        delete r.continue,
        t?.reportInput || delete r.input,
        r
    );
}
function W(e) {
    return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function G(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function q(...e) {
    let [t, n, r] = e;
    return "string" == typeof t ? { message: t, code: "custom", input: n, inst: r } : { ...t };
}
let K = (e, t) => {
        ((e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, y, 2)),
            Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 }));
    },
    J = f("$ZodError", K),
    H = f("$ZodError", K, { Parent: Error }),
    X = (e) => (t, n, r, i) => {
        let a = r ? Object.assign(r, { async: !1 }) : { async: !1 },
            o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new h();
        if (o.issues.length) {
            let t = new (i?.Err ?? e)(o.issues.map((e) => U(e, a, _())));
            throw (F(t, i?.callee), t);
        }
        return o.value;
    },
    Y = X(H),
    Q = (e) => async (t, n, r, i) => {
        let a = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
            let t = new (i?.Err ?? e)(o.issues.map((e) => U(e, a, _())));
            throw (F(t, i?.callee), t);
        }
        return o.value;
    },
    ee = Q(H),
    et = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
            a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new h();
        return a.issues.length
            ? { success: !1, error: new (e ?? J)(a.issues.map((e) => U(e, i, _()))) }
            : { success: !0, data: a.value };
    },
    en = et(H),
    er = (e) => async (t, n, r) => {
        let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            a = t._zod.run({ value: n, issues: [] }, i);
        return (
            a instanceof Promise && (a = await a),
            a.issues.length
                ? { success: !1, error: new e(a.issues.map((e) => U(e, i, _()))) }
                : { success: !0, data: a.value }
        );
    },
    ei = er(H),
    ea = /^[cC][^\s-]{8,}$/,
    eo = /^[0-9a-z]+$/,
    eu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    es = /^[0-9a-vA-V]{20}$/,
    el = /^[A-Za-z0-9]{27}$/,
    ec = /^[a-zA-Z0-9_-]{21}$/,
    ed = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    ef =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    eh = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    ep = (e) =>
        e
            ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    em = ep(4),
    e_ = ep(6),
    eg = ep(7),
    ev = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    ey =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    eb =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    eD = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
    ew = eD,
    eC =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function eE() {
    return RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
}
let eA =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ek =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    eB = (e) => {
        let t = O(e ?? ":");
        return RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
    },
    eF =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    ex =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    eT = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    eR = /^[A-Za-z0-9_-]*$/,
    eV =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
    eS = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    eP = /^\+[1-9]\d{6,14}$/,
    eO =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    ez = RegExp(`^${eO}$`);
function eM(e) {
    let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e.precision
        ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function eN(e) {
    return RegExp(`^${eM(e)}$`);
}
function eI(e) {
    let t = eM({ precision: e.precision }),
        n = ["Z"];
    (e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"));
    let r = `${t}(?:${n.join("|")})`;
    return RegExp(`^${eO}T(?:${r})$`);
}
let ej = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
        return RegExp(`^${t}$`);
    },
    eL = /^-?\d+n?$/,
    eZ = /^-?\d+$/,
    e$ = /^-?\d+(?:\.\d+)?$/,
    eU = /^(?:true|false)$/i,
    eW = /^null$/i,
    eG = /^undefined$/i,
    eq = /^[^A-Z]*$/,
    eK = /^[^a-z]*$/,
    eJ = /^[0-9a-fA-F]*$/;
function eH(e, t) {
    return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function eX(e) {
    return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
let eY = /^[0-9a-fA-F]{32}$/,
    eQ = eH(22, "=="),
    e0 = eX(22),
    e1 = /^[0-9a-fA-F]{40}$/,
    e2 = eH(27, "="),
    e3 = eX(27),
    e5 = /^[0-9a-fA-F]{64}$/,
    e4 = eH(43, "="),
    e9 = eX(43),
    e6 = /^[0-9a-fA-F]{96}$/,
    e8 = eH(64, ""),
    e7 = eX(64),
    te = /^[0-9a-fA-F]{128}$/,
    tt = eH(86, "=="),
    tn = eX(86),
    tr = f("$ZodCheck", (e, t) => {
        var n;
        (e._zod ?? (e._zod = {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []));
    }),
    ti = { number: "number", bigint: "bigint", object: "date" },
    ta = f("$ZodCheckLessThan", (e, t) => {
        tr.init(e, t);
        let n = ti[typeof t.value];
        (e._zod.onattach.push((e) => {
            let n = e._zod.bag,
                r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? 1 / 0;
            t.value < r && (t.inclusive ? (n.maximum = t.value) : (n.exclusiveMaximum = t.value));
        }),
            (e._zod.check = (r) => {
                (t.inclusive ? r.value <= t.value : r.value < t.value) ||
                    r.issues.push({
                        origin: n,
                        code: "too_big",
                        maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
                        input: r.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    to = f("$ZodCheckGreaterThan", (e, t) => {
        tr.init(e, t);
        let n = ti[typeof t.value];
        (e._zod.onattach.push((e) => {
            let n = e._zod.bag,
                r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -1 / 0;
            t.value > r && (t.inclusive ? (n.minimum = t.value) : (n.exclusiveMinimum = t.value));
        }),
            (e._zod.check = (r) => {
                (t.inclusive ? r.value >= t.value : r.value > t.value) ||
                    r.issues.push({
                        origin: n,
                        code: "too_small",
                        minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
                        input: r.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tu = f("$ZodCheckMultipleOf", (e, t) => {
        (tr.init(e, t),
            e._zod.onattach.push((e) => {
                var n;
                (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
            }),
            (e._zod.check = (n) => {
                if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
                ("bigint" == typeof n.value
                    ? n.value % t.value === BigInt(0)
                    : 0 ===
                      (function (e, t) {
                          let n = (e.toString().split(".")[1] || "").length,
                              r = t.toString(),
                              i = (r.split(".")[1] || "").length;
                          if (0 === i && /\d?e-\d?/.test(r)) {
                              let e = r.match(/\d?e-(\d?)/);
                              e?.[1] && (i = Number.parseInt(e[1]));
                          }
                          let a = n > i ? n : i;
                          return (
                              (Number.parseInt(e.toFixed(a).replace(".", "")) %
                                  Number.parseInt(t.toFixed(a).replace(".", ""))) /
                              10 ** a
                          );
                      })(n.value, t.value)) ||
                    n.issues.push({
                        origin: typeof n.value,
                        code: "not_multiple_of",
                        divisor: t.value,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    ts = f("$ZodCheckNumberFormat", (e, t) => {
        (tr.init(e, t), (t.format = t.format || "float64"));
        let n = t.format?.includes("int"),
            r = n ? "int" : "number",
            [i, a] = I[t.format];
        (e._zod.onattach.push((e) => {
            let r = e._zod.bag;
            ((r.format = t.format), (r.minimum = i), (r.maximum = a), n && (r.pattern = eZ));
        }),
            (e._zod.check = (o) => {
                let u = o.value;
                if (n) {
                    if (!Number.isInteger(u))
                        return void o.issues.push({
                            expected: r,
                            format: t.format,
                            code: "invalid_type",
                            continue: !1,
                            input: u,
                            inst: e,
                        });
                    if (!Number.isSafeInteger(u))
                        return void (u > 0
                            ? o.issues.push({
                                  input: u,
                                  code: "too_big",
                                  maximum: Number.MAX_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: r,
                                  inclusive: !0,
                                  continue: !t.abort,
                              })
                            : o.issues.push({
                                  input: u,
                                  code: "too_small",
                                  minimum: Number.MIN_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: r,
                                  inclusive: !0,
                                  continue: !t.abort,
                              }));
                }
                (u < i &&
                    o.issues.push({
                        origin: "number",
                        input: u,
                        code: "too_small",
                        minimum: i,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    u > a &&
                        o.issues.push({
                            origin: "number",
                            input: u,
                            code: "too_big",
                            maximum: a,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        }));
            }));
    }),
    tl = f("$ZodCheckBigIntFormat", (e, t) => {
        tr.init(e, t);
        let [n, r] = j[t.format];
        (e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            ((i.format = t.format), (i.minimum = n), (i.maximum = r));
        }),
            (e._zod.check = (i) => {
                let a = i.value;
                (a < n &&
                    i.issues.push({
                        origin: "bigint",
                        input: a,
                        code: "too_small",
                        minimum: n,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    a > r &&
                        i.issues.push({
                            origin: "bigint",
                            input: a,
                            code: "too_big",
                            maximum: r,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        }));
            }));
    }),
    tc = f("$ZodCheckMaxSize", (e, t) => {
        var n;
        (tr.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !D(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.maximum ?? 1 / 0;
                t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
                let r = n.value;
                r.size <= t.maximum ||
                    n.issues.push({
                        origin: W(r),
                        code: "too_big",
                        maximum: t.maximum,
                        inclusive: !0,
                        input: r,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    td = f("$ZodCheckMinSize", (e, t) => {
        var n;
        (tr.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !D(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.minimum ?? -1 / 0;
                t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
                let r = n.value;
                r.size >= t.minimum ||
                    n.issues.push({
                        origin: W(r),
                        code: "too_small",
                        minimum: t.minimum,
                        inclusive: !0,
                        input: r,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tf = f("$ZodCheckSizeEquals", (e, t) => {
        var n;
        (tr.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !D(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                ((n.minimum = t.size), (n.maximum = t.size), (n.size = t.size));
            }),
            (e._zod.check = (n) => {
                let r = n.value,
                    i = r.size;
                if (i === t.size) return;
                let a = i > t.size;
                n.issues.push({
                    origin: W(r),
                    ...(a ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size }),
                    inclusive: !0,
                    exact: !0,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    th = f("$ZodCheckMaxLength", (e, t) => {
        var n;
        (tr.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !D(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.maximum ?? 1 / 0;
                t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
                let r = n.value;
                if (r.length <= t.maximum) return;
                let i = G(r);
                n.issues.push({
                    origin: i,
                    code: "too_big",
                    maximum: t.maximum,
                    inclusive: !0,
                    input: r,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    tp = f("$ZodCheckMinLength", (e, t) => {
        var n;
        (tr.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !D(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.minimum ?? -1 / 0;
                t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
                let r = n.value;
                if (r.length >= t.minimum) return;
                let i = G(r);
                n.issues.push({
                    origin: i,
                    code: "too_small",
                    minimum: t.minimum,
                    inclusive: !0,
                    input: r,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    tm = f("$ZodCheckLengthEquals", (e, t) => {
        var n;
        (tr.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !D(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                ((n.minimum = t.length), (n.maximum = t.length), (n.length = t.length));
            }),
            (e._zod.check = (n) => {
                let r = n.value,
                    i = r.length;
                if (i === t.length) return;
                let a = G(r),
                    o = i > t.length;
                n.issues.push({
                    origin: a,
                    ...(o ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
                    inclusive: !0,
                    exact: !0,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    t_ = f("$ZodCheckStringFormat", (e, t) => {
        var n, r;
        (tr.init(e, t),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                ((n.format = t.format),
                    t.pattern && (n.patterns ?? (n.patterns = new Set()), n.patterns.add(t.pattern)));
            }),
            t.pattern
                ? ((n = e._zod).check ??
                  (n.check = (n) => {
                      ((t.pattern.lastIndex = 0),
                          t.pattern.test(n.value) ||
                              n.issues.push({
                                  origin: "string",
                                  code: "invalid_format",
                                  format: t.format,
                                  input: n.value,
                                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                                  inst: e,
                                  continue: !t.abort,
                              }));
                  }))
                : ((r = e._zod).check ?? (r.check = () => {})));
    }),
    tg = f("$ZodCheckRegex", (e, t) => {
        (t_.init(e, t),
            (e._zod.check = (n) => {
                ((t.pattern.lastIndex = 0),
                    t.pattern.test(n.value) ||
                        n.issues.push({
                            origin: "string",
                            code: "invalid_format",
                            format: "regex",
                            input: n.value,
                            pattern: t.pattern.toString(),
                            inst: e,
                            continue: !t.abort,
                        }));
            }));
    }),
    tv = f("$ZodCheckLowerCase", (e, t) => {
        (t.pattern ?? (t.pattern = eq), t_.init(e, t));
    }),
    ty = f("$ZodCheckUpperCase", (e, t) => {
        (t.pattern ?? (t.pattern = eK), t_.init(e, t));
    }),
    tb = f("$ZodCheckIncludes", (e, t) => {
        tr.init(e, t);
        let n = O(t.includes),
            r = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
        ((t.pattern = r),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r));
            }),
            (e._zod.check = (n) => {
                n.value.includes(t.includes, t.position) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: t.includes,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tD = f("$ZodCheckStartsWith", (e, t) => {
        tr.init(e, t);
        let n = RegExp(`^${O(t.prefix)}.*`);
        (t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                (t.patterns ?? (t.patterns = new Set()), t.patterns.add(n));
            }),
            (e._zod.check = (n) => {
                n.value.startsWith(t.prefix) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: t.prefix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tw = f("$ZodCheckEndsWith", (e, t) => {
        tr.init(e, t);
        let n = RegExp(`.*${O(t.suffix)}$`);
        (t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                (t.patterns ?? (t.patterns = new Set()), t.patterns.add(n));
            }),
            (e._zod.check = (n) => {
                n.value.endsWith(t.suffix) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: t.suffix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    });
function tC(e, t, n) {
    e.issues.length && t.issues.push(...Z(n, e.issues));
}
let tE = f("$ZodCheckProperty", (e, t) => {
        (tr.init(e, t),
            (e._zod.check = (e) => {
                let n = t.schema._zod.run({ value: e.value[t.property], issues: [] }, {});
                if (n instanceof Promise) return n.then((n) => tC(n, e, t.property));
                tC(n, e, t.property);
            }));
    }),
    tA = f("$ZodCheckMimeType", (e, t) => {
        tr.init(e, t);
        let n = new Set(t.mime);
        (e._zod.onattach.push((e) => {
            e._zod.bag.mime = t.mime;
        }),
            (e._zod.check = (r) => {
                n.has(r.value.type) ||
                    r.issues.push({
                        code: "invalid_value",
                        values: t.mime,
                        input: r.value.type,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tk = f("$ZodCheckOverwrite", (e, t) => {
        (tr.init(e, t),
            (e._zod.check = (e) => {
                e.value = t.tx(e.value);
            }));
    });
class tB {
    constructor(e = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = e));
    }
    indented(e) {
        ((this.indent += 1), e(this), (this.indent -= 1));
    }
    write(e) {
        if ("function" == typeof e) {
            (e(this, { execution: "sync" }), e(this, { execution: "async" }));
            return;
        }
        let t = e.split("\n").filter((e) => e),
            n = Math.min(...t.map((e) => e.length - e.trimStart().length));
        for (let e of t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e);
    }
    compile() {
        return Function(...this?.args, [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"));
    }
}
let tF = { major: 4, minor: 3, patch: 6 },
    tx = f("$ZodType", (e, t) => {
        var n;
        (e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = tF));
        let r = [...(e._zod.def.checks ?? [])];
        for (let t of (e._zod.traits.has("$ZodCheck") && r.unshift(e), r)) for (let n of t._zod.onattach) n(e);
        if (0 === r.length)
            ((n = e._zod).deferred ?? (n.deferred = []),
                e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse;
                }));
        else {
            let t = (e, t, n) => {
                    let r,
                        i = L(e);
                    for (let a of t) {
                        if (a._zod.def.when) {
                            if (!a._zod.def.when(e)) continue;
                        } else if (i) continue;
                        let t = e.issues.length,
                            o = a._zod.check(e);
                        if (o instanceof Promise && n?.async === !1) throw new h();
                        if (r || o instanceof Promise)
                            r = (r ?? Promise.resolve()).then(async () => {
                                (await o, e.issues.length !== t && (i || (i = L(e, t))));
                            });
                        else {
                            if (e.issues.length === t) continue;
                            i || (i = L(e, t));
                        }
                    }
                    return r ? r.then(() => e) : e;
                },
                n = (n, i, a) => {
                    if (L(n)) return ((n.aborted = !0), n);
                    let o = t(i, r, a);
                    if (o instanceof Promise) {
                        if (!1 === a.async) throw new h();
                        return o.then((t) => e._zod.parse(t, a));
                    }
                    return e._zod.parse(o, a);
                };
            e._zod.run = (i, a) => {
                if (a.skipChecks) return e._zod.parse(i, a);
                if ("backward" === a.direction) {
                    let t = e._zod.parse({ value: i.value, issues: [] }, { ...a, skipChecks: !0 });
                    return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
                }
                let o = e._zod.parse(i, a);
                if (o instanceof Promise) {
                    if (!1 === a.async) throw new h();
                    return o.then((e) => t(e, r, a));
                }
                return t(o, r, a);
            };
        }
        E(e, "~standard", () => ({
            validate: (t) => {
                try {
                    let n = en(e, t);
                    return n.success ? { value: n.data } : { issues: n.error?.issues };
                } catch (n) {
                    return ei(e, t).then((e) => (e.success ? { value: e.data } : { issues: e.error?.issues }));
                }
            },
            vendor: "zod",
            version: 1,
        }));
    }),
    tT = f("$ZodString", (e, t) => {
        (tx.init(e, t),
            (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? ej(e._zod.bag)),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = String(n.value);
                    } catch (e) {}
                return (
                    "string" == typeof n.value ||
                        n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }),
                    n
                );
            }));
    }),
    tR = f("$ZodStringFormat", (e, t) => {
        (t_.init(e, t), tT.init(e, t));
    }),
    tV = f("$ZodGUID", (e, t) => {
        (t.pattern ?? (t.pattern = eh), tR.init(e, t));
    }),
    tS = f("$ZodUUID", (e, t) => {
        if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
            if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = ep(e));
        } else t.pattern ?? (t.pattern = ep());
        tR.init(e, t);
    }),
    tP = f("$ZodEmail", (e, t) => {
        (t.pattern ?? (t.pattern = ev), tR.init(e, t));
    }),
    tO = f("$ZodURL", (e, t) => {
        (tR.init(e, t),
            (e._zod.check = (n) => {
                try {
                    let r = n.value.trim(),
                        i = new URL(r);
                    (t.hostname &&
                        ((t.hostname.lastIndex = 0),
                        t.hostname.test(i.hostname) ||
                            n.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid hostname",
                                pattern: t.hostname.source,
                                input: n.value,
                                inst: e,
                                continue: !t.abort,
                            })),
                        t.protocol &&
                            ((t.protocol.lastIndex = 0),
                            t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) ||
                                n.issues.push({
                                    code: "invalid_format",
                                    format: "url",
                                    note: "Invalid protocol",
                                    pattern: t.protocol.source,
                                    input: n.value,
                                    inst: e,
                                    continue: !t.abort,
                                })),
                        t.normalize ? (n.value = i.href) : (n.value = r));
                    return;
                } catch (r) {
                    n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            }));
    }),
    tz = f("$ZodEmoji", (e, t) => {
        (t.pattern ?? (t.pattern = eE()), tR.init(e, t));
    }),
    tM = f("$ZodNanoID", (e, t) => {
        (t.pattern ?? (t.pattern = ec), tR.init(e, t));
    }),
    tN = f("$ZodCUID", (e, t) => {
        (t.pattern ?? (t.pattern = ea), tR.init(e, t));
    }),
    tI = f("$ZodCUID2", (e, t) => {
        (t.pattern ?? (t.pattern = eo), tR.init(e, t));
    }),
    tj = f("$ZodULID", (e, t) => {
        (t.pattern ?? (t.pattern = eu), tR.init(e, t));
    }),
    tL = f("$ZodXID", (e, t) => {
        (t.pattern ?? (t.pattern = es), tR.init(e, t));
    }),
    tZ = f("$ZodKSUID", (e, t) => {
        (t.pattern ?? (t.pattern = el), tR.init(e, t));
    }),
    t$ = f("$ZodISODateTime", (e, t) => {
        (t.pattern ?? (t.pattern = eI(t)), tR.init(e, t));
    }),
    tU = f("$ZodISODate", (e, t) => {
        (t.pattern ?? (t.pattern = ez), tR.init(e, t));
    }),
    tW = f("$ZodISOTime", (e, t) => {
        (t.pattern ?? (t.pattern = eN(t)), tR.init(e, t));
    }),
    tG = f("$ZodISODuration", (e, t) => {
        (t.pattern ?? (t.pattern = ed), tR.init(e, t));
    }),
    tq = f("$ZodIPv4", (e, t) => {
        (t.pattern ?? (t.pattern = eA), tR.init(e, t), (e._zod.bag.format = "ipv4"));
    }),
    tK = f("$ZodIPv6", (e, t) => {
        (t.pattern ?? (t.pattern = ek),
            tR.init(e, t),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (n) => {
                try {
                    new URL(`http://[${n.value}]`);
                } catch {
                    n.issues.push({
                        code: "invalid_format",
                        format: "ipv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            }));
    }),
    tJ = f("$ZodMAC", (e, t) => {
        (t.pattern ?? (t.pattern = eB(t.delimiter)), tR.init(e, t), (e._zod.bag.format = "mac"));
    }),
    tH = f("$ZodCIDRv4", (e, t) => {
        (t.pattern ?? (t.pattern = eF), tR.init(e, t));
    }),
    tX = f("$ZodCIDRv6", (e, t) => {
        (t.pattern ?? (t.pattern = ex),
            tR.init(e, t),
            (e._zod.check = (n) => {
                let r = n.value.split("/");
                try {
                    if (2 !== r.length) throw Error();
                    let [e, t] = r;
                    if (!t) throw Error();
                    let n = Number(t);
                    if (`${n}` !== t || n < 0 || n > 128) throw Error();
                    new URL(`http://[${e}]`);
                } catch {
                    n.issues.push({
                        code: "invalid_format",
                        format: "cidrv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            }));
    });
function tY(e) {
    if ("" === e) return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return (atob(e), !0);
    } catch {
        return !1;
    }
}
let tQ = f("$ZodBase64", (e, t) => {
        (t.pattern ?? (t.pattern = eT),
            tR.init(e, t),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (n) => {
                tY(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    t0 = f("$ZodBase64URL", (e, t) => {
        (t.pattern ?? (t.pattern = eR),
            tR.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (n) => {
                !(function (e) {
                    if (!eR.test(e)) return !1;
                    let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                    return tY(t.padEnd(4 * Math.ceil(t.length / 4), "="));
                })(n.value) &&
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    t1 = f("$ZodE164", (e, t) => {
        (t.pattern ?? (t.pattern = eP), tR.init(e, t));
    }),
    t2 = f("$ZodJWT", (e, t) => {
        (tR.init(e, t),
            (e._zod.check = (n) => {
                !(function (e, t = null) {
                    try {
                        let n = e.split(".");
                        if (3 !== n.length) return !1;
                        let [r] = n;
                        if (!r) return !1;
                        let i = JSON.parse(atob(r));
                        if (("typ" in i && i?.typ !== "JWT") || !i.alg || (t && (!("alg" in i) || i.alg !== t)))
                            return !1;
                        return !0;
                    } catch {
                        return !1;
                    }
                })(n.value, t.alg) &&
                    n.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    t3 = f("$ZodCustomStringFormat", (e, t) => {
        (tR.init(e, t),
            (e._zod.check = (n) => {
                t.fn(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: t.format,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    t5 = f("$ZodNumber", (e, t) => {
        (tx.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? e$),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = Number(n.value);
                    } catch (e) {}
                let i = n.value;
                if ("number" == typeof i && !Number.isNaN(i) && Number.isFinite(i)) return n;
                let a =
                    "number" == typeof i
                        ? Number.isNaN(i)
                            ? "NaN"
                            : Number.isFinite(i)
                              ? void 0
                              : "Infinity"
                        : void 0;
                return (
                    n.issues.push({
                        expected: "number",
                        code: "invalid_type",
                        input: i,
                        inst: e,
                        ...(a ? { received: a } : {}),
                    }),
                    n
                );
            }));
    }),
    t4 = f("$ZodNumberFormat", (e, t) => {
        (ts.init(e, t), t5.init(e, t));
    }),
    t9 = f("$ZodBoolean", (e, t) => {
        (tx.init(e, t),
            (e._zod.pattern = eU),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = !!n.value;
                    } catch (e) {}
                let i = n.value;
                return (
                    "boolean" == typeof i ||
                        n.issues.push({ expected: "boolean", code: "invalid_type", input: i, inst: e }),
                    n
                );
            }));
    }),
    t6 = f("$ZodBigInt", (e, t) => {
        (tx.init(e, t),
            (e._zod.pattern = eL),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = BigInt(n.value);
                    } catch (e) {}
                return (
                    "bigint" == typeof n.value ||
                        n.issues.push({ expected: "bigint", code: "invalid_type", input: n.value, inst: e }),
                    n
                );
            }));
    }),
    t8 = f("$ZodBigIntFormat", (e, t) => {
        (tl.init(e, t), t6.init(e, t));
    }),
    t7 = f("$ZodSymbol", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (t, n) => {
                let r = t.value;
                return (
                    "symbol" == typeof r ||
                        t.issues.push({ expected: "symbol", code: "invalid_type", input: r, inst: e }),
                    t
                );
            }));
    }),
    ne = f("$ZodUndefined", (e, t) => {
        (tx.init(e, t),
            (e._zod.pattern = eG),
            (e._zod.values = new Set([void 0])),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            (e._zod.parse = (t, n) => {
                let r = t.value;
                return (
                    void 0 === r || t.issues.push({ expected: "undefined", code: "invalid_type", input: r, inst: e }), t
                );
            }));
    }),
    nt = f("$ZodNull", (e, t) => {
        (tx.init(e, t),
            (e._zod.pattern = eW),
            (e._zod.values = new Set([null])),
            (e._zod.parse = (t, n) => {
                let r = t.value;
                return (null === r || t.issues.push({ expected: "null", code: "invalid_type", input: r, inst: e }), t);
            }));
    }),
    nn = f("$ZodAny", (e, t) => {
        (tx.init(e, t), (e._zod.parse = (e) => e));
    }),
    nr = f("$ZodUnknown", (e, t) => {
        (tx.init(e, t), (e._zod.parse = (e) => e));
    }),
    ni = f("$ZodNever", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (t, n) => (
                t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }),
                t
            )));
    }),
    na = f("$ZodVoid", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (t, n) => {
                let r = t.value;
                return (
                    void 0 === r || t.issues.push({ expected: "void", code: "invalid_type", input: r, inst: e }), t
                );
            }));
    }),
    no = f("$ZodDate", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = new Date(n.value);
                    } catch (e) {}
                let i = n.value,
                    a = i instanceof Date;
                return (
                    (a && !Number.isNaN(i.getTime())) ||
                        n.issues.push({
                            expected: "date",
                            code: "invalid_type",
                            input: i,
                            ...(a ? { received: "Invalid Date" } : {}),
                            inst: e,
                        }),
                    n
                );
            }));
    });
function nu(e, t, n) {
    (e.issues.length && t.issues.push(...Z(n, e.issues)), (t.value[n] = e.value));
}
let ns = f("$ZodArray", (e, t) => {
    (tx.init(e, t),
        (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!Array.isArray(i))
                return (n.issues.push({ expected: "array", code: "invalid_type", input: i, inst: e }), n);
            n.value = Array(i.length);
            let a = [];
            for (let e = 0; e < i.length; e++) {
                let o = i[e],
                    u = t.element._zod.run({ value: o, issues: [] }, r);
                u instanceof Promise ? a.push(u.then((t) => nu(t, n, e))) : nu(u, n, e);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
        }));
});
function nl(e, t, n, r, i) {
    if (e.issues.length) {
        if (i && !(n in r)) return;
        t.issues.push(...Z(n, e.issues));
    }
    void 0 === e.value ? n in r && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function nc(e) {
    var t;
    let n = Object.keys(e.shape);
    for (let t of n)
        if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${t}": expected a Zod schema`);
    let r = Object.keys((t = e.shape)).filter((e) => "optional" === t[e]._zod.optin && "optional" === t[e]._zod.optout);
    return { ...e, keys: n, keySet: new Set(n), numKeys: n.length, optionalKeys: new Set(r) };
}
function nd(e, t, n, r, i, a) {
    let o = [],
        u = i.keySet,
        s = i.catchall._zod,
        l = s.def.type,
        c = "optional" === s.optout;
    for (let i in t) {
        if (u.has(i)) continue;
        if ("never" === l) {
            o.push(i);
            continue;
        }
        let a = s.run({ value: t[i], issues: [] }, r);
        a instanceof Promise ? e.push(a.then((e) => nl(e, n, i, t, c))) : nl(a, n, i, t, c);
    }
    return (o.length && n.issues.push({ code: "unrecognized_keys", keys: o, input: t, inst: a }), e.length)
        ? Promise.all(e).then(() => n)
        : n;
}
let nf = f("$ZodObject", (e, t) => {
        let n;
        tx.init(e, t);
        let r = Object.getOwnPropertyDescriptor(t, "shape");
        if (!r?.get) {
            let e = t.shape;
            Object.defineProperty(t, "shape", {
                get: () => {
                    let n = { ...e };
                    return (Object.defineProperty(t, "shape", { value: n }), n);
                },
            });
        }
        let i = b(() => nc(t));
        E(e._zod, "propValues", () => {
            let e = t.shape,
                n = {};
            for (let t in e) {
                let r = e[t]._zod;
                if (r.values) for (let e of (n[t] ?? (n[t] = new Set()), r.values)) n[t].add(e);
            }
            return n;
        });
        let a = t.catchall;
        e._zod.parse = (t, r) => {
            n ?? (n = i.value);
            let o = t.value;
            if (!x(o)) return (t.issues.push({ expected: "object", code: "invalid_type", input: o, inst: e }), t);
            t.value = {};
            let u = [],
                s = n.shape;
            for (let e of n.keys) {
                let n = s[e],
                    i = "optional" === n._zod.optout,
                    a = n._zod.run({ value: o[e], issues: [] }, r);
                a instanceof Promise ? u.push(a.then((n) => nl(n, t, e, o, i))) : nl(a, t, e, o, i);
            }
            return a ? nd(u, o, t, r, i.value, e) : u.length ? Promise.all(u).then(() => t) : t;
        };
    }),
    nh = f("$ZodObjectJIT", (e, t) => {
        let n, r;
        nf.init(e, t);
        let i = e._zod.parse,
            a = b(() => nc(t)),
            o = !m.jitless,
            u = o && T.value,
            s = t.catchall;
        e._zod.parse = (l, c) => {
            r ?? (r = a.value);
            let d = l.value;
            return x(d)
                ? o && u && c?.async === !1 && !0 !== c.jitless
                    ? (n ||
                          (n = ((e) => {
                              let t = new tB(["shape", "payload", "ctx"]),
                                  n = a.value,
                                  r = (e) => {
                                      let t = B(e);
                                      return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                                  };
                              t.write("const input = payload.value;");
                              let i = Object.create(null),
                                  o = 0;
                              for (let e of n.keys) i[e] = `key_${o++}`;
                              for (let a of (t.write("const newResult = {};"), n.keys)) {
                                  let n = i[a],
                                      o = B(a),
                                      u = e[a],
                                      s = u?._zod?.optout === "optional";
                                  (t.write(`const ${n} = ${r(a)};`),
                                      s
                                          ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
                                          : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `));
                              }
                              (t.write("payload.value = newResult;"), t.write("return payload;"));
                              let u = t.compile();
                              return (t, n) => u(e, t, n);
                          })(t.shape)),
                      (l = n(l, c)),
                      s)
                        ? nd([], d, l, c, r, e)
                        : l
                    : i(l, c)
                : (l.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), l);
        };
    });
function np(e, t, n, r) {
    for (let n of e) if (0 === n.issues.length) return ((t.value = n.value), t);
    let i = e.filter((e) => !L(e));
    return 1 === i.length
        ? ((t.value = i[0].value), i[0])
        : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => U(e, r, _()))),
          }),
          t);
}
let nm = f("$ZodUnion", (e, t) => {
    (tx.init(e, t),
        E(e._zod, "optin", () => (t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0)),
        E(e._zod, "optout", () => (t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
        E(e._zod, "values", () => {
            if (t.options.every((e) => e._zod.values))
                return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
        }),
        E(e._zod, "pattern", () => {
            if (t.options.every((e) => e._zod.pattern)) {
                let e = t.options.map((e) => e._zod.pattern);
                return RegExp(`^(${e.map((e) => w(e.source)).join("|")})$`);
            }
        }));
    let n = 1 === t.options.length,
        r = t.options[0]._zod.run;
    e._zod.parse = (i, a) => {
        if (n) return r(i, a);
        let o = !1,
            u = [];
        for (let e of t.options) {
            let t = e._zod.run({ value: i.value, issues: [] }, a);
            if (t instanceof Promise) (u.push(t), (o = !0));
            else {
                if (0 === t.issues.length) return t;
                u.push(t);
            }
        }
        return o ? Promise.all(u).then((t) => np(t, i, e, a)) : np(u, i, e, a);
    };
});
function n_(e, t, n, r) {
    let i = e.filter((e) => 0 === e.issues.length);
    return (
        1 === i.length
            ? (t.value = i[0].value)
            : 0 === i.length
              ? t.issues.push({
                    code: "invalid_union",
                    input: t.value,
                    inst: n,
                    errors: e.map((e) => e.issues.map((e) => U(e, r, _()))),
                })
              : t.issues.push({ code: "invalid_union", input: t.value, inst: n, errors: [], inclusive: !1 }),
        t
    );
}
let ng = f("$ZodXor", (e, t) => {
        (nm.init(e, t), (t.inclusive = !1));
        let n = 1 === t.options.length,
            r = t.options[0]._zod.run;
        e._zod.parse = (i, a) => {
            if (n) return r(i, a);
            let o = !1,
                u = [];
            for (let e of t.options) {
                let t = e._zod.run({ value: i.value, issues: [] }, a);
                t instanceof Promise ? (u.push(t), (o = !0)) : u.push(t);
            }
            return o ? Promise.all(u).then((t) => n_(t, i, e, a)) : n_(u, i, e, a);
        };
    }),
    nv = f("$ZodDiscriminatedUnion", (e, t) => {
        ((t.inclusive = !1), nm.init(e, t));
        let n = e._zod.parse;
        E(e._zod, "propValues", () => {
            let e = {};
            for (let n of t.options) {
                let r = n._zod.propValues;
                if (!r || 0 === Object.keys(r).length)
                    throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
                for (let [t, n] of Object.entries(r)) for (let r of (e[t] || (e[t] = new Set()), n)) e[t].add(r);
            }
            return e;
        });
        let r = b(() => {
            let e = t.options,
                n = new Map();
            for (let r of e) {
                let e = r._zod.propValues?.[t.discriminator];
                if (!e || 0 === e.size)
                    throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
                for (let t of e) {
                    if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
                    n.set(t, r);
                }
            }
            return n;
        });
        e._zod.parse = (i, a) => {
            let o = i.value;
            if (!x(o)) return (i.issues.push({ code: "invalid_type", expected: "object", input: o, inst: e }), i);
            let u = r.value.get(o?.[t.discriminator]);
            return u
                ? u._zod.run(i, a)
                : t.unionFallback
                  ? n(i, a)
                  : (i.issues.push({
                        code: "invalid_union",
                        errors: [],
                        note: "No matching discriminator",
                        discriminator: t.discriminator,
                        input: o,
                        path: [t.discriminator],
                        inst: e,
                    }),
                    i);
        };
    }),
    ny = f("$ZodIntersection", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (e, n) => {
                let r = e.value,
                    i = t.left._zod.run({ value: r, issues: [] }, n),
                    a = t.right._zod.run({ value: r, issues: [] }, n);
                return i instanceof Promise || a instanceof Promise
                    ? Promise.all([i, a]).then(([t, n]) => nb(e, t, n))
                    : nb(e, i, a);
            }));
    });
function nb(e, t, n) {
    let r,
        i = new Map();
    for (let n of t.issues)
        if ("unrecognized_keys" === n.code)
            for (let e of (r ?? (r = n), n.keys)) (i.has(e) || i.set(e, {}), (i.get(e).l = !0));
        else e.issues.push(n);
    for (let t of n.issues)
        if ("unrecognized_keys" === t.code) for (let e of t.keys) (i.has(e) || i.set(e, {}), (i.get(e).r = !0));
        else e.issues.push(t);
    let a = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
    if ((a.length && r && e.issues.push({ ...r, keys: a }), L(e))) return e;
    let o = (function e(t, n) {
        if (t === n || (t instanceof Date && n instanceof Date && +t == +n)) return { valid: !0, data: t };
        if (R(t) && R(n)) {
            let r = Object.keys(n),
                i = Object.keys(t).filter((e) => -1 !== r.indexOf(e)),
                a = { ...t, ...n };
            for (let r of i) {
                let i = e(t[r], n[r]);
                if (!i.valid) return { valid: !1, mergeErrorPath: [r, ...i.mergeErrorPath] };
                a[r] = i.data;
            }
            return { valid: !0, data: a };
        }
        if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] };
            let r = [];
            for (let i = 0; i < t.length; i++) {
                let a = e(t[i], n[i]);
                if (!a.valid) return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
                r.push(a.data);
            }
            return { valid: !0, data: r };
        }
        return { valid: !1, mergeErrorPath: [] };
    })(t.value, n.value);
    if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
    return ((e.value = o.data), e);
}
let nD = f("$ZodTuple", (e, t) => {
    tx.init(e, t);
    let n = t.items;
    e._zod.parse = (r, i) => {
        let a = r.value;
        if (!Array.isArray(a))
            return (r.issues.push({ input: a, inst: e, expected: "tuple", code: "invalid_type" }), r);
        r.value = [];
        let o = [],
            u = [...n].reverse().findIndex((e) => "optional" !== e._zod.optin),
            s = -1 === u ? 0 : n.length - u;
        if (!t.rest) {
            let t = a.length > n.length,
                i = a.length < s - 1;
            if (t || i)
                return (
                    r.issues.push({
                        ...(t
                            ? { code: "too_big", maximum: n.length, inclusive: !0 }
                            : { code: "too_small", minimum: n.length }),
                        input: a,
                        inst: e,
                        origin: "array",
                    }),
                    r
                );
        }
        let l = -1;
        for (let e of n) {
            if (++l >= a.length && l >= s) continue;
            let t = e._zod.run({ value: a[l], issues: [] }, i);
            t instanceof Promise ? o.push(t.then((e) => nw(e, r, l))) : nw(t, r, l);
        }
        if (t.rest)
            for (let e of a.slice(n.length)) {
                l++;
                let n = t.rest._zod.run({ value: e, issues: [] }, i);
                n instanceof Promise ? o.push(n.then((e) => nw(e, r, l))) : nw(n, r, l);
            }
        return o.length ? Promise.all(o).then(() => r) : r;
    };
});
function nw(e, t, n) {
    (e.issues.length && t.issues.push(...Z(n, e.issues)), (t.value[n] = e.value));
}
let nC = f("$ZodRecord", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (n, r) => {
                let i = n.value;
                if (!R(i)) return (n.issues.push({ expected: "record", code: "invalid_type", input: i, inst: e }), n);
                let a = [],
                    o = t.keyType._zod.values;
                if (o) {
                    let u;
                    n.value = {};
                    let s = new Set();
                    for (let e of o)
                        if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                            s.add("number" == typeof e ? e.toString() : e);
                            let o = t.valueType._zod.run({ value: i[e], issues: [] }, r);
                            o instanceof Promise
                                ? a.push(
                                      o.then((t) => {
                                          (t.issues.length && n.issues.push(...Z(e, t.issues)), (n.value[e] = t.value));
                                      }),
                                  )
                                : (o.issues.length && n.issues.push(...Z(e, o.issues)), (n.value[e] = o.value));
                        }
                    for (let e in i) s.has(e) || (u = u ?? []).push(e);
                    u && u.length > 0 && n.issues.push({ code: "unrecognized_keys", input: i, inst: e, keys: u });
                } else
                    for (let o of ((n.value = {}), Reflect.ownKeys(i))) {
                        if ("__proto__" === o) continue;
                        let u = t.keyType._zod.run({ value: o, issues: [] }, r);
                        if (u instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                        if ("string" == typeof o && e$.test(o) && u.issues.length) {
                            let e = t.keyType._zod.run({ value: Number(o), issues: [] }, r);
                            if (e instanceof Promise)
                                throw Error("Async schemas not supported in object keys currently");
                            0 === e.issues.length && (u = e);
                        }
                        if (u.issues.length) {
                            "loose" === t.mode
                                ? (n.value[o] = i[o])
                                : n.issues.push({
                                      code: "invalid_key",
                                      origin: "record",
                                      issues: u.issues.map((e) => U(e, r, _())),
                                      input: o,
                                      path: [o],
                                      inst: e,
                                  });
                            continue;
                        }
                        let s = t.valueType._zod.run({ value: i[o], issues: [] }, r);
                        s instanceof Promise
                            ? a.push(
                                  s.then((e) => {
                                      (e.issues.length && n.issues.push(...Z(o, e.issues)),
                                          (n.value[u.value] = e.value));
                                  }),
                              )
                            : (s.issues.length && n.issues.push(...Z(o, s.issues)), (n.value[u.value] = s.value));
                    }
                return a.length ? Promise.all(a).then(() => n) : n;
            }));
    }),
    nE = f("$ZodMap", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (n, r) => {
                let i = n.value;
                if (!(i instanceof Map))
                    return (n.issues.push({ expected: "map", code: "invalid_type", input: i, inst: e }), n);
                let a = [];
                for (let [o, u] of ((n.value = new Map()), i)) {
                    let s = t.keyType._zod.run({ value: o, issues: [] }, r),
                        l = t.valueType._zod.run({ value: u, issues: [] }, r);
                    s instanceof Promise || l instanceof Promise
                        ? a.push(
                              Promise.all([s, l]).then(([t, a]) => {
                                  nA(t, a, n, o, i, e, r);
                              }),
                          )
                        : nA(s, l, n, o, i, e, r);
                }
                return a.length ? Promise.all(a).then(() => n) : n;
            }));
    });
function nA(e, t, n, r, i, a, o) {
    (e.issues.length &&
        (S.has(typeof r)
            ? n.issues.push(...Z(r, e.issues))
            : n.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: i,
                  inst: a,
                  issues: e.issues.map((e) => U(e, o, _())),
              })),
        t.issues.length &&
            (S.has(typeof r)
                ? n.issues.push(...Z(r, t.issues))
                : n.issues.push({
                      origin: "map",
                      code: "invalid_element",
                      input: i,
                      inst: a,
                      key: r,
                      issues: t.issues.map((e) => U(e, o, _())),
                  })),
        n.value.set(e.value, t.value));
}
let nk = f("$ZodSet", (e, t) => {
    (tx.init(e, t),
        (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!(i instanceof Set))
                return (n.issues.push({ input: i, inst: e, expected: "set", code: "invalid_type" }), n);
            let a = [];
            for (let e of ((n.value = new Set()), i)) {
                let i = t.valueType._zod.run({ value: e, issues: [] }, r);
                i instanceof Promise ? a.push(i.then((e) => nB(e, n))) : nB(i, n);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
        }));
});
function nB(e, t) {
    (e.issues.length && t.issues.push(...e.issues), t.value.add(e.value));
}
let nF = f("$ZodEnum", (e, t) => {
        tx.init(e, t);
        let n = g(t.entries),
            r = new Set(n);
        ((e._zod.values = r),
            (e._zod.pattern = RegExp(
                `^(${n
                    .filter((e) => S.has(typeof e))
                    .map((e) => ("string" == typeof e ? O(e) : e.toString()))
                    .join("|")})$`,
            )),
            (e._zod.parse = (t, i) => {
                let a = t.value;
                return (r.has(a) || t.issues.push({ code: "invalid_value", values: n, input: a, inst: e }), t);
            }));
    }),
    nx = f("$ZodLiteral", (e, t) => {
        if ((tx.init(e, t), 0 === t.values.length)) throw Error("Cannot create literal schema with no valid values");
        let n = new Set(t.values);
        ((e._zod.values = n),
            (e._zod.pattern = RegExp(
                `^(${t.values.map((e) => ("string" == typeof e ? O(e) : e ? O(e.toString()) : String(e))).join("|")})$`,
            )),
            (e._zod.parse = (r, i) => {
                let a = r.value;
                return (n.has(a) || r.issues.push({ code: "invalid_value", values: t.values, input: a, inst: e }), r);
            }));
    }),
    nT = f("$ZodFile", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (t, n) => {
                let r = t.value;
                return (
                    r instanceof File || t.issues.push({ expected: "file", code: "invalid_type", input: r, inst: e }), t
                );
            }));
    }),
    nR = f("$ZodTransform", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (n, r) => {
                if ("backward" === r.direction) throw new p(e.constructor.name);
                let i = t.transform(n.value, n);
                if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => ((n.value = e), n));
                if (i instanceof Promise) throw new h();
                return ((n.value = i), n);
            }));
    });
function nV(e, t) {
    return e.issues.length && void 0 === t ? { issues: [], value: void 0 } : e;
}
let nS = f("$ZodOptional", (e, t) => {
        (tx.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            E(e._zod, "values", () =>
                t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0,
            ),
            E(e._zod, "pattern", () => {
                let e = t.innerType._zod.pattern;
                return e ? RegExp(`^(${w(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
                if ("optional" === t.innerType._zod.optin) {
                    let r = t.innerType._zod.run(e, n);
                    return r instanceof Promise ? r.then((t) => nV(t, e.value)) : nV(r, e.value);
                }
                return void 0 === e.value ? e : t.innerType._zod.run(e, n);
            }));
    }),
    nP = f("$ZodExactOptional", (e, t) => {
        (nS.init(e, t),
            E(e._zod, "values", () => t.innerType._zod.values),
            E(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
    }),
    nO = f("$ZodNullable", (e, t) => {
        (tx.init(e, t),
            E(e._zod, "optin", () => t.innerType._zod.optin),
            E(e._zod, "optout", () => t.innerType._zod.optout),
            E(e._zod, "pattern", () => {
                let e = t.innerType._zod.pattern;
                return e ? RegExp(`^(${w(e.source)}|null)$`) : void 0;
            }),
            E(e._zod, "values", () => (t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0)),
            (e._zod.parse = (e, n) => (null === e.value ? e : t.innerType._zod.run(e, n))));
    }),
    nz = f("$ZodDefault", (e, t) => {
        (tx.init(e, t),
            (e._zod.optin = "optional"),
            E(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n);
                if (void 0 === e.value) return ((e.value = t.defaultValue), e);
                let r = t.innerType._zod.run(e, n);
                return r instanceof Promise ? r.then((e) => nM(e, t)) : nM(r, t);
            }));
    });
function nM(e, t) {
    return (void 0 === e.value && (e.value = t.defaultValue), e);
}
let nN = f("$ZodPrefault", (e, t) => {
        (tx.init(e, t),
            (e._zod.optin = "optional"),
            E(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => (
                "backward" === n.direction || (void 0 === e.value && (e.value = t.defaultValue)),
                t.innerType._zod.run(e, n)
            )));
    }),
    nI = f("$ZodNonOptional", (e, t) => {
        (tx.init(e, t),
            E(e._zod, "values", () => {
                let e = t.innerType._zod.values;
                return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, r) => {
                let i = t.innerType._zod.run(n, r);
                return i instanceof Promise ? i.then((t) => nj(t, e)) : nj(i, e);
            }));
    });
function nj(e, t) {
    return (
        e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
        e
    );
}
let nL = f("$ZodSuccess", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) throw new p("ZodSuccess");
                let r = t.innerType._zod.run(e, n);
                return r instanceof Promise
                    ? r.then((t) => ((e.value = 0 === t.issues.length), e))
                    : ((e.value = 0 === r.issues.length), e);
            }));
    }),
    nZ = f("$ZodCatch", (e, t) => {
        (tx.init(e, t),
            E(e._zod, "optin", () => t.innerType._zod.optin),
            E(e._zod, "optout", () => t.innerType._zod.optout),
            E(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n);
                let r = t.innerType._zod.run(e, n);
                return r instanceof Promise
                    ? r.then(
                          (r) => (
                              (e.value = r.value),
                              r.issues.length &&
                                  ((e.value = t.catchValue({
                                      ...e,
                                      error: { issues: r.issues.map((e) => U(e, n, _())) },
                                      input: e.value,
                                  })),
                                  (e.issues = [])),
                              e
                          ),
                      )
                    : ((e.value = r.value),
                      r.issues.length &&
                          ((e.value = t.catchValue({
                              ...e,
                              error: { issues: r.issues.map((e) => U(e, n, _())) },
                              input: e.value,
                          })),
                          (e.issues = [])),
                      e);
            }));
    }),
    n$ = f("$ZodNaN", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (t, n) => (
                ("number" == typeof t.value && Number.isNaN(t.value)) ||
                    t.issues.push({ input: t.value, inst: e, expected: "nan", code: "invalid_type" }),
                t
            )));
    }),
    nU = f("$ZodPipe", (e, t) => {
        (tx.init(e, t),
            E(e._zod, "values", () => t.in._zod.values),
            E(e._zod, "optin", () => t.in._zod.optin),
            E(e._zod, "optout", () => t.out._zod.optout),
            E(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) {
                    let r = t.out._zod.run(e, n);
                    return r instanceof Promise ? r.then((e) => nW(e, t.in, n)) : nW(r, t.in, n);
                }
                let r = t.in._zod.run(e, n);
                return r instanceof Promise ? r.then((e) => nW(e, t.out, n)) : nW(r, t.out, n);
            }));
    });
function nW(e, t, n) {
    return e.issues.length ? ((e.aborted = !0), e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
let nG = f("$ZodCodec", (e, t) => {
    (tx.init(e, t),
        E(e._zod, "values", () => t.in._zod.values),
        E(e._zod, "optin", () => t.in._zod.optin),
        E(e._zod, "optout", () => t.out._zod.optout),
        E(e._zod, "propValues", () => t.in._zod.propValues),
        (e._zod.parse = (e, n) => {
            if ("forward" === (n.direction || "forward")) {
                let r = t.in._zod.run(e, n);
                return r instanceof Promise ? r.then((e) => nq(e, t, n)) : nq(r, t, n);
            }
            {
                let r = t.out._zod.run(e, n);
                return r instanceof Promise ? r.then((e) => nq(e, t, n)) : nq(r, t, n);
            }
        }));
});
function nq(e, t, n) {
    if (e.issues.length) return ((e.aborted = !0), e);
    if ("forward" === (n.direction || "forward")) {
        let r = t.transform(e.value, e);
        return r instanceof Promise ? r.then((r) => nK(e, r, t.out, n)) : nK(e, r, t.out, n);
    }
    {
        let r = t.reverseTransform(e.value, e);
        return r instanceof Promise ? r.then((r) => nK(e, r, t.in, n)) : nK(e, r, t.in, n);
    }
}
function nK(e, t, n, r) {
    return e.issues.length ? ((e.aborted = !0), e) : n._zod.run({ value: t, issues: e.issues }, r);
}
let nJ = f("$ZodReadonly", (e, t) => {
    (tx.init(e, t),
        E(e._zod, "propValues", () => t.innerType._zod.propValues),
        E(e._zod, "values", () => t.innerType._zod.values),
        E(e._zod, "optin", () => t.innerType?._zod?.optin),
        E(e._zod, "optout", () => t.innerType?._zod?.optout),
        (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(nH) : nH(r);
        }));
});
function nH(e) {
    return ((e.value = Object.freeze(e.value)), e);
}
let nX = f("$ZodTemplateLiteral", (e, t) => {
        tx.init(e, t);
        let n = [];
        for (let e of t.parts)
            if ("object" == typeof e && null !== e) {
                if (!e._zod.pattern)
                    throw Error(`Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`);
                let t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
                if (!t) throw Error(`Invalid template literal part: ${e._zod.traits}`);
                let r = +!!t.startsWith("^"),
                    i = t.endsWith("$") ? t.length - 1 : t.length;
                n.push(t.slice(r, i));
            } else if (null === e || P.has(typeof e)) n.push(O(`${e}`));
            else throw Error(`Invalid template literal part: ${e}`);
        ((e._zod.pattern = RegExp(`^${n.join("")}$`)),
            (e._zod.parse = (n, r) => (
                "string" != typeof n.value
                    ? n.issues.push({ input: n.value, inst: e, expected: "string", code: "invalid_type" })
                    : ((e._zod.pattern.lastIndex = 0),
                      e._zod.pattern.test(n.value) ||
                          n.issues.push({
                              input: n.value,
                              inst: e,
                              code: "invalid_format",
                              format: t.format ?? "template_literal",
                              pattern: e._zod.pattern.source,
                          })),
                n
            )));
    }),
    nY = f(
        "$ZodFunction",
        (e, t) => (
            tx.init(e, t),
            (e._def = t),
            (e._zod.def = t),
            (e.implement = (t) => {
                if ("function" != typeof t) throw Error("implement() must be called with a function");
                return function (...n) {
                    let r = Reflect.apply(t, this, e._def.input ? Y(e._def.input, n) : n);
                    return e._def.output ? Y(e._def.output, r) : r;
                };
            }),
            (e.implementAsync = (t) => {
                if ("function" != typeof t) throw Error("implementAsync() must be called with a function");
                return async function (...n) {
                    let r = e._def.input ? await ee(e._def.input, n) : n,
                        i = await Reflect.apply(t, this, r);
                    return e._def.output ? await ee(e._def.output, i) : i;
                };
            }),
            (e._zod.parse = (t, n) => (
                "function" != typeof t.value
                    ? t.issues.push({ code: "invalid_type", expected: "function", input: t.value, inst: e })
                    : e._def.output && "promise" === e._def.output._zod.def.type
                      ? (t.value = e.implementAsync(t.value))
                      : (t.value = e.implement(t.value)),
                t
            )),
            (e.input = (...t) => {
                let n = e.constructor;
                return new n(
                    Array.isArray(t[0])
                        ? {
                              type: "function",
                              input: new nD({ type: "tuple", items: t[0], rest: t[1] }),
                              output: e._def.output,
                          }
                        : { type: "function", input: t[0], output: e._def.output },
                );
            }),
            (e.output = (t) => new e.constructor({ type: "function", input: e._def.input, output: t })),
            e
        ),
    ),
    nQ = f("$ZodPromise", (e, t) => {
        (tx.init(e, t),
            (e._zod.parse = (e, n) =>
                Promise.resolve(e.value).then((e) => t.innerType._zod.run({ value: e, issues: [] }, n))));
    }),
    n0 = f("$ZodLazy", (e, t) => {
        (tx.init(e, t),
            E(e._zod, "innerType", () => t.getter()),
            E(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
            E(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
            E(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
            E(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
            (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n)));
    }),
    n1 = f("$ZodCustom", (e, t) => {
        (tr.init(e, t),
            tx.init(e, t),
            (e._zod.parse = (e, t) => e),
            (e._zod.check = (n) => {
                let r = n.value,
                    i = t.fn(r);
                if (i instanceof Promise) return i.then((t) => n2(t, n, r, e));
                n2(i, n, r, e);
            }));
    });
function n2(e, t, n, r) {
    if (!e) {
        let e = { code: "custom", input: n, inst: r, path: [...(r._zod.def.path ?? [])], continue: !r._zod.def.abort };
        (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(q(e)));
    }
}
(Symbol("ZodOutput"), Symbol("ZodInput"));
(o = globalThis).__zod_globalRegistry ??
    (o.__zod_globalRegistry = new (class e {
        constructor() {
            ((this._map = new WeakMap()), (this._idmap = new Map()));
        }
        add(e, ...t) {
            let n = t[0];
            return (this._map.set(e, n), n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e), this);
        }
        clear() {
            return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
        }
        remove(e) {
            let t = this._map.get(e);
            return (t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this);
        }
        get(e) {
            let t = e._zod.parent;
            if (t) {
                let n = { ...(this.get(t) ?? {}) };
                delete n.id;
                let r = { ...n, ...this._map.get(e) };
                return Object.keys(r).length ? r : void 0;
            }
            return this._map.get(e);
        }
        has(e) {
            return this._map.has(e);
        }
    })());
let n3 = globalThis.__zod_globalRegistry;
function n5(e, t) {
    return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...M(t) });
}
function n4(e, t) {
    return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...M(t) });
}
function n9(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...M(t) });
}
function n6(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...M(t) });
}
function n8(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...M(t) });
}
function n7(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...M(t) });
}
function re(e, t) {
    return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...M(t) });
}
function rt(e, t) {
    return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...M(t) });
}
function rn(e, t) {
    return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...M(t) });
}
function rr(e, t) {
    return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...M(t) });
}
function ri(e, t) {
    return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...M(t) });
}
function ra(e, t) {
    return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...M(t) });
}
function ro(e, t) {
    return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...M(t) });
}
function ru(e, t) {
    return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...M(t) });
}
function rs(e, t) {
    return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...M(t) });
}
function rl(e, t) {
    return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...M(t) });
}
function rc(e, t) {
    return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...M(t) });
}
function rd(e, t) {
    return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...M(t) });
}
function rf(e, t) {
    return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...M(t) });
}
function rh(e, t) {
    return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...M(t) });
}
function rp(e, t) {
    return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...M(t) });
}
function rm(e, t) {
    return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...M(t) });
}
function r_(e, t) {
    return new ta({ check: "less_than", ...M(t), value: e, inclusive: !1 });
}
function rg(e, t) {
    return new ta({ check: "less_than", ...M(t), value: e, inclusive: !0 });
}
function rv(e, t) {
    return new to({ check: "greater_than", ...M(t), value: e, inclusive: !1 });
}
function ry(e, t) {
    return new to({ check: "greater_than", ...M(t), value: e, inclusive: !0 });
}
function rb(e) {
    return rv(0, e);
}
function rD(e) {
    return r_(0, e);
}
function rw(e) {
    return rg(0, e);
}
function rC(e) {
    return ry(0, e);
}
function rE(e, t) {
    return new tu({ check: "multiple_of", ...M(t), value: e });
}
function rA(e, t) {
    return new tc({ check: "max_size", ...M(t), maximum: e });
}
function rk(e, t) {
    return new td({ check: "min_size", ...M(t), minimum: e });
}
function rB(e, t) {
    return new tf({ check: "size_equals", ...M(t), size: e });
}
function rF(e, t) {
    return new th({ check: "max_length", ...M(t), maximum: e });
}
function rx(e, t) {
    return new tp({ check: "min_length", ...M(t), minimum: e });
}
function rT(e, t) {
    return new tm({ check: "length_equals", ...M(t), length: e });
}
function rR(e, t) {
    return new tg({ check: "string_format", format: "regex", ...M(t), pattern: e });
}
function rV(e) {
    return new tv({ check: "string_format", format: "lowercase", ...M(e) });
}
function rS(e) {
    return new ty({ check: "string_format", format: "uppercase", ...M(e) });
}
function rP(e, t) {
    return new tb({ check: "string_format", format: "includes", ...M(t), includes: e });
}
function rO(e, t) {
    return new tD({ check: "string_format", format: "starts_with", ...M(t), prefix: e });
}
function rz(e, t) {
    return new tw({ check: "string_format", format: "ends_with", ...M(t), suffix: e });
}
function rM(e, t, n) {
    return new tE({ check: "property", property: e, schema: t, ...M(n) });
}
function rN(e, t) {
    return new tA({ check: "mime_type", mime: e, ...M(t) });
}
function rI(e) {
    return new tk({ check: "overwrite", tx: e });
}
function rj(e) {
    return rI((t) => t.normalize(e));
}
function rL() {
    return rI((e) => e.trim());
}
function rZ() {
    return rI((e) => e.toLowerCase());
}
function r$() {
    return rI((e) => e.toUpperCase());
}
function rU() {
    return rI((e) =>
        e
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, ""),
    );
}
function rW(e, t, n, r = {}) {
    let i = M(r),
        a = {
            ...M(r),
            check: "string_format",
            type: "string",
            format: t,
            fn: "function" == typeof n ? n : (e) => n.test(e),
            ...i,
        };
    return (n instanceof RegExp && (a.pattern = n), new e(a));
}
function rG(e) {
    let t = e?.target ?? "draft-2020-12";
    return (
        "draft-4" === t && (t = "draft-04"),
        "draft-7" === t && (t = "draft-07"),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? n3,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0,
        }
    );
}
function rq(e, t, n = { path: [], schemaPath: [] }) {
    var r;
    let i = e._zod.def,
        a = t.seen.get(e);
    if (a) return (a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema);
    let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
    t.seen.set(e, o);
    let u = e._zod.toJSONSchema?.();
    if (u) o.schema = u;
    else {
        let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
        else {
            let n = o.schema,
                a = t.processors[i.type];
            if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
            a(e, t, n, r);
        }
        let a = e._zod.parent;
        a && (o.ref || (o.ref = a), rq(a, t, r), (t.seen.get(a).isParent = !0));
    }
    let s = t.metadataRegistry.get(e);
    return (
        s && Object.assign(o.schema, s),
        "input" === t.io &&
            (function e(t, n) {
                let r = n ?? { seen: new Set() };
                if (r.seen.has(t)) return !1;
                r.seen.add(t);
                let i = t._zod.def;
                if ("transform" === i.type) return !0;
                if ("array" === i.type) return e(i.element, r);
                if ("set" === i.type) return e(i.valueType, r);
                if ("lazy" === i.type) return e(i.getter(), r);
                if (
                    "promise" === i.type ||
                    "optional" === i.type ||
                    "nonoptional" === i.type ||
                    "nullable" === i.type ||
                    "readonly" === i.type ||
                    "default" === i.type ||
                    "prefault" === i.type
                )
                    return e(i.innerType, r);
                if ("intersection" === i.type) return e(i.left, r) || e(i.right, r);
                if ("record" === i.type || "map" === i.type) return e(i.keyType, r) || e(i.valueType, r);
                if ("pipe" === i.type) return e(i.in, r) || e(i.out, r);
                if ("object" === i.type) {
                    for (let t in i.shape) if (e(i.shape[t], r)) return !0;
                    return !1;
                }
                if ("union" === i.type) {
                    for (let t of i.options) if (e(t, r)) return !0;
                    return !1;
                }
                if ("tuple" === i.type) {
                    for (let t of i.items) if (e(t, r)) return !0;
                    if (i.rest && e(i.rest, r)) return !0;
                }
                return !1;
            })(e) &&
            (delete o.schema.examples, delete o.schema.default),
        "input" === t.io && o.schema._prefault && ((r = o.schema).default ?? (r.default = o.schema._prefault)),
        delete o.schema._prefault,
        t.seen.get(e).schema
    );
}
function rK(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let r = new Map();
    for (let t of e.seen.entries()) {
        let n = e.metadataRegistry.get(t[0])?.id;
        if (n) {
            let e = r.get(n);
            if (e && e !== t[0])
                throw Error(
                    `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
            r.set(n, t[0]);
        }
    }
    let i = (t) => {
        if (t[1].schema.$ref) return;
        let r = t[1],
            { ref: i, defId: a } = ((t) => {
                let r = "draft-2020-12" === e.target ? "$defs" : "definitions";
                if (e.external) {
                    let n = e.external.registry.get(t[0])?.id,
                        i = e.external.uri ?? ((e) => e);
                    if (n) return { ref: i(n) };
                    let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                    return ((t[1].defId = a), { defId: a, ref: `${i("__shared")}#/${r}/${a}` });
                }
                if (t[1] === n) return { ref: "#" };
                let i = `#/${r}/`,
                    a = t[1].schema.id ?? `__schema${e.counter++}`;
                return { defId: a, ref: i + a };
            })(t);
        ((r.def = { ...r.schema }), a && (r.defId = a));
        let o = r.schema;
        for (let e in o) delete o[e];
        o.$ref = i;
    };
    if ("throw" === e.cycles)
        for (let t of e.seen.entries()) {
            let e = t[1];
            if (e.cycle)
                throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
    for (let n of e.seen.entries()) {
        let r = n[1];
        if (t === n[0]) {
            i(n);
            continue;
        }
        if (e.external) {
            let r = e.external.registry.get(n[0])?.id;
            if (t !== n[0] && r) {
                i(n);
                continue;
            }
        }
        if (e.metadataRegistry.get(n[0])?.id || r.cycle || (r.count > 1 && "ref" === e.reused)) {
            i(n);
            continue;
        }
    }
}
function rJ(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let r = (t) => {
        let n = e.seen.get(t);
        if (null === n.ref) return;
        let i = n.def ?? n.schema,
            a = { ...i },
            o = n.ref;
        if (((n.ref = null), o)) {
            r(o);
            let n = e.seen.get(o),
                u = n.schema;
            if (
                (u.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
                    ? ((i.allOf = i.allOf ?? []), i.allOf.push(u))
                    : Object.assign(i, u),
                Object.assign(i, a),
                t._zod.parent === o)
            )
                for (let e in i) "$ref" !== e && "allOf" !== e && (e in a || delete i[e]);
            if (u.$ref && n.def)
                for (let e in i)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in n.def &&
                        JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
                        delete i[e];
        }
        let u = t._zod.parent;
        if (u && u !== o) {
            r(u);
            let t = e.seen.get(u);
            if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
                for (let e in i)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in t.def &&
                        JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
                        delete i[e];
        }
        e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
    };
    for (let t of [...e.seen.entries()].reverse()) r(t[0]);
    let i = {};
    if (
        ("draft-2020-12" === e.target
            ? (i.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (i.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (i.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
        e.external?.uri)
    ) {
        let n = e.external.registry.get(t)?.id;
        if (!n) throw Error("Schema is missing an `id` property");
        i.$id = e.external.uri(n);
    }
    Object.assign(i, n.def ?? n.schema);
    let a = e.external?.defs ?? {};
    for (let t of e.seen.entries()) {
        let e = t[1];
        e.def && e.defId && (a[e.defId] = e.def);
    }
    e.external || (Object.keys(a).length > 0 && ("draft-2020-12" === e.target ? (i.$defs = a) : (i.definitions = a)));
    try {
        let n = JSON.parse(JSON.stringify(i));
        return (
            Object.defineProperty(n, "~standard", {
                value: {
                    ...t["~standard"],
                    jsonSchema: { input: rH(t, "input", e.processors), output: rH(t, "output", e.processors) },
                },
                enumerable: !1,
                writable: !1,
            }),
            n
        );
    } catch (e) {
        throw Error("Error converting schema to JSON.");
    }
}
let rH =
        (e, t, n = {}) =>
        (r) => {
            let { libraryOptions: i, target: a } = r ?? {},
                o = rG({ ...(i ?? {}), target: a, io: t, processors: n });
            return (rq(e, o), rK(o, e), rJ(o, e));
        },
    rX = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    rY = (e, t, n, r) => {
        let i = e._zod.def,
            a = !1 === i.inclusive,
            o = i.options.map((e, n) => rq(e, t, { ...r, path: [...r.path, a ? "oneOf" : "anyOf", n] }));
        a ? (n.oneOf = o) : (n.anyOf = o);
    },
    rQ = (e, t, n, r) => {
        let i = e._zod.def;
        (rq(i.innerType, t, r), (t.seen.get(e).ref = i.innerType));
    },
    r0 = f("ZodISODateTime", (e, t) => {
        (t$.init(e, t), iv.init(e, t));
    });
function r1(e) {
    return new r0({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...M(e),
    });
}
let r2 = f("ZodISODate", (e, t) => {
    (tU.init(e, t), iv.init(e, t));
});
function r3(e) {
    return new r2({ type: "string", format: "date", check: "string_format", ...M(e) });
}
let r5 = f("ZodISOTime", (e, t) => {
    (tW.init(e, t), iv.init(e, t));
});
function r4(e) {
    return new r5({ type: "string", format: "time", check: "string_format", precision: null, ...M(e) });
}
let r9 = f("ZodISODuration", (e, t) => {
    (tG.init(e, t), iv.init(e, t));
});
function r6(e) {
    return new r9({ type: "string", format: "duration", check: "string_format", ...M(e) });
}
let r8 = (e, t) => {
    (J.init(e, t),
        (e.name = "ZodError"),
        Object.defineProperties(e, {
            format: {
                value: (t) =>
                    (function (e, t = (e) => e.message) {
                        let n = { _errors: [] },
                            r = (e) => {
                                for (let i of e.issues)
                                    if ("invalid_union" === i.code && i.errors.length)
                                        i.errors.map((e) => r({ issues: e }));
                                    else if ("invalid_key" === i.code) r({ issues: i.issues });
                                    else if ("invalid_element" === i.code) r({ issues: i.issues });
                                    else if (0 === i.path.length) n._errors.push(t(i));
                                    else {
                                        let e = n,
                                            r = 0;
                                        for (; r < i.path.length;) {
                                            let n = i.path[r];
                                            (r === i.path.length - 1
                                                ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                                                : (e[n] = e[n] || { _errors: [] }),
                                                (e = e[n]),
                                                r++);
                                        }
                                    }
                            };
                        return (r(e), n);
                    })(e, t),
            },
            flatten: {
                value: (t) =>
                    (function (e, t = (e) => e.message) {
                        let n = {},
                            r = [];
                        for (let i of e.issues)
                            i.path.length > 0
                                ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
                                : r.push(t(i));
                        return { formErrors: r, fieldErrors: n };
                    })(e, t),
            },
            addIssue: {
                value: (t) => {
                    (e.issues.push(t), (e.message = JSON.stringify(e.issues, y, 2)));
                },
            },
            addIssues: {
                value: (t) => {
                    (e.issues.push(...t), (e.message = JSON.stringify(e.issues, y, 2)));
                },
            },
            isEmpty: { get: () => 0 === e.issues.length },
        }));
};
f("ZodError", r8);
let r7 = f("ZodError", r8, { Parent: Error }),
    ie = X(r7),
    it = Q(r7),
    ir = et(r7),
    ii = er(r7),
    ia = (e, t, n) => {
        let r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return X(r7)(e, t, r);
    },
    io = (e, t, n) => X(r7)(e, t, n),
    iu = async (e, t, n) => {
        let r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return Q(r7)(e, t, r);
    },
    is = async (e, t, n) => Q(r7)(e, t, n),
    il = (e, t, n) => {
        let r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return et(r7)(e, t, r);
    },
    ic = (e, t, n) => et(r7)(e, t, n),
    id = async (e, t, n) => {
        let r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return er(r7)(e, t, r);
    },
    ih = async (e, t, n) => er(r7)(e, t, n),
    ip = f(
        "ZodType",
        (e, t) => (
            tx.init(e, t),
            Object.assign(e["~standard"], { jsonSchema: { input: rH(e, "input"), output: rH(e, "output") } }),
            (e.toJSONSchema = (
                (e, t = {}) =>
                (n) => {
                    let r = rG({ ...n, processors: t });
                    return (rq(e, r), rK(r, e), rJ(r, e));
                }
            )(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", { value: t }),
            (e.check = (...n) =>
                e.clone(
                    k(t, {
                        checks: [
                            ...(t.checks ?? []),
                            ...n.map((e) =>
                                "function" == typeof e
                                    ? { _zod: { check: e, def: { check: "custom" }, onattach: [] } }
                                    : e,
                            ),
                        ],
                    }),
                    { parent: !0 },
                )),
            (e.with = e.check),
            (e.clone = (t, n) => z(e, t, n)),
            (e.brand = () => e),
            (e.register = (t, n) => (t.add(e, n), e)),
            (e.parse = (t, n) => ie(e, t, n, { callee: e.parse })),
            (e.safeParse = (t, n) => ir(e, t, n)),
            (e.parseAsync = async (t, n) => it(e, t, n, { callee: e.parseAsync })),
            (e.safeParseAsync = async (t, n) => ii(e, t, n)),
            (e.spa = e.safeParseAsync),
            (e.encode = (t, n) => ia(e, t, n)),
            (e.decode = (t, n) => io(e, t, n)),
            (e.encodeAsync = async (t, n) => iu(e, t, n)),
            (e.decodeAsync = async (t, n) => is(e, t, n)),
            (e.safeEncode = (t, n) => il(e, t, n)),
            (e.safeDecode = (t, n) => ic(e, t, n)),
            (e.safeEncodeAsync = async (t, n) => id(e, t, n)),
            (e.safeDecodeAsync = async (t, n) => ih(e, t, n)),
            (e.refine = (t, n) => e.check(oL(t, n))),
            (e.superRefine = (t) => e.check(oZ(t))),
            (e.overwrite = (t) => e.check(rI(t))),
            (e.optional = () => oo(e)),
            (e.exactOptional = () => os(e)),
            (e.nullable = () => oc(e)),
            (e.nullish = () => oo(oc(e))),
            (e.nonoptional = (t) => og(e, t)),
            (e.array = () => az(e)),
            (e.or = (t) => a$([e, t])),
            (e.and = (t) => aJ(e, t)),
            (e.transform = (t) => oA(e, oi(t))),
            (e.default = (t) => oh(e, t)),
            (e.prefault = (t) => om(e, t)),
            (e.catch = (t) => oD(e, t)),
            (e.pipe = (t) => oA(e, t)),
            (e.readonly = () => ox(e)),
            (e.describe = (t) => {
                let n = e.clone();
                return (n3.add(n, { description: t }), n);
            }),
            Object.defineProperty(e, "description", { get: () => n3.get(e)?.description, configurable: !0 }),
            (e.meta = (...t) => {
                if (0 === t.length) return n3.get(e);
                let n = e.clone();
                return (n3.add(n, t[0]), n);
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (t) => t(e)),
            e
        ),
    ),
    im = f("_ZodString", (e, t) => {
        (tT.init(e, t),
            ip.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
                ((e, t, n, r) => {
                    n.type = "string";
                    let { minimum: i, maximum: a, format: o, patterns: u, contentEncoding: s } = e._zod.bag;
                    if (
                        ("number" == typeof i && (n.minLength = i),
                        "number" == typeof a && (n.maxLength = a),
                        o &&
                            ((n.format = rX[o] ?? o),
                            "" === n.format && delete n.format,
                            "time" === o && delete n.format),
                        s && (n.contentEncoding = s),
                        u && u.size > 0)
                    ) {
                        let e = [...u];
                        1 === e.length
                            ? (n.pattern = e[0].source)
                            : e.length > 1 &&
                              (n.allOf = [
                                  ...e.map((e) => ({
                                      ...("draft-07" === t.target ||
                                      "draft-04" === t.target ||
                                      "openapi-3.0" === t.target
                                          ? { type: "string" }
                                          : {}),
                                      pattern: e.source,
                                  })),
                              ]);
                    }
                })(e, t, n, 0)));
        let n = e._zod.bag;
        ((e.format = n.format ?? null),
            (e.minLength = n.minimum ?? null),
            (e.maxLength = n.maximum ?? null),
            (e.regex = (...t) => e.check(rR(...t))),
            (e.includes = (...t) => e.check(rP(...t))),
            (e.startsWith = (...t) => e.check(rO(...t))),
            (e.endsWith = (...t) => e.check(rz(...t))),
            (e.min = (...t) => e.check(rx(...t))),
            (e.max = (...t) => e.check(rF(...t))),
            (e.length = (...t) => e.check(rT(...t))),
            (e.nonempty = (...t) => e.check(rx(1, ...t))),
            (e.lowercase = (t) => e.check(rV(t))),
            (e.uppercase = (t) => e.check(rS(t))),
            (e.trim = () => e.check(rL())),
            (e.normalize = (...t) => e.check(rj(...t))),
            (e.toLowerCase = () => e.check(rZ())),
            (e.toUpperCase = () => e.check(r$())),
            (e.slugify = () => e.check(rU())));
    }),
    i_ = f("ZodString", (e, t) => {
        (tT.init(e, t),
            im.init(e, t),
            (e.email = (t) => e.check(n5(iy, t))),
            (e.url = (t) => e.check(re(iF, t))),
            (e.jwt = (t) => e.check(rm(i6, t))),
            (e.emoji = (t) => e.check(rt(iR, t))),
            (e.guid = (t) => e.check(n4(iD, t))),
            (e.uuid = (t) => e.check(n9(iC, t))),
            (e.uuidv4 = (t) => e.check(n6(iC, t))),
            (e.uuidv6 = (t) => e.check(n8(iC, t))),
            (e.uuidv7 = (t) => e.check(n7(iC, t))),
            (e.nanoid = (t) => e.check(rn(iS, t))),
            (e.guid = (t) => e.check(n4(iD, t))),
            (e.cuid = (t) => e.check(rr(iO, t))),
            (e.cuid2 = (t) => e.check(ri(iM, t))),
            (e.ulid = (t) => e.check(ra(iI, t))),
            (e.base64 = (t) => e.check(rf(i1, t))),
            (e.base64url = (t) => e.check(rh(i3, t))),
            (e.xid = (t) => e.check(ro(iL, t))),
            (e.ksuid = (t) => e.check(ru(i$, t))),
            (e.ipv4 = (t) => e.check(rs(iW, t))),
            (e.ipv6 = (t) => e.check(rl(iJ, t))),
            (e.cidrv4 = (t) => e.check(rc(iX, t))),
            (e.cidrv6 = (t) => e.check(rd(iQ, t))),
            (e.e164 = (t) => e.check(rp(i4, t))),
            (e.datetime = (t) => e.check(r1(t))),
            (e.date = (t) => e.check(r3(t))),
            (e.time = (t) => e.check(r4(t))),
            (e.duration = (t) => e.check(r6(t))));
    });
function ig(e) {
    return new i_({ type: "string", ...M(e) });
}
let iv = f("ZodStringFormat", (e, t) => {
        (tR.init(e, t), im.init(e, t));
    }),
    iy = f("ZodEmail", (e, t) => {
        (tP.init(e, t), iv.init(e, t));
    });
function ib(e) {
    return n5(iy, e);
}
let iD = f("ZodGUID", (e, t) => {
    (tV.init(e, t), iv.init(e, t));
});
function iw(e) {
    return n4(iD, e);
}
let iC = f("ZodUUID", (e, t) => {
    (tS.init(e, t), iv.init(e, t));
});
function iE(e) {
    return n9(iC, e);
}
function iA(e) {
    return n6(iC, e);
}
function ik(e) {
    return n8(iC, e);
}
function iB(e) {
    return n7(iC, e);
}
let iF = f("ZodURL", (e, t) => {
    (tO.init(e, t), iv.init(e, t));
});
function ix(e) {
    return re(iF, e);
}
function iT(e) {
    return re(iF, { protocol: /^https?$/, hostname: eS, ...M(e) });
}
let iR = f("ZodEmoji", (e, t) => {
    (tz.init(e, t), iv.init(e, t));
});
function iV(e) {
    return rt(iR, e);
}
let iS = f("ZodNanoID", (e, t) => {
    (tM.init(e, t), iv.init(e, t));
});
function iP(e) {
    return rn(iS, e);
}
let iO = f("ZodCUID", (e, t) => {
    (tN.init(e, t), iv.init(e, t));
});
function iz(e) {
    return rr(iO, e);
}
let iM = f("ZodCUID2", (e, t) => {
    (tI.init(e, t), iv.init(e, t));
});
function iN(e) {
    return ri(iM, e);
}
let iI = f("ZodULID", (e, t) => {
    (tj.init(e, t), iv.init(e, t));
});
function ij(e) {
    return ra(iI, e);
}
let iL = f("ZodXID", (e, t) => {
    (tL.init(e, t), iv.init(e, t));
});
function iZ(e) {
    return ro(iL, e);
}
let i$ = f("ZodKSUID", (e, t) => {
    (tZ.init(e, t), iv.init(e, t));
});
function iU(e) {
    return ru(i$, e);
}
let iW = f("ZodIPv4", (e, t) => {
    (tq.init(e, t), iv.init(e, t));
});
function iG(e) {
    return rs(iW, e);
}
let iq = f("ZodMAC", (e, t) => {
    (tJ.init(e, t), iv.init(e, t));
});
function iK(e) {
    return new iq({ type: "string", format: "mac", check: "string_format", abort: !1, ...M(e) });
}
let iJ = f("ZodIPv6", (e, t) => {
    (tK.init(e, t), iv.init(e, t));
});
function iH(e) {
    return rl(iJ, e);
}
let iX = f("ZodCIDRv4", (e, t) => {
    (tH.init(e, t), iv.init(e, t));
});
function iY(e) {
    return rc(iX, e);
}
let iQ = f("ZodCIDRv6", (e, t) => {
    (tX.init(e, t), iv.init(e, t));
});
function i0(e) {
    return rd(iQ, e);
}
let i1 = f("ZodBase64", (e, t) => {
    (tQ.init(e, t), iv.init(e, t));
});
function i2(e) {
    return rf(i1, e);
}
let i3 = f("ZodBase64URL", (e, t) => {
    (t0.init(e, t), iv.init(e, t));
});
function i5(e) {
    return rh(i3, e);
}
let i4 = f("ZodE164", (e, t) => {
    (t1.init(e, t), iv.init(e, t));
});
function i9(e) {
    return rp(i4, e);
}
let i6 = f("ZodJWT", (e, t) => {
    (t2.init(e, t), iv.init(e, t));
});
function i8(e) {
    return rm(i6, e);
}
let i7 = f("ZodCustomStringFormat", (e, t) => {
    (t3.init(e, t), iv.init(e, t));
});
function ae(e, t, n = {}) {
    return rW(i7, e, t, n);
}
function at(e) {
    return rW(i7, "hostname", eV, e);
}
function an(e) {
    return rW(i7, "hex", eJ, e);
}
function ar(e, t) {
    let n = t?.enc ?? "hex",
        r = `${e}_${n}`,
        i = s[r];
    if (!i) throw Error(`Unrecognized hash format: ${r}`);
    return rW(i7, r, i, t);
}
let ai = f("ZodNumber", (e, t) => {
    (t5.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let {
                    minimum: i,
                    maximum: a,
                    format: o,
                    multipleOf: u,
                    exclusiveMaximum: s,
                    exclusiveMinimum: l,
                } = e._zod.bag;
                ("string" == typeof o && o.includes("int") ? (n.type = "integer") : (n.type = "number"),
                    "number" == typeof l &&
                        ("draft-04" === t.target || "openapi-3.0" === t.target
                            ? ((n.minimum = l), (n.exclusiveMinimum = !0))
                            : (n.exclusiveMinimum = l)),
                    "number" == typeof i &&
                        ((n.minimum = i),
                        "number" == typeof l &&
                            "draft-04" !== t.target &&
                            (l >= i ? delete n.minimum : delete n.exclusiveMinimum)),
                    "number" == typeof s &&
                        ("draft-04" === t.target || "openapi-3.0" === t.target
                            ? ((n.maximum = s), (n.exclusiveMaximum = !0))
                            : (n.exclusiveMaximum = s)),
                    "number" == typeof a &&
                        ((n.maximum = a),
                        "number" == typeof s &&
                            "draft-04" !== t.target &&
                            (s <= a ? delete n.maximum : delete n.exclusiveMaximum)),
                    "number" == typeof u && (n.multipleOf = u));
            })(e, t, n, 0)),
        (e.gt = (t, n) => e.check(rv(t, n))),
        (e.gte = (t, n) => e.check(ry(t, n))),
        (e.min = (t, n) => e.check(ry(t, n))),
        (e.lt = (t, n) => e.check(r_(t, n))),
        (e.lte = (t, n) => e.check(rg(t, n))),
        (e.max = (t, n) => e.check(rg(t, n))),
        (e.int = (t) => e.check(au(t))),
        (e.safe = (t) => e.check(au(t))),
        (e.positive = (t) => e.check(rv(0, t))),
        (e.nonnegative = (t) => e.check(ry(0, t))),
        (e.negative = (t) => e.check(r_(0, t))),
        (e.nonpositive = (t) => e.check(rg(0, t))),
        (e.multipleOf = (t, n) => e.check(rE(t, n))),
        (e.step = (t, n) => e.check(rE(t, n))),
        (e.finite = () => e));
    let n = e._zod.bag;
    ((e.minValue = Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
        (e.maxValue = Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
        (e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = n.format ?? null));
});
function aa(e) {
    return new ai({ type: "number", checks: [], ...M(e) });
}
let ao = f("ZodNumberFormat", (e, t) => {
    (t4.init(e, t), ai.init(e, t));
});
function au(e) {
    return new ao({ type: "number", check: "number_format", abort: !1, format: "safeint", ...M(e) });
}
function as(e) {
    return new ao({ type: "number", check: "number_format", abort: !1, format: "float32", ...M(e) });
}
function al(e) {
    return new ao({ type: "number", check: "number_format", abort: !1, format: "float64", ...M(e) });
}
function ac(e) {
    return new ao({ type: "number", check: "number_format", abort: !1, format: "int32", ...M(e) });
}
function ad(e) {
    return new ao({ type: "number", check: "number_format", abort: !1, format: "uint32", ...M(e) });
}
let af = f("ZodBoolean", (e, t) => {
    (t9.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
        }));
});
function ah(e) {
    return new af({ type: "boolean", ...M(e) });
}
let ap = f("ZodBigInt", (e, t) => {
    (t6.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("BigInt cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.gte = (t, n) => e.check(ry(t, n))),
        (e.min = (t, n) => e.check(ry(t, n))),
        (e.gt = (t, n) => e.check(rv(t, n))),
        (e.gte = (t, n) => e.check(ry(t, n))),
        (e.min = (t, n) => e.check(ry(t, n))),
        (e.lt = (t, n) => e.check(r_(t, n))),
        (e.lte = (t, n) => e.check(rg(t, n))),
        (e.max = (t, n) => e.check(rg(t, n))),
        (e.positive = (t) => e.check(rv(BigInt(0), t))),
        (e.negative = (t) => e.check(r_(BigInt(0), t))),
        (e.nonpositive = (t) => e.check(rg(BigInt(0), t))),
        (e.nonnegative = (t) => e.check(ry(BigInt(0), t))),
        (e.multipleOf = (t, n) => e.check(rE(t, n))));
    let n = e._zod.bag;
    ((e.minValue = n.minimum ?? null), (e.maxValue = n.maximum ?? null), (e.format = n.format ?? null));
});
function am(e) {
    return new ap({ type: "bigint", ...M(e) });
}
let a_ = f("ZodBigIntFormat", (e, t) => {
    (t8.init(e, t), ap.init(e, t));
});
function ag(e) {
    return new a_({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...M(e) });
}
function av(e) {
    return new a_({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...M(e) });
}
let ay = f("ZodSymbol", (e, t) => {
    (t7.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Symbols cannot be represented in JSON Schema");
            })(0, e, 0, 0)));
});
function ab(e) {
    return new ay({ type: "symbol", ...M(e) });
}
let aD = f("ZodUndefined", (e, t) => {
    (ne.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Undefined cannot be represented in JSON Schema");
            })(0, e, 0, 0)));
});
function aw(e) {
    return new aD({ type: "undefined", ...M(e) });
}
let aC = f("ZodNull", (e, t) => {
    (nt.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            "openapi-3.0" === e.target
                ? ((t.type = "string"), (t.nullable = !0), (t.enum = [null]))
                : (t.type = "null");
        }));
});
function aE(e) {
    return new aC({ type: "null", ...M(e) });
}
let aA = f("ZodAny", (e, t) => {
    (nn.init(e, t), ip.init(e, t), (e._zod.processJSONSchema = (e, t, n) => {}));
});
function ak() {
    return new aA({ type: "any" });
}
let aB = f("ZodUnknown", (e, t) => {
    (nr.init(e, t), ip.init(e, t), (e._zod.processJSONSchema = (e, t, n) => {}));
});
function aF() {
    return new aB({ type: "unknown" });
}
let ax = f("ZodNever", (e, t) => {
    (ni.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.not = {};
        }));
});
function aT(e) {
    return new ax({ type: "never", ...M(e) });
}
let aR = f("ZodVoid", (e, t) => {
    (na.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Void cannot be represented in JSON Schema");
            })(0, e, 0, 0)));
});
function aV(e) {
    return new aR({ type: "void", ...M(e) });
}
let aS = f("ZodDate", (e, t) => {
    (no.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Date cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (t, n) => e.check(ry(t, n))),
        (e.max = (t, n) => e.check(rg(t, n))));
    let n = e._zod.bag;
    ((e.minDate = n.minimum ? new Date(n.minimum) : null), (e.maxDate = n.maximum ? new Date(n.maximum) : null));
});
function aP(e) {
    return new aS({ type: "date", ...M(e) });
}
let aO = f("ZodArray", (e, t) => {
    (ns.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i = e._zod.def,
                    { minimum: a, maximum: o } = e._zod.bag;
                ("number" == typeof a && (n.minItems = a),
                    "number" == typeof o && (n.maxItems = o),
                    (n.type = "array"),
                    (n.items = rq(i.element, t, { ...r, path: [...r.path, "items"] })));
            })(e, t, n, r)),
        (e.element = t.element),
        (e.min = (t, n) => e.check(rx(t, n))),
        (e.nonempty = (t) => e.check(rx(1, t))),
        (e.max = (t, n) => e.check(rF(t, n))),
        (e.length = (t, n) => e.check(rT(t, n))),
        (e.unwrap = () => e.element));
});
function az(e, t) {
    return new aO({ type: "array", element: e, ...M(t) });
}
function aM(e) {
    return a6(Object.keys(e._zod.def.shape));
}
let aN = f("ZodObject", (e, t) => {
    (nh.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i = e._zod.def;
                ((n.type = "object"), (n.properties = {}));
                let a = i.shape;
                for (let e in a) n.properties[e] = rq(a[e], t, { ...r, path: [...r.path, "properties", e] });
                let o = new Set(
                    [...new Set(Object.keys(a))].filter((e) => {
                        let n = i.shape[e]._zod;
                        return "input" === t.io ? void 0 === n.optin : void 0 === n.optout;
                    }),
                );
                (o.size > 0 && (n.required = Array.from(o)),
                    i.catchall?._zod.def.type === "never"
                        ? (n.additionalProperties = !1)
                        : i.catchall
                          ? i.catchall &&
                            (n.additionalProperties = rq(i.catchall, t, {
                                ...r,
                                path: [...r.path, "additionalProperties"],
                            }))
                          : "output" === t.io && (n.additionalProperties = !1));
            })(e, t, n, r)),
        E(e, "shape", () => t.shape),
        (e.keyof = () => a6(Object.keys(e._zod.def.shape))),
        (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: aF() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: aF() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: aT() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (t) =>
            (function (e, t) {
                if (!R(t)) throw Error("Invalid input to extend: expected a plain object");
                let n = e._zod.def.checks;
                if (n && n.length > 0) {
                    let n = e._zod.def.shape;
                    for (let e in t)
                        if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
                            throw Error(
                                "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                            );
                }
                let r = k(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t };
                        return (A(this, "shape", n), n);
                    },
                });
                return z(e, r);
            })(e, t)),
        (e.safeExtend = (t) =>
            (function (e, t) {
                if (!R(t)) throw Error("Invalid input to safeExtend: expected a plain object");
                let n = k(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t };
                        return (A(this, "shape", n), n);
                    },
                });
                return z(e, n);
            })(e, t)),
        (e.merge = (t) => {
            let n;
            return (
                (n = k(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
                        return (A(this, "shape", n), n);
                    },
                    get catchall() {
                        return t._zod.def.catchall;
                    },
                    checks: [],
                })),
                z(e, n)
            );
        }),
        (e.pick = (t) =>
            (function (e, t) {
                let n = e._zod.def,
                    r = n.checks;
                if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
                let i = k(e._zod.def, {
                    get shape() {
                        let e = {};
                        for (let r in t) {
                            if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
                            t[r] && (e[r] = n.shape[r]);
                        }
                        return (A(this, "shape", e), e);
                    },
                    checks: [],
                });
                return z(e, i);
            })(e, t)),
        (e.omit = (t) =>
            (function (e, t) {
                let n = e._zod.def,
                    r = n.checks;
                if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
                let i = k(e._zod.def, {
                    get shape() {
                        let r = { ...e._zod.def.shape };
                        for (let e in t) {
                            if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
                            t[e] && delete r[e];
                        }
                        return (A(this, "shape", r), r);
                    },
                    checks: [],
                });
                return z(e, i);
            })(e, t)),
        (e.partial = (...t) =>
            (function (e, t, n) {
                let r = t._zod.def.checks;
                if (r && r.length > 0)
                    throw Error(".partial() cannot be used on object schemas containing refinements");
                let i = k(t._zod.def, {
                    get shape() {
                        let r = t._zod.def.shape,
                            i = { ...r };
                        if (n)
                            for (let t in n) {
                                if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
                                n[t] && (i[t] = e ? new e({ type: "optional", innerType: r[t] }) : r[t]);
                            }
                        else for (let t in r) i[t] = e ? new e({ type: "optional", innerType: r[t] }) : r[t];
                        return (A(this, "shape", i), i);
                    },
                    checks: [],
                });
                return z(t, i);
            })(oa, e, t[0])),
        (e.required = (...t) => {
            var n;
            let r;
            return (
                (n = t[0]),
                (r = k(e._zod.def, {
                    get shape() {
                        let t = e._zod.def.shape,
                            r = { ...t };
                        if (n)
                            for (let e in n) {
                                if (!(e in r)) throw Error(`Unrecognized key: "${e}"`);
                                n[e] && (r[e] = new o_({ type: "nonoptional", innerType: t[e] }));
                            }
                        else for (let e in t) r[e] = new o_({ type: "nonoptional", innerType: t[e] });
                        return (A(this, "shape", r), r);
                    },
                })),
                z(e, r)
            );
        }));
});
function aI(e, t) {
    return new aN({ type: "object", shape: e ?? {}, ...M(t) });
}
function aj(e, t) {
    return new aN({ type: "object", shape: e, catchall: aT(), ...M(t) });
}
function aL(e, t) {
    return new aN({ type: "object", shape: e, catchall: aF(), ...M(t) });
}
let aZ = f("ZodUnion", (e, t) => {
    (nm.init(e, t), ip.init(e, t), (e._zod.processJSONSchema = (t, n, r) => rY(e, t, n, r)), (e.options = t.options));
});
function a$(e, t) {
    return new aZ({ type: "union", options: e, ...M(t) });
}
let aU = f("ZodXor", (e, t) => {
    (aZ.init(e, t), ng.init(e, t), (e._zod.processJSONSchema = (t, n, r) => rY(e, t, n, r)), (e.options = t.options));
});
function aW(e, t) {
    return new aU({ type: "union", options: e, inclusive: !1, ...M(t) });
}
let aG = f("ZodDiscriminatedUnion", (e, t) => {
    (aZ.init(e, t), nv.init(e, t));
});
function aq(e, t, n) {
    return new aG({ type: "union", options: t, discriminator: e, ...M(n) });
}
let aK = f("ZodIntersection", (e, t) => {
    (ny.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i, a, o, u;
            return (
                (a = rq((i = e._zod.def).left, t, { ...r, path: [...r.path, "allOf", 0] })),
                (o = rq(i.right, t, { ...r, path: [...r.path, "allOf", 1] })),
                void (n.allOf = [
                    ...((u = (e) => "allOf" in e && 1 === Object.keys(e).length)(a) ? a.allOf : [a]),
                    ...(u(o) ? o.allOf : [o]),
                ])
            );
        }));
});
function aJ(e, t) {
    return new aK({ type: "intersection", left: e, right: t });
}
let aH = f("ZodTuple", (e, t) => {
    (nD.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i = e._zod.def;
                n.type = "array";
                let a = "draft-2020-12" === t.target ? "prefixItems" : "items",
                    o = "draft-2020-12" === t.target || "openapi-3.0" === t.target ? "items" : "additionalItems",
                    u = i.items.map((e, n) => rq(e, t, { ...r, path: [...r.path, a, n] })),
                    s = i.rest
                        ? rq(i.rest, t, {
                              ...r,
                              path: [...r.path, o, ...("openapi-3.0" === t.target ? [i.items.length] : [])],
                          })
                        : null;
                "draft-2020-12" === t.target
                    ? ((n.prefixItems = u), s && (n.items = s))
                    : "openapi-3.0" === t.target
                      ? ((n.items = { anyOf: u }),
                        s && n.items.anyOf.push(s),
                        (n.minItems = u.length),
                        s || (n.maxItems = u.length))
                      : ((n.items = u), s && (n.additionalItems = s));
                let { minimum: l, maximum: c } = e._zod.bag;
                ("number" == typeof l && (n.minItems = l), "number" == typeof c && (n.maxItems = c));
            })(e, t, n, r)),
        (e.rest = (t) => e.clone({ ...e._zod.def, rest: t })));
});
function aX(e, t, n) {
    let r = t instanceof tx,
        i = r ? n : t;
    return new aH({ type: "tuple", items: e, rest: r ? t : null, ...M(i) });
}
let aY = f("ZodRecord", (e, t) => {
    (nC.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i = e._zod.def;
                n.type = "object";
                let a = i.keyType,
                    o = a._zod.bag,
                    u = o?.patterns;
                if ("loose" === i.mode && u && u.size > 0) {
                    let e = rq(i.valueType, t, { ...r, path: [...r.path, "patternProperties", "*"] });
                    for (let t of ((n.patternProperties = {}), u)) n.patternProperties[t.source] = e;
                } else
                    (("draft-07" === t.target || "draft-2020-12" === t.target) &&
                        (n.propertyNames = rq(i.keyType, t, { ...r, path: [...r.path, "propertyNames"] })),
                        (n.additionalProperties = rq(i.valueType, t, {
                            ...r,
                            path: [...r.path, "additionalProperties"],
                        })));
                let s = a._zod.values;
                if (s) {
                    let e = [...s].filter((e) => "string" == typeof e || "number" == typeof e);
                    e.length > 0 && (n.required = e);
                }
            })(e, t, n, r)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType));
});
function aQ(e, t, n) {
    return new aY({ type: "record", keyType: e, valueType: t, ...M(n) });
}
function a0(e, t, n) {
    let r = z(e);
    return ((r._zod.values = void 0), new aY({ type: "record", keyType: r, valueType: t, ...M(n) }));
}
function a1(e, t, n) {
    return new aY({ type: "record", keyType: e, valueType: t, mode: "loose", ...M(n) });
}
let a2 = f("ZodMap", (e, t) => {
    (nE.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Map cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType),
        (e.min = (...t) => e.check(rk(...t))),
        (e.nonempty = (t) => e.check(rk(1, t))),
        (e.max = (...t) => e.check(rA(...t))),
        (e.size = (...t) => e.check(rB(...t))));
});
function a3(e, t, n) {
    return new a2({ type: "map", keyType: e, valueType: t, ...M(n) });
}
let a5 = f("ZodSet", (e, t) => {
    (nk.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Set cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (...t) => e.check(rk(...t))),
        (e.nonempty = (t) => e.check(rk(1, t))),
        (e.max = (...t) => e.check(rA(...t))),
        (e.size = (...t) => e.check(rB(...t))));
});
function a4(e, t) {
    return new a5({ type: "set", valueType: e, ...M(t) });
}
let a9 = f("ZodEnum", (e, t) => {
    (nF.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            ((i = g(e._zod.def.entries)).every((e) => "number" == typeof e) && (n.type = "number"),
                i.every((e) => "string" == typeof e) && (n.type = "string"),
                (n.enum = i));
        }),
        (e.enum = t.entries),
        (e.options = Object.values(t.entries)));
    let n = new Set(Object.keys(t.entries));
    ((e.extract = (e, r) => {
        let i = {};
        for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
        return new a9({ ...t, checks: [], ...M(r), entries: i });
    }),
        (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
                if (n.has(t)) delete i[t];
                else throw Error(`Key ${t} not found in enum`);
            return new a9({ ...t, checks: [], ...M(r), entries: i });
        }));
});
function a6(e, t) {
    return new a9({ type: "enum", entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e, ...M(t) });
}
function a8(e, t) {
    return new a9({ type: "enum", entries: e, ...M(t) });
}
let a7 = f("ZodLiteral", (e, t) => {
    (nx.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i = e._zod.def,
                    a = [];
                for (let e of i.values)
                    if (void 0 === e) {
                        if ("throw" === t.unrepresentable)
                            throw Error("Literal `undefined` cannot be represented in JSON Schema");
                    } else if ("bigint" == typeof e)
                        if ("throw" === t.unrepresentable)
                            throw Error("BigInt literals cannot be represented in JSON Schema");
                        else a.push(Number(e));
                    else a.push(e);
                if (0 === a.length);
                else if (1 === a.length) {
                    let e = a[0];
                    ((n.type = null === e ? "null" : typeof e),
                        "draft-04" === t.target || "openapi-3.0" === t.target ? (n.enum = [e]) : (n.const = e));
                } else
                    (a.every((e) => "number" == typeof e) && (n.type = "number"),
                        a.every((e) => "string" == typeof e) && (n.type = "string"),
                        a.every((e) => "boolean" == typeof e) && (n.type = "boolean"),
                        a.every((e) => null === e) && (n.type = "null"),
                        (n.enum = a));
            })(e, t, n, 0)),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, "value", {
            get() {
                if (t.values.length > 1)
                    throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
                return t.values[0];
            },
        }));
});
function oe(e, t) {
    return new a7({ type: "literal", values: Array.isArray(e) ? e : [e], ...M(t) });
}
let ot = f("ZodFile", (e, t) => {
    (nT.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i = { type: "string", format: "binary", contentEncoding: "binary" },
                    { minimum: a, maximum: o, mime: u } = e._zod.bag;
                (void 0 !== a && (i.minLength = a),
                    void 0 !== o && (i.maxLength = o),
                    u
                        ? 1 === u.length
                            ? ((i.contentMediaType = u[0]), Object.assign(n, i))
                            : (Object.assign(n, i), (n.anyOf = u.map((e) => ({ contentMediaType: e }))))
                        : Object.assign(n, i));
            })(e, 0, n, 0)),
        (e.min = (t, n) => e.check(rk(t, n))),
        (e.max = (t, n) => e.check(rA(t, n))),
        (e.mime = (t, n) => e.check(rN(Array.isArray(t) ? t : [t], n))));
});
function on(e) {
    return new ot({ type: "file", ...M(e) });
}
let or = f("ZodTransform", (e, t) => {
    (nR.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Transforms cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e._zod.parse = (n, r) => {
            if ("backward" === r.direction) throw new p(e.constructor.name);
            n.addIssue = (r) => {
                "string" == typeof r
                    ? n.issues.push(q(r, n.value, t))
                    : (r.fatal && (r.continue = !1),
                      r.code ?? (r.code = "custom"),
                      r.input ?? (r.input = n.value),
                      r.inst ?? (r.inst = e),
                      n.issues.push(q(r)));
            };
            let i = t.transform(n.value, n);
            return i instanceof Promise ? i.then((e) => ((n.value = e), n)) : ((n.value = i), n);
        }));
});
function oi(e) {
    return new or({ type: "transform", transform: e });
}
let oa = f("ZodOptional", (e, t) => {
    (nS.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => rQ(e, t, n, r)),
        (e.unwrap = () => e._zod.def.innerType));
});
function oo(e) {
    return new oa({ type: "optional", innerType: e });
}
let ou = f("ZodExactOptional", (e, t) => {
    (nP.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => rQ(e, t, n, r)),
        (e.unwrap = () => e._zod.def.innerType));
});
function os(e) {
    return new ou({ type: "optional", innerType: e });
}
let ol = f("ZodNullable", (e, t) => {
    (nO.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i, a, o;
            return (
                (a = rq((i = e._zod.def).innerType, t, r)),
                (o = t.seen.get(e)),
                void ("openapi-3.0" === t.target
                    ? ((o.ref = i.innerType), (n.nullable = !0))
                    : (n.anyOf = [a, { type: "null" }]))
            );
        }),
        (e.unwrap = () => e._zod.def.innerType));
});
function oc(e) {
    return new ol({ type: "nullable", innerType: e });
}
function od(e) {
    return oo(oc(e));
}
let of = f("ZodDefault", (e, t) => {
    (nz.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (rq((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType),
                (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
        }),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap));
});
function oh(e, t) {
    return new of({
        type: "default",
        innerType: e,
        get defaultValue() {
            return "function" == typeof t ? t() : V(t);
        },
    });
}
let op = f("ZodPrefault", (e, t) => {
    (nN.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (rq((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType),
                "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
        }),
        (e.unwrap = () => e._zod.def.innerType));
});
function om(e, t) {
    return new op({
        type: "prefault",
        innerType: e,
        get defaultValue() {
            return "function" == typeof t ? t() : V(t);
        },
    });
}
let o_ = f("ZodNonOptional", (e, t) => {
    (nI.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (rq((i = e._zod.def).innerType, t, r), (t.seen.get(e).ref = i.innerType));
        }),
        (e.unwrap = () => e._zod.def.innerType));
});
function og(e, t) {
    return new o_({ type: "nonoptional", innerType: e, ...M(t) });
}
let ov = f("ZodSuccess", (e, t) => {
    (nL.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
        }),
        (e.unwrap = () => e._zod.def.innerType));
});
function oy(e) {
    return new ov({ type: "success", innerType: e });
}
let ob = f("ZodCatch", (e, t) => {
    (nZ.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i,
                    a = e._zod.def;
                (rq(a.innerType, t, r), (t.seen.get(e).ref = a.innerType));
                try {
                    i = a.catchValue(void 0);
                } catch {
                    throw Error("Dynamic catch values are not supported in JSON Schema");
                }
                n.default = i;
            })(e, t, n, r)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap));
});
function oD(e, t) {
    return new ob({ type: "catch", innerType: e, catchValue: "function" == typeof t ? t : () => t });
}
let ow = f("ZodNaN", (e, t) => {
    (n$.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("NaN cannot be represented in JSON Schema");
            })(0, e, 0, 0)));
});
function oC(e) {
    return new ow({ type: "nan", ...M(e) });
}
let oE = f("ZodPipe", (e, t) => {
    (nU.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i, a;
            return (
                (i = e._zod.def),
                void (rq((a = "input" === t.io ? ("transform" === i.in._zod.def.type ? i.out : i.in) : i.out), t, r),
                (t.seen.get(e).ref = a))
            );
        }),
        (e.in = t.in),
        (e.out = t.out));
});
function oA(e, t) {
    return new oE({ type: "pipe", in: e, out: t });
}
let ok = f("ZodCodec", (e, t) => {
    (oE.init(e, t), nG.init(e, t));
});
function oB(e, t, n) {
    return new ok({ type: "pipe", in: e, out: t, transform: n.decode, reverseTransform: n.encode });
}
let oF = f("ZodReadonly", (e, t) => {
    (nJ.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (rq((i = e._zod.def).innerType, t, r), (t.seen.get(e).ref = i.innerType), (n.readOnly = !0));
        }),
        (e.unwrap = () => e._zod.def.innerType));
});
function ox(e) {
    return new oF({ type: "readonly", innerType: e });
}
let oT = f("ZodTemplateLiteral", (e, t) => {
    (nX.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
                let i = e._zod.pattern;
                if (!i) throw Error("Pattern not found in template literal");
                ((n.type = "string"), (n.pattern = i.source));
            })(e, 0, n, 0)));
});
function oR(e, t) {
    return new oT({ type: "template_literal", parts: e, ...M(t) });
}
let oV = f("ZodLazy", (e, t) => {
    (n0.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (rq((i = e._zod.innerType), t, r), (t.seen.get(e).ref = i));
        }),
        (e.unwrap = () => e._zod.def.getter()));
});
function oS(e) {
    return new oV({ type: "lazy", getter: e });
}
let oP = f("ZodPromise", (e, t) => {
    (nQ.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (rq((i = e._zod.def).innerType, t, r), (t.seen.get(e).ref = i.innerType));
        }),
        (e.unwrap = () => e._zod.def.innerType));
});
function oO(e) {
    return new oP({ type: "promise", innerType: e });
}
let oz = f("ZodFunction", (e, t) => {
    (nY.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Function types cannot be represented in JSON Schema");
            })(0, e, 0, 0)));
});
function oM(e) {
    return new oz({
        type: "function",
        input: Array.isArray(e?.input) ? aX(e?.input) : (e?.input ?? az(aF())),
        output: e?.output ?? aF(),
    });
}
let oN = f("ZodCustom", (e, t) => {
    (n1.init(e, t),
        ip.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
                if ("throw" === t.unrepresentable) throw Error("Custom types cannot be represented in JSON Schema");
            })(0, e, 0, 0)));
});
function oI(e) {
    let t = new tr({ check: "custom" });
    return ((t._zod.check = e), t);
}
function oj(e, t) {
    var n;
    let r;
    return (
        (n = e ?? (() => !0)),
        (r = M(t)).abort ?? (r.abort = !0),
        new oN({ type: "custom", check: "custom", fn: n, ...r })
    );
}
function oL(e, t = {}) {
    return new oN({ type: "custom", check: "custom", fn: e, ...M(t) });
}
function oZ(e) {
    var t;
    let n, r;
    return (
        (t = (t) => (
            (t.addIssue = (e) => {
                "string" == typeof e
                    ? t.issues.push(q(e, t.value, n._zod.def))
                    : (e.fatal && (e.continue = !1),
                      e.code ?? (e.code = "custom"),
                      e.input ?? (e.input = t.value),
                      e.inst ?? (e.inst = n),
                      e.continue ?? (e.continue = !n._zod.def.abort),
                      t.issues.push(q(e)));
            }),
            e(t.value, t)
        )),
        ((r = new tr({ check: "custom", ...M(void 0) }))._zod.check = t),
        (n = r)
    );
}
let o$ = function (e) {
        let t = new tr({ check: "describe" });
        return (
            (t._zod.onattach = [
                (t) => {
                    let n = n3.get(t) ?? {};
                    n3.add(t, { ...n, description: e });
                },
            ]),
            (t._zod.check = () => {}),
            t
        );
    },
    oU = function (e) {
        let t = new tr({ check: "meta" });
        return (
            (t._zod.onattach = [
                (t) => {
                    let n = n3.get(t) ?? {};
                    n3.add(t, { ...n, ...e });
                },
            ]),
            (t._zod.check = () => {}),
            t
        );
    };
function oW(e, t = {}) {
    let n = new oN({ type: "custom", check: "custom", fn: (t) => t instanceof e, abort: !0, ...M(t) });
    return (
        (n._zod.bag.Class = e),
        (n._zod.check = (t) => {
            t.value instanceof e ||
                t.issues.push({
                    code: "invalid_type",
                    expected: e.name,
                    input: t.value,
                    inst: n,
                    path: [...(n._zod.def.path ?? [])],
                });
        }),
        n
    );
}
let oG = (...e) =>
    (function (e, t) {
        let n = M(t),
            r = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            i = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
        "sensitive" !== n.case &&
            ((r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
            (i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
        let a = new Set(r),
            o = new Set(i),
            u = e.Codec ?? nG,
            s = e.Boolean ?? t9,
            l = new u({
                type: "pipe",
                in: new (e.String ?? tT)({ type: "string", error: n.error }),
                out: new s({ type: "boolean", error: n.error }),
                transform: (e, t) => {
                    let r = e;
                    return (
                        "sensitive" !== n.case && (r = r.toLowerCase()),
                        !!a.has(r) ||
                            (!o.has(r) &&
                                (t.issues.push({
                                    code: "invalid_value",
                                    expected: "stringbool",
                                    values: [...a, ...o],
                                    input: t.value,
                                    inst: l,
                                    continue: !1,
                                }),
                                {}))
                    );
                },
                reverseTransform: (e, t) => (!0 === e ? r[0] || "true" : i[0] || "false"),
                error: n.error,
            });
        return l;
    })({ Codec: ok, Boolean: af, String: i_ }, ...e);
function oq(e) {
    let t = oS(() => a$([ig(e), aa(), ah(), aE(), az(t), aQ(ig(), t)]));
    return t;
}
function oK(e, t) {
    return oA(oi(e), t);
}
(u || (u = {}),
    _({
        localeError:
            ((r = {
                string: { unit: "characters", verb: "to have" },
                file: { unit: "bytes", verb: "to have" },
                array: { unit: "items", verb: "to have" },
                set: { unit: "items", verb: "to have" },
                map: { unit: "entries", verb: "to have" },
            }),
            (i = {
                regex: "input",
                email: "email address",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datetime",
                date: "ISO date",
                time: "ISO time",
                duration: "ISO duration",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded string",
                base64url: "base64url-encoded string",
                json_string: "JSON string",
                e164: "E.164 number",
                jwt: "JWT",
                template_literal: "input",
            }),
            (a = { nan: "NaN" }),
            (e) => {
                switch (e.code) {
                    case "invalid_type": {
                        let t = a[e.expected] ?? e.expected,
                            n = (function (e) {
                                let t = typeof e;
                                switch (t) {
                                    case "number":
                                        return Number.isNaN(e) ? "nan" : "number";
                                    case "object":
                                        if (null === e) return "null";
                                        if (Array.isArray(e)) return "array";
                                        if (
                                            e &&
                                            Object.getPrototypeOf(e) !== Object.prototype &&
                                            "constructor" in e &&
                                            e.constructor
                                        )
                                            return e.constructor.name;
                                }
                                return t;
                            })(e.input),
                            r = a[n] ?? n;
                        return `Invalid input: expected ${t}, received ${r}`;
                    }
                    case "invalid_value":
                        if (1 === e.values.length) return `Invalid input: expected ${N(e.values[0])}`;
                        return `Invalid option: expected one of ${v(e.values, "|")}`;
                    case "too_big": {
                        let t = e.inclusive ? "<=" : "<",
                            n = r[e.origin] ?? null;
                        if (n)
                            return `Too big: expected ${e.origin ?? "value"} to have ${t}${e.maximum.toString()} ${n.unit ?? "elements"}`;
                        return `Too big: expected ${e.origin ?? "value"} to be ${t}${e.maximum.toString()}`;
                    }
                    case "too_small": {
                        let t = e.inclusive ? ">=" : ">",
                            n = r[e.origin] ?? null;
                        if (n) return `Too small: expected ${e.origin} to have ${t}${e.minimum.toString()} ${n.unit}`;
                        return `Too small: expected ${e.origin} to be ${t}${e.minimum.toString()}`;
                    }
                    case "invalid_format":
                        if ("starts_with" === e.format) return `Invalid string: must start with "${e.prefix}"`;
                        if ("ends_with" === e.format) return `Invalid string: must end with "${e.suffix}"`;
                        if ("includes" === e.format) return `Invalid string: must include "${e.includes}"`;
                        if ("regex" === e.format) return `Invalid string: must match pattern ${e.pattern}`;
                        return `Invalid ${i[e.format] ?? e.format}`;
                    case "not_multiple_of":
                        return `Invalid number: must be a multiple of ${e.divisor}`;
                    case "unrecognized_keys":
                        return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${v(e.keys, ", ")}`;
                    case "invalid_key":
                        return `Invalid key in ${e.origin}`;
                    case "invalid_union":
                    default:
                        return "Invalid input";
                    case "invalid_element":
                        return `Invalid value in ${e.origin}`;
                }
            }),
    }));
