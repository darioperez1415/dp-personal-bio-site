import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import { updateSingleProject } from '../api/data/projectData';

export default function EditProject() {
  const [updateProject, setEditProject] = useState({});
  const { fbk } = useParams();

  useEffect(() => {
    updateSingleProject(fbk).then(setEditProject);
  }, []);
  return (
    <div>
      <ProjectForm projectObj={updateProject} />
    </div>
  );
}
