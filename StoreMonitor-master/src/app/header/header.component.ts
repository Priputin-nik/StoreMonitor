import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProductListContentService } from '../services/product-list-content.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // public counterThings$: Observable<thingOnCatalog[]>;
  public counterThings$: Observable<number>;
  public counter: number = 0;
  public sum: number = 0;

  constructor( private dataThingsService: ProductListContentService ) {
    this.counterThings$ = dataThingsService.allDataThings$.pipe(
    map(item => item.filter(item => item.addBasket)),
    tap(items => this.sum = items.reduce((acc, item) => 
    acc + item.countInBasket, 0)),
    map(items => this.sum))
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}