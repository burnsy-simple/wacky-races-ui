import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import RacesPage from './components/race/RacesPage';
import RaceDetailPage from './components/race/RaceDetailPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RacesPage} />
    <Route path="races" component={RacesPage} />
    <Route path="race/:id" component={RaceDetailPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
