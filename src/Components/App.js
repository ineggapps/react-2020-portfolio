import React from "react";
import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Header />
          <Routes />
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
