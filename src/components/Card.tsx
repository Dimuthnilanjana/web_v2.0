// Card.tsx

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/utils/interfaces";
import { TextReveal } from "./ui";

const Card = ({ title, image, liveUrl, description }: Project) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      layout
      className="relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-secondary/30 md:px-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
        <a href={liveUrl} className="bg-white size-8 rounded-full text-black grid place-items-center">
          <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="md:py-8 relative">
        <motion.div animate={{ y: hover ? -10 : 0 }} className="flex justify-between items-center max-md:hidden">
          <p className="text-sm md:text-xl font-semibold max-md:opacity-0">{title}</p>
          <a href={liveUrl} className="flex gap-2 items-center justify-center max-md:px-4">
            <TextReveal className="max-md:text-sm">Visit</TextReveal>
            <span className="bg-black text-white/80 rounded-full p-1">
              <ArrowUpRight className="size-4 md:size-6" />
            </span>
          </a>
        </motion.div>
        <div className="overflow-hidden max-md:hidden">
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: hover ? -10 : 0, opacity: hover ? 1 : 0 }}
            className="absolute text-white/50"
          >
            {description}
          </motion.p>
        </div>
      </div>
      <Image
        src={image.url}
        width={500}
        height={500}
        alt={title}
        className="object-cover h-full w-full object-center rounded-xl md:rounded-t-3xl"
      />
    </motion.div>
  );
};

export default Card;
