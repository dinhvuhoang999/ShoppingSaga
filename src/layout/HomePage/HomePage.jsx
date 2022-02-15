import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ProductContainer from '../../components/ProductContainer';

function HomePage(props) {
  const { getProducts, productsState } = props;

  useEffect(() => {
    getProducts();
  }, []);

  return <ProductContainer products={productsState.products} />;
}

HomePage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  productsState: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
