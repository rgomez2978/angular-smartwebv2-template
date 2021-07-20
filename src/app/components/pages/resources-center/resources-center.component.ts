import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';

@Component({
  selector: 'app-resources-center',
  templateUrl: './resources-center.component.html',
  styleUrls: ['./resources-center.component.scss']
})
export class ResourcesCenterComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  fullData: any = [];
  dataHeader: any = [];
  dataResources: any = [];
  dataFaqs: any = [];
  dataManuals: any = [];
  dataNews: any = [];
  loading!: boolean;
  type: any;

  language!: string;
  apiConResources!: boolean;
  apiConResourcesES!: boolean;
  apiConResourcesEN!: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
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
      this._store.select('ui').subscribe((state) => {
        this.loading = state.loading;
        this.language = state.language;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.apiConResources = state.apiConResources;
        this.apiConResourcesES = state.apiConResourcesES;
        this.apiConResourcesEN = state.apiConResourcesEN;
        this.fullData = state.arrayResources;
        if (this.apiConResources !== undefined && this.apiConResourcesES !== undefined && this.apiConResourcesEN !== undefined) {
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
    if (!this.apiConResources && (!this.apiConResourcesES || !this.apiConResourcesEN)) {
      this._apiJSONService.getJSON(lang, 'resources', true).subscribe(
        (resp: any) => {
          // console.log('resp :>> ', resp);
          this.data = resp;
          if (this.data !== undefined) {
            this._reduxService.setArrayResources(this.data, lang);
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
      this.dataManuals = this.data.manuals;
      this.dataFaqs = this.data.faqs;
      this.dataNews = this.data.news;
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
