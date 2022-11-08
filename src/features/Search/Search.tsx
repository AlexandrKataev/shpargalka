import React from 'react';
import s from './Search.module.scss';

import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectSearchValue } from './model/selectors';
import { setSearchValue } from './model/SearchSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <>
      <div className={s.search_body}>
        <input
          className={s.search}
          type="text"
          placeholder="Поиск"
          value={searchValue}
          onChange={inputHandler}
        />
        {searchValue && (
          <svg
            onClick={onClickClear}
            className={s.close}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        )}
      </div>
    </>
  );
};

export default Search;
