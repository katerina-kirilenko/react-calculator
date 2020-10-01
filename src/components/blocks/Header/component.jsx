import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onRowAdd }) => {
  return (
    <button type="button" className="btn btn-success mb-3 mt-3" onClick={(e) => onRowAdd(e)}>
      Add row
    </button>
  );
};

Header.propTypes = {
  onRowAdd: PropTypes.func.isRequired,
};

export default Header;
