import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import { updateSingleProject } from '../api/data/projectData';

export default function EditProject() {
  const [editProject, setEditProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateSingleProject(firebaseKey).then(setEditProject);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <ProjectForm project={editProject} />
    </div>
  );
}
