import React from "react";
import PropTypes from "prop-types";

import "./nav.css";

export const Nav = ({ links, dark }) => (
  <nav
    className = { dark ? "nav nav--dark" : "nav" }
  >
    <ul>
      {links.map((link) =>
        <li><a href="#">{link}</a></li>
      )}
    </ul>
  </nav>
);

Nav.propTypes = {
  dark: PropTypes.bool,
  links: PropTypes.array
};

Nav.defaultProps = {
  dark: false,
  links: ['Programs & Services', 'Topics', 'News', 'Public Engagements', 'Jobs & MyHR', 'Get Help'],
};
