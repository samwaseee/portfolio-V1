import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaJs, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiC, SiCplusplus, SiExpress, SiFirebase, SiMongodb, SiMicrosoftsqlserver, SiTailwindcss, SiNextui, SiDaisyui, SiMui, SiAxios, SiAntdesign } from 'react-icons/si';

const Skills = () => {
    return (
        <SkillsContainer className='font-pop'>
            <FlexContainer>
                <SolarSystem className='scale-50 w-96 h-96 lg:w-[700px] lg:h-[600px] lg:scale-100 left-[15%]'>
                    <Sun>SKILLS</Sun>
                    <Orbit duration="10s">
                        <Planet className=''><FaJs size={50} color="#F7DF1E" /></Planet>
                    </Orbit>
                    <Orbit duration="13s">
                        <Planet className='m-14'><SiC size={50} color="#A8B9CC" /></Planet>
                    </Orbit>
                    <Orbit duration="16s" size="200px">
                        <Planet className='-m-28'><SiCplusplus size={50} color="#00599C" /></Planet>
                    </Orbit>
                    <Orbit duration="15s" size="250px">
                        <Planet className='-m-24'><FaCss3Alt size={50} color="#1572B6" /></Planet>
                    </Orbit>
                    <Orbit duration="11s" size="300px">
                        <Planet className='m-12'><SiExpress size={50} color="#fff" /></Planet>
                    </Orbit>
                    <Orbit duration="13s" size="350px">
                        <Planet className='m-4'><SiFirebase size={50} color="#FFCA28" /></Planet>
                    </Orbit>
                    <Orbit duration="14s" size="500px">
                        <Planet className='-m-20'><FaHtml5 size={50} color="#E34F26" /></Planet>
                    </Orbit>
                    <Orbit duration="16s" size="400px">
                        <Planet className='m-14'><SiMongodb size={50} color="#47A248" /></Planet>
                    </Orbit>
                    <Orbit duration="18s" size="450px">
                        <Planet className='m-14'><SiMicrosoftsqlserver size={50} color="#CC2927" /></Planet>
                    </Orbit>
                    <Orbit duration="20s" size="500px">
                        <Planet className='m-14'><FaNodeJs size={50} color="#339933" /></Planet>
                    </Orbit>
                    <Orbit duration="12s" size="550px">
                        <Planet className='-m-16'><FaReact size={50} color="#61DAFB" /></Planet>
                    </Orbit>
                    <Orbit duration="22s" size="600px">
                        <Planet className='-m-14'><SiTailwindcss size={50} color="#06B6D4" /></Planet>
                    </Orbit>
                    <Orbit duration="24s" size="600px">
                        <Planet className='m-14'><SiNextui size={50} color="#fff" /></Planet>
                    </Orbit>
                    <Orbit duration="12s" size="600px">
                        <Planet className='m-14'><RiNextjsFill size={50} color="#fff" /></Planet>
                    </Orbit>
                    <Orbit duration="10s" size="600px">
                        <Planet className='-m-8'><SiDaisyui size={50} color="#fff" /></Planet>
                    </Orbit>
                    <Orbit duration="26s" size="600px">
                        <Planet className='m-10'><SiMui size={50} color="#fff" /></Planet>
                    </Orbit>
                    <Orbit duration="28s" size="600px">
                        <Planet className='m-10'><SiAntdesign size={50} color="#1890FF" /></Planet>
                    </Orbit>
                    <Orbit duration="25s" size="600px">
                        <Planet className='m-10'><SiAxios size={50} color="#fff" /></Planet>
                    </Orbit>
                    <Orbit duration="27s" size="600px">
                        <Planet className='m-10'><FaGitAlt size={50} color="#F1502F" /></Planet>
                    </Orbit>
                </SolarSystem>

                <SkillsList>
                    <div>
                        <SkillItem>ReactJS</SkillItem>
                        <SkillItem>NodeJS</SkillItem>
                        <SkillItem>ExpressJS</SkillItem>
                        <SkillItem>MongoDB</SkillItem>
                        <SkillItem>CSS3</SkillItem>
                        <SkillItem>HTML5</SkillItem>
                        <SkillItem>NextJS</SkillItem>
                    </div>
                    <div className='ml-5'>
                        <SkillItem> JavaScript </SkillItem>
                        <SkillItem> C </SkillItem>
                        <SkillItem>C++</SkillItem>
                        <SkillItem> Firebase </SkillItem>
                        <SkillItem> MSSQL </SkillItem>
                        <SkillItem> Tailwind CSS </SkillItem>
                        <SkillItem> Next UI </SkillItem>
                    </div>

                </SkillsList>
            </FlexContainer>
        </SkillsContainer>
    );
};

export default Skills;

// Styled-components
const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    backgroundColor: #000000;
    align-items: center;
    margin: 6rem 0;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

const SolarSystem = styled.div`
    position: relative;
`;

const Sun = styled.div`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #000;
    font-weight: bold;
    z-index: 10;
`;

const orbitAnimation = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

const Orbit = styled.div`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: ${props => props.size || '150px'};
    height: ${props => props.size || '150px'};
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: ${orbitAnimation} ${props => props.duration} linear infinite;
`;

const Planet = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(200px);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #000;
    font-weight: bold;
`;

const SkillsList = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const SkillItem = styled.div`
    margin: 2rem 0;
    font-size: 18px;
    color: white;
    font-weight:600;
    border-bottom: 5px solid red;
    border-radius: 5px;
    display: flex;
    align-items: center;
`;
