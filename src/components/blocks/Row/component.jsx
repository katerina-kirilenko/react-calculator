import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ getInputValue, inputValue }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <select className="form-control col-1 mr-3">
            <option> + </option>
            <option> - </option>
          </select>
          <input
            type="text"
            className="form-control col-8"
            onChange={(e) => getInputValue(e)}
            placeholder={inputValue}
          />
          <div className="col-3 d-flex">
            <button type="button" className="btn btn-danger w-100 mr-3">
              Delete
            </button>
            <button type="button" className="btn btn-dark w-100">
              Disable
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

Row.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Row;
