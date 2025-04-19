import { AppStateInterface } from '../../../core/models/app-state.model';
import { createSelector } from '@ngrx/store';
import { HotelsStateInterface } from 'src/app/core/models/hotels-state.model';

export const selectFeature = (state: AppStateInterface) => {
  return state.hotels;
};

export const isLoadingSelector = createSelector(
  selectFeature,
  (state: HotelsStateInterface) => state.isLoading
);
export const hotelsSelector = createSelector(
  selectFeature,
  (state: HotelsStateInterface) => state.hotels
);
export const errorSelector = createSelector(
  selectFeature,
  (state: HotelsStateInterface) => state.error
);