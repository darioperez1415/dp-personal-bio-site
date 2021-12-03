import React from 'react';
import PropTypes from 'prop-types';
import { signOutUser, signInUser } from '../api/auth';
import '../styles/globals/navBar.scss';

export default function Navigation({ user }) {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="leftSidelinks">
          <a href="/">Dario Perez</a>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightSideLinks">
          <a href="/about">About Me</a>
          <a href="/projects">Projects</a>
          <a href="/tech">Technology </a>
          <a href="/contact">Contact Me</a>
        </div>
      </div>
      {user?.isAdmin ? (
        <button onClick={signOutUser} type="button" className="btn btn-primary">
          SignOut
        </button>
      ) : (
        <button onClick={signInUser} type="button" className="btn btn-primary visually-hidden">
          SignIn
        </button>
      )}
    </div>
  );
}
Navigation.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = {
  user: null,
};
