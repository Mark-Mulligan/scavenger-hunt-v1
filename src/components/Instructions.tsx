// Next
import { useRouter } from 'next/router';

// styles
import styles from '../styles/components/Instructions.module.scss';

const Instructions = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/?page=lakitu', undefined, { shallow: true });
  };

  return (
    <div className={styles.instructions}>
      <div className={styles.instructionsContainer}>
        <h1>Instructions</h1>
        <ul>
          <li>
            Answer each clue by finding a star! The star&apos;s answer will allow you to continue to the next clue.
          </li>
          <li>
            If you have trouble with the clue, you can reveal a hint by hitting &#8220;?&#8221; block, but only after
            obtaining enough gold coins! Each hint is worth 3 coins.
          </li>
          <li>
            To obtain gold coins, you must correctly answer trivia questions for Mario and his gang. Correct blank
            answers receive 3 coins, correct multiple choice answers receive 1 coin.
          </li>
          <li>Collection all 10 stars to win the hunt!</li>
          <li>If you need to review these rules, just click on the mushroom icon on the top.</li>
          <div className={styles.btnContainer}>
            <button className="btn" onClick={handleNext}>
              Ok
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
