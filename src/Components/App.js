import React from "react";
import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const Test = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
