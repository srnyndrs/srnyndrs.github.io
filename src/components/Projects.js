import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div class="flex w-full p-4 md:p-0 gap-x-0 md:gap-x-8 gap-y-12 justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
            <ProjectCard 
                name={"JobFinder"}
                image={"job_finder.jpg"}
                description={"Full-stack web application to simulate job searching."}
                link={"https://github.com/srnyndrs/JobFinder"}
            />
            <ProjectCard
                name={"Popcorn Time"}
                image={"popcorn_time.jpg"}
                description={"Android application to search movies, tv series and actors."}
                inProgress={true}
            />
            <ProjectCard
                name={"iWeather"}
                image={"iWeather.jpg"}
                description={"iOS application to get weather informations."}
                link={"https://github.com/srnyndrs/iWeather"}
            />
            <ProjectCard
                name={"Image Finder"}
                image={"image_finder.jpg"}
                description={"Android application to search pictures in Flickr."}
                link={"https://github.com/srnyndrs/ImageFinder"}
            />
            <ProjectCard
                name={"Online Library"}
                image={"konyvesch.jpg"}
                description={"Server-side webpage to implement book lending from an imaginary library."}
                link={"https://github.com/srnyndrs/OnlineLibrary"}
            />
            <ProjectCard
                name={"Portal Peeker"}
                image={"portal_peeker.jpg"}
                description={"Android application to search characters from the Rick and Morty TV Series using caching and paging."}
                link={"https://github.com/srnyndrs/PortalPeeker"}
            />
            <ProjectCard
                name={"Smart Tools"}
                image={"smart_tools.jpg"}
                description={"Android application as a thesis project, that performs various measurement tasks using the available sensors in the devices."}
            />
        </div>
    </div>
  );
}

export default Projects;