import React, { createContext, useContext, useEffect, useState } from "react";
import ServerCommunicator from "./ServerCommunicator.js";
import Project from "../dataTransferModels/Project";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const rawProjects = await ServerCommunicator.fetchProjects();
        const deserializedProjects = rawProjects.map((projectData) => new Project(projectData));
        setProjectsInfo(deserializedProjects);
      } catch (error) {
        setError(error);
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projectsInfo, loading, error }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);