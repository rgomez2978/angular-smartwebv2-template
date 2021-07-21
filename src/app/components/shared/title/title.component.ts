import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, AfterContentInit {
  @Input() wordscant!: number;
  @Input() type!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() words: any = [];

  constructor() { }

  ngOnInit(): void {

  }

  /**
   * -------------------------------------------------------
   * @summary ngAfterContentInit
   * @description  Inicializa funciones al inicializar todo el contenido del componente
   * -------------------------------------------------------
   */
  ngAfterContentInit(): void {
    setTimeout(() => {
      if (this.title !== null) {
        console.log('this.title :>> ', this.title);
        const split = this.title.split(" ");
        // console.log('split.length :>> ', split.length);
        if (split.length === 1) {
          this.words.push(this.title.substr(0, Math.round(this.title.length / 2) - 1));
          this.words.push(this.title.substr(Math.round(this.title.length / 2) - 1, this.title.length));
          this.wordscant = 1;
        } else {
          this.words.push(split[0], split[1]);
          this.wordscant = 2;
        }
      }
    }, 100);
  }



}
