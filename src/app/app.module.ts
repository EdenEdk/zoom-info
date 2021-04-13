import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {PopupComponent} from './components/popup/popup.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [PopupComponent],
  providers: []
})
export class AppModule {
  constructor(private injector:Injector){}
  ngDoBootstrap() {
    const el = createCustomElement(PopupComponent, { injector: this.injector });
    customElements.define('eden-popup', el);
  }
}

