import { createSelector } from '@ngrx/store';
import { SearchStateInterface } from 'src/app/core/models/search-state.model';
import { AppStateInterface } from 'src/app/core/models/app-state.model';

export const selectSearchState = (state: AppStateInterface) => state.search;

export const selectSearchResult = createSelector(
  selectSearchState,
  (state: SearchStateInterface) => state.searchResult
);