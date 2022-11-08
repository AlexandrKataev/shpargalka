import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ItemPage from './ItemPage/ItemPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<HomePage />} path="/" />
      <Route element={<ItemPage />} path="/item/:title" />
      <Route element={<NotFoundPage />} path="*" />
    </Route>,
  ),
);
