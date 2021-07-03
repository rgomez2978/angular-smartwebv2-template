import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() label1!: string;
  @Input() label2!: string;
  @Input() words!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
