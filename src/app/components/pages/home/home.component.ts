import { Component, OnInit, OnDestroy } from "@angular/core";
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
      this._subscription = this._store.select('ui').subscribe((state) => {
        this.loading = state.loading;
        this.language = state.language;
        this.apiConHome = state.apiConHome;
        this.apiConHomeES = state.apiConHomeES;
        this.apiConHomeEN = state.apiConHomeEN;
        this.getData(this.language)
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
  getData(lang: string) {
    if ((!this.apiConHome && !this.apiConHomeES) || (!this.apiConHome && !this.apiConHomeEN)) {
      this._apiJSONService.getJSON(lang, 'home', true).subscribe(
        (resp: any) => {
          this.data = resp;
          this.dataHeader = resp.header;
          this.dataClients = resp.clients;
          this.dataNews = resp.news;
          // console.log('API consumida ');
          console.log(`HOME => ${lang}`, this.data);
        },
        (error: any) => console.log(`error`, error),
        () => { }
      );
    }
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
