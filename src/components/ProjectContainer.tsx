// ProjectContainer.tsx

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { TextReveal } from "./ui";
import { useProjects } from "@/utils/project-context";
import Card from "./Card";

const ProjectContainer = () => {
  const { filteredProjects } = useProjects();
  const [showMore, setShowMore] = useState(false);

  const numProjectToShow = 8;

  return (
    <AnimatePresence>
      <motion.div layout className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3">
        {filteredProjects
          .slice(0, showMore ? filteredProjects.length : numProjectToShow)
          .map((project) =>
            project.enabled ? (
              <Card key={project.sequence} {...project} />
            ) : null
          )}
      </motion.div>
      <div className="grid place-items-center py-8">
        {filteredProjects.length > numProjectToShow && (
          <Button onClick={() => setShowMore(!showMore)}>
            <TextReveal>{showMore ? "Show less" : "Show more"}</TextReveal>
          </Button>
        )}
      </div>
    </AnimatePresence>
  );
};

export default ProjectContainer;
