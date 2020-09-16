import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { Header } from "./stories/Header";
import { Nav } from "./stories/Nav";

function App() {
  return (
    <div className="App">
      <Header
        title="Hello World!"
      />
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
      </header>
    </div>
  );
}

export default App;
