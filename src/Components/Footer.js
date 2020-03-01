import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const FooterComponent = styled.div`
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

export const Footer = () => (
  <FooterComponent>
    <p>
      <Logo /> &copy; Hojoong Choi
    </p>
  </FooterComponent>
);

export default Footer;
