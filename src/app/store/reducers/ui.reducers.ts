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
    initLang: false
};

const _uiReducer = createReducer(
    uiState,
    //  Cambia el estado del Menu de apps
    on(ownActions.toggleMenuApps, (state) => ({
        ...state,
        show_menu_app: !state.show_menu_app,
    })),
    //  Cambia el estado del Menu sessions
    on(ownActions.toggleMenuSession, (state) => ({
        ...state,
        show_menu_session: !state.show_menu_session,
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
    //  Asigna el estado del Menu de Apps
    on(ownActions.setMenuApps, (state, { show_menu_app }) => ({
        ...state,
        show_menu_app
    })),
    //  Asigna el estado del Menu de Sessions
    on(ownActions.setMenuSession, (state, { show_menu_session }) => ({
        ...state,
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
