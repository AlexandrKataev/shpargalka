import s from './Item.module.scss';

import { useState } from 'react';
import Copy from 'features/Copy/Copy';
import { useNavigate } from 'react-router-dom';

type itemProps = {
  title: string;
  descr: string;
};

const Item: React.FC<itemProps> = ({ title, descr }) => {
  const [activeCopy, setActiveCopy] = useState('');
  const [onMouseCopy, setOnMouseCopy] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={s.item}
      onMouseOver={() => setActiveCopy(title)}
      onMouseOut={() => setActiveCopy('')}
      onClick={() => !onMouseCopy && navigate(`/item/${title}`)}>
      <h3>
        {title}
        <span onMouseOver={() => setOnMouseCopy(true)} onMouseOut={() => setOnMouseCopy(false)}>
          {activeCopy === title && <Copy activeCopy={activeCopy} />}
        </span>
      </h3>

      <div className={s.item_description}>{descr}</div>
    </div>
  );
};

export default Item;
