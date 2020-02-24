import React from "react";
import styled from "styled-components";
import details from "../Data/Details.json";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { PAGE_PORTFOLIO } from "../Components/Routes.js";

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

const SubTitle = styled.div`
  margin-top: 20px;
`;

const Detail = ({
  history,
  match: {
    params: { id }
  }
}) => {
  let detail = details.filter(item => item.id == id)[0];
  if (detail == undefined) {
    history.replace(PAGE_PORTFOLIO);
    return <></>;
  }
  return (
    <>
      <Content bgColor="#FAFAFA">
        <Intro>
          <h2>{detail.title}</h2>
          <p>{detail.subtitle}</p>
          <p>
            <Button type="primary" icon="caret-right">
              Contact Me
            </Button>
          </p>
        </Intro>
      </Content>
    </>
  );
};

export default Detail;
