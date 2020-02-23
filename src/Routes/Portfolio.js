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

const Box = styled.div`
  border: 1px solid #f0f0f0;
  display: flex;
  flex-flow: row;
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
          <Project>
            <Box>
              <Thumbnail src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__480.jpg"></Thumbnail>
              <OverView>
                <h4>프로젝트 제목1</h4>
                <p>
                  사랑의 더운지라 꾸며 대한 무한한 가치를 이상은 지혜는 교향악이다. 어디 투명하되
                  싸인 창공에 기쁘며, 용기가 작고 황금시대다. 청춘의 품에 같이 기쁘며, 고동을 것은
                  반짝이는 같이, 것이다. 황금시대의 것은 할지라도 천자만홍이 만천하의 뿐이다.
                </p>
              </OverView>
            </Box>
          </Project>
          <Project>
            <Box>
              <Thumbnail src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__480.jpg"></Thumbnail>
              <OverView>
                <h4>프로젝트 제목1</h4>
                <p>
                  사랑의 더운지라 꾸며 대한 무한한 가치를 이상은 지혜는 교향악이다. 어디 투명하되
                  싸인 창공에 기쁘며, 용기가 작고 황금시대다. 청춘의 품에 같이 기쁘며, 고동을 것은
                  반짝이는 같이, 것이다. 황금시대의 것은 할지라도 천자만홍이 만천하의 뿐이다.
                </p>
              </OverView>
            </Box>
          </Project>
          <Project>
            <Box>
              <Thumbnail src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__480.jpg"></Thumbnail>
              <OverView>
                <h4>프로젝트 제목1</h4>
                <p>
                  사랑의 더운지라 꾸며 대한 무한한 가치를 이상은 지혜는 교향악이다. 어디 투명하되
                  싸인 창공에 기쁘며, 용기가 작고 황금시대다. 청춘의 품에 같이 기쁘며, 고동을 것은
                  반짝이는 같이, 것이다. 황금시대의 것은 할지라도 천자만홍이 만천하의 뿐이다.
                </p>
              </OverView>
            </Box>
          </Project>
          <Project>
            <Box>
              <Thumbnail src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__480.jpg"></Thumbnail>
              <OverView>
                <h4>프로젝트 제목1</h4>
                <p>
                  사랑의 더운지라 꾸며 대한 무한한 가치를 이상은 지혜는 교향악이다. 어디 투명하되
                  싸인 창공에 기쁘며, 용기가 작고 황금시대다. 청춘의 품에 같이 기쁘며, 고동을 것은
                  반짝이는 같이, 것이다. 황금시대의 것은 할지라도 천자만홍이 만천하의 뿐이다.
                </p>
              </OverView>
            </Box>
          </Project>
        </Projects>
      </Content>
    </>
  );
};

export default Portfolio;
