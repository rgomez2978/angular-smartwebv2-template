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
  setUrl(url1: string, url2: string) {
    this._store.dispatch(ownActions.setUrl({ urlActive1: url1, urlActive2: url2 }));
  }

  /**
   * -------------------------------------------------------
   * @summary setUrlBreadcrumbs
   * @description Cambia el ststus del URL de breadcrumbs con redux
   * @param {string} url1 valor del la URL
   * -------------------------------------------------------
   */
  setUrlBreadcrumbs(url1: string) {
    // console.log('url1 :>> ', url1);
    this._store.dispatch(ownActions.setUrlBreadcrumbs({ urlBreadcrumbs: url1 }));
  }



  /**
   * -------------------------------------------------------
   * @summary setAPIConnect
   * @description Cambia el status de conectividad del API
   * @param {boolean} page nombre de la pagina
   * @param {boolean} conn valor de conexiona a API
   * @param {boolean} lang valor del lenguaje
   * -------------------------------------------------------
   */
  setAPIConnect(page: string, conn: boolean, lang: string) {
    // console.log(`page`, page, conn, lang)
    switch (page) {
      case 'home':
        this._store.dispatch(ownActions.setAPIConnectHome({ apiConHome: { apiCon: conn, apiLang: lang } }));
        break;
      case 'products':
        this._store.dispatch(ownActions.setAPIConnectProducts({ apiConProducts: { apiCon: conn, apiLang: lang } }));
        break;
      case 'planes':
        this._store.dispatch(ownActions.setAPIConnectPlanes({ apiConPlanes: { apiCon: conn, apiLang: lang } }));
        break;
      case 'resources':
        this._store.dispatch(ownActions.setAPIConnectResources({ apiConResources: { apiCon: conn, apiLang: lang } }));
        break;
      case 'info':
        this._store.dispatch(ownActions.setAPIConnectInfo({ apiConInfo: { apiCon: conn, apiLang: lang } }));
        break;
      case 'policies':
        this._store.dispatch(ownActions.setAPIConnectPolicies({ apiConPolicies: { apiCon: conn, apiLang: lang } }));
        break;
      case 'sites':
        this._store.dispatch(ownActions.setAPIConnectSites({ apiConSites: { apiCon: conn, apiLang: lang } }));
        break;
      case 'help':
        this._store.dispatch(ownActions.setAPIConnectHelp({ apiConHelp: { apiCon: conn, apiLang: lang } }));
        break;
      case 'help_features':
        this._store.dispatch(ownActions.setAPIConnectHelpF({ apiConHelpF: { apiCon: conn, apiLang: lang } }));
        break;
      case 'help_details':
        this._store.dispatch(ownActions.setAPIConnectHelpD({ apiConHelpD: { apiCon: conn, apiLang: lang } }));
        break;
      case 'help_search':
        this._store.dispatch(ownActions.setAPIConnectHelpS({ apiConHelpS: { apiCon: conn, apiLang: lang } }));
        break;
      default:
        this._store.dispatch(ownActions.setAPIConnectLayout({ apiConLayout: { apiCon: conn, apiLang: lang } }));
        break
    }
    setTimeout(() => {
      this.SetLoading(false);
    }, 50);
  }


  /**
   * -------------------------------------------------------
   * @summary setArray
   * @description Asigna Idioma y arreglo de cada pagina
   * @param {boolean} page nombre de la pagina
   * @param {any} array Arreglo de contenido
   * @param {string} lang Idioma
   * -------------------------------------------------------
   */
  setArray(page: string, array: any, lang: string) {
    // console.log('setArray :>> ', page, array, lang);
    switch (page) {
      case 'home':
        this._store.dispatch(ownActions.setArrayHome({ arrayHome: { apiLang: lang, apiArray: array } }));
        break;
      case 'products':
        this._store.dispatch(ownActions.setArrayProducts({ arrayProducts: { apiLang: lang, apiArray: array } }));
        break;
      case 'planes':
        this._store.dispatch(ownActions.setArrayPlanes({ arrayPlanes: { apiLang: lang, apiArray: array } }));
        break;
      case 'resources':
        this._store.dispatch(ownActions.setArrayResources({ arrayResources: { apiLang: lang, apiArray: array } }));
        break;
      case 'info':
        this._store.dispatch(ownActions.setArrayInfo({ arrayInfo: { apiLang: lang, apiArray: array } }));
        break;
      case 'policies':
        this._store.dispatch(ownActions.setArrayPolicies({ arrayPolicies: { apiLang: lang, apiArray: array } }));
        break;
      case 'sites':
        this._store.dispatch(ownActions.setArraySites({ arraySites: { apiLang: lang, apiArray: array } }));
        break;
      case 'help':
        this._store.dispatch(ownActions.setArrayHelp({ arrayHelp: { apiLang: lang, apiArray: array } }));
        break;
      case 'help_features':
        this._store.dispatch(ownActions.setArrayHelpF({ arrayHelpF: { apiLang: lang, apiArray: array } }));
        break;
      case 'help_details':
        this._store.dispatch(ownActions.setArrayHelpD({ arrayHelpD: { apiLang: lang, apiArray: array } }));
        break;
      case 'help_search':
        this._store.dispatch(ownActions.setArrayHelpS({ arrayHelpS: { apiLang: lang, apiArray: array } }));
        break;
      default:
        this._store.dispatch(ownActions.setArrayLayout({ arrayLayout: { apiLang: lang, apiArray: array } }));
        break;
    }
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

}

