import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntegrcaoComponent } from './integrcao/integrcao.component';

@NgModule({
  declarations: [
    AppComponent,
      IntegrcaoComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
