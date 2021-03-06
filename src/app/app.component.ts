import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy, } from "@angular/common";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';
declare let $: any;

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
  dataNavbar: any = [];
  dataFooter: any = [];
  dataClients: any = [];
  showMenuApps!: boolean;
  showMenuSession!: boolean;
  loading!: boolean;
  language!: string;
  apiConLayout!: boolean;
  fullData: any = [];

  constructor(
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
    this.loadJquery();
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
        this.apiConLayout = state.apiConLayout.apiCon;
        this.fullData = state.arrayLayout.apiArray;
        if (this.apiConLayout !== undefined) {
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
    if (!this.apiConLayout) {
      this._apiJSONService.getJSON(lang, 'layout', true).subscribe(
        (resp: any) => {
          this.data = resp;
          if (this.data !== undefined) {
            this._reduxService.setArray('layout', this.data, lang);
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
 * @summary loadJquery
 * @description Carga funcionalidades en jquery
 * -------------------------------------------------------
 */
  loadJquery() {
    $(document).ready(function () {

      $.event.special.touchstart = {
        setup: function (_: any, ns: any, handle: any) {
          this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        }
      };
      $.event.special.touchmove = {
        setup: function (_: any, ns: any, handle: any) {
          this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
        }
      };
      $.event.special.wheel = {
        setup: function (_: any, ns: any, handle: any) {
          this.addEventListener("wheel", handle, { passive: true });
        }
      };
      $.event.special.mousewheel = {
        setup: function (_: any, ns: any, handle: any) {
          this.addEventListener("mousewheel", handle, { passive: true });
        }
      };

    });
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
