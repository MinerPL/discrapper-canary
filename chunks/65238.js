n.d(t, { Ay: () => a, XF: () => l, ml: () => s });
var i = n(315069),
    r = n(604913);
class a extends i.A {
    id;
    applicationId;
    name;
    displayName;
    rewardType;
    rewardStatus;
    rewardConfig;
    skuIds;
    appliesToAllSkus;
    includeBundles;
    startsAt;
    endsAt;
    tenantMetadata;
    static createFromServer(e) {
        var t, n, i, s, l;
        let d, c, u, _, E;
        return new a({
            id: e.id,
            applicationId: e.application_id,
            name: e.name ?? null,
            displayName: e.display_name ?? null,
            rewardType: e.reward_type,
            rewardStatus: e.reward_status ?? null,
            rewardConfig:
                null != e.reward_config
                    ? null == (t = e.reward_config)
                        ? null
                        : {
                              discount:
                                  null != t.discount
                                      ? {
                                            id: t.discount.id,
                                            type: t.discount.type,
                                            amount: t.discount.amount,
                                            fiatEnabled: t.discount.fiat_enabled,
                                            orbsEnabled: t.discount.orbs_enabled,
                                        }
                                      : null,
                          }
                    : null,
            skuIds: (function (e) {
                if (null == e) return null;
                let t = {};
                for (let [n, i] of Object.entries(e)) t[n] = { priceTiers: i.price_tiers };
                return t;
            })(e.sku_ids),
            appliesToAllSkus: e.applies_to_all_skus,
            includeBundles: e.include_bundles,
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
            tenantMetadata:
                null != e.tenant_metadata
                    ? {
                          collectibles:
                              null != (n = e.tenant_metadata).collectibles
                                  ? (i = n.collectibles).type === r.hE.COLLECT_AND_CLAIM && i.subtype === r.h5.TAKEOVER
                                      ? ((s = i),
                                        {
                                            type: r.hE.COLLECT_AND_CLAIM,
                                            subtype: r.h5.TAKEOVER,
                                            collectionId: s.collection_id,
                                            shopHome: {
                                                title: s.shop_home.title,
                                                description: s.shop_home.description,
                                                rewardStates: o(s.shop_home.reward_states),
                                                style:
                                                    null != s.shop_home.style
                                                        ? { contentTheme: s.shop_home.style.content_theme }
                                                        : void 0,
                                            },
                                            indexPage: {
                                                description: s.index_page.description,
                                                rewardStates: o(s.index_page.reward_states),
                                                style:
                                                    null != s.index_page.style
                                                        ? { contentTheme: s.index_page.style.content_theme }
                                                        : void 0,
                                            },
                                            shared: (function (e) {
                                                let { progress_indicator: t, navigation: n, help_center: i } = e;
                                                return {
                                                    progressIndicator: {
                                                        title: t.title,
                                                        description: t.description,
                                                        assets: {
                                                            rewardPreview: {
                                                                hiddenAssetPath:
                                                                    t.assets.reward_preview.hidden_asset_path,
                                                                revealedAssetPath:
                                                                    t.assets.reward_preview.revealed_asset_path,
                                                            },
                                                        },
                                                        style:
                                                            null != t.style
                                                                ? {
                                                                      contentTheme: t.style.content_theme,
                                                                      backgroundColor: t.style.background_color,
                                                                      progressColor: t.style.progress_color,
                                                                  }
                                                                : void 0,
                                                    },
                                                    navigation:
                                                        n?.tab != null
                                                            ? { tab: { title: n.tab.title, icon: n.tab.icon } }
                                                            : void 0,
                                                    helpCenter: null != i ? { text: i.text, id: i.id } : void 0,
                                                };
                                            })(s.shared),
                                        })
                                      : i.type === r.hE.TARGETED_OFFER
                                        ? ((l = i.reward),
                                          (d = l?.storefront?.nagbar),
                                          (c = l?.checkout?.offer_notice),
                                          (_ = null == (u = l?.collected?.override_title) || "" === u ? void 0 : u),
                                          (E = l?.flavor),
                                          null == d && null == c && null == _ && null == E
                                              ? { type: r.hE.TARGETED_OFFER }
                                              : {
                                                    type: r.hE.TARGETED_OFFER,
                                                    reward: {
                                                        storefront:
                                                            null != d
                                                                ? {
                                                                      nagbar: {
                                                                          headerText: d.header_text ?? void 0,
                                                                          cta:
                                                                              null != d.cta
                                                                                  ? { text: d.cta.text ?? void 0 }
                                                                                  : void 0,
                                                                          helpCenterId: d.help_center_id ?? void 0,
                                                                          icon: d.icon ?? void 0,
                                                                      },
                                                                  }
                                                                : void 0,
                                                        checkout:
                                                            null != c
                                                                ? {
                                                                      offerNotice: {
                                                                          icon: c.icon ?? void 0,
                                                                          text: c.text ?? void 0,
                                                                      },
                                                                  }
                                                                : void 0,
                                                        collected: null != _ ? { overrideTitle: _ } : void 0,
                                                        flavor: E ?? void 0,
                                                    },
                                                })
                                        : void 0
                                  : void 0,
                      }
                    : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.name = e.name),
            (this.displayName = e.displayName),
            (this.rewardType = e.rewardType),
            (this.rewardStatus = e.rewardStatus),
            (this.rewardConfig = e.rewardConfig),
            (this.skuIds = e.skuIds),
            (this.appliesToAllSkus = e.appliesToAllSkus),
            (this.includeBundles = e.includeBundles),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt),
            (this.tenantMetadata = e.tenantMetadata);
    }
}
function s(e) {
    let t = e?.tenantMetadata?.collectibles;
    return t?.type === r.hE.TARGETED_OFFER ? t : void 0;
}
function l(e) {
    let t = e?.tenantMetadata?.collectibles;
    return t?.type === r.hE.COLLECT_AND_CLAIM ? t : void 0;
}
function o(e) {
    return {
        inProgress: { progressSteps: e.in_progress.progress_steps.map((e) => ({ heroAssetPath: e.hero_asset_path })) },
        earned: { heroAssetPath: e.earned.hero_asset_path },
        consumed: { heroAssetPath: e.consumed.hero_asset_path },
    };
}
