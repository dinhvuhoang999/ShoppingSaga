import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductContainer from '../../components/ProductContainer';
import SelectBox from '../../components/SelectBox';

const Shop = (props) => {
  const {
    getProducts,
    getCategories,
    productsState,
    categoryState,
    categoryUrl,
    categoryProductState,
  } = props;
  // eslint-disable-next-line no-unused-vars
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
    categoryUrl(categotyrQuery || 'electronics');
    setFilterProducts(categotyrQuery || 'all');
  }, [categotyrQuery]);

  const onClickDataType = (item) => {
    setFilterProducts(item);
    navigate(`?category=${item}`);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <SelectBox
            onClickDataType={onClickDataType}
            categories={categoryState}
            value={filterProducts || 'all'}
          />
        </div>
        <div className="col-lg-9">
          <ProductContainer
            products={
              filterProducts && filterProducts === 'all'
                ? productsState.products
                : categoryProductState.products
            }
          />
        </div>
      </div>
    </div>
  );
};

Shop.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  categoryUrl: PropTypes.func.isRequired,
  productsState: PropTypes.instanceOf(Object).isRequired,
  categoryState: PropTypes.instanceOf(Object).isRequired,
  categoryProductState: PropTypes.instanceOf(Object).isRequired,
};

export default Shop;
