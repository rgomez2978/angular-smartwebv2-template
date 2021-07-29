import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService } from '@services/index';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-help-center-detail',
  templateUrl: './help-center-detail.component.html',
  styleUrls: ['./help-center-detail.component.scss']
})
export class HelpCenterDetailComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  data: any = [];
  dataContent: any = [];
  type: any;
  language!: string;
  apiConHelpD!: boolean;
  fullData: any = [];
  currentSection: string = 'section0';

  constructor(
    private _titleService: Title,
    private _apiJSONService: ApiJsonService,
    private _reduxService: ReduxService,
    private _store: Store<AppState>,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any

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
        this.language = state.language;
      })
    );
    this._subscription.add(
      this._store.select('api').subscribe((state) => {
        this.apiConHelpD = state.apiConHelpD.apiCon;
        this.fullData = state.arrayHelpD.apiArray;
        if (this.apiConHelpD !== undefined) {
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
    if (!this.apiConHelpD) {
      this._apiJSONService.getJSON(lang, 'help_details', true).subscribe(
        (resp: any) => {
          this.data = resp;
          if (this.data !== undefined) {
            // console.log(`this.data`, this.data)
            this._reduxService.setArray('help_details', this.data, lang);
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
      this.dataContent = this.data.content;
      return this.data;
    }
  }



  /**
   * -------------------------------------------------------
   * @summary onSectionChange
   * @description obtiene el nombre del id o seccion seleccionada
   * @param {string} sectionId nombre del id o seccion
   * -------------------------------------------------------
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }



  /**
   * -------------------------------------------------------
   * @summary scrollTo
   * @description Realiza scroll a la seccion seleccionada
   * @param {string} sectionId nombre del id o seccion
   * -------------------------------------------------------
   */
  scrollTo(section: any) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#' + section,
      duration: 400,
      scrollOffset: 150,
      verticalScrolling: true,
      interruptible: false,
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
