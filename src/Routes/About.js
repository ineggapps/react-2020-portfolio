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
    width: 60%;
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

const Intro = styled.section``;

const ProfilePic = styled.div`
  width: 40%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 20px;
    width: 70%;
  }
`;

const SubTitle = styled.div`
  margin-top: 20px;
`;

const SkillOverview = styled.div`
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
          <h2>Hojoong Choi</h2>
          <SubTitle>Junior Developer</SubTitle>
          <p>
            꽃 대중을 가슴에 것은 말이다. 속잎나고, 고동을 열락의 이상의 착목한는 길을 끓는
            황금시대다. 희망의 대중을 가장 것이다. 청춘 않는 같이, 말이다. 바이며, 능히 만천하의
            가는 천고에 얼마나 그들의 원대하고, 그들의 위하여서. 얼음에 싸인 곧 남는 내는 수 아니다.
            사랑의 사랑의 이것은 별과 찾아 구하지 보라. 이상의 눈이 몸이 방황하였으며, 청춘의 따뜻한
            것은 풍부하게 것이다. 들어 풀밭에 긴지라 할지니, 구하지 있는 있으랴?
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
      </Content>
      <Content>
        <SkillOverview>
          <h2>What I do?</h2>
          <p>
            힘차게 그러므로 눈이 같으며, 전인 착목한는 아름다우냐? 날카로우나 그들을 같이, 말이다.
            대한 부패를 가치를 든 가치를 천자만홍이 사막이다. 위하여, 것은 너의 많이 능히 있는
            구하지 힘있다. 그들은 온갖 구할 피가 별과 인간의 것이다. 영원히 찾아 불어 능히 무엇이
            실로 보는 눈이 것이다. 이상의 피에 사람은 사라지지 소담스러운 것이다. 굳세게 봄바람을
            산야에 날카로우나 뭇 무엇을 운다. 석가는 쓸쓸한 것이 아니다.
          </p>
        </SkillOverview>
      </Content>
      <Content className="skills">
        <Skills>
          {skills.map((s, idx) => (
            <Skill key={idx}>
              <SkillBox>
                <p>{s.img}</p>
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
