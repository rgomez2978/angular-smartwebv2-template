import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  dataNews: any = [];
  type: any;
  loading!: boolean;
  language!: string;
  apiConNews!: boolean;
  apiConNewsLang!: string;
  fullData: any = [];
  urlBreadcrumbs!: any;


  constructor(
    private _titleService: Title,
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
        this.urlBreadcrumbs = state.urlBreadcrumbs;
        this.loading = state.loading;
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
    * @description Retorna la data de News
    * @param {string} lang lenguage
    * @param {string} page pagina de json a cargar
    * -------------------------------------------------------
    */
  getDataAPI(lang: string) {
    this.getDataArray(this.fullData)
  }





  /**
  * -------------------------------------------------------
  * @summary getCategoryNews
  * @description Obtiene el product por el ID, y la posicion del arreglo
  * @param {any} array arraglo a buscar
  * @param {number} id numero o id del producto a buscar
  * -------------------------------------------------------
  */
  getCategoryNews(array: any, id: number) {
    return array.news.filter((opt: any) => opt.catId === id);
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
      if (this.urlBreadcrumbs[3] === undefined) {
        this.dataNews = this.data.news;
      } else {
        let idcat = this.urlBreadcrumbs[3].substr(3)
        this.dataNews = this.getCategoryNews(array, Number(idcat));
      }
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
