import React from 'react';
import styled from 'styled-components';
import { getSkillUrl } from '../util';

const SkillsContainer = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 4%;
    margin-bottom: 50px;
    transition: height ease-in-out 1s;
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        ${(props) => props.theme.transition};
    }
    @media screen and (max-width: 670px) {
        grid-template-columns: repeat(1, 1fr);
        ${(props) => props.theme.transition};
    }
`;

const Skill = styled.li`
    &:not(:last-child) {
        margin-bottom: 30px;
    }
    align-self: flex-start;
    justify-self: center;
`;

// JSX 때문에 json 저장이 어려움...
const SkillBox = styled.div`
    padding: 1rem;
    min-height: 300px;
    border-radius: 1rem;
    box-shadow: 0px 0px 1rem 1rem rgba(222, 222, 222, 0.3);
    display: flex;
    flex-direction: column;
    p {
        img {
            width: 50px;
            height: 50px;
            border-radius: 100%;
        }
        &::first-child {
            margin-top: 1.5rem;
        }
        &:nth-child(2) {
            font-weight: bold;
            margin-bottom: 1rem;
        }
        &:not(:last-child) {
            text-align: center;
            margin-top: 1rem;
        }
        &.desc {
            margin-top: auto;
            margin-bottom: auto;
            text-indent: 1.5rem;
            line-height: 1.5rem;
        }
    }
`;

function Skills({ list }) {
    return (
        <SkillsContainer>
            {list &&
                list.map((s, idx) => (
                    <Skill key={idx}>
                        <SkillBox>
                            <p>
                                <img src={getSkillUrl(s.img)} alt={s.title} />
                            </p>
                            <p>{s.title.toLocaleUpperCase()}</p>
                            <p className='desc'>{s.content}</p>
                        </SkillBox>
                    </Skill>
                ))}
        </SkillsContainer>
    );
}

export default Skills;
