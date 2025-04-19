import { HotelsStateInterface } from '../../../core/models/hotels-state.model';
import { createReducer, on } from '@ngrx/store';
import * as HotelsActions from './hotels.actions';

export const initialState: HotelsStateInterface = {
  hotels: [],
  isLoading: false,
  error: null,
};

export const hotelReducer = createReducer(
  initialState,
  on(HotelsActions.loadHotels, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(HotelsActions.loadHotelsSuccess, (state, action) => ({
    ...state,
    hotels: action.hotels,
    isLoading: false,
  })),
  on(HotelsActions.loadHotelsFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }))
);
