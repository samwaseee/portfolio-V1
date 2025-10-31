import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div data-aos="flip-left" className="my-24 lg:max-w-[75%] mx-auto">
      {/* Desktop / Tablet: background image with overlay behind the text */}
      <div className="hidden md:block card glass rounded-lg overflow-hidden">
        <div
          className="hero lg:min-h-[480px] lg:h-[66.66%] rounded-lg"
          style={{
          backgroundImage: "url('/images/1759384674471.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          {/* overlay only on desktop */}
          <div className="hero-overlay bg-black/60"></div>

          <div className="hero-content text-neutral-content text-left">
            <div className="">
              <h1 className="underline text-4xl font-pop font-bold text-center mb-10">
                About
              </h1>
              <p className="text-left text-xs md:text-base font-semibold lg:pr-96 md:pr-36 pr-20 ml-10">
                As an ambitious Computer Science undergraduate, I possess a solid
                grounding in full-stack Web development, cultivated through my
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
        </div>
      </div>

      {/* Mobile: no background behind text; text first, then full image below */}
      <div className="block md:hidden px-4">
        <div className=" text-white">
          <div
          className="hero min-h-40 rounded-lg"
          style={{ backgroundImage: "url('/images/1759384674471.jpg')" }}
        >
          <div className="hero-overlay bg-black/60"></div>

          <div className="hero-content text-neutral-content text-left">
            <div>
              <h1 className="underline text-4xl font-pop font-bold text-center mt-10">
                About
              </h1>
            </div>
          </div>
        </div>

          <p className="text-left text-sm leading-relaxed font-semibold glass p-4 rounded-lg">
            As an ambitious Computer Science undergraduate, I possess a solid
            grounding in full-stack Web development, cultivated through my
            coursework at Programming Hero and was one of the best students among my batch receiving the Black-Belt. My fervor for web development has
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
    </div>
  );
};

export default About;