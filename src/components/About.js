import React from 'react';
import { GiHand } from "react-icons/gi";
import HighlightedText from './HighlightedText';

const About = () => {
  return (
    <div className="flex w-full justify-center">
        <div className="hero">
          <div className="hero-content items-center md:items-start flex-col lg:flex-row space-y-2 lg:space-x-6 lg:space-y-0">
            <div className="avatar indicator">
                <div className="avatar">
                    <div className="mask mask-squircle w-48">
                        <img src={process.env.PUBLIC_URL + "/avatar2.jpg"} alt="avatar"/>
                    </div>
                </div>
            </div>
            <div className="max-w-lg space-y-4 text-lg/8 font-light">
              <div className="flex items-center space-x-2">
                <p className="text-3xl font-semibold">
                  Welcome to my portfolio!
                </p>
                <GiHand size={30}/>
              </div>
              <p className="text-justify">
                I am a <HighlightedText text="Software Engineer"/> completing my <HighlightedText text="Master's Degree in Computer Engineering"/>, 
                driven by building <HighlightedText text="cohesive, end-to-end software ecosystems"/>. 
              </p>
              <p className="text-justify">
                I enjoy navigating the complexity between different layers of software. 
                I develop Android applications with <HighlightedText text="Kotlin"/> and <HighlightedText text="Jetpack Compose"/>, 
                use <HighlightedText text="Cloud Infrastructure"/> with <HighlightedText text="AWS"/> and <HighlightedText text="Terraform"/>, 
                and implement Full-stack solutions with <HighlightedText text="Python"/> and <HighlightedText text="React"/>.
              </p>
              <p className="text-justify">
                For me, engineering is about seeing the big picture. 
                Whether it's optimizing a database query, designing a <HighlightedText text="microservice architecture"/>, 
                or refining a user interface, I am driven by the challenge of creating high-quality systems where every component works in harmony.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;