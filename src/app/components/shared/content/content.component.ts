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
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };


  config = {
    id: 'custom',
    itemsPerPage: 2,
    currentPage: 1,
    totalItems: this.collection.count
  };


  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.dataSearch = this.data[0]?.results;
    }, 100);

    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(`item ${i}`);
    // }
  }


  onPageChange(event: any) {
    console.log(event);
    this.config.currentPage = event;
  }

  onTableDataChange(event: any) {
    // this.page = event;
  }

  onTableSizeChange(event: any): void {
    // this.tableSize = event.target.value;
    // this.page = 1;
  }
}
