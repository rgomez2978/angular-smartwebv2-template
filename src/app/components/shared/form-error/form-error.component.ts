import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() data: any;
  @Input() fcn!: string;
  @Input() min!: number;
  @Input() max!: number;
  @Input() msj!: string;
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void { }

  /**
   * -------------------------------------------------------
   * @summary getLength
   * @description obtiene el lenght
   * @param {string} fcname - formControlName
   * @param {FormGroup} fgroup - formControlName
   * -------------------------------------------------------
   */
  getLength(fgroup: FormGroup, fcname: string) {
    return fgroup.get(fcname)?.value?.length;
  }

  /**
   * -------------------------------------------------------
   * @summary invalidValue
   * @description Retorna si se ha hecho touch  o si el estatus es invalid en un formControlName
   * @param {FormGroup} fgroup - formControlName
   * @param {string} fcname - formControlName
   * -------------------------------------------------------
   */
  invalidValue(fgroup: FormGroup, fcname: string) {
    // console.log(`fgroup`, fgroup)
    return fgroup.get(fcname)?.invalid && fgroup.get(fcname)?.touched;
  }

}
