import React from 'react';
import PropTypes from 'prop-types';
import Row from '@/components/blocks/Row';

const Rows = ({ rows }) => {
  const elements = rows.map((row) => {
    return (
      <li className="list-group-item d-flex justify-content-between" key={row.id}>
        <Row row={row} />
      </li>
    );
  });

  return (
    <form>
      <ul className="list-group">{elements}</ul>
    </form>
  );
};

Rows.propTypes = {
  // rows: PropTypes.object.isRequired,
};

export default Rows;
