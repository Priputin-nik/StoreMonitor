import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { resolution } from "../consts/filling";

export const resolutions = ['1920x1080 Full HD', '2560x1440 2К'];
@Injectable({
  providedIn: 'root'
})
export class Filters {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.buildFilterForm();
    console.log(this.form.value)
  }

  private buildFilterForm(): FormGroup {
    return this.fb.group({
      resolution: [resolutions],
      purpose: []
    });
  }
}
