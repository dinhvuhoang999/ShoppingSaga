/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SelectBox(props) {
  const { categories, onClickDataType, value } = props;
  return (
    <>
      <h1 className="h2 pb-4">Categories</h1>
      <ul className="list-unstyled templatemo-accordion">
        {categories.category
          && categories.category.map((item) => (
            <li className="pb-3" key={item} value={item}>
              <button
                className="button-category collapsed d-flex justify-content-between h3 text-decoration-none"
                onClick={() => onClickDataType(item)}
              >
                {item}
                {/* <i className="fa fa-fw fa-chevron-circle-down mt-1" /> */}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

SelectBox.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
  onClickDataType: PropTypes.func,
  value: PropTypes.string,
};

SelectBox.defaultProps = {
  value: '',
  onClickDataType: () => {},
};
export default SelectBox;
