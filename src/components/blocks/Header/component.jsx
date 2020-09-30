import React from 'react';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <button type="button" className="btn btn-success mb-3 mt-3">
      Add row
    </button>
  );
};

Header.propTypes = {
  // photo: PropTypes.string.isRequired,
};

export default Header;
