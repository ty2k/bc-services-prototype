import React, { useState } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { Button } from "./Button";
import { SearchBar } from "./SearchBar";
import { Nav } from "./Nav";
import { ReactComponent as Logo } from "./assets/BCID_V_rgb_pos.svg";
import { ReactComponent as HamburgerIcon } from "./assets/bars-solid.svg";
import "./header.css";

function Header({ title, user, onLogin, onLogout, onCreateAccount }) {
  const [navHidden, setNavHidden] = useState(true);

  function toggleMenu(event) {
    setNavHidden(!navHidden);
  }

  return (
    <header>
      <div className="wrapper">
        <div>
          <Logo id="logo" />
          <span className="span--title">
            {title ? title : `Government of British Columbia`}
          </span>
        </div>
        <div>
          <MediaQuery minWidth={992}>
            <SearchBar />
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
          </MediaQuery>
          <MediaQuery maxWidth={991}>
            <a href="/#" onClick={(event) => toggleMenu(event)} id="menu-icon">
              <HamburgerIcon />
              <span>Menu</span>
            </a>
          </MediaQuery>
        </div>
      </div>
      <MediaQuery maxWidth={991}>
        <Nav hidden={navHidden} />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Nav />
      </MediaQuery>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  navHidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  user: false,
  navHidden: true,
};

export default Header;
