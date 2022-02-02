import { Component, OnInit } from '@angular/core';
import { diagonal, resolution } from '../consts/filling';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public resolutionForRender = resolution;
  public diagonalForRender = diagonal;
  
  constructor() { }

  ngOnInit() {
  }

}
