import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/data/projectData';
import AdminProjectCard from './ProjectCard';
// import { useParams } from 'react-router-dom';

export default function EditProjectView() {
  const [projects, setProjects] = useState([]);
  // const { firebaseKey } = useParams();
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
