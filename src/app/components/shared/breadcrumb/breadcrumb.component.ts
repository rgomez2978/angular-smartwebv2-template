import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  @Input() type!: string;
  loading!: boolean;
  fullData: any = [];
  fullBreadcrumbs: any = [];
  urlBreadcrumbs!: string;
  title!: string;
  link!: string;
  dataHelp: any = [];
  dataHelpF: any = [];

  language!: string;

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

    setTimeout(() => {
      this.data === undefined ? this.convertUrl(this.urlBreadcrumbs, this.language) : this.convertUrl(this.data, this.language);

    }, 200);
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
        this.urlBreadcrumbs = state.urlBreadcrumbs;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.dataHelp = state.arrayHelp.apiArray;
        this.dataHelpF = state.arrayHelpF.apiArray;
      })
    );
  }


  /**
  * -------------------------------------------------------
  * @summary setSubscriptions
  * @description Asignar label y link a cada posicion del objeto
   * @param {string} url Url
  * -------------------------------------------------------
  */
  convertUrl(url: any, lang: string) {
    this.fullBreadcrumbs = [];
    for (let key in url) {
      if (this.type === 'page') {
        if (key !== undefined || key !== '') {
          switch (url[key]) {
            case 'resources':
              lang === 'en' ? this.title = 'Resources' : this.title = 'Recursos';
              this.addItemBreadcrumbs(this.title, '/resources');
              break;
            case 'help':
              lang === 'en' ? this.title = 'Help' : this.title = 'Manuales de Uso';
              this.addItemBreadcrumbs(this.title, '/resources/help');
              break;
            case 'list':
              let productById = this.dataHelpF.features.find((prod: any) => prod.id === parseInt(url[4]));
              let featureProductById = productById.nodes.find((feaProd: any) => feaProd.id === parseInt(url[5]));
              this.addItemBreadcrumbs(productById.title, '');
              this.addItemBreadcrumbs(featureProductById.title, '');
              break;
            case 'search':
              lang === 'en' ? this.title = 'Search' : this.title = 'Busqueda';
              this.addItemBreadcrumbs(this.title, '/resources/help/search');
              break;
          }
        }
      } else {
        this.fullBreadcrumbs = this.data
      }
    }
    // console.log(`this.fullBreadcrumbs`, this.fullBreadcrumbs)

  }


  addItemBreadcrumbs(title: string, link: string) {
    this.fullBreadcrumbs.push({
      title: title,
      url: link
    });
  }

}
