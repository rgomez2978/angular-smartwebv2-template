import { createAction, props } from "@ngrx/store";


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  CONFIGURACION LAYOUT
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const toggleMenuMobile = createAction("[UI] Toggle Menu Mobile");
export const setShowBtnVideo = createAction(
    "[UI] Set Boton Video",
    props<{ show_btnvideo: boolean }>()
);
export const setShowBgMenu = createAction(
    "[UI] Set BAckground Menu horizontal",
    props<{ showBgMenu: boolean }>()
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
export const toggleMenuApps = createAction(
    "[UI] Set Menu Apps",
    props<{ show_menu_session: boolean }>()
);
export const toggleMenuSession = createAction(
    "[UI] Set Menu Session",
    props<{ show_menu_app: boolean }>()
);
export const setCloseAllMenu = createAction(
    "[UI] Set close All SubMenun",
    props<{ show_menu_app: boolean, show_menu_session: boolean }>()
);
export const setMenuMobileBack = createAction(
    "[UI] Set Menu Mobile Back",
    props<{ open_menu_mobile_back: boolean }>()
);

