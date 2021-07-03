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
  dataNavbar: any = [];
  dataFooter: any = [];
  dataClients: any = [];

  loading!: boolean;
  showMenuApps!: boolean;
  showMenuSession!: boolean;

  language!: string;
  apiConnect!: boolean;
  apiConsumedES!: boolean;
  apiConsumedEN!: boolean;

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
      this._subscription = this._store.select('ui').subscribe((state) => {
        this.loading = state.loading;
        this.language = state.language;
        this.apiConnect = state.apiConnect;
        this.apiConsumedES = state.apiConsumedES;
        this.apiConsumedEN = state.apiConsumedEN;
        // console.clear();
        this.getData(this.language)
      })
    );
  }


  /**
   * -------------------------------------------------------
   * @summary getData
   * @description Retorna la data layout - menu y footer
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getData(lang: string) {
    if ((!this.apiConnect && !this.apiConsumedES) || (!this.apiConnect && !this.apiConsumedEN)) {
      this._apiJSONService.getJSONLayout(lang, this.apiConsumedES, this.apiConsumedEN).subscribe(
        (resp: any) => {
          this.data = resp;
          this.dataNavbar = this.data.navbar;
          this.dataFooter = this.data.footer;
          // console.log('API consumida ');
          console.log(`LAYOUT => ${this.language}`, this.data);
        },
        (error: any) => console.log(`error`, error),
        () => { }
      );
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
