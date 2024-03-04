import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaShoppingBag } from 'react-icons/fa';

import NavBar from './../NavBar/NavBar';
import logo from '../../assets/img/logo/smuknu_logo.png';
import { LayoutPageProps } from '../../interfaces/LayoutPageProps';

import styles from './Header.module.scss';

const Header = ({ handleCart, isEmptyCart, toggleMenu, isOpenMenu }: LayoutPageProps) => {
  return (
    <>
      <header className={styles.Header} data-testid="Header">
        <div className={`wrapper ${styles.topHeader}`}>
          <div className={styles.logo}>
            <NavLink to="/" className={styles.logo}>
              <img src={logo} alt="Smuknu logotype" />
            </NavLink>
          </div>
          <div className={styles.headerMenu}>
            <FaShoppingBag className={`${styles.cart} ${!isEmptyCart ? styles.full : ''}`} onClick={handleCart} />
            <RxHamburgerMenu className={styles.mobileMenu} onClick={toggleMenu} />
            <NavBar isOpenMenu={isOpenMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
