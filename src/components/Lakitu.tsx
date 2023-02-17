// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// images
import lakitu from '../../public/images/Lakitu.png';

// styles
import styles from '../styles/components/Lakitu.module.scss';

const Lakitu = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push('/?page=question1', undefined, { shallow: true });
  };

  return (
    <div className={styles.lakituPage}>
      <Image className={styles.lakitu} src={lakitu} alt="lakitu" height={220} width={200} />
      <button className="btn" onClick={handleNext}>
        GO!
      </button>
    </div>
  );
};

export default Lakitu;
