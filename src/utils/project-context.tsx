"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { Project } from "./interfaces";

interface ProjectContextProps {
  projects: Project[];
  appliedFilter: string;
  filteredProjects: Project[];
  sort: boolean;
  setAppliedFilter: Dispatch<SetStateAction<string>>;
  setFilteredProjects: Dispatch<SetStateAction<Project[]>>;
  setSort: Dispatch<SetStateAction<boolean>>;
  singleProject: Project | null;
  setSingleProject: Dispatch<SetStateAction<Project | null>>;
}

const ProjectsContext = createContext<ProjectContextProps>({
  projects: [] as Project[],
  appliedFilter: "all",
  filteredProjects: [] as Project[],
  sort: false,
  setAppliedFilter: () => {},
  setFilteredProjects: () => {},
  setSort: () => {},
  singleProject: null,
  setSingleProject: () => {},
});

const ProjectsProvider = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Project[];
}) => {
  const [projects, setProjects] = useState(data);
  const [appliedFilter, setAppliedFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [sort, setSort] = useState(false);
  const [singleProject, setSingleProject] = useState<Project | null>(null);

  const applyFilters = useCallback(
    (data: Project[], filterValues: string) => {
      if (filterValues === "all") return data;

      return data.filter((project) =>
        project.techStack.some((tech) => filterValues === tech.trim())
      );
    },
    []
  );

  useEffect(() => {
    const filtered = applyFilters(projects, appliedFilter);
    setFilteredProjects(filtered);
  }, [appliedFilter, projects, applyFilters]);

  useEffect(() => {
    if (sort) {
      const sorted = projects.slice().sort((a, b) => a.sequence - b.sequence);
      setFilteredProjects(sorted);
      setProjects(sorted);
    }
  }, [sort, projects]);

  const value = {
    projects,
    appliedFilter,
    filteredProjects,
    sort,
    setAppliedFilter,
    setFilteredProjects,
    setSort,
    singleProject,
    setSingleProject,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};

export { ProjectsProvider, useProjects };
