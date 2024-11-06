// Home.tsx

import { services } from "@/data/services";
import { skills } from "@/data/skills";
import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";

import {
  HoverImageLink,
  ParallaxText,
  SectionHeading,
  SlideIn,
  TextReveal,
  Transition,
} from "@/components/ui";

import Experience from "@/components/experience";
import { ContactUs } from "@/components/contact-us";
import Link from "next/link";
import { Hero } from "@/components/hero";

// Define the hardcoded data for other sections
const hardcodedData = {
  about: {
    title: "About Me",
    description: "Passionate about creating impactful digital experiences...",
  },
  testimonials: [
    {
      _id: "1",
      name: "John Doe",
      feedback: "Great experience working with this team!",
    },
    // Add more testimonials as needed
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
    // Add more projects as needed
  ],
  social_handles: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    // Add other social handles as needed
  },
  timeline: [
    {
      _id: "timeline1",
      title: "Started Freelancing",
      date: "2021",
    },
    // Add more timeline entries as needed
  ],
  email: "contact@portfolio.com",
};

export default function Home() {
  const {
    about,
    testimonials,
    projects,
    social_handles,
    timeline,
    email,
  } = hardcodedData;

  return (
    <main className="relative">
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold">ThePortfolio</TextReveal>
        </Link>
      </Transition>
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Experience timeline={timeline} />
      {/* ===SKILLS SECTION=== */}
      <section id="skills">
        <ParallaxText baseVelocity={-5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
      </section>
      {/* ===SERVICES SECTION=== */}
      <section className="px-2 py-20 relative" id="services">
        <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
        <SectionHeading className="md:pl-16 overflow-hidden">
          <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
          <SlideIn>I can help you</SlideIn>
        </SectionHeading>
        <div className="mx-auto pt-10">
          {services.map((service) => (
            <Transition key={service._id}>
              <HoverImageLink
                heading={service.name}
                href=""
                price={service.charge}
                imgSrc={service.image.url}
                subheading={service.desc}
              />
            </Transition>
          ))}
        </div>
        <Transition className="flex items-center py-10 md:hidden">
          <div className="p-4 rounded-full border border-white/50">
            <span>Discuss the project</span>
          </div>
        </Transition>
      </section>
      {/* ===PROJECTS SECTION=== */}
      <Projects data={projects} />
      {/* ===CONTACT US=== */}
      <div
        className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs email={email} about={about} social_handle={social_handles} />
      </div>
    </main>
  );
}
