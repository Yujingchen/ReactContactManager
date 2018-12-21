import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding, test } = props;
  return (
    <div>
      <h1 style={HeaderStyle}>
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

const HeaderStyle = {
  color: "red",
  fontSize: "50px"
};
export default Header;
