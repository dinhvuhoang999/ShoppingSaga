import React from 'react';
import ReactStars from 'react-rating-stars-component';

import PropTypes from 'prop-types';

const RateStart = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { rate } = props;
  return (
    <ReactStars
      count={5}
      value={rate}
      edit={false}
      size={24}
      isHalf
      emptyIcon={<i className="far fa-star" />}
      halfIcon={<i className="fa fa-star-half-alt" />}
      fullIcon={<i className="fa fa-star" />}
      activeColor="#ffd700"
    />
  );
};

RateStart.propTypes = {
  rate: PropTypes.number.isRequired,
};

// RateStart.defaultProps = {
//   rate: 0,
// };

export default RateStart;
