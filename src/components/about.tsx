"use client";

import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";

interface AboutType {
  name: string;
  subTitle: string;
  quote: string;
  description: string;
  title: string;
  avatar: {
    url: string;
    public_id: string;
    _id: string;
  };
}

import { motion } from "framer-motion";
import { SlideIn, Transition } from "./ui";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Static About Data
  const about: AboutType = {
    name: "John Doe",
    subTitle: "Full Stack Developer",
    quote: "Hello! I'm John Doe",
    description:
      "I am a software developer specializing in creating 3D visuals, user interfaces, and web applications.",
    title: "Software Developer",
    avatar: {
      url: "/shared/ai-generated-8083323_1280.jpg",
      public_id: "sample_public_id",
      _id: "sample_id",
    },
  };

  return (
    <section
      className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative"
      id="about"
    >
      <div>
        <h3 className="md:text-5xl text-2xl font-bold uppercase pb-8">
          <SlideIn>{about.quote}</SlideIn>
        </h3>
        <Transition>
          <p className="text-xl md:text-4xl text-foreground/50">
            {about.description}
          </p>
        </Transition>

        {/* New descriptive section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h4 className="text-2xl font-bold mb-4">About Me</h4>
          <p className="text-lg text-foreground/70">
            As a software developer, I'm passionate about creating innovative
            solutions that solve real-world problems. With a strong background in
            both frontend and backend development, I bring a well-rounded skill
            set to every project I work on.
          </p>
          <p className="text-lg text-foreground/70 mt-4">
            In my free time, I enjoy exploring the latest technologies and
            experimenting with new ideas. I'm always eager to learn and grow,
            and I'm excited to collaborate with like-minded individuals who
            share my passion for technology and design.
          </p>
        </motion.div>
      </div>
      <div className="relative">
        <Image
          src={about.avatar.url}
          width={400}
          height={400}
          alt={about.name}
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default About;