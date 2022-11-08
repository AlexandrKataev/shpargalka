import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
// import { items } from '../data/jsData';
import Item from '../entities/Item/Item';
import { useAppDispatch, useAppSelector } from '../shared/hooks';
import { fetchItems } from '../shared/api/api';
import { selectItemsData } from '../shared/api/selectors';

import { ItemType } from '../shared/api/types';
import Lang from '../features/Lang/Lang';
import Filter from '../features/Filter/Filter';
import { selectActiveFilter } from '../features/Filter/model/selectors';
import { selectActiveLang } from '../features/Lang/model/selectors';
import Search from '../features/Search/Search';
import { selectSearchValue } from '../features/Search/model/selectors';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const activeFilter = useAppSelector(selectActiveFilter);
  const activeLang = useAppSelector(selectActiveLang);
  const searchValue = useAppSelector(selectSearchValue);
  const items = useAppSelector(selectItemsData);

  const itemBlocks = items
    .filter((el: ItemType) => {
      if (
        el.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        activeFilter === 'Все' &&
        activeLang === el.lang
      ) {
        return true;
      } else if (
        el.descr.toLowerCase().includes(searchValue.toLowerCase()) &&
        activeFilter === 'Все' &&
        activeLang === el.lang
      ) {
        return true;
      } else if (
        el.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        activeLang === el.lang &&
        activeFilter === el.theme
      ) {
        return true;
      } else if (
        el.descr.toLowerCase().includes(searchValue.toLowerCase()) &&
        activeLang === el.lang &&
        activeFilter === el.theme
      ) {
        return true;
      }
      return false;
    })
    .map((el) => <Item key={el.title} {...el} />);

  const getItems = async () => {
    dispatch(fetchItems());
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={s.main}>
      <div className={s.menu_container}>
        <Lang />
      </div>
      <div className={s.menu_container}>
        <Filter />
      </div>
      <div className={s.container}>
        <h1>{activeLang}</h1>
        <Search />
        <h2>{activeFilter}</h2>
        <div className={s.item_container}>{itemBlocks}</div>
      </div>
    </div>
  );
};

export default App;
