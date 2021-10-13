import React from "react";
import Header from "../Header";
import FlightCards from "../FlightCards/FlightCards";

import STYLES from "./App.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const App = () => (
  <div className={getClassName("App")}>
    <Header />
    <main className={getClassName("App__main")}>
      <FlightCards />
    </main>
  </div>
);

export default App;
