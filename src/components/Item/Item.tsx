import s from './Item.module.scss';
import copy from '../../assets/copy.png';
import { useState } from 'react';

type itemProps = {
  title: string;
  descr: string;
};

const Item: React.FC<itemProps> = ({ title, descr }) => {
  const [activeCopy, setActiveCopy] = useState('');

  const onCopyClick = async () => {
    await navigator.clipboard.writeText(activeCopy);
    // alert('Text copied');
  };

  return (
    <div
      className={s.item}
      onMouseOver={() => setActiveCopy(title)}
      onMouseOut={() => setActiveCopy('')}>
      <h3 className={s.item_header}>
        {title}
        {activeCopy === title && <img src={copy} onClick={onCopyClick} />}
      </h3>

      <div className={s.item_description}>{descr}</div>
    </div>
  );
};

export default Item;

// className={s.item}
// onMouseOver={() => setActiveCopy(el.header)}
// onMouseOut={() => setActiveCopy('')}
