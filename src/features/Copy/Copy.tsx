import s from './Item.module.scss';
import copy from '../../assets/copy.png';

type copyProps = { activeCopy: string };

const Copy: React.FC<copyProps> = ({ activeCopy }) => {
  const onCopyClick = async () => {
    await navigator.clipboard.writeText(activeCopy);
  };

  return <img src={copy} onClick={onCopyClick} />;
};

export default Copy;
