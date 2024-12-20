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
    subTitle: "UI/UX Engineer",
    quote: "Hello! I'm Dimuth Nilanjana",
    description:
      "I am a software engineer specializing in developing user interfaces, and web applications.",
    title: "UI/UX Engineer",
   
    avatar: {
      url: "/shared/ai-generated-8083323_1280.jpg",
      public_id: "sample_public_id",
      _id: "sample_id",
    },
   
  };

  return (
    <motion.section className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative" id="about">
      <div>
        <h3 className="md:text-5xl text-2xl font-bold uppercase pb-8">
          <SlideIn>{about.quote}</SlideIn>
        </h3>
        <Transition>
          <p className="text-xl md:text-4xl text-foreground/50">{about.description}</p>
        </Transition>
       
        
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
    </motion.section>
  );
};

export default About;
