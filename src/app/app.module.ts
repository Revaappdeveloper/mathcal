import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ReusableMathcalComponent } from './components/reusable-mathcal/reusable-mathcal.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableMathcalComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
