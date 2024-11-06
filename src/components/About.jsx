import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div
      data-aos="flip-left"
      className="my-24 lg:max-w-[63.5%] mx-auto card glass"
    >
      <div className="card-body">
        <h1 className="underline text-4xl font-pop font-bold text-center mb-10">
          About
        </h1>

        <p className="text-center text-sm md:text-lg">
          As an ambitious Computer Science undergraduate, I possess a solid
          grounding in front-end web development, cultivated through my
          coursework at Programming Hero and was one of the best students among my batch recieveing the Black-Belt. My fervor for web development has
          sharpened my analytical skills and prepared me to develop some
          user-centric and responsive full-stack web applications. Eager to
          leverage my analytical thinking, honed through competitive
          programming. I am keen to apply my technical knowledge and
          problem-solving expertise to real-world projects. Dedicated to
          lifelong learning and aspire to excel as a software engineer, where I
          can innovate and optimize technological processes. Operates well in
          individual and team capacities, leveraging a seasoned work ethic to
          quickly adapt to different processes. I am enthusiastic about
          contributing to a team that values cutting-edge solutions and
          continuous improvement.
        </p>
      </div>
    </div>
  );
};

export default About;
