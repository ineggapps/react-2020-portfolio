import React from "react";
import styled from "styled-components";
import details from "../Data/Details.json";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { PAGE_PORTFOLIO, LINK_CONTACT } from "../Components/Routes.js";
import { LinkIcon, Disk } from "../Components/Icons.js";

const Content = styled.div`
  &.flex-flow-column {
    flex-flow: column;
  }
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

const Synopsis = styled.div`
  display: flex;
  flex-flow: row;
  @media screen and (max-width: 600px) {
    flex-flow: column;
  }
  width: 100%;
  border: 2px solid #f4f4f4;
  background-color: #fafafa;
  padding: 2%;
`;

const SquareThumbnail = styled.div`
  min-width: 300px;
  height: 400px;
  margin-right: 5%;
  @media screen and (max-width: 600px) {
    margin: 0 0 2.5%;
  }
  background: url(${props => props.src}) center center transparent;
  border-radius: 1.4%;
`;

const SynopsisBox = styled.div`
  width: fit-content;
  & *:not(:last-child) {
    margin-bottom: 10px;
  }
  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    fill: #4f4f4f;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2em;
    margin-bottom: 20px !important;
  }
  h4 {
    font-weight: 700;
  }
  li {
    font-size: 0.8em;
    p {
      font-size: 0.9em;
    }
    ul {
      margin-left: 2em;
      list-style-type: disc;
      font-size: 1.2em;
      line-height: 1em;
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
  p {
    text-indent: 1em;
    letter-spacing: -0.02em;
  }

  &:not(:last-child) {
    margin-bottom: 50px;
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
            <a href={LINK_CONTACT} target="_blank">
              <Button type="primary" icon="caret-right">
                Contact Me
              </Button>
            </a>
          </p>
        </Intro>
      </Content>
      <Content>
        <Synopsis>
          <SquareThumbnail
            src={detail.synopsis && detail.synopsis.thumbnail ? detail.synopsis.thumbnail : ""}
          />
          <SynopsisBox>
            <h3>{detail.title}</h3>
            <ul>
              {detail.synopsis && detail.synopsis.link && (
                <li>
                  <a href={detail.synopsis.link} target="_blank">
                    <LinkIcon />
                    {detail.synopsis.link}
                  </a>
                </li>
              )}
              {detail.synopsis && detail.synopsis.document && (
                <li>
                  <a href={detail.synopsis.document} target="_blank">
                    <Disk />
                    View document
                  </a>
                </li>
              )}
              <li>
                <h4>작품 소개</h4>
                <p>
                  {detail.synopsis && detail.synopsis.description
                    ? detail.synopsis.description
                    : "준비 중입니다."}
                </p>
              </li>
              <li>
                <h4>프로젝트 요구사항</h4>
                <ul>
                  {detail.synopsis &&
                    detail.synopsis.requirements &&
                    detail.synopsis.requirements.map(r => <li>{r}</li>)}
                </ul>
              </li>
            </ul>
          </SynopsisBox>
        </Synopsis>
      </Content>
      <Content className="flex-flow-column">
        {detail.overviews &&
          detail.overviews.map(o => (
            <Overview>
              <h2>{o.section}</h2>
              {o.content && o.content.isArray ? (
                o.content.map(content => <p>{content}</p>)
              ) : (
                <p>{o.content}</p>
              )}
            </Overview>
          ))}
      </Content>
    </>
  );
};

export default Detail;
