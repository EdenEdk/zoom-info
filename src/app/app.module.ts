import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app-component/app.component';
import {APP_COMPONENTS} from './components/components';
import {APP_DIRECTIVES} from './directives/directives';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [...APP_COMPONENTS],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

