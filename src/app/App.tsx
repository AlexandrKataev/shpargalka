import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
// import { items } from '../data/jsData';
import Item from '../components/Item/Item';
import { useAppDispatch, useAppSelector } from '../shared/hooks';
import { fetchItems } from './store/dataSlice';
import { selectItemsData } from './store/selectors';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeCopy, setActiveCopy] = useState('');
  const [activeMenu, setActiveMenu] = useState('');
  const [activeMenu2, setActiveMenu2] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const filters = ['Типы данных', 'Числа', 'Строки', 'Массивы', 'Объекты', 'Циклы'];
  const items = useAppSelector(selectItemsData);
  // const items1 = items;
  // const items2 = items;

  // const pizzas = items
  // .filter((obj: Pizza) => {
  // 	if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  // 		return true;
  // 	}
  // 	return false;
  // })
  // .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const itemBlocks = items
    .filter((el) => {
      if (el.title.toLowerCase().includes(searchValue.toLowerCase()) && activeMenu2 === '') {
        return true;
      } else if (
        el.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        activeMenu2 === el.theme
      ) {
        return true;
      } else if (
        el.descr.toLowerCase().includes(searchValue.toLowerCase()) &&
        activeMenu2 === el.theme
      ) {
        return true;
      }
      return false;
    })
    .map((el) => <Item key={el.title} {...el} />);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setSearchValue(enteredName);
  };

  const getItems = async () => {
    dispatch(fetchItems({ theme: 'massive' }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={s.main}>
      <div className={s.menu_container}>
        <div
          className={activeMenu === 'JS' ? s.menu_item : s.menu_item_inactive}
          onClick={() => setActiveMenu('JS')}>
          JS
        </div>
        <div
          className={activeMenu === 'CSS' ? s.menu_item : s.menu_item_inactive}
          onClick={() => setActiveMenu('CSS')}>
          CSS
        </div>
        <div
          className={activeMenu === 'HTML' ? s.menu_item : s.menu_item_inactive}
          onClick={() => setActiveMenu('HTML')}>
          HTML
        </div>
        <div
          className={activeMenu === 'React' ? s.menu_item : s.menu_item_inactive}
          onClick={() => setActiveMenu('React')}>
          React
        </div>
        <div
          className={activeMenu === 'TS' ? s.menu_item : s.menu_item_inactive}
          onClick={() => setActiveMenu('TS')}>
          TS
        </div>
        <div
          className={activeMenu === 'Git' ? s.menu_item : s.menu_item_inactive}
          onClick={() => setActiveMenu('Git')}>
          Git
        </div>
        <div
          className={activeMenu === 'VS Code' ? s.menu_item : s.menu_item_inactive}
          onClick={() => setActiveMenu('VS Code')}>
          VS Code
        </div>
      </div>
      <div className={s.menu_container}>
        <div
          className={activeMenu2 === '' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('')}>
          Все
        </div>
        <div
          className={activeMenu2 === 'Числа' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('Числа')}>
          Числа
        </div>
        <div
          className={activeMenu2 === 'string' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('string')}>
          Строки
        </div>
        <div
          className={activeMenu2 === 'Объекты' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('Объекты')}>
          Объекты
        </div>
        <div
          className={activeMenu2 === 'massive' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('massive')}>
          Массивы
        </div>
        <div
          className={activeMenu2 === 'Циклы' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('Циклы')}>
          Циклы
        </div>
        <div
          className={activeMenu2 === 'DOM' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('DOM')}>
          DOM
        </div>
        <div
          className={activeMenu2 === 'Event' ? s.menu2_item : s.menu2_item_inactive}
          onClick={() => setActiveMenu2('Event')}>
          Event
        </div>
      </div>
      <div className={s.container}>
        <h1>{filters[3]}</h1>
        <input className={s.search} type="text" value={searchValue} onChange={inputHandler} />
        <div className={s.item_container}>
          {/* <h2>Добавление/удаление элементов массива</h2> */}
          {itemBlocks}
        </div>
      </div>
    </div>
  );
};

export default App;
