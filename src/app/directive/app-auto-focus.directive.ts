import { Directive, ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAppAutoFocus]'
})
export class AppAutoFocusDirective implements AfterViewInit {

  constructor(private el:ElementRef) { }
    ngAfterViewInit() {
    this.el.nativeElement.focus({preventScroll: true });
  }

}
