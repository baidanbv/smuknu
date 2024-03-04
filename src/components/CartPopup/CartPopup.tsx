import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CartPopupProps } from '../../interfaces/ComponentsInterfaces';

import Button from './../Button/Button';
import { NavLink } from 'react-router-dom';

import styles from './CartPopup.module.scss';

const CartPopup = ({ productsInCart, closeHandler, amountIncrease, amountDecrease, removeFromCart }: CartPopupProps) => {
  const closeModalOutSide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'overlayPopup') {
      closeHandler();
    }
  };

  const totalPrice: number = productsInCart.reduce((acc, product) => {
    if (product.amount !== undefined) {
      return acc + product.price * product.amount;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div id="overlayPopup" className={styles.CartPopupOverlay} onClick={closeModalOutSide}>
      <div className={styles.popup}>
        {!productsInCart.length ? (
          <h4>Der er ingen produkter I kurven</h4>
        ) : (
          <>
            {productsInCart.map((product) => {
              return (
                <div key={product._id} className={styles.product}>
                  <div className={styles.productData}>
                    <img src={product.image} alt={product.title} />
                    <h5 className={styles.productName}>{product.title}</h5>
                  </div>
                  <div className={styles.productPrice}>
                    <div className={styles.counterProduct}>
                      <div className={styles.amount}>{product.amount}</div>
                      <div className={styles.changeAmount}>
                        <span>
                          <MdKeyboardArrowUp className={styles.countCart} onClick={() => amountIncrease(product)} />
                        </span>
                        <span>
                          <MdOutlineKeyboardArrowDown className={styles.countCart} onClick={() => amountDecrease(product)} />
                        </span>
                      </div>
                    </div>
                    <p className={styles.price}>{product.amount ? product.price * product.amount : product.price},00 kr.</p>
                  </div>
                  <FaRegTrashAlt className={styles.removeProduct} onClick={() => removeFromCart(product)} />
                </div>
              );
            })}
            <div className={styles.totalPrice}>
              <p className={styles.totalText}>I alt</p>
              <span>{totalPrice},00 kr.</span>
            </div>
            <div className={styles.toCheckout}>
              <NavLink to='/checkout'>
                <Button btnTitle="Til Betaling" />
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
