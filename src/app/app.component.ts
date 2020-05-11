import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-ng';
  num1 = 0;
  num2 = 0;
  result = 0;

  add():void {
    this.result = this.num1 + this.num2;
  }
  
  subtract():void {
    this.result = this.num1 - this.num2;
  }

  multiply():void {
    this.result = this.num1 * this.num2;
  }

  divide():void {
    this.result = this.num1 / this.num2;
  }

}
