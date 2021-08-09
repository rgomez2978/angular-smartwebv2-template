import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, DoCheck {
  @Input() wordscant!: number;
  @Input() type!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() words: any = [];
  activeCicle: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }


  /**
   * -------------------------------------------------------
   * @summary ngDoCheck
   * @description  Se llama cada vez que se comprueban las propiedades de entrada de un componente o
   * una directiva.Úselo para ampliar la detección de cambios realizando una
   * comprobación personalizada.
   * -------------------------------------------------------
   */
  ngDoCheck(): void {
    if (this.title !== null) {
      if (!this.activeCicle) {
        const split = this.title.split(" ");
        this.transformTitle(split);
      }
    }
  }


  /**
   * -------------------------------------------------------
   * @summary transformTitle
   * @description  Da separacion y formato al titulo
   * @params {any} split arreglop de separacion del titulo
   * -------------------------------------------------------
   */
  transformTitle(split: any) {
    setTimeout(() => {
      if (split.length === 1) {
        this.words.push(this.title.substr(0, Math.round(this.title.length / 2) - 1));
        this.words.push(this.title.substr(Math.round(this.title.length / 2) - 1, this.title.length));
        this.wordscant = 1;
      } else {
        this.words.push(split[0], split[1]);
        this.wordscant = 2;
      }
      this.activeCicle = true;
    }, 100);
  }


}
