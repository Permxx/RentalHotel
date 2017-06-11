import { AdminEditRoomComponent } from './Room/admin-edit-room/admin-edit-room.component';
import { HomeComponent } from './home/home.component';
import { RentRoomComponent } from './Room/rent-room/rent-room.component';
import { ConfirmRentRoomComponent } from './Room/confirm-rent-room/confirm-rent-room.component';
import { HistoryRoomComponent } from './Room/history-room/history-room.component';
import { SummaryMoneyComponent } from './Room/summary-money/summary-money.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'admin-edit-room', component: AdminEditRoomComponent },
    { path: 'rent-room', component: RentRoomComponent },
    { path: 'confirm-rent-room', component: ConfirmRentRoomComponent },
    { path: 'history-room', component: HistoryRoomComponent },
    { path: 'summary-money', component: SummaryMoneyComponent },
    ];
export const routing = RouterModule.forRoot(appRoutes);