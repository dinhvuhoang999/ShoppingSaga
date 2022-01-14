import React from 'react';

import PropTypes from 'prop-types';

function Pagination(props) {
  const { perPage, totalPost, paginate } = props;

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / perPage); i += 1) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  totalPost: PropTypes.number.isRequired,
  paginate: PropTypes.instanceOf(Function).isRequired,
};

export default Pagination;
