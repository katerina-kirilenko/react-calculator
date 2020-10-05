import React from 'react';
import PropTypes from 'prop-types';
import { PLUS, MINUS } from '@/constants/constants';

const Row = ({
  row: { value, disable },
  onRowDelete,
  onToggleDisable,
  onChangeInput,
  onChangeSelect,
}) => {
  return (
    <>
      <select className="form-control col-1 mr-3" disabled={disable} onChange={onChangeSelect}>
        <option value={PLUS}>{PLUS}</option>
        <option value={MINUS}>{MINUS}</option>
      </select>
      <input
        type="text"
        className="form-control col-8"
        onChange={onChangeInput}
        value={value}
        disabled={disable}
      />
      <div className="col-3 d-flex">
        <button type="button" className="btn btn-danger w-100 mr-3" onClick={onRowDelete}>
          Delete
        </button>
        <button type="button" className="btn btn-dark w-100" onClick={onToggleDisable}>
          {disable ? 'Turn on' : 'Disable'}
        </button>
      </div>
    </>
  );
};

Row.propTypes = {
  row: PropTypes.PropTypes.shape({
    id: PropTypes.string,
    signSelected: PropTypes.string,
    value: PropTypes.string,
    disable: PropTypes.bool,
  }).isRequired,
  onRowDelete: PropTypes.func.isRequired,
  onToggleDisable: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
};

export default Row;
