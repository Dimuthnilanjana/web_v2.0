// Projects.tsx

"use client";

import { ProjectsProvider } from "@/utils/project-context";
import { SectionHeading, SlideIn } from "./ui";
import Filters from "./filters";
import ProjectContainer from "./ProjectContainer";

// Define hardcoded projects
const hardcodedProjects = [
  {
    _id: "1",
    liveurl: "#",
    githuburl: "#",
    title: "Project 12",
    sequence: 12,
    image: {
      public_id: "1706285416017-wra7swm",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285416017-wra7swm",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techStack: ["Reactjs", "Nextjs", "Mern", "CSS"],
    enabled: true,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <ProjectsProvider data={hardcodedProjects}>
      <section className="md:p-8 p-4 relative" id="projects">
        <SectionHeading className="md:pl-16">
          <SlideIn className="text-white/40">Selected</SlideIn>
          <br />
          <SlideIn>works</SlideIn>
        </SectionHeading>
        <Filters />
        <ProjectContainer />
      </section>
    </ProjectsProvider>
  );
};

export default Projects;
