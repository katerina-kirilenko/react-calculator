import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onRowAdd }) => {
//TODO вынести онклик в отдельную функцию
  return (
    <button type="button" className="btn btn-success mb-3 mt-3" onClick={(event) => onRowAdd(event)}>
      Add row
    </button>
  );
};

Header.propTypes = {
  onRowAdd: PropTypes.func.isRequired,
};

export default Header;
