import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService } from '@services/index';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../pages.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  dataHeader: any = [];
  dataMenu: any = [];
  dataFilter: any = [];
  type: any;
  language!: string;
  message!: string;
  apiConNews!: boolean;
  category!: number;
  fullData: any = [];

  urlBreadcrumbs!: any;
  fullBreadcrumbs: any = [];

  constructor(
    private _titleService: Title,
    private _apiJSONService: ApiJsonService,
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

    if (this.language === 'es') {
      this.message = 'Selecccione una opción';
    } else {
      this.message = 'Please select an option';
    }
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
        this.urlBreadcrumbs = state.urlBreadcrumbs;
        this.language = state.language;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.apiConNews = state.apiConNews.apiCon;
        this.fullData = state.arrayNews.apiArray;
        if (this.apiConNews !== undefined) {
          this.getDataAPI(this.language)
        }
      })
    );
  }



  /**
    * -------------------------------------------------------
    * @summary getDataAPI
    * @description Retorna la data de Resources
    * @param {string} lang lenguage
    * @param {string} page pagina de json a cargar
    * -------------------------------------------------------
    */
  getDataAPI(lang: string) {
    if (!this.apiConNews) {
      this._apiJSONService.getJSON(lang, 'news', true).subscribe(
        (resp: any) => {
          this.data = resp;
          if (this.data !== undefined) {
            this._reduxService.setArray('news', this.data, lang);
            this.getDataArray(this.fullData)
          }
        },
        (error: any) => console.log(`error`, error),
        () => { }
      );
    } else {
      this.getDataArray(this.fullData)
    }
  }



  /**
   * -------------------------------------------------------
   * @summary getDataArray
   * @description Obtiene el nombre del producto desde la url
   *  y asigna posicion de arreglo del state en data
   * @param {any} array arraglo a buscar
   * -------------------------------------------------------
   */
  getDataArray(array: any) {
    if (Object.keys(array).length > 0) {
      this.data = array;
      this.dataHeader = this.data.header;
      this.dataMenu = this.data.menu;
      this.dataFilter = this.data.filter;
      return this.data;
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
