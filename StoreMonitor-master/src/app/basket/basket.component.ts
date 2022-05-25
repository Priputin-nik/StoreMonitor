import { Component, OnInit } from '@angular/core';

import { map, Observable } from 'rxjs';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';
import { ProductListContentService } from '../services/product-list-content.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public dataSource$: Observable<thingOnCatalog[]>;
  
  public culumnsNames$: Observable<string[]>;
  public commonSum$: Observable<number>;
  public name: string[] = ['img', 'name', 'price', 'countInBasket', 'allPrice', 'controlCounts'];

  constructor(private dataThingsService: ProductListContentService) {
    this.dataSource$ = dataThingsService.allDataThings$.pipe(map(item => item.filter(item => item.addBasket)));
    this.culumnsNames$ = this.dataThingsService.allDataThings$.pipe(map((columns: thingOnCatalog[]) => columns.filter((item) => item.addBasket).map( (column: thingOnCatalog) => column.name)))
    this.commonSum$ = this.dataSource$.pipe(map(item => item.reduce(function(acc,item) {
      return acc + (item.countInBasket * item.price);
    },0 )));
  }

  ngOnInit() {

  }

  incrementThingCount(id: number) {
    this.dataThingsService.additionInBasket(id)
  }

  decrementThingCount(id: number) {
    this.dataThingsService.decrementThingCount(id)
  }

  clearBasket() {
    this.dataThingsService.clearBasket()
  }

}