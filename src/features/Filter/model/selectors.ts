import { RootState } from '../../../shared/types';

export const selectFilterItems = (state: RootState) => state.filter.filterItems;
export const selectActiveFilter = (state: RootState) => state.filter.activeFilter;
