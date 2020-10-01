import React from 'react';
import PropTypes from 'prop-types';
import { PLUS, MINUS } from '@/constants/constants';

const Row = ({ row }) => {
  const { value } = row;

  return (
    <>
      <select className="form-control col-1 mr-3">
        <option value={PLUS}>{PLUS}</option>
        <option value={MINUS}>{MINUS}</option>
      </select>
      <input
        type="text"
        className="form-control col-8"
        onChange={(e) => console.log(e.target.value)}
        value={value}
      />
      <div className="col-3 d-flex">
        <button type="button" className="btn btn-danger w-100 mr-3">
          Delete
        </button>
        <button type="button" className="btn btn-dark w-100">
          Disable
        </button>
      </div>
    </>
  );
};

Row.propTypes = {
  // row: PropTypes.object.isRequired,
};

export default Row;
