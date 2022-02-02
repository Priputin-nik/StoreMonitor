import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { allDataThingsInitial } from '../consts/dataAllThingsInitial';
import { diagonal, img, name, purpose, resolution } from '../consts/filling';
import { thingOnCatalog } from '../interfaces/thingOnCatalog';

@Injectable({
  providedIn: 'root'
})
export class ProductListContentService{
  private _allDataThings$: BehaviorSubject<thingOnCatalog[]>
  public allDataThings$: Observable<thingOnCatalog[]>;
  public imgInitial: string[];
  public nameInitial: string[];
  public diagonalInit: string[];
  public resolutionInit: string[];
  public purposeInit: string[];
  public numberThingsOnPage: number;
  public numberThingsInBasket: number;
  public alphabetForName: string;

constructor() {
  this._allDataThings$ = new BehaviorSubject<thingOnCatalog[]>(allDataThingsInitial);
  this.imgInitial = img;
  this.nameInitial = name;
  this.diagonalInit = diagonal;
  this.resolutionInit = resolution;
  this.purposeInit = purpose;
  this.numberThingsOnPage = 43;
  this.allDataThings$ = this.getProducts();
  this.numberThingsInBasket = 0;
  this.alphabetForName = 'abcdefghijklmnopqrstuvwxyz';
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

createElement(): thingOnCatalog {
  return {
    img: this.getElement(this.imgInitial),
    name: this.getElement(this.nameInitial),
    price: this.getNumber(20, 45) * 1000,
    addBasket: false,
    countInBasket: 0,
    id: 0,
    diagonal: this.getElement(this.diagonalInit),
    resolution: this.getElement(this.resolutionInit),
    purpose: this.getElement(this.purposeInit),
  }
    }

getProducts():Observable<thingOnCatalog[]> {
  const arrayGenerate = Array.from({length: this.numberThingsOnPage}, () => this.createElement());
  for (let i = 0; i < this.numberThingsOnPage; i++) {
    arrayGenerate[i].id = i;
  }
  this._allDataThings$.next(arrayGenerate);
  this.allDataThings$ = this._allDataThings$.asObservable();
  return this.allDataThings$
  }

  additionInBasket(evt: number) {
    this.numberThingsInBasket++;
    let addInCardArray = this._allDataThings$.getValue().map(item => {
      if (item.id === evt) {
        item.addBasket = true;
        item.countInBasket++
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

}