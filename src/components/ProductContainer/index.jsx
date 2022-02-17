import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import ProductItem from '../ProductItem';
import Pagination from '../Pagination';

const ProductContainer = (props) => {
  const { products } = props;

  const { search } = useLocation();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(search);

    const numberQuery = params.get('page');

    setCurrentPage(numberQuery || 1);
  });

  const perPage = 5;

  const indexOfLastPost = currentPage * perPage;

  const indexOfFirst = indexOfLastPost - perPage;

  const currentPost = products && products.slice(indexOfFirst, indexOfLastPost);

  const onChangePage = (pageNumber) => (setCurrentPage(pageNumber));

  return (
    <div className="product-list">
      <div className="container">
        <div className="col-12 d-flex flex-wrap">
          {currentPost
          && currentPost.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
              rate={item.rating.rate}
            />
          ))}
        </div>
        <Pagination
          perPage={perPage}
          onChangePage={onChangePage}
          totalPost={products.length}
        />
      </div>
    </div>
  );
};

ProductContainer.propTypes = {
  products: PropTypes.instanceOf(Array),
};

ProductContainer.defaultProps = {
  products: [],
};

export default ProductContainer;
