import React from "react";

import "./searchbar.css";

export const SearchBar = () => (
  <form
    className="search"
    autocomplete="off"
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <input type="search" aria-label="Enter search term" />
    <button className="button--search" type="submit" aria-label="Search" />
  </form>
);
