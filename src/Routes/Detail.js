import React from 'react';
import styled from 'styled-components';
import works from '../Data/Works.json';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PAGE_PORTFOLIO } from '../Components/Routes.js';
import { LinkIcon, Disk } from '../Components/Icons.js';
import { getWorkUrl, getSkillUrl } from '../util';
import about from '../Data/About.json';

const { frontend, backend, programming, others, hidden } = about;
const allSkills = [...frontend, ...backend, ...programming, ...others, ...hidden];
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
    &:first-child > section {
        width: 100%;
        p {
            padding-right: 10%;
        }
    }
    display: flex;
    flex-flow: row;
    padding: 4% 8%;
    background-color: ${(props) => props.bgColor};
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
    img.skill {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
`;

const Synopsis = styled.div`
    display: flex;
    flex-flow: row;
    @media screen and (max-width: 620px) {
        flex-flow: column;
    }
    width: 100%;
    border: 2px solid #f4f4f4;
    background-color: #fafafa;
    padding: 2%;
    word-break: break-all;
`;

const SquareThumbnail = styled.div`
    min-width: 300px;
    height: 400px;
    margin-right: 5%;
    @media screen and (max-width: 620px) {
        margin: 0 0 2.5%;
    }
    background: url(${(props) => props.src}) center center transparent;
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
        params: { id },
    },
}) => {
    //works 아이템 추출
    let work = works.filter((item) => item.id === id)[0];
    if (works === undefined) {
        history.replace(PAGE_PORTFOLIO);
        return <></>;
    }
    //Works json추출을 기반으로 사용된 기술 추출
    // let skills =
    //   works.skills && works.skills.length > 0
    //     ? works.skills.map(s => allSkills.filter(a => a.id === s))
    //     : [];
    let skills = [];
    if (work.skills && work.skills.length > 0) {
        // console.log("추출 시작");
        work.skills.forEach((d) => {
            allSkills.forEach((a) => {
                if (d === a.id) {
                    skills.push(a);
                    return;
                }
            });
        });
    }
    console.log('skills=', skills);

    return (
        <>
            <Content bgColor='#FAFAFA'>
                <Intro>
                    <h2>{work.title}</h2>
                    <p>{work.subtitle}</p>
                    <p>
                        {skills.map((s) => (
                            <img
                                key={s.id}
                                className='skill'
                                src={getSkillUrl(s.img)}
                                alt={s.title}
                                title={s.title}
                            />
                        ))}
                    </p>
                    <p>
                        <Button
                            type='primary'
                            icon='pic-left'
                            onClick={() => history.replace(PAGE_PORTFOLIO)}
                        >
                            목록
                        </Button>
                    </p>
                </Intro>
            </Content>
            <Content>
                <Synopsis>
                    <SquareThumbnail
                        src={
                            work.synopsis && work.synopsis.thumbnail
                                ? getWorkUrl(work.synopsis.thumbnail)
                                : ''
                        }
                    />
                    <SynopsisBox>
                        <h3>{work.title}</h3>
                        <ul>
                            {work.synopsis && work.synopsis.link && (
                                <li>
                                    <a
                                        href={work.synopsis.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <LinkIcon />
                                        {work.synopsis.link}
                                    </a>
                                </li>
                            )}
                            {work.synopsis && work.synopsis.document && (
                                <li>
                                    <a
                                        href={work.synopsis.document}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Disk />
                                        문서 보기
                                    </a>
                                </li>
                            )}
                            <li>
                                <h4>작품 소개</h4>
                                <p>
                                    {work.synopsis && work.synopsis.description
                                        ? work.synopsis.description
                                        : '준비 중입니다.'}
                                </p>
                            </li>
                            <li>
                                <h4>프로젝트 요구사항</h4>
                                <ul>
                                    {work.synopsis &&
                                        work.synopsis.requirements &&
                                        work.synopsis.requirements.map((r, idx) => (
                                            <li key={idx}>{r}</li>
                                        ))}
                                </ul>
                            </li>
                        </ul>
                    </SynopsisBox>
                </Synopsis>
            </Content>
            <Content className='flex-flow-column'>
                {work.overviews &&
                    work.overviews.map((o, idx) => (
                        <Overview key={idx}>
                            <h2>{o.section}</h2>
                            {o.content && o.content.map ? (
                                o.content.map((content, idx) => <p key={idx}>{content}</p>)
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
