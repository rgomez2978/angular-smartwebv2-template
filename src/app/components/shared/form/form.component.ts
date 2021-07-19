import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() type!: string;
  @Input() data: any;

  public frmSend!: FormGroup;
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading

  constructor(
    private _fb: FormBuilder,
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

}
