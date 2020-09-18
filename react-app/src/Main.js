import React, { useEffect, useState } from "react";
import "./Main.scss";

import { Service } from "./stories/Service";

function Main() {
  const [services, setServices] = useState({});

  async function fetchData() {
    const res = await fetch('http://localhost:8080/api/services');
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
