// src/data/portfolioData.ts

export const hardcodedData = {
  about: {
    title: "About Me",
    description: "Passionate about creating impactful digital experiences...",
  },
 
  services: [
    {
      _id: "service1",
      name: "UI/UX Design",
      charge: "$500",
      image: {
        url: "/images/service1.png",
      },
      desc: "Crafting user-centered designs...",
    },
  ],
  skills: [
    { _id: "skill1", name: "React", sequence: 1, enabled: true },
    { _id: "skill2", name: "Next.js", sequence: 2, enabled: true },
    { _id: "skill3", name: "MERN", sequence: 3, enabled: true },
    { _id: "skill4", name: "CSS", sequence: 4, enabled: true },
  ],
  projects: [
    {
      liveUrl: "#",
      githubUrl: "#",
      title: "Project 12",
      sequence: 12,
      image: {
        url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285416017-wra7swm",
      },
      description: "Lorem ipsum dolor sit amet...",
      techStack: ["React", "Next.js", "MERN", "CSS"],
      enabled: true,
    },
  ],


  email: "contact@portfolio.com",
};
