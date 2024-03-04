import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import LayOutPage from './pages/LayOutPage/LayOutPage';
import Shop from './pages/Shop/Shop';
import BeMember from './pages/BeMember/BeMember';
import Health from './pages/Health/Health';

import Home from './pages/Home/Home';
import CartPopup from './components/CartPopup/CartPopup';
import { Product } from './interfaces/Product';
import { scrollToTop } from './helpers/scrollToTop';

const App = () => {
  const productsInCartString = localStorage.getItem('productsInCart');
  const productsInCart: Product[] = productsInCartString ? JSON.parse(productsInCartString) : [];

  const [cartsProducts, setCartsProducts] = useState(productsInCart || []);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isEmptyCart, setIsEmptyCart] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const location = useLocation();

  const addToCart = (product: Product): void => {
    setCartsProducts((prev) => {
      const currentProduct = prev.find((item) => item._id === product._id);
      if (currentProduct) {
        return prev.map((item) => (item._id === product._id ? { ...item, amount: (item.amount || 0) + 1 } : item));
      } else {
        const newProductWithAmount: Product = { ...product, amount: 1 };
        return [...prev, newProductWithAmount];
      }
    });
    setIsEmptyCart(false);
  };

  const removeFromCart = (product: Product) => {
    setCartsProducts((prev: Product[]) => {
      const currentProduct = prev.find((item) => item._id === product._id);

      if (currentProduct) {
        return prev.filter((item) => item._id !== product._id);
      } else {
        return prev;
      }
    });
  };

  const amountDecrease = (product: Product) => {
    setCartsProducts((prev) => {
      const currentProduct = prev.find((item) => item._id === product._id);

      if (!currentProduct || currentProduct.amount === 1) {
        return prev;
      }

      return prev.map((item) => (item._id === product._id ? { ...item, amount: item.amount !== undefined ? item.amount - 1 : undefined } : item));
    });
  };

  const amountIncrease = (product: Product) => {
    setCartsProducts((prev) => {
      const currentProduct = prev.find((item) => item._id === product._id);

      if (currentProduct) {
        return prev.map((item) => (item._id === product._id ? { ...item, amount: item.amount !== undefined ? item.amount + 1 : undefined } : item));
      } else {
        return [...prev, { ...product, amount: product.amount !== undefined ? product.amount + 1 : 1 }];
      }
    });
  };

  const handleCart = () => {
    setIsOpenCart(!isOpenCart);
    setIsOpenMenu(false);
  };


  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsOpenCart(false);
  };

  const closeHandler = () => {
    if (isOpenMenu) {
      setIsOpenMenu(false);
    } else if (isOpenCart) {
      setIsOpenCart(false);
    }
  };

  useEffect(() => {
    setIsOpenMenu(false);
    scrollToTop();
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(cartsProducts));
    if (productsInCart?.length > 0) {
      setIsEmptyCart(false);
    }
    if (cartsProducts?.length === 0) {
      setIsEmptyCart(true);
    }
  }, [cartsProducts]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayOutPage handleCart={handleCart} isEmptyCart={isEmptyCart} toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />}>
          <Route index element={<Home addToCart={addToCart} />} />
          <Route path="shop" element={<Shop addToCart={addToCart} />} />
          <Route path="be-member" element={<BeMember />} />
          <Route path="sundhed" element={<Health />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>

      {isOpenCart && <CartPopup productsInCart={cartsProducts} closeHandler={closeHandler} amountIncrease={amountIncrease} amountDecrease={amountDecrease} removeFromCart={removeFromCart} />}
    </>
  );
};

export default App;
