import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

import styles from './Accordeon.module.scss';
import useDataFetching from '../../hooks/useFetchData';

interface Question {
  _id: string;
  question: string;
  answer: string;
  created: Date;
}

const Accordeon = () => {
  const { data: questions } = useDataFetching<Question[]>('https://smuknu.webmcdm.dk/questions');
  const [selected, setSelected] = useState<number | null>();

  if (!questions) {
    return <div>Loading...</div>;
  }

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className={styles.Accordeon}>
      <div className={`wrapper ${styles.AccordeonWrapper}`}>
        {questions.map((item, index) => (
          <div key={index} className={styles.AccordeonItem}>
            <div className={styles.AccordeonTitle} onClick={() => toggle(index)}>
              <FaQuestion className={selected === index ? `${styles.titleIcon} ${styles.titleIconActive}` : `${styles.titleIcon}`} />
              <h3>{item.question}</h3>
            </div>
            <div className={selected === index ? `${styles.AccordeonContent} ${styles.show}` : styles.AccordeonContent}>
              <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordeon;
