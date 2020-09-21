import React, { useEffect, useState } from "react";
import "./Services.scss";

import { Service } from "./stories/Service";
import { ServiceHighlight } from "./stories/ServiceHighlight";

function Services() {
  const [services, setServices] = useState({});

  async function fetchData() {
    const res = await fetch('/api/services');
    res
      .json()
      .then(res => setServices(res.services))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="div--services-container">

      {/* Search bar */}
      <div className="div--search">
        <h2>Find a program or service</h2>
        <form>
          <label>
            <input></input>
          </label>
          <button></button>
        </form>
      </div>

      {/* Service highlight cards */}
      <div className="div--service-highlight-container">
        {services &&
          services.length > 0 &&
          services
            .filter(service => service.highlight === true)
            .map(({name, url, external, image}, index) => (
              <ServiceHighlight
                key={index && ` - ` && name}
                name={name}
                icon={image}
                url={url}
                external={external}
              />
        ))}
      </div>

      {/* Services list */}
      {services && services.length > 0 && services.map(({name, description, url, external}, index) => (
        <Service
          key={index}
          name={name}
          description={description}
          url={url}
          external={external}
        />
      ))}

    </div>
  );
}

export default Services;
