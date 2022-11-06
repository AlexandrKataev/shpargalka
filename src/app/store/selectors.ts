import { RootState } from '../../shared/types';

export const selectItemsData = (state: RootState) => state.data.items;
