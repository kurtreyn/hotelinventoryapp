import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  //   <p>Angular is awesome!</p> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Hotel Inventory App';
  role = 'user';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngAfterViewInit() {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton Hotels';
  }
}
