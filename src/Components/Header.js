import React from "react";
import styled from "styled-components";
import Gnb from "./Gnb";
import { GithubIcon, EmailIcon } from "./Icons";
import { PAGE_ABOUT } from "./Routes";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { getHeaderUrl } from "../util";

const Container = styled.header`
  position: fixed;
  width: ${(props) => props.theme.headerWidth};
  height: 100vh;
  background-color: ${(props) => props.theme.theme1Color};
  color: white;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #54b689;
  }
`;

const SQUARE = "160px";

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Profile = styled.div`
  width: 100%;
`;

const ImageSwitcher = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  width: ${SQUARE};
  height: ${SQUARE};
  & > div {
    background-size: cover;
  }

  & > div.illustrator:hover {
    opacity: 0;
    ${(props) => props.theme.transition};
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: url(${(props) => props.url}) 50% 50% transparent;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    color: white;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: -0.05em;
    img {
      width: 43px;
      height: 50px;
    }
  }
  margin: 30px 0;
`;

const Bio = styled.div`
  padding: 20px;
  display: flex;
  p {
    text-indent: 1em;
    font-size: 0.7em;
    line-height: 1.25em;
    strong {
      font-weight: 700;
      color: ${(props) => props.theme.yellowColor};
    }
  }
`;

const Contacts = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: center;
  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
  border-bottom: 1px solid #3979e2;
`;

const Contact = styled.li`
  margin-bottom: 20px;
  &:not(:last-child) {
    margin-right: 13px;
  }
`;

const Header = () => (
  <Container>
    <ProfileWrapper>
      <Profile>
        <Name>
          <Link to={PAGE_ABOUT}>
            <h1>
              <Logo />
            </h1>
          </Link>
        </Name>
        <nav>
          <ImageSwitcher>
            <Image className="picture" url={getHeaderUrl("/profile-picture.png")}></Image>
            <Image className="illustrator" url={getHeaderUrl("/profile-illustrator.png")}></Image>
          </ImageSwitcher>
          <Bio>
            <p>
              안녕하세요. 주니어 개발자 <strong>최호중</strong>입니다. 컴퓨터 공학을 전공하면서
              실무와 이론적인 지식을 겸비한 개발자입니다.
            </p>
          </Bio>
          <Contacts>
            <Contact>
              <a href="https://github.com/sannimdev" target="_blank">
                <GithubIcon />
              </a>
            </Contact>
            <Contact>
              <a href="#" target="_blank">
                <EmailIcon />
              </a>
            </Contact>
          </Contacts>
        </nav>
      </Profile>
    </ProfileWrapper>
    <Gnb />
  </Container>
);

export default Header;
