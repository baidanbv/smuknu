import { Product } from '../../../interfaces/Product';
import styles from './SingleProduct.module.scss';

interface SingleProductProps {
  product: Product;
}

const SingleProduct = ({ product}: SingleProductProps) => {
  return (
    <div className={styles.SingleProduct} data-testid="SingleProduct">
      <div className={styles.productImage}>
        <img src={product.image} alt={product.title} />
        {product.discountInPercent > 0 && (
          <div className={styles.productDiscount}>
            spar
            <span>{product.discountInPercent}%</span>
          </div>
        )}
      </div>
      <div className={styles.productData}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <div className={styles.productPrice}>
          {product.price},00 kr.
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
