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
    line-height: 1.4em;
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

const Overview = styled.section`
  h2 {
    font-weight: 700;
    font-size: 1.5em;
    height: 40px;
    display: flex;
    align-items: center;
  }
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
      <Content>
        <Overview>
          <h2>Project 훑어보기</h2>
          <p>
            힘차게 그러므로 눈이 같으며, 전인 착목한는 아름다우냐? 날카로우나 그들을 같이, 말이다.
            대한 부패를 가치를 든 가치를 천자만홍이 사막이다. 위하여, 것은 너의 많이 능히 있는
            구하지 힘있다. 그들은 온갖 구할 피가 별과 인간의 것이다. 영원히 찾아 불어 능히 무엇이
            실로 보는 눈이 것이다. 이상의 피에 사람은 사라지지 소담스러운 것이다. 굳세게 봄바람을
            산야에 날카로우나 뭇 무엇을 운다. 석가는 쓸쓸한 것이 아니다.
          </p>
        </Overview>
      </Content>
    </>
  );
};

export default Detail;
