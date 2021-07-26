import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import { Subscription } from "rxjs";
import { ReduxService } from '@services/index';
@Injectable({
  providedIn: 'root'
})
export class ApiJsonService implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  url!: string;
  language!: string;
  conexReturn: any;
  apiConLayout!: boolean;
  apiConLayoutLang!: string;
  arrayLayout: any = [];
  apiConHome!: boolean;
  apiConHomeLang!: string;
  arrayHome: any = [];
  apiConProducts!: boolean;
  apiConProductsLang!: string;
  arrayProducts: any = [];
  apiConPlanes!: boolean;
  apiConPlanesLang!: string;
  arrayPlanes: any = [];
  apiConResources!: boolean;
  apiConResourcesLang!: string;
  arrayResources: any = [];
  apiConInfo!: boolean;
  apiConInfoLang!: string;
  arrayInfo: any = [];
  apiConPolicies!: boolean;
  apiConPoliciesLang!: string;
  arrayPolicies: any = [];
  apiConSites!: boolean;
  apiConSitesLang!: string;
  arraySites: any = [];

  apiConHelp!: boolean;
  apiConHelpLang!: string;
  arrayHelp: any = [];
  apiConHelpF!: boolean;
  apiConHelpFLang!: string;
  arrayHelpF: any = [];
  apiConHelpD!: boolean;
  apiConHelpDLang!: string;
  arrayHelpD: any = [];
  apiConHelpS!: boolean;
  apiConHelpSLang!: string;
  arrayHelpS: any = [];

  apiConNews!: boolean;
  apiConNewsLang!: string;
  arrayNews: any = [];
  apiConNewsD!: boolean;
  apiConNewsDLang!: string;
  arrayNewsD: any = [];
  apiConNewsS!: boolean;
  apiConNewsSLang!: string;
  arrayNewsS: any = [];

  constructor(
    private _http: HttpClient,
    private _reduxService: ReduxService,
    private _store: Store<AppState>
  ) { }

  /**
   * -------------------------------------------------------
   * @summary httpOptions
   * @description  Opciones de cabeceras HTTP
   * -------------------------------------------------------
   */
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  /**
   * -------------------------------------------------------
   * @summary ngOnInit
   * @description  Inicializa funciones al cargar el
   * -------------------------------------------------------
   */
  ngOnInit() {
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
      }),
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        // console.log(`API SERVICE state`, state)
        this.apiConLayout = state.apiConLayout.apiCon;
        this.apiConLayoutLang = state.apiConLayout.apiLang;
        this.apiConHome = state.apiConHome.apiCon;
        this.apiConHomeLang = state.apiConHome.apiLang;
        this.apiConProducts = state.apiConProducts.apiCon;
        this.apiConProductsLang = state.apiConProducts.apiLang;
        this.apiConPlanes = state.apiConPlanes.apiCon;
        this.apiConPlanesLang = state.apiConPlanes.apiLang;
        this.apiConResources = state.apiConResources.apiCon;
        this.apiConResourcesLang = state.apiConResources.apiLang;
        this.apiConInfo = state.apiConInfo.apiCon;
        this.apiConInfoLang = state.apiConInfo.apiLang;
        this.apiConPolicies = state.apiConPolicies.apiCon;
        this.apiConPoliciesLang = state.apiConPolicies.apiLang;
        this.apiConSites = state.apiConSites.apiCon;
        this.apiConSitesLang = state.apiConSites.apiLang;

        this.apiConHelp = state.apiConHelp.apiCon;
        this.apiConHelpLang = state.apiConHelp.apiLang;
        this.apiConHelpF = state.apiConHelpF.apiCon;
        this.apiConHelpFLang = state.apiConHelpF.apiLang;
        this.apiConHelpD = state.apiConHelpD.apiCon;
        this.apiConHelpDLang = state.apiConHelpD.apiLang;
        this.apiConHelpS = state.apiConHelpS.apiCon;
        this.apiConHelpSLang = state.apiConHelpS.apiLang;

        this.apiConNews = state.apiConNews.apiCon;
        this.apiConNewsLang = state.apiConNews.apiLang;
        this.apiConNewsD = state.apiConNewsD.apiCon;
        this.apiConNewsDLang = state.apiConNewsD.apiLang;
        this.apiConNewsS = state.apiConNewsS.apiCon;
        this.apiConNewsSLang = state.apiConNewsS.apiLang;


      })
    );
  }

  /**
 * -------------------------------------------------------
 * @summary ngOnDestroy
 * @description  Destruye conexiones abiertas
 * -------------------------------------------------------
 */
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }


  /**
   * -------------------------------------------------------
   * @summary setTranslate
   * @description Asignacion de cambio del state para translate de cada pagina con redux
   * @param {string} value Valor del idioma a mostran (en-es)
   * @param {string} page PAgina que se mostrara (en-es)
   * -------------------------------------------------------
   */
  setTranslate(lang: string, page: string) {
    // console.log(`setTranslate`, lang, page)
    this.setSubscriptions();
    this._reduxService.setTranslate(lang);
    this._reduxService.SetLoading(true);
    switch (page) {
      case 'home':
        if (lang === this.apiConHomeLang && this.apiConHome) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'products':
        if (lang === this.apiConProductsLang && this.apiConProducts) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'planes':
        if (lang === this.apiConPlanesLang && this.apiConPlanes) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'resources':
        if (lang === this.apiConResourcesLang && this.apiConResources) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'info':
        if (lang === this.apiConInfoLang && this.apiConInfo) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'policies':
        if (lang === this.apiConPoliciesLang && this.apiConPolicies) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'sites':
        if (lang === this.apiConSitesLang && this.apiConSites) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'help':
        if (lang === this.apiConHelpLang && this.apiConHelp) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'help_features':
        if (lang === this.apiConHelpFLang && this.apiConHelpF) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'help_details':
        if (lang === this.apiConHelpDLang && this.apiConHelpD) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'help_search':
        if (lang === this.apiConHelpSLang && this.apiConHelpS) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      default:
        break
    }
  }


  /**
   * -------------------------------------------------------
   * @summary getJSON
   * @description  Consumir API - GET
   * @param {string} lang lenguage
   * @param {string} pag lenguage
   * @param {string} conApi Conexion a api
   * -------------------------------------------------------
   */
  getJSON(lang: string, page: string, conApi: boolean) {
    // console.log(`getJSON =>`, lang, page, conApi)
    lang === 'en' ? this.url = `assets/JSON/${page}/${page}_en.json` : this.url = `assets/JSON/${page}/${page}_es.json`;
    this._reduxService.setAPIConnect(page, conApi, lang);
    this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
    return this.conexReturn;
  }


}
