
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import LayOutPage from './pages/LayOutPage/LayOutPage';
import Shop from './pages/Shop/Shop';
import BeMember from './pages/BeMember/BeMember';
import Health from './pages/Health/Health';
import Home from './pages/Home/Home';

import { scrollToTop } from './helpers/scrollToTop';

const App = () => {

 
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };


  useEffect(() => {
    setIsOpenMenu(false);
    scrollToTop();
  }, [location.pathname]);


  return (
    <>
      <Routes>
        <Route path="/" element={<LayOutPage toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="be-member" element={<BeMember />} />
          <Route path="sundhed" element={<Health />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
