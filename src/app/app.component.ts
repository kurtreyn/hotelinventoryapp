import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  //   <p>Angular is awesome!</p> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hotel Inventory App';
  role = 'user';
}
