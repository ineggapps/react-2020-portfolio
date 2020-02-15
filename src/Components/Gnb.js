import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const Gnb = () => (
  <div>
    <Menu>
      <li>
        <Link to={"/introduce"}>Introduce</Link>
      </li>
      <li>
        <Link to={"/portfolio"}>Portfolio</Link>
      </li>
    </Menu>
  </div>
);

export default Gnb;
