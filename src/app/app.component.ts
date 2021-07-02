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
  dataNavbar: any = [];
  dataFooter: any = [];
  dataClients: any = [];

  loading!: boolean;
  showMenuApps!: boolean;
  showMenuSession!: boolean;

  language!: string;
  initLang!: boolean;

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
        this.initLang = state.initLang;
        this._apiJSONService.getJSONLayout(state.language).subscribe(
          (resp: any) => {
            this.data = resp;
            this.dataNavbar = resp.navbar;
            this.dataFooter = resp.footer;
            console.log(`LAYOUT => ${state.language}`, this.data);
          },
          (error: any) => console.log(`error`, error),
          () => { }
        );

      })
    );
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
        }, 300);
      });
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
   * @summary ngOnDestroy
   * @description  Destruye conexiones abiertas
   * -------------------------------------------------------
   */
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this._subscription.unsubscribe();
  }
}
