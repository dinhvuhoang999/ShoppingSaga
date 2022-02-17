import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Homepage from '../layout/HomePage';
import Cart from '../components/Cart';
import MyItem from '../components/MyItem';

const AppRouter = () => {
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/Cart', element: <Cart /> },
    { path: '/MyItem', element: <MyItem /> },
  ]);
  return routes;
};

function AppWrapper(props) {
  const { children } = props;
  return (
    <Router>
      {children}
      <AppRouter />
    </Router>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AppWrapper;
