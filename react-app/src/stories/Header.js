import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import { ReactComponent as Logo } from "./assets/BCID_V_rgb_pos.svg";
import "./header.css";

export const Header = ({ title, user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <Logo />
      {/* </div>
      <div> */}
        <h1>{title ? title : `Government of British Columbia` }</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Logout" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Login" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Register"
            />
          </>
        )}
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
  user: null,
};
