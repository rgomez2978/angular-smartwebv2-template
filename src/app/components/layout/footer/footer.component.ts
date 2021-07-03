import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ReduxService } from '@services/index';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  apiConnect!: boolean;
  apiConsumedES!: boolean;
  apiConsumedEN!: boolean;
  language!: string;

  constructor(
    private _reduxService: ReduxService,
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
    this._subscription = this._store.select('ui').subscribe((state) => {
      this.language = state.language;
      this.apiConnect = state.apiConnect;
      this.apiConsumedES = state.apiConsumedES;
      this.apiConsumedEN = state.apiConsumedEN;
    })
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
   * @summary setTranslate
   * @description Asignacion de cambio del state para translate con redux
   * @param {string} value Valor del idioma a mostran (en-es)
   * -------------------------------------------------------
   */
  setTranslate(value: string) {
    // Activa el tipo de idioma
    this._reduxService.setTranslate(value);

    if (value === 'es' && this.apiConnect && this.apiConsumedES && !this.apiConsumedEN) {
      this._reduxService.setAPIConnect(true, true, false);
      // console.log('YA CARGO JSON EN ESPANOL');
    }
    else if (value === 'en' && this.apiConnect && !this.apiConsumedES && this.apiConsumedEN) {
      this._reduxService.setAPIConnect(true, false, true);
      // console.log('YA CARGO JSON EN INGLES');
    }
    else {
      // if (value === 'es' && this.apiConnect && !this.apiConsumedES && this.apiConsumedEN) {
      //   console.log('CARGO API en ESPAÑOL');
      //   this._reduxService.setAPIConnect(false, false, true);
      // }
      // else if (value === 'en' && this.apiConnect && this.apiConsumedES && !this.apiConsumedEN) {
      //   console.log('CARGO API en INGLES');
      //   this._reduxService.setAPIConnect(false, true, false);
      // }
      // else {
      this._reduxService.setAPIConnect(false, this.apiConsumedES, this.apiConsumedEN);
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
