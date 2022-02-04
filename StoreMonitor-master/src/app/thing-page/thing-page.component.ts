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

  public productIdFromRoute!: number;
  public currentThing$!: Observable<thingOnCatalog | undefined>;
  public allDataThingsTEST: thingOnCatalog[] = allDataThingsInitial;
  public allDataThings$: Observable<thingOnCatalog[]>;

  constructor(private route: ActivatedRoute, private dataThingsService: ProductListContentService) {
    this.allDataThings$ = dataThingsService.allDataThings$;

   }

  ngOnInit() {
    this.productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
  
    this.currentThing$ = this.allDataThings$.pipe(map(items => items.find(product => product.id === this.productIdFromRoute)))
  }

  additionInBasket() {
    console.log(this.productIdFromRoute);
    this.dataThingsService.additionInBasket(this.productIdFromRoute);
  }

}
