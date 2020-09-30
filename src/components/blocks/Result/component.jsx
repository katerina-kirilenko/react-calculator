import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ res }) => {
  return (
    <div className="mt-3">
      <h4>
        Result: <span>{res}</span>
      </h4>
    </div>
  );
};

Result.propTypes = {
  res: PropTypes.string.isRequired,
};

export default Result;
