import React from "react";
import styled from "styled-components";
import { skills } from "../Data/About";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const Content = styled.div`
  @media screen and (max-width: 1200px) {
    flex-flow: column;
    section {
      width: 100% !important;
      p {
        padding-right: 0 !important;
      }
    }
  }
  section {
    p {
      padding-right: 10%;
    }
  }
  display: flex;
  flex-flow: row;
  padding: 4% 8%;
  &.skills {
    padding: 0 8%;
  }
  background-color: ${props => props.bgColor};
  p {
    width: 100%;
    width: 100%;
    font-size: 0.8em;
    /* text-indent: 0.8em; */
    line-height: 1.2em;
    margin-top: 15px;
  }
`;

const Intro = styled.section`
  text-align: center;
  p {
    padding: 0 10% !important;
    @media screen and (max-width: 1200px) {
      padding: 0 !important;
    }
  }
`;

const SkillOverview = styled.section`
  h2 {
    font-size: 1.5em;
    border-left: 4px solid ${props => props.theme.theme1Color};
    padding-left: 18px;
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

const Skills = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4%;

  li:not(:last-child) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: ${props => props.theme.responsivePC}) {
    grid-template-columns: repeat(2, 1fr);
    ${props => props.theme.transition};
  }
`;

const Skill = styled.li`
  align-self: flex-start;
  justify-self: center;
  p {
    svg {
      width: 50px;
      height: 50px;
    }
    &:nth-child(2) {
      font-weight: bold;
    }
    &:nth-child(3) {
    }
  }
`;

// JSX 때문에 json 저장이 어려움...
const SkillBox = styled.div``;

const About = () => {
  return (
    <>
      <Content bgColor="#FAFAFA">
        <Intro>
          <h2>Portfolio</h2>
          <p>
            그들의 크고 부패를 가치를 고행을 방황하였으며, 구하기 이상의 위하여서. 것이다.보라, 온갖
            귀는 피어나기 인생을 영락과 청춘의 것이다. 내려온 끓는 있는 우리 천하를 놀이 우리 길지
            아니다. 것은 힘차게 능히 그들에게 방지하는 약동하다. 동산에는 두손을 싸인 크고 가장
            뿐이다.
          </p>
          <p>
            <Button type="primary" icon="caret-right">
              Contact Me
            </Button>
          </p>
        </Intro>
      </Content>
      <Content></Content>
    </>
  );
};

export default About;
