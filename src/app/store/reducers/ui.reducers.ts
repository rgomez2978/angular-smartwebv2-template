import { createReducer, on } from "@ngrx/store";
import * as ownActions from "../actions";

export interface UiState {
    submenu: boolean;
    open_menu_mobile: boolean;
    open_menu_mobile_back: boolean;
    show_menu_app: boolean;
    show_menu_session: boolean;
    show_btnvideo: boolean;
    notfound: boolean;
    showBgMenu: boolean;
    login: boolean;
    loading: boolean;
    urlActive1: string;
    urlActive2: string;
    urlBreadcrumbs: string;
    language: string;

}

export const uiState: UiState = {
    submenu: false,
    open_menu_mobile: false,
    open_menu_mobile_back: false,
    show_menu_app: false,
    show_menu_session: false,
    show_btnvideo: false,
    notfound: false,
    showBgMenu: false,
    login: false,
    loading: false,
    urlActive1: "",
    urlActive2: "",
    urlBreadcrumbs: "",
    language: "es",
};

const _uiReducer = createReducer(
    uiState,
    //  Cambia el estado del Menu de Apps y asigmn el de menu sessiones
    on(ownActions.toggleMenuApps, (state, { show_menu_session }) => ({ ...state, show_menu_app: !state.show_menu_app, show_menu_session })),
    //  Cambia el estado del Menu de Sessions y asigna el de menu apps
    on(ownActions.toggleMenuSession, (state, { show_menu_app }) => ({ ...state, show_menu_app, show_menu_session: !state.show_menu_session })),
    //  Asigna el estado del notfound
    on(ownActions.setNotFound, (state, { notfound }) => ({ ...state, notfound, })),
    //  Asigna el estado del boton del video popup
    on(ownActions.setShowBtnVideo, (state, { show_btnvideo }) => ({ ...state, show_btnvideo, })),
    //  Asigna el estado del background del menu horizontal
    on(ownActions.setShowBgMenu, (state, { showBgMenu }) => ({ ...state, showBgMenu, })),
    //  Asigna los valores de las URL
    on(ownActions.setUrl, (state, { urlActive1, urlActive2 }) => ({ ...state, urlActive1, urlActive2 })),
    //  Asigna los valores de las URL BREADCRUMB
    on(ownActions.setUrlBreadcrumbs, (state, { urlBreadcrumbs }) => ({ ...state, urlBreadcrumbs })),
    //  Asigna el estado del Menu Mobile
    on(ownActions.setLoading, (state, { loading }) => ({ ...state, loading })),
    //  Asigna el estado del Usuario Logueado
    on(ownActions.setLogin, (state, { login }) => ({ ...state, login })),
    //  Cierra todo los submenus
    on(ownActions.setCloseAllMenu, (state, { show_menu_app, show_menu_session }) => ({ ...state, show_menu_app, show_menu_session })),
    //  Cambia el estado del Menu Mobile
    on(ownActions.toggleMenuMobile, (state) => ({ ...state, open_menu_mobile: !state.open_menu_mobile, })),
    //  Asigna el estado del de la apertura del submenu mobile
    on(ownActions.setMenuMobileBack, (state, { open_menu_mobile_back }) => ({ ...state, open_menu_mobile_back })),
    // Asigna el lenguage o idioma
    on(ownActions.setTranslate, (state, { language }) => ({ ...state, language })),
);

export function uiReducer(state: any, action: any) {
    return _uiReducer(state, action);
}
