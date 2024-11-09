"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { SectionHeading, SlideIn, Transition } from "./ui";

export const Clients = () => {
  return (
    <motion.section className="relative">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading>
          <SlideIn className="text-white/40">What I've</SlideIn>{" "}
          <br />
          <SlideIn>Achieved.</SlideIn>
        </SectionHeading>

        {/* Stats Section with Responsive Font Sizes and CountUp Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pt-16 text-center">
          <Transition>
            <div className="font-bold text-white">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <CountUp 
                  end={5} 
                  duration={2} 
                  suffix="+" 
                  startOnMount 
                  enableScrollSpy 
                  scrollSpyDelay={300} 
                />
              </div>
              <p className="text-sm font-medium text-white/70 mt-1">
                Years of Experience
              </p>
            </div>
          </Transition>
          <Transition>
            <div className="font-bold text-white">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <CountUp 
                  end={100} 
                  duration={2.5} 
                  suffix="+" 
                  startOnMount 
                  enableScrollSpy 
                  scrollSpyDelay={300} 
                />
              </div>
              <p className="text-sm font-medium text-white/70 mt-1">
                Projects Completed
              </p>
            </div>
          </Transition>
          <Transition>
            <div className="font-bold text-white">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <CountUp 
                  end={560} 
                  duration={3} 
                  suffix="+" 
                  startOnMount 
                  enableScrollSpy 
                  scrollSpyDelay={300} 
                />
              </div>
              <p className="text-sm font-medium text-white/70 mt-1">
                Global Clients
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </motion.section>
  );
};
