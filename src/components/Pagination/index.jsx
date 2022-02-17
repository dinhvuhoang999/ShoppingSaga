import React from 'react';
/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

function Pagination(props) {
  const navigate = useNavigate();

  const { perPage, totalPost, onChangePage } = props;
  
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / perPage); i += 1) {
    pageNumber.push(i);
  }

  const onKeyDownDiv = () => null;
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => {
          return(
          <li key={number} className="page-item">
            <button
              type="button"
              onKeyDown={onKeyDownDiv}
              tabIndex={0}
              onClick={() => onChangePage(navigate(`${location.pathname}?page=${number}`))}
              className="page-link"
            >
              {number}
              {/* {page} */}
            </button>
          </li>
          )
        })} 
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
