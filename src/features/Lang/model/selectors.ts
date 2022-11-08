import { RootState } from '../../../shared/types';

export const selectLangItems = (state: RootState) => state.lang.langItems;
export const selectActiveLang = (state: RootState) => state.lang.activeLang;
