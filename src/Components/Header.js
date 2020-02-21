import React from "react";
import styled from "styled-components";
import Gnb from "./Gnb";
import { GithubIcon, EmailIcon } from "./Icons";

const Container = styled.header`
  position: fixed;
  width: ${props => props.theme.headerWidth};
  height: 100vh;
  background-color: ${props => props.theme.theme1Color};
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

const Image = styled.div`
  margin: 0 auto;
  width: ${SQUARE};
  height: ${SQUARE};
  background: url(${props => props.url}) 50% 30% transparent;
  border-radius: 100%;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    color: white;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: -0.05em;
  }
  margin: 30px 0;
`;

const Bio = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-weight: normal;
  font-size: 0.7em;
  line-height: 1.25em;
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
          <h1>Hojoong Choi</h1>
        </Name>
        <nav>
          <Image url="https://cdn.pixabay.com/photo/2017/11/23/07/47/babe-2972221__480.jpg"></Image>
          <Bio>
            구하기 인간은 있는 듣는다. 방황하여도, 피가 곳으로 구하지 풍부하게 투명하되 사막이다.
            커다란 간에 끝까지 무엇을 때에, 관현악이며, 피가 자신과 미묘한 듣는다.
          </Bio>
          <Contacts>
            <Contact>
              <a href="https://github.com/ineggapps" target="_blank">
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
