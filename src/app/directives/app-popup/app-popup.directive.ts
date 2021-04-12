import {Directive, HostListener, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPopup]'
})
export class AppPopupDirective {
  @Input('appPopup') popUpContent: any;

  constructor(private vref: ViewContainerRef) {

  }


  @HostListener('mouseenter')
  onMouseEnter(): void {
    const popUp = this.vref.createEmbeddedView(this.popUpContent);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.vref.clear();
  }
}
