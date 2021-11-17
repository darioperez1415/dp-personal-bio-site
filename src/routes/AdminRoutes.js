import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Projects from '../adminComponents/Projects';
import ProjectForm from '../adminComponents/ProjectForm';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/projectForm"
        component={() => <ProjectForm user={user} />}
      />
      <Route exact path="/editProjectForm" component={Projects} />
    </Switch>
  );
}
AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
