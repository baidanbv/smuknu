import { Product } from '../../../interfaces/Product';
import styles from './SingleProduct.module.scss';

interface SingleProductProps {
  product: Product;
  addToCart: (product: Product) => void;

  cartsProducts: Product[] | undefined;
  handleCart: () => void;
}

const SingleProduct = ({ product, addToCart, cartsProducts, handleCart }: SingleProductProps) => {
  let isInCart = false;

  cartsProducts?.find((item) => {
    if (item._id === product._id) {
      isInCart = true;
    }
  });

  return (
    <div className={styles.SingleProduct}>
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
          {isInCart ? (
            <button className={`${styles.addToCart} ${styles.inCart}`} onClick={handleCart} title='Vis kurven'>
              I kurven
            </button>
          ) : (
            <button
              className={styles.addToCart}
              onClick={() => {
                addToCart(product);
              }}
            >
              Tilføj
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
