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
                    <div className="mask mask-squircle w-36">
                        <img src={process.env.PUBLIC_URL + "/avatar.jpg"} alt="avatar"/>
                    </div>
                </div>
            </div>
            <div className="max-w-lg space-y-4 text-lg font-light">
              <div className="flex items-center space-x-2">
                <p className="text-3xl font-semibold">
                  Welcome to my portfolio!
                </p>
                <GiHand size={30}/>
              </div>
              <p className="text-justify">
                I recently graduated with a <HighlightedText text="Bachelor's degree in Computer Engineering"/>.
                My main focus is <HighlightedText text="mobile"/> and <HighlightedText text="web development"/>,
                with a passion for building practical, user-friendly applications.
              </p>
              <p className="text-justify">
                In mobile development, I specialize in <HighlightedText text="Android"/>,
                working extensively with <HighlightedText text="Kotlin"/> and <HighlightedText text="Jetpack Compose"/> to build efficient, modern apps.
                I've incorporated <HighlightedText text="Clean Architecture"/>, <HighlightedText text="Room Database"/>, and <HighlightedText text="Dagger Hilt"/> into my projects.
                I've built several Android applications, blending creativity with best coding practices.
                I also have experience in <HighlightedText text="iOS"/> development 
                with <HighlightedText text="Swift"/> and <HighlightedText text="SwiftUI"/> from university projects, and I am open to exploring it further in the future.
              </p>
              <p className="text-justify">
                In web development, I started with <HighlightedText text="HTML"/> and <HighlightedText text="CSS"/> in high school
                and have since advanced my skills to include <HighlightedText text="JavaScript"/>, <HighlightedText text="Node.js"/> and <HighlightedText text="React.js"/>.
                I recently started to learn new skills by completing a full-stack project using <HighlightedText text="Spring Boot"/>, <HighlightedText text="PostgreSQL"/>, <HighlightedText text="Docker"/>, <HighlightedText text="TypeScript"/> and <HighlightedText text="Next.js"/>.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;