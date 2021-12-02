import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals/projectCards.scss';

export default function ProjectCard({ project }) {
  return (
    <div className="container">
      <div className="card">
        <img
          src={project.projectImage}
          className="card-img-top"
          alt="projectImage"
        />
        <div className="card-body">
          <h3 className="card-title">{project.name}</h3>
          <p className="card-text">{project.description}</p>
          <a href={project.projectLink} className="btn btn-secondary text-dark">
            Live Site
          </a>
          <a href={project.gitHubURL} className="btn btn-info">
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
