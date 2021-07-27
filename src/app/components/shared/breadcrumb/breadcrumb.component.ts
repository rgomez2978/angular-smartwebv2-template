import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  @Input() type!: string;
  fullData: any = [];
  fullBreadcrumbs: any = [];
  urlBreadcrumbs!: string;
  title!: string;
  link!: string;
  dataHelp: any = [];
  dataHelpF: any = [];
  dataHelpD: any = [];
  language!: string;

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
        this.language = state.language;
        this.urlBreadcrumbs = state.urlBreadcrumbs;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.dataHelp = state.arrayHelp.apiArray;
        this.dataHelpF = state.arrayHelpF.apiArray;
        this.dataHelpD = state.arrayHelpD.apiArray;
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
    // console.log(`url`, lang, url, this.type)

    this.fullBreadcrumbs = [];
    for (let key in url) {
      if (this.type === 'page') {
        if (key !== undefined || key !== '') {
          // console.log(`url[key]`, url[key]);
          switch (url[key]) {
            case '':
              break;
            case 'resources':
              lang === 'en' ? this.title = 'Resources' : this.title = 'Recursos';
              this.addItemBreadcrumbs(this.title, '/resources');
              break;
            case 'help':
              lang === 'en' ? this.title = 'Help' : this.title = 'Manuales de Uso';
              this.addItemBreadcrumbs(this.title, '/resources/help');
              break;
            case 'search':
              lang === 'en' ? this.title = 'Search' : this.title = 'Busqueda';
              this.addItemBreadcrumbs(this.title, '/resources/help/search');
              break;
            case 'feature':
              this.title = this.dataHelpF.features[0]?.product;
              this.addItemBreadcrumbs(this.title, '');
              this.title = this.dataHelpF.features[0]?.title;
              this.addItemBreadcrumbs(this.title, '');
              break;
            case 'details':
              // console.log(`this.dataHelpD`, this.dataHelpD)
              // this.title = this.dataHelpD.features[0]?.product;
              // this.addItemBreadcrumbs(this.title, '');
              // this.title = this.dataHelpD.features[0]?.title;
              // this.addItemBreadcrumbs(this.title, '');
              break;
            default:
              // console.log(`object`, this.dataHelpF.features[0]?.product)
              // this.title = this.dataHelpF.features[0]?.product;
              // this.addItemBreadcrumbs(this.title, '');
              // this.title = this.dataHelpF.features[0]?.title;
              // this.addItemBreadcrumbs(this.title, '');
              // console.log(`this.dataHelpF.features`, this.dataHelpF.features[0]?.title)
              // let productById = this.dataHelpF.features.find((prod: any) => prod.id === parseInt(url[4]));
              // let featureProductById = productById.nodes.find((feaProd: any) => feaProd.id === parseInt(url[5]));
              // this.addItemBreadcrumbs(productById.title, '');
              // this.addItemBreadcrumbs(featureProductById.title, '');
              break;
          }
        }
      } else {
        this.fullBreadcrumbs = this.data
      }
    }
    // console.log(`this.fullBreadcrumbs`, this.fullBreadcrumbs)
  }

  /**
   * -------------------------------------------------------
   * @summary addItemBreadcrumbs
   * @description  Agregar opbjeto de opciones para la consturccion del breadcrumbs
   * @params {string} title titulo de la opcion
   * @params {string} link enlace a link de seccion o pagina
   * -------------------------------------------------------
   */
  addItemBreadcrumbs(title: string, link: string) {
    this.fullBreadcrumbs.push({
      title: title,
      url: link
    });
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
