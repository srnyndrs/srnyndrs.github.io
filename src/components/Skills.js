import React from 'react';
import { SiDocker, SiGithubactions, SiJavascript, SiKotlin, SiPython, SiTerraform } from "react-icons/si";
import { SiJetpackcompose } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import { FaAws, FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { GiPlainDagger } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { TiFlowSwitch } from 'react-icons/ti';

const Skills = () => {
  return (
    <div className="flex w-full px-2 md:px-0 gap-x-0 md:gap-x-8 gap-y-12 justify-center">
        <div className="grid grid-cols-1 w-full md:w-max md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-5">
            <div className="border-2 border-base-200 rounded-md shadow-md p-3 space-y-6 w-full">
                <p className="text-xl text-center">Mobile Development</p>
                <div className="space-y-4">
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiKotlin size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Kotlin</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiJetpackcompose size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Jetpack Compose</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <FaDatabase size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Room Database</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <TiFlowSwitch size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Coroutines & Flow</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <GiPlainDagger size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Dagger Hilt</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <MdArchitecture  size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Clean Architecture</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-base-200 rounded-md shadow-md p-3 space-y-6 w-full">
                <p className="text-xl text-center">Cloud & Infrastructure</p>
                <div className="space-y-4">
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <FaAws size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">AWS</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiTerraform size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Terraform</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiDocker size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Docker</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiGithubactions size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">GitHub Actions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-base-200 rounded-md shadow-md p-3 space-y-6 w-full">
                <p className="text-xl text-center">Backend & Systems</p>
                <div className="space-y-4">  
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiKotlin size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Kotlin</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <FaJava size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Java</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiPython size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Python</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiSpring size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Spring Boot</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <BiLogoPostgresql size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">PostgreSQL</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-base-200 rounded-md shadow-md p-3 space-y-6 w-full">
                <p className="text-xl text-center">Web Technologies</p>
                <div className="space-y-4">
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <FaHtml5 size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">HTML5/CSS</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiJavascript size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">JavaScript</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <SiTypescript size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">TypeScript</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <FaNodeJs size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Node.js</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <FaReact size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">React.js</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-md bg-base-200 items-center py-4 w-full">
                        <RiNextjsFill size={22} className="mx-3"/>
                        <div className="flex flex-col items-top space-y-0">
                            <p className="text-md font-semibold">Next.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;