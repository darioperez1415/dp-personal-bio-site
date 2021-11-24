import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createProject, updateProject } from '../api/data/projectData';

const initialState = {
  name: '',
  description: '',
  imageUrl: '',
  gitHubURL: '',
  projectImage: '',
  projectLink: '',
};
export default function ProjectForm({ projectObj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();
  useEffect(() => {
    if (projectObj.firebaseKey) {
      setFormInput({
        name: projectObj.name,
        firebaseKey: projectObj.firebaseKey,
        description: projectObj.description,
        projectImage: projectObj.projectImage,
        gitHubURL: projectObj.gitHubURL,
        projectLink: projectObj.projectLink,
      });
    }
  }, [projectObj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectObj.firebaseKey) {
      updateProject(formInput).then(() => {
        history.push('/editProjectArray');
      });
    } else {
      createProject({ ...formInput }).then(() => {
        resetForm();
        history.push('/editProjectArray');
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Project Name"
            value={formInput.name || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectImage">Project Image</label>
          <input
            type="text"
            name="projectImage"
            className="form-control"
            id="projectImage"
            placeholder="Project Image"
            value={formInput.projectImage || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectLink">Project App Url</label>
          <input
            type="text"
            name="projectLink"
            className="form-control"
            id="projectLink"
            placeholder="Project App Url"
            value={formInput.projectLink || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            placeholder="Project Description"
            value={formInput.description || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gitHubURL">Github Url</label>
          <input
            type="text"
            name="gitHubURL"
            className="form-control"
            id="gitHubURL"
            placeholder="Github Url"
            value={formInput.gitHubURL || ''}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
ProjectForm.propTypes = {
  projectObj: PropTypes.shape({}),
};
ProjectForm.defaultProps = { projectObj: {} };
