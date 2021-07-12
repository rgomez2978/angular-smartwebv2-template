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
  setTranslate(value: string, page: string) {
    this.setSubscriptions();
    // console.log('value :>> ', value, ' page :>> ', page);
    // Activa el tipo de idioma
    this._reduxService.setTranslate(value);
    this._reduxService.SetLoading(true);

    switch (page) {
      // =====================================================
      // CONEXION API - HOME
      // =====================================================
      case 'home':
        // console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConHome, 'ES:', this.apiConHomeES, ' EN:', this.apiConHomeEN);
        if (value === 'es' && this.apiConHome && this.apiConHomeES && !this.apiConHomeEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectHome(true, true, false);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
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
      // =====================================================
      // CONEXION API - PRODUCTS
      // =====================================================
      case 'products':
        // console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConProducts, 'ES:', this.apiConProductsES, ' EN:', this.apiConProductsEN);

        if (value === 'es' && this.apiConProducts && this.apiConProductsES && !this.apiConProductsEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectProducts(true, true, false);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        else if (value === 'en' && this.apiConProducts && !this.apiConProductsES && this.apiConProductsEN) {
          this._reduxService.setAPIConnectLayout(true, false, true);
          this._reduxService.setAPIConnectProducts(true, false, true);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        } else {
          this._reduxService.setAPIConnectLayout(false, this.apiConLayoutES, this.apiConLayoutEN);
          this._reduxService.setAPIConnectProducts(false, this.apiConProductsES, this.apiConProductsEN);
          console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        break;
      // =====================================================
      // CONEXION API - PLANES
      // =====================================================
      case 'planes':
        console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConPlanes, 'ES:', this.apiConPlanesES, ' EN:', this.apiConPlanesEN);

        if (value === 'es' && this.apiConPlanes && this.apiConPlanesES && !this.apiConPlanesEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectPlanes(true, true, false);
          console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        else if (value === 'en' && this.apiConPlanes && !this.apiConPlanesES && this.apiConPlanesEN) {
          this._reduxService.setAPIConnectLayout(true, false, true);
          this._reduxService.setAPIConnectPlanes(true, false, true);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        } else {
          this._reduxService.setAPIConnectLayout(false, this.apiConLayoutES, this.apiConLayoutEN);
          this._reduxService.setAPIConnectPlanes(false, this.apiConPlanesES, this.apiConPlanesEN);
          console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        break;

      // =====================================================
      // CONEXION API - RESOURCES
      // =====================================================
      case 'resources':
        console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConResources, 'ES:', this.apiConResourcesES, ' EN:', this.apiConResourcesEN);

        if (value === 'es' && this.apiConResources && this.apiConResourcesES && !this.apiConResourcesEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectResources(true, true, false);
          console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        else if (value === 'en' && this.apiConResources && !this.apiConResourcesES && this.apiConResourcesEN) {
          this._reduxService.setAPIConnectLayout(true, false, true);
          this._reduxService.setAPIConnectResources(true, false, true);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        } else {
          this._reduxService.setAPIConnectLayout(false, this.apiConLayoutES, this.apiConLayoutEN);
          this._reduxService.setAPIConnectResources(false, this.apiConResourcesES, this.apiConResourcesEN);
          console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        break;
      // =====================================================
      // CONEXION API - INFO
      // =====================================================
      case 'info':
        console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConInfo, 'ES:', this.apiConInfoES, ' EN:', this.apiConInfoEN);

        if (value === 'es' && this.apiConInfo && this.apiConInfoES && !this.apiConInfoEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectInfo(true, true, false);
          console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        else if (value === 'en' && this.apiConInfo && !this.apiConInfoES && this.apiConInfoEN) {
          this._reduxService.setAPIConnectLayout(true, false, true);
          this._reduxService.setAPIConnectInfo(true, false, true);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        } else {
          this._reduxService.setAPIConnectLayout(false, this.apiConLayoutES, this.apiConLayoutEN);
          this._reduxService.setAPIConnectInfo(false, this.apiConInfoES, this.apiConInfoEN);
          console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        break;
      // =====================================================
      // CONEXION API - POLICIES
      // =====================================================
      case 'policies':
        console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConPolicies, 'ES:', this.apiConPoliciesES, ' EN:', this.apiConPoliciesEN);

        if (value === 'es' && this.apiConPolicies && this.apiConPoliciesES && !this.apiConPoliciesEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectPolicies(true, true, false);
          console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        else if (value === 'en' && this.apiConPolicies && !this.apiConPoliciesES && this.apiConPoliciesEN) {
          this._reduxService.setAPIConnectLayout(true, false, true);
          this._reduxService.setAPIConnectPolicies(true, false, true);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        } else {
          this._reduxService.setAPIConnectLayout(false, this.apiConLayoutES, this.apiConLayoutEN);
          this._reduxService.setAPIConnectPolicies(false, this.apiConPoliciesES, this.apiConPoliciesEN);
          console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        break;
      // =====================================================
      // CONEXION API - SITES
      // =====================================================
      case 'sites':
        console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConSites, 'ES:', this.apiConSitesES, ' EN:', this.apiConSitesEN);

        if (value === 'es' && this.apiConSites && this.apiConSitesES && !this.apiConSitesEN) {
          this._reduxService.setAPIConnectLayout(true, true, false);
          this._reduxService.setAPIConnectSites(true, true, false);
          console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        }
        else if (value === 'en' && this.apiConSites && !this.apiConSitesES && this.apiConSitesEN) {
          this._reduxService.setAPIConnectLayout(true, false, true);
          this._reduxService.setAPIConnectSites(true, false, true);
          console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
        } else {
          this._reduxService.setAPIConnectLayout(false, this.apiConLayoutES, this.apiConLayoutEN);
          this._reduxService.setAPIConnectSites(false, this.apiConSitesES, this.apiConSitesEN);
          console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
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

    // Ubicacion del ARchivo JSON
    if (lang === 'en') {
      this.url = `assets/JSON/${page}/${page}_en.json`;
    } else {
      this.url = `assets/JSON/${page}/${page}_es.json`;
    }

    // VALIDACION DE PAGINA - CONFIGURACION DE RECARGA DE API
    switch (page) {
      // CONEXION API - HOME
      case 'home':
        if (lang === 'en') { this._reduxService.setAPIConnectHome(conApi, false, true) } else { this._reduxService.setAPIConnectHome(conApi, true, false) }
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - HPRODUCTS
      case 'products':
        if (lang === 'en') { this._reduxService.setAPIConnectProducts(conApi, false, true) } else { this._reduxService.setAPIConnectProducts(conApi, true, false) }
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
      // CONEXION API - RESOURCES
      case 'resources':
        if (lang === 'en') { this._reduxService.setAPIConnectResources(conApi, false, true) } else { this._reduxService.setAPIConnectResources(conApi, true, false) }
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;

      // CONEXION API - LAYOUT
      default:
        if (lang === 'en') { this._reduxService.setAPIConnectLayout(true, false, true) } else { this._reduxService.setAPIConnectLayout(true, true, false) }
        this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
        break;
    }
    return this.conexReturn;
  }



  // /**
  //  * -------------------------------------------------------
  //  * @summary setTranslate
  //  * @description Asignacion de cambio del state para translate de cada pagina con redux
  //  * @param {string} value Valor del idioma a mostran (en-es)
  //  * @param {string} page PAgina que se mostrara (en-es)
  //  * -------------------------------------------------------
  //  */
  // setTranslateMALA(value: string, page: string) {
  //   this.setSubscriptions();
  //   // console.log('value :>> ', value, ' page :>> ', page);
  //   // Activa el tipo de idioma
  //   this._reduxService.setTranslate(value);
  //   this._reduxService.SetLoading(true);

  //   switch (page) {
  //     // =====================================================
  //     // CONEXION API - HOME
  //     // =====================================================
  //     case 'home':
  //       // console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConHome, 'ES:', this.apiConHomeES, ' EN:', this.apiConHomeEN);
  //       if (value === 'es' && this.apiConHome && this.apiConHomeES && !this.apiConHomeEN) {
  //         this._reduxService.setAPIConnect('layout', true, true, false);
  //         this._reduxService.setAPIConnect('home', true, true, false);
  //         // console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       else if (value === 'en' && this.apiConHome && !this.apiConHomeES && this.apiConHomeEN) {
  //         this._reduxService.setAPIConnect('layout', true, false, true);
  //         this._reduxService.setAPIConnect('home', true, false, true);
  //         console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       } else {
  //         this._reduxService.setAPIConnect('layout', false, this.apiConLayoutES, this.apiConLayoutEN);
  //         this._reduxService.setAPIConnect('home', false, this.apiConHomeES, this.apiConHomeEN);
  //         // console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       break;
  //     // =====================================================
  //     // CONEXION API - PRODUCTS
  //     // =====================================================
  //     case 'products':
  //       // console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConProducts, 'ES:', this.apiConProductsES, ' EN:', this.apiConProductsEN);

  //       if (value === 'es' && this.apiConProducts && this.apiConProductsES && !this.apiConProductsEN) {
  //         this._reduxService.setAPIConnect('layout', true, true, false);
  //         this._reduxService.setAPIConnect('products', true, true, false);
  //         // console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       else if (value === 'en' && this.apiConProducts && !this.apiConProductsES && this.apiConProductsEN) {
  //         this._reduxService.setAPIConnect('layout', true, false, true);
  //         this._reduxService.setAPIConnect('products', true, false, true);
  //         // console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       } else {
  //         this._reduxService.setAPIConnect('layout', false, this.apiConLayoutES, this.apiConLayoutEN);
  //         this._reduxService.setAPIConnect('products', false, this.apiConProductsES, this.apiConProductsEN);
  //         // console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       break;
  //     // =====================================================
  //     // CONEXION API - PLANES
  //     // =====================================================
  //     case 'planes':
  //       console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConPlanes, 'ES:', this.apiConPlanesES, ' EN:', this.apiConPlanesEN);

  //       if (value === 'es' && this.apiConPlanes && this.apiConPlanesES && !this.apiConPlanesEN) {
  //         this._reduxService.setAPIConnect('layout', true, true, false);
  //         this._reduxService.setAPIConnect('planes', true, true, false);
  //         console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       else if (value === 'en' && this.apiConPlanes && !this.apiConPlanesES && this.apiConPlanesEN) {
  //         this._reduxService.setAPIConnect('layout', true, false, true);
  //         this._reduxService.setAPIConnect('planes', true, false, true);
  //         console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       } else {
  //         this._reduxService.setAPIConnect('layout', false, this.apiConLayoutES, this.apiConLayoutEN);
  //         this._reduxService.setAPIConnect('planes', false, this.apiConPlanesES, this.apiConPlanesEN);
  //         console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       break;

  //     // =====================================================
  //     // CONEXION API - RESOURCES
  //     // =====================================================
  //     case 'resources':
  //       console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConResources, 'ES:', this.apiConResourcesES, ' EN:', this.apiConResourcesEN);

  //       if (value === 'es' && this.apiConResources && this.apiConResourcesES && !this.apiConResourcesEN) {
  //         this._reduxService.setAPIConnect('layout', true, true, false);
  //         this._reduxService.setAPIConnect('resources', true, true, false);
  //         console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       else if (value === 'en' && this.apiConResources && !this.apiConResourcesES && this.apiConResourcesEN) {
  //         this._reduxService.setAPIConnect('layout', true, false, true);
  //         this._reduxService.setAPIConnect('resources', true, false, true);
  //         console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       } else {
  //         this._reduxService.setAPIConnect('layout', false, this.apiConLayoutES, this.apiConLayoutEN);
  //         this._reduxService.setAPIConnect('resources', false, this.apiConResourcesES, this.apiConResourcesEN);
  //         console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       break;
  //     // =====================================================
  //     // CONEXION API - INFO
  //     // =====================================================
  //     case 'info':
  //       console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConInfo, 'ES:', this.apiConInfoES, ' EN:', this.apiConInfoEN);

  //       if (value === 'es' && this.apiConInfo && this.apiConInfoES && !this.apiConInfoEN) {
  //         this._reduxService.setAPIConnect('layout', true, true, false);
  //         this._reduxService.setAPIConnect('info', true, true, false);
  //         console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       else if (value === 'en' && this.apiConInfo && !this.apiConInfoES && this.apiConInfoEN) {
  //         this._reduxService.setAPIConnect('layout', true, false, true);
  //         this._reduxService.setAPIConnect('info', true, false, true);
  //         console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       } else {
  //         this._reduxService.setAPIConnect('layout', false, this.apiConLayoutES, this.apiConLayoutEN);
  //         this._reduxService.setAPIConnect('info', false, this.apiConInfoES, this.apiConInfoEN);
  //         console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       break;
  //     // =====================================================
  //     // CONEXION API - POLICIES
  //     // =====================================================
  //     case 'policies':
  //       console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConPolicies, 'ES:', this.apiConPoliciesES, ' EN:', this.apiConPoliciesEN);

  //       if (value === 'es' && this.apiConPolicies && this.apiConPoliciesES && !this.apiConPoliciesEN) {
  //         this._reduxService.setAPIConnect('layout', true, true, false);
  //         this._reduxService.setAPIConnect('policies', true, true, false);
  //         console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       else if (value === 'en' && this.apiConPolicies && !this.apiConPoliciesES && this.apiConPoliciesEN) {
  //         this._reduxService.setAPIConnect('layout', true, false, true);
  //         this._reduxService.setAPIConnect('policies', true, false, true);
  //         console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       } else {
  //         this._reduxService.setAPIConnect('layout', false, this.apiConLayoutES, this.apiConLayoutEN);
  //         this._reduxService.setAPIConnect('policies', false, this.apiConPoliciesES, this.apiConPoliciesEN);
  //         console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       break;
  //     // =====================================================
  //     // CONEXION API - SITES
  //     // =====================================================
  //     case 'sites':
  //       console.log(`API DEL ${page.toUpperCase()} (${value.toUpperCase()}) ==> `, ' CONEX:', this.apiConSites, 'ES:', this.apiConSitesES, ' EN:', this.apiConSitesEN);

  //       if (value === 'es' && this.apiConSites && this.apiConSitesES && !this.apiConSitesEN) {
  //         this._reduxService.setAPIConnect('layout', true, true, false);
  //         this._reduxService.setAPIConnect('sites', true, true, false);
  //         console.log(`XXXX YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       else if (value === 'en' && this.apiConSites && !this.apiConSitesES && this.apiConSitesEN) {
  //         this._reduxService.setAPIConnect('layout', true, false, true);
  //         this._reduxService.setAPIConnect('sites', true, false, true);
  //         console.log(`YA CARGO JSON ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       } else {
  //         this._reduxService.setAPIConnect('layout', false, this.apiConLayoutES, this.apiConLayoutEN);
  //         this._reduxService.setAPIConnect('sites', false, this.apiConSitesES, this.apiConSitesEN);
  //         console.log(`CONSUME API ${page.toUpperCase()} - ${value.toUpperCase()}`);
  //       }
  //       break;
  //   }
  // }



  // /**
  //  * -------------------------------------------------------
  //  * @summary getJSON
  //  * @description  Consumir API - GET
  //  * @param {string} lang lenguage
  //  * @param {string} pag lenguage
  //  * @param {string} conApi Conexion a api
  //  * -------------------------------------------------------
  //  */
  // getJSONFULL(lang: string, page: string, conApi: boolean) {

  //   // Ubicacion del ARchivo JSON
  //   if (lang === 'en') {
  //     this.url = `assets/JSON/${page}/${page}_en.json`;
  //   } else {
  //     this.url = `assets/JSON/${page}/${page}_es.json`;
  //   }

  //   // VALIDACION DE PAGINA - CONFIGURACION DE RECARGA DE API
  //   switch (page) {
  //     // CONEXION API - HOME
  //     case 'home':
  //       if (lang === 'en') { this._reduxService.setAPIConnect('home', conApi, false, true) } else { this._reduxService.setAPIConnect('home', conApi, true, false) }
  //       this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
  //       break;
  //     // CONEXION API - HOME
  //     case 'products':
  //       if (lang === 'en') { this._reduxService.setAPIConnect('products', conApi, false, true) } else { this._reduxService.setAPIConnect('products', conApi, true, false) }
  //       this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
  //       break;

  //     // CONEXION API - LAYOUT
  //     default:
  //       if (lang === 'en') { this._reduxService.setAPIConnect('layout', true, false, true) } else { this._reduxService.setAPIConnect('layout', true, true, false) }
  //       this.conexReturn = this._http.get<any>(this.url, this.httpOptions);
  //       break;
  //   }
  //   return this.conexReturn;
  // }






}
