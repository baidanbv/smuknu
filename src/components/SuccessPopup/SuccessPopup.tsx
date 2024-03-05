import Button from './../Button/Button';
import { NavLink } from 'react-router-dom';

import successImage from '../../assets/img/reviews/kathrine_udgaard.jpg';

import styles from './SuccessPopup.module.scss';

interface SuccessPopup {
  subscriberName: string;
}

const SuccessPopup = ({ subscriberName }: SuccessPopup) => (
  <div className={styles.SuccessPopup} data-testid="SuccessPopup">
    <h3>TAK!</h3>
    <p className={styles.subscriberName}>{subscriberName}</p>
    <p className={styles.subtitle}>Vi er enormt glade for at få dig som medlem.</p>
    <div className={styles.successImg}>
      <img src={successImage} alt="Success" />
    </div>
    <p className={styles.subtitle}>Kig I din inbox vi har sendt en lille velkomst gave.</p>
    <NavLink to="/smuknu" className={styles.wrapperButton}>
      <Button btnTitle="Til Forsiden" />
    </NavLink>
  </div>
);

export default SuccessPopup;
