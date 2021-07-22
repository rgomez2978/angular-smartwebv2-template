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
        this.apiConLayout = state.apiConLayout.apiCon;
        this.apiConLayoutES = state.apiConLayout.apiConEs;
        this.apiConLayoutEN = state.apiConLayout.apiConEs;
        this.apiConHome = state.apiConHome.apiCon;
        this.apiConHomeES = state.apiConHome.apiConEs;
        this.apiConHomeEN = state.apiConHome.apiConEn;
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


    console.log(`this.apiConHome`, this.apiConHome, this.apiConHomeES, this.apiConHomeEN)

    switch (page) {
      case 'home':
        if (lang === 'es' && this.apiConHome && this.apiConHomeES && !this.apiConHomeEN) {
          console.log(`esta en espa;ol`)
          // this.setAPIConfig(page, true, true, false);
        }
        else if (lang === 'en' && this.apiConHome && !this.apiConHomeES && this.apiConHomeEN) {
          console.log(`esta en ingles`)
          // this.setAPIConfig(page, true, false, true);
        } else {
          console.log(`esta en otor`)
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
  setAPIConfig(pag: string, conApi: boolean, conApiES: boolean, conApiEN: boolean) {
    console.log(`setAPIConfig`, pag, conApi, conApiES, conApiEN)
    switch (pag) {
      case 'home':
        this._reduxService.setAPIConnectLayout(conApi, conApiES, conApiEN);
        this._reduxService.setAPIConnectHome(conApi, conApiES, conApiEN);
        break;
    }

  }

}
