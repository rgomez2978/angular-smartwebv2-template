import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() data: any;
  @Input() type!: string;
  dataSearch: any = [];
  collection: any = [];
  p: number = 1;
  page = 1;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9, 12];
  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.dataSearch = this.data[0]?.results;
    }, 100);

    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(`item ${i}`);
    // }
  }




  onTableDataChange(event: any) {
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    // this.tableSize = event.target.value;
    // this.page = 1;
  }
}
