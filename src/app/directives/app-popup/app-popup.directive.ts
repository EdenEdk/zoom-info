import {
  ChangeDetectorRef,
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  HostListener,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {PopupContentContainerComponent} from '../../components/popup-content-container/popup-content-container.component';

@Directive({
  selector: '[appPopup]'
})
export class AppPopupDirective implements OnInit {
  @Input('appPopup') popUpContent: any;
  popupContainer: ComponentFactory<PopupContentContainerComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private vref: ViewContainerRef, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.popupContainer = this.componentFactoryResolver.resolveComponentFactory(PopupContentContainerComponent);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    const containerComponent = this.vref.createComponent(this.popupContainer);
    containerComponent.instance.popupTemplate = this.popUpContent;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.vref.clear();
  }
}
