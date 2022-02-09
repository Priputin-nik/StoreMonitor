import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-value-acsessor',
  templateUrl: './value-acsessor.component.html',
  styleUrls: ['./value-acsessor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => ValueAcsessorComponent),
      
    }
  ]
})
export class ValueAcsessorComponent implements ControlValueAccessor {

  onChange: any = () => {}
  onTouch: any = () => {}
  val= ""

  set value(val){
    if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    }
   
  }

  writeValue(value: any){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }




}