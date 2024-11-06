// components/nav.tsx

import Link from "next/link";
import { motion } from "framer-motion";
import { perspective, slideIn } from "@/utils/anim";
import { TextReveal } from "./ui";
import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface NavProps {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  social: { platform: string; _id: string; url: string }[];
}

const Nav = ({ setIsActive, social }: NavProps) => {
  const MotionLink = motion(Link);

  return (
    <div className="flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]">
      {/* Navigation Links */}
      <div className="flex gap-2 flex-col">
        {navLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className="linkContainer"
              onClick={() => setIsActive(false)}
            >
              <Link href={href} className="flex flex-wrap overflow-hidden">
                <motion.div
                  variants={perspective}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  whileHover="whileHover"
                  whileTap="whileHover"
                  exit="exit"
                  className="text-5xl text-background flex items-center justify-between"
                >
                  <motion.span
                    variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
                  >
                    <ArrowRight />
                  </motion.span>
                  <motion.span
                    variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
                  >
                    {title}
                  </motion.span>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Download CV Button */}
      <div className="mt-8">
        <a
          href="/path/to/your/cv.pdf"  // Replace with your actual CV path
          download
          className="w-full h-14 grid place-items-center bg-black text-white rounded-3xl"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }} // Hover effect
            className="w-full h-full grid place-items-center rounded-3xl text-sm"
          >
            <TextReveal>Download CV</TextReveal>
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Nav;

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];
