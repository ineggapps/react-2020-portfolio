import React from "react";
import styled from "styled-components";
import works from "../Data/Works.json";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import WorkBox from "../Components/WorkBox.js";
import { LINK_CONTACT } from "../Components/Routes.js";

const Content = styled.div`
  @media screen and (max-width: 1200px) {
    flex-flow: column;
    section {
      p {
        padding-right: 0 !important;
      }
    }
  }
  section {
    width: 100%;
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
    font-size: 0.8em;
    padding: 0 10% !important;
    @media screen and (max-width: 1200px) {
      padding: 0 !important;
    }
  }
`;

const Projects = styled.ul`
  width: 100%;
  padding: 4%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2%;
  @media screen and (max-width: 1380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Project = styled.li`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const Portfolio = () => {
  return (
    <>
      <Content bgColor="#FAFAFA">
        <Intro>
          <h2>포트폴리오</h2>
          <p>
            {" "}
            초등학생 때 처음으로 HTML에 재미를 붙인 이후 컴퓨터 프로그래밍에도 점차 흥미를 느끼게
            되었습니다.특성화 고등학교에 진학하여 컴퓨터공학의 전반적인 지식을 일찍 접할 수
            있었습니다. 그동안 꾸준히 보람을 느끼기 위해서 개발에 관한 공부를 게을리하지 않았습니다.
          </p>
          <p>
            <a href={LINK_CONTACT} target="_blank">
              <Button type="primary" icon="caret-right">
                Contact Me
              </Button>
            </a>
          </p>
        </Intro>
      </Content>
      <Content>
        <Projects>
          {works.map(w => (
            <Project key={w.id}>
              <WorkBox id={w.id} img={w.img} title={w.title} description={w.description} />
            </Project>
          ))}
        </Projects>
      </Content>
    </>
  );
};

export default Portfolio;
