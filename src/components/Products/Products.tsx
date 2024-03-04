import SingleProduct from './SingleProduct/SingleProduct';
import styles from './Products.module.scss';
import { Product } from '../../interfaces/Product';

interface ProductsProps { 
  products: Product[];
}

const Products = ({ products}: ProductsProps) => {
  return (
    <div className={`wrapper ${styles.Products}`} data-testid="Products">
      {products.map((product) => {
        return <SingleProduct key={product._id} product={product} />;
      })}
    </div>
  );
};
export default Products;