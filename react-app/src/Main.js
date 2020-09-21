import React from "react";
import "./Main.scss";

import Services from "./Services";

function Main({ title }) {
  return (
    <main>
      <h1>{title}</h1>
      <Services />
    </main>
  );
}

export default Main;
