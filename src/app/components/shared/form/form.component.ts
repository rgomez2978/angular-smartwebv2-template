import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public frmSearchSend!: FormGroup;
  private _subscription: Subscription = new Subscription();
  @Input() data: any;
  @Input() type!: string;
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  language!: string;
  dataContent: any = [];
  apiConHelpS!: boolean;
  apiConHelpSLang!: string;
  fullData: any = [];

  constructor(
    private _fb: FormBuilder,
    private _apiJSONService: ApiJsonService,
    private _reduxService: ReduxService,
    private _store: Store<AppState>,
    private _router: Router,


  ) { }

  /**
   * -------------------------------------------------------
   * @summary ngOnInit
   * @description  Inicializa funciones al cargar el
   * -------------------------------------------------------
   */
  ngOnInit(): void {
    this.initFormArray();
    this.setSubscriptions();

  }

  /**
   * -------------------------------------------------------
   * @summary initFormArray
   * @description Recorrer la posicion de objects de un form y los carga en el
   * formArray con form builder
   * -------------------------------------------------------
   */
  initFormArray() {
    const sendContactsGroup: FormGroup = new FormGroup({});
    this.frmSearchSend = this._fb.group({
      fcn_search: ['', [],],
    });
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
        this.fullData = state.arrayHelpS.apiArray;
      })
    );
  }
  /**
   * -------------------------------------------------------
   * @summary searchFormSubmit
   * @description Validacion para envio de formulario search final
   * @param {FormGroup} fgroup - formGrop
   * @param {string} term - Palabra a buscar
   * -------------------------------------------------------
   */
  searchFormSubmit(fgroup: FormGroup) {
    if (fgroup.status == "VALID") {
      console.log(`fgroup`, fgroup, fgroup.controls.fcn_search.value)
      this._apiJSONService.getJSON(this.language, 'help_search', true).subscribe(
        (resp: any) => {
          if (resp !== undefined) {
            this._reduxService.setArray('help_search', resp, this.language);
            this._router.navigate(['/resources/help/search']);
          }
        },
        (error: any) => console.log(`error`, error),
        () => { }
      );
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
