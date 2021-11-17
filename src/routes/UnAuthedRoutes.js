import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import ContactMe from '../views/ContactMe';
import TechView from '../views/TechUsed';
import ViewProjects from '../views/ViewProjects';
import AboutMe from '../views/AboutMe';

// Home Page should have a profile pic
// Navigation should have access to all routes
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/contact" component={ContactMe} />
      <Route exact path="/projects" component={ViewProjects} />
      <Route exact path="/tech" component={TechView} />
    </Switch>
  );
}
