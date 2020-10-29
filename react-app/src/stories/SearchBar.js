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
    <input type="search" aria-label="Search" />
    <button className="button--search" type="submit" />
  </form>
);
