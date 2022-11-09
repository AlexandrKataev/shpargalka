import React, { useEffect, useState } from 'react';
import s from './Lang.module.scss';

import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectActiveLang, selectLangItems } from './model/selectors';
import { setActiveLang } from './model/LangSlice';
import { LangItems } from './model/types';
import { setActiveFilter } from '../Filter/model/FilterSlice';

const Lang: React.FC = () => {
  const dispatch = useAppDispatch();
  const langItems = useAppSelector(selectLangItems);
  const activeLang = useAppSelector(selectActiveLang);

  const onClickLang = (el: LangItems) => {
    dispatch(setActiveLang(el));
    dispatch(setActiveFilter('Все'));
  };

  return (
    <div className={s.container}>
      {langItems.map((el) => {
        return (
          <div
            key={el}
            className={activeLang === el ? s.item_active : s.item}
            onClick={() => onClickLang(el)}>
            <div>{el}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Lang;
