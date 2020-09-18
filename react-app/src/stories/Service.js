import React from "react";
import PropTypes from "prop-types";

import "./service.css";

export const Service= ({ name, description, url, external }) => (
  <div className="div--service">
    <span className="span--service-title">
      <a href={url}>
        {name}
      </a>
      { external ? <span>&nbsp;Ext</span> : null }
    </span>
    <p>{description}</p>
    <p>{external}</p>
  </div>
);

Service.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  external: PropTypes.bool
};

Service.defaultProps = {
  name: "Service",
  description: "A description of a service",
  url: "https://gov.bc.ca",
  external: true
};
