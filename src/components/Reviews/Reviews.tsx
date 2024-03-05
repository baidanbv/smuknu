import { useState, useEffect } from 'react';
import axios from 'axios';

import Title, { TitlePartPosition } from './../Title/Title';
import SingleReview from './SingleReview/SingleReview';
import { Review } from '../../interfaces/ComponentsInterfaces';

import styles from './Reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://smuknu.webmcdm.dk/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.Reviews}>
      <Title partOne="SKØNHEDER " partTwo="UDTALER" partPosition={TitlePartPosition.First} />
      <div className={`wrapper ${styles.reviewsList}`}>
        {reviews.map((review) => {
          return <SingleReview key={review._id} review={review} />;
        })}
      </div>
    </section>
  );
};

export default Reviews;
