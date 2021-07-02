import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @Input() type!: string;
  @Input() format!: string;

  constructor() { }

  ngOnInit(): void {


  }


  ngAfterViewInit(): void {
  }


}
