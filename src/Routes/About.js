import React from 'react';
import styled from 'styled-components';
import about from '../Data/About.json';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PAGE_PORTFOLIO } from '../Components/Routes';
import { Link } from 'react-router-dom';
import Skills from '../Components/Skills';

const { frontend, backend, programming, others } = about;

const Content = styled.div`
    display: flex;
    flex-flow: row;
    padding: 4% 8%;
    background-color: ${(props) => props.bgColor};
    @media screen and (max-width: 1200px) {
        flex-flow: column;
        section {
            width: 100% !important;
            p {
                padding-right: 0 !important;
            }
        }
    }
    &:first-child section {
        p {
            padding-right: 10%;
        }
    }
    &.skills {
        padding: 0 8%;
        flex-flow: column;
    }
    p {
        width: 100%;
        width: 100%;
        font-size: 0.8em;
        line-height: 1.2em;
        margin-top: 15px;
        word-break: break-all;
    }
    h3 {
        font-weight: 700;
        margin: 30px 0;
        text-decoration: underline;
        text-decoration-color: #e0e0e0;
        &.no-margin-top {
            margin-top: 0;
        }
    }
    &:last-child {
        padding-bottom: 50px;
    }
`;

const Intro = styled.section`
    strong {
        font-weight: 900;
    }
    p.intro {
        text-indent: 1em;
        line-height: 1.4em;
    }
    p.button {
        margin: 10px 0 15px;
    }
`;

const ProfilePic = styled.div`
    min-width: 300px;
    min-height: 300px;
    background: url(${(props) => props.src}) no-repeat center center;
    background-size: contain;
    transform: scaleX(-1);
    @media screen and (max-width: 1200px) {
        transform: scaleX(1);
    }
    ${(props) => props.theme.transition};
    /* img {
    width: 100%;
    height: 100%;
  } */
`;

const SubTitle = styled.div`
    margin-top: 20px;
`;

const SkillOverview = styled.section`
    h2 {
        font-size: 1.5em;
        border-left: 4px solid ${(props) => props.theme.theme1Color};
        padding-left: 18px;
        height: 40px;
        display: flex;
        align-items: center;
    }
    p {
        text-indent: 1.2em;
        line-height: 1.4em;
    }
`;

const About = () => {
    return (
        <>
            <Content bgColor='#FAFAFA'>
                <Intro>
                    <h2>Hojoong Choi</h2>
                    <SubTitle>Junior Developer</SubTitle>
                    <p>
                        <strong>
                            안녕하세요. 최상의 결과를 이끌어 낼 성실의 아이콘 최호중입니다.
                        </strong>
                    </p>
                    <p className='intro'>
                        저는 문제에 대해 생각하고 해결하는 과정을 즐기는 편입니다. 그래서 개발하는
                        것을 좋아했습니다. 그리고 흥미를 느끼면 어떻게든 목표를 이루고자 쟁취하는
                        성격입니다. HTML로 홈페이지를 만드는 것에 흥미를 느끼며 초등학생 때
                        메모장으로 태그를 연습했던 작은 공부가 지금은 취미를 넘어 일상이 되었습니다.
                    </p>
                    <p className='button'>
                        <Link to={PAGE_PORTFOLIO}>
                            <Button type='primary' icon='caret-right'>
                                View Portfolio
                            </Button>
                        </Link>
                    </p>
                </Intro>
                <ProfilePic src='https://avatars2.githubusercontent.com/u/22428471?s=460&v=4' />
            </Content>
            <Content>
                <SkillOverview>
                    <h2>무엇을 해왔나요?</h2>
                    <p>
                        어렸을 때부터 컴퓨터를 공부했지만, 특히 웹에 관심이 많았습니다. 특성화
                        고등학교에 진학했을 때부터 웹 표준 동아리에 가입하여 웹 트렌드에 관해 공부를
                        시작했습니다. 빠른 기술 발전 속도에 따라 수시로 바뀌는 트렌드에 적응하고자
                        노력해 온 것처럼, 자기 주도적으로 일하며 전도유망한 개발자로 꾸준히 성장해
                        나갈 것입니다.
                    </p>
                </SkillOverview>
            </Content>
            <Content className='skills'>
                <h3>Major Programming Languages</h3>
                <Skills list={programming} />
            </Content>
            <Content className='skills'>
                <h3 className='no-margin-top'>Front-End</h3>
                <Skills list={frontend} />
            </Content>
            <Content className='skills'>
                <h3>Back-End</h3>
                <Skills list={backend} />
            </Content>
            <Content className='skills'>
                <h3>Others</h3>
                <Skills list={others} />
            </Content>
        </>
    );
};

export default About;
