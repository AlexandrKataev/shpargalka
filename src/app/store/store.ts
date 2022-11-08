import { configureStore } from '@reduxjs/toolkit';
import data from 'shared/api/dataSlice';
import lang from 'features/Lang/model/LangSlice';
import filter from 'features/Filter/model/FilterSlice';
import search from 'features/Search/model/SearchSlice';

export const store = configureStore({ reducer: { data, lang, filter, search } });
