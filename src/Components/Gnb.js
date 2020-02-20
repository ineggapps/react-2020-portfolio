import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { PAGE_PORTFOLIO, PAGE_ABOUT, PAGE_MAIN, PAGE_RESUME, PAGE_CONTACT } from "./Routes";
import { Logo, ProfileIcon, ComputerIcon, PaperIcon, EnvelopeIcon } from "./Icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.ul`
  font-family: "Roboto";

  li {
    font-weight: bold;
    font-size: 1em;
    a {
      color: #fff;
    }
    svg {
      fill: #fff;
    }
  }

  li.on,
  li:hover {
    a {
      color: ${props => props.theme.darkBlueColor};
    }
    svg {
      fill: ${props => props.theme.darkBlueColor};
    }
  }
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const classOn = "on";

const Gnb = withRouter(({ location: { pathname } }) => {
  return (
    <Container>
      <Menu>
        <Item className={pathname === PAGE_ABOUT || pathname === PAGE_MAIN ? classOn : ""}>
          <Link to={PAGE_ABOUT}>
            <ProfileIcon /> About
          </Link>
        </Item>
        <Item className={pathname === PAGE_PORTFOLIO ? classOn : ""}>
          <Link to={PAGE_PORTFOLIO}>
            <ComputerIcon /> Portfolio
          </Link>
        </Item>
        <Item className={pathname === PAGE_RESUME ? classOn : ""}>
          <Link to="#">
            <PaperIcon /> Resume
          </Link>
        </Item>
        <Item className={pathname === PAGE_CONTACT ? classOn : ""}>
          <Link to="#">
            <EnvelopeIcon /> Contact
          </Link>
        </Item>
      </Menu>
    </Container>
  );
});

export default Gnb;
