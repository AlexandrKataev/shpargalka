import React, { useEffect } from 'react';
import s from './Filter.module.scss';

import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectActiveFilter, selectFilterItems } from './model/selectors';
import { setActiveFilter, setFilters } from './model/FilterSlice';
import { selectActiveLang } from '../Lang/model/selectors';
import { selectItemsData } from '../../shared/api/selectors';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterItems = useAppSelector(selectFilterItems);
  const activeFilter = useAppSelector(selectActiveFilter);
  const activeLang = useAppSelector(selectActiveLang);
  const data = useAppSelector(selectItemsData);

  useEffect(() => {
    const filterArray = data.reduce((newArr, el) => {
      //@ts-ignore
      if (!newArr.includes(el.theme) && activeLang === el.lang) {
        //@ts-ignore
        newArr.push(el.theme);
      }
      return newArr;
    }, []);
    dispatch(setFilters(['Все', ...filterArray]));
  }, [data, activeLang]);

  return (
    <>
      {filterItems.map((el) => {
        return (
          <div
            key={el}
            className={activeFilter === el ? s.menu2_item : s.menu2_item_inactive}
            onClick={() => dispatch(setActiveFilter(el))}>
            {el}
          </div>
        );
      })}
    </>
  );
};

export default Filter;
