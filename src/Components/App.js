import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";
import Theme from "../Styles/Theme";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Header />
            <Routes />
          </Wrapper>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
