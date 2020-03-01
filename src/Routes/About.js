import React from "react";
import styled from "styled-components";
import { getUrl } from "../util";

import {
  skillsOfFrontend,
  skillsOfBackEnd,
  skillsOfProgramming,
  skillsOfOthers
} from "../Data/About";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { PAGE_PORTFOLIO } from "../Components/Routes";
import { Link } from "react-router-dom";

const Content = styled.div`
  display: flex;
  flex-flow: row;
  padding: 4% 8%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 1200px) {
    flex-flow: column;
    section {
      width: 100% !important;
      p {
        padding-right: 0 !important;
      }
    }
  }
  &:first-child section {
    p {
      padding-right: 10%;
    }
  }
  &.skills {
    padding: 0 8%;
    flex-flow: column;
  }
  p {
    width: 100%;
    width: 100%;
    font-size: 0.8em;
    line-height: 1.2em;
    margin-top: 15px;
  }
  h3 {
    font-weight: 700;
    margin: 30px 0;
    text-decoration: underline;
    text-decoration-color: #e0e0e0;
    &.no-margin-top {
      margin-top: 0;
    }
  }
  &:last-child {
    padding-bottom: 50px;
  }
`;

const Intro = styled.section`
  strong {
    font-weight: 900;
  }
  p.intro {
    text-indent: 1em;
    line-height: 1.4em;
  }
  p.button {
    margin: 10px 0 15px;
  }
`;

const ProfilePic = styled.div`
  min-width: 300px;
  min-height: 300px;
  background: url(${props => props.src}) no-repeat center center;
  background-size: contain;
  transform: scaleX(-1);
  @media screen and (max-width: 1200px) {
    transform: scaleX(1);
    ${props => props.theme.transition};
  }
  /* img {
    width: 100%;
    height: 100%;
  } */
`;

const SubTitle = styled.div`
  margin-top: 20px;
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
  p {
    text-indent: 1.2em;
    line-height: 1.4em;
  }
`;

const Skills = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4%;
  margin-bottom: 50px;
  @media screen and (max-width: ${props => props.theme.responsivePC}) {
    grid-template-columns: repeat(2, 1fr);
    ${props => props.theme.transition};
  }
`;

const Skill = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  align-self: flex-start;
  justify-self: center;
  p {
    img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    &:nth-child(2) {
      font-weight: bold;
    }
    &:nth-child(3) {
    }
  }
  p:not(:last-child) {
    text-align: center;
  }
`;

// JSX 때문에 json 저장이 어려움...
const SkillBox = styled.div``;

const About = () => {
  return (
    <>
      <Content bgColor="#FAFAFA">
        <Intro>
          <h2>Hojoong Choi</h2>
          <SubTitle>Junior Developer</SubTitle>
          <p>
            <strong>안녕하세요. 최상의 결과를 이끌어 낼 성실의 아이콘 최호중입니다.</strong>
          </p>
          <p className="intro">
            저는 문제에 대해 생각하고 해결하는 과정을 즐기는 편입니다. 그래서 기획하고 개발,
            디자인하는 것을 좋아했습니다. 그리고 흥미를 느끼면 어떻게든 목표를 이루고자 쟁취하는
            성격입니다. HTML로 홈페이지를 만드는 것에 흥미를 느끼며 초등학생 때 메모장으로 시작했던
            작은 공부가 지금은 취미를 넘어 일상이 되었습니다. 그렇게 일찍이 접했던 프로그래밍과
            그래픽 툴을 배워가고 즐기면서 많은 경험을 쌓을 수 있었습니다.
          </p>
          <p className="intro">
            빠른 기술 발전 속도에 따라 수시로 바뀌는 트렌드에 적응하고자 노력해 온 것처럼, 자기
            주도적으로 일하며 전도유망한 개발자로 꾸준히 성장해 나갈 것입니다.
          </p>
          <p className="button">
            <Link to={PAGE_PORTFOLIO}>
              <Button type="primary" icon="caret-right">
                View Portfolio
              </Button>
            </Link>
          </p>
        </Intro>
        <ProfilePic src="https://avatars2.githubusercontent.com/u/22428471?s=460&v=4" />
      </Content>
      <Content>
        <SkillOverview>
          <h2>무엇을 해왔나요?</h2>
          <p>
            어린 시절부터 부모님께서 제가 좋아하는 일에 집중할 수 있도록 전폭적으로 응원해
            주셨습니다. 덕분에 특성화 고등학교에 진학하여 프로그래밍을 일찍 접할 수 있었습니다. 또한
            학부생 때 컴퓨터 공학을 전공하면서 컴퓨터 공학의 이론적인 내용까지 공부할 수 있었고 실제
            컴퓨터에서 작성된 코드가 어떠한 원리로 실행되는지 명확하게 이해하는 계기가 되었습니다.
            앞으로도 실무적인 능력과 이론적인 소양까지 갖춘 꾸준한 개발자가 될 것입니다.
          </p>
        </SkillOverview>
      </Content>
      <Content className="skills">
        <h3 className="no-margin-top">Front-End</h3>
        <Skills>
          {skillsOfFrontend.map((s, idx) => (
            <Skill key={idx}>
              <SkillBox>
                <p>
                  <img src={s.img} alt={s.title} />
                </p>
                <p>{s.title.toLocaleUpperCase()}</p>
                <p>{s.content}</p>
              </SkillBox>
            </Skill>
          ))}
        </Skills>
      </Content>
      <Content className="skills">
        <h3>Back-End</h3>
        <Skills>
          {skillsOfBackEnd.map((s, idx) => (
            <Skill key={idx}>
              <SkillBox>
                <p>
                  <img src={getUrl(s.img)} alt={s.title} />
                </p>
                <p>{s.title.toLocaleUpperCase()}</p>
                <p>{s.content}</p>
              </SkillBox>
            </Skill>
          ))}
        </Skills>
      </Content>
      <Content className="skills">
        <h3>Programming Language</h3>
        <Skills>
          {skillsOfProgramming.map((s, idx) => (
            <Skill key={idx}>
              <SkillBox>
                <p>
                  <img src={getUrl(s.img)} alt={s.title} />
                </p>
                <p>{s.title.toLocaleUpperCase()}</p>
                <p>{s.content}</p>
              </SkillBox>
            </Skill>
          ))}
        </Skills>
      </Content>
      <Content className="skills">
        <h3>Others</h3>
        <Skills>
          {skillsOfOthers.map((s, idx) => (
            <Skill key={idx}>
              <SkillBox>
                <p>
                  <img src={getUrl(s.img)} alt={s.title} />
                </p>
                <p>{s.title.toLocaleUpperCase()}</p>
                <p>{s.content}</p>
              </SkillBox>
            </Skill>
          ))}
        </Skills>
      </Content>
    </>
  );
};

export default About;
