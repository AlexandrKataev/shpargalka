import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './ItemPage.module.scss';

const ItemPage: React.FC = () => {
  const currentItem = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.main}>
      <Link className={s.back} to="/">
        {'<'}
      </Link>
      <div className={s.content}>
        <h3 className={s.title}>{currentItem.title}</h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat molestias illum
        excepturi aut libero rem et debitis eius velit, molestiae possimus non dolorum nihil est
        consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Iusto, fugiat molestias illum excepturi aut libero rem et debitis eius velit,
        molestiae possimus non dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut
        libero rem et debitis eius velit, molestiae possimus non dolorum nihil est consequatur?
        Harum, ex voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
        fugiat molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimusnon
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Iusto, fugiat molestias illum excepturi aut libero rem et
        debitis eius velit, molestiae possimus non dolorum nihil est consequatur? Harum, ex
        voluptatibus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, fugiat
        molestias illum excepturi aut libero rem et debitis eius velit, molestiae possimus non
        dolorum nihil est consequatur? Harum, ex voluptatibus!
      </div>
    </div>
  );
};

export default ItemPage;
