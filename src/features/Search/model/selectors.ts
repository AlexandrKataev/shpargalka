import { RootState } from '../../../shared/types';

export const selectSearchValue = (state: RootState) => state.search.searchValue;
