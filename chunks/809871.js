n.d(t, { A: () => g });
var i = n(691540),
    r = n(857250),
    a = n(97483),
    s = n(228366),
    l = n(574172),
    o = n(869146),
    d = n(625180),
    c = n(439372),
    u = n(957292),
    _ = n(174459),
    E = n(91242),
    A = n(652215),
    h = n(613057);
class I extends c.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t, analyticsContext: n } = e;
            (0, u.Pd)(t, n);
        },
        FRAME_LAUNCH_FAIL: (e) => {
            let { applicationId: t, error: n, analyticsContext: i } = e;
            (0, u.ms)(t, n, i);
        },
        FRAME_STOP: (e) => {
            let { applicationId: t } = e;
            (0, u.iG)(t);
        },
    };
    handleRPCDisconnect = (e) => {
        let { reason: t, source: n } = e;
        if (null == t || n.type !== h.z4.POST_MESSAGE) return;
        let i = E.A.getFrameByIframeId(n.iframeId);
        null != i &&
            (this.leaveFrame(i.id),
            t.code !== A.YI$.CLOSE_NORMAL &&
                (_.default.track(A.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i.applicationId,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
    leaveFrame(e) {
        let t = E.A.getFrame(e);
        null != t && s.h.dispatch({ type: "FRAME_STOP", applicationId: t.applicationId, frameId: t.id });
    }
}
var f = n(165610),
    p = n(375708);
let T = !1,
    m = !1,
    g = new (class extends I {
        static displayName = "FramesWebManager";
        _initialize() {
            super._initialize(),
                o.A.addChangeListener(this.handlePopoutWindowUpdate),
                s.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
        }
        _terminate() {
            super._terminate(),
                o.A.removeChangeListener(this.handlePopoutWindowUpdate),
                s.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
        }
        handlePopoutWindowOpen = (e) => {
            let { key: t } = e;
            t === A.MLl.ACTIVITY_POPOUT && (m = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = T,
                t = o.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT);
            !e || t || m || d.A.clearMainFrameSlot(), (T = t);
        };
        popInFrame = () => {
            (m = !0), l.close(A.MLl.ACTIVITY_POPOUT);
            let e = E.A.getMainFrame();
            null != e && (e.intent === f.sV.MAIN ? d.A.resetFrameLayoutModes(e.id) : d.A.clearMainFrameSlot());
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                s = `${p.intl.formatToPlainString(p.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)((0, r.o)(s, a.Ck.FAILURE));
        }
    })();
