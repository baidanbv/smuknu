import Title, { TitlePartPosition } from '../Title/Title';
import Products from '../Products/Products';

import { Product } from '../../interfaces/Product';

import styles from './FeaturedProducts.module.scss';
import useDataFetching from '../../hooks/useFetchData';

const FeaturedProducts = () => {
  const { data: products } = useDataFetching<Product[]>('https://smuknu.webmcdm.dk/products');

  let featuredProducts: Product[] = [];

  if (!products) {
    return <div>Loading...</div>;
  } else {
    featuredProducts = products.filter((item: Product) => item.recommended);
  }

  return (
    <section className={styles.FeaturedBeauty} data-testid="FeaturedBeauty" id="featuredProducts">
      <Title partOne="UDVALGT" partTwo="SKØNHED" partPosition={TitlePartPosition.Last} />
      <div className={`wrapper ${styles.featuredProducts}`}>
        <Products products={featuredProducts}/>
      </div>
    </section>
  );
};

export default FeaturedProducts;
