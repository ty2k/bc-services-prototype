import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";

import "./service.css";
import { ReactComponent as IconExt } from "./assets/external-link-alt-solid.svg";

export const Service = ({
  name,
  description,
  url,
  external,
  searchTerm,
  ariaLabel,
}) => (
  <div className="div--service">
    <span className="span--service-title">
      <a aria-label={ariaLabel ? ariaLabel : name} href={url}>
        <Highlighter
          highlightClassName="text--highlighted"
          searchWords={[searchTerm]}
          autoEscape={true}
          textToHighlight={name}
        />
      </a>
      {external ? <IconExt /> : null}
    </span>
    <p>
      <Highlighter
        highlightClassName="text--highlighted"
        searchWords={[searchTerm]}
        autoEscape={true}
        textToHighlight={description}
      />
    </p>
  </div>
);

Service.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  external: PropTypes.bool,
  searchTerm: PropTypes.string,
};

Service.defaultProps = {
  name: "Service",
  description: "A description of a service",
  url: "https://gov.bc.ca",
  external: true,
  searchTerm: "",
};
