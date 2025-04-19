import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../../../core/models/auth-state.model';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const loggedInUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.loggedInUser
);

export const signUpUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.signUpUser
);

export const errorSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.error
);
