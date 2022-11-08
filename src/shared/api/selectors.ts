import { RootState } from '../types';

export const selectItemsData = (state: RootState) => state.data.items;
