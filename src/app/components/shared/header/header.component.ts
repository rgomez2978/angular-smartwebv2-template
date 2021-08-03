import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import { Subscription } from 'rxjs';
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';
import 'magnific-popup';
declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  @Input() type!: string;
  videoSource!: string;
  title!: string;
  showBtnVideo!: boolean;
  urlBreadcrumbs!: any;
  fullData: any = [];

  constructor(
    private _apiJSONService: ApiJsonService,
    private _commonsService: CommonsService,
    private _reduxService: ReduxService,
    private _store: Store<AppState>
  ) { }

  /**
   * -------------------------------------------------------
   * @summary ngOnInit
   * @description  Inicializa funciones al cargar el componente
   * -------------------------------------------------------
   */
  ngOnInit(): void {
    this.videoSource = './assets/video/46864998_480958359846948_3732618213144601967_n.mp4';
    // this.videoSource = 'https://www.youtube.com/watch?v=nlXqp3FVrq8';
    // this.videoSource = './assets/video/uk-brand-campaign.mp4';
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
        this.showBtnVideo = state.show_btnvideo;
        this.urlBreadcrumbs = state.urlBreadcrumbs;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.fullData = state.arrayNews.apiArray;
        this.activeCategoryMenu(this.fullData.header);
      })
    );

  }


  /**
   * -------------------------------------------------------
   * @summary ngAfterViewInit
   * @description  Se llama una única vez, tras inicializar
   * las vistas y sub-vistas del componente.
   * -------------------------------------------------------
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      this._reduxService.setShowBtnVideo(true);
      this.loadJquery();
    }, 2000);
  }




  /**
   * -------------------------------------------------------
   * @summary loadJquery
   * @description Carga funcionalidades en jquery
   * -------------------------------------------------------
   */
  loadJquery() {
    $(document).ready(function () {
      // console.log('CARGA DE MAGNIFIC');
      // Carga de popup de banner de video - magnificPopup
      $('.popup-youtube').magnificPopup({
        disableOn: 120,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
      });

    });
  }


  /**
   * -------------------------------------------------------
   * @summary activeCategoryMenu
   * @description Asigna el valor de true o false al atributo active del menu de categorias
   * @param {array} data areglo de opciones del menu de categorias
   * -------------------------------------------------------
   */
  activeCategoryMenu(data: any) {
    if (data !== undefined) {
      data[0]?.nodes.filter((item: any) => {
        if (item.url === '/resources/news' && this.urlBreadcrumbs[3] === undefined) {
          item.active = true
        } else if (item.url === this.urlBreadcrumbs[3]) {
          item.active = true
        }
        else {
          item.active = false
        }

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
