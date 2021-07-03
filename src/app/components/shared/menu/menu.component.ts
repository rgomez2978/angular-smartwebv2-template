import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonsService, ReduxService } from '@services/index';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  @Input() type!: string;
  showMenuSession!: boolean;
  showMenuApps!: boolean;
  openMenuMobile!: boolean;
  constructor(
    private _reduxService: ReduxService,
    private _commonsService: CommonsService,
    private _store: Store<AppState>
  ) { }

  /**
   * -------------------------------------------------------
   * @summary ngOnInit
   * @description  Inicializa funciones al cargar el componente
   * -------------------------------------------------------
   */
  ngOnInit(): void {
    this.setSubscriptions();
    // console.log('this.showMenuApps :>> ', this.showMenuApps);
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
        this.showMenuApps = state.show_menu_app;
        this.showMenuSession = state.show_menu_session;
      })
    );
  }


  /**
   * -------------------------------------------------------
   * @summary toggleMenuApps
   * @description Cambia el valor del menu de apps obteniendo valor desde localstorage
   * -------------------------------------------------------
   */
  toggleMenuApps() {
    this._reduxService.toggleMenuApps();
  }

  /**
   * -------------------------------------------------------
   * @summary toggleMenuSession
   * @description Cambia el valor del menu de sesiones obteniendo valor desde localstorage
   * -------------------------------------------------------
   */
  toggleMenuSession() {
    this._reduxService.toggleMenuSession();
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
   * @summary ngOnDestroy
   * @description  Destruye conexiones abiertas
   * -------------------------------------------------------
   */
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
