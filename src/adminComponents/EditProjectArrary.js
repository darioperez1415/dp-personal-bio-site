import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/data/projectData';
import AdminProjectCard from './ProjectCard';

export default function EditProjectView() {
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
    <div>
      <>
        {projects.map((project) => (
          <AdminProjectCard
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
          />
        ))}
      </>
    </div>
  );
}
