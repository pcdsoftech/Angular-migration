import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../core/services/auth.service';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private readonly actions$: Actions, private readonly authService: AuthService) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((user) => AuthActions.loginSuccess({ loggedInUser: [user] })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      exhaustMap((action) =>
        this.authService
          .signUp(
            action.firstName,
            action.lastName,
            action.email,
            action.phoneNumber,
            action.password
          )
          .pipe(
            map((user) => AuthActions.signUpSuccess({ signUpUser: [user] })),
            catchError((error) => of(AuthActions.signUpFailure({ error })))
          )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        // You could add any additional logout logic here if needed
        // For example, clearing localStorage token or other cleanup
        return AuthActions.logoutSuccess();
      }),
      catchError((error) => of(AuthActions.logoutFailure({ error: error.message })))
    )
  );
}
