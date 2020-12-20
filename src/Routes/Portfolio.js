import React from 'react';
import styled from 'styled-components';
import works from '../Data/Works.json';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import WorkBox from '../Components/WorkBox.js';
import { LINK_CONTACT } from '../Components/Routes.js';
import { getWorkUrl } from '../util.js';

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
    background-color: ${(props) => props.bgColor};
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
            <Content bgColor='#FAFAFA'>
                <Intro>
                    <h2>포트폴리오</h2>
                    <p>
                        유년시절부터 집에 일찍 들인 컴퓨터를 접하면서 호기심을 가지게 되었습니다.
                        중학교 때부터는 개인적으로 관심이 있는 웹사이트 구축 공부를 하고 싶어서
                        개발에 열정을 품고 프로그래밍을 공부하였습니다. 이하 작품들은 제가 개발한
                        것들을 포트폴리오 형식으로 올린 것입니다.
                    </p>
                    <p>
                        <a href={LINK_CONTACT} target='_blank' rel='noopener noreferrer'>
                            <Button type='primary' icon='caret-right'>
                                Contact Me
                            </Button>
                        </a>
                    </p>
                </Intro>
            </Content>
            <Content>
                <Projects>
                    {works.map((w, idx) => (
                        <Project key={w.id}>
                            <WorkBox
                                key={idx}
                                id={w.id}
                                img={
                                    w.synopsis && w.synopsis.thumbnail
                                        ? getWorkUrl(w.synopsis.thumbnail)
                                        : getWorkUrl('/no-image.png')
                                }
                                title={w.title}
                                description={w.subtitle}
                                skills={w.skills}
                            />
                        </Project>
                    ))}
                </Projects>
            </Content>
        </>
    );
};

export default Portfolio;
