import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  fullData: any = [];
  dataHeader: any = [];
  dataClients: any = [];
  dataProducts: any = [];
  dataNews: any = [];
  loading!: boolean;

  language!: string;
  apiConHome!: boolean;
  apiConHomeES!: boolean;
  apiConHomeEN!: boolean;

  constructor(
    private _titleService: Title,
    private _activatedRoute: ActivatedRoute,
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
        this.getDataAPI(this.language);
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.apiConHome = state.apiConHome;
        this.apiConHomeES = state.apiConHomeES;
        this.apiConHomeEN = state.apiConHomeEN;
        this.fullData = state.arrayHome;
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
  getDataAPI(lang: string) {
    if ((!this.apiConHome && !this.apiConHomeES) || (!this.apiConHome && !this.apiConHomeEN)) {
      // console.log('CARGO API');
      this._apiJSONService.getJSON(lang, 'home', true).subscribe(
        (resp: any) => {
          this.data = resp;
          this._reduxService.setArrayHome(this.data, lang);
          this.getDataArray(this.fullData)
          // console.log(`HOME => ${lang}`, this.data);
        },
        (error: any) => console.log(`error`, error),
        () => { }
      );
    } else {
      // console.log('CARGO ARRAY');
      this.getDataArray(this.fullData)
    }
  }

  /**
   * -------------------------------------------------------
   * @summary getTypeProduct
   * @description Obtiene el nombre del producto desde la url
   *  y asigna posicion de arreglo en data
   * @param {any} array arraglo a buscar
   * -------------------------------------------------------
   */
  getDataArray(array: any) {
    this.data = array;
    this.dataHeader = this.data.header;
    this.dataClients = this.data.clients;
    this.dataNews = this.data.news;
    // console.log(`HOME => `, this.data);
    return this.data;
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
