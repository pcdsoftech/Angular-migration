import { createReducer, on } from '@ngrx/store';
import { SearchStateInterface } from 'src/app/core/models/search-state.model';
import * as SearchActions from './search.action';

export const initialState: SearchStateInterface = {
  searchResult: [],
  error: null,
};

export const searchBarReducer = createReducer(
  initialState,
  on(SearchActions.updateSearchBar, (state, action) => ({
    ...state,
    searchResult: action.searchResult,
  })),
  on(SearchActions.updateSearchBarFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
