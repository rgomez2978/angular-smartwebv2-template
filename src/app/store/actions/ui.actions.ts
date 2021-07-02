import { createAction, props } from "@ngrx/store";

export const toggleMenuMobile = createAction("[LAYOUT] Toggle Menu Mobile");
export const toggleMenuApps = createAction("[LAYOUT] Toggle Menu APPS");
export const toggleMenuSession = createAction("[LAYOUT] Toggle Menu Session");


export const setShowBtnVideo = createAction(
    "[UI] Set Boton Video",
    props<{ show_btnvideo: boolean }>()
);

export const setShowBgMenu = createAction(
    "[UI] Set BAckground Menu horizontal",
    props<{ showBgMenu: boolean }>()
);

export const setAPIConnect = createAction(
    "[UI] Set API CONNECT",
    props<{ apiConnect: boolean, apiConsumedES: boolean, apiConsumedEN: boolean}>()
);

export const setArrayES = createAction(
    "[UI] Set Array ES",
    props<{ arrayES: any}>()
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

export const setMenuApps = createAction(
    "[LAYOUT] Set Menu Apps",
    props<{ show_menu_app: boolean }>()
);

export const setMenuSession = createAction(
    "[LAYOUT] Set Menu Session",
    props<{ show_menu_session: boolean }>()
);

export const setMenuMobileBack = createAction(
    "[LAYOUT] Set Menu Mobile Back",
    props<{ open_menu_mobile_back: boolean }>()
);


