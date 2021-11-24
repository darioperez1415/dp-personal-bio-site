import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={project.projectImage}
          className="card-img-top"
          alt="projectImage"
        />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.projectLink} className="btn btn-secondary text-dark">
            Live Site
          </a>
          <a href={project.gitHubURL} className="btn btn-secondary text-dark">
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    gitHubURL: PropTypes.string,
    projectLink: PropTypes.string,
    projectImage: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
