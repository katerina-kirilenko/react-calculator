import React from 'react';
import PropTypes from 'prop-types';
import Row from '@/components/blocks/Row';

const Rows = ({ rows, onRowDelete, onToggleDisable, onChangeInput, onChangeSelect }) => {
  const renderRows = rows.map((row) => {
    return (
      <li key={row.id} className="list-group-item d-flex justify-content-between">
        <Row
          row={row}
          onRowDelete={onRowDelete(row.id)}
          onToggleDisable={onToggleDisable(row.id)}
          onChangeInput={onChangeInput(row.id)}
          onChangeSelect={onChangeSelect(row.id)}
        />
      </li>
    );
  });

  return <ul className="list-group">{renderRows}</ul>;
};

Rows.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      signSelected: PropTypes.string,
      value: PropTypes.string,
      disable: PropTypes.bool,
    }),
  ).isRequired,
  onRowDelete: PropTypes.func.isRequired,
  onToggleDisable: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
};

export default Rows;
