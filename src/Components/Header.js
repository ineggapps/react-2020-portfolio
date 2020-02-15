import React from "react";
import styled from "styled-components";
import Gnb from "./Gnb";

const HeaderWrapper = styled.div`
  background-color: azure;
`;

const ProfileWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Profile = styled.div`
  width: 200px;

  div {
    width: 100%;
  }
`;

const Image = styled.div`
  height: 200px;
  background: url(${props => props.url}) 50% 50% transparent;
  border-radius: 100%;
`;

const Name = styled.div``;

const Title = styled(Name)``;

const Header = () => (
  <HeaderWrapper>
    <ProfileWrapper>
      <Profile>
        <Image url="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg"></Image>
        <Name>
          <h1>Hojoong Choi</h1>
        </Name>
        <Title>Web Developer</Title>
      </Profile>
    </ProfileWrapper>
    <Gnb />
  </HeaderWrapper>
);

export default Header;
