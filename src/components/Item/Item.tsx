import s from './Item.module.scss';
import copy from '../assets/copy.png';

type itemProps = {
  header: string;
  descr: string;
};

const Item: React.FC<itemProps> = ({ header, descr }) => {
  return (
    <div>
      <h3 className={s.item_header}>
        {header}
        {activeCopy === el.header && <img src={copy} onClick={onCopyClick} />}
      </h3>

      <div className={s.item_description}>{descr}</div>
    </div>
  );
};

export default Item;

// className={s.item}
// onMouseOver={() => setActiveCopy(el.header)}
// onMouseOut={() => setActiveCopy('')}
