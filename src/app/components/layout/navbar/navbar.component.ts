import { Component, Inject, OnInit, OnDestroy, Input, HostListener } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { Location, LocationStrategy, PathLocationStrategy, } from "@angular/common";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, CommonsService, ReduxService } from '@services/index';

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
  openMenuMobileBack!: boolean;
  openMenuSubmobile!: number;
  minTopScrollShow = 120;
  urlActiveLevel1!: string;
  urlActiveLevel2!: string;
  language!: string;
  apiConLayout!: boolean;
  apiConLayoutES!: boolean;
  apiConLayoutEN!: boolean;
  submenuMobileArray: any = [];


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
      this.isShowBgMenu = true;
    } else {
      if (this.urlActiveLevel1 === '/home') {
        this.isShowBgMenu = false;
      } else {
        this.isShowBgMenu = true;
      }
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _apiJSONService: ApiJsonService,
    private _reduxService: ReduxService,
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
    this._subscription.add(
      this._store.select('ui').subscribe((state) => {
        this.language = state.language;
        this.openMenuMobile = state.open_menu_mobile;
        this.openMenuMobileBack = state.open_menu_mobile_back;
        this.urlActiveLevel1 = state.urlActive1;
        this.urlActiveLevel2 = state.urlActive2;
        this.isLogin = state.login;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.apiConLayout = state.apiConLayout;
        this.apiConLayoutES = state.apiConLayoutES;
        this.apiConLayoutEN = state.apiConLayoutEN;
        setTimeout(() => {
          if (this.data[0] || this.data[0] != undefined) {
            // console.log('this.urlActiveLevel1 :>> ', this.urlActiveLevel1);
            // console.log('this.urlActiveLevel2 :>> ', this.urlActiveLevel2);
            this.activeMenuOnLoad(this.data[0].options, this.urlActiveLevel1)
          }
        }, 100);
      })
    );
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
  activeMenuOnLoad(data: any, url: string) {
    if (url === '/home') { this.isShowBgMenu = false; } else { this.isShowBgMenu = true; }
    data.filter((item: any) => {
      if (item.url === url) {
        item.active = true;
      }
      else if (item.type === '' && url === '/products') {
        item.active = true;
      }
      else {
        item.active = false
        if (item.nodes.length > 0) {
          item.nodes.map((subitem: any) => { subitem.active = false; });
        }
      }
    });
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
    if (level === 1 && name === '/home') { this.isShowBgMenu = false; }
    else if ((level === 2)) { this.isShowBgMenu = true; }
    else { this.isShowBgMenu = true; }

    if (data[index].nodes.length > 0) {
      data.filter((item: any) => {
        if (item.nodes.length > 0) {
          item.nodes.map((subitem: any) => {
            subitem.active = false;
          });
        } else {
          item.active = false;
        }
      });
      this.urlActiveLevel1 = this.urlActiveLevel1 + '#';
      if (level === 2) {
        data[index].nodes.filter((subitem: any) => {
          if (subitem.id === id) { subitem.active = true; }
          else { subitem.active = false; }
        });
      }
    } else {
      data.filter((item: any) => {
        if (item.nodes.length > 0) {
          item.nodes.map((subitem: any) => {
            subitem.active = false;
          });
        } else {
          if (item.id === id) { item.active = true; }
          else { item.active = false; }
        }
      });
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
    data.filter((item: any) => {
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
    this._reduxService.toggleMenuMobile();
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
    this._reduxService.toggleSubMenuMobileBack(back);
  }

  /**
   * -------------------------------------------------------
   * @summary setLogin
   * @description  Cambia el estado del usaurio logueado
   * @param {bollean} value valor del estado para el login
   * -------------------------------------------------------
   */
  setLogin(value: boolean) {
    this._reduxService.setLogin(value);
  }

  /**
   * -------------------------------------------------------
   * @summary toggleSubMenuMobile
   * @description Cambia el valor del menu mobile obteniendo valor desde localstorage
   * -------------------------------------------------------
   */
  toggleSubMenuMobileBack() {
    this._reduxService.toggleSubMenuMobileBack(false);
  }

  /**
   * -------------------------------------------------------
   * @summary closeAllSubMenu
   * @description Asigna el valor del menu de sesiones  y apps obteniendo valor desde localstorage
   * -------------------------------------------------------
   */
  closeAllSubMenu() {
    this._reduxService.closeAllSubMenu();
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
