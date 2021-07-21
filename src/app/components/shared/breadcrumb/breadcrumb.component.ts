import { Component, OnInit, OnDestroy } from "@angular/core";
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
  loading!: boolean;
  type: any;
  fullData: any = [];
  fullBreadcrumbs: any = [];
  urlBreadcrumbs!: string;
  title!: string;
  link!: string;

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
      this.convertUrl(this.urlBreadcrumbs, this.fullData, this.language);
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
        this.fullData = state.arrayHelp;
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
  convertUrl(url: any, data: any, lang: string) {
    console.log(`url`, url)
    console.log(`url.length`, url.length)
    console.log(`data`, data)


    this.fullBreadcrumbs = [];

    for (let key in url) {
      if (key !== undefined || key !== '') {
        switch (url[key]) {
          case 'resources':
            lang === 'en' ? this.title = 'Resources' : this.title = 'Recursos';
            this.link = '/resources';
            this.addItemBreadcrumbs(this.title, this.link);
            break;
          case 'help':
            lang === 'en' ? this.title = 'Help' : this.title = 'Manuales de Uso';
            this.link = '/resources/help';
            this.addItemBreadcrumbs(this.title, this.link);
            break;
          case 'list':
            let productById = data.products.find((prod: any) => prod.id === parseInt(url[4]));
            this.addItemBreadcrumbs(productById.title, '');
            let featureProductById = productById.nodes.find((feaProd: any) => feaProd.id === parseInt(url[5]));
            console.log(`featureProductById`, featureProductById)
            // this.addItemBreadcrumbs(featureProductById.title, featureProductById.url + '/' + parseInt(url[4]) + '/' + parseInt(url[5]));
            this.addItemBreadcrumbs(featureProductById.title, '');

            break;
          // console.log(`object`, url[key])
        }

      }
    }
    console.log(`this.fullBreadcrumbs`, this.fullBreadcrumbs)

  }


  addItemBreadcrumbs(title: string, link: string) {
    this.fullBreadcrumbs.push({
      title: title,
      link: link
    });
  }

}
