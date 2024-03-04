import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { LayoutPageProps } from '../../interfaces/LayoutPageProps';

const LayOutPage = ({ handleCart, isEmptyCart, toggleMenu, isOpenMenu }: LayoutPageProps) => {
  return (
    <>
      <Header handleCart={handleCart} isEmptyCart={isEmptyCart} toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayOutPage;
