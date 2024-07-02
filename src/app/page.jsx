"use client"

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import { TbFileText } from "react-icons/tb";
import Starfield from "react-starfield";
import Particle from '../app/particle/Particle'
import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Achievements from '../components/Achievments'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative p-10 bg-black">
      <div className="absolute top-0 left-0 w-full h-96">
        <Particle />
      </div>

      <div className="App z-10">
        <Starfield starCount={3000} starColor={[255, 255, 255]} speedFactor={0.1} backgroundColor="black" />
        <div className="flex justify-between flex-wrap items-end text-2xl lg:text-5xl border-b-1 lg:px-24">
          <div className="">
            <h1 style={{ margin: 'auto 0', fontWeight: 'bolder' }}>
              <p>Hi,</p> I&apos;m Samiur Rahman Wasi  <br /> {' '}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Web developer','React developer', 'Node.js developer', 'CSE undergrad', 'Tech enthusiast']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <div className="my-[15%]">
              <a href="https://drive.google.com/file/d/1-PZn7GavwdQTn1U5FUnvITubU4Yczef3/view">
                <Button className="bg-[#ff0000] text-lg rounded-sm">
                  Resume <TbFileText />
                </Button>
              </a>
            </div>
            <div className="flex">
              <a href="https://www.linkedin.com/in/samiur-rahman-wasi"><CiLinkedin size={30} /></a>
              <a href="https://github.com/samwaseee"><IoLogoGithub size={30} /></a>
            </div>
          </div>
          <Image
            src="https://i.ibb.co/JHbKTj6/Picsart-24-06-23-11-43-33-039.png"
            width={500}
            height={500}
            alt="Samiur Rahman Wasi"
            className="z-50"
          />
        </div>
      </div>

      <About />

      <Skills />

      <Projects />

      <Achievements />

      <Footer />
    </main>
  );
}