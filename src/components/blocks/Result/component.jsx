import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => {
  return (
    <div className="mt-3">
      <h4>
        Result:
        <span>{result}</span>
      </h4>
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.number.isRequired,
};

export default Result;
