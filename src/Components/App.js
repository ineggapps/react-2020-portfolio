import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";
import Theme from "../Styles/Theme";
import Logo from "./Logo";

const Container = styled.div`
  width: 100%;
  & > div {
    width: 100%;
  }
`;

const HeaderWrapper = styled.div`
  ${props => props.theme.transition};
  @media screen and (max-width: ${props => props.theme.responsivePC}) {
    header {
      width: 100%;
      height: auto;
      position: unset;
      display: block;
      padding-bottom: 20px;
    }
  }
`;

const ContentWrapper = styled.div`
  ${props => props.theme.transition};
  padding-left: ${props => props.theme.headerWidth};
  @media screen and (max-width: ${props => props.theme.responsivePC}) {
    padding-left: 0;

    nav {
      display: none;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 50px 20px;
  background-color: #2b2d2e;
  p {
    padding-left: ${props => props.theme.headerWidth};
    width: 100%;
    color: ${props => props.theme.lightGreyColor};
    text-align: center;
    font-size: 0.7em;
    @media screen and (max-width: ${props => props.theme.responsivePC}) {
      padding-left: 0;
    }
  }
  img.logo {
    vertical-align: middle;
    width: 22px;
    height: 25px;
    margin-right: 20px;
  }
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
            <Footer>
              <p>
                <Logo /> &copy; Corp Hojoong Choi
              </p>
            </Footer>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
