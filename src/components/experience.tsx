"use client";

import { Timeline } from "@/utils/interfaces";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading, PerspectiveText, SlideIn, Transition } from "./ui";

const Experience = () => {
  // Hardcoded timeline data
  const experienceData: Timeline[] = [
    {
      _id: "1",
      company_name: "Epic Lanka Private Limited",
      summary:
        "Contributed to the development of a cloud-based SaaS platform for managing IT infrastructure.",
      sequence: 4,
      startDate: "JULY . 2024",
      endDate: "PRESENT",
      jobTitle: "UI/UX Engineer",
      jobLocation: "Colombo . Sri Lanka",
      bulletPoints: [
        "Developed microservices using Node.js and deployed them using Docker containers.",
        "Implemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
        "Integrated with cloud providers such as AWS and Azure to manage infrastructure resources.",
        "Designed and implemented RESTful APIs for various platform features.",
        "Collaborated with DevOps engineers to automate deployment and testing processes.",
      ],
      forEducation: false,
      enabled: true,
    },
    // Add additional hardcoded entries here as needed
  ];

  // Filter the data for experience
  const experience = experienceData
    .filter((line) => !line.forEducation && line.enabled === true)
    .sort((a, b) => a.sequence - b.sequence);

  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative pb-20">
      <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
      <SectionHeading className="pl-4 md:px-12 py-20">
        <SlideIn className="text-white/40">Experience</SlideIn>
        <br />
        <SlideIn>History</SlideIn>
      </SectionHeading>
      <div>
        {experience.map((exp, index) => (
          <Transition
            key={exp._id}
            className="py-4 md:py-8 border-b border-white/10 hover:bg-white/5 px-2 md:px-12"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex items-center justify-between md:gap-8">
              <span className="max-md:hidden">0{index + 1}</span>
              <div className="md:text-5xl text-xl md:font-semibold flex-1">
                <PerspectiveText hover={hover === index}>
                  {exp.jobTitle}
                </PerspectiveText>
              </div>
              <div className="max-md:text-sm max-md:flex flex-col text-foreground/50">
                <span className="italic">{exp.startDate}</span>
                <span className="max-md:hidden">{" - "}</span>
                <span className="italic">{exp.endDate}</span>
              </div>
            </div>
            <div className="md:pl-12 py-2 text-foreground/50 max-md:text-sm flex items-center justify-between">
              <span>{exp.company_name}</span>
              <span>{exp.jobLocation}</span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: hover === index ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="text-foreground/60 py-2">{exp.summary}</p>
              <ul className="list-disc list-inside">
                {exp.bulletPoints.map((point, index) => (
                  <li key={index} className="text-foreground/80 max-md:text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Experience;
