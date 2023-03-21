import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectRoomChild(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}
