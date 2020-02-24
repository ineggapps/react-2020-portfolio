import React from "react";
import styled from "styled-components";
import works from "../Data/Works.json";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import WorkBox from "../Components/WorkBox.js";

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
      <Content>
        <Projects>
          {works.map(w => (
            <Project>
              <WorkBox id={w.id} img={w.img} title={w.title} description={w.description} />
            </Project>
          ))}
        </Projects>
      </Content>
    </>
  );
};

export default Portfolio;
