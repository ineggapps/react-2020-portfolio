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
    @media screen and (min-width: ${props => props.theme.responsivePC}) {
      /* PC버전 */
      ${props => props.theme.transition};
    }
  }
`;

const HeaderWrapper = styled.div``;

const ContentWrapper = styled.div`
  padding-left: ${props => props.theme.headerWidth};
`;

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
