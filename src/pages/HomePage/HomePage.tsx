import s from './HomePage.module.scss';
import React, { useEffect, useState } from 'react';

import Item from 'entities/Item/Item';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectItemsData } from 'shared/api/selectors';

import { ItemType } from 'shared/api/types';
import Lang from 'features/Lang/Lang';
import Filter from 'features/Filter/Filter';
import { selectActiveFilter } from 'features/Filter/model/selectors';
import { selectActiveLang } from 'features/Lang/model/selectors';
import Search from 'features/Search/Search';
import { selectSearchValue } from 'features/Search/model/selectors';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const activeFilter = useAppSelector(selectActiveFilter);
  const activeLang = useAppSelector(selectActiveLang);
  const searchValue = useAppSelector(selectSearchValue);
  const items = useAppSelector(selectItemsData);

  const itemBlocks = items
    .filter((el) => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.main}>
      <Lang />
      <Filter />
      <div className={s.title}>
        <h1>{activeLang}</h1>
        <Search />
      </div>
      <div className={s.content}>
        <h2>{activeFilter}</h2>
        <div>{itemBlocks}</div>
      </div>
    </div>
  );
};

export default HomePage;
