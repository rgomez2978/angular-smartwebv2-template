import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ReduxService, ApiJsonService } from '@services/index';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  urlActiveLevel1!: string;
  urlActiveLevel2!: string;
  urlBreadcrumbs!: any;
  fullBreadcrumbs: any = [];

  language!: string;

  constructor(
    private _reduxService: ReduxService,
    private _apiJsonService: ApiJsonService,
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
        this.urlActiveLevel1 = state.urlActive1;
        this.urlActiveLevel2 = state.urlActive2;
        this.urlBreadcrumbs = state.urlBreadcrumbs;
        this.language = state.language;
      })
    );
  }

  /**
   * -------------------------------------------------------
   * @summary setTranslate
   * @description Asignacion de cambio del state para translate con redux,
   * Activa el tipo de idioma y bloque nuevo consumo de api
   * @param {string} value Valor del idioma a mostran (en-es)
   * -------------------------------------------------------
   */
  setTranslate(value: string) {
    let url = this.urlBreadcrumbs;
    let urlFinal = '';
    let page = this.urlActiveLevel1.split('/')[1];
    // console.log(`page`, page)
    console.log(`url`, url)
    if (page === 'resources' && url.length >= 3) {
      if (url[3] === undefined) {
        urlFinal = url[2]
      } else {
        if (url[2] === 'news') {
          urlFinal = 'news';
        } else {
          switch (url[3]) {
            case 'search':
              urlFinal = 'help_search';
              break;
            case 'details':
              urlFinal = 'help_details';
              break;
            default:
              urlFinal = 'help_features';
              break;
          }
        }
      }
      this._apiJsonService.setTranslate(value, urlFinal);
    } else {
      this._apiJsonService.setTranslate(value, page);
    }
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
