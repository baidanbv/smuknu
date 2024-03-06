import { Product } from './Product';

export interface ProductPageProps {
  addToCart: (product: Product) => void;
  handleCart: () => void;

  cartsProducts?: Product[] | undefined;
}