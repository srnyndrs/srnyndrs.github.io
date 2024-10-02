import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaHackerrank } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex w-full justify-center gap-x-4">
        <a href="https://www.github.com/srnyndrs" className="badge badge-ghost rounded-md py-4 px-2 border-0" rel="noreferrer" target="_blank" style={{color:"#FFFFFF", backgroundColor:"#000000"}}>
            <FiGithub size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/suranyi-andras/" className="badge rounded-md py-4 px-2 border-0" rel="noreferrer" target="_blank" style={{color:"#FFFFFF", backgroundColor:"#0072B1"}}>
            <FiLinkedin size={24}/>
        </a>
        <a href="https://www.hackerrank.com/profile/srnyndrs" className="badge rounded-md py-4 px-2 border-0" rel="noreferrer" target="_blank" style={{color:"#2EC866", backgroundColor:"#3A424F"}}>
            <FaHackerrank size={24}/>
        </a>
    </div>
  );
}

export default Socials;