import { Injectable, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import * as ownActions from '@redux/actions';

@Injectable({
  providedIn: 'root'
})
export class CommonsService implements OnDestroy {
  routerSubscription: any;
  urlActiveLevel1!: string;
  urlActiveLevel2!: string;

  constructor(
    private _router: Router,
    private _store: Store<AppState>
  ) { }


  // /**
  //  * -------------------------------------------------------
  //  * @summary getData
  //  * @description  Activa e inactiva el Loading, Cambia el estado del loading cuando cargo la pagina y mada el route a un servicio para luego marcar como active la opcion del menu en base a su url
  //  * -------------------------------------------------------
  //  */
  // public setLoading() {
  //   // Muestra loading cuando carga la pagina
  //   this._router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {
  //       this._store.dispatch(ownActions.setLoading({ loading: true }));
  //     }
  //   });
  //   // Quita el loading cuando cargo la pagina y mada el route a un servicio para luego marcar como active la opcion del menu en base a su url
  //   this.routerSubscription = this._router.events
  //     .pipe(
  //       filter(
  //         (event) =>
  //           event instanceof NavigationEnd || event instanceof NavigationCancel
  //       )
  //     )
  //     .subscribe((event) => {
  //       this.getURlView(event, this._router.url);
  //       setTimeout(() => {
  //         this._store.dispatch(ownActions.setLoading({ loading: false }));
  //       }, 300);
  //     });
  // }



  /**
   * -------------------------------------------------------
   * @summary getURlView
   * @description  Toma el nombre de la vista cargada en la url
   * @param {any} event evento capturado
   * @param {any} urlRoute route capturado de la URL
   * -------------------------------------------------------
   */
  public getURlView(event: any, urlRoute: any) {
    //  console.log(`urlRoute`, urlRoute)
    let arrayUrl1 = urlRoute.split('/');
    let arrayUrl2 = arrayUrl1[1].split('#');
    let urlActiveLevel1 = '';
    let urlActiveLevel2 = '';
    if (arrayUrl2.length === 1) {
      if (arrayUrl2[0] === '') {
        urlActiveLevel1 = '/home';
      } else {
        urlActiveLevel1 = '/' + arrayUrl2[0];
      }
      this._store.dispatch(ownActions.setUrl({ urlActive1: urlActiveLevel1, urlActive2: '' }));
    }
    else {
      urlActiveLevel1 = arrayUrl2[0];
      urlActiveLevel2 = arrayUrl2[1];
      this._store.dispatch(ownActions.setUrl({ urlActive1: urlActiveLevel1, urlActive2: urlActiveLevel2, }));
    }
  }



  /**
   * -------------------------------------------------------
   * @summary toggleMenuApps
   * @description Cambia el valor del bg del menu desde redux
   * @param {boolean} value Ir atras o no
   * -------------------------------------------------------
   */
  toggleShowBgMenu(value: boolean) {
    this._store.dispatch(ownActions.setShowBgMenu({ showBgMenu: value }));
  }



  /**
   * -------------------------------------------------------
   * @summary toggleMenuApps
   * @description Cambia el valor del menu de apps obteniendo valor desde redux
   * -------------------------------------------------------
   */
  toggleMenuApps() {
    this._store.dispatch(ownActions.setMenuSession({ show_menu_session: false }));
    this._store.dispatch(ownActions.toggleMenuApps());
  }

  /**
   * -------------------------------------------------------
   * @summary toggleMenuSession
   * @description Cambia el valor del menu de sesiones obteniendo valor desde redux
   * -------------------------------------------------------
   */
  toggleMenuSession() {
    this._store.dispatch(ownActions.setMenuApps({ show_menu_app: false }));
    this._store.dispatch(ownActions.toggleMenuSession());
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
    this._store.dispatch(ownActions.setMenuSession({ show_menu_session: false }));
    this._store.dispatch(ownActions.setMenuApps({ show_menu_app: false }));
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


  /**
   * -------------------------------------------------------
   * @summary setItemLocalStorage
   * @description  Almacena o actualiza valor de una variable en el localstorage
   * @param {string} key nombre de variable
   * @param {string} value Valor de la variable key
   * -------------------------------------------------------
   */
  public setItemLocalStorage(key: string, value: string) {
    // localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }

  /**
   * -------------------------------------------------------
   * @summary getItemLocalStorage
   * @description  Obtiene valor de una variable en el localstorage
   * @param {string} key nombre de variable
   * -------------------------------------------------------
   */
  public getItemLocalStorage(key: string) {
    // return localStorage.getItem(key)
    return sessionStorage.getItem(key)
  }


  /**
   * -------------------------------------------------------
   * @summary removeItemLocalStorage
   * @description  Elimina variable con sus valor  en el localstorage
   * @param {string} key nombre de variable
   * -------------------------------------------------------
   */
  public removeItemLocalStorage(key: string) {
    // localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }

  /**
   * -------------------------------------------------------
   * @summary clearLocalStorage
   * @description  Elimina variable con sus valor  en el localstorage
   * @param {string} key nombre de variable
   * -------------------------------------------------------
   */
  public clearLocalStorage() {
    // localStorage.clear();
    sessionStorage.clear();
  }


  /**
   * -------------------------------------------------------
   * @summary ngOnDestroy
   * @description  Destruye conexiones abiertas
   * -------------------------------------------------------
   */
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
