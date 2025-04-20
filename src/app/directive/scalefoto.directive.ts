import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScalefoto]'
})
export class ScalefotoDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.05)';
    this.el.nativeElement.style.transition = 'transform 0.3s ease';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }

}
