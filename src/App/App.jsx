import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ProductContainer from '../components/ProductContainer';
import Navigation from '../components/Navigation';
import Form from '../components/Form';

function App(props) {
  const {
    getProducts,
    getUser,
    userState,
    productsState,
  } = props;

  const accessToken = localStorage.getItem('AUTHENTICATE_TOKEN');

  useEffect(() => {
    getProducts();
    if (!accessToken) return null;
    getUser();
    return () => {};
  }, [accessToken]);

  return (
    <div className="App">
      <Navigation username={userState.user.username} />
      { accessToken === null && (
        <Form />
      )}
      <ProductContainer products={productsState.products} />
    </div>
  );
}

App.propTypes = {
  getProducts: PropTypes.func.isRequired,
  productsState: PropTypes.instanceOf(Object).isRequired,
  getUser: PropTypes.instanceOf(Object).isRequired,
  userState: PropTypes.instanceOf(Object).isRequired,
};

export default App;
