import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { LayoutPageProps } from '../../interfaces/LayoutPageProps';

const LayOutPage = ({ toggleMenu, isOpenMenu }: LayoutPageProps) => {
  return (
    <>
      <Header toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayOutPage;
