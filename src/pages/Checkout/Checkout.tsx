import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import PagePreviewSection from '../../components/PagePreviewSection/PagePreviewSection';
import { PagePreviewData } from '../../interfaces/ComponentsInterfaces';
import { Order } from '../../interfaces/Order';
import { Product } from '../../interfaces/Product';
import bgSection from '../../assets/img/headers/abouthealth.jpg';

import styles from './Checkout.module.scss';

interface CheckoutProps {
  productsInCart: Product[];
  clearCart: () => void;
}

const data: PagePreviewData = {
  bgSection: bgSection,
  contentBlockBgColor: '#F7F0F2',
  contentTitle: 'Kassen',
  contentSubtitle: ['Bare udfyld formularen og få produkter af dine drømme'],
  titleColor: '#000',
  contentColor: '#000'
};

const Checkout = ({ productsInCart, clearCart }: CheckoutProps) => {
  const totalPrice = productsInCart?.map((product) => product.amount! * product.price).reduce((acc, currentValue) => acc + currentValue, 0);

  const orders: Order[] = productsInCart.map((product) => {
    return {
      _id: product._id,
      amount: product.amount!
    };
  });
  
  const orderSummary = productsInCart?.map((product) => {
    return (
      <div className={styles.itemProduct} key={product._id}>
        <div className={styles.productData}>
          <img src={product.image} alt={product.title} />
          <div className={styles.productInfo}>
            <h4>
              {product.title} <span className={styles.productAmount}>x {product.amount}</span>
            </h4>
          </div>
        </div>
        <div className={styles.priceProduct}>${product.price}</div>
      </div>
    );
  });
  return (
    <>
      <PagePreviewSection {...data} />
      <div className="wrapper">
        <div className={styles.checkoutWrapper}>
          <CheckoutForm orders={orders} clearCart={clearCart} />
          <div className={styles.orderSummary}>
            <h4 className={styles.summaryTitle}>KURVOVERSIGT</h4>
            <div className={styles.orderList}>
              {orderSummary}
              <ul className={styles.priceDetails}>
                <li>
                  ORDRE TOTAL <span> ${totalPrice}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
