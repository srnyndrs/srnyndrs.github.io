import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div class="flex w-full p-4 md:p-0 gap-x-0 md:gap-x-8 gap-y-12 justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
            <ProjectCard
                name={"Popcorn Time"}
                image={"popcorn_time.jpg"}
                description={"Android application to search movies, tv series and related people."}
                inProgress={true}
                link={"https://github.com/srnyndrs/PopcornTime"}
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
            <ProjectCard
                name={"Hydration App"}
                image={"hydration.jpg"}
                description={"Android applicaton to track the daily liquid consume."}
                link={"https://github.com/srnyndrs/Hydration-App"}
            />
        </div>
    </div>
  );
}

export default Projects;