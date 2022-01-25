import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ProductItem from '../ProductItem';
import Pagination from '../Pagination';

const ProductContainer = (props) => {
  const { products } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;
  const currentPageStrorage = localStorage.getItem('currentPageStrorage');
  const indexOfLastPost = currentPageStrorage * perPage;

  const indexOfFirst = indexOfLastPost - perPage;
  const currentPost = products && products.slice(indexOfFirst, indexOfLastPost);

  const onChangePage = (pageNumber) => {
    localStorage.setItem('currentPageStrorage', currentPage);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-list">
      <div className="container">
        <div className="col-12 d-flex flex-wrap">
          {currentPost
            && currentPost.map((item) => (
              <ProductItem
                key={item.id}
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
