import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slcd_indx: Number = 1;
  w: any = window.innerWidth;
  h: any = window.innerHeight;
  transX: Number;
  transY: Number;
  trans: String;
  transX1: Number;
  transY1: Number;
  trans1: String;
  bannerTransX: Number;
  bannerTransY: Number;
  bannerTrans: String;
  constructor() {
  }
  
  ngOnInit() {}

  changeSlide(indx) {
    this.slcd_indx = indx;
  }
  
  mouseDrag(e) {
    this.transX = ((this.w - e.pageX) / 20);
    this.transY = ((this.h - e.pageY) / 20);
    this.transX1 = ((this.w - e.pageX) / 40);
    this.transY1 = ((this.h - e.pageY) / 40);
    this.bannerTransX = Math.abs((this.w - e.pageX) / 40);
    this.bannerTransY = Math.abs((this.h - e.pageY) / 40);
    this.trans = `translate(${this.transX}%, ${this.transY}%)`;
    this.trans1= `translate(${this.transX1}%, ${this.transY1}%)`;
    this.bannerTrans = `${this.bannerTransX}% ${this.bannerTransY}%`;
  }

}
