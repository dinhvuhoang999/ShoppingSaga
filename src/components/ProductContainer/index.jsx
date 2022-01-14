import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ProductsItems from '../ProductItem';
import Pagination from '../Pagination';
/* eslint-disable */ 
const ProductContainer = (props) => {
  const { products } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;
  // mặc định sẽ có bao nhiêu trang
  const indexOfLastPost = currentPage * perPage;
  // lấy cuối trang
  const indexOfFirst = indexOfLastPost - perPage;
  // lấy đầu trang trang
  const currentPost = products && products.slice(indexOfFirst, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="product-list">
      <div className="container">
        <div className="col-12 d-flex flex-wrap">
          {currentPost
            && currentPost.map((item) => (
              <ProductsItems
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
          paginate={paginate}
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
