import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";
import Theme from "../Styles/Theme";

const Container = styled.div`
  width: 100%;
  & > div {
    width: 100%;
    @media screen and (min-width: 992px) {
      width: 80%;
      margin: 0 auto;
      transition: ease all 0.2s;
    }
  }
`;

const HeaderWrapper = styled.div`
  padding: 50px 0;
`;

const ContentWrapper = styled.div``;

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Container>
            <HeaderWrapper>
              <Header />
            </HeaderWrapper>
            <ContentWrapper>
              <Routes />
            </ContentWrapper>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
