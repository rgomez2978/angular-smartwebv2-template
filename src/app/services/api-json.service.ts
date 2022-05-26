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
  apiConPlans!: boolean;
  apiConPlansLang!: string;
  arrayPlans: any = [];
  apiConResources!: boolean;
  apiConResourcesLang!: string;
  arrayResources: any = [];
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
  apiConAbout!: boolean;
  apiConAboutLang!: string;
  arrayAbout: any = [];
  apiConWhy!: boolean;
  apiConWhyLang!: string;
  arrayWhy: any = [];
  apiConLegal!: boolean;
  apiConLegalLang!: string;
  arrayLegal: any = [];
  apiConPolicies!: boolean;
  apiConPoliciesLang!: string;
  arrayPolicies: any = [];
  apiConSites!: boolean;
  apiConSitesLang!: string;
  arraySites: any = [];
  apiConContacts!: boolean;
  apiConContactsLang!: string;
  arrayContacts: any = [];

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
        this.apiConLayout = state.apiConLayout.apiCon;
        this.apiConLayoutLang = state.apiConLayout.apiLang;
        this.apiConHome = state.apiConHome.apiCon;
        this.apiConHomeLang = state.apiConHome.apiLang;
        this.apiConProducts = state.apiConProducts.apiCon;
        this.apiConProductsLang = state.apiConProducts.apiLang;
        this.apiConPlans = state.apiConPlans.apiCon;
        this.apiConPlansLang = state.apiConPlans.apiLang;
        this.apiConResources = state.apiConResources.apiCon;
        this.apiConResourcesLang = state.apiConResources.apiLang;
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
        this.apiConAbout = state.apiConAbout.apiCon;
        this.apiConAboutLang = state.apiConAbout.apiLang;
        this.apiConWhy = state.apiConWhy.apiCon;
        this.apiConWhyLang = state.apiConWhy.apiLang;
        this.apiConLegal = state.apiConLegal.apiCon;
        this.apiConLegalLang = state.apiConLegal.apiLang;
        this.apiConPolicies = state.apiConPolicies.apiCon;
        this.apiConPoliciesLang = state.apiConPolicies.apiLang;
        this.apiConSites = state.apiConSites.apiCon;
        this.apiConSitesLang = state.apiConSites.apiLang;
        this.apiConContacts = state.apiConContacts.apiCon;
        this.apiConContactsLang = state.apiConContacts.apiLang;
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
      case 'plans':
        if (lang === this.apiConPlansLang && this.apiConPlans) {
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
          this._reduxService.setAPIConnect('help', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect('help', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'help_details':
        if (lang === this.apiConHelpDLang && this.apiConHelpD) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect('help', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect('help', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'help_search':
        if (lang === this.apiConHelpSLang && this.apiConHelpS) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect('help', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect('help', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'news':
        if (lang === this.apiConHelpLang && this.apiConHelp) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'news_details':
        if (lang === this.apiConNewsDLang && this.apiConHelpD) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect('news', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect('news', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'aboutus':
        if (lang === this.apiConAboutLang && this.apiConAbout) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'whysmart':
        if (lang === this.apiConWhyLang && this.apiConWhy) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'legal':
        if (lang === this.apiConLegalLang && this.apiConLegal) {
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
      case 'contacts':
        if (lang === this.apiConContactsLang && this.apiConContacts) {
          this._reduxService.setAPIConnect('layout', true, lang);
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
          this._reduxService.setAPIConnect(page, false, lang);
        }
        break;
      case 'layout':
        if (lang === this.apiConLayoutLang && this.apiConLayout) {
          this._reduxService.setAPIConnect(page, true, lang);
        } else {
          this._reduxService.setAPIConnect('layout', false, lang);
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
    lang === 'en' ? this.url = `assets/JSON/${page}/${page}_en.json` : this.url = `assets/JSON/${page}/${page}_es.json`;
    this._reduxService.setAPIConnect(page, conApi, lang);
    this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
    return this.conexReturn;
  }
//



}
