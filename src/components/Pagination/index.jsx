/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// eslint-disable-next-line no-unused-vars
import { useNavigate, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

function Pagination(props) {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  // const location = useLocation();

  const {
    perPage,
    totalPost,
    currentPage,
    onChangePage,
  } = props;
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / perPage); i += 1) {
    pageNumber.push(i);
  }
  // console.log('location.search', location);
  const onKeyDownDiv = () => null;
  return (
    <nav>
      <ul className="pagination pagination-lg justify-content-end">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <button
              type="button"
              onKeyDown={onKeyDownDiv}
              tabIndex={0}
              onClick={() => onChangePage(number)}
              className={`page-link ${number === currentPage ? 'active' : ''} rounded-0 shadow-sm border-top-0`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  totalPost: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

// Pagination.defaultProps = {
//   currentPage: 1,
// };

export default Pagination;
