import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @Input() type!: string;
  @Input() format!: string;
  @Output() getRefHtml = new EventEmitter<string>();
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.videoPlayer !== undefined) {
        this.getRefHtml.emit(this.videoPlayer.nativeElement);
      }
    }, 100);

  }

}
