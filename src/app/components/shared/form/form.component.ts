import { Component, Input, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";
import { ApiJsonService, ReduxService, CommonsService } from '@services/index';
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment.prod";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  @ViewChild("myObject", { read: ElementRef }) myObjectElement!: ElementRef;
  @Input() data: any;
  @Input() type!: string;
  language!: string;
  dataContent: any = [];
  apiConHelpS!: boolean;
  apiConHelpSLang!: string;
  fullData: any = [];
  dataObjects: any = [];
  infoObjects: boolean = false;
  loadForm: boolean = false;
  messageSending!: string;
  messageSendingType!: boolean;
  url!: string;
  validForm!: string;
  responseMessage!: string;
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  public frmSend!: FormGroup;
  // public frmSend!: FormGroup;


  constructor(
    private _apiJSONService: ApiJsonService,
    private _reduxService: ReduxService,
    private _store: Store<AppState>,
    private _router: Router,
    private _fb: FormBuilder,
    private _renderer: Renderer2,
    private _http: HttpClient
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
   * @summary ngAfterViewInit
   * @description  Inicializa funciones una vez que el
   * componente haya sido inicializado
   * -------------------------------------------------------
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.infoObjects = true;
      this.dataObjects = this.data[0]?.form[0]?.objects;
      let typeForm = this.data[0]?.form[0]?.name;
      if (typeForm === 'frmSendContacts') {
        if (this.infoObjects && this.dataObjects.length > 0) {
          this.loadAttribute();
          this.initFormArraySend();
        }
      }
    }, 100);
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
   * @summary loadAttribute
   * @description Recorrer la posicion de objects de un form y le asigna la directiva desde el arreglo
   * -------------------------------------------------------
   */
  loadAttribute() {
    if (this.loadForm && this.infoObjects && this.dataObjects.length > 0) {
      this.dataObjects.map((field: any) => {
        field.properties.forEach((control: any) => {
          if (control.directive !== "") {
            setTimeout(() => {
              let elem = document.querySelector("#" + control.field_name);
              this._renderer.addClass(elem, control.directive);
            }, 50);
          }
        });
      });
    }
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
    this.frmSend = this._fb.group({
      fcn_search: ['', [],],
    });
  }



  /**
   * -------------------------------------------------------
   * @summary initFormArraySend
   * @description Recorrer la posicion de objects de un form y los carga en el
   * formArray con form builder
   * -------------------------------------------------------
   */
  initFormArraySend() {
    this.loadForm = true;
    if (this.loadForm && this.infoObjects && this.dataObjects.length > 0) {
      const sendContactsGroup: FormGroup = new FormGroup({});
      this.dataObjects.map((field: any) => {
        field.properties.forEach((control: any) => {
          sendContactsGroup.addControl(control.fcname, this._fb.control("", []));
          this.setValidator(sendContactsGroup, control.fcname, control);
          this.frmSend = sendContactsGroup;
        });
      });
    }
  }




  /**
   * -------------------------------------------------------
   * @summary setValidator
   * @description Valida la informacion y crea arreglo de validators
   * @param {FormGroup} fgroup - formGropu
   * @param {string} fcname - formControlName
   * @param {array} object - informacion de cada objeto del form
   * -------------------------------------------------------
   */
  setValidator(fgroup: FormGroup, fcname: string, object: any) {
    const otherValidators = [];
    // formControlName - Required
    if (object.required) {
      otherValidators.push(Validators.required);
      this.addValidator(fgroup, fcname, otherValidators);
    }
    // formControlName - minLength;
    if (object.minLength !== null) {
      otherValidators.push(Validators.minLength(object.minLength));
      this.addValidator(fgroup, fcname, otherValidators);
    }
    // formControlName - maxLength;
    if (object.maxLength !== null) {
      otherValidators.push(Validators.maxLength(object.maxLength));
      this.addValidator(fgroup, fcname, otherValidators);
    }
    // formControlName - Email;
    if (object.type === "email") {
      otherValidators.push(
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      );
      this.addValidator(fgroup, fcname, otherValidators);
    }
    // formControlName - Phone;
    if (object.type === "phone") {
      // (+58) 424 241.46.88
      otherValidators.push(
        Validators.pattern(
          "^\\(\\+\\s*[0-9]{1,3}\\)\\s*[0-9]{3}\\s*[0-9]{2,3}\\.\\s*[0-9]{2}\\.\\s*[0-9]{2}$"
        )
      );
      this.addValidator(fgroup, fcname, otherValidators);
    }
    // formControlName - Password;
    if (object.type === "password") {
      otherValidators.push(Validators.pattern("^[a-zA-Z0-9_.-]{8,15}$"));
      this.addValidator(fgroup, fcname, otherValidators);
    }
    // formControlName - Password;
    if (object.type === "username") {
      otherValidators.push(Validators.pattern("^[a-z0-9]{8,15}$"));
      this.addValidator(fgroup, fcname, otherValidators);
    }
  }




  /**
   * -------------------------------------------------------
   * @summary addValidator
   * @description Agregar los validators al formGroup
   * @param {FormGroup} fgroup - formGropu
   * @param {string} fcname - formControlName
   * @param {validator} arreglo de validators
   * -------------------------------------------------------
   */
  addValidator(fgroup: FormGroup, fcname: string, validator: any) {
    fgroup.controls[fcname].setValidators(validator);
    fgroup.controls[fcname].updateValueAndValidity();
  }

  /**
   * -------------------------------------------------------
   * @summary invalidValue
   * @description Retorna si se ha hecho touch  o si el estatus es invalid en un formControlName
   * @param {string} fcname - formControlName
   * -------------------------------------------------------
   */
  invalidValue(fcname: string) {
    return this.frmSend.get(fcname)?.invalid && this.frmSend.get(fcname)?.touched;
  }


  /**
   * -------------------------------------------------------
   * @summary validateForm
   * @description Valida si el formulario es invalido
   * @param {string} fcname - formControlName
   * -------------------------------------------------------
   */
  validateForm() {
    if (this.frmSend.invalid) {
      return Object.values(this.frmSend.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
  }


  /**
   * -------------------------------------------------------
   * @summary setMessage
   * @description Recibe y asigna el mensaje a mostrar
   * @param {string} msj - Mensaje a mostrar
   * @param {boolean} type - Tipo de mensaje
   * -------------------------------------------------------
   */
  setMessage(msj: string, type: boolean) {
    this.messageSending = msj;
    this.messageSendingType = type;
  }



  /**
   * -------------------------------------------------------
   * @summary sendForm
   * @description Envio de formulario
   * @param {string} typeForm - Tipo de formulario
   *
   * -------------------------------------------------------
   */
  sendForm(data: any, typeForm: string) {
    switch (typeForm) {
      case "search_help":
        this.searchFormSubmit(this.frmSend);
        break;
      case "contacts":
        this.url = `${environment.mailURL}/assets/mail/mail_contact.php`;
        this.validateForm();
        this.onSubmit(this.frmSend, this.url);
        break;
      default:
        break;
    }
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
 * @summary onSubmit
 * @description Validacion para envio de formulario final
 * @param {FormGroup} fgroup - formGrop
 * @param {string} url - url de archivo php
 * -------------------------------------------------------
 */
  onSubmit(fgroup: FormGroup, url: string) {
    if (fgroup.status == "VALID") {
      fgroup.disable(); // Se deshabilita el formulario para evitar doble envio
      this.isLoading = true; // Status del proceso iniciado
      this.submitted = false; // Status de mensaje de respuetas del envio
      this._http
        .post(url, fgroup.value, { responseType: "text" })
        .subscribe(
          (response) => {
            if (response === "true") {
              this.setMessage("Solicitud enviada!", true);
            } else {
              this.setMessage(
                "Error en el envio de solicitud, dominio del correo no existente",
                false
              );
            }
            this.submitted = true; // Status de mensaje de respuetas del envio
            this.isLoading = false; // Status del proceso finalizado
            fgroup.enable(); // Se habilita el formulario para el envio
            fgroup.reset(); // Se limpian todos los campos
          },
          (error) => {
            this.setMessage(
              "Error en el envio de solicitud, intente nuevamente",
              false
            );
            this.submitted = true; // Status de mensaje de respuetas del envio
            this.isLoading = false; // Status del proceso finalizado
            fgroup.enable(); // Se habilita el formulario para el envio
            fgroup.reset(); // Se limpian todos los campos
            console.warn(`error => `, error);
          }
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
