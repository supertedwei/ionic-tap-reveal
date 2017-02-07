import { Component } from '@angular/core';

/*
  Generated class for the TapReveal component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'tap-reveal',
  templateUrl: 'tap-reveal.html'
})
export class TapRevealComponent {

  text: string;

  constructor() {
    console.log('Hello TapReveal Component');
    this.text = 'Hello World';
  }

}
