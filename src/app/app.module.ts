import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { D3SliderDirective } from 'ng-d3-slider/d3-slider.directive'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
