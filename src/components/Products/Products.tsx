import SingleProduct from './SingleProduct/SingleProduct';
import styles from './Products.module.scss';
import { Product } from '../../interfaces/Product';

interface ProductsProps { 
  products: Product[];
  addToCart: (product: Product) => void;
}

const Products = ({ products, addToCart }: ProductsProps) => {
  return (
    <div className={`wrapper ${styles.Products}`}>
      {products.map((product) => {
        return <SingleProduct key={product._id} product={product} addToCart={addToCart} />;
      })}
    </div>
  );
};
export default Products;
