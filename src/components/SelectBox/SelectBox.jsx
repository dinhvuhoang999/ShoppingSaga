import React from 'react';

import PropTypes from 'prop-types';

function SelectBox(props) {
  const { categories, onChangeDataType, value } = props;

  return (
    <label htmlFor="cart">
      Choose category:
      <select value={value} onChange={onChangeDataType} name="cars" id="cars">
        <option value="all"> all </option>
        {categories.category
        && categories.category.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

SelectBox.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
  onChangeDataType: PropTypes.func.isRequired,
  value: PropTypes.string,
};

SelectBox.defaultProps = {
  value: '',
};
export default SelectBox;
