import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { Section1Component } from './componets/section1/section1.component';
import { Section2Component } from './componets/section2/section2.component';
import { Section3Component } from './componets/section3/section3.component';
import { FooterComponent } from './componets/footer/footer.component';
import { Section4Component } from './componets/section4/section4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    FooterComponent,
    Section4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
