import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import { SearchBar } from "./SearchBar";
import { ReactComponent as Logo } from "./assets/BCID_V_rgb_pos.svg";
import { ReactComponent as HamburgerIcon } from "./assets/bars-solid.svg";
import "./header.css";

function toggleMenu(event) {
  console.log(event);
}

export const Header = ({ title, user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <Logo id="logo" />
        <span className="span--title">
          {title ? title : `Government of British Columbia` }
        </span>
      </div>
      <div>
        <SearchBar/>
        {user ? (
          <Button size="medium" onClick={onLogout} label="Logout" />
        ) : (
          <>
            <Button size="medium" onClick={onLogin} label="Login" />
            <Button
              primary
              size="medium"
              onClick={onCreateAccount}
              label="Register"
            />
          </>
        )}
        <a
          href="/#"
          onClick={(event) => toggleMenu(event)}
          id="menu-icon"
        >
          <HamburgerIcon />
          <span>Menu</span>
        </a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: false,
};
