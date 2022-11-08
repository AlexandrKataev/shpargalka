import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <div>Сраница не найдена</div>
      <Link to="/">НА ГЛАВНУЮ</Link>
    </div>
  );
};

export default NotFoundPage;
