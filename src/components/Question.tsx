// React
import React, { FC, ReactNode, useState } from 'react';

// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// images
import questionBlock from '../images/questionBlock.webp';
import mushroom from '../images/mushroom.webp';

// styles
import styles from '../styles/components/Question.module.scss';

interface IProps {
  title: string;
  riddle: ReactNode;
  answer: string;
  next: string;
}

const Question: FC<IProps> = ({ title, riddle, answer, next }) => {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userInput.toLowerCase().trim() === answer) {
      router.push(`/?page=${next}`, undefined, { shallow: true });
    } else {
      alert('Wrong Answer');
    }
  };

  return (
    <div
      style={{
        background: 'url(images/question1Background.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className={styles.menuContainer}>
        <Image className={styles.menuItem} height={60} width={60} src={mushroom} alt="Mushroom Menu" />
        <Image className={styles.menuItem} height={60} width={60} src={questionBlock} alt="hint" />
      </div>

      <div className={styles.questionContainer}>
        <h2>{title}</h2>
        {riddle}
      </div>
      <div className={styles.answerContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              className="input"
              style={{ textAlign: 'center' }}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Answer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;
