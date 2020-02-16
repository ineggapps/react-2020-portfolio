import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { PAGE_PORTFOLIO, PAGE_ABOUT, PAGE_MAIN } from "./Routes";
import { Logo } from "./Icons";

const Container = styled.div`
  display: flex;
  width: 100%;
  h1 {
    svg {
      width: 50px;
      height: 50px;
    }
    margin-right: 20px;
  }
`;

const Menu = styled.ul`
  font-family: "Roboto";
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-weight: bold;
    font-size: 1.2em;
    display: inline-block;
  }

  li.on a {
    color: ${props => props.theme.blueColor};
  }
`;

const Item = styled.li`
  font-weight: bold;
  font-size: 2em;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1em;
  }
  & a {
    color: ${props => (props.current ? props.theme.blueColor : props.theme.linkColor)};
  }
`;

const Gnb = withRouter(({ location: { pathname } }) => {
  return (
    <Container>
      <h1>
        <Logo></Logo>
      </h1>
      <Menu>
        <Item current={pathname === PAGE_ABOUT || pathname === PAGE_MAIN}>
          <Link to={PAGE_ABOUT}>About</Link>
        </Item>
        <Item current={pathname === PAGE_PORTFOLIO}>
          <Link to={PAGE_PORTFOLIO}>Portfolio</Link>
        </Item>
      </Menu>
    </Container>
  );
});

export default Gnb;
