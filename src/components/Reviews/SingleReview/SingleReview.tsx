import { Review } from '../../../interfaces/ComponentsInterfaces';
import styles from './SingleReview.module.scss';

interface SingleReviewProps {
  review: Review;
}

const SingleReview = ({ review }: SingleReviewProps) => (
  <div className={styles.SingleReview}>
    <div className={styles.reviewAvatar}>
      <img src={review.image} alt={review.name} />
    </div>
    <p className={styles.reviewText} dangerouslySetInnerHTML={{ __html: review.description }}></p>
    <h4 className={styles.reviewAuthor}>{review.name}</h4>
    <span>{review.byline}</span>
  </div>
);

export default SingleReview;
