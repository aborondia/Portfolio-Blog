import React, { createContext, useContext, useEffect, useState } from "react";
import Underscore from "underscore";
import ServerCommunicator from "./ServerCommunicator.js";
import Project from "../dataTransferModels/Project";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [errorProjects, setErrorProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingProjects(true);
      setErrorProjects(null);

      try {
        const rawProjects = await ServerCommunicator.fetchProjects();
        let deserializedProjects = rawProjects
          .sort(function (a, b) {
            return a.orderIndex - b.orderIndex;
          })
          .map((projectData) => new Project(projectData));
        deserializedProjects = Underscore.where(deserializedProjects, {
          displayProject: true,
        });
        setProjectsInfo(deserializedProjects);
      } catch (error) {
        setErrorProjects(error);
        console.error("Error fetching projects:", error);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{ projectsInfo, loadingProjects, errorProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
