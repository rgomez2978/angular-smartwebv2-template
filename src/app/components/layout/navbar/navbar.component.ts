import { Component, Inject, OnInit, OnDestroy, Input, HostListener } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { Location, LocationStrategy, PathLocationStrategy, } from "@angular/common";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import * as ownActions from '@redux/actions';
import { Subscription } from "rxjs";
import { ApiJsonService, CommonsService } from '@services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class NavbarComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  isLogin: boolean = false;
  isShowBgMenu: boolean = false;
  openMenuMobile!: boolean;
  showMenuSession!: boolean;
  showMenuApps!: boolean;
  openMenuMobileBack!: boolean;
  openMenuSubmobile!: number;
  minTopScrollShow = 120;
  urlActiveLevel1!: string;
  urlActiveLevel2!: string;
  frag: any = '';
  pos: number = 0;
  submenuMobileArray: [] = [];
  dataArray: [] = [];
  language!: string;
  apiConnect!: boolean;
  apiConsumedES!: boolean;
  apiConsumedEN!: boolean;


  @HostListener('window:scroll')

  /**
   * -------------------------------------------------------
   * @summary checkScroll
   * @description  funcion que se auto ejecuta sin ngOninit
   * para calcular scrooll
   * Tanto window.pageYOffset como document.documentElement.scrollTop devuelven el
   * mismo resultado en todos los casos.window.pageYOffset no se admite por debajo de IE 9
   * -------------------------------------------------------
   */
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.minTopScrollShow) {
      this._commonsService.toggleShowBgMenu(true);
    } else {
      if (this.urlActiveLevel1 === '/home') {
        this._commonsService.toggleShowBgMenu(false);
      } else {
        this._commonsService.toggleShowBgMenu(true);
      }
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _apiJSONService: ApiJsonService,
    private _commonsService: CommonsService,
    private _store: Store<AppState>
  ) { }


  /**
   * -------------------------------------------------------
   * @summary ngOnInit
   * @description  Inicializa funciones al cargar el
   * -------------------------------------------------------
   */
  ngOnInit(): void {
    this.setSubscriptions();
  }

  /**
   * -------------------------------------------------------
   * @summary setSubscriptions
   * @description Traer el valor del state del estado del translated de redux
   * -------------------------------------------------------
   */
  setSubscriptions() {
    // this._subscription.add(
    this._subscription = this._store.select('ui').subscribe((state) => {
      this.openMenuMobile = state.open_menu_mobile;
      this.openMenuMobileBack = state.open_menu_mobile_back;
      this.urlActiveLevel1 = state.urlActive1;
      this.urlActiveLevel2 = state.urlActive2;
      this.language = state.language;
      this.apiConnect = state.apiConnect;
      this.apiConsumedES = state.apiConsumedES;
      this.apiConsumedEN = state.apiConsumedEN;
      this.isLogin = state.login;
      this.isShowBgMenu = state.showBgMenu;

      setTimeout(() => {
        if (this.data[0] || this.data[0] != undefined) {
          // console.log(`NAVBAR => ${this.language}`, this.data[0].options);
          this.activeMenuOnLoad(this.data[0].options, this.urlActiveLevel1, this.language)
        }
      }, 100);


    })
    // );




    //   this.userSubs = this.store.select('user')
    //     .pipe(
    //       filter(({ user }) => user != null)
    //     )
    //     .subscribe(({ user }) => this.nombre = user.nombre);
    // }


    // let valor = this._store.select('ui').subscribe(state => this.isShowBgMenu = state.showBgMenu);


  }




  /**
   * -------------------------------------------------------|
   * @summary activeMenuOnLoad
   * @description Recorrar el array y cambia el status activa del
   * elemento en base a la url a true del level 1  y los demas a false
   * @param {any} data Array de opciones
   * @param {string} url valor de la url
   * -------------------------------------------------------
   */
  activeMenuOnLoad(data: any, url: string, lang: string) {
    if (url === '/home') { this.isShowBgMenu = false; }
    else { this.isShowBgMenu = true; }

    data.filter((item: any) => {
      if (item.url === url) { item.active = true; }
      else {
        item.active = false
        if (item.nodes.length > 0) {
          item.nodes.map((subitem: any) => { subitem.active = false; });
        }
      }
    });

    // console.log('activeMenuOnLoad - url :>>', url, ' lang :>> ', lang, ' data :>> ', data);
  }



  /**
  * -------------------------------------------------------|
  * @summary changeStatus
  * @description Recorrar el array y cambia el status activa del
  * elemento seleccionado a true y los demas a false
  * @param {any} data Array de opciones
  * @param {number} index Posicion del arreglo
  * @param {number} id Element id
  * @param {number} level Nivel del menu
  * @param {any} fragment Nombre del fragmento
  * @param {string} name Nombre del title
  * -------------------------------------------------------
  */
  changeStatusWeb(data: any, index: number, id: number, level: number, fragment: any, name: string) {
    // Activacion de fondo del menu por seccion de la pagina
    // console.log('data :>> ', data);
    // console.log('index :>> ', index);
    // console.log('id :>> ', id);
    // console.log('level :>> ', level);
    // console.log('name :>> ', name);
    // console.log('this.urlActiveLevel1 :>> ', this.urlActiveLevel1);


    if (level === 1 && name === '/home') { this.isShowBgMenu = false; }
    else if ((level === 2)) { this.isShowBgMenu = true; }
    else { this.isShowBgMenu = true; }

    if (data[index].nodes.length > 0) {
      //   data.forEach((item: any) => {
      //     if (item.nodes.length > 0) {
      //       item.nodes.forEach((subitem: any) => {
      //         subitem.active = false;
      //       });
      //     } else {
      //       item.active = false;
      //     }
      //   });
      //   this.urlActiveLevel1 = this.urlActiveLevel1 + '#';
      //   if (level === 2) {
      //     data[index].nodes.forEach((subitem: any) => {
      //       if (subitem.id === id) {
      //         subitem.active = true;
      //       } else {
      //         subitem.active = false;
      //       }
      //     });
      //   }
      // } else {
      //   data.forEach((item: any) => {
      //     if (item.nodes.length > 0) {
      //       item.nodes.forEach((subitem: any) => {
      //         subitem.active = false;
      //       });
      //     } else {
      //       if (item.id === id) {
      //         item.active = true;
      //       } else {
      //         item.active = false;
      //       }
      //     }
      //   });
    }
  }

  /**
   * -------------------------------------------------------
   * @summary changeStatusMobile
   * @description Recorrar el array y cambia el status activa del
   * elemento seleccionado a true y los demas a false
   * @param {any} data Array de opciones
   * @param {number} index Posicion del arreglo
   * @param {number} id Element id
   * @param {number} level NIvel del menu
   * @param {string} title Titulo del item seleccionado
   * -------------------------------------------------------
   */
  changeStatusMobile(data: any, index: number, id: number, level: number, title: string) {
    data.forEach((item: any) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });

    if (level === 1) {
      this.toggleMenuMobile();
    } else {
      if (this.openMenuMobileBack) {
        this.toggleSubMenuMobile(level, data[index], false);
      } else {
        this.toggleSubMenuMobile(level, data[index], true);
      }
    }
  }

  /**
   * -------------------------------------------------------
   * @summary toggleMenuMobile
   * @description Cambia el valor del menu mobile obteniendo valor desde localstorage
   * -------------------------------------------------------
   */
  toggleMenuMobile() {
    this._store.dispatch(ownActions.toggleMenuMobile());
  }

  /**
   * -------------------------------------------------------
   * @summary toggleSubMenuMobile
   * @description Cambia el valor del submenu menu mobile obteniendo valor desde localstorage
   * @param {any} array Arreglo
   * @param {number} level Nivel del menu
   * @param {boolean} back Ir atras o no
   * -------------------------------------------------------
   */
  toggleSubMenuMobile(level: number, array: any, back: boolean) {
    this.submenuMobileArray = array.nodes;
    this.openMenuSubmobile = level;
    this._store.dispatch(ownActions.setMenuMobileBack({ open_menu_mobile_back: back }));
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
   * @summary toggleSubMenuMobile
   * @description Cambia el valor del menu mobile obteniendo valor desde localstorage
   * -------------------------------------------------------
   */
  toggleSubMenuMobileBack() {
    this._store.dispatch(ownActions.setMenuMobileBack({ open_menu_mobile_back: false }));
  }

  /**
   * -------------------------------------------------------
   * @summary closeAllSubMenu
   * @description Asigna el valor del menu de sesiones  y apps obteniendo valor desde localstorage
   * -------------------------------------------------------
   */
  closeAllSubMenu() {
    // this._store.dispatch(ownActions.setMenuSession({ show_menu_session: false }));
    // this._store.dispatch(ownActions.setMenuApps({ show_menu_app: false }));
  }

  /**
   * -------------------------------------------------------
   * @summary setTranslate
   * @description Asignacion de cambio del state para translate con redux
   * @param {string} value Valor del idioma a mostran (en-es)
   * -------------------------------------------------------
   */
  setTranslate(value: string) {
    // this._commonsService.setItemLocalStorage('initLang', 'true');
    // console.log('this.data :>> ', this.data);
    // console.log('setTranslate this.apiConnect :>> ', this.apiConnect);
    // console.log('setTranslate this.apiConsumedES :>> ', this.apiConsumedES);
    // console.log('setTranslate this.apiConsumedEN :>> ', this.apiConsumedEN);

    this._store.dispatch(ownActions.setTranslate({ language: value }));

    if (value === 'es' && this.apiConnect && this.apiConsumedES && !this.apiConsumedEN) {
      console.log('CARGO PRIMERA VEZ API en ESPAÑOL');
      this._store.dispatch(ownActions.setAPIConnect({ apiConnect: true, apiConsumedES: true, apiConsumedEN: false }));
    }
    else if (value === 'en' && this.apiConnect && !this.apiConsumedES && this.apiConsumedEN) {
      console.log('CARGO PRIMERA VEZ API en INGLES');
      this._store.dispatch(ownActions.setAPIConnect({ apiConnect: true, apiConsumedES: false, apiConsumedEN: true }));
    }

    // else if (value === 'es' && !this.apiConsumedES) {
    //   console.log('NO cargo solo API en español');
    //   this._store.dispatch(ownActions.setAPIConnect({ apiConnect: false, apiConsumedES: false, apiConsumedEN: false }));
    // }
    // else if (value === 'en' && this.apiConsumedEN) {
    //   console.log('YA cargo solo API  en ingles');
    //   this._store.dispatch(ownActions.setAPIConnect({ apiConnect: true, apiConsumedES: false, apiConsumedEN: true }));
    // }
    // else if (value === 'en' && !this.apiConsumedEN) {
    //   console.log('NO cargo solo API  en ingles');
    //   this._store.dispatch(ownActions.setAPIConnect({ apiConnect: false, apiConsumedES: false, apiConsumedEN: true }));
    // }
    // else if (value === 'es' && this.apiConsumedEN || value === 'en' && this.apiConsumedES) {
    //   console.log('YA cargo varias API');
    //   this._store.dispatch(ownActions.setAPIConnect({ apiConnect: true, apiConsumedES: true, apiConsumedEN: true }));
    // }
    else {
      // if (value === 'es' && this.apiConnect && !this.apiConsumedES && this.apiConsumedEN) {
      //   console.log('CARGO API en ESPAÑOL');
      //   this._store.dispatch(ownActions.setAPIConnect({ apiConnect: false, apiConsumedES: false, apiConsumedEN: true }));
      // }
      // else if (value === 'en' && this.apiConnect && this.apiConsumedES && !this.apiConsumedEN) {
      //   console.log('CARGO API en INGLES');
      //   this._store.dispatch(ownActions.setAPIConnect({ apiConnect: false, apiConsumedES: true, apiConsumedEN: false }));
      // }
      // else {
        this._store.dispatch(ownActions.setAPIConnect({ apiConnect: false, apiConsumedES: this.apiConsumedES, apiConsumedEN: this.apiConsumedEN }));
      // }
    }
  }



  /**
   * -------------------------------------------------------
   * @summary ngOnDestroy
   * @description  Destruye conexiones abiertas
   * -------------------------------------------------------
   */
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
