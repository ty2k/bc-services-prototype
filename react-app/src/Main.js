import React, { useEffect, useState } from "react";
import "./Main.scss";

import { Service } from "./stories/Service";
import { ServiceHighlight } from "./stories/ServiceHighlight";
import icon41 from "./img/u41.png"; // B.C. Emergency Workers Benefit
import icon37 from "./img/u37.png"; // Medical Services Plan
import icon38 from "./img/u38.png"; // Freshwater Fishing License
import icon39 from "./img/u39.png"; // Limited Entry Hunting Permit
import icon36 from "./img/u36.png"; // Speculation and Vacancy Tax
import icon40 from "./img/u40.png"; // High School Transcripts & Certificates

function Main() {
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
    <main>
      <h1>Programs &amp; Services</h1>
      <div className="div--search">
        <h2>Find a program or service</h2>
        <form>
          <label>
            <input></input>
          </label>
          <button></button>
        </form>
      </div>
      <div className="div--service-highlight-container">
        <ServiceHighlight
          key="bc-emergency-workers-benefit"
          name="B.C. Emergency Workers Benefit"
          icon={icon41}
          url="https://www2.gov.bc.ca/gov/content/employment-business/covid-19-financial-supports/emergency-benefit-workers"
          external
        />
        <ServiceHighlight
          key="medical-services-plan"
          name="Medical Services Plan"
          icon={icon37}
          url="https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents"
        />
        <ServiceHighlight
          key="freshwater-fishing-license"
          name="Freshwater Fishing License"
          icon={icon38}
          url="https://www2.gov.bc.ca/gov/content/sports-culture/recreation/fishing-hunting/fishing/recreational-freshwater-fishing-licence?keyword=fishing&keyword=licence"
        />
        <ServiceHighlight
          key="limited-entry-hunting-permit"
          name="Limited Entry Hunting Permit"
          icon={icon39}
          url="https://www2.gov.bc.ca/gov/content/sports-culture/recreation/fishing-hunting/hunting"
        />
        <ServiceHighlight
          key="speculation-and-vacancy-tax"
          name="Speculation and Vacancy Tax"
          icon={icon36}
          url="https://www2.gov.bc.ca/gov/content/taxes/speculation-vacancy-tax/how-tax-works"
        />
        <ServiceHighlight
          key="high-school-transcripts-and-certificates"
          name="High School Transcripts &amp; Certificates"
          icon={icon40}
          url="https://www2.gov.bc.ca/gov/content/education-training/k-12/support/transcripts-and-certificates"
        />
      </div>
      {services && services.length > 0 && services.map(({name, description, url, external}, index) => (
        <Service
          key={index}
          name={name}
          description={description}
          url={url}
          external={external}
        />
      ))}
    </main>
  );
}

export default Main;
