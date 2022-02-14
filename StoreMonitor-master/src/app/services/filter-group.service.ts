import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { purposes, resolutions } from "../consts/filling";
import { ProductListContentService } from "./product-list-content.service";


@Injectable({
  providedIn: 'root'
})
export class FilterGroupService {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.buildFilterForm();
  }

  private buildFilterForm(): FormGroup {
    return this.fb.group({
      resolution: [resolutions],
      purpose: [purposes],
      minValue: 0,
      maxValue: 100
    });
  }
}