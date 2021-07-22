import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center-list.component.html',
  styleUrls: ['./help-center-list.component.scss']
})
export class HelpCenterListComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  fullData: any = [];
  dataProducts: any = [];
  dataFeatures: any = [];
  loading!: boolean;
  type: any;

  language!: string;
  apiConHelpFeatures!: boolean;
  apiConHelpFeaturesES!: boolean;
  apiConHelpFeaturesEN!: boolean;

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
        // this.apiConHelpFeatures = state.apiConHelpFeatures;
        // this.apiConHelpFeaturesES = state.apiConHelpFeaturesES;
        // this.apiConHelpFeaturesEN = state.apiConHelpFeaturesEN;
        // this.fullData = state.arrayHelpFeatures;
        if (this.apiConHelpFeatures !== undefined && this.apiConHelpFeaturesES !== undefined && this.apiConHelpFeaturesEN !== undefined) {
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
    if (!this.apiConHelpFeatures && (!this.apiConHelpFeaturesES || !this.apiConHelpFeaturesEN)) {
      this._apiJSONService.getJSON(lang, 'help_features', true).subscribe(
        (resp: any) => {
          this.data = resp;
          if (this.data !== undefined) {
            // this._reduxService.setArrayHelpFeatures(this.data, lang);
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
   * @summary getIdData
   * @description Obtiene la data por el ID, y la posicion del arreglo
   * @param {any} array arraglo a buscar
   * @param {number} idProduct numero o id del producto a buscar
   * @param {number} idFeature numero o id de kla caracteristica dentro del producto a buscar
   * -------------------------------------------------------
   */
  getIdData(array: any, idProduct: number, idFeature: number) {
    let filterProd = array.filter((opt: any) => opt.id === idProduct);
    return filterProd[0].nodes.find((feat: any) => feat.id === idFeature);
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
      this._activatedRoute.params.subscribe((params) => {
        this.data = this.getIdData(array.features, Number(params['product']), Number(params['feature']));
        this.dataProducts = this.data;
        this.dataFeatures = this.data.nodes;
        // console.log(`this.dataProducts`, this.dataProducts)
        // console.log(`this.dataFeatures`, this.dataFeatures)
        return this.data;
      });
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
