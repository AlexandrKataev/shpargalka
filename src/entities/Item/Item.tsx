import s from './Item.module.scss';

import { useState } from 'react';
import Copy from '../../features/Copy/Copy';

type itemProps = {
  title: string;
  descr: string;
};

const Item: React.FC<itemProps> = ({ title, descr }) => {
  const [activeCopy, setActiveCopy] = useState('');

  return (
    <div
      className={s.item}
      onMouseOver={() => setActiveCopy(title)}
      onMouseOut={() => setActiveCopy('')}>
      <h3>
        {title}
        {activeCopy === title && <Copy activeCopy={activeCopy} />}
      </h3>

      <div className={s.item_description}>{descr}</div>
    </div>
  );
};

export default Item;
