import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';

import PropTypes from 'prop-types';

const RateStart = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { rate } = props;
  console.log('rate', rate);
  const rateStartComponent = () => (
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
  useEffect(() => {
    console.log('sss');
    rateStartComponent();
  }, [rate]);
  return (
    rateStartComponent()
  );
};

RateStart.propTypes = {
  rate: PropTypes.number,
};

RateStart.defaultProps = {
  rate: 0,
};

export default RateStart;
