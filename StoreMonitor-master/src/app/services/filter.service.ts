import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { purpose, resolution } from '../consts/filling';
import { filterList } from '../interfaces/filter-list';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
public _resolutionForRender$: BehaviorSubject<filterList[]>;
public _purposeForRender$: BehaviorSubject<filterList[]>;
public resolutionForRender$: Observable<filterList[]>;
public purposeForRender$: Observable<filterList[]>;

constructor() {
  this._resolutionForRender$ = new BehaviorSubject<filterList[]>(resolution)
  this._purposeForRender$ = new BehaviorSubject<filterList[]>(purpose)

  this.resolutionForRender$ = this._resolutionForRender$.asObservable();
  this.purposeForRender$ = this._purposeForRender$.asObservable();
}

toggleResolutionFilter(evt: string) {
  let resolution = this._resolutionForRender$.getValue().map(item => {
    if (item.name === evt) {
      item.checked = !item.checked;
    }
    return item
  });
  this._resolutionForRender$.next(resolution);
}

togglePurposeFilter(evt: string) {
  let purpose = this._purposeForRender$.getValue().map(item => {
    if (item.name === evt) {
      item.checked = !item.checked;
    }
    return item
  });
  this._purposeForRender$.next(purpose);
}



}
