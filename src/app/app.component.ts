import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationStart, NavigationCancel, NavigationEnd, } from "@angular/router";
import { Location, LocationStrategy, PathLocationStrategy, } from "@angular/common";
import { Title } from '@angular/platform-browser';
import { filter } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import * as ownActions from '@redux/actions';
import { Subscription } from "rxjs";
import { ApiJsonService, CommonsService } from '@services/index';

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
  location!: string;
  routerSubscription: any;
  translate!: boolean;

  data: any = [];
  dataESP: any = [];
  dataING: any = [];
  dataNavbar: any = [];
  dataFooter: any = [];
  dataClients: any = [];
  loading!: boolean;
  showMenuApps!: boolean;
  showMenuSession!: boolean;
  language!: string;
  initLang!: boolean;
  apiConnect!: boolean;
  apiConsumedES!: boolean;
  apiConsumedEN!: boolean;

  constructor(
    location: Location,
    private _router: Router,
    private _titleService: Title,
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
  ngOnInit() {
    this._titleService.setTitle('Smart Suite Tools');
    this.setLoading()
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
      this.loading = state.loading;
      this.language = state.language;
      this.initLang = state.initLang;
      this.apiConnect = state.apiConnect;
      this.apiConsumedES = state.apiConsumedES;
      this.apiConsumedEN = state.apiConsumedEN;

      console.log('setSubscriptions this.apiConnect :>> ', this.apiConnect);
      console.log('setSubscriptions this.apiConsumedES :>> ', this.apiConsumedES);
      console.log('setSubscriptions this.apiConsumedEN :>> ', this.apiConsumedEN);
      // console.log('state.arrayES :>> ', state.arrayES.length);
      if ((!this.apiConnect && !this.apiConsumedES) || (!this.apiConnect && !this.apiConsumedEN))  {
        console.log('CONSUMIR API');
        this.getData(this.language);
      }
      else {
        console.log('CONSUMIR ARREGLO');
        // console.log('this.data :>> ', this.data);
        // console.log('this.dataNavbar :>> ', this.dataNavbar);
        // console.log('this.dataFooter :>> ', this.dataFooter);
      }
    })
    // );

    // if (this.data.length == 0 || this.data !== undefined) {
    //   // console.log('ANTES DE CONSUMIR API this.data  :>> ', this.data);
    //   this.getData(this.language)
    // } else {
    //   // console.log('CONSUMIR ARREGLO');
    // }

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
    this._apiJSONService.getJSONLayout(this.language, this.apiConsumedES, this.apiConsumedEN).subscribe(
      (resp: any) => {
        // this.data = [];
        this.data = resp;
        this.dataNavbar = this.data.navbar;
        this.dataFooter = this.data.footer;
        console.log('API consumida ');
        // console.log(`LAYOUT => ${this.language}`, this.data);
      },
      (error: any) => console.log(`error`, error),
      () => { }
    );



    // this._store.dispatch(ownActions.setArrayES({ arrayES: this.data }));

  }




  /**
   * -------------------------------------------------------
   * @summary getData
   * @description  Activa e inactiva el Loading, Cambia el estado del loading cuando cargo la pagina y mada el route a un servicio para luego marcar como active la opcion del menu en base a su url
   * -------------------------------------------------------
   */
  public setLoading() {
    // Muestra loading cuando carga la pagina
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._store.dispatch(ownActions.setLoading({ loading: true }));
      }
    });
    // Quita el loading cuando cargo la pagina y mada el route a un servicio para luego marcar como active la opcion del menu en base a su url
    this.routerSubscription = this._router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationCancel
        )
      )
      .subscribe((event) => {
        this._commonsService.getURlView(event, this._router.url);
        setTimeout(() => {
          this._store.dispatch(ownActions.setLoading({ loading: false }));
        }, 800);
      });
  }


  /**
   * -------------------------------------------------------
   * @summary closeAllSubMenu
   * @description Asigna el valor del menu de sesiones  y apps obteniendo valor desde redux
   * -------------------------------------------------------
   */
  closeAllSubMenu() {
    // this._store.dispatch(ownActions.setMenuSession({ show_menu_session: false }));
    // this._store.dispatch(ownActions.setMenuApps({ show_menu_app: false }));
  }

  /**
   * -------------------------------------------------------
   * @summary ngOnDestroy
   * @description  Destruye conexiones abiertas
   * -------------------------------------------------------
   */
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this._subscription.unsubscribe();
  }
}
