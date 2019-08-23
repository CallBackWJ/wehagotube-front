import React from "react";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import App from "./App";

const Root = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </>
  );
};

export default Root;
