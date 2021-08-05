import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() data: any;
  @Input() type!: string;
  isOpen!: boolean;
  toggle: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  /**
   * -------------------------------------------------------
   * @summary activateItem
   * @description  Selecciona tab y cambia estatus active
   * @param {any} data data a mostrar
   * @param {number} index id de la data a mostrar
   * -------------------------------------------------------
   */
  activateItem(data: any, index: number) {
    data.forEach((item: any) => {
      if (item.id === index) {
        item.active = !item.active;
      } else {
        item.active = false;
      }
    });
  }


  /**
  * -------------------------------------------------------
  * @summary getDataArray
  * @description Obtiene el nombre del producto desde la url
  *  y asigna posicion de arreglo del state en data
  * @param {any} array arraglo a buscar
  * -------------------------------------------------------
  */
  togglePlan() {
    this.toggle = !this.toggle;
  }


}
