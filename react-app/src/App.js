import React from "react";

import { Header } from "./stories/Header";
import { Nav } from "./stories/Nav";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Header
        title="Services"
      />
      <Nav/>
      <Main
        title="Programs &amp; Services"
      />
    </div>
  );
}

export default App;
