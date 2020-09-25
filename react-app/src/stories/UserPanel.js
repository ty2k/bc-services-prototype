import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";

function UserPanel({ userSession, onLogin, onLogout, onCreateAccount }) {
  return (
    <>
      {userSession ? (
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
    </>
  );
}

UserPanel.propTypes = {
  userSession: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

UserPanel.defaultProps = {
  userSession: false,
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
};

export default UserPanel;
