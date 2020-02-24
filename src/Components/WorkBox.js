import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";
import { Link } from "react-router-dom";
import { PAGE_PORTFOLIO } from "./Routes";

const Box = styled.div`
  border: 1px solid #f0f0f0;
  display: flex;
  flex-flow: row;
  @media screen and (max-width: 700px) {
   flex-flow:column;
  }
  h4 {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.darkGreyColor};
    text-
  }
  p {
    font-size: 0.8em;
  }
`;

const Thumbnail = styled.div`
  background: url(${props => props.src}) transparent center center no-repeat;
  min-width: 200px;
  min-height: 200px;
  overflow: hidden;
`;

const OverView = styled.div`
  display: flex;
  flex-flow: column;
  padding: 2%;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }
  opacity: 0;
  ${props => props.theme.transition}
`;

const TopComponent = styled(Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorkBox = ({ id, img, title, description }) => (
  <Wrapper>
    <Overlay></Overlay>
    <TopComponent>
      <Link to={`${PAGE_PORTFOLIO}/${id}`}>
        <Button>View Detail</Button>
      </Link>
    </TopComponent>
    <Box>
      <Thumbnail src={img}></Thumbnail>
      <OverView>
        <h4>{title}</h4>
        <p>{description}</p>
      </OverView>
    </Box>
  </Wrapper>
);

export default WorkBox;
