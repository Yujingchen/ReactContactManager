import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding, test } = props;
  return (
    <div>
      <h1>
        {branding} {test}
      </h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
