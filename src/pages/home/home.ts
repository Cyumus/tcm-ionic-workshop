import { Component }    from '@angular/core';

import { NavController }    from 'ionic-angular';

import { Observable }   from 'rxjs/Observable';

import { Chat } from '../../providers/Chat';

import UI   from '../../utils/UI';

import { Room } from '../../models/Room';

import { RoomPage } from '../room/room';

import { CreateRoomModal }  from '../../modals/create-room/create-room';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    roomsObservable: Observable<Room[]>;

    constructor(private navCtrl: NavController, chat: Chat) {
        this.roomsObservable = chat.getRoomsObservable();
    }

    public createRoom(): void {
        UI.showModal(CreateRoomModal);
    }

    public openRoom(room: Room): void {
        this.navCtrl.push(RoomPage, { room });
    }

}
