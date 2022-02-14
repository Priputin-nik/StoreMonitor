import { AfterViewInit, Component, defineInjectable, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-new-slider',
  templateUrl: './new-slider.component.html',
  styleUrls: ['./new-slider.component.scss']
})
export class NewSliderComponent implements OnInit {
  @ViewChild('inputLeft', { static: true }) inputLeft!: ElementRef;
  @ViewChild('inputLeft', { static: true }) inputRight!: ElementRef;
  @ViewChild('inputLeft', { static: true }) thumbLeft!: ElementRef;
  @ViewChild('inputLeft', { static: true }) thumbRight!: ElementRef;
  @ViewChild('inputLeft', { static: true }) range!: ElementRef;
  @ViewChild('test', { static: true }) test!: ElementRef;
  public minLeft: number;
  public maxLeft: number;
  public minRight: number;
  public maxRight: number;
  public leftValue: number;
  public rightValue: number;
  public testToggle: boolean;

    constructor( private renderer: Renderer2 ) {
      this.minLeft = 0;
      this.maxLeft = 100;
      this.minRight = 0;
      this.maxRight = 100;
      this.leftValue = 25;
      this.rightValue = 75;

      this.testToggle = true;
    }

    ngOnInit() {
  // this.setLeftValue();
  // this.setRightValue();
    }

    testFunc() {
      if(this.testToggle) {
        this.renderer.setStyle(this.test.nativeElement, 'color', 'blue');
        this.testToggle = !this.testToggle;
      }
      else {
        this.renderer.setStyle(this.test.nativeElement, 'color', 'red');
        this.testToggle = !this.testToggle;
      }

    }

    yourMethod(ev:any) {

    }

    setLeftValue() {

      // let value = Math.min(this.leftValue, this.rightValue - 1);
      // this.renderer.setAttribute(this.inputLeft.nativeElement, 'value', String(value));
      this.leftValue = Math.min(this.leftValue, this.rightValue - 1);
      let percent = String(((this.leftValue - this.minLeft) / (this.maxLeft - this.minLeft)) * 100) + '%';
      // getComputedStyle(this.thumbLeft.nativeElement).left = percent;
      // getComputedStyle(this.range.nativeElement).left = percent;
      this.renderer.setStyle(this.thumbLeft.nativeElement, 'left', percent);
      this.renderer.setStyle(this.range.nativeElement, 'left', percent);

    }

    setRightValue() {
      let value = Math.max(this.rightValue, this.leftValue - 1);
      // this.renderer.setAttribute(this.inputRight.nativeElement, 'value', String(value));
      this.rightValue = value;
      var percent = String(((value - this.minRight) / (this.maxRight - this.minRight)) * 100)  + '%';

      this.renderer.setAttribute(this.thumbRight.nativeElement, 'right', percent);
      this.renderer.setAttribute(this.range.nativeElement, 'right', percent);

    }

    leftMouseOver() {
      this.renderer.addClass(this.thumbLeft.nativeElement, 'hover');
    }

    leftMouseOut() {
      this.renderer.removeClass(this.thumbLeft.nativeElement, 'hover');
    }

    leftMouseDown() {
      this.renderer.addClass(this.thumbLeft.nativeElement, 'active');
    }

    leftMouseUp() {
      this.renderer.removeClass(this.thumbLeft.nativeElement, 'active');
    }

  }


