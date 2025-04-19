import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { BookingsInfoComponent } from './components/bookings-info/bookings-info.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    ProfileCoverComponent,
    UserProfileComponent,
    AccountInfoComponent,
    BookingsInfoComponent,
    PaymentInfoComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ProfileCoverComponent, UserProfileComponent],
})
export class AccountModule {}
