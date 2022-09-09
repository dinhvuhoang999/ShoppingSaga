/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

function Pagination(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    perPage,
    totalPost,
    currentPage,
    onChangePage,
  } = props;
  const pageNumber = [];
  console.log(currentPage);
  for (let i = 1; i <= Math.ceil(totalPost / perPage); i += 1) {
    pageNumber.push(i);
  }

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
              onClick={() => onChangePage(navigate(`${location.pathname}?page=${number}`))}
              className={`page-link ${currentPage === number ? 'active' : ''} rounded-0 shadow-sm border-top-0`}
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
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
};

export default Pagination;
