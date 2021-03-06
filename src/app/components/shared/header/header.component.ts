import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  @Input() type!: string;
  videoSource!: string;
  title!: string;
  showBtnVideo: boolean = true;
  urlBreadcrumbs!: any;
  fullData: any = [];
  elmentR!: any;

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
   * @summary getRefHtml
   * @description trae la capa elemento del DOM desde el componente hijo -  app-media con el output
   * @param {any} event elemento html traido
   * -------------------------------------------------------
   */
  getRefHtml(event: any) {
    this.elmentR = event;
  }

  /**
   * -------------------------------------------------------
   * @summary playVideo
   * @description DA play o pausa al video dependiendo del boto visdible
   * -------------------------------------------------------
   */
  playVideo() {
    this.showBtnVideo = !this.showBtnVideo;
    let event = this.elmentR;
    if (!this.showBtnVideo) {
      event.play();
    } else {
      event.pause();
    }
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
