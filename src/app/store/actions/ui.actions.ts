import { createAction, props } from "@ngrx/store";

export const toggleMenuMobile = createAction("[LAYOUT] Toggle Menu Mobile");
// export const toggleMenuApps = createAction("[LAYOUT] Toggle Menu APPS");
// export const toggleMenuSession = createAction("[LAYOUT] Toggle Menu Session");


export const setShowBtnVideo = createAction(
    "[UI] Set Boton Video",
    props<{ show_btnvideo: boolean }>()
);

export const setShowBgMenu = createAction(
    "[UI] Set BAckground Menu horizontal",
    props<{ showBgMenu: boolean }>()
);

export const setAPIConnectLayout = createAction(
    "[UI] Set API CONNECT LAYOUT",
    props<{
        apiConLayout: boolean,
        apiConLayoutES: boolean,
        apiConLayoutEN: boolean
    }>()
);


export const setAPIConnectHome = createAction(
    "[UI] Set API CONNECT HOME",
    props<{
        apiConHome: boolean,
        apiConHomeES: boolean,
        apiConHomeEN: boolean
    }>()
);

export const setAPIConnectProducts = createAction(
    "[UI] Set API CONNECT PRODUCTS",
    props<{
        apiConProducts: boolean,
        apiConProductsES: boolean,
        apiConProductsEN: boolean
    }>()
);

export const setAPIConnectPlanes = createAction(
    "[UI] Set API CONNECT PLANES",
    props<{
        apiConPlanes: boolean,
        apiConPlanesES: boolean,
        apiConPlanesEN: boolean
    }>()
);

export const setAPIConnectResources = createAction(
    "[UI] Set API CONNECT RESOURCES",
    props<{
        apiConResources: boolean,
        apiConResourcesES: boolean,
        apiConResourcesEN: boolean
    }>()
);

export const setAPIConnectInfo = createAction(
    "[UI] Set API CONNECT INFO",
    props<{
        apiConInfo: boolean,
        apiConInfoES: boolean,
        apiConInfoEN: boolean
    }>()
);

export const setAPIConnectPolicies = createAction(
    "[UI] Set API CONNECT POLICIES",
    props<{
        apiConPolicies: boolean,
        apiConPoliciesES: boolean,
        apiConPoliciesEN: boolean
    }>()
);

export const setAPIConnectSites = createAction(
    "[UI] Set API CONNECT SITES",
    props<{
        apiConSites: boolean,
        apiConSitesES: boolean,
        apiConSitesEN: boolean
    }>()
);


export const setArrayES = createAction(
    "[UI] Set Array ES",
    props<{ arrayES: any }>()
);

export const setUrl = createAction(
    "[UI] Set Url",
    props<{ urlActive1: string, urlActive2: string }>()
);

export const setLoading = createAction(
    "[UI] Set Loading",
    props<{ loading: boolean }>()
);

export const setLogin = createAction(
    "[UI] Set Login",
    props<{ login: boolean }>()
);

export const setTranslate = createAction(
    "[UI] Set Translate",
    props<{ language: string }>()
);

export const setTranslateInit = createAction(
    "[UI] Set Translate Init",
    props<{ initLang: boolean }>()
);

export const toggleMenuApps = createAction(
    "[LAYOUT] Set Menu Apps",
    props<{ show_menu_session: boolean }>()
);

export const toggleMenuSession = createAction(
    "[LAYOUT] Set Menu Session",
    props<{ show_menu_app: boolean }>()
);

export const setCloseAllMenu = createAction(
    "[LAYOUT] Set close All SubMenun",
    props<{ show_menu_app: boolean, show_menu_session: boolean }>()
);

export const setMenuMobileBack = createAction(
    "[LAYOUT] Set Menu Mobile Back",
    props<{ open_menu_mobile_back: boolean }>()
);


