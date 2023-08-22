import "./App.css";
import React from "react";
import Root from "./components/Root";
import State from "./stateManagement/State";

const App = () => {
  return (
    <State>
      <Root />
    </State>
  );
};

export default App;
