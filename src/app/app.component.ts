import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy, } from "@angular/common";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  fullData: any = [];
  dataNavbar: any = [];
  dataFooter: any = [];
  dataClients: any = [];

  loading!: boolean;
  showMenuApps!: boolean;
  showMenuSession!: boolean;

  language!: string;
  apiConLayout!: boolean;
  apiConLayoutES!: boolean;
  apiConLayoutEN!: boolean;

  constructor(
    location: Location,
    private _titleService: Title,
    private _apiJSONService: ApiJsonService,
    private _commonsService: CommonsService,
    private _reduxService: ReduxService,
    private _store: Store<AppState>
  ) { }


  /**
   * -------------------------------------------------------
   * @summary ngOnInit
   * @description  Inicializa funciones al cargar el
   * -------------------------------------------------------
   */
  ngOnInit() {
    this._titleService.setTitle('Smart Suite Tools');
    this._commonsService.setLoading();
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
        this.loading = state.loading;
        this.language = state.language;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.apiConLayout = state.apiConLayout;
        this.apiConLayoutES = state.apiConLayoutES;
        this.apiConLayoutEN = state.apiConLayoutEN;
        this.fullData = state.arrayLayout;
        if (this.apiConLayout !== undefined && this.apiConLayoutES !== undefined && this.apiConLayoutEN !== undefined) {
          this.getDataAPI(this.language)
        }
      })
    );
  }


  /**
   * -------------------------------------------------------
   * @summary getDataAPI
   * @description Retorna la data layout - menu y footer
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getDataAPI(lang: string) {
    if (!this.apiConLayout && (!this.apiConLayoutES || !this.apiConLayoutEN)) {
      this._apiJSONService.getJSON(lang, 'layout', true).subscribe(
        (resp: any) => {
          this.data = resp;
          if (this.data !== undefined) {
            this._reduxService.setArrayLayout(this.data, lang);
            this.getDataArray(this.fullData);
          }
        },
        (error: any) => console.log(`error`, error),
        () => { }
      );
    }
    else {
      this.getDataArray(this.fullData);
    }
  }

  /**
   * -------------------------------------------------------
   * @summary getDataArray
   * @description Obtiene la data del arreglo almacenado en el state
   * @param {any} array arraglo a buscar
   * -------------------------------------------------------
   */
  getDataArray(array: any) {
    if (Object.keys(array).length > 0) {
      this.data = array;
      this.dataNavbar = this.data.navbar;
      this.dataFooter = this.data.footer;
      return this.data;
    }
  }


  /**
   * -------------------------------------------------------
   * @summary closeAllSubMenu
   * @description Asigna el valor del menu de sesiones  y apps obteniendo valor desde redux
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
