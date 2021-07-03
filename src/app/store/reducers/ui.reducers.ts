import { createReducer, on } from "@ngrx/store";
import * as ownActions from "../actions";

export interface UiState {
    submenu: boolean;
    open_menu_mobile: boolean;
    open_menu_mobile_back: boolean;
    show_menu_app: boolean;
    show_menu_session: boolean;
    show_btnvideo: boolean;
    showBgMenu: boolean;
    login: boolean;
    loading: boolean;
    urlActive1: string;
    urlActive2: string;
    language: string;
    initLang: boolean;
    arrayProducts: any;
    apiConLayout: boolean;
    apiConLayoutES: boolean;
    apiConLayoutEN: boolean;
    apiConHome: boolean;
    apiConHomeES: boolean;
    apiConHomeEN: boolean;
    apiConProducts: boolean;
    apiConProductsES: boolean;
    apiConProductsEN: boolean;
    apiConPlanes: boolean;
    apiConPlanesES: boolean;
    apiConPlanesEN: boolean;
    apiConResources: boolean;
    apiConResourcesES: boolean;
    apiConResourcesEN: boolean;
    apiConInfo: boolean;
    apiConInfoES: boolean;
    apiConInfoEN: boolean;
    apiConPolicies: boolean;
    apiConPoliciesES: boolean;
    apiConPoliciesEN: boolean;
    apiConSites: boolean;
    apiConSitesES: boolean;
    apiConSitesEN: boolean;

}

export const uiState: UiState = {
    submenu: false,
    open_menu_mobile: false,
    open_menu_mobile_back: false,
    show_menu_app: false,
    show_menu_session: false,
    show_btnvideo: false,
    showBgMenu: false,
    login: false,
    loading: false,
    urlActive1: "",
    urlActive2: "",
    language: "es",
    initLang: false,
    arrayProducts: [],
    apiConLayout: false,
    apiConLayoutES: false,
    apiConLayoutEN: false,
    apiConHome: false,
    apiConHomeES: false,
    apiConHomeEN: false,
    apiConProducts: false,
    apiConProductsES: false,
    apiConProductsEN: false,
    apiConPlanes: false,
    apiConPlanesES: false,
    apiConPlanesEN: false,
    apiConResources: false,
    apiConResourcesES: false,
    apiConResourcesEN: false,
    apiConInfo: false,
    apiConInfoES: false,
    apiConInfoEN: false,
    apiConPolicies: false,
    apiConPoliciesES: false,
    apiConPoliciesEN: false,
    apiConSites: false,
    apiConSitesES: false,
    apiConSitesEN: false
};

const _uiReducer = createReducer(
    uiState,


    //  Asigna los valores de conexion de API LAYOUT
    on(ownActions.setAPIConnectLayout, (state, { apiConLayout, apiConLayoutES, apiConLayoutEN }) => ({
        ...state, apiConLayout, apiConLayoutES, apiConLayoutEN
    })),
    //  Asigna los valores de conexion de API HOME
    on(ownActions.setAPIConnectHome, (state, { apiConHome, apiConHomeES, apiConHomeEN }) => ({
        ...state, apiConHome, apiConHomeES, apiConHomeEN
    })),
    //  Asigna los valores de conexion de API PRODUCTS
    on(ownActions.setAPIConnectProducts, (state, { apiConProducts, apiConProductsES, apiConProductsEN }) => ({
        ...state, apiConProducts, apiConProductsES, apiConProductsEN
    })),
    //  Asigna los valores de conexion de API PLANES
    on(ownActions.setAPIConnectPlanes, (state, { apiConPlanes, apiConPlanesES, apiConPlanesEN }) => ({
        ...state, apiConPlanes, apiConPlanesES, apiConPlanesEN
    })),
    //  Asigna los valores de conexion de API RESOURCES
    on(ownActions.setAPIConnectResources, (state, { apiConResources, apiConResourcesES, apiConResourcesEN }) => ({
        ...state, apiConResources, apiConResourcesES, apiConResourcesEN
    })),
    //  Asigna los valores de conexion de API INFO
    on(ownActions.setAPIConnectInfo, (state, { apiConInfo, apiConInfoES, apiConInfoEN }) => ({
        ...state, apiConInfo, apiConInfoES, apiConInfoEN
    })),
    //  Asigna los valores de conexion de API POLICIES
    on(ownActions.setAPIConnectPolicies, (state, { apiConPolicies, apiConPoliciesES, apiConPoliciesEN }) => ({
        ...state, apiConPolicies, apiConPoliciesES, apiConPoliciesEN
    })),
    //  Asigna los valores de conexion de API SITES
    on(ownActions.setAPIConnectSites, (state, { apiConSites, apiConSitesES, apiConSitesEN }) => ({
        ...state, apiConSites, apiConSitesES, apiConSitesEN
    })),


    //  Cambia el estado del Menu de Apps y asigmn el de menu sessiones
    on(ownActions.toggleMenuApps, (state, { show_menu_session }) => ({
        ...state,
        show_menu_app: !state.show_menu_app,
        show_menu_session
    })),
    //  Cambia el estado del Menu de Sessions y asigna el de menu apps
    on(ownActions.toggleMenuSession, (state, { show_menu_app }) => ({
        ...state,
        show_menu_app,
        show_menu_session: !state.show_menu_session
    })),

    //  Asigna los valores del ARREGLO
    on(ownActions.setArrayProducts, (state, { arrayProducts }) => ({
        ...state,
        arrayProducts,
    })),
    //  Asigna el estado del boton del video popup
    on(ownActions.setShowBtnVideo, (state, { show_btnvideo }) => ({
        ...state,
        show_btnvideo,
    })),
    //  Asigna el estado del background del menu horizontal
    on(ownActions.setShowBgMenu, (state, { showBgMenu }) => ({
        ...state,
        showBgMenu,
    })),
    //  Asigna los valores de las URL
    on(ownActions.setUrl, (state, { urlActive1, urlActive2 }) => ({
        ...state,
        urlActive1,
        urlActive2
    })),
    //  Asigna el estado del Menu Mobile
    on(ownActions.setLoading, (state, { loading }) => ({
        ...state,
        loading
    })),
    //  Asigna el estado del Usuario Logueado
    on(ownActions.setLogin, (state, { login }) => ({
        ...state,
        login
    })),
    //  Cierra todo los submenus
    on(ownActions.setCloseAllMenu, (state, { show_menu_app, show_menu_session }) => ({
        ...state,
        show_menu_app,
        show_menu_session
    })),
    //  Cambia el estado del Menu Mobile
    on(ownActions.toggleMenuMobile, (state) => ({
        ...state,
        open_menu_mobile: !state.open_menu_mobile,
    })),
    //  Asigna el estado del de la apertura del submenu mobile
    on(ownActions.setMenuMobileBack, (state, { open_menu_mobile_back }) => ({
        ...state,
        open_menu_mobile_back
    })),
    // Asigna el lenguage o idioma
    on(ownActions.setTranslate, (state, { language }) => ({
        ...state,
        language
    })),
    //  Cambia el estado del inicializacion del translate
    on(ownActions.setTranslateInit, (state, { initLang }) => ({
        ...state,
        initLang
    }))
);

export function uiReducer(state: any, action: any) {
    return _uiReducer(state, action);
}
