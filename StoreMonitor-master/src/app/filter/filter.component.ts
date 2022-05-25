import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { diagonal, purposes, resolutions } from '../consts/filling';
import { filterList } from '../interfaces/filter-list';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';
import { FilterService } from '../services/filter.service';
import { ProductListContentService } from '../services/product-list-content.service';
import { FormGroup } from '@angular/forms';
import { FilterGroupService } from '../services/filter-group.service';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  public diagonalForRender = diagonal;
  public form: FormGroup;
  public resolutions = resolutions;
  public purposes = purposes;
  // public minPrice$: Observable<number>;
  // public maxPrice$: Observable<number>;
  public allDataThings$: Observable<thingOnCatalog[]>;
  // public resolutionForRender$: Observable<filterList[]>;
  // public purposeForRender$: Observable<filterList[]>;
  // public valueFrom: number = 0;
  // public valueTo: number = 1000;
  //
  public m: number = 123;
  public n: number = 13;
  public minPrice: any;
  public maxPrice: any;
  public price$: Observable<any>;
  constructor(private dataThingsService :ProductListContentService,
    private filterService: FilterService,
    private filters: FilterGroupService) {
    this.allDataThings$ = dataThingsService.allDataThings$;
    this.form = filters.form;
    // this.minPrice$ = this.allDataThings$.pipe(map(items => items.sort((a,b) => a.price - b.price)[0].price));
    // this.maxPrice$ = this.allDataThings$.pipe(map(items => items.sort((a,b) => b.price - a.price)[0].price));


    this.price$ = filters.form.valueChanges.pipe(map(items => {
      let value = [items.minValue, items.maxValue];
      let resultValue = value.sort((a, b) => a - b);
      return resultValue
    }));
    this.price$.subscribe(v => console.log(v))

    
    // this.resolutionForRender$ = filterService.resolutionForRender$;
    // this.purposeForRender$ = filterService.purposeForRender$;
    
  }

  get selectAllDisabled(): boolean {
    console.log(this.form.value)
    return this.form.value?.length === this.resolutions.length;
  }

  setAllResolutions(): void {
    this.form.controls['resolution'].setValue(resolutions);
  }

  ngOnInit() {
    
  }



}
