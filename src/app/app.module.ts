import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {APP_DIRECTIVES} from './directives/directives';
import {APP_COMPONENTS} from './components/components';
import {AppComponent} from './components/app-component/app.component';

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
