import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { Button } from "./Button";
import { SearchBar } from "./SearchBar";
import "./nav.css";

export const Nav = ({ dark, hidden, links }) => (
  <nav
    className={`${dark ? "nav nav--dark" : "nav"} ${
      hidden ? "nav--hidden" : ""
    }`}
  >
    <MediaQuery maxWidth={991}>
      <SearchBar />
      <div className="nav-container--buttons">
        <Button size="medium" label="Login" />
        <Button primary size="medium" label="Register" />
      </div>
    </MediaQuery>
    <ul>
      {links.map((link) => (
        <li key={link}>
          <a href="/#">{link}</a>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  dark: PropTypes.bool,
  hidden: PropTypes.bool,
  links: PropTypes.array,
};

Nav.defaultProps = {
  dark: false,
  hidden: false,
  links: [
    "Programs & Services",
    "Topics",
    "News",
    "Public Engagements",
    "Jobs & MyHR",
    "Get Help",
  ],
};
