import React from "react";
import styled from "styled-components";
import Gnb from "./Gnb";

const SQUARE = "180px";

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Profile = styled.div`
  width: ${SQUARE};

  div {
    width: 100%;
  }
`;

const Image = styled.div`
  height: ${SQUARE};
  background: url(${props => props.url}) 50% 50% transparent;
  border-radius: 100%;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
  }
  margin: 5px 0;
`;

const Title = styled(Name)``;

const Header = () => (
  <>
    <Gnb />
    <ProfileWrapper>
      <Profile>
        <Image url="https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg"></Image>
        <Name>
          <h2>Hojoong Choi</h2>
        </Name>
        <Title>Web Developer</Title>
      </Profile>
    </ProfileWrapper>
  </>
);

export default Header;
