import { SearchBarDataModel } from 'src/app/features/hotel/store/search/search.model';

export interface SearchStateInterface {
  searchResult: SearchBarDataModel[];
  error: string | null;
}
