import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private _subscription: Subscription = new Subscription();

  @Input() data: any;
  @Input() type!: string;
  dataSearch: any = [];
  collection: any = [];
  p: number = 1;
  page = 1;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9, 12];
  message!: string;
  language!: string;


  config = {
    id: 'custom',
    itemsPerPage: 2,
    currentPage: 1,
    totalItems: this.collection.count
  };


  constructor(
    private _store: Store<AppState>
  ) { }


  /**
   * -------------------------------------------------------
   * @summary ngOnInit
   * @description  Inicializa funciones al cargar el
   * -------------------------------------------------------
   */
  ngOnInit(): void {
    this.setSubscriptions();
    setTimeout(() => {
      this.dataSearch = this.data[0]?.results;
      if (this.language === 'es') {
        this.message = 'No existen noticias asociadas para esta categoria, por favor seleccione otra categoria.'
      } else {
        this.message = 'There are no associated news for this category, please select another category.'
      }
    }, 100);
  }



  /**
  * -------------------------------------------------------
  * @summary setSubscriptions
  * @description Traer el valor del state del estado del translated de redux
  * -------------------------------------------------------
  */
  setSubscriptions() {
    this._subscription.add(
      this._store.select('ui').subscribe((state) => {
        this.language = state.language;
      })
    );
  }


  onPageChange(event: any) {
    // console.log(event);
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
