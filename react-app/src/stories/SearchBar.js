import React from "react";
import PropTypes from "prop-types";

import "./searchbar.css";

export const SearchBar = ({ icon }) => (
  <form className="search">
    <input type="search" aria-label="Search"/>
    <button className="button--search" type="submit"/>
  </form>
);

SearchBar.propTypes = {
  icon: PropTypes.bool
};

SearchBar.defaultProps = {
  icon: true
};
