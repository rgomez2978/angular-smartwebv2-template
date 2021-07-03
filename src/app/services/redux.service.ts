import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import * as ownActions from '@redux/actions';

@Injectable({
  providedIn: 'root'
})
export class ReduxService {

  constructor(private _store: Store<AppState>) { }


  /**
   * -------------------------------------------------------
   * @summary SetLoading
   * @description Cambia el ststus del loadig con redux
   * @param {boolean} value valor del loading true o false
   * -------------------------------------------------------
   */
  SetLoading(value: boolean) {
    this._store.dispatch(ownActions.setLoading({ loading: value }));
  }

  /**
   * -------------------------------------------------------
   * @summary setUrl
   * @description Cambia el ststus del URL con redux
   * @param {string} url1 valor del la URL 1
   * @param {string} url2 valor del la URL 2
   * -------------------------------------------------------
   */
  setUrl(url1: string, url2: string,) {
    this._store.dispatch(ownActions.setUrl({ urlActive1: url1, urlActive2: url2 }));
  }

  /**
   * -------------------------------------------------------
   * @summary setAPIConnectLayout
   * @description Cambia el status de conectiviada a API de LAYPUT
   * @param {boolean} conn valor de conexiona a API en general
   * @param {boolean} conn_es valor de conexiona a API ESPAÑOL
   * @param {boolean} conn_en valor de conexiona a API INGLES
   * -------------------------------------------------------
   */
  setAPIConnectLayout(conn: boolean, conn_es: boolean, conn_en: boolean,) {
    this._store.dispatch(ownActions.setAPIConnectLayout({ apiConLayout: conn, apiConLayoutES: conn_es, apiConLayoutEN: conn_en }));
  }

  /**
   * -------------------------------------------------------
   * @summary setAPIConnectHome
   * @description Cambia el status de conectiviada a API de LAYPUT
   * @param {boolean} conn valor de conexiona a API en general
   * @param {boolean} conn_es valor de conexiona a API ESPAÑOL
   * @param {boolean} conn_en valor de conexiona a API INGLES
   * -------------------------------------------------------
   */
  setAPIConnectHome(conn: boolean, conn_es: boolean, conn_en: boolean,) {
    this._store.dispatch(ownActions.setAPIConnectHome({ apiConHome: conn, apiConHomeES: conn_es, apiConHomeEN: conn_en }));
  }




  /**
   * -------------------------------------------------------
   * @summary setShowBtnVideo
   * @description Cambia el valor del doton en banner principal desde redux
   * @param {boolean} value valor del boton
   * -------------------------------------------------------
   */
  setShowBtnVideo(value: boolean) {
    this._store.dispatch(ownActions.setShowBtnVideo({ show_btnvideo: value }));
  }


  /**
   * -------------------------------------------------------
   * @summary setShowBgMenu
   * @description Cambia el valor del bg del menu desde redux
   * @param {boolean} value Ir atras o no
   * -------------------------------------------------------
   */
  setShowBgMenu(value: boolean) {
    this._store.dispatch(ownActions.setShowBgMenu({ showBgMenu: value }));
  }


  /**
   * -------------------------------------------------------
   * @summary toggleMenuApps
   * @description Cambia el valor del menu de apps obteniendo valor desde redux
   * -------------------------------------------------------
   */
  toggleMenuApps() {
    this._store.dispatch(ownActions.toggleMenuApps({ show_menu_session: false }));
  }

  /**
   * -------------------------------------------------------
   * @summary toggleMenuSession
   * @description Cambia el valor del menu de sesiones obteniendo valor desde redux
   * -------------------------------------------------------
   */
  toggleMenuSession() {
    this._store.dispatch(ownActions.toggleMenuSession({ show_menu_app: false }));
  }

  /**
  * -------------------------------------------------------
  * @summary toggleMenuMobile
  * @description Cambia el valor del menu mobile obteniendo valor desde redux
  * -------------------------------------------------------
  */
  toggleMenuMobile() {
    this._store.dispatch(ownActions.toggleMenuMobile());
  }

  /**
   * -------------------------------------------------------
   * @summary toggleSubMenuMobile
   * @description Cambia el valor del submenu menu mobile obteniendo valor desde redux
   * @param {boolean} back Ir atras o no
   * -------------------------------------------------------
   */
  toggleSubMenuMobileBack(back: boolean) {
    this._store.dispatch(ownActions.setMenuMobileBack({ open_menu_mobile_back: back }));
  }


  /**
   * -------------------------------------------------------
   * @summary closeAllSubMenu
   * @description Asigna el valor del menu de sesiones  y apps obteniendo valor desde redux
   * -------------------------------------------------------
   */
  closeAllSubMenu() {
    this._store.dispatch(ownActions.setCloseAllMenu({ show_menu_app: false, show_menu_session: false }));
  }


  /**
   * -------------------------------------------------------
   * @summary setLogin
   * @description  Cambia el estado del usaurio logueado
   * @param {bollean} value valor del estado para el login
   * -------------------------------------------------------
   */
  setLogin(value: boolean) {
    this._store.dispatch(ownActions.setLogin({ login: value }));
  }

  /**
   * -------------------------------------------------------
   * @summary closeAllSubMenu
   * @description Asignacion de cambio del state para translate con redux
   * @param {string} value Valor del idioma a mostran (en-es)
   * -------------------------------------------------------
   */
  setTranslate(value: string) {
    this._store.dispatch(ownActions.setTranslate({ language: value }));
  }

  /**
   * -------------------------------------------------------
   * @summary toggleTranslateInit
   * @description Asignacion de cambio del state para translate init con redux
   * @param {string} value Valor del idioma a mostran (en-es)
   * -------------------------------------------------------
   */
  setTranslateInit(value: boolean) {
    this._store.dispatch(ownActions.setTranslateInit({ initLang: value }));
  }




}
