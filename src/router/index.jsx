import React from 'react';
import { useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Homepage from '../pages/HomePage';
import Cart from '../pages/ShoppingCart';
import MyItem from '../components/MyItem';
import Shop from '../pages/Shop';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/Cart', element: <Cart /> },
    { path: '/MyItem', element: <MyItem /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/LoginPage', element: <LoginPage /> },
  ]);
  return routes;
};

function AppWrapper(props) {
  const { children } = props;
  // const accessToken = localStorage.getItem('AUTHENTICATE_TOKEN');
  // console.log('accessToken', accessToken);
  return (
    <>
      {children}
      <AppRouter />
    </>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AppWrapper;
