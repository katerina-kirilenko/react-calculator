import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Row from '@/components/blocks/Row';

const Rows = ({ rows, onRowDelete, onToggleDisable }) => {
  const handleRowDelete = useCallback(
    (id) => () => {
      onRowDelete(id);
    },
    [onRowDelete],
  );
  const handleToggleDisable = useCallback(
    (id) => () => {
      onToggleDisable(id);
    },
    [onRowDelete],
  );

  const renderRows = rows.map((row) => {
    return (
      <li key={row.id} className="list-group-item d-flex justify-content-between">
        <Row
          row={row}
          onRowDelete={handleRowDelete(row.id)}
          onToggleDisable={handleToggleDisable(row.id)}
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
};

export default Rows;
