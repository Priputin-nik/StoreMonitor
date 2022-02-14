import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListContentService } from '../services/product-list-content.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public min: number;
  public max: number;

  constructor(private dataThingsService :ProductListContentService) { 

    // this.leftValue = 10;

    this.min = dataThingsService.minPrice;
    this.max = dataThingsService.maxPrice;

    // renderer.setAttribute(this.inputLeft.nativeElement, 'value', '12');
 
    // this.left.valueChanges.pipe(map((value) => {
    //   if(value > 50) {
    //     console.log(value)
    //   }
    //   return value
    // } )).subscribe()
    
  }

  ngOnInit() {
  }

// valueLeftChange(ev: any) {
// if (this.valueLeft1 >= this.valueRight1) {
//   this.valueLeft1 = this.valueRight1 - 1;
//   console.log('a');
//   console.log(this.valueLeft1, '', this.valueRight1)
// }
// }

// valueRightChange(ev: any) {
//   if (this.valueLeft1 >=  this.valueRight1) {
//     this.valueRight1 = this.valueLeft1 + 1;
//   console.log('b');
//   console.log(this.valueLeft1, '', this.valueRight1)
//   }
// }


    // console.log(ev.source)
    // this.leftValue 
    
    // console.log(ev.value);

 
      // this.leftValue = this.rightValue - 1;
    
    // console.log(this.rightValue)


  inputRange1(ev:any) {
    console.log(ev.value);
    this.dataThingsService.inputRange1(ev.value);
    }

  inputRange2(ev:any) {
    this.dataThingsService.inputRange2(ev.value);
    console.log(ev.value)
  }

}

