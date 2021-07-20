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
  urlBreadcrumbs!: string;

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
    this.convertUrl(this.urlBreadcrumbs);
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
        this.fullData = state.arrayProducts;
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
  convertUrl(url: string) {
    console.log('url :>> ', url);

    // let sep = url.split('');
    // console.log('sep :>> ', sep);
  }

}
