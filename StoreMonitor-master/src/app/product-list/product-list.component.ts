import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';

import { ProductListContentService } from '../services/product-list-content.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public dataThings$: Observable<thingOnCatalog[]>;
  public counterThings: number;

  constructor(private dataThingsService: ProductListContentService) {
    dataThingsService.getProducts();
    this.dataThings$ = dataThingsService.allDataThings$.pipe(map(items => items.filter(item => item.visible)))

    this.counterThings = 0;

  }

  ngOnInit() {
  }

  additionInBasket(evt: number) {
    this.dataThingsService.additionInBasket(evt);
  }

}

// this.culumnsNames$ = dataThingsService.allDataThings$.pipe(map((columns: thingOnCatalog[]) => columns.filter((item) => item.display).map( (column: Column) => column.columnDef)))
