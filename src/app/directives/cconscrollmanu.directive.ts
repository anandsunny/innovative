import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[ccconscrollmanu]'
})
export class CconscrollmanuDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer) { 
    // this.el.nativeElement.style.backgroundColor = "red";
    // renderer.setElementStyle(el.nativeElement, 'background-color', 'blue');
  }

  @HostBinding('class.manuBg') private changeBgClr: Boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll($event) {
    if(window.scrollY > 250) {
      this.changeBgClr = true;
    } else {
      this.changeBgClr = false;
    }
  }

}
