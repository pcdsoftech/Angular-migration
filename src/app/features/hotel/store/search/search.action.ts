import { createAction, props } from '@ngrx/store';
import { SearchBarDataModel } from './search.model';

export const updateSearchBar = createAction(
  '[SearchBar Component] Update Search Bar',
  props<{ searchResult: SearchBarDataModel[] }>()
);
export const updateSearchBarFailure = createAction(
  '[SearchBar Component] Update Search Bar Failure',
  props<{ error: string }>()
);
