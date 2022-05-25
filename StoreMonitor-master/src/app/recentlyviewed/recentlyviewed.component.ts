import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';
import { ProductListContentService } from '../services/product-list-content.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  public recentlyViewed$: Observable<thingOnCatalog[]>;

  constructor(private dataThingsService: ProductListContentService) {
    this.recentlyViewed$ = dataThingsService.allDataThings$
   }

  ngOnInit() {
  }
  additionInBasket(evt: number) {
    this.dataThingsService.additionInBasket(evt);
  }
}
