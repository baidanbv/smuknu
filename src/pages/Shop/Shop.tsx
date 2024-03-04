import { useEffect, useState } from 'react';
import axios from 'axios';

import PagePreviewSection from '../../components/PagePreviewSection/PagePreviewSection';
import BeMemberComponent from '../../components/BeMemberComponent/BeMemberComponent';
import Title, { TitlePartPosition } from '../../components/Title/Title';
import Products from '../../components/Products/Products';

import bgSection from '../../assets/img/headers/products.jpg';
import { ProductPageProps } from '../../interfaces/ProductPageProps';
import { PagePreviewData } from '../../interfaces/ComponentsInterfaces';

import styles from './Shop.module.scss';

const Shop = ({ addToCart }: ProductPageProps) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://smuknu.webmcdm.dk/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data: PagePreviewData = {
    bgSection: bgSection,
    contentBlockBgColor: '#000000CC',
    contentTitle: 'SKØNNE PRODUKTER',
    contentSubtitle: ['Herunder finder du alle vores produkter'],
    titleColor: '#fff',
    contentColor: '#fff'
  };
  return (
    <>
      <PagePreviewSection {...data} />
      <section className={styles.shopProducts}>
        <Title partOne="ALT ER" partTwo="SKØNHED" partPosition={TitlePartPosition.Last} />
        <Products products={products} addToCart={addToCart} />
      </section>
      <BeMemberComponent />
    </>
  );
};

export default Shop;
