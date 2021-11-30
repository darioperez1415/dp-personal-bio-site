import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/globals/projectCards.scss';
import { deleteProject } from '../api/data/projectData';

export default function AdminProjectCard({ project, setProjects }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then((projectArray) => setProjects(projectArray));
    }
  };

  return (
    <div className="flex-container" style={{ width: '18rem' }}>
      <div className="card">
        <img
          src={project.projectImage}
          className="card-img-top"
          alt="projectImage"
          style={{ width: '18rem' }}
        />
        <div className="card-body">
          <h3 className="card-title">{project.name}</h3>
          <p className="card-text">{project.description}</p>
          <a href={project.projectLink} className="btn btn-secondary text-dark">
            Live Site
          </a>
          <a href={project.gitHubURL} className="btn btn-secondary text-dark">
            Repo
          </a>
          <button
            type="button"
            onClick={() => handleClick('delete')}
            className="btn btn-danger"
          >
            DELETE
          </button>
          <Link
            to={`/editSingleProject/${project.firebaseKey}`}
            className="btn btn-info"
          >
            UPDATE
          </Link>
        </div>
      </div>
    </div>
  );
}

AdminProjectCard.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    gitHubURL: PropTypes.string,
    projectLink: PropTypes.string,
    projectImage: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
};
