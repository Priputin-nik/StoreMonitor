import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find, map, Observable } from 'rxjs';
import { allDataThingsInitial } from '../consts/dataAllThingsInitial';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';
import { ProductListContentService } from '../services/product-list-content.service';

@Component({
  selector: 'app-thing-page',
  templateUrl: './thing-page.component.html',
  styleUrls: ['./thing-page.component.scss']
})
export class ThingPageComponent implements OnInit {
  public test: thingOnCatalog | undefined = {
    img: 'assets/img1.jpeg',
    name: '31,5" UHD-монитор U32J590UQI',
    price: 35000,
    addBasket: true,
    countInBasket: 0,
    id: 0,
    diagonal: '23.8',
    resolution: '1920x1080 Full HD',
    purpose: 'Для дома и офиса'
  }

  public productIdFromRoute!: number;
  public currentThing$!: Observable<thingOnCatalog | undefined>;
  public allDataThingsTEST: thingOnCatalog[] = allDataThingsInitial;
  public allDataThings$: Observable<thingOnCatalog[]>;

  constructor(private route: ActivatedRoute, private dataThingsService: ProductListContentService) {
    this.allDataThings$ = dataThingsService.allDataThings$;

   }

  ngOnInit() {
    this.productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    this.test = this.allDataThingsTEST.find(product => product.id === this.productIdFromRoute);
    this.currentThing$ = this.allDataThings$.pipe(map(items => items.find(product => product.id === this.productIdFromRoute)))
  }

  additionInBasket() {
    console.log(this.productIdFromRoute);
    this.dataThingsService.additionInBasket(this.productIdFromRoute);
  }

}
