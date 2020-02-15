import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { PAGE_PORTFOLIO, PAGE_ABOUT } from "./Routes";

const Menu = styled.ul`
  font-family: "Roboto";
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-weight: bold;
    font-size: 2em;
    display: inline-block;
    &:not(:last-child) {
      margin-right: 1em;
    }
  }

  li.on a {
    color: ${props => props.theme.blueColor};
  }
`;

const Gnb = withRouter(({ location }) => {
  return (
    <div>
      <Menu>
        <li className={location === PAGE_ABOUT ? "on" : ""}>
          <Link to={PAGE_ABOUT}>About</Link>
        </li>
        <li>
          <Link to={PAGE_PORTFOLIO}>Portfolio</Link>
        </li>
      </Menu>
    </div>
  );
});

export default Gnb;
