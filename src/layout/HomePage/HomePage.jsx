import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductContainer from '../../components/ProductContainer';
import SelectBox from '../../components/SelectBox';

function HomePage(props) {
  const {
    getProducts,
    getCategories,
    productsState,
    categoryState,
    categoryUrl,
    categoryProductState,
  } = props;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const [filterProducts, setFilterProducts] = useState('all');
  const params = new URLSearchParams(location.search);

  const categotyrQuery = params.get('category');

  useEffect(() => {
    categoryUrl(categotyrQuery || filterProducts);
    setFilterProducts(categotyrQuery || filterProducts);
  }, [filterProducts]);

  const onChangeDataType = async (e) => {
    setFilterProducts(e.target.value);
    navigate(`/?category=${e.target.value}`);
  };

  return (
    <>
      <SelectBox
        onChangeDataType={onChangeDataType}
        categories={categoryState}
        value={categotyrQuery || 'all'}
      />
      <ProductContainer
        products={
          filterProducts && filterProducts === 'all'
            ? productsState.products
            : categoryProductState.products
        }
      />
    </>
  );
}

HomePage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  categoryUrl: PropTypes.func.isRequired,
  productsState: PropTypes.instanceOf(Object).isRequired,
  categoryState: PropTypes.instanceOf(Object).isRequired,
  categoryProductState: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
