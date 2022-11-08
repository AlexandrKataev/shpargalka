import { Link, useParams } from 'react-router-dom';
import s from './ItemPage.module.scss';

const ItemPage: React.FC = () => {
  const currentItem = useParams();

  return (
    <div>
      <div>{currentItem.title}</div>
      <Link to="/">НАЗАД</Link>
    </div>
  );
};

export default ItemPage;
