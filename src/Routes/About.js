import React from "react";
import styled from "styled-components";
import { skills } from "../Data/About";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const Content = styled.div`
  display: flex;
  flex-flow: row;
  padding: 5% 8%;
  background-color: ${props => props.bgColor};
`;

const Intro = styled.section`
  width: 70%;
  h3 {
    font-weight: 900;
    font-size: 2em;
  }
  p {
    padding-right: 10%;
    width: 100%;
    width: 100%;
    font-size: 0.8em;
    /* text-indent: 0.8em; */
    line-height: 1.2em;
    margin-top: 15px;
  }
`;

const ProfilePic = styled.div`
  width: 30%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SubTitle = styled.div`
  margin-top: 20px;
`;

const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li:not(:last-child) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: ${props => props.theme.responsivePC}) {
    grid-template-columns: repeat(1, 1fr);
    ${props => props.theme.transition};
  }
`;

const Skill = styled.li`
  align-self: flex-start;
  justify-self: center;
`;

// JSX 때문에 json 저장이 어려움...
const SkillBox = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133, 0.1);

  display: flex;
  justify-content: center;
  flex-flow: column;
  svg,
  img {
    width: 80px;
    height: 80px;
  }
`;

const About = () => {
  return (
    <Content bgColor="#FAFAFA">
      <Intro>
        <h3>Hojoong Choi</h3>
        <SubTitle>Junior Developer</SubTitle>
        <p>
          인생에 동력은 크고 속잎나고, 운다. 아름답고 없으면 모래뿐일 황금시대의 용감하고 기쁘며,
          사랑의 그들은 있는가? 밥을 자신과 있는 쓸쓸하랴? 피고, 대한 인생을 그들의 청춘
          이것이야말로 우리 이것이다.
        </p>
        <p>
          <Button type="primary" icon="caret-right">
            View Portfolio
          </Button>
        </p>
      </Intro>
      <ProfilePic>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
          alt="Profile Picture"
        />
      </ProfilePic>
      {/* <Skills>
        {skills.map((s, idx) => (
          <Skill key={idx}>
            <SkillBox>
              <p>{s.img}</p>
              <p>{s.title.toLocaleUpperCase()}</p>
              <p>{s.content}</p>
            </SkillBox>
          </Skill>
        ))}
      </Skills> */}
    </Content>
  );
};

export default About;
