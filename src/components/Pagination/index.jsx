import React from 'react';

import PropTypes from 'prop-types';

function Pagination(props) {
  const { perPage, totalPost, onChangePage } = props;

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / perPage); i += 1) {
    pageNumber.push(i);
  }

  const onKeyDownDiv = () => null;

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <div
              role="button"
              onKeyDown={onKeyDownDiv}
              tabIndex={0}
              onClick={() => onChangePage(number)}
              className="page-link"
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  totalPost: PropTypes.number.isRequired,
  onChangePage: PropTypes.instanceOf(Function).isRequired,
};

export default Pagination;
