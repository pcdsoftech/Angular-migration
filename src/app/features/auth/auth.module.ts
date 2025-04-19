import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/auth.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AuthStateInterface } from 'src/app/core/models/auth-state.model';

export function localStorageSyncAuthReducer(
  reducer: ActionReducer<AuthStateInterface>
): ActionReducer<AuthStateInterface> {
  return localStorageSync({
    keys: ['loggedInUser'],
    rehydrate: true,
  })(reducer);
}

@NgModule({
  declarations: [SocialButtonsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', AuthReducer, {
      metaReducers: [localStorageSyncAuthReducer],
    }),
  ],
  exports: [SocialButtonsComponent],
})
export class AuthModule {}
