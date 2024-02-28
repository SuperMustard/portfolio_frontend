import React from "react";

import { About, Header, Skills, Work, FootWrap } from "./container";
import { Navbar } from "./component";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <FootWrap />
    </div>
  );
};

export default App;
