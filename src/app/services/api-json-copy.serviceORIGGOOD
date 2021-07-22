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
  apiConLayout!: boolean;
  apiConLayoutES!: boolean;
  apiConLayoutEN!: boolean;
  apiConHome!: boolean;
  apiConHomeES!: boolean;
  apiConHomeEN!: boolean;
  apiConProducts!: boolean;
  apiConProductsES!: boolean;
  apiConProductsEN!: boolean;
  apiConPlanes!: boolean;
  apiConPlanesES!: boolean;
  apiConPlanesEN!: boolean;
  apiConResources!: boolean;
  apiConResourcesES!: boolean;
  apiConResourcesEN!: boolean;

  apiConHelp!: boolean;
  apiConHelpES!: boolean;
  apiConHelpEN!: boolean;
  apiConHelpFeatures!: boolean;
  apiConHelpFeaturesES!: boolean;
  apiConHelpFeaturesEN!: boolean;
  apiConHelpSearch!: boolean;
  apiConHelpSearchES!: boolean;
  apiConHelpSearchEN!: boolean;

  apiConInfo!: boolean;
  apiConInfoES!: boolean;
  apiConInfoEN!: boolean;

  apiConPolicies!: boolean;
  apiConPoliciesES!: boolean;
  apiConPoliciesEN!: boolean;

  apiConSites!: boolean;
  apiConSitesES!: boolean;
  apiConSitesEN!: boolean;
  conexReturn: any;

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
        this.apiConLayout = state.apiConLayout;
        this.apiConLayoutES = state.apiConLayoutES;
        this.apiConLayoutEN = state.apiConLayoutEN;
        this.apiConHome = state.apiConHome;
        this.apiConHomeES = state.apiConHomeES;
        this.apiConHomeEN = state.apiConHomeEN;
        this.apiConProducts = state.apiConProducts;
        this.apiConProductsES = state.apiConProductsES;
        this.apiConProductsEN = state.apiConProductsEN;
        this.apiConPlanes = state.apiConPlanes;
        this.apiConPlanesES = state.apiConPlanesES;
        this.apiConPlanesEN = state.apiConPlanesEN;
        this.apiConResources = state.apiConResources;
        this.apiConResourcesES = state.apiConResourcesES;
        this.apiConResourcesEN = state.apiConResourcesEN;
        this.apiConHelp = state.apiConHelp;
        this.apiConHelpES = state.apiConHelpES;
        this.apiConHelpEN = state.apiConHelpEN;

        this.apiConHelpFeatures = state.apiConHelpFeatures;
        this.apiConHelpFeaturesES = state.apiConHelpFeaturesES;
        this.apiConHelpFeaturesEN = state.apiConHelpFeaturesEN;
        this.apiConHelpSearch = state.apiConHelpSearch;
        this.apiConHelpSearchES = state.apiConHelpSearchES;
        this.apiConHelpSearchEN = state.apiConHelpSearchEN;

        this.apiConInfo = state.apiConInfo;
        this.apiConInfoES = state.apiConInfoES;
        this.apiConInfoEN = state.apiConInfoEN;
        this.apiConPolicies = state.apiConPolicies;
        this.apiConPoliciesES = state.apiConPoliciesES;
        this.apiConPoliciesEN = state.apiConPoliciesEN;
        this.apiConSites = state.apiConSites;
        this.apiConSitesES = state.apiConSitesES;
        this.apiConSitesEN = state.apiConSitesEN;
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
    console.log('setTranslate :>> ', lang, page);
    this.setSubscriptions();
    this._reduxService.setTranslate(lang);
    this._reduxService.SetLoading(true);

    switch (page) {
      case 'home':
        if (lang === 'es' && this.apiConHome && this.apiConHomeES && !this.apiConHomeEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConHome && !this.apiConHomeES && this.apiConHomeEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'products':
        if (lang === 'es' && this.apiConProducts && this.apiConProductsES && !this.apiConProductsEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConProducts && !this.apiConProductsES && this.apiConProductsEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'planes':
        if (lang === 'es' && this.apiConPlanes && this.apiConPlanesES && !this.apiConPlanesEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConPlanes && !this.apiConPlanesES && this.apiConPlanesEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'resources':
        if (lang === 'es' && this.apiConResources && this.apiConResourcesES && !this.apiConResourcesEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConResources && !this.apiConResourcesES && this.apiConResourcesEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'help':
        if (lang === 'es' && this.apiConHelp && this.apiConHelpES && !this.apiConHelpEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConHelp && !this.apiConHelpES && this.apiConHelpEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'help_features':
        if (lang === 'es' && this.apiConHelpFeatures && this.apiConHelpFeaturesES && !this.apiConHelpFeaturesEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConHelpFeatures && !this.apiConHelpFeaturesES && this.apiConHelpFeaturesEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'help_search':
        if (lang === 'es' && this.apiConHelpSearch && this.apiConHelpSearchES && !this.apiConHelpSearchEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConHelpSearch && !this.apiConHelpSearchES && this.apiConHelpSearchEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'info':
        if (lang === 'es' && this.apiConInfo && this.apiConInfoES && !this.apiConInfoEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConInfo && !this.apiConInfoES && this.apiConInfoEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'policies':
        if (lang === 'es' && this.apiConPolicies && this.apiConPoliciesES && !this.apiConPoliciesEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConPolicies && !this.apiConPoliciesES && this.apiConPoliciesEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
      case 'sites':
        if (lang === 'es' && this.apiConSites && this.apiConSitesES && !this.apiConSitesEN) {
          this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConSites && !this.apiConSitesES && this.apiConSitesEN) {
          this.setAPIConfig(page, true, false, true);
        } else {
          this.setAPIConfig(page, false, this.apiConLayoutES, this.apiConLayoutEN);
        }
        break;
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

    console.log(`getJSON =>`, lang, page, conApi)
    // Ubicacion del ARchivo JSON
    lang === 'en' ? this.url = `assets/JSON/${page}/${page}_en.json` : this.url = `assets/JSON/${page}/${page}_es.json`;

    // VALIDACION DE PAGINA - CONFIGURACION DE RECARGA DE API
    switch (page) {
      // CONEXION API - HOME
      case 'home':
        lang === 'es' ? this._reduxService.setAPIConnectHome(conApi, true, false) : this._reduxService.setAPIConnectHome(conApi, false, true);
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - HPRODUCTS
      case 'products':
        lang === 'es' ? this._reduxService.setAPIConnectProducts(conApi, true, false) : this._reduxService.setAPIConnectProducts(conApi, false, true);
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - RESOURCES
      case 'resources':
        lang === 'es' ? this._reduxService.setAPIConnectResources(conApi, true, false) : this._reduxService.setAPIConnectResources(conApi, false, true);
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - HELP - HOME
      case 'help':
        lang === 'es' ? this._reduxService.setAPIConnectHelp(conApi, true, false) : this._reduxService.setAPIConnectHelp(conApi, false, true);
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - HELP - FEATURES
      case 'help_features':
        lang === 'es' ? this._reduxService.setAPIConnectHelpFeatures(conApi, true, false) : this._reduxService.setAPIConnectHelpFeatures(conApi, false, true);
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - HELP - SEARCH
      case 'help_search':
        lang === 'es' ? this._reduxService.setAPIConnectHelpSearch(conApi, true, false) : this._reduxService.setAPIConnectHelpSearch(conApi, false, true);
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - LAYOUT
      default:
        lang === 'es' ? this._reduxService.setAPIConnectLayout(true, true, false) : this._reduxService.setAPIConnectLayout(true, false, true);
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
    }
    return this.conexReturn;
  }


  /**
   * -------------------------------------------------------
   * @summary setAPIConfig
   * @description  Cambio del state para registro de carga de api en ES y EN  por redux
   * @param {string} pag lenguage
   * @param {boolean} conApi Conexion a api
   * @param {boolean} conApiES Conexion a api ES
   * @param {boolean} conApiEN Conexion a api EN
   * -------------------------------------------------------
   */
  setAPIConfig(pag: string, conAPi: boolean, conApiES: boolean, conApiEN: boolean) {
    switch (pag) {
      case 'home':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectHome(conAPi, conApiES, conApiEN);
        break;
      case 'products':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectProducts(conAPi, conApiES, conApiEN);
        break;
      case 'planes':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectPlanes(conAPi, conApiES, conApiEN);
        break;
      case 'resources':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectResources(conAPi, conApiES, conApiEN);
        break;
      case 'help':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectHelp(conAPi, conApiES, conApiEN);
        break;
      case 'help_features':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectHelpFeatures(conAPi, conApiES, conApiEN);
        break;
      case 'help_search':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectHelpSearch(conAPi, conApiES, conApiEN);
        break;
      case 'info':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectInfo(conAPi, conApiES, conApiEN);
        break;
      case 'policies':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectPolicies(conAPi, conApiES, conApiEN);
        break;
      case 'sites':
        this._reduxService.setAPIConnectLayout(conAPi, conApiES, conApiEN);
        this._reduxService.setAPIConnectSites(conAPi, conApiES, conApiEN);
        break;
    }

  }

}
