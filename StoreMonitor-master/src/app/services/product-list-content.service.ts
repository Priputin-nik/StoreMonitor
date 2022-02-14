import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take} from 'rxjs';
import { allDataThingsInitial } from '../consts/dataAllThingsInitial';
import * as Values from '../consts/filling';
import { filterList } from '../interfaces/filter-list';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';
import { FilterService } from './filter.service';
import { FilterGroupService } from './filter-group.service';
@Injectable({
  providedIn: 'root'
})
export class ProductListContentService{
  private _allDataThings$: BehaviorSubject<thingOnCatalog[]>
  public allDataThings$: Observable<thingOnCatalog[]>;

  public imgInitial: string[];
  public nameInitial: string[];
  public diagonalInit: string[];
  public resolutionInit: filterList[];
  public purposeInit: filterList[];
  public numberThingsOnPage: number;
  public numberThingsInBasket: number;
  public alphabetForName: string;
  public resolutionFilter$: Observable<filterList[]>;
  public purposeFilter$: Observable<filterList[]>;
  // public arrayAfterFilter$: Observable<thingOnCatalog[]>;
  public sortPriceArray: thingOnCatalog[];
  public minPrice: number;
  public maxPrice: number;

constructor(private filterService: FilterService,
  private filters: FilterGroupService) {
  this._allDataThings$ = new BehaviorSubject<thingOnCatalog[]>(allDataThingsInitial);
  this.imgInitial = Values.img;
  this.nameInitial = Values.name;
  this.diagonalInit = Values.diagonal;
  this.resolutionInit = Values.resolution;
  this.purposeInit = Values.purpose;
  this.numberThingsOnPage = 44;
  this.getProducts();
  this.numberThingsInBasket = 0;
  this.alphabetForName = 'abcdefghijklmnopqrstuvwxyz';
  this.resolutionFilter$ = filterService.resolutionForRender$;
  this.purposeFilter$ = filterService.purposeForRender$;
  this.allDataThings$ = this._allDataThings$.asObservable().pipe(map(items => items.sort((a,b) => b.id - a.id)));
  this.subscribeFilters();

  this.sortPriceArray = this._allDataThings$.getValue().sort((a, b) => a.price - b.price);
  this.minPrice = this.sortPriceArray[0].price;
  this.maxPrice = this.sortPriceArray[this.sortPriceArray.length - 1].price;
  this.initialMinMaxPrice();
}

initialMinMaxPrice() {
  this.filters.form.patchValue({
    minValue: this.minPrice,
    maxValue: this.maxPrice
  })
}

// Range price
inputRange1(val: number) {
  this.filters.form.patchValue({
    minValue: val
  })
}


inputRange2(val: number) {
  this.filters.form.patchValue({
    maxValue: val
  })
}

selectedResolution() {
  this.filters.form.patchValue({
    resolution: [Values.resolutions, 'selectedAll'],
    })
}


subscribeFilters(): void {
  this.filters.form.valueChanges
  .pipe(map((filters) => {

    let arrayRender = this._allDataThings$.getValue();
    let activeAllResolution = filters.resolution.includes('selectedAll');
    if (filters.resolution.length - 1 < Values.resolutions.length && activeAllResolution) {
      this.selectedResolution();
    }

    for(let i = 0; i < arrayRender.length; i++) {
      let currentResolution = arrayRender[i].resolution;
      let currentPurpose = arrayRender[i].purpose;
      let checkedResolution = filters.resolution.includes(currentResolution);
      let checkedPurpose = filters.purpose.includes(currentPurpose);
      if (checkedResolution && checkedPurpose) {
        arrayRender[i].visible = true;
      }
      else {
        arrayRender[i].visible = false;
      }
    }

    return arrayRender
  })).subscribe(value => this._allDataThings$.next(value))
}

getWord(){
  return this.alphabetForName[this.getNumber(0, 26)]
}

getNumber(min: number, max: number): number {
  const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  if (min < 0 || max < 0) {
    return 0
  }
  if (min >= max) {
    return 0;
  }
  return Number(randomNumber.toFixed());
};

getElement(arrayInitial:string[]):string {
  return arrayInitial[this.getNumber(0, arrayInitial.length - 1)]
  }

getElementForObject(arrayInitial:filterList[]):string {
  return arrayInitial[this.getNumber(0, arrayInitial.length - 1)].name
  }

createElement(): thingOnCatalog {
  return {
    img: this.getElement(this.imgInitial),
    name: this.getElement(this.nameInitial),
    price: this.getNumber(20, 45) * 1000,
    addBasket: false,
    countInBasket: 0,
    id: 0,
    diagonal: this.getElement(this.diagonalInit),
    resolution: this.getElementForObject(this.resolutionInit),
    purpose: this.getElementForObject(this.purposeInit),
    visible: true,
    recentlyViewed: false,
  }
    }
    // :Observable<thingOnCatalog[]> 
getProducts(){

  let arrayGenerate = Array.from({length: this.numberThingsOnPage}, () => this.createElement());
  arrayGenerate.forEach((item, index) => item.id = index );

  this._allDataThings$.next(arrayGenerate);

  }


  additionInBasket(evt: number) {

    this.numberThingsInBasket++;
    let addInCardArray = this._allDataThings$.getValue().map(item => {
      if (item.id === evt) {
        item.addBasket = true;
        item.countInBasket++;
        item.recentlyViewed = true
      }
      return item
    });

    this._allDataThings$.next(addInCardArray);


  }

  decrementThingCount(evt: number) {
    this.numberThingsInBasket--;
    let addInCardArray = this._allDataThings$.getValue().map(item => {
      if (item.id === evt) {
        item.addBasket = true;
        item.countInBasket--
        if (item.countInBasket === 0) {
          item.addBasket = false;
        }
      }
      return item
    });
    this._allDataThings$.next(addInCardArray);
  }

  clearBasket() {
    let allAdditionItems = this._allDataThings$.getValue().map(item => {
      item.addBasket = false;
      item.countInBasket = 0;
      return item
    });
    this._allDataThings$.next(allAdditionItems);
  }

  transitionOnCard(evt:number) {


    let routCardArray = this._allDataThings$.getValue().map(item => {
      if (item.id === evt) {
        item.recentlyViewed = true;
      }
      return item
    });
    this._allDataThings$.next(routCardArray);
  }
}