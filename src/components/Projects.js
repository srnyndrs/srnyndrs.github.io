import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div class="flex w-full p-4 md:p-0 gap-x-0 md:gap-x-8 gap-y-12 justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
            <ProjectCard
                name={"Lemon"}
                image={"lemon.jpg"}
                description={"Android application to track your spending."}
                link={"https://github.com/srnyndrs/Lemon"}
            />
            <ProjectCard
                name={"Next Stop"}
                image={"next_stop.jpg"}
                description={"Android application to providing real-time public transport info for Budapest."}
                link={"https://github.com/srnyndrs/next-stop"}
            />
            <ProjectCard 
                name={"JobFinder"}
                image={"job_finder.jpg"}
                description={"Full-stack web application to simulate job searching."}
                link={"https://github.com/srnyndrs/JobFinder"}
            />
            <ProjectCard
                name={"iWeather"}
                image={"iWeather.jpg"}
                description={"iOS application to get weather informations."}
                link={"https://github.com/srnyndrs/iWeather"}
            />
            <ProjectCard
                name={"Online Library"}
                image={"konyvesch.jpg"}
                description={"Server-side webpage to implement book lending from an imaginary library."}
                link={"https://github.com/srnyndrs/OnlineLibrary"}
            />
            <ProjectCard
                name={"SearchHub"}
                image={"search_hub.jpg"}
                description={"Android application to search github repositories."}
                link={"https://github.com/srnyndrs/SearchHub"}
            />
        </div>
    </div>
  );
}

export default Projects;