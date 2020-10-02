import React from 'react';
import PropTypes from 'prop-types';
import Row from '@/components/blocks/Row';

const Rows = ({ rows, onRowDelete, onToggleDisable }) => {
  // TODO вынести онклик в отдельную функцию
  const rowDeleted = (id) => onRowDelete(id);
  // <button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button>

  const renderRows = rows.map((row) => {
    return (
      <li className="list-group-item d-flex justify-content-between" key={row.id}>
        <Row
          row={row}
          onRowDelete={() => onRowDelete(row.id)}
          onToggleDisable={() => onToggleDisable(row.id)}
        />
      </li>
    );
  });

  return (
    <form>
      <ul className="list-group">{renderRows}</ul>
    </form>
  );
};

Rows.propTypes = {
  // rows: PropTypes.object.isRequired,
  onRowDelete: PropTypes.func.isRequired,
  onToggleDisable: PropTypes.func.isRequired,
};

export default Rows;
