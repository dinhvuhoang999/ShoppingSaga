import React from 'react';
import { useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Homepage from '../pages/HomePage';
import Cart from '../pages/ShoppingCart';
import MyItem from '../components/MyItem';
import Shop from '../pages/Shop';
import LoginPage from '../pages/LoginPage';
import ProductDetail from '../pages/ProductDetails';

const AppRouter = () => {
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/Cart', element: <Cart /> },
    { path: '/MyItem', element: <MyItem /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/LoginPage', element: <LoginPage /> },
    { path: '/ProductDetail/:id', element: <ProductDetail /> },
  ]);
  return routes;
};

function AppWrapper(props) {
  const { children } = props;
  return (
    <>
      {children}
      <AppRouter />
    </>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.instanceOf(Array),
};

AppWrapper.defaultProps = {
  children: [],
};

export default AppWrapper;
