import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, defaultIfEmpty, filter, map, Observable, Subscriber, Subscription } from 'rxjs';
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

public name: string[] = ['img', 'name', 'price', 'countInBasket'];

  constructor(private dataThingsService: ProductListContentService) {
    this.dataSource$ = dataThingsService.allDataThings$.pipe(map(item => item.filter(item => item.addBasket)));
    this.culumnsNames$ = this.dataThingsService.allDataThings$.pipe(map((columns: thingOnCatalog[]) => columns.filter((item) => item.addBasket).map( (column: thingOnCatalog) => column.name)))
  }

  ngOnInit() {
  }

}
