// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// images
import marioTitle from '../../public/images/Mario_Series_Logo.svg';
import mario from '../../public/images/mario.png';

// styles
import styles from '../styles/components/Intro.module.scss';

const Intro = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/?page=instructions', undefined, { shallow: true });
  };

  return (
    <div className={styles.intro}>
      <Image src={marioTitle} alt="Super Mario" height={100} width={200} />
      <h1 className={styles.title}>SCAVENGER HUNT</h1>
      <button className="btn" onClick={handleStart}>
        Let&apos;s Go!
      </button>
      <Image src={mario} alt="Mario" />
    </div>
  );
};

export default Intro;
