import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  fullData: any = [];
  dataHeader: any = [];
  dataProducts: any = [];
  dataSpecifications: any = [];
  dataDetail: any = [];
  dataCta: any = [];
  dataTestimonials: any = [];
  loading!: boolean;
  type: any;

  language!: string;
  apiConProducts!: boolean;
  apiConProductsES!: boolean;
  apiConProductsEN!: boolean;

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
        // this.apiConProducts = state.apiConProducts;
        // this.apiConProductsES = state.apiConProductsES;
        // this.apiConProductsEN = state.apiConProductsEN;
        // this.fullData = state.arrayProducts;
        if (this.apiConProducts !== undefined && this.apiConProductsES !== undefined && this.apiConProductsEN !== undefined) {
          this.getDataAPI(this.language)
        }
      })
    );
  }


  /**
   * -------------------------------------------------------
   * @summary getDataAPI
   * @description Retorna la data de products
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getDataAPI(lang: string) {
    if (!this.apiConProducts && (!this.apiConProductsES || !this.apiConProductsEN)) {
      this._apiJSONService.getJSON(lang, 'products', true).subscribe(
        (resp: any) => {
          this.data = resp;
          if (this.data !== undefined) {
            // this._reduxService.setArrayProducts(this.data, lang);
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
   * @summary getIdProduct
   * @description Obtiene el product por el ID, y la posicion del arreglo
   * @param {any} array arraglo a buscar
   * @param {number} id numero o id del producto a buscar
   * -------------------------------------------------------
   */
  getIdProduct(array: any, id: number) {
    // console.log('array :>> ', array, 'id :>> ', id);
    return array.find((opt: any) => opt.id === Number(id));
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
        this.type = params["id"];
        this.data = this.getIdProduct(array, this.type);
        this.dataHeader = this.data.header;
        this.dataSpecifications = this.data.specifications;
        this.dataDetail = this.dataSpecifications[0]?.detail;
        this.dataCta = this.dataSpecifications[0]?.cta;
        this.dataTestimonials = this.dataSpecifications[0]?.testimonials;
        // console.log(`PRODUCTS FILTRADO => `, this.data);
        // console.log(`PRODUCTS FILTRADO LONGITUD OBJECT => `, Object.keys(this.data).length);
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
