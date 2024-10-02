import React from 'react';
import { HiLanguage, HiOutlineAcademicCap } from "react-icons/hi2";

const Education = () => {
  return (
    <div className="flex w-full justify-center">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2020</time>
                    <div className="flex space-x-2 items-center">
                        <HiLanguage size={20}/>
                        <p className="text-lg font-black">
                            English B2 Exam
                        </p>
                    </div>
                    <p>
                        <a className="link-hover text-gray-400 font-semibold" href="https://www.languagecert.hu/" rel="noreferrer" target="_blank">LanguageCert</a>
                    </p>
                    </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">2024</time>
                    <div className="flex space-x-2 items-center">
                        <HiOutlineAcademicCap size={20}/>
                        <p className="text-lg font-black">
                            BSc Computer Engineering
                        </p>
                    </div>
                    <p>
                        <a className="link-hover text-gray-400 font-semibold" href="https://www.bme.hu" rel="noreferrer" target="_blank">Budapest University of Technology and Economics</a>
                    </p>
                </div>
                <hr />
            </li>
        </ul>
    </div>
  );
}

export default Education;