import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditProjectArray from '../adminComponents/EditProjectArrary';
import EditSingleProject from '../adminComponents/EditSingleProject';
import ProjectForm from '../adminComponents/ProjectForm';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/projectForm"
        component={() => <ProjectForm user={user} />}
      />
      <Route
        exact
        path="/editProjectArray"
        component={EditProjectArray}
      />
      <Route
        exact
        path="/editSingleProject"
        component={EditSingleProject}
      />
    </Switch>
  );
}
AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
