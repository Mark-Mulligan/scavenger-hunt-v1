// Next
import Image from 'next/image';

// images
import lakitu from '../../public/images/Lakitu.png';

// styles
import styles from '../styles/components/Lakitu.module.scss';

const Lakitu = () => {
  return (
    <div className={styles.lakituPage}>
      <Image className={styles.lakitu} src={lakitu} alt="lakitu" height={220} width={200} />
    </div>
  );
};

export default Lakitu;
