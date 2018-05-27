import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  farLeft = [];
  left = [];
  center = [];
  right = [];
  farRight = [];

  sliderValue() {
    let slider = (<HTMLInputElement>document.querySelector(".range-input"));
    console.log(slider.value);
  }
}
