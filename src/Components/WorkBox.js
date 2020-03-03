import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";
import { Link } from "react-router-dom";
import { PAGE_PORTFOLIO } from "./Routes";
import { allSkills } from "../Data/About";
import { getWorkUrl, getSkillUrl } from "../util";

const getSkillImagePath = id => {
  let path;
  allSkills.forEach(a => {
    if (a.id === id) {
      path = getSkillUrl(a.img);
      return;
    }
  });
  return path;
};

const Box = styled.div`
  border: 1px solid #f0f0f0;
  display: flex;
  flex-flow: row;
  @media screen and (max-width: 700px) {
   flex-flow:column;
  }
  h4 {
    font-weight: bold;
    /* text-decoration: underline; */
    text-decoration-color: ${props => props.theme.darkGreyColor};
    text-
  }
  p {
    width:100%;
    font-size: 0.8em;
  }
`;

const Thumbnail = styled.div`
  background: url(${props => props.src}) transparent center center no-repeat;
  min-width: 200px;
  min-height: 200px;
  overflow: hidden;
`;

const Overview = styled.div`
  display: flex;
  flex-flow: column;
  padding: 2%;
  width: 100%;
  img {
    margin: 10px 0;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  img.hide {
    display: none;
  }
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

const WorkBox = ({ id, img, title, description, skills }) => (
  <Wrapper>
    <Overlay></Overlay>
    <TopComponent>
      <Link to={`${PAGE_PORTFOLIO}/${id}`}>
        <Button>View Detail</Button>
      </Link>
    </TopComponent>
    <Box>
      <Thumbnail src={img}></Thumbnail>
      <Overview>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          {skills &&
            skills.length > 0 &&
            skills.map((s, idx) => {
              const path = getSkillImagePath(s);
              return path ? (
                <img key={idx} src={path} alt={s} />
              ) : (
                <img className="hide" src="#" key={idx} alt="null" />
              );
            })}
        </p>
      </Overview>
    </Box>
  </Wrapper>
);

export default WorkBox;

WorkBox.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string)
};
