import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";

import "./servicehighlight.css";
import { ReactComponent as IconExt } from "./assets/external-link-alt-solid.svg";

import icon41 from "./assets/u41.png"; // B.C. Emergency Workers Benefit
import icon37 from "./assets/u37.png"; // Medical Services Plan
import icon38 from "./assets/u38.png"; // Freshwater Fishing License
import icon39 from "./assets/u39.png"; // Limited Entry Hunting Permit
import icon36 from "./assets/u36.png"; // Speculation and Vacancy Tax
import icon40 from "./assets/u40.png"; // High School Transcripts & Certificates

const icons = {
  icon41,
  icon37,
  icon38,
  icon39,
  icon36,
  icon40
}

export const ServiceHighlight= ({ name, icon, url, external, searchTerm }) => (
  <div className="div--service-highlight">
    <img
      src={icons[icon]}
      alt=""
    />
    <span className="span--service-title">
      <a href={url}>
        <Highlighter
          highlightClassName="text--highlighted"
          searchWords={[searchTerm]}
          autoEscape={true}
          textToHighlight={name}
        />
      </a>
      { external ? <IconExt/> : null }
    </span>
  </div>
);

ServiceHighlight.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  external: PropTypes.bool,
  searchTerm: PropTypes.string
};

ServiceHighlight.defaultProps = {
  name: "ServiceHighlight",
  icon: "example.svg",
  url: "https://gov.bc.ca",
  external: false,
  searchTerm: ""
};
