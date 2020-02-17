import React from "react";
import styled from "styled-components";
import works from "../Data/Works.json";

const Content = styled.div``;

const Works = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Work = styled.li`
  align-self: auto;
  justify-self: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133, 0.223);
`;

const WorkBox = styled.div``;

const Detail = styled.div`
  padding: 20px;
  width: 100%;
  height: 130px;
`;

const Thumbnail = styled.div`
  width: 500px;
  height: 200px;
  background-image: url(${props => props.url});
`;

const Portfolio = () => (
  <Content>
    <Works>
      {works.map((w, idx) => (
        <Work key={idx}>
          <WorkBox>
            <Thumbnail url={w.img}></Thumbnail>
            <Detail>
              <h4>{w.title}</h4>
              <p>{w.content}</p>
            </Detail>
          </WorkBox>
        </Work>
      ))}
    </Works>
  </Content>
);

export default Portfolio;
