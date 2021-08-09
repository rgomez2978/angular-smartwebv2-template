import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import { Subscription } from 'rxjs';
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';
import 'magnific-popup';
declare let $: any;
@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit, AfterViewInit {
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  @Input() type!: string;
  title!: string;
  showBtnVideo!: boolean;

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
        this.showBtnVideo = state.show_btnvideo;
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
   * @summary ngOnDestroy
   * @description  Destruye conexiones abiertas
   * -------------------------------------------------------
   */
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
