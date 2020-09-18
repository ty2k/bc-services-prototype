import React from "react";
import PropTypes from "prop-types";

import "./servicehighlight.css";
import { ReactComponent as IconExt } from "./assets/external-link-alt-solid.svg";

export const ServiceHighlight= ({ name, icon, url, external }) => (
  <div className="div--service-highlight">
    <img src={icon}/>
    <span className="span--service-title">
      <a href={url}>
        {name}
      </a>
      { external ? <IconExt/> : null }
    </span>
  </div>
);

ServiceHighlight.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  external: PropTypes.bool
};

ServiceHighlight.defaultProps = {
  name: "ServiceHighlight",
  icon: "example.svg",
  url: "https://gov.bc.ca",
  external: false
};
