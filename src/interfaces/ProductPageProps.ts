import { Product } from './Product';

export interface ProductPageProps {
  addToCart: (product: Product) => void;
}