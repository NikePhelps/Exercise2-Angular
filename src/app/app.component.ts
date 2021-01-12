import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise3-angular';
  shape: Number = 0;
  circle: boolean = false

  getSize() {
    console.log(`${this.shape}px`)
    return `${this.shape}px`;
  }

  isCircle() {
    console.log(this.circle)
    this.circle = !this.circle
  }
}
