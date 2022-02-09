import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { diagonal } from '../consts/filling';
import { filterList } from '../interfaces/filter-list';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';
import { FilterService } from '../services/filter.service';
import { ProductListContentService } from '../services/product-list-content.service';
import { Filters, resolutions } from './filrter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public diagonalForRender = diagonal;
  public form: FormGroup;
  public resolutions = resolutions;

  public minPrice$: Observable<number>;
  public maxPrice$: Observable<number>;
  public allDataThings$: Observable<thingOnCatalog[]>;
  public resolutionForRender$: Observable<filterList[]>;
  public purposeForRender$: Observable<filterList[]>;

  constructor(private dataThingsService :ProductListContentService, private filterService: FilterService, private filters: Filters) {
    this.form = filters.form;
    this.allDataThings$ = dataThingsService.allDataThings$;
    this.minPrice$ = this.allDataThings$.pipe(map(items => items.sort((a,b) => a.price - b.price)[0].price));
    this.maxPrice$ = this.allDataThings$.pipe(map(items => items.sort((a,b) => b.price - a.price)[0].price));
    this.resolutionForRender$ = filterService.resolutionForRender$;
    this.purposeForRender$ = filterService.purposeForRender$;
  }

  togglePurposeFilter(evt: string) {
    this.filterService.togglePurposeFilter(evt);
    this.dataThingsService.updateArrayAfterFilter();
  }

  toggleResolutionFilter(evt: string) {
    this.filterService.toggleResolutionFilter(evt);
    this.dataThingsService.updateArrayAfterFilter();
  }

  ngOnInit() {

  }

  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }
  // }

}
