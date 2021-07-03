import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import { Subscription } from "rxjs";
import { ReduxService } from '@services/index';
// import { LayoutInterface, } from '@interfaces/index';

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

  apiConInfo!: boolean;
  apiConInfoES!: boolean;
  apiConInfoEN!: boolean;

  apiConPolicies!: boolean;
  apiConPoliciesES!: boolean;
  apiConPoliciesEN!: boolean;

  apiConSites!: boolean;
  apiConSitesES!: boolean;
  apiConSitesEN!: boolean;


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
    this._store.select('ui').subscribe((state) => {
      this.language = state.language;
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
   * @description Asignacion de cambio del state para translate con redux
   * @param {string} value Valor del idioma a mostran (en-es)
   * @param {string} page PAgina que se mostrara (en-es)
   * -------------------------------------------------------
   */
  setTranslate(value: string, page: string) {
    this.setSubscriptions();
    // console.log('value :>> ', value, ' page :>> ', page);
    // Activa el tipo de idioma
    this._reduxService.setTranslate(value);

    switch (page) {
      case 'home':
        console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConHome, 'ES:', this.apiConHomeES, ' EN:', this.apiConHomeEN);
        if (value === 'es' && this.apiConHome && this.apiConHomeES && !this.apiConHomeEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectHome(true, true, false);
          console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        else if (value === 'en' && this.apiConHome && !this.apiConHomeES && this.apiConHomeEN) {
          this._reduxService.setAPIConnectLayout(true, false, true);
          this._reduxService.setAPIConnectHome(true, false, true);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        } else {
          this._reduxService.setAPIConnectLayout(false, this.apiConLayoutES, this.apiConLayoutEN);
          this._reduxService.setAPIConnectHome(false, this.apiConHomeES, this.apiConHomeEN);
          console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        break;


      // case 'products':
      //   if (value === 'es' && this.apiConHome && this.apiConHomeES && !this.apiConHomeEN) {
      //     this._reduxService.setAPIConnectHome(true, true, false);
      //     console.log('YA CARGO JSON LAYOUT - ESPANOL');
      //   }
      //   else if (value === 'en' && this.apiConHome && this.apiConHomeES && !this.apiConHomeEN) {
      //     this._reduxService.setAPIConnectHome(true, false, true);
      //     console.log('YA CARGO JSON HOME - INGLES');
      //   } else {
      //     // this._reduxService.setAPIConnectHome(false, this.apiConLayoutES, this.apiConLayoutEN);
      //     // console.log('CONSUME API HOME');
      //   }
      //   break;

      default:
        break;
    }
  }




  /**
   * -------------------------------------------------------
   * @summary getJSON
   * @description  Consumir API - GET
   * @param {string} lang lenguage
   * @param {string} pag lenguage
   * @param {boolean} apiConES status de conexion de api en español
   * @param {boolean} apiConEN status de conexion de api en ingles
   * -------------------------------------------------------
   */
  // getJSON(lang: string, page: string, apiConES: boolean, apiConEN: boolean) {
  //   if (lang === "en") {
  //     this.url = `assets/JSON/${page}/${page}_en.json`;
  //     this._reduxService.setAPIConnect(true, false, true)
  //   }
  //   else {
  //     this.url = `assets/JSON/${page}/${page}_es.json`;
  //     this._reduxService.setAPIConnect(true, true, false)
  //   }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }



  /**
   * -------------------------------------------------------
   * @summary getJSONLayout
   * @description  Consumir API - GET - LAYOUT
   * @param {string} lang lenguage
   * @param {boolean} apiConES status de conexion de api en español
   * @param {boolean} apiConEN status de conexion de api en ingles
   * -------------------------------------------------------
   */
  getJSONLayout(lang: string, apiConES: boolean, apiConEN: boolean) {
    if (lang === "en") {
      this.url = `assets/JSON/layout/layout_en.json`;
      this._reduxService.setAPIConnectLayout(true, false, true)
    }
    else {
      this.url = `assets/JSON/layout/layout_es.json`;
      this._reduxService.setAPIConnectLayout(true, true, false)
    }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


  /**
   * -------------------------------------------------------
   * @summary getJSONHome
   * @description  Consumir API - GET - HOME
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONHome(lang: string, apiConES: boolean, apiConEN: boolean) {
    if (lang === "en") {
      this.url = `assets/JSON/home/home_en.json`;
      this._reduxService.setAPIConnectHome(true, false, true)
    }
    else {
      this.url = `assets/JSON/home/home_es.json`;
      this._reduxService.setAPIConnectHome(true, true, false)
    }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONAbout
  //  * @description  Consumir API - GET - HOME
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONAbout(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/aboutus/aboutus_en.json`; }
  //   else { this.url = `assets/JSON/aboutus/aboutus_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONWhySmart
  //  * @description  Consumir API - GET - HOME
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONWhySmart(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/why_smart/why_smart_en.json`; }
  //   else { this.url = `assets/JSON/why_smart/why_smart_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }


  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONProducts
  //  * @description  Consumir API - GET - PRODUCTOS
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONProducts(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/products/products_en.json`; }
  //   else { this.url = `assets/JSON/products/products_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONPlanes
  //  * @description  Consumir API - GET - PLANES
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONPlanes(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/planes/planes_en.json`; }
  //   else { this.url = `assets/JSON/planes/planes_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONHelp
  //  * @description  Consumir API - GET - HELP MANUALES
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONHelp(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/help/help_en.json`; }
  //   else { this.url = `assets/JSON/help/help_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONNews
  //  * @description  Consumir API - GET - NEWS
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONNews(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/news/news_en.json`; }
  //   else { this.url = `assets/JSON/news/news_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONFaqs
  //  * @description  Consumir API - GET - FAQS
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONFaqs(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/faqs/faqs_en.json`; }
  //   else { this.url = `assets/JSON/faqs/faqs_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONContacts
  //  * @description  Consumir API - GET - CONTACTS
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONContacts(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/contacts/contacts_en.json`; }
  //   else { this.url = `assets/JSON/contacts/contacts_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONPrivacyPolicies
  //  * @description  Consumir API - GET - PRIVACY POLICIES
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONPrivacyPolicies(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/privacy_policies/privacy_policies_en.json`; }
  //   else { this.url = `assets/JSON/privacy_policies/privacy_policies_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }


  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONLegalterms
  //  * @description  Consumir API - GET - LEGAL TERMS
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONLegalterms(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/legal_terms/legal_terms_en.json`; }
  //   else { this.url = `assets/JSON/legal_terms/legal_terms_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }

  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONRelatedSites
  //  * @description  Consumir API - GET - RELATED SITES
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONRelatedSites(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/related_sites/related_sites_en.json`; }
  //   else { this.url = `assets/JSON/related_sites/related_sites_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }


  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSONSiteMap
  //  * @description  Consumir API - GET - SITE MAP
  //  * @param {string} lang lenguage
  //  * @param {string} page pagina de json a cargar
  //  * -------------------------------------------------------
  //  */
  // getJSONSiteMap(lang: string) {
  //   if (lang === "en") { this.url = `assets/JSON/sitemap/sitemap_en.json`; }
  //   else { this.url = `assets/JSON/sitemap/sitemap_es.json`; }
  //   // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
  //   return this._http.get<any>(this.url, this.httpOptions);
  // }





}
