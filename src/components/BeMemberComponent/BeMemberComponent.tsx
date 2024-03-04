import { NavLink } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import useDataFetching from '../../hooks/useFetchData';

import Button from '../Button/Button';
import { Review } from '../../interfaces/ComponentsInterfaces';

import styles from './BeMemberComponent.module.scss';

const BeMemberComponent = () => {
  const { data: reviews } = useDataFetching<Review[]>('https://smuknu.webmcdm.dk/reviews');

  const windowWidth = useWindowWidth();

  let cutReviews: Review[] = [];

  if (!reviews) {
    return <div>Loading...</div>;
  } else {
     cutReviews = reviews.slice(0, 4);
  }

  return (
    <section className={styles.BeMemberComponent}>
      <div className={`wrapper ${styles.container}`} data-testid="BeMemberComponent">
        <div className={styles.beMemberBlock}>
          <h3>MEDLEM?</h3>
          <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
          <NavLink to="/be-member">{windowWidth >= 728 ? <Button btnTitle="Bliv medlem" /> : <Button btnTitle="Bliv medlem af kundeklubben" />}</NavLink>
        </div>
        {windowWidth >= 728 && (
          <div className={styles.ourMembers}>
            {cutReviews.map((review) => {
              return (
                <div key={review._id} className={styles.itemMember}>
                  <img src={review.image} alt="member avatar" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BeMemberComponent;
