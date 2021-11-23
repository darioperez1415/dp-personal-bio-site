import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { signOutUser, signInUser } from '../api/auth';

export default function Navigation({ user }) {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Dario Perez</NavLink>
        </NavItem>
        <div>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </div>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tech">Technology</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact Me</NavLink>
        </NavItem>
        {user ? (
          <button
            onClick={signOutUser}
            type="button"
            className="btn btn-primary"
          >
            SignOut
          </button>
        ) : (
          <button
            onClick={signInUser}
            type="button"
            className="btn btn-primary"
          >
            SignIn
          </button>
        )}
      </Nav>
      <hr />
    </div>
  );
}
Navigation.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = {
  user: null,
};
