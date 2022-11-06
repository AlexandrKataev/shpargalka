import { configureStore } from '@reduxjs/toolkit';
import data from './dataSlice';

export const store = configureStore({ reducer: { data } });
