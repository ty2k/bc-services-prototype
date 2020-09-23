import React from "react";
import PropTypes from "prop-types";

import "./nav.css";

export const Nav = ({ dark, hidden, links }) => (
  <nav
    className = {`${dark ? "nav nav--dark" : "nav"} ${hidden ? "nav--hidden" : ""}`}
  >
    <ul>
      {links.map((link) =>
        <li key={link}>
          <a href="/#">
            {link}
          </a>
        </li>
      )}
    </ul>
  </nav>
);

Nav.propTypes = {
  dark: PropTypes.bool,
  hidden: PropTypes.bool,
  links: PropTypes.array
};

Nav.defaultProps = {
  dark: false,
  hidden: false,
  links: ['Programs & Services', 'Topics', 'News', 'Public Engagements', 'Jobs & MyHR', 'Get Help'],
};
