import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/data/projectData';
import ProjectCard from '../components/Projects';

export default function ProjectView() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((projectArray) => {
      if (isMounted) setProjects(projectArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="flex-container">
      {projects.map((project) => (
        <ProjectCard key={project.firebaseKey} project={project} />
      ))}
    </div>
  );
}
