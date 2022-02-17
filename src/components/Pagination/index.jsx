import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function Pagination(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    perPage,
    totalPost,
    onChangePage,
  } = props;
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
            <button
              type="button"
              onKeyDown={onKeyDownDiv}
              tabIndex={0}
              onClick={() => onChangePage(navigate(`${location.pathname}?page=${number}`))}
              className="page-link"
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
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
